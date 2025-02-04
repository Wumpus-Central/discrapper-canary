n.d(t, { Z: () => k }), n(47120);
var i = n(200651),
    s = n(192379),
    r = n(512722),
    l = n.n(r),
    a = n(442837),
    o = n(481060),
    c = n(816814),
    d = n(240872),
    u = n(23645),
    m = n(712364),
    h = n(279837),
    g = n(600164),
    _ = n(144114),
    x = n(921801),
    p = n(607018),
    E = n(778764),
    C = n(314897),
    f = n(325067),
    T = n(594174),
    N = n(572004),
    I = n(287880),
    S = n(714565),
    b = n(202858),
    v = n(726985),
    j = n(981631),
    A = n(815660),
    O = n(388032),
    R = n(142529),
    P = n(232186);
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
function y(e) {
    let {
            code: { code: t, consumed: n }
        } = e,
        r = ''.concat(t.substr(0, 4), '-').concat(t.substr(4)),
        l = s.useRef(null),
        a = s.useCallback(
            (e) => {
                if ('c' === e.key && e.metaKey && N.wS) {
                    var t;
                    e.preventDefault(), e.stopPropagation(), (0, N.JG)(r), null == l || null === (t = l.current) || void 0 === t || t.focus();
                }
            },
            [r]
        );
    return (0, i.jsx)('li', {
        className: P.marginBottom20,
        children: (0, i.jsx)(o.P3F, {
            innerRef: l,
            className: R.backupCode,
            onKeyDown: a,
            children: (0, i.jsx)(o.XZJ, {
                displayOnly: !0,
                readOnly: !0,
                className: R.codeCheckbox,
                value: n,
                children: (0, i.jsx)('span', {
                    className: R.code,
                    children: r
                })
            })
        })
    });
}
class Z extends s.PureComponent {
    maskPhoneNumber(e) {
        return null == e ? '' : ''.concat('*'.repeat(e.length - 4)).concat(e.slice(-4));
    }
    renderMFASMS() {
        let e, t;
        let { revealed: n } = this.state,
            { currentUser: s, togglingSMS: r } = this.props,
            l = null != s.phone,
            a = s.hasFlag(j.xW$.MFA_SMS);
        if (l || a) {
            let e = n ? s.phone : this.maskPhoneNumber(s.phone);
            t = (0, i.jsxs)(o.R94, {
                type: o.R94.Types.DESCRIPTION,
                className: P.marginBottom8,
                children: [
                    O.intl.format(O.t.PXVoEB, { phoneNumber: e }),
                    (0, i.jsx)(o.eee, {
                        onClick: this.togglePhoneNumberVisibility,
                        className: R.phoneRevealer,
                        children: n ? O.intl.string(O.t.FfltIC) : O.intl.string(O.t.llArAg)
                    })
                ]
            });
        }
        if (a)
            e = (0, i.jsx)(g.Z, {
                className: l ? '' : P.marginTop8,
                children: (0, i.jsx)(o.zxk, {
                    color: o.zxk.Colors.RED,
                    look: o.zxk.Looks.OUTLINED,
                    size: o.zxk.Sizes.SMALL,
                    submitting: r,
                    onClick: this.handleDisableSMS,
                    children: O.intl.string(O.t.KLWnio)
                })
            });
        else {
            let t = (0, S.c)(s);
            e = (0, i.jsxs)(g.Z, {
                className: l ? '' : P.marginTop8,
                children: [
                    (0, i.jsx)(o.zxk, {
                        onClick: this.handleEnableSMS,
                        size: o.zxk.Sizes.SMALL,
                        submitting: r,
                        disabled: null != t,
                        children: null != t ? t : O.intl.string(O.t.DZQe29)
                    }),
                    l
                        ? (0, i.jsx)(o.zxk, {
                              onClick: this.handleChangePhoneNumber,
                              color: o.zxk.Colors.PRIMARY,
                              size: o.zxk.Sizes.SMALL,
                              look: o.zxk.Looks.LINK,
                              children: O.intl.string(O.t.Ulqq6O)
                          })
                        : null
                ]
            });
        }
        return (0, i.jsx)(x.F, {
            setting: v.s6.ACCOUNT_SMS_BACKUP,
            children: (0, i.jsxs)(o.hjN, {
                className: P.marginTop40,
                title: O.intl.string(O.t.uHAJ5u),
                children: [
                    (0, i.jsx)(o.R94, {
                        type: o.R94.Types.DESCRIPTION,
                        children: O.intl.string(O.t.fspJ4O)
                    }),
                    t,
                    e
                ]
            })
        });
    }
    renderEnabled() {
        let e;
        let { backupCodes: t } = this.props,
            n = (0, i.jsx)(x.F, {
                setting: v.s6.ACCOUNT_VIEW_BACKUP_CODES,
                children: (0, i.jsx)(o.zxk, {
                    onClick: this.sendMFABackupCodesVerificationKeyEmail,
                    size: o.zxk.Sizes.SMALL,
                    children: O.intl.string(O.t.xZEzbm)
                })
            });
        if (t.length > 0) {
            n = (0, i.jsx)(u.Z, {
                fileContents: this.getDownloadFileContents,
                contentType: 'text/plain',
                fileName: 'discord_backup_codes.txt',
                children: (0, i.jsx)(o.zxk, {
                    size: o.zxk.Sizes.SMALL,
                    children: O.intl.string(O.t.qZZUy8)
                })
            });
            let s = (e) => e.map((e) => (0, i.jsx)(y, { code: e }, e.code));
            e = (0, i.jsxs)(o.hjN, {
                title: O.intl.string(O.t.GfqHPj),
                children: [
                    (0, i.jsx)(o.R94, {
                        type: o.R94.Types.DESCRIPTION,
                        className: P.marginBottom20,
                        children: O.intl.format(O.t.OhmvYm, {})
                    }),
                    (0, i.jsxs)(g.Z, {
                        children: [
                            (0, i.jsx)(g.Z.Child, {
                                children: (0, i.jsx)('ul', {
                                    className: R.checkboxGroup,
                                    children: s(t.slice(0, t.length / 2))
                                })
                            }),
                            (0, i.jsx)(g.Z.Child, {
                                children: (0, i.jsx)('ul', {
                                    className: R.checkboxGroup,
                                    children: s(t.slice(t.length / 2))
                                })
                            })
                        ]
                    }),
                    (0, i.jsx)('div', {
                        children: (0, i.jsx)(o.zxk, {
                            onClick: this.generateBackupCodes,
                            look: o.iLD.LINK,
                            size: o.PhG.MIN,
                            children: O.intl.string(O.t.RIThUl)
                        })
                    }),
                    (0, i.jsx)(o.$i$, { className: P.marginTop20 })
                ]
            });
        }
        return (0, i.jsxs)(o.hjN, {
            children: [
                (0, i.jsx)(o.vwX, { children: O.intl.string(O.t.EPVq09) }),
                (0, i.jsx)(o.R94, {
                    type: o.R94.Types.DESCRIPTION,
                    className: P.marginBottom20,
                    children: O.intl.string(O.t.bQwxiY)
                }),
                (0, i.jsxs)(g.Z, {
                    justify: g.Z.Justify.START,
                    className: P.marginBottom20,
                    children: [
                        (0, i.jsx)(g.Z.Child, {
                            wrap: !0,
                            grow: 0,
                            children: n
                        }),
                        (0, i.jsxs)(g.Z.Child, {
                            wrap: !0,
                            children: [
                                (0, i.jsx)(x.F, {
                                    setting: v.s6.ACCOUNT_REMOVE_2FA,
                                    children: (0, i.jsx)(o.zxk, {
                                        onClick: this.handleDisableMFA,
                                        size: o.zxk.Sizes.SMALL,
                                        color: o.Ttl.RED,
                                        look: o.iLD.OUTLINED,
                                        children: O.intl.string(O.t['D+aE7u'])
                                    })
                                }),
                                (0, i.jsx)(x.F, {
                                    setting: v.s6.ACCOUNT_ENABLE_2FA,
                                    children: (0, i.jsx)(o.zxk, {
                                        onClick: b.ZP.enableMFA,
                                        size: o.PhG.SMALL,
                                        children: O.intl.string(O.t.cDgKtb)
                                    })
                                })
                            ]
                        })
                    ]
                }),
                e,
                this.renderMFASMS(),
                (0, i.jsx)(x.F, {
                    setting: v.s6.ACCOUNT_SECURITY_KEYS,
                    children: (0, i.jsx)(E.Z, {})
                })
            ]
        });
    }
    renderDisabled() {
        return (0, i.jsxs)(o.hjN, {
            title: O.intl.string(O.t.EPVq09),
            children: [
                (0, i.jsx)(o.R94, {
                    type: o.R94.Types.DESCRIPTION,
                    className: P.marginBottom20,
                    children: O.intl.string(O.t['8aDa1t'])
                }),
                (0, i.jsx)(o.xJW, {
                    children: (0, i.jsx)(o.zxk, {
                        onClick: b.ZP.enableMFA,
                        size: o.PhG.SMALL,
                        children: O.intl.string(O.t.cDgKtb)
                    })
                }),
                (0, i.jsx)(E.Z, {})
            ]
        });
    }
    render() {
        let { currentUser: e } = this.props;
        return I.uZ
            ? e.verified
                ? e.mfaEnabled
                    ? this.renderEnabled()
                    : this.renderDisabled()
                : (0, i.jsx)(o.hjN, {
                      title: O.intl.string(O.t.EPVq09),
                      children: (0, i.jsx)(o.R94, {
                          type: o.R94.Types.DESCRIPTION,
                          children: O.intl.string(O.t.uggF7u)
                      })
                  })
            : (0, i.jsx)(o.hjN, {
                  title: O.intl.string(O.t.EPVq09),
                  children: (0, i.jsx)(o.R94, {
                      type: o.R94.Types.DESCRIPTION,
                      children: O.intl.string(O.t.PhHhsr)
                  })
              });
    }
    openPhoneVerificationModal() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        (0, o.h7j)(
            (t) =>
                (0, i.jsx)(p.default, {
                    reason: _.L.USER_SETTINGS_UPDATE,
                    ...t,
                    ...e
                }),
            { modalKey: A.M }
        );
    }
    constructor(...e) {
        super(...e),
            D(this, 'state', {
                revealed: !1,
                password: ''
            }),
            D(this, 'togglePhoneNumberVisibility', (e) => {
                e.preventDefault(), this.setState({ revealed: !this.state.revealed });
            }),
            D(this, 'handleDisableMFA', () => {
                d.Z.show({
                    title: O.intl.string(O.t['D+aE7u']),
                    body: O.intl.string(O.t.EA4ZEh),
                    cancelText: O.intl.string(O.t['ETE/oK']),
                    onConfirm: () => c.Z.disable()
                });
            }),
            D(this, 'generateBackupCodes', async () => {
                let e = f.Z.getVerificationKey();
                await c.Z.confirmViewBackupCodes(e, !0);
            }),
            D(this, 'sendMFABackupCodesVerificationKeyEmail', () => {
                (0, o.h7j)((e) =>
                    (0, i.jsx)(h.default, {
                        ...e,
                        handleSubmit: (e) =>
                            c.Z.sendMFABackupCodesVerificationKeyEmail(e).then(() => {
                                this.viewBackupCodes(e);
                            }),
                        title: O.intl.string(O.t.PsQmzc),
                        actionText: O.intl.string(O.t.ajkYcH)
                    })
                );
            }),
            D(this, 'viewBackupCodes', (e) => {
                (0, o.h7j)((t) =>
                    (0, i.jsx)(m.Z, {
                        ...t,
                        handleSubmit: (e) => c.Z.confirmViewBackupCodes(e, !1).then(() => t.onClose()),
                        maxLength: 8,
                        title: O.intl.string(O.t.mGppp6),
                        label: O.intl.string(O.t.TjGb4e),
                        forceNoPlaceholder: !0,
                        retryPrompt: O.intl.string(O.t.PZgmxs),
                        retrySuccessMessage: O.intl.string(O.t.j4qu8v),
                        onRetry: () => c.Z.sendMFABackupCodesVerificationKeyEmail(e),
                        actionText: O.intl.string(O.t.piW6YW),
                        helpMessage: O.intl.string(O.t['37S9yc'])
                    })
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
                    t = O.intl.formatToPlainString(O.t.uYWwh4, { email: this.props.currentUser.email });
                return ''.concat(t, '\r\n\r\n').concat(e);
            }),
            D(this, 'handleChangePhoneNumber', () => {
                this.openPhoneVerificationModal();
            }),
            D(this, 'handleEnableSMS', () => {
                let { currentUser: e } = this.props,
                    t = () => {
                        (0, o.h7j)((e) =>
                            (0, i.jsx)(h.default, {
                                ...e,
                                handleSubmit: c.Z.enableSMS,
                                title: O.intl.string(O.t.DZQe29)
                            })
                        );
                    };
                null == e.phone ? this.openPhoneVerificationModal({ onAddedPhone: t }) : t();
            }),
            D(this, 'handleDisableSMS', () => {
                (0, o.h7j)((e) =>
                    (0, i.jsx)(h.default, {
                        ...e,
                        handleSubmit: c.Z.disableSMS,
                        title: O.intl.string(O.t.KLWnio),
                        children: O.intl.string(O.t['W0/Dub'])
                    })
                );
            });
    }
}
function k(e) {
    let t = (0, a.e7)([T.default], () => T.default.getCurrentUser());
    l()(null != t, 'TwoFactorAuth: currentUser cannot be undefined');
    let n = (0, a.cj)([f.Z, C.default], () => ({
        togglingSMS: f.Z.togglingSMS,
        hasTOTPEnabled: C.default.hasTOTPEnabled()
    }));
    return (0, i.jsx)(Z, {
        currentUser: t,
        ...n,
        ...e
    });
}
