(r.d(s, { A: () => f }), r(321073));
var l = r(477900),
    n = r(582128),
    t = r(503698),
    i = r.n(t),
    a = r(778712),
    h = r(97808),
    u = r(983851),
    c = r(889227),
    d = r(621531),
    o = r(440155);
function p(e, s, r) {
    return (0, l.jsx)("div", { className: s, children: e }, r);
}
class m extends n.PureComponent {
    _ref;
    static defaultProps = { max: 10, renderMoreUsers: p, size: a._3.SIZE_24 };
    defaultRenderUser = (e, s, r, n) => {
        let { onClick: t, size: u, guildId: p } = this.props,
            m = e instanceof c.A ? e : null != e ? e.user : null;
        return null == m
            ? (0, l.jsx)("div", { className: i()(d.F2, s), style: { width: (0, a.FT)(u), height: (0, a.FT)(u) } }, r)
            : (0, l.jsx)(
                  h.eu,
                  {
                      tabIndex: 0,
                      src: m.getAvatarURL(p, (0, a.FT)(u)),
                      size: u,
                      "aria-label": m.username,
                      className: i()(s, o.or),
                      onClick: (e) => (null != t ? t(e, m, this._ref) : null),
                  },
                  m.id,
              );
    };
    renderUsers() {
        let { users: e, max: s, renderUser: r = this.defaultRenderUser, renderMoreUsers: l } = this.props,
            n = [],
            t = e.length === s ? e.length : s - 1,
            i = 0;
        for (; i < t && i < e.length;) {
            let s = i === e.length - 1;
            (n.push(r(e[i] || null, s ? null : d.hC, `user-${i}`, s)), i++);
        }
        if (i < e.length) {
            let s = Math.min(e.length - i, 99);
            n.push(l(`+${s}`, d.In, "more-users", s));
        }
        return n;
    }
    renderIcon() {
        return this.props.icon
            ? (0, l.jsx)("div", {
                  className: d.zc,
                  children: (0, l.jsx)(u.H, { size: "xs", color: "currentColor", colorClass: d.CU, className: d.Kk }),
              })
            : null;
    }
    render() {
        let { className: e } = this.props;
        return (0, l.jsxs)("div", {
            className: i()(e, d.kL),
            ref: (e) => {
                this._ref = e;
            },
            children: [this.renderIcon(), this.renderUsers()],
        });
    }
}
let f = m;
