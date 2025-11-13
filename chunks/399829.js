n.d(t, { Z: () => Z }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    s = n(392711),
    o = n.n(s),
    c = n(442837),
    d = n(28664),
    u = n(477690),
    g = n(481060),
    m = n(179360),
    p = n(129861),
    f = n(999382),
    h = n(905128),
    b = n(151494),
    x = n(733683),
    j = n(237583),
    _ = n(899667),
    v = n(271383),
    O = n(430824),
    C = n(594174),
    y = n(267642),
    N = n(624138),
    E = n(981631),
    I = n(388032),
    S = n(744834);
function T(e, t, n) {
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
let P = (0, N.Mg)(u.Z.GUILD_SETTINGS_PREMIUM_TIER_STATUS_PROGRESS_WITH_SUBSCRIPTIONS_MARGIN_TOP);
class w extends i.Component {
    componentDidMount() {
        this.measure();
        let { guildId: e } = this.props;
        null != e && (0, m.C0)(e), window.addEventListener("resize", this.measure);
    }
    componentWillUnmount() {
        window.removeEventListener("resize", this.measure);
    }
    componentDidUpdate() {
        null == this.state.tierPositions && (Object.values(this.tierRefs).some((e) => null == e) || this.measure());
    }
    renderProgressBar(e) {
        let { tierPositions: t } = this.state,
            { guildId: n, levelSubscriptionCount: i, currentTier: l } = this.props;
        if (null == t || null == n) return null;
        let a = {
                numRequired: 0,
                y: 0,
                key: x.x,
            },
            s = e.map((e) => {
                var n;
                return {
                    numRequired: E.oCV[e.tier],
                    name: (0, y.nW)(e.tier),
                    y: null != (n = t[e.tier]) ? n : 0,
                    key: e.tier,
                };
            });
        return (0, r.jsx)(x.Z, {
            currentTier: l,
            className: i > 0 ? S.progressWithSubscriptions : S.progress,
            progress: i,
            tiers: [a, ...s],
            initialAnimationDelay: 500,
            onAnimatedTierMaker: this.handleAnimatedTier,
        });
    }
    renderTierNone() {
        return (0, r.jsxs)("div", {
            className: S.tierDefaultUnlocked,
            ref: this.defaultTierRef,
            children: [
                (0, r.jsx)(g.Text, {
                    variant: "text-md/medium",
                    color: "header-primary",
                    children: I.intl.string(I.t["76OoX8"]),
                }),
                (0, r.jsx)(g.Text, {
                    variant: "text-sm/normal",
                    color: "header-secondary",
                    className: S.tierDefaultUnlockedDescription,
                    children: I.intl.string(I.t.DaYNQQ),
                }),
            ],
        });
    }
    renderSubscribers() {
        let { subscribers: e, uniqueSubscriberCount: t, guildId: n } = this.props;
        return (0, r.jsxs)("div", {
            ref: this.defaultTierRef,
            className: S.subscribers,
            children: [
                (0, r.jsx)(j.Z, {
                    guildId: null != n ? n : void 0,
                    users: e,
                    renderUser: this.renderSubscriber,
                    renderMoreUsers: this.renderMoreSubscribers,
                    max: 5,
                }),
                (0, r.jsx)("div", {
                    className: S.subscriberCount,
                    children: I.intl.format(I.t["0r7snZ"], { count: t }),
                }),
            ],
        });
    }
    render() {
        let { guildId: e, renderTier: t, levelSubscriptionCount: n, uniqueSubscriberCount: i, tiers: l } = this.props;
        return null == n
            ? (0, r.jsx)(g.$jN, { type: g.$jN.Type.SPINNING_CIRCLE })
            : null == e
              ? null
              : (0, r.jsx)("div", {
                    children: (0, r.jsxs)("div", {
                        className: S.content,
                        children: [
                            this.renderProgressBar(l),
                            (0, r.jsxs)("div", {
                                className: S.tiers,
                                children: [
                                    0 === i ? this.renderTierNone() : this.renderSubscribers(),
                                    l.map((r, i, l) =>
                                        t({
                                            tier: r,
                                            tiers: l,
                                            tierIndex: i,
                                            onSetRef: this.setTierRef,
                                            isAnimatedTo: E.oCV[this.state.animatedTier] >= E.oCV[r.tier],
                                            subscriptionCount: n,
                                            guildId: e,
                                        }),
                                    ),
                                ],
                            }),
                        ],
                    }),
                });
    }
    constructor(...e) {
        super(...e),
            T(this, "tierRefs", {}),
            T(this, "defaultTierRef", i.createRef()),
            T(this, "subscribersPopoutTargetRef", i.createRef()),
            T(this, "state", {
                tierPositions: null,
                animatedTier: E.Eu4.NONE,
            }),
            T(this, "measure", () => {
                let { uniqueSubscriberCount: e } = this.props,
                    t = this.defaultTierRef.current;
                if (null == t) return;
                let { top: n } = t.getBoundingClientRect(),
                    r = {};
                for (let [t, i] of Object.entries(this.tierRefs)) {
                    if (null == i) return;
                    let { top: l } = i.getBoundingClientRect(),
                        a = e > 0 ? P : 0;
                    r[t] = l - n + 32 - a;
                }
                this.setState({ tierPositions: r });
            }),
            T(this, "setTierRef", (e, t) => {
                this.tierRefs[t.tier] = e;
            }),
            T(this, "handleAnimatedTier", (e) => {
                this.setState({ animatedTier: e.key });
            }),
            T(this, "renderSubscriber", (e, t, n) => {
                var i;
                return null == e
                    ? null
                    : (0, r.jsx)(
                          d.u,
                          {
                              __unsupportedReactNodeAsText: (0, r.jsx)(p.Z, {
                                  user: e.user,
                                  nick: e.nick,
                              }),
                              "aria-label": null != (i = e.nick) ? i : e.user.tag,
                              children: (0, r.jsx)(g.qEK, {
                                  tabIndex: -1,
                                  "aria-label": e.user.username,
                                  src: null != e ? e.user.getAvatarURL(this.props.guildId, 32) : null,
                                  className: a()(S.avatar, t, null != t ? S.subscriberMask : null),
                                  size: g.EFr.SIZE_32,
                              }),
                          },
                          n,
                      );
            }),
            T(this, "renderSubscribersPopout", () =>
                (0, r.jsx)(g.Ttm, {
                    className: S.subscribersPopout,
                    children: this.props.subscribers.map((e) =>
                        (0, r.jsxs)(
                            "div",
                            {
                                className: S.subscribersPopoutUser,
                                children: [
                                    (0, r.jsx)(g.qEK, {
                                        src: e.user.getAvatarURL(this.props.guildId, 32),
                                        "aria-label": e.user.username,
                                        size: g.EFr.SIZE_32,
                                        className: S.avatar,
                                    }),
                                    (0, r.jsx)("div", {
                                        className: S.subscribersPopoutUsername,
                                        children: (0, r.jsx)(p.Z, {
                                            user: e.user,
                                            nick: e.nick,
                                        }),
                                    }),
                                ],
                            },
                            e.user.id,
                        ),
                    ),
                }),
            ),
            T(this, "renderMoreSubscribers", (e, t, n) =>
                (0, r.jsx)(
                    g.yRy,
                    {
                        targetElementRef: this.subscribersPopoutTargetRef,
                        renderPopout: this.renderSubscribersPopout,
                        position: "bottom",
                        autoInvert: !1,
                        children: (t) =>
                            (0, r.jsx)(
                                "div",
                                (function (e, t) {
                                    return (
                                        (t = null != t ? t : {}),
                                        Object.getOwnPropertyDescriptors
                                            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
                                            : (function (e, t) {
                                                  var n = Object.keys(e);
                                                  if (Object.getOwnPropertySymbols) {
                                                      var r = Object.getOwnPropertySymbols(e);
                                                      n.push.apply(n, r);
                                                  }
                                                  return n;
                                              })(Object(t)).forEach(function (n) {
                                                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
                                              }),
                                        e
                                    );
                                })(
                                    (function (e) {
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
                                                    T(e, t, n[t]);
                                                });
                                        }
                                        return e;
                                    })({ className: S.moreSubscribers }, t),
                                    {
                                        ref: this.subscribersPopoutTargetRef,
                                        children: e,
                                    },
                                ),
                            ),
                    },
                    n,
                ),
            );
    }
}
let Z = c.ZP.connectStores([O.Z, h.Z, f.Z, _.Z, C.default, v.ZP], () => {
    var e, t;
    let n = f.Z.getGuildId(),
        r = null != (t = null == (e = O.Z.getGuild(n)) ? void 0 : e.premiumTier) ? t : E.Eu4.NONE,
        i = (0, b.I)(n),
        l = null != n ? _.Z.getAppliedGuildBoostsForGuild(n) : null,
        a = o()(null != l ? l : []).uniqBy((e) => e.userId),
        s = a
            .map((e) => ({
                user: C.default.getUser(e.userId),
                nick: v.ZP.getNick(n, e.userId),
            }))
            .filter((e) => null != e.user)
            .value();
    return {
        guildId: n,
        currentTier: r,
        levelSubscriptionCount: i,
        subscribers: s,
        uniqueSubscriberCount: a.size(),
    };
})(w);
