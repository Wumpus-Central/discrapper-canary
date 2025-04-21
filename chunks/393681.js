n.d(t, { Z: () => Q }), n(388685);
var i = n(200651),
    r = n(192379),
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
    v = n(484459),
    T = n(430824),
    I = n(325067),
    N = n(246946),
    y = n(663389),
    A = n(594174),
    P = n(626135),
    R = n(709054),
    D = n(706454),
    Z = n(210887),
    w = n(418632),
    k = n(10298),
    L = n(526156),
    B = n(730820),
    M = n(888256),
    U = n(2719),
    V = n(194530),
    G = n(726985),
    F = n(981631),
    H = n(801461),
    z = n(388032),
    Y = n(951839),
    W = n(20493);
function K(e) {
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
function q(e, t) {
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
class X extends r.PureComponent {
    componentDidMount() {
        let { currentUser: e } = this.props;
        (0, v.Z)(e.id, e.getAvatarURL(void 0, 80));
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
                        onClick: () => f.Z.openClaimAccountModal(),
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
                    (0, i.jsx)(w.Z, {
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
                      this.props.forceMigrationExperiment ? z.intl.format(z.t.zT1hgo, { date: (0, x.IE)(this.props.locale) }) : z.intl.format(z.t.pdYZys, {}),
                      ' ',
                      '',
                      (0, i.jsx)(_.Z, {
                          className: Y.noticeTextButton,
                          onClick: () => (0, C.Z)(H.Kq.USER_SETTINGS),
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
            ? (0, i.jsx)(u.hjN, {
                  tag: u.RB0.H1,
                  title: z.intl.string(z.t['JAIM/v']),
                  children: t
              })
            : t;
    }
    renderSecuritySettings() {
        let { backupCodes: e, currentUser: t, theme: r } = this.props,
            s = (0, d.wj)(r) ? n(555702) : n(610802);
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
                                      className: Y.lockIcon,
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
                            onClick: () => (0, u.h7j)((e) => (0, i.jsx)(V.default, q(K({}, e), { onSuccess: e.onClose }))),
                            children: z.intl.string(z.t['FRep5+'])
                        })
                    })
                }),
                (0, i.jsx)(S.F, {
                    setting: G.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION,
                    children: (0, i.jsxs)(b.Z, {
                        align: b.Z.Align.STRETCH,
                        children: [
                            (0, i.jsx)(b.Z.Child, {
                                wrap: !0,
                                children: (0, i.jsx)(B.Z, { backupCodes: e })
                            }),
                            t.mfaEnabled
                                ? null
                                : (0, i.jsx)(b.Z, {
                                      align: b.Z.Align.CENTER,
                                      basis: '323px',
                                      grow: 0,
                                      children: (0, i.jsx)('img', {
                                          src: s,
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
        let { shouldRenderOwnedGuildsModal: e, shouldRenderDeleteAccountConfirmModal: t, shouldRenderDisableAccountErrorModal: n, disableAccountErrorMessage: r } = this.state;
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
                    children: r
                })
            });
        }
        return null;
    }
    renderAccountRemovalSettings() {
        let { currentUser: e } = this.props;
        return (0, i.jsx)(M.Z, {
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
            header: z.intl.string(z.t['JAIM/v']),
            children: (0, i.jsx)(L.Z, {
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
                        component: O.Z,
                        setting: G.s6.PRIVACY_AND_SAFETY_STANDING
                    }
                ]
            })
        });
    }
    render() {
        return this.props.hide ? (0, i.jsx)(p.Z, {}) : this.renderUnhidden();
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
            n = T.Z.getGuilds();
        if (R.default.keys(n).filter((e) => n[e].ownerId === t.id).length > 0) return void this.setState({ shouldRenderOwnedGuildsModal: !0 });
        t.isClaimed()
            ? (0, u.h7j)((t) =>
                  (0, i.jsx)(
                      h.Z,
                      q(K({}, t), {
                          handleSubmit: (t) => this.handleSubmitDisableAccount(t, e),
                          title: e ? z.intl.string(z.t['8lQ2ra']) : z.intl.string(z.t.jf5GGR),
                          actionText: e ? z.intl.string(z.t['8lQ2ra']) : z.intl.string(z.t.jf5GGR),
                          children: e ? z.intl.string(z.t.FB4H1N) : z.intl.string(z.t.gk7h39)
                      })
                  )
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
let Q = () => {
    let e = (0, c.e7)([A.default], () => {
            let e = A.default.getCurrentUser();
            return o()(null != e, 'ConnectedUserAccountSettings: currentUser cannot be undefined'), e;
        }),
        t = (0, c.e7)([I.Z], () => I.Z.getBackupCodes()),
        n = (0, c.e7)([N.Z], () => N.Z.hidePersonalInformation),
        r = (0, c.e7)([Z.Z], () => Z.Z.theme),
        s = (0, j.b)(),
        l = (0, E.CC)(),
        a = (0, c.e7)([D.default], () => D.default.locale),
        d = (0, c.e7)([y.Z], () => y.Z.getSubsection());
    return (0, i.jsx)(X, {
        theme: r,
        currentUser: e,
        backupCodes: t,
        hide: n,
        shouldRenderPomeloWarning: s,
        forceMigrationExperiment: l,
        locale: a,
        subsection: d
    });
};
