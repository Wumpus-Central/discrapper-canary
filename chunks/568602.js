"use strict";
r.d(t, { b: () => o });
var n = r(627968),
    i = r(64700),
    a = r(735438),
    s = r.n(a),
    l = r(775602);
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
        let r = this.ref.current;
        if (this.shouldRenderFrame && null != r) {
            let t = s().random(-e, e, !0),
                n = s().random(-e, e, !0);
            r.style.transform = l.A.useReducedMotion ? "" : `translate3d(${t}px,${n}px,0px)`;
        }
        (this.shouldRenderFrame = !this.shouldRenderFrame), (this.animationFrame = requestAnimationFrame(this.animate));
    };
    render() {
        let { className: e, children: t } = this.props;
        return (0, n.jsx)("div", { className: e, ref: this.ref, children: t });
    }
}
