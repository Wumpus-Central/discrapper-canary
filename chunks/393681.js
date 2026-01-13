n.d(t, {
    D: () => U,
    Z: () => Z,
});
var r = n(54381),
    i = n(473749),
    a = n(512722),
    o = n.n(a),
    s = n(442837),
    l = n(481060),
    c = n(816814),
    u = n(809206),
    d = n(497321),
    f = n(332473),
    p = n(518560),
    _ = n(921801),
    m = n(577275),
    h = n(484459),
    g = n(325067),
    E = n(246946),
    b = n(663389),
    y = n(594174),
    O = n(626135),
    v = n(706454),
    S = n(210887),
    I = n(10298),
    T = n(526156),
    C = n(730820),
    A = n(562436),
    N = n(354255),
    P = n(499311),
    R = n(47863),
    w = n(732521),
    D = n(2719),
    x = n(726985),
    L = n(981631),
    j = n(388032),
    M = n(335094);
function k() {
    let e = (0, s.e7)([y.default], () => {
            let e = y.default.getCurrentUser();
            return o()(null != e, "SecuritySettingsTab: currentUser cannot be undefined"), e;
        }),
        t = (0, s.e7)([g.Z], () => g.Z.getBackupCodes()),
        n = (0, f.b)(),
        { teams: i, loading: a } = (0, m.Z)({ refreshOnDepChange: !0 });
    return (0, r.jsxs)(l.l09, {
        children: [
            (0, r.jsxs)(_.F, {
                setting: x.s6.ACCOUNT_PROFILE,
                children: [n && (0, r.jsx)(P.Z, {}), (0, r.jsx)(w.Z, { currentUser: e }), (0, r.jsx)(D.Z, {})],
            }),
            (0, r.jsx)(_.F, {
                setting: x.s6.ACCOUNT_PASSWORD_AND_AUTHENTICATION,
                children: (0, r.jsxs)(l.C3N, {
                    className: M.userSettingsSecurity,
                    label: j.intl.string(j.t.pKSjEj),
                    children: [
                        e.mfaEnabled ? (0, r.jsx)(A.Z, {}) : null,
                        (0, r.jsx)(_.F, {
                            setting: x.s6.ACCOUNT_CHANGE_PASSWORD,
                            children: (0, r.jsx)(N.Z, {}),
                        }),
                        (0, r.jsx)(_.F, {
                            setting: x.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION,
                            children: (0, r.jsx)(C.Z, { backupCodes: t }),
                        }),
                    ],
                }),
            }),
            (0, r.jsxs)(_.F, {
                setting: x.s6.ACCOUNT_REMOVAL,
                children: [
                    (0, r.jsx)(l.izJ, {}),
                    (0, r.jsx)(R.Z, {
                        currentUser: e,
                        userTeamsLoading: a,
                        userTeams: i,
                    }),
                ],
            }),
        ],
    });
}
var U = (function (e) {
    return (e.SECURITY = "SECURITY"), (e.STANDING = "STANDING"), e;
})({});
class G extends i.PureComponent {
    componentDidMount() {
        let { currentUser: e } = this.props;
        (0, h.Z)(e.id, e.getAvatarURL(void 0, 80));
    }
    componentWillUnmount() {
        c.Z.clearBackupCodes(), (0, u.Zy)();
    }
    renderUnhidden() {
        let { subsection: e } = this.props;
        return (0, r.jsx)(I.N, {
            header: j.intl.string(j.t["JAIM/m"]),
            children: (0, r.jsx)(T.Z, {
                parentSetting: x.s6.ACCOUNT,
                settingsSection: L.oAB.ACCOUNT,
                panelClassName: M.tabPanel,
                onTabChange: (e) => {
                    O.default.track(L.rMx.MY_ACCOUNT_PAGE_TAB_NAVIGATE, {
                        target_tab_name: e === x.s6.ACCOUNT_SECURITY_TAB ? "SECURITY" : "STANDING",
                    });
                },
                defaultTabIndex: "ACCOUNT_STANDING" === e ? 1 : void 0,
                tabs: [
                    {
                        title: j.intl.string(j.t.Am9YHi),
                        component: k,
                        setting: x.s6.ACCOUNT_SECURITY_TAB,
                    },
                    {
                        title: j.intl.string(j.t["Vov/9o"]),
                        component: p.Z,
                        setting: x.s6.PRIVACY_AND_SAFETY_STANDING,
                    },
                ],
            }),
        });
    }
    render() {
        return this.props.hide ? (0, r.jsx)(d.Z, {}) : this.renderUnhidden();
    }
}
let Z = () => {
    let e = (0, s.e7)([y.default], () => {
            let e = y.default.getCurrentUser();
            return o()(null != e, "ConnectedUserAccountSettings: currentUser cannot be undefined"), e;
        }),
        t = (0, s.e7)([E.Z], () => E.Z.hidePersonalInformation),
        n = (0, s.e7)([S.Z], () => S.Z.theme),
        i = (0, s.e7)([v.default], () => v.default.locale),
        a = (0, s.e7)([b.Z], () => b.Z.getSubsection());
    return (0, r.jsx)(G, {
        theme: n,
        currentUser: e,
        hide: t,
        locale: i,
        subsection: a,
    });
};
