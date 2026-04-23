n.d(t, { x: () => d });
var i = n(627968),
    r = n(64700),
    a = n(284009),
    l = n.n(a),
    s = n(735438),
    o = n.n(s);
class d extends r.Component {
    animProps;
    _animationFrame;
    ref = r.createRef();
    constructor(e) {
        super(e), (this.state = { shaking: !1 });
    }
    getDefaultAnimProps(e, t) {
        return {
            duration: e ?? 300,
            progress: 0,
            last: Date.now(),
            intensity: t ?? 5,
            lastDirection: -1,
            frameCount: 0,
        };
    }
    componentWillUnmount() {
        this._animationCleanup();
    }
    shake(e, t) {
        (this.animProps = this.getDefaultAnimProps(e, t)),
            this.state.shaking || this.setState({ shaking: !0 }, this._animate);
    }
    stop() {
        this.state.shaking && this.setState({ shaking: !1 });
    }
    _animate = () => {
        let { animProps: e } = this;
        if (!this.state.shaking || e.progress > e.duration || null == this.ref.current)
            return void this._animationComplete();
        let t = Date.now();
        if (((e.progress += t - e.last), (e.last = t), e.frameCount % 2 != 0)) {
            let t = e.lastDirection * e.intensity,
                n = o().random(-e.intensity, e.intensity, !0),
                i = Math.max(0, Math.cbrt(e.duration - e.progress / 1e3));
            (e.intensity *= Math.min(1, i)),
                (e.lastDirection *= -1),
                l()(null != this.ref.current, "Shakeable style set when not mounted"),
                (this.ref.current.style.transform = `translate3d(${t}px,${n}px,0px)`);
        }
        (e.frameCount += 1), (this._animationFrame = requestAnimationFrame(this._animate));
    };
    _animationComplete() {
        this.setState({ shaking: !1 }, this._animationCleanup);
    }
    _animationCleanup = () => {
        null != this.ref.current && (this.ref.current.style.transform = ""), cancelAnimationFrame(this._animationFrame);
    };
    render() {
        let { children: e, ...t } = this.props;
        return (0, i.jsx)("div", { ...t, ref: this.ref, children: e });
    }
}
