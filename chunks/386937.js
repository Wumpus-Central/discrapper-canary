n(47120);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    a = n.n(l),
    s = n(392711),
    o = n.n(s),
    c = n(442837),
    d = n(477690),
    u = n(481060),
    m = n(179360),
    h = n(129861),
    g = n(999382),
    x = n(733683),
    p = n(237583),
    f = n(899667),
    C = n(271383),
    v = n(594174),
    _ = n(267642),
    N = n(624138),
    I = n(981631),
    T = n(388032),
    j = n(534560);
function b(e, t, n) {
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
let S = (0, N.Mg)(d.Z.GUILD_SETTINGS_PREMIUM_TIER_STATUS_PROGRESS_WITH_SUBSCRIPTIONS_MARGIN_TOP);
class E extends r.Component {
    componentDidMount() {
        this.measure();
        let { guildId: e } = this.props;
        null != e && (0, m.C0)(e), window.addEventListener('resize', this.measure);
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.measure);
    }
    componentDidUpdate() {
        if (!(null != this.state.tierPositions || Object.values(this.tierRefs).some((e) => null == e))) this.measure();
    }
    getSubscriptionCount() {
        let { subscriptions: e } = this.props;
        return null != e ? e.length : 0;
    }
    renderProgressBar(e) {
        let { tierPositions: t } = this.state,
            { guildId: n } = this.props,
            r = this.getSubscriptionCount();
        if (null == t || null == n) return null;
        let l = {
                numRequired: 0,
                y: 0,
                key: x.x
            },
            a = (0, _.vn)(n),
            s = e.map((e) => {
                var n;
                return {
                    numRequired: a[e.tier],
                    name: (0, _.nW)(e.tier),
                    y: null !== (n = t[e.tier]) && void 0 !== n ? n : 0,
                    key: e.tier
                };
            });
        return (0, i.jsx)(x.Z, {
            className: r > 0 ? j.progressWithSubscriptions : j.progress,
            progress: r,
            tiers: [l, ...s],
            initialAnimationDelay: 500,
            onAnimatedTierMaker: this.handleAnimatedTier
        });
    }
    renderTierNone() {
        return (0, i.jsxs)('div', {
            className: j.tierDefaultUnlocked,
            ref: this.defaultTierRef,
            children: [
                (0, i.jsx)(u.FormText, {
                    type: u.FormText.Types.LABEL_BOLD,
                    children: T.intl.string(T.t['76OoX1'])
                }),
                (0, i.jsx)(u.FormText, {
                    type: u.FormText.Types.DESCRIPTION,
                    className: j.tierDefaultUnlockedDescription,
                    children: T.intl.string(T.t.DaYNQU)
                })
            ]
        });
    }
    renderSubscribers() {
        let { subscribers: e, subscriberCount: t, guildId: n } = this.props;
        return (0, i.jsxs)('div', {
            ref: this.defaultTierRef,
            className: j.subscribers,
            children: [
                (0, i.jsx)(p.Z, {
                    guildId: null != n ? n : void 0,
                    users: e,
                    renderUser: this.renderSubscriber,
                    renderMoreUsers: this.renderMoreSubscribers,
                    max: 5
                }),
                (0, i.jsx)('div', {
                    className: j.subscriberCount,
                    children: T.intl.format(T.t['0r7snZ'], { count: t })
                })
            ]
        });
    }
    render() {
        let { guildId: e, renderTier: t, subscriptions: n, subscriberCount: r, tiers: l } = this.props;
        if (null == n) return (0, i.jsx)(u.Spinner, { type: u.Spinner.Type.SPINNING_CIRCLE });
        if (null == e) return null;
        let a = (0, _.vn)(e);
        return (0, i.jsx)('div', {
            children: (0, i.jsxs)('div', {
                className: j.content,
                children: [
                    this.renderProgressBar(l),
                    (0, i.jsxs)('div', {
                        className: j.tiers,
                        children: [
                            0 === r ? this.renderTierNone() : this.renderSubscribers(),
                            l.map((n, i, r) =>
                                t({
                                    tier: n,
                                    tiers: r,
                                    tierIndex: i,
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
            b(this, 'tierRefs', {}),
            b(this, 'defaultTierRef', r.createRef()),
            b(this, 'state', {
                tierPositions: null,
                animatedTier: I.Eu4.NONE
            }),
            b(this, 'measure', () => {
                let { subscriberCount: e } = this.props,
                    t = this.defaultTierRef.current;
                if (null == t) return;
                let { top: n } = t.getBoundingClientRect(),
                    i = {};
                for (let [t, r] of Object.entries(this.tierRefs)) {
                    if (null == r) return;
                    let { top: l } = r.getBoundingClientRect(),
                        a = e > 0 ? S : 0;
                    i[t] = l - n + 32 - a;
                }
                this.setState({ tierPositions: i });
            }),
            b(this, 'setTierRef', (e, t) => {
                this.tierRefs[t.tier] = e;
            }),
            b(this, 'handleAnimatedTier', (e) => {
                this.setState({ animatedTier: e.key });
            }),
            b(this, 'renderSubscriber', (e, t, n) => {
                var r;
                return null == e
                    ? null
                    : (0, i.jsx)(
                          u.Tooltip,
                          {
                              text: (0, i.jsx)(h.Z, {
                                  user: e.user,
                                  nick: e.nick
                              }),
                              'aria-label': null !== (r = e.nick) && void 0 !== r ? r : e.user.tag,
                              children: (n) =>
                                  (0, i.jsx)(u.Avatar, {
                                      ...n,
                                      tabIndex: -1,
                                      src: null != e ? e.user.getAvatarURL(this.props.guildId, 32) : null,
                                      className: a()(j.avatar, t, null != t ? j.subscriberMask : null),
                                      size: u.AvatarSizes.SIZE_32
                                  })
                          },
                          n
                      );
            }),
            b(this, 'renderSubscribersPopout', () =>
                (0, i.jsx)(u.Scroller, {
                    className: j.subscribersPopout,
                    children: this.props.subscribers.map((e) =>
                        (0, i.jsxs)(
                            'div',
                            {
                                className: j.subscribersPopoutUser,
                                children: [
                                    (0, i.jsx)(u.Avatar, {
                                        src: e.user.getAvatarURL(this.props.guildId, 32),
                                        'aria-label': e.user.username,
                                        size: u.AvatarSizes.SIZE_32,
                                        className: j.avatar
                                    }),
                                    (0, i.jsx)('div', {
                                        className: j.subscribersPopoutUsername,
                                        children: (0, i.jsx)(h.Z, {
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
            b(this, 'renderMoreSubscribers', (e, t, n) =>
                (0, i.jsx)(
                    u.Popout,
                    {
                        renderPopout: this.renderSubscribersPopout,
                        position: 'bottom',
                        autoInvert: !1,
                        children: (t) =>
                            (0, i.jsx)('div', {
                                className: j.moreSubscribers,
                                ...t,
                                children: e
                            })
                    },
                    n
                )
            );
    }
}
let R = c.ZP.connectStores([g.Z, v.default, f.Z, C.ZP], () => {
    let e = g.Z.getGuildId(),
        t = null != e ? f.Z.getAppliedGuildBoostsForGuild(e) : null,
        n = o()(null != t ? t : []).uniqBy((e) => e.userId),
        i = n
            .map((t) => ({
                user: v.default.getUser(t.userId),
                nick: C.ZP.getNick(e, t.userId)
            }))
            .filter((e) => null != e.user)
            .value();
    return {
        guildId: e,
        subscriptions: t,
        subscribers: i,
        subscriberCount: n.size()
    };
})(E);
t.Z = R;
