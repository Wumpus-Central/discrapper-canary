"use strict";
n.d(t, { A: () => f });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(397927),
    l = n(235986),
    u = n(2748),
    c = (function (e) {
        return (e.SINGLE_AVATAR = "1"), (e.MULTIPLE_AVATAR = "2"), e;
    })(c || {});
let d = { [o._3J.SIZE_32]: u.dT, [o._3J.SIZE_40]: u.Jb };
class _ extends i.Component {
    placeholderMaxWidth = `${Math.floor(40 * Math.random()) + 40}%`;
    static defaultProps = { type: "1" };
    static Types = c;
    render() {
        let { type: e, avatarSize: t, className: n, childrenClassName: i, doNotAnimate: s } = this.props;
        return "2" === e
            ? (0, r.jsxs)("div", {
                  className: a()(u.ce, u.jO, n),
                  children: [
                      (0, r.jsxs)(l.A, {
                          children: [
                              (0, r.jsx)("div", { className: a()(u.RH, d[t], u.hC) }),
                              (0, r.jsx)("div", { className: a()(u.RH, d[t], u.hC) }),
                              (0, r.jsx)("div", { className: a()(u.RH, d[t]) }),
                          ],
                      }),
                      (0, r.jsx)(l.A, { grow: 1, className: u.eC, style: { maxWidth: this.placeholderMaxWidth } }),
                  ],
              })
            : (0, r.jsxs)(l.A, {
                  className: a()(u.qf, !s && u.lN, n),
                  children: [
                      (0, r.jsx)("div", { className: a()(u.RH, d[t], i) }),
                      (0, r.jsx)(l.A, {
                          grow: 1,
                          className: a()(u.gM, i),
                          style: { maxWidth: this.placeholderMaxWidth },
                      }),
                  ],
              });
    }
}
let f = _;
