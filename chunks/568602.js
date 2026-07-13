"use strict";
n.d(t, { b: () => o });
var i = n(627968),
    r = n(64700),
    a = n(735438),
    s = n.n(a),
    l = n(775602);
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
        let n = this.ref.current;
        if (this.shouldRenderFrame && null != n) {
            let t = s().random(-e, e, !0),
                i = s().random(-e, e, !0);
            n.style.transform = l.Ay.useReducedMotion ? "" : `translate3d(${t}px,${i}px,0px)`;
        }
        (this.shouldRenderFrame = !this.shouldRenderFrame), (this.animationFrame = requestAnimationFrame(this.animate));
    };
    render() {
        let { className: e, children: t } = this.props;
        return (0, i.jsx)("div", { className: e, ref: this.ref, children: t });
    }
}
