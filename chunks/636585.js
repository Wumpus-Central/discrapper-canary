"use strict";
n.d(t, { A: () => f }), n(321073);
var l = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(778712),
    o = n(97808),
    c = n(983851),
    u = n(889227),
    d = n(175268),
    h = n(75596);
function m(e, t, n) {
    return (0, l.jsx)("div", { className: t, children: e }, n);
}
class p extends i.PureComponent {
    _ref;
    static defaultProps = { max: 10, renderMoreUsers: m, size: r._3.SIZE_24 };
    defaultRenderUser = (e, t, n, i) => {
        let { onClick: s, size: c, guildId: m } = this.props,
            p = e instanceof u.A ? e : null != e ? e.user : null;
        return null == p
            ? (0, l.jsx)("div", { className: a()(d.F2, t), style: { width: (0, r.FT)(c), height: (0, r.FT)(c) } }, n)
            : (0, l.jsx)(
                  o.eu,
                  {
                      tabIndex: 0,
                      src: p.getAvatarURL(m, (0, r.FT)(c)),
                      size: c,
                      "aria-label": p.username,
                      className: a()(t, h.or),
                      onClick: (e) => (null != s ? s(e, p, this._ref) : null),
                  },
                  p.id,
              );
    };
    renderUsers() {
        let { users: e, max: t, renderUser: n = this.defaultRenderUser, renderMoreUsers: l } = this.props,
            i = [],
            s = e.length === t ? e.length : t - 1,
            a = 0;
        for (; a < s && a < e.length; ) {
            let t = a === e.length - 1;
            i.push(n(e[a] || null, t ? null : d.hC, `user-${a}`, t)), a++;
        }
        if (a < e.length) {
            let t = Math.min(e.length - a, 99);
            i.push(l(`+${t}`, d.In, "more-users", t));
        }
        return i;
    }
    renderIcon() {
        return this.props.icon
            ? (0, l.jsx)("div", {
                  className: d.zc,
                  children: (0, l.jsx)(c.H, { size: "xs", color: "currentColor", colorClass: d.CU, className: d.Kk }),
              })
            : null;
    }
    render() {
        let { className: e } = this.props;
        return (0, l.jsxs)("div", {
            className: a()(e, d.kL),
            ref: (e) => {
                this._ref = e;
            },
            children: [this.renderIcon(), this.renderUsers()],
        });
    }
}
let f = p;
