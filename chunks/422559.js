"use strict";
n.r(t), n.d(t, { default: () => y });
var i = n(627968),
    r = n(64700),
    a = n(311907),
    s = n(398590),
    o = n(83257),
    l = n(793574),
    c = n(58149),
    _ = n(688810),
    d = n(460760),
    u = n(817818),
    b = n(591552),
    m = n(225142),
    h = n(292572),
    E = n(122906),
    g = n(475723),
    f = n(887501),
    I = n(149280),
    A = n(97469),
    S = n(544028),
    p = n(447696),
    C = n(684407),
    N = n(808728),
    T = n(498642),
    G = n(576705),
    O = n(997509),
    R = n(555337),
    x = n(287479),
    M = n(110807),
    D = n(595818),
    w = n(652215),
    L = n(985018);
function v(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        n = arguments.length > 2 ? arguments[2] : void 0;
    c.Ay.trackWithMetadata(w.HAw.SETTINGS_PANE_VIEWED, {
        settings_type: "guild",
        origin_pane: t,
        destination_pane: e,
        location: n,
    });
}
let B = {
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
class U extends r.PureComponent {
    componentDidMount() {
        v(this.props.section, null, this.props.analyticsLocation);
    }
    componentWillUnmount() {
        O.A.close();
    }
    componentDidUpdate(e) {
        let { section: t } = e,
            {
                section: n,
                isGuildAdmin: i,
                canManageGuild: r,
                canManageRoles: a,
                canManageBans: o,
                canManageNicknames: l,
                canManageGuildExpressions: c,
                canViewAuditLog: _,
                canManageWebhooks: d,
                canUnlinkChannels: u,
                canAccessMembersPage: b,
                canViewGuildAnalytics: m,
            } = this.props;
        n !== t && v(n, t),
            ((i || r || a || o || l || c || _ || b || d || u) &&
                (_ || n !== w.BEX.AUDIT_LOG) &&
                (a || n !== w.BEX.ROLES) &&
                (c || n !== w.BEX.EMOJI) &&
                (c || n !== w.BEX.STICKERS) &&
                (c || n !== w.BEX.SOUNDBOARD) &&
                (o || n !== w.BEX.BANS) &&
                (m || n !== w.BEX.ANALYTICS) &&
                (b || n !== w.BEX.MEMBERS)) ||
                (0, s.jH)();
    }
    render() {
        let {
            theme: e,
            sidebarTheme: t,
            section: n,
            guild: r,
            isGuildAdmin: a,
            canManageGuild: l,
            canViewAuditLog: c,
            canManageRoles: _,
            canManageGuildExpressions: d,
            canManageWebhooks: u,
            canUnlinkChannels: b,
            canManageBans: m,
            canAccessMembersPage: h,
            canViewGuildAnalytics: E,
            isOwner: f,
            isOwnerWithRequiredMfaLevel: I,
            showDirtyGuildTemplateIndicator: A,
            memberCount: S,
            onboardingStep: p,
            onboardingEnabled: C,
            welcomeScreenEmpty: N,
            guildMetadata: T,
            permissionMigrationAvailable: G,
        } = this.props;
        if (null == r) return null;
        let R = (0, M.SB)({
                guild: r,
                isGuildAdmin: a,
                canManageGuild: l,
                canViewAuditLog: c,
                canManageRoles: _,
                canManageGuildExpressions: d,
                canManageWebhooks: u,
                canUnlinkChannels: b,
                canManageBans: m,
                canAccessMembersPage: h,
                canViewGuildAnalytics: E,
                isOwner: f,
                isOwnerWithRequiredMfaLevel: I,
                showDirtyGuildTemplateIndicator: A,
                memberCount: S,
                onboardingStep: p,
                onboardingEnabled: C,
                welcomeScreenEmpty: N,
                guildMetadata: T,
                section: n,
                permissionMigrationAvailable: G,
            }),
            x = R.find((e) => e.section === n)?.predicate?.() !== !1,
            w = (0, D.x)();
        return (0, i.jsxs)("div", {
            children: [
                (0, i.jsx)(o.Ay, {
                    theme: e,
                    sidebarTheme: t,
                    section: x && null != n ? n : w,
                    onSetSection: O.A.setSection,
                    onClose: s.jH,
                    title: "" !== r.name ? r.name : L.intl.string(L.t["154/bL"]),
                    sections: R,
                }),
                (0, i.jsx)(g.w, { guildId: r.id }),
            ],
        });
    }
}
function y() {
    let {
            guild: e,
            section: t,
            analyticsLocation: n,
            guildMetadata: s,
            isGuildMetadataLoaded: o,
        } = (0, a.cf)([R.A], () => R.A.getProps()),
        { analyticsLocations: c } = (0, _.Ay)(l.A.GUILD_SETTINGS),
        g = (0, a.bG)([S.A], () => S.A.theme),
        M = (0, A.NC)(),
        D = (0, a.bG)([N.Ay], () => (null != e ? N.Ay.getChannels(e.id).SELECTABLE : null), [e]),
        L = (0, a.cf)([G.A], () => (null != e ? G.A.getGuildPermissionProps(e) : B)),
        v = e?.id,
        y = (0, a.bG)([G.A], () => null != e && G.A.canAccessGuildSettings(e));
    r.useEffect(() => {
        o || null == v || (0, d.mo)(v);
    }, [o, v]);
    let j = e?.features.has(w.GuildFeatures.COMMUNITY) ?? !1;
    r.useEffect(() => {
        null != v && j && ((0, u.jx)(v), (0, p.Fy)(v));
    }, [v, j]),
        r.useEffect(() => {
            null != v && (0, m.ag)(v);
        }, [v]);
    let k = (0, a.bG)([E.A], () => e?.id != null && E.A.getForGuild(e.id)?.isDirty === !0, [e]),
        P = (0, a.bG)([T.A], () => T.A.getMemberCount(e?.id), [e]);
    r.useEffect(() => {
        null != v && L.canManageGuild && h.A.loadTemplatesForGuild(v);
    }, [v, L.canManageGuild]),
        r.useEffect(() => {
            y || O.A.close();
        }, [y]);
    let H = (0, a.bG)([x.A], () => x.A.getCurrentPage()),
        W = (0, a.bG)([b.A], () => null != v && b.A.getEnabled(v)),
        F = (0, a.bG)([C.A], () => null != v && C.A.isEmpty(v)),
        z = (0, f.A)(v).length > 0,
        X = (0, I.A)(e);
    return (0, i.jsx)(_.f5, {
        value: c,
        children: (0, i.jsx)(U, {
            guild: e,
            section: t,
            theme: g,
            sidebarTheme: M,
            channels: D,
            showDirtyGuildTemplateIndicator: k,
            analyticsLocation: n,
            memberCount: P,
            ...L,
            canUnlinkChannels: z,
            canViewGuildAnalytics: L.canViewGuildAnalytics,
            onboardingStep: H,
            onboardingEnabled: W,
            welcomeScreenEmpty: F,
            guildMetadata: s,
            permissionMigrationAvailable: X,
        }),
    });
}
