l.d(t, { Z: () => C });
var n = l(255367),
    r = l(73800),
    s = l(120356),
    i = l.n(s),
    o = l(442837),
    a = l(565138),
    c = l(297700),
    d = l(471885),
    u = l(424625),
    m = l(267642),
    x = l(713081),
    h = l(905128),
    p = l(151494),
    g = l(632149);
class f extends r.PureComponent {
    render() {
        let { tier: e } = this.props;
        return (0, n.jsxs)('div', {
            className: g.tierPill,
            children: [
                (0, n.jsx)(c.Z, {
                    className: g.tierPillStar,
                    children: (0, n.jsx)(d.Z, {
                        tier: e,
                        color: 'currentColor',
                        className: g.tierPillGem
                    })
                }),
                (0, m.nW)(e)
            ]
        });
    }
}
let j = (e) => {
    let { subscriptionChange: t, guild: l } = e,
        r = (0, p.Z)(l.id);
    if (0 === t) return null;
    let s = (0, m.Jh)(l.id),
        i = (0, m.ee)(r + t),
        o = i - s;
    return 0 === o
        ? null
        : (0, n.jsxs)(n.Fragment, {
              children: [(0, n.jsx)(u.Z, { className: o > 0 ? g.levelUpIcon : g.levelDownIcon }), (0, n.jsx)(f, { tier: i })]
          });
};
function C(e) {
    let { guild: t, className: l, subscriptionChange: s } = e,
        c = (0, o.e7)([h.Z], () => null != h.Z.getStateForGuild(t.id));
    return (
        r.useEffect(() => {
            c || (0, x.Fm)(t.id);
        }, [c, t.id]),
        (0, n.jsxs)('div', {
            className: i()(g.subscription, l),
            children: [
                (0, n.jsx)(a.Z, {
                    guild: t,
                    size: a.Z.Sizes.LARGE
                }),
                (0, n.jsxs)('div', {
                    className: g.subscriptionInfo,
                    children: [
                        (0, n.jsx)('div', {
                            className: g.guildName,
                            children: t.name
                        }),
                        (0, n.jsxs)('div', {
                            className: g.tierInfo,
                            children: [
                                (0, n.jsx)(f, { tier: t.premiumTier }),
                                (0, n.jsx)(j, {
                                    guild: t,
                                    subscriptionChange: null != s ? s : 0
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    );
}
