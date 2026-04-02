"use strict";
n.d(t, { A: () => l }), n(801541);
var r = n(627968);
n(64700);
var i = n(889137),
    s = n(732955),
    a = n(166532),
    o = n(985018);
function l(e) {
    let { step: t } = e,
        n = (0, i.YW)(t)
            .with(a.pn.GIFT_CUSTOMIZATION, () => o.intl.string(o.t["JCFN/y"]))
            .with(a.pn.AWAITING_PURCHASE_TOKEN_AUTH, () => o.intl.string(o.t.lDbi6H))
            .with(a.pn.CONFIRM, () => "")
            .otherwise(() => null);
    return null == n ? null : (0, r.jsx)(s.rQ0, { title: n, titleTextVariant: "heading-lg/semibold" });
}
