n.d(t, { Z: () => d });
var i = n(951288),
    l = n(647438),
    r = n(120356),
    a = n.n(r),
    o = n(481060),
    s = n(695676),
    c = n(388032),
    u = n(943509);
function d(e) {
    let { className: t } = e,
        { goBack: n } = (0, s.hH)(),
        r = l.useCallback(() => {
            n();
        }, [n]);
    return (0, i.jsx)(o.P3F, {
        onClick: r,
        className: a()(u.clickable, t),
        "aria-label": c.intl.string(c.t.ybUZql),
        children: (0, i.jsx)(o.j9r, {
            size: "sm",
            color: o.TVs.colors.INTERACTIVE_ACTIVE,
        }),
    });
}
