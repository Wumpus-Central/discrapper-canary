r.d(n, {
    YG: function () {
        return N;
    },
    ZP: function () {
        return D;
    },
    uo: function () {
        return A;
    }
});
var i,
    a,
    s = r(47120);
var o = r(200651),
    l = r(192379),
    u = r(392711);
var c = r(286379),
    d = r(622535),
    f = r(916616),
    _ = r(818083),
    h = r(279745),
    p = r(134432),
    m = r(797614),
    g = r(740492),
    E = r(866960),
    v = r(626135),
    I = r(768581),
    T = r(956664),
    b = r(981631),
    y = r(217702);
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
    N = /\.webp($|\?|#)/i,
    C = /\.png($|\?|#)/i,
    R = 400,
    O = 300;
!(function (e) {
    (e.LOAD = 'LOAD'), (e.PRELOAD = 'PRELOAD'), (e.CLICK = 'CLICK');
})(i || (i = {}));
class D extends (a = l.Component) {
    static isAnimated(e) {
        let { src: n, original: r, animated: i, srcIsAnimated: a } = e;
        return i || A.test(null != r && '' !== r ? r : n) || (null != a && a && N.test(null != r && '' !== r ? r : n));
    }
    static isSrcPNG(e) {
        let { src: n } = e;
        return C.test(n);
    }
    componentDidMount() {
        let { readyState: e } = this.state;
        e === b.zo9.LOADING && this.loadImage(this.getSrc(this.getRatio(), D.isAnimated(this.props)), this.handleImageLoad), D.isAnimated(this.props) && this.observeVisibility();
    }
    componentDidUpdate(e) {
        let n = D.isAnimated(this.props);
        D.isAnimated(e) !== n && (n ? this.observeVisibility() : this.unobserveVisibility());
    }
    componentWillUnmount() {
        D.isAnimated(this.props) && this.unobserveVisibility(), this._cancellers.forEach((e) => e()), this._cancellers.clear();
    }
    getSrc(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            { src: r, width: i, height: a, maxWidth: s, maxHeight: o, mediaLayoutType: l } = this.props,
            { format: u, quality: c } = this.getFormatQuality(n);
        return (0, p.Q4)({
            src: r,
            width: i,
            height: a,
            ratio: e,
            maxWidth: l === y.hV.MOSAIC ? s : void 0,
            maxHeight: l === y.hV.MOSAIC ? o : void 0,
            format: u,
            quality: c,
            animated: !n,
            srcIsAnimated: this.props.srcIsAnimated
        });
    }
    getFormatQuality() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            n = null,
            r = null;
        return (
            I.$k && (e || !D.isAnimated(this.props)) ? ((n = 'webp'), D.isSrcPNG(this.props) && (r = 'lossless')) : e && (n = 'png'),
            {
                format: n,
                quality: r
            }
        );
    }
    getRatio() {
        let { width: e, height: n, maxWidth: r = R, maxHeight: i = O, mediaLayoutType: a, useFullWidth: s } = this.props;
        return a === y.hV.MOSAIC && s
            ? (0, T.rn)({
                  width: e,
                  height: n,
                  maxWidth: r,
                  maxHeight: i
              })
            : (0, T.Dc)({
                  width: e,
                  height: n,
                  maxWidth: r,
                  maxHeight: i
              });
    }
    getType() {
        let { mediaLayoutType: e, responsive: n } = this.props;
        return null != e ? e : n ? y.hV.RESPONSIVE : y.hV.STATIC;
    }
    loadImage(e, n) {
        let { width: r, height: i } = this.props;
        if (((this.startLoadingTime = Date.now()), 1 === r && 1 === i)) return;
        let a = (0, p.po)(e, (e, r) => {
            null != a && this._cancellers.delete(a), null == n || n(e, r);
        });
        null != a && this._cancellers.add(a);
    }
    render() {
        let { alt: e, zoomThumbnailPlaceholder: n, onZoom: r, shouldLink: i, onContextMenu: a, autoPlay: s, original: l, className: c, imageClassName: d, children: _, animated: h, shouldAnimate: p, width: m, height: g, minWidth: E, minHeight: v, maxWidth: I, maxHeight: T, onClick: y, renderAccessory: S, tabIndex: A, limitResponsiveWidth: N, useFullWidth: C, placeholder: R, placeholderVersion: O, dataSafeSrc: L, srcIsAnimated: x } = this.props,
            { readyState: w, hasMouseOver: P, hasFocus: M } = this.state,
            k = null != r,
            U = this.getRatio(),
            B = (0, u.clamp)(Math.round(m * U), null != E ? E : 0, null != I ? I : 1 / 0),
            G = (0, u.clamp)(Math.round(g * U), null != v ? v : 0, null != T ? T : 1 / 0),
            F = {
                alt: e,
                readyState: w,
                onContextMenu: null != a ? a : void 0,
                zoomable: k,
                className: c,
                imageClassName: d,
                minWidth: E,
                minHeight: v,
                mediaLayoutType: this.getType(),
                limitResponsiveWidth: N,
                useFullWidth: C,
                tabIndex: A,
                width: B,
                height: G,
                src: '',
                placeholder: R,
                placeholderVersion: O,
                dataSafeSrc: L,
                srcIsAnimated: x,
                children:
                    null != _
                        ? (e) => {
                              let { src: n, size: r, alt: i, mediaLayoutType: a } = e;
                              return _({
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
        if (1 === F.width && 1 === F.height) return null;
        switch (((k || null != y) && (F.onClick = this.onClick), i && (F.original = null != l && '' !== l ? l : F.src), w)) {
            case b.zo9.LOADING:
                null != n && (F.src = n);
                break;
            case b.zo9.READY:
                if (D.isAnimated(this.props)) {
                    F.onMouseLeave = this.onMouseLeave;
                    let e = (s || P || M) && (null == p || p) && D.visibilityObserver.isVisible(this);
                    e ? ((F.src = this.getSrc(U)), (F.renderAccessory = S)) : ((F.src = this.getSrc(U, !h || !s)), (F.renderAccessory = this.renderAccessory)),
                        null != _ &&
                            (F.children = (n) => {
                                let { src: r, size: i, alt: a, mediaLayoutType: s } = n;
                                return _({
                                    src: r,
                                    size: i,
                                    animating: e,
                                    alt: a,
                                    mediaLayoutType: s
                                });
                            });
                } else F.src = this.getSrc(U);
        }
        return (0, o.jsx)(f.E, { ...F });
    }
    async trackLoadingCompleted(e, n, r) {
        var i;
        if ((e && m.Z.increment({ name: c.V.IMAGE_LOAD_ERROR }), !this.imageLoadAnalyticsEnabled)) return;
        let a = await fetch(n.url).catch(() => void 0),
            s = null == a ? void 0 : null === (i = a.headers) || void 0 === i ? void 0 : i.get('content-length'),
            o = null != s ? Number(s) : null,
            l = Date.now() - this.startLoadingTime,
            { format: u, quality: d } = this.getFormatQuality();
        v.default.track(b.rMx.IMAGE_LOADING_COMPLETED, {
            duration_ms: l,
            requested_height: n.height,
            requested_width: n.width,
            height: this.props.height,
            width: this.props.width,
            original_url: this.props.original,
            url: this.props.src,
            requested_url: n.url,
            format: u,
            quality: d,
            state: e ? b.zo9.ERROR : this.state.readyState,
            data_saving_mode: g.ZP.dataSavingMode,
            low_quality_image_mode: g.ZP.dataSavingMode,
            trigger: r,
            size: o,
            connection_type: E.Z.getType(),
            effective_connection_speed: E.Z.getEffectiveConnectionSpeed(),
            service_provider: E.Z.getServiceProvider()
        });
    }
    constructor(e) {
        super(e),
            S(this, 'imageLoadAnalyticsEnabled', !1),
            S(this, 'state', {
                readyState: b.zo9.LOADING,
                hasMouseOver: !1,
                hasFocus: !1
            }),
            S(this, 'startLoadingTime', Date.now()),
            S(this, '_cancellers', new Set()),
            S(this, 'observeVisibility', () => {
                D.visibilityObserver.observe(this);
            }),
            S(this, 'unobserveVisibility', () => {
                D.visibilityObserver.unobserve(this);
            }),
            S(this, 'handleImageLoad', (e, n) => {
                this.setState({ readyState: e ? b.zo9.ERROR : b.zo9.READY }, () => {
                    var r;
                    return this.trackLoadingCompleted(e, n, null !== (r = this.props.trigger) && void 0 !== r ? r : 'LOAD');
                });
            }),
            S(this, 'preloadImage', (e, n) => {
                let { width: r, height: i } = e,
                    { width: a, height: s } = this.props;
                (1 !== a || 1 !== s) &&
                    this.loadImage(
                        this.getSrc(
                            (0, T.Dc)({
                                width: a,
                                height: s,
                                maxWidth: r,
                                maxHeight: i
                            })
                        ),
                        (e, r) => {
                            this.trackLoadingCompleted(e, r, 'PRELOAD'), null == n || n(e, r);
                        }
                    );
            }),
            S(this, 'onMouseEnter', (e) => {
                D.isAnimated(this.props) && this.setState({ hasMouseOver: !0 });
                let { onMouseEnter: n } = this.props;
                null == n || n(e, { preloadImage: this.preloadImage });
            }),
            S(this, 'onMouseLeave', (e) => {
                D.isAnimated(this.props) && this.setState({ hasMouseOver: !1 });
                let { onMouseLeave: n } = this.props;
                null == n || n(e);
            }),
            S(this, 'onFocus', (e) => {
                D.isAnimated(this.props) && this.setState({ hasFocus: !0 });
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
                return this.props.shouldRenderAccessory ? (r ? i : (0, o.jsx)(h.Z, {})) : null;
            }),
            (0, p.Vv)(this.getSrc(this.getRatio(), D.isAnimated(this.props))) && (this.state.readyState = b.zo9.READY),
            (this.imageLoadAnalyticsEnabled = L.getCurrentConfig({ location: 'lazy_image' }).enabled);
    }
}
S(D, 'visibilityObserver', new d.Z({ threshold: 0.7 })),
    S(D, 'defaultProps', {
        shouldLink: !1,
        autoPlay: !1,
        animated: !1,
        minWidth: 0,
        minHeight: 0,
        shouldRenderAccessory: !0,
        srcIsAnimated: !1
    });
let L = (0, _.B)({
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
