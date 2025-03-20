n.d(t, { Z: () => p });
var l = n(200651),
    r = n(192379),
    s = n(120356),
    i = n.n(s),
    o = n(565138),
    a = n(297700),
    c = n(471885),
    d = n(424625),
    u = n(267642),
    m = n(860079);
class x extends r.PureComponent {
    render() {
        let { tier: e } = this.props;
        return (0, l.jsxs)('div', {
            className: m.tierPill,
            children: [
                (0, l.jsx)(a.Z, {
                    className: m.tierPillStar,
                    children: (0, l.jsx)(c.Z, {
                        tier: e,
                        color: 'currentColor',
                        className: m.tierPillGem
                    })
                }),
                (0, u.nW)(e)
            ]
        });
    }
}
let h = (e) => {
    let { subscriptionChange: t, guild: n } = e;
    if (0 === t) return null;
    let r = Math.max(n.premiumSubscriberCount + t, 0),
        s = (0, u.rF)(r, n.id),
        i = s - (0, u.rF)(n.premiumSubscriberCount, n.id);
    return 0 === i
        ? null
        : (0, l.jsxs)(l.Fragment, {
              children: [(0, l.jsx)(d.Z, { className: i > 0 ? m.levelUpIcon : m.levelDownIcon }), (0, l.jsx)(x, { tier: s })]
          });
};
class p extends r.PureComponent {
    render() {
        let { guild: e, className: t, subscriptionChange: n } = this.props;
        return (0, l.jsxs)('div', {
            className: i()(m.subscription, t),
            children: [
                (0, l.jsx)(o.Z, {
                    guild: e,
                    size: o.Z.Sizes.LARGE
                }),
                (0, l.jsxs)('div', {
                    className: m.subscriptionInfo,
                    children: [
                        (0, l.jsx)('div', {
                            className: m.guildName,
                            children: e.name
                        }),
                        (0, l.jsxs)('div', {
                            className: m.tierInfo,
                            children: [
                                (0, l.jsx)(x, { tier: e.premiumTier }),
                                (0, l.jsx)(h, {
                                    guild: e,
                                    subscriptionChange: null != n ? n : 0
                                })
                            ]
                        })
                    ]
                })
            ]
        });
    }
}
