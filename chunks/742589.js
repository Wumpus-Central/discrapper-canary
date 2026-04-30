t.d(n, { A: () => D, I: () => d });
var l = t(627968);
t(64700);
var E = t(607399),
    i = t(793574),
    A = t(688810),
    a = t(268218),
    _ = t(335180),
    r = t(723702),
    u = t(19575),
    T = t(58736),
    C = t(746080),
    o = t(546930);
let S = (0, a.Fe)({
    createPromise: () =>
        Promise.all([
            t.e("33521"),
            t.e("1195"),
            t.e("79093"),
            t.e("11394"),
            t.e("38939"),
            t.e("61156"),
            t.e("81202"),
            t.e("66016"),
            t.e("20803"),
            t.e("21225"),
            t.e("12549"),
            t.e("83752"),
        ]).then(t.bind(t, 381687)),
    webpackId: 381687,
    name: "Search",
    renderLoader: _.O7,
});
async function d(e) {
    if (!e && (0, r.isMac)() && r.isPlatformEmbedded) {
        let e = await window.DiscordNative.app.getDefaultDoubleClickAction();
        "Minimize" === e ? u.Ay.minimize() : "Maximize" === e && u.Ay.maximize();
    }
}
function s(e) {
    let {
        children: n,
        className: t,
        channelId: i,
        guildId: A,
        innerClassname: a,
        transparent: _ = !1,
        hidden: r = !1,
        toolbar: u,
        mobileToolbar: s,
        "aria-label": I,
        "aria-labelledby": c,
        scrollable: D,
        role: N,
        hideSearch: L,
        disableDoubleClick: U,
    } = e;
    return (0, l.jsx)(T.Ay, {
        className: t,
        innerClassName: a,
        toolbar: (function () {
            if (null == u) return null;
            let e = null != i && !L;
            return E.Fr
                ? s
                : (0, l.jsxs)(l.Fragment, {
                      children: [
                          u,
                          e && !(0, C.jq)(i)
                              ? (0, l.jsx)(S, { guildId: A, channelId: i, className: o.$P }, A ?? i)
                              : null,
                      ],
                  });
        })(),
        transparent: _,
        hidden: r,
        onDoubleClick: () => d(U),
        "aria-label": I,
        "aria-labelledby": c,
        role: N,
        scrollable: D,
        children: n,
    });
}
function I(e) {
    let { children: n, className: t, "aria-label": E, "aria-labelledby": i, role: A, disableDoubleClick: a } = e;
    return (0, l.jsx)(T.Ay, {
        className: t,
        onDoubleClick: () => d(a),
        "aria-label": E,
        "aria-labelledby": i,
        role: A,
        children: n,
    });
}
function c(e) {
    let { isAuthenticated: n = !0, ...t } = e,
        { analyticsLocations: E } = (0, A.Ay)(i.A.HEADER_BAR);
    return (0, l.jsx)(A.f5, {
        value: E,
        children: n ? (0, l.jsx)(s, { ...t, className: t.className }) : (0, l.jsx)(I, { ...t, className: t.className }),
    });
}
(c.Title = T.Ay.Title),
    (c.Icon = T.Ay.Icon),
    (c.ChannelIcon = T.Ay.ChannelIcon),
    (c.Divider = T.Ay.Divider),
    (c.Caret = T.Ay.Caret);
let D = c;
