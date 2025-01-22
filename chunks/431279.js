r.d(n, {
    Z: function () {
        return v;
    }
});
var i,
    a = r(47120);
var o = r(200651),
    s = r(192379),
    l = r(513431),
    u = r(481060),
    c = r(40851),
    d = r(124347),
    f = r(312097),
    p = r(956664),
    h = r(506071),
    _ = r(701865),
    m = r(765568);
function g(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
class E extends (i = s.PureComponent) {
    render() {
        let { appContext: e, isWindowFocused: n, ...r } = this.props;
        return (0, o.jsx)(d.ZP, {
            ...r,
            onZoom: this.onZoom,
            onMouseEnter: this.onMouseEnter,
            shouldAnimate: n
        });
    }
    constructor(...e) {
        super(...e),
            g(this, 'onMouseEnter', (e, n) => {
                let { preloadImage: r } = n,
                    { width: i, height: a, onMouseEnter: o } = this.props;
                null == o || o(e, { preloadImage: r }), r((0, p.zp)(i, a));
            }),
            g(this, 'modalContext', (0, u.modalContextFromAppContext)(this.props.appContext)),
            g(this, 'onCloseImage', () => {
                (0, u.closeModal)(_.U, this.modalContext);
            }),
            g(this, 'onZoom', (e, n) => {
                let { zoomThumbnailPlaceholder: r, trigger: i } = n;
                e.preventDefault();
                let { alt: a, src: o, original: s, width: u, height: c, animated: d, srcIsAnimated: p, children: h, shouldHideMediaOptions: _ = !1, sourceMetadata: g, analyticsSource: E } = this.props,
                    v = {
                        url: o,
                        width: u,
                        height: c,
                        type: 'IMAGE',
                        alt: a,
                        zoomThumbnailPlaceholder: r,
                        animated: d,
                        srcIsAnimated: p,
                        children: h,
                        trigger: i,
                        sourceMetadata: g,
                        original: null != s ? s : o
                    };
                (0, l.k)(e.currentTarget) && e.currentTarget.blur(),
                    (0, f.K)({
                        className: m.modal,
                        onClose: this.onCloseImage,
                        items: [v],
                        shouldHideMediaOptions: _,
                        location: null != E ? E : 'LazyImageZoomable',
                        contextKey: this.modalContext
                    });
            });
    }
}
function v(e) {
    let n = (0, c.bp)(),
        r = (0, h.n)();
    return (0, o.jsx)(E, {
        ...e,
        isWindowFocused: r,
        appContext: n
    });
}
g(E, 'defaultProps', {
    shouldLink: !0,
    autoPlay: !1,
    animated: !1
});
