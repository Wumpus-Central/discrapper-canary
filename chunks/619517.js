"use strict";
n.d(t, { Ay: () => y, P8: () => E, bp: () => C, p4: () => I });
var i = n(627968),
    l = n(64700),
    s = n(735438),
    r = n(731738),
    a = n(230109),
    o = n(673698),
    c = n(945810),
    u = n(693875),
    d = n(776231),
    h = n(831062),
    m = n(964404),
    p = n(544180),
    f = n(954571),
    g = n(486020),
    _ = n(515718),
    x = n(652215),
    A = n(838541);
let C = /\.gif($|\?|#)/i,
    E = /\.webp($|\?|#)/i,
    I = /\.avif($|\?|#)/i,
    v = /\.png($|\?|#)/i;
class y extends l.Component {
    static visibilityObserver = new a.j({ threshold: 0.6 });
    static _lazyLoadTargets = new WeakMap();
    static _lazyLoadIO =
        "u" > typeof IntersectionObserver
            ? new IntersectionObserver(
                  (e) => {
                      for (let t of e)
                          if (t.isIntersecting) {
                              let e = y._lazyLoadTargets.get(t.target);
                              null != e &&
                                  (y._lazyLoadIO?.unobserve(t.target),
                                  y._lazyLoadTargets.delete(t.target),
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
        let { src: t, original: n, animated: i, srcIsAnimated: l } = e;
        return (
            i ||
            C.test(null != n && "" !== n ? n : t) ||
            (null != l && l && (E.test(null != n && "" !== n ? n : t) || I.test(null != n && "" !== n ? n : t)))
        );
    }
    static isSrcPNG(e) {
        let { src: t } = e;
        return v.test(t);
    }
    static isSrcAVIF(e) {
        let { src: t } = e;
        return I.test(t);
    }
    static getFormatQuality(e) {
        let { src: t, original: n, animated: i, srcIsAnimated: l, freeze: s = !1 } = e,
            r = null,
            a = null;
        return (
            g.QB && (s || !y.isAnimated({ src: t, original: n, animated: i, srcIsAnimated: l }))
                ? ((r = "webp"), (y.isSrcPNG({ src: t }) || y.isSrcAVIF({ src: t })) && (a = "lossless"))
                : s && (r = "png"),
            { format: r, quality: a }
        );
    }
    static preloadImage(e) {
        let {
            src: t,
            dimensions: { maxWidth: n, maxHeight: i, imageWidth: l, imageHeight: s },
            options: { srcIsAnimated: r, original: a, animated: o, sourceMetadata: c, freeze: u },
            callback: h,
        } = e;
        if (1 === l && 1 === s) return;
        let { format: m, quality: p } = y.getFormatQuality({
                src: t,
                original: a,
                animated: o,
                srcIsAnimated: r,
                freeze: u,
            }),
            f = (0, d.AE)({
                src: t,
                width: l,
                height: s,
                maxWidth: n,
                maxHeight: i,
                srcIsAnimated: r,
                format: m,
                quality: p,
            }),
            g = Date.now();
        return (0, d.yt)(f, (e, n) => {
            y.trackLoadingCompleted({
                error: e,
                imageData: n,
                trigger: "PRELOAD",
                startLoadingTime: g,
                readyState: x.Rv1.READY,
                format: m,
                quality: p,
                imageProps: { src: t, width: l, height: s, sourceMetadata: c, original: a },
            }),
                h?.(e, n);
        });
    }
    static async trackLoadingCompleted(e) {
        let {
            error: t,
            imageData: n,
            trigger: i,
            startLoadingTime: l,
            readyState: s,
            format: a,
            quality: o,
            imageProps: { src: c, height: u, width: d, original: g, sourceMetadata: _ },
        } = e;
        if ((t && h.A.increment({ name: r.K.IMAGE_LOAD_ERROR }), !S.getConfig({ location: "lazy_image" }).enabled))
            return;
        let A = await fetch(n.url).catch(() => void 0),
            C = A?.headers?.get("content-length"),
            E = null != C ? Number(C) : null,
            I = Date.now() - l;
        f.default.track(x.HAw.IMAGE_LOADING_COMPLETED, {
            duration_ms: I,
            requested_height: n.height,
            requested_width: n.width,
            height: u,
            width: d,
            original_url: g,
            url: c,
            requested_url: n.url,
            format: a,
            quality: o,
            state: t ? x.Rv1.ERROR : s,
            data_saving_mode: m.Ay.dataSavingMode,
            low_quality_image_mode: m.Ay.dataSavingMode,
            trigger: i,
            size: E,
            message_id: _?.message?.id,
            message_sent_timestamp: _?.message?.timestamp.getTime(),
            connection_type: p.A.getType(),
            effective_connection_speed: p.A.getEffectiveConnectionSpeed(),
            service_provider: p.A.getServiceProvider(),
        });
    }
    state = { readyState: x.Rv1.LOADING, hasMouseOver: !1, hasFocus: !1 };
    startLoadingTime = Date.now();
    _cancellers = new Set();
    _unmounted = !1;
    _imageRef = l.createRef();
    constructor(e) {
        super(e),
            (0, d.LE)(this.getSrc(this.getRatio(), y.isAnimated(this.props))) && (this.state.readyState = x.Rv1.READY);
    }
    componentDidMount() {
        let { readyState: e } = this.state;
        if (e === x.Rv1.LOADING)
            if (b.getConfig({ location: "LazyImage_componentDidMount" }).enabled) {
                let e = this._imageRef.current;
                null != e && null != y._lazyLoadIO
                    ? (y._lazyLoadTargets.set(e, this), y._lazyLoadIO.observe(e))
                    : this.loadImage(this.getSrc(this.getRatio(), y.isAnimated(this.props)), this.handleImageLoad);
            } else this.loadImage(this.getSrc(this.getRatio(), y.isAnimated(this.props)), this.handleImageLoad);
        y.isAnimated(this.props) && this.observeVisibility();
    }
    componentDidUpdate(e) {
        let t = y.isAnimated(this.props);
        y.isAnimated(e) !== t && (t ? this.observeVisibility() : this.unobserveVisibility());
    }
    componentWillUnmount() {
        this._unmounted = !0;
        let e = this._imageRef.current;
        null != e && (y._lazyLoadIO?.unobserve(e), y._lazyLoadTargets.delete(e)),
            y.isAnimated(this.props) && this.unobserveVisibility(),
            this._cancellers.forEach((e) => e()),
            this._cancellers.clear();
    }
    observeVisibility = () => {
        y.visibilityObserver.observe(this, this._imageRef);
    };
    unobserveVisibility = () => {
        y.visibilityObserver.unobserve(this);
    };
    getSrc(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            { src: n, width: i, height: l, maxWidth: s, maxHeight: r, mediaLayoutType: a } = this.props,
            { format: o, quality: c } = y.getFormatQuality({ ...this.props, freeze: t });
        return (0, d.AE)({
            src: n,
            width: i,
            height: l,
            ratio: e,
            maxWidth: a === A.dG.MOSAIC ? s : void 0,
            maxHeight: a === A.dG.MOSAIC ? r : void 0,
            format: o,
            quality: c,
            animated: !t,
            srcIsAnimated: this.props.srcIsAnimated,
        });
    }
    getRatio() {
        let {
            width: e,
            height: t,
            maxWidth: n = 400,
            maxHeight: i = 300,
            mediaLayoutType: l,
            useFullWidth: s,
        } = this.props;
        return l === A.dG.MOSAIC && s
            ? (0, _.V)({ width: e, height: t, maxWidth: n, maxHeight: i })
            : (0, _.U8)({ width: e, height: t, maxWidth: n, maxHeight: i });
    }
    getType() {
        let { mediaLayoutType: e, responsive: t } = this.props;
        return e ?? (t ? A.dG.RESPONSIVE : A.dG.STATIC);
    }
    _triggerLazyLoad() {
        this._unmounted ||
            this.state.readyState !== x.Rv1.LOADING ||
            this.loadImage(this.getSrc(this.getRatio(), y.isAnimated(this.props)), this.handleImageLoad);
    }
    loadImage(e, t) {
        let { width: n, height: i } = this.props;
        if (((this.startLoadingTime = Date.now()), 1 === n && 1 === i)) return;
        let l = (0, d.yt)(e, (e, n) => {
            null != l && this._cancellers.delete(l), t?.(e, n);
        });
        null != l && this._cancellers.add(l);
    }
    handleImageLoad = (e, t) => {
        this._unmounted ||
            this.setState({ readyState: e ? x.Rv1.ERROR : x.Rv1.READY }, () => {
                let { format: n, quality: i } = y.getFormatQuality(this.props);
                y.trackLoadingCompleted({
                    error: e,
                    imageData: t,
                    trigger: this.props.trigger ?? "LOAD",
                    startLoadingTime: this.startLoadingTime,
                    readyState: this.state.readyState,
                    format: n,
                    quality: i,
                    imageProps: this.props,
                });
            });
    };
    onMouseEnter = (e) => {
        y.isAnimated(this.props) && this.setState({ hasMouseOver: !0 });
        let { onMouseEnter: t } = this.props;
        t?.(e);
    };
    onMouseLeave = (e) => {
        y.isAnimated(this.props) && this.setState({ hasMouseOver: !1 });
        let { onMouseLeave: t } = this.props;
        t?.(e);
    };
    onFocus = (e) => {
        y.isAnimated(this.props) && this.setState({ hasFocus: !0 });
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
            n = null != this.props.renderAccessory ? this.props.renderAccessory() : null;
        return this.props.shouldRenderAccessory ? (e || t ? n : (0, i.jsx)(u.A, {})) : null;
    };
    render() {
        let {
                alt: e,
                zoomThumbnailPlaceholder: t,
                onZoom: n,
                shouldLink: l,
                onContextMenu: r,
                autoPlay: a,
                original: c,
                className: u,
                imageClassName: d,
                children: h,
                animated: m,
                shouldAnimate: p,
                width: f,
                height: g,
                minWidth: _,
                minHeight: A,
                maxWidth: C,
                maxHeight: E,
                onClick: I,
                renderAccessory: v,
                tabIndex: S,
                limitResponsiveWidth: N,
                useFullWidth: T,
                placeholder: j,
                placeholderVersion: R,
                dataSafeSrc: w,
                srcIsAnimated: L,
            } = this.props,
            { readyState: M, hasMouseOver: k, hasFocus: O } = this.state,
            P = null != n,
            D = this.getRatio(),
            U = (0, s.clamp)(Math.round(f * D), _ ?? 0, C ?? 1 / 0),
            V = (0, s.clamp)(Math.round(g * D), A ?? 0, E ?? 1 / 0),
            G = b.getConfig({ location: "LazyImage_render" }).enabled,
            F = {
                alt: e,
                readyState: M,
                onContextMenu: r ?? void 0,
                zoomable: P,
                className: u,
                imageClassName: d,
                minWidth: _,
                minHeight: A,
                mediaLayoutType: this.getType(),
                limitResponsiveWidth: N,
                useFullWidth: T,
                tabIndex: S,
                width: U,
                height: V,
                src: "",
                placeholder: j,
                placeholderVersion: R,
                dataSafeSrc: w,
                srcIsAnimated: L,
                children:
                    null != h
                        ? (e) => {
                              let { src: t, size: n, alt: i, mediaLayoutType: l } = e;
                              return h({ src: t, size: n, alt: i, mediaLayoutType: l });
                          }
                        : void 0,
                onMouseEnter: this.onMouseEnter,
                onMouseLeave: this.onMouseLeave,
                onFocus: this.onFocus,
                onBlur: this.onBlur,
            };
        if (1 === F.width && 1 === F.height) return null;
        switch (
            ((P || null != I) && (F.onClick = this.onClick), l && (F.original = null != c && "" !== c ? c : F.src), M)
        ) {
            case x.Rv1.LOADING:
                null != t && (F.src = t);
                break;
            case x.Rv1.READY:
                if (y.isAnimated(this.props)) {
                    F.onMouseLeave = this.onMouseLeave;
                    let e = (a || k || O) && (null == p || p) && y.visibilityObserver.isVisible(this);
                    e
                        ? ((F.src = this.getSrc(D)), (F.renderAccessory = v))
                        : ((F.src = this.getSrc(D, !m || !a)), (F.renderAccessory = this.renderAccessory)),
                        null != h &&
                            (F.children = (t) => {
                                let { src: n, size: i, alt: l, mediaLayoutType: s } = t;
                                return h({ src: n, size: i, animating: e, alt: l, mediaLayoutType: s });
                            });
                } else F.src = this.getSrc(D);
        }
        return (0, i.jsx)(o._, { disableLoadingSpinner: G, ref: this._imageRef, ...F });
    }
}
let S = (0, c.mj)({
        name: "2026-03-image-load-metrics",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !1 }, 2: { enabled: !0 } },
    }),
    b = (0, c.mj)({
        name: "2026-02-lazy-load-all-images",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    });
