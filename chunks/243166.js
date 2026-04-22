n.d(t, { A: () => m });
var i = n(627968);
n(64700);
var l = n(503698),
    s = n.n(l),
    a = n(990078),
    r = n(261958),
    o = n(444570),
    d = n(939249),
    c = n(183555),
    u = n(612630),
    h = n(518477),
    A = n(985018),
    _ = n(918613);
function m(e) {
    let { userId: t, isVisible: n, onOpenProfile: l } = e,
        { note: m } = (0, u.A)(t),
        g = null != m && "" !== m,
        p = g ? r.u : o.i,
        f = g ? A.intl.string(A.t["gs+qcM"]) : A.intl.string(A.t["1ZZtts"]),
        E = g ? m : A.intl.string(A.t["1ZZtts"]),
        { trackUserProfileAction: x } = (0, c.NJ)();
    return (0, i.jsx)(a.m, {
        asContainer: !0,
        text: E,
        children: (0, i.jsx)(d.D, {
            "aria-label": f,
            onClick: () => {
                x({ action: "PRESS_ADD_NOTE" }), l?.({ tabSection: h.RP.USER_INFO, scrollTarget: h.bk.NOTE });
            },
            className: s()(_.x, n && _.R),
            children: (0, i.jsx)(p, { size: "xs", color: "currentColor" }),
        }),
    });
}
