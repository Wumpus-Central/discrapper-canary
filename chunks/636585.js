n.d(t, { A: () => p }), n(321073);
var l = n(477900),
    i = n(582128),
    s = n(503698),
    r = n.n(s),
    a = n(778712),
    o = n(97808),
    u = n(983851),
    c = n(889227),
    d = n(621531),
    h = n(440155);
function m(e, t, n) {
    return (0, l.jsx)("div", { className: t, children: e }, n);
}
class f extends i.PureComponent {
    _ref;
    static defaultProps = { max: 10, renderMoreUsers: m, size: a._3.SIZE_24 };
    defaultRenderUser = (e, t, n, i) => {
        let { onClick: s, size: u, guildId: m } = this.props,
            f = e instanceof c.A ? e : null != e ? e.user : null;
        return null == f
            ? (0, l.jsx)("div", { className: r()(d.F2, t), style: { width: (0, a.FT)(u), height: (0, a.FT)(u) } }, n)
            : (0, l.jsx)(
                  o.eu,
                  {
                      tabIndex: 0,
                      src: f.getAvatarURL(m, (0, a.FT)(u)),
                      size: u,
                      "aria-label": f.username,
                      className: r()(t, h.or),
                      onClick: (e) => (null != s ? s(e, f, this._ref) : null),
                  },
                  f.id,
              );
    };
    renderUsers() {
        let { users: e, max: t, renderUser: n = this.defaultRenderUser, renderMoreUsers: l } = this.props,
            i = [],
            s = e.length === t ? e.length : t - 1,
            r = 0;
        for (; r < s && r < e.length; ) {
            let t = r === e.length - 1;
            i.push(n(e[r] || null, t ? null : d.hC, `user-${r}`, t)), r++;
        }
        if (r < e.length) {
            let t = Math.min(e.length - r, 99);
            i.push(l(`+${t}`, d.In, "more-users", t));
        }
        return i;
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
            className: r()(e, d.kL),
            ref: (e) => {
                this._ref = e;
            },
            children: [this.renderIcon(), this.renderUsers()],
        });
    }
}
let p = f;
