n.d(t, { ZP: () => j });
var i,
    r,
    l = n(54381),
    a = n(473749),
    o = n(120356),
    s = n.n(o),
    c = n(481060),
    d = n(600164),
    u = n(352543);
function p(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function m(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            i.forEach(function (t) {
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
                      var i = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, i);
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
        i,
        r = (function (e, t) {
            if (null == e) return {};
            var n,
                i,
                r = {},
                l = Object.keys(e);
            for (i = 0; i < l.length; i++) (n = l[i]), t.indexOf(n) >= 0 || (r[n] = e[n]);
            return r;
        })(e, t);
    if (Object.getOwnPropertySymbols) {
        var l = Object.getOwnPropertySymbols(e);
        for (i = 0; i < l.length; i++)
            (n = l[i]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
    }
    return r;
}
class f extends (i = a.PureComponent) {
    render() {
        let e = this.props,
            { scrollable: t } = e,
            n = g(e, ["scrollable"]);
        return t
            ? (0, l.jsx)("aside", {
                  className: u.sidebarScrollable,
                  children: (0, l.jsx)(c.Ttm, {
                      fade: !0,
                      className: u.scroller,
                      children: (0, l.jsx)(d.Z.Child, b(m({}, n), { wrap: !0 })),
                  }),
              })
            : (0, l.jsx)(d.Z.Child, b(m({}, n), { wrap: !0 }));
    }
}
p(f, "defaultProps", {
    basis: 232,
    grow: 0,
    shrink: 0,
});
class h extends a.PureComponent {
    render() {
        let e = this.props,
            { className: t } = e,
            n = g(e, ["className"]);
        return (0, l.jsx)(
            d.Z.Child,
            m(
                {
                    className: s()(u.content, t),
                    wrap: !0,
                },
                n,
            ),
        );
    }
}
class x extends (r = a.PureComponent) {
    render() {
        return (0, l.jsx)(d.Z, m({}, this.props));
    }
}
p(x, "defaultProps", {
    direction: d.Z.Direction.HORIZONTAL,
    justify: d.Z.Justify.START,
    align: d.Z.Align.START,
    wrap: d.Z.Wrap.NO_WRAP,
    shrink: 1,
    grow: 1,
    basis: "auto",
}),
    p(x, "Direction", d.Z.Direction),
    p(x, "Justify", d.Z.Justify),
    p(x, "Align", d.Z.Align),
    p(x, "Wrap", d.Z.Wrap),
    p(x, "Sidebar", f),
    p(x, "Content", h);
let j = x;
