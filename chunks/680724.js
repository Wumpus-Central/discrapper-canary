"use strict";
n.d(t, { A: () => f });
var i = n(17928),
    r = n(228366),
    s = n(652896),
    a = n(763827),
    o = n(652215);
let l = {},
    u = {},
    c = null,
    d = new Set();
function _() {
    (u = {}), (l = {});
}
class h extends i.Ay.Store {
    initialize() {
        this.waitFor(a.A);
    }
    getPendingRequestForUser(e) {
        return u[e];
    }
    isRequestOnCooldown(e) {
        return d.has(e);
    }
}
let f = new h(r.h, {
    STREAM_WATCH: function (e) {
        let { streamKey: t } = e,
            { ownerId: n } = s.Iy(t);
        if (null == u[n]) return !1;
        delete u[n];
    },
    STREAM_REQUEST_COOLDOWN_START: function (e) {
        let { userId: t } = e;
        if (d.has(t)) return !1;
        d.add(t);
    },
    STREAM_REQUEST_COOLDOWN_END: function (e) {
        let { userId: t } = e;
        if (!d.has(t)) return !1;
        d.delete(t);
    },
    MESSAGE_CREATE: function (e) {
        let { channelId: t, sendMessageOptions: n, message: i, optimistic: r } = e;
        if (t !== a.A.getChannelId()) return !1;
        if (r) {
            let e = n?.activityAction?.targetUserId;
            return null != e && ((l[i.id] = e), !1);
        }
        if (null == i.nonce || i.activity?.type !== o.xL.STREAM_REQUEST) return !1;
        let s = l[i.nonce];
        if (null == s) return !1;
        delete l[i.nonce], (u = { ...u, [s]: i.id });
    },
    MESSAGE_DELETE: function (e) {
        let { id: t } = e;
        for (let [e, n] of (delete l[t], Object.entries(u))) t === n && delete u[e];
    },
    VOICE_CHANNEL_SELECT: function (e) {
        let { channelId: t, currentVoiceChannelId: n } = e;
        if (t === n) return !1;
        _();
    },
    VOICE_STATE_UPDATES: function () {
        if (a.A.getWasMoved()) {
            if (a.A.getChannelId() === c) return !1;
            (c = a.A.getChannelId()), _();
        } else {
            if (null == c) return !1;
            c = null;
        }
    },
    LOGOUT: function () {
        _(), d.clear();
    },
});
