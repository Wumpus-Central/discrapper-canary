n.d(t, { A: () => h });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(397927),
    d = n(985018),
    o = n(228763);
let c = { BLOCK: o.om, INLINE: o.mG };
class u extends s.PureComponent {
    static Types = c;
    render() {
        let { children: e, className: t, textClassName: n, type: s = c.BLOCK, style: l } = this.props;
        return (0, i.jsxs)("div", {
            className: r()(t, s),
            style: l,
            children: [
                (0, i.jsxs)(a.Text, {
                    variant: "text-sm/bold",
                    tag: "div",
                    color: "text-feedback-positive",
                    className: o.AD,
                    children: [d.intl.string(d.t["8tvIiN"]), ":"],
                }),
                (0, i.jsx)(a.Text, { className: r()(o.uN, n), variant: "text-sm/normal", children: e }),
            ],
        });
    }
}
let h = u;
