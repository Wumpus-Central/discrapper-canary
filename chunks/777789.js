n.d(l, {
    Z: function () {
        return h;
    }
});
var t = n(200651),
    s = n(192379),
    r = n(120356),
    i = n.n(r),
    o = n(565138),
    a = n(297700),
    d = n(471885),
    u = n(424625),
    c = n(267642),
    m = n(701519);
class x extends s.PureComponent {
    render() {
        let { tier: e } = this.props;
        return (0, t.jsxs)('div', {
            className: m.tierPill,
            children: [
                (0, t.jsx)(a.Z, {
                    className: m.tierPillStar,
                    children: (0, t.jsx)(d.Z, {
                        tier: e,
                        className: m.tierPillGem
                    })
                }),
                (0, c.nW)(e)
            ]
        });
    }
}
let C = (e) => {
    let { subscriptionChange: l, guild: n } = e;
    if (0 === l) return null;
    let s = Math.max(n.premiumSubscriberCount + l, 0),
        r = (0, c.rF)(s, n.id),
        i = r - (0, c.rF)(n.premiumSubscriberCount, n.id);
    return 0 === i
        ? null
        : (0, t.jsxs)(t.Fragment, {
              children: [(0, t.jsx)(u.Z, { className: i > 0 ? m.levelUpIcon : m.levelDownIcon }), (0, t.jsx)(x, { tier: r })]
          });
};
class h extends s.PureComponent {
    render() {
        let { guild: e, className: l, subscriptionChange: n } = this.props;
        return (0, t.jsxs)('div', {
            className: i()(m.subscription, l),
            children: [
                (0, t.jsx)(o.Z, {
                    guild: e,
                    size: o.Z.Sizes.LARGE
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
                                (0, t.jsx)(C, {
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
