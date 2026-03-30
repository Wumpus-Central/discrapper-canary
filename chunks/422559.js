"use strict";
n.r(t), n.d(t, { default: () => B });
var r = n(627968),
    i = n(64700),
    a = n(311907),
    o = n(398590),
    s = n(83257),
    l = n(793574),
    c = n(58149),
    u = n(688810),
    _ = n(460760),
    d = n(817818),
    b = n(591552),
    m = n(225142),
    f = n(292572),
    h = n(122906),
    g = n(475723),
    E = n(887501),
    p = n(97469),
    A = n(544028),
    C = n(447696),
    S = n(684407),
    I = n(808728),
    N = n(498642),
    T = n(576705),
    G = n(997509),
    x = n(555337),
    R = n(287479),
    O = n(110807),
    w = n(595818),
    M = n(652215),
    D = n(985018);
function v(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        n = arguments.length > 2 ? arguments[2] : void 0;
    c.Ay.trackWithMetadata(M.HAw.SETTINGS_PANE_VIEWED, {
        settings_type: "guild",
        origin_pane: t,
        destination_pane: e,
        location: n,
    });
}
let L = {
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
class y extends i.PureComponent {
    componentDidMount() {
        v(this.props.section, null, this.props.analyticsLocation);
    }
    componentWillUnmount() {
        G.A.close();
    }
    componentDidUpdate(e) {
        let { section: t } = e,
            {
                section: n,
                isGuildAdmin: r,
                canManageGuild: i,
                canManageRoles: a,
                canManageBans: s,
                canManageNicknames: l,
                canManageGuildExpressions: c,
                canViewAuditLog: u,
                canManageWebhooks: _,
                canUnlinkChannels: d,
                canAccessMembersPage: b,
                canViewGuildAnalytics: m,
            } = this.props;
        n !== t && v(n, t),
            ((r || i || a || s || l || c || u || b || _ || d || m) &&
                (u || n !== M.BEX.AUDIT_LOG) &&
                (a || n !== M.BEX.ROLES) &&
                (c || n !== M.BEX.EMOJI) &&
                (c || n !== M.BEX.STICKERS) &&
                (c || n !== M.BEX.SOUNDBOARD) &&
                (s || n !== M.BEX.BANS) &&
                (b || n !== M.BEX.MEMBERS)) ||
                (0, o.jH)();
    }
    render() {
        let {
            theme: e,
            sidebarTheme: t,
            section: n,
            guild: i,
            isGuildAdmin: a,
            canManageGuild: l,
            canViewAuditLog: c,
            canManageRoles: u,
            canManageGuildExpressions: _,
            canManageWebhooks: d,
            canUnlinkChannels: b,
            canManageBans: m,
            canAccessMembersPage: f,
            canViewGuildAnalytics: h,
            isOwner: E,
            isOwnerWithRequiredMfaLevel: p,
            showDirtyGuildTemplateIndicator: A,
            memberCount: C,
            onboardingStep: S,
            onboardingEnabled: I,
            welcomeScreenEmpty: N,
            guildMetadata: T,
        } = this.props;
        if (null == i) return null;
        let x = (0, O.SB)({
                guild: i,
                isGuildAdmin: a,
                canManageGuild: l,
                canViewAuditLog: c,
                canManageRoles: u,
                canManageGuildExpressions: _,
                canManageWebhooks: d,
                canUnlinkChannels: b,
                canManageBans: m,
                canAccessMembersPage: f,
                canViewGuildAnalytics: h,
                isOwner: E,
                isOwnerWithRequiredMfaLevel: p,
                showDirtyGuildTemplateIndicator: A,
                memberCount: C,
                onboardingStep: S,
                onboardingEnabled: I,
                welcomeScreenEmpty: N,
                guildMetadata: T,
                section: n,
            }),
            R = x.find((e) => e.section === n)?.predicate?.() !== !1,
            M = (0, w.x)();
        return (0, r.jsxs)("div", {
            children: [
                (0, r.jsx)(s.Ay, {
                    theme: e,
                    sidebarTheme: t,
                    section: R && null != n ? n : M,
                    onSetSection: G.A.setSection,
                    onClose: o.jH,
                    title: "" !== i.name ? i.name : D.intl.string(D.t["154/bL"]),
                    sections: x,
                }),
                (0, r.jsx)(g.w, { guildId: i.id }),
            ],
        });
    }
}
function B() {
    let {
            guild: e,
            section: t,
            analyticsLocation: n,
            guildMetadata: o,
            isGuildMetadataLoaded: s,
        } = (0, a.cf)([x.A], () => x.A.getProps()),
        { analyticsLocations: c } = (0, u.Ay)(l.A.GUILD_SETTINGS),
        g = (0, a.bG)([A.A], () => A.A.theme),
        O = (0, p.NC)(),
        w = (0, a.bG)([I.Ay], () => (null != e ? I.Ay.getChannels(e.id).SELECTABLE : null), [e]),
        D = (0, a.cf)([T.A], () => (null != e ? T.A.getGuildPermissionProps(e) : L)),
        v = e?.id,
        B = (0, a.bG)([T.A], () => null != e && T.A.canAccessGuildSettings(e));
    i.useEffect(() => {
        s || null == v || (0, _.mo)(v);
    }, [s, v]);
    let U = e?.features.has(M.GuildFeatures.COMMUNITY) ?? !1;
    i.useEffect(() => {
        null != v && U && ((0, d.jx)(v), (0, C.Fy)(v));
    }, [v, U]),
        i.useEffect(() => {
            null != v && (0, m.ag)(v);
        }, [v]);
    let j = (0, a.bG)([h.A], () => e?.id != null && h.A.getForGuild(e.id)?.isDirty === !0, [e]),
        k = (0, a.bG)([N.A], () => N.A.getMemberCount(e?.id), [e]);
    i.useEffect(() => {
        null != v && D.canManageGuild && f.A.loadTemplatesForGuild(v);
    }, [v, D.canManageGuild]),
        i.useEffect(() => {
            B || G.A.close();
        }, [B]);
    let H = (0, a.bG)([R.A], () => R.A.getCurrentPage()),
        W = (0, a.bG)([b.A], () => null != v && b.A.getEnabled(v)),
        P = (0, a.bG)([S.A], () => null != v && S.A.isEmpty(v)),
        F = (0, E.A)(v).length > 0;
    return (0, r.jsx)(u.f5, {
        value: c,
        children: (0, r.jsx)(y, {
            guild: e,
            section: t,
            theme: g,
            sidebarTheme: O,
            channels: w,
            showDirtyGuildTemplateIndicator: j,
            analyticsLocation: n,
            memberCount: k,
            ...D,
            canUnlinkChannels: F,
            canViewGuildAnalytics: D.canViewGuildAnalytics,
            onboardingStep: H,
            onboardingEnabled: W,
            welcomeScreenEmpty: P,
            guildMetadata: o,
        }),
    });
}
