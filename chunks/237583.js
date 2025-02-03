n.d(t, { Z: () => g }), n(653041), n(47120);
var i,
    r = n(200651),
    a = n(192379),
    l = n(120356),
    o = n.n(l),
    s = n(481060),
    c = n(598077),
    d = n(231220),
    u = n(107720);
function m(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
class p extends (i = a.PureComponent) {
    renderUsers() {
        let { users: e, max: t, renderUser: n = this.defaultRenderUser, renderMoreUsers: i } = this.props,
            r = [],
            a = e.length === t ? e.length : t - 1,
            l = 0;
        for (; l < a && l < e.length; ) {
            let t = l === e.length - 1;
            r.push(n(e[l] || null, t ? null : d.avatarMasked, 'user-'.concat(l), t)), l++;
        }
        if (l < e.length) {
            let t = Math.min(e.length - l, 99);
            r.push(i('+'.concat(t), d.moreUsers, 'more-users', t));
        }
        return r;
    }
    renderIcon() {
        return this.props.icon
            ? (0, r.jsx)('div', {
                  className: d.iconContainer,
                  children: (0, r.jsx)(s.gj8, {
                      size: 'xs',
                      color: 'currentColor',
                      colorClass: d.foreground,
                      className: d.icon
                  })
              })
            : null;
    }
    render() {
        let { className: e } = this.props;
        return (0, r.jsxs)('div', {
            className: o()(e, d.container),
            ref: (e) => (this._ref = e),
            children: [this.renderIcon(), this.renderUsers()]
        });
    }
    constructor(...e) {
        super(...e),
            m(this, '_ref', void 0),
            m(this, 'defaultRenderUser', (e, t, n, i) => {
                let { onClick: a, size: l, guildId: m } = this.props,
                    p = e instanceof c.Z ? e : null != e ? e.user : null;
                return null == p
                    ? (0, r.jsx)('div', { className: o()(d.emptyUser, t) }, n)
                    : (0, r.jsx)(
                          s.qEK,
                          {
                              tabIndex: 0,
                              src: p.getAvatarURL(m, (0, s.pxk)(l)),
                              size: l,
                              'aria-label': p.username,
                              className: o()(t, u.cursorPointer, d.avatarSize),
                              onClick: (e) => (null != a ? a(e, p, this._ref) : null)
                          },
                          p.id
                      );
            });
    }
}
m(p, 'defaultProps', {
    max: 10,
    renderMoreUsers: function (e, t, n) {
        return (0, r.jsx)(
            'div',
            {
                className: t,
                children: e
            },
            n
        );
    },
    size: s.EFr.SIZE_24
});
let g = p;
