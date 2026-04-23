"use strict";
n.r(t), n.d(t, { default: () => U });
var a = n(627968),
    i = n(64700),
    r = n(311907),
    s = n(398590),
    l = n(83257),
    o = n(793574),
    c = n(58149),
    d = n(688810),
    u = n(460760),
    _ = n(817818),
    h = n(591552),
    m = n(225142),
    g = n(292572),
    p = n(122906),
    f = n(475723),
    E = n(887501),
    A = n(97469),
    S = n(544028),
    I = n(447696),
    b = n(684407),
    C = n(808728),
    N = n(498642),
    T = n(576705),
    v = n(997509),
    D = n(555337),
    O = n(287479),
    M = n(110807),
    x = n(595818),
    R = n(652215),
    y = n(985018);
function w(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        n = arguments.length > 2 ? arguments[2] : void 0;
    c.Ay.trackWithMetadata(R.HAw.SETTINGS_PANE_VIEWED, {
        settings_type: "guild",
        origin_pane: t,
        destination_pane: e,
        location: n,
    });
}
let G = {
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
class L extends i.PureComponent {
    componentDidMount() {
        w(this.props.section, null, this.props.analyticsLocation);
    }
    componentWillUnmount() {
        v.A.close();
    }
    componentDidUpdate(e) {
        let { section: t } = e,
            {
                section: n,
                isGuildAdmin: a,
                canManageGuild: i,
                canManageRoles: r,
                canManageBans: l,
                canManageNicknames: o,
                canManageGuildExpressions: c,
                canViewAuditLog: d,
                canManageWebhooks: u,
                canUnlinkChannels: _,
                canAccessMembersPage: h,
                canViewGuildAnalytics: m,
            } = this.props;
        n !== t && w(n, t),
            ((a || i || r || l || o || c || d || h || u || _ || m) &&
                (d || n !== R.BEX.AUDIT_LOG) &&
                (r || n !== R.BEX.ROLES) &&
                (c || n !== R.BEX.EMOJI) &&
                (c || n !== R.BEX.STICKERS) &&
                (c || n !== R.BEX.SOUNDBOARD) &&
                (l || n !== R.BEX.BANS) &&
                (h || n !== R.BEX.MEMBERS)) ||
                (0, s.jH)();
    }
    render() {
        let {
            theme: e,
            sidebarTheme: t,
            section: n,
            guild: i,
            isGuildAdmin: r,
            canManageGuild: o,
            canViewAuditLog: c,
            canManageRoles: d,
            canManageGuildExpressions: u,
            canManageWebhooks: _,
            canUnlinkChannels: h,
            canManageBans: m,
            canAccessMembersPage: g,
            canViewGuildAnalytics: p,
            isOwner: E,
            isOwnerWithRequiredMfaLevel: A,
            showDirtyGuildTemplateIndicator: S,
            memberCount: I,
            onboardingStep: b,
            onboardingEnabled: C,
            welcomeScreenEmpty: N,
            guildMetadata: T,
        } = this.props;
        if (null == i) return null;
        let D = (0, M.SB)({
                guild: i,
                isGuildAdmin: r,
                canManageGuild: o,
                canViewAuditLog: c,
                canManageRoles: d,
                canManageGuildExpressions: u,
                canManageWebhooks: _,
                canUnlinkChannels: h,
                canManageBans: m,
                canAccessMembersPage: g,
                canViewGuildAnalytics: p,
                isOwner: E,
                isOwnerWithRequiredMfaLevel: A,
                showDirtyGuildTemplateIndicator: S,
                memberCount: I,
                onboardingStep: b,
                onboardingEnabled: C,
                welcomeScreenEmpty: N,
                guildMetadata: T,
                section: n,
            }),
            O = D.find((e) => e.section === n)?.predicate?.() !== !1,
            R = (0, x.x)();
        return (0, a.jsxs)("div", {
            children: [
                (0, a.jsx)(l.Ay, {
                    theme: e,
                    sidebarTheme: t,
                    section: O && null != n ? n : R,
                    onSetSection: v.A.setSection,
                    onClose: s.jH,
                    title: "" !== i.name ? i.name : y.intl.string(y.t["154/bL"]),
                    sections: D,
                }),
                (0, a.jsx)(f.w, { guildId: i.id }),
            ],
        });
    }
}
function U() {
    let {
            guild: e,
            section: t,
            analyticsLocation: n,
            guildMetadata: s,
            isGuildMetadataLoaded: l,
        } = (0, r.cf)([D.A], () => D.A.getProps()),
        { analyticsLocations: c } = (0, d.Ay)(o.A.GUILD_SETTINGS),
        f = (0, r.bG)([S.A], () => S.A.theme),
        M = (0, A.NC)(),
        x = (0, r.bG)([C.Ay], () => (null != e ? C.Ay.getChannels(e.id).SELECTABLE : null), [e]),
        y = (0, r.cf)([T.A], () => (null != e ? T.A.getGuildPermissionProps(e) : G)),
        w = e?.id,
        U = (0, r.bG)([T.A], () => null != e && T.A.canAccessGuildSettings(e));
    i.useEffect(() => {
        l || null == w || (0, u.mo)(w);
    }, [l, w]);
    let j = e?.features.has(R.GuildFeatures.COMMUNITY) ?? !1;
    i.useEffect(() => {
        null != w && j && ((0, _.jx)(w), (0, I.Fy)(w));
    }, [w, j]),
        i.useEffect(() => {
            null != w && (0, m.ag)(w);
        }, [w]);
    let B = (0, r.bG)([p.A], () => e?.id != null && p.A.getForGuild(e.id)?.isDirty === !0, [e]),
        P = (0, r.bG)([N.A], () => N.A.getMemberCount(e?.id), [e]);
    i.useEffect(() => {
        null != w && y.canManageGuild && g.A.loadTemplatesForGuild(w);
    }, [w, y.canManageGuild]),
        i.useEffect(() => {
            U || v.A.close();
        }, [U]);
    let k = (0, r.bG)([O.A], () => O.A.getCurrentPage()),
        H = (0, r.bG)([h.A], () => null != w && h.A.getEnabled(w)),
        F = (0, r.bG)([b.A], () => null != w && b.A.isEmpty(w)),
        V = (0, E.A)(w).length > 0;
    return (0, a.jsx)(d.f5, {
        value: c,
        children: (0, a.jsx)(L, {
            guild: e,
            section: t,
            theme: f,
            sidebarTheme: M,
            channels: x,
            showDirtyGuildTemplateIndicator: B,
            analyticsLocation: n,
            memberCount: P,
            ...y,
            canUnlinkChannels: V,
            canViewGuildAnalytics: y.canViewGuildAnalytics,
            onboardingStep: k,
            onboardingEnabled: H,
            welcomeScreenEmpty: F,
            guildMetadata: s,
        }),
    });
}
