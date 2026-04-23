n.d(t, { A: () => E });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(834730),
    c = n(985018),
    o = n(158226);
let d = { BLOCK: o.om, INLINE: o.mG };
class u extends s.PureComponent {
    static Types = d;
    render() {
        let { children: e, className: t, textClassName: n, type: s = d.BLOCK, style: l } = this.props;
        return (0, i.jsxs)("div", {
            className: r()(t, s),
            style: l,
            children: [
                (0, i.jsxs)(a.E, {
                    variant: "text-sm/bold",
                    tag: "div",
                    color: "text-feedback-positive",
                    className: o.AD,
                    children: [c.intl.string(c.t["8tvIiN"]), ":"],
                }),
                (0, i.jsx)(a.E, { className: r()(o.uN, n), variant: "text-sm/normal", children: e }),
            ],
        });
    }
}
let E = u;
