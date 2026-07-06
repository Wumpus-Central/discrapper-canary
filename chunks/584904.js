"use strict";
n.d(t, { A: () => m });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(890856),
    l = n(688810),
    u = n(183555),
    c = n(975732),
    d = n(946356),
    _ = n(939496),
    h = n(518477),
    f = n(996988),
    E = n(375708),
    p = n(514566);
let m = r.forwardRef(function (e, t) {
    let {
            children: n,
            className: r,
            profileModalScrollTarget: s,
            onAction: m,
            onClose: g,
            "aria-labelledby": A,
            ...I
        } = e,
        { themeType: T } = (0, _.E)(),
        { analyticsLocations: S } = (0, l.Ay)(),
        { context: N } = (0, u.NJ)();
    return T === f.d.MODAL || T === f.d.MODAL_V2 || N?.userId == null
        ? (0, i.jsx)("article", {
              "aria-labelledby": A,
              children: (0, i.jsx)(d.A.Overlay, { ref: t, className: a()(p.Nr, r), ...I, children: n }),
          })
        : (0, i.jsx)("article", {
              "aria-labelledby": A,
              children: (0, i.jsx)(o.s, {
                  className: p.OV,
                  "aria-label": E.intl.string(E.t.pD1L1u),
                  focusProps: { ringTarget: t },
                  onClick: () => {
                      m?.({ action: "PRESS_CARD" }),
                          (0, c.openUserProfileModal)({
                              tabSection: h.RP.ACTIVITY,
                              sourceAnalyticsLocations: S,
                              scrollTarget: s,
                              ...N,
                          }),
                          g?.();
                  },
                  children: (0, i.jsx)(d.A.Overlay, { ref: t, className: a()(p.Nr, r), ...I, children: n }),
              }),
          });
});
