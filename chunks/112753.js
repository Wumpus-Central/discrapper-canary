i.d(t, { default: () => em }), i(321073), i(142703);
var n = i(627968),
    l = i(64700),
    a = i(503698),
    r = i.n(a),
    s = i(735438),
    o = i.n(s),
    u = i(317097),
    d = i(311907),
    c = i(990078),
    h = i(408278),
    m = i(224640),
    p = i(20742),
    g = i(462887),
    A = i(834730),
    f = i(939249),
    E = i(778712),
    T = i(789645),
    I = i(289873),
    N = i(475825),
    x = i(573613),
    v = i(565645),
    j = i(297413),
    R = i(966327),
    S = i(775602),
    C = i(793574),
    b = i(688810),
    y = i(235986),
    _ = i(7584),
    O = i(478840),
    M = i(969043),
    L = i(386467),
    P = i(505527),
    w = i(211180),
    U = i(60317),
    k = i(406704),
    G = i(454719),
    D = i(657331),
    V = i(544028),
    B = i(961350),
    H = i(734057),
    z = i(696451),
    $ = i(956703),
    W = i(320501),
    X = i(576705),
    F = i(994500),
    K = i(287809),
    J = i(486020),
    Z = i(690521),
    Q = i(562153),
    q = i(661191),
    Y = i(841549),
    ee = i(649963),
    et = i(815807),
    ei = i(926588),
    en = i(652215),
    el = i(985018),
    ea = i(343686),
    er = i(818050);
function es(e) {
    return null == e.id ? _.Ay.convertSurrogateToName(e.name) : `:${e.name}:`;
}
let eo = (e) => {
        let { emoji: t, channelId: i, messageId: a } = e,
            [s, o] = l.useState(!0),
            [u, d] = l.useState([]),
            c = l.useMemo(() => {
                if (null == u || u.length < 1) return;
                let e = (0, U.eT)(t, u[0], i, { emojiSize: w.x.LARGE, messageId: a });
                return (0, n.jsx)(w.A, {
                    className: ea.__invalid_effect,
                    effect: e,
                    emojiSize: w.x.LARGE,
                    onComplete: () => o(!1),
                });
            }, [u, t, i, a]);
        return (
            l.useEffect(() => {
                let e = !1;
                return (
                    o(!0),
                    !(async function () {
                        let i = await (0, Z.D_)(t);
                        Array.isArray(i) && i.length > 0 && !e && d(i);
                    })(),
                    () => {
                        e = !0;
                    }
                );
            }, [t]),
            (0, n.jsxs)("div", {
                className: ea.sb,
                children: [
                    c,
                    (0, n.jsx)(v.A, {
                        className: r()(ea.h_, { [ea.bD]: s }),
                        emojiId: t.id,
                        emojiName: t.name,
                        animated: t.animated,
                        size: "reaction",
                    }),
                    (0, n.jsx)(A.E, { variant: "text-md/medium", children: es(t) }),
                ],
            })
        );
    },
    eu = l.memo(function (e) {
        let { emoji: t, count: i, isSelected: a, setSelected: s, reactionType: o, colors: d } = e,
            h = l.useMemo(() => es(t), [t]),
            m = l.useMemo(() => {
                var e, i;
                let l;
                return (
                    (e = ea.Zg),
                    (i = r()(ea.Zg, ea.at)),
                    null !=
                        (l =
                            null == t.id
                                ? Z.Ay.getURL(t.name)
                                : J.Ay.getEmojiURL({ id: t.id, animated: t.animated, size: 24 })) && "" !== l
                        ? (0, n.jsx)("img", { className: e, src: l, alt: t.name })
                        : (0, n.jsx)("span", { className: i, children: t.name })
                );
            }, [t]),
            p = o === P.v.BURST,
            g = p ? el.t.VmiNjd : el.t["cNfs1/"],
            E = el.intl.formatToPlainString(g, { name: h, n: i }),
            T = l.useMemo(() => {
                let e = {};
                if (p) {
                    let { backgroundColor: t = "", opacity: i = 1 } = d ?? {};
                    a
                        ? ((e.background = (0, u.xp)(t, i) ?? ""),
                          (e.border = `1px solid ${((0, u.xp))(t, 1.1 * i) ?? ""}`))
                        : ((e.background = (0, u.xp)(t, 0.025) ?? ""),
                          (e.border = `1px solid ${((0, u.xp))(t, 0.05) ?? ""}`));
                }
                return e;
            }, [p, d, a]),
            I = l.useMemo(() => {
                let e = {};
                if (p) {
                    let { accentColor: t = "" } = d ?? {};
                    e.color = t;
                }
                return e;
            }, [p, d]),
            N = l.useCallback(() => {
                s({ emoji: t, reactionType: o });
            }, [t, o, s]);
        return (0, n.jsx)(c.m, {
            position: "left",
            __unsupportedReactNodeAsText: h,
            asContainer: !0,
            children: (0, n.jsxs)(f.D, {
                className: r()({ [ea.X_]: !a, [ea.HS]: a }),
                "aria-label": E,
                "aria-selected": a,
                onClick: N,
                style: T,
                children: [m, (0, n.jsx)(A.E, { variant: "text-sm/bold", style: I, children: i })],
            }),
        });
    });
function ed(e) {
    let {
            emoji: t,
            user: i,
            message: l,
            channel: a,
            guildId: s,
            reactionType: o,
            onRemoveReactor: u,
            clickToProfileEnabled: c,
        } = e,
        { analyticsLocations: m } = (0, b.Ay)(C.A.MESSAGE_REACTIONS),
        p = (0, d.bG)([B.default], () => B.default.getId()),
        g = (0, d.bG)([K.default], () => K.default.getUser(i.id), [i]),
        I = (0, k.Id)(a),
        N = (0, d.bG)([X.A], () => X.A.can(en.xBc.MANAGE_MESSAGES, a) && I) || p === i.id,
        x = (0, d.bG)([z.Ay, H.A, F.A], () => Q.Ay.getName(s, a.id, i));
    async function v() {
        await (0, G.A)(i.id, i.getAvatarURL(s ?? void 0, 80), { guildId: s ?? void 0, channelId: a.id }),
            (0, D.openUserProfileModal)({
                userId: i.id,
                guildId: s ?? void 0,
                channelId: a.id,
                messageId: l.id,
                sourceAnalyticsLocations: m,
            });
    }
    function S() {
        ee.et({
            channelId: a.id,
            messageId: l.id,
            emoji: t,
            location: ee.qN.MESSAGE,
            userId: i.id,
            options: { burst: o === P.v.BURST },
        }),
            u?.();
    }
    return c
        ? (0, n.jsxs)(y.A, {
              className: ea.Px,
              align: y.A.Align.CENTER,
              children: [
                  (0, n.jsx)(f.D, {
                      className: ea.Z7,
                      onClick: v,
                      onContextMenu: (e) => (0, Y.wQ)(e, i, a),
                      children: (0, n.jsxs)(y.A, {
                          align: y.A.Align.CENTER,
                          children: [
                              (0, n.jsx)(y.A.Child, {
                                  wrap: !0,
                                  grow: 0,
                                  shrink: 0,
                                  className: er.Gf,
                                  children: (0, n.jsx)(R.A, { "aria-hidden": !0, user: g ?? i, size: E._3.SIZE_32 }),
                              }),
                              (0, n.jsxs)(y.A.Child, {
                                  className: ea.Bi,
                                  children: [
                                      (0, n.jsx)(A.E, {
                                          tag: "strong",
                                          variant: "text-md/medium",
                                          className: ea.UU,
                                          children:
                                              null != x &&
                                              "" !== x &&
                                              (0, n.jsx)("span", { className: ea.Ci, children: x }),
                                      }),
                                      (0, n.jsx)(j.A, {
                                          user: i,
                                          className: null != x && "" !== x ? ea.rW : null,
                                          usernameClass: r()(ea.Xh, ea.Ci),
                                          discriminatorClass: ea.D2,
                                          forceUsername: !0,
                                      }),
                                  ],
                              }),
                          ],
                      }),
                  }),
                  N &&
                      (0, n.jsx)("div", {
                          className: ea.TF,
                          children: (0, n.jsx)(h.K, {
                              onClick: S,
                              "aria-label": el.intl.string(el.t["+BdaDn"]),
                              icon: T.P,
                              size: "sm",
                              variant: "icon-only",
                          }),
                      }),
              ],
          })
        : (0, n.jsxs)(y.A, {
              className: ea.Px,
              onContextMenu: (e) => (0, Y.wQ)(e, i, a),
              align: y.A.Align.CENTER,
              tabIndex: 0,
              "aria-label": i.username,
              children: [
                  (0, n.jsx)(y.A.Child, {
                      wrap: !0,
                      grow: 0,
                      shrink: 0,
                      className: er.Gf,
                      children: (0, n.jsx)(R.A, { user: g ?? i, size: E._3.SIZE_32 }),
                  }),
                  (0, n.jsxs)(y.A.Child, {
                      className: ea.Bi,
                      children: [
                          (0, n.jsx)(A.E, {
                              tag: "strong",
                              variant: "text-md/medium",
                              className: ea.UU,
                              children: null != x && "" !== x && (0, n.jsx)("span", { className: ea.Ci, children: x }),
                          }),
                          (0, n.jsx)(j.A, {
                              user: i,
                              className: null != x && "" !== x ? ea.rW : null,
                              usernameClass: r()(ea.Xh, ea.Ci),
                              discriminatorClass: ea.D2,
                              forceUsername: !0,
                          }),
                      ],
                  }),
                  N &&
                      (0, n.jsx)("div", {
                          className: ea.TF,
                          children: (0, n.jsx)(h.K, {
                              onClick: S,
                              "aria-label": el.intl.string(el.t["+BdaDn"]),
                              icon: T.P,
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
        let { message: e, reaction: t, reactionType: i } = this.props,
            { lastId: n } = this.state;
        this.setState({ loadingMore: !0 }),
            ee
                .ao({ channelId: e.getChannelId(), messageId: e.id, emoji: t.emoji, limit: en.WxW, after: n, type: i })
                .then((e) => this.setState({ loadingMore: !1, lastId: e[e.length - 1]?.id }));
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
            {
                message: l,
                guildId: a,
                channel: r,
                reaction: s,
                reactors: o,
                reactionType: u,
                clickToProfileEnabled: d,
            } = this.props,
            c = o[i];
        return 1 === t
            ? 0 === i
                ? (0, n.jsx)(I.y, { className: ea.u1 }, "hasMore")
                : null
            : 0 === o.length && this.state.loadingMore
              ? (0, n.jsx)(I.y, { className: ea.u1 }, "loadingMore")
              : null != c &&
                (0, n.jsx)(
                    ed,
                    {
                        message: l,
                        emoji: s.emoji,
                        guildId: a,
                        channel: r,
                        user: c,
                        reaction: s,
                        reactionType: u,
                        clickToProfileEnabled: d,
                    },
                    c.id,
                );
    };
    render() {
        let { hasMore: e, reactors: t, reaction: i, message: l, reactionType: a } = this.props,
            r = [];
        return (
            0 === t.length && this.state.loadingMore ? r.push(1) : (r.push(t.length), e && r.push(1)),
            (0, n.jsxs)("div", {
                className: ea.Ro,
                children: [
                    a === P.v.BURST && (0, n.jsx)(eo, { emoji: i.emoji, channelId: l.getChannelId(), messageId: l.id }),
                    (0, n.jsx)(N.Ei, {
                        className: ea.OV,
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
let eh = d.Ay.connectStores([$.A], (e) => {
    let { message: t, reaction: i, reactionType: n } = e,
        l = $.A.getReactions(t.getChannelId(), t.id, i.emoji, en.WxW, n);
    if (null == l) return { reactors: [], hasMore: !1 };
    let a = Array.from(l.values()),
        r = (n === P.v.BURST ? i.burst_count : i.count) > a.length;
    return { reactors: a, hasMore: r };
})(ec);
function em(e) {
    let {
            message: t,
            selectedReaction: i,
            onClose: a,
            transitionState: r,
            "aria-label": s = el.intl.string(el.t.gHp0C4),
        } = e,
        o = (0, d.bG)([H.A], () => H.A.getChannel(t.getChannelId())),
        u = o?.getGuildId(),
        { enabled: c } = ei.y.useConfig({ location: "MessageReactions" }),
        h = (0, d.bG)([W.A, M.A], () => {
            let e =
                W.A.getMessage(t.getChannelId(), t.id) ??
                M.A.getMessage(q.default.castMessageIdAsChannelId(t.id))?.firstMessage;
            return null != e ? e.reactions : [];
        }, [t]),
        A = l.useMemo(() => {
            let e = [];
            return (
                h.forEach((t) => {
                    t.burst_count > 0 && e.push({ ...t, count: 0 }), t.count > 0 && e.push({ ...t, burst_count: 0 });
                }),
                e.sort((e, t) => {
                    let i = e.burst_count > 0 ? e.burst_count : e.count;
                    return (t.burst_count > 0 ? t.burst_count : t.count) - i;
                }),
                e
            );
        }, [h]),
        f = A[0],
        [E, T] = (function (e, t, i) {
            let [n, a] = l.useState(e ?? t);
            return (
                l.useEffect(() => {
                    null != n &&
                        null ==
                            i.find((e) => {
                                let t = null != e.me_vote ? P.v.VOTE : e.burst_count > 0 ? P.v.BURST : P.v.NORMAL,
                                    i = (0, et.i6)(e.emoji, n.emoji),
                                    l = t === n.reactionType;
                                return i && l;
                            }) &&
                        a(t);
                }, [n, a, i, t]),
                [n, a]
            );
        })(i, null != f ? { emoji: f.emoji, reactionType: f.burst_count > 0 ? P.v.BURST : P.v.NORMAL } : null, A),
        N = l.useMemo(() => (null == E ? null : (h.find((e) => (0, et.i6)(e.emoji, E.emoji)) ?? null)), [h, E]),
        v = (0, d.bG)([S.A], () => S.A.saturation),
        j = (0, d.bG)([V.A], () => (0, g.M)(V.A.theme));
    if (
        (l.useEffect(() => {
            (0 === h.length || (null == E && null == N)) && setImmediate(a);
        }, [a, h.length, N, E]),
        null == E || null == N)
    )
        return (0, n.jsx)(I.y, {});
    if (null == o) throw Error("MessageReactions.render: Message does not have a channelId");
    return (0, n.jsx)(L.A.Provider, {
        value: u ?? void 0,
        children: (0, n.jsxs)(m.d, {
            transitionState: r,
            size: "md",
            onClose: a,
            "aria-label": s,
            children: [
                (0, n.jsx)(p.rQ, { title: el.intl.string(el.t.gHp0C4) }),
                (0, n.jsx)("div", { className: ea.jH }),
                (0, n.jsxs)("div", {
                    className: ea.kL,
                    children: [
                        (0, n.jsx)(x.Ip, {
                            className: ea.XG,
                            fade: !0,
                            children: A.map((e) => {
                                let t = e.burst_count > 0;
                                return (0, n.jsx)(
                                    eu,
                                    {
                                        isSelected: ep(E, e, t ? P.v.BURST : P.v.NORMAL),
                                        setSelected: T,
                                        reactionType: t ? P.v.BURST : P.v.NORMAL,
                                        emoji: e.emoji,
                                        count: t ? e.burst_count : e.count,
                                        colors: null != e.burst_colors ? (0, O.V)(e.burst_colors, v, j) : void 0,
                                    },
                                    `${t ? "burst-" : "normal-"}${e.emoji.id ?? ""}:${e.emoji.name}`,
                                );
                            }),
                        }),
                        (0, n.jsx)(eh, {
                            message: t,
                            reaction: N,
                            guildId: u,
                            channel: o,
                            reactionType: E.reactionType,
                            clickToProfileEnabled: c,
                        }),
                    ],
                }),
            ],
        }),
    });
}
let ep = (e, t, i) => o().isEqual(e.emoji, t.emoji) && e.reactionType === i;
