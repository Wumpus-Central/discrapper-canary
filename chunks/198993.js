t.d(r, {
    c2: function () {
        return h;
    },
    cK: function () {
        return n;
    }
});
var o,
    n,
    s,
    i,
    l = t(200651),
    a = t(192379),
    c = t(120356),
    d = t.n(c),
    C = t(235580),
    u = t(982823);
function f(e, r, t) {
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
((o = n || (n = {})).SIZE_40 = 'SIZE_40'), (o.SIZE_60 = 'SIZE_60');
let m = Object.freeze({
        SIZE_40: 'size-40',
        SIZE_60: 'size-60'
    }),
    b = t(515695);
class x extends (s = a.PureComponent) {
    render() {
        let { className: e, text: r, ...t } = this.props;
        return (0, l.jsx)('div', {
            style: {
                width: t.size,
                height: t.size,
                backgroundColor: t.bgColor
            },
            className: d()(u.qrCodeContainer, e),
            children: (0, l.jsx)(C.default, {
                value: r,
                level: 'M',
                ...t
            })
        });
    }
}
f(x, 'defaultProps', {
    size: 128,
    bgColor: '#ffffff',
    fgColor: '#000000'
});
class h extends (i = a.PureComponent) {
    render() {
        let { overlaySize: e } = this.props,
            r = m[null != e ? e : 'SIZE_40'];
        return (0, l.jsxs)('div', {
            className: u.qrCodeOverlayContainer,
            children: [
                (0, l.jsx)(x, { ...this.props }),
                (0, l.jsx)('div', {
                    className: u.qrCodeOverlay,
                    children: (0, l.jsx)('img', {
                        className: u[r],
                        src: b,
                        alt: ''
                    })
                })
            ]
        });
    }
}
f(h, 'defaultProps', {
    size: 144,
    bgColor: '#ffffff',
    fgColor: '#000000'
}),
    (r.ZP = x);
