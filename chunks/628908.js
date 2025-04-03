n.d(t, { default: () => v }), n(47120);
var r = n(200651),
    o = n(192379),
    i = n(512722),
    a = n.n(i),
    s = n(442837),
    l = n(481060),
    c = n(570140),
    d = n(816814),
    u = n(23645),
    h = n(600164),
    p = n(454585),
    f = n(144114),
    _ = n(607018),
    N = n(325067),
    m = n(594174),
    b = n(279837),
    E = n(981631),
    y = n(815660),
    g = n(388032),
    S = n(664460);
function O(e, t, n) {
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
function x(e) {
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
                O(e, t, n[t]);
            });
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
let P = (e) => {
    var { label: t, text: n, children: o } = e,
        i = (function (e, t) {
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
        h.Z,
        w(x({ direction: h.Z.Direction.VERTICAL }, i), {
            children: [
                (0, r.jsx)(l.vwX, {
                    tag: 'h2',
                    children: t
                }),
                null != n
                    ? (0, r.jsx)(l.Text, {
                          variant: 'text-md/normal',
                          className: S.sectionBody,
                          children: n
                      })
                    : null,
                (0, r.jsx)(h.Z.Child, {
                    wrap: !0,
                    children: o
                })
            ]
        })
    );
};
class C extends o.PureComponent {
    renderSMSSection() {
        let { currentUser: e } = this.props,
            t = null != this.props.currentUser.phone,
            n = e.hasFlag(E.xW$.MFA_SMS),
            o = e.hasFlag(E.xW$.PARTNER) || e.hasFlag(E.xW$.STAFF);
        return t
            ? (0, r.jsxs)(P, {
                  label: g.NW.string(g.t.DZQe29),
                  text: g.NW.string(g.t.fspJ4O),
                  children: [
                      (0, r.jsxs)(l.Text, {
                          variant: 'text-md/normal',
                          className: S.sectionBody,
                          children: [
                              (0, r.jsx)('strong', {
                                  className: S.phoneNumber,
                                  children: g.NW.format(g.t.PXVoEB, { phoneNumber: e.phone })
                              }),
                              (0, r.jsx)(l.zxk, {
                                  look: l.zxk.Looks.LINK,
                                  color: l.zxk.Colors.LINK,
                                  size: l.zxk.Sizes.MIN,
                                  className: S.linkButton,
                                  onClick: this.handleChangePhoneNumber,
                                  children: g.NW.string(g.t.Ulqq6O)
                              })
                          ]
                      }),
                      (0, r.jsx)(l.zxk, {
                          onClick: this.handleEnableSMS,
                          disabled: n || o,
                          color: l.zxk.Colors.GREEN,
                          size: l.zxk.Sizes.SMALL,
                          children: o ? g.NW.string(g.t.Sq6Q1t) : n ? g.NW.string(g.t.kSbHTE) : g.NW.string(g.t.DZQe29)
                      })
                  ]
              })
            : (0, r.jsx)(P, {
                  label: g.NW.string(g.t.DZQe29),
                  text: g.NW.string(g.t.fspJ4O),
                  children: (0, r.jsx)(l.zxk, {
                      onClick: this.handleEnableSMS,
                      color: l.zxk.Colors.GREEN,
                      size: l.zxk.Sizes.SMALL,
                      disabled: o,
                      children: o ? g.NW.string(g.t.Sq6Q1t) : g.NW.string(g.t['O5qS/v'])
                  })
              });
    }
    renderBackupCodesSection() {
        return (0, r.jsx)(P, {
            label: g.NW.string(g.t.qZZUy8),
            text: g.NW.format(g.t.M0Dogo, {}),
            children: (0, r.jsx)(u.Z, {
                fileContents: this.getDownloadFileContents,
                contentType: 'text/plain',
                fileName: 'discord_backup_codes.txt',
                onDownload: () => c.Z.dispatch({ type: 'MFA_SEEN_BACKUP_CODE_PROMPT' }),
                children: (0, r.jsx)(l.zxk, {
                    color: l.zxk.Colors.GREEN,
                    size: l.zxk.Sizes.SMALL,
                    children: g.NW.string(g.t.qZZUy8)
                })
            })
        });
    }
    renderHeader(e) {
        return (0, r.jsxs)(l.xBx, {
            separator: !1,
            children: [
                (0, r.jsxs)(h.Z.Child, {
                    grow: 1,
                    shrink: 1,
                    children: [
                        (0, r.jsx)(l.X6q, {
                            variant: 'heading-lg/semibold',
                            className: S.header,
                            children: p.Z.parse(g.NW.string(g.t['681MPT']))
                        }),
                        (0, r.jsx)(l.Text, {
                            variant: 'text-xs/normal',
                            className: S.subHeader,
                            children: e
                        })
                    ]
                }),
                (0, r.jsx)(h.Z.Child, {
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
            header: g.NW.string(g.t.mwVXnJ),
            confirmText: g.NW.string(g.t.MwSEo6),
            cancelText: g.NW.string(g.t['ETE/oK']),
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
            className: S.modal,
            children: [
                this.renderHeader(g.NW.format(g.t.pQioMz, {})),
                (0, r.jsxs)(l.hzk, {
                    className: S.modalInner,
                    children: [this.renderSMSSection(), (0, r.jsx)(l.$i$, { className: S.divider }), this.renderBackupCodesSection()]
                }),
                t && this.renderConfirmModal(g.NW.string(g.t.WJFPHB))
            ]
        });
    }
    renderWebAuthn() {
        let { transitionState: e } = this.props,
            { showConfirmModal: t } = this.state;
        return (0, r.jsxs)(l.Y0X, {
            transitionState: e,
            className: S.modal,
            children: [
                this.renderHeader(g.NW.format(g.t.Xb5JGh, {})),
                (0, r.jsx)(l.hzk, {
                    className: S.modalInner,
                    children: this.renderBackupCodesSection()
                }),
                t && this.renderConfirmModal(g.NW.string(g.t.aoNIXF))
            ]
        });
    }
    openPhoneVerificationModal() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        (0, l.h7j)((t) => (0, r.jsx)(_.default, x({ reason: f.L.MFA_PHONE_UPDATE }, t, e)), { modalKey: y.M });
    }
    constructor(...e) {
        super(...e),
            O(this, 'state', { showConfirmModal: !1 }),
            O(this, 'handleCloseModal', () => {
                let { onClose: e, hasSeenBackupPrompt: t } = this.props;
                t ? null == e || e() : this.setState({ showConfirmModal: !0 });
            }),
            O(this, 'getDownloadFileContents', () => {
                let e = this.props.backupCodes
                        .map((e) => {
                            let { consumed: t, code: n } = e;
                            return '* '
                                .concat(n.substr(0, 4), '-')
                                .concat(n.substr(4), ' ')
                                .concat(t ? '('.concat(g.NW.string(g.t['ycME+/']), ')') : '');
                        })
                        .join('\r\n'),
                    t = g.NW.formatToPlainString(g.t.uYWwh4, { email: this.props.currentUser.email });
                return ''.concat(t, '\r\n\r\n').concat(e);
            }),
            O(this, 'handleChangePhoneNumber', () => {
                this.openPhoneVerificationModal();
            }),
            O(this, 'handleEnableSMS', () => {
                let { currentUser: e } = this.props,
                    t = () => {
                        (0, l.h7j)((e) =>
                            (0, r.jsx)(
                                b.default,
                                w(x({}, e), {
                                    handleSubmit: (e) => d.Z.enableSMS(e),
                                    title: g.NW.string(g.t.DZQe29)
                                })
                            )
                        );
                    };
                null == e.phone ? this.openPhoneVerificationModal({ onAddedPhone: t }) : t();
            });
    }
}
let v = s.ZP.connectStores([m.default, N.Z], () => {
    let e = m.default.getCurrentUser();
    return (
        a()(null != e, 'MFAEnableSuccess: currentUser cannot be undefined'),
        {
            currentUser: e,
            backupCodes: N.Z.getBackupCodes(),
            hasSeenBackupPrompt: N.Z.hasSeenBackupPrompt
        }
    );
})(C);
