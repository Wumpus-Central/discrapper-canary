r.d(n, {
    FH: function () {
        return N;
    },
    YG: function () {
        return C;
    },
    ZP: function () {
        return L;
    },
    uo: function () {
        return A;
    }
});
var i,
    a,
    o = r(47120);
var s = r(200651),
    l = r(192379),
    u = r(392711);
var c = r(286379),
    d = r(622535),
    f = r(916616),
    p = r(818083),
    h = r(279745),
    _ = r(134432),
    m = r(797614),
    g = r(740492),
    E = r(866960),
    v = r(626135),
    y = r(768581),
    b = r(956664),
    I = r(981631),
    T = r(217702);
function S(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let A = /\.gif($|\?|#)/i,
    C = /\.webp($|\?|#)/i,
    N = /\.avif($|\?|#)/i,
    R = /\.png($|\?|#)/i,
    O = 400,
    D = 300;
!(function (e) {
    (e.LOAD = 'LOAD'), (e.PRELOAD = 'PRELOAD'), (e.CLICK = 'CLICK');
})(i || (i = {}));
class L extends (a = l.Component) {
    static isAnimated(e) {
        let { src: n, original: r, animated: i, srcIsAnimated: a } = e;
        return i || A.test(null != r && '' !== r ? r : n) || (null != a && a && (C.test(null != r && '' !== r ? r : n) || N.test(null != r && '' !== r ? r : n)));
    }
    static isSrcPNG(e) {
        let { src: n } = e;
        return R.test(n);
    }
    static isSrcAVIF(e) {
        let { src: n } = e;
        return N.test(n);
    }
    static getFormatQuality(e) {
        let { src: n, original: r, animated: i, srcIsAnimated: a, freeze: o = !1 } = e,
            s = null,
            l = null;
        return (
            y.$k &&
            (o ||
                !L.isAnimated({
                    src: n,
                    original: r,
                    animated: i,
                    srcIsAnimated: a
                }))
                ? ((s = 'webp'), (L.isSrcPNG({ src: n }) || L.isSrcAVIF({ src: n })) && (l = 'lossless'))
                : o && (s = 'png'),
            {
                format: s,
                quality: l
            }
        );
    }
    static preloadImage(e) {
        let {
            src: n,
            dimensions: { maxWidth: r, maxHeight: i, imageWidth: a, imageHeight: o },
            options: { srcIsAnimated: s, original: l, animated: u, sourceMetadata: c, freeze: d },
            callback: f
        } = e;
        if (1 === a && 1 === o) return;
        let { format: p, quality: h } = L.getFormatQuality({
                src: n,
                original: l,
                animated: u,
                srcIsAnimated: s,
                freeze: d
            }),
            m = (0, _.Q4)({
                src: n,
                width: a,
                height: o,
                maxWidth: r,
                maxHeight: i,
                srcIsAnimated: s,
                format: p,
                quality: h
            }),
            g = Date.now();
        return (0, _.po)(m, (e, r) => {
            L.trackLoadingCompleted({
                error: e,
                imageData: r,
                trigger: 'PRELOAD',
                startLoadingTime: g,
                readyState: I.zo9.READY,
                format: p,
                quality: h,
                imageProps: {
                    src: n,
                    width: a,
                    height: o,
                    sourceMetadata: c,
                    original: l
                }
            }),
                null == f || f(e, r);
        });
    }
    static async trackLoadingCompleted(e) {
        var n, r, i;
        let {
            error: a,
            imageData: o,
            trigger: s,
            startLoadingTime: l,
            readyState: u,
            format: d,
            quality: f,
            imageProps: { src: p, height: h, width: _, original: y, sourceMetadata: b }
        } = e;
        if ((a && m.Z.increment({ name: c.V.IMAGE_LOAD_ERROR }), !x.getCurrentConfig({ location: 'lazy_image' }).enabled)) return;
        let T = await fetch(o.url).catch(() => void 0),
            S = null == T ? void 0 : null === (n = T.headers) || void 0 === n ? void 0 : n.get('content-length'),
            A = null != S ? Number(S) : null,
            C = Date.now() - l;
        v.default.track(I.rMx.IMAGE_LOADING_COMPLETED, {
            duration_ms: C,
            requested_height: o.height,
            requested_width: o.width,
            height: h,
            width: _,
            original_url: y,
            url: p,
            requested_url: o.url,
            format: d,
            quality: f,
            state: a ? I.zo9.ERROR : u,
            data_saving_mode: g.ZP.dataSavingMode,
            low_quality_image_mode: g.ZP.dataSavingMode,
            trigger: s,
            size: A,
            message_id: null == b ? void 0 : null === (r = b.message) || void 0 === r ? void 0 : r.id,
            message_sent_timestamp: null == b ? void 0 : null === (i = b.message) || void 0 === i ? void 0 : i.timestamp.getTime(),
            connection_type: E.Z.getType(),
            effective_connection_speed: E.Z.getEffectiveConnectionSpeed(),
            service_provider: E.Z.getServiceProvider()
        });
    }
    componentDidMount() {
        let { readyState: e } = this.state;
        e === I.zo9.LOADING && this.loadImage(this.getSrc(this.getRatio(), L.isAnimated(this.props)), this.handleImageLoad), L.isAnimated(this.props) && this.observeVisibility();
    }
    componentDidUpdate(e) {
        let n = L.isAnimated(this.props);
        L.isAnimated(e) !== n && (n ? this.observeVisibility() : this.unobserveVisibility());
    }
    componentWillUnmount() {
        L.isAnimated(this.props) && this.unobserveVisibility(), this._cancellers.forEach((e) => e()), this._cancellers.clear();
    }
    getSrc(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            { src: r, width: i, height: a, maxWidth: o, maxHeight: s, mediaLayoutType: l } = this.props,
            { format: u, quality: c } = L.getFormatQuality({
                ...this.props,
                freeze: n
            });
        return (0, _.Q4)({
            src: r,
            width: i,
            height: a,
            ratio: e,
            maxWidth: l === T.hV.MOSAIC ? o : void 0,
            maxHeight: l === T.hV.MOSAIC ? s : void 0,
            format: u,
            quality: c,
            animated: !n,
            srcIsAnimated: this.props.srcIsAnimated
        });
    }
    getRatio() {
        let { width: e, height: n, maxWidth: r = O, maxHeight: i = D, mediaLayoutType: a, useFullWidth: o } = this.props;
        return a === T.hV.MOSAIC && o
            ? (0, b.rn)({
                  width: e,
                  height: n,
                  maxWidth: r,
                  maxHeight: i
              })
            : (0, b.Dc)({
                  width: e,
                  height: n,
                  maxWidth: r,
                  maxHeight: i
              });
    }
    getType() {
        let { mediaLayoutType: e, responsive: n } = this.props;
        return null != e ? e : n ? T.hV.RESPONSIVE : T.hV.STATIC;
    }
    loadImage(e, n) {
        let { width: r, height: i } = this.props;
        if (((this.startLoadingTime = Date.now()), 1 === r && 1 === i)) return;
        let a = (0, _.po)(e, (e, r) => {
            null != a && this._cancellers.delete(a), null == n || n(e, r);
        });
        null != a && this._cancellers.add(a);
    }
    render() {
        let { alt: e, zoomThumbnailPlaceholder: n, onZoom: r, shouldLink: i, onContextMenu: a, autoPlay: o, original: l, className: c, imageClassName: d, children: p, animated: h, shouldAnimate: _, width: m, height: g, minWidth: E, minHeight: v, maxWidth: y, maxHeight: b, onClick: T, renderAccessory: S, tabIndex: A, limitResponsiveWidth: C, useFullWidth: N, placeholder: R, placeholderVersion: O, dataSafeSrc: D, srcIsAnimated: x } = this.props,
            { readyState: w, hasMouseOver: P, hasFocus: M } = this.state,
            k = null != r,
            U = this.getRatio(),
            B = (0, u.clamp)(Math.round(m * U), null != E ? E : 0, null != y ? y : 1 / 0),
            G = (0, u.clamp)(Math.round(g * U), null != v ? v : 0, null != b ? b : 1 / 0),
            Z = {
                alt: e,
                readyState: w,
                onContextMenu: null != a ? a : void 0,
                zoomable: k,
                className: c,
                imageClassName: d,
                minWidth: E,
                minHeight: v,
                mediaLayoutType: this.getType(),
                limitResponsiveWidth: C,
                useFullWidth: N,
                tabIndex: A,
                width: B,
                height: G,
                src: '',
                placeholder: R,
                placeholderVersion: O,
                dataSafeSrc: D,
                srcIsAnimated: x,
                children:
                    null != p
                        ? (e) => {
                              let { src: n, size: r, alt: i, mediaLayoutType: a } = e;
                              return p({
                                  src: n,
                                  size: r,
                                  alt: i,
                                  mediaLayoutType: a
                              });
                          }
                        : void 0,
                onMouseEnter: this.onMouseEnter,
                onMouseLeave: this.onMouseLeave,
                onFocus: this.onFocus,
                onBlur: this.onBlur
            };
        if (1 === Z.width && 1 === Z.height) return null;
        switch (((k || null != T) && (Z.onClick = this.onClick), i && (Z.original = null != l && '' !== l ? l : Z.src), w)) {
            case I.zo9.LOADING:
                null != n && (Z.src = n);
                break;
            case I.zo9.READY:
                if (L.isAnimated(this.props)) {
                    Z.onMouseLeave = this.onMouseLeave;
                    let e = (o || P || M) && (null == _ || _) && L.visibilityObserver.isVisible(this);
                    e ? ((Z.src = this.getSrc(U)), (Z.renderAccessory = S)) : ((Z.src = this.getSrc(U, !h || !o)), (Z.renderAccessory = this.renderAccessory)),
                        null != p &&
                            (Z.children = (n) => {
                                let { src: r, size: i, alt: a, mediaLayoutType: o } = n;
                                return p({
                                    src: r,
                                    size: i,
                                    animating: e,
                                    alt: a,
                                    mediaLayoutType: o
                                });
                            });
                } else Z.src = this.getSrc(U);
        }
        return (0, s.jsx)(f.E, { ...Z });
    }
    constructor(e) {
        super(e),
            S(this, 'state', {
                readyState: I.zo9.LOADING,
                hasMouseOver: !1,
                hasFocus: !1
            }),
            S(this, 'startLoadingTime', Date.now()),
            S(this, '_cancellers', new Set()),
            S(this, 'observeVisibility', () => {
                L.visibilityObserver.observe(this);
            }),
            S(this, 'unobserveVisibility', () => {
                L.visibilityObserver.unobserve(this);
            }),
            S(this, 'handleImageLoad', (e, n) => {
                this.setState({ readyState: e ? I.zo9.ERROR : I.zo9.READY }, () => {
                    var r;
                    let { format: i, quality: a } = L.getFormatQuality(this.props);
                    L.trackLoadingCompleted({
                        error: e,
                        imageData: n,
                        trigger: null !== (r = this.props.trigger) && void 0 !== r ? r : 'LOAD',
                        startLoadingTime: this.startLoadingTime,
                        readyState: this.state.readyState,
                        format: i,
                        quality: a,
                        imageProps: this.props
                    });
                });
            }),
            S(this, 'onMouseEnter', (e) => {
                L.isAnimated(this.props) && this.setState({ hasMouseOver: !0 });
                let { onMouseEnter: n } = this.props;
                null == n || n(e);
            }),
            S(this, 'onMouseLeave', (e) => {
                L.isAnimated(this.props) && this.setState({ hasMouseOver: !1 });
                let { onMouseLeave: n } = this.props;
                null == n || n(e);
            }),
            S(this, 'onFocus', (e) => {
                L.isAnimated(this.props) && this.setState({ hasFocus: !0 });
            }),
            S(this, 'onBlur', (e) => {
                let { currentTarget: n, relatedTarget: r } = e;
                !n.contains(r) && this.setState({ hasFocus: !1 });
            }),
            S(this, 'onClick', (e) => {
                let { onZoom: n, onClick: r } = this.props;
                null != r
                    ? r(e)
                    : null != n &&
                      (e.preventDefault(),
                      n(e, {
                          zoomThumbnailPlaceholder: this.getSrc(this.getRatio()),
                          trigger: 'CLICK'
                      }));
            }),
            S(this, 'renderAccessory', () => {
                let { hasMouseOver: e, hasFocus: n } = this.state,
                    r = e || n,
                    i = null != this.props.renderAccessory ? this.props.renderAccessory() : null;
                return this.props.shouldRenderAccessory ? (r ? i : (0, s.jsx)(h.Z, {})) : null;
            }),
            (0, _.Vv)(this.getSrc(this.getRatio(), L.isAnimated(this.props))) && (this.state.readyState = I.zo9.READY);
    }
}
S(L, 'visibilityObserver', new d.Z({ threshold: 0.7 })),
    S(L, 'defaultProps', {
        shouldLink: !1,
        autoPlay: !1,
        animated: !1,
        minWidth: 0,
        minHeight: 0,
        shouldRenderAccessory: !0,
        srcIsAnimated: !1
    });
let x = (0, p.B)({
    kind: 'user',
    id: '2024-02_image_load_metrics',
    label: 'Image load metrics Config User Experiment',
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 1,
            label: 'Do not send metrics for image load',
            config: { enabled: !1 }
        },
        {
            id: 2,
            label: 'Send metrics for image load',
            config: { enabled: !0 }
        }
    ]
});
