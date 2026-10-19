l.d(a, { A: () => y, I: () => h });
var i = l(477900);
l(582128);
var t = l(607399),
    n = l(793574),
    r = l(688810),
    c = l(268218),
    s = l(335180),
    o = l(723702),
    d = l(19575),
    E = l(58736),
    u = l(746080),
    p = l(549575);
let A = (0, c.Fe)({
    createPromise: () =>
        Promise.all([
            l.e("207309"),
            l.e("804510"),
            l.e("24922"),
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
    renderLoader: s.O7,
});
async function h(e) {
    if (!e && (0, o.isMac)() && o.isPlatformEmbedded) {
        let e = await window.DiscordNative.app.getDefaultDoubleClickAction();
        "Minimize" === e ? d.Ay.minimize() : "Maximize" === e && d.Ay.maximize();
    }
}
function T(e) {
    let {
        children: a,
        className: l,
        channelId: n,
        guildId: r,
        innerClassname: c,
        transparent: s = !1,
        hidden: o = !1,
        toolbar: d,
        mobileToolbar: T,
        "aria-label": _,
        "aria-labelledby": b,
        scrollable: y,
        role: m,
        hideSearch: D,
        disableDoubleClick: O,
        disableFocusRingScope: R,
        keepToastsBelow: I,
    } = e;
    return (0, i.jsx)(E.Ay, {
        className: l,
        innerClassName: c,
        toolbar: (function () {
            if (null == d) return null;
            let e = null != n && !D;
            return t.Fr
                ? T
                : (0, i.jsxs)(i.Fragment, {
                      children: [
                          d,
                          e && !(0, u.jq)(n)
                              ? (0, i.jsx)(A, { guildId: r, channelId: n, className: p.$P }, r ?? n)
                              : null,
                      ],
                  });
        })(),
        transparent: s,
        hidden: o,
        onDoubleClick: () => h(O),
        "aria-label": _,
        "aria-labelledby": b,
        role: m,
        scrollable: y,
        disableFocusRingScope: R,
        keepToastsBelow: I,
        children: a,
    });
}
function _(e) {
    let {
        children: a,
        className: l,
        "aria-label": t,
        "aria-labelledby": n,
        role: r,
        disableDoubleClick: c,
        disableFocusRingScope: s,
        keepToastsBelow: o,
    } = e;
    return (0, i.jsx)(E.Ay, {
        className: l,
        onDoubleClick: () => h(c),
        "aria-label": t,
        "aria-labelledby": n,
        role: r,
        disableFocusRingScope: s,
        keepToastsBelow: o,
        children: a,
    });
}
function b(e) {
    let { isAuthenticated: a = !0, ...l } = e,
        { analyticsLocations: t } = (0, r.Ay)(n.A.HEADER_BAR);
    return (0, i.jsx)(r.f5, {
        value: t,
        children: a ? (0, i.jsx)(T, { ...l, className: l.className }) : (0, i.jsx)(_, { ...l, className: l.className }),
    });
}
((b.Title = E.Ay.Title),
    (b.Icon = E.Ay.Icon),
    (b.ChannelIcon = E.Ay.ChannelIcon),
    (b.Divider = E.Ay.Divider),
    (b.Caret = E.Ay.Caret));
let y = b;
