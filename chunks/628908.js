n.r(t), n(47120);
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
    m = n(607018),
    _ = n(325067),
    E = n(594174),
    b = n(279837),
    N = n(981631),
    g = n(815660),
    S = n(388032),
    y = n(907085);
function C(e, t, n) {
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
let x = (e) => {
    let { label: t, text: n, children: o, ...i } = e;
    return (0, r.jsxs)(h.Z, {
        direction: h.Z.Direction.VERTICAL,
        ...i,
        children: [
            (0, r.jsx)(l.FormTitle, {
                tag: 'h2',
                children: t
            }),
            null != n
                ? (0, r.jsx)(l.Text, {
                      variant: 'text-md/normal',
                      className: y.sectionBody,
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
class M extends o.PureComponent {
    renderSMSSection() {
        let { currentUser: e } = this.props,
            t = null != this.props.currentUser.phone,
            n = e.hasFlag(N.xW$.MFA_SMS),
            o = e.hasFlag(N.xW$.PARTNER) || e.hasFlag(N.xW$.STAFF);
        return t
            ? (0, r.jsxs)(x, {
                  label: S.intl.string(S.t.DZQe29),
                  text: S.intl.string(S.t.fspJ4O),
                  children: [
                      (0, r.jsxs)(l.Text, {
                          variant: 'text-md/normal',
                          className: y.sectionBody,
                          children: [
                              (0, r.jsx)('strong', {
                                  className: y.phoneNumber,
                                  children: S.intl.format(S.t.PXVoEB, { phoneNumber: e.phone })
                              }),
                              (0, r.jsx)(l.Button, {
                                  look: l.Button.Looks.LINK,
                                  color: l.Button.Colors.LINK,
                                  size: l.Button.Sizes.MIN,
                                  className: y.linkButton,
                                  onClick: this.handleChangePhoneNumber,
                                  children: S.intl.string(S.t.Ulqq6O)
                              })
                          ]
                      }),
                      (0, r.jsx)(l.Button, {
                          onClick: this.handleEnableSMS,
                          disabled: n || o,
                          color: l.Button.Colors.GREEN,
                          size: l.Button.Sizes.SMALL,
                          children: o ? S.intl.string(S.t.Sq6Q1t) : n ? S.intl.string(S.t.kSbHTE) : S.intl.string(S.t.DZQe29)
                      })
                  ]
              })
            : (0, r.jsx)(x, {
                  label: S.intl.string(S.t.DZQe29),
                  text: S.intl.string(S.t.fspJ4O),
                  children: (0, r.jsx)(l.Button, {
                      onClick: this.handleEnableSMS,
                      color: l.Button.Colors.GREEN,
                      size: l.Button.Sizes.SMALL,
                      disabled: o,
                      children: o ? S.intl.string(S.t.Sq6Q1t) : S.intl.string(S.t['O5qS/v'])
                  })
              });
    }
    renderBackupCodesSection() {
        return (0, r.jsx)(x, {
            label: S.intl.string(S.t.qZZUy8),
            text: S.intl.format(S.t.M0Dogo, {}),
            children: (0, r.jsx)(u.Z, {
                fileContents: this.getDownloadFileContents,
                contentType: 'text/plain',
                fileName: 'discord_backup_codes.txt',
                onDownload: () => d.Z.dispatch({ type: 'MFA_SEEN_BACKUP_CODE_PROMPT' }),
                children: (0, r.jsx)(l.Button, {
                    color: l.Button.Colors.GREEN,
                    size: l.Button.Sizes.SMALL,
                    children: S.intl.string(S.t.qZZUy8)
                })
            })
        });
    }
    renderHeader(e) {
        return (0, r.jsxs)(l.ModalHeader, {
            separator: !1,
            children: [
                (0, r.jsxs)(h.Z.Child, {
                    grow: 1,
                    shrink: 1,
                    children: [
                        (0, r.jsx)(l.Heading, {
                            variant: 'heading-lg/semibold',
                            className: y.header,
                            children: p.Z.parse(S.intl.string(S.t['681MPT']))
                        }),
                        (0, r.jsx)(l.Text, {
                            variant: 'text-xs/normal',
                            className: y.subHeader,
                            children: e
                        })
                    ]
                }),
                (0, r.jsx)(h.Z.Child, {
                    grow: 0,
                    children: (0, r.jsx)(l.ModalCloseButton, { onClick: this.handleCloseModal })
                })
            ]
        });
    }
    renderConfirmModal(e) {
        let { onClose: t } = this.props;
        return (0, r.jsx)(l.DeclarativeConfirmModal, {
            dismissable: !0,
            header: S.intl.string(S.t.mwVXnJ),
            confirmText: S.intl.string(S.t.MwSEo6),
            cancelText: S.intl.string(S.t['ETE/oK']),
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
        return (0, r.jsxs)(l.ModalRoot, {
            transitionState: e,
            className: y.modal,
            children: [
                this.renderHeader(S.intl.format(S.t.pQioMz, {})),
                (0, r.jsxs)(l.ModalContent, {
                    className: y.modalInner,
                    children: [this.renderSMSSection(), (0, r.jsx)(l.FormDivider, { className: y.divider }), this.renderBackupCodesSection()]
                }),
                t && this.renderConfirmModal(S.intl.string(S.t.WJFPHB))
            ]
        });
    }
    renderWebAuthn() {
        let { transitionState: e } = this.props,
            { showConfirmModal: t } = this.state;
        return (0, r.jsxs)(l.ModalRoot, {
            transitionState: e,
            className: y.modal,
            children: [
                this.renderHeader(S.intl.format(S.t.Xb5JGh, {})),
                (0, r.jsx)(l.ModalContent, {
                    className: y.modalInner,
                    children: this.renderBackupCodesSection()
                }),
                t && this.renderConfirmModal(S.intl.string(S.t.aoNIXF))
            ]
        });
    }
    openPhoneVerificationModal() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        (0, l.openModal)(
            (t) =>
                (0, r.jsx)(m.default, {
                    reason: f.L.MFA_PHONE_UPDATE,
                    ...t,
                    ...e
                }),
            { modalKey: g.M }
        );
    }
    constructor(...e) {
        super(...e),
            C(this, 'state', { showConfirmModal: !1 }),
            C(this, 'handleCloseModal', () => {
                let { onClose: e, hasSeenBackupPrompt: t } = this.props;
                t ? null == e || e() : this.setState({ showConfirmModal: !0 });
            }),
            C(this, 'getDownloadFileContents', () => {
                let e = this.props.backupCodes
                        .map((e) => {
                            let { consumed: t, code: n } = e;
                            return '* '
                                .concat(n.substr(0, 4), '-')
                                .concat(n.substr(4), ' ')
                                .concat(t ? '('.concat(S.intl.string(S.t['ycME+/']), ')') : '');
                        })
                        .join('\r\n'),
                    t = S.intl.formatToPlainString(S.t.uYWwh4, { email: this.props.currentUser.email });
                return ''.concat(t, '\r\n\r\n').concat(e);
            }),
            C(this, 'handleChangePhoneNumber', () => {
                this.openPhoneVerificationModal();
            }),
            C(this, 'handleEnableSMS', () => {
                let { currentUser: e } = this.props,
                    t = () => {
                        (0, l.openModal)((e) =>
                            (0, r.jsx)(b.default, {
                                ...e,
                                handleSubmit: (e) => c.Z.enableSMS(e),
                                title: S.intl.string(S.t.DZQe29)
                            })
                        );
                    };
                null == e.phone ? this.openPhoneVerificationModal({ onAddedPhone: t }) : t();
            });
    }
}
t.default = s.ZP.connectStores([E.default, _.Z], () => {
    let e = E.default.getCurrentUser();
    return (
        a()(null != e, 'MFAEnableSuccess: currentUser cannot be undefined'),
        {
            currentUser: e,
            backupCodes: _.Z.getBackupCodes(),
            hasSeenBackupPrompt: _.Z.hasSeenBackupPrompt
        }
    );
})(M);
