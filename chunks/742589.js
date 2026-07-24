n.d(t, { A: () => T, I: () => C });
var i = n(627968);
n(64700);
var l = n(607399),
    r = n(793574),
    s = n(688810),
    a = n(268218),
    o = n(335180),
    d = n(723702),
    c = n(19575),
    u = n(58736),
    h = n(746080),
    A = n(717770);
let E = (0, a.Fe)({
    createPromise: () =>
        Promise.all([
            n.e("65482"),
            n.e("16755"),
            n.e("87524"),
            n.e("36893"),
            n.e("61156"),
            n.e("13582"),
            n.e("66016"),
            n.e("81202"),
            n.e("21225"),
            n.e("71367"),
            n.e("79171"),
            n.e("98567"),
            n.e("20803"),
            n.e("17664"),
            n.e("83752"),
        ]).then(n.bind(n, 907745)),
    webpackId: 907745,
    name: "Search",
    renderLoader: o.O7,
});
async function C(e) {
    if (!e && (0, d.isMac)() && d.isPlatformEmbedded) {
        let e = await window.DiscordNative.app.getDefaultDoubleClickAction();
        "Minimize" === e ? c.Ay.minimize() : "Maximize" === e && c.Ay.maximize();
    }
}
function g(e) {
    let {
        children: t,
        className: n,
        channelId: r,
        guildId: s,
        innerClassname: a,
        transparent: o = !1,
        hidden: d = !1,
        toolbar: c,
        mobileToolbar: g,
        "aria-label": _,
        "aria-labelledby": I,
        scrollable: T,
        role: p,
        hideSearch: S,
        disableDoubleClick: N,
    } = e;
    return (0, i.jsx)(u.Ay, {
        className: n,
        innerClassName: a,
        toolbar: (function () {
            if (null == c) return null;
            let e = null != r && !S;
            return l.Fr
                ? g
                : (0, i.jsxs)(i.Fragment, {
                      children: [
                          c,
                          e && !(0, h.jq)(r)
                              ? (0, i.jsx)(E, { guildId: s, channelId: r, className: A.$P }, s ?? r)
                              : null,
                      ],
                  });
        })(),
        transparent: o,
        hidden: d,
        onDoubleClick: () => C(N),
        "aria-label": _,
        "aria-labelledby": I,
        role: p,
        scrollable: T,
        children: t,
    });
}
function _(e) {
    let { children: t, className: n, "aria-label": l, "aria-labelledby": r, role: s, disableDoubleClick: a } = e;
    return (0, i.jsx)(u.Ay, {
        className: n,
        onDoubleClick: () => C(a),
        "aria-label": l,
        "aria-labelledby": r,
        role: s,
        children: t,
    });
}
function I(e) {
    let { isAuthenticated: t = !0, ...n } = e,
        { analyticsLocations: l } = (0, s.Ay)(r.A.HEADER_BAR);
    return (0, i.jsx)(s.f5, {
        value: l,
        children: t ? (0, i.jsx)(g, { ...n, className: n.className }) : (0, i.jsx)(_, { ...n, className: n.className }),
    });
}
(I.Title = u.Ay.Title),
    (I.Icon = u.Ay.Icon),
    (I.ChannelIcon = u.Ay.ChannelIcon),
    (I.Divider = u.Ay.Divider),
    (I.Caret = u.Ay.Caret);
let T = I;
