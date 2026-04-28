"use strict";
n.d(t, { Ay: () => y, P8: () => E, bp: () => A, p4: () => I });
var l = n(627968),
    i = n(64700),
    s = n(735438),
    a = n(731738),
    r = n(230109),
    o = n(144165),
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
    C = n(838541);
let A = /\.gif($|\?|#)/i,
    E = /\.webp($|\?|#)/i,
    I = /\.avif($|\?|#)/i,
    v = /\.png($|\?|#)/i;
class y extends i.Component {
    static visibilityObserver = new r.j({ threshold: 0.6 });
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
        let { src: t, original: n, animated: l, srcIsAnimated: i } = e;
        return (
            l ||
            A.test(null != n && "" !== n ? n : t) ||
            (null != i && i && (E.test(null != n && "" !== n ? n : t) || I.test(null != n && "" !== n ? n : t)))
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
        let { src: t, original: n, animated: l, srcIsAnimated: i, freeze: s = !1 } = e,
            a = null,
            r = null;
        return (
            g.QB && (s || !y.isAnimated({ src: t, original: n, animated: l, srcIsAnimated: i }))
                ? ((a = "webp"), (y.isSrcPNG({ src: t }) || y.isSrcAVIF({ src: t })) && (r = "lossless"))
                : s && (a = "png"),
            { format: a, quality: r }
        );
    }
    static preloadImage(e) {
        let {
            src: t,
            dimensions: { maxWidth: n, maxHeight: l, imageWidth: i, imageHeight: s },
            options: { srcIsAnimated: a, original: r, animated: o, sourceMetadata: c, freeze: u },
            callback: h,
        } = e;
        if (1 === i && 1 === s) return;
        let { format: m, quality: p } = y.getFormatQuality({
                src: t,
                original: r,
                animated: o,
                srcIsAnimated: a,
                freeze: u,
            }),
            f = (0, d.AE)({
                src: t,
                width: i,
                height: s,
                maxWidth: n,
                maxHeight: l,
                srcIsAnimated: a,
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
                imageProps: { src: t, width: i, height: s, sourceMetadata: c, original: r },
            }),
                h?.(e, n);
        });
    }
    static async trackLoadingCompleted(e) {
        let {
            error: t,
            imageData: n,
            trigger: l,
            startLoadingTime: i,
            readyState: s,
            format: r,
            quality: o,
            imageProps: { src: c, height: u, width: d, original: g, sourceMetadata: _ },
        } = e;
        if ((t && h.A.increment({ name: a.K.IMAGE_LOAD_ERROR }), !b.getConfig({ location: "lazy_image" }).enabled))
            return;
        let C = await fetch(n.url).catch(() => void 0),
            A = C?.headers?.get("content-length"),
            E = null != A ? Number(A) : null,
            I = Date.now() - i;
        f.default.track(x.HAw.IMAGE_LOADING_COMPLETED, {
            duration_ms: I,
            requested_height: n.height,
            requested_width: n.width,
            height: u,
            width: d,
            original_url: g,
            url: c,
            requested_url: n.url,
            format: r,
            quality: o,
            state: t ? x.Rv1.ERROR : s,
            data_saving_mode: m.Ay.dataSavingMode,
            low_quality_image_mode: m.Ay.dataSavingMode,
            trigger: l,
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
    _imageRef = i.createRef();
    constructor(e) {
        super(e),
            (0, d.LE)(this.getSrc(this.getRatio(), y.isAnimated(this.props))) && (this.state.readyState = x.Rv1.READY);
    }
    componentDidMount() {
        let { readyState: e } = this.state;
        if (e === x.Rv1.LOADING)
            if (S.getConfig({ location: "LazyImage_componentDidMount" }).enabled) {
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
            { src: n, width: l, height: i, maxWidth: s, maxHeight: a, mediaLayoutType: r } = this.props,
            { format: o, quality: c } = y.getFormatQuality({ ...this.props, freeze: t });
        return (0, d.AE)({
            src: n,
            width: l,
            height: i,
            ratio: e,
            maxWidth: r === C.dG.MOSAIC ? s : void 0,
            maxHeight: r === C.dG.MOSAIC ? a : void 0,
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
            maxHeight: l = 300,
            mediaLayoutType: i,
            useFullWidth: s,
        } = this.props;
        return i === C.dG.MOSAIC && s
            ? (0, _.V)({ width: e, height: t, maxWidth: n, maxHeight: l })
            : (0, _.U8)({ width: e, height: t, maxWidth: n, maxHeight: l });
    }
    getType() {
        let { mediaLayoutType: e, responsive: t } = this.props;
        return e ?? (t ? C.dG.RESPONSIVE : C.dG.STATIC);
    }
    _triggerLazyLoad() {
        this._unmounted ||
            this.state.readyState !== x.Rv1.LOADING ||
            this.loadImage(this.getSrc(this.getRatio(), y.isAnimated(this.props)), this.handleImageLoad);
    }
    loadImage(e, t) {
        let { width: n, height: l } = this.props;
        if (((this.startLoadingTime = Date.now()), 1 === n && 1 === l)) return;
        let i = (0, d.yt)(e, (e, n) => {
            null != i && this._cancellers.delete(i), t?.(e, n);
        });
        null != i && this._cancellers.add(i);
    }
    handleImageLoad = (e, t) => {
        this._unmounted ||
            this.setState({ readyState: e ? x.Rv1.ERROR : x.Rv1.READY }, () => {
                let { format: n, quality: l } = y.getFormatQuality(this.props);
                y.trackLoadingCompleted({
                    error: e,
                    imageData: t,
                    trigger: this.props.trigger ?? "LOAD",
                    startLoadingTime: this.startLoadingTime,
                    readyState: this.state.readyState,
                    format: n,
                    quality: l,
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
        return this.props.shouldRenderAccessory ? (e || t ? n : (0, l.jsx)(u.A, {})) : null;
    };
    render() {
        let {
                alt: e,
                zoomThumbnailPlaceholder: t,
                onZoom: n,
                shouldLink: i,
                onContextMenu: a,
                autoPlay: r,
                original: c,
                className: u,
                imageClassName: d,
                children: h,
                animated: m,
                shouldAnimate: p,
                width: f,
                height: g,
                minWidth: _,
                minHeight: C,
                maxWidth: A,
                maxHeight: E,
                onClick: I,
                renderAccessory: v,
                tabIndex: b,
                limitResponsiveWidth: N,
                useFullWidth: j,
                placeholder: T,
                placeholderVersion: w,
                dataSafeSrc: R,
                srcIsAnimated: L,
            } = this.props,
            { readyState: k, hasMouseOver: O, hasFocus: M } = this.state,
            P = null != n,
            D = this.getRatio(),
            U = (0, s.clamp)(Math.round(f * D), _ ?? 0, A ?? 1 / 0),
            V = (0, s.clamp)(Math.round(g * D), C ?? 0, E ?? 1 / 0),
            G = S.getConfig({ location: "LazyImage_render" }).enabled,
            F = {
                alt: e,
                readyState: k,
                onContextMenu: a ?? void 0,
                zoomable: P,
                className: u,
                imageClassName: d,
                minWidth: _,
                minHeight: C,
                mediaLayoutType: this.getType(),
                limitResponsiveWidth: N,
                useFullWidth: j,
                tabIndex: b,
                width: U,
                height: V,
                src: "",
                placeholder: T,
                placeholderVersion: w,
                dataSafeSrc: R,
                srcIsAnimated: L,
                children:
                    null != h
                        ? (e) => {
                              let { src: t, size: n, alt: l, mediaLayoutType: i } = e;
                              return h({ src: t, size: n, alt: l, mediaLayoutType: i });
                          }
                        : void 0,
                onMouseEnter: this.onMouseEnter,
                onMouseLeave: this.onMouseLeave,
                onFocus: this.onFocus,
                onBlur: this.onBlur,
            };
        if (1 === F.width && 1 === F.height) return null;
        switch (
            ((P || null != I) && (F.onClick = this.onClick), i && (F.original = null != c && "" !== c ? c : F.src), k)
        ) {
            case x.Rv1.LOADING:
                null != t && (F.src = t);
                break;
            case x.Rv1.READY:
                if (y.isAnimated(this.props)) {
                    F.onMouseLeave = this.onMouseLeave;
                    let e = (r || O || M) && (null == p || p) && y.visibilityObserver.isVisible(this);
                    e
                        ? ((F.src = this.getSrc(D)), (F.renderAccessory = v))
                        : ((F.src = this.getSrc(D, !m || !r)), (F.renderAccessory = this.renderAccessory)),
                        null != h &&
                            (F.children = (t) => {
                                let { src: n, size: l, alt: i, mediaLayoutType: s } = t;
                                return h({ src: n, size: l, animating: e, alt: i, mediaLayoutType: s });
                            });
                } else F.src = this.getSrc(D);
        }
        return (0, l.jsx)(o._, { disableLoadingSpinner: G, ref: this._imageRef, ...F });
    }
}
let b = (0, c.mj)({
        name: "2026-03-image-load-metrics",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !1 }, 2: { enabled: !0 } },
    }),
    S = (0, c.mj)({
        name: "2026-02-lazy-load-all-images",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    });
