n.d(t, { Z: () => h }), n(539854), n(388685);
var r,
    i = n(200651),
    a = n(192379),
    o = n(120356),
    s = n.n(o),
    l = n(481060),
    c = n(598077),
    u = n(436980),
    d = n(264589);
function f(e, t, n) {
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
function _(e, t, n) {
    return (0, i.jsx)(
        'div',
        {
            className: t,
            children: e
        },
        n
    );
}
class p extends (r = a.PureComponent) {
    renderUsers() {
        let { users: e, max: t, renderUser: n = this.defaultRenderUser, renderMoreUsers: r } = this.props,
            i = [],
            a = e.length === t ? e.length : t - 1,
            o = 0;
        for (; o < a && o < e.length; ) {
            let t = o === e.length - 1;
            i.push(n(e[o] || null, t ? null : u.avatarMasked, 'user-'.concat(o), t)), o++;
        }
        if (o < e.length) {
            let t = Math.min(e.length - o, 99);
            i.push(r('+'.concat(t), u.moreUsers, 'more-users', t));
        }
        return i;
    }
    renderIcon() {
        return this.props.icon
            ? (0, i.jsx)('div', {
                  className: u.iconContainer,
                  children: (0, i.jsx)(l.gj8, {
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
        return (0, i.jsxs)('div', {
            className: s()(e, u.container),
            ref: (e) => {
                this._ref = e;
            },
            children: [this.renderIcon(), this.renderUsers()]
        });
    }
    constructor(...e) {
        super(...e),
            f(this, '_ref', void 0),
            f(this, 'defaultRenderUser', (e, t, n, r) => {
                let { onClick: a, size: o, guildId: f } = this.props,
                    _ = e instanceof c.Z ? e : null != e ? e.user : null;
                return null == _
                    ? (0, i.jsx)('div', { className: s()(u.emptyUser, t) }, n)
                    : (0, i.jsx)(
                          l.qEK,
                          {
                              tabIndex: 0,
                              src: _.getAvatarURL(f, (0, l.pxk)(o)),
                              size: o,
                              'aria-label': _.username,
                              className: s()(t, d.cursorPointer, u.avatarSize),
                              onClick: (e) => (null != a ? a(e, _, this._ref) : null)
                          },
                          _.id
                      );
            });
    }
}
f(p, 'defaultProps', {
    max: 10,
    renderMoreUsers: _,
    size: l.EFr.SIZE_24
});
let h = p;
