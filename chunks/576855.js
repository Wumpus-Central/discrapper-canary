n.d(t, { Z: () => p });
var r,
    i = n(54381),
    a = n(473749),
    o = n(120356),
    s = n.n(o),
    l = n(481060),
    c = n(388032),
    u = n(25663);
function d(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let f = {
    BLOCK: u.block,
    INLINE: u.inline,
};
class _ extends (r = a.PureComponent) {
    render() {
        let { children: e, className: t, textClassName: n, type: r = f.BLOCK, style: a } = this.props;
        return (0, i.jsxs)("div", {
            className: s()(t, r),
            style: a,
            children: [
                (0, i.jsxs)(l.Text, {
                    variant: "text-sm/bold",
                    tag: "div",
                    color: "text-feedback-positive",
                    className: u.pro,
                    children: [c.intl.string(c.t["8tvIiN"]), ":"],
                }),
                (0, i.jsx)(l.Text, {
                    className: s()(u.tip, n),
                    variant: "text-sm/normal",
                    children: e,
                }),
            ],
        });
    }
}
d(_, "Types", f);
let p = _;
