"use strict";
n.d(t, { b: () => o });
var r = n(627968),
    i = n(64700),
    a = n(735438),
    l = n.n(a),
    s = n(775602);
class o extends i.Component {
    static defaultProps = { isShaking: !0, intensity: 5 };
    ref = i.createRef();
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
        let n = this.ref.current;
        if (this.shouldRenderFrame && null != n) {
            let t = l().random(-e, e, !0),
                r = l().random(-e, e, !0);
            n.style.transform = s.A.useReducedMotion ? "" : `translate3d(${t}px,${r}px,0px)`;
        }
        (this.shouldRenderFrame = !this.shouldRenderFrame), (this.animationFrame = requestAnimationFrame(this.animate));
    };
    render() {
        let { className: e, children: t } = this.props;
        return (0, r.jsx)("div", { className: e, ref: this.ref, children: t });
    }
}
