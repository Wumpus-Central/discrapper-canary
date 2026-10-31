n.d(t, { Sd: () => g, Xd: () => f, Yx: () => m, oR: () => p, pK: () => v });
var r = n(477900),
    i = n(582128),
    a = n(503698),
    l = n.n(a),
    s = n(297264),
    u = n(834730);
(n(580630), n(105292));
var c = n(95068);
let o = i.createContext({ isPremiumRebrand: !1 });
function d() {
    return i.useContext(o).isPremiumRebrand;
}
function m(e) {
    let { children: t, className: n, isPremiumRebrand: a = !1 } = e,
        s = i.useMemo(() => ({ isPremiumRebrand: a }), [a]);
    return (0, r.jsx)(o.Provider, {
        value: s,
        children: (0, r.jsx)("div", { className: l()(c.tp, { [c.u0]: a }, n), children: t }),
    });
}
function f(e) {
    let { children: t } = e;
    return d()
        ? (0, r.jsx)(s.D, {
              variant: "heading-md/semibold",
              color: "text-strong",
              className: l()(c.wx, c.u0),
              children: t,
          })
        : (0, r.jsx)("div", { className: c.wx, children: t });
}
function p(e) {
    let { label: t, value: n, className: a } = e,
        s = d(),
        o = i.useId();
    return s
        ? (0, r.jsxs)("div", {
              className: l()(c.nM, a),
              role: "group",
              "aria-labelledby": o,
              children: [
                  (0, r.jsx)(u.E, { id: o, variant: "text-sm/medium", color: "currentColor", children: t }),
                  (0, r.jsx)(u.E, { variant: "text-sm/medium", color: "currentColor", className: c.Uu, children: n }),
              ],
          })
        : (0, r.jsxs)("div", {
              className: l()(c.nM, a),
              role: "group",
              "aria-labelledby": o,
              children: [
                  (0, r.jsx)("div", { id: o, className: c.xZ, children: t }),
                  (0, r.jsx)("div", { className: c.X6, children: n }),
              ],
          });
}
function v(e) {
    let { extended: t = !1, negativeMarginTop: n = !1, negativeMarginBottom: i = !1, invisible: a = !1 } = e;
    return (0, r.jsx)("div", { className: l()(c.yF, { [c.hF]: t, [c.P_]: n, [c.vy]: i, [c.Bw]: a }) });
}
function g(e) {
    let { label: t, value: n, className: a } = e,
        s = i.useId();
    return (0, r.jsxs)("div", {
        className: l()(c.V$, a),
        role: "group",
        "aria-labelledby": s,
        children: [
            (0, r.jsx)("div", { id: s, className: c.j5, children: t }),
            (0, r.jsx)("div", { className: c.HR, children: n }),
        ],
    });
}
