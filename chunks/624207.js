i.d(t, { $l: () => eG, qT: () => eD, $Z: () => eU, IN: () => eV });
var n = i(627968),
    l = i(64700),
    a = i(503698),
    s = i.n(a),
    o = i(284009),
    r = i.n(o),
    u = i(132500),
    d = i(615300),
    c = i(317097),
    h = i(17928),
    m = i(451988),
    p = i(192308),
    g = i(834730),
    A = i(403581),
    f = i(939249),
    x = i(922016),
    j = i(847374),
    v = i(565645),
    T = i(775602),
    E = i(114166),
    N = i(58149),
    I = i(404374),
    R = i(106778),
    b = i(419354),
    S = i(717421),
    C = i(21161),
    y = i(750506),
    M = i(147421),
    _ = i(486020),
    O = i(690521),
    L = i(851110),
    w = i(740032);
let k = [];
function P(e) {
    let { messageId: t, emoji: i, startPosition: a, targetPosition: s } = e,
        [o, r] = l.useState(0),
        [u, c] = l.useState(0),
        [h, m] = l.useState(null),
        { confettiCanvas: p } = l.useContext(C.x),
        g = (0, R.f9)(p, h),
        A = l.useMemo(
            () => [
                {
                    src: null == i.id ? O.Ay.getURL(i.name) : _.Ay.getEmojiURL({ id: i.id, animated: !1, size: 22 }),
                    colorize: !1,
                },
            ],
            [i.name, i.id],
        ),
        f = s.x - (s.width / 2) * 0.5,
        x = s.y - (s.height / 2) * 0.5,
        j = (0, S.z)({
            from: { y: a.y },
            to: { y: x },
            config: { duration: 450, easing: d.A.Easing.in(d.A.Easing.exp) },
            onChange: (e) => {
                let { y: t } = e;
                c(t);
            },
        }),
        T = (0, S.z)({
            from: { x: a.x, scale: 1, opacity: 1 },
            to: { x: f, scale: 0.5, opacity: 0.4 },
            config: { duration: 450, easing: d.A.Easing.in(d.A.Easing.ease) },
            onRest: () => {
                (0, M.p)(t, i.name, i.id);
            },
            onChange: (e) => {
                let { x: t } = e;
                r(t);
            },
        });
    return (
        l.useEffect(() => {
            o > 0 && u > 0 && g.createConfetti({ ...L.Mw, position: { type: "static", value: { x: o, y: u } } });
        }, [g, o, u]),
        (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsx)(R.K_, { ref: m, sprites: A, colors: k, spriteWidth: L.wn, spriteHeight: L.wn }),
                (0, n.jsx)(y.Ay, {
                    children: (0, n.jsx)(b.animated.div, {
                        style: { ...j },
                        className: w.qq,
                        children: (0, n.jsx)(b.animated.div, {
                            style: { ...T, opacity: T.opacity },
                            children: (0, n.jsx)(v.A, {
                                className: w.Zg,
                                emojiId: i.id,
                                emojiName: i.name,
                                animated: i.animated,
                                size: "jumbo",
                            }),
                        }),
                    }),
                }),
            ],
        })
    );
}
var U = i(159273),
    G = i(770335),
    V = i(891734),
    B = i(624793),
    D = i(731383),
    H = i(202384),
    $ = i(698405),
    W = i(735438),
    z = i.n(W),
    F = i(702841),
    K = i(3137),
    J = i(620141),
    X = i(966598),
    Z = i(224964),
    Q = i(31408);
function q(e) {
    let { reactionRef: t, count: i } = e,
        n = l.useRef(i),
        a = (0, F.bG)([K.A], () => K.A.getState()),
        s = (0, Z.A)(),
        o = (0, X.A)(t);
    return (
        l.useEffect(() => {
            if (i > n.current && null != o) {
                let e = (0, W.clamp)(i, a.confettiCount / 2, 2 * a.confettiCount);
                s.fire(o.x, o.y, { count: e });
            }
            n.current = i;
        }, [i, o, s, a.confettiCount]),
        null
    );
}
function Y(e) {
    return (0, n.jsx)(J.A, { confettiLocation: Q.k.REACTION, children: (0, n.jsx)(q, { ...e }) });
}
var ee = i(725807),
    et = i(507545),
    ei = i(649963),
    en = i(815807),
    el = i(475152),
    ea = i(253932),
    es = i(734057),
    eo = i(71393),
    er = i(956703),
    eu = i(967198),
    ed = i(287809),
    ec = i(531685),
    eh = i(954571),
    em = i(927578),
    ep = i(900210),
    eg = i(505527),
    eA = i(450707),
    ef = i(861626),
    ex = i(34337),
    ej = i(994500),
    ev = i(562153),
    eT = i(985018);
let eE = {
    standard: {
        reactionTooltip1NInteractive: eT.t.dgtYDJ,
        reactionTooltip1N: eT.t.mXild1,
        reactionTooltip1: eT.t.Oro30L,
        reactionTooltip2NInteractive: eT.t["0GBwVR"],
        reactionTooltip2N: eT.t.UWGs2n,
        reactionTooltip2: eT.t["p+0jvt"],
        reactionTooltip3NInteractive: eT.t["dK6/7W"],
        reactionTooltip3N: eT.t["UnXdX/"],
        reactionTooltip3: eT.t.bbPMcR,
        reactionTooltipNInteractive: eT.t.Thj7LX,
        reactionTooltipN: eT.t.CRrc7c,
    },
    burst: {
        reactionTooltip1NInteractive: eT.t.G98B0W,
        reactionTooltip1N: eT.t["u/03eN"],
        reactionTooltip1: eT.t["z4q3+w"],
        reactionTooltip2NInteractive: eT.t.wkcffp,
        reactionTooltip2N: eT.t.T4EYUu,
        reactionTooltip2: eT.t.R2HykW,
        reactionTooltip3NInteractive: eT.t.OhtGxz,
        reactionTooltip3N: eT.t["M8bwl+"],
        reactionTooltip3: eT.t.sNl6XR,
        reactionTooltipNInteractive: eT.t.nsITOq,
        reactionTooltipN: eT.t.dkieH5,
    },
};
function eN(e, t) {
    let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : eg.v.NORMAL,
        n = arguments.length > 3 ? arguments[3] : void 0,
        l = er.A.getReactions(e.getChannelId(), e.id, t, 3, i),
        a = es.A.getChannel(e.getChannelId()),
        s = null == a || a.isPrivate() ? null : a.getGuildId(),
        o = e.getReaction(t),
        r = i === eg.v.BURST,
        u = z()(Array.from(l?.values() ?? []))
            .reject((e) => ej.A.isBlockedOrIgnored(e.id))
            .take(3)
            .map((e) => ev.Ay.getName(s, a?.id, e))
            .value();
    if (0 === u.length) return "";
    let d = r ? eE.burst : eE.standard,
        c = Math.max(0, ((r ? o?.burst_count : o?.count) ?? 0) - u.length),
        h = (0, en.b3)(t);
    if (1 === u.length)
        if (!(c > 0)) return eT.intl.formatToPlainString(d.reactionTooltip1, { a: u[0], emojiName: h });
        else if (null != n)
            return eT.intl.format(d.reactionTooltip1NInteractive, { a: u[0], n: c, emojiName: h, onClick: n });
        else return eT.intl.formatToPlainString(d.reactionTooltip1N, { a: u[0], n: c, emojiName: h });
    if (2 === u.length)
        if (!(c > 0)) return eT.intl.formatToPlainString(d.reactionTooltip2, { a: u[0], b: u[1], emojiName: h });
        else if (null != n)
            return eT.intl.format(d.reactionTooltip2NInteractive, { a: u[0], b: u[1], n: c, emojiName: h, onClick: n });
        else return eT.intl.formatToPlainString(d.reactionTooltip2N, { a: u[0], b: u[1], n: c, emojiName: h });
    return 3 !== u.length
        ? null != n
            ? eT.intl.format(d.reactionTooltipNInteractive, { n: c, emojiName: h, onClick: n })
            : eT.intl.formatToPlainString(d.reactionTooltipN, { n: c, emojiName: h })
        : c > 0
          ? null != n
              ? eT.intl.format(d.reactionTooltip3NInteractive, {
                    a: u[0],
                    b: u[1],
                    c: u[2],
                    n: c,
                    emojiName: h,
                    onClick: n,
                })
              : eT.intl.formatToPlainString(d.reactionTooltip3N, { a: u[0], b: u[1], c: u[2], n: c, emojiName: h })
          : eT.intl.formatToPlainString(d.reactionTooltip3, { a: u[0], b: u[1], c: u[2], emojiName: h });
}
var eI = i(299072),
    eR = i(228366),
    eb = i(297494),
    eS = i(60317),
    eC = i(734646),
    ey = i(15440);
let eM = l.memo(function (e) {
    let { channelId: t, messageId: i, emoji: a, useChatFontScaling: s, color: o, count: r, emojiSize: u } = e,
        d = (0, h.bG)([ep.A], () => ep.A.getEffectForEmojiId(t, i, a)),
        c = l.useMemo(() => (0, eS.eT)(a, o, t, { key: d, messageId: i }), [o, d, a, t, i]),
        [m, p] = l.useState(!1),
        g = (0, h.bG)([T.A], () => T.A.useReducedMotion),
        A = ea.Sf.useSetting(),
        f = l.useCallback(() => {
            eR.h.dispatch({ type: "BURST_REACTION_EFFECT_CLEAR", channelId: t, messageId: i, emoji: a });
        }, [a, t, i]);
    return (l.useEffect(() => {
        let e = () => {
            if (m) return;
            let e = (0, eb.H4)(`${Date.now()}${t}${i}${a.name}`) % 10;
            (e += r > 4 ? 4 : r - 1) > 7 &&
                (p(!0), (0, ei.on)({ channelId: t, messageId: i, emoji: a, key: ep.W.RANDOM }));
        };
        if (m || (g && !A) || !A) return;
        e();
        let n = setInterval(e, 5e3);
        return () => {
            clearInterval(n);
        };
    }, [A, t, r, a, a.name, m, i, g]),
    null == d)
        ? null
        : (0, n.jsx)(eI.A, { className: (s ? ey : eC).effect, effect: c, onComplete: f, emojiSize: u });
});
var e_ = i(652215),
    eO = i(788868),
    eL = i(979132),
    ew = i(347353),
    ek = i(866661),
    eP = i(631765);
let eU = 12;
function eG(e, t, i) {
    (0, p.openModal)((e) => (0, n.jsx)(el.default, { ...e, message: t, selectedReaction: i }));
}
function eV(e, t, i) {
    return (i === eg.v.BURST && t) || (i === eg.v.NORMAL && e);
}
class eB extends l.PureComponent {
    isReactionEventActive = !1;
    isKeyboardNavigation = !1;
    scale = new d.A.Value(1);
    opacity = new d.A.Value(1);
    timeout = new m.Ep();
    hideTimeout = new m.Ep();
    ctaRef = l.createRef();
    type = eg.v.NORMAL;
    colors = { backgroundColor: void 0, borderColor: void 0, textColor: void 0 };
    state = {
        shouldShowTooltip: !1,
        tooltipText: null,
        tooltipTextAria: null,
        reactionRef: null,
        tooltipPositionKey: void 0,
    };
    hasShownTooltip = !1;
    nonce = (0, u.A)();
    upsellPopoutTargetRef = l.createRef();
    static defaultProps = { emojiSizeTooltip: "jumbo" };
    componentWillAppear(e) {
        this.animateIn(e);
    }
    componentWillEnter(e) {
        this.animateIn(e);
    }
    componentWillUnmount() {
        this.hideTooltip();
    }
    animateIn(e) {
        let { autoUnfurlReactionTooltip: t } = this.props;
        ec.A.isFocused()
            ? (this.scale.setValue(0),
              this.opacity.setValue(0),
              d.A.parallel([
                  d.A.timing(this.scale, {
                      toValue: 1,
                      duration: t ? 200 : 300,
                      easing: d.A.Easing.inOut(d.A.Easing.back()),
                  }),
                  d.A.timing(this.opacity, { toValue: 1, duration: t ? 200 : 300 }),
              ]).start(e))
            : (this.scale.setValue(1), this.opacity.setValue(1), e());
    }
    userCanBurstReact = () => this.props.userHasPremium;
    handleClick = (e) => {
        e.stopPropagation();
        let {
                message: t,
                emoji: i,
                readOnly: n,
                isBurstReaction: l,
                isPendingMember: a,
                isLurking: s,
                isForumToolbar: o,
            } = this.props,
            r = es.A.getChannel(t.getChannelId());
        if (s) return void this.ctaRef?.current?.focus();
        let u = t.getChannelId(),
            d = o ? ei.qN.FORUM_TOOLBAR : ei.qN.MESSAGE_INLINE_BUTTON;
        l && !this.userCanBurstReact()
            ? (0, et.z)({
                  analytics: {
                      type: eO.e.BURST_REACTION_UPSELL,
                      page: r?.getGuildId() != null ? e_.liQ.GUILD_CHANNEL : e_.liQ.DM_CHANNEL,
                      section: null != r ? (0, en.sn)(r) : void 0,
                      object: e_.ZSU.EMOJI_REACTION_UPSELL,
                  },
              })
            : a
              ? this.handleShowVerificationGate()
              : n ||
                (this.isMe()
                    ? (0, ei.et)({ channelId: u, messageId: t.id, emoji: i, location: d, options: { burst: l } })
                    : (0, ei.BB)(u, t.id, i, d, { burst: l }));
    };
    handleEnter = (e) => {
        let {
                emoji: t,
                message: i,
                type: n,
                reduceMotion: l,
                animateEmoji: a,
                autoUnfurlReactionTooltip: s,
            } = this.props,
            o = n === eg.v.BURST;
        o &&
            !this.isReactionEventActive &&
            !l &&
            a &&
            (0, ei.on)({ channelId: i.getChannelId(), messageId: i.id, emoji: t, key: ep.W.HOVER }),
            (this.isReactionEventActive = !0),
            (this.isKeyboardNavigation = "focus" === e.type),
            this.timeout.start(o ? 750 : s ? 200 : 500, this.showTooltip, !1);
    };
    handleEnterTooltip = () => {
        (this.isReactionEventActive = !0), this.handleShowTooltip();
    };
    handleShowTooltip = () => {
        this.hideTimeout.stop(),
            this.isReactionEventActive && (this.updateTooltipText(), er.A.addChangeListener(this.updateTooltipText));
    };
    showTooltip = () => {
        this.props.readOnly ||
            (this.handleShowTooltip(),
            this.isReactionEventActive && this.trackReactionTooltipViewed(),
            (this.hasShownTooltip = !0));
    };
    handleLeave = () => {
        (this.isReactionEventActive = !1),
            (this.isKeyboardNavigation = !1),
            this.timeout.stop(),
            er.A.removeChangeListener(this.updateTooltipText),
            this.hideTimeout.start(200, this.hideTooltip, !1);
    };
    hideTooltip = () => {
        this.setState({ shouldShowTooltip: !1 }),
            this.hasShownTooltip && eh.default.track(e_.HAw.CLOSE_POPOUT, { nonce: this.nonce });
    };
    isMe = () => {
        let { me: e, me_burst: t, type: i } = this.props;
        return eV(e, t, i);
    };
    updateTooltipText = () => {
        let { message: e, emoji: t, type: i } = this.props,
            n = eN(e, t, i),
            l = this.isKeyboardNavigation ? n : eN(e, t, i, e_.tEg);
        r()("string" == typeof n, "tooltipTextAria is not a string"),
            this.setState({ tooltipText: l, tooltipTextAria: n, shouldShowTooltip: null != l && "" !== l });
    };
    renderLurkerModeUpsellPopout = (e) => {
        let { closePopout: t } = e,
            { message: i, isLurking: l } = this.props,
            a = es.A.getChannel(i.getChannelId()),
            s = eo.A.getGuild(a?.getGuildId());
        return l && null != s
            ? (0, n.jsx)($.A, { ctaRef: this.ctaRef, type: $.w.REACTIONS, guild: s, closePopout: t })
            : (0, n.jsx)(n.Fragment, {});
    };
    renderEmojiDetails = () => {
        let e = this.props.emoji;
        return (
            null != e.id &&
            (0, n.jsx)(e$, {
                emojiId: e.id,
                refreshPositionKey: this.refreshTooltipPositionKey,
                onClose: this.handleLeave,
                nonce: this.nonce,
            })
        );
    };
    renderTooltip = () => {
        let { emoji: e, message: t, type: i, me_burst: l, isBurstReaction: a = !1 } = this.props,
            { tooltipText: o, tooltipTextAria: r } = this.state,
            u = (i) => {
                let n = es.A.getChannel(t.getChannelId());
                null == n || (this.handleLeave(), eG(n, t, { emoji: e, reactionType: a ? eg.v.BURST : eg.v.NORMAL }));
            },
            d = "string" == typeof o ? "" === o.trim() : null == o,
            c = () =>
                d || null == o || null == r
                    ? null
                    : (0, n.jsx)(g.E, { variant: "text-sm/normal", className: eP.Of, "aria-label": r, children: o }),
            h = () => {
                let e = ed.default.getCurrentUser();
                return l
                    ? (0, n.jsxs)("div", {
                          className: s()(eP.h7, eP.j9),
                          children: [
                              (0, em.TW)(e) &&
                                  (0, n.jsx)(A.t, { size: "md", className: eP.eH, color: I.k0.PREMIUM_TIER_2 }),
                              (0, n.jsx)(g.E, {
                                  variant: "text-sm/normal",
                                  className: eP.Of,
                                  "aria-label": "super reaction tooltip cta",
                                  children: eT.intl.string(eT.t.ZbNJXn),
                              }),
                          ],
                      })
                    : this.userCanBurstReact()
                      ? (0, n.jsxs)("div", {
                            className: s()(eP.h7, eP.j9, eP.rL),
                            children: [
                                (0, n.jsx)(A.t, { size: "md", className: eP.eH, color: I.k0.PREMIUM_TIER_2 }),
                                (0, n.jsx)(f.D, {
                                    onClick: this.handleClick,
                                    children: (0, n.jsx)(g.E, {
                                        variant: "text-sm/normal",
                                        className: eP.Of,
                                        "aria-label": "super reaction tooltip cta",
                                        children: eT.intl.string(eT.t.kVfuVu),
                                    }),
                                }),
                            ],
                        })
                      : this.userCanBurstReact() || this.isKeyboardNavigation
                        ? null
                        : (0, n.jsx)("div", {
                              className: s()(eP.h7, eP.j9),
                              children: (0, n.jsxs)("div", {
                                  children: [
                                      (0, n.jsx)(g.E, {
                                          variant: "text-sm/normal",
                                          "aria-label": "super reaction tooltip upsell",
                                          children: eT.intl.string(eT.t.W1bMkq),
                                      }),
                                      (0, n.jsx)(ee.A, {
                                          subscriptionTier: eO.pe.TIER_2,
                                          textOptions: { textOverride: eT.intl.string(eT.t.mr4K7D) },
                                          className: eP.Yq,
                                          onClick: (e) => e.stopPropagation(),
                                      }),
                                  ],
                              }),
                          });
            };
        return i === eg.v.BURST
            ? (0, n.jsxs)("div", {
                  className: eP.xQ,
                  onMouseEnter: this.handleEnterTooltip,
                  onMouseLeave: this.handleLeave,
                  children: [
                      (0, n.jsx)(f.D, {
                          className: eP.fu,
                          onClick: u,
                          children: (0, n.jsxs)("div", {
                              className: eP.Ok,
                              children: [
                                  (0, n.jsx)(v.A, {
                                      className: eP.JS,
                                      emojiId: e.id,
                                      emojiName: e.name,
                                      animated: e.animated,
                                      size: this.props.emojiSizeTooltip,
                                  }),
                                  c(),
                              ],
                          }),
                      }),
                      h(),
                      this.renderEmojiDetails(),
                  ],
              })
            : (0, n.jsxs)("div", {
                  className: eP.xQ,
                  onMouseEnter: this.handleEnterTooltip,
                  onMouseLeave: this.handleLeave,
                  children: [
                      (0, n.jsx)(f.D, {
                          onClick: u,
                          children: (0, n.jsxs)("div", {
                              className: eP.xR,
                              children: [
                                  (0, n.jsx)(v.A, {
                                      className: eP.JS,
                                      emojiId: e.id,
                                      emojiName: e.name,
                                      animated: e.animated,
                                      size: this.props.emojiSizeTooltip,
                                  }),
                                  c(),
                              ],
                          }),
                      }),
                      this.renderEmojiDetails(),
                  ],
              });
    };
    refreshTooltipPositionKey = () => {
        this.setState({ tooltipPositionKey: String(Date.now()) });
    };
    handleShowVerificationGate = () => {
        let { message: e, isPendingMember: t } = this.props;
        if (!t) return null;
        let i = es.A.getChannel(e.getChannelId()),
            n = eo.A.getGuild(i?.getGuildId());
        null != n && (0, H.Ze)(n.id);
    };
    handleSetReactionRef = (e) => {
        this.setState({ reactionRef: e });
    };
    trackReactionTooltipViewed = () => {
        let { emoji: e, message: t, type: i } = this.props,
            n = ed.default.getCurrentUser(),
            l = es.A.getChannel(t.getChannelId()),
            a = i === eg.v.BURST,
            s = (0, em.TW)(n),
            o = a ? eO.e.EMOJI_IN_BURST_REACTION_HOVER : eO.e.EMOJI_IN_REACTION_HOVER;
        !a || this.userCanBurstReact() || s || (o = eO.e.EMOJI_IN_BURST_REACTION_HOVER_UPSELL),
            N.Ay.trackWithMetadata(e_.HAw.EXPRESSION_TOOLTIP_VIEWED, {
                type: o,
                expression_id: e.id,
                expression_name: e.name,
                is_animated: e.animated,
                is_custom: null != e.id,
                nonce: this.nonce,
            }),
            !a ||
                null == l ||
                s ||
                this.userCanBurstReact() ||
                eh.default.track(e_.HAw.PREMIUM_UPSELL_VIEWED, {
                    type: eO.e.BURST_REACTION_UPSELL,
                    location: {
                        page: l?.getGuildId() != null ? e_.liQ.GUILD_CHANNEL : e_.liQ.DM_CHANNEL,
                        section: (0, en.sn)(l),
                        object: e_.ZSU.EMOJI_REACTION_TOOLTIP_UPSELL,
                    },
                });
    };
    render() {
        let e,
            t,
            {
                count: i,
                burst_count: l,
                colors: a,
                isBurstReaction: o,
                hideCount: r,
                emoji: u,
                readOnly: h,
                isLurking: m,
                isPendingMember: p,
                className: g,
                useChatFontScaling: A,
                message: j,
                hideEmoji: T,
                animationStartPosition: N,
                emojiSize: I,
            } = this.props,
            { shouldShowTooltip: R, tooltipTextAria: b, reactionRef: S, tooltipPositionKey: C } = this.state,
            y = A ? ek : ew,
            M = { transform: [{ scale: this.scale }], opacity: this.opacity },
            _ = o ? l : i;
        if (o && null != a) {
            let { accentColor: i, backgroundColor: n, opacity: l } = a,
                s = (0, c.xp)(n ?? "", l) ?? "";
            this.isMe() && (M.borderColor = n), (M.background = s), (e = i), (t = i);
        }
        let O = S?.getBoundingClientRect(),
            L = null != N && null != O,
            w = null == N;
        return (0, n.jsx)(x.Y, {
            targetElementRef: { current: S },
            shouldShow: R,
            "aria-label": b ?? !1,
            renderPopout: this.renderTooltip,
            nudgeAlignIntoViewport: !0,
            position: "top",
            align: "center",
            positionKey: C,
            children: () =>
                (0, n.jsx)("div", {
                    onMouseEnter: this.handleEnter,
                    onMouseLeave: this.handleLeave,
                    ref: this.handleSetReactionRef,
                    children: (0, n.jsx)(d.A.div, {
                        className: s()(y.reaction, g, {
                            [y.reactionMe]: this.isMe(),
                            [y.reactionReadOnly]: h && !m && !p,
                            [y.shakeReaction]: T && null == N,
                        }),
                        style: M,
                        children: (0, n.jsx)(x.Y, {
                            targetElementRef: this.upsellPopoutTargetRef,
                            renderPopout: this.renderLurkerModeUpsellPopout,
                            position: "top",
                            children: (i) =>
                                (0, n.jsxs)(f.D, {
                                    ...i,
                                    innerRef: this.upsellPopoutTargetRef,
                                    className: y.reactionInner,
                                    onClick: this.handleClick,
                                    "aria-disabled": h,
                                    "aria-label": (0, en.mb)(this.isMe(), _, u, o),
                                    "aria-pressed": this.isMe(),
                                    children: [
                                        (0, n.jsx)("div", {
                                            className: s()({ [y.burstGlow]: o }),
                                            style: { boxShadow: `0 0 16px ${t}` },
                                        }),
                                        (0, n.jsxs)("div", {
                                            children: [
                                                o
                                                    ? (0, n.jsxs)(n.Fragment, {
                                                          children: [
                                                              L &&
                                                                  (0, n.jsx)(P, {
                                                                      messageId: j.id,
                                                                      emoji: u,
                                                                      startPosition: N,
                                                                      targetPosition: O,
                                                                  }),
                                                              w &&
                                                                  (0, n.jsx)(eM, {
                                                                      count: l,
                                                                      emoji: u,
                                                                      channelId: j.getChannelId(),
                                                                      messageId: j.id,
                                                                      useChatFontScaling: A,
                                                                      color: t,
                                                                      emojiSize: eI.x.NORMAL,
                                                                  }),
                                                          ],
                                                      })
                                                    : null,
                                                (0, n.jsx)(v.A, {
                                                    className: s()({ [y.hideEmoji]: T }),
                                                    emojiId: u.id,
                                                    emojiName: u.name,
                                                    size: I,
                                                    animated: u.animated,
                                                }),
                                            ],
                                        }),
                                        r
                                            ? null
                                            : (0, n.jsx)(E.A, {
                                                  className: y.reactionCount,
                                                  value: _,
                                                  color: e,
                                                  digitWidth: eU,
                                              }),
                                        (0, n.jsx)(Y, { count: _, reactionRef: S }),
                                    ],
                                }),
                        }),
                    }),
                }),
        });
    }
}
let eD = l.memo((e) => {
        let { type: t, burst_colors: i, message: l, emoji: a } = e,
            s = t === eg.v.BURST,
            o = (0, V.g)(s && null != i ? i : []),
            r = (0, h.bG)([ep.A], () => void 0 !== ep.A.getEffectForEmojiId(l.getChannelId(), l.id, a)),
            u = (0, h.bG)([T.A], () => T.A.useReducedMotion),
            d = ea.Sf.useSetting(),
            c = ed.default.getCurrentUser(),
            m = (0, em.TW)(c),
            p = (0, h.bG)([ep.A], () => ep.A.getReactionPickerAnimation(l.id, a.name, a.id)),
            g = s && (r || null != p);
        return (0, n.jsx)(eB, {
            ...e,
            colors: o,
            isBurstReaction: s,
            hideEmoji: g,
            userHasPremium: m,
            reduceMotion: u,
            animateEmoji: d,
            animationStartPosition: p,
        });
    }),
    eH = (e) => {
        let {
            emojiId: t,
            expressionSourceGuild: i,
            hasJoinedExpressionSourceGuild: l,
            onClose: a,
            popoutData: s,
            currentGuildId: o,
            nonce: r,
        } = e;
        (0, D.i)({ emojiId: t, currentGuildId: o, popoutData: s, emojiSourceGuildId: i?.id, nonce: r });
        let u = i?.isDiscoverable() ?? !1,
            d = null != i && u,
            c = (i?.emojis?.length ?? 0) > 1;
        return d
            ? null == i
                ? null
                : (0, n.jsxs)(n.Fragment, {
                      children: [
                          (0, n.jsx)("div", {
                              className: eL.h2,
                              children: (0, n.jsx)(ef.G7, {
                                  expressionSourceGuild: i,
                                  hasJoinedExpressionSourceGuild: l,
                                  isDisplayingJoinGuildButtonInPopout: s.type === eA.u.JOIN_GUILD,
                              }),
                          }),
                          c &&
                              (0, n.jsx)(ef.mG, {
                                  emojiId: t,
                                  expressionSourceGuild: i,
                                  hasJoinedEmojiSourceGuild: l,
                                  onClose: a,
                                  popoutData: s,
                                  isDisplayingButtonInTopSection: !1,
                              }),
                      ],
                  })
            : (0, n.jsx)(g.E, { variant: "text-sm/normal", "aria-label": s.type, children: s.emojiDescription });
    },
    e$ = (e) => {
        let t,
            { emojiId: i, refreshPositionKey: a, onClose: o, nonce: r } = e,
            { joinedEmojiSourceGuild: u } = (0, h.cf)([U.Ay, eo.A], () => {
                let e = U.Ay.getCustomEmojiById(i);
                return { joinedEmojiSourceGuild: e?.type === G.i.GUILD ? eo.A.getGuild(e?.guildId) : void 0 };
            }),
            [d, c] = l.useState(void 0),
            [m, p] = l.useState(void 0),
            [A, x] = l.useState(null),
            [v, T] = l.useState(!1),
            [E, N] = l.useState(!1),
            [I, R] = l.useState(!1),
            b = null != u,
            S = d?.isDiscoverable() ?? !1,
            C = eu.A.getGuildId(),
            y = null != C && (C === d?.id || C === u?.id),
            M = ed.default.getCurrentUser(),
            _ = (0, eA.O)({
                sourceType: A,
                expressionSourceApplication: m ?? null,
                isPremium: em.Ay.isPremium(M),
                hasJoinedEmojiSourceGuild: b,
                isDiscoverable: S,
                emojiComesFromCurrentGuild: y,
                isUnusableRoleSubscriptionEmoji: !1,
                userIsRoleSubscriber: !1,
                isRoleSubscriptionEmoji: !1,
                shouldHideRoleSubscriptionCTA: !1,
            });
        if (
            (l.useEffect(() => {
                !v ||
                    I ||
                    (async () => {
                        a(), N(!0);
                        let e = null != i ? await (0, B.g_)(i) : null;
                        if (null != e)
                            switch ((x(e.type), e.type)) {
                                case B.rV.APPLICATION:
                                    p(e.application);
                                    break;
                                case B.rV.GUILD:
                                    c(e.guild);
                            }
                        else c(null);
                        N(!1), R(!0), a();
                    })();
            }, [i, v, I, a]),
            b)
        )
            return null;
        let O = v && (void 0 !== d || void 0 !== m);
        return (0, n.jsxs)("div", {
            children: [
                O
                    ? (0, n.jsxs)(n.Fragment, {
                          children: [
                              (0, n.jsx)("div", { className: eL.Hw }),
                              null != _.emojiDescription &&
                                  _.type !== eA.u.UNAVAILABLE &&
                                  (0, n.jsx)(g.E, {
                                      variant: "text-sm/normal",
                                      "aria-label": _.type,
                                      children: _.emojiDescription,
                                  }),
                          ],
                      })
                    : ((t = eT.intl.string(eT.t["Igv+LS"])),
                      (0, n.jsxs)(f.D, {
                          onClick: () => {
                              T(!v);
                          },
                          className: eL.s4,
                          children: [
                              (0, n.jsx)(g.E, {
                                  variant: "text-sm/normal",
                                  color: "none",
                                  "aria-label": t,
                                  children: t,
                              }),
                              (0, n.jsx)(j.a, {
                                  size: "xs",
                                  color: "currentColor",
                                  className: s()(eL.Po, { [eL.Kk]: !v }),
                              }),
                          ],
                      })),
                E
                    ? (0, n.jsx)(ex.Y0, { className: eL.eF })
                    : O &&
                      (0, n.jsx)(eH, {
                          emojiId: i,
                          expressionSourceGuild: d,
                          hasJoinedExpressionSourceGuild: b,
                          onClose: o,
                          popoutData: _,
                          currentGuildId: C,
                          nonce: r,
                      }),
            ],
        });
    };
