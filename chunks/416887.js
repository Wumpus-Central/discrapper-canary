n.d(t, {
    L: () => d,
}),
    n(896048),
    n(65821);
var r,
    i = n(64700),
    a = n(835245),
    s = n(313271);

function o(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let l = (0, a.A)(),
    c = new Map(),
    u = new Map();
class d extends (r = i.Component) {
    componentDidMount() {
        if (this.props.active) {
            let e = this.getVisibilityObserver();
            e.observe(this, this.props.innerRef),
                (this.isVisible = e.isVisible(this)),
                this.props.onChange(this.isVisible);
        }
    }
    componentDidUpdate(e) {
        let t = this.getVisibilityObserver(),
            n = t.isVisible(this);
        this.props.active && n !== this.isVisible && this.props.onChange(n),
            !e.active && this.props.active
                ? t.observe(this, this.props.innerRef)
                : e.active && !this.props.active && t.unobserve(this),
            (this.isVisible = n);
    }
    componentWillUnmount() {
        this.getVisibilityObserver().unobserve(this);
    }
    getVisibilityObserverId() {
        let { rootMargin: e, threshold: t } = this.props;
        return "".concat(this.elementId, " ").concat(e, " ").concat(t);
    }
    getVisibilityObserver() {
        let e = this.getVisibilityObserverId(),
            t = u.get(e);
        if (!t) throw Error("Visibility sensor with id ".concat(e, " not found."));
        return t;
    }
    render() {
        return i.Children.only(this.props.children);
    }
    constructor(e) {
        super(e), o(this, "elementId", void 0), o(this, "isVisible", !1);
        const { root: t, rootMargin: n, threshold: r } = e;
        t ? (c.has(t) ? (this.elementId = c.get(t) || "") : c.set(t, (0, a.A)())) : (this.elementId = l);
        const i = this.getVisibilityObserverId();
        u.has(i) ||
            u.set(
                i,
                new s.j({
                    root: t,
                    rootMargin: n,
                    threshold: r,
                }),
            );
    }
}
o(d, "defaultProps", {
    active: !0,
    children: i.createElement("span"),
    root: null,
    rootMargin: "0px 0px 0px 0px",
    threshold: [0, 5e-324],
});
