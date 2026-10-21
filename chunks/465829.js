n.d(t, { Ay: () => I, Ce: () => v, c$: () => _, gU: () => A, n2: () => R });
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
    x = n(105292),
    b = n(956495);
let A = { sm: "heading-lg/bold", lg: "heading-xl/semibold" };
function _(e) {
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
        E = A[i];
    return null != f
        ? (0, a.jsx)(s.E, {
              variant: E,
              className: u,
              children: (0, a.jsx)(p.A, {
                  userName: l,
                  displayNameStyles: f,
                  effectDisplayType: g.G.ANIMATED,
                  textClassName: b.QC,
                  shouldWrap: !0,
                  loop: !0,
                  inProfile: !0,
                  shouldUnderlineOnHover: d,
                  appendedInlineContent: null != c ? (0, a.jsxs)(a.Fragment, { children: [" ", c] }) : null,
              }),
          })
        : (0, a.jsxs)(s.E, { className: r()(b.QC, b.O2, u), variant: E, children: [l, " ", c] });
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
        g = null != m ? (0, a.jsx)(f.A, { type: m, verified: t.isVerifiedBot(), className: b.AO }) : null,
        p = (0, a.jsx)(_, {
            user: t,
            guildId: n,
            displayName: l,
            size: o,
            pendingDisplayNameStyles: d,
            shouldUnderlineOnHover: null != c,
            displayNameTrailing: g,
        });
    return (0, a.jsxs)("div", {
        className: r()(b.K$, "lg" === o && b.lg),
        children: [
            null != c ? (0, a.jsx)(i.D, { onClick: c, className: b.vk, children: p }) : p,
            null != s && !1 !== s && (0, a.jsx)("div", { className: b.MU, children: s }),
        ],
    });
}
function R(e) {
    let { pronouns: t, className: n } = e;
    return (0, a.jsxs)(s.E, {
        className: r()(b.hI, n),
        variant: "text-sm/medium",
        color: "text-strong",
        children: [
            (0, a.jsx)(o.A, { tag: "span", children: x.intl.formatToPlainString(x.t["DRI+T7"], { pronouns: t }) }),
            (0, a.jsx)("span", { "aria-hidden": "true", children: t }),
        ],
    });
}
function v() {
    return (0, a.jsx)("div", { "aria-hidden": "true", className: b.SC });
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
            onCreateTag: p,
        } = e,
        A = null != s && s.length > 0,
        _ = (0, u.r)(t),
        N = t.isProvisional
            ? null
            : (0, a.jsx)(c.A, {
                  user: t,
                  usernameIcon: n,
                  forceUsername: !0,
                  className: b.a1,
                  usernameClass: b.eb,
                  discriminatorClass: b.sw,
                  hideBotTag: !0,
              });
    return (0, a.jsxs)("div", {
        className: r()(b.AK, { [b.j6]: A, [b.w2]: null != _ }),
        children: [
            null != N && null != l ? (0, a.jsx)(i.D, { onClick: l, className: r()(b.qp, b.vk), children: N }) : N,
            A &&
                (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsx)(v, {}),
                        (0, a.jsx)(d.m, {
                            text: x.intl.string(x.t.GI2A8C),
                            delay: h.In,
                            ariaHidden: !0,
                            children: (0, a.jsx)("span", { className: b.Ez, children: (0, a.jsx)(R, { pronouns: s }) }),
                        }),
                    ],
                }),
            (0, a.jsx)(E.Ay, {
                primaryGuild: o,
                userId: t.id,
                contextGuildId: f,
                onClose: g,
                onCreateTag: p,
                textVariant: "text-xs/normal",
                className: b.Bb,
            }),
            m,
        ],
    });
}
function I(e) {
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
        onCreateTag: E,
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
            (0, a.jsx)(j, {
                user: t,
                usernameIcon: c,
                pronouns: u,
                primaryGuild: f,
                contextGuildId: m,
                onClickUsername: r,
                onClose: p,
                onCreateTag: E,
                trailing: g,
            }),
        ],
    });
}
