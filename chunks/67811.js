"use strict";
n.d(t, { j: () => p }), n(321073);
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(873263),
    l = n(602853),
    u = n(827734),
    d = n(939249),
    c = n(140735),
    _ = n(240248),
    f = n(155570);
let E = [18, 18, 16, 16, 14, 12, 10];
function h(e, t) {
    return a()({ [f.AN]: !0, [f.CW]: "always" === e, [f._W]: "on-hover" === e && t });
}
let p = (e) => {
    let t,
        n,
        {
            backgroundStyle: s = "always",
            children: p,
            icon: m,
            name: g,
            ariaLabel: A,
            className: I,
            style: T,
            to: S,
            onClick: y,
            selected: N = !1,
            ...O
        } = e,
        R = (0, o.W6)();
    null == m && null != g && (n = E[(t = (0, _.oN)(g)).length - 1] ?? E[E.length - 1]);
    let v = i.useCallback(
            (e) => {
                if (null == S);
                else if ("string" == typeof S) R.push(S);
                else {
                    let { pathname: e = "", state: t } = S;
                    R.push(e, t);
                }
                null != y && y(e);
            },
            [R, S, y],
        ),
        C = (0, l.r)(u.A.modules.guildbar.AVATAR_SIZE);
    return (0, r.jsxs)(d.D, {
        ...O,
        onClick: v,
        className: a()(I, f.iE, { [f.wH]: N }),
        style: { ...T, fontSize: n },
        focusProps: { enabled: !1 },
        children: [
            (0, r.jsx)(c.A, { children: null != A && "" !== A ? A : (g ?? "") }),
            null != t ? (0, r.jsx)("div", { className: a()(h(s, !1), f.q9), "aria-hidden": !0, children: t }) : null,
            null != m
                ? (0, r.jsx)("img", { className: f.Kk, src: m, alt: " ", width: C, height: C, "aria-hidden": !0 })
                : null,
            null != p ? (0, r.jsx)("div", { className: h(s, !0), children: p }) : null,
        ],
    });
};
