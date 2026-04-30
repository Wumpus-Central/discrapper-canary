n.d(t, { A: () => eI });
var l = n(627968),
    a = n(64700),
    s = n(935399),
    i = n(17928),
    r = n(289873),
    o = n(830215),
    u = n(6981),
    c = n(475743),
    d = n(503698),
    h = n.n(d),
    m = n(707554),
    g = n(821609),
    f = n(854378),
    _ = n(652215),
    A = n(985018),
    x = n(379154),
    E = n(818050);
function p(e) {
    let { loginStatus: t, authBoxClassName: n, onSubmit: a, onCancelAccountDeletion: s } = e,
        i = t === _.aUe.ACCOUNT_DISABLED,
        r = i ? A.intl.string(A.t["j3rC+U"]) : A.intl.string(A.t.ZFWofo),
        o = i ? A.intl.string(A.t["6eNTWe"]) : A.intl.string(A.t["pCBti+"]);
    return (0, l.jsx)(f.Ay, {
        tag: "form",
        onSubmit: a,
        className: n,
        children: (0, l.jsxs)(m.F, {
            component: (0, l.jsx)(f.hE, { className: E.QB, children: r }),
            children: [
                (0, l.jsx)(f.tK, { className: E.SX, children: o }),
                (0, l.jsxs)(f.eB, {
                    children: [
                        (0, l.jsx)(g.$, { text: A.intl.string(A.t.JhDw5o), fullWidth: !0, type: "submit" }),
                        (0, l.jsx)("div", {
                            className: h()(E.Ot, x.Qt),
                            children: A.intl.format(A.t.js2rr5, { onClick: s }),
                        }),
                    ],
                }),
            ],
        }),
    });
}
var S = n(492462),
    j = n(607399),
    N = n(921853),
    C = n(123292),
    R = n(331322),
    v = n(161928),
    I = n(504394),
    b = n(275538),
    y = n(538796),
    w = n(895600);
n(323874), n(14289), n(35956);
var k = n(80703),
    T = n(636537),
    L = n(506774),
    G = n(834730),
    F = n(228366),
    O = n(495544),
    U = n(954571),
    B = n(927813),
    D = n(104798),
    M = n(1959);
let P = "mweb_handoff_nonce",
    V = "mweb_handoff_nonce_expiration",
    W = +B.A.Millis.MINUTE,
    H = new Set(["nonce_missing", "nonce_expired", "handoff_exchange"]),
    Q = new Set(["deep_link_failed"]),
    X = () => {
        L.w.remove(P), L.w.remove(V);
    },
    q = () => {
        let e = (0, i.bG)([O.default], () => O.default.getFingerprint()),
            { fingerprint: t, handoff_token: n } = (0, S.parse)(window.location.search),
            s = Array.isArray(t) ? (t.length > 1 ? t[0] : null) : t,
            r = s ?? (null !== e ? e : void 0);
        a.useEffect(() => {
            null !== s && e !== s && F.h.dispatch({ type: "FINGERPRINT", fingerprint: s });
        }, [s, e]);
        let [u, c] = a.useState(null),
            d = a.useCallback(
                (e) => {
                    c(e),
                        U.default.track(
                            _.HAw.MOBILE_WEB_HANDOFF_FAILURE,
                            { reason: e, fingerprint: (0, k.v)(r) },
                            { fingerprint: r },
                        );
                },
                [c, r],
            ),
            h = L.w.get(P);
        if (
            ("null" === n && null === u && d("deep_link_failed"),
            null != n && "null" !== n && null == h && null === u && d("nonce_missing"),
            a.useEffect(() => {
                if (null != h) {
                    let e = L.w.get(V);
                    (null == e || Date.now() >= e) && (d("nonce_expired"), X());
                }
            }, [h, d]),
            a.useEffect(() => {
                null != n &&
                    "null" !== n &&
                    null != h &&
                    null == u &&
                    T.Bo.post({ url: _.Rsh.HANDOFF_EXCHANGE, body: { key: h, handoff_token: n }, rejectWithError: !0 })
                        .then((e) => o.A.loginToken(e.body.token, !1))
                        .then(() => {
                            U.default.track(_.HAw.LOGIN_SUCCESSFUL, {
                                source: _.mdB.MOBILE_WEB_HANDOFF,
                                is_new_user: !1,
                                fingerprint: (0, k.v)(r),
                            });
                            let e = new URL(window.location.href),
                                t = new URLSearchParams(e.search);
                            t.delete("handoff_token"),
                                t.delete("fingerprint"),
                                (e.search = t.toString()),
                                window.history.pushState(null, "", e);
                        })
                        .catch(() => {
                            d("handoff_exchange");
                        })
                        .finally(() => {
                            X();
                        });
            }, [n, h, u, r, d]),
            null == r)
        )
            return null;
        let m =
            null == u
                ? (0, l.jsxs)(l.Fragment, {
                      children: [A.intl.string(A.t.uJ1JsY), (0, l.jsx)("br", {}), A.intl.string(A.t.GHVWAs)],
                  })
                : Q.has(u)
                  ? A.intl.string(A.t.EPt55r)
                  : H.has(u)
                    ? A.intl.string(A.t.g87kTp)
                    : void 0;
        return null != u && Q.has(u)
            ? (0, l.jsx)("div", {
                  className: M.Un,
                  children: (0, l.jsx)(G.E, {
                      color: "interactive-text-default",
                      variant: "text-sm/semibold",
                      children: m,
                  }),
              })
            : (0, l.jsxs)("div", {
                  className: M.kL,
                  children: [
                      (0, l.jsx)(G.E, { variant: "text-sm/semibold", children: m }),
                      (0, l.jsx)(g.$, {
                          variant: "overlay-primary",
                          text: A.intl.string(A.t.NcC759),
                          onClick: () => {
                              let e = D.A.generateNonce();
                              L.w.set(P, e), L.w.set(V, Date.now() + W);
                              let t = new URL(_.J$u),
                                  n = new URLSearchParams(window.location.search);
                              n.delete("fingerprint"), n.delete("handoff_token");
                              let l = new URLSearchParams();
                              l.set("redirect", encodeURIComponent(window.location.pathname + n.toString())),
                                  l.set("key", e),
                                  l.set("fingerprint", r),
                                  (t.search = l.toString()),
                                  U.default.track(
                                      _.HAw.DEEP_LINK_CLICKED,
                                      { fingerprint: (0, k.v)(r), source: "mobile_web_handoff", destination: _.J$u },
                                      { fingerprint: r, flush: !0 },
                                  ),
                                  (window.location.href = t.toString());
                          },
                      }),
                  ],
              });
    };
var z = n(274303),
    Z = n(110259),
    $ = n(139286),
    K = n(970573),
    Y = n(364488);
function J(e) {
    let { onDismiss: t } = e;
    return (
        (0, $.A)({ type: Z.ImpressionTypes.MODAL, name: Z.ImpressionNames.MULTI_ACCOUNT_SWITCH_LANDING }),
        (0, l.jsxs)(f.Ay, {
            className: Y.ci,
            children: [
                (0, l.jsx)(f.hE, { children: A.intl.string(A.t.bVbB63) }),
                (0, l.jsx)(G.E, {
                    className: Y.PK,
                    variant: "text-md/normal",
                    color: "text-default",
                    children: A.intl.string(A.t["0M5fN7"]),
                }),
                (0, l.jsx)(K.A, {
                    actionText: A.intl.string(A.t["DSN+hw"]),
                    onAction: (e) => {
                        e === K.X.LOGIN_REQUIRED && t();
                    },
                }),
                (0, l.jsx)("div", {
                    className: Y.o1,
                    children: (0, l.jsx)(C.Q, {
                        variant: "secondary",
                        size: "md",
                        textVariant: "text-sm/medium",
                        text: A.intl.string(A.t["9g2mqT"]),
                        onClick: t,
                    }),
                }),
            ],
        })
    );
}
var ee = n(148864),
    et = n(354948),
    en = n(723702);
function el(e) {
    let {
        authBoxClassName: t,
        country: n,
        login: a,
        password: s,
        onLoginChange: i,
        onPasswordChange: r,
        loginRef: o,
        passwordRef: u,
    } = e;
    return (0, l.jsxs)(f.Ay, {
        className: t,
        children: [
            (0, l.jsx)(I.M, {}),
            (0, l.jsxs)(f.eB, {
                className: E.QX,
                children: [
                    (0, l.jsx)(et.A, {
                        className: E.SX,
                        alpha2: n.alpha2,
                        countryCode: n.code.split(" ")[0],
                        label: A.intl.string(A.t.tUjnxr),
                        onChange: i,
                        setRef: o,
                        autoCapitalize: "none",
                        autoComplete: "username webauthn",
                        autoCorrect: "off",
                        spellCheck: "false",
                        value: a,
                        autoFocus: !0,
                        required: !0,
                    }),
                    (0, l.jsx)(f.pd, {
                        className: E.SX,
                        label: A.intl.string(A.t["CIGa+7"]),
                        onChange: r,
                        type: "password",
                        setRef: u,
                        autoComplete: "current-password",
                        spellCheck: "false",
                        value: s,
                        required: !0,
                    }),
                    (0, l.jsx)("div", {
                        className: E.QB,
                        children: (0, l.jsx)(g.$, {
                            text: A.intl.string(A.t.dKhVQN),
                            fullWidth: !0,
                            type: "submit",
                            disabled: !0,
                        }),
                    }),
                    (0, l.jsx)(C.Q, { text: A.intl.string(A.t.wWIufs), textVariant: "text-sm/normal", disabled: !0 }),
                    (0, l.jsx)("div", {
                        className: E.a5,
                        children: (0, l.jsx)(C.Q, {
                            text: A.intl.string(A.t.tmE73r),
                            textVariant: "text-sm/normal",
                            disabled: !0,
                        }),
                    }),
                ],
            }),
        ],
    });
}
var ea = n(401755);
function es(e, t) {
    if (null == t[e]) return null;
    {
        let n = t[e];
        return Array.isArray(n) ? n[0] : n;
    }
}
function ei(e) {
    let t,
        {
            invite: n,
            guildTemplate: s,
            giftCode: r,
            authBoxClassName: o,
            disableAutofocusOnDefaultForm: u,
            login: d,
            password: p,
            errors: k,
            loginSource: T,
            dismissedChooseAccount: L,
            setDismissedChooseAccount: G,
            conditionalMediationAbortController: F,
            onLoginChange: B,
            onPasswordChange: D,
            handleLogin: M,
            handleForgotPassword: P,
            handleGotoRegister: V,
        } = e,
        W = (0, i.bG)([ee.A], () => ee.A.getCountryCode()),
        H = (0, i.bG)([O.default], () => O.default.getLoginStatus()),
        Q = (0, i.bG)([z.A], () => z.A.getHasLoggedInAccounts()),
        X = a.useCallback(
            (e) => {
                U.default.track(_.HAw.LOGIN_SUCCESSFUL, {
                    source: _.mdB.QR_CODE,
                    login_source: T,
                    gift_code_sku_id: r?.skuId ?? null,
                    is_new_user: !1,
                    login_method: "remote_auth",
                    login_instance_id: e ?? null,
                });
            },
            [T, r],
        ),
        { handoff_token: Z } = (0, S.parse)(window.location.search),
        $ = j.Fr && j.KY && null != Z,
        K = null == k.email && null != k.password,
        Y = a.useRef(null),
        ei = a.useRef(null),
        er = (0, c.A)(k);
    a.useEffect(() => {
        let e = (e) => null != k[e];
        null != er &&
            er !== k &&
            (e("password") ? ei.current?.focus() : (e("email") || e("login")) && Y.current?.focus());
    }, [k, Y, ei, er]),
        (t =
            null != n
                ? (0, l.jsx)("div", { className: E.S3, children: (0, l.jsx)(I.A, { invite: n }) })
                : null != r
                  ? (0, l.jsx)(v.A, { giftCode: r })
                  : (0, l.jsxs)("div", {
                        className: x.wx,
                        children: [
                            (0, l.jsx)(f.hE, { className: E.QB, children: A.intl.string(A.t["7fNJgA"]) }, "title"),
                            !1 === (0, en.isAndroidWeb)()
                                ? (0, l.jsx)(f.tK, { children: A.intl.string(A.t.euS7r4) }, "subtitle")
                                : null,
                        ],
                    }));
    let eo = (0, l.jsxs)("div", {
        className: x.Eh,
        children: [
            Q &&
                L &&
                (0, l.jsx)("div", {
                    className: x.AX,
                    children: (0, l.jsx)(g.$, {
                        onClick: () => G(!1),
                        variant: "secondary",
                        text: A.intl.string(A.t["1MrpWO"]),
                        icon: N.n,
                    }),
                }),
            t,
            (0, l.jsx)(m.F, {
                children: (0, l.jsxs)(f.eB, {
                    className: E.QX,
                    children: [
                        (0, l.jsx)(et.A, {
                            alpha2: W.alpha2,
                            countryCode: W.code.split(" ")[0],
                            className: E.SX,
                            label: A.intl.string(A.t.tUjnxr),
                            error: es("login", k) ?? es("email", k),
                            onChange: B,
                            setRef: Y,
                            autoCapitalize: "none",
                            autoComplete: "username webauthn",
                            autoCorrect: "off",
                            spellCheck: "false",
                            value: d,
                            autoFocus: !K && !$ && !u,
                            required: !0,
                        }),
                        (0, l.jsx)(f.pd, {
                            label: A.intl.string(A.t["CIGa+7"]),
                            error: es("password", k),
                            onChange: D,
                            name: "password",
                            type: "password",
                            setRef: ei,
                            autoComplete: "current-password",
                            spellCheck: "false",
                            autoFocus: K && !$ && !u,
                            value: p,
                            required: !0,
                        }),
                        (0, l.jsx)("div", {
                            className: h()(E.SX, E.a5),
                            children: (0, l.jsx)(C.Q, {
                                text: A.intl.string(A.t.wWIufs),
                                textVariant: "text-sm/normal",
                                onClick: () => {
                                    null != Y.current && Y.current.focus(), P();
                                },
                            }),
                        }),
                        (0, l.jsx)("div", {
                            className: E.QB,
                            children: (0, l.jsx)(g.$, {
                                text: A.intl.string(A.t.dKhVQN),
                                fullWidth: !0,
                                type: "submit",
                                loading: H === _.aUe.LOGGING_IN,
                            }),
                        }),
                        (0, l.jsxs)("div", {
                            className: E.a5,
                            children: [
                                (0, l.jsx)("span", { className: x.Qt, children: A.intl.string(A.t.tmE73r) }),
                                (0, l.jsx)("span", {
                                    className: x.Z8,
                                    children: (0, l.jsx)(C.Q, {
                                        text: A.intl.string(A.t.pV8xeR),
                                        textVariant: "text-sm/normal",
                                        onClick: V,
                                    }),
                                }),
                            ],
                        }),
                    ],
                }),
            }),
        ],
    });
    return null != n && n.state === _.elq.RESOLVING
        ? (0, l.jsx)(el, {
              authBoxClassName: o,
              country: W,
              login: d,
              password: p,
              onLoginChange: B,
              onPasswordChange: D,
              loginRef: Y,
              passwordRef: ei,
          })
        : null != s
          ? s.state === ea.QB.RESOLVING
              ? (0, l.jsx)(el, {
                    authBoxClassName: o,
                    country: W,
                    login: d,
                    password: p,
                    onLoginChange: B,
                    onPasswordChange: D,
                    loginRef: Y,
                    passwordRef: ei,
                })
              : (0, l.jsx)(y.A, {
                    onSubmit: M,
                    tag: "form",
                    className: h()(o, x.Sy),
                    children: () => [
                        (0, l.jsx)(w.A, { guildTemplate: s }, "template"),
                        (0, l.jsx)(a.Fragment, { children: eo }, "form-wrapper"),
                    ],
                })
          : Q && !L
            ? (0, l.jsx)(J, { onDismiss: () => G(!0) })
            : (0, l.jsxs)("div", {
                  children: [
                      (0, l.jsx)(f.Ay, {
                          onSubmit: M,
                          tag: "form",
                          className: h()(o, { [x.M0]: $ }),
                          expanded: !0,
                          children: (0, l.jsxs)(R.B, {
                              direction: "horizontal",
                              align: "center",
                              gap: 64,
                              children: [
                                  eo,
                                  (0, l.jsx)(b.A, { onAuthenticateSuccess: X, conditionalMediationAbortController: F }),
                              ],
                          }),
                      }),
                      $ && (0, l.jsx)(q, {}),
                  ],
              });
}
var er = n(572469),
    eo = n(625494);
function eu(e) {
    let { loginSource: t, giftCodeSKUId: n } = e,
        s = (0, i.cf)(
            [O.default],
            () => ({ ticket: O.default.getMFATicket(), methods: O.default.getMFAMethods() }),
            [],
        ),
        r = a.useCallback(
            (e) => {
                let { mfaType: l, data: a, ticket: s } = e;
                return (
                    eo._.dispatch(_.jej.WAVE_EMPHASIZE),
                    o.A.loginMFAv2({ code: a, ticket: s, mfaType: l, source: t, giftCodeSKUId: n })
                );
            },
            [t, n],
        );
    return (0, l.jsx)(f.Ay, {
        style: { padding: 0 },
        children: (0, l.jsx)(er.t, {
            mfaFinish: r,
            mfaChallenge: s,
            onEarlyClose: () => {
                F.h.dispatch({ type: "LOGIN_RESET" });
            },
            width: 480,
        }),
    });
}
var ec = n(511815),
    ed = n(189213),
    eh = n(139033),
    em = n(192308),
    eg = n(557722),
    ef = n(351671),
    e_ = n(15552),
    eA = n(212640),
    ex = n(952116),
    eE = n(491509),
    ep = n(976860),
    eS = n(913612),
    ej = n(210714),
    eN = n(933924),
    eC = n(115036),
    eR = n(67480);
let ev = (e) => n.g.location.assign(e);
function eI(e) {
    let {
        invite: t,
        guildTemplate: n,
        giftCode: d,
        location: h,
        redirectTo: m,
        transitionTo: g,
        authBoxClassName: x,
        loginSource: j,
        disableAutofocusOnDefaultForm: N,
    } = e;
    (0, eS.K)();
    let C = (0, i.bG)([O.default], () => O.default.isAuthenticated()),
        R = (0, i.bG)([eC.A], () => eC.A.isHandoffAvailable()),
        v = (0, i.bG)([O.default], () => O.default.getLoginStatus()),
        I = d?.skuId ?? null,
        b = (0, i.bG)([eR.A], () => (null != I ? eR.A.get(I) : null)),
        {
            checkingHandoff: y,
            redirecting: w,
            login: k,
            password: T,
            phoneVerifyError: L,
            dismissedChooseAccount: F,
            setDismissedChooseAccount: B,
            errors: D,
            conditionalMediationAbortController: M,
            loginSource: P,
            loginOrSSO: V,
            handleLogin: W,
            handleIPAuthorize: H,
            handlePasswordReset: Q,
            handleForgotPassword: X,
            handleResendCode: q,
            handleReset: z,
            handleCancelAccountDeletion: Z,
            handleGotoRegister: $,
            loginReset: K,
            onLoginChange: Y,
            onPasswordChange: J,
        } = (function (e) {
            let {
                    invite: t,
                    guildTemplate: n,
                    giftCode: s,
                    handoffAvailable: i,
                    authenticated: r,
                    transitionTo: u,
                    redirectTo: c,
                    location: d,
                    loginSource: h,
                } = e,
                [m, g] = a.useState(() => i),
                [f, x] = a.useState(() => r),
                [E, p] = a.useState(""),
                [j, N] = a.useState(() => {
                    let e = null != d ? (0, S.parse)(d.search) : {};
                    return e.email ?? e.login ?? "";
                }),
                [C, R] = a.useState(""),
                [v, I] = a.useState(!1),
                [b, y] = a.useState(null),
                [w, k] = a.useState(!1),
                [T] = a.useState(() => new AbortController()),
                [L, F] = a.useState({});
            !m || i || r || g(!1);
            let U = a.useMemo(() => {
                    if (null != h) return h;
                    if (null != s) return "gift";
                    if (null != n) return "guild_template";
                    if (null != t) {
                        if (null != t.guild) return "guild_invite";
                        if (null != t.channel) return "dm_invite";
                        if (null != t.inviter) return "friend_invite";
                    }
                    return null != c ? (0, ef.Q)(c) : null;
                }, [h, s, n, t, c]),
                B = null != s ? s.skuId : null,
                D = a.useCallback(
                    (e) => {
                        let t = null != e ? (0, S.parse)(e.search) : {};
                        if ((delete t.redirect_to, null != c)) {
                            if ((0, eA.RZ)(c)) return void (0, eA.NY)(c);
                            u(c);
                        } else if (null == t.service) u(_.BVt.APP);
                        else {
                            let e = window.location.protocol + window.GLOBAL_ENV.API_ENDPOINT + _.Rsh.SSO,
                                n = { ...t, token: O.default.getToken() };
                            window.location = `${e}?${(0, S.stringify)(n)}`;
                        }
                    },
                    [c, u],
                ),
                M = a.useCallback(
                    function (e, t) {
                        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                        e && null != t && (x(!0), n ? o.A.verifySSOToken("login").then(() => D(t)) : D(t));
                    },
                    [D],
                ),
                P = a.useCallback(() => {
                    T.abort("Login state reset"), F({}), o.A.loginReset();
                }, [T]),
                V = a.useCallback(
                    async function (e) {
                        let { undelete: n } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        e?.preventDefault(),
                            T.abort("Starting password login"),
                            eo._.dispatch(_.jej.WAVE_EMPHASIZE),
                            F({});
                        try {
                            await o.A.login({
                                login: E + j,
                                password: C,
                                undelete: n ?? v,
                                source: U,
                                giftCodeSKUId: B,
                                invite: t,
                            });
                        } catch (e) {
                            F((0, e_.p)(e));
                        }
                    },
                    [T, j, E, C, v, U, B, t],
                ),
                W = a.useCallback(
                    async (e) => {
                        let t = E + j;
                        F({});
                        try {
                            let { token: n } = await eg.A.verifyPhone(t, e, !1);
                            await o.A.authorizeIPAddress(n), V();
                        } catch (e) {
                            null != e.body && null != e.body.message && y(e.body.message);
                        }
                    },
                    [E, j, V],
                ),
                H = a.useCallback(
                    async (e) => {
                        y(null);
                        try {
                            let { token: t } = await eg.A.verifyPhone(E + j, e, !1);
                            u(_.BVt.RESET, { search: (0, S.stringify)({ token: t, from_login: "true" }) });
                        } catch (e) {
                            null != e.body && null != e.body.message && y(e.body.message);
                        }
                    },
                    [E, j, u],
                ),
                Q = a.useCallback(
                    async (e) => {
                        null != e && e.preventDefault();
                        let t = E + j;
                        F({});
                        try {
                            eo._.dispatch(_.jej.WAVE_EMPHASIZE);
                            let e = await o.A.forgotPassword(t);
                            if (!1 === e) return;
                            e === ec.D.ONE_TIME_LOGIN
                                ? (0, em.openModal)((e) => {
                                      let t = [
                                          {
                                              variant: "primary",
                                              text: A.intl.string(A.t.BddRzS),
                                              onClick: e.onClose,
                                              fullWidth: !0,
                                          },
                                      ];
                                      return (0, l.jsx)(ed.Modal, {
                                          title: A.intl.string(A.t["6Ecyts"]),
                                          actions: t,
                                          ...e,
                                          children: (0, l.jsx)(G.E, {
                                              variant: "text-md/normal",
                                              children: A.intl.string(A.t.iAcrqV),
                                          }),
                                      });
                                  })
                                : (0, eh.A)({
                                      title: A.intl.string(A.t.f5Pi7A),
                                      subtitle: A.intl.format(A.t["6u5hQ9"], { email: t }),
                                  });
                        } catch (e) {
                            F((0, e_.p)(e));
                        }
                    },
                    [E, j],
                ),
                X = a.useCallback(() => {
                    eg.A.resendCode(E + j);
                }, [E, j]),
                q = a.useCallback((e) => {
                    null != e && e.preventDefault(), o.A.loginReset(), R(""), p(""), N(""), I(!1), g(!1), x(!1), F({});
                }, []),
                z = a.useCallback(() => {
                    I(!0), V(void 0, { undelete: !0 });
                }, [V]),
                Z = a.useCallback(() => {
                    let e,
                        l = null != d ? (0, S.parse)(d.search) : {};
                    "" !== j && (l.email = j),
                        null != t
                            ? ((l.mode = "register"), (e = _.BVt.INVITE(t.code)))
                            : null != s
                              ? ((l.mode = "register"), (e = _.BVt.GIFT_CODE(s.code)))
                              : null != n
                                ? (e = _.BVt.GUILD_TEMPLATE(n.code))
                                : null != c
                                  ? ((e = _.BVt.REGISTER), (l.redirect_to = c))
                                  : (e = _.BVt.REGISTER),
                        P(),
                        u(e, { search: (0, S.stringify)(l) }),
                        eo._.dispatch(_.jej.WAVE_EMPHASIZE);
                }, [j, t, s, n, c, d, P, u]);
            return {
                checkingHandoff: m,
                redirecting: f,
                login: j,
                password: C,
                phoneVerifyError: b,
                dismissedChooseAccount: w,
                setDismissedChooseAccount: k,
                errors: L,
                conditionalMediationAbortController: T,
                loginSource: U,
                loginOrSSO: M,
                handleLogin: V,
                handleIPAuthorize: W,
                handlePasswordReset: H,
                handleForgotPassword: Q,
                handleResendCode: X,
                handleReset: q,
                handleCancelAccountDeletion: z,
                handleGotoRegister: Z,
                loginReset: P,
                onLoginChange: a.useCallback((e, t) => {
                    N(e), p(t);
                }, []),
                onPasswordChange: a.useCallback((e) => {
                    R(e);
                }, []),
            };
        })({
            invite: t,
            guildTemplate: n,
            giftCode: d,
            handoffAvailable: R,
            authenticated: C,
            transitionTo: g ?? ev,
            redirectTo: m,
            location: h,
            loginSource: j,
        });
    (0, s.Ay)(() => {
        R && !C ? (0, u.ST)() : C && V(C, h, !0),
            U.default.track(
                _.HAw.LOGIN_VIEWED,
                {
                    location: null != t ? "Invite Login Page" : "Non-Invite Login Page",
                    login_source: P,
                    authenticated: C,
                    ...(null != b ? (0, eE.A)(b, !1, !1) : {}),
                    source: (0, ep.PR)(),
                },
                { flush: !0 },
            ),
            C || (0, eN.a)({ abortController: M, loginSource: P, giftCodeSKUId: I }),
            o.A.getLocationMetadata(),
            (0, ej.d)("login");
    });
    let ee = (0, c.A)(C);
    if (
        (a.useEffect(() => {
            let e = y && (R || w);
            C && !1 === ee && !e && (M.abort("Transitioning to authenticated state"), V(C, h));
        }, [C, R, ee, w, y, M, V, h]),
        w || y)
    )
        return (0, l.jsx)(f.Ay, { children: (0, l.jsx)(r.y, {}) });
    if (R)
        return (0, l.jsxs)(f.Ay, {
            className: x,
            children: [
                (0, l.jsx)(f.CK, {}),
                (0, l.jsx)(f.hE, { className: E.QB, children: A.intl.string(A.t.S6RMNA) }),
                (0, l.jsx)(f.tK, { children: A.intl.string(A.t.YZiJbh) }),
            ],
        });
    switch (v) {
        case _.aUe.LOGGING_IN_MFA_SMS:
        case _.aUe.MFA_SMS_STEP:
        case _.aUe.LOGGING_IN_MFA:
        case _.aUe.MFA_STEP:
            return (0, l.jsx)(eu, { loginSource: P, giftCodeSKUId: I });
        case _.aUe.ACCOUNT_SCHEDULED_FOR_DELETION:
        case _.aUe.ACCOUNT_DISABLED:
            return (0, l.jsx)(p, { loginStatus: v, authBoxClassName: x, onSubmit: z, onCancelAccountDeletion: Z });
        case _.aUe.PHONE_IP_AUTHORIZATION:
            return (0, l.jsx)(f.Ay, {
                tag: "form",
                className: x,
                children: (0, l.jsx)(ex.A, {
                    title: A.intl.string(A.t.w55Oco),
                    subtitle: A.intl.format(A.t.CfRZBj, { onResendClick: q }),
                    error: L,
                    onSubmit: H,
                    onCancel: K,
                }),
            });
        case _.aUe.PASSWORD_RECOVERY_PHONE_VERIFICATION:
            return (0, l.jsx)(f.Ay, {
                tag: "form",
                className: x,
                children: (0, l.jsx)(ex.A, {
                    title: A.intl.string(A.t["+xqy3d"]),
                    subtitle: A.intl.format(A.t.ef4uZ7, { onResendClick: q }),
                    error: L,
                    onSubmit: Q,
                    onCancel: K,
                }),
            });
        case _.aUe.LOGGING_IN:
        case _.aUe.NONE:
        default:
            return (0, l.jsx)(ei, {
                invite: t,
                guildTemplate: n,
                giftCode: d,
                authBoxClassName: x,
                disableAutofocusOnDefaultForm: N,
                login: k,
                password: T,
                errors: D,
                loginSource: P,
                dismissedChooseAccount: F,
                setDismissedChooseAccount: B,
                conditionalMediationAbortController: M,
                onLoginChange: Y,
                onPasswordChange: J,
                handleLogin: W,
                handleForgotPassword: X,
                handleGotoRegister: $,
            });
    }
}
