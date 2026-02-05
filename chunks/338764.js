i.d(e, { A: () => I });
var s = i(627968),
    n = i(64700),
    a = i(503698),
    h = i.n(a),
    l = i(827734),
    r = i(319060),
    o = i(397927),
    d = i(203982),
    c = i(240248),
    p = i(397197),
    u = i(109764),
    m = i(574902),
    v = i(852431),
    g = i(652215),
    w = i(917686);
let E = (0, c.xI)(r.A.WAVE_SPLASH_RESPONSIVE_WIDTH_MOBILE),
    f = 1 / 120;
class x extends n.Component {
    width = 0;
    height = 0;
    canvas;
    canvasContext;
    children = [];
    wave;
    ratio = 0;
    _lastTick = 0;
    _isPlaying = !1;
    _reqAnimId = null;
    _pauseTimeout;
    constructor(t) {
        super(t), (this.wave = new m.A(this.updateWaveState)), (this.children = [new p.A(), new u.A(), this.wave]);
    }
    static defaultProps = { embedded: !1 };
    componentDidMount() {
        this.initialize();
    }
    componentDidUpdate(t) {
        let { waveState: e } = this.props;
        e === v.go.FILLING && e !== t.waveState && this.waveFill();
    }
    componentWillUnmount() {
        this.terminate();
    }
    setCanvas = (t) => {
        if (null == t) return;
        (this.canvas = t), (this.canvasContext = this.canvas.getContext("2d"));
        let e = window.devicePixelRatio ?? 1,
            i =
                this.canvasContext.webkitBackingStorePixelRatio ||
                this.canvasContext.mozBackingStorePixelRatio ||
                this.canvasContext.msBackingStorePixelRatio ||
                this.canvasContext.oBackingStorePixelRatio ||
                this.canvasContext.backingStorePixelRatio ||
                1;
        (this.ratio = e / i), this.resizeCanvas();
    };
    resizeCanvas = () => {
        (this.width = window.innerWidth), (this.height = window.innerHeight);
        let { canvas: t, canvasContext: e, width: i, height: s, ratio: n } = this;
        null != t &&
            null != e &&
            ((t.width = i * n),
            (t.height = s * n),
            (t.style.width = i + "px"),
            (t.style.height = s + "px"),
            e.scale(n, n)),
            i <= E ? this.pause() : this.play(),
            this.wave.resizeWave(),
            this.renderAnimation();
    };
    initialize() {
        this.children.forEach((t) => t.initialize()),
            this.bindEvents(),
            this.resizeCanvas(),
            document.hidden && this.delayedPause();
    }
    terminate() {
        this.pause(), this.unbindEvents(), this.children.forEach((t) => t.terminate());
    }
    bindEvents() {
        window.addEventListener("resize", this.resizeCanvas, !1),
            window.addEventListener("blur", this.delayedPause, !1),
            window.addEventListener("focus", this.play, !1),
            document.addEventListener("visibilitychange", this.handleVisibilityChange, !1),
            d._.subscribe(g.jej.WAVE_EMPHASIZE, this.handleWaveEmphasize);
    }
    unbindEvents() {
        window.removeEventListener("resize", this.resizeCanvas, !1),
            window.removeEventListener("blur", this.delayedPause, !1),
            window.removeEventListener("focus", this.play, !1),
            document.removeEventListener("visibilitychange", this.handleVisibilityChange, !1),
            d._.unsubscribe(g.jej.WAVE_EMPHASIZE, this.handleWaveEmphasize);
    }
    handleVisibilityChange = () => {
        document.hidden ? this.delayedPause() : this.play();
    };
    play = () => {
        clearTimeout(this._pauseTimeout), this._isPlaying || ((this._isPlaying = !0), this.run());
    };
    pause = () => {
        clearTimeout(this._pauseTimeout),
            (this._isPlaying = !1),
            null != this._reqAnimId && window.cancelAnimationFrame(this._reqAnimId),
            (this._reqAnimId = null),
            this.advanceTransitionalState();
    };
    delayedPause = () => {
        clearTimeout(this._pauseTimeout), (this._pauseTimeout = setTimeout(this.pause, 4e3));
    };
    advanceTransitionalState() {
        let { waveState: t } = this.props;
        (t === v.go.INITIAL || t === v.go.FILLING) && this.updateWaveState(t + 1);
    }
    waveFill() {
        this._isPlaying ? this.children.forEach((t) => t.fill()) : this.updateWaveState(v.go.FILLED);
    }
    updateWaveState = (t) => {
        let { updateWaveState: e } = this.props;
        e(t);
    };
    handleWaveEmphasize = () => {
        this.wave.emphasize();
    };
    updateAnimation(t) {
        this.children.forEach((e) => e.update(t));
    }
    renderAnimation() {
        let { canvasFillStyle: t } = this.props,
            { canvasContext: e } = this;
        null != e &&
            ((e.fillStyle = t), e.fillRect(0, 0, this.width, this.height), this.children.forEach((t) => t.render(e)));
    }
    run = () => {
        if (!this._isPlaying) return;
        if (0 === this._lastTick) {
            (this._lastTick = Date.now()), (this._reqAnimId = requestAnimationFrame(this.run));
            return;
        }
        let t = Date.now(),
            e = Math.min((t - this._lastTick) / 1e3, 8 * f);
        for (; e > 0; ) {
            let t = e < f ? e : f;
            this.updateAnimation(t), (e -= t);
        }
        this.renderAnimation(), (this._lastTick = t), (this._reqAnimId = requestAnimationFrame(this.run));
    };
    render() {
        let { waveState: t, hideFallback: e, embedded: i } = this.props;
        return (0, s.jsx)(o.CZY.Consumer, {
            children: (n) => {
                let { reducedMotion: a } = n;
                return a.enabled
                    ? (0, s.jsx)("div", { className: h()(w.s9, { [w.F9]: i, [w.RK]: !e && t >= v.go.ENTERED }) })
                    : (0, s.jsx)("canvas", { className: h()(w.Ji, { [w.F9]: i }), ref: this.setCanvas });
            },
        });
    }
}
let I = (t) => {
    let e = (0, o.rdh)(l.A.unsafe_rawColors.PRIMARY_630).hex();
    return (0, s.jsx)(x, { canvasFillStyle: e, ...t });
};
