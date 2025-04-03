t.d(r, {
    ZP: () => h,
    c2: () => g,
    cK: () => m
});
var o,
    n,
    s,
    a = t(200651),
    i = t(192379),
    l = t(120356),
    c = t.n(l),
    d = t(512092),
    u = t(634715);
function C(e, r, t) {
    return (
        r in e
            ? Object.defineProperty(e, r, {
                  value: t,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[r] = t),
        e
    );
}
function f(e) {
    for (var r = 1; r < arguments.length; r++) {
        var t = null != arguments[r] ? arguments[r] : {},
            o = Object.keys(t);
        'function' == typeof Object.getOwnPropertySymbols &&
            (o = o.concat(
                Object.getOwnPropertySymbols(t).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                })
            )),
            o.forEach(function (r) {
                C(e, r, t[r]);
            });
    }
    return e;
}
var m = (((o = {}).SIZE_40 = 'SIZE_40'), (o.SIZE_60 = 'SIZE_60'), o);
let x = Object.freeze({
        SIZE_40: 'size-40',
        SIZE_60: 'size-60'
    }),
    p = t(515695);
class b extends (n = i.PureComponent) {
    render() {
        let e = this.props,
            { className: r, text: t } = e,
            o = (function (e, r) {
                if (null == e) return {};
                var t,
                    o,
                    n = (function (e, r) {
                        if (null == e) return {};
                        var t,
                            o,
                            n = {},
                            s = Object.keys(e);
                        for (o = 0; o < s.length; o++) (t = s[o]), r.indexOf(t) >= 0 || (n[t] = e[t]);
                        return n;
                    })(e, r);
                if (Object.getOwnPropertySymbols) {
                    var s = Object.getOwnPropertySymbols(e);
                    for (o = 0; o < s.length; o++) (t = s[o]), !(r.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (n[t] = e[t]);
                }
                return n;
            })(e, ['className', 'text']);
        return (0, a.jsx)('div', {
            style: {
                width: o.size,
                height: o.size,
                backgroundColor: o.bgColor
            },
            className: c()(u.qrCodeContainer, r),
            children: (0, a.jsx)(
                d.default,
                f(
                    {
                        value: t,
                        level: 'M'
                    },
                    o
                )
            )
        });
    }
}
C(b, 'defaultProps', {
    size: 128,
    bgColor: '#ffffff',
    fgColor: '#000000'
});
class g extends (s = i.PureComponent) {
    render() {
        let { overlaySize: e } = this.props,
            r = x[null != e ? e : 'SIZE_40'];
        return (0, a.jsxs)('div', {
            className: u.qrCodeOverlayContainer,
            children: [
                (0, a.jsx)(b, f({}, this.props)),
                (0, a.jsx)('div', {
                    className: u.qrCodeOverlay,
                    children: (0, a.jsx)('img', {
                        className: u[r],
                        src: p,
                        alt: ''
                    })
                })
            ]
        });
    }
}
C(g, 'defaultProps', {
    size: 144,
    bgColor: '#ffffff',
    fgColor: '#000000'
});
let h = b;
