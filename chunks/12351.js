n.d(t, { A: () => u });
var i = n(627968),
    r = n(64700),
    a = n(503698),
    o = n.n(a),
    s = n(834730),
    l = n(985018),
    c = n(158226);
let _ = { BLOCK: c.om, INLINE: c.mG };
class d extends r.PureComponent {
    static Types = _;
    render() {
        let { children: e, className: t, textClassName: n, type: r = _.BLOCK, style: a } = this.props;
        return (0, i.jsxs)("div", {
            className: o()(t, r),
            style: a,
            children: [
                (0, i.jsxs)(s.E, {
                    variant: "text-sm/bold",
                    tag: "div",
                    color: "text-feedback-positive",
                    className: c.AD,
                    children: [l.intl.string(l.t["8tvIiN"]), ":"],
                }),
                (0, i.jsx)(s.E, { className: o()(c.uN, n), variant: "text-sm/normal", children: e }),
            ],
        });
    }
}
let u = d;
