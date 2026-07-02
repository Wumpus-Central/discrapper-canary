n.d(t, { A: () => x, I: () => N });
var i = n(627968);
n(64700);
var a = n(607399),
    s = n(793574),
    r = n(688810),
    l = n(268218),
    c = n(335180),
    o = n(723702),
    d = n(19575),
    u = n(58736),
    m = n(746080),
    A = n(546930);
let g = (0, l.Fe)({
    createPromise: () =>
        Promise.all([
            n.e("57234"),
            n.e("18078"),
            n.e("73515"),
            n.e("16747"),
            n.e("11394"),
            n.e("37082"),
            n.e("38939"),
            n.e("61156"),
            n.e("65617"),
            n.e("8371"),
            n.e("44385"),
            n.e("20803"),
            n.e("66016"),
            n.e("81202"),
            n.e("21225"),
            n.e("71367"),
            n.e("83752"),
        ]).then(n.bind(n, 381687)),
    webpackId: 381687,
    name: "Search",
    renderLoader: c.O7,
});
async function N(e) {
    if (!e && (0, o.isMac)() && o.isPlatformEmbedded) {
        let e = await window.DiscordNative.app.getDefaultDoubleClickAction();
        "Minimize" === e ? d.Ay.minimize() : "Maximize" === e && d.Ay.maximize();
    }
}
function p(e) {
    let {
        children: t,
        className: n,
        channelId: s,
        guildId: r,
        innerClassname: l,
        transparent: c = !1,
        hidden: o = !1,
        toolbar: d,
        mobileToolbar: p,
        "aria-label": f,
        "aria-labelledby": E,
        scrollable: x,
        role: h,
        hideSearch: C,
        disableDoubleClick: R,
    } = e;
    return (0, i.jsx)(u.Ay, {
        className: n,
        innerClassName: l,
        toolbar: (function () {
            if (null == d) return null;
            let e = null != s && !C;
            return a.Fr
                ? p
                : (0, i.jsxs)(i.Fragment, {
                      children: [
                          d,
                          e && !(0, m.jq)(s)
                              ? (0, i.jsx)(g, { guildId: r, channelId: s, className: A.$P }, r ?? s)
                              : null,
                      ],
                  });
        })(),
        transparent: c,
        hidden: o,
        onDoubleClick: () => N(R),
        "aria-label": f,
        "aria-labelledby": E,
        role: h,
        scrollable: x,
        children: t,
    });
}
function f(e) {
    let { children: t, className: n, "aria-label": a, "aria-labelledby": s, role: r, disableDoubleClick: l } = e;
    return (0, i.jsx)(u.Ay, {
        className: n,
        onDoubleClick: () => N(l),
        "aria-label": a,
        "aria-labelledby": s,
        role: r,
        children: t,
    });
}
function E(e) {
    let { isAuthenticated: t = !0, ...n } = e,
        { analyticsLocations: a } = (0, r.Ay)(s.A.HEADER_BAR);
    return (0, i.jsx)(r.f5, {
        value: a,
        children: t ? (0, i.jsx)(p, { ...n, className: n.className }) : (0, i.jsx)(f, { ...n, className: n.className }),
    });
}
(E.Title = u.Ay.Title),
    (E.Icon = u.Ay.Icon),
    (E.ChannelIcon = u.Ay.ChannelIcon),
    (E.Divider = u.Ay.Divider),
    (E.Caret = u.Ay.Caret);
let x = E;
