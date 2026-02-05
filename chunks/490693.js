"use strict";
n.d(t, { A: () => f });
var r = n(627968),
    i = n(64700),
    a = n(621466),
    s = n(397927),
    o = n(267102),
    l = n(619517),
    u = n(369254),
    c = n(256905),
    d = n(218394);
class _ extends i.PureComponent {
    static defaultProps = { shouldLink: !0, autoPlay: !1, animated: !1 };
    onMouseEnter = (e) => {
        let { src: t, width: n, height: r, onMouseEnter: i, handlePreloadImage: a } = this.props;
        (i?.(e), null != a) ? a() : (0, u.t1)({ src: t, width: n, height: r, options: this.props });
    };
    modalContext = (0, s.TId)(this.props.appContext);
    onCloseImage = () => {
        (0, s.OoC)(c.K, this.modalContext);
    };
    onZoom = (e, t) => {
        let { zoomThumbnailPlaceholder: n, trigger: r } = t;
        e.preventDefault();
        let {
                alt: i,
                src: s,
                original: o,
                width: l,
                height: u,
                animated: d,
                srcIsAnimated: _,
                children: f,
                shouldHideMediaOptions: p = !1,
                sourceMetadata: h,
                analyticsSource: m,
                contentType: g,
                originalContentType: E,
            } = this.props,
            A = {
                url: s,
                width: l,
                height: u,
                type: "IMAGE",
                alt: i,
                contentType: g,
                originalContentType: E,
                zoomThumbnailPlaceholder: n,
                animated: d,
                srcIsAnimated: _,
                children: f,
                trigger: r,
                sourceMetadata: h,
                original: o ?? s,
            };
        (0, a.vq)(e.currentTarget) && e.currentTarget.blur(),
            (0, c.R)({
                onClose: this.onCloseImage,
                items: [A],
                shouldHideMediaOptions: p,
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
