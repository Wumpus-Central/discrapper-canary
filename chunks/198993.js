n.d(t, {
    ZP: () => x,
    c2: () => b,
    cK: () => g
});
var r,
    i,
    o,
    a = n(200651),
    l = n(192379),
    s = n(120356),
    c = n.n(s),
    u = n(512092),
    d = n(634715);
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
function h(e) {
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
var g = (((r = {}).SIZE_40 = 'SIZE_40'), (r.SIZE_60 = 'SIZE_60'), r);
let f = Object.freeze({
        SIZE_40: 'size-40',
        SIZE_60: 'size-60'
    }),
    m = n(515695);
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
                            o = Object.keys(e);
                        for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                        return i;
                    })(e, t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
                }
                return i;
            })(e, ['className', 'text']);
        return (0, a.jsx)('div', {
            style: {
                width: r.size,
                height: r.size,
                backgroundColor: r.bgColor
            },
            className: c()(d.qrCodeContainer, t),
            children: (0, a.jsx)(
                u.default,
                h(
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
p(_, 'defaultProps', {
    size: 128,
    bgColor: '#ffffff',
    fgColor: '#000000'
});
class b extends (o = l.PureComponent) {
    render() {
        let { overlaySize: e } = this.props,
            t = f[null != e ? e : 'SIZE_40'];
        return (0, a.jsxs)('div', {
            className: d.qrCodeOverlayContainer,
            children: [
                (0, a.jsx)(_, h({}, this.props)),
                (0, a.jsx)('div', {
                    className: d.qrCodeOverlay,
                    children: (0, a.jsx)('img', {
                        className: d[t],
                        src: m,
                        alt: ''
                    })
                })
            ]
        });
    }
}
p(b, 'defaultProps', {
    size: 144,
    bgColor: '#ffffff',
    fgColor: '#000000'
});
let x = _;
