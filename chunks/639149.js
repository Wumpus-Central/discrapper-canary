n.d(t, { A: () => o }), n(801541);
var l = n(627968);
n(64700);
var r = n(889137),
    i = n(20742),
    s = n(166532),
    a = n(985018);
function o(e) {
    let { step: t } = e,
        n = (0, r.YW)(t)
            .with(s.pn.GIFT_CUSTOMIZATION, () => a.intl.string(a.t["JCFN/y"]))
            .with(s.pn.AWAITING_PURCHASE_TOKEN_AUTH, () => a.intl.string(a.t.lDbi6H))
            .with(s.pn.CONFIRM, () => "")
            .otherwise(() => null);
    return null == n ? null : (0, l.jsx)(i.rQ, { title: n, titleTextVariant: "heading-lg/semibold" });
}
