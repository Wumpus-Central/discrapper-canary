n.d(t, {
    A: () => _,
});
var r,
    i = n(627968),
    a = n(64700),
    s = n(503698),
    o = n.n(s),
    l = n(397927),
    c = n(985018),
    u = n(228763);

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
    BLOCK: u.om,
    INLINE: u.mG,
};
class p extends (r = a.PureComponent) {
    render() {
        let { children: e, className: t, textClassName: n, type: r = f.BLOCK, style: a } = this.props;
        return (0, i.jsxs)("div", {
            className: o()(t, r),
            style: a,
            children: [
                (0, i.jsxs)(l.Text, {
                    variant: "text-sm/bold",
                    tag: "div",
                    color: "text-feedback-positive",
                    className: u.AD,
                    children: [c.intl.string(c.t["8tvIiN"]), ":"],
                }),
                (0, i.jsx)(l.Text, {
                    className: o()(u.uN, n),
                    variant: "text-sm/normal",
                    children: e,
                }),
            ],
        });
    }
}
d(p, "Types", f);
let _ = p;
