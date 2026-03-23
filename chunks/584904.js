"use strict";
n.d(t, { A: () => E });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(397927),
    l = n(688810),
    u = n(183555),
    c = n(657331),
    d = n(946356),
    _ = n(939496),
    f = n(518477),
    p = n(996988),
    h = n(985018),
    m = n(380297);
let E = i.forwardRef(function (e, t) {
    let {
            children: n,
            className: i,
            profileModalScrollTarget: s,
            onAction: E,
            onClose: g,
            "aria-labelledby": A,
            ...I
        } = e,
        { themeType: T } = (0, _.E)(),
        { analyticsLocations: S } = (0, l.Ay)(),
        { context: y } = (0, u.NJ)();
    return T === p.d.MODAL || T === p.d.MODAL_V2 || y?.userId == null
        ? (0, r.jsx)("article", {
              "aria-labelledby": A,
              children: (0, r.jsx)(d.A.Overlay, { ref: t, className: a()(m.Nr, i), ...I, children: n }),
          })
        : (0, r.jsx)("article", {
              "aria-labelledby": A,
              children: (0, r.jsx)(o.sqX, {
                  className: m.OV,
                  "aria-label": h.intl.string(h.t.pD1L1u),
                  focusProps: { ringTarget: t },
                  onClick: () => {
                      E?.({ action: "PRESS_CARD" }),
                          (0, c.openUserProfileModal)({
                              tabSection: f.RP.ACTIVITY,
                              sourceAnalyticsLocations: S,
                              scrollTarget: s,
                              ...y,
                          }),
                          g?.();
                  },
                  children: (0, r.jsx)(d.A.Overlay, { ref: t, className: a()(m.Nr, i), ...I, children: n }),
              }),
          });
});
