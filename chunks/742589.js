n.d(t, { A: () => T, I: () => g });
var i = n(477900);
n(582128);
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
            n.e("865482"),
            n.e("187524"),
            n.e("636893"),
            n.e("113582"),
            n.e("966016"),
            n.e("781202"),
            n.e("421225"),
            n.e("671367"),
            n.e("79171"),
            n.e("798567"),
            n.e("220803"),
            n.e("417664"),
            n.e("183752"),
        ]).then(n.bind(n, 907745)),
    webpackId: 907745,
    name: "Search",
    renderLoader: o.O7,
});
async function g(e) {
    if (!e && (0, d.isMac)() && d.isPlatformEmbedded) {
        let e = await window.DiscordNative.app.getDefaultDoubleClickAction();
        "Minimize" === e ? c.Ay.minimize() : "Maximize" === e && c.Ay.maximize();
    }
}
function C(e) {
    let {
        children: t,
        className: n,
        channelId: r,
        guildId: s,
        innerClassname: a,
        transparent: o = !1,
        hidden: d = !1,
        toolbar: c,
        mobileToolbar: C,
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
                ? C
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
        onDoubleClick: () => g(N),
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
        onDoubleClick: () => g(a),
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
        children: t ? (0, i.jsx)(C, { ...n, className: n.className }) : (0, i.jsx)(_, { ...n, className: n.className }),
    });
}
(I.Title = u.Ay.Title),
    (I.Icon = u.Ay.Icon),
    (I.ChannelIcon = u.Ay.ChannelIcon),
    (I.Divider = u.Ay.Divider),
    (I.Caret = u.Ay.Caret);
let T = I;
