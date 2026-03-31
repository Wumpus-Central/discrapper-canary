n.d(t, { A: () => p, I: () => A });
var i = n(627968);
n(64700);
var l = n(607399),
    s = n(793574),
    a = n(688810),
    r = n(907745),
    o = n(723702),
    c = n(837921),
    d = n(58736),
    u = n(746080),
    h = n(374850);
async function A(e) {
    if (!e && (0, o.isMac)() && o.isPlatformEmbedded) {
        let e = await window.DiscordNative.app.getDefaultDoubleClickAction();
        "Minimize" === e ? c.Ay.minimize() : "Maximize" === e && c.Ay.maximize();
    }
}
function _(e) {
    let {
        children: t,
        className: n,
        channelId: s,
        guildId: a,
        innerClassname: o,
        transparent: c = !1,
        hidden: _ = !1,
        toolbar: m,
        mobileToolbar: g,
        "aria-label": p,
        "aria-labelledby": f,
        scrollable: x,
        role: E,
        hideSearch: I,
        disableDoubleClick: C,
    } = e;
    return (0, i.jsx)(d.Ay, {
        className: n,
        innerClassName: o,
        toolbar: (function () {
            if (null == m) return null;
            let e = null != s && !I;
            return l.Fr
                ? g
                : (0, i.jsxs)(i.Fragment, {
                      children: [
                          m,
                          e && !(0, u.jq)(s)
                              ? (0, i.jsx)(r.Ay, { guildId: a, channelId: s, className: h.$P }, a ?? s)
                              : null,
                      ],
                  });
        })(),
        transparent: c,
        hidden: _,
        onDoubleClick: () => A(C),
        "aria-label": p,
        "aria-labelledby": f,
        role: E,
        scrollable: x,
        children: t,
    });
}
function m(e) {
    let { children: t, className: n, "aria-label": l, "aria-labelledby": s, role: a, disableDoubleClick: r } = e;
    return (0, i.jsx)(d.Ay, {
        className: n,
        onDoubleClick: () => A(r),
        "aria-label": l,
        "aria-labelledby": s,
        role: a,
        children: t,
    });
}
function g(e) {
    let { isAuthenticated: t = !0, ...n } = e,
        { analyticsLocations: l } = (0, a.Ay)(s.A.HEADER_BAR);
    return (0, i.jsx)(a.f5, {
        value: l,
        children: t ? (0, i.jsx)(_, { ...n, className: n.className }) : (0, i.jsx)(m, { ...n, className: n.className }),
    });
}
(g.Title = d.Ay.Title),
    (g.Icon = d.Ay.Icon),
    (g.ChannelIcon = d.Ay.ChannelIcon),
    (g.Divider = d.Ay.Divider),
    (g.Caret = d.Ay.Caret);
let p = g;
