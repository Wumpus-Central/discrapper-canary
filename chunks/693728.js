var i,
    a,
    o = r(47120);
var s = r(200651),
    l = r(192379),
    u = r(120356),
    c = r.n(u),
    d = r(481060),
    f = r(600164),
    p = r(862380);
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
let _ = {
    [d.AvatarSizes.SIZE_32]: p.avatarSmall,
    [d.AvatarSizes.SIZE_40]: p.avatarLarge
};
class m extends (a = l.Component) {
    render() {
        let { type: e, avatarSize: n, className: r } = this.props;
        return '2' === e
            ? (0, s.jsxs)('div', {
                  className: c()(p.multiplePlaceholder, r),
                  children: [
                      (0, s.jsxs)(f.Z, {
                          children: [(0, s.jsx)('div', { className: c()(p.placeholderAvatar, _[n], p.avatarMasked) }), (0, s.jsx)('div', { className: c()(p.placeholderAvatar, _[n], p.avatarMasked) }), (0, s.jsx)('div', { className: c()(p.placeholderAvatar, _[n]) })]
                      }),
                      (0, s.jsx)(f.Z, {
                          grow: 1,
                          className: p.mulitplePlaceholderUsername,
                          style: { maxWidth: this.placeholderMaxWidth }
                      })
                  ]
              })
            : (0, s.jsxs)(f.Z, {
                  className: c()(p.placeholder, r),
                  children: [
                      (0, s.jsx)('div', { className: c()(p.placeholderAvatar, _[n]) }),
                      (0, s.jsx)(f.Z, {
                          grow: 1,
                          className: p.placeholderUsername,
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
