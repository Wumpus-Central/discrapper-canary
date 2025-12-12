n.d(t, { Z: () => d });
var r = n(54381),
    i = n(473749),
    o = n(120356),
    a = n.n(o),
    s = n(481060),
    l = n(695676),
    c = n(388032),
    u = n(943509);
function d(e) {
    let { className: t } = e,
        { goBack: n } = (0, l.hH)(),
        o = i.useCallback(() => {
            n();
        }, [n]);
    return (0, r.jsx)(s.P3F, {
        onClick: o,
        className: a()(u.clickable, t),
        "aria-label": c.intl.string(c.t.ybUZql),
        children: (0, r.jsx)(s.j9r, {
            size: "sm",
            color: s.TVs.colors.INTERACTIVE_TEXT_ACTIVE,
        }),
    });
}
