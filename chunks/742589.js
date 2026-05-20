"use strict";
n.d(t, { A: () => A, I: () => p });
var i = n(627968);
n(64700);
var r = n(607399),
    s = n(793574),
    a = n(688810),
    o = n(268218),
    l = n(335180),
    u = n(723702),
    c = n(19575),
    d = n(58736),
    _ = n(746080),
    f = n(546930);
let h = (0, o.Fe)({
    createPromise: () =>
        Promise.all([
            n.e("4352"),
            n.e("79093"),
            n.e("11394"),
            n.e("38939"),
            n.e("61156"),
            n.e("81202"),
            n.e("20803"),
            n.e("66016"),
            n.e("21225"),
            n.e("12549"),
            n.e("83752"),
        ]).then(n.bind(n, 381687)),
    webpackId: 381687,
    name: "Search",
    renderLoader: l.O7,
});
async function p(e) {
    if (!e && (0, u.isMac)() && u.isPlatformEmbedded) {
        let e = await window.DiscordNative.app.getDefaultDoubleClickAction();
        "Minimize" === e ? c.Ay.minimize() : "Maximize" === e && c.Ay.maximize();
    }
}
function E(e) {
    let {
        children: t,
        className: n,
        channelId: s,
        guildId: a,
        innerClassname: o,
        transparent: l = !1,
        hidden: u = !1,
        toolbar: c,
        mobileToolbar: E,
        "aria-label": m,
        "aria-labelledby": g,
        scrollable: A,
        role: I,
        hideSearch: T,
        disableDoubleClick: S,
    } = e;
    return (0, i.jsx)(d.Ay, {
        className: n,
        innerClassName: o,
        toolbar: (function () {
            if (null == c) return null;
            let e = null != s && !T;
            return r.Fr
                ? E
                : (0, i.jsxs)(i.Fragment, {
                      children: [
                          c,
                          e && !(0, _.jq)(s)
                              ? (0, i.jsx)(h, { guildId: a, channelId: s, className: f.$P }, a ?? s)
                              : null,
                      ],
                  });
        })(),
        transparent: l,
        hidden: u,
        onDoubleClick: () => p(S),
        "aria-label": m,
        "aria-labelledby": g,
        role: I,
        scrollable: A,
        children: t,
    });
}
function m(e) {
    let { children: t, className: n, "aria-label": r, "aria-labelledby": s, role: a, disableDoubleClick: o } = e;
    return (0, i.jsx)(d.Ay, {
        className: n,
        onDoubleClick: () => p(o),
        "aria-label": r,
        "aria-labelledby": s,
        role: a,
        children: t,
    });
}
function g(e) {
    let { isAuthenticated: t = !0, ...n } = e,
        { analyticsLocations: r } = (0, a.Ay)(s.A.HEADER_BAR);
    return (0, i.jsx)(a.f5, {
        value: r,
        children: t ? (0, i.jsx)(E, { ...n, className: n.className }) : (0, i.jsx)(m, { ...n, className: n.className }),
    });
}
(g.Title = d.Ay.Title),
    (g.Icon = d.Ay.Icon),
    (g.ChannelIcon = d.Ay.ChannelIcon),
    (g.Divider = d.Ay.Divider),
    (g.Caret = d.Ay.Caret);
let A = g;
