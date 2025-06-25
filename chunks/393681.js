n.d(t, { Z: () => Q }), n(388685);
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
    _ = n(690221),
    x = n(346585),
    E = n(347649),
    j = n(332473),
    C = n(303172),
    O = n(518560),
    S = n(921801),
    v = n(577275),
    T = n(484459),
    I = n(430824),
    N = n(325067),
    y = n(246946),
    A = n(663389),
    P = n(594174),
    R = n(626135),
    D = n(709054),
    Z = n(706454),
    w = n(210887),
    k = n(418632),
    L = n(10298),
    B = n(526156),
    M = n(730820),
    U = n(888256),
    V = n(2719),
    G = n(194530),
    F = n(726985),
    H = n(981631),
    z = n(801461),
    Y = n(388032),
    W = n(951839),
    K = n(20493);
function q(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                var i;
                (i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = i);
            });
    }
    return e;
}
function X(e, t) {
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
class J extends r.PureComponent {
    componentDidMount() {
        let { currentUser: e } = this.props;
        (0, T.Z)(e.id, e.getAvatarURL(void 0, 80));
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
                    (0, i.jsx)(u.zxk, {
                        look: u.iLD.OUTLINED,
                        size: u.PhG.SMALL,
                        color: u.zxk.Colors.WHITE,
                        onClick: () => f.Z.openClaimAccountModal(),
                        children: Y.intl.string(Y.t['7psymp'])
                    })
                ]
            });
            return (0, i.jsx)(u.ToO, {
                type: u.ToO.Types.DANGER,
                className: K.marginBottom20,
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
                    (0, i.jsx)(k.Z, {
                        size: u.PhG.SMALL,
                        color: u.zxk.Colors.PRIMARY
                    })
                ]
            });
            return (0, i.jsx)(u.ToO, {
                type: u.ToO.Types.PRIMARY,
                className: K.marginBottom20,
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
                  className: W.accountWarningBodyText,
                  messageType: u.QYI.WARNING,
                  children: [
                      this.props.forceMigrationExperiment ? Y.intl.format(Y.t.zT1hgo, { date: (0, x.IE)(this.props.locale) }) : Y.intl.format(Y.t.pdYZys, {}),
                      ' ',
                      '',
                      (0, i.jsx)(_.Z, {
                          className: W.noticeTextButton,
                          onClick: () => (0, C.Z)(z.Kq.USER_SETTINGS),
                          children: Y.intl.string(Y.t.LhlgY2)
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
                  title: Y.intl.string(Y.t['JAIM/v']),
                  children: t
              })
            : t;
    }
    renderSecuritySettings() {
        let { backupCodes: e, currentUser: t, theme: r } = this.props,
            s = (0, d.wj)(r) ? n(555702) : n(610802);
        return (0, i.jsxs)(u.hjN, {
            className: l()(W.userSettingsSecurity, K.marginTop40),
            title: Y.intl.string(Y.t.pKSjEh),
            tag: 'h1',
            children: [
                t.mfaEnabled
                    ? (0, i.jsx)(u.hjN, {
                          children: (0, i.jsxs)(u.vwX, {
                              className: l()(W.isEnabled, K.marginBottom20),
                              children: [
                                  (0, i.jsx)('img', {
                                      alt: '',
                                      className: W.lockIcon,
                                      src: n(511391)
                                  }),
                                  Y.intl.string(Y.t.FsmBy8)
                              ]
                          })
                      })
                    : null,
                (0, i.jsx)(S.F, {
                    setting: F.s6.ACCOUNT_CHANGE_PASSWORD,
                    children: (0, i.jsx)('div', {
                        children: (0, i.jsx)(u.zxk, {
                            size: u.zxk.Sizes.SMALL,
                            className: W.changePasswordButton,
                            onClick: () => (0, u.h7j)((e) => (0, i.jsx)(G.default, X(q({}, e), { onSuccess: e.onClose }))),
                            children: Y.intl.string(Y.t['FRep5+'])
                        })
                    })
                }),
                (0, i.jsx)(S.F, {
                    setting: F.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION,
                    children: (0, i.jsxs)(b.Z, {
                        align: b.Z.Align.STRETCH,
                        children: [
                            (0, i.jsx)(b.Z.Child, {
                                wrap: !0,
                                children: (0, i.jsx)(M.Z, { backupCodes: e })
                            }),
                            t.mfaEnabled
                                ? null
                                : (0, i.jsx)(b.Z, {
                                      align: b.Z.Align.CENTER,
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
        let { shouldRenderOwnedGuildsModal: e, shouldRenderDeleteAccountConfirmModal: t, shouldRenderDisableAccountErrorModal: n, shouldRenderOwnedTeamsModal: r, disableAccountErrorMessage: s } = this.state;
        if (r) {
            let e = () => this.setState({ shouldRenderOwnedTeamsModal: !1 });
            return (0, i.jsx)(u.sYh, {
                dismissable: !0,
                header: Y.intl.string(Y.t.UNGZDA),
                confirmText: Y.intl.string(Y.t.BddRzc),
                confirmButtonColor: u.Ttl.BRAND,
                onCancel: e,
                onConfirm: e,
                children: (0, i.jsx)(u.Text, {
                    variant: 'text-md/normal',
                    children: Y.intl.string(Y.t.alpAUl)
                })
            });
        }
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
        let { currentUser: e, userTeamsLoading: t } = this.props;
        return (0, i.jsx)(U.Z, {
            className: K.marginTop40,
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
                (0, i.jsx)(S.F, {
                    setting: F.s6.ACCOUNT_PROFILE,
                    children: this.renderAccountSettings(!1)
                }),
                (0, i.jsx)(S.F, {
                    setting: F.s6.ACCOUNT_PASSWORD_AND_AUTHENTICATION,
                    children: this.renderSecuritySettings()
                }),
                (0, i.jsx)(S.F, {
                    setting: F.s6.ACCOUNT_REMOVAL,
                    children: this.renderAccountRemovalSettings()
                })
            ]
        });
    }
    renderUnhidden() {
        let { subsection: e } = this.props;
        return (0, i.jsx)(L.N, {
            header: Y.intl.string(Y.t['JAIM/v']),
            children: (0, i.jsx)(B.Z, {
                parentSetting: F.s6.ACCOUNT,
                settingsSection: H.oAB.ACCOUNT,
                panelClassName: W.tabPanel,
                onTabChange: (e) => {
                    R.default.track(H.rMx.MY_ACCOUNT_PAGE_TAB_NAVIGATE, { target_tab_name: e === F.s6.ACCOUNT_SECURITY_TAB ? 'SECURITY' : 'STANDING' });
                },
                defaultTabIndex: 'ACCOUNT_STANDING' === e ? 1 : void 0,
                tabs: [
                    {
                        title: Y.intl.string(Y.t.Am9YHh),
                        component: () => this.renderSecuritySettingsRedesign(),
                        setting: F.s6.ACCOUNT_SECURITY_TAB
                    },
                    {
                        title: Y.intl.string(Y.t['Vov/9v']),
                        component: O.Z,
                        setting: F.s6.PRIVACY_AND_SAFETY_STANDING
                    }
                ]
            })
        });
    }
    render() {
        return this.props.hide ? (0, i.jsx)(p.Z, {}) : this.renderUnhidden();
    }
    handleDisableAccountError(e) {
        if (e.body.code === H.evJ.INVALID_PASSWORD) throw e;
        this.setState({
            shouldRenderDisableAccountErrorModal: !0,
            disableAccountErrorMessage: e.body.message
        });
    }
    handleSubmitDisableAccount(e, t) {
        return (0, g.ss)(e, t).then(H.dG4, this.handleDisableAccountError);
    }
    handleDisableAccount() {
        var e;
        let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            { currentUser: n, userTeams: r } = this.props,
            s = I.Z.getGuilds(),
            l = D.default.keys(s).filter((e) => s[e].ownerId === n.id);
        return (null != (e = null == r ? void 0 : r.filter((e) => e.owner_user_id === n.id)) ? e : []).length > 0
            ? void this.setState({ shouldRenderOwnedTeamsModal: !0 })
            : l.length > 0
              ? void this.setState({ shouldRenderOwnedGuildsModal: !0 })
              : void (n.isClaimed()
                    ? (0, u.h7j)((e) =>
                          (0, i.jsx)(
                              h.Z,
                              X(q({}, e), {
                                  handleSubmit: (e) => this.handleSubmitDisableAccount(e, t),
                                  title: t ? Y.intl.string(Y.t['8lQ2ra']) : Y.intl.string(Y.t.jf5GGR),
                                  actionText: t ? Y.intl.string(Y.t['8lQ2ra']) : Y.intl.string(Y.t.jf5GGR),
                                  children: t ? Y.intl.string(Y.t.FB4H1N) : Y.intl.string(Y.t.gk7h39)
                              })
                          )
                      )
                    : this.setState({ shouldRenderDeleteAccountConfirmModal: !0 }));
    }
    constructor(e) {
        super(e),
            (this.state = {
                disableAccountErrorMessage: null,
                shouldRenderOwnedGuildsModal: !1,
                shouldRenderDeleteAccountConfirmModal: !1,
                shouldRenderDisableAccountErrorModal: !1,
                shouldRenderOwnedTeamsModal: !1
            });
    }
}
let Q = () => {
    let e = (0, c.e7)([P.default], () => {
            let e = P.default.getCurrentUser();
            return o()(null != e, 'ConnectedUserAccountSettings: currentUser cannot be undefined'), e;
        }),
        t = (0, c.e7)([N.Z], () => N.Z.getBackupCodes()),
        n = (0, c.e7)([y.Z], () => y.Z.hidePersonalInformation),
        r = (0, c.e7)([w.Z], () => w.Z.theme),
        s = (0, j.b)(),
        l = (0, E.CC)(),
        a = (0, c.e7)([Z.default], () => Z.default.locale),
        d = (0, c.e7)([A.Z], () => A.Z.getSubsection()),
        { teams: u, loading: m } = (0, v.Z)({ refreshOnDepChange: !0 });
    return (0, i.jsx)(J, {
        theme: r,
        currentUser: e,
        backupCodes: t,
        hide: n,
        shouldRenderPomeloWarning: s,
        forceMigrationExperiment: l,
        locale: a,
        subsection: d,
        userTeams: u,
        userTeamsLoading: m
    });
};
