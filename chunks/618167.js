l.d(e, { A: () => v });
var n = l(627968),
    i = l(64700),
    s = l(503698),
    r = l.n(s),
    a = l(311907),
    o = l(263063),
    d = l(496885),
    u = l(313375),
    c = l(61780),
    x = l(473145),
    m = l(942975),
    h = l(645619),
    C = l(434564),
    g = l(52953);
class j extends i.PureComponent {
    render() {
        let { tier: t } = this.props;
        return (0, n.jsxs)("div", {
            className: g._v,
            children: [
                (0, n.jsx)(d.A, {
                    className: g.U2,
                    children: (0, n.jsx)(u.A, { tier: t, color: "currentColor", className: g.Zw }),
                }),
                (0, x.gb)(t),
            ],
        });
    }
}
let p = (t) => {
    let { subscriptionChange: e, guild: l } = t,
        i = (0, C.A)(l.id);
    if (0 === e) return null;
    let s = (0, x.P7)(l.id),
        r = (0, x.kN)(i + e),
        a = r - s;
    return 0 === a
        ? null
        : (0, n.jsxs)(n.Fragment, {
              children: [(0, n.jsx)(c.A, { className: a > 0 ? g.$P : g.q0 }), (0, n.jsx)(j, { tier: r })],
          });
};
function v(t) {
    let { guild: e, className: l, subscriptionChange: s } = t,
        d = (0, a.bG)([h.A], () => null != h.A.getStateForGuild(e.id));
    return (
        i.useEffect(() => {
            d || (0, m.Xd)(e.id);
        }, [d, e.id]),
        (0, n.jsxs)("div", {
            className: r()(g.gP, l),
            children: [
                (0, n.jsx)(o.Ay, { guild: e, size: o.Ay.Sizes.LARGE }),
                (0, n.jsxs)("div", {
                    className: g.EF,
                    children: [
                        (0, n.jsx)("div", { className: g.J5, children: e.name }),
                        (0, n.jsxs)("div", {
                            className: g.jp,
                            children: [
                                (0, n.jsx)(j, { tier: e.premiumTier }),
                                (0, n.jsx)(p, { guild: e, subscriptionChange: null != s ? s : 0 }),
                            ],
                        }),
                    ],
                }),
            ],
        })
    );
}
