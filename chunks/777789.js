l.d(t, { Z: () => C });
var n = l(200651),
    r = l(192379),
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
    g = l(151494),
    f = l(632149);
class p extends r.PureComponent {
    render() {
        let { tier: e } = this.props;
        return (0, n.jsxs)('div', {
            className: f.tierPill,
            children: [
                (0, n.jsx)(c.Z, {
                    className: f.tierPillStar,
                    children: (0, n.jsx)(d.Z, {
                        tier: e,
                        color: 'currentColor',
                        className: f.tierPillGem
                    })
                }),
                (0, m.nW)(e)
            ]
        });
    }
}
let j = (e) => {
    let { subscriptionChange: t, guild: l } = e,
        r = (0, g.Z)(l.id);
    if (0 === t) return null;
    let s = (0, m.Jh)(l.id),
        i = (0, m.ee)(r + t),
        o = i - s;
    return 0 === o
        ? null
        : (0, n.jsxs)(n.Fragment, {
              children: [(0, n.jsx)(u.Z, { className: o > 0 ? f.levelUpIcon : f.levelDownIcon }), (0, n.jsx)(p, { tier: i })]
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
            className: i()(f.subscription, l),
            children: [
                (0, n.jsx)(a.Z, {
                    guild: t,
                    size: a.Z.Sizes.LARGE
                }),
                (0, n.jsxs)('div', {
                    className: f.subscriptionInfo,
                    children: [
                        (0, n.jsx)('div', {
                            className: f.guildName,
                            children: t.name
                        }),
                        (0, n.jsxs)('div', {
                            className: f.tierInfo,
                            children: [
                                (0, n.jsx)(p, { tier: t.premiumTier }),
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
