"use strict";
n.d(t, { A: () => f }), n(321073);
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(397927),
    l = n(427157),
    u = n(175268),
    c = n(75596);
function d(e, t, n) {
    return (0, r.jsx)("div", { className: t, children: e }, n);
}
class _ extends i.PureComponent {
    _ref;
    static defaultProps = { max: 10, renderMoreUsers: d, size: o._3J.SIZE_24 };
    defaultRenderUser = (e, t, n, i) => {
        let { onClick: s, size: d, guildId: _ } = this.props,
            f = e instanceof l.A ? e : null != e ? e.user : null;
        return null == f
            ? (0, r.jsx)("div", { className: a()(u.F2, t), style: { width: (0, o.FT9)(d), height: (0, o.FT9)(d) } }, n)
            : (0, r.jsx)(
                  o.euF,
                  {
                      tabIndex: 0,
                      src: f.getAvatarURL(_, (0, o.FT9)(d)),
                      size: d,
                      "aria-label": f.username,
                      className: a()(t, c.or),
                      onClick: (e) => (null != s ? s(e, f, this._ref) : null),
                  },
                  f.id,
              );
    };
    renderUsers() {
        let { users: e, max: t, renderUser: n = this.defaultRenderUser, renderMoreUsers: r } = this.props,
            i = [],
            s = e.length === t ? e.length : t - 1,
            a = 0;
        for (; a < s && a < e.length; ) {
            let t = a === e.length - 1;
            i.push(n(e[a] || null, t ? null : u.hC, `user-${a}`, t)), a++;
        }
        if (a < e.length) {
            let t = Math.min(e.length - a, 99);
            i.push(r(`+${t}`, u.In, "more-users", t));
        }
        return i;
    }
    renderIcon() {
        return this.props.icon
            ? (0, r.jsx)("div", {
                  className: u.zc,
                  children: (0, r.jsx)(o.HKD, { size: "xs", color: "currentColor", colorClass: u.CU, className: u.Kk }),
              })
            : null;
    }
    render() {
        let { className: e } = this.props;
        return (0, r.jsxs)("div", {
            className: a()(e, u.kL),
            ref: (e) => {
                this._ref = e;
            },
            children: [this.renderIcon(), this.renderUsers()],
        });
    }
}
let f = _;
