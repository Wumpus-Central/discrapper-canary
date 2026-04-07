n.d(t, { A: () => L });
var i = n(627968),
    l = n(64700),
    s = n(687498),
    a = n(837381),
    r = n(311907),
    o = n(397927),
    d = n(442433),
    c = n(313961),
    u = n(620982),
    h = n(571694),
    A = n(47167),
    _ = n(598104),
    m = n(616356),
    g = n(383501),
    p = n(222823),
    f = n(309010),
    x = n(287809),
    E = n(607567),
    I = n(531685),
    C = n(941971),
    N = n(375855),
    T = n(900848),
    S = n(65611),
    b = n(652215),
    y = n(985018),
    v = n(355593);
let j = { friction: 28, tension: 600 };
function R(e) {
    switch (e) {
        case "height":
        case "opacity":
            return { duration: 150, ...j };
        case "scale":
            return { ...j };
        default:
            throw Error(`DirectMessage: getSpringConfigs() - Invalid spring ${String(e)}`);
    }
}
class O extends l.PureComponent {
    static defaultProps = { badge: 0, audio: !1, video: !1, isCurrentUserInThisDMCall: !1 };
    state = {
        hovered: !1,
        animating: !0,
        controller: new s.Controller({ scale: 0, height: 0, opacity: 0, config: R }),
    };
    componentWillEnter(e) {
        let { controller: t } = this.state;
        e(),
            t
                .update({ immediate: !I.A.isFocused(), height: 1, opacity: 1, scale: 1, config: R })
                .start()
                .then(() => this.setState({ animating: !1 }));
    }
    componentWillAppear(e) {
        let { controller: t } = this.state;
        t.update({ immediate: !0, scale: 1, opacity: 1, height: 1, config: R }).start().then(e);
    }
    componentWillLeave(e) {
        let { controller: t } = this.state;
        this.setState({ animating: !0 }, () =>
            t.update({ immediate: !I.A.isFocused(), height: 0, opacity: 0, scale: 0, config: R }).start().then(e),
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
            t = e.type === b.rbe.DM ? x.default.getUser(e.getRecipientId()) : null;
        return null != t ? t.getAvatarURL(void 0, 48, !1) : (0, h.Y)(e);
    }
    handleContextMenu = (e) => {
        let { channel: t } = this.props,
            l = t.type === b.rbe.DM ? x.default.getUser(t.getRecipientId()) : null;
        null != l
            ? (0, d.L3)(e, async () => {
                  let { default: e } = await Promise.all([n.e("97262"), n.e("42128"), n.e("39778"), n.e("34408")]).then(
                      n.bind(n, 385913),
                  );
                  return (n) => (0, i.jsx)(e, { ...n, channel: t, user: l });
              })
            : (0, d.L3)(e, async () => {
                  let { default: e } = await Promise.all([n.e("97262"), n.e("60200")]).then(n.bind(n, 4027));
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
                isIncomingCall: u,
                isOngoingCall: h,
                unread: A,
                treeItemProps: m,
            } = this.props,
            { hovered: g, animating: p } = this.state,
            f = e.isMultiUserDM() && null == e.icon,
            x = () =>
                (0, i.jsx)(o.jlP, {
                    to: b.BVt.CHANNEL(b.ME, e.id),
                    onMouseEnter: () => this.setState({ hovered: !0 }),
                    onMouseLeave: () => this.setState({ hovered: !1 }),
                    selected: n || g,
                    ariaLabel:
                        null != t
                            ? [
                                  y.intl.formatToPlainString(y.t.hKarnZ, { name: t, mentions: l }),
                                  u ? y.intl.string(y.t["fk1/bX"]) : h ? y.intl.string(y.t["NGg/fm"]) : null,
                              ]
                                  .filter(Boolean)
                                  .join(", ")
                            : "",
                    onContextMenu: this.handleContextMenu,
                    icon: f ? void 0 : this.getChannelIcon(),
                    backgroundStyle: f ? "on-hover" : "always",
                    children: f
                        ? (0, i.jsx)(_.A, {
                              channel: e,
                              size: o._3J.SIZE_40,
                              facepileSizeOverride: o._3J.SIZE_32,
                              "aria-hidden": !0,
                          })
                        : void 0,
                    ...m,
                });
        return (0, i.jsx)(s.animated.div, {
            style: this.getAnimatedStyle(),
            children: (0, i.jsxs)(T.c, {
                children: [
                    (0, i.jsx)(C.A, { hovered: !p && g, selected: !p && n, unread: !p && A, className: v.I }),
                    (0, i.jsx)(N.A, {
                        channel: e,
                        children: (0, i.jsx)(o.Qk9, {
                            rounded: !0,
                            selected: !1,
                            lowerBadge: l > 0 ? (0, S.wN)(l, void 0, !0) : null,
                            upperBadge: (0, S.oi)({ audio: a, video: r, screenshare: d, isCurrentUserConnected: c }),
                            lowerBadgeSize: { width: (0, o.o6S)(l) },
                            children: x(),
                        }),
                    }),
                ],
            }),
        });
    }
}
let L = l.forwardRef(function (e, t) {
    let n = e.channel.id,
        l = (0, A.Ay)(e.channel),
        s = (0, a.Vd)(n, 2),
        d = (0, r.bG)([g.A], () => g.A.getChannelId(), []),
        h = (0, r.bG)([c.A], () => c.A.getMode(n), [n]),
        _ = (0, r.bG)([m.A], () => m.A.getAllApplicationStreamsForChannel(n).length > 0),
        x = (0, r.bG)([E.Ay], () => E.Ay.getVoiceStatesForChannel(e.channel).length > 0, [e.channel]),
        I = (0, r.bG)([f.A], () => f.A.getChannelId(), []),
        C = (0, r.bG)([p.Ay], () => p.Ay.getMentionCount(n), [n]),
        N = d === n,
        { isIncomingCall: T, isOngoingCall: S } = (0, u.A)(n),
        y = !1,
        v = !1;
    (N || x) && ((y = h === b._Of.VOICE), (v = h === b._Of.VIDEO));
    let j = (0, o.rdh)(o.LU0.modules.guildbar.AVATAR_SIZE);
    return (0, i.jsx)(O, {
        ...e,
        ref: t,
        channelName: l,
        unread: C > 0,
        selected: I === n,
        badge: C,
        audio: y,
        video: v,
        stream: _,
        isCurrentUserInThisDMCall: N,
        isIncomingCall: T,
        isOngoingCall: S,
        size: j,
        treeItemProps: s,
    });
});
