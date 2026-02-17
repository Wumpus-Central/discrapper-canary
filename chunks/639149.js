"use strict";
n.d(t, { A: () => l }), n(801541);
var r = n(627968);
n(64700);
var i = n(889137),
    a = n(732955),
    s = n(166532),
    o = n(985018);
function l(e) {
    let { step: t, isGift: n } = e,
        l = (0, i.YW)(t)
            .with(s.pn.REVIEW, () => (n ? o.intl.string(o.t.wKaVLC) : o.intl.string(o.t.Whxhpm)))
            .with(s.pn.ADD_PAYMENT_STEPS, () => o.intl.string(o.t.QiGOak))
            .with(s.pn.GIFT_CUSTOMIZATION, () => o.intl.string(o.t["JCFN/y"]))
            .with(s.pn.AWAITING_PURCHASE_TOKEN_AUTH, () => o.intl.string(o.t.lDbi6H))
            .with(s.pn.CONFIRM, () => "")
            .otherwise(() => null);
    return null == l ? null : (0, r.jsx)(a.rQ0, { title: l, titleTextVariant: "heading-lg/semibold" });
}
