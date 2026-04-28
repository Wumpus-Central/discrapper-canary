l.d(a, { A: () => C, I: () => y });
var i = l(627968);
l(64700);
var n = l(607399),
    r = l(793574),
    s = l(688810),
    c = l(268218),
    t = l(335180),
    d = l(723702),
    o = l(19575),
    u = l(58736),
    b = l(746080),
    m = l(546930);
let h = (0, c.Fe)({
    createPromise: () =>
        Promise.all([
            l.e("20797"),
            l.e("88826"),
            l.e("45235"),
            l.e("11394"),
            l.e("38939"),
            l.e("8371"),
            l.e("61156"),
            l.e("81202"),
            l.e("65617"),
            l.e("66016"),
            l.e("44385"),
            l.e("20803"),
            l.e("71367"),
            l.e("21225"),
            l.e("83752"),
        ]).then(l.bind(l, 381687)),
    webpackId: 381687,
    name: "Search",
    renderLoader: t.O7,
});
async function y(e) {
    if (!e && (0, d.isMac)() && d.isPlatformEmbedded) {
        let e = await window.DiscordNative.app.getDefaultDoubleClickAction();
        "Minimize" === e ? o.Ay.minimize() : "Maximize" === e && o.Ay.maximize();
    }
}
function A(e) {
    let {
        children: a,
        className: l,
        channelId: r,
        guildId: s,
        innerClassname: c,
        transparent: t = !1,
        hidden: d = !1,
        toolbar: o,
        mobileToolbar: A,
        "aria-label": p,
        "aria-labelledby": f,
        scrollable: C,
        role: x,
        hideSearch: N,
        disableDoubleClick: j,
    } = e;
    return (0, i.jsx)(u.Ay, {
        className: l,
        innerClassName: c,
        toolbar: (function () {
            if (null == o) return null;
            let e = null != r && !N;
            return n.Fr
                ? A
                : (0, i.jsxs)(i.Fragment, {
                      children: [
                          o,
                          e && !(0, b.jq)(r)
                              ? (0, i.jsx)(h, { guildId: s, channelId: r, className: m.$P }, s ?? r)
                              : null,
                      ],
                  });
        })(),
        transparent: t,
        hidden: d,
        onDoubleClick: () => y(j),
        "aria-label": p,
        "aria-labelledby": f,
        role: x,
        scrollable: C,
        children: a,
    });
}
function p(e) {
    let { children: a, className: l, "aria-label": n, "aria-labelledby": r, role: s, disableDoubleClick: c } = e;
    return (0, i.jsx)(u.Ay, {
        className: l,
        onDoubleClick: () => y(c),
        "aria-label": n,
        "aria-labelledby": r,
        role: s,
        children: a,
    });
}
function f(e) {
    let { isAuthenticated: a = !0, ...l } = e,
        { analyticsLocations: n } = (0, s.Ay)(r.A.HEADER_BAR);
    return (0, i.jsx)(s.f5, {
        value: n,
        children: a ? (0, i.jsx)(A, { ...l, className: l.className }) : (0, i.jsx)(p, { ...l, className: l.className }),
    });
}
(f.Title = u.Ay.Title),
    (f.Icon = u.Ay.Icon),
    (f.ChannelIcon = u.Ay.ChannelIcon),
    (f.Divider = u.Ay.Divider),
    (f.Caret = u.Ay.Caret);
let C = f;
