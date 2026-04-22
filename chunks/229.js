"use strict";
n.d(t, { A: () => V });
var i = n(627968),
    s = n(64700),
    r = n(503698),
    l = n.n(r),
    a = n(492462),
    o = n(110259),
    c = n(935399),
    d = n(311907),
    u = n(821609),
    _ = n(921853),
    h = n(830215),
    m = n(475743),
    p = n(17841),
    g = n(965252),
    A = n(139286),
    f = n(908192),
    x = n(669629),
    E = n(854378),
    I = n(491509),
    v = n(895600),
    N = n(274303),
    j = n(942614),
    C = n(976860),
    T = n(210714),
    b = n(961350),
    S = n(153488),
    y = n(650048),
    R = n(954571),
    w = n(203982),
    O = n(161928),
    L = n(890698),
    k = n(538796),
    G = n(652215),
    U = n(68729),
    D = n(771016),
    P = n(985018),
    B = n(731286),
    M = n(818050);
function V(e) {
    let {
            authBoxClassName: t,
            giftCode: n,
            giftCodeSKU: r,
            guildTemplate: V,
            invite: F,
            location: W,
            redirectTo: H,
            onLoginStart: z,
            onRegister: K,
            transitionTo: Q = C.pX,
        } = e,
        q = (0, d.bG)([S.A], () => S.A.getAuthenticationConsentRequired()),
        Y = (0, d.bG)([b.default], () => b.default.isAuthenticated()),
        X = (0, d.bG)([p.A], () => p.A.isUnderageAnonymous()),
        $ = (0, d.bG)([N.A], () => N.A.getHasLoggedInAccounts()),
        Z = null != e.location ? (0, a.parse)(e.location.search) : {},
        [J, ee] = s.useState(Z.email ?? ""),
        [et, en] = s.useState({}),
        ei = (0, m.A)(Y),
        es = (function (e, t, n) {
            if (null != e) return "gift";
            if (null != t) return "guild_template";
            if (null != n) {
                if (null != n.guild) return "guild_invite";
                else if (null != n.channel) return "dm_invite";
                else if (null != n.inviter) return "friend_invite";
            }
            return null;
        })(n, V, F),
        er = null != F && (null != F.guild || null != F.channel),
        el = null != F && null == F.guild && null == F.channel && null != F.inviter,
        ea = s.useCallback(() => {
            Y && (null != H ? Q(H) : Q(y.A.defaultRoute));
        }, [Y, H, Q]);
    (0, c.Ay)(() => {
        ea(),
            R.default.track(
                G.HAw.REGISTER_VIEWED,
                {
                    location: null != F ? "Invite Register Page" : "Non-Invite Register Page",
                    registration_source: es,
                    ...(null != r ? (0, I.A)(r, !1, !1) : {}),
                },
                { flush: !0 },
            ),
            null == q && h.A.getLocationMetadata(),
            (0, T.d)("register");
    }),
        s.useEffect(() => {
            Y && !1 === ei && ((0, j.C)(D.zY.ORGANIC_REGISTERED), ea());
        }, [Y, ei, ea]);
    let eo = U.ju.FULL;
    X || null != et.date_of_birth ? (eo = U.ju.AGE_GATE) : er && (eo = U.ju.INVITE),
        (0, A.A)(
            {
                type: o.ImpressionTypes.VIEW,
                name: o.ImpressionNames.USER_REGISTRATION,
                properties: { impression_group: o.ImpressionGroups.USER_REGISTRATION_FLOW, step: eo },
            },
            {},
            [eo],
        );
    let ec = s.useCallback(
        (e) => {
            let t,
                i = null != W ? (0, a.parse)(W.search) : {};
            null != F
                ? (t = G.BVt.INVITE_LOGIN(F.code))
                : null != n
                  ? (t = G.BVt.GIFT_CODE_LOGIN(n.code))
                  : null != V
                    ? (t = G.BVt.GUILD_TEMPLATE_LOGIN(V.code))
                    : null != H
                      ? ((t = G.BVt.LOGIN), (i.redirect_to = H))
                      : ((t = G.BVt.LOGIN), "" !== J && (i = { email: J })),
                h.A.loginReset(),
                Q(t, { search: (0, a.stringify)(i), source: "register" }),
                z?.(e),
                w._.dispatch(G.jej.WAVE_EMPHASIZE);
        },
        [J, F, n, V, H, W, z, Q],
    );
    if (X || null != et.date_of_birth) return (0, i.jsx)(g.A, {});
    if (null != F && er)
        return (0, i.jsx)(x.A, { invite: F, authBoxClassName: t, onApiErrors: en, onGotoLogin: ec, onRegister: K });
    let ed = (0, i.jsx)(E.hE, { children: P.intl.string(P.t.wC4TlR) }, "title"),
        eu = !1;
    null != V
        ? ((ed = (0, i.jsx)(v.A, { guildTemplate: V })), (eu = !0))
        : null != n
          ? (ed = (0, i.jsx)(O.A, { giftCode: n }))
          : null != F &&
            el &&
            F.state === G.elq.RESOLVED &&
            (ed = (0, i.jsx)("div", { className: M.S3, children: (0, i.jsx)(L.A, { invite: F, isRegister: !0 }) }));
    let e_ = (0, i.jsx)(f.A, {
        initialEmail: Z.email ?? "",
        invite: F,
        giftCode: n,
        guildTemplate: V,
        onApiErrors: en,
        onEmailChange: ee,
        onGotoLogin: ec,
        onRegister: K,
    });
    return eu
        ? (0, i.jsx)(k.A, {
              tag: "section",
              className: l()(t, B.Sy),
              children: () => [
                  ed,
                  (0, i.jsxs)(
                      "div",
                      {
                          className: B.Uu,
                          children: [(0, i.jsx)(E.hE, { className: B.lR, children: P.intl.string(P.t.wC4TlR) }), e_],
                      },
                      "register-title",
                  ),
              ],
          })
        : (0, i.jsxs)(E.Ay, {
              tag: "section",
              className: t,
              children: [
                  $
                      ? (0, i.jsx)("div", {
                            className: B.AX,
                            children: (0, i.jsx)(u.$, {
                                onClick: ec,
                                variant: "secondary",
                                text: P.intl.string(P.t["1MrpWO"]),
                                icon: _.n,
                                iconPosition: "start",
                            }),
                        })
                      : null,
                  ed,
                  e_,
              ],
          });
}
d.Ay.initialize();
