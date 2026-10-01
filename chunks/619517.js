i.d(t, { Ay: () => I, P8: () => L, bp: () => b, p4: () => f });
var s = i(477900),
    a = i(582128),
    r = i(435558),
    n = i(731738),
    o = i(269115),
    l = i(144165),
    d = i(945810),
    h = i(693875),
    c = i(776231),
    u = i(807393),
    g = i(742023),
    p = i(544180),
    m = i(174459),
    y = i(486020),
    v = i(515718),
    A = i(652215),
    _ = i(838541);
let b = /\.gif($|\?|#)/i,
    L = /\.webp($|\?|#)/i,
    f = /\.avif($|\?|#)/i,
    R = /\.png($|\?|#)/i;
class I extends a.Component {
    static visibilityObserver = new o.j({ threshold: 0.6 });
    static _lazyLoadTargets = new WeakMap();
    static _lazyLoadIO =
        "u" > typeof IntersectionObserver
            ? new IntersectionObserver(
                  (e) => {
                      for (let t of e)
                          if (t.isIntersecting) {
                              let e = I._lazyLoadTargets.get(t.target);
                              null != e &&
                                  (I._lazyLoadIO?.unobserve(t.target),
                                  I._lazyLoadTargets.delete(t.target),
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
            b.test(null != i && "" !== i ? i : t) ||
            (null != a && a && (L.test(null != i && "" !== i ? i : t) || f.test(null != i && "" !== i ? i : t)))
        );
    }
    static isSrcPNG(e) {
        let { src: t } = e;
        return R.test(t);
    }
    static isSrcAVIF(e) {
        let { src: t } = e;
        return f.test(t);
    }
    static getFormatQuality(e) {
        let { src: t, original: i, animated: s, srcIsAnimated: a, freeze: r = !1 } = e,
            n = null,
            o = null;
        return (
            y.QB && (r || !I.isAnimated({ src: t, original: i, animated: s, srcIsAnimated: a }))
                ? ((n = "webp"), (I.isSrcPNG({ src: t }) || I.isSrcAVIF({ src: t })) && (o = "lossless"))
                : r && (n = "png"),
            { format: n, quality: o }
        );
    }
    static preloadImage(e) {
        let {
            src: t,
            dimensions: { maxWidth: i, maxHeight: s, imageWidth: a, imageHeight: r },
            options: { srcIsAnimated: n, original: o, animated: l, sourceMetadata: d, freeze: h },
            callback: u,
        } = e;
        if (1 === a && 1 === r) return;
        let { format: g, quality: p } = I.getFormatQuality({
                src: t,
                original: o,
                animated: l,
                srcIsAnimated: n,
                freeze: h,
            }),
            m = (0, c.AE)({
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
        return (0, c.yt)(m, (e, i) => {
            (I.trackLoadingCompleted({
                error: e,
                imageData: i,
                trigger: "PRELOAD",
                startLoadingTime: y,
                readyState: A.Rv1.READY,
                format: g,
                quality: p,
                imageProps: { src: t, width: a, height: r, sourceMetadata: d, original: o },
            }),
                u?.(e, i));
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
            imageProps: { src: d, height: h, width: c, original: y, sourceMetadata: v },
        } = e;
        if ((t && u.A.increment({ name: n.K.IMAGE_LOAD_ERROR }), !S.getConfig({ location: "lazy_image" }).enabled))
            return;
        let _ = await fetch(i.url).catch(() => void 0),
            b = _?.headers?.get("content-length"),
            L = null != b ? Number(b) : null,
            f = Math.round(performance.now() - a);
        m.default.track(A.HAw.IMAGE_LOADING_COMPLETED, {
            duration_ms: f,
            requested_height: i.height,
            requested_width: i.width,
            height: h,
            width: c,
            original_url: y,
            url: d,
            requested_url: i.url,
            format: o,
            quality: l,
            state: t ? A.Rv1.ERROR : r,
            data_saving_mode: g.Ay.dataSavingMode,
            low_quality_image_mode: g.Ay.dataSavingMode,
            trigger: s,
            size: L,
            message_id: v?.message?.id,
            message_sent_timestamp: v?.message?.timestamp.getTime(),
            connection_type: p.A.getType(),
            effective_connection_speed: p.A.getEffectiveConnectionSpeed(),
            service_provider: p.A.getServiceProvider(),
        });
    }
    state = { readyState: A.Rv1.LOADING, hasMouseOver: !1, hasFocus: !1 };
    startLoadingTime = performance.now();
    _cancellers = new Set();
    _unmounted = !1;
    _imageRef = a.createRef();
    constructor(e) {
        (super(e),
            (0, c.LE)(this.getSrc(this.getRatio(), I.isAnimated(this.props))) && (this.state.readyState = A.Rv1.READY));
    }
    componentDidMount() {
        let { readyState: e } = this.state;
        if (e === A.Rv1.LOADING)
            if (O.getConfig({ location: "LazyImage_componentDidMount" }).enabled) {
                let e = this._imageRef.current;
                null != e && null != I._lazyLoadIO
                    ? (I._lazyLoadTargets.set(e, this), I._lazyLoadIO.observe(e))
                    : this.loadImage(this.getSrc(this.getRatio(), I.isAnimated(this.props)), this.handleImageLoad);
            } else this.loadImage(this.getSrc(this.getRatio(), I.isAnimated(this.props)), this.handleImageLoad);
        I.isAnimated(this.props) && this.observeVisibility();
    }
    componentDidUpdate(e) {
        let t = I.isAnimated(this.props);
        I.isAnimated(e) !== t && (t ? this.observeVisibility() : this.unobserveVisibility());
    }
    componentWillUnmount() {
        this._unmounted = !0;
        let e = this._imageRef.current;
        (null != e && (I._lazyLoadIO?.unobserve(e), I._lazyLoadTargets.delete(e)),
            I.isAnimated(this.props) && this.unobserveVisibility(),
            this._cancellers.forEach((e) => e()),
            this._cancellers.clear());
    }
    observeVisibility = () => {
        I.visibilityObserver.observe(this, this._imageRef);
    };
    unobserveVisibility = () => {
        I.visibilityObserver.unobserve(this);
    };
    getSrc(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            { src: i, width: s, height: a, maxWidth: r, maxHeight: n, mediaLayoutType: o } = this.props,
            { format: l, quality: d } = I.getFormatQuality({ ...this.props, freeze: t });
        return (0, c.AE)({
            src: i,
            width: s,
            height: a,
            ratio: e,
            maxWidth: o === _.dG.MOSAIC ? r : void 0,
            maxHeight: o === _.dG.MOSAIC ? n : void 0,
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
        return a === _.dG.MOSAIC && r
            ? (0, v.V)({ width: e, height: t, maxWidth: i, maxHeight: s })
            : (0, v.U8)({ width: e, height: t, maxWidth: i, maxHeight: s });
    }
    getType() {
        let { mediaLayoutType: e, responsive: t } = this.props;
        return e ?? (t ? _.dG.RESPONSIVE : _.dG.STATIC);
    }
    _triggerLazyLoad() {
        this._unmounted ||
            this.state.readyState !== A.Rv1.LOADING ||
            this.loadImage(this.getSrc(this.getRatio(), I.isAnimated(this.props)), this.handleImageLoad);
    }
    loadImage(e, t) {
        let { width: i, height: s } = this.props;
        if (((this.startLoadingTime = performance.now()), 1 === i && 1 === s)) return;
        let a = (0, c.yt)(e, (e, i) => {
            (null != a && this._cancellers.delete(a), t?.(e, i));
        });
        null != a && this._cancellers.add(a);
    }
    handleImageLoad = (e, t) => {
        this._unmounted ||
            this.setState({ readyState: e ? A.Rv1.ERROR : A.Rv1.READY }, () => {
                let { format: i, quality: s } = I.getFormatQuality(this.props);
                I.trackLoadingCompleted({
                    error: e,
                    imageData: t,
                    trigger: this.props.trigger ?? "LOAD",
                    startLoadingTime: this.startLoadingTime,
                    readyState: this.state.readyState,
                    format: i,
                    quality: s,
                    imageProps: this.props,
                });
            });
    };
    onMouseEnter = (e) => {
        I.isAnimated(this.props) && this.setState({ hasMouseOver: !0 });
        let { onMouseEnter: t } = this.props;
        t?.(e);
    };
    onMouseLeave = (e) => {
        I.isAnimated(this.props) && this.setState({ hasMouseOver: !1 });
        let { onMouseLeave: t } = this.props;
        t?.(e);
    };
    onFocus = (e) => {
        I.isAnimated(this.props) && this.setState({ hasFocus: !0 });
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
                onContextMenu: n,
                autoPlay: o,
                original: d,
                className: h,
                imageClassName: c,
                children: u,
                animated: g,
                shouldAnimate: p,
                freeze: m,
                width: y,
                height: v,
                minWidth: _,
                minHeight: b,
                maxWidth: L,
                maxHeight: f,
                onClick: R,
                renderAccessory: S,
                tabIndex: M,
                limitResponsiveWidth: w,
                useFullWidth: C,
                placeholder: E,
                placeholderVersion: z,
                dataSafeSrc: T,
                srcIsAnimated: D,
            } = this.props,
            { readyState: k, hasMouseOver: G, hasFocus: P } = this.state,
            F = null != i,
            V = this.getRatio(),
            N = (0, r.clamp)(Math.round(y * V), _ ?? 0, L ?? 1 / 0),
            x = (0, r.clamp)(Math.round(v * V), b ?? 0, f ?? 1 / 0),
            q = O.getConfig({ location: "LazyImage_render" }).enabled,
            j = {
                alt: e,
                readyState: k,
                onContextMenu: n ?? void 0,
                zoomable: F,
                className: h,
                imageClassName: c,
                minWidth: _,
                minHeight: b,
                mediaLayoutType: this.getType(),
                limitResponsiveWidth: w,
                useFullWidth: C,
                tabIndex: M,
                width: N,
                height: x,
                src: "",
                placeholder: E,
                placeholderVersion: z,
                dataSafeSrc: T,
                srcIsAnimated: D,
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
        if (1 === j.width && 1 === j.height) return null;
        switch (
            ((F || null != R) && (j.onClick = this.onClick), a && (j.original = null != d && "" !== d ? d : j.src), k)
        ) {
            case A.Rv1.LOADING:
                null != t && (j.src = t);
                break;
            case A.Rv1.READY:
                if (I.isAnimated(this.props)) {
                    j.onMouseLeave = this.onMouseLeave;
                    let e = (o || G || P) && (null == p || p) && I.visibilityObserver.isVisible(this);
                    (e
                        ? ((j.src = this.getSrc(V, m)), (j.renderAccessory = S))
                        : ((j.src = this.getSrc(V, m || !g || !o)), (j.renderAccessory = this.renderAccessory)),
                        null != u &&
                            (j.children = (t) => {
                                let { src: i, size: s, alt: a, mediaLayoutType: r } = t;
                                return u({ src: i, size: s, animating: e, alt: a, mediaLayoutType: r });
                            }));
                } else j.src = this.getSrc(V);
        }
        return (0, s.jsx)(l._, { disableLoadingSpinner: q, ref: this._imageRef, ...j });
    }
}
let S = (0, d.mj)({
        name: "2026-03-image-load-metrics",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !1 }, 2: { enabled: !0 } },
    }),
    O = (0, d.mj)({
        name: "2026-02-lazy-load-all-images",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    });
