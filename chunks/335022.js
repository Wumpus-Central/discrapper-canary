"use strict";
n.d(t, { A: () => P });
var i = n(627968),
    s = n(64700),
    l = n(522160),
    a = n(311907),
    r = n(397927),
    o = n(685399),
    d = n(508654),
    c = n(885631),
    u = n(487401),
    h = n(952790),
    p = n(846930),
    A = n(355205),
    f = n(366811),
    g = n(924985),
    _ = n(945886),
    m = n(72314),
    x = n(769765),
    E = n(808728),
    v = n(458294),
    y = n(71393),
    S = n(576705),
    C = n(584569),
    I = n(383501),
    N = n(309010),
    T = n(543465),
    j = n(607567),
    O = n(855790),
    b = n(714977),
    D = n(439817),
    R = n(652215),
    w = n(349828),
    L = n(985018),
    M = n(852388);
class k extends s.PureComponent {
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
            { scrollTop: t } = m.A.getGuildDimensions(e);
        this.setAnimatedValue(t ?? 0);
    }
    componentDidUpdate(e) {
        let { guild: t, guildId: n } = this.props;
        if (e.guild !== t) {
            let { scrollTop: e } = m.A.getGuildDimensions(n);
            this.setAnimatedValue(e ?? 0);
        }
    }
    renderSettings(e) {
        let { closePopout: t } = e;
        return (0, i.jsx)(b.A, { onClose: t });
    }
    handleScroll = (e) => {
        let { scrollTop: t } = e;
        this.setAnimatedValue(t);
    };
    setAnimatedValue(e) {
        let { guild: t } = this.props,
            n = null != t && (0, c.A)(t);
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
            { controller: s, renderBanner: l, bannerVisible: a, communityInfoVisible: o } = this.state,
            d = n?.id === w.V ? u.T : u.B;
        return (0, i.jsxs)(D.A, {
            header:
                null != n
                    ? (0, i.jsx)(h.Ay, {
                          guild: n,
                          controller: s,
                          renderBanner: l,
                          bannerVisible: a,
                          className: M.F,
                          headerClassName: M.D8,
                          onMouseDown: e,
                          disableBannerAnimation: !1,
                          communityInfoVisible: o,
                          children: (0, i.jsx)(r.YNO, {
                              targetElementRef: this.settingsIconRef,
                              position: "right",
                              renderPopout: this.renderSettings,
                              children: (e) =>
                                  (0, i.jsx)(O.Ay.Icon, {
                                      ref: this.settingsIconRef,
                                      icon: r.Zes,
                                      label: L.intl.string(L.t["3D5yo/"]),
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
                            ? (0, i.jsx)(d, {
                                  ...t,
                                  guild: n,
                                  disableManageChannels: !0,
                                  onScroll: null != n && null != n.banner ? this.handleScroll : null,
                              })
                            : (0, i.jsx)(p.A, { withBannerPadding: !1 }),
                }),
                null != n &&
                    (0, i.jsx)("section", {
                        className: M.C3,
                        "aria-label": L.intl.string(L.t.StREWK),
                        children: (0, i.jsx)(A.A, { guildId: n.id }),
                    }),
            ],
        });
    }
}
function P(e) {
    let { guildId: t } = e,
        n = (0, a.bG)([y.A], () => y.A.getGuild(t)),
        s = (0, a.bG)([E.Ay], () => E.Ay.getChannels(t)),
        l = (0, a.bG)([x.A], () => x.A.getCategories(t)),
        { mutedChannels: r, collapseMuted: c } = (0, a.cf)([T.Ay], () => ({
            mutedChannels: T.Ay.getMutedChannels(t),
            collapseMuted: T.Ay.isGuildCollapsed(t),
        })),
        u = (0, a.bG)([j.Ay], () => j.Ay.getVoiceStates(t)),
        h = (0, a.bG)([_.A], () => _.A.getCollapsed()),
        { scrollTo: p } = (0, a.bG)([m.A], () => m.A.getGuildDimensions(t)),
        A = (0, f.A)((e) => {
            let { channelId: t } = e;
            return t;
        }),
        O = (0, a.bG)([N.A], () => N.A.getVoiceChannelId()),
        b = (0, a.bG)([S.A], () => S.A.getGuildVersion(t)),
        D = (0, a.bG)([g.A], () => g.A.version),
        w = (0, a.bG)([v.default], () => v.default.getGuildChangeSentinel(t)),
        L = (0, o.a1)(n?.id),
        M = (0, d.vj)(n?.id),
        P = n?.features.has(R.GuildFeatures.COMMUNITY) ?? !1,
        G = (0, a.bG)([I.A], () => I.A.getChannelId()),
        U = (0, a.bG)([C.A], () => C.A.desyncedVoiceStatesCount);
    return (0, i.jsx)(k, {
        guildId: t,
        guild: n,
        channels: s,
        categories: l,
        mutedChannels: r,
        scrollToChannel: p,
        selectedChannelId: A,
        selectedVoiceChannelId: O,
        voiceStates: u,
        rtcConnectedChannelId: G,
        rtcDesyncedVoiceStatesCount: U,
        collapsedChannels: h,
        collapseMuted: c,
        guildReadStateSentinel: w,
        permissionVersion: b,
        categoryCollapseVersion: D,
        embeddedAppsByChannel: L,
        activeEventsByChannel: M,
        showNewUnreadsBar: P,
        optInEnabled: !1,
    });
}
