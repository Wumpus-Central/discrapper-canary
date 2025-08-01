n.d(t, { Z: () => X });
var i = n(255367),
    r = n(73800),
    s = n(120356),
    a = n.n(s),
    l = n(512722),
    o = n.n(l),
    c = n(442837),
    d = n(780384),
    u = n(755721),
    m = n(481060),
    p = n(816814),
    g = n(809206),
    h = n(497321),
    f = n(279837),
    b = n(952306),
    x = n(600164),
    _ = n(690221),
    j = n(332473),
    O = n(303172),
    C = n(518560),
    E = n(921801),
    v = n(577275),
    S = n(484459),
    T = n(430824),
    N = n(325067),
    I = n(246946),
    y = n(663389),
    A = n(594174),
    P = n(626135),
    R = n(706454),
    D = n(210887),
    Z = n(418632),
    w = n(10298),
    k = n(526156),
    L = n(730820),
    B = n(888256),
    M = n(2719),
    U = n(194530),
    V = n(726985),
    G = n(981631),
    F = n(801461),
    H = n(388032),
    z = n(951839),
    W = n(20493);
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
function K(e, t) {
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
class q extends r.PureComponent {
    componentDidMount() {
        let { currentUser: e } = this.props;
        (0, S.Z)(e.id, e.getAvatarURL(void 0, 80));
    }
    componentWillUnmount() {
        (p.Z.clearBackupCodes(), (0, g.Zy)());
    }
    renderAccountWarning() {
        let { currentUser: e } = this.props;
        if (!e.isClaimed()) {
            let e = (0, i.jsxs)('section', {
                children: [
                    (0, i.jsx)('div', {
                        className: z.accountWarningBodyText,
                        children: H.intl.string(H.t.qKs3vr)
                    }),
                    (0, i.jsx)(u.zx, {
                        look: u.iL.OUTLINED,
                        size: u.Ph.SMALL,
                        color: u.zx.Colors.WHITE,
                        onClick: () => b.Z.openClaimAccountModal(),
                        children: H.intl.string(H.t['7psymp'])
                    })
                ]
            });
            return (0, i.jsx)(m.ToO, {
                type: m.ToO.Types.DANGER,
                className: W.marginBottom20,
                imageData: {
                    src: n(418558),
                    width: 60,
                    height: 60
                },
                title: H.intl.string(H.t['/3qnLy']),
                body: e
            });
        }
        if (null == e.email) return null;
        if (!e.verified) {
            let e = (0, i.jsxs)('section', {
                children: [
                    (0, i.jsx)('div', {
                        className: z.accountWarningBodyText,
                        children: H.intl.string(H.t.NAzplJ)
                    }),
                    (0, i.jsx)(Z.Z, {
                        size: u.Ph.SMALL,
                        color: u.zx.Colors.PRIMARY
                    })
                ]
            });
            return (0, i.jsx)(m.ToO, {
                type: m.ToO.Types.PRIMARY,
                className: W.marginBottom20,
                imageData: {
                    src: n(449125),
                    width: 60,
                    height: 60
                },
                title: H.intl.string(H.t.tuGzBQ),
                body: e
            });
        }
    }
    renderPomeloWarning() {
        return this.props.shouldRenderPomeloWarning
            ? (0, i.jsxs)(m.Wn, {
                  className: z.accountWarningBodyText,
                  messageType: m.QYI.WARNING,
                  children: [
                      H.intl.format(H.t.pdYZys, {}),
                      ' ',
                      '',
                      (0, i.jsx)(_.Z, {
                          className: z.noticeTextButton,
                          onClick: () => (0, O.Z)(F.Kq.USER_SETTINGS),
                          children: H.intl.string(H.t.LhlgY2)
                      })
                  ]
              })
            : null;
    }
    renderAccountSettings() {
        let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
            t = (0, i.jsxs)(i.Fragment, {
                children: [this.renderPomeloWarning(), this.renderAccountWarning(), (0, i.jsx)(M.Z, {})]
            });
        return e
            ? (0, i.jsx)(m.hjN, {
                  tag: m.RB0.H1,
                  title: H.intl.string(H.t['JAIM/v']),
                  children: t
              })
            : t;
    }
    renderSecuritySettings() {
        let { backupCodes: e, currentUser: t, theme: r } = this.props,
            s = (0, d.wj)(r) ? n(555702) : n(610802);
        return (0, i.jsxs)(m.hjN, {
            className: a()(z.userSettingsSecurity, W.marginTop40),
            title: H.intl.string(H.t.pKSjEh),
            tag: 'h1',
            children: [
                t.mfaEnabled
                    ? (0, i.jsx)(m.hjN, {
                          children: (0, i.jsxs)(m.vwX, {
                              className: a()(z.isEnabled, W.marginBottom20),
                              children: [
                                  (0, i.jsx)('img', {
                                      alt: '',
                                      className: z.lockIcon,
                                      src: n(511391)
                                  }),
                                  H.intl.string(H.t.FsmBy8)
                              ]
                          })
                      })
                    : null,
                (0, i.jsx)(E.F, {
                    setting: V.s6.ACCOUNT_CHANGE_PASSWORD,
                    children: (0, i.jsx)('div', {
                        children: (0, i.jsx)('div', {
                            'data-button-hoisted-classname-wrapper': !0,
                            className: z.changePasswordButton,
                            children: (0, i.jsx)(m.zxk, {
                                variant: 'primary',
                                size: 'sm',
                                text: H.intl.string(H.t['FRep5+']),
                                onClick: () => (0, m.h7j)((e) => (0, i.jsx)(U.default, K(Y({}, e), { onSuccess: e.onClose })))
                            })
                        })
                    })
                }),
                (0, i.jsx)(E.F, {
                    setting: V.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION,
                    children: (0, i.jsxs)(x.Z, {
                        align: x.Z.Align.STRETCH,
                        children: [
                            (0, i.jsx)(x.Z.Child, {
                                wrap: !0,
                                children: (0, i.jsx)(L.Z, { backupCodes: e })
                            }),
                            t.mfaEnabled
                                ? null
                                : (0, i.jsx)(x.Z, {
                                      align: x.Z.Align.CENTER,
                                      basis: '323px',
                                      grow: 0,
                                      children: (0, i.jsx)('img', {
                                          src: s,
                                          className: z.userSettingsSecurityImage,
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
            return (0, i.jsx)(m.sYh, {
                dismissable: !0,
                header: H.intl.string(H.t.UNGZDA),
                confirmText: H.intl.string(H.t.BddRzc),
                confirmButtonColor: u.Tt.BRAND,
                onCancel: e,
                onConfirm: e,
                children: (0, i.jsx)(m.Text, {
                    variant: 'text-md/normal',
                    children: H.intl.string(H.t.alpAUl)
                })
            });
        }
        if (e) {
            let e = () => this.setState({ shouldRenderOwnedGuildsModal: !1 });
            return (0, i.jsx)(m.sYh, {
                dismissable: !0,
                header: H.intl.string(H.t.I5UrbW),
                confirmText: H.intl.string(H.t.BddRzc),
                confirmButtonColor: u.Tt.BRAND,
                onCancel: e,
                onConfirm: e,
                children: (0, i.jsx)(m.Text, {
                    variant: 'text-md/normal',
                    children: H.intl.string(H.t.UyVVam)
                })
            });
        }
        if (t) {
            let e = () => this.setState({ shouldRenderDeleteAccountConfirmModal: !1 });
            return (0, i.jsx)(m.sYh, {
                dismissable: !0,
                header: H.intl.string(H.t['8lQ2ra']),
                confirmText: H.intl.string(H.t['8lQ2ra']),
                cancelText: H.intl.string(H.t['ETE/oK']),
                onCancel: e,
                onConfirm: () => (0, g.ss)('', !0).then(e),
                children: (0, i.jsx)(m.Text, {
                    variant: 'text-md/normal',
                    children: H.intl.string(H.t.FB4H1N)
                })
            });
        }
        if (n) {
            let e = () =>
                this.setState({
                    shouldRenderDisableAccountErrorModal: !1,
                    disableAccountErrorMessage: null
                });
            return (0, i.jsx)(m.sYh, {
                dismissable: !0,
                header: H.intl.string(H.t.LX0nT0),
                confirmText: H.intl.string(H.t.BddRzc),
                confirmButtonColor: u.Tt.BRAND,
                onCancel: e,
                onConfirm: e,
                children: (0, i.jsx)(m.Text, {
                    variant: 'text-md/normal',
                    children: s
                })
            });
        }
        return null;
    }
    renderAccountRemovalSettings() {
        let { currentUser: e, userTeamsLoading: t } = this.props;
        return (0, i.jsx)(B.Z, {
            className: W.marginTop40,
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
                (0, i.jsx)(E.F, {
                    setting: V.s6.ACCOUNT_PROFILE,
                    children: this.renderAccountSettings(!1)
                }),
                (0, i.jsx)(E.F, {
                    setting: V.s6.ACCOUNT_PASSWORD_AND_AUTHENTICATION,
                    children: this.renderSecuritySettings()
                }),
                (0, i.jsx)(E.F, {
                    setting: V.s6.ACCOUNT_REMOVAL,
                    children: this.renderAccountRemovalSettings()
                })
            ]
        });
    }
    renderUnhidden() {
        let { subsection: e } = this.props;
        return (0, i.jsx)(w.N, {
            header: H.intl.string(H.t['JAIM/v']),
            children: (0, i.jsx)(k.Z, {
                parentSetting: V.s6.ACCOUNT,
                settingsSection: G.oAB.ACCOUNT,
                panelClassName: z.tabPanel,
                onTabChange: (e) => {
                    P.default.track(G.rMx.MY_ACCOUNT_PAGE_TAB_NAVIGATE, { target_tab_name: e === V.s6.ACCOUNT_SECURITY_TAB ? 'SECURITY' : 'STANDING' });
                },
                defaultTabIndex: 'ACCOUNT_STANDING' === e ? 1 : void 0,
                tabs: [
                    {
                        title: H.intl.string(H.t.Am9YHh),
                        component: () => this.renderSecuritySettingsRedesign(),
                        setting: V.s6.ACCOUNT_SECURITY_TAB
                    },
                    {
                        title: H.intl.string(H.t['Vov/9v']),
                        component: C.Z,
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
        var e;
        let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            { currentUser: n, userTeams: r } = this.props,
            s = T.Z.getGuildsArray().filter((e) => e.ownerId === n.id);
        return (null != (e = null == r ? void 0 : r.filter((e) => e.owner_user_id === n.id)) ? e : []).length > 0
            ? void this.setState({ shouldRenderOwnedTeamsModal: !0 })
            : s.length > 0
              ? void this.setState({ shouldRenderOwnedGuildsModal: !0 })
              : void (n.isClaimed()
                    ? (0, m.h7j)((e) =>
                          (0, i.jsx)(
                              f.Z,
                              K(Y({}, e), {
                                  handleSubmit: (e) => this.handleSubmitDisableAccount(e, t),
                                  title: t ? H.intl.string(H.t['8lQ2ra']) : H.intl.string(H.t.jf5GGR),
                                  actionText: t ? H.intl.string(H.t['8lQ2ra']) : H.intl.string(H.t.jf5GGR),
                                  children: t ? H.intl.string(H.t.FB4H1N) : H.intl.string(H.t.gk7h39)
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
let X = () => {
    let e = (0, c.e7)([A.default], () => {
            let e = A.default.getCurrentUser();
            return (o()(null != e, 'ConnectedUserAccountSettings: currentUser cannot be undefined'), e);
        }),
        t = (0, c.e7)([N.Z], () => N.Z.getBackupCodes()),
        n = (0, c.e7)([I.Z], () => I.Z.hidePersonalInformation),
        r = (0, c.e7)([D.Z], () => D.Z.theme),
        s = (0, j.b)(),
        a = (0, c.e7)([R.default], () => R.default.locale),
        l = (0, c.e7)([y.Z], () => y.Z.getSubsection()),
        { teams: d, loading: u } = (0, v.Z)({ refreshOnDepChange: !0 });
    return (0, i.jsx)(q, {
        theme: r,
        currentUser: e,
        backupCodes: t,
        hide: n,
        shouldRenderPomeloWarning: s,
        locale: a,
        subsection: l,
        userTeams: d,
        userTeamsLoading: u
    });
};
