"use strict";
n.d(t, { Ay: () => b, P8: () => T, bp: () => I, p4: () => y });
var r = n(627968),
    i = n(64700),
    a = n(735438),
    s = n(731738),
    o = n(230109),
    l = n(673698),
    u = n(600975),
    c = n(693875),
    d = n(776231),
    _ = n(831062),
    f = n(964404),
    p = n(544180),
    h = n(954571),
    m = n(486020),
    g = n(515718),
    E = n(652215),
    A = n(838541);
let I = /\.gif($|\?|#)/i,
    T = /\.webp($|\?|#)/i,
    y = /\.avif($|\?|#)/i,
    S = /\.png($|\?|#)/i,
    v = 400,
    C = 300;
class b extends i.Component {
    static visibilityObserver = new o.j({ threshold: 0.6 });
    static defaultProps = {
        shouldLink: !1,
        autoPlay: !1,
        animated: !1,
        minWidth: 0,
        minHeight: 0,
        shouldRenderAccessory: !0,
        srcIsAnimated: !1,
    };
    static isAnimated(e) {
        let { src: t, original: n, animated: r, srcIsAnimated: i } = e;
        return (
            r ||
            I.test(null != n && "" !== n ? n : t) ||
            (null != i && i && (T.test(null != n && "" !== n ? n : t) || y.test(null != n && "" !== n ? n : t)))
        );
    }
    static isSrcPNG(e) {
        let { src: t } = e;
        return S.test(t);
    }
    static isSrcAVIF(e) {
        let { src: t } = e;
        return y.test(t);
    }
    static getFormatQuality(e) {
        let { src: t, original: n, animated: r, srcIsAnimated: i, freeze: a = !1 } = e,
            s = null,
            o = null;
        return (
            m.QB && (a || !b.isAnimated({ src: t, original: n, animated: r, srcIsAnimated: i }))
                ? ((s = "webp"), (b.isSrcPNG({ src: t }) || b.isSrcAVIF({ src: t })) && (o = "lossless"))
                : a && (s = "png"),
            { format: s, quality: o }
        );
    }
    static preloadImage(e) {
        let {
            src: t,
            dimensions: { maxWidth: n, maxHeight: r, imageWidth: i, imageHeight: a },
            options: { srcIsAnimated: s, original: o, animated: l, sourceMetadata: u, freeze: c },
            callback: _,
        } = e;
        if (1 === i && 1 === a) return;
        let { format: f, quality: p } = b.getFormatQuality({
                src: t,
                original: o,
                animated: l,
                srcIsAnimated: s,
                freeze: c,
            }),
            h = (0, d.AE)({
                src: t,
                width: i,
                height: a,
                maxWidth: n,
                maxHeight: r,
                srcIsAnimated: s,
                format: f,
                quality: p,
            }),
            m = Date.now();
        return (0, d.yt)(h, (e, n) => {
            b.trackLoadingCompleted({
                error: e,
                imageData: n,
                trigger: "PRELOAD",
                startLoadingTime: m,
                readyState: E.Rv1.READY,
                format: f,
                quality: p,
                imageProps: { src: t, width: i, height: a, sourceMetadata: u, original: o },
            }),
                _?.(e, n);
        });
    }
    static async trackLoadingCompleted(e) {
        let {
            error: t,
            imageData: n,
            trigger: r,
            startLoadingTime: i,
            readyState: a,
            format: o,
            quality: l,
            imageProps: { src: u, height: c, width: d, original: m, sourceMetadata: g },
        } = e;
        if (
            (t && _.A.increment({ name: s.K.IMAGE_LOAD_ERROR }),
            !N.getCurrentConfig({ location: "lazy_image" }).enabled)
        )
            return;
        let A = await fetch(n.url).catch(() => void 0),
            I = A?.headers?.get("content-length"),
            T = null != I ? Number(I) : null,
            y = Date.now() - i;
        h.default.track(E.HAw.IMAGE_LOADING_COMPLETED, {
            duration_ms: y,
            requested_height: n.height,
            requested_width: n.width,
            height: c,
            width: d,
            original_url: m,
            url: u,
            requested_url: n.url,
            format: o,
            quality: l,
            state: t ? E.Rv1.ERROR : a,
            data_saving_mode: f.Ay.dataSavingMode,
            low_quality_image_mode: f.Ay.dataSavingMode,
            trigger: r,
            size: T,
            message_id: g?.message?.id,
            message_sent_timestamp: g?.message?.timestamp.getTime(),
            connection_type: p.A.getType(),
            effective_connection_speed: p.A.getEffectiveConnectionSpeed(),
            service_provider: p.A.getServiceProvider(),
        });
    }
    state = { readyState: E.Rv1.LOADING, hasMouseOver: !1, hasFocus: !1 };
    startLoadingTime = Date.now();
    _cancellers = new Set();
    _imageRef = i.createRef();
    constructor(e) {
        super(e),
            (0, d.LE)(this.getSrc(this.getRatio(), b.isAnimated(this.props))) && (this.state.readyState = E.Rv1.READY);
    }
    componentDidMount() {
        let { readyState: e } = this.state;
        e === E.Rv1.LOADING &&
            this.loadImage(this.getSrc(this.getRatio(), b.isAnimated(this.props)), this.handleImageLoad),
            b.isAnimated(this.props) && this.observeVisibility();
    }
    componentDidUpdate(e) {
        let t = b.isAnimated(this.props);
        b.isAnimated(e) !== t && (t ? this.observeVisibility() : this.unobserveVisibility());
    }
    componentWillUnmount() {
        b.isAnimated(this.props) && this.unobserveVisibility(),
            this._cancellers.forEach((e) => e()),
            this._cancellers.clear();
    }
    observeVisibility = () => {
        b.visibilityObserver.observe(this, this._imageRef);
    };
    unobserveVisibility = () => {
        b.visibilityObserver.unobserve(this);
    };
    getSrc(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            { src: n, width: r, height: i, maxWidth: a, maxHeight: s, mediaLayoutType: o } = this.props,
            { format: l, quality: u } = b.getFormatQuality({ ...this.props, freeze: t });
        return (0, d.AE)({
            src: n,
            width: r,
            height: i,
            ratio: e,
            maxWidth: o === A.dG.MOSAIC ? a : void 0,
            maxHeight: o === A.dG.MOSAIC ? s : void 0,
            format: l,
            quality: u,
            animated: !t,
            srcIsAnimated: this.props.srcIsAnimated,
        });
    }
    getRatio() {
        let {
            width: e,
            height: t,
            maxWidth: n = v,
            maxHeight: r = C,
            mediaLayoutType: i,
            useFullWidth: a,
        } = this.props;
        return i === A.dG.MOSAIC && a
            ? (0, g.V)({ width: e, height: t, maxWidth: n, maxHeight: r })
            : (0, g.U8)({ width: e, height: t, maxWidth: n, maxHeight: r });
    }
    getType() {
        let { mediaLayoutType: e, responsive: t } = this.props;
        return e ?? (t ? A.dG.RESPONSIVE : A.dG.STATIC);
    }
    loadImage(e, t) {
        let { width: n, height: r } = this.props;
        if (((this.startLoadingTime = Date.now()), 1 === n && 1 === r)) return;
        let i = (0, d.yt)(e, (e, n) => {
            null != i && this._cancellers.delete(i), t?.(e, n);
        });
        null != i && this._cancellers.add(i);
    }
    handleImageLoad = (e, t) => {
        this.setState({ readyState: e ? E.Rv1.ERROR : E.Rv1.READY }, () => {
            let { format: n, quality: r } = b.getFormatQuality(this.props);
            b.trackLoadingCompleted({
                error: e,
                imageData: t,
                trigger: this.props.trigger ?? "LOAD",
                startLoadingTime: this.startLoadingTime,
                readyState: this.state.readyState,
                format: n,
                quality: r,
                imageProps: this.props,
            });
        });
    };
    onMouseEnter = (e) => {
        b.isAnimated(this.props) && this.setState({ hasMouseOver: !0 });
        let { onMouseEnter: t } = this.props;
        t?.(e);
    };
    onMouseLeave = (e) => {
        b.isAnimated(this.props) && this.setState({ hasMouseOver: !1 });
        let { onMouseLeave: t } = this.props;
        t?.(e);
    };
    onFocus = (e) => {
        b.isAnimated(this.props) && this.setState({ hasFocus: !0 });
    };
    onBlur = (e) => {
        let { currentTarget: t, relatedTarget: n } = e;
        t.contains(n) || this.setState({ hasFocus: !1 });
    };
    onClick = (e) => {
        let { onZoom: t, onClick: n } = this.props;
        null != n
            ? n(e)
            : null != t &&
              (e.preventDefault(), t(e, { zoomThumbnailPlaceholder: this.getSrc(this.getRatio()), trigger: "CLICK" }));
    };
    renderAccessory = () => {
        let { hasMouseOver: e, hasFocus: t } = this.state,
            n = e || t,
            i = null != this.props.renderAccessory ? this.props.renderAccessory() : null;
        return this.props.shouldRenderAccessory ? (n ? i : (0, r.jsx)(c.A, {})) : null;
    };
    render() {
        let {
                alt: e,
                zoomThumbnailPlaceholder: t,
                onZoom: n,
                shouldLink: i,
                onContextMenu: s,
                autoPlay: o,
                original: u,
                className: c,
                imageClassName: d,
                children: _,
                animated: f,
                shouldAnimate: p,
                width: h,
                height: m,
                minWidth: g,
                minHeight: A,
                maxWidth: I,
                maxHeight: T,
                onClick: y,
                renderAccessory: S,
                tabIndex: v,
                limitResponsiveWidth: C,
                useFullWidth: N,
                placeholder: R,
                placeholderVersion: O,
                dataSafeSrc: D,
                srcIsAnimated: L,
            } = this.props,
            { readyState: w, hasMouseOver: x, hasFocus: P } = this.state,
            M = null != n,
            k = this.getRatio(),
            U = (0, a.clamp)(Math.round(h * k), g ?? 0, I ?? 1 / 0),
            G = (0, a.clamp)(Math.round(m * k), A ?? 0, T ?? 1 / 0),
            V = {
                alt: e,
                readyState: w,
                onContextMenu: s ?? void 0,
                zoomable: M,
                className: c,
                imageClassName: d,
                minWidth: g,
                minHeight: A,
                mediaLayoutType: this.getType(),
                limitResponsiveWidth: C,
                useFullWidth: N,
                tabIndex: v,
                width: U,
                height: G,
                src: "",
                placeholder: R,
                placeholderVersion: O,
                dataSafeSrc: D,
                srcIsAnimated: L,
                children:
                    null != _
                        ? (e) => {
                              let { src: t, size: n, alt: r, mediaLayoutType: i } = e;
                              return _({ src: t, size: n, alt: r, mediaLayoutType: i });
                          }
                        : void 0,
                onMouseEnter: this.onMouseEnter,
                onMouseLeave: this.onMouseLeave,
                onFocus: this.onFocus,
                onBlur: this.onBlur,
            };
        if (1 === V.width && 1 === V.height) return null;
        switch (
            ((M || null != y) && (V.onClick = this.onClick), i && (V.original = null != u && "" !== u ? u : V.src), w)
        ) {
            case E.Rv1.LOADING:
                null != t && (V.src = t);
                break;
            case E.Rv1.READY:
                if (b.isAnimated(this.props)) {
                    V.onMouseLeave = this.onMouseLeave;
                    let e = (o || x || P) && (null == p || p) && b.visibilityObserver.isVisible(this);
                    e
                        ? ((V.src = this.getSrc(k)), (V.renderAccessory = S))
                        : ((V.src = this.getSrc(k, !f || !o)), (V.renderAccessory = this.renderAccessory)),
                        null != _ &&
                            (V.children = (t) => {
                                let { src: n, size: r, alt: i, mediaLayoutType: a } = t;
                                return _({ src: n, size: r, animating: e, alt: i, mediaLayoutType: a });
                            });
                } else V.src = this.getSrc(k);
        }
        return (0, r.jsx)(l._, { ref: this._imageRef, ...V });
    }
}
let N = (0, u.C)({
    kind: "user",
    id: "2024-02_image_load_metrics",
    label: "Image load metrics Config User Experiment",
    defaultConfig: { enabled: !1 },
    treatments: [
        { id: 1, label: "Do not send metrics for image load", config: { enabled: !1 } },
        { id: 2, label: "Send metrics for image load", config: { enabled: !0 } },
    ],
});
