n.d(t, { Z: () => O }), n(47120);
var r,
    i = n(200651),
    o = n(192379),
    a = n(374470),
    s = n(481060),
    l = n(40851),
    c = n(124347),
    u = n(730606),
    d = n(312097),
    f = n(506071),
    _ = n(701865),
    p = n(838157);
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
                h(e, t, n[t]);
            });
    }
    return e;
}
function g(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function E(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : g(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function b(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = y(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function y(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
class v extends (r = o.PureComponent) {
    render() {
        let e = this.props,
            { appContext: t, isWindowFocused: n } = e,
            r = b(e, ['appContext', 'isWindowFocused']);
        return (0, i.jsx)(
            c.ZP,
            E(m({}, r), {
                onZoom: this.onZoom,
                onMouseEnter: this.onMouseEnter,
                shouldAnimate: n
            })
        );
    }
    constructor(...e) {
        super(...e),
            h(this, 'onMouseEnter', (e) => {
                let { src: t, width: n, height: r, onMouseEnter: i, handlePreloadImage: o } = this.props;
                if ((null == i || i(e), null != o)) return void o();
                (0, u.Qk)({
                    src: t,
                    width: n,
                    height: r,
                    options: this.props
                });
            }),
            h(this, 'modalContext', (0, s.VnL)(this.props.appContext)),
            h(this, 'onCloseImage', () => {
                (0, s.Mr3)(_.U, this.modalContext);
            }),
            h(this, 'onZoom', (e, t) => {
                let { zoomThumbnailPlaceholder: n, trigger: r } = t;
                e.preventDefault();
                let { alt: i, src: o, original: s, width: l, height: c, animated: u, srcIsAnimated: f, children: _, shouldHideMediaOptions: h = !1, sourceMetadata: m, analyticsSource: g } = this.props,
                    E = {
                        url: o,
                        width: l,
                        height: c,
                        type: 'IMAGE',
                        alt: i,
                        zoomThumbnailPlaceholder: n,
                        animated: u,
                        srcIsAnimated: f,
                        children: _,
                        trigger: r,
                        sourceMetadata: m,
                        original: null != s ? s : o
                    };
                (0, a.k)(e.currentTarget) && e.currentTarget.blur(),
                    (0, d.K)({
                        className: p.modal,
                        onClose: this.onCloseImage,
                        items: [E],
                        shouldHideMediaOptions: h,
                        location: null != g ? g : 'LazyImageZoomable',
                        contextKey: this.modalContext
                    });
            });
    }
}
function O(e) {
    let t = (0, l.bp)(),
        n = (0, f.n)();
    return (0, i.jsx)(
        v,
        E(m({}, e), {
            isWindowFocused: n,
            appContext: t
        })
    );
}
h(v, 'defaultProps', {
    shouldLink: !0,
    autoPlay: !1,
    animated: !1
});
