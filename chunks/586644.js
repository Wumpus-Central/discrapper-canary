"use strict";
n.d(t, { A: () => I });
var i = n(627968);
n(64700);
var r = n(503698),
    s = n.n(r),
    a = n(990078),
    o = n(939249),
    l = n(834730),
    d = n(140735),
    _ = n(297413),
    u = n(705751),
    c = n(709066),
    E = n(609425),
    h = n(922301),
    m = n(368919),
    f = n(534400),
    g = n(518477),
    p = n(985018),
    A = n(312663);
function I(e) {
    let t,
        {
            user: n,
            guildId: r,
            usernameIcon: I,
            tags: T,
            nickname: S,
            nicknameIcons: N,
            pendingDisplayNameStyles: C,
            pronouns: R,
            primaryGuild: O,
            className: y,
            tagClassName: v,
            onOpenProfile: D,
            onClose: L,
            nicknameVariant: b = "heading-lg/bold",
        } = e,
        w = (e) => (null == D ? e : (0, i.jsx)(o.D, { onClick: D, className: A.pt, children: e })),
        P = null != R && R.length > 0,
        k = (n.isSystemUser() ? (t = u.nu.SYSTEM_DM) : n.bot && (t = u.nu.BOT), t),
        M = (0, E.A)({ userId: n.id, guildId: r, pendingDisplayNameStyles: C }),
        U = null != M,
        x = null != k ? (0, i.jsx)(c.A, { type: k, verified: n.isVerifiedBot(), className: A.AO }) : null;
    return (0, i.jsxs)("div", {
        className: s()(A.kL, { [A.Od]: null != k }, y),
        children: [
            (0, i.jsxs)("div", {
                className: A.Fj,
                children: [
                    w(
                        U
                            ? (0, i.jsx)(l.E, {
                                  variant: b,
                                  children: (0, i.jsx)(m.A, {
                                      userName: S,
                                      displayNameStyles: M,
                                      effectDisplayType: h.G.ANIMATED,
                                      textClassName: A.iA,
                                      shouldWrap: !0,
                                      loop: !0,
                                      inProfile: !0,
                                      shouldUnderlineOnHover: null != D,
                                      appendedInlineContent:
                                          null != x ? (0, i.jsxs)(i.Fragment, { children: [" ", x] }) : null,
                                  }),
                              })
                            : (0, i.jsxs)(l.E, { className: A.$R, variant: b, children: [S, " ", x] }),
                    ),
                    null != N && (0, i.jsx)("div", { className: A.t4, children: N }),
                ],
            }),
            (0, i.jsxs)("div", {
                className: s()(A._A, { [A.hI]: P, [A.Od]: null != k }),
                children: [
                    !n.isProvisional &&
                        w(
                            (0, i.jsx)(_.A, {
                                user: n,
                                usernameIcon: I,
                                forceUsername: !0,
                                className: s()(A.a1, v),
                                usernameClass: A.eb,
                                discriminatorClass: A.sw,
                                hideBotTag: !0,
                            }),
                        ),
                    P &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)("div", { "aria-hidden": "true", className: A.SC }),
                                (0, i.jsx)(a.m, {
                                    asContainer: !0,
                                    text: p.intl.string(p.t.GI2A8C),
                                    delay: g.In,
                                    ariaHidden: !0,
                                    children: (0, i.jsxs)(l.E, {
                                        className: s()(A.kc, v),
                                        variant: "text-sm/medium",
                                        color: "text-strong",
                                        children: [
                                            (0, i.jsx)(d.A, {
                                                tag: "span",
                                                children: p.intl.formatToPlainString(p.t["DRI+T7"], { pronouns: R }),
                                            }),
                                            (0, i.jsx)("span", { "aria-hidden": "true", children: R }),
                                        ],
                                    }),
                                }),
                            ],
                        }),
                    (0, i.jsx)(f.Ay, {
                        primaryGuild: O,
                        userId: n.id,
                        onClose: L,
                        containerClassName: A.L4,
                        className: A.Mp,
                    }),
                    T,
                ],
            }),
        ],
    });
}
