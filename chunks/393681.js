n.d(t, { Z: () => J });
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(512722),
    l = n.n(s),
    c = n(442837),
    u = n(780384),
    d = n(755721),
    f = n(481060),
    _ = n(816814),
    p = n(809206),
    h = n(497321),
    m = n(279837),
    g = n(952306),
    E = n(600164),
    b = n(690221),
    y = n(332473),
    O = n(303172),
    v = n(518560),
    I = n(921801),
    T = n(577275),
    S = n(484459),
    A = n(430824),
    C = n(325067),
    N = n(246946),
    R = n(663389),
    P = n(594174),
    w = n(626135),
    D = n(706454),
    x = n(210887),
    L = n(418632),
    j = n(10298),
    k = n(526156),
    M = n(730820),
    U = n(888256),
    G = n(2719),
    B = n(194530),
    Z = n(726985),
    F = n(981631),
    V = n(801461),
    H = n(388032),
    Y = n(343396),
    W = n(197571);
function K(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function z(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                K(e, t, n[t]);
            });
    }
    return e;
}
function q(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function X(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : q(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
class Q extends i.PureComponent {
    componentDidMount() {
        let { currentUser: e } = this.props;
        (0, S.Z)(e.id, e.getAvatarURL(void 0, 80));
    }
    componentWillUnmount() {
        _.Z.clearBackupCodes(), (0, p.Zy)();
    }
    renderAccountWarning() {
        let { currentUser: e } = this.props;
        if (!e.isClaimed()) {
            let e = (0, r.jsxs)("section", {
                children: [
                    (0, r.jsx)("div", {
                        className: Y.accountWarningBodyText,
                        children: H.intl.string(H.t.qKs3vr),
                    }),
                    (0, r.jsx)(d.zx, {
                        look: d.iL.OUTLINED,
                        size: d.Ph.SMALL,
                        color: d.zx.Colors.WHITE,
                        onClick: () => g.Z.openClaimAccountModal(),
                        children: H.intl.string(H.t["7psymp"]),
                    }),
                ],
            });
            return (0, r.jsx)(f.ToO, {
                type: f.ToO.Types.DANGER,
                className: W.marginBottom20,
                imageData: {
                    src: n(418558),
                    width: 60,
                    height: 60,
                },
                title: H.intl.string(H.t["/3qnLy"]),
                body: e,
            });
        }
        if (null == e.email) return null;
        if (!e.verified) {
            let e = (0, r.jsxs)("section", {
                children: [
                    (0, r.jsx)("div", {
                        className: Y.accountWarningBodyText,
                        children: H.intl.string(H.t.NAzplJ),
                    }),
                    (0, r.jsx)(L.Z, {
                        size: d.Ph.SMALL,
                        color: d.zx.Colors.PRIMARY,
                    }),
                ],
            });
            return (0, r.jsx)(f.ToO, {
                type: f.ToO.Types.PRIMARY,
                className: W.marginBottom20,
                imageData: {
                    src: n(449125),
                    width: 60,
                    height: 60,
                },
                title: H.intl.string(H.t.tuGzBQ),
                body: e,
            });
        }
    }
    renderPomeloWarning() {
        return this.props.shouldRenderPomeloWarning
            ? (0, r.jsxs)(f.Wn, {
                  className: Y.accountWarningBodyText,
                  messageType: f.QYI.WARNING,
                  children: [
                      H.intl.format(H.t.pdYZys, {}),
                      " ",
                      "",
                      (0, r.jsx)(b.Z, {
                          className: Y.noticeTextButton,
                          onClick: () => (0, O.Z)(V.Kq.USER_SETTINGS),
                          children: H.intl.string(H.t.LhlgY2),
                      }),
                  ],
              })
            : null;
    }
    renderAccountSettings() {
        let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
            t = (0, r.jsxs)(r.Fragment, {
                children: [this.renderPomeloWarning(), this.renderAccountWarning(), (0, r.jsx)(G.Z, {})],
            });
        return e
            ? (0, r.jsx)(f.hjN, {
                  tag: f.RB0.H1,
                  title: H.intl.string(H.t["JAIM/v"]),
                  children: t,
              })
            : t;
    }
    renderSecuritySettings() {
        let { backupCodes: e, currentUser: t, theme: i } = this.props,
            a = (0, u.wj)(i) ? n(555702) : n(610802);
        return (0, r.jsxs)(f.hjN, {
            className: o()(Y.userSettingsSecurity, W.marginTop40),
            title: H.intl.string(H.t.pKSjEh),
            tag: "h1",
            children: [
                t.mfaEnabled
                    ? (0, r.jsx)(f.hjN, {
                          children: (0, r.jsxs)(f.vwX, {
                              className: o()(Y.isEnabled, W.marginBottom20),
                              children: [
                                  (0, r.jsx)("img", {
                                      alt: "",
                                      className: Y.lockIcon,
                                      src: n(511391),
                                  }),
                                  H.intl.string(H.t.FsmBy8),
                              ],
                          }),
                      })
                    : null,
                (0, r.jsx)(I.F, {
                    setting: Z.s6.ACCOUNT_CHANGE_PASSWORD,
                    children: (0, r.jsx)("div", {
                        children: (0, r.jsx)("div", {
                            "data-button-hoisted-classname-wrapper": !0,
                            className: Y.changePasswordButton,
                            children: (0, r.jsx)(f.zxk, {
                                variant: "primary",
                                size: "sm",
                                text: H.intl.string(H.t["FRep5+"]),
                                onClick: () =>
                                    (0, f.h7j)((e) => (0, r.jsx)(B.default, X(z({}, e), { onSuccess: e.onClose }))),
                            }),
                        }),
                    }),
                }),
                (0, r.jsx)(I.F, {
                    setting: Z.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION,
                    children: (0, r.jsxs)(E.Z, {
                        align: E.Z.Align.STRETCH,
                        children: [
                            (0, r.jsx)(E.Z.Child, {
                                wrap: !0,
                                children: (0, r.jsx)(M.Z, { backupCodes: e }),
                            }),
                            t.mfaEnabled
                                ? null
                                : (0, r.jsx)(E.Z, {
                                      align: E.Z.Align.CENTER,
                                      basis: "323px",
                                      grow: 0,
                                      children: (0, r.jsx)("img", {
                                          src: a,
                                          className: Y.userSettingsSecurityImage,
                                          alt: "",
                                      }),
                                  }),
                        ],
                    }),
                }),
            ],
        });
    }
    renderConfirmModals() {
        let {
            shouldRenderOwnedGuildsModal: e,
            shouldRenderDeleteAccountConfirmModal: t,
            shouldRenderDisableAccountErrorModal: n,
            shouldRenderOwnedTeamsModal: i,
            disableAccountErrorMessage: a,
        } = this.state;
        if (i) {
            let e = () => this.setState({ shouldRenderOwnedTeamsModal: !1 });
            return (0, r.jsx)(f.sYh, {
                dismissable: !0,
                header: H.intl.string(H.t.UNGZDA),
                confirmText: H.intl.string(H.t.BddRzc),
                confirmButtonColor: d.Tt.BRAND,
                onCancel: e,
                onConfirm: e,
                children: (0, r.jsx)(f.Text, {
                    variant: "text-md/normal",
                    children: H.intl.string(H.t.alpAUl),
                }),
            });
        }
        if (e) {
            let e = () => this.setState({ shouldRenderOwnedGuildsModal: !1 });
            return (0, r.jsx)(f.sYh, {
                dismissable: !0,
                header: H.intl.string(H.t.I5UrbW),
                confirmText: H.intl.string(H.t.BddRzc),
                confirmButtonColor: d.Tt.BRAND,
                onCancel: e,
                onConfirm: e,
                children: (0, r.jsx)(f.Text, {
                    variant: "text-md/normal",
                    children: H.intl.string(H.t.UyVVam),
                }),
            });
        }
        if (t) {
            let e = () => this.setState({ shouldRenderDeleteAccountConfirmModal: !1 });
            return (0, r.jsx)(f.sYh, {
                dismissable: !0,
                header: H.intl.string(H.t["8lQ2ra"]),
                confirmText: H.intl.string(H.t["8lQ2ra"]),
                cancelText: H.intl.string(H.t["ETE/oK"]),
                onCancel: e,
                onConfirm: () => (0, p.ss)("", !0).then(e),
                children: (0, r.jsx)(f.Text, {
                    variant: "text-md/normal",
                    children: H.intl.string(H.t.FB4H1N),
                }),
            });
        }
        if (n) {
            let e = () =>
                this.setState({
                    shouldRenderDisableAccountErrorModal: !1,
                    disableAccountErrorMessage: null,
                });
            return (0, r.jsx)(f.sYh, {
                dismissable: !0,
                header: H.intl.string(H.t.LX0nT0),
                confirmText: H.intl.string(H.t.BddRzc),
                confirmButtonColor: d.Tt.BRAND,
                onCancel: e,
                onConfirm: e,
                children: (0, r.jsx)(f.Text, {
                    variant: "text-md/normal",
                    children: a,
                }),
            });
        }
        return null;
    }
    renderAccountRemovalSettings() {
        let { currentUser: e, userTeamsLoading: t } = this.props;
        return (0, r.jsx)(U.Z, {
            className: W.marginTop40,
            currentUser: e,
            disabled: t,
            handleDisableAccount: () => this.handleDisableAccount(!1),
            handleDeleteAccount: () => this.handleDisableAccount(!0),
        });
    }
    renderSecuritySettingsRedesign() {
        return (0, r.jsxs)(r.Fragment, {
            children: [
                this.renderConfirmModals(),
                (0, r.jsx)(I.F, {
                    setting: Z.s6.ACCOUNT_PROFILE,
                    children: this.renderAccountSettings(!1),
                }),
                (0, r.jsx)(I.F, {
                    setting: Z.s6.ACCOUNT_PASSWORD_AND_AUTHENTICATION,
                    children: this.renderSecuritySettings(),
                }),
                (0, r.jsx)(I.F, {
                    setting: Z.s6.ACCOUNT_REMOVAL,
                    children: this.renderAccountRemovalSettings(),
                }),
            ],
        });
    }
    renderUnhidden() {
        let { subsection: e } = this.props;
        return (0, r.jsx)(j.N, {
            header: H.intl.string(H.t["JAIM/v"]),
            children: (0, r.jsx)(k.Z, {
                parentSetting: Z.s6.ACCOUNT,
                settingsSection: F.oAB.ACCOUNT,
                panelClassName: Y.tabPanel,
                onTabChange: (e) => {
                    w.default.track(F.rMx.MY_ACCOUNT_PAGE_TAB_NAVIGATE, {
                        target_tab_name: e === Z.s6.ACCOUNT_SECURITY_TAB ? "SECURITY" : "STANDING",
                    });
                },
                defaultTabIndex: "ACCOUNT_STANDING" === e ? 1 : void 0,
                tabs: [
                    {
                        title: H.intl.string(H.t.Am9YHh),
                        component: () => this.renderSecuritySettingsRedesign(),
                        setting: Z.s6.ACCOUNT_SECURITY_TAB,
                    },
                    {
                        title: H.intl.string(H.t["Vov/9v"]),
                        component: v.Z,
                        setting: Z.s6.PRIVACY_AND_SAFETY_STANDING,
                    },
                ],
            }),
        });
    }
    render() {
        return this.props.hide ? (0, r.jsx)(h.Z, {}) : this.renderUnhidden();
    }
    handleDisableAccountError(e) {
        if (e.body.code === F.evJ.INVALID_PASSWORD) throw e;
        this.setState({
            shouldRenderDisableAccountErrorModal: !0,
            disableAccountErrorMessage: e.body.message,
        });
    }
    handleSubmitDisableAccount(e, t) {
        return (0, p.ss)(e, t).then(F.dG4, this.handleDisableAccountError);
    }
    handleDisableAccount() {
        var e;
        let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            { currentUser: n, userTeams: i } = this.props,
            a = A.Z.getGuildsArray().filter((e) => e.ownerId === n.id);
        return (null != (e = null == i ? void 0 : i.filter((e) => e.owner_user_id === n.id)) ? e : []).length > 0
            ? void this.setState({ shouldRenderOwnedTeamsModal: !0 })
            : a.length > 0
              ? void this.setState({ shouldRenderOwnedGuildsModal: !0 })
              : void (n.isClaimed()
                    ? (0, f.h7j)((e) =>
                          (0, r.jsx)(
                              m.Z,
                              X(z({}, e), {
                                  handleSubmit: (e) => this.handleSubmitDisableAccount(e, t),
                                  title: t ? H.intl.string(H.t["8lQ2ra"]) : H.intl.string(H.t.jf5GGR),
                                  actionText: t ? H.intl.string(H.t["8lQ2ra"]) : H.intl.string(H.t.jf5GGR),
                                  children: t ? H.intl.string(H.t.FB4H1N) : H.intl.string(H.t.gk7h39),
                              }),
                          ),
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
                shouldRenderOwnedTeamsModal: !1,
            });
    }
}
let J = () => {
    let e = (0, c.e7)([P.default], () => {
            let e = P.default.getCurrentUser();
            return l()(null != e, "ConnectedUserAccountSettings: currentUser cannot be undefined"), e;
        }),
        t = (0, c.e7)([C.Z], () => C.Z.getBackupCodes()),
        n = (0, c.e7)([N.Z], () => N.Z.hidePersonalInformation),
        i = (0, c.e7)([x.Z], () => x.Z.theme),
        a = (0, y.b)(),
        o = (0, c.e7)([D.default], () => D.default.locale),
        s = (0, c.e7)([R.Z], () => R.Z.getSubsection()),
        { teams: u, loading: d } = (0, T.Z)({ refreshOnDepChange: !0 });
    return (0, r.jsx)(Q, {
        theme: i,
        currentUser: e,
        backupCodes: t,
        hide: n,
        shouldRenderPomeloWarning: a,
        locale: o,
        subsection: s,
        userTeams: u,
        userTeamsLoading: d,
    });
};
