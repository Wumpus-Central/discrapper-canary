n.d(t, { Z: () => g }), n(47120);
var i,
    r = n(200651),
    a = n(192379),
    s = n(374470),
    o = n(481060),
    l = n(40851),
    u = n(124347),
    c = n(730606),
    d = n(312097),
    f = n(506071),
    _ = n(701865),
    p = n(509157);
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
class m extends (i = a.PureComponent) {
    render() {
        let { appContext: e, isWindowFocused: t, ...n } = this.props;
        return (0, r.jsx)(u.ZP, {
            ...n,
            onZoom: this.onZoom,
            onMouseEnter: this.onMouseEnter,
            shouldAnimate: t
        });
    }
    constructor(...e) {
        super(...e),
            h(this, 'onMouseEnter', (e) => {
                let { src: t, width: n, height: i, onMouseEnter: r, handlePreloadImage: a } = this.props;
                if ((null == r || r(e), null != a)) {
                    a();
                    return;
                }
                (0, c.Qk)({
                    src: t,
                    width: n,
                    height: i,
                    options: this.props,
                    hasMultiple: !1
                });
            }),
            h(this, 'modalContext', (0, o.VnL)(this.props.appContext)),
            h(this, 'onCloseImage', () => {
                (0, o.Mr3)(_.U, this.modalContext);
            }),
            h(this, 'onZoom', (e, t) => {
                let { zoomThumbnailPlaceholder: n, trigger: i } = t;
                e.preventDefault();
                let { alt: r, src: a, original: o, width: l, height: u, animated: c, srcIsAnimated: f, children: _, shouldHideMediaOptions: h = !1, sourceMetadata: m, analyticsSource: g } = this.props,
                    E = {
                        url: a,
                        width: l,
                        height: u,
                        type: 'IMAGE',
                        alt: r,
                        zoomThumbnailPlaceholder: n,
                        animated: c,
                        srcIsAnimated: f,
                        children: _,
                        trigger: i,
                        sourceMetadata: m,
                        original: null != o ? o : a
                    };
                (0, s.k)(e.currentTarget) && e.currentTarget.blur(),
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
function g(e) {
    let t = (0, l.bp)(),
        n = (0, f.n)();
    return (0, r.jsx)(m, {
        ...e,
        isWindowFocused: n,
        appContext: t
    });
}
h(m, 'defaultProps', {
    shouldLink: !0,
    autoPlay: !1,
    animated: !1
});
