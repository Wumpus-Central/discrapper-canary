"use strict";
n.d(t, { A: () => d, N: () => _ });
var r = n(627968),
    i = n(64700),
    a = n(990078),
    s = n(397927),
    o = n(442433),
    l = n(50268),
    u = n(67518),
    c = n(985018);
function d(e) {
    let { applicationId: t, className: n } = e,
        d = i.useRef(null),
        _ = (0, l.A)({ id: t, label: c.intl.string(c.t["FfCL+6"]) }),
        f = (0, u.n)(t);
    return null == _ && null == f
        ? null
        : (0, r.jsx)(s.YNO, {
              targetElementRef: d,
              align: "top",
              position: "right",
              disablePointerEvents: !1,
              renderPopout: (e) => {
                  let { closePopout: t } = e;
                  return (0, r.jsx)(s.W1t, {
                      "data-menu-migrated-auto": !0,
                      navId: "game-profile-context",
                      onClose: () => {
                          (0, o.Z_)(), t();
                      },
                      "aria-label": c.intl.string(c.t.PNeFgW),
                      onSelect: () => {},
                      children: (0, r.jsxs)(r.Fragment, {
                          children: [(0, r.jsx)(s.rXV, { children: _ }), (0, r.jsx)(s.rXV, { children: f })],
                      }),
                  });
              },
              children: (e) =>
                  (0, r.jsx)(a.m, {
                      text: c.intl.string(c.t["UKOtz+"]),
                      children: (0, r.jsx)(s.DUT, {
                          innerRef: d,
                          className: n,
                          ...e,
                          children: (0, r.jsx)(s.jNK, { size: "xs", color: s.LU0.colors.WHITE }),
                      }),
                  }),
          });
}
function _(e) {
    let { applicationId: t, className: n } = e,
        d = i.useRef(null),
        _ = (0, l.A)({ id: t, label: c.intl.string(c.t["FfCL+6"]) }),
        f = (0, u.n)(t);
    return null == _ && null == f
        ? null
        : (0, r.jsx)(s.YNO, {
              targetElementRef: d,
              align: "top",
              position: "right",
              disablePointerEvents: !1,
              renderPopout: (e) => {
                  let { closePopout: t } = e;
                  return (0, r.jsx)(s.W1t, {
                      navId: "game-profile-context",
                      onClose: () => {
                          (0, o.Z_)(), t();
                      },
                      "aria-label": c.intl.string(c.t.PNeFgW),
                      onSelect: () => {},
                      children: (0, r.jsxs)(r.Fragment, {
                          children: [(0, r.jsx)(s.rXV, { children: _ }), (0, r.jsx)(s.rXV, { children: f })],
                      }),
                  });
              },
              children: (e) =>
                  (0, r.jsx)(a.m, {
                      text: c.intl.string(c.t["UKOtz+"]),
                      children: (0, r.jsx)(s.DUT, {
                          innerRef: d,
                          className: n,
                          "aria-label": c.intl.string(c.t["UKOtz+"]),
                          ...e,
                          children: (0, r.jsx)(s.jNK, { size: "xs", color: s.LU0.colors.WHITE }),
                      }),
                  }),
          });
}
