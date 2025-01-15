n(47120);
var i = n(200651),
    s = n(192379),
    r = n(120356),
    a = n.n(r),
    l = n(512722),
    o = n.n(l),
    c = n(442837),
    d = n(780384),
    u = n(481060),
    m = n(816814),
    g = n(809206),
    h = n(497321),
    p = n(279837),
    x = n(952306),
    f = n(600164),
    _ = n(690221),
    E = n(346585),
    C = n(347649),
    T = n(332473),
    S = n(303172),
    b = n(518560),
    I = n(921801),
    N = n(484459),
    v = n(430824),
    A = n(325067),
    j = n(246946),
    R = n(663389),
    O = n(594174),
    P = n(626135),
    y = n(709054),
    D = n(706454),
    B = n(187819),
    Z = n(210887),
    L = n(418632),
    M = n(10298),
    k = n(526156),
    w = n(730820),
    F = n(888256),
    U = n(2719),
    V = n(194530),
    G = n(273927),
    H = n(726985),
    Y = n(981631),
    W = n(801461),
    z = n(388032),
    K = n(142529),
    q = n(232186);
class Q extends s.PureComponent {
    componentDidMount() {
        let { currentUser: e } = this.props;
        (0, N.Z)(e.id, e.getAvatarURL(void 0, 80));
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
                        className: K.accountWarningBodyText,
                        children: z.intl.string(z.t.qKs3vr)
                    }),
                    (0, i.jsx)(u.Button, {
                        look: u.ButtonLooks.OUTLINED,
                        size: u.ButtonSizes.SMALL,
                        color: u.Button.Colors.WHITE,
                        onClick: () => x.Z.openClaimAccountModal(),
                        children: z.intl.string(z.t['7psymp'])
                    })
                ]
            });
            return (0, i.jsx)(u.FormNotice, {
                type: u.FormNotice.Types.DANGER,
                className: q.marginBottom20,
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
                        className: K.accountWarningBodyText,
                        children: z.intl.string(z.t.NAzplJ)
                    }),
                    (0, i.jsx)(L.Z, {
                        size: u.ButtonSizes.SMALL,
                        color: u.Button.Colors.PRIMARY
                    })
                ]
            });
            return (0, i.jsx)(u.FormNotice, {
                type: u.FormNotice.Types.PRIMARY,
                className: q.marginBottom20,
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
            ? (0, i.jsxs)(u.HelpMessage, {
                  className: K.accountWarningBodyText,
                  messageType: u.HelpMessageTypes.WARNING,
                  children: [
                      this.props.forceMigrationExperiment ? z.intl.format(z.t.zT1hgo, { date: (0, E.IE)(this.props.locale) }) : z.intl.format(z.t.pdYZys, {}),
                      ' ',
                      '',
                      (0, i.jsx)(_.Z, {
                          className: K.noticeTextButton,
                          onClick: () => (0, S.Z)(W.Kq.USER_SETTINGS),
                          children: z.intl.string(z.t.LhlgY2)
                      })
                  ]
              })
            : null;
    }
    renderAccountSettings() {
        let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
            t = (0, i.jsxs)(i.Fragment, {
                children: [this.renderPomeloWarning(), this.renderAccountWarning(), (0, i.jsx)(U.Z, {})]
            });
        return e
            ? (0, i.jsx)(u.FormSection, {
                  tag: u.FormTitleTags.H1,
                  title: z.intl.string(z.t['JAIM/v']),
                  children: t
              })
            : t;
    }
    renderSecuritySettings() {
        let { backupCodes: e, currentUser: t, theme: s } = this.props,
            r = (0, d.wj)(s) ? n(555702) : n(610802);
        return (0, i.jsxs)(u.FormSection, {
            className: a()(K.userSettingsSecurity, q.marginTop40),
            title: z.intl.string(z.t.pKSjEh),
            tag: 'h1',
            children: [
                t.mfaEnabled
                    ? (0, i.jsx)(u.FormSection, {
                          children: (0, i.jsxs)(u.FormTitle, {
                              className: a()(K.isEnabled, q.marginBottom20),
                              children: [
                                  (0, i.jsx)('img', {
                                      alt: '',
                                      className: a()(K.lockIcon),
                                      src: n(511391)
                                  }),
                                  z.intl.string(z.t.FsmBy8)
                              ]
                          })
                      })
                    : null,
                (0, i.jsx)(I.F, {
                    setting: H.s6.ACCOUNT_CHANGE_PASSWORD,
                    children: (0, i.jsx)('div', {
                        children: (0, i.jsx)(u.Button, {
                            size: u.Button.Sizes.SMALL,
                            className: K.changePasswordButton,
                            onClick: () =>
                                (0, u.openModal)((e) =>
                                    (0, i.jsx)(V.default, {
                                        ...e,
                                        onSuccess: e.onClose
                                    })
                                ),
                            children: z.intl.string(z.t['FRep5+'])
                        })
                    })
                }),
                (0, i.jsx)(I.F, {
                    setting: H.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION,
                    children: (0, i.jsxs)(f.Z, {
                        align: f.Z.Align.STRETCH,
                        children: [
                            (0, i.jsx)(f.Z.Child, {
                                wrap: !0,
                                children: (0, i.jsx)(w.Z, { backupCodes: e })
                            }),
                            t.mfaEnabled
                                ? null
                                : (0, i.jsx)(f.Z, {
                                      align: f.Z.Align.CENTER,
                                      basis: '323px',
                                      grow: 0,
                                      children: (0, i.jsx)('img', {
                                          src: r,
                                          className: K.userSettingsSecurityImage,
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
            return (0, i.jsx)(u.DeclarativeConfirmModal, {
                dismissable: !0,
                header: z.intl.string(z.t.I5UrbW),
                confirmText: z.intl.string(z.t.BddRzc),
                confirmButtonColor: u.ButtonColors.BRAND,
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
            return (0, i.jsx)(u.DeclarativeConfirmModal, {
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
            return (0, i.jsx)(u.DeclarativeConfirmModal, {
                dismissable: !0,
                header: z.intl.string(z.t.LX0nT0),
                confirmText: z.intl.string(z.t.BddRzc),
                confirmButtonColor: u.ButtonColors.BRAND,
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
        return (0, i.jsx)(F.Z, {
            className: q.marginTop40,
            currentUser: e,
            handleDisableAccount: () => this.handleDisableAccount(!1),
            handleDeleteAccount: () => this.handleDisableAccount(!0)
        });
    }
    renderSecuritySettingsRedesign() {
        return (0, i.jsxs)(i.Fragment, {
            children: [
                this.renderConfirmModals(),
                (0, i.jsx)(I.F, {
                    setting: H.s6.ACCOUNT_PROFILE,
                    children: this.renderAccountSettings(!1)
                }),
                (0, i.jsx)(I.F, {
                    setting: H.s6.ACCOUNT_PASSWORD_AND_AUTHENTICATION,
                    children: this.renderSecuritySettings()
                }),
                (0, i.jsx)(I.F, {
                    setting: H.s6.ACCOUNT_REMOVAL,
                    children: this.renderAccountRemovalSettings()
                })
            ]
        });
    }
    renderSafetySettingsRedesignV2() {
        let { subsection: e } = this.props;
        return (0, i.jsx)(M.N, {
            header: z.intl.string(z.t['JAIM/v']),
            children: (0, i.jsx)(k.Z, {
                parentSetting: H.s6.ACCOUNT,
                settingsSection: Y.oAB.ACCOUNT,
                panelClassName: K.tabPanel,
                onTabChange: (e) => {
                    P.default.track(Y.rMx.MY_ACCOUNT_PAGE_TAB_NAVIGATE, { target_tab_name: e === H.s6.ACCOUNT_SECURITY_TAB ? 'SECURITY' : 'STANDING' });
                },
                defaultTabIndex: 'ACCOUNT_STANDING' === e ? 1 : void 0,
                tabs: [
                    {
                        title: z.intl.string(z.t.Am9YHh),
                        component: () => this.renderSecuritySettingsRedesign(),
                        setting: H.s6.ACCOUNT_SECURITY_TAB
                    },
                    {
                        title: z.intl.string(z.t['Vov/9v']),
                        component: b.Z,
                        setting: H.s6.PRIVACY_AND_SAFETY_STANDING
                    }
                ]
            })
        });
    }
    render() {
        return this.props.hide
            ? (0, i.jsx)(h.Z, {})
            : this.props.isEligibleForSafetySettingsRedesign
              ? this.renderSafetySettingsRedesignV2()
              : (0, i.jsxs)('div', {
                    children: [
                        this.renderConfirmModals(),
                        (0, i.jsx)(I.F, {
                            setting: H.s6.ACCOUNT_PROFILE,
                            children: this.renderAccountSettings()
                        }),
                        (0, i.jsx)(I.F, {
                            setting: H.s6.ACCOUNT_PASSWORD_AND_AUTHENTICATION,
                            children: this.renderSecuritySettings()
                        }),
                        (0, i.jsx)('div', {
                            className: q.marginTop40,
                            children: (0, i.jsx)(G.ZP, {})
                        }),
                        (0, i.jsx)(I.F, {
                            setting: H.s6.ACCOUNT_REMOVAL,
                            children: this.renderAccountRemovalSettings()
                        })
                    ]
                });
    }
    handleDisableAccountError(e) {
        if (e.body.code === Y.evJ.INVALID_PASSWORD) throw e;
        this.setState({
            shouldRenderDisableAccountErrorModal: !0,
            disableAccountErrorMessage: e.body.message
        });
    }
    handleSubmitDisableAccount(e, t) {
        return (0, g.ss)(e, t).then(Y.dG4, this.handleDisableAccountError);
    }
    handleDisableAccount() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            { currentUser: t } = this.props,
            n = v.Z.getGuilds();
        if (y.default.keys(n).filter((e) => n[e].ownerId === t.id).length > 0) {
            this.setState({ shouldRenderOwnedGuildsModal: !0 });
            return;
        }
        t.isClaimed()
            ? (0, u.openModal)((t) =>
                  (0, i.jsx)(p.default, {
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
t.Z = () => {
    let e = (0, c.e7)([O.default], () => {
            let e = O.default.getCurrentUser();
            return o()(null != e, 'ConnectedUserAccountSettings: currentUser cannot be undefined'), e;
        }),
        t = (0, c.e7)([A.Z], () => A.Z.getBackupCodes()),
        n = (0, c.e7)([j.Z], () => j.Z.hidePersonalInformation),
        s = (0, c.e7)([Z.Z], () => Z.Z.theme),
        r = (0, T.b)(),
        a = (0, C.CC)(),
        l = (0, c.e7)([D.default], () => D.default.locale),
        d = (0, B._p)({ location: 'UserSettingsAccount' }),
        u = (0, c.e7)([R.Z], () => R.Z.getSubsection());
    return (0, i.jsx)(Q, {
        theme: s,
        currentUser: e,
        backupCodes: t,
        hide: n,
        shouldRenderPomeloWarning: r,
        forceMigrationExperiment: a,
        locale: l,
        isEligibleForSafetySettingsRedesign: d,
        subsection: u
    });
};
