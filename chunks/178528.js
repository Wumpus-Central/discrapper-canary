n.d(t, { Z: () => M }), n(388685);
var i = n(255367),
    r = n(73800),
    o = n(524979),
    l = n(442837),
    s = n(481060),
    a = n(619915),
    c = n(554747),
    d = n(373274),
    u = n(315174),
    h = n(591190),
    p = n(840780),
    f = n(905423),
    g = n(680089),
    m = n(58468),
    y = n(796974),
    O = n(324067),
    v = n(984933),
    _ = n(888369),
    b = n(430824),
    E = n(496675),
    S = n(878884),
    x = n(19780),
    C = n(944486),
    Z = n(9156),
    j = n(938475),
    I = n(518084),
    P = n(669083),
    w = n(711553),
    N = n(981631),
    T = n(647086),
    k = n(388032),
    D = n(506098);
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
function A(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                R(e, t, n[t]);
            });
    }
    return e;
}
class L extends r.PureComponent {
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
            { scrollTop: t } = y.Z.getGuildDimensions(e);
        this.setAnimatedValue(null != t ? t : 0);
    }
    componentDidUpdate(e) {
        let { guild: t, guildId: n } = this.props;
        if (e.guild !== t) {
            let { scrollTop: e } = y.Z.getGuildDimensions(n);
            this.setAnimatedValue(null != e ? e : 0);
        }
    }
    renderSettings(e) {
        let { closePopout: t } = e;
        return (0, i.jsx)(P.Z, { onClose: t });
    }
    setAnimatedValue(e) {
        let { guild: t } = this.props,
            n = null == t ? void 0 : t.hasCommunityInfoSubheader();
        null != t && (null != t.banner || n) && (null != t.banner ? this.setAnimatedValueForBanner(e) : this.setAnimatedValueForCommunityInfo(e));
    }
    setAnimatedValueForBanner(e) {
        let { renderBanner: t, communityInfoVisible: n, bannerVisible: i, controller: r } = this.state;
        ((e >= 54 && i) || (e < 54 && !i)) && (i = !i),
            ((e >= 78 && !t) || (e < 78 && t)) && (t = !t),
            (n = i),
            (t !== this.state.renderBanner || i !== this.state.bannerVisible || n !== this.state.communityInfoVisible) &&
                this.setState({
                    renderBanner: t,
                    bannerVisible: i,
                    communityInfoVisible: n
                }),
            r
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
        var e, t;
        let n = this.props,
            { onDragStart: r } = n,
            o = (function (e, t) {
                if (null == e) return {};
                var n,
                    i,
                    r = (function (e, t) {
                        if (null == e) return {};
                        var n,
                            i,
                            r = {},
                            o = Object.keys(e);
                        for (i = 0; i < o.length; i++) (n = o[i]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                        return r;
                    })(e, t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    for (i = 0; i < o.length; i++) (n = o[i]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
                }
                return r;
            })(n, ['onDragStart']),
            { guild: l } = o,
            { controller: a, renderBanner: c, bannerVisible: f, communityInfoVisible: g } = this.state,
            m = (null == l ? void 0 : l.id) === T._ ? d.j : d.E;
        return (0, i.jsxs)(w.Z, {
            header:
                null != l
                    ? (0, i.jsx)(u.ZP, {
                          guild: l,
                          controller: a,
                          renderBanner: c,
                          bannerVisible: f,
                          className: D.guildHeader,
                          headerClassName: D.guildHeaderInner,
                          onMouseDown: r,
                          disableBannerAnimation: !1,
                          communityInfoVisible: g,
                          children: (0, i.jsx)(s.yRy, {
                              targetElementRef: this.settingsIconRef,
                              position: 'right',
                              renderPopout: this.renderSettings,
                              children: (e) =>
                                  (0, i.jsx)(
                                      I.ZP.Icon,
                                      A(
                                          {
                                              ref: this.settingsIconRef,
                                              icon: s.ewm,
                                              label: k.intl.string(k.t['3D5yo6'])
                                          },
                                          e
                                      )
                                  )
                          })
                      })
                    : null,
            children: [
                (0, i.jsx)('div', {
                    className: D.channelList,
                    children:
                        null != l
                            ? (0, i.jsx)(
                                  m,
                                  ((e = A({}, o)),
                                  (t = t =
                                      {
                                          guild: l,
                                          disableManageChannels: !0,
                                          onScroll: null != l && null != l.banner ? this.handleScroll : null
                                      }),
                                  Object.getOwnPropertyDescriptors
                                      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
                                      : (function (e, t) {
                                            var n = Object.keys(e);
                                            if (Object.getOwnPropertySymbols) {
                                                var i = Object.getOwnPropertySymbols(e);
                                                n.push.apply(n, i);
                                            }
                                            return n;
                                        })(Object(t)).forEach(function (n) {
                                            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
                                        }),
                                  e)
                              )
                            : (0, i.jsx)(h.Z, { withBannerPadding: !1 })
                }),
                null != l &&
                    (0, i.jsx)('section', {
                        className: D.panels,
                        'aria-label': k.intl.string(k.t.StREWF),
                        children: (0, i.jsx)(p.Z, { guildId: l.id })
                    })
            ]
        });
    }
    constructor(...e) {
        super(...e),
            R(this, 'settingsIconRef', r.createRef()),
            R(this, 'state', {
                controller: new o.Controller({
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
function M(e) {
    var t;
    let { guildId: n } = e,
        r = (0, l.e7)([b.Z], () => b.Z.getGuild(n)),
        o = (0, l.e7)([v.ZP], () => v.ZP.getChannels(n)),
        s = (0, l.e7)([O.Z], () => O.Z.getCategories(n)),
        { mutedChannels: d, collapseMuted: u } = (0, l.cj)([Z.ZP], () => ({
            mutedChannels: Z.ZP.getMutedChannels(n),
            collapseMuted: Z.ZP.isGuildCollapsed(n)
        })),
        h = (0, l.e7)([j.ZP], () => j.ZP.getVoiceStates(n)),
        p = (0, l.e7)([m.Z], () => m.Z.getCollapsed()),
        { scrollTo: I } = (0, l.e7)([y.Z], () => y.Z.getGuildDimensions(n)),
        P = (0, f.Z)((e) => {
            let { channelId: t } = e;
            return t;
        }),
        w = (0, l.e7)([C.Z], () => C.Z.getVoiceChannelId()),
        T = (0, l.e7)([E.Z], () => E.Z.getGuildVersion(n)),
        k = (0, l.e7)([g.Z], () => g.Z.version),
        D = (0, l.e7)([_.default], () => _.default.getGuildChangeSentinel(n)),
        R = (0, a.QN)(null == r ? void 0 : r.id),
        A = (0, c.gM)(null == r ? void 0 : r.id),
        M = null != (t = null == r ? void 0 : r.hasFeature(N.oNc.COMMUNITY)) && t,
        z = (0, l.e7)([x.Z], () => x.Z.getChannelId()),
        V = (0, l.e7)([S.Z], () => S.Z.desyncedVoiceStatesCount);
    return (0, i.jsx)(L, {
        guildId: n,
        guild: r,
        channels: o,
        categories: s,
        mutedChannels: d,
        scrollToChannel: I,
        selectedChannelId: P,
        selectedVoiceChannelId: w,
        voiceStates: h,
        rtcConnectedChannelId: z,
        rtcDesyncedVoiceStatesCount: V,
        collapsedChannels: p,
        collapseMuted: u,
        guildReadStateSentinel: D,
        permissionVersion: T,
        categoryCollapseVersion: k,
        embeddedAppsByChannel: R,
        activeEventsByChannel: A,
        showNewUnreadsBar: M,
        optInEnabled: !1
    });
}
