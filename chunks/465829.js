n.d(t, { Ay: () => T, Ce: () => I, c$: () => N, gU: () => A, n2: () => R });
var a = n(477900);
n(582128);
var l = n(503698),
    r = n.n(l),
    i = n(834730),
    s = n(939249),
    o = n(140735),
    d = n(866665),
    c = n(297413),
    u = n(296948),
    f = n(709066),
    m = n(609425),
    g = n(922301),
    p = n(660184),
    E = n(534400),
    h = n(436921),
    b = n(518477),
    x = n(375708),
    _ = n(956495);
let A = { sm: "heading-lg/bold", lg: "heading-xl/semibold" };
function N(e) {
    let {
            user: t,
            guildId: n,
            displayName: l,
            size: s = "sm",
            pendingDisplayNameStyles: o,
            shouldUnderlineOnHover: d = !1,
            displayNameTrailing: c,
            className: u,
        } = e,
        f = (0, m.A)({ userId: t.id, guildId: n, pendingDisplayNameStyles: o }),
        E = A[s];
    return null != f
        ? (0, a.jsx)(i.E, {
              variant: E,
              className: u,
              children: (0, a.jsx)(p.A, {
                  userName: l,
                  displayNameStyles: f,
                  effectDisplayType: g.G.ANIMATED,
                  textClassName: _.QC,
                  shouldWrap: !0,
                  loop: !0,
                  inProfile: !0,
                  shouldUnderlineOnHover: d,
                  appendedInlineContent: null != c ? (0, a.jsxs)(a.Fragment, { children: [" ", c] }) : null,
              }),
          })
        : (0, a.jsxs)(i.E, { className: r()(_.QC, _.O2, u), variant: E, children: [l, " ", c] });
}
function v(e) {
    let {
            user: t,
            guildId: n,
            displayName: l,
            trailing: i,
            size: o = "sm",
            pendingDisplayNameStyles: d,
            onClickDisplayName: c,
        } = e,
        m = (0, u.r)(t),
        g = null != m ? (0, a.jsx)(f.A, { type: m, verified: t.isVerifiedBot(), className: _.AO }) : null,
        p = (0, a.jsx)(N, {
            user: t,
            guildId: n,
            displayName: l,
            size: o,
            pendingDisplayNameStyles: d,
            shouldUnderlineOnHover: null != c,
            displayNameTrailing: g,
        });
    return (0, a.jsxs)("div", {
        className: r()(_.K$, "lg" === o && _.lg),
        children: [
            null != c ? (0, a.jsx)(s.D, { onClick: c, className: _.vk, children: p }) : p,
            null != i && !1 !== i && (0, a.jsx)("div", { className: _.MU, children: i }),
        ],
    });
}
function R(e) {
    let { pronouns: t, className: n } = e;
    return (0, a.jsxs)(i.E, {
        className: r()(_.hI, n),
        variant: "text-sm/medium",
        color: "text-strong",
        children: [
            (0, a.jsx)(o.A, { tag: "span", children: x.intl.formatToPlainString(x.t["DRI+T7"], { pronouns: t }) }),
            (0, a.jsx)("span", { "aria-hidden": "true", children: t }),
        ],
    });
}
function I() {
    return (0, a.jsx)("div", { "aria-hidden": "true", className: _.SC });
}
function j(e) {
    let {
            user: t,
            usernameIcon: n,
            onClickUsername: l,
            pronouns: i,
            primaryGuild: o,
            contextGuildId: f,
            trailing: m,
            onClose: g,
        } = e,
        p = (0, h.j)({ location: "UserProfileUserInfo" }),
        A = null != i && i.length > 0,
        N = (0, u.r)(t),
        v = t.isProvisional
            ? null
            : (0, a.jsx)(c.A, {
                  user: t,
                  usernameIcon: n,
                  forceUsername: !0,
                  className: _.a1,
                  usernameClass: _.eb,
                  discriminatorClass: _.sw,
                  hideBotTag: !0,
              });
    return (0, a.jsxs)("div", {
        className: r()(_.AK, { [_.j6]: A, [_.w2]: null != N }),
        children: [
            null != v && null != l ? (0, a.jsx)(s.D, { onClick: l, className: _.vk, children: v }) : v,
            A &&
                (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsx)(I, {}),
                        (0, a.jsx)(d.m, {
                            text: x.intl.string(x.t.GI2A8C),
                            delay: b.In,
                            ariaHidden: !0,
                            children: (0, a.jsx)("span", { className: _.Ez, children: (0, a.jsx)(R, { pronouns: i }) }),
                        }),
                    ],
                }),
            (0, a.jsx)(E.Ay, {
                primaryGuild: o,
                userId: t.id,
                contextGuildId: f,
                onClose: g,
                textVariant: p ? "text-xs/normal" : "text-xs/semibold",
                className: p ? _.Bb : _.Mp,
            }),
            m,
        ],
    });
}
function T(e) {
    let {
        user: t,
        guildId: n,
        className: l,
        onClickName: r,
        displayName: i,
        displayNameSize: s,
        pendingDisplayNameStyles: o,
        displayNameTrailing: d,
        usernameIcon: c,
        pronouns: u,
        primaryGuild: f,
        contextGuildId: m,
        trailing: g,
        onClose: p,
    } = e;
    return (0, a.jsxs)("div", {
        className: l,
        children: [
            (0, a.jsx)(v, {
                user: t,
                guildId: n,
                displayName: i,
                size: s,
                pendingDisplayNameStyles: o,
                onClickDisplayName: r,
                trailing: d,
            }),
            (0, a.jsx)(j, {
                user: t,
                usernameIcon: c,
                pronouns: u,
                primaryGuild: f,
                contextGuildId: m,
                onClickUsername: r,
                onClose: p,
                trailing: g,
            }),
        ],
    });
}
