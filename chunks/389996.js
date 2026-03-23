"use strict";
n.d(t, { A: () => p, E: () => h });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(397927),
    l = n(797637),
    u = n(311016),
    c = n(692051),
    d = n(713804),
    _ = n(985018),
    f = n(206314);
function p(e) {
    let {
            userBio: t,
            className: n,
            animateOnHoverOrFocusOnly: s = !1,
            isHoveringOrFocusing: _ = !1,
            lineClamp: p = 6,
            setLineClamp: h = !0,
            textColor: m,
            userId: E,
        } = e,
        g = i.useMemo(
            () => ((0, u.A)(E) ? (0, r.jsx)(l.A, {}) : null == t || "" === t ? null : (0, d.parseBioReact)(t)),
            [E, t],
        );
    return null == g
        ? null
        : (0, r.jsx)("div", {
              className: a()(n, f.PT),
              children: (0, r.jsx)(o.Text, {
                  variant: "text-sm/normal",
                  lineClamp: h ? p : void 0,
                  color: void 0 !== m ? m : void 0,
                  children: (0, r.jsx)(c.Y.Provider, {
                      value: { disableAnimations: s && !_, disableInteractions: !1 },
                      children: g,
                  }),
              }),
          });
}
function h(e) {
    let t = i.useId(),
        { userBio: n, userId: s } = e;
    return (0, u.A)(s) || (null != n && "" !== n)
        ? (0, r.jsxs)("section", {
              "aria-labelledby": t,
              children: [
                  (0, r.jsx)(o.AC4, { children: (0, r.jsx)(o.H, { id: t, children: _.intl.string(_.t.ZzAR2Y) }) }),
                  (0, r.jsx)(p, { ...e }),
              ],
          })
        : null;
}
