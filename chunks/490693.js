"use strict";
n.d(t, { A: () => f });
var r = n(627968),
    i = n(64700),
    s = n(621466),
    a = n(397927),
    o = n(267102),
    l = n(619517),
    u = n(369254),
    c = n(256905),
    d = n(218394);
class _ extends i.PureComponent {
    static defaultProps = { shouldLink: !0, autoPlay: !1, animated: !1 };
    onMouseEnter = (e) => {
        let { src: t, width: n, height: r, onMouseEnter: i, handlePreloadImage: s } = this.props;
        (i?.(e), null != s) ? s() : (0, u.t1)({ src: t, width: n, height: r, options: this.props });
    };
    modalContext = (0, a.TId)(this.props.appContext);
    onCloseImage = () => {
        (0, a.OoC)(c.K, this.modalContext);
    };
    onZoom = (e, t) => {
        let { zoomThumbnailPlaceholder: n, trigger: r } = t;
        e.preventDefault();
        let {
                alt: i,
                src: a,
                original: o,
                width: l,
                height: u,
                animated: d,
                srcIsAnimated: _,
                children: f,
                shouldHideMediaOptions: h = !1,
                sourceMetadata: p,
                analyticsSource: m,
                contentType: E,
                originalContentType: g,
            } = this.props,
            A = {
                url: a,
                width: l,
                height: u,
                type: "IMAGE",
                alt: i,
                contentType: E,
                originalContentType: g,
                zoomThumbnailPlaceholder: n,
                animated: d,
                srcIsAnimated: _,
                children: f,
                trigger: r,
                sourceMetadata: p,
                original: o ?? a,
            };
        (0, s.vq)(e.currentTarget) && e.currentTarget.blur(),
            (0, c.R)({
                onClose: this.onCloseImage,
                items: [A],
                shouldHideMediaOptions: h,
                location: m ?? "LazyImageZoomable",
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
