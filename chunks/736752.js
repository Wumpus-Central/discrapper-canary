n.d(t, {
    D: () => W,
    Z: () => z,
});
var r = n(54381),
    i = n(473749),
    a = n(512722),
    o = n.n(a),
    s = n(442837),
    l = n(755721),
    c = n(481060),
    u = n(816814),
    d = n(809206),
    f = n(497321),
    _ = n(952306),
    p = n(690221),
    h = n(332473),
    m = n(303172),
    g = n(518560),
    E = n(921801),
    b = n(577275),
    y = n(484459),
    O = n(355497),
    v = n(430824),
    I = n(325067),
    T = n(246946),
    S = n(663389),
    A = n(594174),
    C = n(626135),
    N = n(706454),
    R = n(210887),
    P = n(418632),
    D = n(10298),
    w = n(526156),
    L = n(730820),
    x = n(888256),
    M = n(2719),
    k = n(194530),
    j = n(726985),
    U = n(981631),
    G = n(801461),
    B = n(388032),
    Z = n(719766);
function F(e, t, n) {
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
function V(e) {
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
                F(e, t, n[t]);
            });
    }
    return e;
}
function H(e, t) {
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
function Y(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : H(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
var W = (function (e) {
    return (e.SECURITY = "SECURITY"), (e.STANDING = "STANDING"), e;
})({});
class K extends i.PureComponent {
    componentDidMount() {
        let { currentUser: e } = this.props;
        (0, y.Z)(e.id, e.getAvatarURL(void 0, 80));
    }
    componentWillUnmount() {
        u.Z.clearBackupCodes(), (0, d.Zy)();
    }
    renderAccountWarning() {
        let { currentUser: e } = this.props;
        return e.isClaimed()
            ? null == e.email
                ? null
                : e.verified
                  ? void 0
                  : (0, r.jsxs)(c.M14, {
                        type: "warning",
                        children: [
                            (0, r.jsx)(c.Heading, {
                                variant: "heading-md/medium",
                                children: B.intl.string(B.t.tuGzBT),
                            }),
                            (0, r.jsx)(c.Text, {
                                variant: "text-sm/normal",
                                className: Z.inlineNoticeText,
                                children: B.intl.string(B.t.NAzplE),
                            }),
                            (0, r.jsx)(P.Z, {
                                size: "sm",
                                variant: "secondary",
                            }),
                        ],
                    })
            : (0, r.jsxs)(c.M14, {
                  type: "critical",
                  children: [
                      (0, r.jsx)(c.Heading, {
                          variant: "heading-md/medium",
                          children: B.intl.string(B.t["/3qnL/"]),
                      }),
                      (0, r.jsx)(c.Text, {
                          variant: "text-sm/normal",
                          className: Z.inlineNoticeText,
                          children: B.intl.string(B.t.qKs3vg),
                      }),
                      (0, r.jsx)(c.Button, {
                          variant: "secondary",
                          size: "sm",
                          text: B.intl.string(B.t["7psymi"]),
                          onClick: () => _.Z.openClaimAccountModal(),
                      }),
                  ],
              });
    }
    renderPomeloWarning() {
        return this.props.shouldRenderPomeloWarning
            ? (0, r.jsx)(c.M14, {
                  type: "warning",
                  children: (0, r.jsxs)(c.Text, {
                      variant: "text-sm/normal",
                      children: [
                          B.intl.format(B.t.pdYZyg, {}),
                          " ",
                          "",
                          (0, r.jsx)(p.Z, {
                              className: Z.noticeTextButton,
                              onClick: () => (0, m.Z)(G.Kq.USER_SETTINGS),
                              children: B.intl.string(B.t.LhlgY9),
                          }),
                      ],
                  }),
              })
            : null;
    }
    renderAccountSettings() {
        return (0, r.jsxs)(r.Fragment, {
            children: [this.renderPomeloWarning(), this.renderAccountWarning(), (0, r.jsx)(M.Z, {})],
        });
    }
    renderSecuritySettings() {
        let { backupCodes: e, currentUser: t } = this.props;
        return (0, r.jsxs)(c.C3N, {
            className: Z.userSettingsSecurity,
            label: B.intl.string(B.t.pKSjEj),
            children: [
                t.mfaEnabled
                    ? (0, r.jsx)(c.Wn, {
                          icon: c.mBM,
                          messageType: c.QYI.POSITIVE,
                          children: B.intl.string(B.t.FsmBy4),
                      })
                    : null,
                (0, r.jsx)(E.F, {
                    setting: j.s6.ACCOUNT_CHANGE_PASSWORD,
                    children: (0, r.jsx)(c.Button, {
                        variant: "primary",
                        size: "sm",
                        text: B.intl.string(B.t["FRep5/"]),
                        onClick: () => (0, c.h7j)((e) => (0, r.jsx)(k.default, Y(V({}, e), { onSuccess: e.onClose }))),
                    }),
                }),
                (0, r.jsx)(E.F, {
                    setting: j.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION,
                    children: (0, r.jsx)(L.Z, { backupCodes: e }),
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
            return (0, r.jsx)(c.sYh, {
                dismissable: !0,
                header: B.intl.string(B.t.UNGZDI),
                confirmText: B.intl.string(B.t.BddRzS),
                confirmButtonColor: l.Tt.BRAND,
                onCancel: e,
                onConfirm: e,
                children: (0, r.jsx)(c.Text, {
                    variant: "text-md/normal",
                    children: B.intl.string(B.t.alpAUm),
                }),
            });
        }
        if (e) {
            let e = () => this.setState({ shouldRenderOwnedGuildsModal: !1 });
            return (0, r.jsx)(c.sYh, {
                dismissable: !0,
                header: B.intl.string(B.t.I5UrbV),
                confirmText: B.intl.string(B.t.BddRzS),
                confirmButtonColor: l.Tt.BRAND,
                onCancel: e,
                onConfirm: e,
                children: (0, r.jsx)(c.Text, {
                    variant: "text-md/normal",
                    children: B.intl.string(B.t.UyVVan),
                }),
            });
        }
        if (t) {
            let e = () => this.setState({ shouldRenderDeleteAccountConfirmModal: !1 });
            return (0, r.jsx)(c.sYh, {
                dismissable: !0,
                header: B.intl.string(B.t["8lQ2rR"]),
                confirmText: B.intl.string(B.t["8lQ2rR"]),
                cancelText: B.intl.string(B.t["ETE/oC"]),
                onCancel: e,
                onConfirm: () => (0, d.ss)("", !0).then(e),
                children: (0, r.jsx)(c.Text, {
                    variant: "text-md/normal",
                    children: B.intl.string(B.t.FB4H1D),
                }),
            });
        }
        if (n) {
            let e = () =>
                this.setState({
                    shouldRenderDisableAccountErrorModal: !1,
                    disableAccountErrorMessage: null,
                });
            return (0, r.jsx)(c.sYh, {
                dismissable: !0,
                header: B.intl.string(B.t.LX0nT8),
                confirmText: B.intl.string(B.t.BddRzS),
                confirmButtonColor: l.Tt.BRAND,
                onCancel: e,
                onConfirm: e,
                children: (0, r.jsx)(c.Text, {
                    variant: "text-md/normal",
                    children: a,
                }),
            });
        }
        return null;
    }
    renderAccountRemovalSettings() {
        let { currentUser: e, userTeamsLoading: t } = this.props;
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(c.izJ, {}),
                (0, r.jsx)(x.Z, {
                    currentUser: e,
                    disabled: t,
                    handleDisableAccount: () => this.handleDisableAccount(!1),
                    handleDeleteAccount: () => this.handleDisableAccount(!0),
                }),
            ],
        });
    }
    renderSecuritySettingsRedesign() {
        return (0, r.jsxs)(c.l09, {
            children: [
                this.renderConfirmModals(),
                (0, r.jsx)(E.F, {
                    setting: j.s6.ACCOUNT_PROFILE,
                    children: this.renderAccountSettings(),
                }),
                (0, r.jsx)(E.F, {
                    setting: j.s6.ACCOUNT_PASSWORD_AND_AUTHENTICATION,
                    children: this.renderSecuritySettings(),
                }),
                (0, r.jsx)(E.F, {
                    setting: j.s6.ACCOUNT_REMOVAL,
                    children: this.renderAccountRemovalSettings(),
                }),
            ],
        });
    }
    renderUnhidden() {
        let { subsection: e } = this.props;
        return (0, r.jsx)(D.N, {
            header: B.intl.string(B.t["JAIM/m"]),
            children: (0, r.jsx)(w.Z, {
                parentSetting: j.s6.ACCOUNT,
                settingsSection: U.oAB.ACCOUNT,
                panelClassName: Z.tabPanel,
                onTabChange: (e) => {
                    C.default.track(U.rMx.MY_ACCOUNT_PAGE_TAB_NAVIGATE, {
                        target_tab_name: e === j.s6.ACCOUNT_SECURITY_TAB ? "SECURITY" : "STANDING",
                    });
                },
                defaultTabIndex: "ACCOUNT_STANDING" === e ? 1 : void 0,
                tabs: [
                    {
                        title: B.intl.string(B.t.Am9YHi),
                        component: () => this.renderSecuritySettingsRedesign(),
                        setting: j.s6.ACCOUNT_SECURITY_TAB,
                    },
                    {
                        title: B.intl.string(B.t["Vov/9o"]),
                        component: g.Z,
                        setting: j.s6.PRIVACY_AND_SAFETY_STANDING,
                    },
                ],
            }),
        });
    }
    render() {
        return this.props.hide ? (0, r.jsx)(f.Z, {}) : this.renderUnhidden();
    }
    handleDisableAccountError(e) {
        if (e.body.code === U.evJ.INVALID_PASSWORD) throw e;
        this.setState({
            shouldRenderDisableAccountErrorModal: !0,
            disableAccountErrorMessage: e.body.message,
        });
    }
    handleSubmitDisableAccount(e, t) {
        return (0, d.ss)(e, t).then(U.dG4, this.handleDisableAccountError);
    }
    handleDisableAccount() {
        var e;
        let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            { currentUser: n, userTeams: i } = this.props,
            a = v.Z.getGuildsArray().filter((e) => e.ownerId === n.id);
        return (null != (e = null == i ? void 0 : i.filter((e) => e.owner_user_id === n.id)) ? e : []).length > 0
            ? void this.setState({ shouldRenderOwnedTeamsModal: !0 })
            : a.length > 0
              ? void this.setState({ shouldRenderOwnedGuildsModal: !0 })
              : void (n.isClaimed()
                    ? (0, c.h7j)((e) =>
                          (0, r.jsx)(
                              O.Z,
                              Y(V({}, e), {
                                  handleSubmit: (e) => this.handleSubmitDisableAccount(e, t),
                                  title: t ? B.intl.string(B.t["8lQ2rR"]) : B.intl.string(B.t.jf5GGb),
                                  actionText: t ? B.intl.string(B.t["8lQ2rR"]) : B.intl.string(B.t.jf5GGb),
                                  children: t ? B.intl.string(B.t.FB4H1D) : B.intl.string(B.t.gk7h32),
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
let z = () => {
    let e = (0, s.e7)([A.default], () => {
            let e = A.default.getCurrentUser();
            return o()(null != e, "ConnectedUserAccountSettings: currentUser cannot be undefined"), e;
        }),
        t = (0, s.e7)([I.Z], () => I.Z.getBackupCodes()),
        n = (0, s.e7)([T.Z], () => T.Z.hidePersonalInformation),
        i = (0, s.e7)([R.Z], () => R.Z.theme),
        a = (0, h.b)(),
        l = (0, s.e7)([N.default], () => N.default.locale),
        c = (0, s.e7)([S.Z], () => S.Z.getSubsection()),
        { teams: u, loading: d } = (0, b.Z)({ refreshOnDepChange: !0 });
    return (0, r.jsx)(K, {
        theme: i,
        currentUser: e,
        backupCodes: t,
        hide: n,
        shouldRenderPomeloWarning: a,
        locale: l,
        subsection: c,
        userTeams: u,
        userTeamsLoading: d,
    });
};
