n.d(t, { Z: () => L }), n(388685);
var i = n(951288),
    r = n(647438),
    s = n(512722),
    a = n.n(s),
    l = n(442837),
    o = n(481060),
    c = n(816814),
    d = n(240872),
    u = n(23645),
    m = n(712364),
    p = n(279837),
    g = n(600164),
    h = n(144114),
    f = n(921801),
    b = n(607018),
    x = n(778764),
    _ = n(314897),
    j = n(325067),
    E = n(594174),
    C = n(572004),
    O = n(287880),
    v = n(714565),
    S = n(202858),
    T = n(726985),
    N = n(981631),
    I = n(815660),
    y = n(388032),
    A = n(343396),
    P = n(197571);
function R(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function D(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            i.forEach(function (t) {
                R(e, t, n[t]);
            });
    }
    return e;
}
function Z(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var i = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, i);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function w(e) {
    let {
            code: { code: t, consumed: n },
        } = e,
        s = "".concat(t.substr(0, 4), "-").concat(t.substr(4)),
        a = r.useRef(null),
        l = r.useCallback(
            (e) => {
                if ("c" === e.key && e.metaKey && C.wS) {
                    var t;
                    e.preventDefault(),
                        e.stopPropagation(),
                        (0, C.JG)(s),
                        null == a || null == (t = a.current) || t.focus();
                }
            },
            [s],
        );
    return (0, i.jsx)("li", {
        className: P.marginBottom20,
        children: (0, i.jsx)(o.P3F, {
            innerRef: a,
            className: A.backupCode,
            onKeyDown: l,
            children: (0, i.jsx)(o.XZJ, {
                displayOnly: !0,
                readOnly: !0,
                className: A.codeCheckbox,
                value: n,
                children: (0, i.jsx)("span", {
                    className: A.code,
                    children: s,
                }),
            }),
        }),
    });
}
class k extends r.PureComponent {
    maskPhoneNumber(e) {
        return null == e ? "" : "".concat("*".repeat(e.length - 4)).concat(e.slice(-4));
    }
    renderMFASMS() {
        let e,
            t,
            { revealed: n } = this.state,
            { currentUser: r, togglingSMS: s, hasTOTPEnabled: a } = this.props,
            l = null != r.phone,
            c = r.hasFlag(N.xW$.MFA_SMS);
        if (a) {
            if (l || c) {
                let e = n ? r.phone : this.maskPhoneNumber(r.phone);
                t = (0, i.jsxs)(o.R94, {
                    type: o.R94.Types.DESCRIPTION,
                    className: P.marginBottom8,
                    children: [
                        y.intl.format(y.t.PXVoEB, { phoneNumber: e }),
                        (0, i.jsx)(o.eee, {
                            onClick: this.togglePhoneNumberVisibility,
                            className: A.phoneRevealer,
                            children: n ? y.intl.string(y.t.FfltIC) : y.intl.string(y.t.llArAg),
                        }),
                    ],
                });
            }
            if (c)
                e = (0, i.jsx)(g.Z, {
                    className: l ? "" : P.marginTop8,
                    children: (0, i.jsx)(o.zxk, {
                        variant: "critical-secondary",
                        size: "sm",
                        text: y.intl.string(y.t.KLWnio),
                        loading: s,
                        onClick: this.handleDisableSMS,
                    }),
                });
            else {
                let t = (0, v.c)(r);
                e = (0, i.jsxs)(o.hE2, {
                    size: "sm",
                    className: l ? "" : P.marginTop8,
                    children: [
                        (0, i.jsx)(o.zxk, {
                            variant: "primary",
                            size: "sm",
                            text: null != t ? t : y.intl.string(y.t.DZQe29),
                            onClick: this.handleEnableSMS,
                            loading: s,
                            disabled: null != t,
                        }),
                        l
                            ? (0, i.jsx)(o.zxk, {
                                  variant: "secondary",
                                  size: "sm",
                                  text: y.intl.string(y.t.Ulqq6O),
                                  onClick: this.handleChangePhoneNumber,
                              })
                            : null,
                    ],
                });
            }
            return (0, i.jsx)(f.F, {
                setting: T.s6.ACCOUNT_SMS_BACKUP,
                children: (0, i.jsxs)(o.hjN, {
                    className: P.marginTop40,
                    title: y.intl.string(y.t.uHAJ5u),
                    children: [
                        (0, i.jsx)(o.R94, {
                            type: o.R94.Types.DESCRIPTION,
                            children: y.intl.string(y.t.fspJ4O),
                        }),
                        t,
                        e,
                    ],
                }),
            });
        }
    }
    renderEnabled() {
        let e,
            { backupCodes: t } = this.props,
            n = (0, i.jsx)(f.F, {
                setting: T.s6.ACCOUNT_VIEW_BACKUP_CODES,
                children: (0, i.jsx)(o.zxk, {
                    variant: "primary",
                    size: "sm",
                    text: y.intl.string(y.t.xZEzbm),
                    onClick: this.sendMFABackupCodesVerificationKeyEmail,
                }),
            });
        if (t.length > 0) {
            n = (0, i.jsx)(u.Z, {
                fileContents: this.getDownloadFileContents,
                contentType: "text/plain",
                fileName: "discord_backup_codes.txt",
                children: (0, i.jsx)(o.zxk, {
                    variant: "primary",
                    size: "sm",
                    text: y.intl.string(y.t.qZZUy8),
                }),
            });
            let r = (e) => e.map((e) => (0, i.jsx)(w, { code: e }, e.code));
            e = (0, i.jsxs)(o.hjN, {
                title: y.intl.string(y.t.GfqHPj),
                children: [
                    (0, i.jsx)(o.R94, {
                        type: o.R94.Types.DESCRIPTION,
                        className: P.marginBottom20,
                        children: y.intl.format(y.t.OhmvYm, {}),
                    }),
                    (0, i.jsxs)(g.Z, {
                        children: [
                            (0, i.jsx)(g.Z.Child, {
                                children: (0, i.jsx)("ul", {
                                    className: A.checkboxGroup,
                                    children: r(t.slice(0, t.length / 2)),
                                }),
                            }),
                            (0, i.jsx)(g.Z.Child, {
                                children: (0, i.jsx)("ul", {
                                    className: A.checkboxGroup,
                                    children: r(t.slice(t.length / 2)),
                                }),
                            }),
                        ],
                    }),
                    (0, i.jsx)("div", {
                        children: (0, i.jsx)(o.Avr, {
                            textVariant: "text-sm/medium",
                            onClick: this.generateBackupCodes,
                            text: y.intl.string(y.t.RIThUl),
                        }),
                    }),
                    (0, i.jsx)(o.$i$, { className: P.marginTop20 }),
                ],
            });
        }
        return (0, i.jsxs)(o.hjN, {
            children: [
                (0, i.jsx)(o.vwX, { children: y.intl.string(y.t.EPVq09) }),
                (0, i.jsx)(o.R94, {
                    type: o.R94.Types.DESCRIPTION,
                    className: P.marginBottom20,
                    children: y.intl.string(y.t.bQwxiY),
                }),
                (0, i.jsxs)(o.hE2, {
                    size: "sm",
                    className: P.marginBottom20,
                    children: [
                        n,
                        (0, i.jsx)(f.F, {
                            setting: T.s6.ACCOUNT_REMOVE_2FA,
                            children: (0, i.jsx)(o.zxk, {
                                variant: "critical-secondary",
                                size: "sm",
                                text: y.intl.string(y.t["D+aE7u"]),
                                onClick: this.handleDisableMFA,
                            }),
                        }),
                        (0, i.jsx)(f.F, {
                            setting: T.s6.ACCOUNT_ENABLE_2FA,
                            children: (0, i.jsx)(o.zxk, {
                                variant: "primary",
                                size: "sm",
                                text: y.intl.string(y.t.cDgKtb),
                                onClick: S.ZP.enableMFA,
                            }),
                        }),
                    ],
                }),
                e,
                this.renderMFASMS(),
                (0, i.jsx)(f.F, {
                    setting: T.s6.ACCOUNT_SECURITY_KEYS,
                    children: (0, i.jsx)(x.Z, {}),
                }),
            ],
        });
    }
    renderDisabled() {
        return (0, i.jsxs)(o.hjN, {
            title: y.intl.string(y.t.EPVq09),
            children: [
                (0, i.jsx)(o.R94, {
                    type: o.R94.Types.DESCRIPTION,
                    className: P.marginBottom20,
                    children: y.intl.string(y.t["8aDa1t"]),
                }),
                (0, i.jsx)(o.xJW, {
                    children: (0, i.jsx)(o.zxk, {
                        variant: "primary",
                        size: "sm",
                        text: y.intl.string(y.t.cDgKtb),
                        onClick: S.ZP.enableMFA,
                    }),
                }),
                (0, i.jsx)(x.Z, {}),
            ],
        });
    }
    render() {
        let { currentUser: e } = this.props;
        return O.uZ
            ? e.verified
                ? e.mfaEnabled
                    ? this.renderEnabled()
                    : this.renderDisabled()
                : (0, i.jsx)(o.hjN, {
                      title: y.intl.string(y.t.EPVq09),
                      children: (0, i.jsx)(o.R94, {
                          type: o.R94.Types.DESCRIPTION,
                          children: y.intl.string(y.t.uggF7u),
                      }),
                  })
            : (0, i.jsx)(o.hjN, {
                  title: y.intl.string(y.t.EPVq09),
                  children: (0, i.jsx)(o.R94, {
                      type: o.R94.Types.DESCRIPTION,
                      children: y.intl.string(y.t.PhHhsr),
                  }),
              });
    }
    openPhoneVerificationModal() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        (0, o.h7j)((t) => (0, i.jsx)(b.default, D({ reason: h.L.USER_SETTINGS_UPDATE }, t, e)), { modalKey: I.M });
    }
    constructor(...e) {
        super(...e),
            R(this, "state", {
                revealed: !1,
                password: "",
            }),
            R(this, "togglePhoneNumberVisibility", (e) => {
                e.preventDefault(), this.setState({ revealed: !this.state.revealed });
            }),
            R(this, "handleDisableMFA", () => {
                d.Z.show({
                    title: y.intl.string(y.t["D+aE7u"]),
                    body: y.intl.string(y.t.EA4ZEh),
                    cancelText: y.intl.string(y.t["ETE/oK"]),
                    onConfirm: () => c.Z.disable(),
                });
            }),
            R(this, "generateBackupCodes", async () => {
                let e = j.Z.getVerificationKey();
                await c.Z.confirmViewBackupCodes(e, !0);
            }),
            R(this, "sendMFABackupCodesVerificationKeyEmail", () => {
                (0, o.h7j)((e) =>
                    (0, i.jsx)(
                        p.Z,
                        Z(D({}, e), {
                            handleSubmit: (e) =>
                                c.Z.sendMFABackupCodesVerificationKeyEmail(e).then(() => {
                                    this.viewBackupCodes(e);
                                }),
                            title: y.intl.string(y.t.PsQmzc),
                            actionText: y.intl.string(y.t.ajkYcH),
                        }),
                    ),
                );
            }),
            R(this, "viewBackupCodes", (e) => {
                (0, o.h7j)((t) =>
                    (0, i.jsx)(
                        m.Z,
                        Z(D({}, t), {
                            handleSubmit: (e) => c.Z.confirmViewBackupCodes(e, !1).then(() => t.onClose()),
                            maxLength: 8,
                            title: y.intl.string(y.t.mGppp6),
                            label: y.intl.string(y.t.TjGb4e),
                            forceNoPlaceholder: !0,
                            retryPrompt: y.intl.string(y.t.PZgmxs),
                            retrySuccessMessage: y.intl.string(y.t.j4qu8v),
                            onRetry: () => c.Z.sendMFABackupCodesVerificationKeyEmail(e),
                            actionText: y.intl.string(y.t.piW6YW),
                            helpMessage: y.intl.string(y.t["37S9yc"]),
                        }),
                    ),
                );
            }),
            R(this, "getDownloadFileContents", () => {
                let e = this.props.backupCodes
                        .map((e) => {
                            let { consumed: t, code: n } = e;
                            return "* "
                                .concat(n.substr(0, 4), "-")
                                .concat(n.substr(4), " ")
                                .concat(t ? "(used)" : "");
                        })
                        .join("\r\n"),
                    t = y.intl.formatToPlainString(y.t.uYWwh4, { email: this.props.currentUser.email });
                return "".concat(t, "\r\n\r\n").concat(e);
            }),
            R(this, "handleChangePhoneNumber", () => {
                this.openPhoneVerificationModal();
            }),
            R(this, "handleEnableSMS", () => {
                let { currentUser: e } = this.props;
                null == e.phone ? this.openPhoneVerificationModal({ onAddedPhone: c.Z.enableSMS }) : c.Z.enableSMS();
            }),
            R(this, "handleDisableSMS", () => {
                (0, o.h7j)((e) =>
                    (0, i.jsx)(
                        p.Z,
                        Z(D({}, e), {
                            handleSubmit: c.Z.disableSMS,
                            title: y.intl.string(y.t.KLWnio),
                            children: y.intl.string(y.t["W0/Dub"]),
                        }),
                    ),
                );
            });
    }
}
function L(e) {
    let t = (0, l.e7)([E.default], () => E.default.getCurrentUser());
    a()(null != t, "TwoFactorAuth: currentUser cannot be undefined");
    let n = (0, l.cj)([j.Z, _.default], () => ({
        togglingSMS: j.Z.togglingSMS,
        hasTOTPEnabled: _.default.hasTOTPEnabled(),
    }));
    return (0, i.jsx)(k, D({ currentUser: t }, n, e));
}
