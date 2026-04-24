a.d(t, { b: () => o });
var n = a(627968),
    r = a(64700),
    l = a(735438),
    i = a.n(l),
    s = a(775602);
class o extends r.Component {
    static defaultProps = { isShaking: !0, intensity: 5 };
    ref = r.createRef();
    animationFrame;
    shouldRenderFrame = !0;
    componentDidMount() {
        this.props.isShaking && this.startShaking();
    }
    componentDidUpdate(e) {
        this.props.isShaking !== e.isShaking && this.setShaking(this.props.isShaking);
    }
    setShaking(e) {
        e ? this.startShaking() : this.stopShaking();
    }
    startShaking() {
        (this.shouldRenderFrame = !0), (this.animationFrame = requestAnimationFrame(this.animate));
    }
    stopShaking() {
        null != this.animationFrame && cancelAnimationFrame(this.animationFrame);
        let e = this.ref.current;
        null != e && (e.style.transform = "");
    }
    animate = () => {
        let { intensity: e, isShaking: t } = this.props;
        if (!t) return;
        let a = this.ref.current;
        if (this.shouldRenderFrame && null != a) {
            let t = i().random(-e, e, !0),
                n = i().random(-e, e, !0);
            a.style.transform = s.A.useReducedMotion ? "" : `translate3d(${t}px,${n}px,0px)`;
        }
        (this.shouldRenderFrame = !this.shouldRenderFrame), (this.animationFrame = requestAnimationFrame(this.animate));
    };
    render() {
        let { className: e, children: t } = this.props;
        return (0, n.jsx)("div", { className: e, ref: this.ref, children: t });
    }
}
