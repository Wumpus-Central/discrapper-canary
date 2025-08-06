n.d(t, { Z: () => d });
var r = n(255367),
    i = n(73800),
    o = n(120356),
    a = n.n(o),
    s = n(481060),
    l = n(695676),
    c = n(388032),
    u = n(672425);
function d(e) {
    let { className: t } = e,
        { goBack: n } = (0, l.hH)(),
        o = i.useCallback(() => {
            n();
        }, [n]);
    return (0, r.jsx)(s.P3F, {
        onClick: o,
        className: a()(u.clickable, t),
        "aria-label": c.intl.string(c.t.ybUZqq),
        children: (0, r.jsx)(s.j9r, {
            size: "sm",
            color: s.TVs.colors.INTERACTIVE_ACTIVE,
        }),
    });
}
