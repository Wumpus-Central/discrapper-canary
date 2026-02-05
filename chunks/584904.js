"use strict";
n.d(t, { A: () => g });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
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
let g = i.forwardRef(function (e, t) {
    let {
            children: n,
            className: i,
            profileModalScrollTarget: a,
            onAction: g,
            onClose: E,
            "aria-label": A,
            "aria-labelledby": I,
            ...T
        } = e,
        { themeType: y } = (0, _.E)(),
        { analyticsLocations: S } = (0, l.Ay)(),
        { context: v } = (0, u.NJ)();
    return y === p.d.MODAL || y === p.d.MODAL_V2 || v?.userId == null
        ? (0, r.jsx)("article", {
              "aria-label": A,
              "aria-labelledby": I,
              children: (0, r.jsx)(d.A.Overlay, { ref: t, className: s()(m.Nr, i), ...T, children: n }),
          })
        : (0, r.jsx)("article", {
              "aria-labelledby": I,
              children: (0, r.jsx)(o.sqX, {
                  className: m.OV,
                  "aria-label": h.intl.string(h.t.pD1L1u),
                  focusProps: { ringTarget: t },
                  onClick: () => {
                      g?.({ action: "PRESS_CARD" }),
                          (0, c.openUserProfileModal)({
                              tabSection: f.RP.ACTIVITY,
                              sourceAnalyticsLocations: S,
                              scrollTarget: a,
                              ...v,
                          }),
                          E?.();
                  },
                  children: (0, r.jsx)(d.A.Overlay, { ref: t, className: s()(m.Nr, i), ...T, children: n }),
              }),
          });
});
