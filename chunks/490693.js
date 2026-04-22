"use strict";
n.d(t, { A: () => m });
var i = n(627968),
    l = n(64700),
    s = n(621466),
    r = n(192308),
    a = n(267102),
    o = n(619517),
    c = n(256905),
    u = n(536763),
    d = n(218394);
class h extends l.PureComponent {
    static defaultProps = { shouldLink: !0, autoPlay: !1, animated: !1 };
    onMouseEnter = (e) => {
        let { src: t, width: n, height: i, onMouseEnter: l, handlePreloadImage: s } = this.props;
        (l?.(e), null != s) ? s() : (0, u.A)({ src: t, width: n, height: i, options: this.props });
    };
    modalContext = (0, r.modalContextFromAppContext)(this.props.appContext);
    onCloseImage = () => {
        (0, r.closeModal)(c.K, this.modalContext);
    };
    onZoom = (e, t) => {
        let { zoomThumbnailPlaceholder: n, trigger: i } = t;
        e.preventDefault();
        let {
            alt: l,
            src: r,
            original: a,
            width: o,
            height: u,
            animated: d,
            srcIsAnimated: h,
            children: m,
            shouldHideMediaOptions: p = !1,
            sourceMetadata: f,
            analyticsSource: g,
            contentType: _,
            originalContentType: x,
        } = this.props;
        (0, s.vq)(e.currentTarget) && e.currentTarget.blur(),
            (0, c.R)({
                onClose: this.onCloseImage,
                items: [
                    {
                        url: r,
                        width: o,
                        height: u,
                        type: "IMAGE",
                        alt: l,
                        contentType: _,
                        originalContentType: x,
                        zoomThumbnailPlaceholder: n,
                        animated: d,
                        srcIsAnimated: h,
                        children: m,
                        trigger: i,
                        sourceMetadata: f,
                        original: a ?? r,
                    },
                ],
                shouldHideMediaOptions: p,
                location: g ?? "LazyImageZoomable",
                contextKey: this.modalContext,
            });
    };
    render() {
        let { appContext: e, isWindowFocused: t, ...n } = this.props;
        return (0, i.jsx)(o.Ay, { ...n, onZoom: this.onZoom, onMouseEnter: this.onMouseEnter, shouldAnimate: t });
    }
}
function m(e) {
    let t = (0, a.Us)(),
        n = (0, d.j)();
    return (0, i.jsx)(h, { ...e, isWindowFocused: n, appContext: t });
}
