"use strict";
n.r(t), n.d(t, { default: () => v });
var i = n(627968),
    a = n(64700),
    r = n(311907),
    s = n(398590),
    o = n(83257),
    c = n(793574),
    l = n(58149),
    _ = n(688810),
    d = n(460760),
    u = n(817818),
    b = n(591552),
    g = n(225142),
    m = n(292572),
    I = n(122906),
    A = n(475723),
    f = n(887501),
    E = n(97469),
    S = n(544028),
    h = n(447696),
    p = n(684407),
    N = n(808728),
    T = n(498642),
    G = n(576705),
    C = n(997509),
    R = n(555337),
    O = n(287479),
    L = n(110807),
    D = n(595818),
    M = n(652215),
    U = n(985018);
function x(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        n = arguments.length > 2 ? arguments[2] : void 0;
    l.Ay.trackWithMetadata(M.HAw.SETTINGS_PANE_VIEWED, {
        settings_type: "guild",
        origin_pane: t,
        destination_pane: e,
        location: n,
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
class y extends a.PureComponent {
    componentDidMount() {
        x(this.props.section, null, this.props.analyticsLocation);
    }
    componentWillUnmount() {
        C.A.close();
    }
    componentDidUpdate(e) {
        let { section: t } = e,
            {
                section: n,
                isGuildAdmin: i,
                canManageGuild: a,
                canManageRoles: r,
                canManageBans: o,
                canManageNicknames: c,
                canManageGuildExpressions: l,
                canViewAuditLog: _,
                canManageWebhooks: d,
                canUnlinkChannels: u,
                canAccessMembersPage: b,
                canViewGuildAnalytics: g,
            } = this.props;
        n !== t && x(n, t),
            ((i || a || r || o || c || l || _ || b || d || u) &&
                (_ || n !== M.BEX.AUDIT_LOG) &&
                (r || n !== M.BEX.ROLES) &&
                (l || n !== M.BEX.EMOJI) &&
                (l || n !== M.BEX.STICKERS) &&
                (l || n !== M.BEX.SOUNDBOARD) &&
                (o || n !== M.BEX.BANS) &&
                (g || n !== M.BEX.ANALYTICS) &&
                (b || n !== M.BEX.MEMBERS)) ||
                (0, s.jH)();
    }
    render() {
        let {
            theme: e,
            sidebarTheme: t,
            section: n,
            guild: a,
            isGuildAdmin: r,
            canManageGuild: c,
            canViewAuditLog: l,
            canManageRoles: _,
            canManageGuildExpressions: d,
            canManageWebhooks: u,
            canUnlinkChannels: b,
            canManageBans: g,
            canAccessMembersPage: m,
            canViewGuildAnalytics: I,
            isOwner: f,
            isOwnerWithRequiredMfaLevel: E,
            showDirtyGuildTemplateIndicator: S,
            memberCount: h,
            onboardingStep: p,
            onboardingEnabled: N,
            welcomeScreenEmpty: T,
            guildMetadata: G,
        } = this.props;
        if (null == a) return null;
        let R = (0, L.SB)({
                guild: a,
                isGuildAdmin: r,
                canManageGuild: c,
                canViewAuditLog: l,
                canManageRoles: _,
                canManageGuildExpressions: d,
                canManageWebhooks: u,
                canUnlinkChannels: b,
                canManageBans: g,
                canAccessMembersPage: m,
                canViewGuildAnalytics: I,
                isOwner: f,
                isOwnerWithRequiredMfaLevel: E,
                showDirtyGuildTemplateIndicator: S,
                memberCount: h,
                onboardingStep: p,
                onboardingEnabled: N,
                welcomeScreenEmpty: T,
                guildMetadata: G,
                section: n,
            }),
            O = R.find((e) => e.section === n)?.predicate?.() !== !1,
            M = (0, D.x)();
        return (0, i.jsxs)("div", {
            children: [
                (0, i.jsx)(o.Ay, {
                    theme: e,
                    sidebarTheme: t,
                    section: O && null != n ? n : M,
                    onSetSection: C.A.setSection,
                    onClose: s.jH,
                    title: "" !== a.name ? a.name : U.intl.string(U.t["154/bL"]),
                    sections: R,
                }),
                (0, i.jsx)(A.w, { guildId: a.id }),
            ],
        });
    }
}
function v() {
    let {
            guild: e,
            section: t,
            analyticsLocation: n,
            guildMetadata: s,
            isGuildMetadataLoaded: o,
        } = (0, r.cf)([R.A], () => R.A.getProps()),
        { analyticsLocations: l } = (0, _.Ay)(c.A.GUILD_SETTINGS),
        A = (0, r.bG)([S.A], () => S.A.theme),
        L = (0, E.NC)(),
        D = (0, r.bG)([N.Ay], () => (null != e ? N.Ay.getChannels(e.id).SELECTABLE : null), [e]),
        U = (0, r.cf)([G.A], () => (null != e ? G.A.getGuildPermissionProps(e) : w)),
        x = e?.id,
        v = (0, r.bG)([G.A], () => null != e && G.A.canAccessGuildSettings(e));
    a.useEffect(() => {
        o || null == x || (0, d.mo)(x);
    }, [o, x]);
    let B = e?.features.has(M.GuildFeatures.COMMUNITY) ?? !1;
    a.useEffect(() => {
        null != x && B && ((0, u.jx)(x), (0, h.Fy)(x));
    }, [x, B]),
        a.useEffect(() => {
            null != x && (0, g.ag)(x);
        }, [x]);
    let P = (0, r.bG)([I.A], () => e?.id != null && I.A.getForGuild(e.id)?.isDirty === !0, [e]),
        k = (0, r.bG)([T.A], () => T.A.getMemberCount(e?.id), [e]);
    a.useEffect(() => {
        null != x && U.canManageGuild && m.A.loadTemplatesForGuild(x);
    }, [x, U.canManageGuild]),
        a.useEffect(() => {
            v || C.A.close();
        }, [v]);
    let H = (0, r.bG)([O.A], () => O.A.getCurrentPage()),
        j = (0, r.bG)([b.A], () => null != x && b.A.getEnabled(x)),
        W = (0, r.bG)([p.A], () => null != x && p.A.isEmpty(x)),
        F = (0, f.A)(x).length > 0;
    return (0, i.jsx)(_.f5, {
        value: l,
        children: (0, i.jsx)(y, {
            guild: e,
            section: t,
            theme: A,
            sidebarTheme: L,
            channels: D,
            showDirtyGuildTemplateIndicator: P,
            analyticsLocation: n,
            memberCount: k,
            ...U,
            canUnlinkChannels: F,
            canViewGuildAnalytics: U.canViewGuildAnalytics,
            onboardingStep: H,
            onboardingEnabled: j,
            welcomeScreenEmpty: W,
            guildMetadata: s,
        }),
    });
}
