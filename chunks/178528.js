n.d(t, { Z: () => A }), n(47120);
var i = n(200651),
    s = n(192379),
    l = n(642128),
    a = n(442837),
    r = n(481060),
    o = n(619915),
    d = n(554747),
    c = n(373274),
    u = n(315174),
    h = n(591190),
    p = n(840780),
    g = n(905423),
    f = n(680089),
    m = n(58468),
    _ = n(796974),
    v = n(324067),
    x = n(984933),
    S = n(888369),
    Z = n(430824),
    E = n(496675),
    C = n(878884),
    I = n(19780),
    y = n(944486),
    N = n(9156),
    T = n(938475),
    b = n(518084),
    O = n(669083),
    j = n(711553),
    k = n(981631),
    M = n(647086),
    w = n(388032),
    P = n(416645);
function R(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
class D extends s.PureComponent {
    static getDerivedStateFromProps(e) {
        let { guild: t } = e;
        return null == t || null == t.banner
            ? {
                  renderBanner: !1,
                  bannerVisible: !1
              }
            : null;
    }
    componentDidMount() {
        let { guildId: e } = this.props,
            { scrollTop: t } = _.Z.getGuildDimensions(e);
        this.setAnimatedValue(null != t ? t : 0);
    }
    componentDidUpdate(e) {
        let { guild: t, guildId: n } = this.props;
        if (e.guild !== t) {
            let { scrollTop: e } = _.Z.getGuildDimensions(n);
            this.setAnimatedValue(null != e ? e : 0);
        }
    }
    renderSettings(e) {
        let { closePopout: t } = e;
        return (0, i.jsx)(O.Z, { onClose: t });
    }
    setAnimatedValue(e) {
        let { guild: t } = this.props,
            n = null == t ? void 0 : t.hasCommunityInfoSubheader();
        null != t && (null != t.banner || n) && (null != t.banner ? this.setAnimatedValueForBanner(e) : this.setAnimatedValueForCommunityInfo(e));
    }
    setAnimatedValueForBanner(e) {
        let { renderBanner: t, communityInfoVisible: n, bannerVisible: i, controller: s } = this.state;
        ((e >= 54 && i) || (e < 54 && !i)) && (i = !i),
            ((e >= 78 && !t) || (e < 78 && t)) && (t = !t),
            (n = i),
            (t !== this.state.renderBanner || i !== this.state.bannerVisible || n !== this.state.communityInfoVisible) &&
                this.setState({
                    renderBanner: t,
                    bannerVisible: i,
                    communityInfoVisible: n
                }),
            s
                .update({
                    value: Math.min(1, Math.max(0, 1 - e / 78)),
                    immediate: !0
                })
                .start();
    }
    setAnimatedValueForCommunityInfo(e) {
        let { communityInfoVisible: t, controller: n } = this.state;
        ((e >= 20 && t) || (e < 20 && !t)) && this.setState({ communityInfoVisible: !t }),
            n
                .update({
                    value: Math.min(1, Math.max(0, 1 - e / 20)),
                    immediate: !0
                })
                .start();
    }
    render() {
        let { onDragStart: e, ...t } = this.props,
            { guild: n } = t,
            { controller: s, renderBanner: l, bannerVisible: a, communityInfoVisible: o } = this.state,
            d = (null == n ? void 0 : n.id) === M._ ? c.j : c.E;
        return (0, i.jsxs)(j.Z, {
            header:
                null != n
                    ? (0, i.jsx)(u.ZP, {
                          guild: n,
                          controller: s,
                          renderBanner: l,
                          bannerVisible: a,
                          className: P.guildHeader,
                          headerClassName: P.guildHeaderInner,
                          onMouseDown: e,
                          disableBannerAnimation: !1,
                          communityInfoVisible: o,
                          children: (0, i.jsx)(r.yRy, {
                              position: 'right',
                              renderPopout: this.renderSettings,
                              children: (e) =>
                                  (0, i.jsx)(b.ZP.Icon, {
                                      icon: r.ewm,
                                      label: w.intl.string(w.t['3D5yo6']),
                                      ...e
                                  })
                          })
                      })
                    : null,
            children: [
                (0, i.jsx)('div', {
                    className: P.channelList,
                    children:
                        null != n
                            ? (0, i.jsx)(d, {
                                  ...t,
                                  guild: n,
                                  disableManageChannels: !0,
                                  onScroll: null != n && null != n.banner ? this.handleScroll : null
                              })
                            : (0, i.jsx)(h.Z, { withBannerPadding: !1 })
                }),
                null != n &&
                    (0, i.jsx)('section', {
                        className: P.panels,
                        'aria-label': w.intl.string(w.t.StREWF),
                        children: (0, i.jsx)(p.Z, { guildId: n.id })
                    })
            ]
        });
    }
    constructor(...e) {
        super(...e),
            R(this, 'state', {
                controller: new l.Controller({
                    value: 1,
                    immediate: !0
                }),
                renderBanner: !1,
                bannerVisible: !1,
                communityInfoVisible: !1
            }),
            R(this, 'handleScroll', (e) => {
                let { scrollTop: t } = e;
                this.setAnimatedValue(t);
            });
    }
}
function A(e) {
    var t;
    let { guildId: n } = e,
        s = (0, a.e7)([Z.Z], () => Z.Z.getGuild(n)),
        l = (0, a.e7)([x.ZP], () => x.ZP.getChannels(n)),
        r = (0, a.e7)([v.Z], () => v.Z.getCategories(n)),
        { mutedChannels: c, collapseMuted: u } = (0, a.cj)([N.ZP], () => ({
            mutedChannels: N.ZP.getMutedChannels(n),
            collapseMuted: N.ZP.isGuildCollapsed(n)
        })),
        h = (0, a.e7)([T.ZP], () => T.ZP.getVoiceStates(n)),
        p = (0, a.e7)([m.Z], () => m.Z.getCollapsed()),
        { scrollTo: b } = (0, a.e7)([_.Z], () => _.Z.getGuildDimensions(n)),
        O = (0, g.Z)((e) => {
            let { channelId: t } = e;
            return t;
        }),
        j = (0, a.e7)([y.Z], () => y.Z.getVoiceChannelId()),
        M = (0, a.e7)([E.Z], () => E.Z.getGuildVersion(n)),
        w = (0, a.e7)([f.Z], () => f.Z.version),
        P = (0, a.e7)([S.default], () => S.default.getGuildChangeSentinel(n)),
        R = (0, o.QN)(null == s ? void 0 : s.id),
        A = (0, d.gM)(null == s ? void 0 : s.id),
        L = null !== (t = null == s ? void 0 : s.hasFeature(k.oNc.COMMUNITY)) && void 0 !== t && t,
        z = (0, a.e7)([I.Z], () => I.Z.getChannelId()),
        B = (0, a.e7)([C.Z], () => C.Z.desyncedVoiceStatesCount);
    return (0, i.jsx)(D, {
        guildId: n,
        guild: s,
        channels: l,
        categories: r,
        mutedChannels: c,
        scrollToChannel: b,
        selectedChannelId: O,
        selectedVoiceChannelId: j,
        voiceStates: h,
        rtcConnectedChannelId: z,
        rtcDesyncedVoiceStatesCount: B,
        collapsedChannels: p,
        collapseMuted: u,
        guildReadStateSentinel: P,
        permissionVersion: M,
        categoryCollapseVersion: w,
        embeddedAppsByChannel: R,
        activeEventsByChannel: A,
        showNewUnreadsBar: L,
        optInEnabled: !1
    });
}
