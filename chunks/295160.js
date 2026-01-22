n.d(t, { A: () => h }), n(896048);
var r,
    i = n(627968),
    a = n(64700),
    s = n(503698),
    o = n.n(s),
    l = n(397927),
    c = n(235986),
    u = n(31582);
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
var f = (function (e) {
    return (e.SINGLE_AVATAR = "1"), (e.MULTIPLE_AVATAR = "2"), e;
})(f || {});
let p = {
    [l._3J.SIZE_32]: u.dT,
    [l._3J.SIZE_40]: u.Jb,
};
class _ extends (r = a.Component) {
    render() {
        let { type: e, avatarSize: t, className: n, childrenClassName: r, doNotAnimate: a } = this.props;
        return "2" === e
            ? (0, i.jsxs)("div", {
                  className: o()(u.ce, u.jO, n),
                  children: [
                      (0, i.jsxs)(c.A, {
                          children: [
                              (0, i.jsx)("div", { className: o()(u.RH, p[t], u.hC) }),
                              (0, i.jsx)("div", { className: o()(u.RH, p[t], u.hC) }),
                              (0, i.jsx)("div", { className: o()(u.RH, p[t]) }),
                          ],
                      }),
                      (0, i.jsx)(c.A, {
                          grow: 1,
                          className: u.eC,
                          style: { maxWidth: this.placeholderMaxWidth },
                      }),
                  ],
              })
            : (0, i.jsxs)(c.A, {
                  className: o()(u.qf, !a && u.lN, n),
                  children: [
                      (0, i.jsx)("div", { className: o()(u.RH, p[t], r) }),
                      (0, i.jsx)(c.A, {
                          grow: 1,
                          className: o()(u.gM, r),
                          style: { maxWidth: this.placeholderMaxWidth },
                      }),
                  ],
              });
    }
    constructor(...e) {
        super(...e), d(this, "placeholderMaxWidth", "".concat(Math.floor(40 * Math.random()) + 40, "%"));
    }
}
d(_, "defaultProps", { type: "1" }), d(_, "Types", f);
let h = _;
