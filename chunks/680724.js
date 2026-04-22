"use strict";
n.d(t, { A: () => f });
var r = n(311907),
    i = n(73153),
    s = n(652896),
    a = n(383501),
    o = n(652215);
let l = {},
    u = {},
    d = null;
function c() {
    (u = {}), (l = {});
}
class _ extends r.Ay.Store {
    initialize() {
        this.waitFor(a.A);
    }
    getPendingRequestForUser(e) {
        return u[e];
    }
}
let f = new _(i.h, {
    STREAM_WATCH: function (e) {
        let { streamKey: t } = e,
            { ownerId: n } = s.Iy(t);
        if (null == u[n]) return !1;
        delete u[n];
    },
    MESSAGE_CREATE: function (e) {
        let { channelId: t, sendMessageOptions: n, message: r, optimistic: i } = e;
        if (t !== a.A.getChannelId()) return !1;
        if (i) {
            let e = n?.activityAction?.targetUserId;
            return null != e && ((l[r.id] = e), !1);
        }
        if (null == r.nonce || r.activity?.type !== o.xL.STREAM_REQUEST) return !1;
        let s = l[r.nonce];
        if (null == s) return !1;
        delete l[r.nonce], (u = { ...u, [s]: r.id });
    },
    MESSAGE_DELETE: function (e) {
        let { id: t } = e;
        for (let [e, n] of (delete l[t], Object.entries(u))) t === n && delete u[e];
    },
    VOICE_CHANNEL_SELECT: function (e) {
        let { channelId: t, currentVoiceChannelId: n } = e;
        if (t === n) return !1;
        c();
    },
    VOICE_STATE_UPDATES: function () {
        if (a.A.getWasMoved()) {
            if (a.A.getChannelId() === d) return !1;
            (d = a.A.getChannelId()), c();
        } else {
            if (null == d) return !1;
            d = null;
        }
    },
    LOGOUT: c,
});
