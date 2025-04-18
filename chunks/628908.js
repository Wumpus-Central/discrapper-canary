r.d(t, { default: () => A }), r(388685);
var n = r(200651),
    o = r(192379),
    i = r(512722),
    a = r.n(i),
    s = r(442837),
    c = r(481060),
    l = r(570140),
    d = r(816814),
    u = r(23645),
    p = r(600164),
    h = r(454585),
    _ = r(144114),
    f = r(607018),
    E = r(325067),
    S = r(594174),
    N = r(981631),
    y = r(815660),
    b = r(388032),
    m = r(664460);
function O(e, t, r) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = r),
        e
    );
}
function g(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
        'function' == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(r).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                })
            )),
            n.forEach(function (t) {
                O(e, t, r[t]);
            });
    }
    return e;
}
let M = (e) => {
    var t,
        r,
        { label: o, text: i, children: a } = e,
        s = (function (e, t) {
            if (null == e) return {};
            var r,
                n,
                o = (function (e, t) {
                    if (null == e) return {};
                    var r,
                        n,
                        o = {},
                        i = Object.keys(e);
                    for (n = 0; n < i.length; n++) (r = i[n]), t.indexOf(r) >= 0 || (o[r] = e[r]);
                    return o;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (n = 0; n < i.length; n++) (r = i[n]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
            }
            return o;
        })(e, ['label', 'text', 'children']);
    return (0, n.jsxs)(
        p.Z,
        ((t = g({ direction: p.Z.Direction.VERTICAL }, s)),
        (r = r =
            {
                children: [
                    (0, n.jsx)(c.vwX, {
                        tag: 'h2',
                        children: o
                    }),
                    null != i
                        ? (0, n.jsx)(c.Text, {
                              variant: 'text-md/normal',
                              className: m.sectionBody,
                              children: i
                          })
                        : null,
                    (0, n.jsx)(p.Z.Child, {
                        wrap: !0,
                        children: a
                    })
                ]
            }),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : (function (e, t) {
                  var r = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(e);
                      r.push.apply(r, n);
                  }
                  return r;
              })(Object(r)).forEach(function (e) {
                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
              }),
        t)
    );
};
class C extends o.PureComponent {
    renderSMSSection() {
        let { currentUser: e } = this.props,
            t = null != this.props.currentUser.phone,
            r = e.hasFlag(N.xW$.MFA_SMS),
            o = e.hasFlag(N.xW$.PARTNER) || e.hasFlag(N.xW$.STAFF);
        return t
            ? (0, n.jsxs)(M, {
                  label: b.NW.string(b.t.DZQe29),
                  text: b.NW.string(b.t.fspJ4O),
                  children: [
                      (0, n.jsxs)(c.Text, {
                          variant: 'text-md/normal',
                          className: m.sectionBody,
                          children: [
                              (0, n.jsx)('strong', {
                                  className: m.phoneNumber,
                                  children: b.NW.format(b.t.PXVoEB, { phoneNumber: e.phone })
                              }),
                              (0, n.jsx)(c.zxk, {
                                  look: c.zxk.Looks.LINK,
                                  color: c.zxk.Colors.LINK,
                                  size: c.zxk.Sizes.MIN,
                                  className: m.linkButton,
                                  onClick: this.handleChangePhoneNumber,
                                  children: b.NW.string(b.t.Ulqq6O)
                              })
                          ]
                      }),
                      (0, n.jsx)(c.zxk, {
                          onClick: this.handleEnableSMS,
                          disabled: r || o,
                          color: c.zxk.Colors.GREEN,
                          size: c.zxk.Sizes.SMALL,
                          children: o ? b.NW.string(b.t.Sq6Q1t) : r ? b.NW.string(b.t.kSbHTE) : b.NW.string(b.t.DZQe29)
                      })
                  ]
              })
            : (0, n.jsx)(M, {
                  label: b.NW.string(b.t.DZQe29),
                  text: b.NW.string(b.t.fspJ4O),
                  children: (0, n.jsx)(c.zxk, {
                      onClick: this.handleEnableSMS,
                      color: c.zxk.Colors.GREEN,
                      size: c.zxk.Sizes.SMALL,
                      disabled: o,
                      children: o ? b.NW.string(b.t.Sq6Q1t) : b.NW.string(b.t['O5qS/v'])
                  })
              });
    }
    renderBackupCodesSection() {
        return (0, n.jsx)(M, {
            label: b.NW.string(b.t.qZZUy8),
            text: b.NW.format(b.t.M0Dogo, {}),
            children: (0, n.jsx)(u.Z, {
                fileContents: this.getDownloadFileContents,
                contentType: 'text/plain',
                fileName: 'discord_backup_codes.txt',
                onDownload: () => l.Z.dispatch({ type: 'MFA_SEEN_BACKUP_CODE_PROMPT' }),
                children: (0, n.jsx)(c.zxk, {
                    color: c.zxk.Colors.GREEN,
                    size: c.zxk.Sizes.SMALL,
                    children: b.NW.string(b.t.qZZUy8)
                })
            })
        });
    }
    renderHeader(e) {
        return (0, n.jsxs)(c.xBx, {
            separator: !1,
            children: [
                (0, n.jsxs)(p.Z.Child, {
                    grow: 1,
                    shrink: 1,
                    children: [
                        (0, n.jsx)(c.X6q, {
                            variant: 'heading-lg/semibold',
                            className: m.header,
                            children: h.Z.parse(b.NW.string(b.t['681MPT']))
                        }),
                        (0, n.jsx)(c.Text, {
                            variant: 'text-xs/normal',
                            className: m.subHeader,
                            children: e
                        })
                    ]
                }),
                (0, n.jsx)(p.Z.Child, {
                    grow: 0,
                    children: (0, n.jsx)(c.olH, { onClick: this.handleCloseModal })
                })
            ]
        });
    }
    renderConfirmModal(e) {
        let { onClose: t } = this.props;
        return (0, n.jsx)(c.sYh, {
            dismissable: !0,
            header: b.NW.string(b.t.mwVXnJ),
            confirmText: b.NW.string(b.t.MwSEo6),
            cancelText: b.NW.string(b.t['ETE/oK']),
            onCancel: () => this.setState({ showConfirmModal: !1 }),
            onConfirm: () => {
                l.Z.dispatch({ type: 'MFA_SEEN_BACKUP_CODE_PROMPT' }), t();
            },
            children: (0, n.jsx)(c.Text, {
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
        return (0, n.jsxs)(c.Y0X, {
            transitionState: e,
            className: m.modal,
            children: [
                this.renderHeader(b.NW.format(b.t.pQioMz, {})),
                (0, n.jsxs)(c.hzk, {
                    className: m.modalInner,
                    children: [this.renderSMSSection(), (0, n.jsx)(c.$i$, { className: m.divider }), this.renderBackupCodesSection()]
                }),
                t && this.renderConfirmModal(b.NW.string(b.t.WJFPHB))
            ]
        });
    }
    renderWebAuthn() {
        let { transitionState: e } = this.props,
            { showConfirmModal: t } = this.state;
        return (0, n.jsxs)(c.Y0X, {
            transitionState: e,
            className: m.modal,
            children: [
                this.renderHeader(b.NW.format(b.t.Xb5JGh, {})),
                (0, n.jsx)(c.hzk, {
                    className: m.modalInner,
                    children: this.renderBackupCodesSection()
                }),
                t && this.renderConfirmModal(b.NW.string(b.t.aoNIXF))
            ]
        });
    }
    openPhoneVerificationModal() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        (0, c.h7j)((t) => (0, n.jsx)(f.default, g({ reason: _.L.MFA_PHONE_UPDATE }, t, e)), { modalKey: y.M });
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
                            let { consumed: t, code: r } = e;
                            return '* '
                                .concat(r.substr(0, 4), '-')
                                .concat(r.substr(4), ' ')
                                .concat(t ? '('.concat(b.NW.string(b.t['ycME+/']), ')') : '');
                        })
                        .join('\r\n'),
                    t = b.NW.formatToPlainString(b.t.uYWwh4, { email: this.props.currentUser.email });
                return ''.concat(t, '\r\n\r\n').concat(e);
            }),
            O(this, 'handleChangePhoneNumber', () => {
                this.openPhoneVerificationModal();
            }),
            O(this, 'handleEnableSMS', () => {
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
