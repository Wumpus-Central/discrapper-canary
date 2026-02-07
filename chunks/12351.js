n.d(t, { A: () => d });
var i = n(627968),
    l = n(64700),
    r = n(503698),
    s = n.n(r),
    a = n(397927),
    o = n(985018),
    E = n(228763);
let c = { BLOCK: E.om, INLINE: E.mG };
class _ extends l.PureComponent {
    static Types = c;
    render() {
        let { children: e, className: t, textClassName: n, type: l = c.BLOCK, style: r } = this.props;
        return (0, i.jsxs)("div", {
            className: s()(t, l),
            style: r,
            children: [
                (0, i.jsxs)(a.Text, {
                    variant: "text-sm/bold",
                    tag: "div",
                    color: "text-feedback-positive",
                    className: E.AD,
                    children: [o.intl.string(o.t["8tvIiN"]), ":"],
                }),
                (0, i.jsx)(a.Text, { className: s()(E.uN, n), variant: "text-sm/normal", children: e }),
            ],
        });
    }
}
let d = _;
