"use strict";
n.d(t, { A: () => U });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(687498),
    l = n(158954),
    u = n(311907),
    c = n(475743),
    d = n(133636),
    _ = n(816758),
    f = n(257044),
    p = n(178090),
    h = n(683926),
    m = n(346640),
    E = n(429311),
    g = n(985018),
    A = n(814608),
    I = n(787212),
    T = n(524794),
    S = n(260405),
    y = n(649747),
    v = n(80465);
let N = 80,
    C = 40,
    R = 12,
    O = 4,
    b = 34;
function D(e) {
    let { iconSrc: t, ariaLabel: n, onClick: s } = e,
        [a, o] = (0, i.useState)(!1);
    return (0, r.jsxs)("div", {
        className: A.x6,
        onMouseEnter: () => o(!0),
        onMouseLeave: () => o(!1),
        children: [
            (0, r.jsx)(h.A, { visible: a, text: n }),
            (0, r.jsx)(f.A, {
                contentClassName: A.IO,
                onClick: s,
                "aria-label": n,
                children: (0, r.jsx)("img", { src: t, alt: "", className: A.iA }),
            }),
        ],
    });
}
function L(e) {
    let { xp: t, asset: n } = e,
        [s] = (0, i.useState)(t);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(_.A, {
                className: A.Cg,
                children: (0, r.jsxs)(p.A, { variant: "heading-xxl/normal", children: ["+", s, " XP"] }),
            }),
            (0, r.jsx)("img", { src: n, alt: "", className: A.Ei }),
        ],
    });
}
function w() {
    let e = (0, u.bG)([d.A], () => d.A.getLastXPGains()),
        t = Object.keys(e),
        { craftingClass: n, combatClass: i } = (0, u.cf)([d.A], () => ({
            craftingClass: d.A.getCraftingClass(),
            combatClass: d.A.getCombatClass(),
        })),
        s = null != n ? m.zX[n].asset : S.A,
        a = null != i ? m.P6[i].asset : y.A,
        c = (0, l.pnh)(t, {
            from: { opacity: 0, transform: "translateX(-20px)" },
            enter: { opacity: 1, transform: "translateX(0px)" },
            leave: { opacity: 0, transform: "translateX(-20px)" },
            trail: 200,
        });
    return (0, r.jsx)("div", {
        className: A.NL,
        children: c((t, n) => {
            let i = n === m.$p.GATHERING ? T.A : n === m.$p.CRAFTING ? s : a;
            return (0, r.jsx)(o.animated.div, {
                className: A.ww,
                style: t,
                children: (0, r.jsx)(L, { xp: e[n] ?? 0, asset: i }),
            });
        }),
    });
}
let M = 1.5,
    x = 100;
function P(e) {
    return Math.floor(x * Math.pow(e, M));
}
function k() {
    let e = (0, u.bG)([d.A], () => d.A.getXP()),
        t = (0, u.bG)([d.A], () => d.A.getLevel()),
        n = P(t),
        s = P(t + 1) - n,
        a = (e - n) / s,
        _ = (0, c.A)(a) ?? 0,
        f = (0, i.useRef)(null),
        [h] = (0, l.zhh)(() => ({ ref: f, strokeDashoffset: 2 * Math.PI * b * (1 - a) }));
    return (
        (0, i.useEffect)(() => {
            (async () => {
                a < _ &&
                    (await f.current?.start({ strokeDashoffset: 2 * Math.PI * b * 0 }),
                    await f.current?.start({ strokeDashoffset: 2 * Math.PI * b * 1, immediate: !0 })),
                    f.current?.start({ strokeDashoffset: 2 * Math.PI * b * (1 - a) });
            })();
        }, [a, _]),
        (0, r.jsxs)("svg", {
            className: A.s4,
            xmlns: "http://www.w3.org/2000/svg",
            width: N,
            height: N,
            fill: "none",
            children: [
                (0, r.jsx)("rect", {
                    x: C - b,
                    y: C - b,
                    width: 2 * b,
                    height: 2 * b,
                    fill: "#FFF",
                    rx: "50%",
                    ry: "50%",
                }),
                (0, r.jsx)("circle", { cx: C, cy: C, r: b, stroke: "#000", strokeWidth: R }),
                (0, r.jsx)(o.animated.circle, {
                    cx: C,
                    cy: C,
                    r: b,
                    stroke: "#FFF",
                    strokeWidth: O,
                    strokeDasharray: 2 * Math.PI * b,
                    transform: `rotate(-90 ${C} ${C})`,
                    style: h,
                }),
                (0, r.jsx)("path", {
                    d: "M66.8549 24.9124C66.8549 26.464 67.0485 29.5994 67.3917 31.4062C67.7856 33.4801 67.7349 38.1698 67.3946 41.0398C67.2272 42.4518 66.1745 43.6781 65.4397 44.8528C64.7545 45.9483 64.1213 47.1978 63.3382 48.3725C62.5551 49.5472 61.7749 50.911 60.6031 52.379C58.7352 54.7191 57.3753 56.2903 56.3003 57.2215C55.0711 58.2864 53.9553 59.1295 52.7807 60.0079C51.7286 60.7946 50.4357 61.3762 49.261 62.3544C48.2825 63.1691 46.7224 63.4293 45.2046 64.0174C43.7977 64.5625 42.8097 65.2889 41.635 65.9239C40.5311 66.5206 39.29 66.7554 38.1154 67.147C36.9407 67.5385 35.5768 67.7351 34.3024 68.0269C32.938 68.3393 31.3708 68.5152 29.4658 68.6634C28.7191 68.7214 27.9479 68.9083 27.4566 68.9083C26.1873 68.9083 29.8925 68.4214 31.0672 68.0298C32.2162 67.6468 33.4122 67.5415 34.5869 66.9065C35.6908 66.3097 36.9319 66.0749 38.5934 65.9268C39.9077 65.8097 41.6189 65.0014 43.0928 64.4618C44.3931 63.9856 45.4377 62.9483 46.6124 62.457C47.7548 61.9793 48.9574 61.6754 49.8887 60.7969C50.812 59.9259 52.1838 59.4286 52.8716 58.4021C53.6228 57.2809 54.8235 56.4956 55.9498 55.664C57.065 54.8408 57.6627 53.6622 58.5896 52.731C59.5674 51.7485 60.8832 50.5356 61.6708 49.2612C62.4428 48.0119 63.3294 47.1098 63.7254 46.0348C64.1951 44.7596 65.189 43.6898 65.9237 42.5151C66.5891 41.4512 66.9488 40.1702 67.3917 38.9955C67.5383 37.8208 68.122 36.6505 68.3699 35.2324C68.4183 34.8877 68.515 34.5973 68.9081 33.7116",
                    stroke: "black",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                }),
                (0, r.jsx)("path", {
                    d: "M64.4439 25.7688C64.4439 26.791 64.5407 27.9657 64.5663 32.6916C64.4439 34.2718 64.3471 35.1517 64.2488 35.739C64.2004 35.8864 64.1036 36.0316 64.0039 36.3278",
                    stroke: "black",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                }),
                (0, r.jsx)("foreignObject", {
                    x: 0,
                    y: 0,
                    width: N,
                    height: N,
                    children: (0, r.jsx)(p.A, { className: A.WB, variant: "heading-xxl/bold", children: t }),
                }),
            ],
        })
    );
}
function U(e) {
    let { setScreen: t, className: n } = e;
    return (0, u.bG)([d.A], () => d.A.hasFetchedUserData())
        ? (0, r.jsxs)("div", {
              className: a()(A.iE, n),
              children: [
                  (0, r.jsx)(w, {}),
                  (0, r.jsxs)(_.A, {
                      className: A.nd,
                      children: [
                          (0, r.jsx)(k, {}),
                          (0, r.jsx)(D, {
                              iconSrc: v.A,
                              ariaLabel: g.intl.string(E.default.JRs3DC),
                              onClick: () => t(m.Q0.STATS),
                          }),
                          (0, r.jsx)(D, {
                              iconSrc: I.A,
                              ariaLabel: g.intl.string(E.default.xE3lEA),
                              onClick: () => t(m.Q0.ACHIEVEMENTS),
                          }),
                      ],
                  }),
              ],
          })
        : null;
}
