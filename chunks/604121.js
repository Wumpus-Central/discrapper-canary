"use strict";
n.d(t, { a: () => l });
var i,
    r = n(627968),
    s = n(64700),
    a = n(451988),
    o = (((i = o || {}).SVG = "svg"), (i.CANVAS = "canvas"), i);
class l extends s.Component {
    static defaultProps = { loop: !0, autoplay: !0, renderer: "svg", shouldAnimate: !0, resetOnPlay: !1 };
    static Renderers = o;
    animationRef = s.createRef();
    animation;
    delayTimeout = new a.Ep();
    loadAnimation = async () => {
        let {
            importData: e,
            loop: t,
            autoplay: i,
            delay: r,
            renderer: s,
            rendererSettings: a,
            shouldAnimate: o,
        } = this.props;
        null != this.animation && this.animation.destroy();
        let [l, { default: u }] = await Promise.all([e(), n.e("96382").then(n.t.bind(n, 883885, 23))]);
        if (null == this.animationRef.current) return;
        let c =
            "object" == typeof l && null != l && "default" in l && "string" == typeof l.default
                ? { path: l.default }
                : { animationData: l };
        (this.animation = u.loadAnimation({
            container: this.animationRef.current,
            renderer: s,
            loop: t,
            autoplay: i && null == r && o,
            rendererSettings: a,
            ...c,
        })),
            null != r
                ? this.delayTimeout.start(r, () => {
                      this.animation?.play();
                  })
                : this.playOrPauseAnimation(),
            this.animation?.addEventListener("complete", this.handleComplete);
    };
    componentDidMount() {
        (null != this.props.versionKey && this.props.versionKey < 0) || this.loadAnimation();
    }
    componentDidUpdate(e) {
        (null != this.props.versionKey && this.props.versionKey < 0) ||
            (null != this.props.versionKey && null != e.versionKey && this.props.versionKey > e.versionKey
                ? this.loadAnimation()
                : this.playOrPauseAnimation(e));
    }
    componentWillUnmount() {
        null != this.animation && (this.animation.stop(), this.animation.destroy(), (this.animation = null)),
            this.delayTimeout.stop();
    }
    playOrPauseAnimation(e) {
        null != this.animation &&
            (this.props.shouldAnimate && (null == e || !e.shouldAnimate)
                ? this.props.resetOnPlay
                    ? this.animation.goToAndPlay(0)
                    : this.animation.play()
                : !this.props.shouldAnimate &&
                  (null == e || e.shouldAnimate) &&
                  (this.animation.pause(),
                  null != this.props.pauseAtFrame && this.animation.goToAndStop(this.props.pauseAtFrame, !0)));
    }
    handleComplete = () => {
        let { onComplete: e } = this.props;
        null != e && e();
    };
    render() {
        return (0, r.jsx)("div", { className: this.props.className, ref: this.animationRef });
    }
}
