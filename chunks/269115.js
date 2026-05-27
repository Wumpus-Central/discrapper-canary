r.d(t, { L: () => u, j: () => n }), r(899898);
var i = r(621466);
let s = { root: null, rootMargin: "0px", threshold: 0.5 };
class n {
    _observer;
    _options;
    _nodes = new WeakMap();
    _components = new WeakMap();
    _visibleComponents = new WeakSet();
    constructor(e = s) {
        (this._options = e),
            null != window.IntersectionObserver &&
                (this._observer = new window.IntersectionObserver(this._handleEntries, e));
    }
    _handleEntries = (e) => {
        e.forEach((e) => {
            let t;
            if (null != e.isIntersecting) t = e.isIntersecting;
            else {
                let { threshold: r } = this._options;
                t =
                    null == r
                        ? e.intersectionRatio > 0
                        : Array.isArray(r)
                          ? r.some((t) => e.intersectionRatio > t)
                          : e.intersectionRatio > r;
            }
            let r = this._nodes.get(e.target);
            if (null != r) {
                let e = !1;
                t
                    ? this._visibleComponents.has(r) || (this._visibleComponents.add(r), (e = !0))
                    : this._visibleComponents.has(r) && (this._visibleComponents.delete(r), (e = !0)),
                    e && r.forceUpdate();
            }
        });
    };
    isVisible(e) {
        return null == this._observer || this._visibleComponents.has(e);
    }
    observe(e, t) {
        let r = this._observer;
        if (null == r) return;
        this.unobserve(e);
        let s = t.current;
        (0, i.vq)(s, HTMLElement) && (this._nodes.set(s, e), this._components.set(e, s), r.observe(s));
    }
    unobserve(e) {
        let t = this._observer;
        if (null == t) return;
        let r = this._components.get(e);
        null != r &&
            (this._nodes.delete(r), this._components.delete(e), this._visibleComponents.delete(e), t.unobserve(r));
    }
}
var a = r(64700),
    l = r(835245);
let o = (0, l.A)(),
    d = new Map(),
    c = new Map();
class u extends a.Component {
    elementId;
    isVisible = !1;
    static defaultProps = {
        active: !0,
        children: a.createElement("span"),
        root: null,
        rootMargin: "0px 0px 0px 0px",
        threshold: [0, 5e-324],
    };
    constructor(e) {
        super(e);
        const { root: t, rootMargin: r, threshold: i } = e;
        t ? (d.has(t) ? (this.elementId = d.get(t) || "") : d.set(t, (0, l.A)())) : (this.elementId = o);
        const s = this.getVisibilityObserverId();
        c.has(s) || c.set(s, new n({ root: t, rootMargin: r, threshold: i }));
    }
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
            r = t.isVisible(this);
        this.props.active && r !== this.isVisible && this.props.onChange(r),
            !e.active && this.props.active
                ? t.observe(this, this.props.innerRef)
                : e.active && !this.props.active && t.unobserve(this),
            (this.isVisible = r);
    }
    componentWillUnmount() {
        this.getVisibilityObserver().unobserve(this);
    }
    getVisibilityObserverId() {
        let { rootMargin: e, threshold: t } = this.props;
        return `${this.elementId} ${e} ${t}`;
    }
    getVisibilityObserver() {
        let e = this.getVisibilityObserverId(),
            t = c.get(e);
        if (!t) throw Error(`Visibility sensor with id ${e} not found.`);
        return t;
    }
    render() {
        return a.Children.only(this.props.children);
    }
}
