n.d(t, {
    A: () => h,
});
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(397927),
    l = n(797637),
    c = n(311016),
    u = n(692051),
    d = n(915089),
    f = n(713804),
    p = n(985018),
    _ = n(206314);

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
        y = (0, d.GV)(),
        O = i.useMemo(
            () => ((0, c.A)(b) ? (0, r.jsx)(l.A, {}) : null == t || "" === t ? null : (0, f.parseBioReact)(t)),
            [b, t],
        );
    return null == O
        ? null
        : (0, r.jsxs)("section", {
              className: s()(n, _.PT),
              "aria-labelledby": y,
              children: [
                  (0, r.jsx)(o.AC4, {
                      children: (0, r.jsx)(o.H, {
                          id: y,
                          children: p.intl.string(p.t.jGoPJT),
                      }),
                  }),
                  (0, r.jsx)(o.Text, {
                      variant: "text-sm/normal",
                      lineClamp: g ? m : void 0,
                      color: void 0 !== E ? E : void 0,
                      children: (0, r.jsx)(u.Y.Provider, {
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
