i.d(t, { L: () => u, j: () => r }), i(899898);
var s = i(621466);
let n = { root: null, rootMargin: "0px", threshold: 0.5 };
class r {
    _observer;
    _options;
    _nodes = new WeakMap();
    _components = new WeakMap();
    _visibleComponents = new WeakSet();
    constructor(e = n) {
        (this._options = e),
            null != window.IntersectionObserver &&
                (this._observer = new window.IntersectionObserver(this._handleEntries, e));
    }
    _handleEntries = (e) => {
        e.forEach((e) => {
            let t;
            if (null != e.isIntersecting) t = e.isIntersecting;
            else {
                let { threshold: i } = this._options;
                t =
                    null == i
                        ? e.intersectionRatio > 0
                        : Array.isArray(i)
                          ? i.some((t) => e.intersectionRatio > t)
                          : e.intersectionRatio > i;
            }
            let i = this._nodes.get(e.target);
            if (null != i) {
                let e = !1;
                t
                    ? this._visibleComponents.has(i) || (this._visibleComponents.add(i), (e = !0))
                    : this._visibleComponents.has(i) && (this._visibleComponents.delete(i), (e = !0)),
                    e && i.forceUpdate();
            }
        });
    };
    isVisible(e) {
        return null == this._observer || this._visibleComponents.has(e);
    }
    observe(e, t) {
        let i = this._observer;
        if (null == i) return;
        this.unobserve(e);
        let n = t.current;
        (0, s.vq)(n, HTMLElement) && (this._nodes.set(n, e), this._components.set(e, n), i.observe(n));
    }
    unobserve(e) {
        let t = this._observer;
        if (null == t) return;
        let i = this._components.get(e);
        null != i &&
            (this._nodes.delete(i), this._components.delete(e), this._visibleComponents.delete(e), t.unobserve(i));
    }
}
var a = i(582128),
    l = i(132500);
let o = (0, l.A)(),
    c = new Map(),
    d = new Map();
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
        const { root: t, rootMargin: i, threshold: s } = e;
        t ? (c.has(t) ? (this.elementId = c.get(t) || "") : c.set(t, (0, l.A)())) : (this.elementId = o);
        const n = this.getVisibilityObserverId();
        d.has(n) || d.set(n, new r({ root: t, rootMargin: i, threshold: s }));
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
            i = t.isVisible(this);
        this.props.active && i !== this.isVisible && this.props.onChange(i),
            !e.active && this.props.active
                ? t.observe(this, this.props.innerRef)
                : e.active && !this.props.active && t.unobserve(this),
            (this.isVisible = i);
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
            t = d.get(e);
        if (!t) throw Error(`Visibility sensor with id ${e} not found.`);
        return t;
    }
    render() {
        return a.Children.only(this.props.children);
    }
}
