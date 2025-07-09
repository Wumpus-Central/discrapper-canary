n.d(t, { Z: () => C });
var l = n(255367),
    r = n(73800),
    s = n(120356),
    i = n.n(s),
    a = n(442837),
    o = n(565138),
    c = n(297700),
    d = n(471885),
    u = n(424625),
    m = n(267642),
    x = n(713081),
    h = n(905128),
    p = n(151494),
    g = n(632149);
class f extends r.PureComponent {
    render() {
        let { tier: e } = this.props;
        return (0, l.jsxs)('div', {
            className: g.tierPill,
            children: [
                (0, l.jsx)(c.Z, {
                    className: g.tierPillStar,
                    children: (0, l.jsx)(d.Z, {
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
    let { subscriptionChange: t, guild: n } = e,
        r = (0, p.Z)(n.id);
    if (0 === t) return null;
    let s = (0, m.Jh)(n.id),
        i = (0, m.ee)(r + t),
        a = i - s;
    return 0 === a
        ? null
        : (0, l.jsxs)(l.Fragment, {
              children: [(0, l.jsx)(u.Z, { className: a > 0 ? g.levelUpIcon : g.levelDownIcon }), (0, l.jsx)(f, { tier: i })]
          });
};
function C(e) {
    let { guild: t, className: n, subscriptionChange: s } = e,
        c = (0, a.e7)([h.Z], () => null != h.Z.getStateForGuild(t.id));
    return (
        r.useEffect(() => {
            c || (0, x.Fm)(t.id);
        }, [c, t.id]),
        (0, l.jsxs)('div', {
            className: i()(g.subscription, n),
            children: [
                (0, l.jsx)(o.Z, {
                    guild: t,
                    size: o.Z.Sizes.LARGE
                }),
                (0, l.jsxs)('div', {
                    className: g.subscriptionInfo,
                    children: [
                        (0, l.jsx)('div', {
                            className: g.guildName,
                            children: t.name
                        }),
                        (0, l.jsxs)('div', {
                            className: g.tierInfo,
                            children: [
                                (0, l.jsx)(f, { tier: t.premiumTier }),
                                (0, l.jsx)(j, {
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
