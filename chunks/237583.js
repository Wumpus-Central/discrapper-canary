n.d(t, { Z: () => g }), n(653041), n(47120);
var r,
    a = n(200651),
    i = n(192379),
    o = n(120356),
    l = n.n(o),
    s = n(481060),
    c = n(598077),
    d = n(525645),
    u = n(139766);
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
class _ extends (r = i.PureComponent) {
    renderUsers() {
        let { users: e, max: t, renderUser: n = this.defaultRenderUser, renderMoreUsers: r } = this.props,
            a = [],
            i = e.length === t ? e.length : t - 1,
            o = 0;
        for (; o < i && o < e.length; ) {
            let t = o === e.length - 1;
            a.push(n(e[o] || null, t ? null : d.avatarMasked, 'user-'.concat(o), t)), o++;
        }
        if (o < e.length) {
            let t = Math.min(e.length - o, 99);
            a.push(r('+'.concat(t), d.moreUsers, 'more-users', t));
        }
        return a;
    }
    renderIcon() {
        return this.props.icon
            ? (0, a.jsx)('div', {
                  className: d.iconContainer,
                  children: (0, a.jsx)(s.gj8, {
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
        return (0, a.jsxs)('div', {
            className: l()(e, d.container),
            ref: (e) => (this._ref = e),
            children: [this.renderIcon(), this.renderUsers()]
        });
    }
    constructor(...e) {
        super(...e),
            m(this, '_ref', void 0),
            m(this, 'defaultRenderUser', (e, t, n, r) => {
                let { onClick: i, size: o, guildId: m } = this.props,
                    _ = e instanceof c.Z ? e : null != e ? e.user : null;
                return null == _
                    ? (0, a.jsx)('div', { className: l()(d.emptyUser, t) }, n)
                    : (0, a.jsx)(
                          s.qEK,
                          {
                              tabIndex: 0,
                              src: _.getAvatarURL(m, (0, s.pxk)(o)),
                              size: o,
                              'aria-label': _.username,
                              className: l()(t, u.cursorPointer, d.avatarSize),
                              onClick: (e) => (null != i ? i(e, _, this._ref) : null)
                          },
                          _.id
                      );
            });
    }
}
m(_, 'defaultProps', {
    max: 10,
    renderMoreUsers: function (e, t, n) {
        return (0, a.jsx)(
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
let g = _;
