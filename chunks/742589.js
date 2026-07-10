"use strict";
n.d(t, { A: () => T, I: () => h });
var i = n(627968);
n(64700);
var r = n(607399),
    a = n(793574),
    s = n(688810),
    l = n(268218),
    o = n(335180),
    d = n(723702),
    c = n(19575),
    u = n(58736),
    _ = n(746080),
    E = n(546930);
let A = (0, l.Fe)({
    createPromise: () =>
        Promise.all([
            n.e("57234"),
            n.e("18078"),
            n.e("73515"),
            n.e("11394"),
            n.e("37082"),
            n.e("38939"),
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
async function h(e) {
    if (!e && (0, d.isMac)() && d.isPlatformEmbedded) {
        let e = await window.DiscordNative.app.getDefaultDoubleClickAction();
        "Minimize" === e ? c.Ay.minimize() : "Maximize" === e && c.Ay.maximize();
    }
}
function I(e) {
    let {
        children: t,
        className: n,
        channelId: a,
        guildId: s,
        innerClassname: l,
        transparent: o = !1,
        hidden: d = !1,
        toolbar: c,
        mobileToolbar: I,
        "aria-label": f,
        "aria-labelledby": p,
        scrollable: T,
        role: m,
        hideSearch: g,
        disableDoubleClick: S,
    } = e;
    return (0, i.jsx)(u.Ay, {
        className: n,
        innerClassName: l,
        toolbar: (function () {
            if (null == c) return null;
            let e = null != a && !g;
            return r.Fr
                ? I
                : (0, i.jsxs)(i.Fragment, {
                      children: [
                          c,
                          e && !(0, _.jq)(a)
                              ? (0, i.jsx)(A, { guildId: s, channelId: a, className: E.$P }, s ?? a)
                              : null,
                      ],
                  });
        })(),
        transparent: o,
        hidden: d,
        onDoubleClick: () => h(S),
        "aria-label": f,
        "aria-labelledby": p,
        role: m,
        scrollable: T,
        children: t,
    });
}
function f(e) {
    let { children: t, className: n, "aria-label": r, "aria-labelledby": a, role: s, disableDoubleClick: l } = e;
    return (0, i.jsx)(u.Ay, {
        className: n,
        onDoubleClick: () => h(l),
        "aria-label": r,
        "aria-labelledby": a,
        role: s,
        children: t,
    });
}
function p(e) {
    let { isAuthenticated: t = !0, ...n } = e,
        { analyticsLocations: r } = (0, s.Ay)(a.A.HEADER_BAR);
    return (0, i.jsx)(s.f5, {
        value: r,
        children: t ? (0, i.jsx)(I, { ...n, className: n.className }) : (0, i.jsx)(f, { ...n, className: n.className }),
    });
}
(p.Title = u.Ay.Title),
    (p.Icon = u.Ay.Icon),
    (p.ChannelIcon = u.Ay.ChannelIcon),
    (p.Divider = u.Ay.Divider),
    (p.Caret = u.Ay.Caret);
let T = p;
