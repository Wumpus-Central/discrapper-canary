s.d(t, { A: () => A });
var i = s(627968),
    n = s(64700),
    l = s(503698),
    r = s.n(l),
    a = s(834730),
    E = s(375708),
    d = s(158226);
let m = { BLOCK: d.om, INLINE: d.mG };
class u extends n.PureComponent {
    static Types = m;
    render() {
        let { children: e, className: t, textClassName: s, type: n = m.BLOCK, style: l } = this.props;
        return (0, i.jsxs)("div", {
            className: r()(t, n),
            style: l,
            children: [
                (0, i.jsxs)(a.E, {
                    variant: "text-sm/bold",
                    tag: "div",
                    color: "text-feedback-positive",
                    className: d.AD,
                    children: [E.intl.string(E.t["8tvIiN"]), ":"],
                }),
                (0, i.jsx)(a.E, { className: r()(d.uN, s), variant: "text-sm/normal", children: e }),
            ],
        });
    }
}
let A = u;
