"use strict";
n.d(t, { A: () => R });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(311907),
    l = n(397927),
    u = n(845255),
    c = n(905228),
    d = n(790225),
    _ = n(489748),
    f = n(381342),
    p = n(471296),
    h = n(549719),
    m = n(275106),
    E = n(178090),
    g = n(346640),
    A = n(75772),
    I = n(985018),
    T = n(199314),
    S = n(748009);
let y = [
    c.R.ONE,
    c.R.TWO,
    c.R.THREE,
    c.R.FOUR,
    c.R.FIVE,
    c.R.SIX,
    c.R.SEVEN,
    c.R.EIGHT,
    c.R.NINE,
    c.R.TEN,
    c.R.ELEVEN,
    c.R.TWELVE,
    c.R.THIRTEEN,
    c.R.FOURTEEN,
    c.R.FIFTEEN,
    c.R.SIXTEEN,
    c.R.SEVENTEEN,
    c.R.EIGHTEEN,
    c.R.NINETEEN,
    c.R.TWENTY,
    c.R.TWENTY_ONE,
    c.R.TWENTY_TWO,
    c.R.TWENTY_THREE,
    c.R.TWENTY_FOUR,
    c.R.TWENTY_FIVE,
    c.R.TWENTY_SIX,
    c.R.TWENTY_SEVEN,
];
function v(e) {
    let { levels: t } = e;
    return (0, r.jsx)("div", {
        className: T.ph,
        children: Array.from({ length: t }).map((e, t) => (0, r.jsx)(_.A, { level: t + 1, color: "black" }, t)),
    });
}
function N(e, t, n) {
    return t
        ? "basic" === e.type
            ? I.intl.string(e.unlockDescription)
            : I.intl.format(e.unlockDescription, { target: n ?? 0 })
        : "???";
}
function C(e) {
    let { achievement: t } = e,
        n = g.l8[t],
        i = (0, o.bG)([u.A], () => u.A.getAchievement(t));
    if (null == i) return null;
    let s = (0, d.lO)(n, i),
        l = (0, d.vt)(n, i),
        c = (0, d.CU)(n, i),
        _ = (0, d.wJ)(n, i),
        f = (0, d.Ou)(n, i),
        p = null != l ? (null != c ? (l / c) * 100 : 100) : null,
        y =
            ("basic" === i.type && i.unlocked) ||
            ("progress" === i.type && null != c && i.total >= c) ||
            (null != f && f > 0);
    return (0, r.jsxs)("div", {
        className: a()(T.ZJ, { [T.bl]: !y }),
        children: [
            (0, r.jsxs)(m.A, {
                className: T.in,
                children: [
                    (0, r.jsx)("img", { src: S.A, alt: "", className: T.qE }),
                    (0, r.jsx)(E.A, { className: T.io, variant: "heading-xxl/normal", children: s }),
                    (0, r.jsx)(E.A, { className: T.nY, variant: "text-md/normal", children: N(n, y, _) }),
                    (0, r.jsx)("div", { className: T.Lo }),
                    (0, r.jsx)(E.A, {
                        className: T.pR,
                        variant: "text-md/normal",
                        children: I.intl.string(n.description),
                    }),
                    null != l && null != p
                        ? (0, r.jsxs)("div", {
                              className: T.IX,
                              children: [
                                  (0, r.jsx)(h.A, { className: T.D3, percentage: p }),
                                  (0, r.jsx)(E.A, {
                                      variant: "heading-xxl/normal",
                                      className: T.z2,
                                      outlined: !0,
                                      children: null == c ? I.intl.string(A.default.Ao3GV4) : `${l}/${c}`,
                                  }),
                              ],
                          })
                        : null,
                ],
            }),
            null != f && 0 !== f ? (0, r.jsx)(v, { levels: f }) : null,
        ],
    });
}
function R(e) {
    let { setScreen: t } = e,
        [n, s] = (0, i.useState)(!1),
        o = (e) => {
            s(e.currentTarget.scrollTop > 0);
        };
    return (
        (0, d.RJ)(c.R.SIX),
        (0, r.jsxs)("div", {
            className: T.MY,
            children: [
                (0, r.jsxs)("div", {
                    className: a()(T.wx, { [T.am]: n }),
                    children: [
                        (0, r.jsx)(f.A, { onClick: () => t(g.Q0.MAIN) }),
                        (0, r.jsxs)(p.A, {
                            variant: "white",
                            className: T.jF,
                            children: [
                                (0, r.jsx)("img", { src: S.A, alt: "", className: T.Ov }),
                                I.intl.string(A.default.xE3lEA),
                            ],
                        }),
                    ],
                }),
                (0, r.jsx)(l.T7Y, {
                    className: T.vd,
                    onScroll: o,
                    children: y.map((e) => (0, r.jsx)(C, { achievement: e }, e)),
                }),
            ],
        })
    );
}
