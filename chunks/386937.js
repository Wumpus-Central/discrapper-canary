n.d(t, { Z: () => Z }), n(47120);
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
    g = n(129861),
    p = n(999382),
    h = n(905128),
    f = n(151494),
    b = n(733683),
    x = n(237583),
    j = n(899667),
    N = n(271383),
    _ = n(430824),
    v = n(594174),
    C = n(267642),
    O = n(624138),
    y = n(981631),
    I = n(388032),
    E = n(824302);
function S(e, t, n) {
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
function T(e) {
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
                S(e, t, n[t]);
            });
    }
    return e;
}
function P(e, t) {
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
let w = (0, O.Mg)(d.Z.GUILD_SETTINGS_PREMIUM_TIER_STATUS_PROGRESS_WITH_SUBSCRIPTIONS_MARGIN_TOP);
class R extends i.Component {
    componentDidMount() {
        this.measure();
        let { guildId: e } = this.props;
        null != e && (0, m.C0)(e), window.addEventListener('resize', this.measure);
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.measure);
    }
    componentDidUpdate() {
        null == this.state.tierPositions && (Object.values(this.tierRefs).some((e) => null == e) || this.measure());
    }
    renderProgressBar(e) {
        let { tierPositions: t } = this.state,
            { guildId: n, levelSubscriptionCount: i } = this.props;
        if (null == t || null == n) return null;
        let s = {
                numRequired: 0,
                y: 0,
                key: b.x
            },
            a = e.map((e) => {
                var n;
                return {
                    numRequired: y.oCV[e.tier],
                    name: (0, C.nW)(e.tier),
                    y: null != (n = t[e.tier]) ? n : 0,
                    key: e.tier
                };
            });
        return (0, r.jsx)(b.Z, {
            className: i > 0 ? E.progressWithSubscriptions : E.progress,
            progress: i,
            tiers: [s, ...a],
            initialAnimationDelay: 500,
            onAnimatedTierMaker: this.handleAnimatedTier
        });
    }
    renderTierNone() {
        return (0, r.jsxs)('div', {
            className: E.tierDefaultUnlocked,
            ref: this.defaultTierRef,
            children: [
                (0, r.jsx)(u.R94, {
                    type: u.R94.Types.LABEL_BOLD,
                    children: I.NW.string(I.t['76OoX1'])
                }),
                (0, r.jsx)(u.R94, {
                    type: u.R94.Types.DESCRIPTION,
                    className: E.tierDefaultUnlockedDescription,
                    children: I.NW.string(I.t.DaYNQU)
                })
            ]
        });
    }
    renderSubscribers() {
        let { subscribers: e, uniqueSubscriberCount: t, guildId: n } = this.props;
        return (0, r.jsxs)('div', {
            ref: this.defaultTierRef,
            className: E.subscribers,
            children: [
                (0, r.jsx)(x.Z, {
                    guildId: null != n ? n : void 0,
                    users: e,
                    renderUser: this.renderSubscriber,
                    renderMoreUsers: this.renderMoreSubscribers,
                    max: 5
                }),
                (0, r.jsx)('div', {
                    className: E.subscriberCount,
                    children: I.NW.format(I.t['0r7snZ'], { count: t })
                })
            ]
        });
    }
    render() {
        let { guildId: e, renderTier: t, levelSubscriptionCount: n, uniqueSubscriberCount: i, tiers: s } = this.props;
        return null == n
            ? (0, r.jsx)(u.$jN, { type: u.$jN.Type.SPINNING_CIRCLE })
            : null == e
              ? null
              : (0, r.jsx)('div', {
                    children: (0, r.jsxs)('div', {
                        className: E.content,
                        children: [
                            this.renderProgressBar(s),
                            (0, r.jsxs)('div', {
                                className: E.tiers,
                                children: [
                                    0 === i ? this.renderTierNone() : this.renderSubscribers(),
                                    s.map((r, i, s) =>
                                        t({
                                            tier: r,
                                            tiers: s,
                                            tierIndex: i,
                                            onSetRef: this.setTierRef,
                                            isAnimatedTo: y.oCV[this.state.animatedTier] >= y.oCV[r.tier],
                                            subscriptionCount: n,
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
            S(this, 'tierRefs', {}),
            S(this, 'defaultTierRef', i.createRef()),
            S(this, 'state', {
                tierPositions: null,
                animatedTier: y.Eu4.NONE
            }),
            S(this, 'measure', () => {
                let { uniqueSubscriberCount: e } = this.props,
                    t = this.defaultTierRef.current;
                if (null == t) return;
                let { top: n } = t.getBoundingClientRect(),
                    r = {};
                for (let [t, i] of Object.entries(this.tierRefs)) {
                    if (null == i) return;
                    let { top: s } = i.getBoundingClientRect(),
                        a = e > 0 ? w : 0;
                    r[t] = s - n + 32 - a;
                }
                this.setState({ tierPositions: r });
            }),
            S(this, 'setTierRef', (e, t) => {
                this.tierRefs[t.tier] = e;
            }),
            S(this, 'handleAnimatedTier', (e) => {
                this.setState({ animatedTier: e.key });
            }),
            S(this, 'renderSubscriber', (e, t, n) => {
                var i;
                return null == e
                    ? null
                    : (0, r.jsx)(
                          u.ua7,
                          {
                              text: (0, r.jsx)(g.Z, {
                                  user: e.user,
                                  nick: e.nick
                              }),
                              'aria-label': null != (i = e.nick) ? i : e.user.tag,
                              children: (n) =>
                                  (0, r.jsx)(
                                      u.qEK,
                                      P(T({}, n), {
                                          tabIndex: -1,
                                          src: null != e ? e.user.getAvatarURL(this.props.guildId, 32) : null,
                                          className: a()(E.avatar, t, null != t ? E.subscriberMask : null),
                                          size: u.EFr.SIZE_32
                                      })
                                  )
                          },
                          n
                      );
            }),
            S(this, 'renderSubscribersPopout', () =>
                (0, r.jsx)(u.Ttm, {
                    className: E.subscribersPopout,
                    children: this.props.subscribers.map((e) =>
                        (0, r.jsxs)(
                            'div',
                            {
                                className: E.subscribersPopoutUser,
                                children: [
                                    (0, r.jsx)(u.qEK, {
                                        src: e.user.getAvatarURL(this.props.guildId, 32),
                                        'aria-label': e.user.username,
                                        size: u.EFr.SIZE_32,
                                        className: E.avatar
                                    }),
                                    (0, r.jsx)('div', {
                                        className: E.subscribersPopoutUsername,
                                        children: (0, r.jsx)(g.Z, {
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
            S(this, 'renderMoreSubscribers', (e, t, n) =>
                (0, r.jsx)(
                    u.yRy,
                    {
                        renderPopout: this.renderSubscribersPopout,
                        position: 'bottom',
                        autoInvert: !1,
                        children: (t) => (0, r.jsx)('div', P(T({ className: E.moreSubscribers }, t), { children: e }))
                    },
                    n
                )
            );
    }
}
let Z = c.ZP.connectStores([_.Z, h.Z, p.Z, j.Z, v.default, N.ZP], () => {
    let e = p.Z.getGuildId(),
        t = (0, f.I)(e),
        n = null != e ? j.Z.getAppliedGuildBoostsForGuild(e) : null,
        r = o()(null != n ? n : []).uniqBy((e) => e.userId),
        i = r
            .map((t) => ({
                user: v.default.getUser(t.userId),
                nick: N.ZP.getNick(e, t.userId)
            }))
            .filter((e) => null != e.user)
            .value();
    return {
        guildId: e,
        levelSubscriptionCount: t,
        subscribers: i,
        uniqueSubscriberCount: r.size()
    };
})(R);
