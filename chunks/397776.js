n.d(t, { Z: () => _ }), n(47120);
var i = n(147913),
    r = n(592125),
    a = n(944486),
    s = n(116347),
    o = n(237292),
    l = n(118910);
function u(e, t, n) {
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
function c(e) {
    let { channelId: t } = e;
    if (null == t || !(0, o.mG)({ location: 'channel_select' }) || !(0, s.dg)()) return !1;
    let n = r.Z.getChannel(t);
    if (null == n || !n.isDM()) return !1;
    let i = (0, s.uu)(t);
    return (
        null != i &&
        ((0, l.a)({
            warningId: i.id,
            warningType: i.type,
            senderId: n.getRecipientId(),
            channelId: t
        }),
        !0)
    );
}
function d(e) {
    let { channels: t } = e;
    if (!(0, o.mG)({ location: 'channel_updates' }) || !(0, s.dg)()) return !1;
    let n = a.Z.getCurrentlySelectedChannelId();
    if (null == n) return !1;
    let i = t.find((e) => e.id === n);
    if (null == i) return !1;
    let r = (0, s.uu)(i.id);
    return (
        !!(null != r && i.isDM()) &&
        ((0, l.a)({
            warningId: r.id,
            warningType: r.type,
            senderId: i.getRecipientId(),
            channelId: i.id
        }),
        !0)
    );
}
class f extends i.Z {
    constructor(...e) {
        super(...e),
            u(this, 'actions', {
                CHANNEL_SELECT: c,
                CHANNEL_UPDATES: d
            });
    }
}
let _ = new f();
