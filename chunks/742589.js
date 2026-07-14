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
    A = n(746080),
    E = n(546930);
let h = (0, a.Fe)({
    createPromise: () =>
        Promise.all([
            n.e("57234"),
            n.e("36885"),
            n.e("73515"),
            n.e("11394"),
            n.e("37082"),
            n.e("27786"),
            n.e("82622"),
            n.e("61156"),
            n.e("20803"),
            n.e("66016"),
            n.e("81202"),
            n.e("21225"),
            n.e("71367"),
            n.e("83752"),
        ]).then(n.bind(n, 381687)),
    webpackId: 381687,
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
        role: N,
        hideSearch: p,
        disableDoubleClick: S,
    } = e;
    return (0, i.jsx)(u.Ay, {
        className: n,
        innerClassName: a,
        toolbar: (function () {
            if (null == c) return null;
            let e = null != r && !p;
            return l.Fr
                ? g
                : (0, i.jsxs)(i.Fragment, {
                      children: [
                          c,
                          e && !(0, A.jq)(r)
                              ? (0, i.jsx)(h, { guildId: s, channelId: r, className: E.$P }, s ?? r)
                              : null,
                      ],
                  });
        })(),
        transparent: o,
        hidden: d,
        onDoubleClick: () => C(S),
        "aria-label": _,
        "aria-labelledby": I,
        role: N,
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
