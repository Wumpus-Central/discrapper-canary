"use strict";
n.r(t), n.d(t, { default: () => P });
var a = n(627968),
    i = n(64700),
    r = n(311907),
    c = n(398590),
    o = n(83257),
    s = n(793574),
    l = n(58149),
    _ = n(688810),
    d = n(460760),
    u = n(817818),
    g = n(591552),
    b = n(225142),
    m = n(292572),
    I = n(122906),
    A = n(475723),
    E = n(887501),
    p = n(149280),
    h = n(97469),
    S = n(544028),
    C = n(447696),
    T = n(684407),
    f = n(808728),
    N = n(498642),
    G = n(576705),
    M = n(997509),
    O = n(555337),
    R = n(287479),
    D = n(110807),
    y = n(595818),
    U = n(652215),
    w = n(985018);
function L(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        n = arguments.length > 2 ? arguments[2] : void 0;
    l.Ay.trackWithMetadata(U.HAw.SETTINGS_PANE_VIEWED, {
        settings_type: "guild",
        origin_pane: t,
        destination_pane: e,
        location: n,
    });
}
let x = {
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
class B extends i.PureComponent {
    componentDidMount() {
        L(this.props.section, null, this.props.analyticsLocation);
    }
    componentWillUnmount() {
        M.A.close();
    }
    componentDidUpdate(e) {
        let { section: t } = e,
            {
                section: n,
                isGuildAdmin: a,
                canManageGuild: i,
                canManageRoles: r,
                canManageBans: o,
                canManageNicknames: s,
                canManageGuildExpressions: l,
                canViewAuditLog: _,
                canManageWebhooks: d,
                canUnlinkChannels: u,
                canAccessMembersPage: g,
                canViewGuildAnalytics: b,
            } = this.props;
        n !== t && L(n, t),
            ((a || i || r || o || s || l || _ || g || d || u) &&
                (_ || n !== U.BEX.AUDIT_LOG) &&
                (r || n !== U.BEX.ROLES) &&
                (l || n !== U.BEX.EMOJI) &&
                (l || n !== U.BEX.STICKERS) &&
                (l || n !== U.BEX.SOUNDBOARD) &&
                (o || n !== U.BEX.BANS) &&
                (b || n !== U.BEX.ANALYTICS) &&
                (g || n !== U.BEX.MEMBERS)) ||
                (0, c.jH)();
    }
    render() {
        let {
            theme: e,
            sidebarTheme: t,
            section: n,
            guild: i,
            isGuildAdmin: r,
            canManageGuild: s,
            canViewAuditLog: l,
            canManageRoles: _,
            canManageGuildExpressions: d,
            canManageWebhooks: u,
            canUnlinkChannels: g,
            canManageBans: b,
            canAccessMembersPage: m,
            canViewGuildAnalytics: I,
            isOwner: E,
            isOwnerWithRequiredMfaLevel: p,
            showDirtyGuildTemplateIndicator: h,
            memberCount: S,
            onboardingStep: C,
            onboardingEnabled: T,
            welcomeScreenEmpty: f,
            guildMetadata: N,
            permissionMigrationAvailable: G,
        } = this.props;
        if (null == i) return null;
        let O = (0, D.SB)({
                guild: i,
                isGuildAdmin: r,
                canManageGuild: s,
                canViewAuditLog: l,
                canManageRoles: _,
                canManageGuildExpressions: d,
                canManageWebhooks: u,
                canUnlinkChannels: g,
                canManageBans: b,
                canAccessMembersPage: m,
                canViewGuildAnalytics: I,
                isOwner: E,
                isOwnerWithRequiredMfaLevel: p,
                showDirtyGuildTemplateIndicator: h,
                memberCount: S,
                onboardingStep: C,
                onboardingEnabled: T,
                welcomeScreenEmpty: f,
                guildMetadata: N,
                section: n,
                permissionMigrationAvailable: G,
            }),
            R = O.find((e) => e.section === n)?.predicate?.() !== !1,
            U = (0, y.x)();
        return (0, a.jsxs)("div", {
            children: [
                (0, a.jsx)(o.Ay, {
                    theme: e,
                    sidebarTheme: t,
                    section: R && null != n ? n : U,
                    onSetSection: M.A.setSection,
                    onClose: c.jH,
                    title: "" !== i.name ? i.name : w.intl.string(w.t["154/bL"]),
                    sections: O,
                }),
                (0, a.jsx)(A.w, { guildId: i.id }),
            ],
        });
    }
}
function P() {
    let {
            guild: e,
            section: t,
            analyticsLocation: n,
            guildMetadata: c,
            isGuildMetadataLoaded: o,
        } = (0, r.cf)([O.A], () => O.A.getProps()),
        { analyticsLocations: l } = (0, _.Ay)(s.A.GUILD_SETTINGS),
        A = (0, r.bG)([S.A], () => S.A.theme),
        D = (0, h.NC)(),
        y = (0, r.bG)([f.Ay], () => (null != e ? f.Ay.getChannels(e.id).SELECTABLE : null), [e]),
        w = (0, r.cf)([G.A], () => (null != e ? G.A.getGuildPermissionProps(e) : x)),
        L = e?.id,
        P = (0, r.bG)([G.A], () => null != e && G.A.canAccessGuildSettings(e));
    i.useEffect(() => {
        o || null == L || (0, d.mo)(L);
    }, [o, L]);
    let k = e?.features.has(U.GuildFeatures.COMMUNITY) ?? !1;
    i.useEffect(() => {
        null != L && k && ((0, u.jx)(L), (0, C.Fy)(L));
    }, [L, k]),
        i.useEffect(() => {
            null != L && (0, b.ag)(L);
        }, [L]);
    let v = (0, r.bG)([I.A], () => e?.id != null && I.A.getForGuild(e.id)?.isDirty === !0, [e]),
        H = (0, r.bG)([N.A], () => N.A.getMemberCount(e?.id), [e]);
    i.useEffect(() => {
        null != L && w.canManageGuild && m.A.loadTemplatesForGuild(L);
    }, [L, w.canManageGuild]),
        i.useEffect(() => {
            P || M.A.close();
        }, [P]);
    let W = (0, r.bG)([R.A], () => R.A.getCurrentPage()),
        F = (0, r.bG)([g.A], () => null != L && g.A.getEnabled(L)),
        j = (0, r.bG)([T.A], () => null != L && T.A.isEmpty(L)),
        V = (0, E.A)(L).length > 0,
        K = (0, p.A)(e);
    return (0, a.jsx)(_.f5, {
        value: l,
        children: (0, a.jsx)(B, {
            guild: e,
            section: t,
            theme: A,
            sidebarTheme: D,
            channels: y,
            showDirtyGuildTemplateIndicator: v,
            analyticsLocation: n,
            memberCount: H,
            ...w,
            canUnlinkChannels: V,
            canViewGuildAnalytics: w.canViewGuildAnalytics,
            onboardingStep: W,
            onboardingEnabled: F,
            welcomeScreenEmpty: j,
            guildMetadata: c,
            permissionMigrationAvailable: K,
        }),
    });
}
