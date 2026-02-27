"use strict";
n.d(t, { A: () => O });
var i = n(627968),
    s = n(64700),
    l = n(475539),
    r = n(837381),
    a = n(311907),
    o = n(397927),
    c = n(442433),
    d = n(313961),
    u = n(571694),
    h = n(47167),
    A = n(598104),
    p = n(616356),
    g = n(383501),
    m = n(222823),
    _ = n(309010),
    f = n(287809),
    x = n(607567),
    C = n(531685),
    E = n(941971),
    I = n(375855),
    N = n(900848),
    b = n(65611),
    S = n(652215),
    T = n(985018),
    y = n(308294);
let v = { friction: 28, tension: 600 };
function j(e) {
    switch (e) {
        case "height":
        case "opacity":
            return { duration: 150, ...v };
        case "scale":
            return { ...v };
        default:
            throw Error(`DirectMessage: getSpringConfigs() - Invalid spring ${String(e)}`);
    }
}
class R extends s.PureComponent {
    static defaultProps = { badge: 0, audio: !1, video: !1, isCurrentUserInThisDMCall: !1 };
    state = {
        hovered: !1,
        animating: !0,
        controller: new l.Controller({ scale: 0, height: 0, opacity: 0, config: j }),
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
            { opacity: n, height: i, scale: s } = t.springs;
        return { opacity: n, height: i.to([0, 1], [0, e]), transform: s.to([0, 1], [0.5, 1]).to((e) => `scale(${e})`) };
    }
    getChannelIcon() {
        let { channel: e } = this.props,
            t = e.type === S.rbe.DM ? f.default.getUser(e.getRecipientId()) : null;
        return null != t ? t.getAvatarURL(void 0, 48, !1) : (0, u.Y)(e);
    }
    handleContextMenu = (e) => {
        let { channel: t } = this.props,
            s = t.type === S.rbe.DM ? f.default.getUser(t.getRecipientId()) : null;
        null != s
            ? (0, c.L3)(e, async () => {
                  let { default: e } = await Promise.all([n.e("97262"), n.e("42128"), n.e("39778"), n.e("31885")]).then(
                      n.bind(n, 385913),
                  );
                  return (n) => (0, i.jsx)(e, { ...n, channel: t, user: s });
              })
            : (0, c.L3)(e, async () => {
                  let { default: e } = await Promise.all([n.e("97262"), n.e("15438")]).then(n.bind(n, 4027));
                  return (n) => (0, i.jsx)(e, { ...n, channel: t, selected: !1 });
              });
    };
    render() {
        let {
                channel: e,
                channelName: t,
                selected: n,
                badge: s,
                audio: r,
                video: a,
                stream: c,
                isCurrentUserInThisDMCall: d,
                unread: u,
                treeItemProps: h,
            } = this.props,
            { hovered: p, animating: g } = this.state,
            m = e.isMultiUserDM() && null == e.icon,
            _ = () =>
                (0, i.jsx)(o.jlP, {
                    to: S.BVt.CHANNEL(S.ME, e.id),
                    onMouseEnter: () => this.setState({ hovered: !0 }),
                    onMouseLeave: () => this.setState({ hovered: !1 }),
                    selected: n || p,
                    ariaLabel: null != t ? T.intl.formatToPlainString(T.t.hKarnZ, { mentions: s, name: t }) : "",
                    onContextMenu: this.handleContextMenu,
                    icon: m ? void 0 : this.getChannelIcon(),
                    backgroundStyle: m ? "on-hover" : "always",
                    children: m
                        ? (0, i.jsx)(A.A, {
                              channel: e,
                              size: o._3J.SIZE_40,
                              facepileSizeOverride: o._3J.SIZE_32,
                              "aria-hidden": !0,
                          })
                        : void 0,
                    ...h,
                });
        return (0, i.jsx)(l.animated.div, {
            style: this.getAnimatedStyle(),
            children: (0, i.jsxs)(N.c, {
                children: [
                    (0, i.jsx)(E.A, { hovered: !g && p, selected: !g && n, unread: !g && u, className: y.I }),
                    (0, i.jsx)(I.A, {
                        channel: e,
                        children: (0, i.jsx)(o.Qk9, {
                            rounded: !0,
                            selected: !1,
                            lowerBadge: s > 0 ? (0, b.wN)(s, void 0, !0) : null,
                            upperBadge: (0, b.oi)({ audio: r, video: a, screenshare: c, isCurrentUserConnected: d }),
                            lowerBadgeSize: { width: (0, o.o6S)(s) },
                            children: _(),
                        }),
                    }),
                ],
            }),
        });
    }
}
let O = s.forwardRef(function (e, t) {
    let n = e.channel.id,
        s = (0, h.Ay)(e.channel),
        l = (0, r.Vd)(n, 2),
        c = (0, a.bG)([g.A], () => g.A.getChannelId(), []),
        u = (0, a.bG)([d.A], () => d.A.getMode(n), [n]),
        A = (0, a.bG)([p.A], () => p.A.getAllApplicationStreamsForChannel(n).length > 0),
        f = (0, a.bG)([x.Ay], () => x.Ay.getVoiceStatesForChannel(e.channel).length > 0, [e.channel]),
        C = (0, a.bG)([_.A], () => _.A.getChannelId(), []),
        E = (0, a.bG)([m.Ay], () => m.Ay.getMentionCount(n), [n]),
        I = c === n,
        N = !1,
        b = !1;
    (I || f) && ((N = u === S._Of.VOICE), (b = u === S._Of.VIDEO));
    let T = (0, o.rdh)(o.LU0.modules.guildbar.AVATAR_SIZE);
    return (0, i.jsx)(R, {
        ...e,
        ref: t,
        channelName: s,
        unread: E > 0,
        selected: C === n,
        badge: E,
        audio: N,
        video: b,
        stream: A,
        isCurrentUserInThisDMCall: I,
        size: T,
        treeItemProps: l,
    });
});
