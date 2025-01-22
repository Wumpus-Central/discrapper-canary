r.d(n, {
    U: function () {
        return f;
    }
});
var i,
    a = r(47120);
var o = r(200651),
    s = r(192379),
    l = r(392711),
    u = r.n(l),
    c = r(607070);
function d(e, n, r) {
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
class f extends (i = s.Component) {
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
        null != e && (e.style.transform = '');
    }
    render() {
        let { className: e, children: n } = this.props;
        return (0, o.jsx)('div', {
            className: e,
            ref: this.ref,
            children: n
        });
    }
    constructor(...e) {
        super(...e),
            d(this, 'ref', s.createRef()),
            d(this, 'animationFrame', void 0),
            d(this, 'shouldRenderFrame', !0),
            d(this, 'animate', () => {
                let { intensity: e, isShaking: n } = this.props;
                if (!n) return;
                let r = this.ref.current;
                if (this.shouldRenderFrame && null != r) {
                    let n = u().random(-e, e, !0),
                        i = u().random(-e, e, !0);
                    r.style.transform = c.Z.useReducedMotion ? '' : 'translate3d('.concat(n, 'px,').concat(i, 'px,0px)');
                }
                (this.shouldRenderFrame = !this.shouldRenderFrame), (this.animationFrame = requestAnimationFrame(this.animate));
            });
    }
}
d(f, 'defaultProps', {
    isShaking: !0,
    intensity: 5
});
