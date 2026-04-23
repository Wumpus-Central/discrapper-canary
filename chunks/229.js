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
    g = n(17841),
    p = n(965252),
    A = n(139286),
    f = n(908192),
    E = n(669629),
    x = n(854378),
    I = n(491509),
    v = n(895600),
    N = n(274303),
    j = n(942614),
    C = n(976860),
    T = n(210714),
    y = n(961350),
    b = n(153488),
    S = n(650048),
    R = n(954571),
    O = n(203982),
    L = n(161928),
    w = n(890698),
    k = n(538796),
    G = n(652215),
    D = n(68729),
    P = n(771016),
    U = n(985018),
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
        Y = (0, d.bG)([b.A], () => b.A.getAuthenticationConsentRequired()),
        q = (0, d.bG)([y.default], () => y.default.isAuthenticated()),
        X = (0, d.bG)([g.A], () => g.A.isUnderageAnonymous()),
        $ = (0, d.bG)([N.A], () => N.A.getHasLoggedInAccounts()),
        Z = null != e.location ? (0, a.parse)(e.location.search) : {},
        [J, ee] = s.useState(Z.email ?? ""),
        [et, en] = s.useState({}),
        ei = (0, m.A)(q),
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
            q && (null != H ? Q(H) : Q(S.A.defaultRoute));
        }, [q, H, Q]);
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
            null == Y && h.A.getLocationMetadata(),
            (0, T.d)("register");
    }),
        s.useEffect(() => {
            q && !1 === ei && ((0, j.C)(P.zY.ORGANIC_REGISTERED), ea());
        }, [q, ei, ea]);
    let eo = D.ju.FULL;
    X || null != et.date_of_birth ? (eo = D.ju.AGE_GATE) : er && (eo = D.ju.INVITE),
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
                O._.dispatch(G.jej.WAVE_EMPHASIZE);
        },
        [J, F, n, V, H, W, z, Q],
    );
    if (X || null != et.date_of_birth) return (0, i.jsx)(p.A, {});
    if (null != F && er)
        return (0, i.jsx)(E.A, { invite: F, authBoxClassName: t, onApiErrors: en, onGotoLogin: ec, onRegister: K });
    let ed = (0, i.jsx)(x.hE, { children: U.intl.string(U.t.wC4TlR) }, "title"),
        eu = !1;
    null != V
        ? ((ed = (0, i.jsx)(v.A, { guildTemplate: V })), (eu = !0))
        : null != n
          ? (ed = (0, i.jsx)(L.A, { giftCode: n }))
          : null != F &&
            el &&
            F.state === G.elq.RESOLVED &&
            (ed = (0, i.jsx)("div", { className: M.S3, children: (0, i.jsx)(w.A, { invite: F, isRegister: !0 }) }));
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
                          children: [(0, i.jsx)(x.hE, { className: B.lR, children: U.intl.string(U.t.wC4TlR) }), e_],
                      },
                      "register-title",
                  ),
              ],
          })
        : (0, i.jsxs)(x.Ay, {
              tag: "section",
              className: t,
              children: [
                  $
                      ? (0, i.jsx)("div", {
                            className: B.AX,
                            children: (0, i.jsx)(u.$, {
                                onClick: ec,
                                variant: "secondary",
                                text: U.intl.string(U.t["1MrpWO"]),
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
