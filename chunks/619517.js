"use strict";
n.d(t, { Ay: () => R, P8: () => S, bp: () => T, p4: () => y });
var r = n(627968),
    i = n(64700),
    s = n(735438),
    a = n(731738),
    o = n(230109),
    l = n(673698),
    u = n(600975),
    c = n(945810),
    d = n(693875),
    _ = n(776231),
    f = n(831062),
    p = n(964404),
    h = n(544180),
    m = n(954571),
    E = n(486020),
    g = n(515718),
    A = n(652215),
    I = n(838541);
let T = /\.gif($|\?|#)/i,
    S = /\.webp($|\?|#)/i,
    y = /\.avif($|\?|#)/i,
    v = /\.png($|\?|#)/i,
    N = 400,
    C = 300,
    b = 300;
class R extends i.Component {
    static visibilityObserver = new o.j({ threshold: 0.6 });
    static _lazyLoadTargets = new WeakMap();
    static _lazyLoadIO =
        "u" > typeof IntersectionObserver
            ? new IntersectionObserver(
                  (e) => {
                      for (let t of e)
                          if (t.isIntersecting) {
                              let e = R._lazyLoadTargets.get(t.target);
                              null != e &&
                                  (R._lazyLoadIO?.unobserve(t.target),
                                  R._lazyLoadTargets.delete(t.target),
                                  e._triggerLazyLoad());
                          }
                  },
                  { threshold: 0, rootMargin: `${b}px` },
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
        let { src: t, original: n, animated: r, srcIsAnimated: i } = e;
        return (
            r ||
            T.test(null != n && "" !== n ? n : t) ||
            (null != i && i && (S.test(null != n && "" !== n ? n : t) || y.test(null != n && "" !== n ? n : t)))
        );
    }
    static isSrcPNG(e) {
        let { src: t } = e;
        return v.test(t);
    }
    static isSrcAVIF(e) {
        let { src: t } = e;
        return y.test(t);
    }
    static getFormatQuality(e) {
        let { src: t, original: n, animated: r, srcIsAnimated: i, freeze: s = !1 } = e,
            a = null,
            o = null;
        return (
            E.QB && (s || !R.isAnimated({ src: t, original: n, animated: r, srcIsAnimated: i }))
                ? ((a = "webp"), (R.isSrcPNG({ src: t }) || R.isSrcAVIF({ src: t })) && (o = "lossless"))
                : s && (a = "png"),
            { format: a, quality: o }
        );
    }
    static preloadImage(e) {
        let {
            src: t,
            dimensions: { maxWidth: n, maxHeight: r, imageWidth: i, imageHeight: s },
            options: { srcIsAnimated: a, original: o, animated: l, sourceMetadata: u, freeze: c },
            callback: d,
        } = e;
        if (1 === i && 1 === s) return;
        let { format: f, quality: p } = R.getFormatQuality({
                src: t,
                original: o,
                animated: l,
                srcIsAnimated: a,
                freeze: c,
            }),
            h = (0, _.AE)({
                src: t,
                width: i,
                height: s,
                maxWidth: n,
                maxHeight: r,
                srcIsAnimated: a,
                format: f,
                quality: p,
            }),
            m = Date.now();
        return (0, _.yt)(h, (e, n) => {
            R.trackLoadingCompleted({
                error: e,
                imageData: n,
                trigger: "PRELOAD",
                startLoadingTime: m,
                readyState: A.Rv1.READY,
                format: f,
                quality: p,
                imageProps: { src: t, width: i, height: s, sourceMetadata: u, original: o },
            }),
                d?.(e, n);
        });
    }
    static async trackLoadingCompleted(e) {
        let {
            error: t,
            imageData: n,
            trigger: r,
            startLoadingTime: i,
            readyState: s,
            format: o,
            quality: l,
            imageProps: { src: u, height: c, width: d, original: _, sourceMetadata: E },
        } = e;
        if (
            (t && f.A.increment({ name: a.K.IMAGE_LOAD_ERROR }),
            !O.getCurrentConfig({ location: "lazy_image" }).enabled)
        )
            return;
        let g = await fetch(n.url).catch(() => void 0),
            I = g?.headers?.get("content-length"),
            T = null != I ? Number(I) : null,
            S = Date.now() - i;
        m.default.track(A.HAw.IMAGE_LOADING_COMPLETED, {
            duration_ms: S,
            requested_height: n.height,
            requested_width: n.width,
            height: c,
            width: d,
            original_url: _,
            url: u,
            requested_url: n.url,
            format: o,
            quality: l,
            state: t ? A.Rv1.ERROR : s,
            data_saving_mode: p.Ay.dataSavingMode,
            low_quality_image_mode: p.Ay.dataSavingMode,
            trigger: r,
            size: T,
            message_id: E?.message?.id,
            message_sent_timestamp: E?.message?.timestamp.getTime(),
            connection_type: h.A.getType(),
            effective_connection_speed: h.A.getEffectiveConnectionSpeed(),
            service_provider: h.A.getServiceProvider(),
        });
    }
    state = { readyState: A.Rv1.LOADING, hasMouseOver: !1, hasFocus: !1 };
    startLoadingTime = Date.now();
    _cancellers = new Set();
    _unmounted = !1;
    _imageRef = i.createRef();
    constructor(e) {
        super(e),
            (0, _.LE)(this.getSrc(this.getRatio(), R.isAnimated(this.props))) && (this.state.readyState = A.Rv1.READY);
    }
    componentDidMount() {
        let { readyState: e } = this.state;
        if (e === A.Rv1.LOADING)
            if (D.getConfig({ location: "LazyImage_componentDidMount" }).enabled) {
                let e = this._imageRef.current;
                null != e && null != R._lazyLoadIO
                    ? (R._lazyLoadTargets.set(e, this), R._lazyLoadIO.observe(e))
                    : this.loadImage(this.getSrc(this.getRatio(), R.isAnimated(this.props)), this.handleImageLoad);
            } else this.loadImage(this.getSrc(this.getRatio(), R.isAnimated(this.props)), this.handleImageLoad);
        R.isAnimated(this.props) && this.observeVisibility();
    }
    componentDidUpdate(e) {
        let t = R.isAnimated(this.props);
        R.isAnimated(e) !== t && (t ? this.observeVisibility() : this.unobserveVisibility());
    }
    componentWillUnmount() {
        this._unmounted = !0;
        let e = this._imageRef.current;
        null != e && (R._lazyLoadIO?.unobserve(e), R._lazyLoadTargets.delete(e)),
            R.isAnimated(this.props) && this.unobserveVisibility(),
            this._cancellers.forEach((e) => e()),
            this._cancellers.clear();
    }
    observeVisibility = () => {
        R.visibilityObserver.observe(this, this._imageRef);
    };
    unobserveVisibility = () => {
        R.visibilityObserver.unobserve(this);
    };
    getSrc(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            { src: n, width: r, height: i, maxWidth: s, maxHeight: a, mediaLayoutType: o } = this.props,
            { format: l, quality: u } = R.getFormatQuality({ ...this.props, freeze: t });
        return (0, _.AE)({
            src: n,
            width: r,
            height: i,
            ratio: e,
            maxWidth: o === I.dG.MOSAIC ? s : void 0,
            maxHeight: o === I.dG.MOSAIC ? a : void 0,
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
            maxWidth: n = N,
            maxHeight: r = C,
            mediaLayoutType: i,
            useFullWidth: s,
        } = this.props;
        return i === I.dG.MOSAIC && s
            ? (0, g.V)({ width: e, height: t, maxWidth: n, maxHeight: r })
            : (0, g.U8)({ width: e, height: t, maxWidth: n, maxHeight: r });
    }
    getType() {
        let { mediaLayoutType: e, responsive: t } = this.props;
        return e ?? (t ? I.dG.RESPONSIVE : I.dG.STATIC);
    }
    _triggerLazyLoad() {
        this._unmounted ||
            this.state.readyState !== A.Rv1.LOADING ||
            this.loadImage(this.getSrc(this.getRatio(), R.isAnimated(this.props)), this.handleImageLoad);
    }
    loadImage(e, t) {
        let { width: n, height: r } = this.props;
        if (((this.startLoadingTime = Date.now()), 1 === n && 1 === r)) return;
        let i = (0, _.yt)(e, (e, n) => {
            null != i && this._cancellers.delete(i), t?.(e, n);
        });
        null != i && this._cancellers.add(i);
    }
    handleImageLoad = (e, t) => {
        this._unmounted ||
            this.setState({ readyState: e ? A.Rv1.ERROR : A.Rv1.READY }, () => {
                let { format: n, quality: r } = R.getFormatQuality(this.props);
                R.trackLoadingCompleted({
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
        R.isAnimated(this.props) && this.setState({ hasMouseOver: !0 });
        let { onMouseEnter: t } = this.props;
        t?.(e);
    };
    onMouseLeave = (e) => {
        R.isAnimated(this.props) && this.setState({ hasMouseOver: !1 });
        let { onMouseLeave: t } = this.props;
        t?.(e);
    };
    onFocus = (e) => {
        R.isAnimated(this.props) && this.setState({ hasFocus: !0 });
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
        return this.props.shouldRenderAccessory ? (n ? i : (0, r.jsx)(d.A, {})) : null;
    };
    render() {
        let {
                alt: e,
                zoomThumbnailPlaceholder: t,
                onZoom: n,
                shouldLink: i,
                onContextMenu: a,
                autoPlay: o,
                original: u,
                className: c,
                imageClassName: d,
                children: _,
                animated: f,
                shouldAnimate: p,
                width: h,
                height: m,
                minWidth: E,
                minHeight: g,
                maxWidth: I,
                maxHeight: T,
                onClick: S,
                renderAccessory: y,
                tabIndex: v,
                limitResponsiveWidth: N,
                useFullWidth: C,
                placeholder: b,
                placeholderVersion: O,
                dataSafeSrc: D,
                srcIsAnimated: L,
            } = this.props,
            { readyState: w, hasMouseOver: x, hasFocus: M } = this.state,
            P = null != n,
            k = this.getRatio(),
            U = (0, s.clamp)(Math.round(h * k), E ?? 0, I ?? 1 / 0),
            G = (0, s.clamp)(Math.round(m * k), g ?? 0, T ?? 1 / 0),
            F = {
                alt: e,
                readyState: w,
                onContextMenu: a ?? void 0,
                zoomable: P,
                className: c,
                imageClassName: d,
                minWidth: E,
                minHeight: g,
                mediaLayoutType: this.getType(),
                limitResponsiveWidth: N,
                useFullWidth: C,
                tabIndex: v,
                width: U,
                height: G,
                src: "",
                placeholder: b,
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
        if (1 === F.width && 1 === F.height) return null;
        switch (
            ((P || null != S) && (F.onClick = this.onClick), i && (F.original = null != u && "" !== u ? u : F.src), w)
        ) {
            case A.Rv1.LOADING:
                null != t && (F.src = t);
                break;
            case A.Rv1.READY:
                if (R.isAnimated(this.props)) {
                    F.onMouseLeave = this.onMouseLeave;
                    let e = (o || x || M) && (null == p || p) && R.visibilityObserver.isVisible(this);
                    e
                        ? ((F.src = this.getSrc(k)), (F.renderAccessory = y))
                        : ((F.src = this.getSrc(k, !f || !o)), (F.renderAccessory = this.renderAccessory)),
                        null != _ &&
                            (F.children = (t) => {
                                let { src: n, size: r, alt: i, mediaLayoutType: s } = t;
                                return _({ src: n, size: r, animating: e, alt: i, mediaLayoutType: s });
                            });
                } else F.src = this.getSrc(k);
        }
        return (0, r.jsx)(l._, { ref: this._imageRef, ...F });
    }
}
let O = (0, u.C)({
        kind: "user",
        id: "2024-02_image_load_metrics",
        label: "Image load metrics Config User Experiment",
        defaultConfig: { enabled: !1 },
        treatments: [
            { id: 1, label: "Do not send metrics for image load", config: { enabled: !1 } },
            { id: 2, label: "Send metrics for image load", config: { enabled: !0 } },
        ],
    }),
    D = (0, c.mj)({
        name: "2026-02-lazy-load-all-images",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    });
