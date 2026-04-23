n.d(t, { A: () => P });
var i = n(627968),
    l = n(64700),
    s = n(419354),
    a = n(837381),
    r = n(311907),
    o = n(67811),
    d = n(778712),
    c = n(862328),
    u = n(777666),
    h = n(602853),
    A = n(827734),
    _ = n(442433),
    m = n(313961),
    g = n(620982),
    p = n(571694),
    f = n(47167),
    E = n(598104),
    x = n(616356),
    I = n(383501),
    C = n(222823),
    b = n(309010),
    N = n(287809),
    S = n(607567),
    v = n(531685),
    T = n(941971),
    y = n(375855),
    j = n(900848),
    R = n(65611),
    L = n(652215),
    O = n(985018),
    G = n(647321);
let M = { friction: 28, tension: 600 };
function D(e) {
    switch (e) {
        case "height":
        case "opacity":
            return { duration: 150, ...M };
        case "scale":
            return { ...M };
        default:
            throw Error(`DirectMessage: getSpringConfigs() - Invalid spring ${String(e)}`);
    }
}
class U extends l.PureComponent {
    static defaultProps = { badge: 0, audio: !1, video: !1, isCurrentUserInThisDMCall: !1 };
    state = {
        hovered: !1,
        animating: !0,
        controller: new s.Controller({ scale: 0, height: 0, opacity: 0, config: D }),
    };
    componentWillEnter(e) {
        let { controller: t } = this.state;
        e(),
            t
                .update({ immediate: !v.A.isFocused(), height: 1, opacity: 1, scale: 1, config: D })
                .start()
                .then(() => this.setState({ animating: !1 }));
    }
    componentWillAppear(e) {
        let { controller: t } = this.state;
        t.update({ immediate: !0, scale: 1, opacity: 1, height: 1, config: D }).start().then(e);
    }
    componentWillLeave(e) {
        let { controller: t } = this.state;
        this.setState({ animating: !0 }, () =>
            t.update({ immediate: !v.A.isFocused(), height: 0, opacity: 0, scale: 0, config: D }).start().then(e),
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
            t = e.type === L.rbe.DM ? N.default.getUser(e.getRecipientId()) : null;
        return null != t ? t.getAvatarURL(void 0, 48, !1) : (0, p.Y)(e);
    }
    handleContextMenu = (e) => {
        let { channel: t } = this.props,
            l = t.type === L.rbe.DM ? N.default.getUser(t.getRecipientId()) : null;
        null != l
            ? (0, _.L3)(e, async () => {
                  let { default: e } = await Promise.all([n.e("97262"), n.e("42128"), n.e("39778"), n.e("97169")]).then(
                      n.bind(n, 385913),
                  );
                  return (n) => (0, i.jsx)(e, { ...n, channel: t, user: l });
              })
            : (0, _.L3)(e, async () => {
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
                stream: h,
                isCurrentUserInThisDMCall: A,
                isIncomingCall: _,
                isOngoingCall: m,
                unread: g,
                treeItemProps: p,
            } = this.props,
            { hovered: f, animating: x } = this.state,
            I = e.isMultiUserDM() && null == e.icon,
            C = () =>
                (0, i.jsx)(o.j, {
                    to: L.BVt.CHANNEL(L.ME, e.id),
                    onMouseEnter: () => this.setState({ hovered: !0 }),
                    onMouseLeave: () => this.setState({ hovered: !1 }),
                    selected: n || f,
                    ariaLabel:
                        null != t
                            ? [
                                  O.intl.formatToPlainString(O.t.hKarnZ, { name: t, mentions: l }),
                                  _ ? O.intl.string(O.t["fk1/bX"]) : m ? O.intl.string(O.t["NGg/fm"]) : null,
                              ]
                                  .filter(Boolean)
                                  .join(", ")
                            : "",
                    onContextMenu: this.handleContextMenu,
                    icon: I ? void 0 : this.getChannelIcon(),
                    backgroundStyle: I ? "on-hover" : "always",
                    children: I
                        ? (0, i.jsx)(E.A, {
                              channel: e,
                              size: d._3.SIZE_40,
                              facepileSizeOverride: d._3.SIZE_32,
                              "aria-hidden": !0,
                          })
                        : void 0,
                    ...p,
                });
        return (0, i.jsx)(s.animated.div, {
            style: this.getAnimatedStyle(),
            children: (0, i.jsxs)(j.c, {
                children: [
                    (0, i.jsx)(T.A, { hovered: !x && f, selected: !x && n, unread: !x && g, className: G.I }),
                    (0, i.jsx)(y.A, {
                        channel: e,
                        children: (0, i.jsx)(c.Q, {
                            rounded: !0,
                            selected: !1,
                            lowerBadge: l > 0 ? (0, R.wN)(l, void 0, !0) : null,
                            upperBadge: (0, R.oi)({ audio: a, video: r, screenshare: h, isCurrentUserConnected: A }),
                            lowerBadgeSize: { width: (0, u.o6)(l) },
                            children: C(),
                        }),
                    }),
                ],
            }),
        });
    }
}
let P = l.forwardRef(function (e, t) {
    let n = e.channel.id,
        l = (0, f.Ay)(e.channel),
        s = (0, a.Vd)(n, 2),
        o = (0, r.bG)([I.A], () => I.A.getChannelId(), []),
        d = (0, r.bG)([m.A], () => m.A.getMode(n), [n]),
        c = (0, r.bG)([x.A], () => x.A.getAllApplicationStreamsForChannel(n).length > 0),
        u = (0, r.bG)([S.Ay], () => S.Ay.getVoiceStatesForChannel(e.channel).length > 0, [e.channel]),
        _ = (0, r.bG)([b.A], () => b.A.getChannelId(), []),
        p = (0, r.bG)([C.Ay], () => C.Ay.getMentionCount(n), [n]),
        E = o === n,
        { isIncomingCall: N, isOngoingCall: v } = (0, g.A)(n),
        T = !1,
        y = !1;
    (E || u) && ((T = d === L._Of.VOICE), (y = d === L._Of.VIDEO));
    let j = (0, h.r)(A.A.modules.guildbar.AVATAR_SIZE);
    return (0, i.jsx)(U, {
        ...e,
        ref: t,
        channelName: l,
        unread: p > 0,
        selected: _ === n,
        badge: p,
        audio: T,
        video: y,
        stream: c,
        isCurrentUserInThisDMCall: E,
        isIncomingCall: N,
        isOngoingCall: v,
        size: j,
        treeItemProps: s,
    });
});
