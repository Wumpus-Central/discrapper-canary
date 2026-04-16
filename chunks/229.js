"use strict";
n.d(t, { A: () => M });
var i = n(627968),
    s = n(64700),
    r = n(503698),
    l = n.n(r),
    a = n(492462),
    o = n(110259),
    c = n(935399),
    d = n(311907),
    u = n(397927),
    h = n(830215),
    _ = n(475743),
    p = n(17841),
    g = n(965252),
    m = n(139286),
    A = n(908192),
    f = n(669629),
    E = n(854378),
    x = n(491509),
    I = n(895600),
    N = n(274303),
    v = n(942614),
    T = n(976860),
    j = n(210714),
    C = n(961350),
    S = n(153488),
    y = n(650048),
    b = n(954571),
    R = n(203982),
    O = n(161928),
    L = n(890698),
    w = n(538796),
    k = n(652215),
    D = n(68729),
    U = n(771016),
    P = n(985018),
    B = n(731286),
    G = n(818050);
function M(e) {
    let {
            authBoxClassName: t,
            giftCode: n,
            giftCodeSKU: r,
            guildTemplate: M,
            invite: F,
            location: V,
            redirectTo: W,
            onLoginStart: H,
            onRegister: K,
            transitionTo: z = T.pX,
        } = e,
        Q = (0, d.bG)([S.A], () => S.A.getAuthenticationConsentRequired()),
        q = (0, d.bG)([C.default], () => C.default.isAuthenticated()),
        Y = (0, d.bG)([p.A], () => p.A.isUnderageAnonymous()),
        X = (0, d.bG)([N.A], () => N.A.getHasLoggedInAccounts()),
        J = null != e.location ? (0, a.parse)(e.location.search) : {},
        [$, Z] = s.useState(J.email ?? ""),
        [ee, et] = s.useState({}),
        en = (0, _.A)(q),
        ei = (function (e, t, n) {
            if (null != e) return "gift";
            if (null != t) return "guild_template";
            if (null != n) {
                if (null != n.guild) return "guild_invite";
                else if (null != n.channel) return "dm_invite";
                else if (null != n.inviter) return "friend_invite";
            }
            return null;
        })(n, M, F),
        es = null != F && (null != F.guild || null != F.channel),
        er = null != F && null == F.guild && null == F.channel && null != F.inviter,
        el = s.useCallback(() => {
            q && (null != W ? z(W) : z(y.A.defaultRoute));
        }, [q, W, z]);
    (0, c.Ay)(() => {
        el(),
            b.default.track(
                k.HAw.REGISTER_VIEWED,
                {
                    location: null != F ? "Invite Register Page" : "Non-Invite Register Page",
                    registration_source: ei,
                    ...(null != r ? (0, x.A)(r, !1, !1) : {}),
                },
                { flush: !0 },
            ),
            null == Q && h.A.getLocationMetadata(),
            (0, j.d)("register");
    }),
        s.useEffect(() => {
            q && !1 === en && ((0, v.C)(U.zY.ORGANIC_REGISTERED), el());
        }, [q, en, el]);
    let ea = D.ju.FULL;
    Y || null != ee.date_of_birth ? (ea = D.ju.AGE_GATE) : es && (ea = D.ju.INVITE),
        (0, m.A)(
            {
                type: o.ImpressionTypes.VIEW,
                name: o.ImpressionNames.USER_REGISTRATION,
                properties: { impression_group: o.ImpressionGroups.USER_REGISTRATION_FLOW, step: ea },
            },
            {},
            [ea],
        );
    let eo = s.useCallback(
        (e) => {
            let t,
                i = null != V ? (0, a.parse)(V.search) : {};
            null != F
                ? (t = k.BVt.INVITE_LOGIN(F.code))
                : null != n
                  ? (t = k.BVt.GIFT_CODE_LOGIN(n.code))
                  : null != M
                    ? (t = k.BVt.GUILD_TEMPLATE_LOGIN(M.code))
                    : null != W
                      ? ((t = k.BVt.LOGIN), (i.redirect_to = W))
                      : ((t = k.BVt.LOGIN), "" !== $ && (i = { email: $ })),
                h.A.loginReset(),
                z(t, { search: (0, a.stringify)(i), source: "register" }),
                H?.(e),
                R._.dispatch(k.jej.WAVE_EMPHASIZE);
        },
        [$, F, n, M, W, V, H, z],
    );
    if (Y || null != ee.date_of_birth) return (0, i.jsx)(g.A, {});
    if (null != F && es)
        return (0, i.jsx)(f.A, { invite: F, authBoxClassName: t, onApiErrors: et, onGotoLogin: eo, onRegister: K });
    let ec = (0, i.jsx)(E.hE, { children: P.intl.string(P.t.wC4TlR) }, "title"),
        ed = !1;
    null != M
        ? ((ec = (0, i.jsx)(I.A, { guildTemplate: M })), (ed = !0))
        : null != n
          ? (ec = (0, i.jsx)(O.A, { giftCode: n }))
          : null != F &&
            er &&
            F.state === k.elq.RESOLVED &&
            (ec = (0, i.jsx)("div", { className: G.S3, children: (0, i.jsx)(L.A, { invite: F, isRegister: !0 }) }));
    let eu = (0, i.jsx)(A.A, {
        initialEmail: J.email ?? "",
        invite: F,
        giftCode: n,
        guildTemplate: M,
        onApiErrors: et,
        onEmailChange: Z,
        onGotoLogin: eo,
        onRegister: K,
    });
    return ed
        ? (0, i.jsx)(w.A, {
              tag: "section",
              className: l()(t, B.Sy),
              children: () => [
                  ec,
                  (0, i.jsxs)(
                      "div",
                      {
                          className: B.Uu,
                          children: [(0, i.jsx)(E.hE, { className: B.lR, children: P.intl.string(P.t.wC4TlR) }), eu],
                      },
                      "register-title",
                  ),
              ],
          })
        : (0, i.jsxs)(E.Ay, {
              tag: "section",
              className: t,
              children: [
                  X
                      ? (0, i.jsx)("div", {
                            className: B.AX,
                            children: (0, i.jsx)(u.Button, {
                                onClick: eo,
                                variant: "secondary",
                                text: P.intl.string(P.t["1MrpWO"]),
                                icon: u.n2b,
                                iconPosition: "start",
                            }),
                        })
                      : null,
                  ec,
                  eu,
              ],
          });
}
d.Ay.initialize();
