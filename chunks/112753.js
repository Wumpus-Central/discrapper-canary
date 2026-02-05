i.d(t, { default: () => ee }), i(321073), i(142703);
var n = i(627968),
    l = i(64700),
    a = i(503698),
    r = i.n(a),
    o = i(735438),
    s = i.n(o),
    u = i(317097),
    d = i(311907),
    c = i(990078),
    h = i(732955),
    m = i(582754),
    p = i(397927),
    g = i(565645),
    A = i(297413),
    f = i(966327),
    T = i(775602),
    E = i(235986),
    I = i(7584),
    x = i(478840),
    N = i(969043),
    v = i(386467),
    R = i(505527),
    j = i(211180),
    S = i(60317),
    b = i(406704),
    C = i(544028),
    y = i(961350),
    _ = i(734057),
    O = i(696451),
    M = i(956703),
    L = i(320501),
    P = i(576705),
    U = i(994500),
    w = i(287809),
    G = i(486020),
    k = i(690521),
    V = i(562153),
    D = i(661191),
    B = i(841549),
    H = i(649963),
    $ = i(815807),
    z = i(652215),
    W = i(985018),
    X = i(882181),
    F = i(473169);
function K(e) {
    return null == e.id ? I.Ay.convertSurrogateToName(e.name) : `:${e.name}:`;
}
let J = (e) => {
        let { emoji: t, channelId: i, messageId: a } = e,
            [o, s] = l.useState(!0),
            [u, d] = l.useState([]),
            c = l.useMemo(() => {
                if (null == u || u.length < 1) return;
                let e = (0, S.eT)(t, u[0], i, { emojiSize: j.x.LARGE, messageId: a });
                return (0, n.jsx)(j.A, {
                    className: X.__invalid_effect,
                    effect: e,
                    emojiSize: j.x.LARGE,
                    onComplete: () => s(!1),
                });
            }, [u, t, i, a]);
        return (
            l.useEffect(() => {
                let e = !1;
                return (
                    s(!0),
                    !(async function () {
                        let i = await (0, k.D_)(t);
                        Array.isArray(i) && i.length > 0 && !e && d(i);
                    })(),
                    () => {
                        e = !0;
                    }
                );
            }, [t]),
            (0, n.jsxs)("div", {
                className: X.sb,
                children: [
                    c,
                    (0, n.jsx)(g.A, {
                        className: r()(X.h_, { [X.bD]: o }),
                        emojiId: t.id,
                        emojiName: t.name,
                        animated: t.animated,
                        size: "reaction",
                    }),
                    (0, n.jsx)(p.Text, { variant: "text-md/medium", children: K(t) }),
                ],
            })
        );
    },
    Z = l.memo(function (e) {
        let { emoji: t, count: i, isSelected: a, setSelected: o, reactionType: s, colors: d } = e,
            h = l.useMemo(() => K(t), [t]),
            m = l.useMemo(() => {
                var e, i;
                let l;
                return (
                    (e = X.Zg),
                    (i = r()(X.Zg, X.at)),
                    null !=
                        (l =
                            null == t.id
                                ? k.Ay.getURL(t.name)
                                : G.Ay.getEmojiURL({ id: t.id, animated: t.animated, size: 24 })) && "" !== l
                        ? (0, n.jsx)("img", { className: e, src: l, alt: t.name })
                        : (0, n.jsx)("span", { className: i, children: t.name })
                );
            }, [t]),
            g = s === R.v.BURST,
            A = g ? W.t.VmiNjd : W.t["cNfs1/"],
            f = W.intl.formatToPlainString(A, { name: h, n: i }),
            T = l.useMemo(() => {
                let e = {};
                if (g) {
                    let { backgroundColor: t = "", opacity: i = 1 } = d ?? {};
                    a
                        ? ((e.background = (0, u.xp)(t, i) ?? ""),
                          (e.border = `1px solid ${((0, u.xp))(t, 1.1 * i) ?? ""}`))
                        : ((e.background = (0, u.xp)(t, 0.025) ?? ""),
                          (e.border = `1px solid ${((0, u.xp))(t, 0.05) ?? ""}`));
                }
                return e;
            }, [g, d, a]),
            E = l.useMemo(() => {
                let e = {};
                if (g) {
                    let { accentColor: t = "" } = d ?? {};
                    e.color = t;
                }
                return e;
            }, [g, d]),
            I = l.useCallback(() => {
                o({ emoji: t, reactionType: s });
            }, [t, s, o]);
        return (0, n.jsx)(c.m, {
            position: "left",
            __unsupportedReactNodeAsText: h,
            asContainer: !0,
            children: (0, n.jsxs)(p.DUT, {
                className: r()({ [X.X_]: !a, [X.HS]: a }),
                "aria-label": f,
                "aria-selected": a,
                onClick: I,
                style: T,
                children: [m, (0, n.jsx)(p.Text, { variant: "text-sm/bold", style: E, children: i })],
            }),
        });
    });
function Q(e) {
    let { emoji: t, user: i, message: l, channel: a, guildId: o, reactionType: s, onRemoveReactor: u } = e,
        c = (0, d.bG)([y.default], () => y.default.getId()),
        m = (0, d.bG)([w.default], () => w.default.getUser(i.id), [i]),
        g = (0, b.Id)(a),
        T = (0, d.bG)([P.A], () => P.A.can(z.xBc.MANAGE_MESSAGES, a) && g) || c === i.id,
        I = (0, d.bG)([O.Ay, _.A, U.A], () => V.Ay.getName(o, a.id, i));
    return (0, n.jsxs)(E.A, {
        className: X.Px,
        onContextMenu: (e) => (0, B.wQ)(e, i, a),
        align: E.A.Align.CENTER,
        tabIndex: 0,
        "aria-label": i.username,
        children: [
            (0, n.jsx)(E.A.Child, {
                wrap: !0,
                grow: 0,
                shrink: 0,
                className: F.Gf,
                children: (0, n.jsx)(f.A, { user: m ?? i, size: p._3J.SIZE_32 }),
            }),
            (0, n.jsxs)(E.A.Child, {
                className: X.Bi,
                children: [
                    (0, n.jsx)(p.Text, {
                        tag: "strong",
                        variant: "text-md/medium",
                        className: X.UU,
                        children: null != I && "" !== I && (0, n.jsx)("span", { className: X.Ci, children: I }),
                    }),
                    (0, n.jsx)(A.A, {
                        user: i,
                        className: null != I && "" !== I ? X.rW : null,
                        usernameClass: r()(X.Xh, X.Ci),
                        discriminatorClass: X.D2,
                        forceUsername: !0,
                    }),
                ],
            }),
            T &&
                (0, n.jsx)("div", {
                    className: X.TF,
                    children: (0, n.jsx)(h.K0, {
                        onClick: function () {
                            H.et({
                                channelId: a.id,
                                messageId: l.id,
                                emoji: t,
                                location: H.qN.MESSAGE,
                                userId: i.id,
                                options: { burst: s === R.v.BURST },
                            }),
                                u?.();
                        },
                        "aria-label": W.intl.string(W.t["+BdaDn"]),
                        icon: p.PGe,
                        size: "sm",
                        variant: "icon-only",
                    }),
                }),
        ],
    });
}
class q extends l.PureComponent {
    scrollerRef = l.createRef();
    state = { lastId: null, loadingMore: !0 };
    componentDidMount() {
        this.loadMore();
    }
    componentDidUpdate(e) {
        (s().isEqual(this.props.reaction, e.reaction) && this.props.reactionType === e.reactionType) ||
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
        let { message: e, reaction: t, reactionType: i } = this.props,
            { lastId: n } = this.state;
        this.setState({ loadingMore: !0 }),
            H.ao({
                channelId: e.getChannelId(),
                messageId: e.id,
                emoji: t.emoji,
                limit: z.WxW,
                after: n,
                type: i,
            }).then((e) => this.setState({ loadingMore: !1, lastId: e[e.length - 1]?.id }));
    }
    renderSection() {
        return null;
    }
    getRowHeight = (e, t) => {
        let { reactors: i } = this.props;
        return 1 === e
            ? 52 * (0 === t)
            : 52 * (0 === e && ((0 === t && 0 === i.length) || null != this.props.reactors[t]));
    };
    renderRow = (e) => {
        let { section: t, row: i } = e,
            { message: l, guildId: a, channel: r, reaction: o, reactors: s, reactionType: u } = this.props,
            d = s[i];
        return 1 === t
            ? 0 === i
                ? (0, n.jsx)(p.y$y, { className: X.u1 }, "hasMore")
                : null
            : 0 === s.length && this.state.loadingMore
              ? (0, n.jsx)(p.y$y, { className: X.u1 }, "loadingMore")
              : null != d &&
                (0, n.jsx)(
                    Q,
                    { message: l, emoji: o.emoji, guildId: a, channel: r, user: d, reaction: o, reactionType: u },
                    d.id,
                );
    };
    render() {
        let { hasMore: e, reactors: t, reaction: i, message: l, reactionType: a } = this.props,
            r = [];
        return (
            0 === t.length && this.state.loadingMore ? r.push(1) : (r.push(t.length), e && r.push(1)),
            (0, n.jsxs)("div", {
                className: X.Ro,
                children: [
                    a === R.v.BURST && (0, n.jsx)(J, { emoji: i.emoji, channelId: l.getChannelId(), messageId: l.id }),
                    (0, n.jsx)(p.Eie, {
                        className: X.OV,
                        fade: !0,
                        ref: this.scrollerRef,
                        sections: r,
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
let Y = d.Ay.connectStores([M.A], (e) => {
    let { message: t, reaction: i, reactionType: n } = e,
        l = M.A.getReactions(t.getChannelId(), t.id, i.emoji, z.WxW, n);
    if (null == l) return { reactors: [], hasMore: !1 };
    let a = Array.from(l.values()),
        r = (n === R.v.BURST ? i.burst_count : i.count) > a.length;
    return { reactors: a, hasMore: r };
})(q);
function ee(e) {
    let {
            message: t,
            selectedReaction: i,
            onClose: a,
            transitionState: r,
            "aria-label": o = W.intl.string(W.t.gHp0C4),
        } = e,
        s = (0, d.bG)([_.A], () => _.A.getChannel(t.getChannelId())),
        u = s?.getGuildId(),
        c = (0, d.bG)([L.A, N.A], () => {
            let e =
                L.A.getMessage(t.getChannelId(), t.id) ??
                N.A.getMessage(D.default.castMessageIdAsChannelId(t.id))?.firstMessage;
            return null != e ? e.reactions : [];
        }, [t]),
        g = l.useMemo(() => {
            let e = [];
            return (
                c.forEach((t) => {
                    t.burst_count > 0 && e.push({ ...t, count: 0 }), t.count > 0 && e.push({ ...t, burst_count: 0 });
                }),
                e.sort((e, t) => {
                    let i = e.burst_count > 0 ? e.burst_count : e.count;
                    return (t.burst_count > 0 ? t.burst_count : t.count) - i;
                }),
                e
            );
        }, [c]),
        A = g[0],
        [f, E] = (function (e, t, i) {
            let [n, a] = l.useState(e ?? t);
            return (
                l.useEffect(() => {
                    null != n &&
                        null ==
                            i.find((e) => {
                                let t = null != e.me_vote ? R.v.VOTE : e.burst_count > 0 ? R.v.BURST : R.v.NORMAL,
                                    i = (0, $.i6)(e.emoji, n.emoji),
                                    l = t === n.reactionType;
                                return i && l;
                            }) &&
                        a(t);
                }, [n, a, i, t]),
                [n, a]
            );
        })(i, null != A ? { emoji: A.emoji, reactionType: A.burst_count > 0 ? R.v.BURST : R.v.NORMAL } : null, g),
        I = l.useMemo(() => (null == f ? null : (c.find((e) => (0, $.i6)(e.emoji, f.emoji)) ?? null)), [c, f]),
        j = (0, d.bG)([T.A], () => T.A.saturation),
        S = (0, d.bG)([C.A], () => (0, m.Mw)(C.A.theme));
    if (
        (l.useEffect(() => {
            (0 === c.length || (null == f && null == I)) && setImmediate(a);
        }, [a, c.length, I, f]),
        null == f || null == I)
    )
        return (0, n.jsx)(p.y$y, {});
    if (null == s) throw Error("MessageReactions.render: Message does not have a channelId");
    return (0, n.jsx)(v.A.Provider, {
        value: u ?? void 0,
        children: (0, n.jsxs)(h.dWK, {
            transitionState: r,
            size: "md",
            onClose: a,
            "aria-label": o,
            children: [
                (0, n.jsx)(h.rQ0, { title: W.intl.string(W.t.gHp0C4) }),
                (0, n.jsx)("div", { className: X.jH }),
                (0, n.jsxs)("div", {
                    className: X.kL,
                    children: [
                        (0, n.jsx)(p.HOs, {
                            className: X.XG,
                            fade: !0,
                            children: g.map((e) => {
                                let t = e.burst_count > 0;
                                return (0, n.jsx)(
                                    Z,
                                    {
                                        isSelected: et(f, e, t ? R.v.BURST : R.v.NORMAL),
                                        setSelected: E,
                                        reactionType: t ? R.v.BURST : R.v.NORMAL,
                                        emoji: e.emoji,
                                        count: t ? e.burst_count : e.count,
                                        colors: null != e.burst_colors ? (0, x.V)(e.burst_colors, j, S) : void 0,
                                    },
                                    `${t ? "burst-" : "normal-"}${e.emoji.id ?? ""}:${e.emoji.name}`,
                                );
                            }),
                        }),
                        (0, n.jsx)(Y, {
                            message: t,
                            reaction: I,
                            guildId: u,
                            channel: s,
                            reactionType: f.reactionType,
                        }),
                    ],
                }),
            ],
        }),
    });
}
let et = (e, t, i) => s().isEqual(e.emoji, t.emoji) && e.reactionType === i;
