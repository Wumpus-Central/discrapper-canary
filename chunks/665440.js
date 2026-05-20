"use strict";
n.d(t, { A: () => m });
var i = n(439372),
    r = n(734057),
    s = n(309010),
    a = n(557279),
    o = n(617641),
    l = n(627968);
n(64700);
var u = n(192308),
    c = n(892491),
    d = n(544231),
    _ = n(665909);
function f(e) {
    let { channelId: t, warningId: i, senderId: r, warningType: s } = e;
    (0, o.wv)({ location: "takeover-modal" }) &&
        (0, u.openModalLazy)(
            async () => {
                let { default: e } = await Promise.all([
                    n.e("8516"),
                    n.e("29389"),
                    n.e("25028"),
                    n.e("93103"),
                    n.e("88941"),
                    n.e("46248"),
                    n.e("52229"),
                    n.e("38056"),
                    n.e("34546"),
                    n.e("60816"),
                    n.e("20577"),
                    n.e("6627"),
                    n.e("43549"),
                    n.e("70940"),
                    n.e("2033"),
                    n.e("82911"),
                    n.e("40817"),
                ]).then(n.bind(n, 511144));
                return (n) => (0, l.jsx)(e, { channelId: t, warningId: i, senderId: r, warningType: s, modalProps: n });
            },
            {
                backdropStyle: c.F.BLUR,
                onCloseCallback: () => {
                    (0, d.xi)(t, [i]),
                        (0, _._$)({
                            channelId: t,
                            senderId: r,
                            warningId: i,
                            warningType: s,
                            cta: _.Wm.USER_TAKEOVER_MODAL_DISMISS,
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
    return null != i && (f({ warningId: i.id, warningType: i.type, senderId: n.getRecipientId(), channelId: t }), !0);
}
function p(e) {
    let { channels: t } = e;
    if (!(0, o.wv)({ location: "channel_updates" }) || !(0, a.gz)()) return !1;
    let n = s.A.getCurrentlySelectedChannelId();
    if (null == n) return !1;
    let i = t.find((e) => e.id === n);
    if (null == i) return !1;
    let r = (0, a.Di)(i.id);
    return (
        !!(null != r && i.isDM()) &&
        (f({ warningId: r.id, warningType: r.type, senderId: i.getRecipientId(), channelId: i.id }), !0)
    );
}
class E extends i.A {
    actions = { CHANNEL_SELECT: h, CHANNEL_UPDATES: p };
}
let m = new E();
