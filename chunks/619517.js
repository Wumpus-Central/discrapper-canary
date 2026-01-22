n.d(t, {
    Ay: () => P,
    P8: () => T,
    bp: () => I,
    p4: () => C,
}),
    n(747238),
    n(896048);
var r,
    i = n(627968),
    a = n(64700),
    s = n(735438),
    o = n(731738),
    l = n(230109),
    c = n(673698),
    u = n(600975),
    d = n(693875),
    f = n(776231),
    p = n(831062),
    _ = n(964404),
    h = n(544180),
    m = n(954571),
    g = n(486020),
    E = n(515718),
    b = n(652215),
    y = n(838541);

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

function A(e) {
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

function v(e, t) {
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

function S(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : v(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let I = /\.gif($|\?|#)/i,
    T = /\.webp($|\?|#)/i,
    C = /\.avif($|\?|#)/i,
    N = /\.png($|\?|#)/i,
    R = 400,
    w = 300;
class P extends (r = a.Component) {
    static isAnimated(e) {
        let { src: t, original: n, animated: r, srcIsAnimated: i } = e;
        return (
            r ||
            I.test(null != n && "" !== n ? n : t) ||
            (null != i && i && (T.test(null != n && "" !== n ? n : t) || C.test(null != n && "" !== n ? n : t)))
        );
    }
    static isSrcPNG(e) {
        let { src: t } = e;
        return N.test(t);
    }
    static isSrcAVIF(e) {
        let { src: t } = e;
        return C.test(t);
    }
    static getFormatQuality(e) {
        let { src: t, original: n, animated: r, srcIsAnimated: i, freeze: a = !1 } = e,
            s = null,
            o = null;
        return (
            g.QB &&
            (a ||
                !P.isAnimated({
                    src: t,
                    original: n,
                    animated: r,
                    srcIsAnimated: i,
                }))
                ? ((s = "webp"),
                  (P.isSrcPNG({
                      src: t,
                  }) ||
                      P.isSrcAVIF({
                          src: t,
                      })) &&
                      (o = "lossless"))
                : a && (s = "png"),
            {
                format: s,
                quality: o,
            }
        );
    }
    static preloadImage(e) {
        let {
            src: t,
            dimensions: { maxWidth: n, maxHeight: r, imageWidth: i, imageHeight: a },
            options: { srcIsAnimated: s, original: o, animated: l, sourceMetadata: c, freeze: u },
            callback: d,
        } = e;
        if (1 === i && 1 === a) return;
        let { format: p, quality: _ } = P.getFormatQuality({
                src: t,
                original: o,
                animated: l,
                srcIsAnimated: s,
                freeze: u,
            }),
            h = (0, f.AE)({
                src: t,
                width: i,
                height: a,
                maxWidth: n,
                maxHeight: r,
                srcIsAnimated: s,
                format: p,
                quality: _,
            }),
            m = Date.now();
        return (0, f.yt)(h, (e, n) => {
            P.trackLoadingCompleted({
                error: e,
                imageData: n,
                trigger: "PRELOAD",
                startLoadingTime: m,
                readyState: b.Rv1.READY,
                format: p,
                quality: _,
                imageProps: {
                    src: t,
                    width: i,
                    height: a,
                    sourceMetadata: c,
                    original: o,
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
            trigger: s,
            startLoadingTime: l,
            readyState: c,
            format: u,
            quality: d,
            imageProps: { src: f, height: g, width: E, original: y, sourceMetadata: O },
        } = e;
        if (
            (i &&
                p.A.increment({
                    name: o.K.IMAGE_LOAD_ERROR,
                }),
            !D.getCurrentConfig({
                location: "lazy_image",
            }).enabled)
        )
            return;
        let A = await fetch(a.url).catch(() => void 0),
            v = null == A || null == (t = A.headers) ? void 0 : t.get("content-length"),
            S = null != v ? Number(v) : null,
            I = Date.now() - l;
        m.default.track(b.HAw.IMAGE_LOADING_COMPLETED, {
            duration_ms: I,
            requested_height: a.height,
            requested_width: a.width,
            height: g,
            width: E,
            original_url: y,
            url: f,
            requested_url: a.url,
            format: u,
            quality: d,
            state: i ? b.Rv1.ERROR : c,
            data_saving_mode: _.Ay.dataSavingMode,
            low_quality_image_mode: _.Ay.dataSavingMode,
            trigger: s,
            size: S,
            message_id: null == O || null == (n = O.message) ? void 0 : n.id,
            message_sent_timestamp: null == O || null == (r = O.message) ? void 0 : r.timestamp.getTime(),
            connection_type: h.A.getType(),
            effective_connection_speed: h.A.getEffectiveConnectionSpeed(),
            service_provider: h.A.getServiceProvider(),
        });
    }
    componentDidMount() {
        let { readyState: e } = this.state;
        e === b.Rv1.LOADING &&
            this.loadImage(this.getSrc(this.getRatio(), P.isAnimated(this.props)), this.handleImageLoad),
            P.isAnimated(this.props) && this.observeVisibility();
    }
    componentDidUpdate(e) {
        let t = P.isAnimated(this.props);
        P.isAnimated(e) !== t && (t ? this.observeVisibility() : this.unobserveVisibility());
    }
    componentWillUnmount() {
        P.isAnimated(this.props) && this.unobserveVisibility(),
            this._cancellers.forEach((e) => e()),
            this._cancellers.clear();
    }
    getSrc(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            { src: n, width: r, height: i, maxWidth: a, maxHeight: s, mediaLayoutType: o } = this.props,
            { format: l, quality: c } = P.getFormatQuality(
                S(A({}, this.props), {
                    freeze: t,
                }),
            );
        return (0, f.AE)({
            src: n,
            width: r,
            height: i,
            ratio: e,
            maxWidth: o === y.dG.MOSAIC ? a : void 0,
            maxHeight: o === y.dG.MOSAIC ? s : void 0,
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
            maxWidth: n = R,
            maxHeight: r = w,
            mediaLayoutType: i,
            useFullWidth: a,
        } = this.props;
        return i === y.dG.MOSAIC && a
            ? (0, E.V)({
                  width: e,
                  height: t,
                  maxWidth: n,
                  maxHeight: r,
              })
            : (0, E.U8)({
                  width: e,
                  height: t,
                  maxWidth: n,
                  maxHeight: r,
              });
    }
    getType() {
        let { mediaLayoutType: e, responsive: t } = this.props;
        return null != e ? e : t ? y.dG.RESPONSIVE : y.dG.STATIC;
    }
    loadImage(e, t) {
        let { width: n, height: r } = this.props;
        if (((this.startLoadingTime = Date.now()), 1 === n && 1 === r)) return;
        let i = (0, f.yt)(e, (e, n) => {
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
                autoPlay: o,
                original: l,
                className: u,
                imageClassName: d,
                children: f,
                animated: p,
                shouldAnimate: _,
                width: h,
                height: m,
                minWidth: g,
                minHeight: E,
                maxWidth: y,
                maxHeight: O,
                onClick: v,
                renderAccessory: S,
                tabIndex: I,
                limitResponsiveWidth: T,
                useFullWidth: C,
                placeholder: N,
                placeholderVersion: R,
                dataSafeSrc: w,
                srcIsAnimated: D,
            } = this.props,
            { readyState: x, hasMouseOver: L, hasFocus: j } = this.state,
            M = null != n,
            k = this.getRatio(),
            U = (0, s.clamp)(Math.round(h * k), null != g ? g : 0, null != y ? y : 1 / 0),
            G = (0, s.clamp)(Math.round(m * k), null != E ? E : 0, null != O ? O : 1 / 0),
            V = {
                alt: e,
                readyState: x,
                onContextMenu: null != a ? a : void 0,
                zoomable: M,
                className: u,
                imageClassName: d,
                minWidth: g,
                minHeight: E,
                mediaLayoutType: this.getType(),
                limitResponsiveWidth: T,
                useFullWidth: C,
                tabIndex: I,
                width: U,
                height: G,
                src: "",
                placeholder: N,
                placeholderVersion: R,
                dataSafeSrc: w,
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
        if (1 === V.width && 1 === V.height) return null;
        switch (
            ((M || null != v) && (V.onClick = this.onClick), r && (V.original = null != l && "" !== l ? l : V.src), x)
        ) {
            case b.Rv1.LOADING:
                null != t && (V.src = t);
                break;
            case b.Rv1.READY:
                if (P.isAnimated(this.props)) {
                    V.onMouseLeave = this.onMouseLeave;
                    let e = (o || L || j) && (null == _ || _) && P.visibilityObserver.isVisible(this);
                    e
                        ? ((V.src = this.getSrc(k)), (V.renderAccessory = S))
                        : ((V.src = this.getSrc(k, !p || !o)), (V.renderAccessory = this.renderAccessory)),
                        null != f &&
                            (V.children = (t) => {
                                let { src: n, size: r, alt: i, mediaLayoutType: a } = t;
                                return f({
                                    src: n,
                                    size: r,
                                    animating: e,
                                    alt: i,
                                    mediaLayoutType: a,
                                });
                            });
                } else V.src = this.getSrc(k);
        }
        return (0, i.jsx)(
            c._,
            A(
                {
                    ref: this._imageRef,
                },
                V,
            ),
        );
    }
    constructor(e) {
        super(e),
            O(this, "state", {
                readyState: b.Rv1.LOADING,
                hasMouseOver: !1,
                hasFocus: !1,
            }),
            O(this, "startLoadingTime", Date.now()),
            O(this, "_cancellers", new Set()),
            O(this, "_imageRef", a.createRef()),
            O(this, "observeVisibility", () => {
                P.visibilityObserver.observe(this, this._imageRef);
            }),
            O(this, "unobserveVisibility", () => {
                P.visibilityObserver.unobserve(this);
            }),
            O(this, "handleImageLoad", (e, t) => {
                this.setState(
                    {
                        readyState: e ? b.Rv1.ERROR : b.Rv1.READY,
                    },
                    () => {
                        var n;
                        let { format: r, quality: i } = P.getFormatQuality(this.props);
                        P.trackLoadingCompleted({
                            error: e,
                            imageData: t,
                            trigger: null != (n = this.props.trigger) ? n : "LOAD",
                            startLoadingTime: this.startLoadingTime,
                            readyState: this.state.readyState,
                            format: r,
                            quality: i,
                            imageProps: this.props,
                        });
                    },
                );
            }),
            O(this, "onMouseEnter", (e) => {
                P.isAnimated(this.props) &&
                    this.setState({
                        hasMouseOver: !0,
                    });
                let { onMouseEnter: t } = this.props;
                null == t || t(e);
            }),
            O(this, "onMouseLeave", (e) => {
                P.isAnimated(this.props) &&
                    this.setState({
                        hasMouseOver: !1,
                    });
                let { onMouseLeave: t } = this.props;
                null == t || t(e);
            }),
            O(this, "onFocus", (e) => {
                P.isAnimated(this.props) &&
                    this.setState({
                        hasFocus: !0,
                    });
            }),
            O(this, "onBlur", (e) => {
                let { currentTarget: t, relatedTarget: n } = e;
                t.contains(n) ||
                    this.setState({
                        hasFocus: !1,
                    });
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
                return this.props.shouldRenderAccessory ? (n ? r : (0, i.jsx)(d.A, {})) : null;
            }),
            (0, f.LE)(this.getSrc(this.getRatio(), P.isAnimated(this.props))) && (this.state.readyState = b.Rv1.READY);
    }
}
O(
    P,
    "visibilityObserver",
    new l.j({
        threshold: 0.6,
    }),
),
    O(P, "defaultProps", {
        shouldLink: !1,
        autoPlay: !1,
        animated: !1,
        minWidth: 0,
        minHeight: 0,
        shouldRenderAccessory: !0,
        srcIsAnimated: !1,
    });
let D = (0, u.C)({
    kind: "user",
    id: "2024-02_image_load_metrics",
    label: "Image load metrics Config User Experiment",
    defaultConfig: {
        enabled: !1,
    },
    treatments: [
        {
            id: 1,
            label: "Do not send metrics for image load",
            config: {
                enabled: !1,
            },
        },
        {
            id: 2,
            label: "Send metrics for image load",
            config: {
                enabled: !0,
            },
        },
    ],
});
