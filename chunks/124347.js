n.d(t, {
    FH: () => A,
    YG: () => C,
    ZP: () => w,
    uo: () => T,
}),
    n(35282),
    n(388685);
var r,
    i = n(54381),
    a = n(473749),
    o = n(392711),
    s = n(286379),
    l = n(622535),
    c = n(916616),
    u = n(818083),
    d = n(279745),
    f = n(134432),
    p = n(797614),
    _ = n(740492),
    m = n(866960),
    h = n(626135),
    g = n(768581),
    E = n(956664),
    b = n(981631),
    y = n(217702);
function O(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function v(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                O(e, t, n[t]);
            });
    }
    return e;
}
function S(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function I(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : S(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let T = /\.gif($|\?|#)/i,
    C = /\.webp($|\?|#)/i,
    A = /\.avif($|\?|#)/i,
    N = /\.png($|\?|#)/i,
    P = 400,
    R = 300;
class w extends (r = a.Component) {
    static isAnimated(e) {
        let { src: t, original: n, animated: r, srcIsAnimated: i } = e;
        return (
            r ||
            T.test(null != n && "" !== n ? n : t) ||
            (null != i && i && (C.test(null != n && "" !== n ? n : t) || A.test(null != n && "" !== n ? n : t)))
        );
    }
    static isSrcPNG(e) {
        let { src: t } = e;
        return N.test(t);
    }
    static isSrcAVIF(e) {
        let { src: t } = e;
        return A.test(t);
    }
    static getFormatQuality(e) {
        let { src: t, original: n, animated: r, srcIsAnimated: i, freeze: a = !1 } = e,
            o = null,
            s = null;
        return (
            g.$k &&
            (a ||
                !w.isAnimated({
                    src: t,
                    original: n,
                    animated: r,
                    srcIsAnimated: i,
                }))
                ? ((o = "webp"), (w.isSrcPNG({ src: t }) || w.isSrcAVIF({ src: t })) && (s = "lossless"))
                : a && (o = "png"),
            {
                format: o,
                quality: s,
            }
        );
    }
    static preloadImage(e) {
        let {
            src: t,
            dimensions: { maxWidth: n, maxHeight: r, imageWidth: i, imageHeight: a },
            options: { srcIsAnimated: o, original: s, animated: l, sourceMetadata: c, freeze: u },
            callback: d,
        } = e;
        if (1 === i && 1 === a) return;
        let { format: p, quality: _ } = w.getFormatQuality({
                src: t,
                original: s,
                animated: l,
                srcIsAnimated: o,
                freeze: u,
            }),
            m = (0, f.Q4)({
                src: t,
                width: i,
                height: a,
                maxWidth: n,
                maxHeight: r,
                srcIsAnimated: o,
                format: p,
                quality: _,
            }),
            h = Date.now();
        return (0, f.po)(m, (e, n) => {
            w.trackLoadingCompleted({
                error: e,
                imageData: n,
                trigger: "PRELOAD",
                startLoadingTime: h,
                readyState: b.zo9.READY,
                format: p,
                quality: _,
                imageProps: {
                    src: t,
                    width: i,
                    height: a,
                    sourceMetadata: c,
                    original: s,
                },
            }),
                null == d || d(e, n);
        });
    }
    static async trackLoadingCompleted(e) {
        var t, n, r;
        let {
            error: i,
            imageData: a,
            trigger: o,
            startLoadingTime: l,
            readyState: c,
            format: u,
            quality: d,
            imageProps: { src: f, height: g, width: E, original: y, sourceMetadata: O },
        } = e;
        if (
            (i && p.Z.increment({ name: s.V.IMAGE_LOAD_ERROR }),
            !D.getCurrentConfig({ location: "lazy_image" }).enabled)
        )
            return;
        let v = await fetch(a.url).catch(() => void 0),
            S = null == v || null == (t = v.headers) ? void 0 : t.get("content-length"),
            I = null != S ? Number(S) : null,
            T = Date.now() - l;
        h.default.track(b.rMx.IMAGE_LOADING_COMPLETED, {
            duration_ms: T,
            requested_height: a.height,
            requested_width: a.width,
            height: g,
            width: E,
            original_url: y,
            url: f,
            requested_url: a.url,
            format: u,
            quality: d,
            state: i ? b.zo9.ERROR : c,
            data_saving_mode: _.ZP.dataSavingMode,
            low_quality_image_mode: _.ZP.dataSavingMode,
            trigger: o,
            size: I,
            message_id: null == O || null == (n = O.message) ? void 0 : n.id,
            message_sent_timestamp: null == O || null == (r = O.message) ? void 0 : r.timestamp.getTime(),
            connection_type: m.Z.getType(),
            effective_connection_speed: m.Z.getEffectiveConnectionSpeed(),
            service_provider: m.Z.getServiceProvider(),
        });
    }
    componentDidMount() {
        let { readyState: e } = this.state;
        e === b.zo9.LOADING &&
            this.loadImage(this.getSrc(this.getRatio(), w.isAnimated(this.props)), this.handleImageLoad),
            w.isAnimated(this.props) && this.observeVisibility();
    }
    componentDidUpdate(e) {
        let t = w.isAnimated(this.props);
        w.isAnimated(e) !== t && (t ? this.observeVisibility() : this.unobserveVisibility());
    }
    componentWillUnmount() {
        w.isAnimated(this.props) && this.unobserveVisibility(),
            this._cancellers.forEach((e) => e()),
            this._cancellers.clear();
    }
    getSrc(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            { src: n, width: r, height: i, maxWidth: a, maxHeight: o, mediaLayoutType: s } = this.props,
            { format: l, quality: c } = w.getFormatQuality(I(v({}, this.props), { freeze: t }));
        return (0, f.Q4)({
            src: n,
            width: r,
            height: i,
            ratio: e,
            maxWidth: s === y.hV.MOSAIC ? a : void 0,
            maxHeight: s === y.hV.MOSAIC ? o : void 0,
            format: l,
            quality: c,
            animated: !t,
            srcIsAnimated: this.props.srcIsAnimated,
        });
    }
    getRatio() {
        let {
            width: e,
            height: t,
            maxWidth: n = P,
            maxHeight: r = R,
            mediaLayoutType: i,
            useFullWidth: a,
        } = this.props;
        return i === y.hV.MOSAIC && a
            ? (0, E.rn)({
                  width: e,
                  height: t,
                  maxWidth: n,
                  maxHeight: r,
              })
            : (0, E.Dc)({
                  width: e,
                  height: t,
                  maxWidth: n,
                  maxHeight: r,
              });
    }
    getType() {
        let { mediaLayoutType: e, responsive: t } = this.props;
        return null != e ? e : t ? y.hV.RESPONSIVE : y.hV.STATIC;
    }
    loadImage(e, t) {
        let { width: n, height: r } = this.props;
        if (((this.startLoadingTime = Date.now()), 1 === n && 1 === r)) return;
        let i = (0, f.po)(e, (e, n) => {
            null != i && this._cancellers.delete(i), null == t || t(e, n);
        });
        null != i && this._cancellers.add(i);
    }
    render() {
        let {
                alt: e,
                zoomThumbnailPlaceholder: t,
                onZoom: n,
                shouldLink: r,
                onContextMenu: a,
                autoPlay: s,
                original: l,
                className: u,
                imageClassName: d,
                children: f,
                animated: p,
                shouldAnimate: _,
                width: m,
                height: h,
                minWidth: g,
                minHeight: E,
                maxWidth: y,
                maxHeight: O,
                onClick: S,
                renderAccessory: I,
                tabIndex: T,
                limitResponsiveWidth: C,
                useFullWidth: A,
                placeholder: N,
                placeholderVersion: P,
                dataSafeSrc: R,
                srcIsAnimated: D,
            } = this.props,
            { readyState: x, hasMouseOver: L, hasFocus: j } = this.state,
            M = null != n,
            k = this.getRatio(),
            U = (0, o.clamp)(Math.round(m * k), null != g ? g : 0, null != y ? y : 1 / 0),
            G = (0, o.clamp)(Math.round(h * k), null != E ? E : 0, null != O ? O : 1 / 0),
            Z = {
                alt: e,
                readyState: x,
                onContextMenu: null != a ? a : void 0,
                zoomable: M,
                className: u,
                imageClassName: d,
                minWidth: g,
                minHeight: E,
                mediaLayoutType: this.getType(),
                limitResponsiveWidth: C,
                useFullWidth: A,
                tabIndex: T,
                width: U,
                height: G,
                src: "",
                placeholder: N,
                placeholderVersion: P,
                dataSafeSrc: R,
                srcIsAnimated: D,
                children:
                    null != f
                        ? (e) => {
                              let { src: t, size: n, alt: r, mediaLayoutType: i } = e;
                              return f({
                                  src: t,
                                  size: n,
                                  alt: r,
                                  mediaLayoutType: i,
                              });
                          }
                        : void 0,
                onMouseEnter: this.onMouseEnter,
                onMouseLeave: this.onMouseLeave,
                onFocus: this.onFocus,
                onBlur: this.onBlur,
            };
        if (1 === Z.width && 1 === Z.height) return null;
        switch (
            ((M || null != S) && (Z.onClick = this.onClick), r && (Z.original = null != l && "" !== l ? l : Z.src), x)
        ) {
            case b.zo9.LOADING:
                null != t && (Z.src = t);
                break;
            case b.zo9.READY:
                if (w.isAnimated(this.props)) {
                    Z.onMouseLeave = this.onMouseLeave;
                    let e = (s || L || j) && (null == _ || _) && w.visibilityObserver.isVisible(this);
                    e
                        ? ((Z.src = this.getSrc(k)), (Z.renderAccessory = I))
                        : ((Z.src = this.getSrc(k, !p || !s)), (Z.renderAccessory = this.renderAccessory)),
                        null != f &&
                            (Z.children = (t) => {
                                let { src: n, size: r, alt: i, mediaLayoutType: a } = t;
                                return f({
                                    src: n,
                                    size: r,
                                    animating: e,
                                    alt: i,
                                    mediaLayoutType: a,
                                });
                            });
                } else Z.src = this.getSrc(k);
        }
        return (0, i.jsx)(c.E, v({ ref: this._imageRef }, Z));
    }
    constructor(e) {
        super(e),
            O(this, "state", {
                readyState: b.zo9.LOADING,
                hasMouseOver: !1,
                hasFocus: !1,
            }),
            O(this, "startLoadingTime", Date.now()),
            O(this, "_cancellers", new Set()),
            O(this, "_imageRef", a.createRef()),
            O(this, "observeVisibility", () => {
                w.visibilityObserver.observe(this, this._imageRef);
            }),
            O(this, "unobserveVisibility", () => {
                w.visibilityObserver.unobserve(this);
            }),
            O(this, "handleImageLoad", (e, t) => {
                this.setState({ readyState: e ? b.zo9.ERROR : b.zo9.READY }, () => {
                    var n;
                    let { format: r, quality: i } = w.getFormatQuality(this.props);
                    w.trackLoadingCompleted({
                        error: e,
                        imageData: t,
                        trigger: null != (n = this.props.trigger) ? n : "LOAD",
                        startLoadingTime: this.startLoadingTime,
                        readyState: this.state.readyState,
                        format: r,
                        quality: i,
                        imageProps: this.props,
                    });
                });
            }),
            O(this, "onMouseEnter", (e) => {
                w.isAnimated(this.props) && this.setState({ hasMouseOver: !0 });
                let { onMouseEnter: t } = this.props;
                null == t || t(e);
            }),
            O(this, "onMouseLeave", (e) => {
                w.isAnimated(this.props) && this.setState({ hasMouseOver: !1 });
                let { onMouseLeave: t } = this.props;
                null == t || t(e);
            }),
            O(this, "onFocus", (e) => {
                w.isAnimated(this.props) && this.setState({ hasFocus: !0 });
            }),
            O(this, "onBlur", (e) => {
                let { currentTarget: t, relatedTarget: n } = e;
                t.contains(n) || this.setState({ hasFocus: !1 });
            }),
            O(this, "onClick", (e) => {
                let { onZoom: t, onClick: n } = this.props;
                null != n
                    ? n(e)
                    : null != t &&
                      (e.preventDefault(),
                      t(e, {
                          zoomThumbnailPlaceholder: this.getSrc(this.getRatio()),
                          trigger: "CLICK",
                      }));
            }),
            O(this, "renderAccessory", () => {
                let { hasMouseOver: e, hasFocus: t } = this.state,
                    n = e || t,
                    r = null != this.props.renderAccessory ? this.props.renderAccessory() : null;
                return this.props.shouldRenderAccessory ? (n ? r : (0, i.jsx)(d.Z, {})) : null;
            }),
            (0, f.Vv)(this.getSrc(this.getRatio(), w.isAnimated(this.props))) && (this.state.readyState = b.zo9.READY);
    }
}
O(w, "visibilityObserver", new l.Z({ threshold: 0.6 })),
    O(w, "defaultProps", {
        shouldLink: !1,
        autoPlay: !1,
        animated: !1,
        minWidth: 0,
        minHeight: 0,
        shouldRenderAccessory: !0,
        srcIsAnimated: !1,
    });
let D = (0, u.B)({
    kind: "user",
    id: "2024-02_image_load_metrics",
    label: "Image load metrics Config User Experiment",
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 1,
            label: "Do not send metrics for image load",
            config: { enabled: !1 },
        },
        {
            id: 2,
            label: "Send metrics for image load",
            config: { enabled: !0 },
        },
    ],
});
