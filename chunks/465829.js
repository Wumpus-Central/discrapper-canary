n.d(t, { Ay: () => T, Ce: () => I, c$: () => R, n2: () => N });
var a = n(627968);
n(64700);
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
    _ = n(518477),
    b = n(375708),
    h = n(211180);
let A = { sm: "heading-lg/bold", lg: "heading-xl/semibold" };
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
        p = A[i];
    return null != f
        ? (0, a.jsx)(s.E, {
              variant: p,
              className: u,
              children: (0, a.jsx)(g.A, {
                  userName: l,
                  displayNameStyles: f,
                  effectDisplayType: m.G.ANIMATED,
                  textClassName: h.QC,
                  shouldWrap: !0,
                  loop: !0,
                  inProfile: !0,
                  shouldUnderlineOnHover: o,
                  appendedInlineContent: null != c ? (0, a.jsxs)(a.Fragment, { children: [" ", c] }) : null,
              }),
          })
        : (0, a.jsxs)(s.E, { className: r()(h.QC, h.O2, u), variant: p, children: [l, " ", c] });
}
function x(e) {
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
        m = null != E ? (0, a.jsx)(f.A, { type: E, verified: t.isVerifiedBot(), className: h.AO }) : null,
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
        className: r()(h.K$, "lg" === d && h.lg),
        children: [
            null != c ? (0, a.jsx)(i.D, { onClick: c, className: h.vk, children: g }) : g,
            null != s && !1 !== s && (0, a.jsx)("div", { className: h.MU, children: s }),
        ],
    });
}
function N(e) {
    let { pronouns: t, className: n } = e;
    return (0, a.jsxs)(s.E, {
        className: r()(h.hI, n),
        variant: "text-sm/medium",
        color: "text-strong",
        children: [
            (0, a.jsx)(d.A, { tag: "span", children: b.intl.formatToPlainString(b.t["DRI+T7"], { pronouns: t }) }),
            (0, a.jsx)("span", { "aria-hidden": "true", children: t }),
        ],
    });
}
function I() {
    return (0, a.jsx)("div", { "aria-hidden": "true", className: h.SC });
}
function v(e) {
    let { user: t, usernameIcon: n, onClickUsername: l, pronouns: s, primaryGuild: d, trailing: f, onClose: E } = e,
        m = null != s && s.length > 0,
        g = (0, u.r)(t),
        A = t.isProvisional
            ? null
            : (0, a.jsx)(c.A, {
                  user: t,
                  usernameIcon: n,
                  forceUsername: !0,
                  className: h.a1,
                  usernameClass: h.eb,
                  discriminatorClass: h.sw,
                  hideBotTag: !0,
              });
    return (0, a.jsxs)("div", {
        className: r()(h.AK, { [h.j6]: m, [h.w2]: null != g }),
        children: [
            null != A && null != l ? (0, a.jsx)(i.D, { onClick: l, className: h.vk, children: A }) : A,
            m &&
                (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsx)(I, {}),
                        (0, a.jsx)(o.m, {
                            text: b.intl.string(b.t.GI2A8C),
                            delay: _.In,
                            ariaHidden: !0,
                            children: (0, a.jsx)("span", { className: h.Ez, children: (0, a.jsx)(N, { pronouns: s }) }),
                        }),
                    ],
                }),
            (0, a.jsx)(p.Ay, { primaryGuild: d, userId: t.id, onClose: E, containerClassName: h.L4, className: h.Mp }),
            f,
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
        pendingDisplayNameStyles: d,
        displayNameTrailing: o,
        usernameIcon: c,
        pronouns: u,
        primaryGuild: f,
        trailing: E,
        onClose: m,
    } = e;
    return (0, a.jsxs)("div", {
        className: l,
        children: [
            (0, a.jsx)(x, {
                user: t,
                guildId: n,
                displayName: s,
                size: i,
                pendingDisplayNameStyles: d,
                onClickDisplayName: r,
                trailing: o,
            }),
            (0, a.jsx)(v, {
                user: t,
                usernameIcon: c,
                pronouns: u,
                primaryGuild: f,
                onClickUsername: r,
                onClose: m,
                trailing: E,
            }),
        ],
    });
}
