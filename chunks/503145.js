n.d(t, { U: () => c }), n(47120);
var i,
    r = n(200651),
    a = n(192379),
    s = n(392711),
    o = n.n(s),
    l = n(607070);
function u(e, t, n) {
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
class c extends (i = a.Component) {
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
        let { className: e, children: t } = this.props;
        return (0, r.jsx)('div', {
            className: e,
            ref: this.ref,
            children: t
        });
    }
    constructor(...e) {
        super(...e),
            u(this, 'ref', a.createRef()),
            u(this, 'animationFrame', void 0),
            u(this, 'shouldRenderFrame', !0),
            u(this, 'animate', () => {
                let { intensity: e, isShaking: t } = this.props;
                if (!t) return;
                let n = this.ref.current;
                if (this.shouldRenderFrame && null != n) {
                    let t = o().random(-e, e, !0),
                        i = o().random(-e, e, !0);
                    n.style.transform = l.Z.useReducedMotion ? '' : 'translate3d('.concat(t, 'px,').concat(i, 'px,0px)');
                }
                (this.shouldRenderFrame = !this.shouldRenderFrame), (this.animationFrame = requestAnimationFrame(this.animate));
            });
    }
}
u(c, 'defaultProps', {
    isShaking: !0,
    intensity: 5
});
