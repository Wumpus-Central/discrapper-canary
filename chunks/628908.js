n.d(t, { default: () => A }), n(388685);
var r = n(200651),
    o = n(192379),
    i = n(512722),
    a = n.n(i),
    s = n(442837),
    l = n(481060),
    c = n(570140),
    d = n(816814),
    u = n(23645),
    p = n(600164),
    h = n(454585),
    _ = n(144114),
    f = n(607018),
    E = n(325067),
    S = n(594174),
    y = n(981631),
    b = n(815660),
    m = n(388032),
    O = n(664460);
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
function g(e) {
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
                N(e, t, n[t]);
            });
    }
    return e;
}
let M = (e) => {
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
                    for (r = 0; r < i.length; r++) (n = i[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
                    return o;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (r = 0; r < i.length; r++) (n = i[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]);
            }
            return o;
        })(e, ['label', 'text', 'children']);
    return (0, r.jsxs)(
        p.Z,
        ((t = g({ direction: p.Z.Direction.VERTICAL }, s)),
        (n = n =
            {
                children: [
                    (0, r.jsx)(l.vwX, {
                        tag: 'h2',
                        children: o
                    }),
                    null != i
                        ? (0, r.jsx)(l.Text, {
                              variant: 'text-md/normal',
                              className: O.sectionBody,
                              children: i
                          })
                        : null,
                    (0, r.jsx)(p.Z.Child, {
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
class C extends o.PureComponent {
    renderSMSSection() {
        let { currentUser: e } = this.props,
            t = null != this.props.currentUser.phone,
            n = e.hasFlag(y.xW$.MFA_SMS),
            o = e.hasFlag(y.xW$.PARTNER) || e.hasFlag(y.xW$.STAFF);
        return t
            ? (0, r.jsxs)(M, {
                  label: m.intl.string(m.t.DZQe29),
                  text: m.intl.string(m.t.fspJ4O),
                  children: [
                      (0, r.jsxs)(l.Text, {
                          variant: 'text-md/normal',
                          className: O.sectionBody,
                          children: [
                              (0, r.jsx)('strong', {
                                  className: O.phoneNumber,
                                  children: m.intl.format(m.t.PXVoEB, { phoneNumber: e.phone })
                              }),
                              (0, r.jsx)(l.zxk, {
                                  look: l.zxk.Looks.LINK,
                                  color: l.zxk.Colors.LINK,
                                  size: l.zxk.Sizes.MIN,
                                  className: O.linkButton,
                                  onClick: this.handleChangePhoneNumber,
                                  children: m.intl.string(m.t.Ulqq6O)
                              })
                          ]
                      }),
                      (0, r.jsx)(l.zxk, {
                          onClick: this.handleEnableSMS,
                          disabled: n || o,
                          color: l.zxk.Colors.GREEN,
                          size: l.zxk.Sizes.SMALL,
                          children: o ? m.intl.string(m.t.Sq6Q1t) : n ? m.intl.string(m.t.kSbHTE) : m.intl.string(m.t.DZQe29)
                      })
                  ]
              })
            : (0, r.jsx)(M, {
                  label: m.intl.string(m.t.DZQe29),
                  text: m.intl.string(m.t.fspJ4O),
                  children: (0, r.jsx)(l.zxk, {
                      onClick: this.handleEnableSMS,
                      color: l.zxk.Colors.GREEN,
                      size: l.zxk.Sizes.SMALL,
                      disabled: o,
                      children: o ? m.intl.string(m.t.Sq6Q1t) : m.intl.string(m.t['O5qS/v'])
                  })
              });
    }
    renderBackupCodesSection(e) {
        return (0, r.jsx)(M, {
            label: m.intl.string(m.t.qZZUy8),
            text: e,
            children: (0, r.jsx)(u.Z, {
                fileContents: this.getDownloadFileContents,
                contentType: 'text/plain',
                fileName: 'discord_backup_codes.txt',
                onDownload: () => c.Z.dispatch({ type: 'MFA_SEEN_BACKUP_CODE_PROMPT' }),
                children: (0, r.jsx)(l.zxk, {
                    color: l.zxk.Colors.GREEN,
                    size: l.zxk.Sizes.SMALL,
                    children: m.intl.string(m.t.qZZUy8)
                })
            })
        });
    }
    renderHeader(e, t) {
        return (0, r.jsxs)(l.xBx, {
            separator: !1,
            children: [
                (0, r.jsxs)(p.Z.Child, {
                    grow: 1,
                    shrink: 1,
                    children: [
                        (0, r.jsx)(l.X6q, {
                            variant: 'heading-lg/semibold',
                            className: O.header,
                            children: h.Z.parse(e)
                        }),
                        (0, r.jsx)(l.Text, {
                            variant: 'text-xs/normal',
                            className: O.subHeader,
                            children: t
                        })
                    ]
                }),
                (0, r.jsx)(p.Z.Child, {
                    grow: 0,
                    children: (0, r.jsx)(l.olH, { onClick: this.handleCloseModal })
                })
            ]
        });
    }
    renderConfirmModal(e) {
        let { onClose: t } = this.props;
        return (0, r.jsx)(l.sYh, {
            dismissable: !0,
            header: m.intl.string(m.t.mwVXnJ),
            confirmText: m.intl.string(m.t.MwSEo6),
            cancelText: m.intl.string(m.t['ETE/oK']),
            onCancel: () => this.setState({ showConfirmModal: !1 }),
            onConfirm: () => {
                c.Z.dispatch({ type: 'MFA_SEEN_BACKUP_CODE_PROMPT' }), t();
            },
            children: (0, r.jsx)(l.Text, {
                variant: 'text-md/normal',
                color: 'text-normal',
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
        return (0, r.jsxs)(l.Y0X, {
            transitionState: e,
            className: O.modal,
            children: [
                this.renderHeader(m.intl.string(m.t['681MPT']), m.intl.format(m.t.pQioMz, {})),
                (0, r.jsxs)(l.hzk, {
                    className: O.modalInner,
                    children: [this.renderSMSSection(), (0, r.jsx)(l.$i$, { className: O.divider }), this.renderBackupCodesSection(m.intl.format(m.t.M0Dogo, {}))]
                }),
                t && this.renderConfirmModal(m.intl.string(m.t.WJFPHB))
            ]
        });
    }
    renderWebAuthn() {
        let { transitionState: e } = this.props,
            { showConfirmModal: t } = this.state;
        return (0, r.jsxs)(l.Y0X, {
            transitionState: e,
            className: O.modal,
            children: [
                this.renderHeader(m.intl.string(m.t.x6ielJ), m.intl.format(m.t.Xb5JGh, {})),
                (0, r.jsx)(l.hzk, {
                    className: O.modalInner,
                    children: this.renderBackupCodesSection(m.intl.format(m.t.p59QLS, {}))
                }),
                t && this.renderConfirmModal(m.intl.string(m.t.aoNIXF))
            ]
        });
    }
    openPhoneVerificationModal() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        (0, l.h7j)((t) => (0, r.jsx)(f.default, g({ reason: _.L.MFA_PHONE_UPDATE }, t, e)), { modalKey: b.M });
    }
    constructor(...e) {
        super(...e),
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
                                .concat(t ? '('.concat(m.intl.string(m.t['ycME+/']), ')') : '');
                        })
                        .join('\r\n'),
                    t = m.intl.formatToPlainString(m.t.uYWwh4, { email: this.props.currentUser.email });
                return ''.concat(t, '\r\n\r\n').concat(e);
            }),
            N(this, 'handleChangePhoneNumber', () => {
                this.openPhoneVerificationModal();
            }),
            N(this, 'handleEnableSMS', () => {
                let { currentUser: e } = this.props;
                null == e.phone ? this.openPhoneVerificationModal({ onAddedPhone: d.Z.enableSMS }) : d.Z.enableSMS();
            });
    }
}
let A = s.ZP.connectStores([S.default, E.Z], () => {
    let e = S.default.getCurrentUser();
    return (
        a()(null != e, 'MFAEnableSuccess: currentUser cannot be undefined'),
        {
            currentUser: e,
            backupCodes: E.Z.getBackupCodes(),
            hasSeenBackupPrompt: E.Z.hasSeenBackupPrompt
        }
    );
})(C);
