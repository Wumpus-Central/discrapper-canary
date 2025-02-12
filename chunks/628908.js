n.d(t, { default: () => b }), n(47120);
var r = n(200651),
    o = n(192379),
    i = n(512722),
    a = n.n(i),
    s = n(442837),
    l = n(481060),
    c = n(570140),
    d = n(816814),
    u = n(23645),
    E = n(600164),
    h = n(454585),
    _ = n(144114),
    p = n(607018),
    f = n(325067),
    R = n(594174),
    I = n(279837),
    m = n(981631),
    N = n(815660),
    g = n(388032),
    C = n(764269);
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
let S = (e) => {
    let { label: t, text: n, children: o, ...i } = e;
    return (0, r.jsxs)(E.Z, {
        direction: E.Z.Direction.VERTICAL,
        ...i,
        children: [
            (0, r.jsx)(l.vwX, {
                tag: 'h2',
                children: t
            }),
            null != n
                ? (0, r.jsx)(l.Text, {
                      variant: 'text-md/normal',
                      className: C.sectionBody,
                      children: n
                  })
                : null,
            (0, r.jsx)(E.Z.Child, {
                wrap: !0,
                children: o
            })
        ]
    });
};
class P extends o.PureComponent {
    renderSMSSection() {
        let { currentUser: e } = this.props,
            t = null != this.props.currentUser.phone,
            n = e.hasFlag(m.xW$.MFA_SMS),
            o = e.hasFlag(m.xW$.PARTNER) || e.hasFlag(m.xW$.STAFF);
        return t
            ? (0, r.jsxs)(S, {
                  label: g.intl.string(g.t.DZQe29),
                  text: g.intl.string(g.t.fspJ4O),
                  children: [
                      (0, r.jsxs)(l.Text, {
                          variant: 'text-md/normal',
                          className: C.sectionBody,
                          children: [
                              (0, r.jsx)('strong', {
                                  className: C.phoneNumber,
                                  children: g.intl.format(g.t.PXVoEB, { phoneNumber: e.phone })
                              }),
                              (0, r.jsx)(l.zxk, {
                                  look: l.zxk.Looks.LINK,
                                  color: l.zxk.Colors.LINK,
                                  size: l.zxk.Sizes.MIN,
                                  className: C.linkButton,
                                  onClick: this.handleChangePhoneNumber,
                                  children: g.intl.string(g.t.Ulqq6O)
                              })
                          ]
                      }),
                      (0, r.jsx)(l.zxk, {
                          onClick: this.handleEnableSMS,
                          disabled: n || o,
                          color: l.zxk.Colors.GREEN,
                          size: l.zxk.Sizes.SMALL,
                          children: o ? g.intl.string(g.t.Sq6Q1t) : n ? g.intl.string(g.t.kSbHTE) : g.intl.string(g.t.DZQe29)
                      })
                  ]
              })
            : (0, r.jsx)(S, {
                  label: g.intl.string(g.t.DZQe29),
                  text: g.intl.string(g.t.fspJ4O),
                  children: (0, r.jsx)(l.zxk, {
                      onClick: this.handleEnableSMS,
                      color: l.zxk.Colors.GREEN,
                      size: l.zxk.Sizes.SMALL,
                      disabled: o,
                      children: o ? g.intl.string(g.t.Sq6Q1t) : g.intl.string(g.t['O5qS/v'])
                  })
              });
    }
    renderBackupCodesSection() {
        return (0, r.jsx)(S, {
            label: g.intl.string(g.t.qZZUy8),
            text: g.intl.format(g.t.M0Dogo, {}),
            children: (0, r.jsx)(u.Z, {
                fileContents: this.getDownloadFileContents,
                contentType: 'text/plain',
                fileName: 'discord_backup_codes.txt',
                onDownload: () => c.Z.dispatch({ type: 'MFA_SEEN_BACKUP_CODE_PROMPT' }),
                children: (0, r.jsx)(l.zxk, {
                    color: l.zxk.Colors.GREEN,
                    size: l.zxk.Sizes.SMALL,
                    children: g.intl.string(g.t.qZZUy8)
                })
            })
        });
    }
    renderHeader(e) {
        return (0, r.jsxs)(l.xBx, {
            separator: !1,
            children: [
                (0, r.jsxs)(E.Z.Child, {
                    grow: 1,
                    shrink: 1,
                    children: [
                        (0, r.jsx)(l.X6q, {
                            variant: 'heading-lg/semibold',
                            className: C.header,
                            children: h.Z.parse(g.intl.string(g.t['681MPT']))
                        }),
                        (0, r.jsx)(l.Text, {
                            variant: 'text-xs/normal',
                            className: C.subHeader,
                            children: e
                        })
                    ]
                }),
                (0, r.jsx)(E.Z.Child, {
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
            header: g.intl.string(g.t.mwVXnJ),
            confirmText: g.intl.string(g.t.MwSEo6),
            cancelText: g.intl.string(g.t['ETE/oK']),
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
            className: C.modal,
            children: [
                this.renderHeader(g.intl.format(g.t.pQioMz, {})),
                (0, r.jsxs)(l.hzk, {
                    className: C.modalInner,
                    children: [this.renderSMSSection(), (0, r.jsx)(l.$i$, { className: C.divider }), this.renderBackupCodesSection()]
                }),
                t && this.renderConfirmModal(g.intl.string(g.t.WJFPHB))
            ]
        });
    }
    renderWebAuthn() {
        let { transitionState: e } = this.props,
            { showConfirmModal: t } = this.state;
        return (0, r.jsxs)(l.Y0X, {
            transitionState: e,
            className: C.modal,
            children: [
                this.renderHeader(g.intl.format(g.t.Xb5JGh, {})),
                (0, r.jsx)(l.hzk, {
                    className: C.modalInner,
                    children: this.renderBackupCodesSection()
                }),
                t && this.renderConfirmModal(g.intl.string(g.t.aoNIXF))
            ]
        });
    }
    openPhoneVerificationModal() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        (0, l.h7j)(
            (t) =>
                (0, r.jsx)(p.default, {
                    reason: _.L.MFA_PHONE_UPDATE,
                    ...t,
                    ...e
                }),
            { modalKey: N.M }
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
                                .concat(t ? '('.concat(g.intl.string(g.t['ycME+/']), ')') : '');
                        })
                        .join('\r\n'),
                    t = g.intl.formatToPlainString(g.t.uYWwh4, { email: this.props.currentUser.email });
                return ''.concat(t, '\r\n\r\n').concat(e);
            }),
            y(this, 'handleChangePhoneNumber', () => {
                this.openPhoneVerificationModal();
            }),
            y(this, 'handleEnableSMS', () => {
                let { currentUser: e } = this.props,
                    t = () => {
                        (0, l.h7j)((e) =>
                            (0, r.jsx)(I.default, {
                                ...e,
                                handleSubmit: (e) => d.Z.enableSMS(e),
                                title: g.intl.string(g.t.DZQe29)
                            })
                        );
                    };
                null == e.phone ? this.openPhoneVerificationModal({ onAddedPhone: t }) : t();
            });
    }
}
let b = s.ZP.connectStores([R.default, f.Z], () => {
    let e = R.default.getCurrentUser();
    return (
        a()(null != e, 'MFAEnableSuccess: currentUser cannot be undefined'),
        {
            currentUser: e,
            backupCodes: f.Z.getBackupCodes(),
            hasSeenBackupPrompt: f.Z.hasSeenBackupPrompt
        }
    );
})(P);
