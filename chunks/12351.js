n.d(t, { A: () => u });
var i = n(477900),
    l = n(582128),
    r = n(503698),
    s = n.n(r),
    a = n(834730),
    E = n(375708),
    o = n(310421);
let c = { BLOCK: o.om, INLINE: o.mG };
class _ extends l.PureComponent {
    static Types = c;
    render() {
        let { children: e, className: t, textClassName: n, type: l = c.BLOCK, style: r } = this.props;
        return (0, i.jsxs)("div", {
            className: s()(t, l),
            style: r,
            children: [
                (0, i.jsxs)(a.E, {
                    variant: "text-sm/bold",
                    tag: "div",
                    color: "text-feedback-positive",
                    className: o.AD,
                    children: [E.intl.string(E.t["8tvIiN"]), ":"],
                }),
                (0, i.jsx)(a.E, { className: s()(o.uN, n), variant: "text-sm/normal", children: e }),
            ],
        });
    }
}
let u = _;
