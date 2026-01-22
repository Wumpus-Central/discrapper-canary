n.d(t, {
    A: () => _,
});
var r = n(803306),
    i = n(439372),
    a = n(734057),
    s = n(309010),
    o = n(287809),
    l = n(716371),
    c = n(652215);

function u(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let d = !1;

function f(e) {
    if (__OVERLAY__) return;
    let t = o.default.getCurrentUser();
    if (null == t) return;
    let n = s.A.getChannelId(),
        r = a.A.getDMFromUserId(l.K);
    if (!t.hasUrgentMessages() || r === n)
        return p({
            channelId: n,
        });
    d || ((d = !0), e());
}

function p(e) {
    let { channelId: t } = e,
        n = o.default.getCurrentUser(),
        i = t === a.A.getDMFromUserId(l.K);
    null != n && n.hasUrgentMessages() && i && ((d = !1), r.lA(c.nhx.HAS_UNREAD_URGENT_MESSAGES, !1));
}
class _ extends i.A {
    constructor(e) {
        super(),
            u(this, "handleShowUrgentMessageAlert", void 0),
            u(this, "actions", void 0),
            (this.handleShowUrgentMessageAlert = e),
            (this.actions = {
                POST_CONNECTION_OPEN: () => f(this.handleShowUrgentMessageAlert),
                MESSAGE_CREATE: () => f(this.handleShowUrgentMessageAlert),
                CHANNEL_SELECT: p,
            });
    }
}
