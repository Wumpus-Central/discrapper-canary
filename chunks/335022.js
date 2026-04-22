"use strict";
n.d(t, { A: () => G });
var i = n(627968),
    s = n(64700),
    l = n(517738),
    a = n(311907),
    r = n(265872),
    o = n(625903),
    d = n(685399),
    c = n(508654),
    u = n(885631),
    h = n(487401),
    p = n(952790),
    f = n(846930),
    A = n(355205),
    _ = n(366811),
    g = n(924985),
    m = n(945886),
    x = n(72314),
    E = n(769765),
    y = n(808728),
    v = n(458294),
    S = n(71393),
    C = n(576705),
    I = n(584569),
    N = n(383501),
    T = n(309010),
    b = n(543465),
    O = n(607567),
    j = n(855790),
    D = n(714977),
    R = n(439817),
    L = n(652215),
    w = n(349828),
    k = n(985018),
    M = n(602679);
class P extends s.PureComponent {
    static getDerivedStateFromProps(e) {
        let { guild: t } = e;
        return null == t || null == t.banner ? { renderBanner: !1, bannerVisible: !1 } : null;
    }
    settingsIconRef = s.createRef();
    state = {
        controller: new l.Controller({ value: 1, immediate: !0 }),
        renderBanner: !1,
        bannerVisible: !1,
        communityInfoVisible: !1,
    };
    componentDidMount() {
        let { guildId: e } = this.props,
            { scrollTop: t } = x.A.getGuildDimensions(e);
        this.setAnimatedValue(t ?? 0);
    }
    componentDidUpdate(e) {
        let { guild: t, guildId: n } = this.props;
        if (e.guild !== t) {
            let { scrollTop: e } = x.A.getGuildDimensions(n);
            this.setAnimatedValue(e ?? 0);
        }
    }
    renderSettings(e) {
        let { closePopout: t } = e;
        return (0, i.jsx)(D.A, { onClose: t });
    }
    handleScroll = (e) => {
        let { scrollTop: t } = e;
        this.setAnimatedValue(t);
    };
    setAnimatedValue(e) {
        let { guild: t } = this.props,
            n = null != t && (0, u.A)(t);
        null != t &&
            (null != t.banner || n) &&
            (null != t.banner ? this.setAnimatedValueForBanner(e) : this.setAnimatedValueForCommunityInfo(e));
    }
    setAnimatedValueForBanner(e) {
        let { renderBanner: t, communityInfoVisible: n, bannerVisible: i, controller: s } = this.state;
        ((e >= 54 && i) || (e < 54 && !i)) && (i = !i),
            ((e >= 78 && !t) || (e < 78 && t)) && (t = !t),
            (n = i),
            (t !== this.state.renderBanner ||
                i !== this.state.bannerVisible ||
                n !== this.state.communityInfoVisible) &&
                this.setState({ renderBanner: t, bannerVisible: i, communityInfoVisible: n }),
            s.update({ value: Math.min(1, Math.max(0, 1 - e / 78)), immediate: !0 }).start();
    }
    setAnimatedValueForCommunityInfo(e) {
        let { communityInfoVisible: t, controller: n } = this.state;
        ((e >= 20 && t) || (e < 20 && !t)) && this.setState({ communityInfoVisible: !t }),
            n.update({ value: Math.min(1, Math.max(0, 1 - e / 20)), immediate: !0 }).start();
    }
    render() {
        let { onDragStart: e, ...t } = this.props,
            { guild: n } = t,
            { controller: s, renderBanner: l, bannerVisible: a, communityInfoVisible: d } = this.state,
            c = n?.id === w.Vc ? h.T : h.B;
        return (0, i.jsxs)(R.A, {
            header:
                null != n
                    ? (0, i.jsx)(p.Ay, {
                          guild: n,
                          controller: s,
                          renderBanner: l,
                          bannerVisible: a,
                          className: M.F,
                          headerClassName: M.D8,
                          onMouseDown: e,
                          disableBannerAnimation: !1,
                          communityInfoVisible: d,
                          children: (0, i.jsx)(r.Y, {
                              targetElementRef: this.settingsIconRef,
                              position: "right",
                              renderPopout: this.renderSettings,
                              children: (e) =>
                                  (0, i.jsx)(j.Ay.Icon, {
                                      ref: this.settingsIconRef,
                                      icon: o.Z,
                                      label: k.intl.string(k.t["3D5yo/"]),
                                      ...e,
                                  }),
                          }),
                      })
                    : null,
            children: [
                (0, i.jsx)("div", {
                    className: M.o5,
                    children:
                        null != n
                            ? (0, i.jsx)(c, {
                                  ...t,
                                  guild: n,
                                  disableManageChannels: !0,
                                  onScroll: null != n && null != n.banner ? this.handleScroll : null,
                              })
                            : (0, i.jsx)(f.A, { withBannerPadding: !1 }),
                }),
                null != n &&
                    (0, i.jsx)("section", {
                        className: M.C3,
                        "aria-label": k.intl.string(k.t.StREWK),
                        children: (0, i.jsx)(A.A, { guildId: n.id }),
                    }),
            ],
        });
    }
}
function G(e) {
    let { guildId: t } = e,
        n = (0, a.bG)([S.A], () => S.A.getGuild(t)),
        s = (0, a.bG)([y.Ay], () => y.Ay.getChannels(t)),
        l = (0, a.bG)([E.A], () => E.A.getCategories(t)),
        { mutedChannels: r, collapseMuted: o } = (0, a.cf)([b.Ay], () => ({
            mutedChannels: b.Ay.getMutedChannels(t),
            collapseMuted: b.Ay.isGuildCollapsed(t),
        })),
        u = (0, a.bG)([O.Ay], () => O.Ay.getVoiceStates(t)),
        h = (0, a.bG)([m.A], () => m.A.getCollapsed()),
        { scrollTo: p } = (0, a.bG)([x.A], () => x.A.getGuildDimensions(t)),
        f = (0, _.A)((e) => {
            let { channelId: t } = e;
            return t;
        }),
        A = (0, a.bG)([T.A], () => T.A.getVoiceChannelId()),
        j = (0, a.bG)([C.A], () => C.A.getGuildVersion(t)),
        D = (0, a.bG)([g.A], () => g.A.version),
        R = (0, a.bG)([v.default], () => v.default.getGuildChangeSentinel(t)),
        w = (0, d.a1)(n?.id),
        k = (0, c.vj)(n?.id),
        M = n?.features.has(L.GuildFeatures.COMMUNITY) ?? !1,
        G = (0, a.bG)([N.A], () => N.A.getChannelId()),
        V = (0, a.bG)([I.A], () => I.A.desyncedVoiceStatesCount);
    return (0, i.jsx)(P, {
        guildId: t,
        guild: n,
        channels: s,
        categories: l,
        mutedChannels: r,
        scrollToChannel: p,
        selectedChannelId: f,
        selectedVoiceChannelId: A,
        voiceStates: u,
        rtcConnectedChannelId: G,
        rtcDesyncedVoiceStatesCount: V,
        collapsedChannels: h,
        collapseMuted: o,
        guildReadStateSentinel: R,
        permissionVersion: j,
        categoryCollapseVersion: D,
        embeddedAppsByChannel: w,
        activeEventsByChannel: k,
        showNewUnreadsBar: M,
        optInEnabled: !1,
    });
}
