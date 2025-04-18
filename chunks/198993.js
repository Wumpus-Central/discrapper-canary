n.d(t, {
    ZP: () => N,
    c2: () => x,
    cK: () => p
});
var r,
    i,
    s,
    o = n(200651),
    l = n(192379),
    a = n(120356),
    c = n.n(a),
    u = n(512092),
    d = n(634715);
function h(e, t, n) {
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
function g(e) {
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
                h(e, t, n[t]);
            });
    }
    return e;
}
var p = (((r = {}).SIZE_40 = 'SIZE_40'), (r.SIZE_60 = 'SIZE_60'), r);
let m = Object.freeze({
        SIZE_40: 'size-40',
        SIZE_60: 'size-60'
    }),
    f = n(515695);
class _ extends (i = l.PureComponent) {
    render() {
        let e = this.props,
            { className: t, text: n } = e,
            r = (function (e, t) {
                if (null == e) return {};
                var n,
                    r,
                    i = (function (e, t) {
                        if (null == e) return {};
                        var n,
                            r,
                            i = {},
                            s = Object.keys(e);
                        for (r = 0; r < s.length; r++) (n = s[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                        return i;
                    })(e, t);
                if (Object.getOwnPropertySymbols) {
                    var s = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < s.length; r++) (n = s[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
                }
                return i;
            })(e, ['className', 'text']);
        return (0, o.jsx)('div', {
            style: {
                width: r.size,
                height: r.size,
                backgroundColor: r.bgColor
            },
            className: c()(d.qrCodeContainer, t),
            children: (0, o.jsx)(
                u.default,
                g(
                    {
                        value: n,
                        level: 'M'
                    },
                    r
                )
            )
        });
    }
}
h(_, 'defaultProps', {
    size: 128,
    bgColor: '#ffffff',
    fgColor: '#000000'
});
class x extends (s = l.PureComponent) {
    render() {
        let { overlaySize: e } = this.props,
            t = m[null != e ? e : 'SIZE_40'];
        return (0, o.jsxs)('div', {
            className: d.qrCodeOverlayContainer,
            children: [
                (0, o.jsx)(_, g({}, this.props)),
                (0, o.jsx)('div', {
                    className: d.qrCodeOverlay,
                    children: (0, o.jsx)('img', {
                        className: d[t],
                        src: f,
                        alt: ''
                    })
                })
            ]
        });
    }
}
h(x, 'defaultProps', {
    size: 144,
    bgColor: '#ffffff',
    fgColor: '#000000'
});
let N = _;
