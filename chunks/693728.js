n.d(t, { Z: () => h }), n(47120);
var r,
    i = n(200651),
    o = n(192379),
    a = n(120356),
    s = n.n(a),
    l = n(481060),
    c = n(600164),
    u = n(171076);
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
    [l.EFr.SIZE_32]: u.avatarSmall,
    [l.EFr.SIZE_40]: u.avatarLarge
};
class p extends (r = o.Component) {
    render() {
        let { type: e, avatarSize: t, className: n, childrenClassName: r, doNotAnimate: o } = this.props;
        return '2' === e
            ? (0, i.jsxs)('div', {
                  className: s()(u.multiplePlaceholder, u.multiplePlaceholderAnimated, n),
                  children: [
                      (0, i.jsxs)(c.Z, {
                          children: [(0, i.jsx)('div', { className: s()(u.placeholderAvatar, _[t], u.avatarMasked) }), (0, i.jsx)('div', { className: s()(u.placeholderAvatar, _[t], u.avatarMasked) }), (0, i.jsx)('div', { className: s()(u.placeholderAvatar, _[t]) })]
                      }),
                      (0, i.jsx)(c.Z, {
                          grow: 1,
                          className: u.mulitplePlaceholderUsername,
                          style: { maxWidth: this.placeholderMaxWidth }
                      })
                  ]
              })
            : (0, i.jsxs)(c.Z, {
                  className: s()(u.placeholder, !o && u.placeholderAnimated, n),
                  children: [
                      (0, i.jsx)('div', { className: s()(u.placeholderAvatar, _[t], r) }),
                      (0, i.jsx)(c.Z, {
                          grow: 1,
                          className: s()(u.placeholderUsername, r),
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
