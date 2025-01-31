n.d(t, { Z: () => p });
var i = n(232567),
    r = n(147913),
    a = n(592125),
    s = n(944486),
    o = n(594174),
    l = n(894257),
    u = n(981631);
function c(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
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
    let n = s.Z.getChannelId(),
        i = a.Z.getDMFromUserId(l.I);
    if (!t.hasUrgentMessages() || i === n) return _({ channelId: n });
    d || ((d = !0), e());
}
function _(e) {
    let { channelId: t } = e,
        n = o.default.getCurrentUser(),
        r = t === a.Z.getDMFromUserId(l.I);
    null != n && n.hasUrgentMessages() && r && ((d = !1), i.mB(u.xW$.HAS_UNREAD_URGENT_MESSAGES, !1));
}
class p extends r.Z {
    constructor(e) {
        super(),
            c(this, 'handleShowUrgentMessageAlert', void 0),
            c(this, 'actions', void 0),
            (this.handleShowUrgentMessageAlert = e),
            (this.actions = {
                POST_CONNECTION_OPEN: () => f(this.handleShowUrgentMessageAlert),
                MESSAGE_CREATE: () => f(this.handleShowUrgentMessageAlert),
                CHANNEL_SELECT: _
            });
    }
}
