"use strict";
s.d(t, { A: () => p });
var n = s(627968),
    i = s(64700),
    r = s(503698),
    a = s.n(r),
    l = s(397927),
    c = s(985018),
    o = s(228763);
let d = { BLOCK: o.om, INLINE: o.mG };
class u extends i.PureComponent {
    static Types = d;
    render() {
        let { children: e, className: t, textClassName: s, type: i = d.BLOCK, style: r } = this.props;
        return (0, n.jsxs)("div", {
            className: a()(t, i),
            style: r,
            children: [
                (0, n.jsxs)(l.Text, {
                    variant: "text-sm/bold",
                    tag: "div",
                    color: "text-feedback-positive",
                    className: o.AD,
                    children: [c.intl.string(c.t["8tvIiN"]), ":"],
                }),
                (0, n.jsx)(l.Text, { className: a()(o.uN, s), variant: "text-sm/normal", children: e }),
            ],
        });
    }
}
let p = u;
