var t,
    n = s(477900),
    i = s(582128),
    r = s(503698),
    a = s.n(r),
    c = s(778712),
    d = s(235986),
    u = s(141504),
    o = (((t = o || {}).SINGLE_AVATAR = "1"), (t.MULTIPLE_AVATAR = "2"), t);
let m = { [c._3.SIZE_32]: u.dT, [c._3.SIZE_40]: u.Jb };
class h extends i.Component {
    placeholderMaxWidth = `${Math.floor(40 * Math.random()) + 40}%`;
    static defaultProps = { type: "1" };
    static Types = o;
    render() {
        let { type: e, avatarSize: l, className: s, childrenClassName: t, doNotAnimate: i } = this.props;
        return "2" === e
            ? (0, n.jsxs)("div", {
                  className: a()(u.ce, u.jO, s),
                  children: [
                      (0, n.jsxs)(d.A, {
                          children: [
                              (0, n.jsx)("div", { className: a()(u.RH, m[l], u.hC) }),
                              (0, n.jsx)("div", { className: a()(u.RH, m[l], u.hC) }),
                              (0, n.jsx)("div", { className: a()(u.RH, m[l]) }),
                          ],
                      }),
                      (0, n.jsx)(d.A, { grow: 1, className: u.eC, style: { maxWidth: this.placeholderMaxWidth } }),
                  ],
              })
            : (0, n.jsxs)(d.A, {
                  className: a()(u.qf, !i && u.lN, s),
                  children: [
                      (0, n.jsx)("div", { className: a()(u.RH, m[l], t) }),
                      (0, n.jsx)(d.A, {
                          grow: 1,
                          className: a()(u.gM, t),
                          style: { maxWidth: this.placeholderMaxWidth },
                      }),
                  ],
              });
    }
}
s.d(l, {}, { A: h });
