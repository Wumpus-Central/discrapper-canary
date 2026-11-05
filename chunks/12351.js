var s = i(477900),
    n = i(582128),
    l = i(503698),
    r = i.n(l),
    E = i(834730),
    a = i(792996),
    m = i(310421);
let d = { BLOCK: m.om, INLINE: m.mG };
class u extends n.PureComponent {
    static Types = d;
    render() {
        let { children: e, className: t, textClassName: i, type: n = d.BLOCK, style: l } = this.props;
        return (0, s.jsxs)("div", {
            className: r()(t, n),
            style: l,
            children: [
                (0, s.jsxs)(E.E, {
                    variant: "body-sm/semibold",
                    tag: "div",
                    color: "text-feedback-positive",
                    className: m.AD,
                    children: [a.intl.string(a.t["8tvIiN"]), ":"],
                }),
                (0, s.jsx)(E.E, { className: r()(m.uN, i), variant: "body-sm/normal", children: e }),
            ],
        });
    }
}
i.d(t, {}, { A: u });
