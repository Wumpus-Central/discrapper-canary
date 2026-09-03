n.d(t, { j: () => I }), n(321073);
var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(806163),
    o = n(939249),
    d = n(140735),
    c = n(661531),
    u = n(602853),
    _ = n(240248),
    E = n(570001);
let A = [18, 18, 16, 16, 14, 12, 10];
function h(e, t) {
    return s()({ [E.AN]: !0, [E.CW]: "always" === e, [E._W]: "on-hover" === e && t });
}
function I(e) {
    let t,
        n,
        {
            backgroundStyle: a = "always",
            children: I,
            icon: f,
            name: p,
            ariaLabel: T,
            className: m,
            style: g,
            to: S,
            onClick: N,
            selected: C = !1,
            ...O
        } = e,
        R = (0, l.W6)();
    null == f && null != p && (n = A[(t = (0, _.oN)(p)).length - 1] ?? A[A.length - 1]);
    let L = r.useCallback(
            (e) => {
                if (null == S);
                else if ("string" == typeof S) R.push(S);
                else {
                    let { pathname: e = "", state: t } = S;
                    R.push(e, t);
                }
                null != N && N(e);
            },
            [R, S, N],
        ),
        y = (0, u.r)(c.A.modules.guildbar.AVATAR_SIZE);
    return (0, i.jsxs)(o.D, {
        ...O,
        onClick: L,
        className: s()(m, E.iE, { [E.wH]: C }),
        style: { ...g, fontSize: n },
        focusProps: { enabled: !1 },
        children: [
            (0, i.jsx)(d.A, { children: null != T && "" !== T ? T : (p ?? "") }),
            null != t ? (0, i.jsx)("div", { className: s()(h(a, !1), E.q9), "aria-hidden": !0, children: t }) : null,
            null != f
                ? (0, i.jsx)("img", { className: E.Kk, src: f, alt: " ", width: y, height: y, "aria-hidden": !0 })
                : null,
            null != I ? (0, i.jsx)("div", { className: h(a, !0), children: I }) : null,
        ],
    });
}
