n.d(t, { Z: () => C }), n(653041), n(47120);
var i,
    l = n(200651),
    r = n(192379),
    s = n(120356),
    a = n.n(s),
    o = n(481060),
    d = n(598077),
    u = n(231220),
    c = n(107720);
function h(e, t, n) {
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
class g extends (i = r.PureComponent) {
    renderUsers() {
        let { users: e, max: t, renderUser: n = this.defaultRenderUser, renderMoreUsers: i } = this.props,
            l = [],
            r = e.length === t ? e.length : t - 1,
            s = 0;
        for (; s < r && s < e.length; ) {
            let t = s === e.length - 1;
            l.push(n(e[s] || null, t ? null : u.avatarMasked, 'user-'.concat(s), t)), s++;
        }
        if (s < e.length) {
            let t = Math.min(e.length - s, 99);
            l.push(i('+'.concat(t), u.moreUsers, 'more-users', t));
        }
        return l;
    }
    renderIcon() {
        return this.props.icon
            ? (0, l.jsx)('div', {
                  className: u.iconContainer,
                  children: (0, l.jsx)(o.gj8, {
                      size: 'xs',
                      color: 'currentColor',
                      colorClass: u.foreground,
                      className: u.icon
                  })
              })
            : null;
    }
    render() {
        let { className: e } = this.props;
        return (0, l.jsxs)('div', {
            className: a()(e, u.container),
            ref: (e) => (this._ref = e),
            children: [this.renderIcon(), this.renderUsers()]
        });
    }
    constructor(...e) {
        super(...e),
            h(this, '_ref', void 0),
            h(this, 'defaultRenderUser', (e, t, n, i) => {
                let { onClick: r, size: s, guildId: h } = this.props,
                    g = e instanceof d.Z ? e : null != e ? e.user : null;
                return null == g
                    ? (0, l.jsx)('div', { className: a()(u.emptyUser, t) }, n)
                    : (0, l.jsx)(
                          o.qEK,
                          {
                              tabIndex: 0,
                              src: g.getAvatarURL(h, (0, o.pxk)(s)),
                              size: s,
                              'aria-label': g.username,
                              className: a()(t, c.cursorPointer, u.avatarSize),
                              onClick: (e) => (null != r ? r(e, g, this._ref) : null)
                          },
                          g.id
                      );
            });
    }
}
h(g, 'defaultProps', {
    max: 10,
    renderMoreUsers: function (e, t, n) {
        return (0, l.jsx)(
            'div',
            {
                className: t,
                children: e
            },
            n
        );
    },
    size: o.EFr.SIZE_24
});
let C = g;
