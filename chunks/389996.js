"use strict";
n.d(t, { A: () => h });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(397927),
    l = n(797637),
    u = n(311016),
    c = n(692051),
    d = n(915089),
    _ = n(713804),
    f = n(985018),
    p = n(206314);
function h(e) {
    let {
            userBio: t,
            className: n,
            animateOnHoverOrFocusOnly: a = !1,
            isHoveringOrFocusing: h = !1,
            lineClamp: m = 6,
            setLineClamp: g = !0,
            textColor: E,
            userId: A,
        } = e,
        I = (0, d.GV)(),
        T = i.useMemo(
            () => ((0, u.A)(A) ? (0, r.jsx)(l.A, {}) : null == t || "" === t ? null : (0, _.parseBioReact)(t)),
            [A, t],
        );
    return null == T
        ? null
        : (0, r.jsxs)("section", {
              className: s()(n, p.PT),
              "aria-labelledby": I,
              children: [
                  (0, r.jsx)(o.AC4, { children: (0, r.jsx)(o.H, { id: I, children: f.intl.string(f.t.jGoPJT) }) }),
                  (0, r.jsx)(o.Text, {
                      variant: "text-sm/normal",
                      lineClamp: g ? m : void 0,
                      color: void 0 !== E ? E : void 0,
                      children: (0, r.jsx)(c.Y.Provider, {
                          value: { disableAnimations: a && !h, disableInteractions: !1 },
                          children: T,
                      }),
                  }),
              ],
          });
}
