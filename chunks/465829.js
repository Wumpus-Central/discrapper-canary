n.d(t, { Ay: () => T, Ce: () => I, c$: () => v, n2: () => N });
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
    g = n(922301),
    E = n(660184),
    p = n(534400),
    b = n(436921),
    h = n(518477),
    x = n(375708),
    _ = n(956495);
let A = { sm: "heading-lg/bold", lg: "heading-xl/semibold" };
function v(e) {
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
              children: (0, a.jsx)(E.A, {
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
        : (0, a.jsxs)(s.E, { className: r()(_.QC, _.O2, u), variant: p, children: [l, " ", c] });
}
function R(e) {
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
        g = null != m ? (0, a.jsx)(f.A, { type: m, verified: t.isVerifiedBot(), className: _.AO }) : null,
        E = (0, a.jsx)(v, {
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
            null != c ? (0, a.jsx)(i.D, { onClick: c, className: _.vk, children: E }) : E,
            null != s && !1 !== s && (0, a.jsx)("div", { className: _.MU, children: s }),
        ],
    });
}
function N(e) {
    let { pronouns: t, className: n } = e;
    return (0, a.jsxs)(s.E, {
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
            pronouns: s,
            primaryGuild: o,
            contextGuildId: f,
            trailing: m,
            onClose: g,
        } = e,
        E = (0, b.j)({ location: "UserProfileUserInfo" }),
        A = null != s && s.length > 0,
        v = (0, u.r)(t),
        R = t.isProvisional
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
        className: r()(_.AK, { [_.j6]: A, [_.w2]: null != v }),
        children: [
            null != R && null != l ? (0, a.jsx)(i.D, { onClick: l, className: _.vk, children: R }) : R,
            A &&
                (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsx)(I, {}),
                        (0, a.jsx)(d.m, {
                            text: x.intl.string(x.t.GI2A8C),
                            delay: h.In,
                            ariaHidden: !0,
                            children: (0, a.jsx)("span", { className: _.Ez, children: (0, a.jsx)(N, { pronouns: s }) }),
                        }),
                    ],
                }),
            (0, a.jsx)(p.Ay, {
                primaryGuild: o,
                userId: t.id,
                contextGuildId: f,
                onClose: g,
                textVariant: E ? "text-xs/normal" : "text-xs/semibold",
                className: E ? _.Bb : _.Mp,
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
        displayName: s,
        displayNameSize: i,
        pendingDisplayNameStyles: o,
        displayNameTrailing: d,
        usernameIcon: c,
        pronouns: u,
        primaryGuild: f,
        contextGuildId: m,
        trailing: g,
        onClose: E,
    } = e;
    return (0, a.jsxs)("div", {
        className: l,
        children: [
            (0, a.jsx)(R, {
                user: t,
                guildId: n,
                displayName: s,
                size: i,
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
                onClose: E,
                trailing: g,
            }),
        ],
    });
}
