n.d(t, { Z: () => q }), n(47120);
var i = n(200651),
    s = n(192379),
    r = n(120356),
    l = n.n(r),
    a = n(512722),
    o = n.n(a),
    c = n(442837),
    d = n(780384),
    u = n(481060),
    m = n(816814),
    g = n(809206),
    h = n(497321),
    x = n(279837),
    _ = n(952306),
    p = n(600164),
    E = n(690221),
    C = n(346585),
    f = n(347649),
    T = n(332473),
    N = n(303172),
    I = n(518560),
    S = n(921801),
    b = n(484459),
    v = n(430824),
    j = n(325067),
    A = n(246946),
    O = n(663389),
    R = n(594174),
    P = n(626135),
    D = n(709054),
    y = n(706454),
    Z = n(210887),
    k = n(418632),
    L = n(10298),
    B = n(526156),
    M = n(730820),
    w = n(888256),
    V = n(2719),
    U = n(194530),
    G = n(726985),
    F = n(981631),
    H = n(801461),
    z = n(388032),
    Y = n(142529),
    W = n(232186);
class K extends s.PureComponent {
    componentDidMount() {
        let { currentUser: e } = this.props;
        (0, b.Z)(e.id, e.getAvatarURL(void 0, 80));
    }
    componentWillUnmount() {
        m.Z.clearBackupCodes(), (0, g.Zy)();
    }
    renderAccountWarning() {
        let { currentUser: e } = this.props;
        if (!e.isClaimed()) {
            let e = (0, i.jsxs)('section', {
                children: [
                    (0, i.jsx)('div', {
                        className: Y.accountWarningBodyText,
                        children: z.intl.string(z.t.qKs3vr)
                    }),
                    (0, i.jsx)(u.zxk, {
                        look: u.iLD.OUTLINED,
                        size: u.PhG.SMALL,
                        color: u.zxk.Colors.WHITE,
                        onClick: () => _.Z.openClaimAccountModal(),
                        children: z.intl.string(z.t['7psymp'])
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
                title: z.intl.string(z.t['/3qnLy']),
                body: e
            });
        }
        if (null == e.email) return null;
        if (!e.verified) {
            let e = (0, i.jsxs)('section', {
                children: [
                    (0, i.jsx)('div', {
                        className: Y.accountWarningBodyText,
                        children: z.intl.string(z.t.NAzplJ)
                    }),
                    (0, i.jsx)(k.Z, {
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
                title: z.intl.string(z.t.tuGzBQ),
                body: e
            });
        }
    }
    renderPomeloWarning() {
        return this.props.shouldRenderPomeloWarning
            ? (0, i.jsxs)(u.Wn, {
                  className: Y.accountWarningBodyText,
                  messageType: u.QYI.WARNING,
                  children: [
                      this.props.forceMigrationExperiment ? z.intl.format(z.t.zT1hgo, { date: (0, C.IE)(this.props.locale) }) : z.intl.format(z.t.pdYZys, {}),
                      ' ',
                      '',
                      (0, i.jsx)(E.Z, {
                          className: Y.noticeTextButton,
                          onClick: () => (0, N.Z)(H.Kq.USER_SETTINGS),
                          children: z.intl.string(z.t.LhlgY2)
                      })
                  ]
              })
            : null;
    }
    renderAccountSettings() {
        let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
            t = (0, i.jsxs)(i.Fragment, {
                children: [this.renderPomeloWarning(), this.renderAccountWarning(), (0, i.jsx)(V.Z, {})]
            });
        return e
            ? (0, i.jsx)(u.hjN, {
                  tag: u.RB0.H1,
                  title: z.intl.string(z.t['JAIM/v']),
                  children: t
              })
            : t;
    }
    renderSecuritySettings() {
        let { backupCodes: e, currentUser: t, theme: s } = this.props,
            r = (0, d.wj)(s) ? n(555702) : n(610802);
        return (0, i.jsxs)(u.hjN, {
            className: l()(Y.userSettingsSecurity, W.marginTop40),
            title: z.intl.string(z.t.pKSjEh),
            tag: 'h1',
            children: [
                t.mfaEnabled
                    ? (0, i.jsx)(u.hjN, {
                          children: (0, i.jsxs)(u.vwX, {
                              className: l()(Y.isEnabled, W.marginBottom20),
                              children: [
                                  (0, i.jsx)('img', {
                                      alt: '',
                                      className: l()(Y.lockIcon),
                                      src: n(511391)
                                  }),
                                  z.intl.string(z.t.FsmBy8)
                              ]
                          })
                      })
                    : null,
                (0, i.jsx)(S.F, {
                    setting: G.s6.ACCOUNT_CHANGE_PASSWORD,
                    children: (0, i.jsx)('div', {
                        children: (0, i.jsx)(u.zxk, {
                            size: u.zxk.Sizes.SMALL,
                            className: Y.changePasswordButton,
                            onClick: () =>
                                (0, u.h7j)((e) =>
                                    (0, i.jsx)(U.default, {
                                        ...e,
                                        onSuccess: e.onClose
                                    })
                                ),
                            children: z.intl.string(z.t['FRep5+'])
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
                                          src: r,
                                          className: Y.userSettingsSecurityImage,
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
                header: z.intl.string(z.t.I5UrbW),
                confirmText: z.intl.string(z.t.BddRzc),
                confirmButtonColor: u.Ttl.BRAND,
                onCancel: e,
                onConfirm: e,
                children: (0, i.jsx)(u.Text, {
                    variant: 'text-md/normal',
                    children: z.intl.string(z.t.UyVVam)
                })
            });
        }
        if (t) {
            let e = () => this.setState({ shouldRenderDeleteAccountConfirmModal: !1 });
            return (0, i.jsx)(u.sYh, {
                dismissable: !0,
                header: z.intl.string(z.t['8lQ2ra']),
                confirmText: z.intl.string(z.t['8lQ2ra']),
                cancelText: z.intl.string(z.t['ETE/oK']),
                onCancel: e,
                onConfirm: () => (0, g.ss)('', !0).then(e),
                children: (0, i.jsx)(u.Text, {
                    variant: 'text-md/normal',
                    children: z.intl.string(z.t.FB4H1N)
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
                header: z.intl.string(z.t.LX0nT0),
                confirmText: z.intl.string(z.t.BddRzc),
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
        return (0, i.jsx)(w.Z, {
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
        return (0, i.jsx)(L.N, {
            header: z.intl.string(z.t['JAIM/v']),
            children: (0, i.jsx)(B.Z, {
                parentSetting: G.s6.ACCOUNT,
                settingsSection: F.oAB.ACCOUNT,
                panelClassName: Y.tabPanel,
                onTabChange: (e) => {
                    P.default.track(F.rMx.MY_ACCOUNT_PAGE_TAB_NAVIGATE, { target_tab_name: e === G.s6.ACCOUNT_SECURITY_TAB ? 'SECURITY' : 'STANDING' });
                },
                defaultTabIndex: 'ACCOUNT_STANDING' === e ? 1 : void 0,
                tabs: [
                    {
                        title: z.intl.string(z.t.Am9YHh),
                        component: () => this.renderSecuritySettingsRedesign(),
                        setting: G.s6.ACCOUNT_SECURITY_TAB
                    },
                    {
                        title: z.intl.string(z.t['Vov/9v']),
                        component: I.Z,
                        setting: G.s6.PRIVACY_AND_SAFETY_STANDING
                    }
                ]
            })
        });
    }
    render() {
        return this.props.hide ? (0, i.jsx)(h.Z, {}) : this.renderUnhidden();
    }
    handleDisableAccountError(e) {
        if (e.body.code === F.evJ.INVALID_PASSWORD) throw e;
        this.setState({
            shouldRenderDisableAccountErrorModal: !0,
            disableAccountErrorMessage: e.body.message
        });
    }
    handleSubmitDisableAccount(e, t) {
        return (0, g.ss)(e, t).then(F.dG4, this.handleDisableAccountError);
    }
    handleDisableAccount() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            { currentUser: t } = this.props,
            n = v.Z.getGuilds();
        if (D.default.keys(n).filter((e) => n[e].ownerId === t.id).length > 0) {
            this.setState({ shouldRenderOwnedGuildsModal: !0 });
            return;
        }
        t.isClaimed()
            ? (0, u.h7j)((t) =>
                  (0, i.jsx)(x.default, {
                      ...t,
                      handleSubmit: (t) => this.handleSubmitDisableAccount(t, e),
                      title: e ? z.intl.string(z.t['8lQ2ra']) : z.intl.string(z.t.jf5GGR),
                      actionText: e ? z.intl.string(z.t['8lQ2ra']) : z.intl.string(z.t.jf5GGR),
                      children: e ? z.intl.string(z.t.FB4H1N) : z.intl.string(z.t.gk7h39)
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
let q = () => {
    let e = (0, c.e7)([R.default], () => {
            let e = R.default.getCurrentUser();
            return o()(null != e, 'ConnectedUserAccountSettings: currentUser cannot be undefined'), e;
        }),
        t = (0, c.e7)([j.Z], () => j.Z.getBackupCodes()),
        n = (0, c.e7)([A.Z], () => A.Z.hidePersonalInformation),
        s = (0, c.e7)([Z.Z], () => Z.Z.theme),
        r = (0, T.b)(),
        l = (0, f.CC)(),
        a = (0, c.e7)([y.default], () => y.default.locale),
        d = (0, c.e7)([O.Z], () => O.Z.getSubsection());
    return (0, i.jsx)(K, {
        theme: s,
        currentUser: e,
        backupCodes: t,
        hide: n,
        shouldRenderPomeloWarning: r,
        forceMigrationExperiment: l,
        locale: a,
        subsection: d
    });
};
