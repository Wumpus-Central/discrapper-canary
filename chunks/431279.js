n.d(t, { Z: () => y }), n(388685);
var r,
    i = n(54381),
    a = n(473749),
    o = n(374470),
    s = n(481060),
    l = n(728285),
    c = n(124347),
    u = n(730606),
    d = n(312097),
    f = n(506071);
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
function _(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                p(e, t, n[t]);
            });
    }
    return e;
}
function m(e, t) {
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
function h(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : m(Object(t)).forEach(function (n) {
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
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function E(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
class b extends (r = a.PureComponent) {
    render() {
        let e = this.props,
            { appContext: t, isWindowFocused: n } = e,
            r = g(e, ["appContext", "isWindowFocused"]);
        return (0, i.jsx)(
            c.ZP,
            h(_({}, r), {
                onZoom: this.onZoom,
                onMouseEnter: this.onMouseEnter,
                shouldAnimate: n,
            }),
        );
    }
    constructor(...e) {
        super(...e),
            p(this, "onMouseEnter", (e) => {
                let { src: t, width: n, height: r, onMouseEnter: i, handlePreloadImage: a } = this.props;
                if ((null == i || i(e), null != a)) return void a();
                (0, u.Qk)({
                    src: t,
                    width: n,
                    height: r,
                    options: this.props,
                });
            }),
            p(this, "modalContext", (0, s.VnL)(this.props.appContext)),
            p(this, "onCloseImage", () => {
                (0, s.Mr3)(d.Q, this.modalContext);
            }),
            p(this, "onZoom", (e, t) => {
                let { zoomThumbnailPlaceholder: n, trigger: r } = t;
                e.preventDefault();
                let {
                        alt: i,
                        src: a,
                        original: s,
                        width: l,
                        height: c,
                        animated: u,
                        srcIsAnimated: f,
                        children: p,
                        shouldHideMediaOptions: _ = !1,
                        sourceMetadata: m,
                        analyticsSource: h,
                        contentType: g,
                        originalContentType: E,
                    } = this.props,
                    b = {
                        url: a,
                        width: l,
                        height: c,
                        type: "IMAGE",
                        alt: i,
                        contentType: g,
                        originalContentType: E,
                        zoomThumbnailPlaceholder: n,
                        animated: u,
                        srcIsAnimated: f,
                        children: p,
                        trigger: r,
                        sourceMetadata: m,
                        original: null != s ? s : a,
                    };
                (0, o.kK)(e.currentTarget) && e.currentTarget.blur(),
                    (0, d.K)({
                        onClose: this.onCloseImage,
                        items: [b],
                        shouldHideMediaOptions: _,
                        location: null != h ? h : "LazyImageZoomable",
                        contextKey: this.modalContext,
                    });
            });
    }
}
function y(e) {
    let t = (0, l.bp)(),
        n = (0, f.n)();
    return (0, i.jsx)(
        b,
        h(_({}, e), {
            isWindowFocused: n,
            appContext: t,
        }),
    );
}
p(b, "defaultProps", {
    shouldLink: !0,
    autoPlay: !1,
    animated: !1,
});
