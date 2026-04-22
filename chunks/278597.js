n.d(t, { A: () => p });
var l = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    r = n(939249),
    o = n(548411),
    c = n(827734),
    d = n(485878),
    u = n(985018),
    m = n(735886);
function p(e) {
    let { className: t } = e,
        { goBack: n } = (0, d.uM)(),
        a = i.useCallback(() => {
            n();
        }, [n]);
    return (0, l.jsx)(r.D, {
        onClick: a,
        className: s()(m.v, t),
        "aria-label": u.intl.string(u.t.ybUZql),
        children: (0, l.jsx)(o.Z, { size: "sm", color: c.A.colors.INTERACTIVE_TEXT_ACTIVE }),
    });
}
