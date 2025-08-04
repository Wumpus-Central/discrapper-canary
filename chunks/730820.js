(n.d(t, { Z: () => B }), n(388685));
var i = n(255367),
    r = n(73800),
    s = n(512722),
    a = n.n(s),
    l = n(442837),
    o = n(755721),
    c = n(481060),
    d = n(816814),
    u = n(240872),
    m = n(23645),
    p = n(712364),
    g = n(279837),
    h = n(600164),
    f = n(144114),
    b = n(921801),
    x = n(607018),
    _ = n(778764),
    j = n(314897),
    C = n(325067),
    E = n(594174),
    O = n(572004),
    v = n(287880),
    S = n(714565),
    T = n(202858),
    N = n(726985),
    I = n(981631),
    y = n(815660),
    A = n(388032),
    P = n(951839),
    R = n(20493);
function D(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function Z(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                D(e, t, n[t]);
            }));
    }
    return e;
}
function w(e, t) {
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
function k(e) {
    let {
            code: { code: t, consumed: n }
        } = e,
        s = ''.concat(t.substr(0, 4), '-').concat(t.substr(4)),
        a = r.useRef(null),
        l = r.useCallback(
            (e) => {
                if ('c' === e.key && e.metaKey && O.wS) {
                    var t;
                    (e.preventDefault(), e.stopPropagation(), (0, O.JG)(s), null == a || null == (t = a.current) || t.focus());
                }
            },
            [s]
        );
    return (0, i.jsx)('li', {
        className: R.marginBottom20,
        children: (0, i.jsx)(c.P3F, {
            innerRef: a,
            className: P.backupCode,
            onKeyDown: l,
            children: (0, i.jsx)(c.XZJ, {
                displayOnly: !0,
                readOnly: !0,
                className: P.codeCheckbox,
                value: n,
                children: (0, i.jsx)('span', {
                    className: P.code,
                    children: s
                })
            })
        })
    });
}
class L extends r.PureComponent {
    maskPhoneNumber(e) {
        return null == e ? '' : ''.concat('*'.repeat(e.length - 4)).concat(e.slice(-4));
    }
    renderMFASMS() {
        let e,
            t,
            { revealed: n } = this.state,
            { currentUser: r, togglingSMS: s, hasTOTPEnabled: a } = this.props,
            l = null != r.phone,
            o = r.hasFlag(I.xW$.MFA_SMS);
        if (a) {
            if (l || o) {
                let e = n ? r.phone : this.maskPhoneNumber(r.phone);
                t = (0, i.jsxs)(c.R94, {
                    type: c.R94.Types.DESCRIPTION,
                    className: R.marginBottom8,
                    children: [
                        A.intl.format(A.t.PXVoEB, { phoneNumber: e }),
                        (0, i.jsx)(c.eee, {
                            onClick: this.togglePhoneNumberVisibility,
                            className: P.phoneRevealer,
                            children: n ? A.intl.string(A.t.FfltIC) : A.intl.string(A.t.llArAg)
                        })
                    ]
                });
            }
            if (o)
                e = (0, i.jsx)(h.Z, {
                    className: l ? '' : R.marginTop8,
                    children: (0, i.jsx)(c.zxk, {
                        variant: 'critical-secondary',
                        size: 'sm',
                        text: A.intl.string(A.t.KLWnio),
                        loading: s,
                        onClick: this.handleDisableSMS
                    })
                });
            else {
                let t = (0, S.c)(r);
                e = (0, i.jsxs)(c.hE2, {
                    size: 'sm',
                    className: l ? '' : R.marginTop8,
                    children: [
                        (0, i.jsx)(c.zxk, {
                            variant: 'primary',
                            size: 'sm',
                            text: null != t ? t : A.intl.string(A.t.DZQe29),
                            onClick: this.handleEnableSMS,
                            loading: s,
                            disabled: null != t
                        }),
                        l
                            ? (0, i.jsx)(c.zxk, {
                                  variant: 'secondary',
                                  size: 'sm',
                                  text: A.intl.string(A.t.Ulqq6O),
                                  onClick: this.handleChangePhoneNumber
                              })
                            : null
                    ]
                });
            }
            return (0, i.jsx)(b.F, {
                setting: N.s6.ACCOUNT_SMS_BACKUP,
                children: (0, i.jsxs)(c.hjN, {
                    className: R.marginTop40,
                    title: A.intl.string(A.t.uHAJ5u),
                    children: [
                        (0, i.jsx)(c.R94, {
                            type: c.R94.Types.DESCRIPTION,
                            children: A.intl.string(A.t.fspJ4O)
                        }),
                        t,
                        e
                    ]
                })
            });
        }
    }
    renderEnabled() {
        let e,
            { backupCodes: t } = this.props,
            n = (0, i.jsx)(b.F, {
                setting: N.s6.ACCOUNT_VIEW_BACKUP_CODES,
                children: (0, i.jsx)(c.zxk, {
                    variant: 'primary',
                    size: 'sm',
                    text: A.intl.string(A.t.xZEzbm),
                    onClick: this.sendMFABackupCodesVerificationKeyEmail
                })
            });
        if (t.length > 0) {
            n = (0, i.jsx)(m.Z, {
                fileContents: this.getDownloadFileContents,
                contentType: 'text/plain',
                fileName: 'discord_backup_codes.txt',
                children: (0, i.jsx)(c.zxk, {
                    variant: 'primary',
                    size: 'sm',
                    text: A.intl.string(A.t.qZZUy8)
                })
            });
            let r = (e) => e.map((e) => (0, i.jsx)(k, { code: e }, e.code));
            e = (0, i.jsxs)(c.hjN, {
                title: A.intl.string(A.t.GfqHPj),
                children: [
                    (0, i.jsx)(c.R94, {
                        type: c.R94.Types.DESCRIPTION,
                        className: R.marginBottom20,
                        children: A.intl.format(A.t.OhmvYm, {})
                    }),
                    (0, i.jsxs)(h.Z, {
                        children: [
                            (0, i.jsx)(h.Z.Child, {
                                children: (0, i.jsx)('ul', {
                                    className: P.checkboxGroup,
                                    children: r(t.slice(0, t.length / 2))
                                })
                            }),
                            (0, i.jsx)(h.Z.Child, {
                                children: (0, i.jsx)('ul', {
                                    className: P.checkboxGroup,
                                    children: r(t.slice(t.length / 2))
                                })
                            })
                        ]
                    }),
                    (0, i.jsx)('div', {
                        children: (0, i.jsx)(o.zx, {
                            onClick: this.generateBackupCodes,
                            look: o.iL.LINK,
                            size: o.Ph.MIN,
                            children: A.intl.string(A.t.RIThUl)
                        })
                    }),
                    (0, i.jsx)(c.$i$, { className: R.marginTop20 })
                ]
            });
        }
        return (0, i.jsxs)(c.hjN, {
            children: [
                (0, i.jsx)(c.vwX, { children: A.intl.string(A.t.EPVq09) }),
                (0, i.jsx)(c.R94, {
                    type: c.R94.Types.DESCRIPTION,
                    className: R.marginBottom20,
                    children: A.intl.string(A.t.bQwxiY)
                }),
                (0, i.jsxs)(c.hE2, {
                    size: 'sm',
                    className: R.marginBottom20,
                    children: [
                        n,
                        (0, i.jsx)(b.F, {
                            setting: N.s6.ACCOUNT_REMOVE_2FA,
                            children: (0, i.jsx)(c.zxk, {
                                variant: 'critical-secondary',
                                size: 'sm',
                                text: A.intl.string(A.t['D+aE7u']),
                                onClick: this.handleDisableMFA
                            })
                        }),
                        (0, i.jsx)(b.F, {
                            setting: N.s6.ACCOUNT_ENABLE_2FA,
                            children: (0, i.jsx)(c.zxk, {
                                variant: 'primary',
                                size: 'sm',
                                text: A.intl.string(A.t.cDgKtb),
                                onClick: T.ZP.enableMFA
                            })
                        })
                    ]
                }),
                e,
                this.renderMFASMS(),
                (0, i.jsx)(b.F, {
                    setting: N.s6.ACCOUNT_SECURITY_KEYS,
                    children: (0, i.jsx)(_.Z, {})
                })
            ]
        });
    }
    renderDisabled() {
        return (0, i.jsxs)(c.hjN, {
            title: A.intl.string(A.t.EPVq09),
            children: [
                (0, i.jsx)(c.R94, {
                    type: c.R94.Types.DESCRIPTION,
                    className: R.marginBottom20,
                    children: A.intl.string(A.t['8aDa1t'])
                }),
                (0, i.jsx)(c.xJW, {
                    children: (0, i.jsx)(c.zxk, {
                        variant: 'primary',
                        size: 'sm',
                        text: A.intl.string(A.t.cDgKtb),
                        onClick: T.ZP.enableMFA
                    })
                }),
                (0, i.jsx)(_.Z, {})
            ]
        });
    }
    render() {
        let { currentUser: e } = this.props;
        return v.uZ
            ? e.verified
                ? e.mfaEnabled
                    ? this.renderEnabled()
                    : this.renderDisabled()
                : (0, i.jsx)(c.hjN, {
                      title: A.intl.string(A.t.EPVq09),
                      children: (0, i.jsx)(c.R94, {
                          type: c.R94.Types.DESCRIPTION,
                          children: A.intl.string(A.t.uggF7u)
                      })
                  })
            : (0, i.jsx)(c.hjN, {
                  title: A.intl.string(A.t.EPVq09),
                  children: (0, i.jsx)(c.R94, {
                      type: c.R94.Types.DESCRIPTION,
                      children: A.intl.string(A.t.PhHhsr)
                  })
              });
    }
    openPhoneVerificationModal() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        (0, c.h7j)((t) => (0, i.jsx)(x.default, Z({ reason: f.L.USER_SETTINGS_UPDATE }, t, e)), { modalKey: y.M });
    }
    constructor(...e) {
        (super(...e),
            D(this, 'state', {
                revealed: !1,
                password: ''
            }),
            D(this, 'togglePhoneNumberVisibility', (e) => {
                (e.preventDefault(), this.setState({ revealed: !this.state.revealed }));
            }),
            D(this, 'handleDisableMFA', () => {
                u.Z.show({
                    title: A.intl.string(A.t['D+aE7u']),
                    body: A.intl.string(A.t.EA4ZEh),
                    cancelText: A.intl.string(A.t['ETE/oK']),
                    onConfirm: () => d.Z.disable()
                });
            }),
            D(this, 'generateBackupCodes', async () => {
                let e = C.Z.getVerificationKey();
                await d.Z.confirmViewBackupCodes(e, !0);
            }),
            D(this, 'sendMFABackupCodesVerificationKeyEmail', () => {
                (0, c.h7j)((e) =>
                    (0, i.jsx)(
                        g.Z,
                        w(Z({}, e), {
                            handleSubmit: (e) =>
                                d.Z.sendMFABackupCodesVerificationKeyEmail(e).then(() => {
                                    this.viewBackupCodes(e);
                                }),
                            title: A.intl.string(A.t.PsQmzc),
                            actionText: A.intl.string(A.t.ajkYcH)
                        })
                    )
                );
            }),
            D(this, 'viewBackupCodes', (e) => {
                (0, c.h7j)((t) =>
                    (0, i.jsx)(
                        p.Z,
                        w(Z({}, t), {
                            handleSubmit: (e) => d.Z.confirmViewBackupCodes(e, !1).then(() => t.onClose()),
                            maxLength: 8,
                            title: A.intl.string(A.t.mGppp6),
                            label: A.intl.string(A.t.TjGb4e),
                            forceNoPlaceholder: !0,
                            retryPrompt: A.intl.string(A.t.PZgmxs),
                            retrySuccessMessage: A.intl.string(A.t.j4qu8v),
                            onRetry: () => d.Z.sendMFABackupCodesVerificationKeyEmail(e),
                            actionText: A.intl.string(A.t.piW6YW),
                            helpMessage: A.intl.string(A.t['37S9yc'])
                        })
                    )
                );
            }),
            D(this, 'getDownloadFileContents', () => {
                let e = this.props.backupCodes
                        .map((e) => {
                            let { consumed: t, code: n } = e;
                            return '* '
                                .concat(n.substr(0, 4), '-')
                                .concat(n.substr(4), ' ')
                                .concat(t ? '(used)' : '');
                        })
                        .join('\r\n'),
                    t = A.intl.formatToPlainString(A.t.uYWwh4, { email: this.props.currentUser.email });
                return ''.concat(t, '\r\n\r\n').concat(e);
            }),
            D(this, 'handleChangePhoneNumber', () => {
                this.openPhoneVerificationModal();
            }),
            D(this, 'handleEnableSMS', () => {
                let { currentUser: e } = this.props;
                null == e.phone ? this.openPhoneVerificationModal({ onAddedPhone: d.Z.enableSMS }) : d.Z.enableSMS();
            }),
            D(this, 'handleDisableSMS', () => {
                (0, c.h7j)((e) =>
                    (0, i.jsx)(
                        g.Z,
                        w(Z({}, e), {
                            handleSubmit: d.Z.disableSMS,
                            title: A.intl.string(A.t.KLWnio),
                            children: A.intl.string(A.t['W0/Dub'])
                        })
                    )
                );
            }));
    }
}
function B(e) {
    let t = (0, l.e7)([E.default], () => E.default.getCurrentUser());
    a()(null != t, 'TwoFactorAuth: currentUser cannot be undefined');
    let n = (0, l.cj)([C.Z, j.default], () => ({
        togglingSMS: C.Z.togglingSMS,
        hasTOTPEnabled: j.default.hasTOTPEnabled()
    }));
    return (0, i.jsx)(L, Z({ currentUser: t }, n, e));
}
