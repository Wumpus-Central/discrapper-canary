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
    p = n(713081),
    _ = n(905128),
    m = n(151494),
    h = n(234865);
class g extends i.PureComponent {
    render() {
        let { tier: e } = this.props;
        return (0, r.jsxs)("div", {
            className: h.tierPill,
            children: [
                (0, r.jsx)(c.Z, {
                    className: h.tierPillStar,
                    children: (0, r.jsx)(u.Z, {
                        tier: e,
                        color: "currentColor",
                        className: h.tierPillGem,
                    }),
                }),
                (0, f.nW)(e),
            ],
        });
    }
}
let E = (e) => {
    let { subscriptionChange: t, guild: n } = e,
        i = (0, m.Z)(n.id);
    if (0 === t) return null;
    let a = (0, f.Jh)(n.id),
        o = (0, f.ee)(i + t),
        s = o - a;
    return 0 === s
        ? null
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(d.Z, { className: s > 0 ? h.levelUpIcon : h.levelDownIcon }),
                  (0, r.jsx)(g, { tier: o }),
              ],
          });
};
function b(e) {
    let { guild: t, className: n, subscriptionChange: a } = e,
        c = (0, s.e7)([_.Z], () => null != _.Z.getStateForGuild(t.id));
    return (
        i.useEffect(() => {
            c || (0, p.BN)(t.id);
        }, [c, t.id]),
        (0, r.jsxs)("div", {
            className: o()(h.subscription, n),
            children: [
                (0, r.jsx)(l.Z, {
                    guild: t,
                    size: l.Z.Sizes.LARGE,
                }),
                (0, r.jsxs)("div", {
                    className: h.subscriptionInfo,
                    children: [
                        (0, r.jsx)("div", {
                            className: h.guildName,
                            children: t.name,
                        }),
                        (0, r.jsxs)("div", {
                            className: h.tierInfo,
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
