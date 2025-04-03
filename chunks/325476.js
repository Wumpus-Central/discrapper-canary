n.d(t, { ZP: () => j });
var r,
    i,
    l = n(200651),
    o = n(192379),
    a = n(120356),
    s = n.n(a),
    c = n(481060),
    d = n(600164),
    u = n(416746);
function p(e, t, n) {
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
function m(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                p(e, t, n[t]);
            });
    }
    return e;
}
function b(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function g(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i = {},
                l = Object.keys(e);
            for (r = 0; r < l.length; r++) (n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
            return i;
        })(e, t);
    if (Object.getOwnPropertySymbols) {
        var l = Object.getOwnPropertySymbols(e);
        for (r = 0; r < l.length; r++) (n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
class f extends (r = o.PureComponent) {
    render() {
        let e = this.props,
            { scrollable: t } = e,
            n = g(e, ['scrollable']);
        return t
            ? (0, l.jsx)('aside', {
                  className: u.sidebarScrollable,
                  children: (0, l.jsx)(c.Ttm, {
                      fade: !0,
                      className: u.scroller,
                      children: (0, l.jsx)(d.Z.Child, b(m({}, n), { wrap: !0 }))
                  })
              })
            : (0, l.jsx)(d.Z.Child, b(m({}, n), { wrap: !0 }));
    }
}
p(f, 'defaultProps', {
    basis: 232,
    grow: 0,
    shrink: 0,
    className: u.sidebar
});
class h extends o.PureComponent {
    render() {
        let e = this.props,
            { className: t } = e,
            n = g(e, ['className']);
        return (0, l.jsx)(
            d.Z.Child,
            m(
                {
                    className: s()(u.content, t),
                    wrap: !0
                },
                n
            )
        );
    }
}
class x extends (i = o.PureComponent) {
    render() {
        return (0, l.jsx)(d.Z, m({}, this.props));
    }
}
p(x, 'defaultProps', {
    className: u.layout,
    direction: d.Z.Direction.HORIZONTAL,
    justify: d.Z.Justify.START,
    align: d.Z.Align.START,
    wrap: d.Z.Wrap.NO_WRAP,
    shrink: 1,
    grow: 1,
    basis: 'auto'
}),
    p(x, 'Direction', d.Z.Direction),
    p(x, 'Justify', d.Z.Justify),
    p(x, 'Align', d.Z.Align),
    p(x, 'Wrap', d.Z.Wrap),
    p(x, 'Sidebar', f),
    p(x, 'Content', h);
let j = x;
