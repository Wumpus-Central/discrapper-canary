"use strict";
n.d(t, { A: () => O });
var r = n(627968),
    i = n(64700),
    s = n(735438),
    a = n(687498),
    o = n(98794),
    l = n(870827),
    u = n(158954),
    c = n(155571),
    d = n(91299),
    _ = n(631899),
    f = n(21086),
    p = n(145665),
    h = n(346640),
    m = n(75772),
    E = n(985018),
    g = n(271757),
    A = n(983266),
    I = n(238284),
    T = n(40533),
    S = n(823292);
let y = { scale: 1 },
    v = { scale: 0 },
    N = 100,
    C = [I.A, T.A];
function R(e) {
    let { x: t, y: n, onClick: s } = e,
        _ = (0, i.useRef)(null),
        [f, h] = (0, i.useState)(!1),
        m = (0, u.zhh)({ from: y, to: v, config: { duration: p.JU } }, "animate-always"),
        E = (0, i.useMemo)(() => (0.5 > Math.random() ? o.A : l.A), []),
        A = (0, i.useCallback)(() => {
            f ||
                (h(!0),
                (_.current = setTimeout(() => {
                    s();
                }, 2 * N)));
        }, [s, f]);
    return (
        (0, i.useEffect)(
            () => () => {
                clearTimeout(_.current);
            },
            [],
        ),
        (0, r.jsx)(a.animated.div, {
            style: { ...m, left: `${t}%`, top: `${n}%` },
            className: g.pf,
            children: (0, r.jsx)(d.A, {
                onClick: A,
                clickSound: E,
                disabled: f,
                children: f
                    ? (0, r.jsx)(c.A, { className: g.aC, srcs: C, updateInterval: N, loop: !1 })
                    : (0, r.jsx)("img", { src: S.A, alt: "target", className: g.aC }),
            }),
        })
    );
}
function O(e) {
    let { setScreen: t } = e,
        { onSuccess: n, rewards: i } = (0, f.A)(h.$p.COMBAT, t),
        { targetPosition: a, targetsRemaining: o, handleTargetClick: l } = (0, p.Ay)(n),
        u = `${p.E - o}/${p.E}`;
    return (0, r.jsx)(_.A, {
        score: u,
        activityDescription: E.intl.string(m.default.shQP99),
        rewards: i,
        rewardTitle: E.intl.string(m.default.lNLsa8),
        background: (0, r.jsx)("img", { src: A.A, alt: "", className: g.m9 }),
        setScreen: t,
        children: (0, r.jsx)("div", {
            className: g.kL,
            children: !(0, s.isEqual)(a, p.iM) && (0, r.jsx)(R, { ...a, onClick: l }, `${a.x}-${a.y}`),
        }),
    });
}
