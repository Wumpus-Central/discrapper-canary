n.d(t, {
    A: () => G,
}),
    n(65821),
    n(896048);
var r,
    l = n(627968),
    i = n(64700),
    a = n(108531),
    s = n(837381),
    o = n(311907),
    c = n(397927),
    u = n(442433),
    d = n(313961),
    f = n(571694),
    p = n(47167),
    h = n(598104),
    b = n(616356),
    g = n(383501),
    m = n(222823),
    A = n(309010),
    y = n(287809),
    O = n(607567),
    j = n(531685),
    v = n(967978),
    x = n(941971),
    E = n(375855),
    _ = n(900848),
    C = n(550591),
    S = n(65611),
    I = n(652215),
    N = n(985018),
    T = n(308294);

function P(e, t, n) {
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

function w(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                P(e, t, n[t]);
            });
    }
    return e;
}

function R(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let D = {
    friction: 28,
    tension: 600,
};

function M(e) {
    switch (e) {
        case "height":
        case "opacity":
            return w(
                {
                    duration: 150,
                },
                D,
            );
        case "scale":
            return w({}, D);
        default:
            throw Error("DirectMessage: getSpringConfigs() - Invalid spring ".concat(String(e)));
    }
}
class L extends (r = i.PureComponent) {
    componentWillEnter(e) {
        let { controller: t } = this.state;
        e(),
            t
                .update({
                    immediate: !j.A.isFocused(),
                    height: 1,
                    opacity: 1,
                    scale: 1,
                    config: M,
                })
                .start()
                .then(() =>
                    this.setState({
                        animating: !1,
                    }),
                );
    }
    componentWillAppear(e) {
        let { controller: t } = this.state;
        t.update({
            immediate: !0,
            scale: 1,
            opacity: 1,
            height: 1,
            config: M,
        })
            .start()
            .then(e);
    }
    componentWillLeave(e) {
        let { controller: t } = this.state;
        this.setState(
            {
                animating: !0,
            },
            () =>
                t
                    .update({
                        immediate: !j.A.isFocused(),
                        height: 0,
                        opacity: 0,
                        scale: 0,
                        config: M,
                    })
                    .start()
                    .then(e),
        );
    }
    componentWillUnmount() {
        this.state.controller.dispose();
    }
    getAnimatedStyle() {
        let { size: e } = this.props,
            { controller: t } = this.state,
            { opacity: n, height: r, scale: l } = t.springs;
        return {
            opacity: n,
            height: r.to([0, 1], [0, e]),
            transform: l.to([0, 1], [0.5, 1]).to((e) => "scale(".concat(e, ")")),
        };
    }
    getChannelIcon() {
        let { channel: e } = this.props,
            t = e.type === I.rbe.DM ? y.default.getUser(e.getRecipientId()) : null;
        return null != t ? t.getAvatarURL(void 0, 48, !1) : (0, f.Y)(e);
    }
    render() {
        let {
                channel: e,
                channelName: t,
                selected: n,
                badge: r,
                audio: i,
                video: s,
                stream: o,
                isCurrentUserInThisDMCall: u,
                unread: d,
                treeItemProps: f,
                statusIndicatorsEnabled: p,
            } = this.props,
            { hovered: b, animating: g } = this.state,
            m = e.isMultiUserDM() && null == e.icon,
            A = () =>
                (0, l.jsx)(
                    c.jlP,
                    w(
                        {
                            to: I.BVt.CHANNEL(I.ME, e.id),
                            onMouseEnter: () =>
                                this.setState({
                                    hovered: !0,
                                }),
                            onMouseLeave: () =>
                                this.setState({
                                    hovered: !1,
                                }),
                            selected: n || b,
                            ariaLabel:
                                null != t
                                    ? N.intl.formatToPlainString(N.t.hKarnZ, {
                                          mentions: r,
                                          name: t,
                                      })
                                    : "",
                            onContextMenu: this.handleContextMenu,
                            icon: m ? void 0 : this.getChannelIcon(),
                            backgroundStyle: m ? "on-hover" : "always",
                            children: m
                                ? (0, l.jsx)(h.A, {
                                      channel: e,
                                      size: c._3J.SIZE_40,
                                      facepileSizeOverride: c._3J.SIZE_32,
                                      "aria-hidden": !0,
                                  })
                                : void 0,
                        },
                        f,
                    ),
                ),
            y = (0, l.jsx)(c.Qk9, {
                rounded: !0,
                selected: !1,
                lowerBadge: r > 0 ? (0, S.wN)(r, void 0, !0) : null,
                upperBadge: (0, S.oi)({
                    audio: i,
                    video: s,
                    screenshare: o,
                    isCurrentUserConnected: u,
                }),
                lowerBadgeSize: {
                    width: (0, c.o6S)(r),
                },
                children: A(),
            }),
            O = p
                ? (0, l.jsx)(E.A, {
                      channel: e,
                      children: y,
                  })
                : (0, l.jsx)(C.A, {
                      text: null != t ? t : "",
                      selected: n,
                      children: y,
                  });
        return (0, l.jsx)(a.animated.div, {
            style: this.getAnimatedStyle(),
            children: (0, l.jsxs)(_.c, {
                children: [
                    (0, l.jsx)(x.A, {
                        hovered: !g && b,
                        selected: !g && n,
                        unread: !g && d,
                        className: T.I,
                    }),
                    O,
                ],
            }),
        });
    }
    constructor(...e) {
        super(...e),
            P(this, "state", {
                hovered: !1,
                animating: !0,
                controller: new a.Controller({
                    scale: 0,
                    height: 0,
                    opacity: 0,
                    config: M,
                }),
            }),
            P(this, "handleContextMenu", (e) => {
                let { channel: t } = this.props,
                    r = t.type === I.rbe.DM ? y.default.getUser(t.getRecipientId()) : null;
                null != r
                    ? (0, u.L3)(e, async () => {
                          let { default: e } = await Promise.all([
                              n.e("97262"),
                              n.e("29534"),
                              n.e("39778"),
                              n.e("54266"),
                          ]).then(n.bind(n, 385913));
                          return (n) =>
                              (0, l.jsx)(
                                  e,
                                  R(w({}, n), {
                                      channel: t,
                                      user: r,
                                  }),
                              );
                      })
                    : (0, u.L3)(e, async () => {
                          let { default: e } = await Promise.all([n.e("97262"), n.e("60200")]).then(n.bind(n, 4027));
                          return (n) =>
                              (0, l.jsx)(
                                  e,
                                  R(w({}, n), {
                                      channel: t,
                                      selected: !1,
                                  }),
                              );
                      });
            });
    }
}
P(L, "defaultProps", {
    badge: 0,
    audio: !1,
    video: !1,
    isCurrentUserInThisDMCall: !1,
});
let G = i.forwardRef(function (e, t) {
    let n = e.channel.id,
        r = (0, p.Ay)(e.channel),
        i = (0, s.Vd)(n, 2),
        a = (0, o.bG)([g.A], () => g.A.getChannelId(), []),
        u = (0, o.bG)([d.A], () => d.A.getMode(n), [n]),
        f = (0, o.bG)([b.A], () => b.A.getAllApplicationStreamsForChannel(n).length > 0),
        h = (0, o.bG)([O.Ay], () => O.Ay.getVoiceStatesForChannel(e.channel).length > 0, [e.channel]),
        y = (0, o.bG)([A.A], () => A.A.getChannelId(), []),
        j = (0, o.bG)([m.Ay], () => m.Ay.getMentionCount(n), [n]),
        { enabled: x } = (0, v.r)({
            location: "DirectMessage",
        }),
        E = a === n,
        _ = !1,
        C = !1;
    (E || (x && h)) && ((_ = u === I._Of.VOICE), (C = u === I._Of.VIDEO));
    let S = (0, c.rdh)(c.LU0.modules.guildbar.AVATAR_SIZE);
    return (0, l.jsx)(
        L,
        R(w({}, e), {
            ref: t,
            channelName: r,
            unread: j > 0,
            selected: y === n,
            badge: j,
            audio: _,
            video: C,
            stream: f,
            isCurrentUserInThisDMCall: E,
            size: S,
            treeItemProps: i,
            statusIndicatorsEnabled: x,
        }),
    );
});
