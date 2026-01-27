n.d(t, {
    default: () => ei,
}),
    n(896048),
    n(321073),
    n(638769),
    n(142703),
    n(65821);
var i = n(627968),
    l = n(64700),
    r = n(503698),
    o = n.n(r),
    a = n(735438),
    s = n.n(a),
    u = n(317097),
    c = n(311907),
    d = n(990078),
    p = n(732955),
    h = n(582754),
    m = n(397927),
    f = n(565645),
    g = n(297413),
    b = n(966327),
    y = n(775602),
    O = n(235986),
    v = n(7584),
    j = n(478840),
    A = n(969043),
    T = n(386467),
    E = n(505527),
    I = n(211180),
    S = n(60317),
    x = n(406704),
    N = n(544028),
    R = n(961350),
    P = n(734057),
    C = n(696451),
    w = n(956703),
    _ = n(320501),
    M = n(576705),
    L = n(994500),
    D = n(287809),
    U = n(486020),
    k = n(690521),
    G = n(562153),
    V = n(661191),
    B = n(841549),
    H = n(649963),
    z = n(815807),
    W = n(652215),
    K = n(985018),
    X = n(882181),
    F = n(473169);

function J(e, t, n) {
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

function Z(e) {
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
                J(e, t, n[t]);
            });
    }
    return e;
}

function Q(e, t) {
    return (
        (t = null != t ? t : {}),
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
        e
    );
}

function q(e) {
    return null == e.id ? v.Ay.convertSurrogateToName(e.name) : ":".concat(e.name, ":");
}
let Y = (e) => {
        let { emoji: t, channelId: n, messageId: r } = e,
            [a, s] = l.useState(!0),
            [u, c] = l.useState([]),
            d = l.useMemo(() => {
                if (null == u || u.length < 1) return;
                let e = (0, S.eT)(t, u[0], n, {
                    emojiSize: I.x.LARGE,
                    messageId: r,
                });
                return (0, i.jsx)(I.A, {
                    className: X.__invalid_effect,
                    effect: e,
                    emojiSize: I.x.LARGE,
                    onComplete: () => s(!1),
                });
            }, [u, t, n, r]);
        return (
            l.useEffect(() => {
                let e = !1;
                return (
                    s(!0),
                    !(async function () {
                        let n = await (0, k.D_)(t);
                        Array.isArray(n) && n.length > 0 && !e && c(n);
                    })(),
                    () => {
                        e = !0;
                    }
                );
            }, [t]),
            (0, i.jsxs)("div", {
                className: X.sb,
                children: [
                    d,
                    (0, i.jsx)(f.A, {
                        className: o()(X.h_, {
                            [X.bD]: a,
                        }),
                        emojiId: t.id,
                        emojiName: t.name,
                        animated: t.animated,
                        size: "reaction",
                    }),
                    (0, i.jsx)(m.Text, {
                        variant: "text-md/medium",
                        children: q(t),
                    }),
                ],
            })
        );
    },
    $ = l.memo(function (e) {
        let { emoji: t, count: n, isSelected: r, setSelected: a, reactionType: s, colors: c } = e,
            p = l.useMemo(() => q(t), [t]),
            h = l.useMemo(() => {
                var e, n;
                let l;
                return (
                    (e = X.Zg),
                    (n = o()(X.Zg, X.at)),
                    null !=
                        (l =
                            null == t.id
                                ? k.Ay.getURL(t.name)
                                : U.Ay.getEmojiURL({
                                      id: t.id,
                                      animated: t.animated,
                                      size: 24,
                                  })) && "" !== l
                        ? (0, i.jsx)("img", {
                              className: e,
                              src: l,
                              alt: t.name,
                          })
                        : (0, i.jsx)("span", {
                              className: n,
                              children: t.name,
                          })
                );
            }, [t]),
            f = s === E.v.BURST,
            g = f ? K.t.VmiNjd : K.t["cNfs1/"],
            b = K.intl.formatToPlainString(g, {
                name: p,
                n: n,
            }),
            y = l.useMemo(() => {
                let e = {};
                if (f) {
                    var t, n, i, l;
                    let { backgroundColor: o = "", opacity: a = 1 } = null != c ? c : {};
                    r
                        ? ((e.background = null != (t = (0, u.xp)(o, a)) ? t : ""),
                          (e.border = "1px solid ".concat(null != (n = (0, u.xp)(o, 1.1 * a)) ? n : "")))
                        : ((e.background = null != (i = (0, u.xp)(o, 0.025)) ? i : ""),
                          (e.border = "1px solid ".concat(null != (l = (0, u.xp)(o, 0.05)) ? l : "")));
                }
                return e;
            }, [f, c, r]),
            O = l.useMemo(() => {
                let e = {};
                if (f) {
                    let { accentColor: t = "" } = null != c ? c : {};
                    e.color = t;
                }
                return e;
            }, [f, c]),
            v = l.useCallback(() => {
                a({
                    emoji: t,
                    reactionType: s,
                });
            }, [t, s, a]);
        return (0, i.jsx)(d.m, {
            position: "left",
            __unsupportedReactNodeAsText: p,
            asContainer: !0,
            children: (0, i.jsxs)(m.DUT, {
                className: o()({
                    [X.X_]: !r,
                    [X.HS]: r,
                }),
                "aria-label": b,
                "aria-selected": r,
                onClick: v,
                style: y,
                children: [
                    h,
                    (0, i.jsx)(m.Text, {
                        variant: "text-sm/bold",
                        style: O,
                        children: n,
                    }),
                ],
            }),
        });
    });

function ee(e) {
    let { emoji: t, user: n, message: l, channel: r, guildId: a, reactionType: s, onRemoveReactor: u } = e,
        d = (0, c.bG)([R.default], () => R.default.getId()),
        h = (0, c.bG)([D.default], () => D.default.getUser(n.id), [n]),
        f = (0, x.Id)(r),
        y = (0, c.bG)([M.A], () => M.A.can(W.xBc.MANAGE_MESSAGES, r) && f) || d === n.id,
        v = (0, c.bG)([C.Ay, P.A, L.A], () => G.Ay.getName(a, r.id, n));
    return (0, i.jsxs)(O.A, {
        className: X.Px,
        onContextMenu: (e) => (0, B.wQ)(e, n, r),
        align: O.A.Align.CENTER,
        tabIndex: 0,
        "aria-label": n.username,
        children: [
            (0, i.jsx)(O.A.Child, {
                wrap: !0,
                grow: 0,
                shrink: 0,
                className: F.Gf,
                children: (0, i.jsx)(b.A, {
                    user: null != h ? h : n,
                    size: m._3J.SIZE_32,
                }),
            }),
            (0, i.jsxs)(O.A.Child, {
                className: X.Bi,
                children: [
                    (0, i.jsx)(m.Text, {
                        tag: "strong",
                        variant: "text-md/medium",
                        className: X.UU,
                        children:
                            null != v &&
                            "" !== v &&
                            (0, i.jsx)("span", {
                                className: X.Ci,
                                children: v,
                            }),
                    }),
                    (0, i.jsx)(g.A, {
                        user: n,
                        className: null != v && "" !== v ? X.rW : null,
                        usernameClass: o()(X.Xh, X.Ci),
                        discriminatorClass: X.D2,
                        forceUsername: !0,
                    }),
                ],
            }),
            y &&
                (0, i.jsx)("div", {
                    className: X.TF,
                    children: (0, i.jsx)(p.K0, {
                        onClick: function () {
                            H.et({
                                channelId: r.id,
                                messageId: l.id,
                                emoji: t,
                                location: H.qN.MESSAGE,
                                userId: n.id,
                                options: {
                                    burst: s === E.v.BURST,
                                },
                            }),
                                null == u || u();
                        },
                        "aria-label": K.intl.string(K.t["+BdaDn"]),
                        icon: m.PGe,
                        size: "sm",
                        variant: "icon-only",
                    }),
                }),
        ],
    });
}
class et extends l.PureComponent {
    componentDidMount() {
        this.loadMore();
    }
    componentDidUpdate(e) {
        (s().isEqual(this.props.reaction, e.reaction) && this.props.reactionType === e.reactionType) ||
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
            { lastId: i } = this.state;
        this.setState({
            loadingMore: !0,
        }),
            H.ao({
                channelId: e.getChannelId(),
                messageId: e.id,
                emoji: t.emoji,
                limit: W.WxW,
                after: i,
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
        let { hasMore: e, reactors: t, reaction: n, message: l, reactionType: r } = this.props,
            o = [];
        return (
            0 === t.length && this.state.loadingMore ? o.push(1) : (o.push(t.length), e && o.push(1)),
            (0, i.jsxs)("div", {
                className: X.Ro,
                children: [
                    r === E.v.BURST &&
                        (0, i.jsx)(Y, {
                            emoji: n.emoji,
                            channelId: l.getChannelId(),
                            messageId: l.id,
                        }),
                    (0, i.jsx)(m.Eie, {
                        className: X.OV,
                        fade: !0,
                        ref: this.scrollerRef,
                        sections: o,
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
            J(this, "scrollerRef", l.createRef()),
            J(this, "state", {
                lastId: null,
                loadingMore: !0,
            }),
            J(this, "handleScroll", () => {
                let { current: e } = this.scrollerRef;
                if (null == e) return;
                let t = e.getScrollerState();
                t.scrollTop + t.offsetHeight >= t.scrollHeight - 52 &&
                    this.props.hasMore &&
                    !this.state.loadingMore &&
                    this.loadMore();
            }),
            J(this, "getRowHeight", (e, t) => {
                let { reactors: n } = this.props;
                return 1 === e
                    ? 52 * (0 === t)
                    : 52 * (0 === e && ((0 === t && 0 === n.length) || null != this.props.reactors[t]));
            }),
            J(this, "renderRow", (e) => {
                let { section: t, row: n } = e,
                    { message: l, guildId: r, channel: o, reaction: a, reactors: s, reactionType: u } = this.props,
                    c = s[n];
                return 1 === t
                    ? 0 === n
                        ? (0, i.jsx)(
                              m.y$y,
                              {
                                  className: X.u1,
                              },
                              "hasMore",
                          )
                        : null
                    : 0 === s.length && this.state.loadingMore
                      ? (0, i.jsx)(
                            m.y$y,
                            {
                                className: X.u1,
                            },
                            "loadingMore",
                        )
                      : null != c &&
                        (0, i.jsx)(
                            ee,
                            {
                                message: l,
                                emoji: a.emoji,
                                guildId: r,
                                channel: o,
                                user: c,
                                reaction: a,
                                reactionType: u,
                            },
                            c.id,
                        );
            });
    }
}
let en = c.Ay.connectStores([w.A], (e) => {
    let { message: t, reaction: n, reactionType: i } = e,
        l = w.A.getReactions(t.getChannelId(), t.id, n.emoji, W.WxW, i);
    if (null == l)
        return {
            reactors: [],
            hasMore: !1,
        };
    let r = Array.from(l.values()),
        o = (i === E.v.BURST ? n.burst_count : n.count) > r.length;
    return {
        reactors: r,
        hasMore: o,
    };
})(et);

function ei(e) {
    let {
            message: t,
            selectedReaction: n,
            onClose: r,
            transitionState: o,
            "aria-label": a = K.intl.string(K.t.gHp0C4),
        } = e,
        s = (0, c.bG)([P.A], () => P.A.getChannel(t.getChannelId())),
        u = null == s ? void 0 : s.getGuildId(),
        d = (0, c.bG)([_.A, A.A], () => {
            var e, n;
            let i =
                null != (e = _.A.getMessage(t.getChannelId(), t.id))
                    ? e
                    : null == (n = A.A.getMessage(V.default.castMessageIdAsChannelId(t.id)))
                      ? void 0
                      : n.firstMessage;
            return null != i ? i.reactions : [];
        }, [t]),
        f = l.useMemo(() => {
            let e = [];
            return (
                d.forEach((t) => {
                    t.burst_count > 0 &&
                        e.push(
                            Q(Z({}, t), {
                                count: 0,
                            }),
                        ),
                        t.count > 0 &&
                            e.push(
                                Q(Z({}, t), {
                                    burst_count: 0,
                                }),
                            );
                }),
                e.sort((e, t) => {
                    let n = e.burst_count > 0 ? e.burst_count : e.count;
                    return (t.burst_count > 0 ? t.burst_count : t.count) - n;
                }),
                e
            );
        }, [d]),
        g = f[0],
        [b, O] = (function (e, t, n) {
            let [i, r] = l.useState(null != e ? e : t);
            return (
                l.useEffect(() => {
                    null != i &&
                        null ==
                            n.find((e) => {
                                let t = null != e.me_vote ? E.v.VOTE : e.burst_count > 0 ? E.v.BURST : E.v.NORMAL,
                                    n = (0, z.i6)(e.emoji, i.emoji),
                                    l = t === i.reactionType;
                                return n && l;
                            }) &&
                        r(t);
                }, [i, r, n, t]),
                [i, r]
            );
        })(
            n,
            null != g
                ? {
                      emoji: g.emoji,
                      reactionType: g.burst_count > 0 ? E.v.BURST : E.v.NORMAL,
                  }
                : null,
            f,
        ),
        v = l.useMemo(() => {
            var e;
            return null == b ? null : null != (e = d.find((e) => (0, z.i6)(e.emoji, b.emoji))) ? e : null;
        }, [d, b]),
        I = (0, c.bG)([y.A], () => y.A.saturation),
        S = (0, c.bG)([N.A], () => (0, h.Mw)(N.A.theme));
    if (
        (l.useEffect(() => {
            (0 === d.length || (null == b && null == v)) && setImmediate(r);
        }, [r, d.length, v, b]),
        null == b || null == v)
    )
        return (0, i.jsx)(m.y$y, {});
    if (null == s) throw Error("MessageReactions.render: Message does not have a channelId");
    return (0, i.jsx)(T.A.Provider, {
        value: null != u ? u : void 0,
        children: (0, i.jsxs)(p.dWK, {
            transitionState: o,
            size: "md",
            onClose: r,
            "aria-label": a,
            children: [
                (0, i.jsx)(p.rQ0, {
                    title: K.intl.string(K.t.gHp0C4),
                }),
                (0, i.jsx)("div", {
                    className: X.jH,
                }),
                (0, i.jsxs)("div", {
                    className: X.kL,
                    children: [
                        (0, i.jsx)(m.HOs, {
                            className: X.XG,
                            fade: !0,
                            children: f.map((e) => {
                                var t;
                                let n = e.burst_count > 0;
                                return (0, i.jsx)(
                                    $,
                                    {
                                        isSelected: el(b, e, n ? E.v.BURST : E.v.NORMAL),
                                        setSelected: O,
                                        reactionType: n ? E.v.BURST : E.v.NORMAL,
                                        emoji: e.emoji,
                                        count: n ? e.burst_count : e.count,
                                        colors: null != e.burst_colors ? (0, j.V)(e.burst_colors, I, S) : void 0,
                                    },
                                    ""
                                        .concat(n ? "burst-" : "normal-")
                                        .concat(null != (t = e.emoji.id) ? t : "", ":")
                                        .concat(e.emoji.name),
                                );
                            }),
                        }),
                        (0, i.jsx)(en, {
                            message: t,
                            reaction: v,
                            guildId: u,
                            channel: s,
                            reactionType: b.reactionType,
                        }),
                    ],
                }),
            ],
        }),
    });
}
let el = (e, t, n) => s().isEqual(e.emoji, t.emoji) && e.reactionType === n;
