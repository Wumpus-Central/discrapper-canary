n.d(t, {
    Z: function () {
        return D;
    }
}),
    n(47120);
var i = n(200651),
    s = n(192379),
    r = n(666912),
    a = n(442837),
    o = n(481060),
    l = n(619915),
    d = n(554747),
    c = n(373274),
    u = n(315174),
    h = n(840780),
    p = n(905423),
    f = n(680089),
    g = n(58468),
    m = n(796974),
    v = n(324067),
    x = n(984933),
    _ = n(888369),
    S = n(430824),
    Z = n(496675),
    E = n(878884),
    C = n(19780),
    I = n(944486),
    y = n(9156),
    N = n(938475),
    b = n(518084),
    T = n(669083),
    O = n(711553),
    j = n(981631),
    M = n(647086),
    R = n(388032),
    P = n(389645);
function w(e, t, n) {
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
let A = 54;
class k extends s.PureComponent {
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
            { scrollTop: t } = m.Z.getGuildDimensions(e);
        this.setAnimatedValue(null != t ? t : 0);
    }
    componentDidUpdate(e) {
        let { guild: t, guildId: n } = this.props;
        if (e.guild !== t) {
            let { scrollTop: e } = m.Z.getGuildDimensions(n);
            this.setAnimatedValue(null != e ? e : 0);
        }
    }
    renderSettings(e) {
        let { closePopout: t } = e;
        return (0, i.jsx)(T.Z, { onClose: t });
    }
    setAnimatedValue(e) {
        let { guild: t } = this.props,
            n = null == t ? void 0 : t.hasCommunityInfoSubheader();
        if (null != t && (null != t.banner || !!n)) null != t.banner ? this.setAnimatedValueForBanner(e) : this.setAnimatedValueForCommunityInfo(e);
    }
    setAnimatedValueForBanner(e) {
        let { renderBanner: t, communityInfoVisible: n, bannerVisible: i, controller: s } = this.state;
        ((e >= A && i) || (e < A && !i)) && (i = !i),
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
            { controller: s, renderBanner: r, bannerVisible: a, communityInfoVisible: l } = this.state,
            d = n.id === M._ ? c.j : c.E;
        return (0, i.jsxs)(O.Z, {
            header: (0, i.jsx)(u.ZP, {
                guild: n,
                controller: s,
                renderBanner: r,
                bannerVisible: a,
                className: P.guildHeader,
                headerClassName: P.guildHeaderInner,
                onMouseDown: e,
                disableBannerAnimation: !1,
                communityInfoVisible: l,
                children: (0, i.jsx)(o.Popout, {
                    position: 'right',
                    renderPopout: this.renderSettings,
                    children: (e) =>
                        (0, i.jsx)(b.ZP.Icon, {
                            icon: o.SettingsIcon,
                            label: R.intl.string(R.t['3D5yo6']),
                            ...e
                        })
                })
            }),
            children: [
                (0, i.jsx)('div', {
                    className: P.channelList,
                    children: (0, i.jsx)(d, {
                        ...t,
                        guild: n,
                        disableManageChannels: !0,
                        onScroll: null != n && null != n.banner ? this.handleScroll : null
                    })
                }),
                (0, i.jsx)('section', {
                    className: P.panels,
                    'aria-label': R.intl.string(R.t.StREWF),
                    children: (0, i.jsx)(h.Z, { guildId: n.id })
                })
            ]
        });
    }
    constructor(...e) {
        super(...e),
            w(this, 'state', {
                controller: new r.Controller({
                    value: 1,
                    immediate: !0
                }),
                renderBanner: !1,
                bannerVisible: !1,
                communityInfoVisible: !1
            }),
            w(this, 'handleScroll', (e) => {
                let { scrollTop: t } = e;
                this.setAnimatedValue(t);
            });
    }
}
function D(e) {
    var t;
    let { guildId: n } = e,
        s = (0, a.e7)([S.Z], () => S.Z.getGuild(n)),
        r = (0, a.e7)([x.ZP], () => x.ZP.getChannels(n)),
        o = (0, a.e7)([v.Z], () => v.Z.getCategories(n)),
        { mutedChannels: c, collapseMuted: u } = (0, a.cj)([y.ZP], () => ({
            mutedChannels: y.ZP.getMutedChannels(n),
            collapseMuted: y.ZP.isGuildCollapsed(n)
        })),
        h = (0, a.e7)([N.ZP], () => N.ZP.getVoiceStates(n)),
        b = (0, a.e7)([g.Z], () => g.Z.getCollapsed()),
        { scrollTo: T } = (0, a.e7)([m.Z], () => m.Z.getGuildDimensions(n)),
        O = (0, p.Z)((e) => {
            let { channelId: t } = e;
            return t;
        }),
        M = (0, a.e7)([I.Z], () => I.Z.getVoiceChannelId()),
        R = (0, a.e7)([Z.Z], () => Z.Z.getGuildVersion(n)),
        P = (0, a.e7)([f.Z], () => f.Z.version),
        w = (0, a.e7)([_.default], () => _.default.getGuildChangeSentinel(n)),
        A = (0, l.QN)(null == s ? void 0 : s.id),
        D = (0, d.gM)(null == s ? void 0 : s.id),
        L = null !== (t = null == s ? void 0 : s.hasFeature(j.oNc.COMMUNITY)) && void 0 !== t && t,
        z = (0, a.e7)([C.Z], () => C.Z.getChannelId()),
        B = (0, a.e7)([E.Z], () => E.Z.desyncedVoiceStatesCount);
    return (0, i.jsx)(k, {
        guildId: n,
        guild: s,
        channels: r,
        categories: o,
        mutedChannels: c,
        scrollToChannel: T,
        selectedChannelId: O,
        selectedVoiceChannelId: M,
        voiceStates: h,
        rtcConnectedChannelId: z,
        rtcDesyncedVoiceStatesCount: B,
        collapsedChannels: b,
        collapseMuted: u,
        guildReadStateSentinel: w,
        permissionVersion: R,
        categoryCollapseVersion: P,
        embeddedAppsByChannel: A,
        activeEventsByChannel: D,
        showNewUnreadsBar: L,
        optInEnabled: !1
    });
}
