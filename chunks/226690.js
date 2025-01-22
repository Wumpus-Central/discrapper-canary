r.d(n, {
    F: function () {
        return d;
    }
});
var i,
    a,
    o = r(47120);
var s = r(200651),
    l = r(192379),
    u = r(846519);
function c(e, n, r) {
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
!(function (e) {
    (e.SVG = 'svg'), (e.CANVAS = 'canvas');
})(i || (i = {}));
class d extends (a = l.Component) {
    componentDidMount() {
        (null == this.props.versionKey || !(this.props.versionKey < 0)) && this.loadAnimation();
    }
    componentDidUpdate(e) {
        (null == this.props.versionKey || !(this.props.versionKey < 0)) && (null != this.props.versionKey && null != e.versionKey && this.props.versionKey > e.versionKey ? this.loadAnimation() : this.playOrPauseAnimation(e));
    }
    componentWillUnmount() {
        null != this.animation && (this.animation.stop(), this.animation.destroy(), (this.animation = null)), this.delayTimeout.stop();
    }
    playOrPauseAnimation(e) {
        if (null != this.animation) this.props.shouldAnimate && (null == e || !e.shouldAnimate) ? (this.props.resetOnPlay ? this.animation.goToAndPlay(0) : this.animation.play()) : !this.props.shouldAnimate && (null == e || e.shouldAnimate) && (this.animation.pause(), null != this.props.pauseAtFrame && this.animation.goToAndStop(this.props.pauseAtFrame, !0));
    }
    render() {
        return (0, s.jsx)('div', {
            className: this.props.className,
            ref: this.animationRef
        });
    }
    constructor(...e) {
        super(...e),
            c(this, 'animationRef', l.createRef()),
            c(this, 'animation', void 0),
            c(this, 'delayTimeout', new u.V7()),
            c(this, 'loadAnimation', async () => {
                let { importData: e, loop: n, autoplay: i, delay: a, renderer: o, rendererSettings: s, shouldAnimate: l } = this.props;
                null != this.animation && this.animation.destroy();
                let [u, { default: c }] = await Promise.all([e(), Promise.resolve().then(r.t.bind(r, 500923, 23))]);
                if (null == this.animationRef.current) return;
                let d = 'object' == typeof u && 'default' in u && 'string' == typeof u.default ? { path: u.default } : { animationData: u };
                (this.animation = c.loadAnimation({
                    container: this.animationRef.current,
                    renderer: o,
                    loop: n,
                    autoplay: i && null == a && l,
                    rendererSettings: s,
                    ...d
                })),
                    null != a
                        ? this.delayTimeout.start(a, () => {
                              var e;
                              null === (e = this.animation) || void 0 === e || e.play();
                          })
                        : this.playOrPauseAnimation(),
                    this.animation.addEventListener('complete', this.handleComplete);
            }),
            c(this, 'handleComplete', () => {
                let { onComplete: e } = this.props;
                null != e && e();
            });
    }
}
c(d, 'defaultProps', {
    loop: !0,
    autoplay: !0,
    renderer: 'svg',
    shouldAnimate: !0,
    resetOnPlay: !1
}),
    c(d, 'Renderers', i);
