t.r(n),
    t.d(n, {
        default: () => j,
    });
var l = t(627968),
    r = t(64700),
    i = t(311907),
    a = t(398590),
    s = t(83257),
    c = t(793574),
    o = t(58149),
    u = t(688810),
    d = t(460760),
    _ = t(817818),
    E = t(591552),
    I = t(225142),
    A = t(292572),
    b = t(122906),
    f = t(475723),
    S = t(887501),
    N = t(149280),
    O = t(97469),
    g = t(544028),
    G = t(447696),
    T = t(684407),
    h = t(808728),
    D = t(498642),
    M = t(576705),
    m = t(997509),
    p = t(555337),
    C = t(287479),
    R = t(110807),
    v = t(595818),
    U = t(652215),
    y = t(985018);

function L(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        t = arguments.length > 2 ? arguments[2] : void 0;
    o.Ay.trackWithMetadata(U.HAw.SETTINGS_PANE_VIEWED, {
        settings_type: "guild",
        origin_pane: n,
        destination_pane: e,
        location: t,
    });
}
let w = {
    canManageGuild: !1,
    canManageChannels: !1,
    canManageRoles: !1,
    canManageBans: !1,
    canManageNicknames: !1,
    canManageGuildExpressions: !1,
    canViewAuditLog: !1,
    canManageWebhooks: !1,
    canAccessMembersPage: !1,
    canViewGuildAnalytics: !1,
    isOwner: !1,
    isOwnerWithRequiredMfaLevel: !1,
    isGuildAdmin: !1,
};
class P extends r.PureComponent {
    componentDidMount() {
        L(this.props.section, null, this.props.analyticsLocation);
    }
    componentWillUnmount() {
        m.A.close();
    }
    componentDidUpdate(e) {
        let { section: n } = e,
            {
                section: t,
                isGuildAdmin: l,
                canManageGuild: r,
                canManageRoles: i,
                canManageBans: s,
                canManageNicknames: c,
                canManageGuildExpressions: o,
                canViewAuditLog: u,
                canManageWebhooks: d,
                canUnlinkChannels: _,
                canAccessMembersPage: E,
                canViewGuildAnalytics: I,
            } = this.props;
        t !== n && L(t, n),
            ((l || r || i || s || c || o || u || E || d || _) &&
                (u || t !== U.BEX.AUDIT_LOG) &&
                (i || t !== U.BEX.ROLES) &&
                (o || t !== U.BEX.EMOJI) &&
                (o || t !== U.BEX.STICKERS) &&
                (o || t !== U.BEX.SOUNDBOARD) &&
                (s || t !== U.BEX.BANS) &&
                (I || t !== U.BEX.ANALYTICS) &&
                (E || t !== U.BEX.MEMBERS)) ||
                (0, a.jH)();
    }
    render() {
        var e, n;
        let {
            theme: t,
            sidebarTheme: r,
            section: i,
            guild: c,
            isGuildAdmin: o,
            canManageGuild: u,
            canViewAuditLog: d,
            canManageRoles: _,
            canManageGuildExpressions: E,
            canManageWebhooks: I,
            canUnlinkChannels: A,
            canManageBans: b,
            canAccessMembersPage: S,
            canViewGuildAnalytics: N,
            isOwner: O,
            isOwnerWithRequiredMfaLevel: g,
            showDirtyGuildTemplateIndicator: G,
            memberCount: T,
            onboardingStep: h,
            onboardingEnabled: D,
            welcomeScreenEmpty: M,
            guildMetadata: p,
            permissionMigrationAvailable: C,
        } = this.props;
        if (null == c) return null;
        let U = (0, R.SB)({
                guild: c,
                isGuildAdmin: o,
                canManageGuild: u,
                canViewAuditLog: d,
                canManageRoles: _,
                canManageGuildExpressions: E,
                canManageWebhooks: I,
                canUnlinkChannels: A,
                canManageBans: b,
                canAccessMembersPage: S,
                canViewGuildAnalytics: N,
                isOwner: O,
                isOwnerWithRequiredMfaLevel: g,
                showDirtyGuildTemplateIndicator: G,
                memberCount: T,
                onboardingStep: h,
                onboardingEnabled: D,
                welcomeScreenEmpty: M,
                guildMetadata: p,
                section: i,
                permissionMigrationAvailable: C,
            }),
            L = (null == (n = U.find((e) => e.section === i)) || null == (e = n.predicate) ? void 0 : e.call(n)) !== !1,
            w = (0, v.x)();
        return (0, l.jsxs)("div", {
            children: [
                (0, l.jsx)(s.Ay, {
                    theme: t,
                    sidebarTheme: r,
                    section: L && null != i ? i : w,
                    onSetSection: m.A.setSection,
                    onClose: a.jH,
                    title: "" !== c.name ? c.name : y.intl.string(y.t["154/bL"]),
                    sections: U,
                }),
                (0, l.jsx)(f.w, {
                    guildId: c.id,
                }),
            ],
        });
    }
}

function j() {
    var e, n, t;
    let {
            guild: a,
            section: s,
            analyticsLocation: o,
            guildMetadata: f,
            isGuildMetadataLoaded: R,
        } = (0, i.cf)([p.A], () => p.A.getProps()),
        { analyticsLocations: v } = (0, u.Ay)(c.A.GUILD_SETTINGS),
        y = (0, i.bG)([g.A], () => g.A.theme),
        L = (0, O.NC)(),
        j = (0, i.bG)([h.Ay], () => (null != a ? h.Ay.getChannels(a.id).SELECTABLE : null), [a]),
        B = (0, i.cf)([M.A], () => (null != a ? M.A.getGuildPermissionProps(a) : w)),
        x = null == a ? void 0 : a.id,
        H = (0, i.bG)([M.A], () => null != a && M.A.canAccessGuildSettings(a));
    r.useEffect(() => {
        R || null == x || (0, d.mo)(x);
    }, [R, x]);
    let W = null != (e = null == a ? void 0 : a.features.has(U.GuildFeatures.COMMUNITY)) && e;
    r.useEffect(() => {
        null != x && W && ((0, _.jx)(x), (0, G.Fy)(x));
    }, [x, W]),
        r.useEffect(() => {
            null != x && (0, I.ag)(x);
        }, [x]);
    let k = (0, i.bG)([b.A], () => {
            var e;
            return (
                (null == a ? void 0 : a.id) != null && (null == (e = b.A.getForGuild(a.id)) ? void 0 : e.isDirty) === !0
            );
        }, [a]),
        F = (0, i.bG)([D.A], () => D.A.getMemberCount(null == a ? void 0 : a.id), [a]);
    r.useEffect(() => {
        null != x && B.canManageGuild && A.A.loadTemplatesForGuild(x);
    }, [x, B.canManageGuild]),
        r.useEffect(() => {
            H || m.A.close();
        }, [H]);
    let X = (0, i.bG)([C.A], () => C.A.getCurrentPage()),
        V = (0, i.bG)([E.A], () => null != x && E.A.getEnabled(x)),
        K = (0, i.bG)([T.A], () => null != x && T.A.isEmpty(x)),
        q = (0, S.A)(x).length > 0,
        J = (0, N.A)(a);
    return (0, l.jsx)(u.f5, {
        value: v,
        children: (0, l.jsx)(
            P,
            ((n = (function (e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {},
                        l = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols &&
                        (l = l.concat(
                            Object.getOwnPropertySymbols(t).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(t, e).enumerable;
                            }),
                        )),
                        l.forEach(function (n) {
                            var l;
                            (l = t[n]),
                                n in e
                                    ? Object.defineProperty(e, n, {
                                          value: l,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0,
                                      })
                                    : (e[n] = l);
                        });
                }
                return e;
            })(
                {
                    guild: a,
                    section: s,
                    theme: y,
                    sidebarTheme: L,
                    channels: j,
                    showDirtyGuildTemplateIndicator: k,
                    analyticsLocation: o,
                    memberCount: F,
                },
                B,
            )),
            (t = t =
                {
                    canUnlinkChannels: q,
                    canViewGuildAnalytics: B.canViewGuildAnalytics,
                    onboardingStep: X,
                    onboardingEnabled: V,
                    welcomeScreenEmpty: K,
                    guildMetadata: f,
                    permissionMigrationAvailable: J,
                }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t))
                : (function (e, n) {
                      var t = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                          var l = Object.getOwnPropertySymbols(e);
                          t.push.apply(t, l);
                      }
                      return t;
                  })(Object(t)).forEach(function (e) {
                      Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(t, e));
                  }),
            n),
        ),
    });
}
