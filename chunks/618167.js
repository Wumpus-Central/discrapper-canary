n.d(e, { A: () => j });
var l = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(311907),
    o = n(263063),
    c = n(496885),
    d = n(313375),
    u = n(61780),
    m = n(473145),
    x = n(942975),
    h = n(645619),
    g = n(434564),
    p = n(574030);
class f extends i.PureComponent {
    render() {
        let { tier: t } = this.props;
        return (0, l.jsxs)("div", {
            className: p._v,
            children: [
                (0, l.jsx)(c.A, {
                    className: p.U2,
                    children: (0, l.jsx)(d.A, { tier: t, color: "currentColor", className: p.Zw }),
                }),
                (0, m.gb)(t),
            ],
        });
    }
}
let b = (t) => {
    let { subscriptionChange: e, guild: n } = t,
        i = (0, g.A)(n.id);
    if (0 === e) return null;
    let s = (0, m.P7)(n.id),
        a = (0, m.kN)(i + e),
        r = a - s;
    return 0 === r
        ? null
        : (0, l.jsxs)(l.Fragment, {
              children: [(0, l.jsx)(u.A, { className: r > 0 ? p.$P : p.q0 }), (0, l.jsx)(f, { tier: a })],
          });
};
function j(t) {
    let { guild: e, className: n, subscriptionChange: s } = t,
        c = (0, r.bG)([h.A], () => null != h.A.getStateForGuild(e.id));
    return (
        i.useEffect(() => {
            c || (0, x.Xd)(e.id);
        }, [c, e.id]),
        (0, l.jsxs)("div", {
            className: a()(p.gP, n),
            children: [
                (0, l.jsx)(o.Ay, { guild: e, size: o.Ay.Sizes.LARGE }),
                (0, l.jsxs)("div", {
                    className: p.EF,
                    children: [
                        (0, l.jsx)("div", { className: p.J5, children: e.name }),
                        (0, l.jsxs)("div", {
                            className: p.jp,
                            children: [
                                (0, l.jsx)(f, { tier: e.premiumTier }),
                                (0, l.jsx)(b, { guild: e, subscriptionChange: null != s ? s : 0 }),
                            ],
                        }),
                    ],
                }),
            ],
        })
    );
}
