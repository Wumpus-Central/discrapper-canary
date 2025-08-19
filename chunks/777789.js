l.d(t, { Z: () => p });
var n = l(951288),
    r = l(647438),
    i = l(120356),
    s = l.n(i),
    a = l(442837),
    o = l(565138),
    c = l(297700),
    d = l(471885),
    u = l(424625),
    m = l(267642),
    x = l(713081),
    g = l(905128),
    h = l(151494),
    f = l(234865);
class C extends r.PureComponent {
    render() {
        let { tier: e } = this.props;
        return (0, n.jsxs)("div", {
            className: f.tierPill,
            children: [
                (0, n.jsx)(c.Z, {
                    className: f.tierPillStar,
                    children: (0, n.jsx)(d.Z, {
                        tier: e,
                        color: "currentColor",
                        className: f.tierPillGem,
                    }),
                }),
                (0, m.nW)(e),
            ],
        });
    }
}
let j = (e) => {
    let { subscriptionChange: t, guild: l } = e,
        r = (0, h.Z)(l.id);
    if (0 === t) return null;
    let i = (0, m.Jh)(l.id),
        s = (0, m.ee)(r + t),
        a = s - i;
    return 0 === a
        ? null
        : (0, n.jsxs)(n.Fragment, {
              children: [
                  (0, n.jsx)(u.Z, { className: a > 0 ? f.levelUpIcon : f.levelDownIcon }),
                  (0, n.jsx)(C, { tier: s }),
              ],
          });
};
function p(e) {
    let { guild: t, className: l, subscriptionChange: i } = e,
        c = (0, a.e7)([g.Z], () => null != g.Z.getStateForGuild(t.id));
    return (
        r.useEffect(() => {
            c || (0, x.Fm)(t.id);
        }, [c, t.id]),
        (0, n.jsxs)("div", {
            className: s()(f.subscription, l),
            children: [
                (0, n.jsx)(o.Z, {
                    guild: t,
                    size: o.Z.Sizes.LARGE,
                }),
                (0, n.jsxs)("div", {
                    className: f.subscriptionInfo,
                    children: [
                        (0, n.jsx)("div", {
                            className: f.guildName,
                            children: t.name,
                        }),
                        (0, n.jsxs)("div", {
                            className: f.tierInfo,
                            children: [
                                (0, n.jsx)(C, { tier: t.premiumTier }),
                                (0, n.jsx)(j, {
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
