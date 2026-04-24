a.d(t, { b: () => o });
var r = a(627968),
    n = a(64700),
    l = a(735438),
    i = a.n(l),
    s = a(775602);
class o extends n.Component {
    static defaultProps = { isShaking: !0, intensity: 5 };
    ref = n.createRef();
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
                r = i().random(-e, e, !0);
            a.style.transform = s.A.useReducedMotion ? "" : `translate3d(${t}px,${r}px,0px)`;
        }
        (this.shouldRenderFrame = !this.shouldRenderFrame), (this.animationFrame = requestAnimationFrame(this.animate));
    };
    render() {
        let { className: e, children: t } = this.props;
        return (0, r.jsx)("div", { className: e, ref: this.ref, children: t });
    }
}
