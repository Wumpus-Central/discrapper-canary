r.d(n, {
    Z: function () {
        return v;
    }
});
var i,
    a = r(47120);
var s = r(200651),
    o = r(192379),
    l = r(513431),
    u = r(481060),
    c = r(40851),
    d = r(124347),
    f = r(312097),
    _ = r(956664),
    h = r(506071),
    p = r(701865),
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
class E extends (i = o.PureComponent) {
    render() {
        let { appContext: e, isWindowFocused: n, ...r } = this.props;
        return (0, s.jsx)(d.ZP, {
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
                    { width: i, height: a, onMouseEnter: s } = this.props;
                null == s || s(e, { preloadImage: r }), r((0, _.zp)(i, a));
            }),
            g(this, 'modalContext', (0, u.modalContextFromAppContext)(this.props.appContext)),
            g(this, 'onCloseImage', () => {
                (0, u.closeModal)(p.U, this.modalContext);
            }),
            g(this, 'onZoom', (e, n) => {
                let { zoomThumbnailPlaceholder: r, trigger: i } = n;
                e.preventDefault();
                let { alt: a, src: s, original: o, width: u, height: c, animated: d, srcIsAnimated: _, children: h, shouldHideMediaOptions: p = !1, sourceMetadata: g, analyticsSource: E } = this.props,
                    v = {
                        url: s,
                        width: u,
                        height: c,
                        type: 'IMAGE',
                        alt: a,
                        zoomThumbnailPlaceholder: r,
                        animated: d,
                        srcIsAnimated: _,
                        children: h,
                        trigger: i,
                        sourceMetadata: g,
                        original: null != o ? o : s
                    };
                (0, l.k)(e.currentTarget) && e.currentTarget.blur(),
                    (0, f.K)({
                        className: m.modal,
                        onClose: this.onCloseImage,
                        items: [v],
                        shouldHideMediaOptions: p,
                        location: null != E ? E : 'LazyImageZoomable',
                        contextKey: this.modalContext
                    });
            });
    }
}
function v(e) {
    let n = (0, c.bp)(),
        r = (0, h.n)();
    return (0, s.jsx)(E, {
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
