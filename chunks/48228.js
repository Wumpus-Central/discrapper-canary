"use strict";
n.d(t, { A: () => v });
var r = n(627968),
    i = n(503698),
    s = n.n(i),
    a = n(397927),
    o = n(155571),
    l = n(631899),
    u = n(21086),
    c = n(535445),
    d = n(346640),
    _ = n(75772),
    f = n(985018),
    p = n(470213),
    h = n(983266),
    m = n(813117),
    E = n(899932),
    g = n(18005),
    A = n(912852),
    I = n(200925);
let T = [m.A, E.A],
    S = [g.A, A.A, null];
function y(e) {
    let { projectile: t } = e,
        n = null != t.hitAt || null != t.blockedAt;
    return (0, r.jsx)(o.A, {
        className: p.e3,
        srcs: n ? S : T,
        style: { left: t.x, top: t.y },
        updateInterval: 200,
        loop: !n,
    });
}
function v(e) {
    let { setScreen: t } = e,
        { onSuccess: n, rewards: i } = (0, u.A)(d.$p.COMBAT, t),
        {
            projectiles: o,
            shieldPosition: m,
            projectileBlockedCount: E,
            blocksRequired: g,
            containerRef: A,
            didWinGame: T,
            shouldTransition: S,
        } = (0, c.A)(n),
        v = `${E}/${g}`,
        N = o.some((e) => null != e.hitAt);
    return (0, r.jsx)(a.bfh, {
        className: p.Xn,
        isShaking: N,
        children: (0, r.jsx)(l.A, {
            score: v,
            activityDescription: f.intl.string(_.default.eMkJIO),
            rewards: i,
            rewardTitle: f.intl.string(_.default.lNLsa8),
            setScreen: t,
            ref: A,
            background: (0, r.jsx)("img", { src: h.A, alt: "", className: p.m9 }),
            children: T
                ? null
                : (0, r.jsxs)(r.Fragment, {
                      children: [
                          o.map((e, t) => (0, r.jsx)(y, { projectile: e }, t)),
                          (0, r.jsx)("img", {
                              className: s()(p.a, { [p.kY]: S }),
                              src: I.A,
                              alt: "",
                              style: { left: m.x, top: m.y },
                          }),
                      ],
                  }),
        }),
    });
}
