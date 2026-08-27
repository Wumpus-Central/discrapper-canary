"use strict";
n.d(t, { Ay: () => N, P8: () => I, bp: () => E, p4: () => y });
var l = n(477900),
    i = n(582128),
    s = n(435558),
    r = n(731738),
    a = n(269115),
    o = n(144165),
    u = n(945810),
    c = n(693875),
    d = n(776231),
    h = n(807393),
    m = n(742023),
    f = n(544180),
    p = n(174459),
    g = n(486020),
    x = n(515718),
    A = n(652215),
    C = n(838541);
let E = /\.gif($|\?|#)/i,
    I = /\.webp($|\?|#)/i,
    y = /\.avif($|\?|#)/i,
    S = /\.png($|\?|#)/i;
class N extends i.Component {
    static visibilityObserver = new a.j({ threshold: 0.6 });
    static _lazyLoadTargets = new WeakMap();
    static _lazyLoadIO =
        "u" > typeof IntersectionObserver
            ? new IntersectionObserver(
                  (e) => {
                      for (let t of e)
                          if (t.isIntersecting) {
                              let e = N._lazyLoadTargets.get(t.target);
                              null != e &&
                                  (N._lazyLoadIO?.unobserve(t.target),
                                  N._lazyLoadTargets.delete(t.target),
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
            E.test(null != n && "" !== n ? n : t) ||
            (null != i && i && (I.test(null != n && "" !== n ? n : t) || y.test(null != n && "" !== n ? n : t)))
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
        let { src: t, original: n, animated: l, srcIsAnimated: i, freeze: s = !1 } = e,
            r = null,
            a = null;
        return (
            g.QB && (s || !N.isAnimated({ src: t, original: n, animated: l, srcIsAnimated: i }))
                ? ((r = "webp"), (N.isSrcPNG({ src: t }) || N.isSrcAVIF({ src: t })) && (a = "lossless"))
                : s && (r = "png"),
            { format: r, quality: a }
        );
    }
    static preloadImage(e) {
        let {
            src: t,
            dimensions: { maxWidth: n, maxHeight: l, imageWidth: i, imageHeight: s },
            options: { srcIsAnimated: r, original: a, animated: o, sourceMetadata: u, freeze: c },
            callback: h,
        } = e;
        if (1 === i && 1 === s) return;
        let { format: m, quality: f } = N.getFormatQuality({
                src: t,
                original: a,
                animated: o,
                srcIsAnimated: r,
                freeze: c,
            }),
            p = (0, d.AE)({
                src: t,
                width: i,
                height: s,
                maxWidth: n,
                maxHeight: l,
                srcIsAnimated: r,
                format: m,
                quality: f,
            }),
            g = Date.now();
        return (0, d.yt)(p, (e, n) => {
            N.trackLoadingCompleted({
                error: e,
                imageData: n,
                trigger: "PRELOAD",
                startLoadingTime: g,
                readyState: A.Rv1.READY,
                format: m,
                quality: f,
                imageProps: { src: t, width: i, height: s, sourceMetadata: u, original: a },
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
            format: a,
            quality: o,
            imageProps: { src: u, height: c, width: d, original: g, sourceMetadata: x },
        } = e;
        if ((t && h.A.increment({ name: r.K.IMAGE_LOAD_ERROR }), !v.getConfig({ location: "lazy_image" }).enabled))
            return;
        let C = await fetch(n.url).catch(() => void 0),
            E = C?.headers?.get("content-length"),
            I = null != E ? Number(E) : null,
            y = Date.now() - i;
        p.default.track(A.HAw.IMAGE_LOADING_COMPLETED, {
            duration_ms: y,
            requested_height: n.height,
            requested_width: n.width,
            height: c,
            width: d,
            original_url: g,
            url: u,
            requested_url: n.url,
            format: a,
            quality: o,
            state: t ? A.Rv1.ERROR : s,
            data_saving_mode: m.Ay.dataSavingMode,
            low_quality_image_mode: m.Ay.dataSavingMode,
            trigger: l,
            size: I,
            message_id: x?.message?.id,
            message_sent_timestamp: x?.message?.timestamp.getTime(),
            connection_type: f.A.getType(),
            effective_connection_speed: f.A.getEffectiveConnectionSpeed(),
            service_provider: f.A.getServiceProvider(),
        });
    }
    state = { readyState: A.Rv1.LOADING, hasMouseOver: !1, hasFocus: !1 };
    startLoadingTime = Date.now();
    _cancellers = new Set();
    _unmounted = !1;
    _imageRef = i.createRef();
    constructor(e) {
        super(e),
            (0, d.LE)(this.getSrc(this.getRatio(), N.isAnimated(this.props))) && (this.state.readyState = A.Rv1.READY);
    }
    componentDidMount() {
        let { readyState: e } = this.state;
        if (e === A.Rv1.LOADING)
            if (_.getConfig({ location: "LazyImage_componentDidMount" }).enabled) {
                let e = this._imageRef.current;
                null != e && null != N._lazyLoadIO
                    ? (N._lazyLoadTargets.set(e, this), N._lazyLoadIO.observe(e))
                    : this.loadImage(this.getSrc(this.getRatio(), N.isAnimated(this.props)), this.handleImageLoad);
            } else this.loadImage(this.getSrc(this.getRatio(), N.isAnimated(this.props)), this.handleImageLoad);
        N.isAnimated(this.props) && this.observeVisibility();
    }
    componentDidUpdate(e) {
        let t = N.isAnimated(this.props);
        N.isAnimated(e) !== t && (t ? this.observeVisibility() : this.unobserveVisibility());
    }
    componentWillUnmount() {
        this._unmounted = !0;
        let e = this._imageRef.current;
        null != e && (N._lazyLoadIO?.unobserve(e), N._lazyLoadTargets.delete(e)),
            N.isAnimated(this.props) && this.unobserveVisibility(),
            this._cancellers.forEach((e) => e()),
            this._cancellers.clear();
    }
    observeVisibility = () => {
        N.visibilityObserver.observe(this, this._imageRef);
    };
    unobserveVisibility = () => {
        N.visibilityObserver.unobserve(this);
    };
    getSrc(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            { src: n, width: l, height: i, maxWidth: s, maxHeight: r, mediaLayoutType: a } = this.props,
            { format: o, quality: u } = N.getFormatQuality({ ...this.props, freeze: t });
        return (0, d.AE)({
            src: n,
            width: l,
            height: i,
            ratio: e,
            maxWidth: a === C.dG.MOSAIC ? s : void 0,
            maxHeight: a === C.dG.MOSAIC ? r : void 0,
            format: o,
            quality: u,
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
            ? (0, x.V)({ width: e, height: t, maxWidth: n, maxHeight: l })
            : (0, x.U8)({ width: e, height: t, maxWidth: n, maxHeight: l });
    }
    getType() {
        let { mediaLayoutType: e, responsive: t } = this.props;
        return e ?? (t ? C.dG.RESPONSIVE : C.dG.STATIC);
    }
    _triggerLazyLoad() {
        this._unmounted ||
            this.state.readyState !== A.Rv1.LOADING ||
            this.loadImage(this.getSrc(this.getRatio(), N.isAnimated(this.props)), this.handleImageLoad);
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
            this.setState({ readyState: e ? A.Rv1.ERROR : A.Rv1.READY }, () => {
                let { format: n, quality: l } = N.getFormatQuality(this.props);
                N.trackLoadingCompleted({
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
        N.isAnimated(this.props) && this.setState({ hasMouseOver: !0 });
        let { onMouseEnter: t } = this.props;
        t?.(e);
    };
    onMouseLeave = (e) => {
        N.isAnimated(this.props) && this.setState({ hasMouseOver: !1 });
        let { onMouseLeave: t } = this.props;
        t?.(e);
    };
    onFocus = (e) => {
        N.isAnimated(this.props) && this.setState({ hasFocus: !0 });
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
        return this.props.shouldRenderAccessory ? (e || t ? n : (0, l.jsx)(c.A, {})) : null;
    };
    render() {
        let {
                alt: e,
                zoomThumbnailPlaceholder: t,
                onZoom: n,
                shouldLink: i,
                onContextMenu: r,
                autoPlay: a,
                original: u,
                className: c,
                imageClassName: d,
                children: h,
                animated: m,
                shouldAnimate: f,
                freeze: p,
                width: g,
                height: x,
                minWidth: C,
                minHeight: E,
                maxWidth: I,
                maxHeight: y,
                onClick: S,
                renderAccessory: v,
                tabIndex: j,
                limitResponsiveWidth: T,
                useFullWidth: b,
                placeholder: R,
                placeholderVersion: O,
                dataSafeSrc: M,
                srcIsAnimated: L,
            } = this.props,
            { readyState: k, hasMouseOver: w, hasFocus: P } = this.state,
            D = null != n,
            U = this.getRatio(),
            G = (0, s.clamp)(Math.round(g * U), C ?? 0, I ?? 1 / 0),
            V = (0, s.clamp)(Math.round(x * U), E ?? 0, y ?? 1 / 0),
            F = _.getConfig({ location: "LazyImage_render" }).enabled,
            H = {
                alt: e,
                readyState: k,
                onContextMenu: r ?? void 0,
                zoomable: D,
                className: c,
                imageClassName: d,
                minWidth: C,
                minHeight: E,
                mediaLayoutType: this.getType(),
                limitResponsiveWidth: T,
                useFullWidth: b,
                tabIndex: j,
                width: G,
                height: V,
                src: "",
                placeholder: R,
                placeholderVersion: O,
                dataSafeSrc: M,
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
        if (1 === H.width && 1 === H.height) return null;
        switch (
            ((D || null != S) && (H.onClick = this.onClick), i && (H.original = null != u && "" !== u ? u : H.src), k)
        ) {
            case A.Rv1.LOADING:
                null != t && (H.src = t);
                break;
            case A.Rv1.READY:
                if (N.isAnimated(this.props)) {
                    H.onMouseLeave = this.onMouseLeave;
                    let e = (a || w || P) && (null == f || f) && N.visibilityObserver.isVisible(this);
                    e
                        ? ((H.src = this.getSrc(U, p)), (H.renderAccessory = v))
                        : ((H.src = this.getSrc(U, p || !m || !a)), (H.renderAccessory = this.renderAccessory)),
                        null != h &&
                            (H.children = (t) => {
                                let { src: n, size: l, alt: i, mediaLayoutType: s } = t;
                                return h({ src: n, size: l, animating: e, alt: i, mediaLayoutType: s });
                            });
                } else H.src = this.getSrc(U);
        }
        return (0, l.jsx)(o._, { disableLoadingSpinner: F, ref: this._imageRef, ...H });
    }
}
let v = (0, u.mj)({
        name: "2026-03-image-load-metrics",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !1 }, 2: { enabled: !0 } },
    }),
    _ = (0, u.mj)({
        name: "2026-02-lazy-load-all-images",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    });
