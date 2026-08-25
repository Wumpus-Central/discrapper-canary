n.d(t, { Ay: () => S, Ce: () => v, c$: () => R, n2: () => I });
var a = n(477900);
n(582128);
var l = n(503698),
    r = n.n(l),
    s = n(834730),
    i = n(939249),
    d = n(140735),
    o = n(866665),
    c = n(297413),
    u = n(296948),
    f = n(709066),
    E = n(609425),
    m = n(922301),
    g = n(660184),
    p = n(534400),
    b = n(436921),
    _ = n(518477),
    h = n(375708),
    A = n(956495);
let x = { sm: "heading-lg/bold", lg: "heading-xl/semibold" };
function R(e) {
    let {
            user: t,
            guildId: n,
            displayName: l,
            size: i = "sm",
            pendingDisplayNameStyles: d,
            shouldUnderlineOnHover: o = !1,
            displayNameTrailing: c,
            className: u,
        } = e,
        f = (0, E.A)({ userId: t.id, guildId: n, pendingDisplayNameStyles: d }),
        p = x[i];
    return null != f
        ? (0, a.jsx)(s.E, {
              variant: p,
              className: u,
              children: (0, a.jsx)(g.A, {
                  userName: l,
                  displayNameStyles: f,
                  effectDisplayType: m.G.ANIMATED,
                  textClassName: A.QC,
                  shouldWrap: !0,
                  loop: !0,
                  inProfile: !0,
                  shouldUnderlineOnHover: o,
                  appendedInlineContent: null != c ? (0, a.jsxs)(a.Fragment, { children: [" ", c] }) : null,
              }),
          })
        : (0, a.jsxs)(s.E, { className: r()(A.QC, A.O2, u), variant: p, children: [l, " ", c] });
}
function N(e) {
    let {
            user: t,
            guildId: n,
            displayName: l,
            trailing: s,
            size: d = "sm",
            pendingDisplayNameStyles: o,
            onClickDisplayName: c,
        } = e,
        E = (0, u.r)(t),
        m = null != E ? (0, a.jsx)(f.A, { type: E, verified: t.isVerifiedBot(), className: A.AO }) : null,
        g = (0, a.jsx)(R, {
            user: t,
            guildId: n,
            displayName: l,
            size: d,
            pendingDisplayNameStyles: o,
            shouldUnderlineOnHover: null != c,
            displayNameTrailing: m,
        });
    return (0, a.jsxs)("div", {
        className: r()(A.K$, "lg" === d && A.lg),
        children: [
            null != c ? (0, a.jsx)(i.D, { onClick: c, className: A.vk, children: g }) : g,
            null != s && !1 !== s && (0, a.jsx)("div", { className: A.MU, children: s }),
        ],
    });
}
function I(e) {
    let { pronouns: t, className: n } = e;
    return (0, a.jsxs)(s.E, {
        className: r()(A.hI, n),
        variant: "text-sm/medium",
        color: "text-strong",
        children: [
            (0, a.jsx)(d.A, { tag: "span", children: h.intl.formatToPlainString(h.t["DRI+T7"], { pronouns: t }) }),
            (0, a.jsx)("span", { "aria-hidden": "true", children: t }),
        ],
    });
}
function v() {
    return (0, a.jsx)("div", { "aria-hidden": "true", className: A.SC });
}
function T(e) {
    let {
            user: t,
            usernameIcon: n,
            onClickUsername: l,
            pronouns: s,
            primaryGuild: d,
            contextGuildId: f,
            trailing: E,
            onClose: m,
        } = e,
        g = (0, b.j)({ location: "UserProfileUserInfo" }),
        x = null != s && s.length > 0,
        R = (0, u.r)(t),
        N = t.isProvisional
            ? null
            : (0, a.jsx)(c.A, {
                  user: t,
                  usernameIcon: n,
                  forceUsername: !0,
                  className: A.a1,
                  usernameClass: A.eb,
                  discriminatorClass: A.sw,
                  hideBotTag: !0,
              });
    return (0, a.jsxs)("div", {
        className: r()(A.AK, { [A.j6]: x, [A.w2]: null != R }),
        children: [
            null != N && null != l ? (0, a.jsx)(i.D, { onClick: l, className: A.vk, children: N }) : N,
            x &&
                (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsx)(v, {}),
                        (0, a.jsx)(o.m, {
                            text: h.intl.string(h.t.GI2A8C),
                            delay: _.In,
                            ariaHidden: !0,
                            children: (0, a.jsx)("span", { className: A.Ez, children: (0, a.jsx)(I, { pronouns: s }) }),
                        }),
                    ],
                }),
            (0, a.jsx)(p.Ay, {
                primaryGuild: d,
                userId: t.id,
                contextGuildId: f,
                onClose: m,
                textVariant: g ? "text-xs/normal" : "text-xs/semibold",
                className: g ? A.Bb : A.Mp,
            }),
            E,
        ],
    });
}
function S(e) {
    let {
        user: t,
        guildId: n,
        className: l,
        onClickName: r,
        displayName: s,
        displayNameSize: i,
        pendingDisplayNameStyles: d,
        displayNameTrailing: o,
        usernameIcon: c,
        pronouns: u,
        primaryGuild: f,
        contextGuildId: E,
        trailing: m,
        onClose: g,
    } = e;
    return (0, a.jsxs)("div", {
        className: l,
        children: [
            (0, a.jsx)(N, {
                user: t,
                guildId: n,
                displayName: s,
                size: i,
                pendingDisplayNameStyles: d,
                onClickDisplayName: r,
                trailing: o,
            }),
            (0, a.jsx)(T, {
                user: t,
                usernameIcon: c,
                pronouns: u,
                primaryGuild: f,
                contextGuildId: E,
                onClickUsername: r,
                onClose: g,
                trailing: m,
            }),
        ],
    });
}
