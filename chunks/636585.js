n.d(t, {
    A: () => h,
}),
    n(321073),
    n(896048);
var r,
    i = n(627968),
    a = n(64700),
    s = n(503698),
    o = n.n(s),
    l = n(397927),
    c = n(427157),
    u = n(278885),
    d = n(176465);

function f(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}

function p(e, t, n) {
    return (0, i.jsx)(
        "div",
        {
            className: t,
            children: e,
        },
        n,
    );
}
class _ extends (r = a.PureComponent) {
    renderUsers() {
        let { users: e, max: t, renderUser: n = this.defaultRenderUser, renderMoreUsers: r } = this.props,
            i = [],
            a = e.length === t ? e.length : t - 1,
            s = 0;
        for (; s < a && s < e.length; ) {
            let t = s === e.length - 1;
            i.push(n(e[s] || null, t ? null : u.hC, "user-".concat(s), t)), s++;
        }
        if (s < e.length) {
            let t = Math.min(e.length - s, 99);
            i.push(r("+".concat(t), u.In, "more-users", t));
        }
        return i;
    }
    renderIcon() {
        return this.props.icon
            ? (0, i.jsx)("div", {
                  className: u.zc,
                  children: (0, i.jsx)(l.HKD, {
                      size: "xs",
                      color: "currentColor",
                      colorClass: u.CU,
                      className: u.Kk,
                  }),
              })
            : null;
    }
    render() {
        let { className: e } = this.props;
        return (0, i.jsxs)("div", {
            className: o()(e, u.kL),
            ref: (e) => {
                this._ref = e;
            },
            children: [this.renderIcon(), this.renderUsers()],
        });
    }
    constructor(...e) {
        super(...e),
            f(this, "_ref", void 0),
            f(this, "defaultRenderUser", (e, t, n, r) => {
                let { onClick: a, size: s, guildId: f } = this.props,
                    p = e instanceof c.A ? e : null != e ? e.user : null;
                return null == p
                    ? (0, i.jsx)(
                          "div",
                          {
                              className: o()(u.F2, t),
                              style: {
                                  width: (0, l.FT9)(s),
                                  height: (0, l.FT9)(s),
                              },
                          },
                          n,
                      )
                    : (0, i.jsx)(
                          l.euF,
                          {
                              tabIndex: 0,
                              src: p.getAvatarURL(f, (0, l.FT9)(s)),
                              size: s,
                              "aria-label": p.username,
                              className: o()(t, d.or),
                              onClick: (e) => (null != a ? a(e, p, this._ref) : null),
                          },
                          p.id,
                      );
            });
    }
}
f(_, "defaultProps", {
    max: 10,
    renderMoreUsers: p,
    size: l._3J.SIZE_24,
});
let h = _;
