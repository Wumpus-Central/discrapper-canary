n.d(t, { A: () => S, I: () => T });
var i = n(627968);
n(64700);
var l = n(607399),
    r = n(793574),
    a = n(688810),
    s = n(966597),
    o = n(922281),
    c = n(907745),
    _ = n(723702),
    E = n(837921),
    d = n(58736),
    u = n(746080),
    A = n(892513);
async function T(e) {
    if (!e && (0, _.isMac)() && _.isPlatformEmbedded) {
        let e = (await window.DiscordNative.remoteApp.getDefaultDoubleClickAction?.()) ?? "Maximize";
        "Minimize" === e ? E.Ay.minimize() : "Maximize" === e && E.Ay.maximize();
    }
}
function I(e) {
    let {
            children: t,
            className: n,
            channelId: r,
            guildId: a,
            innerClassname: _,
            transparent: E = !1,
            hidden: I = !1,
            toolbar: N,
            mobileToolbar: R,
            "aria-label": S,
            "aria-labelledby": C,
            scrollable: O,
            role: p,
            hideSearch: m,
            hideForLater: P,
            showDivider: D,
            disableDoubleClick: g,
        } = e,
        { enabled: U, inInbox: h } = s.A.useExperiment({ location: "HeaderBar" });
    return (0, i.jsx)(d.Ay, {
        className: n,
        innerClassName: _,
        toolbar: (function () {
            if (null == N) return null;
            let e = null != r && !m;
            return l.Fr
                ? R
                : (0, i.jsxs)(i.Fragment, {
                      children: [
                          N,
                          e && !(0, u.jq)(r)
                              ? (0, i.jsx)(c.Ay, { guildId: a, channelId: r, className: A.$P }, a ?? r)
                              : null,
                          D && (0, i.jsx)(d.Ay.Divider, {}),
                          P || !U || h ? null : (0, i.jsx)(o.A, {}),
                      ],
                  });
        })(),
        transparent: E,
        hidden: I,
        onDoubleClick: () => T(g),
        "aria-label": S,
        "aria-labelledby": C,
        role: p,
        scrollable: O,
        children: t,
    });
}
function N(e) {
    let { children: t, className: n, "aria-label": l, "aria-labelledby": r, role: a, disableDoubleClick: s } = e;
    return (0, i.jsx)(d.Ay, {
        className: n,
        onDoubleClick: () => T(s),
        "aria-label": l,
        "aria-labelledby": r,
        role: a,
        children: t,
    });
}
function R(e) {
    let { isAuthenticated: t = !0, ...n } = e,
        { analyticsLocations: l } = (0, a.Ay)(r.A.HEADER_BAR);
    return (0, i.jsx)(a.f5, {
        value: l,
        children: t ? (0, i.jsx)(I, { ...n, className: n.className }) : (0, i.jsx)(N, { ...n, className: n.className }),
    });
}
(R.Title = d.Ay.Title),
    (R.Icon = d.Ay.Icon),
    (R.ChannelIcon = d.Ay.ChannelIcon),
    (R.Divider = d.Ay.Divider),
    (R.Caret = d.Ay.Caret);
let S = R;
