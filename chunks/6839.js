n.d(t, { default: () => ed }), n(388685), n(539854), n(642613), n(358797), n(415506);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(392711),
    l = n.n(s),
    c = n(866442),
    u = n(442837),
    d = n(28664),
    f = n(159691),
    p = n(780384),
    _ = n(481060),
    m = n(596454),
    h = n(129861),
    g = n(700582),
    E = n(607070),
    b = n(600164),
    y = n(633302),
    O = n(712057),
    v = n(660189),
    S = n(372900),
    I = n(566006),
    T = n(620652),
    C = n(815605),
    A = n(665906),
    N = n(210887),
    P = n(314897),
    R = n(592125),
    w = n(271383),
    D = n(542578),
    x = n(375954),
    L = n(496675),
    j = n(699516),
    M = n(594174),
    k = n(768581),
    U = n(176354),
    G = n(5192),
    Z = n(709054),
    B = n(91047),
    F = n(222677),
    V = n(995774),
    H = n(981631),
    Y = n(388032),
    W = n(87611),
    K = n(478411);
function z(e, t, n) {
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
function q(e) {
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
                z(e, t, n[t]);
            });
    }
    return e;
}
function Q(e, t) {
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
function X(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : Q(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let J = 52,
    $ = 52,
    ee = 24,
    et = 0.025;
function en(e) {
    return null == e.id ? y.ZP.convertSurrogateToName(e.name) : ":".concat(e.name, ":");
}
function er(e, t, n, i) {
    let a =
        null == e.id
            ? U.ZP.getURL(e.name)
            : k.ZP.getEmojiURL({
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
            [s, l] = i.useState(!0),
            [c, u] = i.useState([]),
            d = i.useMemo(() => {
                if (null == c || c.length < 1) return;
                let e = (0, C.Zn)(t, c[0], n, {
                    emojiSize: T.M.LARGE,
                    messageId: a,
                });
                return (0, r.jsx)(T.Z, {
                    className: W.__invalid_effect,
                    effect: e,
                    emojiSize: T.M.LARGE,
                    onComplete: () => l(!1),
                });
            }, [c, t, n, a]);
        return (
            i.useEffect(() => {
                let e = !1;
                return (
                    l(!0),
                    !(async function () {
                        let n = await (0, U.B6)(t);
                        Array.isArray(n) && n.length > 0 && !e && u(n);
                    })(),
                    () => {
                        e = !0;
                    }
                );
            }, [t]),
            (0, r.jsxs)("div", {
                className: W.burstEmojiSection,
                children: [
                    d,
                    (0, r.jsx)(m.Z, {
                        className: o()(W.burstEmoji, { [W.hideEmoji]: s }),
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
        let { emoji: t, count: n, isSelected: a, setSelected: s, reactionType: l, colors: u } = e,
            f = i.useMemo(() => en(t), [t]),
            p = i.useMemo(() => er(t, ee, W.emoji, o()(W.emoji, W.emojiText)), [t]),
            m = l === I.O.BURST,
            h = m ? Y.t.VmiNjd : Y.t["cNfs1/"],
            g = Y.intl.formatToPlainString(h, {
                name: f,
                n: n,
            }),
            E = i.useMemo(() => {
                let e = {};
                if (m) {
                    var t, n, r, i;
                    let { backgroundColor: o = "", opacity: s = 1 } = null != u ? u : {};
                    a
                        ? ((e.background = null != (t = (0, c.wK)(o, s)) ? t : ""),
                          (e.border = "1px solid ".concat(null != (n = (0, c.wK)(o, 1.1 * s)) ? n : "")))
                        : ((e.background = null != (r = (0, c.wK)(o, et)) ? r : ""),
                          (e.border = "1px solid ".concat(null != (i = (0, c.wK)(o, 2 * et)) ? i : "")));
                }
                return e;
            }, [m, u, a]),
            b = i.useMemo(() => {
                let e = {};
                if (m) {
                    let { accentColor: t = "" } = null != u ? u : {};
                    e.color = t;
                }
                return e;
            }, [m, u]),
            y = i.useCallback(() => {
                s({
                    emoji: t,
                    reactionType: l,
                });
            }, [t, l, s]);
        return (0, r.jsx)(d.u, {
            position: "left",
            __unsupportedReactNodeAsText: f,
            asContainer: !0,
            children: (0, r.jsxs)(_.P3F, {
                className: o()({
                    [W.reactionDefault]: !a,
                    [W.reactionSelected]: a,
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
function eo(e) {
    let { emoji: t, user: n, message: i, channel: a, guildId: s, reactionType: l, onRemoveReactor: c } = e,
        d = (0, u.e7)([P.default], () => P.default.getId()),
        p = (0, u.e7)([M.default], () => M.default.getUser(n.id), [n]),
        m = (0, A.$R)(a),
        E = (0, u.e7)([L.Z], () => L.Z.can(H.Plq.MANAGE_MESSAGES, a) && m) || d === n.id,
        y = (0, u.e7)([w.ZP, R.Z, j.Z], () => G.ZP.getName(s, a.id, n));
    function O() {
        F.WO({
            channelId: a.id,
            messageId: i.id,
            emoji: t,
            location: F.TW.MESSAGE,
            userId: n.id,
            options: { burst: l === I.O.BURST },
        }),
            null == c || c();
    }
    return (0, r.jsxs)(b.Z, {
        className: W.reactor,
        onContextMenu: (e) => (0, B.Pv)(e, n, a),
        align: b.Z.Align.CENTER,
        tabIndex: 0,
        "aria-label": n.username,
        children: [
            (0, r.jsx)(b.Z.Child, {
                wrap: !0,
                grow: 0,
                shrink: 0,
                className: K.marginReset,
                children: (0, r.jsx)(g.Z, {
                    user: null != p ? p : n,
                    size: _.EFr.SIZE_32,
                }),
            }),
            (0, r.jsx)(b.Z.Child, {
                children: (0, r.jsxs)(_.Text, {
                    tag: "strong",
                    variant: "text-md/normal",
                    className: W.name,
                    children: [
                        null != y &&
                            "" !== y &&
                            (0, r.jsx)("span", {
                                className: o()(W.ellipsized, { [W.nickname]: !n.hasUniqueUsername() }),
                                children: y,
                            }),
                        (0, r.jsx)(h.Z, {
                            user: n,
                            className: null != y && "" !== y ? W.tagFaded : null,
                            usernameClass: o()(W.username, W.ellipsized),
                            discriminatorClass: W.discriminator,
                            forceUsername: !0,
                        }),
                    ],
                }),
            }),
            E &&
                (0, r.jsx)("div", {
                    className: W.remove,
                    children: (0, r.jsx)(f.hU, {
                        onClick: O,
                        "aria-label": Y.intl.string(Y.t["+BdaDn"]),
                        icon: _.Dio,
                        size: "sm",
                        variant: "icon-only",
                    }),
                }),
        ],
    });
}
class es extends i.PureComponent {
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
            F.U0({
                channelId: e.getChannelId(),
                messageId: e.id,
                emoji: t.emoji,
                limit: H.pTL,
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
            o = [];
        return (
            0 === t.length && this.state.loadingMore ? o.push(1) : (o.push(t.length), e && o.push(1)),
            (0, r.jsxs)("div", {
                className: W.reactorsContainer,
                children: [
                    a === I.O.BURST &&
                        (0, r.jsx)(ei, {
                            emoji: n.emoji,
                            channelId: i.getChannelId(),
                            messageId: i.id,
                        }),
                    (0, r.jsx)(_._2F, {
                        className: W.reactors,
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
            z(this, "scrollerRef", i.createRef()),
            z(this, "state", {
                lastId: null,
                loadingMore: !0,
            }),
            z(this, "handleScroll", () => {
                let { current: e } = this.scrollerRef;
                if (null == e) return;
                let t = e.getScrollerState();
                t.scrollTop + t.offsetHeight >= t.scrollHeight - J &&
                    this.props.hasMore &&
                    !this.state.loadingMore &&
                    this.loadMore();
            }),
            z(this, "getRowHeight", (e, t) => {
                let { reactors: n } = this.props;
                if (1 === e) return 0 === t ? J : 0;
                if (0 === e) {
                    if (0 === t && 0 === n.length) return $;
                    if (null != this.props.reactors[t]) return J;
                }
                return 0;
            }),
            z(this, "renderRow", (e) => {
                let { section: t, row: n } = e,
                    { message: i, guildId: a, channel: o, reaction: s, reactors: l, reactionType: c } = this.props,
                    u = l[n];
                return 1 === t
                    ? 0 === n
                        ? (0, r.jsx)(_.$jN, { className: W.spinner }, "hasMore")
                        : null
                    : 0 === l.length && this.state.loadingMore
                      ? (0, r.jsx)(_.$jN, { className: W.spinner }, "loadingMore")
                      : null != u &&
                        (0, r.jsx)(
                            eo,
                            {
                                message: i,
                                emoji: s.emoji,
                                guildId: a,
                                channel: o,
                                user: u,
                                reaction: s,
                                reactionType: c,
                            },
                            u.id,
                        );
            });
    }
}
let el = u.ZP.connectStores([D.Z], (e) => {
    let { message: t, reaction: n, reactionType: r } = e,
        i = D.Z.getReactions(t.getChannelId(), t.id, n.emoji, H.pTL, r);
    if (null == i)
        return {
            reactors: [],
            hasMore: !1,
        };
    let a = Array.from(i.values()),
        o = (r === I.O.BURST ? n.burst_count : n.count) > a.length;
    return {
        reactors: a,
        hasMore: o,
    };
})(es);
function ec(e) {
    return i.useMemo(() => {
        let t = [];
        return (
            e.forEach((e) => {
                e.burst_count > 0 && t.push(X(q({}, e), { count: 0 })),
                    e.count > 0 && t.push(X(q({}, e), { burst_count: 0 }));
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
                        let t = null != e.me_vote ? I.O.VOTE : e.burst_count > 0 ? I.O.BURST : I.O.NORMAL,
                            n = (0, V.ir)(e.emoji, r.emoji),
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
            transitionState: o,
            "aria-label": s = Y.intl.string(Y.t.gHp0C4),
        } = e,
        l = (0, u.e7)([R.Z], () => R.Z.getChannel(t.getChannelId())),
        c = null == l ? void 0 : l.getGuildId(),
        d = (0, u.e7)([x.Z, v.Z], () => {
            var e, n;
            let r =
                null != (n = x.Z.getMessage(t.getChannelId(), t.id))
                    ? n
                    : null == (e = v.Z.getMessage(Z.default.castMessageIdAsChannelId(t.id)))
                      ? void 0
                      : e.firstMessage;
            return null != r ? r.reactions : [];
        }, [t]),
        m = ec(d),
        h = m[0],
        [g, b] = eu(
            n,
            null != h
                ? {
                      emoji: h.emoji,
                      reactionType: h.burst_count > 0 ? I.O.BURST : I.O.NORMAL,
                  }
                : null,
            m,
        ),
        y = i.useMemo(() => {
            var e;
            return null == g ? null : null != (e = d.find((e) => (0, V.ir)(e.emoji, g.emoji))) ? e : null;
        }, [d, g]),
        T = (0, u.e7)([E.Z], () => E.Z.saturation),
        C = (0, u.e7)([N.Z], () => (0, p.wj)(N.Z.theme));
    if (
        (i.useEffect(() => {
            (0 === d.length || (null == g && null == y)) && setImmediate(a);
        }, [a, d.length, y, g]),
        null == g || null == y)
    )
        return (0, r.jsx)(_.$jN, {});
    if (null == l) throw Error("MessageReactions.render: Message does not have a channelId");
    return (0, r.jsx)(S.Z.Provider, {
        value: null != c ? c : void 0,
        children: (0, r.jsxs)(f.IX, {
            transitionState: o,
            size: "md",
            onClose: a,
            "aria-label": s,
            children: [
                (0, r.jsx)(f.xBx, { title: Y.intl.string(Y.t.gHp0C4) }),
                (0, r.jsx)("div", { className: W.spacer }),
                (0, r.jsxs)("div", {
                    className: W.container,
                    children: [
                        (0, r.jsx)(_.Ttm, {
                            className: W.scroller,
                            fade: !0,
                            children: m.map((e) => {
                                var t;
                                let n = e.burst_count > 0;
                                return (0, r.jsx)(
                                    ea,
                                    {
                                        isSelected: ef(g, e, n ? I.O.BURST : I.O.NORMAL),
                                        setSelected: b,
                                        reactionType: n ? I.O.BURST : I.O.NORMAL,
                                        emoji: e.emoji,
                                        count: n ? e.burst_count : e.count,
                                        colors: null != e.burst_colors ? (0, O.Z)(e.burst_colors, T, C) : void 0,
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
