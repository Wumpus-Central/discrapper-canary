n.d(t, {
    A: () => p,
}),
    n(896048);
var r = n(439372),
    i = n(734057),
    a = n(309010),
    s = n(557279),
    o = n(617641),
    l = n(420738);

function c(e, t, n) {
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

function u(e) {
    let { channelId: t } = e;
    if (
        null == t ||
        !(0, o.wv)({
            location: "channel_select",
        }) ||
        !(0, s.gz)()
    )
        return !1;
    let n = i.A.getChannel(t);
    if (null == n || !n.isDM()) return !1;
    let r = (0, s.Di)(t);
    return (
        null != r &&
        ((0, l.U)({
            warningId: r.id,
            warningType: r.type,
            senderId: n.getRecipientId(),
            channelId: t,
        }),
        !0)
    );
}

function d(e) {
    let { channels: t } = e;
    if (
        !(0, o.wv)({
            location: "channel_updates",
        }) ||
        !(0, s.gz)()
    )
        return !1;
    let n = a.A.getCurrentlySelectedChannelId();
    if (null == n) return !1;
    let r = t.find((e) => e.id === n);
    if (null == r) return !1;
    let i = (0, s.Di)(r.id);
    return (
        !!(null != i && r.isDM()) &&
        ((0, l.U)({
            warningId: i.id,
            warningType: i.type,
            senderId: r.getRecipientId(),
            channelId: r.id,
        }),
        !0)
    );
}
class f extends r.A {
    constructor(...e) {
        super(...e),
            c(this, "actions", {
                CHANNEL_SELECT: u,
                CHANNEL_UPDATES: d,
            });
    }
}
let p = new f();
