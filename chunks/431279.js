n.d(t, { Z: () => y }), n(388685);
var r,
    i = n(200651),
    o = n(192379),
    a = n(374470),
    s = n(481060),
    l = n(40851),
    c = n(124347),
    u = n(730606),
    d = n(312097),
    f = n(506071);
function _(e, t, n) {
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
function p(e) {
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
                _(e, t, n[t]);
            });
    }
    return e;
}
function h(e, t) {
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
function m(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : h(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function g(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = E(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function E(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
class b extends (r = o.PureComponent) {
    render() {
        let e = this.props,
            { appContext: t, isWindowFocused: n } = e,
            r = g(e, ['appContext', 'isWindowFocused']);
        return (0, i.jsx)(
            c.ZP,
            m(p({}, r), {
                onZoom: this.onZoom,
                onMouseEnter: this.onMouseEnter,
                shouldAnimate: n
            })
        );
    }
    constructor(...e) {
        super(...e),
            _(this, 'onMouseEnter', (e) => {
                let { src: t, width: n, height: r, onMouseEnter: i, handlePreloadImage: o } = this.props;
                if ((null == i || i(e), null != o)) return void o();
                (0, u.Qk)({
                    src: t,
                    width: n,
                    height: r,
                    options: this.props
                });
            }),
            _(this, 'modalContext', (0, s.VnL)(this.props.appContext)),
            _(this, 'onCloseImage', () => {
                (0, s.Mr3)(d.Q, this.modalContext);
            }),
            _(this, 'onZoom', (e, t) => {
                let { zoomThumbnailPlaceholder: n, trigger: r } = t;
                e.preventDefault();
                let { alt: i, src: o, original: s, width: l, height: c, animated: u, srcIsAnimated: f, children: _, shouldHideMediaOptions: p = !1, sourceMetadata: h, analyticsSource: m } = this.props,
                    g = {
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
                        sourceMetadata: h,
                        original: null != s ? s : o
                    };
                (0, a.k)(e.currentTarget) && e.currentTarget.blur(),
                    (0, d.K)({
                        onClose: this.onCloseImage,
                        items: [g],
                        shouldHideMediaOptions: p,
                        location: null != m ? m : 'LazyImageZoomable',
                        contextKey: this.modalContext
                    });
            });
    }
}
function y(e) {
    let t = (0, l.bp)(),
        n = (0, f.n)();
    return (0, i.jsx)(
        b,
        m(p({}, e), {
            isWindowFocused: n,
            appContext: t
        })
    );
}
_(b, 'defaultProps', {
    shouldLink: !0,
    autoPlay: !1,
    animated: !1
});
