n.r(l), n.d(l, { default: () => R });
var t = n(627968),
    a = n(64700),
    i = n(311907),
    s = n(398590),
    u = n(83257),
    r = n(793574),
    o = n(58149),
    c = n(688810),
    d = n(460760),
    h = n(817818),
    m = n(591552),
    p = n(225142),
    g = n(292572),
    A = n(122906),
    f = n(475723),
    v = n(887501),
    b = n(97469),
    E = n(544028),
    x = n(225315),
    C = n(684407),
    L = n(808728),
    G = n(498642),
    M = n(576705),
    y = n(997509),
    w = n(555337),
    S = n(287479),
    N = n(110807),
    j = n(595818),
    T = n(652215),
    I = n(985018);
function B(e) {
    let l = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        n = arguments.length > 2 ? arguments[2] : void 0;
    o.Ay.trackWithMetadata(T.HAw.SETTINGS_PANE_VIEWED, {
        settings_type: "guild",
        origin_pane: l,
        destination_pane: e,
        location: n,
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
class _ extends a.PureComponent {
    componentDidMount() {
        B(this.props.section, null, this.props.analyticsLocation);
    }
    componentWillUnmount() {
        y.A.close();
    }
    componentDidUpdate(e) {
        let { section: l } = e,
            {
                section: n,
                isGuildAdmin: t,
                canManageGuild: a,
                canManageRoles: i,
                canManageBans: u,
                canManageNicknames: r,
                canManageGuildExpressions: o,
                canViewAuditLog: c,
                canManageWebhooks: d,
                canUnlinkChannels: h,
                canAccessMembersPage: m,
                canViewGuildAnalytics: p,
            } = this.props;
        n !== l && B(n, l),
            ((t || a || i || u || r || o || c || m || d || h || p) &&
                (c || n !== T.BEX.AUDIT_LOG) &&
                (i || n !== T.BEX.ROLES) &&
                (o || n !== T.BEX.EMOJI) &&
                (o || n !== T.BEX.STICKERS) &&
                (o || n !== T.BEX.SOUNDBOARD) &&
                (u || n !== T.BEX.BANS) &&
                (m || n !== T.BEX.MEMBERS)) ||
                (0, s.jH)();
    }
    render() {
        let {
            theme: e,
            sidebarTheme: l,
            section: n,
            guild: a,
            isGuildAdmin: i,
            canManageGuild: r,
            canViewAuditLog: o,
            canManageRoles: c,
            canManageGuildExpressions: d,
            canManageWebhooks: h,
            canUnlinkChannels: m,
            canManageBans: p,
            canAccessMembersPage: g,
            canViewGuildAnalytics: A,
            isOwner: v,
            isOwnerWithRequiredMfaLevel: b,
            showDirtyGuildTemplateIndicator: E,
            memberCount: x,
            onboardingStep: C,
            onboardingEnabled: L,
            welcomeScreenEmpty: G,
            guildMetadata: M,
        } = this.props;
        if (null == a) return null;
        let w = (0, N.SB)({
                guild: a,
                isGuildAdmin: i,
                canManageGuild: r,
                canViewAuditLog: o,
                canManageRoles: c,
                canManageGuildExpressions: d,
                canManageWebhooks: h,
                canUnlinkChannels: m,
                canManageBans: p,
                canAccessMembersPage: g,
                canViewGuildAnalytics: A,
                isOwner: v,
                isOwnerWithRequiredMfaLevel: b,
                showDirtyGuildTemplateIndicator: E,
                memberCount: x,
                onboardingStep: C,
                onboardingEnabled: L,
                welcomeScreenEmpty: G,
                guildMetadata: M,
                section: n,
            }),
            S = w.find((e) => e.section === n)?.predicate?.() !== !1,
            T = (0, j.x)();
        return (0, t.jsxs)("div", {
            children: [
                (0, t.jsx)(u.Ay, {
                    theme: e,
                    sidebarTheme: l,
                    section: S && null != n ? n : T,
                    onSetSection: y.A.setSection,
                    onClose: s.jH,
                    title: "" !== a.name ? a.name : I.intl.string(I.t["154/bL"]),
                    sections: w,
                }),
                (0, t.jsx)(f.w, { guildId: a.id }),
            ],
        });
    }
}
function R() {
    let {
            guild: e,
            section: l,
            analyticsLocation: n,
            guildMetadata: s,
            isGuildMetadataLoaded: u,
        } = (0, i.cf)([w.A], () => w.A.getProps()),
        { analyticsLocations: o } = (0, c.Ay)(r.A.GUILD_SETTINGS),
        f = (0, i.bG)([E.A], () => E.A.theme),
        N = (0, b.NC)(),
        j = (0, i.bG)([L.Ay], () => (null != e ? L.Ay.getChannels(e.id).SELECTABLE : null), [e]),
        I = (0, i.cf)([M.A], () => (null != e ? M.A.getGuildPermissionProps(e) : k)),
        B = e?.id,
        R = (0, i.bG)([M.A], () => null != e && M.A.canAccessGuildSettings(e));
    a.useEffect(() => {
        u || null == B || (0, d.mo)(B);
    }, [u, B]);
    let V = e?.features.has(T.GuildFeatures.COMMUNITY) ?? !1;
    a.useEffect(() => {
        null != B && V && ((0, h.jx)(B), (0, x.Fy)(B));
    }, [B, V]),
        a.useEffect(() => {
            null != B && (0, p.ag)(B);
        }, [B]);
    let D = (0, i.bG)([A.A], () => e?.id != null && A.A.getForGuild(e.id)?.isDirty === !0, [e]),
        F = (0, i.bG)([G.A], () => G.A.getMemberCount(e?.id), [e]);
    a.useEffect(() => {
        null != B && I.canManageGuild && g.A.loadTemplatesForGuild(B);
    }, [B, I.canManageGuild]),
        a.useEffect(() => {
            R || y.A.close();
        }, [R]);
    let O = (0, i.bG)([S.A], () => S.A.getCurrentPage()),
        U = (0, i.bG)([m.A], () => null != B && m.A.getEnabled(B)),
        P = (0, i.bG)([C.A], () => null != B && C.A.isEmpty(B)),
        X = (0, v.A)(B).length > 0;
    return (0, t.jsx)(c.f5, {
        value: o,
        children: (0, t.jsx)(_, {
            guild: e,
            section: l,
            theme: f,
            sidebarTheme: N,
            channels: j,
            showDirtyGuildTemplateIndicator: D,
            analyticsLocation: n,
            memberCount: F,
            ...I,
            canUnlinkChannels: X,
            canViewGuildAnalytics: I.canViewGuildAnalytics,
            onboardingStep: O,
            onboardingEnabled: U,
            welcomeScreenEmpty: P,
            guildMetadata: s,
        }),
    });
}
