t.d(l, { A: () => N });
var s = t(477900);
t(582128);
var n = t(503698),
    i = t.n(n),
    a = t(261958),
    r = t(444570),
    c = t(866665),
    u = t(939249),
    d = t(183555),
    o = t(612630),
    x = t(518477),
    h = t(375708),
    m = t(817997);
function N(e) {
    let { userId: l, isVisible: t, onOpenProfile: n } = e,
        { note: N } = (0, o.A)(l),
        j = null != N && "" !== N,
        v = j ? a.u : r.i,
        A = j ? h.intl.string(h.t["gs+qcM"]) : h.intl.string(h.t["1ZZtts"]),
        p = j ? N : h.intl.string(h.t["1ZZtts"]),
        { trackUserProfileAction: g } = (0, d.NJ)();
    return (0, s.jsx)(c.m, {
        asContainer: !0,
        text: p,
        ariaHidden: !j,
        children: (0, s.jsx)(u.D, {
            "aria-label": A,
            onClick: function () {
                g({ action: "PRESS_ADD_NOTE" }), n?.({ tabSection: x.RP.USER_INFO, scrollTarget: x.bk.NOTE });
            },
            className: i()(m.x, t && m.R),
            children: (0, s.jsx)(v, { size: "xs", color: "currentColor" }),
        }),
    });
}
