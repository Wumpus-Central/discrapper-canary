t.d(r, {
    ZP: () => v,
    c2: () => h,
    cK: () => m
});
var o,
    s,
    n,
    a = t(200651),
    i = t(192379),
    l = t(120356),
    c = t.n(l),
    d = t(841226),
    C = t(960337);
function u(e, r, t) {
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
var m = (((o = {}).SIZE_40 = 'SIZE_40'), (o.SIZE_60 = 'SIZE_60'), o);
let x = Object.freeze({
        SIZE_40: 'size-40',
        SIZE_60: 'size-60'
    }),
    f = t(515695);
class _ extends (s = i.PureComponent) {
    render() {
        let { className: e, text: r, ...t } = this.props;
        return (0, a.jsx)('div', {
            style: {
                width: t.size,
                height: t.size,
                backgroundColor: t.bgColor
            },
            className: c()(C.qrCodeContainer, e),
            children: (0, a.jsx)(d.default, {
                value: r,
                level: 'M',
                ...t
            })
        });
    }
}
u(_, 'defaultProps', {
    size: 128,
    bgColor: '#ffffff',
    fgColor: '#000000'
});
class h extends (n = i.PureComponent) {
    render() {
        let { overlaySize: e } = this.props,
            r = x[null != e ? e : 'SIZE_40'];
        return (0, a.jsxs)('div', {
            className: C.qrCodeOverlayContainer,
            children: [
                (0, a.jsx)(_, { ...this.props }),
                (0, a.jsx)('div', {
                    className: C.qrCodeOverlay,
                    children: (0, a.jsx)('img', {
                        className: C[r],
                        src: f,
                        alt: ''
                    })
                })
            ]
        });
    }
}
u(h, 'defaultProps', {
    size: 144,
    bgColor: '#ffffff',
    fgColor: '#000000'
});
let v = _;
