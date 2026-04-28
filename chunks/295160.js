"use strict";
n.d(t, { A: () => p });
var l,
    i = n(627968),
    s = n(64700),
    a = n(503698),
    r = n.n(a),
    o = n(778712),
    c = n(235986),
    u = n(310887),
    d = (((l = d || {}).SINGLE_AVATAR = "1"), (l.MULTIPLE_AVATAR = "2"), l);
let h = { [o._3.SIZE_32]: u.dT, [o._3.SIZE_40]: u.Jb };
class m extends s.Component {
    placeholderMaxWidth = `${Math.floor(40 * Math.random()) + 40}%`;
    static defaultProps = { type: "1" };
    static Types = d;
    render() {
        let { type: e, avatarSize: t, className: n, childrenClassName: l, doNotAnimate: s } = this.props;
        return "2" === e
            ? (0, i.jsxs)("div", {
                  className: r()(u.ce, u.jO, n),
                  children: [
                      (0, i.jsxs)(c.A, {
                          children: [
                              (0, i.jsx)("div", { className: r()(u.RH, h[t], u.hC) }),
                              (0, i.jsx)("div", { className: r()(u.RH, h[t], u.hC) }),
                              (0, i.jsx)("div", { className: r()(u.RH, h[t]) }),
                          ],
                      }),
                      (0, i.jsx)(c.A, { grow: 1, className: u.eC, style: { maxWidth: this.placeholderMaxWidth } }),
                  ],
              })
            : (0, i.jsxs)(c.A, {
                  className: r()(u.qf, !s && u.lN, n),
                  children: [
                      (0, i.jsx)("div", { className: r()(u.RH, h[t], l) }),
                      (0, i.jsx)(c.A, {
                          grow: 1,
                          className: r()(u.gM, l),
                          style: { maxWidth: this.placeholderMaxWidth },
                      }),
                  ],
              });
    }
}
let p = m;
