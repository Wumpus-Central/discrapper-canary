var i = r(47120);
var a = r(147913),
    o = r(592125),
    s = r(944486),
    l = r(116347),
    u = r(237292),
    c = r(118910);
function d(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
function f(e) {
    let { channelId: n } = e;
    if (null == n || !(0, u.mG)({ location: 'channel_select' }) || !(0, l.dg)()) return !1;
    let r = o.Z.getChannel(n);
    if (null == r || !r.isDM()) return !1;
    let i = (0, l.uu)(n);
    return (
        null != i &&
        ((0, c.a)({
            warningId: i.id,
            warningType: i.type,
            senderId: r.getRecipientId(),
            channelId: n
        }),
        !0)
    );
}
function p(e) {
    let { channels: n } = e;
    if (!(0, u.mG)({ location: 'channel_updates' }) || !(0, l.dg)()) return !1;
    let r = s.Z.getCurrentlySelectedChannelId();
    if (null == r) return !1;
    let i = n.find((e) => e.id === r);
    if (null == i) return !1;
    let a = (0, l.uu)(i.id);
    return (
        !!(null != a && i.isDM()) &&
        ((0, c.a)({
            warningId: a.id,
            warningType: a.type,
            senderId: i.getRecipientId(),
            channelId: i.id
        }),
        !0)
    );
}
class h extends a.Z {
    constructor(...e) {
        super(...e),
            d(this, 'actions', {
                CHANNEL_SELECT: f,
                CHANNEL_UPDATES: p
            });
    }
}
n.Z = new h();
