var l = e(477900);
e(582128);
var i = e(503698),
    a = e.n(i),
    r = e(890856),
    s = e(688810),
    o = e(183555),
    c = e(702476),
    u = e(946356),
    d = e(939496),
    A = e(518477),
    f = e(996988),
    g = e(792996),
    m = e(260155);
e.d(
    n,
    {},
    {
        A: function (t) {
            let {
                    children: n,
                    className: e,
                    profileModalScrollTarget: i,
                    onAction: p,
                    onClose: x,
                    "aria-labelledby": _,
                    ref: I,
                    ...N
                } = t,
                { themeType: E } = (0, d.E)(),
                { analyticsLocations: T } = (0, s.Ay)(),
                { context: h } = (0, o.NJ)();
            return E === f.d.MODAL || E === f.d.MODAL_V2 || h?.userId == null
                ? (0, l.jsx)("article", {
                      "aria-labelledby": _,
                      children: (0, l.jsx)(u.A.Overlay, { ref: I, className: a()(m.Nr, e), ...N, children: n }),
                  })
                : (0, l.jsx)("article", {
                      "aria-labelledby": _,
                      children: (0, l.jsx)(r.s, {
                          className: m.OV,
                          "aria-label": g.intl.string(g.t.pD1L1u),
                          focusProps: { ringTarget: I },
                          onClick: () => {
                              (p?.({ action: "PRESS_CARD" }),
                                  (0, c.openUserProfileModal)({
                                      tabSection: A.RP.ACTIVITY,
                                      sourceAnalyticsLocations: T,
                                      scrollTarget: i,
                                      ...h,
                                  }),
                                  x?.());
                          },
                          children: (0, l.jsx)(u.A.Overlay, { ref: I, className: a()(m.Nr, e), ...N, children: n }),
                      }),
                  });
        },
    },
);
