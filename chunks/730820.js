n.d(t, { Z: () => U }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(512722),
    o = n.n(a),
    s = n(442837),
    l = n(481060),
    c = n(816814),
    u = n(240872),
    d = n(23645),
    f = n(600164),
    p = n(183620),
    _ = n(144114),
    m = n(921801),
    h = n(355497),
    g = n(607018),
    E = n(778764),
    b = n(314897),
    y = n(325067),
    O = n(594174),
    v = n(572004),
    S = n(287880),
    I = n(714565),
    T = n(202858),
    A = n(726985),
    C = n(981631),
    N = n(815660),
    P = n(388032),
    R = n(343396),
    D = n(197571);
function w(e, t, n) {
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
function x(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                w(e, t, n[t]);
            });
    }
    return e;
}
function L(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function j(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : L(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function M(e) {
    let {
            code: { code: t, consumed: n },
        } = e,
        a = "".concat(t.substr(0, 4), "-").concat(t.substr(4)),
        o = i.useRef(null),
        s = i.useCallback(
            (e) => {
                if ("c" === e.key && e.metaKey && v.wS) {
                    var t;
                    e.preventDefault(),
                        e.stopPropagation(),
                        (0, v.JG)(a),
                        null == o || null == (t = o.current) || t.focus();
                }
            },
            [a],
        );
    return (0, r.jsx)("li", {
        className: D.marginBottom20,
        children: (0, r.jsxs)(l.P3F, {
            innerRef: o,
            className: R.backupCode,
            onKeyDown: s,
            children: [
                (0, r.jsx)(l.FZ5, { checked: n }),
                (0, r.jsx)("span", {
                    className: R.code,
                    children: a,
                }),
            ],
        }),
    });
}
class k extends i.PureComponent {
    maskPhoneNumber(e) {
        return null == e ? "" : "".concat("*".repeat(e.length - 4)).concat(e.slice(-4));
    }
    renderMFASMS() {
        let e,
            t,
            { revealed: n } = this.state,
            { currentUser: i, togglingSMS: a, hasTOTPEnabled: o } = this.props,
            s = null != i.phone,
            c = i.hasFlag(C.xW$.MFA_SMS);
        if (o) {
            if (s || c) {
                let e = n ? i.phone : this.maskPhoneNumber(i.phone);
                t = (0, r.jsxs)(l.Text, {
                    variant: "text-sm/normal",
                    children: [
                        P.intl.format(P.t.PXVoEO, { phoneNumber: e }),
                        (0, r.jsx)(l.Anchor, {
                            onClick: this.togglePhoneNumberVisibility,
                            className: R.phoneRevealer,
                            children: n ? P.intl.string(P.t.FfltIN) : P.intl.string(P.t.llArAg),
                        }),
                    ],
                });
            }
            if (c)
                e = (0, r.jsx)(l.Button, {
                    variant: "critical-secondary",
                    size: "sm",
                    text: P.intl.string(P.t.KLWnit),
                    loading: a,
                    onClick: this.handleDisableSMS,
                });
            else {
                let t = (0, I.c)(i);
                e = (0, r.jsxs)(l.ButtonGroup, {
                    size: "sm",
                    children: [
                        (0, r.jsx)(l.Button, {
                            variant: "primary",
                            size: "sm",
                            text: null != t ? t : P.intl.string(P.t.DZQe23),
                            onClick: this.handleEnableSMS,
                            loading: a,
                            disabled: null != t,
                        }),
                        s
                            ? (0, r.jsx)(l.Button, {
                                  variant: "secondary",
                                  size: "sm",
                                  text: P.intl.string(P.t.Ulqq6K),
                                  onClick: this.handleChangePhoneNumber,
                              })
                            : null,
                    ],
                });
            }
            return (0, r.jsx)(m.F, {
                setting: A.s6.ACCOUNT_SMS_BACKUP,
                children: (0, r.jsxs)(l.gNt, {
                    label: P.intl.string(P.t.uHAJ5v),
                    description: P.intl.string(P.t.fspJ4H),
                    children: [t, e],
                }),
            });
        }
    }
    renderEnabled() {
        let e,
            { backupCodes: t } = this.props,
            n = (0, r.jsx)(m.F, {
                setting: A.s6.ACCOUNT_VIEW_BACKUP_CODES,
                children: (0, r.jsx)(l.Button, {
                    variant: "primary",
                    size: "sm",
                    text: P.intl.string(P.t.xZEzbu),
                    onClick: this.sendMFABackupCodesVerificationKeyEmail,
                }),
            });
        if (t.length > 0) {
            n = (0, r.jsx)(d.Z, {
                fileContents: this.getDownloadFileContents,
                contentType: "text/plain",
                fileName: "discord_backup_codes.txt",
                children: (0, r.jsx)(l.Button, {
                    variant: "primary",
                    size: "sm",
                    text: P.intl.string(P.t.qZZUy6),
                }),
            });
            let i = (e) => e.map((e) => (0, r.jsx)(M, { code: e }, e.code));
            e = (0, r.jsxs)(l.Kqy, {
                gap: 16,
                children: [
                    (0, r.jsxs)(l.gNt, {
                        label: P.intl.string(P.t.GfqHPn),
                        description: P.intl.format(P.t.OhmvYt, {}),
                        children: [
                            (0, r.jsxs)(f.Z, {
                                children: [
                                    (0, r.jsx)(f.Z.Child, {
                                        children: (0, r.jsx)("ul", {
                                            className: R.checkboxGroup,
                                            children: i(t.slice(0, t.length / 2)),
                                        }),
                                    }),
                                    (0, r.jsx)(f.Z.Child, {
                                        children: (0, r.jsx)("ul", {
                                            className: R.checkboxGroup,
                                            children: i(t.slice(t.length / 2)),
                                        }),
                                    }),
                                ],
                            }),
                            (0, r.jsx)(l.Avr, {
                                textVariant: "text-sm/medium",
                                onClick: this.generateBackupCodes,
                                text: P.intl.string(P.t.RIThUu),
                            }),
                        ],
                    }),
                    (0, r.jsx)(l.izJ, {}),
                ],
            });
        }
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(l.gNt, {
                    label: P.intl.string(P.t.EPVq00),
                    description: P.intl.string(P.t.bQwxib),
                    children: (0, r.jsxs)(l.ButtonGroup, {
                        size: "sm",
                        children: [
                            n,
                            (0, r.jsx)(m.F, {
                                setting: A.s6.ACCOUNT_REMOVE_2FA,
                                children: (0, r.jsx)(l.Button, {
                                    variant: "critical-secondary",
                                    size: "sm",
                                    text: P.intl.string(P.t["D+aE7g"]),
                                    onClick: this.handleDisableMFA,
                                }),
                            }),
                            (0, r.jsx)(m.F, {
                                setting: A.s6.ACCOUNT_ENABLE_2FA,
                                children: (0, r.jsx)(l.Button, {
                                    variant: "primary",
                                    size: "sm",
                                    text: P.intl.string(P.t.cDgKte),
                                    onClick: T.ZP.enableMFA,
                                }),
                            }),
                        ],
                    }),
                }),
                e,
                this.renderMFASMS(),
                (0, r.jsx)(m.F, {
                    setting: A.s6.ACCOUNT_SECURITY_KEYS,
                    children: (0, r.jsx)(E.Z, {}),
                }),
            ],
        });
    }
    renderDisabled() {
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(l.gNt, {
                    label: P.intl.string(P.t.EPVq00),
                    description: P.intl.string(P.t["8aDa1t"]),
                    children: (0, r.jsx)(l.Button, {
                        variant: "primary",
                        size: "sm",
                        text: P.intl.string(P.t.cDgKte),
                        onClick: T.ZP.enableMFA,
                    }),
                }),
                (0, r.jsx)(E.Z, {}),
            ],
        });
    }
    render() {
        let { currentUser: e } = this.props;
        return S.uZ
            ? e.verified
                ? e.mfaEnabled
                    ? this.renderEnabled()
                    : this.renderDisabled()
                : (0, r.jsx)(l.gNt, {
                      label: P.intl.string(P.t.EPVq00),
                      children: (0, r.jsx)(l.Wn, {
                          messageType: l.QYI.WARNING,
                          children: P.intl.string(P.t.uggF7o),
                      }),
                  })
            : (0, r.jsx)(l.gNt, {
                  label: P.intl.string(P.t.EPVq00),
                  children: (0, r.jsx)(l.Wn, {
                      messageType: l.QYI.INFO,
                      children: P.intl.string(P.t.PhHhsj),
                  }),
              });
    }
    openPhoneVerificationModal() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        (0, l.h7j)((t) => (0, r.jsx)(g.default, x({ reason: _.L.USER_SETTINGS_UPDATE }, t, e)), { modalKey: N.M });
    }
    constructor(...e) {
        super(...e),
            w(this, "state", {
                revealed: !1,
                password: "",
            }),
            w(this, "togglePhoneNumberVisibility", (e) => {
                e.preventDefault(), this.setState({ revealed: !this.state.revealed });
            }),
            w(this, "handleDisableMFA", () => {
                u.Z.show({
                    title: P.intl.string(P.t["D+aE7g"]),
                    body: P.intl.string(P.t.EA4ZEk),
                    cancelText: P.intl.string(P.t["ETE/oC"]),
                    onConfirm: () => c.Z.disable(),
                });
            }),
            w(this, "generateBackupCodes", async () => {
                let e = y.Z.getVerificationKey();
                await c.Z.confirmViewBackupCodes(e, !0);
            }),
            w(this, "sendMFABackupCodesVerificationKeyEmail", () => {
                (0, l.h7j)((e) =>
                    (0, r.jsx)(
                        h.default,
                        j(x({}, e), {
                            handleSubmit: (e) =>
                                c.Z.sendMFABackupCodesVerificationKeyEmail(e).then(() => {
                                    this.viewBackupCodes(e);
                                }),
                            title: P.intl.string(P.t.PsQmzU),
                            actionText: P.intl.string(P.t.ajkYcF),
                        }),
                    ),
                );
            }),
            w(this, "viewBackupCodes", (e) => {
                (0, l.h7j)(
                    (t) =>
                        (0, r.jsx)(
                            p.Z,
                            j(x({}, t), {
                                handleSubmit: (e) => c.Z.confirmViewBackupCodes(e, !1).then(() => t.onClose()),
                                maxLength: 8,
                                title: P.intl.string(P.t["mGppp/"]),
                                label: P.intl.string(P.t.TjGb4Q),
                                forceNoPlaceholder: !0,
                                retryPrompt: P.intl.string(P.t.PZgmxv),
                                retrySuccessMessage: P.intl.string(P.t.j4qu8n),
                                onRetry: () => c.Z.sendMFABackupCodesVerificationKeyEmail(e),
                                actionText: P.intl.string(P.t.piW6YS),
                                helpMessage: P.intl.string(P.t["37S9yU"]),
                            }),
                        ),
                    { stackingBehavior: "stack" },
                );
            }),
            w(this, "getDownloadFileContents", () => {
                let e = this.props.backupCodes
                        .map((e) => {
                            let { consumed: t, code: n } = e;
                            return "* "
                                .concat(n.substr(0, 4), "-")
                                .concat(n.substr(4), " ")
                                .concat(t ? "(used)" : "");
                        })
                        .join("\r\n"),
                    t = P.intl.formatToPlainString(P.t["uYWwh/"], { email: this.props.currentUser.email });
                return "".concat(t, "\r\n\r\n").concat(e);
            }),
            w(this, "handleChangePhoneNumber", () => {
                this.openPhoneVerificationModal();
            }),
            w(this, "handleEnableSMS", () => {
                let { currentUser: e } = this.props;
                null == e.phone ? this.openPhoneVerificationModal({ onAddedPhone: c.Z.enableSMS }) : c.Z.enableSMS();
            }),
            w(this, "handleDisableSMS", () => {
                (0, l.h7j)((e) =>
                    (0, r.jsx)(
                        h.default,
                        j(x({}, e), {
                            handleSubmit: c.Z.disableSMS,
                            title: P.intl.string(P.t.KLWnit),
                            children: P.intl.string(P.t["W0/Duf"]),
                        }),
                    ),
                );
            });
    }
}
function U(e) {
    let t = (0, s.e7)([O.default], () => O.default.getCurrentUser());
    o()(null != t, "TwoFactorAuth: currentUser cannot be undefined");
    let n = (0, s.cj)([y.Z, b.default], () => ({
        togglingSMS: y.Z.togglingSMS,
        hasTOTPEnabled: b.default.hasTOTPEnabled(),
    }));
    return (0, r.jsx)(k, x({ currentUser: t }, n, e));
}
