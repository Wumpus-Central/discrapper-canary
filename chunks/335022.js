"use strict";
i.d(t, { A: () => P });
var n = i(627968),
    s = i(64700),
    a = i(382222),
    l = i(311907),
    r = i(397927),
    o = i(685399),
    d = i(508654),
    c = i(885631),
    u = i(487401),
    h = i(952790),
    _ = i(846930),
    p = i(355205),
    f = i(366811),
    m = i(924985),
    g = i(945886),
    A = i(72314),
    x = i(769765),
    v = i(808728),
    y = i(458294),
    E = i(71393),
    I = i(576705),
    S = i(584569),
    C = i(383501),
    N = i(309010),
    b = i(543465),
    T = i(607567),
    O = i(855790),
    L = i(714977),
    j = i(439817),
    w = i(652215),
    D = i(349828),
    R = i(985018),
    k = i(576999);
class M extends s.PureComponent {
    static getDerivedStateFromProps(e) {
        let { guild: t } = e;
        return null == t || null == t.banner ? { renderBanner: !1, bannerVisible: !1 } : null;
    }
    settingsIconRef = s.createRef();
    state = {
        controller: new a.Controller({ value: 1, immediate: !0 }),
        renderBanner: !1,
        bannerVisible: !1,
        communityInfoVisible: !1,
    };
    componentDidMount() {
        let { guildId: e } = this.props,
            { scrollTop: t } = A.A.getGuildDimensions(e);
        this.setAnimatedValue(t ?? 0);
    }
    componentDidUpdate(e) {
        let { guild: t, guildId: i } = this.props;
        if (e.guild !== t) {
            let { scrollTop: e } = A.A.getGuildDimensions(i);
            this.setAnimatedValue(e ?? 0);
        }
    }
    renderSettings(e) {
        let { closePopout: t } = e;
        return (0, n.jsx)(L.A, { onClose: t });
    }
    handleScroll = (e) => {
        let { scrollTop: t } = e;
        this.setAnimatedValue(t);
    };
    setAnimatedValue(e) {
        let { guild: t } = this.props,
            i = null != t && (0, c.A)(t);
        null != t &&
            (null != t.banner || i) &&
            (null != t.banner ? this.setAnimatedValueForBanner(e) : this.setAnimatedValueForCommunityInfo(e));
    }
    setAnimatedValueForBanner(e) {
        let { renderBanner: t, communityInfoVisible: i, bannerVisible: n, controller: s } = this.state;
        ((e >= 54 && n) || (e < 54 && !n)) && (n = !n),
            ((e >= 78 && !t) || (e < 78 && t)) && (t = !t),
            (i = n),
            (t !== this.state.renderBanner ||
                n !== this.state.bannerVisible ||
                i !== this.state.communityInfoVisible) &&
                this.setState({ renderBanner: t, bannerVisible: n, communityInfoVisible: i }),
            s.update({ value: Math.min(1, Math.max(0, 1 - e / 78)), immediate: !0 }).start();
    }
    setAnimatedValueForCommunityInfo(e) {
        let { communityInfoVisible: t, controller: i } = this.state;
        ((e >= 20 && t) || (e < 20 && !t)) && this.setState({ communityInfoVisible: !t }),
            i.update({ value: Math.min(1, Math.max(0, 1 - e / 20)), immediate: !0 }).start();
    }
    render() {
        let { onDragStart: e, ...t } = this.props,
            { guild: i } = t,
            { controller: s, renderBanner: a, bannerVisible: l, communityInfoVisible: o } = this.state,
            d = i?.id === D.Vc ? u.T : u.B;
        return (0, n.jsxs)(j.A, {
            header:
                null != i
                    ? (0, n.jsx)(h.Ay, {
                          guild: i,
                          controller: s,
                          renderBanner: a,
                          bannerVisible: l,
                          className: k.F,
                          headerClassName: k.D8,
                          onMouseDown: e,
                          disableBannerAnimation: !1,
                          communityInfoVisible: o,
                          children: (0, n.jsx)(r.YNO, {
                              targetElementRef: this.settingsIconRef,
                              position: "right",
                              renderPopout: this.renderSettings,
                              children: (e) =>
                                  (0, n.jsx)(O.Ay.Icon, {
                                      ref: this.settingsIconRef,
                                      icon: r.Zes,
                                      label: R.intl.string(R.t["3D5yo/"]),
                                      ...e,
                                  }),
                          }),
                      })
                    : null,
            children: [
                (0, n.jsx)("div", {
                    className: k.o5,
                    children:
                        null != i
                            ? (0, n.jsx)(d, {
                                  ...t,
                                  guild: i,
                                  disableManageChannels: !0,
                                  onScroll: null != i && null != i.banner ? this.handleScroll : null,
                              })
                            : (0, n.jsx)(_.A, { withBannerPadding: !1 }),
                }),
                null != i &&
                    (0, n.jsx)("section", {
                        className: k.C3,
                        "aria-label": R.intl.string(R.t.StREWK),
                        children: (0, n.jsx)(p.A, { guildId: i.id }),
                    }),
            ],
        });
    }
}
function P(e) {
    let { guildId: t } = e,
        i = (0, l.bG)([E.A], () => E.A.getGuild(t)),
        s = (0, l.bG)([v.Ay], () => v.Ay.getChannels(t)),
        a = (0, l.bG)([x.A], () => x.A.getCategories(t)),
        { mutedChannels: r, collapseMuted: c } = (0, l.cf)([b.Ay], () => ({
            mutedChannels: b.Ay.getMutedChannels(t),
            collapseMuted: b.Ay.isGuildCollapsed(t),
        })),
        u = (0, l.bG)([T.Ay], () => T.Ay.getVoiceStates(t)),
        h = (0, l.bG)([g.A], () => g.A.getCollapsed()),
        { scrollTo: _ } = (0, l.bG)([A.A], () => A.A.getGuildDimensions(t)),
        p = (0, f.A)((e) => {
            let { channelId: t } = e;
            return t;
        }),
        O = (0, l.bG)([N.A], () => N.A.getVoiceChannelId()),
        L = (0, l.bG)([I.A], () => I.A.getGuildVersion(t)),
        j = (0, l.bG)([m.A], () => m.A.version),
        D = (0, l.bG)([y.default], () => y.default.getGuildChangeSentinel(t)),
        R = (0, o.a1)(i?.id),
        k = (0, d.vj)(i?.id),
        P = i?.features.has(w.GuildFeatures.COMMUNITY) ?? !1,
        G = (0, l.bG)([C.A], () => C.A.getChannelId()),
        V = (0, l.bG)([S.A], () => S.A.desyncedVoiceStatesCount);
    return (0, n.jsx)(M, {
        guildId: t,
        guild: i,
        channels: s,
        categories: a,
        mutedChannels: r,
        scrollToChannel: _,
        selectedChannelId: p,
        selectedVoiceChannelId: O,
        voiceStates: u,
        rtcConnectedChannelId: G,
        rtcDesyncedVoiceStatesCount: V,
        collapsedChannels: h,
        collapseMuted: c,
        guildReadStateSentinel: D,
        permissionVersion: L,
        categoryCollapseVersion: j,
        embeddedAppsByChannel: R,
        activeEventsByChannel: k,
        showNewUnreadsBar: P,
        optInEnabled: !1,
    });
}
