n.d(t, { F: () => u }), n(47120);
var i,
    r = n(200651),
    a = n(192379),
    s = n(846519);
function o(e, t, n) {
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
var l = (function (e) {
    return (e.SVG = 'svg'), (e.CANVAS = 'canvas'), e;
})(l || {});
class u extends (i = a.Component) {
    componentDidMount() {
        (null != this.props.versionKey && this.props.versionKey < 0) || this.loadAnimation();
    }
    componentDidUpdate(e) {
        (null != this.props.versionKey && this.props.versionKey < 0) || (null != this.props.versionKey && null != e.versionKey && this.props.versionKey > e.versionKey ? this.loadAnimation() : this.playOrPauseAnimation(e));
    }
    componentWillUnmount() {
        null != this.animation && (this.animation.stop(), this.animation.destroy(), (this.animation = null)), this.delayTimeout.stop();
    }
    playOrPauseAnimation(e) {
        null != this.animation && (this.props.shouldAnimate && (null == e || !e.shouldAnimate) ? (this.props.resetOnPlay ? this.animation.goToAndPlay(0) : this.animation.play()) : !this.props.shouldAnimate && (null == e || e.shouldAnimate) && (this.animation.pause(), null != this.props.pauseAtFrame && this.animation.goToAndStop(this.props.pauseAtFrame, !0)));
    }
    render() {
        return (0, r.jsx)('div', {
            className: this.props.className,
            ref: this.animationRef
        });
    }
    constructor(...e) {
        super(...e),
            o(this, 'animationRef', a.createRef()),
            o(this, 'animation', void 0),
            o(this, 'delayTimeout', new s.V7()),
            o(this, 'loadAnimation', async () => {
                let { importData: e, loop: t, autoplay: i, delay: r, renderer: a, rendererSettings: s, shouldAnimate: o } = this.props;
                null != this.animation && this.animation.destroy();
                let [l, { default: u }] = await Promise.all([e(), Promise.resolve().then(n.t.bind(n, 500923, 23))]);
                if (null == this.animationRef.current) return;
                let c = 'object' == typeof l && 'default' in l && 'string' == typeof l.default ? { path: l.default } : { animationData: l };
                (this.animation = u.loadAnimation({
                    container: this.animationRef.current,
                    renderer: a,
                    loop: t,
                    autoplay: i && null == r && o,
                    rendererSettings: s,
                    ...c
                })),
                    null != r
                        ? this.delayTimeout.start(r, () => {
                              var e;
                              null === (e = this.animation) || void 0 === e || e.play();
                          })
                        : this.playOrPauseAnimation(),
                    this.animation.addEventListener('complete', this.handleComplete);
            }),
            o(this, 'handleComplete', () => {
                let { onComplete: e } = this.props;
                null != e && e();
            });
    }
}
o(u, 'defaultProps', {
    loop: !0,
    autoplay: !0,
    renderer: 'svg',
    shouldAnimate: !0,
    resetOnPlay: !1
}),
    o(u, 'Renderers', l);
