n.d(t, { Sd: () => g, Xd: () => f, Yx: () => m, oR: () => p, pK: () => v });
var r = n(477900),
    i = n(582128),
    a = n(503698),
    l = n.n(a),
    s = n(534514),
    u = n(834730);
(n(580630), n(105292));
var o = n(95068);
let c = i.createContext({ isPremiumRebrand: !1 });
function d() {
    return i.useContext(c).isPremiumRebrand;
}
function m(e) {
    let { children: t, className: n, isPremiumRebrand: a = !1 } = e,
        s = i.useMemo(() => ({ isPremiumRebrand: a }), [a]);
    return (0, r.jsx)(c.Provider, {
        value: s,
        children: (0, r.jsx)("div", { className: l()(o.tp, { [o.u0]: a }, n), children: t }),
    });
}
function f(e) {
    let { children: t } = e;
    return d()
        ? (0, r.jsx)(s.D, {
              variant: "heading-sm/semibold",
              color: "text-strong",
              className: l()(o.wx, o.u0),
              children: t,
          })
        : (0, r.jsx)("div", { className: o.wx, children: t });
}
function p(e) {
    let { label: t, value: n, className: a } = e,
        s = d(),
        c = i.useId();
    return s
        ? (0, r.jsxs)("div", {
              className: l()(o.nM, a),
              role: "group",
              "aria-labelledby": c,
              children: [
                  (0, r.jsx)(u.E, { id: c, variant: "body-sm/medium", color: "currentColor", children: t }),
                  (0, r.jsx)(u.E, { variant: "body-sm/medium", color: "currentColor", className: o.Uu, children: n }),
              ],
          })
        : (0, r.jsxs)("div", {
              className: l()(o.nM, a),
              role: "group",
              "aria-labelledby": c,
              children: [
                  (0, r.jsx)("div", { id: c, className: o.xZ, children: t }),
                  (0, r.jsx)("div", { className: o.X6, children: n }),
              ],
          });
}
function v(e) {
    let { extended: t = !1, negativeMarginTop: n = !1, negativeMarginBottom: i = !1, invisible: a = !1 } = e;
    return (0, r.jsx)("div", { className: l()(o.yF, { [o.hF]: t, [o.P_]: n, [o.vy]: i, [o.Bw]: a }) });
}
function g(e) {
    let { label: t, value: n, className: a } = e,
        s = i.useId();
    return (0, r.jsxs)("div", {
        className: l()(o.V$, a),
        role: "group",
        "aria-labelledby": s,
        children: [
            (0, r.jsx)("div", { id: s, className: o.j5, children: t }),
            (0, r.jsx)("div", { className: o.HR, children: n }),
        ],
    });
}
