"use strict";
n.d(t, { A: () => G });
var i = n(627968),
    s = n(64700),
    r = n(503698),
    l = n.n(r),
    a = n(311907),
    o = n(397927),
    c = n(830215),
    d = n(6981),
    u = n(29093),
    _ = n(8e5),
    h = n(934842),
    p = n(664053),
    g = n(944300),
    m = n(854378),
    A = n(952116),
    f = n(491509),
    E = n(895600),
    x = n(559568),
    I = n(274303),
    N = n(13437),
    v = n(148864),
    T = n(976860),
    C = n(913612),
    j = n(210714),
    y = n(933924),
    S = n(961350),
    b = n(115036),
    R = n(954571),
    O = n(538796),
    L = n(652215),
    w = n(401755),
    k = n(985018),
    D = n(379154),
    U = n(818050);
class P extends s.PureComponent {
    componentDidMount() {
        let { handoffAvailable: e, authenticated: t, giftCodeSKU: n, invite: i, location: s } = this.props;
        e && !t ? (0, d.ST)() : t && this.props.loginOrSSO(t, s, !0),
            R.default.track(
                L.HAw.LOGIN_VIEWED,
                {
                    location: null != i ? "Invite Login Page" : "Non-Invite Login Page",
                    login_source: this.props.loginSource,
                    authenticated: t,
                    ...(null != n ? (0, f.A)(n, !1, !1) : {}),
                    source: (0, T.PR)(),
                },
                { flush: !0 },
            ),
            t ||
                (0, y.a)({
                    abortController: this.props.conditionalMediationAbortController,
                    loginSource: this.props.loginSource,
                    giftCodeSKUId: this.props.giftCodeSKUId,
                }),
            c.A.getLocationMetadata(),
            (0, j.d)("login");
    }
    componentDidUpdate(e) {
        let { authenticated: t, location: n, handoffAvailable: i } = this.props,
            { checkingHandoff: s, redirecting: r } = this.props;
        !t ||
            e.authenticated ||
            (s && (i || r)) ||
            (this.props.conditionalMediationAbortController.abort("Transitioning to authenticated state"),
            this.props.loginOrSSO(t, n)),
            e.errors !== this.props.errors &&
                (this.hasError("password")
                    ? this.props.passwordRef.current?.focus()
                    : this.hasError("email") || this.hasError("login")
                      ? this.props.loginRef.current?.focus()
                      : this.hasError("code") && this.props.codeRef.current?.focus());
    }
    hasError(e) {
        return null != this.props.errors[e];
    }
    renderResolving() {
        let { authBoxClassName: e, country: t } = this.props;
        return (0, i.jsx)(p.A, {
            authBoxClassName: e,
            country: t,
            login: this.props.login,
            password: this.props.password,
            onLoginChange: this.props.onLoginChange,
            onPasswordChange: this.props.onPasswordChange,
            setLoginRef: this.props.setLoginRef,
            setPasswordRef: this.props.setPasswordRef,
        });
    }
    renderDefaultForm(e) {
        let {
                invite: t,
                giftCode: n,
                loginStatus: s,
                country: r,
                showMobileWebHandoff: l,
                disableAutofocusOnDefaultForm: a,
            } = this.props,
            {
                dismissedChooseAccount: o,
                login: c,
                password: d,
                errors: u,
                conditionalMediationAbortController: h,
            } = this.props;
        return (0, i.jsx)(_.A, {
            invite: t,
            giftCode: n,
            loginStatus: s,
            country: r,
            showMobileWebHandoff: l,
            disableAutofocusOnDefaultForm: a,
            withQR: e,
            dismissedChooseAccount: o,
            login: c,
            password: d,
            errors: u,
            conditionalMediationAbortController: h,
            onLoginChange: this.props.onLoginChange,
            onPasswordChange: this.props.onPasswordChange,
            setLoginRef: this.props.setLoginRef,
            setPasswordRef: this.props.setPasswordRef,
            onReturnToChooseAccount: () => {
                this.props.setDismissedChooseAccount(!1);
            },
            handleForgotPassword: this.props.handleForgotPassword,
            handleGotoRegister: this.props.handleGotoRegister,
            handleAuthSuccess: this.props.handleAuthSuccess,
        });
    }
    render() {
        let {
                invite: e,
                guildTemplate: t,
                loginStatus: n,
                handoffAvailable: s,
                authBoxClassName: r,
                showMobileWebHandoff: a,
            } = this.props,
            { checkingHandoff: c, redirecting: d, phoneVerifyError: _ } = this.props;
        if (d || c) return (0, i.jsx)(m.Ay, { children: (0, i.jsx)(o.y$y, {}) });
        if (s)
            return (0, i.jsxs)(m.Ay, {
                className: r,
                children: [
                    (0, i.jsx)(m.CK, {}),
                    (0, i.jsx)(m.hE, { className: U.QB, children: k.intl.string(k.t.S6RMNA) }),
                    (0, i.jsx)(m.tK, { children: k.intl.string(k.t.YZiJbh) }),
                ],
            });
        switch (n) {
            case L.aUe.LOGGING_IN_MFA_SMS:
            case L.aUe.MFA_SMS_STEP:
            case L.aUe.LOGGING_IN_MFA:
            case L.aUe.MFA_STEP:
                return (0, i.jsx)(h.A, {
                    loginSource: this.props.loginSource,
                    giftCodeSKUId: this.props.giftCodeSKUId,
                });
            case L.aUe.ACCOUNT_SCHEDULED_FOR_DELETION:
            case L.aUe.ACCOUNT_DISABLED:
                return (0, i.jsx)(u.A, {
                    loginStatus: this.props.loginStatus,
                    authBoxClassName: this.props.authBoxClassName ?? "",
                    onSubmit: this.props.handleReset,
                    onCancelAccountDeletion: this.props.handleCancelAccountDeletion,
                });
            case L.aUe.PHONE_IP_AUTHORIZATION:
                return (0, i.jsx)(m.Ay, {
                    tag: "form",
                    className: r,
                    children: (0, i.jsx)(A.A, {
                        title: k.intl.string(k.t.w55Oco),
                        subtitle: k.intl.format(k.t.CfRZBj, { onResendClick: this.props.handleResendCode }),
                        error: _,
                        onSubmit: this.props.handleIPAuthorize,
                        onCancel: this.props.loginReset,
                    }),
                });
            case L.aUe.PASSWORD_RECOVERY_PHONE_VERIFICATION:
                return (0, i.jsx)(m.Ay, {
                    tag: "form",
                    className: r,
                    children: (0, i.jsx)(A.A, {
                        title: k.intl.string(k.t["+xqy3d"]),
                        subtitle: k.intl.format(k.t.ef4uZ7, { onResendClick: this.props.handleResendCode }),
                        error: _,
                        onSubmit: this.props.handlePasswordReset,
                        onCancel: this.props.loginReset,
                    }),
                });
            case L.aUe.LOGGING_IN:
            case L.aUe.NONE:
            default:
                if (null != e && e.state === L.elq.RESOLVING) return this.renderResolving();
                if (null != t)
                    if (t.state === w.QB.RESOLVING) return this.renderResolving();
                    else
                        return (0, i.jsx)(O.A, {
                            onSubmit: this.props.handleLogin,
                            tag: "form",
                            className: l()(this.props.authBoxClassName, D.Sy),
                            children: () => [
                                (0, i.jsx)(E.A, { guildTemplate: t }, "template"),
                                this.renderDefaultForm(!1),
                            ],
                        });
                if (this.props.hasLoggedInAccounts && !this.props.dismissedChooseAccount)
                    return (0, i.jsx)(N.A, { onDismiss: () => this.props.setDismissedChooseAccount(!0) });
                return (0, i.jsxs)("div", {
                    className: D.__invalid_pageContainer,
                    children: [
                        (0, i.jsx)(m.Ay, {
                            onSubmit: this.props.handleLogin,
                            tag: "form",
                            className: r,
                            expanded: !0,
                            children: this.renderDefaultForm(!0),
                        }),
                        a && (0, i.jsx)(x.A, {}),
                    ],
                });
        }
    }
}
let B = (e) => n.g.location.assign(e),
    G = function (e) {
        (0, C.K)();
        let {
                authenticated: t,
                handoffAvailable: n,
                loginStatus: s,
                country: r,
                hasLoggedInAccounts: l,
            } = (0, a.cf)([b.A, S.default, I.A, v.A], () => ({
                authenticated: S.default.isAuthenticated(),
                handoffAvailable: b.A.isHandoffAvailable(),
                loginStatus: S.default.getLoginStatus(),
                country: v.A.getCountryCode(),
                hasLoggedInAccounts: I.A.getHasLoggedInAccounts(),
            })),
            o = (0, g.A)({
                invite: e.invite,
                guildTemplate: e.guildTemplate,
                giftCode: e.giftCode,
                handoffAvailable: n,
                authenticated: t,
                transitionTo: e.transitionTo ?? B,
                replaceWith: e.replaceWith,
                redirectTo: e.redirectTo,
                location: e.location,
                loginSource: e.loginSource,
            });
        return (0, i.jsx)(P, {
            invite: e.invite,
            guildTemplate: e.guildTemplate,
            giftCodeSKU: e.giftCodeSKU,
            giftCode: e.giftCode,
            loginStatus: s,
            handoffAvailable: n,
            authenticated: t,
            location: e.location,
            authBoxClassName: e.authBoxClassName,
            country: r,
            hasLoggedInAccounts: l,
            showMobileWebHandoff: e.showMobileWebHandoff,
            disableAutofocusOnDefaultForm: e.disableAutofocusOnDefaultForm,
            ...o,
        });
    };
