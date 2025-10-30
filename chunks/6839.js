n.d(t, { default: () => eu }), n(388685), n(539854), n(642613), n(358797), n(415506);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(392711),
    l = n.n(s),
    c = n(866442),
    u = n(442837),
    d = n(28664),
    f = n(780384),
    _ = n(481060),
    p = n(596454),
    h = n(129861),
    m = n(700582),
    g = n(607070),
    E = n(600164),
    b = n(633302),
    y = n(712057),
    O = n(660189),
    v = n(372900),
    I = n(566006),
    T = n(620652),
    S = n(815605),
    A = n(665906),
    C = n(210887),
    N = n(314897),
    R = n(592125),
    P = n(271383),
    w = n(542578),
    D = n(375954),
    x = n(496675),
    L = n(699516),
    M = n(594174),
    k = n(768581),
    j = n(176354),
    U = n(5192),
    G = n(709054),
    B = n(91047),
    Z = n(222677),
    F = n(995774),
    V = n(981631),
    H = n(388032),
    Y = n(629969),
    W = n(10198);
function K(e, t, n) {
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
function z(e) {
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
                K(e, t, n[t]);
            });
    }
    return e;
}
function q(e, t) {
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
            : q(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let Q = 44,
    J = 440,
    $ = 24,
    ee = 0.025;
function et(e) {
    return null == e.id ? b.ZP.convertSurrogateToName(e.name) : ":".concat(e.name, ":");
}
function en(e, t, n, i) {
    let a =
        null == e.id
            ? j.ZP.getURL(e.name)
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
let er = (e) => {
        let { emoji: t, channelId: n, messageId: a } = e,
            [s, l] = i.useState(!0),
            [c, u] = i.useState([]),
            d = i.useMemo(() => {
                if (null == c || c.length < 1) return;
                let e = (0, S.Zn)(t, c[0], n, {
                    emojiSize: T.M.LARGE,
                    messageId: a,
                });
                return (0, r.jsx)(T.Z, {
                    className: Y.__invalid_effect,
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
                        let n = await (0, j.B6)(t);
                        Array.isArray(n) && n.length > 0 && !e && u(n);
                    })(),
                    () => {
                        e = !0;
                    }
                );
            }, [t]),
            (0, r.jsxs)("div", {
                className: Y.burstEmojiSection,
                children: [
                    d,
                    (0, r.jsx)(p.Z, {
                        className: o()(Y.burstEmoji, { [Y.hideEmoji]: s }),
                        emojiId: t.id,
                        emojiName: t.name,
                        animated: t.animated,
                        size: "reaction",
                    }),
                    (0, r.jsx)(_.Text, {
                        variant: "text-md/medium",
                        children: et(t),
                    }),
                ],
            })
        );
    },
    ei = i.memo(function (e) {
        let { emoji: t, count: n, isSelected: a, setSelected: s, reactionType: l, colors: u } = e,
            f = i.useMemo(() => et(t), [t]),
            p = i.useMemo(() => en(t, $, Y.emoji, o()(Y.emoji, Y.emojiText)), [t]),
            h = l === I.O.BURST,
            m = h ? H.t.VmiNjd : H.t["cNfs1/"],
            g = H.intl.formatToPlainString(m, {
                name: f,
                n: n,
            }),
            E = i.useMemo(() => {
                let e = {};
                if (h) {
                    var t, n, r, i;
                    let { backgroundColor: o = "", opacity: s = 1 } = null != u ? u : {};
                    a
                        ? ((e.background = null != (t = (0, c.wK)(o, s)) ? t : ""),
                          (e.border = "1px solid ".concat(null != (n = (0, c.wK)(o, 1.1 * s)) ? n : "")))
                        : ((e.background = null != (r = (0, c.wK)(o, ee)) ? r : ""),
                          (e.border = "1px solid ".concat(null != (i = (0, c.wK)(o, 2 * ee)) ? i : "")));
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
                    [Y.reactionDefault]: !a,
                    [Y.reactionSelected]: a,
                }),
                "aria-label": g,
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
function ea(e) {
    let {
            emoji: t,
            user: n,
            message: i,
            channel: a,
            guildId: o,
            reactionType: s,
            onRemoveReactor: l,
            disableManage: c = !1,
        } = e,
        d = (0, u.e7)([N.default], () => N.default.getId()),
        f = (0, u.e7)([M.default], () => M.default.getUser(n.id), [n]),
        p = (0, A.$R)(a),
        g = (0, u.e7)([x.Z], () => x.Z.can(V.Plq.MANAGE_MESSAGES, a) && p) || d === n.id,
        b = (0, u.e7)([P.ZP, R.Z, L.Z], () => U.ZP.getName(o, a.id, n));
    function y() {
        Z.WO({
            channelId: a.id,
            messageId: i.id,
            emoji: t,
            location: Z.TW.MESSAGE,
            userId: n.id,
            options: { burst: s === I.O.BURST },
        }),
            null == l || l();
    }
    return (0, r.jsxs)(E.Z, {
        className: Y.reactorDefault,
        onContextMenu: (e) => (0, B.Pv)(e, n, a),
        align: E.Z.Align.CENTER,
        children: [
            (0, r.jsx)(E.Z.Child, {
                wrap: !0,
                grow: 0,
                shrink: 0,
                className: W.marginReset,
                children: (0, r.jsx)(m.Z, {
                    user: null != f ? f : n,
                    size: _.EFr.SIZE_24,
                }),
            }),
            (0, r.jsx)(E.Z.Child, {
                children: (0, r.jsxs)(_.Text, {
                    tag: "strong",
                    variant: "text-md/normal",
                    className: Y.name,
                    children: [
                        null != b &&
                            "" !== b &&
                            (0, r.jsx)("span", {
                                className: n.hasUniqueUsername() ? "" : Y.nickname,
                                children: b,
                            }),
                        (0, r.jsx)(h.Z, {
                            user: n,
                            className: null != b && "" !== b ? Y.tagFaded : null,
                            usernameClass: Y.username,
                            discriminatorClass: Y.discriminator,
                            forceUsername: !0,
                        }),
                    ],
                }),
            }),
            !c &&
                g &&
                (0, r.jsx)(_.P3F, {
                    onClick: y,
                    children: (0, r.jsx)(_.Dio, {
                        size: "xs",
                        color: "currentColor",
                        className: Y.remove,
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
            Z.U0({
                channelId: e.getChannelId(),
                messageId: e.id,
                emoji: t.emoji,
                limit: V.pTL,
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
            0 === t.length && this.state.loadingMore ? o.push(length) : (o.push(t.length), e && o.push(1)),
            (0, r.jsxs)("div", {
                className: Y.reactorsContainer,
                children: [
                    a === I.O.BURST &&
                        (0, r.jsx)(er, {
                            emoji: n.emoji,
                            channelId: i.getChannelId(),
                            messageId: i.id,
                        }),
                    (0, r.jsx)(_.aVo, {
                        className: Y.reactors,
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
            K(this, "scrollerRef", i.createRef()),
            K(this, "state", {
                lastId: null,
                loadingMore: !1,
            }),
            K(this, "handleScroll", () => {
                let { current: e } = this.scrollerRef;
                if (null == e) return;
                let t = e.getScrollerState();
                t.scrollTop + t.offsetHeight >= t.scrollHeight - Q &&
                    this.props.hasMore &&
                    !this.state.loadingMore &&
                    this.loadMore();
            }),
            K(this, "getRowHeight", (e, t) => {
                let { reactors: n } = this.props;
                if (1 === e) return 0 === t ? Q : 0;
                if (0 === e) {
                    if (0 === t && 0 === n.length) return J;
                    if (null != this.props.reactors[t]) return Q;
                }
                return 0;
            }),
            K(this, "renderRow", (e) => {
                let { section: t, row: n } = e,
                    {
                        message: i,
                        guildId: a,
                        channel: o,
                        reaction: s,
                        reactors: l,
                        reactionType: c,
                        disableManage: u,
                    } = this.props,
                    d = l[n];
                return 1 === t
                    ? 0 === n
                        ? (0, r.jsx)(_.$jN, { className: Y.spinnerMore }, "hasMore")
                        : null
                    : 0 === l.length && this.state.loadingMore
                      ? (0, r.jsx)(_.$jN, { className: Y.spinner }, "loadingMore")
                      : null != d &&
                        (0, r.jsx)(
                            ea,
                            {
                                message: i,
                                emoji: s.emoji,
                                guildId: a,
                                channel: o,
                                user: d,
                                reaction: s,
                                reactionType: c,
                                disableManage: u,
                            },
                            d.id,
                        );
            });
    }
}
let es = u.ZP.connectStores([w.Z], (e) => {
    let { message: t, reaction: n, reactionType: r } = e,
        i = w.Z.getReactions(t.getChannelId(), t.id, n.emoji, V.pTL, r);
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
})(eo);
function el(e) {
    return i.useMemo(() => {
        let t = [];
        return (
            e.forEach((e) => {
                e.burst_count > 0 && t.push(X(z({}, e), { count: 0 })),
                    e.count > 0 && t.push(X(z({}, e), { burst_count: 0 }));
            }),
            t.sort((e, t) => {
                let n = e.burst_count > 0 ? e.burst_count : e.count;
                return (t.burst_count > 0 ? t.burst_count : t.count) - n;
            }),
            t
        );
    }, [e]);
}
function ec(e, t, n) {
    let [r, a] = i.useState(null != e ? e : t);
    return (
        i.useEffect(() => {
            null != r &&
                null ==
                    n.find((e) => {
                        let t = null != e.me_vote ? I.O.VOTE : e.burst_count > 0 ? I.O.BURST : I.O.NORMAL,
                            n = (0, F.ir)(e.emoji, r.emoji),
                            i = t === r.reactionType;
                        return n && i;
                    }) &&
                a(t);
        }, [r, a, n, t]),
        [r, a]
    );
}
function eu(e) {
    let {
            message: t,
            selectedReaction: n,
            disableManage: a = !1,
            disableTabs: o = !1,
            onClose: s,
            transitionState: l,
            "aria-label": c = H.intl.string(H.t.gHp0C4),
        } = e,
        d = (0, u.e7)([R.Z], () => R.Z.getChannel(t.getChannelId())),
        p = null == d ? void 0 : d.getGuildId(),
        h = (0, u.e7)([D.Z, O.Z], () => {
            var e, n;
            let r =
                null != (n = D.Z.getMessage(t.getChannelId(), t.id))
                    ? n
                    : null == (e = O.Z.getMessage(G.default.castMessageIdAsChannelId(t.id)))
                      ? void 0
                      : e.firstMessage;
            return null != r ? r.reactions : [];
        }, [t]),
        m = el(h),
        E = m[0],
        [b, T] = ec(
            n,
            null != E
                ? {
                      emoji: E.emoji,
                      reactionType: E.burst_count > 0 ? I.O.BURST : I.O.NORMAL,
                  }
                : null,
            m,
        ),
        S = i.useMemo(() => {
            var e;
            return null == b ? null : null != (e = h.find((e) => (0, F.ir)(e.emoji, b.emoji))) ? e : null;
        }, [h, b]),
        A = (0, u.e7)([g.Z], () => g.Z.saturation),
        N = (0, u.e7)([C.Z], () => (0, f.wj)(C.Z.theme));
    if (
        (i.useEffect(() => {
            (0 === h.length || (null == b && null == S)) && setImmediate(s);
        }, [s, h.length, S, b]),
        null == b || null == S)
    )
        return (0, r.jsx)(_.$jN, {});
    if (null == d) throw Error("MessageReactions.render: Message does not have a channelId");
    return (0, r.jsx)(v.Z.Provider, {
        value: null != p ? p : void 0,
        children: (0, r.jsxs)(_.Y0X, {
            "aria-label": c,
            transitionState: l,
            size: _.CgR.DYNAMIC,
            className: Y.container,
            parentComponent: "MessageReactions",
            children: [
                o
                    ? null
                    : (0, r.jsx)(_.Ttm, {
                          className: Y.scroller,
                          fade: !0,
                          children: m.map((e) => {
                              var t;
                              let n = e.burst_count > 0;
                              return (0, r.jsx)(
                                  ei,
                                  {
                                      isSelected: ed(b, e, n ? I.O.BURST : I.O.NORMAL),
                                      setSelected: T,
                                      reactionType: n ? I.O.BURST : I.O.NORMAL,
                                      emoji: e.emoji,
                                      count: n ? e.burst_count : e.count,
                                      colors: null != e.burst_colors ? (0, y.Z)(e.burst_colors, A, N) : void 0,
                                  },
                                  ""
                                      .concat(n ? "burst-" : "normal-")
                                      .concat(null != (t = e.emoji.id) ? t : "", ":")
                                      .concat(e.emoji.name),
                              );
                          }),
                      }),
                (0, r.jsx)(es, {
                    message: t,
                    reaction: S,
                    guildId: p,
                    channel: d,
                    reactionType: b.reactionType,
                    disableManage: a,
                }),
            ],
        }),
    });
}
let ed = (e, t, n) => l().isEqual(e.emoji, t.emoji) && e.reactionType === n;
