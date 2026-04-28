i.d(t, { qT: () => eG, $Z: () => eP, IN: () => eV });
var n = i(627968),
    l = i(64700),
    a = i(503698),
    o = i.n(a),
    r = i(284009),
    s = i.n(r),
    u = i(132500),
    d = i(615300),
    c = i(317097),
    h = i(17928),
    p = i(451988),
    m = i(834730),
    g = i(403581),
    A = i(939249),
    f = i(922016),
    T = i(847374),
    v = i(565645),
    E = i(775602),
    I = i(114166),
    x = i(58149),
    N = i(404374),
    R = i(106778),
    j = i(487514),
    b = i(717421),
    S = i(21161),
    C = i(750506),
    y = i(147421),
    O = i(486020),
    L = i(690521),
    w = i(851110),
    M = i(740032);
let _ = [];
function k(e) {
    let { messageId: t, emoji: i, startPosition: a, targetPosition: o } = e,
        [r, s] = l.useState(0),
        [u, c] = l.useState(0),
        [h, p] = l.useState(null),
        { confettiCanvas: m } = l.useContext(S.x),
        g = (0, R.f9)(m, h),
        A = l.useMemo(
            () => [
                {
                    src: null == i.id ? L.Ay.getURL(i.name) : O.Ay.getEmojiURL({ id: i.id, animated: !1, size: 22 }),
                    colorize: !1,
                },
            ],
            [i.name, i.id],
        ),
        f = o.x - (o.width / 2) * 0.5,
        T = o.y - (o.height / 2) * 0.5,
        E = (0, b.z)({
            from: { y: a.y },
            to: { y: T },
            config: { duration: 450, easing: d.A.Easing.in(d.A.Easing.exp) },
            onChange: (e) => {
                let { y: t } = e;
                c(t);
            },
        }),
        I = (0, b.z)({
            from: { x: a.x, scale: 1, opacity: 1 },
            to: { x: f, scale: 0.5, opacity: 0.4 },
            config: { duration: 450, easing: d.A.Easing.in(d.A.Easing.ease) },
            onRest: () => {
                (0, y.p)(t, i.name, i.id);
            },
            onChange: (e) => {
                let { x: t } = e;
                s(t);
            },
        });
    return (
        l.useEffect(() => {
            r > 0 && u > 0 && g.createConfetti({ ...w.Mw, position: { type: "static", value: { x: r, y: u } } });
        }, [g, r, u]),
        (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsx)(R.K_, { ref: p, sprites: A, colors: _, spriteWidth: w.wn, spriteHeight: w.wn }),
                (0, n.jsx)(C.Ay, {
                    children: (0, n.jsx)(j.animated.div, {
                        style: { ...E },
                        className: M.qq,
                        children: (0, n.jsx)(j.animated.div, {
                            style: { ...I, opacity: I.opacity },
                            children: (0, n.jsx)(v.A, {
                                className: M.Zg,
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
var P = i(159273),
    V = i(770335),
    U = i(891734),
    G = i(624793),
    D = i(731383),
    B = i(202384),
    H = i(698405),
    $ = i(735438),
    W = i.n($),
    z = i(702841),
    F = i(3137),
    K = i(620141),
    J = i(966598),
    X = i(224964),
    Y = i(31408);
function Q(e) {
    let { reactionRef: t, count: i } = e,
        n = l.useRef(i),
        a = (0, z.bG)([F.A], () => F.A.getState()),
        o = (0, X.A)(),
        r = (0, J.A)(t);
    return (
        l.useEffect(() => {
            if (i > n.current && null != r) {
                let e = (0, $.clamp)(i, a.confettiCount / 2, 2 * a.confettiCount);
                o.fire(r.x, r.y, { count: e });
            }
            n.current = i;
        }, [i, r, o, a.confettiCount]),
        null
    );
}
function Z(e) {
    return (0, n.jsx)(K.A, { confettiLocation: Y.k.REACTION, children: (0, n.jsx)(Q, { ...e }) });
}
var q = i(725807),
    ee = i(507545),
    et = i(649963),
    ei = i(815807),
    en = i(191226),
    el = i(253932),
    ea = i(734057),
    eo = i(71393),
    er = i(956703),
    es = i(967198),
    eu = i(287809),
    ed = i(531685),
    ec = i(954571),
    eh = i(927578),
    ep = i(900210),
    em = i(505527),
    eg = i(450707),
    eA = i(861626),
    ef = i(34337),
    eT = i(994500),
    ev = i(562153),
    eE = i(985018);
let eI = {
    standard: {
        reactionTooltip1NInteractive: eE.t.dgtYDJ,
        reactionTooltip1N: eE.t.mXild1,
        reactionTooltip1: eE.t.Oro30L,
        reactionTooltip2NInteractive: eE.t["0GBwVR"],
        reactionTooltip2N: eE.t.UWGs2n,
        reactionTooltip2: eE.t["p+0jvt"],
        reactionTooltip3NInteractive: eE.t["dK6/7W"],
        reactionTooltip3N: eE.t["UnXdX/"],
        reactionTooltip3: eE.t.bbPMcR,
        reactionTooltipNInteractive: eE.t.Thj7LX,
        reactionTooltipN: eE.t.CRrc7c,
    },
    burst: {
        reactionTooltip1NInteractive: eE.t.G98B0W,
        reactionTooltip1N: eE.t["u/03eN"],
        reactionTooltip1: eE.t["z4q3+w"],
        reactionTooltip2NInteractive: eE.t.wkcffp,
        reactionTooltip2N: eE.t.T4EYUu,
        reactionTooltip2: eE.t.R2HykW,
        reactionTooltip3NInteractive: eE.t.OhtGxz,
        reactionTooltip3N: eE.t["M8bwl+"],
        reactionTooltip3: eE.t.sNl6XR,
        reactionTooltipNInteractive: eE.t.nsITOq,
        reactionTooltipN: eE.t.dkieH5,
    },
};
function ex(e, t) {
    let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : em.v.NORMAL,
        n = arguments.length > 3 ? arguments[3] : void 0,
        l = er.A.getReactions(e.getChannelId(), e.id, t, 3, i),
        a = ea.A.getChannel(e.getChannelId()),
        o = null == a || a.isPrivate() ? null : a.getGuildId(),
        r = e.getReaction(t),
        s = i === em.v.BURST,
        u = W()(Array.from(l?.values() ?? []))
            .reject((e) => eT.A.isBlockedOrIgnored(e.id))
            .take(3)
            .map((e) => ev.Ay.getName(o, a?.id, e))
            .value();
    if (0 === u.length) return "";
    let d = s ? eI.burst : eI.standard,
        c = Math.max(0, ((s ? r?.burst_count : r?.count) ?? 0) - u.length),
        h = (0, ei.b3)(t);
    if (1 === u.length)
        if (!(c > 0)) return eE.intl.formatToPlainString(d.reactionTooltip1, { a: u[0], emojiName: h });
        else if (null != n)
            return eE.intl.format(d.reactionTooltip1NInteractive, { a: u[0], n: c, emojiName: h, onClick: n });
        else return eE.intl.formatToPlainString(d.reactionTooltip1N, { a: u[0], n: c, emojiName: h });
    if (2 === u.length)
        if (!(c > 0)) return eE.intl.formatToPlainString(d.reactionTooltip2, { a: u[0], b: u[1], emojiName: h });
        else if (null != n)
            return eE.intl.format(d.reactionTooltip2NInteractive, { a: u[0], b: u[1], n: c, emojiName: h, onClick: n });
        else return eE.intl.formatToPlainString(d.reactionTooltip2N, { a: u[0], b: u[1], n: c, emojiName: h });
    return 3 !== u.length
        ? null != n
            ? eE.intl.format(d.reactionTooltipNInteractive, { n: c, emojiName: h, onClick: n })
            : eE.intl.formatToPlainString(d.reactionTooltipN, { n: c, emojiName: h })
        : c > 0
          ? null != n
              ? eE.intl.format(d.reactionTooltip3NInteractive, {
                    a: u[0],
                    b: u[1],
                    c: u[2],
                    n: c,
                    emojiName: h,
                    onClick: n,
                })
              : eE.intl.formatToPlainString(d.reactionTooltip3N, { a: u[0], b: u[1], c: u[2], n: c, emojiName: h })
          : eE.intl.formatToPlainString(d.reactionTooltip3, { a: u[0], b: u[1], c: u[2], emojiName: h });
}
var eN = i(299072),
    eR = i(228366),
    ej = i(297494),
    eb = i(60317),
    eS = i(734646),
    eC = i(15440);
let ey = l.memo(function (e) {
    let { channelId: t, messageId: i, emoji: a, useChatFontScaling: o, color: r, count: s, emojiSize: u } = e,
        d = (0, h.bG)([ep.A], () => ep.A.getEffectForEmojiId(t, i, a)),
        c = l.useMemo(() => (0, eb.eT)(a, r, t, { key: d, messageId: i }), [r, d, a, t, i]),
        [p, m] = l.useState(!1),
        g = (0, h.bG)([E.A], () => E.A.useReducedMotion),
        A = el.Sf.useSetting(),
        f = l.useCallback(() => {
            eR.h.dispatch({ type: "BURST_REACTION_EFFECT_CLEAR", channelId: t, messageId: i, emoji: a });
        }, [a, t, i]);
    return (l.useEffect(() => {
        let e = () => {
            if (p) return;
            let e = (0, ej.H4)(`${Date.now()}${t}${i}${a.name}`) % 10;
            (e += s > 4 ? 4 : s - 1) > 7 &&
                (m(!0), (0, et.on)({ channelId: t, messageId: i, emoji: a, key: ep.W.RANDOM }));
        };
        if (p || (g && !A) || !A) return;
        e();
        let n = setInterval(e, 5e3);
        return () => {
            clearInterval(n);
        };
    }, [A, t, s, a, a.name, p, i, g]),
    null == d)
        ? null
        : (0, n.jsx)(eN.A, { className: (o ? eC : eS).effect, effect: c, onComplete: f, emojiSize: u });
});
var eO = i(652215),
    eL = i(788868),
    ew = i(979132),
    eM = i(347353),
    e_ = i(866661),
    ek = i(631765);
let eP = 12;
function eV(e, t, i) {
    return (i === em.v.BURST && t) || (i === em.v.NORMAL && e);
}
class eU extends l.PureComponent {
    isReactionEventActive = !1;
    isKeyboardNavigation = !1;
    scale = new d.A.Value(1);
    opacity = new d.A.Value(1);
    timeout = new p.Ep();
    hideTimeout = new p.Ep();
    ctaRef = l.createRef();
    type = em.v.NORMAL;
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
        ed.A.isFocused()
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
                isLurking: o,
                isForumToolbar: r,
            } = this.props,
            s = ea.A.getChannel(t.getChannelId());
        if (o) return void this.ctaRef?.current?.focus();
        let u = t.getChannelId(),
            d = r ? et.qN.FORUM_TOOLBAR : et.qN.MESSAGE_INLINE_BUTTON;
        l && !this.userCanBurstReact()
            ? (0, ee.z)({
                  analytics: {
                      type: eL.e.BURST_REACTION_UPSELL,
                      page: s?.getGuildId() != null ? eO.liQ.GUILD_CHANNEL : eO.liQ.DM_CHANNEL,
                      section: null != s ? (0, ei.sn)(s) : void 0,
                      object: eO.ZSU.EMOJI_REACTION_UPSELL,
                  },
              })
            : a
              ? this.handleShowVerificationGate()
              : n ||
                (this.isMe()
                    ? (0, et.et)({ channelId: u, messageId: t.id, emoji: i, location: d, options: { burst: l } })
                    : (0, et.BB)(u, t.id, i, d, { burst: l }));
    };
    handleEnter = (e) => {
        let {
                emoji: t,
                message: i,
                type: n,
                reduceMotion: l,
                animateEmoji: a,
                autoUnfurlReactionTooltip: o,
            } = this.props,
            r = n === em.v.BURST;
        r &&
            !this.isReactionEventActive &&
            !l &&
            a &&
            (0, et.on)({ channelId: i.getChannelId(), messageId: i.id, emoji: t, key: ep.W.HOVER }),
            (this.isReactionEventActive = !0),
            (this.isKeyboardNavigation = "focus" === e.type),
            this.timeout.start(r ? 750 : o ? 200 : 500, this.showTooltip, !1);
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
            this.hasShownTooltip && ec.default.track(eO.HAw.CLOSE_POPOUT, { nonce: this.nonce });
    };
    isMe = () => {
        let { me: e, me_burst: t, type: i } = this.props;
        return eV(e, t, i);
    };
    updateTooltipText = () => {
        let { message: e, emoji: t, type: i } = this.props,
            n = ex(e, t, i),
            l = this.isKeyboardNavigation ? n : ex(e, t, i, eO.tEg);
        s()("string" == typeof n, "tooltipTextAria is not a string"),
            this.setState({ tooltipText: l, tooltipTextAria: n, shouldShowTooltip: null != l && "" !== l });
    };
    renderLurkerModeUpsellPopout = (e) => {
        let { closePopout: t } = e,
            { message: i, isLurking: l } = this.props,
            a = ea.A.getChannel(i.getChannelId()),
            o = eo.A.getGuild(a?.getGuildId());
        return l && null != o
            ? (0, n.jsx)(H.A, { ctaRef: this.ctaRef, type: H.w.REACTIONS, guild: o, closePopout: t })
            : (0, n.jsx)(n.Fragment, {});
    };
    renderEmojiDetails = () => {
        let e = this.props.emoji;
        return (
            null != e.id &&
            (0, n.jsx)(eB, {
                emojiId: e.id,
                refreshPositionKey: this.refreshTooltipPositionKey,
                onClose: this.handleLeave,
                nonce: this.nonce,
            })
        );
    };
    renderTooltip = () => {
        let { emoji: e, message: t, type: i, me_burst: l, isBurstReaction: a = !1 } = this.props,
            { tooltipText: r, tooltipTextAria: s } = this.state,
            u = (i) => {
                if (null == ea.A.getChannel(t.getChannelId())) return;
                this.handleLeave();
                let n = a ? em.v.BURST : em.v.NORMAL;
                (0, en.$)(t, { emoji: e, reactionType: n });
            },
            d = "string" == typeof r ? "" === r.trim() : null == r,
            c = () =>
                d || null == r || null == s
                    ? null
                    : (0, n.jsx)(m.E, { variant: "text-sm/normal", className: ek.Of, "aria-label": s, children: r }),
            h = () => {
                let e = eu.default.getCurrentUser();
                return l
                    ? (0, n.jsxs)("div", {
                          className: o()(ek.h7, ek.j9),
                          children: [
                              (0, eh.TW)(e) &&
                                  (0, n.jsx)(g.t, { size: "md", className: ek.eH, color: N.k0.PREMIUM_TIER_2 }),
                              (0, n.jsx)(m.E, {
                                  variant: "text-sm/normal",
                                  className: ek.Of,
                                  "aria-label": "super reaction tooltip cta",
                                  children: eE.intl.string(eE.t.ZbNJXn),
                              }),
                          ],
                      })
                    : this.userCanBurstReact()
                      ? (0, n.jsxs)("div", {
                            className: o()(ek.h7, ek.j9, ek.rL),
                            children: [
                                (0, n.jsx)(g.t, { size: "md", className: ek.eH, color: N.k0.PREMIUM_TIER_2 }),
                                (0, n.jsx)(A.D, {
                                    onClick: this.handleClick,
                                    children: (0, n.jsx)(m.E, {
                                        variant: "text-sm/normal",
                                        className: ek.Of,
                                        "aria-label": "super reaction tooltip cta",
                                        children: eE.intl.string(eE.t.kVfuVu),
                                    }),
                                }),
                            ],
                        })
                      : this.userCanBurstReact() || this.isKeyboardNavigation
                        ? null
                        : (0, n.jsx)("div", {
                              className: o()(ek.h7, ek.j9),
                              children: (0, n.jsxs)("div", {
                                  children: [
                                      (0, n.jsx)(m.E, {
                                          variant: "text-sm/normal",
                                          "aria-label": "super reaction tooltip upsell",
                                          children: eE.intl.string(eE.t.W1bMkq),
                                      }),
                                      (0, n.jsx)(q.A, {
                                          subscriptionTier: eL.pe.TIER_2,
                                          textOptions: { textOverride: eE.intl.string(eE.t.mr4K7D) },
                                          className: ek.Yq,
                                          onClick: (e) => e.stopPropagation(),
                                      }),
                                  ],
                              }),
                          });
            };
        return i === em.v.BURST
            ? (0, n.jsxs)("div", {
                  className: ek.xQ,
                  onMouseEnter: this.handleEnterTooltip,
                  onMouseLeave: this.handleLeave,
                  children: [
                      (0, n.jsx)(A.D, {
                          className: ek.fu,
                          onClick: u,
                          children: (0, n.jsxs)("div", {
                              className: ek.Ok,
                              children: [
                                  (0, n.jsx)(v.A, {
                                      className: ek.JS,
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
                  className: ek.xQ,
                  onMouseEnter: this.handleEnterTooltip,
                  onMouseLeave: this.handleLeave,
                  children: [
                      (0, n.jsx)(A.D, {
                          onClick: u,
                          children: (0, n.jsxs)("div", {
                              className: ek.xR,
                              children: [
                                  (0, n.jsx)(v.A, {
                                      className: ek.JS,
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
        let i = ea.A.getChannel(e.getChannelId()),
            n = eo.A.getGuild(i?.getGuildId());
        null != n && (0, B.Ze)(n.id);
    };
    handleSetReactionRef = (e) => {
        this.setState({ reactionRef: e });
    };
    trackReactionTooltipViewed = () => {
        let { emoji: e, message: t, type: i } = this.props,
            n = eu.default.getCurrentUser(),
            l = ea.A.getChannel(t.getChannelId()),
            a = i === em.v.BURST,
            o = (0, eh.TW)(n),
            r = a ? eL.e.EMOJI_IN_BURST_REACTION_HOVER : eL.e.EMOJI_IN_REACTION_HOVER;
        !a || this.userCanBurstReact() || o || (r = eL.e.EMOJI_IN_BURST_REACTION_HOVER_UPSELL),
            x.Ay.trackWithMetadata(eO.HAw.EXPRESSION_TOOLTIP_VIEWED, {
                type: r,
                expression_id: e.id,
                expression_name: e.name,
                is_animated: e.animated,
                is_custom: null != e.id,
                nonce: this.nonce,
            }),
            !a ||
                null == l ||
                o ||
                this.userCanBurstReact() ||
                ec.default.track(eO.HAw.PREMIUM_UPSELL_VIEWED, {
                    type: eL.e.BURST_REACTION_UPSELL,
                    location: {
                        page: l?.getGuildId() != null ? eO.liQ.GUILD_CHANNEL : eO.liQ.DM_CHANNEL,
                        section: (0, ei.sn)(l),
                        object: eO.ZSU.EMOJI_REACTION_TOOLTIP_UPSELL,
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
                isBurstReaction: r,
                hideCount: s,
                emoji: u,
                readOnly: h,
                isLurking: p,
                isPendingMember: m,
                className: g,
                useChatFontScaling: T,
                message: E,
                hideEmoji: x,
                animationStartPosition: N,
                emojiSize: R,
            } = this.props,
            { shouldShowTooltip: j, tooltipTextAria: b, reactionRef: S, tooltipPositionKey: C } = this.state,
            y = T ? e_ : eM,
            O = { transform: [{ scale: this.scale }], opacity: this.opacity },
            L = r ? l : i;
        if (r && null != a) {
            let { accentColor: i, backgroundColor: n, opacity: l } = a,
                o = (0, c.xp)(n ?? "", l) ?? "";
            this.isMe() && (O.borderColor = n), (O.background = o), (e = i), (t = i);
        }
        let w = S?.getBoundingClientRect(),
            M = null != N && null != w,
            _ = null == N;
        return (0, n.jsx)(f.Y, {
            targetElementRef: { current: S },
            shouldShow: j,
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
                        className: o()(y.reaction, g, {
                            [y.reactionMe]: this.isMe(),
                            [y.reactionReadOnly]: h && !p && !m,
                            [y.shakeReaction]: x && null == N,
                        }),
                        style: O,
                        children: (0, n.jsx)(f.Y, {
                            targetElementRef: this.upsellPopoutTargetRef,
                            renderPopout: this.renderLurkerModeUpsellPopout,
                            position: "top",
                            children: (i) =>
                                (0, n.jsxs)(A.D, {
                                    ...i,
                                    innerRef: this.upsellPopoutTargetRef,
                                    className: y.reactionInner,
                                    onClick: this.handleClick,
                                    "aria-disabled": h,
                                    "aria-label": (0, ei.mb)(this.isMe(), L, u, r),
                                    "aria-pressed": this.isMe(),
                                    children: [
                                        (0, n.jsx)("div", {
                                            className: o()({ [y.burstGlow]: r }),
                                            style: { boxShadow: `0 0 16px ${t}` },
                                        }),
                                        (0, n.jsxs)("div", {
                                            children: [
                                                r
                                                    ? (0, n.jsxs)(n.Fragment, {
                                                          children: [
                                                              M &&
                                                                  (0, n.jsx)(k, {
                                                                      messageId: E.id,
                                                                      emoji: u,
                                                                      startPosition: N,
                                                                      targetPosition: w,
                                                                  }),
                                                              _ &&
                                                                  (0, n.jsx)(ey, {
                                                                      count: l,
                                                                      emoji: u,
                                                                      channelId: E.getChannelId(),
                                                                      messageId: E.id,
                                                                      useChatFontScaling: T,
                                                                      color: t,
                                                                      emojiSize: eN.x.NORMAL,
                                                                  }),
                                                          ],
                                                      })
                                                    : null,
                                                (0, n.jsx)(v.A, {
                                                    className: o()({ [y.hideEmoji]: x }),
                                                    emojiId: u.id,
                                                    emojiName: u.name,
                                                    size: R,
                                                    animated: u.animated,
                                                }),
                                            ],
                                        }),
                                        s
                                            ? null
                                            : (0, n.jsx)(I.A, {
                                                  className: y.reactionCount,
                                                  value: L,
                                                  color: e,
                                                  digitWidth: eP,
                                              }),
                                        (0, n.jsx)(Z, { count: L, reactionRef: S }),
                                    ],
                                }),
                        }),
                    }),
                }),
        });
    }
}
let eG = l.memo((e) => {
        let { type: t, burst_colors: i, message: l, emoji: a } = e,
            o = t === em.v.BURST,
            r = (0, U.g)(o && null != i ? i : []),
            s = (0, h.bG)([ep.A], () => void 0 !== ep.A.getEffectForEmojiId(l.getChannelId(), l.id, a)),
            u = (0, h.bG)([E.A], () => E.A.useReducedMotion),
            d = el.Sf.useSetting(),
            c = eu.default.getCurrentUser(),
            p = (0, eh.TW)(c),
            m = (0, h.bG)([ep.A], () => ep.A.getReactionPickerAnimation(l.id, a.name, a.id)),
            g = o && (s || null != m);
        return (0, n.jsx)(eU, {
            ...e,
            colors: r,
            isBurstReaction: o,
            hideEmoji: g,
            userHasPremium: p,
            reduceMotion: u,
            animateEmoji: d,
            animationStartPosition: m,
        });
    }),
    eD = (e) => {
        let {
            emojiId: t,
            expressionSourceGuild: i,
            hasJoinedExpressionSourceGuild: l,
            onClose: a,
            popoutData: o,
            currentGuildId: r,
            nonce: s,
        } = e;
        (0, D.i)({ emojiId: t, currentGuildId: r, popoutData: o, emojiSourceGuildId: i?.id, nonce: s });
        let u = i?.isDiscoverable() ?? !1,
            d = null != i && u,
            c = (i?.emojis?.length ?? 0) > 1;
        return d
            ? null == i
                ? null
                : (0, n.jsxs)(n.Fragment, {
                      children: [
                          (0, n.jsx)("div", {
                              className: ew.h2,
                              children: (0, n.jsx)(eA.G7, {
                                  expressionSourceGuild: i,
                                  hasJoinedExpressionSourceGuild: l,
                                  isDisplayingJoinGuildButtonInPopout: o.type === eg.u.JOIN_GUILD,
                              }),
                          }),
                          c &&
                              (0, n.jsx)(eA.mG, {
                                  emojiId: t,
                                  expressionSourceGuild: i,
                                  hasJoinedEmojiSourceGuild: l,
                                  onClose: a,
                                  popoutData: o,
                                  isDisplayingButtonInTopSection: !1,
                              }),
                      ],
                  })
            : (0, n.jsx)(m.E, { variant: "text-sm/normal", "aria-label": o.type, children: o.emojiDescription });
    },
    eB = (e) => {
        let t,
            { emojiId: i, refreshPositionKey: a, onClose: r, nonce: s } = e,
            { joinedEmojiSourceGuild: u } = (0, h.cf)([P.Ay, eo.A], () => {
                let e = P.Ay.getCustomEmojiById(i);
                return { joinedEmojiSourceGuild: e?.type === V.i.GUILD ? eo.A.getGuild(e?.guildId) : void 0 };
            }),
            [d, c] = l.useState(void 0),
            [p, g] = l.useState(void 0),
            [f, v] = l.useState(null),
            [E, I] = l.useState(!1),
            [x, N] = l.useState(!1),
            [R, j] = l.useState(!1),
            b = null != u,
            S = d?.isDiscoverable() ?? !1,
            C = es.A.getGuildId(),
            y = null != C && (C === d?.id || C === u?.id),
            O = eu.default.getCurrentUser(),
            L = (0, eg.O)({
                sourceType: f,
                expressionSourceApplication: p ?? null,
                isPremium: eh.Ay.isPremium(O),
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
                !E ||
                    R ||
                    (async () => {
                        a(), N(!0);
                        let e = null != i ? await (0, G.g_)(i) : null;
                        if (null != e)
                            switch ((v(e.type), e.type)) {
                                case G.rV.APPLICATION:
                                    g(e.application);
                                    break;
                                case G.rV.GUILD:
                                    c(e.guild);
                            }
                        else c(null);
                        N(!1), j(!0), a();
                    })();
            }, [i, E, R, a]),
            b)
        )
            return null;
        let w = E && (void 0 !== d || void 0 !== p);
        return (0, n.jsxs)("div", {
            children: [
                w
                    ? (0, n.jsxs)(n.Fragment, {
                          children: [
                              (0, n.jsx)("div", { className: ew.Hw }),
                              null != L.emojiDescription &&
                                  L.type !== eg.u.UNAVAILABLE &&
                                  (0, n.jsx)(m.E, {
                                      variant: "text-sm/normal",
                                      "aria-label": L.type,
                                      children: L.emojiDescription,
                                  }),
                          ],
                      })
                    : ((t = eE.intl.string(eE.t["Igv+LS"])),
                      (0, n.jsxs)(A.D, {
                          onClick: () => {
                              I(!E);
                          },
                          className: ew.s4,
                          children: [
                              (0, n.jsx)(m.E, {
                                  variant: "text-sm/normal",
                                  color: "none",
                                  "aria-label": t,
                                  children: t,
                              }),
                              (0, n.jsx)(T.a, {
                                  size: "xs",
                                  color: "currentColor",
                                  className: o()(ew.Po, { [ew.Kk]: !E }),
                              }),
                          ],
                      })),
                x
                    ? (0, n.jsx)(ef.Y0, { className: ew.eF })
                    : w &&
                      (0, n.jsx)(eD, {
                          emojiId: i,
                          expressionSourceGuild: d,
                          hasJoinedExpressionSourceGuild: b,
                          onClose: r,
                          popoutData: L,
                          currentGuildId: C,
                          nonce: s,
                      }),
            ],
        });
    };
