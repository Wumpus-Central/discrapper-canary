n.d(t, { A: () => d });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(397927),
    l = n(485878),
    c = n(985018),
    u = n(254761);
function d(e) {
    let { className: t } = e,
        { goBack: n } = (0, l.uM)(),
        a = i.useCallback(() => {
            n();
        }, [n]);
    return (0, r.jsx)(o.DUT, {
        onClick: a,
        className: s()(u.v, t),
        "aria-label": c.intl.string(c.t.ybUZql),
        children: (0, r.jsx)(o.Zge, {
            size: "sm",
            color: o.LU0.colors.INTERACTIVE_TEXT_ACTIVE,
        }),
    });
}
