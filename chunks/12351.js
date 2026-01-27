n.d(t, {
    A: () => A,
});
var r,
    i,
    l = n(627968),
    o = n(64700),
    a = n(503698),
    s = n.n(a),
    c = n(397927),
    u = n(985018),
    E = n(228763);
let d = {
    BLOCK: E.om,
    INLINE: E.mG,
};
class _ extends (i = o.PureComponent) {
    render() {
        let { children: e, className: t, textClassName: n, type: r = d.BLOCK, style: i } = this.props;
        return (0, l.jsxs)("div", {
            className: s()(t, r),
            style: i,
            children: [
                (0, l.jsxs)(c.Text, {
                    variant: "text-sm/bold",
                    tag: "div",
                    color: "text-feedback-positive",
                    className: E.AD,
                    children: [u.intl.string(u.t["8tvIiN"]), ":"],
                }),
                (0, l.jsx)(c.Text, {
                    className: s()(E.uN, n),
                    variant: "text-sm/normal",
                    children: e,
                }),
            ],
        });
    }
}
(r = "Types") in _
    ? Object.defineProperty(_, r, {
          value: d,
          enumerable: !0,
          configurable: !0,
          writable: !0,
      })
    : (_[r] = d);
let A = _;
