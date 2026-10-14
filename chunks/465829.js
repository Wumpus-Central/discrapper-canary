n.d(t, { Ay: () => j, Ce: () => v, c$: () => A, gU: () => _, n2: () => R });
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
    p = n(660184),
    E = n(534400),
    h = n(518477),
    b = n(660183),
    x = n(956495);
let _ = { sm: "heading-lg/bold", lg: "heading-xl/semibold" };
function A(e) {
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
        E = _[i];
    return null != f
        ? (0, a.jsx)(s.E, {
              variant: E,
              className: u,
              children: (0, a.jsx)(p.A, {
                  userName: l,
                  displayNameStyles: f,
                  effectDisplayType: g.G.ANIMATED,
                  textClassName: x.QC,
                  shouldWrap: !0,
                  loop: !0,
                  inProfile: !0,
                  shouldUnderlineOnHover: d,
                  appendedInlineContent: null != c ? (0, a.jsxs)(a.Fragment, { children: [" ", c] }) : null,
              }),
          })
        : (0, a.jsxs)(s.E, { className: r()(x.QC, x.O2, u), variant: E, children: [l, " ", c] });
}
function N(e) {
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
        g = null != m ? (0, a.jsx)(f.A, { type: m, verified: t.isVerifiedBot(), className: x.AO }) : null,
        p = (0, a.jsx)(A, {
            user: t,
            guildId: n,
            displayName: l,
            size: o,
            pendingDisplayNameStyles: d,
            shouldUnderlineOnHover: null != c,
            displayNameTrailing: g,
        });
    return (0, a.jsxs)("div", {
        className: r()(x.K$, "lg" === o && x.lg),
        children: [
            null != c ? (0, a.jsx)(i.D, { onClick: c, className: x.vk, children: p }) : p,
            null != s && !1 !== s && (0, a.jsx)("div", { className: x.MU, children: s }),
        ],
    });
}
function R(e) {
    let { pronouns: t, className: n } = e;
    return (0, a.jsxs)(s.E, {
        className: r()(x.hI, n),
        variant: "text-sm/medium",
        color: "text-strong",
        children: [
            (0, a.jsx)(o.A, { tag: "span", children: b.intl.formatToPlainString(b.t["DRI+T7"], { pronouns: t }) }),
            (0, a.jsx)("span", { "aria-hidden": "true", children: t }),
        ],
    });
}
function v() {
    return (0, a.jsx)("div", { "aria-hidden": "true", className: x.SC });
}
function I(e) {
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
        p = null != s && s.length > 0,
        _ = (0, u.r)(t),
        A = t.isProvisional
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
        className: r()(x.AK, { [x.j6]: p, [x.w2]: null != _ }),
        children: [
            null != A && null != l ? (0, a.jsx)(i.D, { onClick: l, className: r()(x.qp, x.vk), children: A }) : A,
            p &&
                (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsx)(v, {}),
                        (0, a.jsx)(d.m, {
                            text: b.intl.string(b.t.GI2A8C),
                            delay: h.In,
                            ariaHidden: !0,
                            children: (0, a.jsx)("span", { className: x.Ez, children: (0, a.jsx)(R, { pronouns: s }) }),
                        }),
                    ],
                }),
            (0, a.jsx)(E.Ay, {
                primaryGuild: o,
                userId: t.id,
                contextGuildId: f,
                onClose: g,
                textVariant: "text-xs/normal",
                className: x.Bb,
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
        trailing: g,
        onClose: p,
    } = e;
    return (0, a.jsxs)("div", {
        className: l,
        children: [
            (0, a.jsx)(N, {
                user: t,
                guildId: n,
                displayName: s,
                size: i,
                pendingDisplayNameStyles: o,
                onClickDisplayName: r,
                trailing: d,
            }),
            (0, a.jsx)(I, {
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
