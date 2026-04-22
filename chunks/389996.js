t.d(n, { A: () => h, E: () => x });
var l = t(627968),
    r = t(64700),
    i = t(503698),
    a = t.n(i),
    s = t(834730),
    o = t(140735),
    d = t(707554),
    u = t(797637),
    c = t(311016),
    m = t(692051),
    p = t(713804),
    f = t(985018),
    g = t(992595);
function h(e) {
    let {
            userBio: n,
            className: t,
            animateOnHoverOrFocusOnly: i = !1,
            isHoveringOrFocusing: o = !1,
            lineClamp: d = 6,
            setLineClamp: f = !0,
            textColor: h,
            userId: x,
        } = e,
        A = r.useMemo(
            () => ((0, c.A)(x) ? (0, l.jsx)(u.A, {}) : null == n || "" === n ? null : (0, p.parseBioReact)(n)),
            [x, n],
        );
    return null == A
        ? null
        : (0, l.jsx)("div", {
              className: a()(t, g.PT),
              children: (0, l.jsx)(s.E, {
                  variant: "text-sm/normal",
                  lineClamp: f ? d : void 0,
                  color: void 0 !== h ? h : void 0,
                  children: (0, l.jsx)(m.Y.Provider, {
                      value: { disableAnimations: i && !o, disableInteractions: !1 },
                      children: A,
                  }),
              }),
          });
}
function x(e) {
    let n = r.useId(),
        { userBio: t, userId: i } = e;
    return (0, c.A)(i) || (null != t && "" !== t)
        ? (0, l.jsxs)("section", {
              "aria-labelledby": n,
              children: [
                  (0, l.jsx)(o.A, { children: (0, l.jsx)(d.H, { id: n, children: f.intl.string(f.t.ZzAR2Y) }) }),
                  (0, l.jsx)(h, { ...e }),
              ],
          })
        : null;
}
