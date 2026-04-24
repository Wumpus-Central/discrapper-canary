"use strict";
a.d(t, { A: () => E, I: () => h });
var r = a(627968);
a(64700);
var n = a(607399),
    i = a(793574),
    s = a(688810),
    l = a(268218),
    c = a(335180),
    o = a(723702),
    d = a(19575),
    u = a(58736),
    _ = a(746080),
    p = a(546930);
let f = (0, l.Fe)({
    createPromise: () =>
        Promise.all([a.e("38939"), a.e("68883"), a.e("20803"), a.e("12549"), a.e("83752")]).then(a.bind(a, 381687)),
    webpackId: 381687,
    name: "Search",
    renderLoader: c.O7,
});
async function h(e) {
    if (!e && (0, o.isMac)() && o.isPlatformEmbedded) {
        let e = await window.DiscordNative.app.getDefaultDoubleClickAction();
        "Minimize" === e ? d.Ay.minimize() : "Maximize" === e && d.Ay.maximize();
    }
}
function b(e) {
    let {
        children: t,
        className: a,
        channelId: i,
        guildId: s,
        innerClassname: l,
        transparent: c = !1,
        hidden: o = !1,
        toolbar: d,
        mobileToolbar: b,
        "aria-label": m,
        "aria-labelledby": g,
        scrollable: E,
        role: A,
        hideSearch: I,
        disableDoubleClick: v,
    } = e;
    return (0, r.jsx)(u.Ay, {
        className: a,
        innerClassName: l,
        toolbar: (function () {
            if (null == d) return null;
            let e = null != i && !I;
            return n.Fr
                ? b
                : (0, r.jsxs)(r.Fragment, {
                      children: [
                          d,
                          e && !(0, _.jq)(i)
                              ? (0, r.jsx)(f, { guildId: s, channelId: i, className: p.$P }, s ?? i)
                              : null,
                      ],
                  });
        })(),
        transparent: c,
        hidden: o,
        onDoubleClick: () => h(v),
        "aria-label": m,
        "aria-labelledby": g,
        role: A,
        scrollable: E,
        children: t,
    });
}
function m(e) {
    let { children: t, className: a, "aria-label": n, "aria-labelledby": i, role: s, disableDoubleClick: l } = e;
    return (0, r.jsx)(u.Ay, {
        className: a,
        onDoubleClick: () => h(l),
        "aria-label": n,
        "aria-labelledby": i,
        role: s,
        children: t,
    });
}
function g(e) {
    let { isAuthenticated: t = !0, ...a } = e,
        { analyticsLocations: n } = (0, s.Ay)(i.A.HEADER_BAR);
    return (0, r.jsx)(s.f5, {
        value: n,
        children: t ? (0, r.jsx)(b, { ...a, className: a.className }) : (0, r.jsx)(m, { ...a, className: a.className }),
    });
}
(g.Title = u.Ay.Title),
    (g.Icon = u.Ay.Icon),
    (g.ChannelIcon = u.Ay.ChannelIcon),
    (g.Divider = u.Ay.Divider),
    (g.Caret = u.Ay.Caret);
let E = g;
