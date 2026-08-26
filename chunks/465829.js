n.d(t, { Ay: () => j, Ce: () => I, c$: () => R, n2: () => N });
var a = n(477900);
n(582128);
var l = n(503698),
    r = n.n(l),
    s = n(834730),
    i = n(939249),
    o = n(140735),
    d = n(866665),
    c = n(297413),
    u = n(296948),
    f = n(709066),
    m = n(609425),
    E = n(922301),
    g = n(660184),
    p = n(534400),
    b = n(436921),
    h = n(518477),
    _ = n(375708),
    x = n(956495);
let A = { sm: "heading-lg/bold", lg: "heading-xl/semibold" };
function R(e) {
    let {
            user: t,
            guildId: n,
            displayName: l,
            size: i = "sm",
            pendingDisplayNameStyles: o,
            shouldUnderlineOnHover: d = !1,
            displayNameTrailing: c,
            className: u,
        } = e,
        f = (0, m.A)({ userId: t.id, guildId: n, pendingDisplayNameStyles: o }),
        p = A[i];
    return null != f
        ? (0, a.jsx)(s.E, {
              variant: p,
              className: u,
              children: (0, a.jsx)(g.A, {
                  userName: l,
                  displayNameStyles: f,
                  effectDisplayType: E.G.ANIMATED,
                  textClassName: x.QC,
                  shouldWrap: !0,
                  loop: !0,
                  inProfile: !0,
                  shouldUnderlineOnHover: d,
                  appendedInlineContent: null != c ? (0, a.jsxs)(a.Fragment, { children: [" ", c] }) : null,
              }),
          })
        : (0, a.jsxs)(s.E, { className: r()(x.QC, x.O2, u), variant: p, children: [l, " ", c] });
}
function v(e) {
    let {
            user: t,
            guildId: n,
            displayName: l,
            trailing: s,
            size: o = "sm",
            pendingDisplayNameStyles: d,
            onClickDisplayName: c,
        } = e,
        m = (0, u.r)(t),
        E = null != m ? (0, a.jsx)(f.A, { type: m, verified: t.isVerifiedBot(), className: x.AO }) : null,
        g = (0, a.jsx)(R, {
            user: t,
            guildId: n,
            displayName: l,
            size: o,
            pendingDisplayNameStyles: d,
            shouldUnderlineOnHover: null != c,
            displayNameTrailing: E,
        });
    return (0, a.jsxs)("div", {
        className: r()(x.K$, "lg" === o && x.lg),
        children: [
            null != c ? (0, a.jsx)(i.D, { onClick: c, className: x.vk, children: g }) : g,
            null != s && !1 !== s && (0, a.jsx)("div", { className: x.MU, children: s }),
        ],
    });
}
function N(e) {
    let { pronouns: t, className: n } = e;
    return (0, a.jsxs)(s.E, {
        className: r()(x.hI, n),
        variant: "text-sm/medium",
        color: "text-strong",
        children: [
            (0, a.jsx)(o.A, { tag: "span", children: _.intl.formatToPlainString(_.t["DRI+T7"], { pronouns: t }) }),
            (0, a.jsx)("span", { "aria-hidden": "true", children: t }),
        ],
    });
}
function I() {
    return (0, a.jsx)("div", { "aria-hidden": "true", className: x.SC });
}
function T(e) {
    let {
            user: t,
            usernameIcon: n,
            onClickUsername: l,
            pronouns: s,
            primaryGuild: o,
            contextGuildId: f,
            trailing: m,
            onClose: E,
        } = e,
        g = (0, b.j)({ location: "UserProfileUserInfo" }),
        A = null != s && s.length > 0,
        R = (0, u.r)(t),
        v = t.isProvisional
            ? null
            : (0, a.jsx)(c.A, {
                  user: t,
                  usernameIcon: n,
                  forceUsername: !0,
                  className: x.a1,
                  usernameClass: x.eb,
                  discriminatorClass: x.sw,
                  hideBotTag: !0,
              });
    return (0, a.jsxs)("div", {
        className: r()(x.AK, { [x.j6]: A, [x.w2]: null != R }),
        children: [
            null != v && null != l ? (0, a.jsx)(i.D, { onClick: l, className: x.vk, children: v }) : v,
            A &&
                (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsx)(I, {}),
                        (0, a.jsx)(d.m, {
                            text: _.intl.string(_.t.GI2A8C),
                            delay: h.In,
                            ariaHidden: !0,
                            children: (0, a.jsx)("span", { className: x.Ez, children: (0, a.jsx)(N, { pronouns: s }) }),
                        }),
                    ],
                }),
            (0, a.jsx)(p.Ay, {
                primaryGuild: o,
                userId: t.id,
                contextGuildId: f,
                onClose: E,
                textVariant: g ? "text-xs/normal" : "text-xs/semibold",
                className: g ? x.Bb : x.Mp,
            }),
            m,
        ],
    });
}
function j(e) {
    let {
        user: t,
        guildId: n,
        className: l,
        onClickName: r,
        displayName: s,
        displayNameSize: i,
        pendingDisplayNameStyles: o,
        displayNameTrailing: d,
        usernameIcon: c,
        pronouns: u,
        primaryGuild: f,
        contextGuildId: m,
        trailing: E,
        onClose: g,
    } = e;
    return (0, a.jsxs)("div", {
        className: l,
        children: [
            (0, a.jsx)(v, {
                user: t,
                guildId: n,
                displayName: s,
                size: i,
                pendingDisplayNameStyles: o,
                onClickDisplayName: r,
                trailing: d,
            }),
            (0, a.jsx)(T, {
                user: t,
                usernameIcon: c,
                pronouns: u,
                primaryGuild: f,
                contextGuildId: m,
                onClickUsername: r,
                onClose: g,
                trailing: E,
            }),
        ],
    });
}
