n.d(t, { Z: () => b });
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(565138),
    c = n(297700),
    u = n(471885),
    d = n(424625),
    f = n(267642),
    _ = n(713081),
    p = n(905128),
    h = n(151494),
    m = n(234865);
class g extends i.PureComponent {
    render() {
        let { tier: e } = this.props;
        return (0, r.jsxs)("div", {
            className: m.tierPill,
            children: [
                (0, r.jsx)(c.Z, {
                    className: m.tierPillStar,
                    children: (0, r.jsx)(u.Z, {
                        tier: e,
                        color: "currentColor",
                        className: m.tierPillGem,
                    }),
                }),
                (0, f.nW)(e),
            ],
        });
    }
}
let E = (e) => {
    let { subscriptionChange: t, guild: n } = e,
        i = (0, h.Z)(n.id);
    if (0 === t) return null;
    let a = (0, f.Jh)(n.id),
        o = (0, f.ee)(i + t),
        s = o - a;
    return 0 === s
        ? null
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(d.Z, { className: s > 0 ? m.levelUpIcon : m.levelDownIcon }),
                  (0, r.jsx)(g, { tier: o }),
              ],
          });
};
function b(e) {
    let { guild: t, className: n, subscriptionChange: a } = e,
        c = (0, s.e7)([p.Z], () => null != p.Z.getStateForGuild(t.id));
    return (
        i.useEffect(() => {
            c || (0, _.BN)(t.id);
        }, [c, t.id]),
        (0, r.jsxs)("div", {
            className: o()(m.subscription, n),
            children: [
                (0, r.jsx)(l.Z, {
                    guild: t,
                    size: l.Z.Sizes.LARGE,
                }),
                (0, r.jsxs)("div", {
                    className: m.subscriptionInfo,
                    children: [
                        (0, r.jsx)("div", {
                            className: m.guildName,
                            children: t.name,
                        }),
                        (0, r.jsxs)("div", {
                            className: m.tierInfo,
                            children: [
                                (0, r.jsx)(g, { tier: t.premiumTier }),
                                (0, r.jsx)(E, {
                                    guild: t,
                                    subscriptionChange: null != a ? a : 0,
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        })
    );
}
