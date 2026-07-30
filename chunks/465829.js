"use strict";
n.d(t, { Ay: () => R, Ce: () => C, c$: () => g, n2: () => N });
var i = n(477900);
n(582128);
var r = n(503698),
    a = n.n(r),
    s = n(834730),
    l = n(939249),
    o = n(140735),
    d = n(866665),
    c = n(297413),
    u = n(296948),
    _ = n(709066),
    E = n(609425),
    A = n(922301),
    h = n(660184),
    I = n(534400),
    f = n(518477),
    p = n(375708),
    T = n(211180);
let m = { sm: "heading-lg/bold", lg: "heading-xl/semibold" };
function g(e) {
    let {
            user: t,
            guildId: n,
            displayName: r,
            size: l = "sm",
            pendingDisplayNameStyles: o,
            shouldUnderlineOnHover: d = !1,
            displayNameTrailing: c,
            className: u,
        } = e,
        _ = (0, E.A)({ userId: t.id, guildId: n, pendingDisplayNameStyles: o }),
        I = m[l];
    return null != _
        ? (0, i.jsx)(s.E, {
              variant: I,
              className: u,
              children: (0, i.jsx)(h.A, {
                  userName: r,
                  displayNameStyles: _,
                  effectDisplayType: A.G.ANIMATED,
                  textClassName: T.QC,
                  shouldWrap: !0,
                  loop: !0,
                  inProfile: !0,
                  shouldUnderlineOnHover: d,
                  appendedInlineContent: null != c ? (0, i.jsxs)(i.Fragment, { children: [" ", c] }) : null,
              }),
          })
        : (0, i.jsxs)(s.E, { className: a()(T.QC, T.O2, u), variant: I, children: [r, " ", c] });
}
function S(e) {
    let {
            user: t,
            guildId: n,
            displayName: r,
            trailing: s,
            size: o = "sm",
            pendingDisplayNameStyles: d,
            onClickDisplayName: c,
        } = e,
        E = (0, u.r)(t),
        A = null != E ? (0, i.jsx)(_.A, { type: E, verified: t.isVerifiedBot(), className: T.AO }) : null,
        h = (0, i.jsx)(g, {
            user: t,
            guildId: n,
            displayName: r,
            size: o,
            pendingDisplayNameStyles: d,
            shouldUnderlineOnHover: null != c,
            displayNameTrailing: A,
        });
    return (0, i.jsxs)("div", {
        className: a()(T.K$, "lg" === o && T.lg),
        children: [
            null != c ? (0, i.jsx)(l.D, { onClick: c, className: T.vk, children: h }) : h,
            null != s && !1 !== s && (0, i.jsx)("div", { className: T.MU, children: s }),
        ],
    });
}
function N(e) {
    let { pronouns: t, className: n } = e;
    return (0, i.jsxs)(s.E, {
        className: a()(T.hI, n),
        variant: "text-sm/medium",
        color: "text-strong",
        children: [
            (0, i.jsx)(o.A, { tag: "span", children: p.intl.formatToPlainString(p.t["DRI+T7"], { pronouns: t }) }),
            (0, i.jsx)("span", { "aria-hidden": "true", children: t }),
        ],
    });
}
function C() {
    return (0, i.jsx)("div", { "aria-hidden": "true", className: T.SC });
}
function O(e) {
    let { user: t, usernameIcon: n, onClickUsername: r, pronouns: s, primaryGuild: o, trailing: _, onClose: E } = e,
        A = null != s && s.length > 0,
        h = (0, u.r)(t),
        m = t.isProvisional
            ? null
            : (0, i.jsx)(c.A, {
                  user: t,
                  usernameIcon: n,
                  forceUsername: !0,
                  className: T.a1,
                  usernameClass: T.eb,
                  discriminatorClass: T.sw,
                  hideBotTag: !0,
              });
    return (0, i.jsxs)("div", {
        className: a()(T.AK, { [T.j6]: A, [T.w2]: null != h }),
        children: [
            null != m && null != r ? (0, i.jsx)(l.D, { onClick: r, className: T.vk, children: m }) : m,
            A &&
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(C, {}),
                        (0, i.jsx)(d.m, {
                            text: p.intl.string(p.t.GI2A8C),
                            delay: f.In,
                            ariaHidden: !0,
                            children: (0, i.jsx)("span", { className: T.Ez, children: (0, i.jsx)(N, { pronouns: s }) }),
                        }),
                    ],
                }),
            (0, i.jsx)(I.Ay, { primaryGuild: o, userId: t.id, onClose: E, containerClassName: T.L4, className: T.Mp }),
            _,
        ],
    });
}
function R(e) {
    let {
        user: t,
        guildId: n,
        className: r,
        onClickName: a,
        displayName: s,
        displayNameSize: l,
        pendingDisplayNameStyles: o,
        displayNameTrailing: d,
        usernameIcon: c,
        pronouns: u,
        primaryGuild: _,
        trailing: E,
        onClose: A,
    } = e;
    return (0, i.jsxs)("div", {
        className: r,
        children: [
            (0, i.jsx)(S, {
                user: t,
                guildId: n,
                displayName: s,
                size: l,
                pendingDisplayNameStyles: o,
                onClickDisplayName: a,
                trailing: d,
            }),
            (0, i.jsx)(O, {
                user: t,
                usernameIcon: c,
                pronouns: u,
                primaryGuild: _,
                onClickUsername: a,
                onClose: A,
                trailing: E,
            }),
        ],
    });
}
