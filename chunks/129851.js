"use strict";
n.d(t, { A: () => M });
var i = n(627968),
    s = n(64700),
    r = n(503698),
    l = n.n(r),
    a = n(935399),
    o = n(311907),
    c = n(289873),
    d = n(830215),
    u = n(6981),
    _ = n(475743),
    h = n(29093),
    m = n(8e5),
    g = n(934842),
    p = n(664053),
    A = n(944300),
    f = n(854378),
    x = n(952116),
    E = n(491509),
    I = n(895600),
    v = n(559568),
    N = n(274303),
    j = n(13437),
    C = n(148864),
    T = n(976860),
    b = n(913612),
    y = n(210714),
    S = n(933924),
    R = n(961350),
    w = n(115036),
    O = n(954571),
    L = n(538796),
    k = n(652215),
    G = n(401755),
    U = n(985018),
    P = n(379154),
    D = n(818050);
let B = (e) => n.g.location.assign(e);
function M(e) {
    let {
        invite: t,
        guildTemplate: n,
        giftCodeSKU: r,
        giftCode: M,
        location: V,
        redirectTo: F,
        transitionTo: W,
        replaceWith: H,
        authBoxClassName: z,
        showMobileWebHandoff: K,
        loginSource: Q,
        disableAutofocusOnDefaultForm: q,
    } = e;
    (0, b.K)();
    let Y = (0, o.bG)([R.default], () => R.default.isAuthenticated()),
        X = (0, o.bG)([w.A], () => w.A.isHandoffAvailable()),
        $ = (0, o.bG)([R.default], () => R.default.getLoginStatus()),
        Z = (0, o.bG)([C.A], () => C.A.getCountryCode()),
        J = (0, o.bG)([N.A], () => N.A.getHasLoggedInAccounts()),
        {
            checkingHandoff: ee,
            redirecting: et,
            login: en,
            password: ei,
            phoneVerifyError: es,
            dismissedChooseAccount: er,
            setDismissedChooseAccount: el,
            errors: ea,
            conditionalMediationAbortController: eo,
            loginSource: ec,
            giftCodeSKUId: ed,
            loginOrSSO: eu,
            loginRef: e_,
            passwordRef: eh,
            codeRef: em,
            handleLogin: eg,
            handleIPAuthorize: ep,
            handlePasswordReset: eA,
            handleForgotPassword: ef,
            handleResendCode: ex,
            handleReset: eE,
            handleCancelAccountDeletion: eI,
            handleGotoRegister: ev,
            handleAuthSuccess: eN,
            loginReset: ej,
            onLoginChange: eC,
            onPasswordChange: eT,
            setLoginRef: eb,
            setPasswordRef: ey,
        } = (0, A.A)({
            invite: t,
            guildTemplate: n,
            giftCode: M,
            handoffAvailable: X,
            authenticated: Y,
            transitionTo: W ?? B,
            replaceWith: H,
            redirectTo: F,
            location: V,
            loginSource: Q,
        });
    (0, a.Ay)(() => {
        X && !Y ? (0, u.ST)() : Y && eu(Y, V, !0),
            O.default.track(
                k.HAw.LOGIN_VIEWED,
                {
                    location: null != t ? "Invite Login Page" : "Non-Invite Login Page",
                    login_source: ec,
                    authenticated: Y,
                    ...(null != r ? (0, E.A)(r, !1, !1) : {}),
                    source: (0, T.PR)(),
                },
                { flush: !0 },
            ),
            Y || (0, S.a)({ abortController: eo, loginSource: ec, giftCodeSKUId: ed }),
            d.A.getLocationMetadata(),
            (0, y.d)("login");
    });
    let eS = (0, _.A)(Y);
    s.useEffect(() => {
        let e = ee && (X || et);
        Y && !1 === eS && !e && (eo.abort("Transitioning to authenticated state"), eu(Y, V));
    }, [Y, X, eS, et, ee, eo, eu, V]);
    let eR = (0, _.A)(ea);
    s.useEffect(() => {
        let e = (e) => null != ea[e];
        null != eR &&
            eR !== ea &&
            (e("password")
                ? eh.current?.focus()
                : e("email") || e("login")
                  ? e_.current?.focus()
                  : e("code") && em.current?.focus());
    }, [ea, e_, eh, em, eR]);
    let ew = (e) =>
        (0, i.jsx)(m.A, {
            invite: t,
            giftCode: M,
            loginStatus: $,
            country: Z,
            showMobileWebHandoff: K,
            disableAutofocusOnDefaultForm: q,
            withQR: e,
            dismissedChooseAccount: er,
            login: en,
            password: ei,
            errors: ea,
            conditionalMediationAbortController: eo,
            onLoginChange: eC,
            onPasswordChange: eT,
            setLoginRef: eb,
            setPasswordRef: ey,
            onReturnToChooseAccount: () => {
                el(!1);
            },
            handleForgotPassword: ef,
            handleGotoRegister: ev,
            handleAuthSuccess: eN,
        });
    if (et || ee) return (0, i.jsx)(f.Ay, { children: (0, i.jsx)(c.y, {}) });
    if (X)
        return (0, i.jsxs)(f.Ay, {
            className: z,
            children: [
                (0, i.jsx)(f.CK, {}),
                (0, i.jsx)(f.hE, { className: D.QB, children: U.intl.string(U.t.S6RMNA) }),
                (0, i.jsx)(f.tK, { children: U.intl.string(U.t.YZiJbh) }),
            ],
        });
    switch ($) {
        case k.aUe.LOGGING_IN_MFA_SMS:
        case k.aUe.MFA_SMS_STEP:
        case k.aUe.LOGGING_IN_MFA:
        case k.aUe.MFA_STEP:
            return (0, i.jsx)(g.A, { loginSource: ec, giftCodeSKUId: ed });
        case k.aUe.ACCOUNT_SCHEDULED_FOR_DELETION:
        case k.aUe.ACCOUNT_DISABLED:
            return (0, i.jsx)(h.A, {
                loginStatus: $,
                authBoxClassName: z ?? "",
                onSubmit: eE,
                onCancelAccountDeletion: eI,
            });
        case k.aUe.PHONE_IP_AUTHORIZATION:
            return (0, i.jsx)(f.Ay, {
                tag: "form",
                className: z,
                children: (0, i.jsx)(x.A, {
                    title: U.intl.string(U.t.w55Oco),
                    subtitle: U.intl.format(U.t.CfRZBj, { onResendClick: ex }),
                    error: es,
                    onSubmit: ep,
                    onCancel: ej,
                }),
            });
        case k.aUe.PASSWORD_RECOVERY_PHONE_VERIFICATION:
            return (0, i.jsx)(f.Ay, {
                tag: "form",
                className: z,
                children: (0, i.jsx)(x.A, {
                    title: U.intl.string(U.t["+xqy3d"]),
                    subtitle: U.intl.format(U.t.ef4uZ7, { onResendClick: ex }),
                    error: es,
                    onSubmit: eA,
                    onCancel: ej,
                }),
            });
        case k.aUe.LOGGING_IN:
        case k.aUe.NONE:
        default:
            if (null != t && t.state === k.elq.RESOLVING)
                return (0, i.jsx)(p.A, {
                    authBoxClassName: z,
                    country: Z,
                    login: en,
                    password: ei,
                    onLoginChange: eC,
                    onPasswordChange: eT,
                    setLoginRef: eb,
                    setPasswordRef: ey,
                });
            if (null != n)
                if (n.state === G.QB.RESOLVING)
                    return (0, i.jsx)(p.A, {
                        authBoxClassName: z,
                        country: Z,
                        login: en,
                        password: ei,
                        onLoginChange: eC,
                        onPasswordChange: eT,
                        setLoginRef: eb,
                        setPasswordRef: ey,
                    });
                else
                    return (0, i.jsx)(L.A, {
                        onSubmit: eg,
                        tag: "form",
                        className: l()(z, P.Sy),
                        children: () => [(0, i.jsx)(I.A, { guildTemplate: n }, "template"), ew(!1)],
                    });
            if (J && !er) return (0, i.jsx)(j.A, { onDismiss: () => el(!0) });
            return (0, i.jsxs)("div", {
                className: P.__invalid_pageContainer,
                children: [
                    (0, i.jsx)(f.Ay, { onSubmit: eg, tag: "form", className: z, expanded: !0, children: ew(!0) }),
                    K && (0, i.jsx)(v.A, {}),
                ],
            });
    }
}
