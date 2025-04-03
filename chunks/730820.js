n.d(t, { Z: () => W }), n(47120);
var r = n(200651),
    i = n(192379),
    s = n(512722),
    a = n.n(s),
    l = n(442837),
    o = n(481060),
    c = n(816814),
    d = n(240872),
    u = n(23645),
    m = n(712364),
    g = n(279837),
    p = n(600164),
    h = n(144114),
    f = n(921801),
    b = n(607018),
    N = n(778764),
    x = n(314897),
    _ = n(325067),
    E = n(594174),
    j = n(572004),
    O = n(287880),
    C = n(714565),
    S = n(202858),
    v = n(726985),
    T = n(981631),
    I = n(815660),
    y = n(388032),
    A = n(951839),
    P = n(20493);
function R(e, t, n) {
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
function D(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
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
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
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
            code: { code: t, consumed: n }
        } = e,
        s = ''.concat(t.substr(0, 4), '-').concat(t.substr(4)),
        a = i.useRef(null),
        l = i.useCallback(
            (e) => {
                if ('c' === e.key && e.metaKey && j.wS) {
                    var t;
                    e.preventDefault(), e.stopPropagation(), (0, j.JG)(s), null == a || null == (t = a.current) || t.focus();
                }
            },
            [s]
        );
    return (0, r.jsx)('li', {
        className: P.marginBottom20,
        children: (0, r.jsx)(o.P3F, {
            innerRef: a,
            className: A.backupCode,
            onKeyDown: l,
            children: (0, r.jsx)(o.XZJ, {
                displayOnly: !0,
                readOnly: !0,
                className: A.codeCheckbox,
                value: n,
                children: (0, r.jsx)('span', {
                    className: A.code,
                    children: s
                })
            })
        })
    });
}
class k extends i.PureComponent {
    maskPhoneNumber(e) {
        return null == e ? '' : ''.concat('*'.repeat(e.length - 4)).concat(e.slice(-4));
    }
    renderMFASMS() {
        let e,
            t,
            { revealed: n } = this.state,
            { currentUser: i, togglingSMS: s } = this.props,
            a = null != i.phone,
            l = i.hasFlag(T.xW$.MFA_SMS);
        if (a || l) {
            let e = n ? i.phone : this.maskPhoneNumber(i.phone);
            t = (0, r.jsxs)(o.R94, {
                type: o.R94.Types.DESCRIPTION,
                className: P.marginBottom8,
                children: [
                    y.NW.format(y.t.PXVoEB, { phoneNumber: e }),
                    (0, r.jsx)(o.eee, {
                        onClick: this.togglePhoneNumberVisibility,
                        className: A.phoneRevealer,
                        children: n ? y.NW.string(y.t.FfltIC) : y.NW.string(y.t.llArAg)
                    })
                ]
            });
        }
        if (l)
            e = (0, r.jsx)(p.Z, {
                className: a ? '' : P.marginTop8,
                children: (0, r.jsx)(o.zxk, {
                    color: o.zxk.Colors.RED,
                    look: o.zxk.Looks.OUTLINED,
                    size: o.zxk.Sizes.SMALL,
                    submitting: s,
                    onClick: this.handleDisableSMS,
                    children: y.NW.string(y.t.KLWnio)
                })
            });
        else {
            let t = (0, C.c)(i);
            e = (0, r.jsxs)(p.Z, {
                className: a ? '' : P.marginTop8,
                children: [
                    (0, r.jsx)(o.zxk, {
                        onClick: this.handleEnableSMS,
                        size: o.zxk.Sizes.SMALL,
                        submitting: s,
                        disabled: null != t,
                        children: null != t ? t : y.NW.string(y.t.DZQe29)
                    }),
                    a
                        ? (0, r.jsx)(o.zxk, {
                              onClick: this.handleChangePhoneNumber,
                              color: o.zxk.Colors.PRIMARY,
                              size: o.zxk.Sizes.SMALL,
                              look: o.zxk.Looks.LINK,
                              children: y.NW.string(y.t.Ulqq6O)
                          })
                        : null
                ]
            });
        }
        return (0, r.jsx)(f.F, {
            setting: v.s6.ACCOUNT_SMS_BACKUP,
            children: (0, r.jsxs)(o.hjN, {
                className: P.marginTop40,
                title: y.NW.string(y.t.uHAJ5u),
                children: [
                    (0, r.jsx)(o.R94, {
                        type: o.R94.Types.DESCRIPTION,
                        children: y.NW.string(y.t.fspJ4O)
                    }),
                    t,
                    e
                ]
            })
        });
    }
    renderEnabled() {
        let e,
            { backupCodes: t } = this.props,
            n = (0, r.jsx)(f.F, {
                setting: v.s6.ACCOUNT_VIEW_BACKUP_CODES,
                children: (0, r.jsx)(o.zxk, {
                    onClick: this.sendMFABackupCodesVerificationKeyEmail,
                    size: o.zxk.Sizes.SMALL,
                    children: y.NW.string(y.t.xZEzbm)
                })
            });
        if (t.length > 0) {
            n = (0, r.jsx)(u.Z, {
                fileContents: this.getDownloadFileContents,
                contentType: 'text/plain',
                fileName: 'discord_backup_codes.txt',
                children: (0, r.jsx)(o.zxk, {
                    size: o.zxk.Sizes.SMALL,
                    children: y.NW.string(y.t.qZZUy8)
                })
            });
            let i = (e) => e.map((e) => (0, r.jsx)(w, { code: e }, e.code));
            e = (0, r.jsxs)(o.hjN, {
                title: y.NW.string(y.t.GfqHPj),
                children: [
                    (0, r.jsx)(o.R94, {
                        type: o.R94.Types.DESCRIPTION,
                        className: P.marginBottom20,
                        children: y.NW.format(y.t.OhmvYm, {})
                    }),
                    (0, r.jsxs)(p.Z, {
                        children: [
                            (0, r.jsx)(p.Z.Child, {
                                children: (0, r.jsx)('ul', {
                                    className: A.checkboxGroup,
                                    children: i(t.slice(0, t.length / 2))
                                })
                            }),
                            (0, r.jsx)(p.Z.Child, {
                                children: (0, r.jsx)('ul', {
                                    className: A.checkboxGroup,
                                    children: i(t.slice(t.length / 2))
                                })
                            })
                        ]
                    }),
                    (0, r.jsx)('div', {
                        children: (0, r.jsx)(o.zxk, {
                            onClick: this.generateBackupCodes,
                            look: o.iLD.LINK,
                            size: o.PhG.MIN,
                            children: y.NW.string(y.t.RIThUl)
                        })
                    }),
                    (0, r.jsx)(o.$i$, { className: P.marginTop20 })
                ]
            });
        }
        return (0, r.jsxs)(o.hjN, {
            children: [
                (0, r.jsx)(o.vwX, { children: y.NW.string(y.t.EPVq09) }),
                (0, r.jsx)(o.R94, {
                    type: o.R94.Types.DESCRIPTION,
                    className: P.marginBottom20,
                    children: y.NW.string(y.t.bQwxiY)
                }),
                (0, r.jsxs)(p.Z, {
                    justify: p.Z.Justify.START,
                    className: P.marginBottom20,
                    children: [
                        (0, r.jsx)(p.Z.Child, {
                            wrap: !0,
                            grow: 0,
                            children: n
                        }),
                        (0, r.jsxs)(p.Z.Child, {
                            wrap: !0,
                            children: [
                                (0, r.jsx)(f.F, {
                                    setting: v.s6.ACCOUNT_REMOVE_2FA,
                                    children: (0, r.jsx)(o.zxk, {
                                        onClick: this.handleDisableMFA,
                                        size: o.zxk.Sizes.SMALL,
                                        color: o.Ttl.RED,
                                        look: o.iLD.OUTLINED,
                                        children: y.NW.string(y.t['D+aE7u'])
                                    })
                                }),
                                (0, r.jsx)(f.F, {
                                    setting: v.s6.ACCOUNT_ENABLE_2FA,
                                    children: (0, r.jsx)(o.zxk, {
                                        onClick: S.ZP.enableMFA,
                                        size: o.PhG.SMALL,
                                        children: y.NW.string(y.t.cDgKtb)
                                    })
                                })
                            ]
                        })
                    ]
                }),
                e,
                this.renderMFASMS(),
                (0, r.jsx)(f.F, {
                    setting: v.s6.ACCOUNT_SECURITY_KEYS,
                    children: (0, r.jsx)(N.Z, {})
                })
            ]
        });
    }
    renderDisabled() {
        return (0, r.jsxs)(o.hjN, {
            title: y.NW.string(y.t.EPVq09),
            children: [
                (0, r.jsx)(o.R94, {
                    type: o.R94.Types.DESCRIPTION,
                    className: P.marginBottom20,
                    children: y.NW.string(y.t['8aDa1t'])
                }),
                (0, r.jsx)(o.xJW, {
                    children: (0, r.jsx)(o.zxk, {
                        onClick: S.ZP.enableMFA,
                        size: o.PhG.SMALL,
                        children: y.NW.string(y.t.cDgKtb)
                    })
                }),
                (0, r.jsx)(N.Z, {})
            ]
        });
    }
    render() {
        let { currentUser: e } = this.props;
        return O.uZ
            ? e.verified
                ? e.mfaEnabled
                    ? this.renderEnabled()
                    : this.renderDisabled()
                : (0, r.jsx)(o.hjN, {
                      title: y.NW.string(y.t.EPVq09),
                      children: (0, r.jsx)(o.R94, {
                          type: o.R94.Types.DESCRIPTION,
                          children: y.NW.string(y.t.uggF7u)
                      })
                  })
            : (0, r.jsx)(o.hjN, {
                  title: y.NW.string(y.t.EPVq09),
                  children: (0, r.jsx)(o.R94, {
                      type: o.R94.Types.DESCRIPTION,
                      children: y.NW.string(y.t.PhHhsr)
                  })
              });
    }
    openPhoneVerificationModal() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        (0, o.h7j)((t) => (0, r.jsx)(b.default, D({ reason: h.L.USER_SETTINGS_UPDATE }, t, e)), { modalKey: I.M });
    }
    constructor(...e) {
        super(...e),
            R(this, 'state', {
                revealed: !1,
                password: ''
            }),
            R(this, 'togglePhoneNumberVisibility', (e) => {
                e.preventDefault(), this.setState({ revealed: !this.state.revealed });
            }),
            R(this, 'handleDisableMFA', () => {
                d.Z.show({
                    title: y.NW.string(y.t['D+aE7u']),
                    body: y.NW.string(y.t.EA4ZEh),
                    cancelText: y.NW.string(y.t['ETE/oK']),
                    onConfirm: () => c.Z.disable()
                });
            }),
            R(this, 'generateBackupCodes', async () => {
                let e = _.Z.getVerificationKey();
                await c.Z.confirmViewBackupCodes(e, !0);
            }),
            R(this, 'sendMFABackupCodesVerificationKeyEmail', () => {
                (0, o.h7j)((e) =>
                    (0, r.jsx)(
                        g.default,
                        Z(D({}, e), {
                            handleSubmit: (e) =>
                                c.Z.sendMFABackupCodesVerificationKeyEmail(e).then(() => {
                                    this.viewBackupCodes(e);
                                }),
                            title: y.NW.string(y.t.PsQmzc),
                            actionText: y.NW.string(y.t.ajkYcH)
                        })
                    )
                );
            }),
            R(this, 'viewBackupCodes', (e) => {
                (0, o.h7j)((t) =>
                    (0, r.jsx)(
                        m.Z,
                        Z(D({}, t), {
                            handleSubmit: (e) => c.Z.confirmViewBackupCodes(e, !1).then(() => t.onClose()),
                            maxLength: 8,
                            title: y.NW.string(y.t.mGppp6),
                            label: y.NW.string(y.t.TjGb4e),
                            forceNoPlaceholder: !0,
                            retryPrompt: y.NW.string(y.t.PZgmxs),
                            retrySuccessMessage: y.NW.string(y.t.j4qu8v),
                            onRetry: () => c.Z.sendMFABackupCodesVerificationKeyEmail(e),
                            actionText: y.NW.string(y.t.piW6YW),
                            helpMessage: y.NW.string(y.t['37S9yc'])
                        })
                    )
                );
            }),
            R(this, 'getDownloadFileContents', () => {
                let e = this.props.backupCodes
                        .map((e) => {
                            let { consumed: t, code: n } = e;
                            return '* '
                                .concat(n.substr(0, 4), '-')
                                .concat(n.substr(4), ' ')
                                .concat(t ? '(used)' : '');
                        })
                        .join('\r\n'),
                    t = y.NW.formatToPlainString(y.t.uYWwh4, { email: this.props.currentUser.email });
                return ''.concat(t, '\r\n\r\n').concat(e);
            }),
            R(this, 'handleChangePhoneNumber', () => {
                this.openPhoneVerificationModal();
            }),
            R(this, 'handleEnableSMS', () => {
                let { currentUser: e } = this.props,
                    t = () => {
                        (0, o.h7j)((e) =>
                            (0, r.jsx)(
                                g.default,
                                Z(D({}, e), {
                                    handleSubmit: c.Z.enableSMS,
                                    title: y.NW.string(y.t.DZQe29)
                                })
                            )
                        );
                    };
                null == e.phone ? this.openPhoneVerificationModal({ onAddedPhone: t }) : t();
            }),
            R(this, 'handleDisableSMS', () => {
                (0, o.h7j)((e) =>
                    (0, r.jsx)(
                        g.default,
                        Z(D({}, e), {
                            handleSubmit: c.Z.disableSMS,
                            title: y.NW.string(y.t.KLWnio),
                            children: y.NW.string(y.t['W0/Dub'])
                        })
                    )
                );
            });
    }
}
function W(e) {
    let t = (0, l.e7)([E.default], () => E.default.getCurrentUser());
    a()(null != t, 'TwoFactorAuth: currentUser cannot be undefined');
    let n = (0, l.cj)([_.Z, x.default], () => ({
        togglingSMS: _.Z.togglingSMS,
        hasTOTPEnabled: x.default.hasTOTPEnabled()
    }));
    return (0, r.jsx)(k, D({ currentUser: t }, n, e));
}
