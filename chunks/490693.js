"use strict";
n.d(t, { A: () => f });
var r = n(627968),
    i = n(64700),
    s = n(621466),
    a = n(192308),
    o = n(267102),
    l = n(619517),
    u = n(256905),
    c = n(536763),
    d = n(218394);
class _ extends i.PureComponent {
    static defaultProps = { shouldLink: !0, autoPlay: !1, animated: !1 };
    onMouseEnter = (e) => {
        let { src: t, width: n, height: r, onMouseEnter: i, handlePreloadImage: s } = this.props;
        (i?.(e), null != s) ? s() : (0, c.A)({ src: t, width: n, height: r, options: this.props });
    };
    modalContext = (0, a.modalContextFromAppContext)(this.props.appContext);
    onCloseImage = () => {
        (0, a.closeModal)(u.K, this.modalContext);
    };
    onZoom = (e, t) => {
        let { zoomThumbnailPlaceholder: n, trigger: r } = t;
        e.preventDefault();
        let {
            alt: i,
            src: a,
            original: o,
            width: l,
            height: c,
            animated: d,
            srcIsAnimated: _,
            children: f,
            shouldHideMediaOptions: p = !1,
            sourceMetadata: h,
            analyticsSource: E,
            contentType: m,
            originalContentType: g,
        } = this.props;
        (0, s.vq)(e.currentTarget) && e.currentTarget.blur(),
            (0, u.R)({
                onClose: this.onCloseImage,
                items: [
                    {
                        url: a,
                        width: l,
                        height: c,
                        type: "IMAGE",
                        alt: i,
                        contentType: m,
                        originalContentType: g,
                        zoomThumbnailPlaceholder: n,
                        animated: d,
                        srcIsAnimated: _,
                        children: f,
                        trigger: r,
                        sourceMetadata: h,
                        original: o ?? a,
                    },
                ],
                shouldHideMediaOptions: p,
                location: E ?? "LazyImageZoomable",
                contextKey: this.modalContext,
            });
    };
    render() {
        let { appContext: e, isWindowFocused: t, ...n } = this.props;
        return (0, r.jsx)(l.Ay, { ...n, onZoom: this.onZoom, onMouseEnter: this.onMouseEnter, shouldAnimate: t });
    }
}
function f(e) {
    let t = (0, o.Us)(),
        n = (0, d.j)();
    return (0, r.jsx)(_, { ...e, isWindowFocused: n, appContext: t });
}
