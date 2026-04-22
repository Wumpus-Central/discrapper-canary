e.d(n, { A: () => m });
var i = e(627968),
    l = e(64700),
    r = e(503698),
    a = e.n(r),
    s = e(890856),
    o = e(688810),
    c = e(183555),
    u = e(657331),
    d = e(946356),
    A = e(939496),
    x = e(518477),
    p = e(996988),
    f = e(985018),
    _ = e(514566);
let m = l.forwardRef(function (t, n) {
    let {
            children: e,
            className: l,
            profileModalScrollTarget: r,
            onAction: m,
            onClose: E,
            "aria-labelledby": T,
            ...g
        } = t,
        { themeType: N } = (0, A.E)(),
        { analyticsLocations: C } = (0, o.Ay)(),
        { context: I } = (0, c.NJ)();
    return N === p.d.MODAL || N === p.d.MODAL_V2 || I?.userId == null
        ? (0, i.jsx)("article", {
              "aria-labelledby": T,
              children: (0, i.jsx)(d.A.Overlay, { ref: n, className: a()(_.Nr, l), ...g, children: e }),
          })
        : (0, i.jsx)("article", {
              "aria-labelledby": T,
              children: (0, i.jsx)(s.s, {
                  className: _.OV,
                  "aria-label": f.intl.string(f.t.pD1L1u),
                  focusProps: { ringTarget: n },
                  onClick: () => {
                      m?.({ action: "PRESS_CARD" }),
                          (0, u.openUserProfileModal)({
                              tabSection: x.RP.ACTIVITY,
                              sourceAnalyticsLocations: C,
                              scrollTarget: r,
                              ...I,
                          }),
                          E?.();
                  },
                  children: (0, i.jsx)(d.A.Overlay, { ref: n, className: a()(_.Nr, l), ...g, children: e }),
              }),
          });
});
