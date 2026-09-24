n.d(t, { A: () => _ });
var i = n(477900),
    l = n(582128),
    r = n(503698),
    s = n.n(r),
    a = n(834730),
    o = n(375708),
    E = n(310421);
let c = { BLOCK: E.om, INLINE: E.mG };
class u extends l.PureComponent {
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
                    className: E.AD,
                    children: [o.intl.string(o.t["8tvIiN"]), ":"],
                }),
                (0, i.jsx)(a.E, { className: s()(E.uN, n), variant: "text-sm/normal", children: e }),
            ],
        });
    }
}
let _ = u;
