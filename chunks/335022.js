n.d(t, {
    A: () => V,
}),
    n(896048);
var i = n(627968),
    r = n(64700),
    s = n(108531),
    l = n(311907),
    o = n(397927),
    a = n(685399),
    c = n(508654),
    d = n(885631),
    u = n(487401),
    h = n(952790),
    p = n(846930),
    f = n(355205),
    b = n(366811),
    g = n(924985),
    y = n(945886),
    A = n(72314),
    m = n(769765),
    O = n(808728),
    v = n(458294),
    E = n(71393),
    x = n(576705),
    S = n(584569),
    j = n(383501),
    _ = n(309010),
    I = n(543465),
    C = n(607567),
    w = n(855790),
    N = n(714977),
    P = n(439817),
    D = n(652215),
    T = n(349828),
    R = n(985018),
    k = n(852388);

function L(e, t, n) {
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

function M(e) {
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
                L(e, t, n[t]);
            });
    }
    return e;
}
class G extends r.PureComponent {
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
            { scrollTop: t } = A.A.getGuildDimensions(e);
        this.setAnimatedValue(null != t ? t : 0);
    }
    componentDidUpdate(e) {
        let { guild: t, guildId: n } = this.props;
        if (e.guild !== t) {
            let { scrollTop: e } = A.A.getGuildDimensions(n);
            this.setAnimatedValue(null != e ? e : 0);
        }
    }
    renderSettings(e) {
        let { closePopout: t } = e;
        return (0, i.jsx)(N.A, {
            onClose: t,
        });
    }
    setAnimatedValue(e) {
        let { guild: t } = this.props,
            n = null != t && (0, d.A)(t);
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
        ((e >= 20 && t) || (e < 20 && !t)) &&
            this.setState({
                communityInfoVisible: !t,
            }),
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
            s = (function (e, t) {
                if (null == e) return {};
                var n,
                    i,
                    r,
                    s = {};
                if ("u" > typeof Reflect && Reflect.ownKeys) {
                    for (r = 0, n = Reflect.ownKeys(e); r < n.length; r++)
                        (i = n[r]),
                            !(t.indexOf(i) >= 0) && Object.prototype.propertyIsEnumerable.call(e, i) && (s[i] = e[i]);
                    return s;
                }
                if (
                    ((s = (function (e, t) {
                        if (null == e) return {};
                        var n,
                            i,
                            r = {},
                            s = Object.getOwnPropertyNames(e);
                        for (i = 0; i < s.length; i++)
                            (n = s[i]),
                                !(t.indexOf(n) >= 0) &&
                                    Object.prototype.propertyIsEnumerable.call(e, n) &&
                                    (r[n] = e[n]);
                        return r;
                    })(e, t)),
                    Object.getOwnPropertySymbols)
                )
                    for (r = 0, n = Object.getOwnPropertySymbols(e); r < n.length; r++)
                        (i = n[r]),
                            !(t.indexOf(i) >= 0) && Object.prototype.propertyIsEnumerable.call(e, i) && (s[i] = e[i]);
                return s;
            })(n, ["onDragStart"]),
            { guild: l } = s,
            { controller: a, renderBanner: c, bannerVisible: d, communityInfoVisible: b } = this.state,
            g = (null == l ? void 0 : l.id) === T.V ? u.T : u.B;
        return (0, i.jsxs)(P.A, {
            header:
                null != l
                    ? (0, i.jsx)(h.Ay, {
                          guild: l,
                          controller: a,
                          renderBanner: c,
                          bannerVisible: d,
                          className: k.F,
                          headerClassName: k.D8,
                          onMouseDown: r,
                          disableBannerAnimation: !1,
                          communityInfoVisible: b,
                          children: (0, i.jsx)(o.YNO, {
                              targetElementRef: this.settingsIconRef,
                              position: "right",
                              renderPopout: this.renderSettings,
                              children: (e) =>
                                  (0, i.jsx)(
                                      w.Ay.Icon,
                                      M(
                                          {
                                              ref: this.settingsIconRef,
                                              icon: o.Zes,
                                              label: R.intl.string(R.t["3D5yo/"]),
                                          },
                                          e,
                                      ),
                                  ),
                          }),
                      })
                    : null,
            children: [
                (0, i.jsx)("div", {
                    className: k.o5,
                    children:
                        null != l
                            ? (0, i.jsx)(
                                  g,
                                  ((e = M({}, s)),
                                  (t = t =
                                      {
                                          guild: l,
                                          disableManageChannels: !0,
                                          onScroll: null != l && null != l.banner ? this.handleScroll : null,
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
                            : (0, i.jsx)(p.A, {
                                  withBannerPadding: !1,
                              }),
                }),
                null != l &&
                    (0, i.jsx)("section", {
                        className: k.C3,
                        "aria-label": R.intl.string(R.t.StREWK),
                        children: (0, i.jsx)(f.A, {
                            guildId: l.id,
                        }),
                    }),
            ],
        });
    }
    constructor(...e) {
        super(...e),
            L(this, "settingsIconRef", r.createRef()),
            L(this, "state", {
                controller: new s.Controller({
                    value: 1,
                    immediate: !0,
                }),
                renderBanner: !1,
                bannerVisible: !1,
                communityInfoVisible: !1,
            }),
            L(this, "handleScroll", (e) => {
                let { scrollTop: t } = e;
                this.setAnimatedValue(t);
            });
    }
}

function V(e) {
    var t;
    let { guildId: n } = e,
        r = (0, l.bG)([E.A], () => E.A.getGuild(n)),
        s = (0, l.bG)([O.Ay], () => O.Ay.getChannels(n)),
        o = (0, l.bG)([m.A], () => m.A.getCategories(n)),
        { mutedChannels: d, collapseMuted: u } = (0, l.cf)([I.Ay], () => ({
            mutedChannels: I.Ay.getMutedChannels(n),
            collapseMuted: I.Ay.isGuildCollapsed(n),
        })),
        h = (0, l.bG)([C.Ay], () => C.Ay.getVoiceStates(n)),
        p = (0, l.bG)([y.A], () => y.A.getCollapsed()),
        { scrollTo: f } = (0, l.bG)([A.A], () => A.A.getGuildDimensions(n)),
        w = (0, b.A)((e) => {
            let { channelId: t } = e;
            return t;
        }),
        N = (0, l.bG)([_.A], () => _.A.getVoiceChannelId()),
        P = (0, l.bG)([x.A], () => x.A.getGuildVersion(n)),
        T = (0, l.bG)([g.A], () => g.A.version),
        R = (0, l.bG)([v.default], () => v.default.getGuildChangeSentinel(n)),
        k = (0, a.a1)(null == r ? void 0 : r.id),
        L = (0, c.vj)(null == r ? void 0 : r.id),
        M = null != (t = null == r ? void 0 : r.features.has(D.GuildFeatures.COMMUNITY)) && t,
        V = (0, l.bG)([j.A], () => j.A.getChannelId()),
        U = (0, l.bG)([S.A], () => S.A.desyncedVoiceStatesCount);
    return (0, i.jsx)(G, {
        guildId: n,
        guild: r,
        channels: s,
        categories: o,
        mutedChannels: d,
        scrollToChannel: f,
        selectedChannelId: w,
        selectedVoiceChannelId: N,
        voiceStates: h,
        rtcConnectedChannelId: V,
        rtcDesyncedVoiceStatesCount: U,
        collapsedChannels: p,
        collapseMuted: u,
        guildReadStateSentinel: R,
        permissionVersion: P,
        categoryCollapseVersion: T,
        embeddedAppsByChannel: k,
        activeEventsByChannel: L,
        showNewUnreadsBar: M,
        optInEnabled: !1,
    });
}
