"use strict";
n.d(t, { A: () => E });
var r = n(311907),
    i = n(73153),
    a = n(652896),
    s = n(383501),
    o = n(652215);
let l = {},
    u = {},
    c = null;
function d() {
    (u = {}), (l = {});
}
function _(e) {
    let { channelId: t, currentVoiceChannelId: n } = e;
    if (t === n) return !1;
    d();
}
function f(e) {
    let { id: t } = e;
    for (let [e, n] of (delete l[t], Object.entries(u))) t === n && delete u[e];
}
function p(e) {
    let { channelId: t, sendMessageOptions: n, message: r, optimistic: i } = e;
    if (t !== s.A.getChannelId()) return !1;
    if (i) {
        let e = n?.activityAction?.targetUserId;
        return null != e && ((l[r.id] = e), !1);
    }
    if (null == r.nonce || r.activity?.type !== o.xL.STREAM_REQUEST) return !1;
    let a = l[r.nonce];
    if (null == a) return !1;
    delete l[r.nonce], (u = { ...u, [a]: r.id });
}
function h(e) {
    let { streamKey: t } = e,
        { ownerId: n } = a.Iy(t);
    if (null == u[n]) return !1;
    delete u[n];
}
function m() {
    if (s.A.getWasMoved()) {
        if (s.A.getChannelId() === c) return !1;
        (c = s.A.getChannelId()), d();
    } else {
        if (null == c) return !1;
        c = null;
    }
}
class g extends r.Ay.Store {
    initialize() {
        this.waitFor(s.A);
    }
    getPendingRequestForUser(e) {
        return u[e];
    }
}
let E = new g(i.h, {
    STREAM_WATCH: h,
    MESSAGE_CREATE: p,
    MESSAGE_DELETE: f,
    VOICE_CHANNEL_SELECT: _,
    VOICE_STATE_UPDATES: m,
    LOGOUT: d,
});
