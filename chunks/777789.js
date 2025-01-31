n.d(l, { Z: () => C });
var t = n(200651),
    s = n(192379),
    i = n(120356),
    r = n.n(i),
    a = n(565138),
    o = n(297700),
    d = n(471885),
    c = n(424625),
    u = n(267642),
    m = n(701519);
class x extends s.PureComponent {
    render() {
        let { tier: e } = this.props;
        return (0, t.jsxs)('div', {
            className: m.tierPill,
            children: [
                (0, t.jsx)(o.Z, {
                    className: m.tierPillStar,
                    children: (0, t.jsx)(d.Z, {
                        tier: e,
                        className: m.tierPillGem
                    })
                }),
                (0, u.nW)(e)
            ]
        });
    }
}
let h = (e) => {
    let { subscriptionChange: l, guild: n } = e;
    if (0 === l) return null;
    let s = Math.max(n.premiumSubscriberCount + l, 0),
        i = (0, u.rF)(s, n.id),
        r = i - (0, u.rF)(n.premiumSubscriberCount, n.id);
    return 0 === r
        ? null
        : (0, t.jsxs)(t.Fragment, {
              children: [(0, t.jsx)(c.Z, { className: r > 0 ? m.levelUpIcon : m.levelDownIcon }), (0, t.jsx)(x, { tier: i })]
          });
};
class C extends s.PureComponent {
    render() {
        let { guild: e, className: l, subscriptionChange: n } = this.props;
        return (0, t.jsxs)('div', {
            className: r()(m.subscription, l),
            children: [
                (0, t.jsx)(a.Z, {
                    guild: e,
                    size: a.Z.Sizes.LARGE
                }),
                (0, t.jsxs)('div', {
                    className: m.subscriptionInfo,
                    children: [
                        (0, t.jsx)('div', {
                            className: m.guildName,
                            children: e.name
                        }),
                        (0, t.jsxs)('div', {
                            className: m.tierInfo,
                            children: [
                                (0, t.jsx)(x, { tier: e.premiumTier }),
                                (0, t.jsx)(h, {
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
