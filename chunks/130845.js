n.d(t, { default: () => u });
var i = n(477900);
n(582128);
var a = n(189213),
    l = n(28863),
    r = n(975571);
let d = (0, n(945810).mj)({
    kind: "user",
    name: "2026-09-manual-review-inconclusive-copy",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
n(40449);
var o = n(221858),
    s = n(792996);
function u(e) {
    let { transitionState: t, onClose: n, teenAgeRange: u } = e,
        c = d.useConfig({ location: "manual_review_decided_teen_modal" }).enabled;
    function f(e, t) {
        return (0, i.jsx)(l.Anchor, { href: r.A.getArticleURL(s.intl.string(o.default.agiNYw)), children: e }, t);
    }
    return (0, i.jsx)(a.a, {
        transitionState: t,
        onClose: n,
        title: s.intl.string(o.default.AA3xYb),
        subtitle: c
            ? s.intl.format(o.default.UIbYzl, { contentAndSettingsHook: f })
            : s.intl.format(o.default["2+f8w1"], { teenAgeRange: u ?? "13-17", contentAndSettingsHook: f }),
        actions: [{ text: s.intl.string(s.t["NX+WJN"]), onClick: n }],
    });
}
