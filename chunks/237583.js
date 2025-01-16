n(653041), n(47120);
var r,
    i = n(200651),
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
class p extends (r = a.PureComponent) {
    renderUsers() {
        let { users: e, max: t, renderUser: n = this.defaultRenderUser, renderMoreUsers: r } = this.props,
            i = [],
            a = e.length === t ? e.length : t - 1,
            l = 0;
        for (; l < a && l < e.length; ) {
            let t = l === e.length - 1;
            i.push(n(e[l] || null, t ? null : d.avatarMasked, 'user-'.concat(l), t)), l++;
        }
        if (l < e.length) {
            let t = Math.min(e.length - l, 99);
            i.push(r('+'.concat(t), d.moreUsers, 'more-users', t));
        }
        return i;
    }
    renderIcon() {
        return this.props.icon
            ? (0, i.jsx)('div', {
                  className: d.iconContainer,
                  children: (0, i.jsx)(s.VoiceNormalIcon, {
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
        return (0, i.jsxs)('div', {
            className: o()(e, d.container),
            ref: (e) => (this._ref = e),
            children: [this.renderIcon(), this.renderUsers()]
        });
    }
    constructor(...e) {
        super(...e),
            m(this, '_ref', void 0),
            m(this, 'defaultRenderUser', (e, t, n, r) => {
                let { onClick: a, size: l, guildId: m } = this.props,
                    p = e instanceof c.Z ? e : null != e ? e.user : null;
                return null == p
                    ? (0, i.jsx)('div', { className: o()(d.emptyUser, t) }, n)
                    : (0, i.jsx)(
                          s.Avatar,
                          {
                              tabIndex: 0,
                              src: p.getAvatarURL(m, (0, s.getAvatarSize)(l)),
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
        return (0, i.jsx)(
            'div',
            {
                className: t,
                children: e
            },
            n
        );
    },
    size: s.AvatarSizes.SIZE_24
}),
    (t.Z = p);
