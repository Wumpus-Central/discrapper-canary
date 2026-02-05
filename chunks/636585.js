"use strict";
n.d(t, { A: () => f }), n(321073);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(397927),
    l = n(427157),
    u = n(278885),
    c = n(176465);
function d(e, t, n) {
    return (0, r.jsx)("div", { className: t, children: e }, n);
}
class _ extends i.PureComponent {
    _ref;
    static defaultProps = { max: 10, renderMoreUsers: d, size: o._3J.SIZE_24 };
    defaultRenderUser = (e, t, n, i) => {
        let { onClick: a, size: d, guildId: _ } = this.props,
            f = e instanceof l.A ? e : null != e ? e.user : null;
        return null == f
            ? (0, r.jsx)("div", { className: s()(u.F2, t), style: { width: (0, o.FT9)(d), height: (0, o.FT9)(d) } }, n)
            : (0, r.jsx)(
                  o.euF,
                  {
                      tabIndex: 0,
                      src: f.getAvatarURL(_, (0, o.FT9)(d)),
                      size: d,
                      "aria-label": f.username,
                      className: s()(t, c.or),
                      onClick: (e) => (null != a ? a(e, f, this._ref) : null),
                  },
                  f.id,
              );
    };
    renderUsers() {
        let { users: e, max: t, renderUser: n = this.defaultRenderUser, renderMoreUsers: r } = this.props,
            i = [],
            a = e.length === t ? e.length : t - 1,
            s = 0;
        for (; s < a && s < e.length; ) {
            let t = s === e.length - 1;
            i.push(n(e[s] || null, t ? null : u.hC, `user-${s}`, t)), s++;
        }
        if (s < e.length) {
            let t = Math.min(e.length - s, 99);
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
            className: s()(e, u.kL),
            ref: (e) => {
                this._ref = e;
            },
            children: [this.renderIcon(), this.renderUsers()],
        });
    }
}
let f = _;
