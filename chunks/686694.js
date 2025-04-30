i.d(e, { Z: () => O });
var s,
    n = i(200651),
    a = i(192379),
    h = i(120356),
    r = i.n(h),
    o = i(692547),
    l = i(477690),
    d = i(481060),
    c = i(585483),
    u = i(624138),
    p = i(890056),
    f = i(636879),
    m = i(810847),
    v = i(898625),
    g = i(981631),
    w = i(183624);
function b(t, e, i) {
    return (
        e in t
            ? Object.defineProperty(t, e, {
                  value: i,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (t[e] = i),
        t
    );
}
let y = (0, u.Mg)(l.Z.WAVE_SPLASH_RESPONSIVE_WIDTH_MOBILE),
    x = 1 / 120;
class E extends (s = a.Component) {
    componentDidMount() {
        this.initialize();
    }
    componentDidUpdate(t) {
        let { waveState: e } = this.props;
        e === v.hO.FILLING && e !== t.waveState && this.waveFill();
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
        window.addEventListener('resize', this.resizeCanvas, !1), window.addEventListener('blur', this.delayedPause, !1), window.addEventListener('focus', this.play, !1), document.addEventListener('visibilitychange', this.handleVisibilityChange, !1), c.S.subscribe(g.CkL.WAVE_EMPHASIZE, this.handleWaveEmphasize);
    }
    unbindEvents() {
        window.removeEventListener('resize', this.resizeCanvas, !1), window.removeEventListener('blur', this.delayedPause, !1), window.removeEventListener('focus', this.play, !1), document.removeEventListener('visibilitychange', this.handleVisibilityChange, !1), c.S.unsubscribe(g.CkL.WAVE_EMPHASIZE, this.handleWaveEmphasize);
    }
    advanceTransitionalState() {
        let { waveState: t } = this.props;
        (t === v.hO.INITIAL || t === v.hO.FILLING) && this.updateWaveState(t + 1);
    }
    waveFill() {
        this._isPlaying ? this.children.forEach((t) => t.fill()) : this.updateWaveState(v.hO.FILLED);
    }
    updateAnimation(t) {
        this.children.forEach((e) => e.update(t));
    }
    renderAnimation() {
        let { canvasFillStyle: t } = this.props,
            { canvasContext: e } = this;
        null != e && ((e.fillStyle = t), e.fillRect(0, 0, this.width, this.height), this.children.forEach((t) => t.render(e)));
    }
    render() {
        let { waveState: t, hideFallback: e, embedded: i } = this.props;
        return (0, n.jsx)(d.Sfi.Consumer, {
            children: (s) => {
                let { reducedMotion: a } = s;
                return a.enabled
                    ? (0, n.jsx)('div', {
                          className: r()(w.fallbackImage, {
                              [w.embedded]: i,
                              [w.visible]: !e && t >= v.hO.ENTERED
                          })
                      })
                    : (0, n.jsx)('canvas', {
                          className: r()(w.canvas, { [w.embedded]: i }),
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
                var e;
                if (null == t) return;
                (this.canvas = t), (this.canvasContext = this.canvas.getContext('2d'));
                let i = null != (e = window.devicePixelRatio) ? e : 1,
                    s = this.canvasContext.webkitBackingStorePixelRatio || this.canvasContext.mozBackingStorePixelRatio || this.canvasContext.msBackingStorePixelRatio || this.canvasContext.oBackingStorePixelRatio || this.canvasContext.backingStorePixelRatio || 1;
                (this.ratio = i / s), this.resizeCanvas();
            }),
            b(this, 'resizeCanvas', () => {
                (this.width = window.innerWidth), (this.height = window.innerHeight);
                let { canvas: t, canvasContext: e, width: i, height: s, ratio: n } = this;
                null != t && null != e && ((t.width = i * n), (t.height = s * n), (t.style.width = i + 'px'), (t.style.height = s + 'px'), e.scale(n, n)), i <= y ? this.pause() : this.play(), this.wave.resizeWave(), this.renderAnimation();
            }),
            b(this, 'handleVisibilityChange', () => {
                document.hidden ? this.delayedPause() : this.play();
            }),
            b(this, 'play', () => {
                clearTimeout(this._pauseTimeout), this._isPlaying || ((this._isPlaying = !0), this.run());
            }),
            b(this, 'pause', () => {
                clearTimeout(this._pauseTimeout), (this._isPlaying = !1), null != this._reqAnimId && window.cancelAnimationFrame(this._reqAnimId), (this._reqAnimId = null), this.advanceTransitionalState();
            }),
            b(this, 'delayedPause', () => {
                clearTimeout(this._pauseTimeout), (this._pauseTimeout = setTimeout(this.pause, 4000));
            }),
            b(this, 'updateWaveState', (t) => {
                let { updateWaveState: e } = this.props;
                e(t);
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
                    e = Math.min((t - this._lastTick) / 1000, 8 * x);
                for (; e > 0; ) {
                    let t = e < x ? e : x;
                    this.updateAnimation(t), (e -= t);
                }
                this.renderAnimation(), (this._lastTick = t), (this._reqAnimId = requestAnimationFrame(this.run));
            }),
            (this.wave = new m.Z(this.updateWaveState)),
            (this.children = [new p.Z(), new f.Z(), this.wave]);
    }
}
b(E, 'defaultProps', { embedded: !1 });
let O = (t) => {
    let e = (0, d.dQu)(o.Z.unsafe_rawColors.PRIMARY_630).hex();
    return (0, n.jsx)(
        E,
        (function (t) {
            for (var e = 1; e < arguments.length; e++) {
                var i = null != arguments[e] ? arguments[e] : {},
                    s = Object.keys(i);
                'function' == typeof Object.getOwnPropertySymbols &&
                    (s = s.concat(
                        Object.getOwnPropertySymbols(i).filter(function (t) {
                            return Object.getOwnPropertyDescriptor(i, t).enumerable;
                        })
                    )),
                    s.forEach(function (e) {
                        b(t, e, i[e]);
                    });
            }
            return t;
        })({ canvasFillStyle: e }, t)
    );
};
