l.d(a, { A: () => k, I: () => p });
var i = l(477900);
l(582128);
var n = l(607399),
    r = l(793574),
    s = l(688810),
    c = l(268218),
    t = l(335180),
    o = l(723702),
    d = l(19575),
    u = l(58736),
    b = l(746080),
    m = l(549575);
let h = (0, c.Fe)({
    createPromise: () =>
        Promise.all([
            l.e("207309"),
            l.e("90343"),
            l.e("66554"),
            l.e("24922"),
            l.e("565617"),
            l.e("744385"),
            l.e("369501"),
            l.e("508371"),
            l.e("220803"),
            l.e("966016"),
            l.e("671367"),
            l.e("781202"),
            l.e("79171"),
            l.e("417664"),
            l.e("421225"),
            l.e("183752"),
        ]).then(l.bind(l, 239793)),
    webpackId: 239793,
    name: "Search",
    renderLoader: t.O7,
});
async function p(e) {
    if (!e && (0, o.isMac)() && o.isPlatformEmbedded) {
        let e = await window.DiscordNative.app.getDefaultDoubleClickAction();
        "Minimize" === e ? d.Ay.minimize() : "Maximize" === e && d.Ay.maximize();
    }
}
function y(e) {
    let {
        children: a,
        className: l,
        channelId: r,
        guildId: s,
        innerClassname: c,
        transparent: t = !1,
        hidden: o = !1,
        toolbar: d,
        mobileToolbar: y,
        "aria-label": A,
        "aria-labelledby": f,
        scrollable: k,
        role: C,
        hideSearch: x,
        disableDoubleClick: N,
        disableFocusRingScope: j,
        keepToastsBelow: w,
    } = e;
    return (0, i.jsx)(u.Ay, {
        className: l,
        innerClassName: c,
        toolbar: (function () {
            if (null == d) return null;
            let e = null != r && !x;
            return n.Fr
                ? y
                : (0, i.jsxs)(i.Fragment, {
                      children: [
                          d,
                          e && !(0, b.jq)(r)
                              ? (0, i.jsx)(h, { guildId: s, channelId: r, className: m.$P }, s ?? r)
                              : null,
                      ],
                  });
        })(),
        transparent: t,
        hidden: o,
        onDoubleClick: () => p(N),
        "aria-label": A,
        "aria-labelledby": f,
        role: C,
        scrollable: k,
        disableFocusRingScope: j,
        keepToastsBelow: w,
        children: a,
    });
}
function A(e) {
    let {
        children: a,
        className: l,
        "aria-label": n,
        "aria-labelledby": r,
        role: s,
        disableDoubleClick: c,
        disableFocusRingScope: t,
        keepToastsBelow: o,
    } = e;
    return (0, i.jsx)(u.Ay, {
        className: l,
        onDoubleClick: () => p(c),
        "aria-label": n,
        "aria-labelledby": r,
        role: s,
        disableFocusRingScope: t,
        keepToastsBelow: o,
        children: a,
    });
}
function f(e) {
    let { isAuthenticated: a = !0, ...l } = e,
        { analyticsLocations: n } = (0, s.Ay)(r.A.HEADER_BAR);
    return (0, i.jsx)(s.f5, {
        value: n,
        children: a ? (0, i.jsx)(y, { ...l, className: l.className }) : (0, i.jsx)(A, { ...l, className: l.className }),
    });
}
((f.Title = u.Ay.Title),
    (f.Icon = u.Ay.Icon),
    (f.ChannelIcon = u.Ay.ChannelIcon),
    (f.Divider = u.Ay.Divider),
    (f.Caret = u.Ay.Caret));
let k = f;
