n.d(t, { Z: () => m });
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(481060),
    l = n(40966),
    c = n(580552),
    u = n(249458),
    d = n(313201),
    f = n(240991),
    p = n(388032),
    _ = n(960324);
function m(e) {
    let {
            userBio: t,
            className: n,
            animateOnHoverOrFocusOnly: a = !1,
            isHoveringOrFocusing: m = !1,
            lineClamp: h = 6,
            setLineClamp: g = !0,
            textColor: E,
            userId: b,
        } = e,
        y = (0, d.Dt)(),
        O = i.useMemo(
            () => ((0, c.Z)(b) ? (0, r.jsx)(l.Z, {}) : null == t || "" === t ? null : (0, f.parseBioReact)(t)),
            [b, t],
        );
    return null == O
        ? null
        : (0, r.jsxs)("section", {
              className: o()(n, _.markup),
              "aria-labelledby": y,
              children: [
                  (0, r.jsx)(s.nn4, {
                      children: (0, r.jsx)(s.H, {
                          id: y,
                          children: p.intl.string(p.t.jGoPJT),
                      }),
                  }),
                  (0, r.jsx)(s.Text, {
                      variant: "text-sm/normal",
                      lineClamp: g ? h : void 0,
                      color: void 0 !== E ? E : void 0,
                      children: (0, r.jsx)(u.G.Provider, {
                          value: {
                              disableAnimations: a && !m,
                              disableInteractions: !1,
                          },
                          children: O,
                      }),
                  }),
              ],
          });
}
