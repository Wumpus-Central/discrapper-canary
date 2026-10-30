(t.r(n), t.d(n, { GuildSettings: () => D, default: () => N }));
var i = t(477900),
    s = t(582128),
    l = t(17928),
    a = t(398590),
    c = t(83257),
    o = t(793574),
    u = t(666860),
    d = t(688810),
    r = t(602881),
    g = t(460760),
    p = t(817818),
    A = t(591552),
    h = t(225142),
    G = t(292572),
    m = t(122906),
    S = t(699609),
    b = t(887501),
    f = t(97469),
    E = t(363195),
    M = t(225315),
    y = t(684407),
    C = t(808728),
    w = t(498642),
    T = t(576705),
    j = t(468689),
    k = t(555337),
    x = t(509860),
    L = t(204593),
    _ = t(595818),
    I = t(652215),
    V = t(105292);
function v(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        t = arguments.length > 2 ? arguments[2] : void 0;
    u.Ay.trackWithMetadata(I.HAw.SETTINGS_PANE_VIEWED, {
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
class D extends s.PureComponent {
    componentDidMount() {
        (this.ensureValidSection(), v(this.props.section, null, this.props.analyticsLocation));
    }
    componentWillUnmount() {
        j.A.close();
    }
    componentDidUpdate(e) {
        let { section: n } = e,
            { section: t } = this.props;
        (this.ensureValidSection(), t !== n && v(t, n));
    }
    getSections() {
        let { guild: e } = this.props;
        return null != e ? (0, L.SB)({ ...this.props, guild: e }) : [];
    }
    getSelectedSection(e) {
        let n = e.filter((e) => null != e.element && (null == e.predicate || e.predicate())),
            t = (0, _.x)();
        return n.find((e) => e.section === this.props.section) ?? n.find((e) => e.section === t) ?? n[0];
    }
    ensureValidSection() {
        if (!this.props.canAccessGuildSettings) return void (0, a.jH)();
        let e = this.getSelectedSection(this.getSections());
        null == e ? (0, a.jH)() : e.section !== this.props.section && j.A.setSection(e.section);
    }
    render() {
        let { theme: e, sidebarTheme: n, guild: t, canAccessGuildSettings: s } = this.props;
        if (null == t || !s) return null;
        let l = this.getSections(),
            o = this.getSelectedSection(l);
        return null == o
            ? null
            : (0, i.jsxs)("div", {
                  children: [
                      (0, i.jsx)(c.A, {
                          theme: e,
                          sidebarTheme: n,
                          section: o.section,
                          onSetSection: j.A.setSection,
                          onClose: a.jH,
                          title: "" !== t.name ? t.name : V.intl.string(V.t["154/bL"]),
                          sections: l,
                      }),
                      (0, i.jsx)(S.w, { guildId: t.id }),
                  ],
              });
    }
}
function N() {
    let {
            guild: e,
            section: n,
            analyticsLocation: t,
            guildMetadata: a,
            isGuildMetadataLoaded: c,
        } = (0, l.cf)([k.A], () => k.A.getProps()),
        { analyticsLocations: u } = (0, d.Ay)(o.A.GUILD_SETTINGS),
        S = (0, l.bG)([E.A], () => E.A.theme),
        j = (0, f.NC)(),
        L = (0, l.bG)([C.Ay], () => (null != e ? C.Ay.getChannels(e.id).SELECTABLE : null), [e]),
        _ = (0, l.cf)([T.A], () => (null != e ? T.A.getGuildPermissionProps(e) : P)),
        V = e?.id,
        v = (0, l.bG)([T.A], () => null != e && T.A.canAccessGuildSettings(e));
    s.useEffect(() => {
        c || null == V || (0, g.mo)(V);
    }, [c, V]);
    let N = e?.features.has(I.GuildFeatures.COMMUNITY) ?? !1;
    (s.useEffect(() => {
        null != V && N && ((0, p.jx)(V), (0, M.Fy)(V));
    }, [V, N]),
        s.useEffect(() => {
            null != V && (0, h.ag)(V);
        }, [V]));
    let U = (0, l.bG)([m.A], () => e?.id != null && m.A.getForGuild(e.id)?.isDirty === !0, [e]),
        W = (0, l.bG)([w.A], () => w.A.getMemberCount(e?.id), [e]);
    s.useEffect(() => {
        null != V && _.canManageGuild && G.A.loadTemplatesForGuild(V);
    }, [V, _.canManageGuild]);
    let F = (0, l.bG)([x.A], () => x.A.getCurrentPage()),
        H = (0, l.bG)([A.A], () => null != V && A.A.getEnabled(V)),
        O = (0, l.bG)([y.A], () => null != V && y.A.isEmpty(V)),
        B = (0, b.A)(V).length > 0,
        R = (0, r.mI)(V, "guild_settings");
    return (0, i.jsx)(d.f5, {
        value: u,
        children: (0, i.jsx)(D, {
            guild: e,
            section: n,
            theme: S,
            sidebarTheme: j,
            channels: L,
            showDirtyGuildTemplateIndicator: U,
            analyticsLocation: t,
            memberCount: W,
            ..._,
            canUnlinkChannels: B,
            canAccessGuildSettings: v,
            canViewGuildAnalytics: _.canViewGuildAnalytics,
            onboardingStep: F,
            onboardingEnabled: H,
            welcomeScreenEmpty: O,
            guildMetadata: a,
            isLinkedGameOrganizationEnabled: R,
        }),
    });
}
