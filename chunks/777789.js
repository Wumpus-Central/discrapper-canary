n.d(t, { Z: () => C });
var l = n(951288),
    r = n(647438),
    i = n(120356),
    s = n.n(i),
    a = n(442837),
    o = n(565138),
    d = n(297700),
    c = n(471885),
    u = n(424625),
    m = n(267642),
    x = n(713081),
    h = n(905128),
    p = n(151494),
    g = n(234865);
class j extends r.PureComponent {
    render() {
        let { tier: e } = this.props;
        return (0, l.jsxs)("div", {
            className: g.tierPill,
            children: [
                (0, l.jsx)(d.Z, {
                    className: g.tierPillStar,
                    children: (0, l.jsx)(c.Z, {
                        tier: e,
                        color: "currentColor",
                        className: g.tierPillGem,
                    }),
                }),
                (0, m.nW)(e),
            ],
        });
    }
}
let f = (e) => {
    let { subscriptionChange: t, guild: n } = e,
        r = (0, p.Z)(n.id);
    if (0 === t) return null;
    let i = (0, m.Jh)(n.id),
        s = (0, m.ee)(r + t),
        a = s - i;
    return 0 === a
        ? null
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  (0, l.jsx)(u.Z, { className: a > 0 ? g.levelUpIcon : g.levelDownIcon }),
                  (0, l.jsx)(j, { tier: s }),
              ],
          });
};
function C(e) {
    let { guild: t, className: n, subscriptionChange: i } = e,
        d = (0, a.e7)([h.Z], () => null != h.Z.getStateForGuild(t.id));
    return (
        r.useEffect(() => {
            d || (0, x.Fm)(t.id);
        }, [d, t.id]),
        (0, l.jsxs)("div", {
            className: s()(g.subscription, n),
            children: [
                (0, l.jsx)(o.Z, {
                    guild: t,
                    size: o.Z.Sizes.LARGE,
                }),
                (0, l.jsxs)("div", {
                    className: g.subscriptionInfo,
                    children: [
                        (0, l.jsx)("div", {
                            className: g.guildName,
                            children: t.name,
                        }),
                        (0, l.jsxs)("div", {
                            className: g.tierInfo,
                            children: [
                                (0, l.jsx)(j, { tier: t.premiumTier }),
                                (0, l.jsx)(f, {
                                    guild: t,
                                    subscriptionChange: null != i ? i : 0,
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        })
    );
}
