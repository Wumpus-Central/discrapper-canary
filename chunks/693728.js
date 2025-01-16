var i,
    a,
    s = r(47120);
var o = r(200651),
    l = r(192379),
    u = r(120356),
    c = r.n(u),
    d = r(481060),
    f = r(600164),
    _ = r(862380);
function h(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
!(function (e) {
    (e.SINGLE_AVATAR = '1'), (e.MULTIPLE_AVATAR = '2');
})(i || (i = {}));
let p = {
    [d.AvatarSizes.SIZE_32]: _.avatarSmall,
    [d.AvatarSizes.SIZE_40]: _.avatarLarge
};
class m extends (a = l.Component) {
    render() {
        let { type: e, avatarSize: n, className: r } = this.props;
        return '2' === e
            ? (0, o.jsxs)('div', {
                  className: c()(_.multiplePlaceholder, r),
                  children: [
                      (0, o.jsxs)(f.Z, {
                          children: [(0, o.jsx)('div', { className: c()(_.placeholderAvatar, p[n], _.avatarMasked) }), (0, o.jsx)('div', { className: c()(_.placeholderAvatar, p[n], _.avatarMasked) }), (0, o.jsx)('div', { className: c()(_.placeholderAvatar, p[n]) })]
                      }),
                      (0, o.jsx)(f.Z, {
                          grow: 1,
                          className: _.mulitplePlaceholderUsername,
                          style: { maxWidth: this.placeholderMaxWidth }
                      })
                  ]
              })
            : (0, o.jsxs)(f.Z, {
                  className: c()(_.placeholder, r),
                  children: [
                      (0, o.jsx)('div', { className: c()(_.placeholderAvatar, p[n]) }),
                      (0, o.jsx)(f.Z, {
                          grow: 1,
                          className: _.placeholderUsername,
                          style: { maxWidth: this.placeholderMaxWidth }
                      })
                  ]
              });
    }
    constructor(...e) {
        super(...e), h(this, 'placeholderMaxWidth', ''.concat(Math.floor(40 * Math.random()) + 40, '%'));
    }
}
h(m, 'defaultProps', { type: '1' }), h(m, 'Types', i), (n.Z = m);
