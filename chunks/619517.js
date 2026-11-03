i.d(t, { Ay: () => S, P8: () => f, bp: () => L, p4: () => R });
var s = i(477900),
    a = i(582128),
    r = i(435558),
    n = i(731738),
    o = i(269115),
    l = i(144165),
    d = i(945810),
    h = i(693875),
    u = i(776231),
    c = i(807393),
    g = i(964404),
    p = i(544180),
    m = i(174459),
    y = i(486020),
    v = i(515718),
    A = i(835517),
    _ = i(652215),
    b = i(838541);
let L = /\.gif($|\?|#)/i,
    f = /\.webp($|\?|#)/i,
    R = /\.avif($|\?|#)/i,
    I = /\.png($|\?|#)/i;
class S extends a.Component {
    static visibilityObserver = new o.j({ threshold: 0.6 });
    static _lazyLoadTargets = new WeakMap();
    static _lazyLoadIO =
        "u" > typeof IntersectionObserver
            ? new IntersectionObserver(
                  (e) => {
                      for (let t of e)
                          if (t.isIntersecting) {
                              let e = S._lazyLoadTargets.get(t.target);
                              null != e &&
                                  (S._lazyLoadIO?.unobserve(t.target),
                                  S._lazyLoadTargets.delete(t.target),
                                  e._triggerLazyLoad());
                          }
                  },
                  { threshold: 0, rootMargin: "300px" },
              )
            : null;
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
        let { src: t, original: i, animated: s, srcIsAnimated: a } = e;
        return (
            s ||
            L.test(null != i && "" !== i ? i : t) ||
            (null != a && a && (f.test(null != i && "" !== i ? i : t) || R.test(null != i && "" !== i ? i : t)))
        );
    }
    static isSrcPNG(e) {
        let { src: t } = e;
        return I.test(t);
    }
    static isSrcAVIF(e) {
        let { src: t } = e;
        return R.test(t);
    }
    static getFormatQuality(e) {
        let { src: t, original: i, animated: s, srcIsAnimated: a, freeze: r = !1 } = e,
            n = null,
            o = null;
        return (
            y.QB && (r || !S.isAnimated({ src: t, original: i, animated: s, srcIsAnimated: a }))
                ? ((n = "webp"), (S.isSrcPNG({ src: t }) || S.isSrcAVIF({ src: t })) && (o = "lossless"))
                : r && (n = "png"),
            { format: n, quality: o }
        );
    }
    static preloadImage(e) {
        let {
            src: t,
            dimensions: { maxWidth: i, maxHeight: s, imageWidth: a, imageHeight: r },
            options: { srcIsAnimated: n, original: o, animated: l, sourceMetadata: d, freeze: h },
            callback: c,
        } = e;
        if (1 === a && 1 === r) return;
        let { format: g, quality: p } = S.getFormatQuality({
                src: t,
                original: o,
                animated: l,
                srcIsAnimated: n,
                freeze: h,
            }),
            m = (0, u.AE)({
                src: t,
                width: a,
                height: r,
                maxWidth: i,
                maxHeight: s,
                srcIsAnimated: n,
                format: g,
                quality: p,
            }),
            y = performance.now();
        return (0, u.yt)(m, (e, i) => {
            (S.trackLoadingCompleted({
                error: e,
                imageData: i,
                trigger: "PRELOAD",
                startLoadingTime: y,
                readyState: _.Rv1.READY,
                format: g,
                quality: p,
                imageProps: { src: t, width: a, height: r, sourceMetadata: d, original: o },
            }),
                c?.(e, i));
        });
    }
    static async trackLoadingCompleted(e) {
        let {
            error: t,
            imageData: i,
            trigger: s,
            startLoadingTime: a,
            readyState: r,
            format: o,
            quality: l,
            displayWidth: d = null,
            displayHeight: h = null,
            imageProps: { src: u, height: y, width: v, original: b, sourceMetadata: L },
        } = e;
        if ((t && c.A.increment({ name: n.K.IMAGE_LOAD_ERROR }), !O.getConfig({ location: "lazy_image" }).enabled))
            return;
        let f = await fetch(i.url).catch(() => void 0),
            R = f?.headers?.get("content-length"),
            I = null != R ? Number(R) : null,
            S = Math.round(performance.now() - a);
        m.default.track(_.HAw.IMAGE_LOADING_COMPLETED, {
            duration_ms: S,
            requested_height: i.height,
            requested_width: i.width,
            height: y,
            width: v,
            original_url: b,
            url: u,
            requested_url: i.url,
            format: o,
            quality: l,
            state: t ? _.Rv1.ERROR : r,
            data_saving_mode: g.Ay.dataSavingMode,
            low_quality_image_mode: g.Ay.dataSavingMode,
            trigger: s,
            size: I,
            message_id: L?.message?.id,
            message_sent_timestamp: L?.message?.timestamp.getTime(),
            device_pixel_ratio: (0, A.A)(),
            display_width: d,
            display_height: h,
            connection_type: p.A.getType(),
            effective_connection_speed: p.A.getEffectiveConnectionSpeed(),
            service_provider: p.A.getServiceProvider(),
        });
    }
    state = { readyState: _.Rv1.LOADING, hasMouseOver: !1, hasFocus: !1 };
    startLoadingTime = performance.now();
    _cancellers = new Set();
    _unmounted = !1;
    _imageRef = a.createRef();
    constructor(e) {
        (super(e),
            (0, u.LE)(this.getSrc(this.getRatio(), S.isAnimated(this.props))) && (this.state.readyState = _.Rv1.READY));
    }
    componentDidMount() {
        let { readyState: e } = this.state;
        if (e === _.Rv1.LOADING)
            if (M.getConfig({ location: "LazyImage_componentDidMount" }).enabled) {
                let e = this._imageRef.current;
                null != e && null != S._lazyLoadIO
                    ? (S._lazyLoadTargets.set(e, this), S._lazyLoadIO.observe(e))
                    : this.loadImage(this.getSrc(this.getRatio(), S.isAnimated(this.props)), this.handleImageLoad);
            } else this.loadImage(this.getSrc(this.getRatio(), S.isAnimated(this.props)), this.handleImageLoad);
        S.isAnimated(this.props) && this.observeVisibility();
    }
    componentDidUpdate(e) {
        let t = S.isAnimated(this.props);
        S.isAnimated(e) !== t && (t ? this.observeVisibility() : this.unobserveVisibility());
    }
    componentWillUnmount() {
        this._unmounted = !0;
        let e = this._imageRef.current;
        (null != e && (S._lazyLoadIO?.unobserve(e), S._lazyLoadTargets.delete(e)),
            S.isAnimated(this.props) && this.unobserveVisibility(),
            this._cancellers.forEach((e) => e()),
            this._cancellers.clear());
    }
    observeVisibility = () => {
        S.visibilityObserver.observe(this, this._imageRef);
    };
    unobserveVisibility = () => {
        S.visibilityObserver.unobserve(this);
    };
    getSrc(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            { src: i, width: s, height: a, maxWidth: r, maxHeight: n, mediaLayoutType: o } = this.props,
            { format: l, quality: d } = S.getFormatQuality({ ...this.props, freeze: t });
        return (0, u.AE)({
            src: i,
            width: s,
            height: a,
            ratio: e,
            maxWidth: o === b.dG.MOSAIC ? r : void 0,
            maxHeight: o === b.dG.MOSAIC ? n : void 0,
            format: l,
            quality: d,
            animated: !t,
            srcIsAnimated: this.props.srcIsAnimated,
        });
    }
    getRatio() {
        let {
            width: e,
            height: t,
            maxWidth: i = 400,
            maxHeight: s = 300,
            mediaLayoutType: a,
            useFullWidth: r,
        } = this.props;
        return a === b.dG.MOSAIC && r
            ? (0, v.V)({ width: e, height: t, maxWidth: i, maxHeight: s })
            : (0, v.U8)({ width: e, height: t, maxWidth: i, maxHeight: s });
    }
    getType() {
        let { mediaLayoutType: e, responsive: t } = this.props;
        return e ?? (t ? b.dG.RESPONSIVE : b.dG.STATIC);
    }
    getDisplayDimensions(e) {
        let { width: t, height: i, minWidth: s, minHeight: a, maxWidth: n, maxHeight: o } = this.props;
        return {
            width: (0, r.clamp)(Math.round(t * e), s ?? 0, n ?? 1 / 0),
            height: (0, r.clamp)(Math.round(i * e), a ?? 0, o ?? 1 / 0),
        };
    }
    _triggerLazyLoad() {
        this._unmounted ||
            this.state.readyState !== _.Rv1.LOADING ||
            this.loadImage(this.getSrc(this.getRatio(), S.isAnimated(this.props)), this.handleImageLoad);
    }
    loadImage(e, t) {
        let { width: i, height: s } = this.props;
        if (((this.startLoadingTime = performance.now()), 1 === i && 1 === s)) return;
        let a = (0, u.yt)(e, (e, i) => {
            (null != a && this._cancellers.delete(a), t?.(e, i));
        });
        null != a && this._cancellers.add(a);
    }
    handleImageLoad = (e, t) => {
        this._unmounted ||
            this.setState({ readyState: e ? _.Rv1.ERROR : _.Rv1.READY }, () => {
                let { format: i, quality: s } = S.getFormatQuality(this.props),
                    a = this.getDisplayDimensions(this.getRatio());
                S.trackLoadingCompleted({
                    error: e,
                    imageData: t,
                    trigger: this.props.trigger ?? "LOAD",
                    startLoadingTime: this.startLoadingTime,
                    readyState: this.state.readyState,
                    format: i,
                    quality: s,
                    displayWidth: a.width,
                    displayHeight: a.height,
                    imageProps: this.props,
                });
            });
    };
    onMouseEnter = (e) => {
        S.isAnimated(this.props) && this.setState({ hasMouseOver: !0 });
        let { onMouseEnter: t } = this.props;
        t?.(e);
    };
    onMouseLeave = (e) => {
        S.isAnimated(this.props) && this.setState({ hasMouseOver: !1 });
        let { onMouseLeave: t } = this.props;
        t?.(e);
    };
    onFocus = (e) => {
        S.isAnimated(this.props) && this.setState({ hasFocus: !0 });
    };
    onBlur = (e) => {
        let { currentTarget: t, relatedTarget: i } = e;
        t.contains(i) || this.setState({ hasFocus: !1 });
    };
    onClick = (e) => {
        let { onZoom: t, onClick: i } = this.props;
        null != i
            ? i(e)
            : null != t &&
              (e.preventDefault(), t(e, { zoomThumbnailPlaceholder: this.getSrc(this.getRatio()), trigger: "CLICK" }));
    };
    renderAccessory = () => {
        let { hasMouseOver: e, hasFocus: t } = this.state,
            i = null != this.props.renderAccessory ? this.props.renderAccessory() : null;
        return this.props.shouldRenderAccessory ? (e || t ? i : (0, s.jsx)(h.A, {})) : null;
    };
    render() {
        let {
                alt: e,
                zoomThumbnailPlaceholder: t,
                onZoom: i,
                shouldLink: a,
                onContextMenu: r,
                autoPlay: n,
                original: o,
                className: d,
                imageClassName: h,
                children: u,
                animated: c,
                shouldAnimate: g,
                freeze: p,
                minWidth: m,
                minHeight: y,
                onClick: v,
                renderAccessory: A,
                tabIndex: b,
                limitResponsiveWidth: L,
                useFullWidth: f,
                placeholder: R,
                placeholderVersion: I,
                dataSafeSrc: O,
                srcIsAnimated: w,
            } = this.props,
            { readyState: C, hasMouseOver: D, hasFocus: E } = this.state,
            z = null != i,
            T = this.getRatio(),
            { width: k, height: G } = this.getDisplayDimensions(T),
            P = M.getConfig({ location: "LazyImage_render" }).enabled,
            F = {
                alt: e,
                readyState: C,
                onContextMenu: r ?? void 0,
                zoomable: z,
                className: d,
                imageClassName: h,
                minWidth: m,
                minHeight: y,
                mediaLayoutType: this.getType(),
                limitResponsiveWidth: L,
                useFullWidth: f,
                tabIndex: b,
                width: k,
                height: G,
                src: "",
                placeholder: R,
                placeholderVersion: I,
                dataSafeSrc: O,
                srcIsAnimated: w,
                children:
                    null != u
                        ? (e) => {
                              let { src: t, size: i, alt: s, mediaLayoutType: a } = e;
                              return u({ src: t, size: i, alt: s, mediaLayoutType: a });
                          }
                        : void 0,
                onMouseEnter: this.onMouseEnter,
                onMouseLeave: this.onMouseLeave,
                onFocus: this.onFocus,
                onBlur: this.onBlur,
            };
        if (1 === F.width && 1 === F.height) return null;
        switch (
            ((z || null != v) && (F.onClick = this.onClick), a && (F.original = null != o && "" !== o ? o : F.src), C)
        ) {
            case _.Rv1.LOADING:
                null != t && (F.src = t);
                break;
            case _.Rv1.READY:
                if (S.isAnimated(this.props)) {
                    F.onMouseLeave = this.onMouseLeave;
                    let e = (n || D || E) && (null == g || g) && S.visibilityObserver.isVisible(this);
                    (e
                        ? ((F.src = this.getSrc(T, p)), (F.renderAccessory = A))
                        : ((F.src = this.getSrc(T, p || !c || !n)), (F.renderAccessory = this.renderAccessory)),
                        null != u &&
                            (F.children = (t) => {
                                let { src: i, size: s, alt: a, mediaLayoutType: r } = t;
                                return u({ src: i, size: s, animating: e, alt: a, mediaLayoutType: r });
                            }));
                } else F.src = this.getSrc(T);
        }
        return (0, s.jsx)(l._, { disableLoadingSpinner: P, ref: this._imageRef, ...F });
    }
}
let O = (0, d.mj)({
        name: "2026-03-image-load-metrics",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !1 }, 2: { enabled: !0 } },
    }),
    M = (0, d.mj)({
        name: "2026-02-lazy-load-all-images",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    });
