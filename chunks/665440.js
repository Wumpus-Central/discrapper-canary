"use strict";
n.d(t, { A: () => g });
var i = n(439372),
    r = n(734057),
    s = n(309010),
    a = n(557279),
    o = n(617641),
    l = n(627968);
n(64700);
var _ = n(192308),
    d = n(892491),
    u = n(544231),
    c = n(665909);
function E(e) {
    let { channelId: t, warningId: i, senderId: r, warningType: s } = e;
    (0, o.wv)({ location: "takeover-modal" }) &&
        (0, _.openModalLazy)(
            async () => {
                let { default: e } = await Promise.all([
                    n.e("77598"),
                    n.e("29389"),
                    n.e("25028"),
                    n.e("88941"),
                    n.e("55411"),
                    n.e("93103"),
                    n.e("21435"),
                    n.e("32823"),
                    n.e("52229"),
                    n.e("38056"),
                    n.e("34546"),
                    n.e("43549"),
                    n.e("20577"),
                    n.e("60816"),
                    n.e("6627"),
                    n.e("70940"),
                    n.e("2033"),
                    n.e("82911"),
                    n.e("40817"),
                ]).then(n.bind(n, 511144));
                return (n) => (0, l.jsx)(e, { channelId: t, warningId: i, senderId: r, warningType: s, modalProps: n });
            },
            {
                backdropStyle: d.F.BLUR,
                onCloseCallback: () => {
                    (0, u.xi)(t, [i]),
                        (0, c._$)({
                            channelId: t,
                            senderId: r,
                            warningId: i,
                            warningType: s,
                            cta: c.Wm.USER_TAKEOVER_MODAL_DISMISS,
                            isNudgeWarning: !1,
                        });
                },
            },
        );
}
function h(e) {
    let { channelId: t } = e;
    if (null == t || !(0, o.wv)({ location: "channel_select" }) || !(0, a.gz)()) return !1;
    let n = r.A.getChannel(t);
    if (null == n || !n.isDM()) return !1;
    let i = (0, a.Di)(t);
    return null != i && (E({ warningId: i.id, warningType: i.type, senderId: n.getRecipientId(), channelId: t }), !0);
}
function m(e) {
    let { channels: t } = e;
    if (!(0, o.wv)({ location: "channel_updates" }) || !(0, a.gz)()) return !1;
    let n = s.A.getCurrentlySelectedChannelId();
    if (null == n) return !1;
    let i = t.find((e) => e.id === n);
    if (null == i) return !1;
    let r = (0, a.Di)(i.id);
    return (
        !!(null != r && i.isDM()) &&
        (E({ warningId: r.id, warningType: r.type, senderId: i.getRecipientId(), channelId: i.id }), !0)
    );
}
class f extends i.A {
    actions = { CHANNEL_SELECT: h, CHANNEL_UPDATES: m };
}
let g = new f();
