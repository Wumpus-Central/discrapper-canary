n(47120);
var i = n(200651),
    r = n(192379),
    s = n(120356),
    a = n.n(s),
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
    O = n(663389),
    R = n(594174),
    P = n(626135),
    y = n(709054),
    B = n(706454),
    D = n(210887),
    Z = n(418632),
    L = n(10298),
    M = n(526156),
    k = n(730820),
    w = n(888256),
    F = n(2719),
    U = n(194530),
    V = n(726985),
    G = n(981631),
    H = n(801461),
    Y = n(388032),
    W = n(478717),
    z = n(275477);
class K extends r.PureComponent {
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
                        className: W.accountWarningBodyText,
                        children: Y.intl.string(Y.t.qKs3vr)
                    }),
                    (0, i.jsx)(u.Button, {
                        look: u.ButtonLooks.OUTLINED,
                        size: u.ButtonSizes.SMALL,
                        color: u.Button.Colors.WHITE,
                        onClick: () => x.Z.openClaimAccountModal(),
                        children: Y.intl.string(Y.t['7psymp'])
                    })
                ]
            });
            return (0, i.jsx)(u.FormNotice, {
                type: u.FormNotice.Types.DANGER,
                className: z.marginBottom20,
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
                        className: W.accountWarningBodyText,
                        children: Y.intl.string(Y.t.NAzplJ)
                    }),
                    (0, i.jsx)(Z.Z, {
                        size: u.ButtonSizes.SMALL,
                        color: u.Button.Colors.PRIMARY
                    })
                ]
            });
            return (0, i.jsx)(u.FormNotice, {
                type: u.FormNotice.Types.PRIMARY,
                className: z.marginBottom20,
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
            ? (0, i.jsxs)(u.HelpMessage, {
                  className: W.accountWarningBodyText,
                  messageType: u.HelpMessageTypes.WARNING,
                  children: [
                      this.props.forceMigrationExperiment ? Y.intl.format(Y.t.zT1hgo, { date: (0, E.IE)(this.props.locale) }) : Y.intl.format(Y.t.pdYZys, {}),
                      ' ',
                      '',
                      (0, i.jsx)(_.Z, {
                          className: W.noticeTextButton,
                          onClick: () => (0, S.Z)(H.Kq.USER_SETTINGS),
                          children: Y.intl.string(Y.t.LhlgY2)
                      })
                  ]
              })
            : null;
    }
    renderAccountSettings() {
        let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
            t = (0, i.jsxs)(i.Fragment, {
                children: [this.renderPomeloWarning(), this.renderAccountWarning(), (0, i.jsx)(F.Z, {})]
            });
        return e
            ? (0, i.jsx)(u.FormSection, {
                  tag: u.FormTitleTags.H1,
                  title: Y.intl.string(Y.t['JAIM/v']),
                  children: t
              })
            : t;
    }
    renderSecuritySettings() {
        let { backupCodes: e, currentUser: t, theme: r } = this.props,
            s = (0, d.wj)(r) ? n(555702) : n(610802);
        return (0, i.jsxs)(u.FormSection, {
            className: a()(W.userSettingsSecurity, z.marginTop40),
            title: Y.intl.string(Y.t.pKSjEh),
            tag: 'h1',
            children: [
                t.mfaEnabled
                    ? (0, i.jsx)(u.FormSection, {
                          children: (0, i.jsxs)(u.FormTitle, {
                              className: a()(W.isEnabled, z.marginBottom20),
                              children: [
                                  (0, i.jsx)('img', {
                                      alt: '',
                                      className: a()(W.lockIcon),
                                      src: n(511391)
                                  }),
                                  Y.intl.string(Y.t.FsmBy8)
                              ]
                          })
                      })
                    : null,
                (0, i.jsx)(I.F, {
                    setting: V.s6.ACCOUNT_CHANGE_PASSWORD,
                    children: (0, i.jsx)('div', {
                        children: (0, i.jsx)(u.Button, {
                            size: u.Button.Sizes.SMALL,
                            className: W.changePasswordButton,
                            onClick: () =>
                                (0, u.openModal)((e) =>
                                    (0, i.jsx)(U.default, {
                                        ...e,
                                        onSuccess: e.onClose
                                    })
                                ),
                            children: Y.intl.string(Y.t['FRep5+'])
                        })
                    })
                }),
                (0, i.jsx)(I.F, {
                    setting: V.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION,
                    children: (0, i.jsxs)(f.Z, {
                        align: f.Z.Align.STRETCH,
                        children: [
                            (0, i.jsx)(f.Z.Child, {
                                wrap: !0,
                                children: (0, i.jsx)(k.Z, { backupCodes: e })
                            }),
                            t.mfaEnabled
                                ? null
                                : (0, i.jsx)(f.Z, {
                                      align: f.Z.Align.CENTER,
                                      basis: '323px',
                                      grow: 0,
                                      children: (0, i.jsx)('img', {
                                          src: s,
                                          className: W.userSettingsSecurityImage,
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
        let { shouldRenderOwnedGuildsModal: e, shouldRenderDeleteAccountConfirmModal: t, shouldRenderDisableAccountErrorModal: n, disableAccountErrorMessage: r } = this.state;
        if (e) {
            let e = () => this.setState({ shouldRenderOwnedGuildsModal: !1 });
            return (0, i.jsx)(u.DeclarativeConfirmModal, {
                dismissable: !0,
                header: Y.intl.string(Y.t.I5UrbW),
                confirmText: Y.intl.string(Y.t.BddRzc),
                confirmButtonColor: u.ButtonColors.BRAND,
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
            return (0, i.jsx)(u.DeclarativeConfirmModal, {
                dismissable: !0,
                header: Y.intl.string(Y.t['8lQ2ra']),
                confirmText: Y.intl.string(Y.t['8lQ2ra']),
                cancelText: Y.intl.string(Y.t['ETE/oK']),
                onCancel: e,
                onConfirm: () => (0, g.ss)('', !0).then(e),
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
            return (0, i.jsx)(u.DeclarativeConfirmModal, {
                dismissable: !0,
                header: Y.intl.string(Y.t.LX0nT0),
                confirmText: Y.intl.string(Y.t.BddRzc),
                confirmButtonColor: u.ButtonColors.BRAND,
                onCancel: e,
                onConfirm: e,
                children: (0, i.jsx)(u.Text, {
                    variant: 'text-md/normal',
                    children: r
                })
            });
        }
        return null;
    }
    renderAccountRemovalSettings() {
        let { currentUser: e } = this.props;
        return (0, i.jsx)(w.Z, {
            className: z.marginTop40,
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
                    setting: V.s6.ACCOUNT_PROFILE,
                    children: this.renderAccountSettings(!1)
                }),
                (0, i.jsx)(I.F, {
                    setting: V.s6.ACCOUNT_PASSWORD_AND_AUTHENTICATION,
                    children: this.renderSecuritySettings()
                }),
                (0, i.jsx)(I.F, {
                    setting: V.s6.ACCOUNT_REMOVAL,
                    children: this.renderAccountRemovalSettings()
                })
            ]
        });
    }
    renderUnhidden() {
        let { subsection: e } = this.props;
        return (0, i.jsx)(L.N, {
            header: Y.intl.string(Y.t['JAIM/v']),
            children: (0, i.jsx)(M.Z, {
                parentSetting: V.s6.ACCOUNT,
                settingsSection: G.oAB.ACCOUNT,
                panelClassName: W.tabPanel,
                onTabChange: (e) => {
                    P.default.track(G.rMx.MY_ACCOUNT_PAGE_TAB_NAVIGATE, { target_tab_name: e === V.s6.ACCOUNT_SECURITY_TAB ? 'SECURITY' : 'STANDING' });
                },
                defaultTabIndex: 'ACCOUNT_STANDING' === e ? 1 : void 0,
                tabs: [
                    {
                        title: Y.intl.string(Y.t.Am9YHh),
                        component: () => this.renderSecuritySettingsRedesign(),
                        setting: V.s6.ACCOUNT_SECURITY_TAB
                    },
                    {
                        title: Y.intl.string(Y.t['Vov/9v']),
                        component: b.Z,
                        setting: V.s6.PRIVACY_AND_SAFETY_STANDING
                    }
                ]
            })
        });
    }
    render() {
        return this.props.hide ? (0, i.jsx)(h.Z, {}) : this.renderUnhidden();
    }
    handleDisableAccountError(e) {
        if (e.body.code === G.evJ.INVALID_PASSWORD) throw e;
        this.setState({
            shouldRenderDisableAccountErrorModal: !0,
            disableAccountErrorMessage: e.body.message
        });
    }
    handleSubmitDisableAccount(e, t) {
        return (0, g.ss)(e, t).then(G.dG4, this.handleDisableAccountError);
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
t.Z = () => {
    let e = (0, c.e7)([R.default], () => {
            let e = R.default.getCurrentUser();
            return o()(null != e, 'ConnectedUserAccountSettings: currentUser cannot be undefined'), e;
        }),
        t = (0, c.e7)([A.Z], () => A.Z.getBackupCodes()),
        n = (0, c.e7)([j.Z], () => j.Z.hidePersonalInformation),
        r = (0, c.e7)([D.Z], () => D.Z.theme),
        s = (0, T.b)(),
        a = (0, C.CC)(),
        l = (0, c.e7)([B.default], () => B.default.locale),
        d = (0, c.e7)([O.Z], () => O.Z.getSubsection());
    return (0, i.jsx)(K, {
        theme: r,
        currentUser: e,
        backupCodes: t,
        hide: n,
        shouldRenderPomeloWarning: s,
        forceMigrationExperiment: a,
        locale: l,
        subsection: d
    });
};
