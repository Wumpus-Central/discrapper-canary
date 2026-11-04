var a = n(477900);
n(582128);
var r = n(503698),
    l = n.n(r),
    s = n(834730),
    i = n(939249),
    o = n(140735),
    d = n(866665),
    c = n(297413),
    u = n(296948),
    f = n(709066),
    m = n(609425),
    g = n(922301),
    p = n(16371),
    E = n(534400);
n(518477);
var h = n(792996),
    b = n(956495);
let x = { sm: "heading-lg/semibold", lg: "heading-xl/semibold" };
function A(e) {
    let {
            user: t,
            guildId: n,
            displayName: r,
            size: i = "sm",
            pendingDisplayNameStyles: o,
            shouldUnderlineOnHover: d = !1,
            displayNameTrailing: c,
            className: u,
        } = e,
        f = (0, m.A)({ userId: t.id, guildId: n, pendingDisplayNameStyles: o }),
        E = x[i];
    return null != f
        ? (0, a.jsx)(s.E, {
              variant: E,
              className: u,
              children: (0, a.jsx)(p.A, {
                  userName: r,
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
        : (0, a.jsxs)(s.E, { className: l()(b.QC, b.O2, u), variant: E, children: [r, " ", c] });
}
function _(e) {
    let {
            user: t,
            guildId: n,
            displayName: r,
            trailing: s,
            size: o = "sm",
            pendingDisplayNameStyles: d,
            onClickDisplayName: c,
        } = e,
        m = (0, u.r)(t),
        g = null != m ? (0, a.jsx)(f.A, { type: m, verified: t.isVerifiedBot(), className: b.AO }) : null,
        p = (0, a.jsx)(A, {
            user: t,
            guildId: n,
            displayName: r,
            size: o,
            pendingDisplayNameStyles: d,
            shouldUnderlineOnHover: null != c,
            displayNameTrailing: g,
        });
    return (0, a.jsxs)("div", {
        className: l()(b.K$, "lg" === o && b.lg),
        children: [
            null != c ? (0, a.jsx)(i.D, { onClick: c, className: b.vk, children: p }) : p,
            null != s && !1 !== s && (0, a.jsx)("div", { className: b.MU, children: s }),
        ],
    });
}
function N(e) {
    let { pronouns: t, className: n } = e;
    return (0, a.jsxs)(s.E, {
        className: l()(b.hI, n),
        variant: "body-sm/normal",
        color: "text-strong",
        children: [
            (0, a.jsx)(o.A, { tag: "span", children: h.intl.formatToPlainString(h.t["DRI+T7"], { pronouns: t }) }),
            (0, a.jsx)("span", { "aria-hidden": "true", children: t }),
        ],
    });
}
function R() {
    return (0, a.jsx)("div", { "aria-hidden": "true", className: b.SC });
}
function v(e) {
    let {
            user: t,
            usernameIcon: n,
            onClickUsername: r,
            pronouns: s,
            primaryGuild: o,
            contextGuildId: f,
            trailing: m,
            onClose: g,
            onCreateTag: p,
        } = e,
        x = null != s && s.length > 0,
        A = (0, u.r)(t),
        _ = t.isProvisional
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
        className: l()(b.AK, { [b.j6]: x, [b.w2]: null != A }),
        children: [
            null != _ && null != r ? (0, a.jsx)(i.D, { onClick: r, className: l()(b.qp, b.vk), children: _ }) : _,
            x &&
                (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsx)(R, {}),
                        (0, a.jsx)(d.m, {
                            text: h.intl.string(h.t.GI2A8C),
                            delay: 300,
                            ariaHidden: !0,
                            children: (0, a.jsx)("span", { className: b.Ez, children: (0, a.jsx)(N, { pronouns: s }) }),
                        }),
                    ],
                }),
            (0, a.jsx)(E.Ay, {
                primaryGuild: o,
                userId: t.id,
                contextGuildId: f,
                onClose: g,
                onCreateTag: p,
                textVariant: "body-xs/normal",
                className: b.Bb,
            }),
            m,
        ],
    });
}
n.d(
    t,
    {},
    {
        Ay: function (e) {
            let {
                user: t,
                guildId: n,
                className: r,
                onClickName: l,
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
                className: r,
                children: [
                    (0, a.jsx)(_, {
                        user: t,
                        guildId: n,
                        displayName: s,
                        size: i,
                        pendingDisplayNameStyles: o,
                        onClickDisplayName: l,
                        trailing: d,
                    }),
                    (0, a.jsx)(v, {
                        user: t,
                        usernameIcon: c,
                        pronouns: u,
                        primaryGuild: f,
                        contextGuildId: m,
                        onClickUsername: l,
                        onClose: p,
                        onCreateTag: E,
                        trailing: g,
                    }),
                ],
            });
        },
        Ce: R,
        c$: A,
        gU: x,
        n2: N,
    },
);
