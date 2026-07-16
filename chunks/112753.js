s.d(t, { default: () => em }), s(321073), s(142703);
var n = s(627968),
    l = s(64700),
    i = s(503698),
    a = s.n(i),
    r = s(435558),
    o = s.n(r),
    d = s(317097),
    c = s(17928),
    u = s(408278),
    m = s(224640),
    h = s(20742),
    g = s(462887),
    p = s(834730),
    j = s(866665),
    A = s(939249),
    x = s(778712),
    f = s(789645),
    M = s(289873),
    S = s(475825),
    v = s(364522),
    b = s(565645),
    N = s(297413),
    I = s(966327),
    R = s(775602),
    y = s(793574),
    C = s(688810),
    E = s(235986),
    _ = s(7584),
    T = s(478840),
    G = s(969043),
    U = s(386467),
    w = s(505527),
    k = s(299072),
    B = s(60317),
    L = s(406704),
    H = s(148411),
    D = s(975732),
    z = s(363195),
    O = s(280450),
    P = s(734057),
    $ = s(696451),
    W = s(956703),
    V = s(232835),
    Z = s(576705),
    q = s(994500),
    X = s(287809),
    Q = s(486020),
    F = s(690521),
    K = s(562153),
    J = s(935208),
    Y = s(841549),
    ee = s(649963),
    et = s(815807),
    es = s(652215),
    en = s(375708),
    el = s(343686),
    ei = s(818050);
function ea(e) {
    return null == e.id ? _.Ay.convertSurrogateToName(e.name) : `:${e.name}:`;
}
let er = (e) => {
        let { emoji: t, channelId: s, messageId: i } = e,
            [r, o] = l.useState(!0),
            [d, c] = l.useState([]),
            u = l.useMemo(() => {
                if (null == d || d.length < 1) return;
                let e = (0, B.eT)(t, d[0], s, { emojiSize: k.x.LARGE, messageId: i });
                return (0, n.jsx)(k.A, {
                    className: el.__invalid_effect,
                    effect: e,
                    emojiSize: k.x.LARGE,
                    onComplete: () => o(!1),
                });
            }, [d, t, s, i]);
        return (
            l.useEffect(() => {
                let e = !1;
                return (
                    o(!0),
                    !(async function () {
                        let s = await (0, F.D_)(t);
                        Array.isArray(s) && s.length > 0 && !e && c(s);
                    })(),
                    () => {
                        e = !0;
                    }
                );
            }, [t]),
            (0, n.jsxs)("div", {
                className: el.sb,
                children: [
                    u,
                    (0, n.jsx)(b.A, {
                        className: a()(el.h_, { [el.bD]: r }),
                        emojiId: t.id,
                        emojiName: t.name,
                        animated: t.animated,
                        size: "reaction",
                    }),
                    (0, n.jsx)(p.E, { variant: "text-md/medium", children: ea(t) }),
                ],
            })
        );
    },
    eo = l.memo(function (e) {
        let { emoji: t, count: s, isSelected: i, setSelected: r, reactionType: o, colors: c } = e,
            u = l.useMemo(() => ea(t), [t]),
            m = l.useMemo(() => {
                var e, s;
                let l;
                return (
                    (e = el.Zg),
                    (s = a()(el.Zg, el.at)),
                    null !=
                        (l =
                            null == t.id
                                ? F.Ay.getURL(t.name)
                                : Q.Ay.getEmojiURL({ id: t.id, animated: t.animated, size: 24 })) && "" !== l
                        ? (0, n.jsx)("img", { className: e, src: l, alt: t.name })
                        : (0, n.jsx)("span", { className: s, children: t.name })
                );
            }, [t]),
            h = o === w.v.BURST,
            g = h ? en.t.VmiNjd : en.t["cNfs1/"],
            x = en.intl.formatToPlainString(g, { name: u, n: s }),
            f = l.useMemo(() => {
                let e = {};
                if (h) {
                    let { backgroundColor: t = "", opacity: s = 1 } = c ?? {};
                    i
                        ? ((e.background = (0, d.xp)(t, s) ?? ""),
                          (e.border = `1px solid ${((0, d.xp))(t, 1.1 * s) ?? ""}`))
                        : ((e.background = (0, d.xp)(t, 0.025) ?? ""),
                          (e.border = `1px solid ${((0, d.xp))(t, 0.05) ?? ""}`));
                }
                return e;
            }, [h, c, i]),
            M = l.useMemo(() => {
                let e = {};
                if (h) {
                    let { accentColor: t = "" } = c ?? {};
                    e.color = t;
                }
                return e;
            }, [h, c]),
            S = l.useCallback(() => {
                r({ emoji: t, reactionType: o });
            }, [t, o, r]);
        return (0, n.jsx)(j.m, {
            position: "left",
            __unsupportedReactNodeAsText: u,
            asContainer: !0,
            children: (0, n.jsxs)(A.D, {
                className: a()({ [el.X_]: !i, [el.HS]: i }),
                "aria-label": x,
                "aria-selected": i,
                onClick: S,
                style: f,
                children: [m, (0, n.jsx)(p.E, { variant: "text-sm/bold", style: M, children: s })],
            }),
        });
    });
function ed(e) {
    let { emoji: t, user: s, message: l, channel: i, guildId: r, reactionType: o, onRemoveReactor: d } = e,
        { analyticsLocations: m } = (0, C.Ay)(y.A.MESSAGE_REACTIONS),
        h = (0, c.bG)([O.default], () => O.default.getId()),
        g = (0, c.bG)([X.default], () => X.default.getUser(s.id), [s]),
        j = (0, L.Id)(i),
        M = (0, c.bG)([Z.A], () => Z.A.can(es.xBc.MANAGE_MESSAGES, i) && j) || h === s.id,
        S = (0, c.bG)([$.Ay, P.A, q.A], () => K.Ay.getName(r, i.id, s));
    async function v() {
        await (0, H.A)(s.id, s.getAvatarURL(r ?? void 0, 80), { guildId: r ?? void 0, channelId: i.id }),
            (0, D.openUserProfileModal)({
                userId: s.id,
                guildId: r ?? void 0,
                channelId: i.id,
                messageId: l.id,
                sourceAnalyticsLocations: m,
            });
    }
    return (0, n.jsxs)(E.A, {
        className: el.Px,
        align: E.A.Align.CENTER,
        children: [
            (0, n.jsx)(A.D, {
                className: el.Z7,
                onClick: v,
                onContextMenu: (e) => (0, Y.wQ)(e, s, i),
                children: (0, n.jsxs)(E.A, {
                    align: E.A.Align.CENTER,
                    children: [
                        (0, n.jsx)(E.A.Child, {
                            wrap: !0,
                            grow: 0,
                            shrink: 0,
                            className: ei.Gf,
                            children: (0, n.jsx)(I.A, { "aria-hidden": !0, user: g ?? s, size: x._3.SIZE_32 }),
                        }),
                        (0, n.jsxs)(E.A.Child, {
                            className: el.Bi,
                            children: [
                                (0, n.jsx)(p.E, {
                                    tag: "strong",
                                    variant: "text-md/medium",
                                    className: el.UU,
                                    children:
                                        null != S && "" !== S && (0, n.jsx)("span", { className: el.Ci, children: S }),
                                }),
                                (0, n.jsx)(N.A, {
                                    user: s,
                                    className: null != S && "" !== S ? el.rW : null,
                                    usernameClass: a()(el.Xh, el.Ci),
                                    discriminatorClass: el.D2,
                                    forceUsername: !0,
                                }),
                            ],
                        }),
                    ],
                }),
            }),
            M &&
                (0, n.jsx)("div", {
                    className: el.TF,
                    children: (0, n.jsx)(u.K, {
                        onClick: function () {
                            ee.et({
                                channelId: i.id,
                                messageId: l.id,
                                emoji: t,
                                location: ee.qN.MESSAGE,
                                userId: s.id,
                                options: { burst: o === w.v.BURST },
                            }),
                                d?.();
                        },
                        "aria-label": en.intl.string(en.t["+BdaDn"]),
                        icon: f.P,
                        size: "sm",
                        variant: "icon-only",
                    }),
                }),
        ],
    });
}
class ec extends l.PureComponent {
    scrollerRef = l.createRef();
    state = { lastId: null, loadingMore: !0 };
    componentDidMount() {
        this.loadMore();
    }
    componentDidUpdate(e) {
        (o().isEqual(this.props.reaction, e.reaction) && this.props.reactionType === e.reactionType) ||
            this.setState({ lastId: null, loadingMore: !1 }, () => this.loadMore());
    }
    handleScroll = () => {
        let { current: e } = this.scrollerRef;
        if (null == e) return;
        let t = e.getScrollerState();
        t.scrollTop + t.offsetHeight >= t.scrollHeight - 52 &&
            this.props.hasMore &&
            !this.state.loadingMore &&
            this.loadMore();
    };
    loadMore() {
        let { message: e, reaction: t, reactionType: s } = this.props,
            { lastId: n } = this.state;
        this.setState({ loadingMore: !0 }),
            ee
                .ao({ channelId: e.getChannelId(), messageId: e.id, emoji: t.emoji, limit: es.WxW, after: n, type: s })
                .then((e) => this.setState({ loadingMore: !1, lastId: e[e.length - 1]?.id }));
    }
    renderSection() {
        return null;
    }
    getRowHeight = (e, t) => {
        let { reactors: s } = this.props;
        return 1 === e
            ? 52 * (0 === t)
            : 52 * (0 === e && ((0 === t && 0 === s.length) || null != this.props.reactors[t]));
    };
    renderRow = (e) => {
        let { section: t, row: s } = e,
            { message: l, guildId: i, channel: a, reaction: r, reactors: o, reactionType: d } = this.props,
            c = o[s];
        return 1 === t
            ? 0 === s
                ? (0, n.jsx)(M.y, { className: el.u1 }, "hasMore")
                : null
            : 0 === o.length && this.state.loadingMore
              ? (0, n.jsx)(M.y, { className: el.u1 }, "loadingMore")
              : null != c &&
                (0, n.jsx)(
                    ed,
                    { message: l, emoji: r.emoji, guildId: i, channel: a, user: c, reaction: r, reactionType: d },
                    c.id,
                );
    };
    render() {
        let { hasMore: e, reactors: t, reaction: s, message: l, reactionType: i } = this.props,
            a = [];
        return (
            0 === t.length && this.state.loadingMore ? a.push(1) : (a.push(t.length), e && a.push(1)),
            (0, n.jsxs)("div", {
                className: el.Ro,
                children: [
                    i === w.v.BURST && (0, n.jsx)(er, { emoji: s.emoji, channelId: l.getChannelId(), messageId: l.id }),
                    (0, n.jsx)(S.Ei, {
                        className: el.OV,
                        fade: !0,
                        ref: this.scrollerRef,
                        sections: a,
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
}
let eu = c.Ay.connectStores([W.A], (e) => {
    let { message: t, reaction: s, reactionType: n } = e,
        l = W.A.getReactions(t.getChannelId(), t.id, s.emoji, es.WxW, n);
    if (null == l) return { reactors: [], hasMore: !1 };
    let i = Array.from(l.values()),
        a = (n === w.v.BURST ? s.burst_count : s.count) > i.length;
    return { reactors: i, hasMore: a };
})(ec);
function em(e) {
    let {
            message: t,
            selectedReaction: s,
            onClose: i,
            transitionState: a,
            "aria-label": r = en.intl.string(en.t.gHp0C4),
        } = e,
        d = (0, c.bG)([P.A], () => P.A.getChannel(t.getChannelId())),
        u = d?.getGuildId(),
        p = (0, c.bG)([V.A, G.A], () => {
            let e =
                V.A.getMessage(t.getChannelId(), t.id) ??
                G.A.getMessage(J.default.castMessageIdAsChannelId(t.id))?.firstMessage;
            return null != e ? e.reactions : [];
        }, [t]),
        j = l.useMemo(() => {
            let e = [];
            return (
                p.forEach((t) => {
                    t.burst_count > 0 && e.push({ ...t, count: 0 }), t.count > 0 && e.push({ ...t, burst_count: 0 });
                }),
                e.sort((e, t) => {
                    let s = e.burst_count > 0 ? e.burst_count : e.count;
                    return (t.burst_count > 0 ? t.burst_count : t.count) - s;
                }),
                e
            );
        }, [p]),
        A = j[0],
        [x, f] = (function (e, t, s) {
            let [n, i] = l.useState(e ?? t);
            return (
                l.useEffect(() => {
                    null != n &&
                        null ==
                            s.find((e) => {
                                let t = null != e.me_vote ? w.v.VOTE : e.burst_count > 0 ? w.v.BURST : w.v.NORMAL,
                                    s = (0, et.i6)(e.emoji, n.emoji),
                                    l = t === n.reactionType;
                                return s && l;
                            }) &&
                        i(t);
                }, [n, i, s, t]),
                [n, i]
            );
        })(s, null != A ? { emoji: A.emoji, reactionType: A.burst_count > 0 ? w.v.BURST : w.v.NORMAL } : null, j),
        S = l.useMemo(() => (null == x ? null : (p.find((e) => (0, et.i6)(e.emoji, x.emoji)) ?? null)), [p, x]),
        b = (0, c.bG)([R.Ay], () => R.Ay.saturation),
        N = (0, c.bG)([z.A], () => (0, g.M)(z.A.theme));
    if (
        (l.useEffect(() => {
            (0 === p.length || (null == x && null == S)) && setImmediate(i);
        }, [i, p.length, S, x]),
        null == x || null == S)
    )
        return (0, n.jsx)(M.y, {});
    if (null == d) throw Error("MessageReactions.render: Message does not have a channelId");
    return (0, n.jsx)(U.A.Provider, {
        value: u ?? void 0,
        children: (0, n.jsxs)(m.d, {
            transitionState: a,
            size: "md",
            onClose: i,
            "aria-label": r,
            children: [
                (0, n.jsx)(h.rQ, { title: en.intl.string(en.t.gHp0C4) }),
                (0, n.jsx)("div", { className: el.jH }),
                (0, n.jsxs)("div", {
                    className: el.kL,
                    children: [
                        (0, n.jsx)(v.Ip, {
                            className: el.XG,
                            fade: !0,
                            children: j.map((e) => {
                                var t, s, l;
                                let i = e.burst_count > 0;
                                return (0, n.jsx)(
                                    eo,
                                    {
                                        isSelected:
                                            ((t = x),
                                            (s = e),
                                            (l = i ? w.v.BURST : w.v.NORMAL),
                                            o().isEqual(t.emoji, s.emoji) && t.reactionType === l),
                                        setSelected: f,
                                        reactionType: i ? w.v.BURST : w.v.NORMAL,
                                        emoji: e.emoji,
                                        count: i ? e.burst_count : e.count,
                                        colors: null != e.burst_colors ? (0, T.V)(e.burst_colors, b, N) : void 0,
                                    },
                                    `${i ? "burst-" : "normal-"}${e.emoji.id ?? ""}:${e.emoji.name}`,
                                );
                            }),
                        }),
                        (0, n.jsx)(eu, {
                            message: t,
                            reaction: S,
                            guildId: u,
                            channel: d,
                            reactionType: x.reactionType,
                        }),
                    ],
                }),
            ],
        }),
    });
}
