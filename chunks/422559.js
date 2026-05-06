t.r(n), t.d(n, { default: () => O });
var i = t(627968),
    l = t(64700),
    a = t(17928),
    s = t(398590),
    c = t(83257),
    o = t(793574),
    u = t(95561),
    d = t(688810),
    r = t(460760),
    A = t(817818),
    g = t(591552),
    p = t(225142),
    E = t(292572),
    h = t(122906),
    G = t(699609),
    m = t(887501),
    b = t(97469),
    f = t(363195),
    M = t(225315),
    S = t(684407),
    y = t(808728),
    C = t(498642),
    B = t(576705),
    w = t(468689),
    T = t(555337),
    I = t(287479),
    L = t(594467),
    x = t(595818),
    D = t(652215),
    _ = t(375708);
function j(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        t = arguments.length > 2 ? arguments[2] : void 0;
    u.Ay.trackWithMetadata(D.HAw.SETTINGS_PANE_VIEWED, {
        settings_type: "guild",
        origin_pane: n,
        destination_pane: e,
        location: t,
    });
}
let k = {
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
class N extends l.PureComponent {
    componentDidMount() {
        j(this.props.section, null, this.props.analyticsLocation);
    }
    componentWillUnmount() {
        w.A.close();
    }
    componentDidUpdate(e) {
        let { section: n } = e,
            {
                section: t,
                isGuildAdmin: i,
                canManageGuild: l,
                canManageRoles: a,
                canManageBans: c,
                canManageNicknames: o,
                canManageGuildExpressions: u,
                canViewAuditLog: d,
                canManageWebhooks: r,
                canUnlinkChannels: A,
                canAccessMembersPage: g,
                canViewGuildAnalytics: p,
            } = this.props;
        t !== n && j(t, n),
            ((i || l || a || c || o || u || d || g || r || A || p) &&
                (d || t !== D.BEX.AUDIT_LOG) &&
                (a || t !== D.BEX.ROLES) &&
                (u || t !== D.BEX.EMOJI) &&
                (u || t !== D.BEX.STICKERS) &&
                (u || t !== D.BEX.SOUNDBOARD) &&
                (c || t !== D.BEX.BANS) &&
                (g || t !== D.BEX.MEMBERS)) ||
                (0, s.jH)();
    }
    render() {
        let {
            theme: e,
            sidebarTheme: n,
            section: t,
            guild: l,
            isGuildAdmin: a,
            canManageGuild: o,
            canViewAuditLog: u,
            canManageRoles: d,
            canManageGuildExpressions: r,
            canManageWebhooks: A,
            canUnlinkChannels: g,
            canManageBans: p,
            canAccessMembersPage: E,
            canViewGuildAnalytics: h,
            isOwner: m,
            isOwnerWithRequiredMfaLevel: b,
            showDirtyGuildTemplateIndicator: f,
            memberCount: M,
            onboardingStep: S,
            onboardingEnabled: y,
            welcomeScreenEmpty: C,
            guildMetadata: B,
        } = this.props;
        if (null == l) return null;
        let T = (0, L.SB)({
                guild: l,
                isGuildAdmin: a,
                canManageGuild: o,
                canViewAuditLog: u,
                canManageRoles: d,
                canManageGuildExpressions: r,
                canManageWebhooks: A,
                canUnlinkChannels: g,
                canManageBans: p,
                canAccessMembersPage: E,
                canViewGuildAnalytics: h,
                isOwner: m,
                isOwnerWithRequiredMfaLevel: b,
                showDirtyGuildTemplateIndicator: f,
                memberCount: M,
                onboardingStep: S,
                onboardingEnabled: y,
                welcomeScreenEmpty: C,
                guildMetadata: B,
                section: t,
            }),
            I = T.find((e) => e.section === t)?.predicate?.() !== !1,
            D = (0, x.x)();
        return (0, i.jsxs)("div", {
            children: [
                (0, i.jsx)(c.Ay, {
                    theme: e,
                    sidebarTheme: n,
                    section: I && null != t ? t : D,
                    onSetSection: w.A.setSection,
                    onClose: s.jH,
                    title: "" !== l.name ? l.name : _.intl.string(_.t["154/bL"]),
                    sections: T,
                }),
                (0, i.jsx)(G.w, { guildId: l.id }),
            ],
        });
    }
}
function O() {
    let {
            guild: e,
            section: n,
            analyticsLocation: t,
            guildMetadata: s,
            isGuildMetadataLoaded: c,
        } = (0, a.cf)([T.A], () => T.A.getProps()),
        { analyticsLocations: u } = (0, d.Ay)(o.A.GUILD_SETTINGS),
        G = (0, a.bG)([f.A], () => f.A.theme),
        L = (0, b.NC)(),
        x = (0, a.bG)([y.Ay], () => (null != e ? y.Ay.getChannels(e.id).SELECTABLE : null), [e]),
        _ = (0, a.cf)([B.A], () => (null != e ? B.A.getGuildPermissionProps(e) : k)),
        j = e?.id,
        O = (0, a.bG)([B.A], () => null != e && B.A.canAccessGuildSettings(e));
    l.useEffect(() => {
        c || null == j || (0, r.mo)(j);
    }, [c, j]);
    let P = e?.features.has(D.GuildFeatures.COMMUNITY) ?? !1;
    l.useEffect(() => {
        null != j && P && ((0, A.jx)(j), (0, M.Fy)(j));
    }, [j, P]),
        l.useEffect(() => {
            null != j && (0, p.ag)(j);
        }, [j]);
    let U = (0, a.bG)([h.A], () => e?.id != null && h.A.getForGuild(e.id)?.isDirty === !0, [e]),
        X = (0, a.bG)([C.A], () => C.A.getMemberCount(e?.id), [e]);
    l.useEffect(() => {
        null != j && _.canManageGuild && E.A.loadTemplatesForGuild(j);
    }, [j, _.canManageGuild]),
        l.useEffect(() => {
            O || w.A.close();
        }, [O]);
    let v = (0, a.bG)([I.A], () => I.A.getCurrentPage()),
        R = (0, a.bG)([g.A], () => null != j && g.A.getEnabled(j)),
        V = (0, a.bG)([S.A], () => null != j && S.A.isEmpty(j)),
        W = (0, m.A)(j).length > 0;
    return (0, i.jsx)(d.f5, {
        value: u,
        children: (0, i.jsx)(N, {
            guild: e,
            section: n,
            theme: G,
            sidebarTheme: L,
            channels: x,
            showDirtyGuildTemplateIndicator: U,
            analyticsLocation: t,
            memberCount: X,
            ..._,
            canUnlinkChannels: W,
            canViewGuildAnalytics: _.canViewGuildAnalytics,
            onboardingStep: v,
            onboardingEnabled: R,
            welcomeScreenEmpty: V,
            guildMetadata: s,
        }),
    });
}
