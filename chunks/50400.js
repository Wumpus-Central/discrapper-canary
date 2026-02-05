n.d(t, { A: () => D });
var i = n(627968),
    l = n(64700),
    s = n(92674),
    a = n(837381),
    r = n(311907),
    o = n(397927),
    d = n(442433),
    c = n(313961),
    u = n(571694),
    h = n(47167),
    A = n(598104),
    g = n(616356),
    m = n(383501),
    p = n(222823),
    _ = n(309010),
    x = n(287809),
    f = n(607567),
    E = n(531685),
    C = n(967978),
    I = n(941971),
    S = n(375855),
    b = n(900848),
    N = n(550591),
    T = n(65611),
    j = n(652215),
    v = n(985018),
    y = n(308294);
let R = { friction: 28, tension: 600 };
function O(e) {
    switch (e) {
        case "height":
        case "opacity":
            return { duration: 150, ...R };
        case "scale":
            return { ...R };
        default:
            throw Error(`DirectMessage: getSpringConfigs() - Invalid spring ${String(e)}`);
    }
}
class L extends l.PureComponent {
    static defaultProps = { badge: 0, audio: !1, video: !1, isCurrentUserInThisDMCall: !1 };
    state = {
        hovered: !1,
        animating: !0,
        controller: new s.Controller({ scale: 0, height: 0, opacity: 0, config: O }),
    };
    componentWillEnter(e) {
        let { controller: t } = this.state;
        e(),
            t
                .update({ immediate: !E.A.isFocused(), height: 1, opacity: 1, scale: 1, config: O })
                .start()
                .then(() => this.setState({ animating: !1 }));
    }
    componentWillAppear(e) {
        let { controller: t } = this.state;
        t.update({ immediate: !0, scale: 1, opacity: 1, height: 1, config: O }).start().then(e);
    }
    componentWillLeave(e) {
        let { controller: t } = this.state;
        this.setState({ animating: !0 }, () =>
            t.update({ immediate: !E.A.isFocused(), height: 0, opacity: 0, scale: 0, config: O }).start().then(e),
        );
    }
    componentWillUnmount() {
        this.state.controller.dispose();
    }
    getAnimatedStyle() {
        let { size: e } = this.props,
            { controller: t } = this.state,
            { opacity: n, height: i, scale: l } = t.springs;
        return { opacity: n, height: i.to([0, 1], [0, e]), transform: l.to([0, 1], [0.5, 1]).to((e) => `scale(${e})`) };
    }
    getChannelIcon() {
        let { channel: e } = this.props,
            t = e.type === j.rbe.DM ? x.default.getUser(e.getRecipientId()) : null;
        return null != t ? t.getAvatarURL(void 0, 48, !1) : (0, u.Y)(e);
    }
    handleContextMenu = (e) => {
        let { channel: t } = this.props,
            l = t.type === j.rbe.DM ? x.default.getUser(t.getRecipientId()) : null;
        null != l
            ? (0, d.L3)(e, async () => {
                  let { default: e } = await Promise.all([n.e("97262"), n.e("42128"), n.e("39778"), n.e("54266")]).then(
                      n.bind(n, 385913),
                  );
                  return (n) => (0, i.jsx)(e, { ...n, channel: t, user: l });
              })
            : (0, d.L3)(e, async () => {
                  let { default: e } = await Promise.all([n.e("97262"), n.e("15438")]).then(n.bind(n, 4027));
                  return (n) => (0, i.jsx)(e, { ...n, channel: t, selected: !1 });
              });
    };
    render() {
        let {
                channel: e,
                channelName: t,
                selected: n,
                badge: l,
                audio: a,
                video: r,
                stream: d,
                isCurrentUserInThisDMCall: c,
                unread: u,
                treeItemProps: h,
                statusIndicatorsEnabled: g,
            } = this.props,
            { hovered: m, animating: p } = this.state,
            _ = e.isMultiUserDM() && null == e.icon,
            x = () =>
                (0, i.jsx)(o.jlP, {
                    to: j.BVt.CHANNEL(j.ME, e.id),
                    onMouseEnter: () => this.setState({ hovered: !0 }),
                    onMouseLeave: () => this.setState({ hovered: !1 }),
                    selected: n || m,
                    ariaLabel: null != t ? v.intl.formatToPlainString(v.t.hKarnZ, { mentions: l, name: t }) : "",
                    onContextMenu: this.handleContextMenu,
                    icon: _ ? void 0 : this.getChannelIcon(),
                    backgroundStyle: _ ? "on-hover" : "always",
                    children: _
                        ? (0, i.jsx)(A.A, {
                              channel: e,
                              size: o._3J.SIZE_40,
                              facepileSizeOverride: o._3J.SIZE_32,
                              "aria-hidden": !0,
                          })
                        : void 0,
                    ...h,
                }),
            f = (0, i.jsx)(o.Qk9, {
                rounded: !0,
                selected: !1,
                lowerBadge: l > 0 ? (0, T.wN)(l, void 0, !0) : null,
                upperBadge: (0, T.oi)({ audio: a, video: r, screenshare: d, isCurrentUserConnected: c }),
                lowerBadgeSize: { width: (0, o.o6S)(l) },
                children: x(),
            }),
            E = g
                ? (0, i.jsx)(S.A, { channel: e, children: f })
                : (0, i.jsx)(N.A, { text: t ?? "", selected: n, children: f });
        return (0, i.jsx)(s.animated.div, {
            style: this.getAnimatedStyle(),
            children: (0, i.jsxs)(b.c, {
                children: [
                    (0, i.jsx)(I.A, { hovered: !p && m, selected: !p && n, unread: !p && u, className: y.I }),
                    E,
                ],
            }),
        });
    }
}
let D = l.forwardRef(function (e, t) {
    let n = e.channel.id,
        l = (0, h.Ay)(e.channel),
        s = (0, a.Vd)(n, 2),
        d = (0, r.bG)([m.A], () => m.A.getChannelId(), []),
        u = (0, r.bG)([c.A], () => c.A.getMode(n), [n]),
        A = (0, r.bG)([g.A], () => g.A.getAllApplicationStreamsForChannel(n).length > 0),
        x = (0, r.bG)([f.Ay], () => f.Ay.getVoiceStatesForChannel(e.channel).length > 0, [e.channel]),
        E = (0, r.bG)([_.A], () => _.A.getChannelId(), []),
        I = (0, r.bG)([p.Ay], () => p.Ay.getMentionCount(n), [n]),
        { enabled: S } = (0, C.r)({ location: "DirectMessage" }),
        b = d === n,
        N = !1,
        T = !1;
    (b || (S && x)) && ((N = u === j._Of.VOICE), (T = u === j._Of.VIDEO));
    let v = (0, o.rdh)(o.LU0.modules.guildbar.AVATAR_SIZE);
    return (0, i.jsx)(L, {
        ...e,
        ref: t,
        channelName: l,
        unread: I > 0,
        selected: E === n,
        badge: I,
        audio: N,
        video: T,
        stream: A,
        isCurrentUserInThisDMCall: b,
        size: v,
        treeItemProps: s,
        statusIndicatorsEnabled: S,
    });
});
