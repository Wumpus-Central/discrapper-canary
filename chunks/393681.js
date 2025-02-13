n.d(t, { Z: () => X }), n(47120);
var i = n(200651),
    s = n(192379),
    l = n(120356),
    r = n.n(l),
    a = n(512722),
    o = n.n(a),
    c = n(442837),
    d = n(780384),
    u = n(481060),
    h = n(816814),
    m = n(809206),
    g = n(497321),
    x = n(279837),
    _ = n(952306),
    p = n(600164),
    E = n(690221),
    C = n(346585),
    N = n(347649),
    f = n(332473),
    I = n(303172),
    T = n(518560),
    S = n(921801),
    j = n(484459),
    v = n(430824),
    b = n(325067),
    A = n(246946),
    O = n(663389),
    R = n(594174),
    D = n(626135),
    P = n(709054),
    y = n(706454),
    Z = n(210887),
    L = n(418632),
    k = n(10298),
    B = n(526156),
    M = n(730820),
    V = n(888256),
    w = n(2719),
    U = n(194530),
    G = n(726985),
    F = n(981631),
    z = n(801461),
    Y = n(388032),
    H = n(415473),
    W = n(483938);
class K extends s.PureComponent {
    componentDidMount() {
        let { currentUser: e } = this.props;
        (0, j.Z)(e.id, e.getAvatarURL(void 0, 80));
    }
    componentWillUnmount() {
        h.Z.clearBackupCodes(), (0, m.Zy)();
    }
    renderAccountWarning() {
        let { currentUser: e } = this.props;
        if (!e.isClaimed()) {
            let e = (0, i.jsxs)('section', {
                children: [
                    (0, i.jsx)('div', {
                        className: H.accountWarningBodyText,
                        children: Y.intl.string(Y.t.qKs3vr)
                    }),
                    (0, i.jsx)(u.zxk, {
                        look: u.iLD.OUTLINED,
                        size: u.PhG.SMALL,
                        color: u.zxk.Colors.WHITE,
                        onClick: () => _.Z.openClaimAccountModal(),
                        children: Y.intl.string(Y.t['7psymp'])
                    })
                ]
            });
            return (0, i.jsx)(u.ToO, {
                type: u.ToO.Types.DANGER,
                className: W.marginBottom20,
                imageData: {
                    src: n(418558),
                    width: 60,
                    height: 60
                },
                title: Y.intl.string(Y.t['/3qnLy']),
                body: e
            });
        }
        if (null == e.email) return null;
        if (!e.verified) {
            let e = (0, i.jsxs)('section', {
                children: [
                    (0, i.jsx)('div', {
                        className: H.accountWarningBodyText,
                        children: Y.intl.string(Y.t.NAzplJ)
                    }),
                    (0, i.jsx)(L.Z, {
                        size: u.PhG.SMALL,
                        color: u.zxk.Colors.PRIMARY
                    })
                ]
            });
            return (0, i.jsx)(u.ToO, {
                type: u.ToO.Types.PRIMARY,
                className: W.marginBottom20,
                imageData: {
                    src: n(449125),
                    width: 60,
                    height: 60
                },
                title: Y.intl.string(Y.t.tuGzBQ),
                body: e
            });
        }
    }
    renderPomeloWarning() {
        return this.props.shouldRenderPomeloWarning
            ? (0, i.jsxs)(u.Wn, {
                  className: H.accountWarningBodyText,
                  messageType: u.QYI.WARNING,
                  children: [
                      this.props.forceMigrationExperiment ? Y.intl.format(Y.t.zT1hgo, { date: (0, C.IE)(this.props.locale) }) : Y.intl.format(Y.t.pdYZys, {}),
                      ' ',
                      '',
                      (0, i.jsx)(E.Z, {
                          className: H.noticeTextButton,
                          onClick: () => (0, I.Z)(z.Kq.USER_SETTINGS),
                          children: Y.intl.string(Y.t.LhlgY2)
                      })
                  ]
              })
            : null;
    }
    renderAccountSettings() {
        let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
            t = (0, i.jsxs)(i.Fragment, {
                children: [this.renderPomeloWarning(), this.renderAccountWarning(), (0, i.jsx)(w.Z, {})]
            });
        return e
            ? (0, i.jsx)(u.hjN, {
                  tag: u.RB0.H1,
                  title: Y.intl.string(Y.t['JAIM/v']),
                  children: t
              })
            : t;
    }
    renderSecuritySettings() {
        let { backupCodes: e, currentUser: t, theme: s } = this.props,
            l = (0, d.wj)(s) ? n(555702) : n(610802);
        return (0, i.jsxs)(u.hjN, {
            className: r()(H.userSettingsSecurity, W.marginTop40),
            title: Y.intl.string(Y.t.pKSjEh),
            tag: 'h1',
            children: [
                t.mfaEnabled
                    ? (0, i.jsx)(u.hjN, {
                          children: (0, i.jsxs)(u.vwX, {
                              className: r()(H.isEnabled, W.marginBottom20),
                              children: [
                                  (0, i.jsx)('img', {
                                      alt: '',
                                      className: r()(H.lockIcon),
                                      src: n(511391)
                                  }),
                                  Y.intl.string(Y.t.FsmBy8)
                              ]
                          })
                      })
                    : null,
                (0, i.jsx)(S.F, {
                    setting: G.s6.ACCOUNT_CHANGE_PASSWORD,
                    children: (0, i.jsx)('div', {
                        children: (0, i.jsx)(u.zxk, {
                            size: u.zxk.Sizes.SMALL,
                            className: H.changePasswordButton,
                            onClick: () =>
                                (0, u.h7j)((e) =>
                                    (0, i.jsx)(U.default, {
                                        ...e,
                                        onSuccess: e.onClose
                                    })
                                ),
                            children: Y.intl.string(Y.t['FRep5+'])
                        })
                    })
                }),
                (0, i.jsx)(S.F, {
                    setting: G.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION,
                    children: (0, i.jsxs)(p.Z, {
                        align: p.Z.Align.STRETCH,
                        children: [
                            (0, i.jsx)(p.Z.Child, {
                                wrap: !0,
                                children: (0, i.jsx)(M.Z, { backupCodes: e })
                            }),
                            t.mfaEnabled
                                ? null
                                : (0, i.jsx)(p.Z, {
                                      align: p.Z.Align.CENTER,
                                      basis: '323px',
                                      grow: 0,
                                      children: (0, i.jsx)('img', {
                                          src: l,
                                          className: H.userSettingsSecurityImage,
                                          alt: ''
                                      })
                                  })
                        ]
                    })
                })
            ]
        });
    }
    renderConfirmModals() {
        let { shouldRenderOwnedGuildsModal: e, shouldRenderDeleteAccountConfirmModal: t, shouldRenderDisableAccountErrorModal: n, disableAccountErrorMessage: s } = this.state;
        if (e) {
            let e = () => this.setState({ shouldRenderOwnedGuildsModal: !1 });
            return (0, i.jsx)(u.sYh, {
                dismissable: !0,
                header: Y.intl.string(Y.t.I5UrbW),
                confirmText: Y.intl.string(Y.t.BddRzc),
                confirmButtonColor: u.Ttl.BRAND,
                onCancel: e,
                onConfirm: e,
                children: (0, i.jsx)(u.Text, {
                    variant: 'text-md/normal',
                    children: Y.intl.string(Y.t.UyVVam)
                })
            });
        }
        if (t) {
            let e = () => this.setState({ shouldRenderDeleteAccountConfirmModal: !1 });
            return (0, i.jsx)(u.sYh, {
                dismissable: !0,
                header: Y.intl.string(Y.t['8lQ2ra']),
                confirmText: Y.intl.string(Y.t['8lQ2ra']),
                cancelText: Y.intl.string(Y.t['ETE/oK']),
                onCancel: e,
                onConfirm: () => (0, m.ss)('', !0).then(e),
                children: (0, i.jsx)(u.Text, {
                    variant: 'text-md/normal',
                    children: Y.intl.string(Y.t.FB4H1N)
                })
            });
        }
        if (n) {
            let e = () =>
                this.setState({
                    shouldRenderDisableAccountErrorModal: !1,
                    disableAccountErrorMessage: null
                });
            return (0, i.jsx)(u.sYh, {
                dismissable: !0,
                header: Y.intl.string(Y.t.LX0nT0),
                confirmText: Y.intl.string(Y.t.BddRzc),
                confirmButtonColor: u.Ttl.BRAND,
                onCancel: e,
                onConfirm: e,
                children: (0, i.jsx)(u.Text, {
                    variant: 'text-md/normal',
                    children: s
                })
            });
        }
        return null;
    }
    renderAccountRemovalSettings() {
        let { currentUser: e } = this.props;
        return (0, i.jsx)(V.Z, {
            className: W.marginTop40,
            currentUser: e,
            handleDisableAccount: () => this.handleDisableAccount(!1),
            handleDeleteAccount: () => this.handleDisableAccount(!0)
        });
    }
    renderSecuritySettingsRedesign() {
        return (0, i.jsxs)(i.Fragment, {
            children: [
                this.renderConfirmModals(),
                (0, i.jsx)(S.F, {
                    setting: G.s6.ACCOUNT_PROFILE,
                    children: this.renderAccountSettings(!1)
                }),
                (0, i.jsx)(S.F, {
                    setting: G.s6.ACCOUNT_PASSWORD_AND_AUTHENTICATION,
                    children: this.renderSecuritySettings()
                }),
                (0, i.jsx)(S.F, {
                    setting: G.s6.ACCOUNT_REMOVAL,
                    children: this.renderAccountRemovalSettings()
                })
            ]
        });
    }
    renderUnhidden() {
        let { subsection: e } = this.props;
        return (0, i.jsx)(k.N, {
            header: Y.intl.string(Y.t['JAIM/v']),
            children: (0, i.jsx)(B.Z, {
                parentSetting: G.s6.ACCOUNT,
                settingsSection: F.oAB.ACCOUNT,
                panelClassName: H.tabPanel,
                onTabChange: (e) => {
                    D.default.track(F.rMx.MY_ACCOUNT_PAGE_TAB_NAVIGATE, { target_tab_name: e === G.s6.ACCOUNT_SECURITY_TAB ? 'SECURITY' : 'STANDING' });
                },
                defaultTabIndex: 'ACCOUNT_STANDING' === e ? 1 : void 0,
                tabs: [
                    {
                        title: Y.intl.string(Y.t.Am9YHh),
                        component: () => this.renderSecuritySettingsRedesign(),
                        setting: G.s6.ACCOUNT_SECURITY_TAB
                    },
                    {
                        title: Y.intl.string(Y.t['Vov/9v']),
                        component: T.Z,
                        setting: G.s6.PRIVACY_AND_SAFETY_STANDING
                    }
                ]
            })
        });
    }
    render() {
        return this.props.hide ? (0, i.jsx)(g.Z, {}) : this.renderUnhidden();
    }
    handleDisableAccountError(e) {
        if (e.body.code === F.evJ.INVALID_PASSWORD) throw e;
        this.setState({
            shouldRenderDisableAccountErrorModal: !0,
            disableAccountErrorMessage: e.body.message
        });
    }
    handleSubmitDisableAccount(e, t) {
        return (0, m.ss)(e, t).then(F.dG4, this.handleDisableAccountError);
    }
    handleDisableAccount() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            { currentUser: t } = this.props,
            n = v.Z.getGuilds();
        if (P.default.keys(n).filter((e) => n[e].ownerId === t.id).length > 0) {
            this.setState({ shouldRenderOwnedGuildsModal: !0 });
            return;
        }
        t.isClaimed()
            ? (0, u.h7j)((t) =>
                  (0, i.jsx)(x.default, {
                      ...t,
                      handleSubmit: (t) => this.handleSubmitDisableAccount(t, e),
                      title: e ? Y.intl.string(Y.t['8lQ2ra']) : Y.intl.string(Y.t.jf5GGR),
                      actionText: e ? Y.intl.string(Y.t['8lQ2ra']) : Y.intl.string(Y.t.jf5GGR),
                      children: e ? Y.intl.string(Y.t.FB4H1N) : Y.intl.string(Y.t.gk7h39)
                  })
              )
            : this.setState({ shouldRenderDeleteAccountConfirmModal: !0 });
    }
    constructor(e) {
        super(e),
            (this.state = {
                disableAccountErrorMessage: null,
                shouldRenderOwnedGuildsModal: !1,
                shouldRenderDeleteAccountConfirmModal: !1,
                shouldRenderDisableAccountErrorModal: !1
            });
    }
}
let X = () => {
    let e = (0, c.e7)([R.default], () => {
            let e = R.default.getCurrentUser();
            return o()(null != e, 'ConnectedUserAccountSettings: currentUser cannot be undefined'), e;
        }),
        t = (0, c.e7)([b.Z], () => b.Z.getBackupCodes()),
        n = (0, c.e7)([A.Z], () => A.Z.hidePersonalInformation),
        s = (0, c.e7)([Z.Z], () => Z.Z.theme),
        l = (0, f.b)(),
        r = (0, N.CC)(),
        a = (0, c.e7)([y.default], () => y.default.locale),
        d = (0, c.e7)([O.Z], () => O.Z.getSubsection());
    return (0, i.jsx)(K, {
        theme: s,
        currentUser: e,
        backupCodes: t,
        hide: n,
        shouldRenderPomeloWarning: l,
        forceMigrationExperiment: r,
        locale: a,
        subsection: d
    });
};
