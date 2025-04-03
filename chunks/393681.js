n.d(t, { Z: () => J }), n(47120);
var r = n(200651),
    i = n(192379),
    s = n(120356),
    a = n.n(s),
    l = n(512722),
    o = n.n(l),
    c = n(442837),
    d = n(780384),
    u = n(481060),
    m = n(816814),
    g = n(809206),
    p = n(497321),
    h = n(279837),
    f = n(952306),
    b = n(600164),
    N = n(690221),
    x = n(346585),
    _ = n(347649),
    E = n(332473),
    j = n(303172),
    O = n(518560),
    C = n(921801),
    S = n(484459),
    v = n(430824),
    T = n(325067),
    I = n(246946),
    y = n(663389),
    A = n(594174),
    P = n(626135),
    R = n(709054),
    D = n(706454),
    Z = n(210887),
    w = n(418632),
    k = n(10298),
    W = n(526156),
    L = n(730820),
    B = n(888256),
    M = n(2719),
    U = n(194530),
    V = n(726985),
    G = n(981631),
    F = n(801461),
    H = n(388032),
    z = n(951839),
    Y = n(20493);
function K(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
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
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
class X extends i.PureComponent {
    componentDidMount() {
        let { currentUser: e } = this.props;
        (0, S.Z)(e.id, e.getAvatarURL(void 0, 80));
    }
    componentWillUnmount() {
        m.Z.clearBackupCodes(), (0, g.Zy)();
    }
    renderAccountWarning() {
        let { currentUser: e } = this.props;
        if (!e.isClaimed()) {
            let e = (0, r.jsxs)('section', {
                children: [
                    (0, r.jsx)('div', {
                        className: z.accountWarningBodyText,
                        children: H.NW.string(H.t.qKs3vr)
                    }),
                    (0, r.jsx)(u.zxk, {
                        look: u.iLD.OUTLINED,
                        size: u.PhG.SMALL,
                        color: u.zxk.Colors.WHITE,
                        onClick: () => f.Z.openClaimAccountModal(),
                        children: H.NW.string(H.t['7psymp'])
                    })
                ]
            });
            return (0, r.jsx)(u.ToO, {
                type: u.ToO.Types.DANGER,
                className: Y.marginBottom20,
                imageData: {
                    src: n(418558),
                    width: 60,
                    height: 60
                },
                title: H.NW.string(H.t['/3qnLy']),
                body: e
            });
        }
        if (null == e.email) return null;
        if (!e.verified) {
            let e = (0, r.jsxs)('section', {
                children: [
                    (0, r.jsx)('div', {
                        className: z.accountWarningBodyText,
                        children: H.NW.string(H.t.NAzplJ)
                    }),
                    (0, r.jsx)(w.Z, {
                        size: u.PhG.SMALL,
                        color: u.zxk.Colors.PRIMARY
                    })
                ]
            });
            return (0, r.jsx)(u.ToO, {
                type: u.ToO.Types.PRIMARY,
                className: Y.marginBottom20,
                imageData: {
                    src: n(449125),
                    width: 60,
                    height: 60
                },
                title: H.NW.string(H.t.tuGzBQ),
                body: e
            });
        }
    }
    renderPomeloWarning() {
        return this.props.shouldRenderPomeloWarning
            ? (0, r.jsxs)(u.Wn, {
                  className: z.accountWarningBodyText,
                  messageType: u.QYI.WARNING,
                  children: [
                      this.props.forceMigrationExperiment ? H.NW.format(H.t.zT1hgo, { date: (0, x.IE)(this.props.locale) }) : H.NW.format(H.t.pdYZys, {}),
                      ' ',
                      '',
                      (0, r.jsx)(N.Z, {
                          className: z.noticeTextButton,
                          onClick: () => (0, j.Z)(F.Kq.USER_SETTINGS),
                          children: H.NW.string(H.t.LhlgY2)
                      })
                  ]
              })
            : null;
    }
    renderAccountSettings() {
        let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
            t = (0, r.jsxs)(r.Fragment, {
                children: [this.renderPomeloWarning(), this.renderAccountWarning(), (0, r.jsx)(M.Z, {})]
            });
        return e
            ? (0, r.jsx)(u.hjN, {
                  tag: u.RB0.H1,
                  title: H.NW.string(H.t['JAIM/v']),
                  children: t
              })
            : t;
    }
    renderSecuritySettings() {
        let { backupCodes: e, currentUser: t, theme: i } = this.props,
            s = (0, d.wj)(i) ? n(555702) : n(610802);
        return (0, r.jsxs)(u.hjN, {
            className: a()(z.userSettingsSecurity, Y.marginTop40),
            title: H.NW.string(H.t.pKSjEh),
            tag: 'h1',
            children: [
                t.mfaEnabled
                    ? (0, r.jsx)(u.hjN, {
                          children: (0, r.jsxs)(u.vwX, {
                              className: a()(z.isEnabled, Y.marginBottom20),
                              children: [
                                  (0, r.jsx)('img', {
                                      alt: '',
                                      className: z.lockIcon,
                                      src: n(511391)
                                  }),
                                  H.NW.string(H.t.FsmBy8)
                              ]
                          })
                      })
                    : null,
                (0, r.jsx)(C.F, {
                    setting: V.s6.ACCOUNT_CHANGE_PASSWORD,
                    children: (0, r.jsx)('div', {
                        children: (0, r.jsx)(u.zxk, {
                            size: u.zxk.Sizes.SMALL,
                            className: z.changePasswordButton,
                            onClick: () => (0, u.h7j)((e) => (0, r.jsx)(U.default, q(K({}, e), { onSuccess: e.onClose }))),
                            children: H.NW.string(H.t['FRep5+'])
                        })
                    })
                }),
                (0, r.jsx)(C.F, {
                    setting: V.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION,
                    children: (0, r.jsxs)(b.Z, {
                        align: b.Z.Align.STRETCH,
                        children: [
                            (0, r.jsx)(b.Z.Child, {
                                wrap: !0,
                                children: (0, r.jsx)(L.Z, { backupCodes: e })
                            }),
                            t.mfaEnabled
                                ? null
                                : (0, r.jsx)(b.Z, {
                                      align: b.Z.Align.CENTER,
                                      basis: '323px',
                                      grow: 0,
                                      children: (0, r.jsx)('img', {
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
        let { shouldRenderOwnedGuildsModal: e, shouldRenderDeleteAccountConfirmModal: t, shouldRenderDisableAccountErrorModal: n, disableAccountErrorMessage: i } = this.state;
        if (e) {
            let e = () => this.setState({ shouldRenderOwnedGuildsModal: !1 });
            return (0, r.jsx)(u.sYh, {
                dismissable: !0,
                header: H.NW.string(H.t.I5UrbW),
                confirmText: H.NW.string(H.t.BddRzc),
                confirmButtonColor: u.Ttl.BRAND,
                onCancel: e,
                onConfirm: e,
                children: (0, r.jsx)(u.Text, {
                    variant: 'text-md/normal',
                    children: H.NW.string(H.t.UyVVam)
                })
            });
        }
        if (t) {
            let e = () => this.setState({ shouldRenderDeleteAccountConfirmModal: !1 });
            return (0, r.jsx)(u.sYh, {
                dismissable: !0,
                header: H.NW.string(H.t['8lQ2ra']),
                confirmText: H.NW.string(H.t['8lQ2ra']),
                cancelText: H.NW.string(H.t['ETE/oK']),
                onCancel: e,
                onConfirm: () => (0, g.ss)('', !0).then(e),
                children: (0, r.jsx)(u.Text, {
                    variant: 'text-md/normal',
                    children: H.NW.string(H.t.FB4H1N)
                })
            });
        }
        if (n) {
            let e = () =>
                this.setState({
                    shouldRenderDisableAccountErrorModal: !1,
                    disableAccountErrorMessage: null
                });
            return (0, r.jsx)(u.sYh, {
                dismissable: !0,
                header: H.NW.string(H.t.LX0nT0),
                confirmText: H.NW.string(H.t.BddRzc),
                confirmButtonColor: u.Ttl.BRAND,
                onCancel: e,
                onConfirm: e,
                children: (0, r.jsx)(u.Text, {
                    variant: 'text-md/normal',
                    children: i
                })
            });
        }
        return null;
    }
    renderAccountRemovalSettings() {
        let { currentUser: e } = this.props;
        return (0, r.jsx)(B.Z, {
            className: Y.marginTop40,
            currentUser: e,
            handleDisableAccount: () => this.handleDisableAccount(!1),
            handleDeleteAccount: () => this.handleDisableAccount(!0)
        });
    }
    renderSecuritySettingsRedesign() {
        return (0, r.jsxs)(r.Fragment, {
            children: [
                this.renderConfirmModals(),
                (0, r.jsx)(C.F, {
                    setting: V.s6.ACCOUNT_PROFILE,
                    children: this.renderAccountSettings(!1)
                }),
                (0, r.jsx)(C.F, {
                    setting: V.s6.ACCOUNT_PASSWORD_AND_AUTHENTICATION,
                    children: this.renderSecuritySettings()
                }),
                (0, r.jsx)(C.F, {
                    setting: V.s6.ACCOUNT_REMOVAL,
                    children: this.renderAccountRemovalSettings()
                })
            ]
        });
    }
    renderUnhidden() {
        let { subsection: e } = this.props;
        return (0, r.jsx)(k.N, {
            header: H.NW.string(H.t['JAIM/v']),
            children: (0, r.jsx)(W.Z, {
                parentSetting: V.s6.ACCOUNT,
                settingsSection: G.oAB.ACCOUNT,
                panelClassName: z.tabPanel,
                onTabChange: (e) => {
                    P.default.track(G.rMx.MY_ACCOUNT_PAGE_TAB_NAVIGATE, { target_tab_name: e === V.s6.ACCOUNT_SECURITY_TAB ? 'SECURITY' : 'STANDING' });
                },
                defaultTabIndex: 'ACCOUNT_STANDING' === e ? 1 : void 0,
                tabs: [
                    {
                        title: H.NW.string(H.t.Am9YHh),
                        component: () => this.renderSecuritySettingsRedesign(),
                        setting: V.s6.ACCOUNT_SECURITY_TAB
                    },
                    {
                        title: H.NW.string(H.t['Vov/9v']),
                        component: O.Z,
                        setting: V.s6.PRIVACY_AND_SAFETY_STANDING
                    }
                ]
            })
        });
    }
    render() {
        return this.props.hide ? (0, r.jsx)(p.Z, {}) : this.renderUnhidden();
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
        if (R.default.keys(n).filter((e) => n[e].ownerId === t.id).length > 0) return void this.setState({ shouldRenderOwnedGuildsModal: !0 });
        t.isClaimed()
            ? (0, u.h7j)((t) =>
                  (0, r.jsx)(
                      h.default,
                      q(K({}, t), {
                          handleSubmit: (t) => this.handleSubmitDisableAccount(t, e),
                          title: e ? H.NW.string(H.t['8lQ2ra']) : H.NW.string(H.t.jf5GGR),
                          actionText: e ? H.NW.string(H.t['8lQ2ra']) : H.NW.string(H.t.jf5GGR),
                          children: e ? H.NW.string(H.t.FB4H1N) : H.NW.string(H.t.gk7h39)
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
let J = () => {
    let e = (0, c.e7)([A.default], () => {
            let e = A.default.getCurrentUser();
            return o()(null != e, 'ConnectedUserAccountSettings: currentUser cannot be undefined'), e;
        }),
        t = (0, c.e7)([T.Z], () => T.Z.getBackupCodes()),
        n = (0, c.e7)([I.Z], () => I.Z.hidePersonalInformation),
        i = (0, c.e7)([Z.Z], () => Z.Z.theme),
        s = (0, E.b)(),
        a = (0, _.CC)(),
        l = (0, c.e7)([D.default], () => D.default.locale),
        d = (0, c.e7)([y.Z], () => y.Z.getSubsection());
    return (0, r.jsx)(X, {
        theme: i,
        currentUser: e,
        backupCodes: t,
        hide: n,
        shouldRenderPomeloWarning: s,
        forceMigrationExperiment: a,
        locale: l,
        subsection: d
    });
};
