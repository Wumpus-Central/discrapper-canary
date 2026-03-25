n.d(t, { A: () => m, I: () => A });
var i = n(627968);
n(64700);
var l = n(607399),
    r = n(793574),
    s = n(688810),
    a = n(966597),
    o = n(922281),
    c = n(907745),
    u = n(723702),
    d = n(837921),
    _ = n(58736),
    E = n(746080),
    T = n(892513);
async function A(e) {
    if (!e && (0, u.isMac)() && u.isPlatformEmbedded) {
        let e = await window.DiscordNative.app.getDefaultDoubleClickAction();
        "Minimize" === e ? d.Ay.minimize() : "Maximize" === e && d.Ay.maximize();
    }
}
function I(e) {
    let {
            children: t,
            className: n,
            channelId: r,
            guildId: s,
            innerClassname: u,
            transparent: d = !1,
            hidden: I = !1,
            toolbar: N,
            mobileToolbar: p,
            "aria-label": m,
            "aria-labelledby": R,
            scrollable: h,
            role: S,
            hideSearch: g,
            hideForLater: C,
            disableDoubleClick: O,
        } = e,
        { enabled: y, inInbox: x } = a.A.useConfig({ location: "HeaderBar" });
    return (0, i.jsx)(_.Ay, {
        className: n,
        innerClassName: u,
        toolbar: (function () {
            if (null == N) return null;
            let e = null != r && !g;
            return l.Fr
                ? p
                : (0, i.jsxs)(i.Fragment, {
                      children: [
                          N,
                          e && !(0, E.jq)(r)
                              ? (0, i.jsx)(c.Ay, { guildId: s, channelId: r, className: T.$P }, s ?? r)
                              : null,
                          C || !y || x ? null : (0, i.jsx)(o.A, {}),
                      ],
                  });
        })(),
        transparent: d,
        hidden: I,
        onDoubleClick: () => A(O),
        "aria-label": m,
        "aria-labelledby": R,
        role: S,
        scrollable: h,
        children: t,
    });
}
function N(e) {
    let { children: t, className: n, "aria-label": l, "aria-labelledby": r, role: s, disableDoubleClick: a } = e;
    return (0, i.jsx)(_.Ay, {
        className: n,
        onDoubleClick: () => A(a),
        "aria-label": l,
        "aria-labelledby": r,
        role: s,
        children: t,
    });
}
function p(e) {
    let { isAuthenticated: t = !0, ...n } = e,
        { analyticsLocations: l } = (0, s.Ay)(r.A.HEADER_BAR);
    return (0, i.jsx)(s.f5, {
        value: l,
        children: t ? (0, i.jsx)(I, { ...n, className: n.className }) : (0, i.jsx)(N, { ...n, className: n.className }),
    });
}
(p.Title = _.Ay.Title),
    (p.Icon = _.Ay.Icon),
    (p.ChannelIcon = _.Ay.ChannelIcon),
    (p.Divider = _.Ay.Divider),
    (p.Caret = _.Ay.Caret);
let m = p;
