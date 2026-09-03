n.d(i, { A: () => x });
var s = n(477900);
n(582128);
var r = n(503698),
    a = n.n(r),
    c = n(261958),
    e = n(444570),
    l = n(866665),
    o = n(939249),
    u = n(183555),
    d = n(612630),
    h = n(518477),
    p = n(375708),
    k = n(935922);
function x(t) {
    let { userId: i, isVisible: n, onOpenProfile: r } = t,
        { note: x } = (0, d.A)(i),
        b = null != x && "" !== x,
        g = b ? c.u : e.i,
        C = b ? p.intl.string(p.t["gs+qcM"]) : p.intl.string(p.t["1ZZtts"]),
        N = b ? x : p.intl.string(p.t["1ZZtts"]),
        { trackUserProfileAction: _ } = (0, u.NJ)();
    return (0, s.jsx)(l.m, {
        asContainer: !0,
        text: N,
        ariaHidden: !b,
        children: (0, s.jsx)(o.D, {
            "aria-label": C,
            onClick: function () {
                _({ action: "PRESS_ADD_NOTE" }), r?.({ tabSection: h.RP.USER_INFO, scrollTarget: h.bk.NOTE });
            },
            className: a()(k.x, n && k.R),
            children: (0, s.jsx)(g, { size: "xs", color: "currentColor" }),
        }),
    });
}
