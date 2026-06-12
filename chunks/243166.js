n.d(i, { A: () => x });
var s = n(627968);
n(64700);
var r = n(503698),
    a = n.n(r),
    c = n(990078),
    e = n(261958),
    l = n(444570),
    o = n(939249),
    d = n(183555),
    u = n(612630),
    h = n(518477),
    p = n(375708),
    k = n(918613);
function x(t) {
    let { userId: i, isVisible: n, onOpenProfile: r } = t,
        { note: x } = (0, u.A)(i),
        b = null != x && "" !== x,
        g = b ? e.u : l.i,
        C = b ? p.intl.string(p.t["gs+qcM"]) : p.intl.string(p.t["1ZZtts"]),
        N = b ? x : p.intl.string(p.t["1ZZtts"]),
        { trackUserProfileAction: _ } = (0, d.NJ)();
    return (0, s.jsx)(c.m, {
        asContainer: !0,
        text: N,
        ariaHidden: !b,
        children: (0, s.jsx)(o.D, {
            "aria-label": C,
            onClick: () => {
                _({ action: "PRESS_ADD_NOTE" }), r?.({ tabSection: h.RP.USER_INFO, scrollTarget: h.bk.NOTE });
            },
            className: a()(k.x, n && k.R),
            children: (0, s.jsx)(g, { size: "xs", color: "currentColor" }),
        }),
    });
}
