n.d(t, { A: () => O });
var i = n(627968),
    l = n(64700),
    s = n(522160),
    a = n(837381),
    r = n(311907),
    o = n(397927),
    d = n(442433),
    c = n(313961),
    u = n(571694),
    h = n(47167),
    A = n(598104),
    p = n(616356),
    m = n(383501),
    g = n(222823),
    _ = n(309010),
    f = n(287809),
    x = n(607567),
    C = n(531685),
    E = n(941971),
    I = n(375855),
    b = n(900848),
    N = n(65611),
    S = n(652215),
    T = n(985018),
    v = n(308294);
let y = { friction: 28, tension: 600 };
function j(e) {
    switch (e) {
        case "height":
        case "opacity":
            return { duration: 150, ...y };
        case "scale":
            return { ...y };
        default:
            throw Error(`DirectMessage: getSpringConfigs() - Invalid spring ${String(e)}`);
    }
}
class R extends l.PureComponent {
    static defaultProps = { badge: 0, audio: !1, video: !1, isCurrentUserInThisDMCall: !1 };
    state = {
        hovered: !1,
        animating: !0,
        controller: new s.Controller({ scale: 0, height: 0, opacity: 0, config: j }),
    };
    componentWillEnter(e) {
        let { controller: t } = this.state;
        e(),
            t
                .update({ immediate: !C.A.isFocused(), height: 1, opacity: 1, scale: 1, config: j })
                .start()
                .then(() => this.setState({ animating: !1 }));
    }
    componentWillAppear(e) {
        let { controller: t } = this.state;
        t.update({ immediate: !0, scale: 1, opacity: 1, height: 1, config: j }).start().then(e);
    }
    componentWillLeave(e) {
        let { controller: t } = this.state;
        this.setState({ animating: !0 }, () =>
            t.update({ immediate: !C.A.isFocused(), height: 0, opacity: 0, scale: 0, config: j }).start().then(e),
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
            t = e.type === S.rbe.DM ? f.default.getUser(e.getRecipientId()) : null;
        return null != t ? t.getAvatarURL(void 0, 48, !1) : (0, u.Y)(e);
    }
    handleContextMenu = (e) => {
        let { channel: t } = this.props,
            l = t.type === S.rbe.DM ? f.default.getUser(t.getRecipientId()) : null;
        null != l
            ? (0, d.L3)(e, async () => {
                  let { default: e } = await Promise.all([n.e("97262"), n.e("42128"), n.e("39778"), n.e("31885")]).then(
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
            } = this.props,
            { hovered: p, animating: m } = this.state,
            g = e.isMultiUserDM() && null == e.icon,
            _ = () =>
                (0, i.jsx)(o.jlP, {
                    to: S.BVt.CHANNEL(S.ME, e.id),
                    onMouseEnter: () => this.setState({ hovered: !0 }),
                    onMouseLeave: () => this.setState({ hovered: !1 }),
                    selected: n || p,
                    ariaLabel: null != t ? T.intl.formatToPlainString(T.t.hKarnZ, { mentions: l, name: t }) : "",
                    onContextMenu: this.handleContextMenu,
                    icon: g ? void 0 : this.getChannelIcon(),
                    backgroundStyle: g ? "on-hover" : "always",
                    children: g
                        ? (0, i.jsx)(A.A, {
                              channel: e,
                              size: o._3J.SIZE_40,
                              facepileSizeOverride: o._3J.SIZE_32,
                              "aria-hidden": !0,
                          })
                        : void 0,
                    ...h,
                });
        return (0, i.jsx)(s.animated.div, {
            style: this.getAnimatedStyle(),
            children: (0, i.jsxs)(b.c, {
                children: [
                    (0, i.jsx)(E.A, { hovered: !m && p, selected: !m && n, unread: !m && u, className: v.I }),
                    (0, i.jsx)(I.A, {
                        channel: e,
                        children: (0, i.jsx)(o.Qk9, {
                            rounded: !0,
                            selected: !1,
                            lowerBadge: l > 0 ? (0, N.wN)(l, void 0, !0) : null,
                            upperBadge: (0, N.oi)({ audio: a, video: r, screenshare: d, isCurrentUserConnected: c }),
                            lowerBadgeSize: { width: (0, o.o6S)(l) },
                            children: _(),
                        }),
                    }),
                ],
            }),
        });
    }
}
let O = l.forwardRef(function (e, t) {
    let n = e.channel.id,
        l = (0, h.Ay)(e.channel),
        s = (0, a.Vd)(n, 2),
        d = (0, r.bG)([m.A], () => m.A.getChannelId(), []),
        u = (0, r.bG)([c.A], () => c.A.getMode(n), [n]),
        A = (0, r.bG)([p.A], () => p.A.getAllApplicationStreamsForChannel(n).length > 0),
        f = (0, r.bG)([x.Ay], () => x.Ay.getVoiceStatesForChannel(e.channel).length > 0, [e.channel]),
        C = (0, r.bG)([_.A], () => _.A.getChannelId(), []),
        E = (0, r.bG)([g.Ay], () => g.Ay.getMentionCount(n), [n]),
        I = d === n,
        b = !1,
        N = !1;
    (I || f) && ((b = u === S._Of.VOICE), (N = u === S._Of.VIDEO));
    let T = (0, o.rdh)(o.LU0.modules.guildbar.AVATAR_SIZE);
    return (0, i.jsx)(R, {
        ...e,
        ref: t,
        channelName: l,
        unread: E > 0,
        selected: C === n,
        badge: E,
        audio: b,
        video: N,
        stream: A,
        isCurrentUserInThisDMCall: I,
        size: T,
        treeItemProps: s,
    });
});
