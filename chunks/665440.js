"use strict";
n.d(t, { A: () => f });
var i = n(439372),
    r = n(734057),
    a = n(309010),
    s = n(557279),
    l = n(617641),
    o = n(627968);
n(64700);
var d = n(192308),
    c = n(892491),
    u = n(544231),
    _ = n(665909);
function E(e) {
    let { channelId: t, warningId: i, senderId: r, warningType: a } = e;
    (0, l.wv)({ location: "takeover-modal" }) &&
        (0, d.openModalLazy)(
            async () => {
                let { default: e } = await Promise.all([
                    n.e("58846"),
                    n.e("29389"),
                    n.e("25028"),
                    n.e("93103"),
                    n.e("32191"),
                    n.e("52229"),
                    n.e("43549"),
                    n.e("38056"),
                    n.e("34546"),
                    n.e("60816"),
                    n.e("20577"),
                    n.e("6627"),
                    n.e("70940"),
                    n.e("2033"),
                    n.e("82911"),
                    n.e("40817"),
                ]).then(n.bind(n, 511144));
                return (n) => (0, o.jsx)(e, { channelId: t, warningId: i, senderId: r, warningType: a, modalProps: n });
            },
            {
                backdropStyle: c.F.BLUR,
                onCloseCallback: function () {
                    (0, u.xi)(t, [i]),
                        (0, _._$)({
                            channelId: t,
                            senderId: r,
                            warningId: i,
                            warningType: a,
                            cta: _.Wm.USER_TAKEOVER_MODAL_DISMISS,
                            isNudgeWarning: !1,
                        });
                },
            },
        );
}
function A(e) {
    let { channelId: t } = e;
    if (null == t || !(0, l.wv)({ location: "channel_select" }) || !(0, s.gz)()) return !1;
    let n = r.A.getChannel(t);
    if (null == n || !n.isDM()) return !1;
    let i = (0, s.Di)(t);
    return null != i && (E({ warningId: i.id, warningType: i.type, senderId: n.getRecipientId(), channelId: t }), !0);
}
function h(e) {
    let { channels: t } = e;
    if (!(0, l.wv)({ location: "channel_updates" }) || !(0, s.gz)()) return !1;
    let n = a.Ay.getCurrentlySelectedChannelId();
    if (null == n) return !1;
    let i = t.find((e) => e.id === n);
    if (null == i) return !1;
    let r = (0, s.Di)(i.id);
    return (
        !!(null != r && i.isDM()) &&
        (E({ warningId: r.id, warningType: r.type, senderId: i.getRecipientId(), channelId: i.id }), !0)
    );
}
class I extends i.A {
    actions = { CHANNEL_SELECT: A, CHANNEL_UPDATES: h };
}
let f = new I();
