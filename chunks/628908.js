n.d(t, { default: () => P }), n(47120);
var r = n(200651),
    o = n(192379),
    i = n(512722),
    a = n.n(i),
    s = n(442837),
    l = n(481060),
    d = n(570140),
    c = n(816814),
    u = n(23645),
    h = n(600164),
    p = n(454585),
    f = n(144114),
    _ = n(607018),
    E = n(325067),
    m = n(594174),
    N = n(279837),
    g = n(981631),
    S = n(815660),
    b = n(388032),
    x = n(269157);
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
let C = (e) => {
    let { label: t, text: n, children: o, ...i } = e;
    return (0, r.jsxs)(h.Z, {
        direction: h.Z.Direction.VERTICAL,
        ...i,
        children: [
            (0, r.jsx)(l.vwX, {
                tag: 'h2',
                children: t
            }),
            null != n
                ? (0, r.jsx)(l.Text, {
                      variant: 'text-md/normal',
                      className: x.sectionBody,
                      children: n
                  })
                : null,
            (0, r.jsx)(h.Z.Child, {
                wrap: !0,
                children: o
            })
        ]
    });
};
class w extends o.PureComponent {
    renderSMSSection() {
        let { currentUser: e } = this.props,
            t = null != this.props.currentUser.phone,
            n = e.hasFlag(g.xW$.MFA_SMS),
            o = e.hasFlag(g.xW$.PARTNER) || e.hasFlag(g.xW$.STAFF);
        return t
            ? (0, r.jsxs)(C, {
                  label: b.intl.string(b.t.DZQe29),
                  text: b.intl.string(b.t.fspJ4O),
                  children: [
                      (0, r.jsxs)(l.Text, {
                          variant: 'text-md/normal',
                          className: x.sectionBody,
                          children: [
                              (0, r.jsx)('strong', {
                                  className: x.phoneNumber,
                                  children: b.intl.format(b.t.PXVoEB, { phoneNumber: e.phone })
                              }),
                              (0, r.jsx)(l.zxk, {
                                  look: l.zxk.Looks.LINK,
                                  color: l.zxk.Colors.LINK,
                                  size: l.zxk.Sizes.MIN,
                                  className: x.linkButton,
                                  onClick: this.handleChangePhoneNumber,
                                  children: b.intl.string(b.t.Ulqq6O)
                              })
                          ]
                      }),
                      (0, r.jsx)(l.zxk, {
                          onClick: this.handleEnableSMS,
                          disabled: n || o,
                          color: l.zxk.Colors.GREEN,
                          size: l.zxk.Sizes.SMALL,
                          children: o ? b.intl.string(b.t.Sq6Q1t) : n ? b.intl.string(b.t.kSbHTE) : b.intl.string(b.t.DZQe29)
                      })
                  ]
              })
            : (0, r.jsx)(C, {
                  label: b.intl.string(b.t.DZQe29),
                  text: b.intl.string(b.t.fspJ4O),
                  children: (0, r.jsx)(l.zxk, {
                      onClick: this.handleEnableSMS,
                      color: l.zxk.Colors.GREEN,
                      size: l.zxk.Sizes.SMALL,
                      disabled: o,
                      children: o ? b.intl.string(b.t.Sq6Q1t) : b.intl.string(b.t['O5qS/v'])
                  })
              });
    }
    renderBackupCodesSection() {
        return (0, r.jsx)(C, {
            label: b.intl.string(b.t.qZZUy8),
            text: b.intl.format(b.t.M0Dogo, {}),
            children: (0, r.jsx)(u.Z, {
                fileContents: this.getDownloadFileContents,
                contentType: 'text/plain',
                fileName: 'discord_backup_codes.txt',
                onDownload: () => d.Z.dispatch({ type: 'MFA_SEEN_BACKUP_CODE_PROMPT' }),
                children: (0, r.jsx)(l.zxk, {
                    color: l.zxk.Colors.GREEN,
                    size: l.zxk.Sizes.SMALL,
                    children: b.intl.string(b.t.qZZUy8)
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
                            className: x.header,
                            children: p.Z.parse(b.intl.string(b.t['681MPT']))
                        }),
                        (0, r.jsx)(l.Text, {
                            variant: 'text-xs/normal',
                            className: x.subHeader,
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
            header: b.intl.string(b.t.mwVXnJ),
            confirmText: b.intl.string(b.t.MwSEo6),
            cancelText: b.intl.string(b.t['ETE/oK']),
            onCancel: () => this.setState({ showConfirmModal: !1 }),
            onConfirm: () => {
                d.Z.dispatch({ type: 'MFA_SEEN_BACKUP_CODE_PROMPT' }), t();
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
            className: x.modal,
            children: [
                this.renderHeader(b.intl.format(b.t.pQioMz, {})),
                (0, r.jsxs)(l.hzk, {
                    className: x.modalInner,
                    children: [this.renderSMSSection(), (0, r.jsx)(l.$i$, { className: x.divider }), this.renderBackupCodesSection()]
                }),
                t && this.renderConfirmModal(b.intl.string(b.t.WJFPHB))
            ]
        });
    }
    renderWebAuthn() {
        let { transitionState: e } = this.props,
            { showConfirmModal: t } = this.state;
        return (0, r.jsxs)(l.Y0X, {
            transitionState: e,
            className: x.modal,
            children: [
                this.renderHeader(b.intl.format(b.t.Xb5JGh, {})),
                (0, r.jsx)(l.hzk, {
                    className: x.modalInner,
                    children: this.renderBackupCodesSection()
                }),
                t && this.renderConfirmModal(b.intl.string(b.t.aoNIXF))
            ]
        });
    }
    openPhoneVerificationModal() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        (0, l.h7j)(
            (t) =>
                (0, r.jsx)(_.default, {
                    reason: f.L.MFA_PHONE_UPDATE,
                    ...t,
                    ...e
                }),
            { modalKey: S.M }
        );
    }
    constructor(...e) {
        super(...e),
            y(this, 'state', { showConfirmModal: !1 }),
            y(this, 'handleCloseModal', () => {
                let { onClose: e, hasSeenBackupPrompt: t } = this.props;
                t ? null == e || e() : this.setState({ showConfirmModal: !0 });
            }),
            y(this, 'getDownloadFileContents', () => {
                let e = this.props.backupCodes
                        .map((e) => {
                            let { consumed: t, code: n } = e;
                            return '* '
                                .concat(n.substr(0, 4), '-')
                                .concat(n.substr(4), ' ')
                                .concat(t ? '('.concat(b.intl.string(b.t['ycME+/']), ')') : '');
                        })
                        .join('\r\n'),
                    t = b.intl.formatToPlainString(b.t.uYWwh4, { email: this.props.currentUser.email });
                return ''.concat(t, '\r\n\r\n').concat(e);
            }),
            y(this, 'handleChangePhoneNumber', () => {
                this.openPhoneVerificationModal();
            }),
            y(this, 'handleEnableSMS', () => {
                let { currentUser: e } = this.props,
                    t = () => {
                        (0, l.h7j)((e) =>
                            (0, r.jsx)(N.default, {
                                ...e,
                                handleSubmit: (e) => c.Z.enableSMS(e),
                                title: b.intl.string(b.t.DZQe29)
                            })
                        );
                    };
                null == e.phone ? this.openPhoneVerificationModal({ onAddedPhone: t }) : t();
            });
    }
}
let P = s.ZP.connectStores([m.default, E.Z], () => {
    let e = m.default.getCurrentUser();
    return (
        a()(null != e, 'MFAEnableSuccess: currentUser cannot be undefined'),
        {
            currentUser: e,
            backupCodes: E.Z.getBackupCodes(),
            hasSeenBackupPrompt: E.Z.hasSeenBackupPrompt
        }
    );
})(w);
