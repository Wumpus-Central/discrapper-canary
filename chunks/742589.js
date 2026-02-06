n.d(t, { A: () => S, I: () => T });
var i = n(627968);
n(64700);
var l = n(607399),
    r = n(793574),
    s = n(688810),
    a = n(966597),
    o = n(922281),
    E = n(907745),
    c = n(723702),
    _ = n(837921),
    d = n(58736),
    u = n(746080),
    A = n(892513);
async function T(e) {
    if (!e && (0, c.isMac)() && c.isPlatformEmbedded) {
        let e = (await window.DiscordNative.remoteApp.getDefaultDoubleClickAction?.()) ?? "Maximize";
        "Minimize" === e ? _.Ay.minimize() : "Maximize" === e && _.Ay.maximize();
    }
}
function I(e) {
    let {
            children: t,
            className: n,
            channelId: r,
            guildId: s,
            innerClassname: c,
            transparent: _ = !1,
            hidden: I = !1,
            toolbar: N,
            mobileToolbar: R,
            "aria-label": S,
            "aria-labelledby": O,
            scrollable: C,
            role: P,
            hideSearch: D,
            showDivider: p,
            disableDoubleClick: m,
        } = e,
        { enabled: U, inInbox: h } = a.A.useExperiment({ location: "HeaderBar" });
    return (0, i.jsx)(d.Ay, {
        className: n,
        innerClassName: c,
        toolbar: (function () {
            if (null == N) return null;
            let e = null != r && !D;
            return l.Fr
                ? R
                : (0, i.jsxs)(i.Fragment, {
                      children: [
                          N,
                          e && !(0, u.jq)(r)
                              ? (0, i.jsx)(E.Ay, { guildId: s, channelId: r, className: A.$P }, s ?? r)
                              : null,
                          p && (0, i.jsx)(d.Ay.Divider, {}),
                          U && !h ? (0, i.jsx)(o.A, {}) : null,
                      ],
                  });
        })(),
        transparent: _,
        hidden: I,
        onDoubleClick: () => T(m),
        "aria-label": S,
        "aria-labelledby": O,
        role: P,
        scrollable: C,
        children: t,
    });
}
function N(e) {
    let { children: t, className: n, "aria-label": l, "aria-labelledby": r, role: s, disableDoubleClick: a } = e;
    return (0, i.jsx)(d.Ay, {
        className: n,
        onDoubleClick: () => T(a),
        "aria-label": l,
        "aria-labelledby": r,
        role: s,
        children: t,
    });
}
function R(e) {
    let { isAuthenticated: t = !0, ...n } = e,
        { analyticsLocations: l } = (0, s.Ay)(r.A.HEADER_BAR);
    return (0, i.jsx)(s.f5, {
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
