"use strict";
n.d(t, { A: () => O });
var r = n(627968),
    i = n(64700),
    s = n(989349),
    a = n.n(s),
    o = n(773690),
    l = n(158954),
    u = n(311907),
    c = n(927813),
    d = n(251358),
    _ = n(133636),
    f = n(816758),
    p = n(610223),
    h = n(178090),
    m = n(602425),
    E = n(346640),
    g = n(429311),
    A = n(985018),
    I = n(855293);
let T = 5 * c.A.Millis.SECOND;
function S(e) {
    let { resource: t, amount: n } = e,
        s = E.k[t],
        [a] = (0, i.useState)(n);
    return (0, r.jsxs)(f.A, {
        className: I.vD,
        children: [
            (0, r.jsx)("img", { className: I.UH, src: s.asset, alt: A.intl.string(s.name) }),
            (0, r.jsxs)(h.A, { variant: "heading-xxl/normal", children: ["+", a] }),
        ],
    });
}
function y(e) {
    let { rewards: t } = e,
        n = null != t ? Object.keys(t) : [],
        i = (0, l.pnh)(n, {
            from: { opacity: 0, transform: "translateY(20px)" },
            enter: { opacity: 1, transform: "translateY(0px)" },
            leave: { opacity: 0, transform: "translateY(20px)" },
            trail: 200,
        });
    return (0, r.jsx)("div", {
        className: I.FZ,
        children: i((e, n) =>
            (0, r.jsx)(o.animated.div, { style: e, children: (0, r.jsx)(S, { resource: n, amount: t?.[n] ?? 0 }) }, n),
        ),
    });
}
function v(e) {
    let { activity: t, hovered: n } = e,
        i = t === E.$p.COMBAT,
        s = (0, u.bG)([_.A], () => (i ? _.A.getCombatClass() : _.A.getCraftingClass())),
        a = null != s && n ? (i ? E.P6[s].consumesFrom : E.zX[s].consumesFrom) : [],
        c = (0, l.pnh)(a, {
            from: { opacity: 0, transform: "translateY(20px)" },
            enter: { opacity: 1, transform: "translateY(0px)" },
            leave: { opacity: 0, transform: "translateY(20px)" },
            delay: 200,
        }),
        d = (0, l.pnh)(n, {
            from: { opacity: 0, transform: "translateY(20px)" },
            enter: { opacity: 1, transform: "translateY(0px)" },
            leave: { opacity: 0, transform: "translateY(20px)" },
            delay: 200,
        });
    return null == s || t === E.$p.GATHERING
        ? null
        : (0, r.jsx)(r.Fragment, {
              children: d(
                  (e, t) =>
                      t &&
                      (0, r.jsxs)(o.animated.div, {
                          style: e,
                          className: I.T,
                          children: [
                              (0, r.jsx)(f.A, {
                                  className: I.ON,
                                  children: (0, r.jsx)("div", {
                                      className: I.Ii,
                                      children: A.intl.string(g.default.bMYzeS).toUpperCase(),
                                  }),
                              }),
                              (0, r.jsx)("div", {
                                  className: I.tq,
                                  children: c((e, t) =>
                                      (0, r.jsx)(
                                          o.animated.div,
                                          {
                                              style: e,
                                              children: (0, r.jsxs)(f.A, {
                                                  className: I.vD,
                                                  children: [
                                                      (0, r.jsx)("img", {
                                                          className: I.UH,
                                                          src: E.k[t].asset,
                                                          alt: A.intl.string(E.k[t].name),
                                                      }),
                                                      (0, r.jsx)(h.A, {
                                                          variant: "heading-xxl/normal",
                                                          children: "-1",
                                                      }),
                                                  ],
                                              }),
                                          },
                                          t,
                                      ),
                                  ),
                              }),
                          ],
                      }),
              ),
          });
}
function C(e) {
    let { remainingTime: t } = e,
        n = t > 0 ? a().utc(t).format("mm:ss") : null;
    return null == n
        ? null
        : (0, r.jsxs)("div", {
              className: I.qW,
              children: [
                  (0, r.jsx)(l.O4, { className: I.PN, color: "black", size: "xs" }),
                  (0, r.jsx)(h.A, { className: I.dt, variant: "heading-xl/normal", children: n }),
              ],
          });
}
function N() {
    let e = (0, u.bG)([_.A], () => _.A.getCombatClass()),
        t = E.P6[e ?? E.$6.HEALER];
    return (0, p.W)(t.hoverSound);
}
function R() {
    let e = (0, u.bG)([_.A], () => _.A.getCraftingClass()),
        t = E.zX[e ?? E.xO.ARMOR_CRAFTER];
    return (0, p.W)(t.hoverSound);
}
function O(e) {
    let { activity: t, disabled: n, ...s } = e,
        [a, o] = (0, i.useState)(!1),
        l = (0, u.bG)([_.A], () => _.A.getLastRewards(t)),
        f = N(),
        p = R(),
        h = (0, i.useRef)(null),
        [g, A] = (0, i.useState)(new Date().getTime()),
        S = (0, u.bG)([_.A], () => {
            switch (t) {
                case E.$p.COMBAT:
                    return _.A.getCombatEndedAt();
                case E.$p.CRAFTING:
                    return _.A.getCraftingEndedAt();
                default:
                    return null;
            }
        }),
        O = null != S ? g - S?.getTime() : E.Jq[t],
        b = E.Jq[t] - O,
        D = b > 0;
    (0, i.useEffect)(
        () => (
            (h.current = setInterval(() => A(new Date().getTime()), c.A.Millis.SECOND)), () => clearInterval(h.current)
        ),
        [],
    ),
        (0, i.useEffect)(() => {
            b <= 0 && clearInterval(h.current);
        }, [b]),
        (0, i.useEffect)(() => {
            if (null == l) return;
            let e = setTimeout(() => {
                (0, d.DG)(t);
            }, T);
            return () => clearTimeout(e);
        }, [l, t]);
    let L = () => {
        D || (t === E.$p.COMBAT ? f() : t === E.$p.CRAFTING && p(), o(!0));
    };
    return (0, r.jsxs)("div", {
        className: I.sr,
        onMouseEnter: L,
        onMouseLeave: () => o(!1),
        children: [
            (0, r.jsx)(m.A, { ...s, disabled: n || D, textClassName: I.B7, assetClassName: I.Kw }),
            (0, r.jsx)(y, { rewards: l }),
            (0, r.jsx)(v, { activity: t, hovered: a }),
            (0, r.jsx)(C, { remainingTime: b }),
        ],
    });
}
