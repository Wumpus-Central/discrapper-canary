var l,
    i = n(477900),
    r = n(582128),
    s = n(503698),
    a = n.n(s),
    u = n(778712),
    o = n(235986),
    d = n(141504),
    c = (((l = c || {}).SINGLE_AVATAR = "1"), (l.MULTIPLE_AVATAR = "2"), l);
let h = { [u._3.SIZE_32]: d.dT, [u._3.SIZE_40]: d.Jb };
class m extends r.Component {
    placeholderMaxWidth = `${Math.floor(40 * Math.random()) + 40}%`;
    static defaultProps = { type: "1" };
    static Types = c;
    render() {
        let { type: e, avatarSize: t, className: n, childrenClassName: l, doNotAnimate: r } = this.props;
        return "2" === e
            ? (0, i.jsxs)("div", {
                  className: a()(d.ce, d.jO, n),
                  children: [
                      (0, i.jsxs)(o.A, {
                          children: [
                              (0, i.jsx)("div", { className: a()(d.RH, h[t], d.hC) }),
                              (0, i.jsx)("div", { className: a()(d.RH, h[t], d.hC) }),
                              (0, i.jsx)("div", { className: a()(d.RH, h[t]) }),
                          ],
                      }),
                      (0, i.jsx)(o.A, { grow: 1, className: d.eC, style: { maxWidth: this.placeholderMaxWidth } }),
                  ],
              })
            : (0, i.jsxs)(o.A, {
                  className: a()(d.qf, !r && d.lN, n),
                  children: [
                      (0, i.jsx)("div", { className: a()(d.RH, h[t], l) }),
                      (0, i.jsx)(o.A, {
                          grow: 1,
                          className: a()(d.gM, l),
                          style: { maxWidth: this.placeholderMaxWidth },
                      }),
                  ],
              });
    }
}
n.d(t, {}, { A: m });
