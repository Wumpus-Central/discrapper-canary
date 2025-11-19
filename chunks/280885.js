n.d(t, { Z: () => h });
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
    _ = n(388032),
    p = n(602009);
function h(e) {
    let {
            userBio: t,
            className: n,
            animateOnHoverOrFocusOnly: a = !1,
            isHoveringOrFocusing: h = !1,
            lineClamp: m = 6,
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
              className: o()(n, p.markup),
              "aria-labelledby": y,
              children: [
                  (0, r.jsx)(s.nn4, {
                      children: (0, r.jsx)(s.H, {
                          id: y,
                          children: _.intl.string(_.t.jGoPJT),
                      }),
                  }),
                  (0, r.jsx)(s.Text, {
                      variant: "text-sm/normal",
                      lineClamp: g ? m : void 0,
                      color: void 0 !== E ? E : void 0,
                      children: (0, r.jsx)(u.G.Provider, {
                          value: {
                              disableAnimations: a && !h,
                              disableInteractions: !1,
                          },
                          children: O,
                      }),
                  }),
              ],
          });
}
