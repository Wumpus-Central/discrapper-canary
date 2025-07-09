(n.d(t, { default: () => F }), n(388685));
var r = n(255367),
    o = n(73800),
    i = n(512722),
    a = n.n(i),
    s = n(442837),
    l = n(755721),
    c = n(481060),
    d = n(570140),
    u = n(816814),
    p = n(23645),
    h = n(600164),
    _ = n(454585),
    f = n(144114),
    E = n(607018),
    S = n(325067),
    y = n(594174),
    b = n(981631),
    m = n(815660),
    O = n(388032),
    g = n(664460);
function N(e, t, n) {
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
function M(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                N(e, t, n[t]);
            }));
    }
    return e;
}
let C = (e) => {
    var t,
        n,
        { label: o, text: i, children: a } = e,
        s = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                o = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) ((n = i[r]), t.indexOf(n) >= 0 || (o[n] = e[n]));
                    return o;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (r = 0; r < i.length; r++) ((n = i[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]));
            }
            return o;
        })(e, ['label', 'text', 'children']);
    return (0, r.jsxs)(
        h.Z,
        ((t = M({ direction: h.Z.Direction.VERTICAL }, s)),
        (n = n =
            {
                children: [
                    (0, r.jsx)(c.vwX, {
                        tag: 'h2',
                        children: o
                    }),
                    null != i
                        ? (0, r.jsx)(c.Text, {
                              variant: 'text-md/normal',
                              className: g.sectionBody,
                              children: i
                          })
                        : null,
                    (0, r.jsx)(h.Z.Child, {
                        wrap: !0,
                        children: a
                    })
                ]
            }),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(n)).forEach(function (e) {
                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
              }),
        t)
    );
};
class A extends o.PureComponent {
    renderSMSSection() {
        let { currentUser: e } = this.props,
            t = null != this.props.currentUser.phone,
            n = e.hasFlag(b.xW$.MFA_SMS),
            o = e.hasFlag(b.xW$.PARTNER) || e.hasFlag(b.xW$.STAFF);
        return t
            ? (0, r.jsxs)(C, {
                  label: O.intl.string(O.t.DZQe29),
                  text: O.intl.string(O.t.fspJ4O),
                  children: [
                      (0, r.jsxs)(c.Text, {
                          variant: 'text-md/normal',
                          className: g.sectionBody,
                          children: [
                              (0, r.jsx)('strong', {
                                  className: g.phoneNumber,
                                  children: O.intl.format(O.t.PXVoEB, { phoneNumber: e.phone })
                              }),
                              (0, r.jsx)(l.zx, {
                                  look: l.zx.Looks.LINK,
                                  color: l.zx.Colors.LINK,
                                  size: l.zx.Sizes.MIN,
                                  className: g.linkButton,
                                  onClick: this.handleChangePhoneNumber,
                                  children: O.intl.string(O.t.Ulqq6O)
                              })
                          ]
                      }),
                      (0, r.jsx)(c.zxk, {
                          variant: 'active',
                          size: 'sm',
                          text: o ? O.intl.string(O.t.Sq6Q1t) : n ? O.intl.string(O.t.kSbHTE) : O.intl.string(O.t.DZQe29),
                          onClick: this.handleEnableSMS,
                          disabled: n || o
                      })
                  ]
              })
            : (0, r.jsx)(C, {
                  label: O.intl.string(O.t.DZQe29),
                  text: O.intl.string(O.t.fspJ4O),
                  children: (0, r.jsx)(c.zxk, {
                      variant: 'active',
                      size: 'sm',
                      text: o ? O.intl.string(O.t.Sq6Q1t) : O.intl.string(O.t['O5qS/v']),
                      onClick: this.handleEnableSMS,
                      disabled: o
                  })
              });
    }
    renderBackupCodesSection(e) {
        return (0, r.jsx)(C, {
            label: O.intl.string(O.t.qZZUy8),
            text: e,
            children: (0, r.jsx)(p.Z, {
                fileContents: this.getDownloadFileContents,
                contentType: 'text/plain',
                fileName: 'discord_backup_codes.txt',
                onDownload: () => d.Z.dispatch({ type: 'MFA_SEEN_BACKUP_CODE_PROMPT' }),
                children: (0, r.jsx)(c.zxk, {
                    variant: 'active',
                    size: 'sm',
                    text: O.intl.string(O.t.qZZUy8)
                })
            })
        });
    }
    renderHeader(e, t) {
        return (0, r.jsxs)(c.xBx, {
            separator: !1,
            children: [
                (0, r.jsxs)(h.Z.Child, {
                    grow: 1,
                    shrink: 1,
                    children: [
                        (0, r.jsx)(c.X6q, {
                            variant: 'heading-lg/semibold',
                            className: g.header,
                            children: _.Z.parse(e)
                        }),
                        (0, r.jsx)(c.Text, {
                            variant: 'text-xs/normal',
                            className: g.subHeader,
                            children: t
                        })
                    ]
                }),
                (0, r.jsx)(h.Z.Child, {
                    grow: 0,
                    children: (0, r.jsx)(c.olH, { onClick: this.handleCloseModal })
                })
            ]
        });
    }
    renderConfirmModal(e) {
        let { onClose: t } = this.props;
        return (0, r.jsx)(c.sYh, {
            dismissable: !0,
            header: O.intl.string(O.t.mwVXnJ),
            confirmText: O.intl.string(O.t.MwSEo6),
            cancelText: O.intl.string(O.t['ETE/oK']),
            onCancel: () => this.setState({ showConfirmModal: !1 }),
            onConfirm: () => {
                (d.Z.dispatch({ type: 'MFA_SEEN_BACKUP_CODE_PROMPT' }), t());
            },
            children: (0, r.jsx)(c.Text, {
                variant: 'text-md/normal',
                color: 'text-default',
                children: e
            })
        });
    }
    render() {
        let { isTotp: e } = this.props;
        return e ? this.renderTotp() : this.renderWebAuthn();
    }
    renderTotp() {
        let { transitionState: e } = this.props,
            { showConfirmModal: t } = this.state;
        return (0, r.jsxs)(c.Y0X, {
            transitionState: e,
            className: g.modal,
            parentComponent: 'MFAEnableSuccess',
            children: [
                this.renderHeader(O.intl.string(O.t['681MPT']), O.intl.format(O.t.pQioMz, {})),
                (0, r.jsxs)(c.hzk, {
                    className: g.modalInner,
                    children: [this.renderSMSSection(), (0, r.jsx)(c.$i$, { className: g.divider }), this.renderBackupCodesSection(O.intl.format(O.t.M0Dogo, {}))]
                }),
                t && this.renderConfirmModal(O.intl.string(O.t.WJFPHB))
            ]
        });
    }
    renderWebAuthn() {
        let { transitionState: e } = this.props,
            { showConfirmModal: t } = this.state;
        return (0, r.jsxs)(c.Y0X, {
            transitionState: e,
            className: g.modal,
            parentComponent: 'MFAEnableSuccess',
            children: [
                this.renderHeader(O.intl.string(O.t.x6ielJ), O.intl.format(O.t.Xb5JGh, {})),
                (0, r.jsx)(c.hzk, {
                    className: g.modalInner,
                    children: this.renderBackupCodesSection(O.intl.format(O.t.p59QLS, {}))
                }),
                t && this.renderConfirmModal(O.intl.string(O.t.aoNIXF))
            ]
        });
    }
    openPhoneVerificationModal() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        (0, c.h7j)((t) => (0, r.jsx)(E.default, M({ reason: f.L.MFA_PHONE_UPDATE }, t, e)), { modalKey: m.M });
    }
    constructor(...e) {
        (super(...e),
            N(this, 'state', { showConfirmModal: !1 }),
            N(this, 'handleCloseModal', () => {
                let { onClose: e, hasSeenBackupPrompt: t } = this.props;
                t ? null == e || e() : this.setState({ showConfirmModal: !0 });
            }),
            N(this, 'getDownloadFileContents', () => {
                let e = this.props.backupCodes
                        .map((e) => {
                            let { consumed: t, code: n } = e;
                            return '* '
                                .concat(n.substr(0, 4), '-')
                                .concat(n.substr(4), ' ')
                                .concat(t ? '('.concat(O.intl.string(O.t['ycME+/']), ')') : '');
                        })
                        .join('\r\n'),
                    t = O.intl.formatToPlainString(O.t.uYWwh4, { email: this.props.currentUser.email });
                return ''.concat(t, '\r\n\r\n').concat(e);
            }),
            N(this, 'handleChangePhoneNumber', () => {
                this.openPhoneVerificationModal();
            }),
            N(this, 'handleEnableSMS', () => {
                let { currentUser: e } = this.props;
                null == e.phone ? this.openPhoneVerificationModal({ onAddedPhone: u.Z.enableSMS }) : u.Z.enableSMS();
            }));
    }
}
let F = s.ZP.connectStores([y.default, S.Z], () => {
    let e = y.default.getCurrentUser();
    return (
        a()(null != e, 'MFAEnableSuccess: currentUser cannot be undefined'),
        {
            currentUser: e,
            backupCodes: S.Z.getBackupCodes(),
            hasSeenBackupPrompt: S.Z.hasSeenBackupPrompt
        }
    );
})(A);
