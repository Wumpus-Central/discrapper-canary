n.d(t, { Z: () => z }), n(388685);
var i = n(54381),
    r = n(473749),
    a = n(620792),
    s = n(442837),
    o = n(481060),
    l = n(619915),
    c = n(554747),
    d = n(598056),
    u = n(373274),
    f = n(315174),
    h = n(591190),
    p = n(840780),
    g = n(905423),
    b = n(680089),
    m = n(58468),
    y = n(796974),
    v = n(324067),
    O = n(984933),
    E = n(888369),
    x = n(430824),
    S = n(496675),
    _ = n(878884),
    Z = n(19780),
    j = n(944486),
    C = n(9156),
    I = n(938475),
    P = n(518084),
    w = n(312186),
    T = n(711553),
    N = n(981631),
    D = n(647086),
    k = n(388032),
    R = n(139901);
function A(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function L(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            i.forEach(function (t) {
                A(e, t, n[t]);
            });
    }
    return e;
}
class M extends r.PureComponent {
    static getDerivedStateFromProps(e) {
        let { guild: t } = e;
        return null == t || null == t.banner
            ? {
                  renderBanner: !1,
                  bannerVisible: !1,
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
        return (0, i.jsx)(w.Z, { onClose: t });
    }
    setAnimatedValue(e) {
        let { guild: t } = this.props,
            n = null != t && (0, d.Z)(t);
        null != t &&
            (null != t.banner || n) &&
            (null != t.banner ? this.setAnimatedValueForBanner(e) : this.setAnimatedValueForCommunityInfo(e));
    }
    setAnimatedValueForBanner(e) {
        let { renderBanner: t, communityInfoVisible: n, bannerVisible: i, controller: r } = this.state;
        ((e >= 54 && i) || (e < 54 && !i)) && (i = !i),
            ((e >= 78 && !t) || (e < 78 && t)) && (t = !t),
            (n = i),
            (t !== this.state.renderBanner ||
                i !== this.state.bannerVisible ||
                n !== this.state.communityInfoVisible) &&
                this.setState({
                    renderBanner: t,
                    bannerVisible: i,
                    communityInfoVisible: n,
                }),
            r
                .update({
                    value: Math.min(1, Math.max(0, 1 - e / 78)),
                    immediate: !0,
                })
                .start();
    }
    setAnimatedValueForCommunityInfo(e) {
        let { communityInfoVisible: t, controller: n } = this.state;
        ((e >= 20 && t) || (e < 20 && !t)) && this.setState({ communityInfoVisible: !t }),
            n
                .update({
                    value: Math.min(1, Math.max(0, 1 - e / 20)),
                    immediate: !0,
                })
                .start();
    }
    render() {
        var e, t;
        let n = this.props,
            { onDragStart: r } = n,
            a = (function (e, t) {
                if (null == e) return {};
                var n,
                    i,
                    r = (function (e, t) {
                        if (null == e) return {};
                        var n,
                            i,
                            r = {},
                            a = Object.keys(e);
                        for (i = 0; i < a.length; i++) (n = a[i]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                        return r;
                    })(e, t);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    for (i = 0; i < a.length; i++)
                        (n = a[i]),
                            !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
                }
                return r;
            })(n, ["onDragStart"]),
            { guild: s } = a,
            { controller: l, renderBanner: c, bannerVisible: d, communityInfoVisible: g } = this.state,
            b = (null == s ? void 0 : s.id) === D._ ? u.j : u.E;
        return (0, i.jsxs)(T.Z, {
            header:
                null != s
                    ? (0, i.jsx)(f.ZP, {
                          guild: s,
                          controller: l,
                          renderBanner: c,
                          bannerVisible: d,
                          className: R.guildHeader,
                          headerClassName: R.guildHeaderInner,
                          onMouseDown: r,
                          disableBannerAnimation: !1,
                          communityInfoVisible: g,
                          children: (0, i.jsx)(o.yRy, {
                              targetElementRef: this.settingsIconRef,
                              position: "right",
                              renderPopout: this.renderSettings,
                              children: (e) =>
                                  (0, i.jsx)(
                                      P.ZP.Icon,
                                      L(
                                          {
                                              ref: this.settingsIconRef,
                                              icon: o.ewm,
                                              label: k.intl.string(k.t["3D5yo/"]),
                                          },
                                          e,
                                      ),
                                  ),
                          }),
                      })
                    : null,
            children: [
                (0, i.jsx)("div", {
                    className: R.channelList,
                    children:
                        null != s
                            ? (0, i.jsx)(
                                  b,
                                  ((e = L({}, a)),
                                  (t = t =
                                      {
                                          guild: s,
                                          disableManageChannels: !0,
                                          onScroll: null != s && null != s.banner ? this.handleScroll : null,
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
                                  e),
                              )
                            : (0, i.jsx)(h.Z, { withBannerPadding: !1 }),
                }),
                null != s &&
                    (0, i.jsx)("section", {
                        className: R.panels,
                        "aria-label": k.intl.string(k.t.StREWK),
                        children: (0, i.jsx)(p.Z, { guildId: s.id }),
                    }),
            ],
        });
    }
    constructor(...e) {
        super(...e),
            A(this, "settingsIconRef", r.createRef()),
            A(this, "state", {
                controller: new a.Controller({
                    value: 1,
                    immediate: !0,
                }),
                renderBanner: !1,
                bannerVisible: !1,
                communityInfoVisible: !1,
            }),
            A(this, "handleScroll", (e) => {
                let { scrollTop: t } = e;
                this.setAnimatedValue(t);
            });
    }
}
function z(e) {
    var t;
    let { guildId: n } = e,
        r = (0, s.e7)([x.Z], () => x.Z.getGuild(n)),
        a = (0, s.e7)([O.ZP], () => O.ZP.getChannels(n)),
        o = (0, s.e7)([v.Z], () => v.Z.getCategories(n)),
        { mutedChannels: d, collapseMuted: u } = (0, s.cj)([C.ZP], () => ({
            mutedChannels: C.ZP.getMutedChannels(n),
            collapseMuted: C.ZP.isGuildCollapsed(n),
        })),
        f = (0, s.e7)([I.ZP], () => I.ZP.getVoiceStates(n)),
        h = (0, s.e7)([m.Z], () => m.Z.getCollapsed()),
        { scrollTo: p } = (0, s.e7)([y.Z], () => y.Z.getGuildDimensions(n)),
        P = (0, g.Z)((e) => {
            let { channelId: t } = e;
            return t;
        }),
        w = (0, s.e7)([j.Z], () => j.Z.getVoiceChannelId()),
        T = (0, s.e7)([S.Z], () => S.Z.getGuildVersion(n)),
        D = (0, s.e7)([b.Z], () => b.Z.version),
        k = (0, s.e7)([E.default], () => E.default.getGuildChangeSentinel(n)),
        R = (0, l.QN)(null == r ? void 0 : r.id),
        A = (0, c.gM)(null == r ? void 0 : r.id),
        L = null != (t = null == r ? void 0 : r.features.has(N.GuildFeatures.COMMUNITY)) && t,
        z = (0, s.e7)([Z.Z], () => Z.Z.getChannelId()),
        V = (0, s.e7)([_.Z], () => _.Z.desyncedVoiceStatesCount);
    return (0, i.jsx)(M, {
        guildId: n,
        guild: r,
        channels: a,
        categories: o,
        mutedChannels: d,
        scrollToChannel: p,
        selectedChannelId: P,
        selectedVoiceChannelId: w,
        voiceStates: f,
        rtcConnectedChannelId: z,
        rtcDesyncedVoiceStatesCount: V,
        collapsedChannels: h,
        collapseMuted: u,
        guildReadStateSentinel: k,
        permissionVersion: T,
        categoryCollapseVersion: D,
        embeddedAppsByChannel: R,
        activeEventsByChannel: A,
        showNewUnreadsBar: L,
        optInEnabled: !1,
    });
}
