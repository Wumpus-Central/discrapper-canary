r.d(t, { A: () => p, I: () => _ });
var n = r(627968);
r(64700);
var s = r(607399),
    l = r(793574),
    a = r(688810),
    i = r(907745),
    o = r(723702),
    u = r(837921),
    c = r(58736),
    h = r(746080),
    d = r(546930);
async function _(e) {
    if (!e && (0, o.isMac)() && o.isPlatformEmbedded) {
        let e = await window.DiscordNative.app.getDefaultDoubleClickAction();
        "Minimize" === e ? u.Ay.minimize() : "Maximize" === e && u.Ay.maximize();
    }
}
function E(e) {
    let {
        children: t,
        className: r,
        channelId: l,
        guildId: a,
        innerClassname: o,
        transparent: u = !1,
        hidden: E = !1,
        toolbar: S,
        mobileToolbar: f,
        "aria-label": p,
        "aria-labelledby": g,
        scrollable: A,
        role: y,
        hideSearch: R,
        disableDoubleClick: m,
    } = e;
    return (0, n.jsx)(c.Ay, {
        className: r,
        innerClassName: o,
        toolbar: (function () {
            if (null == S) return null;
            let e = null != l && !R;
            return s.Fr
                ? f
                : (0, n.jsxs)(n.Fragment, {
                      children: [
                          S,
                          e && !(0, h.jq)(l)
                              ? (0, n.jsx)(i.Ay, { guildId: a, channelId: l, className: d.$P }, a ?? l)
                              : null,
                      ],
                  });
        })(),
        transparent: u,
        hidden: E,
        onDoubleClick: () => _(m),
        "aria-label": p,
        "aria-labelledby": g,
        role: y,
        scrollable: A,
        children: t,
    });
}
function S(e) {
    let { children: t, className: r, "aria-label": s, "aria-labelledby": l, role: a, disableDoubleClick: i } = e;
    return (0, n.jsx)(c.Ay, {
        className: r,
        onDoubleClick: () => _(i),
        "aria-label": s,
        "aria-labelledby": l,
        role: a,
        children: t,
    });
}
function f(e) {
    let { isAuthenticated: t = !0, ...r } = e,
        { analyticsLocations: s } = (0, a.Ay)(l.A.HEADER_BAR);
    return (0, n.jsx)(a.f5, {
        value: s,
        children: t ? (0, n.jsx)(E, { ...r, className: r.className }) : (0, n.jsx)(S, { ...r, className: r.className }),
    });
}
(f.Title = c.Ay.Title),
    (f.Icon = c.Ay.Icon),
    (f.ChannelIcon = c.Ay.ChannelIcon),
    (f.Divider = c.Ay.Divider),
    (f.Caret = c.Ay.Caret);
let p = f;
