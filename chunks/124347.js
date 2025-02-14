n.d(t, {
    FH: () => S,
    YG: () => b,
    ZP: () => R,
    uo: () => T
}),
    n(47120);
var i,
    r = n(200651),
    a = n(192379),
    s = n(392711),
    o = n(286379),
    l = n(622535),
    u = n(916616),
    c = n(818083),
    d = n(279745),
    f = n(134432),
    _ = n(797614),
    p = n(740492),
    h = n(866960),
    m = n(626135),
    g = n(768581),
    E = n(956664),
    v = n(981631),
    y = n(217702);
function I(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let T = /\.gif($|\?|#)/i,
    b = /\.webp($|\?|#)/i,
    S = /\.avif($|\?|#)/i,
    A = /\.png($|\?|#)/i,
    N = 400,
    C = 300;
class R extends (i = a.Component) {
    static isAnimated(e) {
        let { src: t, original: n, animated: i, srcIsAnimated: r } = e;
        return i || T.test(null != n && '' !== n ? n : t) || (null != r && r && (b.test(null != n && '' !== n ? n : t) || S.test(null != n && '' !== n ? n : t)));
    }
    static isSrcPNG(e) {
        let { src: t } = e;
        return A.test(t);
    }
    static isSrcAVIF(e) {
        let { src: t } = e;
        return S.test(t);
    }
    static getFormatQuality(e) {
        let { src: t, original: n, animated: i, srcIsAnimated: r, freeze: a = !1 } = e,
            s = null,
            o = null;
        return (
            g.$k &&
            (a ||
                !R.isAnimated({
                    src: t,
                    original: n,
                    animated: i,
                    srcIsAnimated: r
                }))
                ? ((s = 'webp'), (R.isSrcPNG({ src: t }) || R.isSrcAVIF({ src: t })) && (o = 'lossless'))
                : a && (s = 'png'),
            {
                format: s,
                quality: o
            }
        );
    }
    static preloadImage(e) {
        let {
            src: t,
            dimensions: { maxWidth: n, maxHeight: i, imageWidth: r, imageHeight: a },
            options: { srcIsAnimated: s, original: o, animated: l, sourceMetadata: u, freeze: c },
            callback: d
        } = e;
        if (1 === r && 1 === a) return;
        let { format: _, quality: p } = R.getFormatQuality({
                src: t,
                original: o,
                animated: l,
                srcIsAnimated: s,
                freeze: c
            }),
            h = (0, f.Q4)({
                src: t,
                width: r,
                height: a,
                maxWidth: n,
                maxHeight: i,
                srcIsAnimated: s,
                format: _,
                quality: p
            }),
            m = Date.now();
        return (0, f.po)(h, (e, n) => {
            R.trackLoadingCompleted({
                error: e,
                imageData: n,
                trigger: 'PRELOAD',
                startLoadingTime: m,
                readyState: v.zo9.READY,
                format: _,
                quality: p,
                imageProps: {
                    src: t,
                    width: r,
                    height: a,
                    sourceMetadata: u,
                    original: o
                }
            }),
                null == d || d(e, n);
        });
    }
    static async trackLoadingCompleted(e) {
        var t, n, i;
        let {
            error: r,
            imageData: a,
            trigger: s,
            startLoadingTime: l,
            readyState: u,
            format: c,
            quality: d,
            imageProps: { src: f, height: g, width: E, original: y, sourceMetadata: I }
        } = e;
        if ((r && _.Z.increment({ name: o.V.IMAGE_LOAD_ERROR }), !O.getCurrentConfig({ location: 'lazy_image' }).enabled)) return;
        let T = await fetch(a.url).catch(() => void 0),
            b = null == T ? void 0 : null === (t = T.headers) || void 0 === t ? void 0 : t.get('content-length'),
            S = null != b ? Number(b) : null,
            A = Date.now() - l;
        m.default.track(v.rMx.IMAGE_LOADING_COMPLETED, {
            duration_ms: A,
            requested_height: a.height,
            requested_width: a.width,
            height: g,
            width: E,
            original_url: y,
            url: f,
            requested_url: a.url,
            format: c,
            quality: d,
            state: r ? v.zo9.ERROR : u,
            data_saving_mode: p.ZP.dataSavingMode,
            low_quality_image_mode: p.ZP.dataSavingMode,
            trigger: s,
            size: S,
            message_id: null == I ? void 0 : null === (n = I.message) || void 0 === n ? void 0 : n.id,
            message_sent_timestamp: null == I ? void 0 : null === (i = I.message) || void 0 === i ? void 0 : i.timestamp.getTime(),
            connection_type: h.Z.getType(),
            effective_connection_speed: h.Z.getEffectiveConnectionSpeed(),
            service_provider: h.Z.getServiceProvider()
        });
    }
    componentDidMount() {
        let { readyState: e } = this.state;
        e === v.zo9.LOADING && this.loadImage(this.getSrc(this.getRatio(), R.isAnimated(this.props)), this.handleImageLoad), R.isAnimated(this.props) && this.observeVisibility();
    }
    componentDidUpdate(e) {
        let t = R.isAnimated(this.props);
        R.isAnimated(e) !== t && (t ? this.observeVisibility() : this.unobserveVisibility());
    }
    componentWillUnmount() {
        R.isAnimated(this.props) && this.unobserveVisibility(), this._cancellers.forEach((e) => e()), this._cancellers.clear();
    }
    getSrc(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            { src: n, width: i, height: r, maxWidth: a, maxHeight: s, mediaLayoutType: o } = this.props,
            { format: l, quality: u } = R.getFormatQuality({
                ...this.props,
                freeze: t
            });
        return (0, f.Q4)({
            src: n,
            width: i,
            height: r,
            ratio: e,
            maxWidth: o === y.hV.MOSAIC ? a : void 0,
            maxHeight: o === y.hV.MOSAIC ? s : void 0,
            format: l,
            quality: u,
            animated: !t,
            srcIsAnimated: this.props.srcIsAnimated
        });
    }
    getRatio() {
        let { width: e, height: t, maxWidth: n = N, maxHeight: i = C, mediaLayoutType: r, useFullWidth: a } = this.props;
        return r === y.hV.MOSAIC && a
            ? (0, E.rn)({
                  width: e,
                  height: t,
                  maxWidth: n,
                  maxHeight: i
              })
            : (0, E.Dc)({
                  width: e,
                  height: t,
                  maxWidth: n,
                  maxHeight: i
              });
    }
    getType() {
        let { mediaLayoutType: e, responsive: t } = this.props;
        return null != e ? e : t ? y.hV.RESPONSIVE : y.hV.STATIC;
    }
    loadImage(e, t) {
        let { width: n, height: i } = this.props;
        if (((this.startLoadingTime = Date.now()), 1 === n && 1 === i)) return;
        let r = (0, f.po)(e, (e, n) => {
            null != r && this._cancellers.delete(r), null == t || t(e, n);
        });
        null != r && this._cancellers.add(r);
    }
    render() {
        let { alt: e, zoomThumbnailPlaceholder: t, onZoom: n, shouldLink: i, onContextMenu: a, autoPlay: o, original: l, className: c, imageClassName: d, children: f, animated: _, shouldAnimate: p, width: h, height: m, minWidth: g, minHeight: E, maxWidth: y, maxHeight: I, onClick: T, renderAccessory: b, tabIndex: S, limitResponsiveWidth: A, useFullWidth: N, placeholder: C, placeholderVersion: O, dataSafeSrc: D, srcIsAnimated: L } = this.props,
            { readyState: x, hasMouseOver: P, hasFocus: w } = this.state,
            M = null != n,
            k = this.getRatio(),
            U = (0, s.clamp)(Math.round(h * k), null != g ? g : 0, null != y ? y : 1 / 0),
            G = (0, s.clamp)(Math.round(m * k), null != E ? E : 0, null != I ? I : 1 / 0),
            B = {
                alt: e,
                readyState: x,
                onContextMenu: null != a ? a : void 0,
                zoomable: M,
                className: c,
                imageClassName: d,
                minWidth: g,
                minHeight: E,
                mediaLayoutType: this.getType(),
                limitResponsiveWidth: A,
                useFullWidth: N,
                tabIndex: S,
                width: U,
                height: G,
                src: '',
                placeholder: C,
                placeholderVersion: O,
                dataSafeSrc: D,
                srcIsAnimated: L,
                children:
                    null != f
                        ? (e) => {
                              let { src: t, size: n, alt: i, mediaLayoutType: r } = e;
                              return f({
                                  src: t,
                                  size: n,
                                  alt: i,
                                  mediaLayoutType: r
                              });
                          }
                        : void 0,
                onMouseEnter: this.onMouseEnter,
                onMouseLeave: this.onMouseLeave,
                onFocus: this.onFocus,
                onBlur: this.onBlur
            };
        if (1 === B.width && 1 === B.height) return null;
        switch (((M || null != T) && (B.onClick = this.onClick), i && (B.original = null != l && '' !== l ? l : B.src), x)) {
            case v.zo9.LOADING:
                null != t && (B.src = t);
                break;
            case v.zo9.READY:
                if (R.isAnimated(this.props)) {
                    B.onMouseLeave = this.onMouseLeave;
                    let e = (o || P || w) && (null == p || p) && R.visibilityObserver.isVisible(this);
                    e ? ((B.src = this.getSrc(k)), (B.renderAccessory = b)) : ((B.src = this.getSrc(k, !_ || !o)), (B.renderAccessory = this.renderAccessory)),
                        null != f &&
                            (B.children = (t) => {
                                let { src: n, size: i, alt: r, mediaLayoutType: a } = t;
                                return f({
                                    src: n,
                                    size: i,
                                    animating: e,
                                    alt: r,
                                    mediaLayoutType: a
                                });
                            });
                } else B.src = this.getSrc(k);
        }
        return (0, r.jsx)(u.E, { ...B });
    }
    constructor(e) {
        super(e),
            I(this, 'state', {
                readyState: v.zo9.LOADING,
                hasMouseOver: !1,
                hasFocus: !1
            }),
            I(this, 'startLoadingTime', Date.now()),
            I(this, '_cancellers', new Set()),
            I(this, 'observeVisibility', () => {
                R.visibilityObserver.observe(this);
            }),
            I(this, 'unobserveVisibility', () => {
                R.visibilityObserver.unobserve(this);
            }),
            I(this, 'handleImageLoad', (e, t) => {
                this.setState({ readyState: e ? v.zo9.ERROR : v.zo9.READY }, () => {
                    var n;
                    let { format: i, quality: r } = R.getFormatQuality(this.props);
                    R.trackLoadingCompleted({
                        error: e,
                        imageData: t,
                        trigger: null !== (n = this.props.trigger) && void 0 !== n ? n : 'LOAD',
                        startLoadingTime: this.startLoadingTime,
                        readyState: this.state.readyState,
                        format: i,
                        quality: r,
                        imageProps: this.props
                    });
                });
            }),
            I(this, 'onMouseEnter', (e) => {
                R.isAnimated(this.props) && this.setState({ hasMouseOver: !0 });
                let { onMouseEnter: t } = this.props;
                null == t || t(e);
            }),
            I(this, 'onMouseLeave', (e) => {
                R.isAnimated(this.props) && this.setState({ hasMouseOver: !1 });
                let { onMouseLeave: t } = this.props;
                null == t || t(e);
            }),
            I(this, 'onFocus', (e) => {
                R.isAnimated(this.props) && this.setState({ hasFocus: !0 });
            }),
            I(this, 'onBlur', (e) => {
                let { currentTarget: t, relatedTarget: n } = e;
                t.contains(n) || this.setState({ hasFocus: !1 });
            }),
            I(this, 'onClick', (e) => {
                let { onZoom: t, onClick: n } = this.props;
                null != n
                    ? n(e)
                    : null != t &&
                      (e.preventDefault(),
                      t(e, {
                          zoomThumbnailPlaceholder: this.getSrc(this.getRatio()),
                          trigger: 'CLICK'
                      }));
            }),
            I(this, 'renderAccessory', () => {
                let { hasMouseOver: e, hasFocus: t } = this.state,
                    n = e || t,
                    i = null != this.props.renderAccessory ? this.props.renderAccessory() : null;
                return this.props.shouldRenderAccessory ? (n ? i : (0, r.jsx)(d.Z, {})) : null;
            }),
            (0, f.Vv)(this.getSrc(this.getRatio(), R.isAnimated(this.props))) && (this.state.readyState = v.zo9.READY);
    }
}
I(R, 'visibilityObserver', new l.Z({ threshold: 0.6 })),
    I(R, 'defaultProps', {
        shouldLink: !1,
        autoPlay: !1,
        animated: !1,
        minWidth: 0,
        minHeight: 0,
        shouldRenderAccessory: !0,
        srcIsAnimated: !1
    });
let O = (0, c.B)({
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
