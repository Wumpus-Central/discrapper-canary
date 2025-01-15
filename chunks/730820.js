n.d(t, {
    Z: function () {
        return Z;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    s = n(512722),
    a = n.n(s),
    l = n(442837),
    o = n(481060),
    c = n(816814),
    d = n(240872),
    u = n(23645),
    m = n(712364),
    g = n(279837),
    h = n(600164),
    p = n(144114),
    x = n(921801),
    f = n(607018),
    _ = n(778764),
    E = n(314897),
    C = n(325067),
    T = n(594174),
    S = n(572004),
    b = n(287880),
    I = n(714565),
    N = n(202858),
    v = n(726985),
    A = n(981631),
    j = n(815660),
    O = n(388032),
    R = n(478717),
    P = n(275477);
function y(e, t, n) {
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
function B(e) {
    let {
            code: { code: t, consumed: n }
        } = e,
        s = ''.concat(t.substr(0, 4), '-').concat(t.substr(4)),
        a = r.useRef(null),
        l = r.useCallback(
            (e) => {
                if ('c' === e.key && e.metaKey && S.wS) {
                    var t;
                    e.preventDefault(), e.stopPropagation(), (0, S.JG)(s), null == a || null === (t = a.current) || void 0 === t || t.focus();
                }
            },
            [s]
        );
    return (0, i.jsx)('li', {
        className: P.marginBottom20,
        children: (0, i.jsx)(o.Clickable, {
            innerRef: a,
            className: R.backupCode,
            onKeyDown: l,
            children: (0, i.jsx)(o.Checkbox, {
                displayOnly: !0,
                readOnly: !0,
                className: R.codeCheckbox,
                value: n,
                children: (0, i.jsx)('span', {
                    className: R.code,
                    children: s
                })
            })
        })
    });
}
class D extends r.PureComponent {
    maskPhoneNumber(e) {
        return null == e ? '' : ''.concat('*'.repeat(e.length - 4)).concat(e.slice(-4));
    }
    renderMFASMS() {
        let e, t;
        let { revealed: n } = this.state,
            { currentUser: r, togglingSMS: s } = this.props,
            a = null != r.phone,
            l = r.hasFlag(A.xW$.MFA_SMS);
        if (a || l) {
            let e = n ? r.phone : this.maskPhoneNumber(r.phone);
            t = (0, i.jsxs)(o.FormText, {
                type: o.FormText.Types.DESCRIPTION,
                className: P.marginBottom8,
                children: [
                    O.intl.format(O.t.PXVoEB, { phoneNumber: e }),
                    (0, i.jsx)(o.Anchor, {
                        onClick: this.togglePhoneNumberVisibility,
                        className: R.phoneRevealer,
                        children: n ? O.intl.string(O.t.FfltIC) : O.intl.string(O.t.llArAg)
                    })
                ]
            });
        }
        if (l)
            e = (0, i.jsx)(h.Z, {
                className: a ? '' : P.marginTop8,
                children: (0, i.jsx)(o.Button, {
                    color: o.Button.Colors.RED,
                    look: o.Button.Looks.OUTLINED,
                    size: o.Button.Sizes.SMALL,
                    submitting: s,
                    onClick: this.handleDisableSMS,
                    children: O.intl.string(O.t.KLWnio)
                })
            });
        else {
            let t = (0, I.c)(r);
            e = (0, i.jsxs)(h.Z, {
                className: a ? '' : P.marginTop8,
                children: [
                    (0, i.jsx)(o.Button, {
                        onClick: this.handleEnableSMS,
                        size: o.Button.Sizes.SMALL,
                        submitting: s,
                        disabled: null != t,
                        children: null != t ? t : O.intl.string(O.t.DZQe29)
                    }),
                    a
                        ? (0, i.jsx)(o.Button, {
                              onClick: this.handleChangePhoneNumber,
                              color: o.Button.Colors.PRIMARY,
                              size: o.Button.Sizes.SMALL,
                              look: o.Button.Looks.LINK,
                              children: O.intl.string(O.t.Ulqq6O)
                          })
                        : null
                ]
            });
        }
        return (0, i.jsx)(x.F, {
            setting: v.s6.ACCOUNT_SMS_BACKUP,
            children: (0, i.jsxs)(o.FormSection, {
                className: P.marginTop40,
                title: O.intl.string(O.t.uHAJ5u),
                children: [
                    (0, i.jsx)(o.FormText, {
                        type: o.FormText.Types.DESCRIPTION,
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
                children: (0, i.jsx)(o.Button, {
                    onClick: this.sendMFABackupCodesVerificationKeyEmail,
                    size: o.Button.Sizes.SMALL,
                    children: O.intl.string(O.t.xZEzbm)
                })
            });
        if (t.length > 0) {
            n = (0, i.jsx)(u.Z, {
                fileContents: this.getDownloadFileContents,
                contentType: 'text/plain',
                fileName: 'discord_backup_codes.txt',
                children: (0, i.jsx)(o.Button, {
                    size: o.Button.Sizes.SMALL,
                    children: O.intl.string(O.t.qZZUy8)
                })
            });
            let r = (e) => e.map((e) => (0, i.jsx)(B, { code: e }, e.code));
            e = (0, i.jsxs)(o.FormSection, {
                title: O.intl.string(O.t.GfqHPj),
                children: [
                    (0, i.jsx)(o.FormText, {
                        type: o.FormText.Types.DESCRIPTION,
                        className: P.marginBottom20,
                        children: O.intl.format(O.t.OhmvYm, {})
                    }),
                    (0, i.jsxs)(h.Z, {
                        children: [
                            (0, i.jsx)(h.Z.Child, {
                                children: (0, i.jsx)('ul', {
                                    className: R.checkboxGroup,
                                    children: r(t.slice(0, t.length / 2))
                                })
                            }),
                            (0, i.jsx)(h.Z.Child, {
                                children: (0, i.jsx)('ul', {
                                    className: R.checkboxGroup,
                                    children: r(t.slice(t.length / 2))
                                })
                            })
                        ]
                    }),
                    (0, i.jsx)('div', {
                        children: (0, i.jsx)(o.Button, {
                            onClick: this.generateBackupCodes,
                            look: o.ButtonLooks.LINK,
                            size: o.ButtonSizes.MIN,
                            children: O.intl.string(O.t.RIThUl)
                        })
                    }),
                    (0, i.jsx)(o.FormDivider, { className: P.marginTop20 })
                ]
            });
        }
        return (0, i.jsxs)(o.FormSection, {
            children: [
                (0, i.jsx)(o.FormTitle, { children: O.intl.string(O.t.EPVq09) }),
                (0, i.jsx)(o.FormText, {
                    type: o.FormText.Types.DESCRIPTION,
                    className: P.marginBottom20,
                    children: O.intl.string(O.t.bQwxiY)
                }),
                (0, i.jsxs)(h.Z, {
                    justify: h.Z.Justify.START,
                    className: P.marginBottom20,
                    children: [
                        (0, i.jsx)(h.Z.Child, {
                            wrap: !0,
                            grow: 0,
                            children: n
                        }),
                        (0, i.jsxs)(h.Z.Child, {
                            wrap: !0,
                            children: [
                                (0, i.jsx)(x.F, {
                                    setting: v.s6.ACCOUNT_REMOVE_2FA,
                                    children: (0, i.jsx)(o.Button, {
                                        onClick: this.handleDisableMFA,
                                        size: o.Button.Sizes.SMALL,
                                        color: o.ButtonColors.RED,
                                        look: o.ButtonLooks.OUTLINED,
                                        children: O.intl.string(O.t['D+aE7u'])
                                    })
                                }),
                                (0, i.jsx)(x.F, {
                                    setting: v.s6.ACCOUNT_ENABLE_2FA,
                                    children: (0, i.jsx)(o.Button, {
                                        onClick: N.ZP.enableMFA,
                                        size: o.ButtonSizes.SMALL,
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
                    children: (0, i.jsx)(_.Z, {})
                })
            ]
        });
    }
    renderDisabled() {
        return (0, i.jsxs)(o.FormSection, {
            title: O.intl.string(O.t.EPVq09),
            children: [
                (0, i.jsx)(o.FormText, {
                    type: o.FormText.Types.DESCRIPTION,
                    className: P.marginBottom20,
                    children: O.intl.string(O.t['8aDa1t'])
                }),
                (0, i.jsx)(o.FormItem, {
                    children: (0, i.jsx)(o.Button, {
                        onClick: N.ZP.enableMFA,
                        size: o.ButtonSizes.SMALL,
                        children: O.intl.string(O.t.cDgKtb)
                    })
                }),
                (0, i.jsx)(_.Z, {})
            ]
        });
    }
    render() {
        let { currentUser: e } = this.props;
        return b.uZ
            ? e.verified
                ? e.mfaEnabled
                    ? this.renderEnabled()
                    : this.renderDisabled()
                : (0, i.jsx)(o.FormSection, {
                      title: O.intl.string(O.t.EPVq09),
                      children: (0, i.jsx)(o.FormText, {
                          type: o.FormText.Types.DESCRIPTION,
                          children: O.intl.string(O.t.uggF7u)
                      })
                  })
            : (0, i.jsx)(o.FormSection, {
                  title: O.intl.string(O.t.EPVq09),
                  children: (0, i.jsx)(o.FormText, {
                      type: o.FormText.Types.DESCRIPTION,
                      children: O.intl.string(O.t.PhHhsr)
                  })
              });
    }
    openPhoneVerificationModal() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        (0, o.openModal)(
            (t) =>
                (0, i.jsx)(f.default, {
                    reason: p.L.USER_SETTINGS_UPDATE,
                    ...t,
                    ...e
                }),
            { modalKey: j.M }
        );
    }
    constructor(...e) {
        super(...e),
            y(this, 'state', {
                revealed: !1,
                password: ''
            }),
            y(this, 'togglePhoneNumberVisibility', (e) => {
                e.preventDefault(), this.setState({ revealed: !this.state.revealed });
            }),
            y(this, 'handleDisableMFA', () => {
                d.Z.show({
                    title: O.intl.string(O.t['D+aE7u']),
                    body: O.intl.string(O.t.EA4ZEh),
                    cancelText: O.intl.string(O.t['ETE/oK']),
                    onConfirm: () => c.Z.disable()
                });
            }),
            y(this, 'generateBackupCodes', async () => {
                let e = C.Z.getVerificationKey();
                await c.Z.confirmViewBackupCodes(e, !0);
            }),
            y(this, 'sendMFABackupCodesVerificationKeyEmail', () => {
                (0, o.openModal)((e) =>
                    (0, i.jsx)(g.default, {
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
            y(this, 'viewBackupCodes', (e) => {
                (0, o.openModal)((t) =>
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
            y(this, 'getDownloadFileContents', () => {
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
            y(this, 'handleChangePhoneNumber', () => {
                this.openPhoneVerificationModal();
            }),
            y(this, 'handleEnableSMS', () => {
                let { currentUser: e } = this.props,
                    t = () => {
                        (0, o.openModal)((e) =>
                            (0, i.jsx)(g.default, {
                                ...e,
                                handleSubmit: c.Z.enableSMS,
                                title: O.intl.string(O.t.DZQe29)
                            })
                        );
                    };
                null == e.phone ? this.openPhoneVerificationModal({ onAddedPhone: t }) : t();
            }),
            y(this, 'handleDisableSMS', () => {
                (0, o.openModal)((e) =>
                    (0, i.jsx)(g.default, {
                        ...e,
                        handleSubmit: c.Z.disableSMS,
                        title: O.intl.string(O.t.KLWnio),
                        children: O.intl.string(O.t['W0/Dub'])
                    })
                );
            });
    }
}
function Z(e) {
    let t = (0, l.e7)([T.default], () => T.default.getCurrentUser());
    a()(null != t, 'TwoFactorAuth: currentUser cannot be undefined');
    let n = (0, l.cj)([C.Z, E.default], () => ({
        togglingSMS: C.Z.togglingSMS,
        hasTOTPEnabled: E.default.hasTOTPEnabled()
    }));
    return (0, i.jsx)(D, {
        currentUser: t,
        ...n,
        ...e
    });
}
