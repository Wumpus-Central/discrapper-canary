var s,
    n = e(200651),
    h = e(192379),
    a = e(120356),
    r = e.n(a),
    l = e(692547),
    o = e(477690),
    d = e(481060),
    u = e(585483),
    c = e(624138),
    p = e(890056),
    m = e(636879),
    f = e(810847),
    v = e(898625),
    g = e(981631),
    w = e(503645);
function b(t, i, e) {
    return (
        i in t
            ? Object.defineProperty(t, i, {
                  value: e,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (t[i] = e),
        t
    );
}
let x = (0, c.Mg)(o.Z.WAVE_SPLASH_RESPONSIVE_WIDTH_MOBILE),
    E = 1 / 120;
class y extends (s = h.Component) {
    componentDidMount() {
        this.initialize();
    }
    componentDidUpdate(t) {
        let { waveState: i } = this.props;
        i === v.hO.FILLING && i !== t.waveState && this.waveFill();
    }
    componentWillUnmount() {
        this.terminate();
    }
    initialize() {
        this.children.forEach((t) => t.initialize()), this.bindEvents(), this.resizeCanvas(), document.hidden && this.delayedPause();
    }
    terminate() {
        this.pause(), this.unbindEvents(), this.children.forEach((t) => t.terminate());
    }
    bindEvents() {
        window.addEventListener('resize', this.resizeCanvas, !1), window.addEventListener('blur', this.delayedPause, !1), window.addEventListener('focus', this.play, !1), document.addEventListener('visibilitychange', this.handleVisibilityChange, !1), u.S.subscribe(g.CkL.WAVE_EMPHASIZE, this.handleWaveEmphasize);
    }
    unbindEvents() {
        window.removeEventListener('resize', this.resizeCanvas, !1), window.removeEventListener('blur', this.delayedPause, !1), window.removeEventListener('focus', this.play, !1), document.removeEventListener('visibilitychange', this.handleVisibilityChange, !1), u.S.unsubscribe(g.CkL.WAVE_EMPHASIZE, this.handleWaveEmphasize);
    }
    advanceTransitionalState() {
        let { waveState: t } = this.props;
        (t === v.hO.INITIAL || t === v.hO.FILLING) && this.updateWaveState(t + 1);
    }
    waveFill() {
        this._isPlaying ? this.children.forEach((t) => t.fill()) : this.updateWaveState(v.hO.FILLED);
    }
    updateAnimation(t) {
        this.children.forEach((i) => i.update(t));
    }
    renderAnimation() {
        let { canvasFillStyle: t } = this.props,
            { canvasContext: i } = this;
        if (null != i) (i.fillStyle = t), i.fillRect(0, 0, this.width, this.height), this.children.forEach((t) => t.render(i));
    }
    render() {
        let { waveState: t, hideFallback: i, embedded: e } = this.props;
        return (0, n.jsx)(d.AccessibilityPreferencesContext.Consumer, {
            children: (s) => {
                let { reducedMotion: h } = s;
                return h.enabled
                    ? (0, n.jsx)('div', {
                          className: r()(w.fallbackImage, {
                              [w.embedded]: e,
                              [w.visible]: !i && t >= v.hO.ENTERED
                          })
                      })
                    : (0, n.jsx)('canvas', {
                          className: r()(w.canvas, { [w.embedded]: e }),
                          ref: this.setCanvas
                      });
            }
        });
    }
    constructor(t) {
        super(t),
            b(this, 'width', 0),
            b(this, 'height', 0),
            b(this, 'canvas', void 0),
            b(this, 'canvasContext', void 0),
            b(this, 'children', []),
            b(this, 'wave', void 0),
            b(this, 'ratio', 0),
            b(this, '_lastTick', 0),
            b(this, '_isPlaying', !1),
            b(this, '_reqAnimId', null),
            b(this, '_pauseTimeout', void 0),
            b(this, 'setCanvas', (t) => {
                var i;
                if (null == t) return;
                (this.canvas = t), (this.canvasContext = this.canvas.getContext('2d'));
                let e = null !== (i = window.devicePixelRatio) && void 0 !== i ? i : 1,
                    s = this.canvasContext.webkitBackingStorePixelRatio || this.canvasContext.mozBackingStorePixelRatio || this.canvasContext.msBackingStorePixelRatio || this.canvasContext.oBackingStorePixelRatio || this.canvasContext.backingStorePixelRatio || 1;
                (this.ratio = e / s), this.resizeCanvas();
            }),
            b(this, 'resizeCanvas', () => {
                (this.width = window.innerWidth), (this.height = window.innerHeight);
                let { canvas: t, canvasContext: i, width: e, height: s, ratio: n } = this;
                null != t && null != i && ((t.width = e * n), (t.height = s * n), (t.style.width = e + 'px'), (t.style.height = s + 'px'), i.scale(n, n)), e <= x ? this.pause() : this.play(), this.wave.resizeWave(), this.renderAnimation();
            }),
            b(this, 'handleVisibilityChange', () => {
                document.hidden ? this.delayedPause() : this.play();
            }),
            b(this, 'play', () => {
                clearTimeout(this._pauseTimeout), !this._isPlaying && ((this._isPlaying = !0), this.run());
            }),
            b(this, 'pause', () => {
                clearTimeout(this._pauseTimeout), (this._isPlaying = !1), null != this._reqAnimId && window.cancelAnimationFrame(this._reqAnimId), (this._reqAnimId = null), this.advanceTransitionalState();
            }),
            b(this, 'delayedPause', () => {
                clearTimeout(this._pauseTimeout), (this._pauseTimeout = setTimeout(this.pause, 4000));
            }),
            b(this, 'updateWaveState', (t) => {
                let { updateWaveState: i } = this.props;
                i(t);
            }),
            b(this, 'handleWaveEmphasize', () => {
                this.wave.emphasize();
            }),
            b(this, 'run', () => {
                if (!this._isPlaying) return;
                if (0 === this._lastTick) {
                    (this._lastTick = Date.now()), (this._reqAnimId = requestAnimationFrame(this.run));
                    return;
                }
                let t = Date.now(),
                    i = Math.min((t - this._lastTick) / 1000, 8 * E);
                for (; i > 0; ) {
                    let t = i < E ? i : E;
                    this.updateAnimation(t), (i -= t);
                }
                this.renderAnimation(), (this._lastTick = t), (this._reqAnimId = requestAnimationFrame(this.run));
            }),
            (this.wave = new f.Z(this.updateWaveState)),
            (this.children = [new p.Z(), new m.Z(), this.wave]);
    }
}
b(y, 'defaultProps', { embedded: !1 });
i.Z = (t) => {
    let i = (0, d.useToken)(l.Z.unsafe_rawColors.PRIMARY_630).hex();
    return (0, n.jsx)(y, {
        canvasFillStyle: i,
        ...t
    });
};
