"use strict";
n.d(t, { A: () => B });
var i = n(627968),
    s = n(64700),
    r = n(503698),
    l = n.n(r),
    a = n(311907),
    o = n(289873),
    c = n(830215),
    d = n(6981),
    u = n(29093),
    _ = n(8e5),
    h = n(934842),
    m = n(664053),
    p = n(944300),
    g = n(854378),
    A = n(952116),
    f = n(491509),
    x = n(895600),
    E = n(559568),
    I = n(274303),
    v = n(13437),
    N = n(148864),
    j = n(976860),
    C = n(913612),
    T = n(210714),
    b = n(933924),
    S = n(961350),
    y = n(115036),
    R = n(954571),
    w = n(538796),
    O = n(652215),
    L = n(401755),
    k = n(985018),
    G = n(379154),
    U = n(818050);
class D extends s.PureComponent {
    componentDidMount() {
        let { handoffAvailable: e, authenticated: t, giftCodeSKU: n, invite: i, location: s } = this.props;
        e && !t ? (0, d.ST)() : t && this.props.loginOrSSO(t, s, !0),
            R.default.track(
                O.HAw.LOGIN_VIEWED,
                {
                    location: null != i ? "Invite Login Page" : "Non-Invite Login Page",
                    login_source: this.props.loginSource,
                    authenticated: t,
                    ...(null != n ? (0, f.A)(n, !1, !1) : {}),
                    source: (0, j.PR)(),
                },
                { flush: !0 },
            ),
            t ||
                (0, b.a)({
                    abortController: this.props.conditionalMediationAbortController,
                    loginSource: this.props.loginSource,
                    giftCodeSKUId: this.props.giftCodeSKUId,
                }),
            c.A.getLocationMetadata(),
            (0, T.d)("login");
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
        return (0, i.jsx)(m.A, {
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
        if (d || c) return (0, i.jsx)(g.Ay, { children: (0, i.jsx)(o.y, {}) });
        if (s)
            return (0, i.jsxs)(g.Ay, {
                className: r,
                children: [
                    (0, i.jsx)(g.CK, {}),
                    (0, i.jsx)(g.hE, { className: U.QB, children: k.intl.string(k.t.S6RMNA) }),
                    (0, i.jsx)(g.tK, { children: k.intl.string(k.t.YZiJbh) }),
                ],
            });
        switch (n) {
            case O.aUe.LOGGING_IN_MFA_SMS:
            case O.aUe.MFA_SMS_STEP:
            case O.aUe.LOGGING_IN_MFA:
            case O.aUe.MFA_STEP:
                return (0, i.jsx)(h.A, {
                    loginSource: this.props.loginSource,
                    giftCodeSKUId: this.props.giftCodeSKUId,
                });
            case O.aUe.ACCOUNT_SCHEDULED_FOR_DELETION:
            case O.aUe.ACCOUNT_DISABLED:
                return (0, i.jsx)(u.A, {
                    loginStatus: this.props.loginStatus,
                    authBoxClassName: this.props.authBoxClassName ?? "",
                    onSubmit: this.props.handleReset,
                    onCancelAccountDeletion: this.props.handleCancelAccountDeletion,
                });
            case O.aUe.PHONE_IP_AUTHORIZATION:
                return (0, i.jsx)(g.Ay, {
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
            case O.aUe.PASSWORD_RECOVERY_PHONE_VERIFICATION:
                return (0, i.jsx)(g.Ay, {
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
            case O.aUe.LOGGING_IN:
            case O.aUe.NONE:
            default:
                if (null != e && e.state === O.elq.RESOLVING) return this.renderResolving();
                if (null != t)
                    if (t.state === L.QB.RESOLVING) return this.renderResolving();
                    else
                        return (0, i.jsx)(w.A, {
                            onSubmit: this.props.handleLogin,
                            tag: "form",
                            className: l()(this.props.authBoxClassName, G.Sy),
                            children: () => [
                                (0, i.jsx)(x.A, { guildTemplate: t }, "template"),
                                this.renderDefaultForm(!1),
                            ],
                        });
                if (this.props.hasLoggedInAccounts && !this.props.dismissedChooseAccount)
                    return (0, i.jsx)(v.A, { onDismiss: () => this.props.setDismissedChooseAccount(!0) });
                return (0, i.jsxs)("div", {
                    className: G.__invalid_pageContainer,
                    children: [
                        (0, i.jsx)(g.Ay, {
                            onSubmit: this.props.handleLogin,
                            tag: "form",
                            className: r,
                            expanded: !0,
                            children: this.renderDefaultForm(!0),
                        }),
                        a && (0, i.jsx)(E.A, {}),
                    ],
                });
        }
    }
}
let P = (e) => n.g.location.assign(e),
    B = function (e) {
        (0, C.K)();
        let {
                authenticated: t,
                handoffAvailable: n,
                loginStatus: s,
                country: r,
                hasLoggedInAccounts: l,
            } = (0, a.cf)([y.A, S.default, I.A, N.A], () => ({
                authenticated: S.default.isAuthenticated(),
                handoffAvailable: y.A.isHandoffAvailable(),
                loginStatus: S.default.getLoginStatus(),
                country: N.A.getCountryCode(),
                hasLoggedInAccounts: I.A.getHasLoggedInAccounts(),
            })),
            o = (0, p.A)({
                invite: e.invite,
                guildTemplate: e.guildTemplate,
                giftCode: e.giftCode,
                handoffAvailable: n,
                authenticated: t,
                transitionTo: e.transitionTo ?? P,
                replaceWith: e.replaceWith,
                redirectTo: e.redirectTo,
                location: e.location,
                loginSource: e.loginSource,
            });
        return (0, i.jsx)(D, {
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
