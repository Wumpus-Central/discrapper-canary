n.d(t, { Z: () => q });
var i = n(255367),
    r = n(73800),
    s = n(120356),
    l = n.n(s),
    a = n(512722),
    o = n.n(a),
    c = n(442837),
    d = n(780384),
    u = n(481060),
    m = n(816814),
    g = n(809206),
    p = n(497321),
    h = n(279837),
    f = n(952306),
    b = n(600164),
    x = n(690221),
    _ = n(332473),
    E = n(303172),
    j = n(518560),
    C = n(921801),
    O = n(577275),
    S = n(484459),
    v = n(430824),
    T = n(325067),
    N = n(246946),
    I = n(663389),
    y = n(594174),
    A = n(626135),
    P = n(706454),
    R = n(210887),
    D = n(418632),
    Z = n(10298),
    w = n(526156),
    k = n(730820),
    L = n(888256),
    B = n(2719),
    M = n(194530),
    U = n(726985),
    V = n(981631),
    G = n(801461),
    F = n(388032),
    H = n(951839),
    z = n(20493);
function Y(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                var i;
                ((i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = i));
            }));
    }
    return e;
}
function W(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var i = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, i);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
class K extends r.PureComponent {
    componentDidMount() {
        let { currentUser: e } = this.props;
        (0, S.Z)(e.id, e.getAvatarURL(void 0, 80));
    }
    componentWillUnmount() {
        (m.Z.clearBackupCodes(), (0, g.Zy)());
    }
    renderAccountWarning() {
        let { currentUser: e } = this.props;
        if (!e.isClaimed()) {
            let e = (0, i.jsxs)('section', {
                children: [
                    (0, i.jsx)('div', {
                        className: H.accountWarningBodyText,
                        children: F.intl.string(F.t.qKs3vr)
                    }),
                    (0, i.jsx)(u.zxk, {
                        look: u.iLD.OUTLINED,
                        size: u.PhG.SMALL,
                        color: u.zxk.Colors.WHITE,
                        onClick: () => f.Z.openClaimAccountModal(),
                        children: F.intl.string(F.t['7psymp'])
                    })
                ]
            });
            return (0, i.jsx)(u.ToO, {
                type: u.ToO.Types.DANGER,
                className: z.marginBottom20,
                imageData: {
                    src: n(418558),
                    width: 60,
                    height: 60
                },
                title: F.intl.string(F.t['/3qnLy']),
                body: e
            });
        }
        if (null == e.email) return null;
        if (!e.verified) {
            let e = (0, i.jsxs)('section', {
                children: [
                    (0, i.jsx)('div', {
                        className: H.accountWarningBodyText,
                        children: F.intl.string(F.t.NAzplJ)
                    }),
                    (0, i.jsx)(D.Z, {
                        size: u.PhG.SMALL,
                        color: u.zxk.Colors.PRIMARY
                    })
                ]
            });
            return (0, i.jsx)(u.ToO, {
                type: u.ToO.Types.PRIMARY,
                className: z.marginBottom20,
                imageData: {
                    src: n(449125),
                    width: 60,
                    height: 60
                },
                title: F.intl.string(F.t.tuGzBQ),
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
                      F.intl.format(F.t.pdYZys, {}),
                      ' ',
                      '',
                      (0, i.jsx)(x.Z, {
                          className: H.noticeTextButton,
                          onClick: () => (0, E.Z)(G.Kq.USER_SETTINGS),
                          children: F.intl.string(F.t.LhlgY2)
                      })
                  ]
              })
            : null;
    }
    renderAccountSettings() {
        let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
            t = (0, i.jsxs)(i.Fragment, {
                children: [this.renderPomeloWarning(), this.renderAccountWarning(), (0, i.jsx)(B.Z, {})]
            });
        return e
            ? (0, i.jsx)(u.hjN, {
                  tag: u.RB0.H1,
                  title: F.intl.string(F.t['JAIM/v']),
                  children: t
              })
            : t;
    }
    renderSecuritySettings() {
        let { backupCodes: e, currentUser: t, theme: r } = this.props,
            s = (0, d.wj)(r) ? n(555702) : n(610802);
        return (0, i.jsxs)(u.hjN, {
            className: l()(H.userSettingsSecurity, z.marginTop40),
            title: F.intl.string(F.t.pKSjEh),
            tag: 'h1',
            children: [
                t.mfaEnabled
                    ? (0, i.jsx)(u.hjN, {
                          children: (0, i.jsxs)(u.vwX, {
                              className: l()(H.isEnabled, z.marginBottom20),
                              children: [
                                  (0, i.jsx)('img', {
                                      alt: '',
                                      className: H.lockIcon,
                                      src: n(511391)
                                  }),
                                  F.intl.string(F.t.FsmBy8)
                              ]
                          })
                      })
                    : null,
                (0, i.jsx)(C.F, {
                    setting: U.s6.ACCOUNT_CHANGE_PASSWORD,
                    children: (0, i.jsx)('div', {
                        children: (0, i.jsx)(u.zxk, {
                            size: u.zxk.Sizes.SMALL,
                            className: H.changePasswordButton,
                            onClick: () => (0, u.h7j)((e) => (0, i.jsx)(M.default, W(Y({}, e), { onSuccess: e.onClose }))),
                            children: F.intl.string(F.t['FRep5+'])
                        })
                    })
                }),
                (0, i.jsx)(C.F, {
                    setting: U.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION,
                    children: (0, i.jsxs)(b.Z, {
                        align: b.Z.Align.STRETCH,
                        children: [
                            (0, i.jsx)(b.Z.Child, {
                                wrap: !0,
                                children: (0, i.jsx)(k.Z, { backupCodes: e })
                            }),
                            t.mfaEnabled
                                ? null
                                : (0, i.jsx)(b.Z, {
                                      align: b.Z.Align.CENTER,
                                      basis: '323px',
                                      grow: 0,
                                      children: (0, i.jsx)('img', {
                                          src: s,
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
        let { shouldRenderOwnedGuildsModal: e, shouldRenderDeleteAccountConfirmModal: t, shouldRenderDisableAccountErrorModal: n, shouldRenderOwnedTeamsModal: r, disableAccountErrorMessage: s } = this.state;
        if (r) {
            let e = () => this.setState({ shouldRenderOwnedTeamsModal: !1 });
            return (0, i.jsx)(u.sYh, {
                dismissable: !0,
                header: F.intl.string(F.t.UNGZDA),
                confirmText: F.intl.string(F.t.BddRzc),
                confirmButtonColor: u.Ttl.BRAND,
                onCancel: e,
                onConfirm: e,
                children: (0, i.jsx)(u.Text, {
                    variant: 'text-md/normal',
                    children: F.intl.string(F.t.alpAUl)
                })
            });
        }
        if (e) {
            let e = () => this.setState({ shouldRenderOwnedGuildsModal: !1 });
            return (0, i.jsx)(u.sYh, {
                dismissable: !0,
                header: F.intl.string(F.t.I5UrbW),
                confirmText: F.intl.string(F.t.BddRzc),
                confirmButtonColor: u.Ttl.BRAND,
                onCancel: e,
                onConfirm: e,
                children: (0, i.jsx)(u.Text, {
                    variant: 'text-md/normal',
                    children: F.intl.string(F.t.UyVVam)
                })
            });
        }
        if (t) {
            let e = () => this.setState({ shouldRenderDeleteAccountConfirmModal: !1 });
            return (0, i.jsx)(u.sYh, {
                dismissable: !0,
                header: F.intl.string(F.t['8lQ2ra']),
                confirmText: F.intl.string(F.t['8lQ2ra']),
                cancelText: F.intl.string(F.t['ETE/oK']),
                onCancel: e,
                onConfirm: () => (0, g.ss)('', !0).then(e),
                children: (0, i.jsx)(u.Text, {
                    variant: 'text-md/normal',
                    children: F.intl.string(F.t.FB4H1N)
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
                header: F.intl.string(F.t.LX0nT0),
                confirmText: F.intl.string(F.t.BddRzc),
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
        let { currentUser: e, userTeamsLoading: t } = this.props;
        return (0, i.jsx)(L.Z, {
            className: z.marginTop40,
            currentUser: e,
            disabled: t,
            handleDisableAccount: () => this.handleDisableAccount(!1),
            handleDeleteAccount: () => this.handleDisableAccount(!0)
        });
    }
    renderSecuritySettingsRedesign() {
        return (0, i.jsxs)(i.Fragment, {
            children: [
                this.renderConfirmModals(),
                (0, i.jsx)(C.F, {
                    setting: U.s6.ACCOUNT_PROFILE,
                    children: this.renderAccountSettings(!1)
                }),
                (0, i.jsx)(C.F, {
                    setting: U.s6.ACCOUNT_PASSWORD_AND_AUTHENTICATION,
                    children: this.renderSecuritySettings()
                }),
                (0, i.jsx)(C.F, {
                    setting: U.s6.ACCOUNT_REMOVAL,
                    children: this.renderAccountRemovalSettings()
                })
            ]
        });
    }
    renderUnhidden() {
        let { subsection: e } = this.props;
        return (0, i.jsx)(Z.N, {
            header: F.intl.string(F.t['JAIM/v']),
            children: (0, i.jsx)(w.Z, {
                parentSetting: U.s6.ACCOUNT,
                settingsSection: V.oAB.ACCOUNT,
                panelClassName: H.tabPanel,
                onTabChange: (e) => {
                    A.default.track(V.rMx.MY_ACCOUNT_PAGE_TAB_NAVIGATE, { target_tab_name: e === U.s6.ACCOUNT_SECURITY_TAB ? 'SECURITY' : 'STANDING' });
                },
                defaultTabIndex: 'ACCOUNT_STANDING' === e ? 1 : void 0,
                tabs: [
                    {
                        title: F.intl.string(F.t.Am9YHh),
                        component: () => this.renderSecuritySettingsRedesign(),
                        setting: U.s6.ACCOUNT_SECURITY_TAB
                    },
                    {
                        title: F.intl.string(F.t['Vov/9v']),
                        component: j.Z,
                        setting: U.s6.PRIVACY_AND_SAFETY_STANDING
                    }
                ]
            })
        });
    }
    render() {
        return this.props.hide ? (0, i.jsx)(p.Z, {}) : this.renderUnhidden();
    }
    handleDisableAccountError(e) {
        if (e.body.code === V.evJ.INVALID_PASSWORD) throw e;
        this.setState({
            shouldRenderDisableAccountErrorModal: !0,
            disableAccountErrorMessage: e.body.message
        });
    }
    handleSubmitDisableAccount(e, t) {
        return (0, g.ss)(e, t).then(V.dG4, this.handleDisableAccountError);
    }
    handleDisableAccount() {
        var e;
        let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            { currentUser: n, userTeams: r } = this.props,
            s = v.Z.getGuildsArray().filter((e) => e.ownerId === n.id);
        return (null != (e = null == r ? void 0 : r.filter((e) => e.owner_user_id === n.id)) ? e : []).length > 0
            ? void this.setState({ shouldRenderOwnedTeamsModal: !0 })
            : s.length > 0
              ? void this.setState({ shouldRenderOwnedGuildsModal: !0 })
              : void (n.isClaimed()
                    ? (0, u.h7j)((e) =>
                          (0, i.jsx)(
                              h.Z,
                              W(Y({}, e), {
                                  handleSubmit: (e) => this.handleSubmitDisableAccount(e, t),
                                  title: t ? F.intl.string(F.t['8lQ2ra']) : F.intl.string(F.t.jf5GGR),
                                  actionText: t ? F.intl.string(F.t['8lQ2ra']) : F.intl.string(F.t.jf5GGR),
                                  children: t ? F.intl.string(F.t.FB4H1N) : F.intl.string(F.t.gk7h39)
                              })
                          )
                      )
                    : this.setState({ shouldRenderDeleteAccountConfirmModal: !0 }));
    }
    constructor(e) {
        (super(e),
            (this.state = {
                disableAccountErrorMessage: null,
                shouldRenderOwnedGuildsModal: !1,
                shouldRenderDeleteAccountConfirmModal: !1,
                shouldRenderDisableAccountErrorModal: !1,
                shouldRenderOwnedTeamsModal: !1
            }));
    }
}
let q = () => {
    let e = (0, c.e7)([y.default], () => {
            let e = y.default.getCurrentUser();
            return (o()(null != e, 'ConnectedUserAccountSettings: currentUser cannot be undefined'), e);
        }),
        t = (0, c.e7)([T.Z], () => T.Z.getBackupCodes()),
        n = (0, c.e7)([N.Z], () => N.Z.hidePersonalInformation),
        r = (0, c.e7)([R.Z], () => R.Z.theme),
        s = (0, _.b)(),
        l = (0, c.e7)([P.default], () => P.default.locale),
        a = (0, c.e7)([I.Z], () => I.Z.getSubsection()),
        { teams: d, loading: u } = (0, O.Z)({ refreshOnDepChange: !0 });
    return (0, i.jsx)(K, {
        theme: r,
        currentUser: e,
        backupCodes: t,
        hide: n,
        shouldRenderPomeloWarning: s,
        locale: l,
        subsection: a,
        userTeams: d,
        userTeamsLoading: u
    });
};
