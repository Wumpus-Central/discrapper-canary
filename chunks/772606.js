n.d(t, { Z: () => d });
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(481060),
    l = n(695676),
    c = n(388032),
    u = n(22145);
function d(e) {
    let { className: t } = e,
        { goBack: n } = (0, l.hH)(),
        a = i.useCallback(() => {
            n();
        }, [n]);
    return (0, r.jsx)(s.P3F, {
        onClick: a,
        className: o()(u.clickable, t),
        "aria-label": c.intl.string(c.t.ybUZql),
        children: (0, r.jsx)(s.j9r, {
            size: "sm",
            color: s.TVs.colors.INTERACTIVE_TEXT_ACTIVE,
        }),
    });
}
