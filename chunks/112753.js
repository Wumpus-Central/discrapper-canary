i.d(t, { default: () => ea }), i(321073), i(142703);
var n = i(627968),
    l = i(64700),
    a = i(503698),
    s = i.n(a),
    r = i(735438),
    o = i.n(r),
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
    E = i(793574),
    x = i(688810),
    I = i(235986),
    N = i(7584),
    v = i(478840),
    j = i(969043),
    R = i(386467),
    S = i(505527),
    C = i(211180),
    b = i(60317),
    y = i(406704),
    _ = i(454719),
    O = i(657331),
    M = i(544028),
    L = i(961350),
    P = i(734057),
    U = i(696451),
    w = i(956703),
    k = i(320501),
    G = i(576705),
    D = i(994500),
    V = i(287809),
    B = i(486020),
    H = i(690521),
    $ = i(562153),
    z = i(661191),
    W = i(841549),
    X = i(649963),
    F = i(815807),
    K = i(926588),
    J = i(652215),
    Z = i(985018),
    Q = i(882181),
    q = i(473169);
function Y(e) {
    return null == e.id ? N.Ay.convertSurrogateToName(e.name) : `:${e.name}:`;
}
let ee = (e) => {
        let { emoji: t, channelId: i, messageId: a } = e,
            [r, o] = l.useState(!0),
            [u, d] = l.useState([]),
            c = l.useMemo(() => {
                if (null == u || u.length < 1) return;
                let e = (0, b.eT)(t, u[0], i, { emojiSize: C.x.LARGE, messageId: a });
                return (0, n.jsx)(C.A, {
                    className: Q.__invalid_effect,
                    effect: e,
                    emojiSize: C.x.LARGE,
                    onComplete: () => o(!1),
                });
            }, [u, t, i, a]);
        return (
            l.useEffect(() => {
                let e = !1;
                return (
                    o(!0),
                    !(async function () {
                        let i = await (0, H.D_)(t);
                        Array.isArray(i) && i.length > 0 && !e && d(i);
                    })(),
                    () => {
                        e = !0;
                    }
                );
            }, [t]),
            (0, n.jsxs)("div", {
                className: Q.sb,
                children: [
                    c,
                    (0, n.jsx)(g.A, {
                        className: s()(Q.h_, { [Q.bD]: r }),
                        emojiId: t.id,
                        emojiName: t.name,
                        animated: t.animated,
                        size: "reaction",
                    }),
                    (0, n.jsx)(p.Text, { variant: "text-md/medium", children: Y(t) }),
                ],
            })
        );
    },
    et = l.memo(function (e) {
        let { emoji: t, count: i, isSelected: a, setSelected: r, reactionType: o, colors: d } = e,
            h = l.useMemo(() => Y(t), [t]),
            m = l.useMemo(() => {
                var e, i;
                let l;
                return (
                    (e = Q.Zg),
                    (i = s()(Q.Zg, Q.at)),
                    null !=
                        (l =
                            null == t.id
                                ? H.Ay.getURL(t.name)
                                : B.Ay.getEmojiURL({ id: t.id, animated: t.animated, size: 24 })) && "" !== l
                        ? (0, n.jsx)("img", { className: e, src: l, alt: t.name })
                        : (0, n.jsx)("span", { className: i, children: t.name })
                );
            }, [t]),
            g = o === S.v.BURST,
            A = g ? Z.t.VmiNjd : Z.t["cNfs1/"],
            f = Z.intl.formatToPlainString(A, { name: h, n: i }),
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
            x = l.useCallback(() => {
                r({ emoji: t, reactionType: o });
            }, [t, o, r]);
        return (0, n.jsx)(c.m, {
            position: "left",
            __unsupportedReactNodeAsText: h,
            asContainer: !0,
            children: (0, n.jsxs)(p.DUT, {
                className: s()({ [Q.X_]: !a, [Q.HS]: a }),
                "aria-label": f,
                "aria-selected": a,
                onClick: x,
                style: T,
                children: [m, (0, n.jsx)(p.Text, { variant: "text-sm/bold", style: E, children: i })],
            }),
        });
    });
function ei(e) {
    let {
            emoji: t,
            user: i,
            message: l,
            channel: a,
            guildId: r,
            reactionType: o,
            onRemoveReactor: u,
            clickToProfileEnabled: c,
        } = e,
        { analyticsLocations: m } = (0, x.Ay)(E.A.MESSAGE_REACTIONS),
        g = (0, d.bG)([L.default], () => L.default.getId()),
        T = (0, d.bG)([V.default], () => V.default.getUser(i.id), [i]),
        N = (0, y.Id)(a),
        v = (0, d.bG)([G.A], () => G.A.can(J.xBc.MANAGE_MESSAGES, a) && N) || g === i.id,
        j = (0, d.bG)([U.Ay, P.A, D.A], () => $.Ay.getName(r, a.id, i));
    async function R() {
        await (0, _.A)(i.id, i.getAvatarURL(r ?? void 0, 80), { guildId: r ?? void 0, channelId: a.id }),
            (0, O.openUserProfileModal)({
                userId: i.id,
                guildId: r ?? void 0,
                channelId: a.id,
                messageId: l.id,
                sourceAnalyticsLocations: m,
            });
    }
    function C() {
        X.et({
            channelId: a.id,
            messageId: l.id,
            emoji: t,
            location: X.qN.MESSAGE,
            userId: i.id,
            options: { burst: o === S.v.BURST },
        }),
            u?.();
    }
    return c
        ? (0, n.jsxs)(I.A, {
              className: Q.Px,
              align: I.A.Align.CENTER,
              children: [
                  (0, n.jsx)(p.DUT, {
                      className: Q.Z7,
                      onClick: R,
                      onContextMenu: (e) => (0, W.wQ)(e, i, a),
                      children: (0, n.jsxs)(I.A, {
                          align: I.A.Align.CENTER,
                          children: [
                              (0, n.jsx)(I.A.Child, {
                                  wrap: !0,
                                  grow: 0,
                                  shrink: 0,
                                  className: q.Gf,
                                  children: (0, n.jsx)(f.A, { "aria-hidden": !0, user: T ?? i, size: p._3J.SIZE_32 }),
                              }),
                              (0, n.jsxs)(I.A.Child, {
                                  className: Q.Bi,
                                  children: [
                                      (0, n.jsx)(p.Text, {
                                          tag: "strong",
                                          variant: "text-md/medium",
                                          className: Q.UU,
                                          children:
                                              null != j &&
                                              "" !== j &&
                                              (0, n.jsx)("span", { className: Q.Ci, children: j }),
                                      }),
                                      (0, n.jsx)(A.A, {
                                          user: i,
                                          className: null != j && "" !== j ? Q.rW : null,
                                          usernameClass: s()(Q.Xh, Q.Ci),
                                          discriminatorClass: Q.D2,
                                          forceUsername: !0,
                                      }),
                                  ],
                              }),
                          ],
                      }),
                  }),
                  v &&
                      (0, n.jsx)("div", {
                          className: Q.TF,
                          children: (0, n.jsx)(h.K0, {
                              onClick: C,
                              "aria-label": Z.intl.string(Z.t["+BdaDn"]),
                              icon: p.PGe,
                              size: "sm",
                              variant: "icon-only",
                          }),
                      }),
              ],
          })
        : (0, n.jsxs)(I.A, {
              className: Q.Px,
              onContextMenu: (e) => (0, W.wQ)(e, i, a),
              align: I.A.Align.CENTER,
              tabIndex: 0,
              "aria-label": i.username,
              children: [
                  (0, n.jsx)(I.A.Child, {
                      wrap: !0,
                      grow: 0,
                      shrink: 0,
                      className: q.Gf,
                      children: (0, n.jsx)(f.A, { user: T ?? i, size: p._3J.SIZE_32 }),
                  }),
                  (0, n.jsxs)(I.A.Child, {
                      className: Q.Bi,
                      children: [
                          (0, n.jsx)(p.Text, {
                              tag: "strong",
                              variant: "text-md/medium",
                              className: Q.UU,
                              children: null != j && "" !== j && (0, n.jsx)("span", { className: Q.Ci, children: j }),
                          }),
                          (0, n.jsx)(A.A, {
                              user: i,
                              className: null != j && "" !== j ? Q.rW : null,
                              usernameClass: s()(Q.Xh, Q.Ci),
                              discriminatorClass: Q.D2,
                              forceUsername: !0,
                          }),
                      ],
                  }),
                  v &&
                      (0, n.jsx)("div", {
                          className: Q.TF,
                          children: (0, n.jsx)(h.K0, {
                              onClick: C,
                              "aria-label": Z.intl.string(Z.t["+BdaDn"]),
                              icon: p.PGe,
                              size: "sm",
                              variant: "icon-only",
                          }),
                      }),
              ],
          });
}
class en extends l.PureComponent {
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
            X.ao({
                channelId: e.getChannelId(),
                messageId: e.id,
                emoji: t.emoji,
                limit: J.WxW,
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
            {
                message: l,
                guildId: a,
                channel: s,
                reaction: r,
                reactors: o,
                reactionType: u,
                clickToProfileEnabled: d,
            } = this.props,
            c = o[i];
        return 1 === t
            ? 0 === i
                ? (0, n.jsx)(p.y$y, { className: Q.u1 }, "hasMore")
                : null
            : 0 === o.length && this.state.loadingMore
              ? (0, n.jsx)(p.y$y, { className: Q.u1 }, "loadingMore")
              : null != c &&
                (0, n.jsx)(
                    ei,
                    {
                        message: l,
                        emoji: r.emoji,
                        guildId: a,
                        channel: s,
                        user: c,
                        reaction: r,
                        reactionType: u,
                        clickToProfileEnabled: d,
                    },
                    c.id,
                );
    };
    render() {
        let { hasMore: e, reactors: t, reaction: i, message: l, reactionType: a } = this.props,
            s = [];
        return (
            0 === t.length && this.state.loadingMore ? s.push(1) : (s.push(t.length), e && s.push(1)),
            (0, n.jsxs)("div", {
                className: Q.Ro,
                children: [
                    a === S.v.BURST && (0, n.jsx)(ee, { emoji: i.emoji, channelId: l.getChannelId(), messageId: l.id }),
                    (0, n.jsx)(p.Eie, {
                        className: Q.OV,
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
}
let el = d.Ay.connectStores([w.A], (e) => {
    let { message: t, reaction: i, reactionType: n } = e,
        l = w.A.getReactions(t.getChannelId(), t.id, i.emoji, J.WxW, n);
    if (null == l) return { reactors: [], hasMore: !1 };
    let a = Array.from(l.values()),
        s = (n === S.v.BURST ? i.burst_count : i.count) > a.length;
    return { reactors: a, hasMore: s };
})(en);
function ea(e) {
    let {
            message: t,
            selectedReaction: i,
            onClose: a,
            transitionState: s,
            "aria-label": r = Z.intl.string(Z.t.gHp0C4),
        } = e,
        o = (0, d.bG)([P.A], () => P.A.getChannel(t.getChannelId())),
        u = o?.getGuildId(),
        { enabled: c } = K.y.useConfig({ location: "MessageReactions" }),
        g = (0, d.bG)([k.A, j.A], () => {
            let e =
                k.A.getMessage(t.getChannelId(), t.id) ??
                j.A.getMessage(z.default.castMessageIdAsChannelId(t.id))?.firstMessage;
            return null != e ? e.reactions : [];
        }, [t]),
        A = l.useMemo(() => {
            let e = [];
            return (
                g.forEach((t) => {
                    t.burst_count > 0 && e.push({ ...t, count: 0 }), t.count > 0 && e.push({ ...t, burst_count: 0 });
                }),
                e.sort((e, t) => {
                    let i = e.burst_count > 0 ? e.burst_count : e.count;
                    return (t.burst_count > 0 ? t.burst_count : t.count) - i;
                }),
                e
            );
        }, [g]),
        f = A[0],
        [E, x] = (function (e, t, i) {
            let [n, a] = l.useState(e ?? t);
            return (
                l.useEffect(() => {
                    null != n &&
                        null ==
                            i.find((e) => {
                                let t = null != e.me_vote ? S.v.VOTE : e.burst_count > 0 ? S.v.BURST : S.v.NORMAL,
                                    i = (0, F.i6)(e.emoji, n.emoji),
                                    l = t === n.reactionType;
                                return i && l;
                            }) &&
                        a(t);
                }, [n, a, i, t]),
                [n, a]
            );
        })(i, null != f ? { emoji: f.emoji, reactionType: f.burst_count > 0 ? S.v.BURST : S.v.NORMAL } : null, A),
        I = l.useMemo(() => (null == E ? null : (g.find((e) => (0, F.i6)(e.emoji, E.emoji)) ?? null)), [g, E]),
        N = (0, d.bG)([T.A], () => T.A.saturation),
        C = (0, d.bG)([M.A], () => (0, m.Mw)(M.A.theme));
    if (
        (l.useEffect(() => {
            (0 === g.length || (null == E && null == I)) && setImmediate(a);
        }, [a, g.length, I, E]),
        null == E || null == I)
    )
        return (0, n.jsx)(p.y$y, {});
    if (null == o) throw Error("MessageReactions.render: Message does not have a channelId");
    return (0, n.jsx)(R.A.Provider, {
        value: u ?? void 0,
        children: (0, n.jsxs)(h.dWK, {
            transitionState: s,
            size: "md",
            onClose: a,
            "aria-label": r,
            children: [
                (0, n.jsx)(h.rQ0, { title: Z.intl.string(Z.t.gHp0C4) }),
                (0, n.jsx)("div", { className: Q.jH }),
                (0, n.jsxs)("div", {
                    className: Q.kL,
                    children: [
                        (0, n.jsx)(p.HOs, {
                            className: Q.XG,
                            fade: !0,
                            children: A.map((e) => {
                                let t = e.burst_count > 0;
                                return (0, n.jsx)(
                                    et,
                                    {
                                        isSelected: es(E, e, t ? S.v.BURST : S.v.NORMAL),
                                        setSelected: x,
                                        reactionType: t ? S.v.BURST : S.v.NORMAL,
                                        emoji: e.emoji,
                                        count: t ? e.burst_count : e.count,
                                        colors: null != e.burst_colors ? (0, v.V)(e.burst_colors, N, C) : void 0,
                                    },
                                    `${t ? "burst-" : "normal-"}${e.emoji.id ?? ""}:${e.emoji.name}`,
                                );
                            }),
                        }),
                        (0, n.jsx)(el, {
                            message: t,
                            reaction: I,
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
let es = (e, t, i) => o().isEqual(e.emoji, t.emoji) && e.reactionType === i;
