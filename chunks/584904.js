"use strict";
n.d(t, { A: () => f });
var i = n(627968),
    r = n(64700),
    a = n(503698),
    s = n.n(a),
    l = n(890856),
    o = n(688810),
    d = n(183555),
    c = n(975732),
    u = n(946356),
    _ = n(939496),
    E = n(518477),
    A = n(996988),
    h = n(375708),
    I = n(726342);
let f = r.forwardRef(function (e, t) {
    let {
            children: n,
            className: r,
            profileModalScrollTarget: a,
            onAction: f,
            onClose: p,
            "aria-labelledby": T,
            ...m
        } = e,
        { themeType: g } = (0, _.E)(),
        { analyticsLocations: S } = (0, o.Ay)(),
        { context: N } = (0, d.NJ)();
    return g === A.d.MODAL || g === A.d.MODAL_V2 || N?.userId == null
        ? (0, i.jsx)("article", {
              "aria-labelledby": T,
              children: (0, i.jsx)(u.A.Overlay, { ref: t, className: s()(I.Nr, r), ...m, children: n }),
          })
        : (0, i.jsx)("article", {
              "aria-labelledby": T,
              children: (0, i.jsx)(l.s, {
                  className: I.OV,
                  "aria-label": h.intl.string(h.t.pD1L1u),
                  focusProps: { ringTarget: t },
                  onClick: () => {
                      f?.({ action: "PRESS_CARD" }),
                          (0, c.openUserProfileModal)({
                              tabSection: E.RP.ACTIVITY,
                              sourceAnalyticsLocations: S,
                              scrollTarget: a,
                              ...N,
                          }),
                          p?.();
                  },
                  children: (0, i.jsx)(u.A.Overlay, { ref: t, className: s()(I.Nr, r), ...m, children: n }),
              }),
          });
});
