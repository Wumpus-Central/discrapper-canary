n.d(t, { Z: () => h }), n(47120);
var i,
    r = n(200651),
    a = n(192379),
    s = n(120356),
    o = n.n(s),
    l = n(481060),
    u = n(600164),
    c = n(748509);
function d(e, t, n) {
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
var f = (function (e) {
    return (e.SINGLE_AVATAR = '1'), (e.MULTIPLE_AVATAR = '2'), e;
})(f || {});
let _ = {
    [l.EFr.SIZE_32]: c.avatarSmall,
    [l.EFr.SIZE_40]: c.avatarLarge
};
class p extends (i = a.Component) {
    render() {
        let { type: e, avatarSize: t, className: n } = this.props;
        return '2' === e
            ? (0, r.jsxs)('div', {
                  className: o()(c.multiplePlaceholder, n),
                  children: [
                      (0, r.jsxs)(u.Z, {
                          children: [(0, r.jsx)('div', { className: o()(c.placeholderAvatar, _[t], c.avatarMasked) }), (0, r.jsx)('div', { className: o()(c.placeholderAvatar, _[t], c.avatarMasked) }), (0, r.jsx)('div', { className: o()(c.placeholderAvatar, _[t]) })]
                      }),
                      (0, r.jsx)(u.Z, {
                          grow: 1,
                          className: c.mulitplePlaceholderUsername,
                          style: { maxWidth: this.placeholderMaxWidth }
                      })
                  ]
              })
            : (0, r.jsxs)(u.Z, {
                  className: o()(c.placeholder, n),
                  children: [
                      (0, r.jsx)('div', { className: o()(c.placeholderAvatar, _[t]) }),
                      (0, r.jsx)(u.Z, {
                          grow: 1,
                          className: c.placeholderUsername,
                          style: { maxWidth: this.placeholderMaxWidth }
                      })
                  ]
              });
    }
    constructor(...e) {
        super(...e), d(this, 'placeholderMaxWidth', ''.concat(Math.floor(40 * Math.random()) + 40, '%'));
    }
}
d(p, 'defaultProps', { type: '1' }), d(p, 'Types', f);
let h = p;
