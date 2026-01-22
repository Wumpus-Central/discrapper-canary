n.d(t, { A: () => b });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(311907),
    l = n(263063),
    c = n(496885),
    u = n(313375),
    d = n(61780),
    f = n(473145),
    p = n(942975),
    _ = n(645619),
    h = n(434564),
    m = n(92707);
class g extends i.PureComponent {
    render() {
        let { tier: e } = this.props;
        return (0, r.jsxs)("div", {
            className: m._v,
            children: [
                (0, r.jsx)(c.A, {
                    className: m.U2,
                    children: (0, r.jsx)(u.A, {
                        tier: e,
                        color: "currentColor",
                        className: m.Zw,
                    }),
                }),
                (0, f.gb)(e),
            ],
        });
    }
}
let E = (e) => {
    let { subscriptionChange: t, guild: n } = e,
        i = (0, h.A)(n.id);
    if (0 === t) return null;
    let a = (0, f.P7)(n.id),
        s = (0, f.kN)(i + t),
        o = s - a;
    return 0 === o
        ? null
        : (0, r.jsxs)(r.Fragment, {
              children: [(0, r.jsx)(d.A, { className: o > 0 ? m.$P : m.q0 }), (0, r.jsx)(g, { tier: s })],
          });
};
function b(e) {
    let { guild: t, className: n, subscriptionChange: a } = e,
        c = (0, o.bG)([_.A], () => null != _.A.getStateForGuild(t.id));
    return (
        i.useEffect(() => {
            c || (0, p.Xd)(t.id);
        }, [c, t.id]),
        (0, r.jsxs)("div", {
            className: s()(m.gP, n),
            children: [
                (0, r.jsx)(l.A, {
                    guild: t,
                    size: l.A.Sizes.LARGE,
                }),
                (0, r.jsxs)("div", {
                    className: m.EF,
                    children: [
                        (0, r.jsx)("div", {
                            className: m.J5,
                            children: t.name,
                        }),
                        (0, r.jsxs)("div", {
                            className: m.jp,
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
