var l = e(477900);
e(582128);
var i = e(503698),
    a = e.n(i),
    r = e(890856),
    s = e(688810),
    o = e(183555),
    c = e(100663),
    u = e(946356),
    d = e(939496),
    A = e(518477),
    x = e(996988),
    m = e(792996),
    f = e(260155);
e.d(
    n,
    {},
    {
        A: function (t) {
            let {
                    children: n,
                    className: e,
                    profileModalScrollTarget: i,
                    onAction: g,
                    onClose: p,
                    "aria-labelledby": _,
                    ref: I,
                    ...E
                } = t,
                { themeType: T } = (0, d.E)(),
                { analyticsLocations: N } = (0, s.Ay)(),
                { context: h } = (0, o.NJ)();
            return T === x.d.MODAL || T === x.d.MODAL_V2 || h?.userId == null
                ? (0, l.jsx)("article", {
                      "aria-labelledby": _,
                      children: (0, l.jsx)(u.A.Overlay, { ref: I, className: a()(f.Nr, e), ...E, children: n }),
                  })
                : (0, l.jsx)("article", {
                      "aria-labelledby": _,
                      children: (0, l.jsx)(r.s, {
                          className: f.OV,
                          "aria-label": m.intl.string(m.t.pD1L1u),
                          focusProps: { ringTarget: I },
                          onClick: () => {
                              (g?.({ action: "PRESS_CARD" }),
                                  (0, c.openUserProfileModal)({
                                      tabSection: A.RP.ACTIVITY,
                                      sourceAnalyticsLocations: N,
                                      scrollTarget: i,
                                      ...h,
                                  }),
                                  p?.());
                          },
                          children: (0, l.jsx)(u.A.Overlay, { ref: I, className: a()(f.Nr, e), ...E, children: n }),
                      }),
                  });
        },
    },
);
