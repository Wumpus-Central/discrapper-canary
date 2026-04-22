"use strict";
n.d(t, { A: () => f }), n(321073);
var i = n(627968),
    l = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(778712),
    o = n(97808),
    c = n(983851),
    u = n(427157),
    d = n(672548),
    h = n(781004);
function m(e, t, n) {
    return (0, i.jsx)("div", { className: t, children: e }, n);
}
class p extends l.PureComponent {
    _ref;
    static defaultProps = { max: 10, renderMoreUsers: m, size: a._3.SIZE_24 };
    defaultRenderUser = (e, t, n, l) => {
        let { onClick: s, size: c, guildId: m } = this.props,
            p = e instanceof u.A ? e : null != e ? e.user : null;
        return null == p
            ? (0, i.jsx)("div", { className: r()(d.F2, t), style: { width: (0, a.FT)(c), height: (0, a.FT)(c) } }, n)
            : (0, i.jsx)(
                  o.eu,
                  {
                      tabIndex: 0,
                      src: p.getAvatarURL(m, (0, a.FT)(c)),
                      size: c,
                      "aria-label": p.username,
                      className: r()(t, h.or),
                      onClick: (e) => (null != s ? s(e, p, this._ref) : null),
                  },
                  p.id,
              );
    };
    renderUsers() {
        let { users: e, max: t, renderUser: n = this.defaultRenderUser, renderMoreUsers: i } = this.props,
            l = [],
            s = e.length === t ? e.length : t - 1,
            r = 0;
        for (; r < s && r < e.length; ) {
            let t = r === e.length - 1;
            l.push(n(e[r] || null, t ? null : d.hC, `user-${r}`, t)), r++;
        }
        if (r < e.length) {
            let t = Math.min(e.length - r, 99);
            l.push(i(`+${t}`, d.In, "more-users", t));
        }
        return l;
    }
    renderIcon() {
        return this.props.icon
            ? (0, i.jsx)("div", {
                  className: d.zc,
                  children: (0, i.jsx)(c.H, { size: "xs", color: "currentColor", colorClass: d.CU, className: d.Kk }),
              })
            : null;
    }
    render() {
        let { className: e } = this.props;
        return (0, i.jsxs)("div", {
            className: r()(e, d.kL),
            ref: (e) => {
                this._ref = e;
            },
            children: [this.renderIcon(), this.renderUsers()],
        });
    }
}
let f = p;
