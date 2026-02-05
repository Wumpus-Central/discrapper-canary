"use strict";
n.d(t, { A: () => O });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(735438),
    o = n.n(a),
    d = n(311907),
    c = n(990078),
    u = n(319060),
    m = n(397927),
    g = n(923408),
    x = n(297413),
    h = n(555337),
    _ = n(645619),
    A = n(434564),
    p = n(199139),
    f = n(636585),
    j = n(859241),
    N = n(696451),
    E = n(71393),
    b = n(287809),
    T = n(473145),
    C = n(240248),
    I = n(652215),
    v = n(985018),
    S = n(306769);
let y = (0, C.xI)(u.A.GUILD_SETTINGS_PREMIUM_TIER_STATUS_PROGRESS_WITH_SUBSCRIPTIONS_MARGIN_TOP);
class R extends s.Component {
    tierRefs = {};
    defaultTierRef = s.createRef();
    subscribersPopoutTargetRef = s.createRef();
    state = { tierPositions: null, animatedTier: I.TVA.NONE };
    componentDidMount() {
        this.measure();
        let { guildId: e } = this.props;
        null != e && (0, g.VU)(e), window.addEventListener("resize", this.measure);
    }
    componentWillUnmount() {
        window.removeEventListener("resize", this.measure);
    }
    componentDidUpdate() {
        null != this.state.tierPositions || Object.values(this.tierRefs).some((e) => null == e) || this.measure();
    }
    measure = () => {
        let { uniqueSubscriberCount: e } = this.props,
            t = this.defaultTierRef.current;
        if (null == t) return;
        let { top: n } = t.getBoundingClientRect(),
            i = {};
        for (let [t, s] of Object.entries(this.tierRefs)) {
            if (null == s) return;
            let { top: l } = s.getBoundingClientRect(),
                r = e > 0 ? y : 0;
            i[t] = l - n + 32 - r;
        }
        this.setState({ tierPositions: i });
    };
    setTierRef = (e, t) => {
        this.tierRefs[t.tier] = e;
    };
    handleAnimatedTier = (e) => {
        this.setState({ animatedTier: e.key });
    };
    renderProgressBar(e) {
        let { tierPositions: t } = this.state,
            { guildId: n, levelSubscriptionCount: s, currentTier: l } = this.props;
        if (null == t || null == n) return null;
        let r = { numRequired: 0, y: 0, key: p.A },
            a = e.map((e) => ({ numRequired: I.M2T[e.tier], name: (0, T.gb)(e.tier), y: t[e.tier] ?? 0, key: e.tier }));
        return (0, i.jsx)(p.h, {
            currentTier: l,
            className: s > 0 ? S.mm : S.qB,
            progress: s,
            tiers: [r, ...a],
            initialAnimationDelay: 500,
            onAnimatedTierMaker: this.handleAnimatedTier,
        });
    }
    renderTierNone() {
        return (0, i.jsxs)("div", {
            className: S.lV,
            ref: this.defaultTierRef,
            children: [
                (0, i.jsx)(m.Text, {
                    variant: "text-md/medium",
                    color: "text-strong",
                    children: v.intl.string(v.t["76OoX8"]),
                }),
                (0, i.jsx)(m.Text, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    className: S.Dw,
                    children: v.intl.string(v.t.DaYNQQ),
                }),
            ],
        });
    }
    renderSubscriber = (e, t, n) =>
        null == e
            ? null
            : (0, i.jsx)(
                  c.m,
                  {
                      __unsupportedReactNodeAsText: (0, i.jsx)(x.A, { user: e.user, nick: e.nick }),
                      "aria-label": e.nick ?? e.user.tag,
                      children: (0, i.jsx)(m.euF, {
                          tabIndex: -1,
                          "aria-label": e.user.username,
                          src: null != e ? e.user.getAvatarURL(this.props.guildId, 32) : null,
                          className: r()(S.my, t, null != t ? S.rE : null),
                          size: m._3J.SIZE_32,
                      }),
                  },
                  n,
              );
    renderSubscribersPopout = () =>
        (0, i.jsx)(m.HOs, {
            className: S.xM,
            children: this.props.subscribers.map((e) =>
                (0, i.jsxs)(
                    "div",
                    {
                        className: S.c4,
                        children: [
                            (0, i.jsx)(m.euF, {
                                src: e.user.getAvatarURL(this.props.guildId, 32),
                                "aria-label": e.user.username,
                                size: m._3J.SIZE_32,
                                className: S.my,
                            }),
                            (0, i.jsx)("div", {
                                className: S.Dt,
                                children: (0, i.jsx)(x.A, { user: e.user, nick: e.nick }),
                            }),
                        ],
                    },
                    e.user.id,
                ),
            ),
        });
    renderMoreSubscribers = (e, t, n) =>
        (0, i.jsx)(
            m.YNO,
            {
                targetElementRef: this.subscribersPopoutTargetRef,
                renderPopout: this.renderSubscribersPopout,
                position: "bottom",
                autoInvert: !1,
                children: (t) =>
                    (0, i.jsx)("div", { className: S.h1, ...t, ref: this.subscribersPopoutTargetRef, children: e }),
            },
            n,
        );
    renderSubscribers() {
        let { subscribers: e, uniqueSubscriberCount: t, guildId: n } = this.props;
        return (0, i.jsxs)("div", {
            ref: this.defaultTierRef,
            className: S._s,
            children: [
                (0, i.jsx)(f.A, {
                    guildId: n ?? void 0,
                    users: e,
                    renderUser: this.renderSubscriber,
                    renderMoreUsers: this.renderMoreSubscribers,
                    max: 5,
                }),
                (0, i.jsx)("div", { className: S.iL, children: v.intl.format(v.t["0r7snZ"], { count: t }) }),
            ],
        });
    }
    render() {
        let { guildId: e, renderTier: t, levelSubscriptionCount: n, uniqueSubscriberCount: s, tiers: l } = this.props;
        return null == n
            ? (0, i.jsx)(m.y$y, { type: m.y$y.Type.SPINNING_CIRCLE })
            : null == e
              ? null
              : (0, i.jsx)("div", {
                    children: (0, i.jsxs)("div", {
                        className: S.Qs,
                        children: [
                            this.renderProgressBar(l),
                            (0, i.jsxs)("div", {
                                className: S.cK,
                                children: [
                                    0 === s ? this.renderTierNone() : this.renderSubscribers(),
                                    l.map((i, s, l) =>
                                        t({
                                            tier: i,
                                            tiers: l,
                                            tierIndex: s,
                                            onSetRef: this.setTierRef,
                                            isAnimatedTo: I.M2T[this.state.animatedTier] >= I.M2T[i.tier],
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
}
let O = d.Ay.connectStores([E.A, _.A, h.A, j.A, b.default, N.Ay], () => {
    let e = h.A.getGuildId(),
        t = E.A.getGuild(e)?.premiumTier ?? I.TVA.NONE,
        n = (0, A.G)(e),
        i = null != e ? j.A.getAppliedGuildBoostsForGuild(e) : null,
        s = o()(null != i ? i : []).uniqBy((e) => e.userId),
        l = s
            .map((t) => ({ user: b.default.getUser(t.userId), nick: N.Ay.getNick(e, t.userId) }))
            .filter((e) => null != e.user)
            .value();
    return { guildId: e, currentTier: t, levelSubscriptionCount: n, subscribers: l, uniqueSubscriberCount: s.size() };
})(R);
