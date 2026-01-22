n.d(t, { default: () => ed }), n(896048), n(321073), n(638769), n(142703), n(65821);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(735438),
    l = n.n(o),
    c = n(317097),
    u = n(311907),
    d = n(990078),
    f = n(732955),
    p = n(582754),
    _ = n(397927),
    h = n(565645),
    m = n(297413),
    g = n(966327),
    E = n(775602),
    b = n(235986),
    y = n(7584),
    O = n(478840),
    A = n(969043),
    v = n(386467),
    S = n(505527),
    I = n(211180),
    T = n(60317),
    C = n(406704),
    N = n(544028),
    R = n(961350),
    w = n(734057),
    P = n(696451),
    D = n(956703),
    x = n(320501),
    L = n(576705),
    j = n(994500),
    M = n(287809),
    k = n(486020),
    U = n(690521),
    G = n(562153),
    V = n(661191),
    F = n(841549),
    B = n(649963),
    H = n(815807),
    Y = n(652215),
    W = n(985018),
    K = n(882181),
    z = n(473169);
function q(e, t, n) {
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
function X(e) {
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
                q(e, t, n[t]);
            });
    }
    return e;
}
function Z(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function Q(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : Z(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let $ = 52,
    J = 52,
    ee = 24,
    et = 0.025;
function en(e) {
    return null == e.id ? y.Ay.convertSurrogateToName(e.name) : ":".concat(e.name, ":");
}
function er(e, t, n, i) {
    let a =
        null == e.id
            ? U.Ay.getURL(e.name)
            : k.Ay.getEmojiURL({
                  id: e.id,
                  animated: e.animated,
                  size: t,
              });
    return null != a && "" !== a
        ? (0, r.jsx)("img", {
              className: n,
              src: a,
              alt: e.name,
          })
        : (0, r.jsx)("span", {
              className: i,
              children: e.name,
          });
}
let ei = (e) => {
        let { emoji: t, channelId: n, messageId: a } = e,
            [o, l] = i.useState(!0),
            [c, u] = i.useState([]),
            d = i.useMemo(() => {
                if (null == c || c.length < 1) return;
                let e = (0, T.eT)(t, c[0], n, {
                    emojiSize: I.x.LARGE,
                    messageId: a,
                });
                return (0, r.jsx)(I.A, {
                    className: K.__invalid_effect,
                    effect: e,
                    emojiSize: I.x.LARGE,
                    onComplete: () => l(!1),
                });
            }, [c, t, n, a]);
        return (
            i.useEffect(() => {
                let e = !1;
                return (
                    l(!0),
                    !(async function () {
                        let n = await (0, U.D_)(t);
                        Array.isArray(n) && n.length > 0 && !e && u(n);
                    })(),
                    () => {
                        e = !0;
                    }
                );
            }, [t]),
            (0, r.jsxs)("div", {
                className: K.sb,
                children: [
                    d,
                    (0, r.jsx)(h.A, {
                        className: s()(K.h_, { [K.bD]: o }),
                        emojiId: t.id,
                        emojiName: t.name,
                        animated: t.animated,
                        size: "reaction",
                    }),
                    (0, r.jsx)(_.Text, {
                        variant: "text-md/medium",
                        children: en(t),
                    }),
                ],
            })
        );
    },
    ea = i.memo(function (e) {
        let { emoji: t, count: n, isSelected: a, setSelected: o, reactionType: l, colors: u } = e,
            f = i.useMemo(() => en(t), [t]),
            p = i.useMemo(() => er(t, ee, K.Zg, s()(K.Zg, K.at)), [t]),
            h = l === S.v.BURST,
            m = h ? W.t.VmiNjd : W.t["cNfs1/"],
            g = W.intl.formatToPlainString(m, {
                name: f,
                n: n,
            }),
            E = i.useMemo(() => {
                let e = {};
                if (h) {
                    var t, n, r, i;
                    let { backgroundColor: s = "", opacity: o = 1 } = null != u ? u : {};
                    a
                        ? ((e.background = null != (t = (0, c.xp)(s, o)) ? t : ""),
                          (e.border = "1px solid ".concat(null != (n = (0, c.xp)(s, 1.1 * o)) ? n : "")))
                        : ((e.background = null != (r = (0, c.xp)(s, et)) ? r : ""),
                          (e.border = "1px solid ".concat(null != (i = (0, c.xp)(s, 2 * et)) ? i : "")));
                }
                return e;
            }, [h, u, a]),
            b = i.useMemo(() => {
                let e = {};
                if (h) {
                    let { accentColor: t = "" } = null != u ? u : {};
                    e.color = t;
                }
                return e;
            }, [h, u]),
            y = i.useCallback(() => {
                o({
                    emoji: t,
                    reactionType: l,
                });
            }, [t, l, o]);
        return (0, r.jsx)(d.m, {
            position: "left",
            __unsupportedReactNodeAsText: f,
            asContainer: !0,
            children: (0, r.jsxs)(_.DUT, {
                className: s()({
                    [K.X_]: !a,
                    [K.HS]: a,
                }),
                "aria-label": g,
                "aria-selected": a,
                onClick: y,
                style: E,
                children: [
                    p,
                    (0, r.jsx)(_.Text, {
                        variant: "text-sm/bold",
                        style: b,
                        children: n,
                    }),
                ],
            }),
        });
    });
function es(e) {
    let { emoji: t, user: n, message: i, channel: a, guildId: o, reactionType: l, onRemoveReactor: c } = e,
        d = (0, u.bG)([R.default], () => R.default.getId()),
        p = (0, u.bG)([M.default], () => M.default.getUser(n.id), [n]),
        h = (0, C.Id)(a),
        E = (0, u.bG)([L.A], () => L.A.can(Y.xBc.MANAGE_MESSAGES, a) && h) || d === n.id,
        y = (0, u.bG)([P.Ay, w.A, j.A], () => G.Ay.getName(o, a.id, n));
    function O() {
        B.et({
            channelId: a.id,
            messageId: i.id,
            emoji: t,
            location: B.qN.MESSAGE,
            userId: n.id,
            options: { burst: l === S.v.BURST },
        }),
            null == c || c();
    }
    return (0, r.jsxs)(b.A, {
        className: K.Px,
        onContextMenu: (e) => (0, F.wQ)(e, n, a),
        align: b.A.Align.CENTER,
        tabIndex: 0,
        "aria-label": n.username,
        children: [
            (0, r.jsx)(b.A.Child, {
                wrap: !0,
                grow: 0,
                shrink: 0,
                className: z.Gf,
                children: (0, r.jsx)(g.A, {
                    user: null != p ? p : n,
                    size: _._3J.SIZE_32,
                }),
            }),
            (0, r.jsxs)(b.A.Child, {
                className: K.Bi,
                children: [
                    (0, r.jsx)(_.Text, {
                        tag: "strong",
                        variant: "text-md/normal",
                        className: K.UU,
                        children:
                            null != y &&
                            "" !== y &&
                            (0, r.jsx)("span", {
                                className: K.Ci,
                                children: y,
                            }),
                    }),
                    (0, r.jsx)(m.A, {
                        user: n,
                        className: null != y && "" !== y ? K.rW : null,
                        usernameClass: s()(K.Xh, K.Ci),
                        discriminatorClass: K.D2,
                        forceUsername: !0,
                    }),
                ],
            }),
            E &&
                (0, r.jsx)("div", {
                    className: K.TF,
                    children: (0, r.jsx)(f.K0, {
                        onClick: O,
                        "aria-label": W.intl.string(W.t["+BdaDn"]),
                        icon: _.PGe,
                        size: "sm",
                        variant: "icon-only",
                    }),
                }),
        ],
    });
}
class eo extends i.PureComponent {
    componentDidMount() {
        this.loadMore();
    }
    componentDidUpdate(e) {
        (l().isEqual(this.props.reaction, e.reaction) && this.props.reactionType === e.reactionType) ||
            this.setState(
                {
                    lastId: null,
                    loadingMore: !1,
                },
                () => this.loadMore(),
            );
    }
    loadMore() {
        let { message: e, reaction: t, reactionType: n } = this.props,
            { lastId: r } = this.state;
        this.setState({ loadingMore: !0 }),
            B.ao({
                channelId: e.getChannelId(),
                messageId: e.id,
                emoji: t.emoji,
                limit: Y.WxW,
                after: r,
                type: n,
            }).then((e) => {
                var t;
                return this.setState({
                    loadingMore: !1,
                    lastId: null == (t = e[e.length - 1]) ? void 0 : t.id,
                });
            });
    }
    renderSection() {
        return null;
    }
    render() {
        let { hasMore: e, reactors: t, reaction: n, message: i, reactionType: a } = this.props,
            s = [];
        return (
            0 === t.length && this.state.loadingMore ? s.push(1) : (s.push(t.length), e && s.push(1)),
            (0, r.jsxs)("div", {
                className: K.Ro,
                children: [
                    a === S.v.BURST &&
                        (0, r.jsx)(ei, {
                            emoji: n.emoji,
                            channelId: i.getChannelId(),
                            messageId: i.id,
                        }),
                    (0, r.jsx)(_.Eie, {
                        className: K.OV,
                        fade: !0,
                        ref: this.scrollerRef,
                        sections: s,
                        sectionHeight: 0,
                        rowHeight: this.getRowHeight,
                        renderRow: this.renderRow,
                        renderSection: this.renderSection,
                        onScroll: e ? this.handleScroll : void 0,
                    }),
                ],
            })
        );
    }
    constructor(...e) {
        super(...e),
            q(this, "scrollerRef", i.createRef()),
            q(this, "state", {
                lastId: null,
                loadingMore: !0,
            }),
            q(this, "handleScroll", () => {
                let { current: e } = this.scrollerRef;
                if (null == e) return;
                let t = e.getScrollerState();
                t.scrollTop + t.offsetHeight >= t.scrollHeight - $ &&
                    this.props.hasMore &&
                    !this.state.loadingMore &&
                    this.loadMore();
            }),
            q(this, "getRowHeight", (e, t) => {
                let { reactors: n } = this.props;
                if (1 === e) return 0 === t ? $ : 0;
                if (0 === e) {
                    if (0 === t && 0 === n.length) return J;
                    if (null != this.props.reactors[t]) return $;
                }
                return 0;
            }),
            q(this, "renderRow", (e) => {
                let { section: t, row: n } = e,
                    { message: i, guildId: a, channel: s, reaction: o, reactors: l, reactionType: c } = this.props,
                    u = l[n];
                return 1 === t
                    ? 0 === n
                        ? (0, r.jsx)(_.y$y, { className: K.u1 }, "hasMore")
                        : null
                    : 0 === l.length && this.state.loadingMore
                      ? (0, r.jsx)(_.y$y, { className: K.u1 }, "loadingMore")
                      : null != u &&
                        (0, r.jsx)(
                            es,
                            {
                                message: i,
                                emoji: o.emoji,
                                guildId: a,
                                channel: s,
                                user: u,
                                reaction: o,
                                reactionType: c,
                            },
                            u.id,
                        );
            });
    }
}
let el = u.Ay.connectStores([D.A], (e) => {
    let { message: t, reaction: n, reactionType: r } = e,
        i = D.A.getReactions(t.getChannelId(), t.id, n.emoji, Y.WxW, r);
    if (null == i)
        return {
            reactors: [],
            hasMore: !1,
        };
    let a = Array.from(i.values()),
        s = (r === S.v.BURST ? n.burst_count : n.count) > a.length;
    return {
        reactors: a,
        hasMore: s,
    };
})(eo);
function ec(e) {
    return i.useMemo(() => {
        let t = [];
        return (
            e.forEach((e) => {
                e.burst_count > 0 && t.push(Q(X({}, e), { count: 0 })),
                    e.count > 0 && t.push(Q(X({}, e), { burst_count: 0 }));
            }),
            t.sort((e, t) => {
                let n = e.burst_count > 0 ? e.burst_count : e.count;
                return (t.burst_count > 0 ? t.burst_count : t.count) - n;
            }),
            t
        );
    }, [e]);
}
function eu(e, t, n) {
    let [r, a] = i.useState(null != e ? e : t);
    return (
        i.useEffect(() => {
            null != r &&
                null ==
                    n.find((e) => {
                        let t = null != e.me_vote ? S.v.VOTE : e.burst_count > 0 ? S.v.BURST : S.v.NORMAL,
                            n = (0, H.i6)(e.emoji, r.emoji),
                            i = t === r.reactionType;
                        return n && i;
                    }) &&
                a(t);
        }, [r, a, n, t]),
        [r, a]
    );
}
function ed(e) {
    let {
            message: t,
            selectedReaction: n,
            onClose: a,
            transitionState: s,
            "aria-label": o = W.intl.string(W.t.gHp0C4),
        } = e,
        l = (0, u.bG)([w.A], () => w.A.getChannel(t.getChannelId())),
        c = null == l ? void 0 : l.getGuildId(),
        d = (0, u.bG)([x.A, A.A], () => {
            var e, n;
            let r =
                null != (e = x.A.getMessage(t.getChannelId(), t.id))
                    ? e
                    : null == (n = A.A.getMessage(V.default.castMessageIdAsChannelId(t.id)))
                      ? void 0
                      : n.firstMessage;
            return null != r ? r.reactions : [];
        }, [t]),
        h = ec(d),
        m = h[0],
        [g, b] = eu(
            n,
            null != m
                ? {
                      emoji: m.emoji,
                      reactionType: m.burst_count > 0 ? S.v.BURST : S.v.NORMAL,
                  }
                : null,
            h,
        ),
        y = i.useMemo(() => {
            var e;
            return null == g ? null : null != (e = d.find((e) => (0, H.i6)(e.emoji, g.emoji))) ? e : null;
        }, [d, g]),
        I = (0, u.bG)([E.A], () => E.A.saturation),
        T = (0, u.bG)([N.A], () => (0, p.Mw)(N.A.theme));
    if (
        (i.useEffect(() => {
            (0 === d.length || (null == g && null == y)) && setImmediate(a);
        }, [a, d.length, y, g]),
        null == g || null == y)
    )
        return (0, r.jsx)(_.y$y, {});
    if (null == l) throw Error("MessageReactions.render: Message does not have a channelId");
    return (0, r.jsx)(v.A.Provider, {
        value: null != c ? c : void 0,
        children: (0, r.jsxs)(f.dWK, {
            transitionState: s,
            size: "md",
            onClose: a,
            "aria-label": o,
            children: [
                (0, r.jsx)(f.rQ0, { title: W.intl.string(W.t.gHp0C4) }),
                (0, r.jsx)("div", { className: K.jH }),
                (0, r.jsxs)("div", {
                    className: K.kL,
                    children: [
                        (0, r.jsx)(_.HOs, {
                            className: K.XG,
                            fade: !0,
                            children: h.map((e) => {
                                var t;
                                let n = e.burst_count > 0;
                                return (0, r.jsx)(
                                    ea,
                                    {
                                        isSelected: ef(g, e, n ? S.v.BURST : S.v.NORMAL),
                                        setSelected: b,
                                        reactionType: n ? S.v.BURST : S.v.NORMAL,
                                        emoji: e.emoji,
                                        count: n ? e.burst_count : e.count,
                                        colors: null != e.burst_colors ? (0, O.V)(e.burst_colors, I, T) : void 0,
                                    },
                                    ""
                                        .concat(n ? "burst-" : "normal-")
                                        .concat(null != (t = e.emoji.id) ? t : "", ":")
                                        .concat(e.emoji.name),
                                );
                            }),
                        }),
                        (0, r.jsx)(el, {
                            message: t,
                            reaction: y,
                            guildId: c,
                            channel: l,
                            reactionType: g.reactionType,
                        }),
                    ],
                }),
            ],
        }),
    });
}
let ef = (e, t, n) => l().isEqual(e.emoji, t.emoji) && e.reactionType === n;
