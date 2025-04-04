n.d(t, { Z: () => _ }), n(47120);
var r = n(147913),
    i = n(592125),
    o = n(944486),
    a = n(116347),
    s = n(237292),
    l = n(118910);
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
function u(e) {
    let { channelId: t } = e;
    if (null == t || !(0, s.mG)({ location: 'channel_select' }) || !(0, a.dg)()) return !1;
    let n = i.Z.getChannel(t);
    if (null == n || !n.isDM()) return !1;
    let r = (0, a.uu)(t);
    return (
        null != r &&
        ((0, l.a)({
            warningId: r.id,
            warningType: r.type,
            senderId: n.getRecipientId(),
            channelId: t
        }),
        !0)
    );
}
function d(e) {
    let { channels: t } = e;
    if (!(0, s.mG)({ location: 'channel_updates' }) || !(0, a.dg)()) return !1;
    let n = o.Z.getCurrentlySelectedChannelId();
    if (null == n) return !1;
    let r = t.find((e) => e.id === n);
    if (null == r) return !1;
    let i = (0, a.uu)(r.id);
    return (
        !!(null != i && r.isDM()) &&
        ((0, l.a)({
            warningId: i.id,
            warningType: i.type,
            senderId: r.getRecipientId(),
            channelId: r.id
        }),
        !0)
    );
}
class f extends r.Z {
    constructor(...e) {
        super(...e),
            c(this, 'actions', {
                CHANNEL_SELECT: u,
                CHANNEL_UPDATES: d
            });
    }
}
let _ = new f();
