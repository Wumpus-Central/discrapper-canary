t.r(n), t.d(n, { default: () => j });
var i = t(627968),
    l = t(64700),
    s = t(311907),
    a = t(398590),
    r = t(83257),
    u = t(793574),
    c = t(58149),
    o = t(688810),
    E = t(460760),
    _ = t(817818),
    A = t(591552),
    I = t(225142),
    S = t(292572),
    d = t(122906),
    N = t(475723),
    G = t(887501),
    T = t(149280),
    g = t(97469),
    h = t(544028),
    O = t(447696),
    D = t(684407),
    M = t(808728),
    C = t(498642),
    f = t(576705),
    m = t(997509),
    R = t(555337),
    U = t(287479),
    b = t(110807),
    L = t(595818),
    p = t(652215),
    B = t(985018);
function w(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        t = arguments.length > 2 ? arguments[2] : void 0;
    c.Ay.trackWithMetadata(p.HAw.SETTINGS_PANE_VIEWED, {
        settings_type: "guild",
        origin_pane: n,
        destination_pane: e,
        location: t,
    });
}
let P = {
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
class y extends l.PureComponent {
    componentDidMount() {
        w(this.props.section, null, this.props.analyticsLocation);
    }
    componentWillUnmount() {
        m.A.close();
    }
    componentDidUpdate(e) {
        let { section: n } = e,
            {
                section: t,
                isGuildAdmin: i,
                canManageGuild: l,
                canManageRoles: s,
                canManageBans: r,
                canManageNicknames: u,
                canManageGuildExpressions: c,
                canViewAuditLog: o,
                canManageWebhooks: E,
                canUnlinkChannels: _,
                canAccessMembersPage: A,
                canViewGuildAnalytics: I,
            } = this.props;
        t !== n && w(t, n),
            ((i || l || s || r || u || c || o || A || E || _) &&
                (o || t !== p.BEX.AUDIT_LOG) &&
                (s || t !== p.BEX.ROLES) &&
                (c || t !== p.BEX.EMOJI) &&
                (c || t !== p.BEX.STICKERS) &&
                (c || t !== p.BEX.SOUNDBOARD) &&
                (r || t !== p.BEX.BANS) &&
                (I || t !== p.BEX.ANALYTICS) &&
                (A || t !== p.BEX.MEMBERS)) ||
                (0, a.jH)();
    }
    render() {
        let {
            theme: e,
            sidebarTheme: n,
            section: t,
            guild: l,
            isGuildAdmin: s,
            canManageGuild: u,
            canViewAuditLog: c,
            canManageRoles: o,
            canManageGuildExpressions: E,
            canManageWebhooks: _,
            canUnlinkChannels: A,
            canManageBans: I,
            canAccessMembersPage: S,
            canViewGuildAnalytics: d,
            isOwner: G,
            isOwnerWithRequiredMfaLevel: T,
            showDirtyGuildTemplateIndicator: g,
            memberCount: h,
            onboardingStep: O,
            onboardingEnabled: D,
            welcomeScreenEmpty: M,
            guildMetadata: C,
            permissionMigrationAvailable: f,
        } = this.props;
        if (null == l) return null;
        let R = (0, b.SB)({
                guild: l,
                isGuildAdmin: s,
                canManageGuild: u,
                canViewAuditLog: c,
                canManageRoles: o,
                canManageGuildExpressions: E,
                canManageWebhooks: _,
                canUnlinkChannels: A,
                canManageBans: I,
                canAccessMembersPage: S,
                canViewGuildAnalytics: d,
                isOwner: G,
                isOwnerWithRequiredMfaLevel: T,
                showDirtyGuildTemplateIndicator: g,
                memberCount: h,
                onboardingStep: O,
                onboardingEnabled: D,
                welcomeScreenEmpty: M,
                guildMetadata: C,
                section: t,
                permissionMigrationAvailable: f,
            }),
            U = R.find((e) => e.section === t)?.predicate?.() !== !1,
            p = (0, L.x)();
        return (0, i.jsxs)("div", {
            children: [
                (0, i.jsx)(r.Ay, {
                    theme: e,
                    sidebarTheme: n,
                    section: U && null != t ? t : p,
                    onSetSection: m.A.setSection,
                    onClose: a.jH,
                    title: "" !== l.name ? l.name : B.intl.string(B.t["154/bL"]),
                    sections: R,
                }),
                (0, i.jsx)(N.w, { guildId: l.id }),
            ],
        });
    }
}
function j() {
    let {
            guild: e,
            section: n,
            analyticsLocation: t,
            guildMetadata: a,
            isGuildMetadataLoaded: r,
        } = (0, s.cf)([R.A], () => R.A.getProps()),
        { analyticsLocations: c } = (0, o.Ay)(u.A.GUILD_SETTINGS),
        N = (0, s.bG)([h.A], () => h.A.theme),
        b = (0, g.NC)(),
        L = (0, s.bG)([M.Ay], () => (null != e ? M.Ay.getChannels(e.id).SELECTABLE : null), [e]),
        B = (0, s.cf)([f.A], () => (null != e ? f.A.getGuildPermissionProps(e) : P)),
        w = e?.id,
        j = (0, s.bG)([f.A], () => null != e && f.A.canAccessGuildSettings(e));
    l.useEffect(() => {
        r || null == w || (0, E.mo)(w);
    }, [r, w]);
    let H = e?.features.has(p.GuildFeatures.COMMUNITY) ?? !1;
    l.useEffect(() => {
        null != w && H && ((0, _.jx)(w), (0, O.Fy)(w));
    }, [w, H]),
        l.useEffect(() => {
            null != w && (0, I.ag)(w);
        }, [w]);
    let x = (0, s.bG)([d.A], () => e?.id != null && d.A.getForGuild(e.id)?.isDirty === !0, [e]),
        W = (0, s.bG)([C.A], () => C.A.getMemberCount(e?.id), [e]);
    l.useEffect(() => {
        null != w && B.canManageGuild && S.A.loadTemplatesForGuild(w);
    }, [w, B.canManageGuild]),
        l.useEffect(() => {
            j || m.A.close();
        }, [j]);
    let v = (0, s.bG)([U.A], () => U.A.getCurrentPage()),
        F = (0, s.bG)([A.A], () => null != w && A.A.getEnabled(w)),
        k = (0, s.bG)([D.A], () => null != w && D.A.isEmpty(w)),
        X = (0, G.A)(w).length > 0,
        V = (0, T.A)(e);
    return (0, i.jsx)(o.f5, {
        value: c,
        children: (0, i.jsx)(y, {
            guild: e,
            section: n,
            theme: N,
            sidebarTheme: b,
            channels: L,
            showDirtyGuildTemplateIndicator: x,
            analyticsLocation: t,
            memberCount: W,
            ...B,
            canUnlinkChannels: X,
            canViewGuildAnalytics: B.canViewGuildAnalytics,
            onboardingStep: v,
            onboardingEnabled: F,
            welcomeScreenEmpty: k,
            guildMetadata: a,
            permissionMigrationAvailable: V,
        }),
    });
}
