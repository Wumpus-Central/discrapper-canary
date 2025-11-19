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
    _ = n(183620),
    p = n(144114),
    h = n(921801),
    m = n(355497),
    g = n(607018),
    E = n(778764),
    b = n(314897),
    y = n(325067),
    O = n(594174),
    v = n(572004),
    I = n(287880),
    T = n(714565),
    S = n(202858),
    A = n(726985),
    C = n(981631),
    N = n(815660),
    R = n(388032),
    P = n(343396),
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
function L(e) {
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
function x(e, t) {
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
function M(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : x(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function j(e) {
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
            className: P.backupCode,
            onKeyDown: s,
            children: [
                (0, r.jsx)(l.FZ5, { checked: n }),
                (0, r.jsx)("span", {
                    className: P.code,
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
                        R.intl.format(R.t.PXVoEO, { phoneNumber: e }),
                        (0, r.jsx)(l.Anchor, {
                            onClick: this.togglePhoneNumberVisibility,
                            className: P.phoneRevealer,
                            children: n ? R.intl.string(R.t.FfltIN) : R.intl.string(R.t.llArAg),
                        }),
                    ],
                });
            }
            if (c)
                e = (0, r.jsx)(l.Button, {
                    variant: "critical-secondary",
                    size: "sm",
                    text: R.intl.string(R.t.KLWnit),
                    loading: a,
                    onClick: this.handleDisableSMS,
                });
            else {
                let t = (0, T.c)(i);
                e = (0, r.jsxs)(l.ButtonGroup, {
                    size: "sm",
                    children: [
                        (0, r.jsx)(l.Button, {
                            variant: "primary",
                            size: "sm",
                            text: null != t ? t : R.intl.string(R.t.DZQe23),
                            onClick: this.handleEnableSMS,
                            loading: a,
                            disabled: null != t,
                        }),
                        s
                            ? (0, r.jsx)(l.Button, {
                                  variant: "secondary",
                                  size: "sm",
                                  text: R.intl.string(R.t.Ulqq6K),
                                  onClick: this.handleChangePhoneNumber,
                              })
                            : null,
                    ],
                });
            }
            return (0, r.jsx)(h.F, {
                setting: A.s6.ACCOUNT_SMS_BACKUP,
                children: (0, r.jsxs)(l.gNt, {
                    label: R.intl.string(R.t.uHAJ5v),
                    description: R.intl.string(R.t.fspJ4H),
                    children: [t, e],
                }),
            });
        }
    }
    renderEnabled() {
        let e,
            { backupCodes: t } = this.props,
            n = (0, r.jsx)(h.F, {
                setting: A.s6.ACCOUNT_VIEW_BACKUP_CODES,
                children: (0, r.jsx)(l.Button, {
                    variant: "primary",
                    size: "sm",
                    text: R.intl.string(R.t.xZEzbu),
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
                    text: R.intl.string(R.t.qZZUy6),
                }),
            });
            let i = (e) => e.map((e) => (0, r.jsx)(j, { code: e }, e.code));
            e = (0, r.jsxs)(l.Kqy, {
                gap: 16,
                children: [
                    (0, r.jsxs)(l.gNt, {
                        label: R.intl.string(R.t.GfqHPn),
                        description: R.intl.format(R.t.OhmvYt, {}),
                        children: [
                            (0, r.jsxs)(f.Z, {
                                children: [
                                    (0, r.jsx)(f.Z.Child, {
                                        children: (0, r.jsx)("ul", {
                                            className: P.checkboxGroup,
                                            children: i(t.slice(0, t.length / 2)),
                                        }),
                                    }),
                                    (0, r.jsx)(f.Z.Child, {
                                        children: (0, r.jsx)("ul", {
                                            className: P.checkboxGroup,
                                            children: i(t.slice(t.length / 2)),
                                        }),
                                    }),
                                ],
                            }),
                            (0, r.jsx)(l.Avr, {
                                textVariant: "text-sm/medium",
                                onClick: this.generateBackupCodes,
                                text: R.intl.string(R.t.RIThUu),
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
                    label: R.intl.string(R.t.EPVq00),
                    description: R.intl.string(R.t.bQwxib),
                    children: (0, r.jsxs)(l.ButtonGroup, {
                        size: "sm",
                        children: [
                            n,
                            (0, r.jsx)(h.F, {
                                setting: A.s6.ACCOUNT_REMOVE_2FA,
                                children: (0, r.jsx)(l.Button, {
                                    variant: "critical-secondary",
                                    size: "sm",
                                    text: R.intl.string(R.t["D+aE7g"]),
                                    onClick: this.handleDisableMFA,
                                }),
                            }),
                            (0, r.jsx)(h.F, {
                                setting: A.s6.ACCOUNT_ENABLE_2FA,
                                children: (0, r.jsx)(l.Button, {
                                    variant: "primary",
                                    size: "sm",
                                    text: R.intl.string(R.t.cDgKte),
                                    onClick: S.ZP.enableMFA,
                                }),
                            }),
                        ],
                    }),
                }),
                e,
                this.renderMFASMS(),
                (0, r.jsx)(h.F, {
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
                    label: R.intl.string(R.t.EPVq00),
                    description: R.intl.string(R.t["8aDa1t"]),
                    children: (0, r.jsx)(l.Button, {
                        variant: "primary",
                        size: "sm",
                        text: R.intl.string(R.t.cDgKte),
                        onClick: S.ZP.enableMFA,
                    }),
                }),
                (0, r.jsx)(E.Z, {}),
            ],
        });
    }
    render() {
        let { currentUser: e } = this.props;
        return I.uZ
            ? e.verified
                ? e.mfaEnabled
                    ? this.renderEnabled()
                    : this.renderDisabled()
                : (0, r.jsx)(l.gNt, {
                      label: R.intl.string(R.t.EPVq00),
                      children: (0, r.jsx)(l.Wn, {
                          messageType: l.QYI.WARNING,
                          children: R.intl.string(R.t.uggF7o),
                      }),
                  })
            : (0, r.jsx)(l.gNt, {
                  label: R.intl.string(R.t.EPVq00),
                  children: (0, r.jsx)(l.Wn, {
                      messageType: l.QYI.INFO,
                      children: R.intl.string(R.t.PhHhsj),
                  }),
              });
    }
    openPhoneVerificationModal() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        (0, l.h7j)((t) => (0, r.jsx)(g.default, L({ reason: p.L.USER_SETTINGS_UPDATE }, t, e)), { modalKey: N.M });
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
                    title: R.intl.string(R.t["D+aE7g"]),
                    body: R.intl.string(R.t.EA4ZEk),
                    cancelText: R.intl.string(R.t["ETE/oC"]),
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
                        m.Z,
                        M(L({}, e), {
                            handleSubmit: (e) =>
                                c.Z.sendMFABackupCodesVerificationKeyEmail(e).then(() => {
                                    this.viewBackupCodes(e);
                                }),
                            title: R.intl.string(R.t.PsQmzU),
                            actionText: R.intl.string(R.t.ajkYcF),
                        }),
                    ),
                );
            }),
            w(this, "viewBackupCodes", (e) => {
                (0, l.h7j)(
                    (t) =>
                        (0, r.jsx)(
                            _.Z,
                            M(L({}, t), {
                                handleSubmit: (e) => c.Z.confirmViewBackupCodes(e, !1).then(() => t.onClose()),
                                maxLength: 8,
                                title: R.intl.string(R.t["mGppp/"]),
                                label: R.intl.string(R.t.TjGb4Q),
                                forceNoPlaceholder: !0,
                                retryPrompt: R.intl.string(R.t.PZgmxv),
                                retrySuccessMessage: R.intl.string(R.t.j4qu8n),
                                onRetry: () => c.Z.sendMFABackupCodesVerificationKeyEmail(e),
                                actionText: R.intl.string(R.t.piW6YS),
                                helpMessage: R.intl.string(R.t["37S9yU"]),
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
                    t = R.intl.formatToPlainString(R.t["uYWwh/"], { email: this.props.currentUser.email });
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
                        m.Z,
                        M(L({}, e), {
                            handleSubmit: c.Z.disableSMS,
                            title: R.intl.string(R.t.KLWnit),
                            children: R.intl.string(R.t["W0/Duf"]),
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
    return (0, r.jsx)(k, L({ currentUser: t }, n, e));
}
