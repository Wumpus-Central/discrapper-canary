(t.r(n), t.d(n, { GuildSettings: () => P, default: () => D }));
var i = t(477900),
    l = t(582128),
    s = t(17928),
    a = t(398590),
    c = t(83257),
    o = t(793574),
    u = t(666860),
    d = t(688810),
    r = t(460760),
    p = t(817818),
    g = t(591552),
    A = t(225142),
    h = t(292572),
    G = t(122906),
    S = t(699609),
    m = t(887501),
    b = t(97469),
    f = t(363195),
    E = t(225315),
    M = t(684407),
    y = t(808728),
    C = t(498642),
    w = t(576705),
    T = t(468689),
    j = t(555337),
    x = t(509860),
    k = t(277224),
    L = t(595818),
    V = t(652215),
    _ = t(105292);
function v(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        t = arguments.length > 2 ? arguments[2] : void 0;
    u.Ay.trackWithMetadata(V.HAw.SETTINGS_PANE_VIEWED, {
        settings_type: "guild",
        origin_pane: n,
        destination_pane: e,
        location: t,
    });
}
let I = {
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
class P extends l.PureComponent {
    componentDidMount() {
        (this.ensureValidSection(), v(this.props.section, null, this.props.analyticsLocation));
    }
    componentWillUnmount() {
        T.A.close();
    }
    componentDidUpdate(e) {
        let { section: n } = e,
            { section: t } = this.props;
        (this.ensureValidSection(), t !== n && v(t, n));
    }
    getSections() {
        let { guild: e } = this.props;
        return null != e ? (0, k.SB)({ ...this.props, guild: e }) : [];
    }
    getSelectedSection(e) {
        let n = e.filter((e) => null != e.element && (null == e.predicate || e.predicate())),
            t = (0, L.x)();
        return n.find((e) => e.section === this.props.section) ?? n.find((e) => e.section === t) ?? n[0];
    }
    ensureValidSection() {
        if (!this.props.canAccessGuildSettings) return void (0, a.jH)();
        let e = this.getSelectedSection(this.getSections());
        null == e ? (0, a.jH)() : e.section !== this.props.section && T.A.setSection(e.section);
    }
    render() {
        let { theme: e, sidebarTheme: n, guild: t, canAccessGuildSettings: l } = this.props;
        if (null == t || !l) return null;
        let s = this.getSections(),
            o = this.getSelectedSection(s);
        return null == o
            ? null
            : (0, i.jsxs)("div", {
                  children: [
                      (0, i.jsx)(c.A, {
                          theme: e,
                          sidebarTheme: n,
                          section: o.section,
                          onSetSection: T.A.setSection,
                          onClose: a.jH,
                          title: "" !== t.name ? t.name : _.intl.string(_.t["154/bL"]),
                          sections: s,
                      }),
                      (0, i.jsx)(S.w, { guildId: t.id }),
                  ],
              });
    }
}
function D() {
    let {
            guild: e,
            section: n,
            analyticsLocation: t,
            guildMetadata: a,
            isGuildMetadataLoaded: c,
        } = (0, s.cf)([j.A], () => j.A.getProps()),
        { analyticsLocations: u } = (0, d.Ay)(o.A.GUILD_SETTINGS),
        S = (0, s.bG)([f.A], () => f.A.theme),
        T = (0, b.NC)(),
        k = (0, s.bG)([y.Ay], () => (null != e ? y.Ay.getChannels(e.id).SELECTABLE : null), [e]),
        L = (0, s.cf)([w.A], () => (null != e ? w.A.getGuildPermissionProps(e) : I)),
        _ = e?.id,
        v = (0, s.bG)([w.A], () => null != e && w.A.canAccessGuildSettings(e));
    l.useEffect(() => {
        c || null == _ || (0, r.mo)(_);
    }, [c, _]);
    let D = e?.features.has(V.GuildFeatures.COMMUNITY) ?? !1;
    (l.useEffect(() => {
        null != _ && D && ((0, p.jx)(_), (0, E.Fy)(_));
    }, [_, D]),
        l.useEffect(() => {
            null != _ && (0, A.ag)(_);
        }, [_]));
    let N = (0, s.bG)([G.A], () => e?.id != null && G.A.getForGuild(e.id)?.isDirty === !0, [e]),
        U = (0, s.bG)([C.A], () => C.A.getMemberCount(e?.id), [e]);
    l.useEffect(() => {
        null != _ && L.canManageGuild && h.A.loadTemplatesForGuild(_);
    }, [_, L.canManageGuild]);
    let W = (0, s.bG)([x.A], () => x.A.getCurrentPage()),
        F = (0, s.bG)([g.A], () => null != _ && g.A.getEnabled(_)),
        H = (0, s.bG)([M.A], () => null != _ && M.A.isEmpty(_)),
        B = (0, m.A)(_).length > 0;
    return (0, i.jsx)(d.f5, {
        value: u,
        children: (0, i.jsx)(P, {
            guild: e,
            section: n,
            theme: S,
            sidebarTheme: T,
            channels: k,
            showDirtyGuildTemplateIndicator: N,
            analyticsLocation: t,
            memberCount: U,
            ...L,
            canUnlinkChannels: B,
            canAccessGuildSettings: v,
            canViewGuildAnalytics: L.canViewGuildAnalytics,
            onboardingStep: W,
            onboardingEnabled: F,
            welcomeScreenEmpty: H,
            guildMetadata: a,
        }),
    });
}
