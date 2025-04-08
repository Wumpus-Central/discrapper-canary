r.d(t, { Z: () => m }), r(539854), r(388685);
var n,
    a = r(200651),
    o = r(192379),
    i = r(120356),
    l = r.n(i),
    s = r(481060),
    c = r(598077),
    u = r(436980),
    d = r(264589);
function p(e, t, r) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = r),
        e
    );
}
class f extends (n = o.PureComponent) {
    renderUsers() {
        let { users: e, max: t, renderUser: r = this.defaultRenderUser, renderMoreUsers: n } = this.props,
            a = [],
            o = e.length === t ? e.length : t - 1,
            i = 0;
        for (; i < o && i < e.length; ) {
            let t = i === e.length - 1;
            a.push(r(e[i] || null, t ? null : u.avatarMasked, 'user-'.concat(i), t)), i++;
        }
        if (i < e.length) {
            let t = Math.min(e.length - i, 99);
            a.push(n('+'.concat(t), u.moreUsers, 'more-users', t));
        }
        return a;
    }
    renderIcon() {
        return this.props.icon
            ? (0, a.jsx)('div', {
                  className: u.iconContainer,
                  children: (0, a.jsx)(s.gj8, {
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
        return (0, a.jsxs)('div', {
            className: l()(e, u.container),
            ref: (e) => {
                this._ref = e;
            },
            children: [this.renderIcon(), this.renderUsers()]
        });
    }
    constructor(...e) {
        super(...e),
            p(this, '_ref', void 0),
            p(this, 'defaultRenderUser', (e, t, r, n) => {
                let { onClick: o, size: i, guildId: p } = this.props,
                    f = e instanceof c.Z ? e : null != e ? e.user : null;
                return null == f
                    ? (0, a.jsx)('div', { className: l()(u.emptyUser, t) }, r)
                    : (0, a.jsx)(
                          s.qEK,
                          {
                              tabIndex: 0,
                              src: f.getAvatarURL(p, (0, s.pxk)(i)),
                              size: i,
                              'aria-label': f.username,
                              className: l()(t, d.cursorPointer, u.avatarSize),
                              onClick: (e) => (null != o ? o(e, f, this._ref) : null)
                          },
                          f.id
                      );
            });
    }
}
p(f, 'defaultProps', {
    max: 10,
    renderMoreUsers: function (e, t, r) {
        return (0, a.jsx)(
            'div',
            {
                className: t,
                children: e
            },
            r
        );
    },
    size: s.EFr.SIZE_24
});
let m = f;
