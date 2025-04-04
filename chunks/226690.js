n.d(t, { F: () => u }), n(47120);
var r,
    i = n(200651),
    o = n(192379),
    a = n(846519);
function s(e, t, n) {
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
function l(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                s(e, t, n[t]);
            });
    }
    return e;
}
var c = (function (e) {
    return (e.SVG = 'svg'), (e.CANVAS = 'canvas'), e;
})(c || {});
class u extends (r = o.Component) {
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
        return (0, i.jsx)('div', {
            className: this.props.className,
            ref: this.animationRef
        });
    }
    constructor(...e) {
        super(...e),
            s(this, 'animationRef', o.createRef()),
            s(this, 'animation', void 0),
            s(this, 'delayTimeout', new a.V7()),
            s(this, 'loadAnimation', async () => {
                let { importData: e, loop: t, autoplay: r, delay: i, renderer: o, rendererSettings: a, shouldAnimate: s } = this.props;
                null != this.animation && this.animation.destroy();
                let [c, { default: u }] = await Promise.all([e(), Promise.resolve().then(n.t.bind(n, 500923, 23))]);
                if (null == this.animationRef.current) return;
                let d = 'object' == typeof c && 'default' in c && 'string' == typeof c.default ? { path: c.default } : { animationData: c };
                (this.animation = u.loadAnimation(
                    l(
                        {
                            container: this.animationRef.current,
                            renderer: o,
                            loop: t,
                            autoplay: r && null == i && s,
                            rendererSettings: a
                        },
                        d
                    )
                )),
                    null != i
                        ? this.delayTimeout.start(i, () => {
                              var e;
                              null == (e = this.animation) || e.play();
                          })
                        : this.playOrPauseAnimation(),
                    this.animation.addEventListener('complete', this.handleComplete);
            }),
            s(this, 'handleComplete', () => {
                let { onComplete: e } = this.props;
                null != e && e();
            });
    }
}
s(u, 'defaultProps', {
    loop: !0,
    autoplay: !0,
    renderer: 'svg',
    shouldAnimate: !0,
    resetOnPlay: !1
}),
    s(u, 'Renderers', c);
