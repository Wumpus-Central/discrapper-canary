n.d(t, { Z: () => U }), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(512722),
    o = n.n(a),
    s = n(442837),
    l = n(481060),
    c = n(816814),
    u = n(240872),
    d = n(23645),
    f = n(712364),
    _ = n(279837),
    p = n(600164),
    h = n(144114),
    m = n(921801),
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
    w = n(197571);
function D(e, t, n) {
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
                D(e, t, n[t]);
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
        className: w.marginBottom20,
        children: (0, r.jsx)(l.P3F, {
            innerRef: o,
            className: P.backupCode,
            onKeyDown: s,
            children: (0, r.jsx)(l.XZJ, {
                displayOnly: !0,
                readOnly: !0,
                className: P.codeCheckbox,
                value: n,
                children: (0, r.jsx)("span", {
                    className: P.code,
                    children: a,
                }),
            }),
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
                t = (0, r.jsxs)(l.R94, {
                    type: l.R94.Types.DESCRIPTION,
                    className: w.marginBottom8,
                    children: [
                        R.intl.format(R.t.PXVoEB, { phoneNumber: e }),
                        (0, r.jsx)(l.eee, {
                            onClick: this.togglePhoneNumberVisibility,
                            className: P.phoneRevealer,
                            children: n ? R.intl.string(R.t.FfltIC) : R.intl.string(R.t.llArAg),
                        }),
                    ],
                });
            }
            if (c)
                e = (0, r.jsx)(p.Z, {
                    className: s ? "" : w.marginTop8,
                    children: (0, r.jsx)(l.zxk, {
                        variant: "critical-secondary",
                        size: "sm",
                        text: R.intl.string(R.t.KLWnio),
                        loading: a,
                        onClick: this.handleDisableSMS,
                    }),
                });
            else {
                let t = (0, T.c)(i);
                e = (0, r.jsxs)(l.hE2, {
                    size: "sm",
                    className: s ? "" : w.marginTop8,
                    children: [
                        (0, r.jsx)(l.zxk, {
                            variant: "primary",
                            size: "sm",
                            text: null != t ? t : R.intl.string(R.t.DZQe29),
                            onClick: this.handleEnableSMS,
                            loading: a,
                            disabled: null != t,
                        }),
                        s
                            ? (0, r.jsx)(l.zxk, {
                                  variant: "secondary",
                                  size: "sm",
                                  text: R.intl.string(R.t.Ulqq6O),
                                  onClick: this.handleChangePhoneNumber,
                              })
                            : null,
                    ],
                });
            }
            return (0, r.jsx)(m.F, {
                setting: A.s6.ACCOUNT_SMS_BACKUP,
                children: (0, r.jsxs)(l.hjN, {
                    className: w.marginTop40,
                    title: R.intl.string(R.t.uHAJ5u),
                    children: [
                        (0, r.jsx)(l.R94, {
                            type: l.R94.Types.DESCRIPTION,
                            children: R.intl.string(R.t.fspJ4O),
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
            n = (0, r.jsx)(m.F, {
                setting: A.s6.ACCOUNT_VIEW_BACKUP_CODES,
                children: (0, r.jsx)(l.zxk, {
                    variant: "primary",
                    size: "sm",
                    text: R.intl.string(R.t.xZEzbm),
                    onClick: this.sendMFABackupCodesVerificationKeyEmail,
                }),
            });
        if (t.length > 0) {
            n = (0, r.jsx)(d.Z, {
                fileContents: this.getDownloadFileContents,
                contentType: "text/plain",
                fileName: "discord_backup_codes.txt",
                children: (0, r.jsx)(l.zxk, {
                    variant: "primary",
                    size: "sm",
                    text: R.intl.string(R.t.qZZUy8),
                }),
            });
            let i = (e) => e.map((e) => (0, r.jsx)(M, { code: e }, e.code));
            e = (0, r.jsxs)(l.hjN, {
                title: R.intl.string(R.t.GfqHPj),
                children: [
                    (0, r.jsx)(l.R94, {
                        type: l.R94.Types.DESCRIPTION,
                        className: w.marginBottom20,
                        children: R.intl.format(R.t.OhmvYm, {}),
                    }),
                    (0, r.jsxs)(p.Z, {
                        children: [
                            (0, r.jsx)(p.Z.Child, {
                                children: (0, r.jsx)("ul", {
                                    className: P.checkboxGroup,
                                    children: i(t.slice(0, t.length / 2)),
                                }),
                            }),
                            (0, r.jsx)(p.Z.Child, {
                                children: (0, r.jsx)("ul", {
                                    className: P.checkboxGroup,
                                    children: i(t.slice(t.length / 2)),
                                }),
                            }),
                        ],
                    }),
                    (0, r.jsx)("div", {
                        children: (0, r.jsx)(l.Avr, {
                            textVariant: "text-sm/medium",
                            onClick: this.generateBackupCodes,
                            text: R.intl.string(R.t.RIThUl),
                        }),
                    }),
                    (0, r.jsx)(l.$i$, { className: w.marginTop20 }),
                ],
            });
        }
        return (0, r.jsxs)(l.hjN, {
            children: [
                (0, r.jsx)(l.vwX, { children: R.intl.string(R.t.EPVq09) }),
                (0, r.jsx)(l.R94, {
                    type: l.R94.Types.DESCRIPTION,
                    className: w.marginBottom20,
                    children: R.intl.string(R.t.bQwxiY),
                }),
                (0, r.jsxs)(l.hE2, {
                    size: "sm",
                    className: w.marginBottom20,
                    children: [
                        n,
                        (0, r.jsx)(m.F, {
                            setting: A.s6.ACCOUNT_REMOVE_2FA,
                            children: (0, r.jsx)(l.zxk, {
                                variant: "critical-secondary",
                                size: "sm",
                                text: R.intl.string(R.t["D+aE7u"]),
                                onClick: this.handleDisableMFA,
                            }),
                        }),
                        (0, r.jsx)(m.F, {
                            setting: A.s6.ACCOUNT_ENABLE_2FA,
                            children: (0, r.jsx)(l.zxk, {
                                variant: "primary",
                                size: "sm",
                                text: R.intl.string(R.t.cDgKtb),
                                onClick: S.ZP.enableMFA,
                            }),
                        }),
                    ],
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
        return (0, r.jsxs)(l.hjN, {
            title: R.intl.string(R.t.EPVq09),
            children: [
                (0, r.jsx)(l.R94, {
                    type: l.R94.Types.DESCRIPTION,
                    className: w.marginBottom20,
                    children: R.intl.string(R.t["8aDa1t"]),
                }),
                (0, r.jsx)(l.xJW, {
                    children: (0, r.jsx)(l.zxk, {
                        variant: "primary",
                        size: "sm",
                        text: R.intl.string(R.t.cDgKtb),
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
                : (0, r.jsx)(l.hjN, {
                      title: R.intl.string(R.t.EPVq09),
                      children: (0, r.jsx)(l.R94, {
                          type: l.R94.Types.DESCRIPTION,
                          children: R.intl.string(R.t.uggF7u),
                      }),
                  })
            : (0, r.jsx)(l.hjN, {
                  title: R.intl.string(R.t.EPVq09),
                  children: (0, r.jsx)(l.R94, {
                      type: l.R94.Types.DESCRIPTION,
                      children: R.intl.string(R.t.PhHhsr),
                  }),
              });
    }
    openPhoneVerificationModal() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        (0, l.h7j)((t) => (0, r.jsx)(g.default, x({ reason: h.L.USER_SETTINGS_UPDATE }, t, e)), { modalKey: N.M });
    }
    constructor(...e) {
        super(...e),
            D(this, "state", {
                revealed: !1,
                password: "",
            }),
            D(this, "togglePhoneNumberVisibility", (e) => {
                e.preventDefault(), this.setState({ revealed: !this.state.revealed });
            }),
            D(this, "handleDisableMFA", () => {
                u.Z.show({
                    title: R.intl.string(R.t["D+aE7u"]),
                    body: R.intl.string(R.t.EA4ZEh),
                    cancelText: R.intl.string(R.t["ETE/oK"]),
                    onConfirm: () => c.Z.disable(),
                });
            }),
            D(this, "generateBackupCodes", async () => {
                let e = y.Z.getVerificationKey();
                await c.Z.confirmViewBackupCodes(e, !0);
            }),
            D(this, "sendMFABackupCodesVerificationKeyEmail", () => {
                (0, l.h7j)((e) =>
                    (0, r.jsx)(
                        _.Z,
                        j(x({}, e), {
                            handleSubmit: (e) =>
                                c.Z.sendMFABackupCodesVerificationKeyEmail(e).then(() => {
                                    this.viewBackupCodes(e);
                                }),
                            title: R.intl.string(R.t.PsQmzc),
                            actionText: R.intl.string(R.t.ajkYcH),
                        }),
                    ),
                );
            }),
            D(this, "viewBackupCodes", (e) => {
                (0, l.h7j)((t) =>
                    (0, r.jsx)(
                        f.Z,
                        j(x({}, t), {
                            handleSubmit: (e) => c.Z.confirmViewBackupCodes(e, !1).then(() => t.onClose()),
                            maxLength: 8,
                            title: R.intl.string(R.t.mGppp6),
                            label: R.intl.string(R.t.TjGb4e),
                            forceNoPlaceholder: !0,
                            retryPrompt: R.intl.string(R.t.PZgmxs),
                            retrySuccessMessage: R.intl.string(R.t.j4qu8v),
                            onRetry: () => c.Z.sendMFABackupCodesVerificationKeyEmail(e),
                            actionText: R.intl.string(R.t.piW6YW),
                            helpMessage: R.intl.string(R.t["37S9yc"]),
                        }),
                    ),
                );
            }),
            D(this, "getDownloadFileContents", () => {
                let e = this.props.backupCodes
                        .map((e) => {
                            let { consumed: t, code: n } = e;
                            return "* "
                                .concat(n.substr(0, 4), "-")
                                .concat(n.substr(4), " ")
                                .concat(t ? "(used)" : "");
                        })
                        .join("\r\n"),
                    t = R.intl.formatToPlainString(R.t.uYWwh4, { email: this.props.currentUser.email });
                return "".concat(t, "\r\n\r\n").concat(e);
            }),
            D(this, "handleChangePhoneNumber", () => {
                this.openPhoneVerificationModal();
            }),
            D(this, "handleEnableSMS", () => {
                let { currentUser: e } = this.props;
                null == e.phone ? this.openPhoneVerificationModal({ onAddedPhone: c.Z.enableSMS }) : c.Z.enableSMS();
            }),
            D(this, "handleDisableSMS", () => {
                (0, l.h7j)((e) =>
                    (0, r.jsx)(
                        _.Z,
                        j(x({}, e), {
                            handleSubmit: c.Z.disableSMS,
                            title: R.intl.string(R.t.KLWnio),
                            children: R.intl.string(R.t["W0/Dub"]),
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
