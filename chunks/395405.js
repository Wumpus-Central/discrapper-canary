n.d(t, { A: () => k });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(735438),
    o = n.n(a),
    d = n(311907),
    c = n(990078),
    u = n(319060),
    m = n(834730),
    g = n(97808),
    h = n(778712),
    x = n(573613),
    _ = n(265872),
    p = n(289873),
    A = n(923408),
    E = n(297413),
    f = n(555337),
    j = n(645619),
    N = n(434564),
    I = n(199139),
    C = n(636585),
    b = n(859241),
    v = n(696451),
    S = n(71393),
    T = n(287809),
    y = n(473145),
    R = n(240248),
    L = n(652215),
    D = n(985018),
    O = n(266152);
let G = (0, R.xI)(u.A.GUILD_SETTINGS_PREMIUM_TIER_STATUS_PROGRESS_WITH_SUBSCRIPTIONS_MARGIN_TOP);
class M extends l.Component {
    tierRefs = {};
    defaultTierRef = l.createRef();
    subscribersPopoutTargetRef = l.createRef();
    state = { tierPositions: null, animatedTier: L.TVA.NONE };
    componentDidMount() {
        this.measure();
        let { guildId: e } = this.props;
        null != e && (0, A.VU)(e), window.addEventListener("resize", this.measure);
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
        for (let [t, l] of Object.entries(this.tierRefs)) {
            if (null == l) return;
            let { top: s } = l.getBoundingClientRect(),
                r = e > 0 ? G : 0;
            i[t] = s - n + 32 - r;
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
            { guildId: n, levelSubscriptionCount: l, currentTier: s } = this.props;
        if (null == t || null == n) return null;
        let r = { numRequired: 0, y: 0, key: I.A },
            a = e.map((e) => ({ numRequired: L.M2T[e.tier], name: (0, y.gb)(e.tier), y: t[e.tier] ?? 0, key: e.tier }));
        return (0, i.jsx)(I.h, {
            currentTier: s,
            className: l > 0 ? O.mm : O.qB,
            progress: l,
            tiers: [r, ...a],
            initialAnimationDelay: 500,
            onAnimatedTierMaker: this.handleAnimatedTier,
        });
    }
    renderTierNone() {
        return (0, i.jsxs)("div", {
            className: O.lV,
            ref: this.defaultTierRef,
            children: [
                (0, i.jsx)(m.E, {
                    variant: "text-md/medium",
                    color: "text-strong",
                    children: D.intl.string(D.t["76OoX8"]),
                }),
                (0, i.jsx)(m.E, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    className: O.Dw,
                    children: D.intl.string(D.t.DaYNQQ),
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
                      __unsupportedReactNodeAsText: (0, i.jsx)(E.A, { user: e.user, nick: e.nick }),
                      "aria-label": e.nick ?? e.user.tag,
                      children: (0, i.jsx)(g.eu, {
                          tabIndex: -1,
                          "aria-label": e.user.username,
                          src: null != e ? e.user.getAvatarURL(this.props.guildId, 32) : null,
                          className: r()(O.my, t, null != t ? O.rE : null),
                          size: h._3.SIZE_32,
                      }),
                  },
                  n,
              );
    renderSubscribersPopout = () =>
        (0, i.jsx)(x.Ip, {
            className: O.xM,
            children: this.props.subscribers.map((e) =>
                (0, i.jsxs)(
                    "div",
                    {
                        className: O.c4,
                        children: [
                            (0, i.jsx)(g.eu, {
                                src: e.user.getAvatarURL(this.props.guildId, 32),
                                "aria-label": e.user.username,
                                size: h._3.SIZE_32,
                                className: O.my,
                            }),
                            (0, i.jsx)("div", {
                                className: O.Dt,
                                children: (0, i.jsx)(E.A, { user: e.user, nick: e.nick }),
                            }),
                        ],
                    },
                    e.user.id,
                ),
            ),
        });
    renderMoreSubscribers = (e, t, n) =>
        (0, i.jsx)(
            _.Y,
            {
                targetElementRef: this.subscribersPopoutTargetRef,
                renderPopout: this.renderSubscribersPopout,
                position: "bottom",
                autoInvert: !1,
                children: (t) =>
                    (0, i.jsx)("div", { className: O.h1, ...t, ref: this.subscribersPopoutTargetRef, children: e }),
            },
            n,
        );
    renderSubscribers() {
        let { subscribers: e, uniqueSubscriberCount: t, guildId: n } = this.props;
        return (0, i.jsxs)("div", {
            ref: this.defaultTierRef,
            className: O._s,
            children: [
                (0, i.jsx)(C.A, {
                    guildId: n ?? void 0,
                    users: e,
                    renderUser: this.renderSubscriber,
                    renderMoreUsers: this.renderMoreSubscribers,
                    max: 5,
                }),
                (0, i.jsx)("div", { className: O.iL, children: D.intl.format(D.t["0r7snZ"], { count: t }) }),
            ],
        });
    }
    render() {
        let { guildId: e, renderTier: t, levelSubscriptionCount: n, uniqueSubscriberCount: l, tiers: s } = this.props;
        return null == n
            ? (0, i.jsx)(p.y, { type: p.y.Type.SPINNING_CIRCLE })
            : null == e
              ? null
              : (0, i.jsx)("div", {
                    children: (0, i.jsxs)("div", {
                        className: O.Qs,
                        children: [
                            this.renderProgressBar(s),
                            (0, i.jsxs)("div", {
                                className: O.cK,
                                children: [
                                    0 === l ? this.renderTierNone() : this.renderSubscribers(),
                                    s.map((i, l, s) =>
                                        t({
                                            tier: i,
                                            tiers: s,
                                            tierIndex: l,
                                            onSetRef: this.setTierRef,
                                            isAnimatedTo: L.M2T[this.state.animatedTier] >= L.M2T[i.tier],
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
let k = d.Ay.connectStores([S.A, j.A, f.A, b.A, T.default, v.Ay], () => {
    let e = f.A.getGuildId(),
        t = S.A.getGuild(e)?.premiumTier ?? L.TVA.NONE,
        n = (0, N.G)(e),
        i = null != e ? b.A.getAppliedGuildBoostsForGuild(e) : null,
        l = o()(null != i ? i : []).uniqBy((e) => e.userId),
        s = l
            .map((t) => ({ user: T.default.getUser(t.userId), nick: v.Ay.getNick(e, t.userId) }))
            .filter((e) => null != e.user)
            .value();
    return { guildId: e, currentTier: t, levelSubscriptionCount: n, subscribers: s, uniqueSubscriberCount: l.size() };
})(M);
