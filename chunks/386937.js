n.d(t, { Z: () => P }), n(47120);
var r = n(200651),
    i = n(192379),
    s = n(120356),
    a = n.n(s),
    l = n(392711),
    o = n.n(l),
    c = n(442837),
    d = n(477690),
    u = n(481060),
    m = n(179360),
    p = n(129861),
    g = n(999382),
    h = n(733683),
    f = n(237583),
    b = n(899667),
    x = n(271383),
    j = n(594174),
    N = n(267642),
    v = n(624138),
    _ = n(981631),
    O = n(388032),
    y = n(646433);
function C(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function I(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                C(e, t, n[t]);
            });
    }
    return e;
}
function E(e, t) {
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
}
let S = (0, v.Mg)(d.Z.GUILD_SETTINGS_PREMIUM_TIER_STATUS_PROGRESS_WITH_SUBSCRIPTIONS_MARGIN_TOP);
class T extends i.Component {
    componentDidMount() {
        this.measure();
        let { guildId: e } = this.props;
        null != e && (0, m.C0)(e), window.addEventListener('resize', this.measure);
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.measure);
    }
    componentDidUpdate() {
        !(null != this.state.tierPositions || Object.values(this.tierRefs).some((e) => null == e)) && this.measure();
    }
    getSubscriptionCount() {
        let { subscriptions: e } = this.props;
        return null != e ? e.length : 0;
    }
    renderProgressBar(e) {
        let { tierPositions: t } = this.state,
            { guildId: n } = this.props,
            i = this.getSubscriptionCount();
        if (null == t || null == n) return null;
        let s = {
                numRequired: 0,
                y: 0,
                key: h.x
            },
            a = (0, N.vn)(n),
            l = e.map((e) => {
                var n;
                return {
                    numRequired: a[e.tier],
                    name: (0, N.nW)(e.tier),
                    y: null !== (n = t[e.tier]) && void 0 !== n ? n : 0,
                    key: e.tier
                };
            });
        return (0, r.jsx)(h.Z, {
            className: i > 0 ? y.progressWithSubscriptions : y.progress,
            progress: i,
            tiers: [s, ...l],
            initialAnimationDelay: 500,
            onAnimatedTierMaker: this.handleAnimatedTier
        });
    }
    renderTierNone() {
        return (0, r.jsxs)('div', {
            className: y.tierDefaultUnlocked,
            ref: this.defaultTierRef,
            children: [
                (0, r.jsx)(u.R94, {
                    type: u.R94.Types.LABEL_BOLD,
                    children: O.NW.string(O.t['76OoX1'])
                }),
                (0, r.jsx)(u.R94, {
                    type: u.R94.Types.DESCRIPTION,
                    className: y.tierDefaultUnlockedDescription,
                    children: O.NW.string(O.t.DaYNQU)
                })
            ]
        });
    }
    renderSubscribers() {
        let { subscribers: e, subscriberCount: t, guildId: n } = this.props;
        return (0, r.jsxs)('div', {
            ref: this.defaultTierRef,
            className: y.subscribers,
            children: [
                (0, r.jsx)(f.Z, {
                    guildId: null != n ? n : void 0,
                    users: e,
                    renderUser: this.renderSubscriber,
                    renderMoreUsers: this.renderMoreSubscribers,
                    max: 5
                }),
                (0, r.jsx)('div', {
                    className: y.subscriberCount,
                    children: O.NW.format(O.t['0r7snZ'], { count: t })
                })
            ]
        });
    }
    render() {
        let { guildId: e, renderTier: t, subscriptions: n, subscriberCount: i, tiers: s } = this.props;
        if (null == n) return (0, r.jsx)(u.$jN, { type: u.$jN.Type.SPINNING_CIRCLE });
        if (null == e) return null;
        let a = (0, N.vn)(e);
        return (0, r.jsx)('div', {
            children: (0, r.jsxs)('div', {
                className: y.content,
                children: [
                    this.renderProgressBar(s),
                    (0, r.jsxs)('div', {
                        className: y.tiers,
                        children: [
                            0 === i ? this.renderTierNone() : this.renderSubscribers(),
                            s.map((n, r, i) =>
                                t({
                                    tier: n,
                                    tiers: i,
                                    tierIndex: r,
                                    onSetRef: this.setTierRef,
                                    isAnimatedTo: a[this.state.animatedTier] >= a[n.tier],
                                    subscriptionCount: this.getSubscriptionCount(),
                                    guildId: e
                                })
                            )
                        ]
                    })
                ]
            })
        });
    }
    constructor(...e) {
        super(...e),
            C(this, 'tierRefs', {}),
            C(this, 'defaultTierRef', i.createRef()),
            C(this, 'state', {
                tierPositions: null,
                animatedTier: _.Eu4.NONE
            }),
            C(this, 'measure', () => {
                let { subscriberCount: e } = this.props,
                    t = this.defaultTierRef.current;
                if (null == t) return;
                let { top: n } = t.getBoundingClientRect(),
                    r = {};
                for (let [t, i] of Object.entries(this.tierRefs)) {
                    if (null == i) return;
                    let { top: s } = i.getBoundingClientRect(),
                        a = e > 0 ? S : 0;
                    r[t] = s - n + 32 - a;
                }
                this.setState({ tierPositions: r });
            }),
            C(this, 'setTierRef', (e, t) => {
                this.tierRefs[t.tier] = e;
            }),
            C(this, 'handleAnimatedTier', (e) => {
                this.setState({ animatedTier: e.key });
            }),
            C(this, 'renderSubscriber', (e, t, n) => {
                var i;
                return null == e
                    ? null
                    : (0, r.jsx)(
                          u.ua7,
                          {
                              text: (0, r.jsx)(p.Z, {
                                  user: e.user,
                                  nick: e.nick
                              }),
                              'aria-label': null !== (i = e.nick) && void 0 !== i ? i : e.user.tag,
                              children: (n) =>
                                  (0, r.jsx)(
                                      u.qEK,
                                      E(I({}, n), {
                                          tabIndex: -1,
                                          src: null != e ? e.user.getAvatarURL(this.props.guildId, 32) : null,
                                          className: a()(y.avatar, t, null != t ? y.subscriberMask : null),
                                          size: u.EFr.SIZE_32
                                      })
                                  )
                          },
                          n
                      );
            }),
            C(this, 'renderSubscribersPopout', () =>
                (0, r.jsx)(u.Ttm, {
                    className: y.subscribersPopout,
                    children: this.props.subscribers.map((e) =>
                        (0, r.jsxs)(
                            'div',
                            {
                                className: y.subscribersPopoutUser,
                                children: [
                                    (0, r.jsx)(u.qEK, {
                                        src: e.user.getAvatarURL(this.props.guildId, 32),
                                        'aria-label': e.user.username,
                                        size: u.EFr.SIZE_32,
                                        className: y.avatar
                                    }),
                                    (0, r.jsx)('div', {
                                        className: y.subscribersPopoutUsername,
                                        children: (0, r.jsx)(p.Z, {
                                            user: e.user,
                                            nick: e.nick
                                        })
                                    })
                                ]
                            },
                            e.user.id
                        )
                    )
                })
            ),
            C(this, 'renderMoreSubscribers', (e, t, n) =>
                (0, r.jsx)(
                    u.yRy,
                    {
                        renderPopout: this.renderSubscribersPopout,
                        position: 'bottom',
                        autoInvert: !1,
                        children: (t) => (0, r.jsx)('div', E(I({ className: y.moreSubscribers }, t), { children: e }))
                    },
                    n
                )
            );
    }
}
let P = c.ZP.connectStores([g.Z, j.default, b.Z, x.ZP], () => {
    let e = g.Z.getGuildId(),
        t = null != e ? b.Z.getAppliedGuildBoostsForGuild(e) : null,
        n = o()(null != t ? t : []).uniqBy((e) => e.userId),
        r = n
            .map((t) => ({
                user: j.default.getUser(t.userId),
                nick: x.ZP.getNick(e, t.userId)
            }))
            .filter((e) => null != e.user)
            .value();
    return {
        guildId: e,
        subscriptions: t,
        subscribers: r,
        subscriberCount: n.size()
    };
})(T);
