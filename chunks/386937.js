n.d(t, { Z: () => Z }), n(388685);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    s = n.n(l),
    a = n(392711),
    o = n.n(a),
    c = n(442837),
    d = n(477690),
    u = n(481060),
    m = n(179360),
    g = n(129861),
    p = n(999382),
    h = n(905128),
    f = n(151494),
    x = n(733683),
    b = n(237583),
    j = n(899667),
    _ = n(271383),
    v = n(430824),
    O = n(594174),
    C = n(267642),
    y = n(624138),
    N = n(981631),
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
let w = (0, y.Mg)(d.Z.GUILD_SETTINGS_PREMIUM_TIER_STATUS_PROGRESS_WITH_SUBSCRIPTIONS_MARGIN_TOP);
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
            { guildId: n, levelSubscriptionCount: i, currentTier: l } = this.props;
        if (null == t || null == n) return null;
        let s = {
                numRequired: 0,
                y: 0,
                key: x.x
            },
            a = e.map((e) => {
                var n;
                return {
                    numRequired: N.oCV[e.tier],
                    name: (0, C.nW)(e.tier),
                    y: null != (n = t[e.tier]) ? n : 0,
                    key: e.tier
                };
            });
        return (0, r.jsx)(x.Z, {
            currentTier: l,
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
                    children: I.intl.string(I.t['76OoX1'])
                }),
                (0, r.jsx)(u.R94, {
                    type: u.R94.Types.DESCRIPTION,
                    className: E.tierDefaultUnlockedDescription,
                    children: I.intl.string(I.t.DaYNQU)
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
                (0, r.jsx)(b.Z, {
                    guildId: null != n ? n : void 0,
                    users: e,
                    renderUser: this.renderSubscriber,
                    renderMoreUsers: this.renderMoreSubscribers,
                    max: 5
                }),
                (0, r.jsx)('div', {
                    className: E.subscriberCount,
                    children: I.intl.format(I.t['0r7snZ'], { count: t })
                })
            ]
        });
    }
    render() {
        let { guildId: e, renderTier: t, levelSubscriptionCount: n, uniqueSubscriberCount: i, tiers: l } = this.props;
        return null == n
            ? (0, r.jsx)(u.$jN, { type: u.$jN.Type.SPINNING_CIRCLE })
            : null == e
              ? null
              : (0, r.jsx)('div', {
                    children: (0, r.jsxs)('div', {
                        className: E.content,
                        children: [
                            this.renderProgressBar(l),
                            (0, r.jsxs)('div', {
                                className: E.tiers,
                                children: [
                                    0 === i ? this.renderTierNone() : this.renderSubscribers(),
                                    l.map((r, i, l) =>
                                        t({
                                            tier: r,
                                            tiers: l,
                                            tierIndex: i,
                                            onSetRef: this.setTierRef,
                                            isAnimatedTo: N.oCV[this.state.animatedTier] >= N.oCV[r.tier],
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
                animatedTier: N.Eu4.NONE
            }),
            S(this, 'measure', () => {
                let { uniqueSubscriberCount: e } = this.props,
                    t = this.defaultTierRef.current;
                if (null == t) return;
                let { top: n } = t.getBoundingClientRect(),
                    r = {};
                for (let [t, i] of Object.entries(this.tierRefs)) {
                    if (null == i) return;
                    let { top: l } = i.getBoundingClientRect(),
                        s = e > 0 ? w : 0;
                    r[t] = l - n + 32 - s;
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
                                          className: s()(E.avatar, t, null != t ? E.subscriberMask : null),
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
let Z = c.ZP.connectStores([v.Z, h.Z, p.Z, j.Z, O.default, _.ZP], () => {
    var e, t;
    let n = p.Z.getGuildId(),
        r = null != (t = null == (e = v.Z.getGuild(n)) ? void 0 : e.premiumTier) ? t : N.Eu4.NONE,
        i = (0, f.I)(n),
        l = null != n ? j.Z.getAppliedGuildBoostsForGuild(n) : null,
        s = o()(null != l ? l : []).uniqBy((e) => e.userId),
        a = s
            .map((e) => ({
                user: O.default.getUser(e.userId),
                nick: _.ZP.getNick(n, e.userId)
            }))
            .filter((e) => null != e.user)
            .value();
    return {
        guildId: n,
        currentTier: r,
        levelSubscriptionCount: i,
        subscribers: a,
        uniqueSubscriberCount: s.size()
    };
})(R);
