"use strict";
n.d(t, { A: () => p });
var i,
    l = n(627968),
    s = n(64700),
    r = n(503698),
    a = n.n(r),
    o = n(778712),
    c = n(235986),
    u = n(310887),
    d = (((i = d || {}).SINGLE_AVATAR = "1"), (i.MULTIPLE_AVATAR = "2"), i);
let h = { [o._3.SIZE_32]: u.dT, [o._3.SIZE_40]: u.Jb };
class m extends s.Component {
    placeholderMaxWidth = `${Math.floor(40 * Math.random()) + 40}%`;
    static defaultProps = { type: "1" };
    static Types = d;
    render() {
        let { type: e, avatarSize: t, className: n, childrenClassName: i, doNotAnimate: s } = this.props;
        return "2" === e
            ? (0, l.jsxs)("div", {
                  className: a()(u.ce, u.jO, n),
                  children: [
                      (0, l.jsxs)(c.A, {
                          children: [
                              (0, l.jsx)("div", { className: a()(u.RH, h[t], u.hC) }),
                              (0, l.jsx)("div", { className: a()(u.RH, h[t], u.hC) }),
                              (0, l.jsx)("div", { className: a()(u.RH, h[t]) }),
                          ],
                      }),
                      (0, l.jsx)(c.A, { grow: 1, className: u.eC, style: { maxWidth: this.placeholderMaxWidth } }),
                  ],
              })
            : (0, l.jsxs)(c.A, {
                  className: a()(u.qf, !s && u.lN, n),
                  children: [
                      (0, l.jsx)("div", { className: a()(u.RH, h[t], i) }),
                      (0, l.jsx)(c.A, {
                          grow: 1,
                          className: a()(u.gM, i),
                          style: { maxWidth: this.placeholderMaxWidth },
                      }),
                  ],
              });
    }
}
let p = m;
