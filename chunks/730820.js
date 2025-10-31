n.d(t, { Z: () => G }), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(512722),
    o = n.n(a),
    s = n(442837),
    l = n(755721),
    c = n(481060),
    u = n(816814),
    d = n(240872),
    f = n(23645),
    _ = n(600164),
    p = n(183620),
    h = n(144114),
    m = n(921801),
    g = n(355497),
    E = n(607018),
    b = n(778764),
    y = n(314897),
    O = n(325067),
    v = n(594174),
    I = n(572004),
    T = n(287880),
    S = n(714565),
    A = n(202858),
    C = n(726985),
    N = n(981631),
    R = n(815660),
    P = n(388032),
    w = n(343396),
    D = n(197571);
function x(e, t, n) {
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
                x(e, t, n[t]);
            });
    }
    return e;
}
function M(e, t) {
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
            : M(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function k(e) {
    let {
            code: { code: t, consumed: n },
        } = e,
        a = "".concat(t.substr(0, 4), "-").concat(t.substr(4)),
        o = i.useRef(null),
        s = i.useCallback(
            (e) => {
                if ("c" === e.key && e.metaKey && I.wS) {
                    var t;
                    e.preventDefault(),
                        e.stopPropagation(),
                        (0, I.JG)(a),
                        null == o || null == (t = o.current) || t.focus();
                }
            },
            [a],
        );
    return (0, r.jsx)("li", {
        className: D.marginBottom20,
        children: (0, r.jsx)(c.P3F, {
            innerRef: o,
            className: w.backupCode,
            onKeyDown: s,
            children: (0, r.jsx)(l.$q, {
                displayOnly: !0,
                readOnly: !0,
                className: w.codeCheckbox,
                value: n,
                children: (0, r.jsx)("span", {
                    className: w.code,
                    children: a,
                }),
            }),
        }),
    });
}
class U extends i.PureComponent {
    maskPhoneNumber(e) {
        return null == e ? "" : "".concat("*".repeat(e.length - 4)).concat(e.slice(-4));
    }
    renderMFASMS() {
        let e,
            t,
            { revealed: n } = this.state,
            { currentUser: i, togglingSMS: a, hasTOTPEnabled: o } = this.props,
            s = null != i.phone,
            l = i.hasFlag(N.xW$.MFA_SMS);
        if (o) {
            if (s || l) {
                let e = n ? i.phone : this.maskPhoneNumber(i.phone);
                t = (0, r.jsxs)(c.Text, {
                    variant: "text-sm/normal",
                    children: [
                        P.intl.format(P.t.PXVoEO, { phoneNumber: e }),
                        (0, r.jsx)(c.Anchor, {
                            onClick: this.togglePhoneNumberVisibility,
                            className: w.phoneRevealer,
                            children: n ? P.intl.string(P.t.FfltIN) : P.intl.string(P.t.llArAg),
                        }),
                    ],
                });
            }
            if (l)
                e = (0, r.jsx)(c.Button, {
                    variant: "critical-secondary",
                    size: "sm",
                    text: P.intl.string(P.t.KLWnit),
                    loading: a,
                    onClick: this.handleDisableSMS,
                });
            else {
                let t = (0, S.c)(i);
                e = (0, r.jsxs)(c.ButtonGroup, {
                    size: "sm",
                    children: [
                        (0, r.jsx)(c.Button, {
                            variant: "primary",
                            size: "sm",
                            text: null != t ? t : P.intl.string(P.t.DZQe23),
                            onClick: this.handleEnableSMS,
                            loading: a,
                            disabled: null != t,
                        }),
                        s
                            ? (0, r.jsx)(c.Button, {
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
                setting: C.s6.ACCOUNT_SMS_BACKUP,
                children: (0, r.jsxs)(c.gNt, {
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
                setting: C.s6.ACCOUNT_VIEW_BACKUP_CODES,
                children: (0, r.jsx)(c.Button, {
                    variant: "primary",
                    size: "sm",
                    text: P.intl.string(P.t.xZEzbu),
                    onClick: this.sendMFABackupCodesVerificationKeyEmail,
                }),
            });
        if (t.length > 0) {
            n = (0, r.jsx)(f.Z, {
                fileContents: this.getDownloadFileContents,
                contentType: "text/plain",
                fileName: "discord_backup_codes.txt",
                children: (0, r.jsx)(c.Button, {
                    variant: "primary",
                    size: "sm",
                    text: P.intl.string(P.t.qZZUy6),
                }),
            });
            let i = (e) => e.map((e) => (0, r.jsx)(k, { code: e }, e.code));
            e = (0, r.jsxs)(c.Kqy, {
                gap: 16,
                children: [
                    (0, r.jsxs)(c.gNt, {
                        label: P.intl.string(P.t.GfqHPn),
                        description: P.intl.format(P.t.OhmvYt, {}),
                        children: [
                            (0, r.jsxs)(_.Z, {
                                children: [
                                    (0, r.jsx)(_.Z.Child, {
                                        children: (0, r.jsx)("ul", {
                                            className: w.checkboxGroup,
                                            children: i(t.slice(0, t.length / 2)),
                                        }),
                                    }),
                                    (0, r.jsx)(_.Z.Child, {
                                        children: (0, r.jsx)("ul", {
                                            className: w.checkboxGroup,
                                            children: i(t.slice(t.length / 2)),
                                        }),
                                    }),
                                ],
                            }),
                            (0, r.jsx)(c.Avr, {
                                textVariant: "text-sm/medium",
                                onClick: this.generateBackupCodes,
                                text: P.intl.string(P.t.RIThUu),
                            }),
                        ],
                    }),
                    (0, r.jsx)(c.izJ, {}),
                ],
            });
        }
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(c.gNt, {
                    label: P.intl.string(P.t.EPVq00),
                    description: P.intl.string(P.t.bQwxib),
                    children: (0, r.jsxs)(c.ButtonGroup, {
                        size: "sm",
                        children: [
                            n,
                            (0, r.jsx)(m.F, {
                                setting: C.s6.ACCOUNT_REMOVE_2FA,
                                children: (0, r.jsx)(c.Button, {
                                    variant: "critical-secondary",
                                    size: "sm",
                                    text: P.intl.string(P.t["D+aE7g"]),
                                    onClick: this.handleDisableMFA,
                                }),
                            }),
                            (0, r.jsx)(m.F, {
                                setting: C.s6.ACCOUNT_ENABLE_2FA,
                                children: (0, r.jsx)(c.Button, {
                                    variant: "primary",
                                    size: "sm",
                                    text: P.intl.string(P.t.cDgKte),
                                    onClick: A.ZP.enableMFA,
                                }),
                            }),
                        ],
                    }),
                }),
                e,
                this.renderMFASMS(),
                (0, r.jsx)(m.F, {
                    setting: C.s6.ACCOUNT_SECURITY_KEYS,
                    children: (0, r.jsx)(b.Z, {}),
                }),
            ],
        });
    }
    renderDisabled() {
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(c.gNt, {
                    label: P.intl.string(P.t.EPVq00),
                    description: P.intl.string(P.t["8aDa1t"]),
                    children: (0, r.jsx)(c.Button, {
                        variant: "primary",
                        size: "sm",
                        text: P.intl.string(P.t.cDgKte),
                        onClick: A.ZP.enableMFA,
                    }),
                }),
                (0, r.jsx)(b.Z, {}),
            ],
        });
    }
    render() {
        let { currentUser: e } = this.props;
        return T.uZ
            ? e.verified
                ? e.mfaEnabled
                    ? this.renderEnabled()
                    : this.renderDisabled()
                : (0, r.jsx)(c.gNt, {
                      label: P.intl.string(P.t.EPVq00),
                      children: (0, r.jsx)(c.Wn, {
                          messageType: c.QYI.WARNING,
                          children: P.intl.string(P.t.uggF7o),
                      }),
                  })
            : (0, r.jsx)(c.gNt, {
                  label: P.intl.string(P.t.EPVq00),
                  children: (0, r.jsx)(c.Wn, {
                      messageType: c.QYI.INFO,
                      children: P.intl.string(P.t.PhHhsj),
                  }),
              });
    }
    openPhoneVerificationModal() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        (0, c.h7j)((t) => (0, r.jsx)(E.default, L({ reason: h.L.USER_SETTINGS_UPDATE }, t, e)), { modalKey: R.M });
    }
    constructor(...e) {
        super(...e),
            x(this, "state", {
                revealed: !1,
                password: "",
            }),
            x(this, "togglePhoneNumberVisibility", (e) => {
                e.preventDefault(), this.setState({ revealed: !this.state.revealed });
            }),
            x(this, "handleDisableMFA", () => {
                d.Z.show({
                    title: P.intl.string(P.t["D+aE7g"]),
                    body: P.intl.string(P.t.EA4ZEk),
                    cancelText: P.intl.string(P.t["ETE/oC"]),
                    onConfirm: () => u.Z.disable(),
                });
            }),
            x(this, "generateBackupCodes", async () => {
                let e = O.Z.getVerificationKey();
                await u.Z.confirmViewBackupCodes(e, !0);
            }),
            x(this, "sendMFABackupCodesVerificationKeyEmail", () => {
                (0, c.h7j)((e) =>
                    (0, r.jsx)(
                        g.Z,
                        j(L({}, e), {
                            handleSubmit: (e) =>
                                u.Z.sendMFABackupCodesVerificationKeyEmail(e).then(() => {
                                    this.viewBackupCodes(e);
                                }),
                            title: P.intl.string(P.t.PsQmzU),
                            actionText: P.intl.string(P.t.ajkYcF),
                        }),
                    ),
                );
            }),
            x(this, "viewBackupCodes", (e) => {
                (0, c.h7j)(
                    (t) =>
                        (0, r.jsx)(
                            p.Z,
                            j(L({}, t), {
                                handleSubmit: (e) => u.Z.confirmViewBackupCodes(e, !1).then(() => t.onClose()),
                                maxLength: 8,
                                title: P.intl.string(P.t["mGppp/"]),
                                label: P.intl.string(P.t.TjGb4Q),
                                forceNoPlaceholder: !0,
                                retryPrompt: P.intl.string(P.t.PZgmxv),
                                retrySuccessMessage: P.intl.string(P.t.j4qu8n),
                                onRetry: () => u.Z.sendMFABackupCodesVerificationKeyEmail(e),
                                actionText: P.intl.string(P.t.piW6YS),
                                helpMessage: P.intl.string(P.t["37S9yU"]),
                            }),
                        ),
                    { stackingBehavior: "stack" },
                );
            }),
            x(this, "getDownloadFileContents", () => {
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
            x(this, "handleChangePhoneNumber", () => {
                this.openPhoneVerificationModal();
            }),
            x(this, "handleEnableSMS", () => {
                let { currentUser: e } = this.props;
                null == e.phone ? this.openPhoneVerificationModal({ onAddedPhone: u.Z.enableSMS }) : u.Z.enableSMS();
            }),
            x(this, "handleDisableSMS", () => {
                (0, c.h7j)((e) =>
                    (0, r.jsx)(
                        g.Z,
                        j(L({}, e), {
                            handleSubmit: u.Z.disableSMS,
                            title: P.intl.string(P.t.KLWnit),
                            children: P.intl.string(P.t["W0/Duf"]),
                        }),
                    ),
                );
            });
    }
}
function G(e) {
    let t = (0, s.e7)([v.default], () => v.default.getCurrentUser());
    o()(null != t, "TwoFactorAuth: currentUser cannot be undefined");
    let n = (0, s.cj)([O.Z, y.default], () => ({
        togglingSMS: O.Z.togglingSMS,
        hasTOTPEnabled: y.default.hasTOTPEnabled(),
    }));
    return (0, r.jsx)(U, L({ currentUser: t }, n, e));
}
