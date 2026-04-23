"use strict";
n.d(t, { A: () => E, E: () => m });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(834730),
    l = n(140735),
    u = n(707554),
    c = n(797637),
    d = n(311016),
    _ = n(692051),
    f = n(713804),
    p = n(985018),
    h = n(992595);
function E(e) {
    let {
            userBio: t,
            className: n,
            animateOnHoverOrFocusOnly: s = !1,
            isHoveringOrFocusing: l = !1,
            lineClamp: u = 6,
            setLineClamp: p = !0,
            textColor: E,
            userId: m,
        } = e,
        g = i.useMemo(
            () => ((0, d.A)(m) ? (0, r.jsx)(c.A, {}) : null == t || "" === t ? null : (0, f.parseBioReact)(t)),
            [m, t],
        );
    return null == g
        ? null
        : (0, r.jsx)("div", {
              className: a()(n, h.PT),
              children: (0, r.jsx)(o.E, {
                  variant: "text-sm/normal",
                  lineClamp: p ? u : void 0,
                  color: void 0 !== E ? E : void 0,
                  children: (0, r.jsx)(_.Y.Provider, {
                      value: { disableAnimations: s && !l, disableInteractions: !1 },
                      children: g,
                  }),
              }),
          });
}
function m(e) {
    let t = i.useId(),
        { userBio: n, userId: s } = e;
    return (0, d.A)(s) || (null != n && "" !== n)
        ? (0, r.jsxs)("section", {
              "aria-labelledby": t,
              children: [
                  (0, r.jsx)(l.A, { children: (0, r.jsx)(u.H, { id: t, children: p.intl.string(p.t.ZzAR2Y) }) }),
                  (0, r.jsx)(E, { ...e }),
              ],
          })
        : null;
}
