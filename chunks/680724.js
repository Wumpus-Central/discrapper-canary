"use strict";
n.d(t, { A: () => A });
var i = n(17928),
    r = n(228366),
    a = n(652896),
    s = n(763827),
    l = n(652215);
let o = {},
    d = {},
    c = null,
    u = new Set();
function _() {
    (d = {}), (o = {});
}
class E extends i.Ay.Store {
    initialize() {
        this.waitFor(s.A);
    }
    getPendingRequestForUser(e) {
        return d[e];
    }
    isRequestOnCooldown(e) {
        return u.has(e);
    }
}
let A = new E(r.h, {
    STREAM_WATCH: function (e) {
        let { streamKey: t } = e,
            { ownerId: n } = a.Iy(t);
        if (null == d[n]) return !1;
        delete d[n];
    },
    STREAM_REQUEST_COOLDOWN_START: function (e) {
        let { userId: t } = e;
        if (u.has(t)) return !1;
        u.add(t);
    },
    STREAM_REQUEST_COOLDOWN_END: function (e) {
        let { userId: t } = e;
        if (!u.has(t)) return !1;
        u.delete(t);
    },
    MESSAGE_CREATE: function (e) {
        let { channelId: t, sendMessageOptions: n, message: i, optimistic: r } = e;
        if (t !== s.A.getChannelId()) return !1;
        if (r) {
            let e = n?.activityAction?.targetUserId;
            return null != e && ((o[i.id] = e), !1);
        }
        if (null == i.nonce || i.activity?.type !== l.xL.STREAM_REQUEST) return !1;
        let a = o[i.nonce];
        if (null == a) return !1;
        delete o[i.nonce], (d = { ...d, [a]: i.id });
    },
    MESSAGE_DELETE: function (e) {
        let { id: t } = e;
        for (let [e, n] of (delete o[t], Object.entries(d))) t === n && delete d[e];
    },
    VOICE_CHANNEL_SELECT: function (e) {
        let { channelId: t, currentVoiceChannelId: n } = e;
        if (t === n) return !1;
        _();
    },
    VOICE_STATE_UPDATES: function () {
        if (s.A.getWasMoved()) {
            if (s.A.getChannelId() === c) return !1;
            (c = s.A.getChannelId()), _();
        } else {
            if (null == c) return !1;
            c = null;
        }
    },
    LOGOUT: function () {
        _(), u.clear();
    },
});
