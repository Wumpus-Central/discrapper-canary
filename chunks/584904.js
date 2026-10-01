e.d(n, { A: () => _ });
var l = e(477900),
    i = e(582128),
    r = e(503698),
    a = e.n(r),
    s = e(890856),
    o = e(688810),
    c = e(183555),
    u = e(402860),
    d = e(946356),
    A = e(939496),
    x = e(518477),
    p = e(996988),
    f = e(375708),
    m = e(260155);
let _ = i.forwardRef(function (t, n) {
    let {
            children: e,
            className: i,
            profileModalScrollTarget: r,
            onAction: _,
            onClose: T,
            "aria-labelledby": E,
            ...g
        } = t,
        { themeType: N } = (0, A.E)(),
        { analyticsLocations: C } = (0, o.Ay)(),
        { context: I } = (0, c.NJ)();
    return N === p.d.MODAL || N === p.d.MODAL_V2 || I?.userId == null
        ? (0, l.jsx)("article", {
              "aria-labelledby": E,
              children: (0, l.jsx)(d.A.Overlay, { ref: n, className: a()(m.Nr, i), ...g, children: e }),
          })
        : (0, l.jsx)("article", {
              "aria-labelledby": E,
              children: (0, l.jsx)(s.s, {
                  className: m.OV,
                  "aria-label": f.intl.string(f.t.pD1L1u),
                  focusProps: { ringTarget: n },
                  onClick: () => {
                      (_?.({ action: "PRESS_CARD" }),
                          (0, u.openUserProfileModal)({
                              tabSection: x.RP.ACTIVITY,
                              sourceAnalyticsLocations: C,
                              scrollTarget: r,
                              ...I,
                          }),
                          T?.());
                  },
                  children: (0, l.jsx)(d.A.Overlay, { ref: n, className: a()(m.Nr, i), ...g, children: e }),
              }),
          });
});
