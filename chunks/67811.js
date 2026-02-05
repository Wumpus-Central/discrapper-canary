"use strict";
n.d(t, { j: () => p }), n(321073);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(960488),
    l = n(397927),
    u = n(240248),
    c = n(796151);
let d = [18, 18, 16, 16, 14, 12, 10];
function _(e) {
    return d[e.length - 1] ?? d[d.length - 1];
}
function f(e, t) {
    return s()({ [c.AN]: !0, [c.CW]: "always" === e, [c._W]: "on-hover" === e && t });
}
let p = (e) => {
    let t,
        n,
        {
            backgroundStyle: a = "always",
            children: d,
            icon: p,
            name: h,
            ariaLabel: m,
            className: g,
            style: E,
            to: A,
            onClick: I,
            selected: T = !1,
            ...y
        } = e,
        S = (0, o.W6)();
    null == p && null != h && (n = _((t = (0, u.oN)(h))));
    let v = i.useCallback(
            (e) => {
                if (null == A);
                else if ("string" == typeof A) S.push(A);
                else {
                    let { pathname: e = "", state: t } = A;
                    S.push(e, t);
                }
                null != I && I(e);
            },
            [S, A, I],
        ),
        C = (0, l.rdh)(l.LU0.modules.guildbar.AVATAR_SIZE);
    return (0, r.jsxs)(l.DUT, {
        ...y,
        onClick: v,
        className: s()(g, c.iE, { [c.wH]: T }),
        style: { ...E, fontSize: n },
        focusProps: { enabled: !1 },
        children: [
            (0, r.jsx)(l.AC4, { children: null != m && "" !== m ? m : (h ?? "") }),
            null != t ? (0, r.jsx)("div", { className: s()(f(a, !1), c.q9), "aria-hidden": !0, children: t }) : null,
            null != p
                ? (0, r.jsx)("img", { className: c.Kk, src: p, alt: " ", width: C, height: C, "aria-hidden": !0 })
                : null,
            null != d ? (0, r.jsx)("div", { className: f(a, !0), children: d }) : null,
        ],
    });
};
