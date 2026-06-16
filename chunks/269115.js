t.d(s, { L: () => d, j: () => r }), t(899898);
var i = t(621466);
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
            let s;
            if (null != e.isIntersecting) s = e.isIntersecting;
            else {
                let { threshold: t } = this._options;
                s =
                    null == t
                        ? e.intersectionRatio > 0
                        : Array.isArray(t)
                          ? t.some((s) => e.intersectionRatio > s)
                          : e.intersectionRatio > t;
            }
            let t = this._nodes.get(e.target);
            if (null != t) {
                let e = !1;
                s
                    ? this._visibleComponents.has(t) || (this._visibleComponents.add(t), (e = !0))
                    : this._visibleComponents.has(t) && (this._visibleComponents.delete(t), (e = !0)),
                    e && t.forceUpdate();
            }
        });
    };
    isVisible(e) {
        return null == this._observer || this._visibleComponents.has(e);
    }
    observe(e, s) {
        let t = this._observer;
        if (null == t) return;
        this.unobserve(e);
        let n = s.current;
        (0, i.vq)(n, HTMLElement) && (this._nodes.set(n, e), this._components.set(e, n), t.observe(n));
    }
    unobserve(e) {
        let s = this._observer;
        if (null == s) return;
        let t = this._components.get(e);
        null != t &&
            (this._nodes.delete(t), this._components.delete(e), this._visibleComponents.delete(e), s.unobserve(t));
    }
}
var o = t(64700),
    l = t(835245);
let h = (0, l.A)(),
    a = new Map(),
    p = new Map();
class d extends o.Component {
    elementId;
    isVisible = !1;
    static defaultProps = {
        active: !0,
        children: o.createElement("span"),
        root: null,
        rootMargin: "0px 0px 0px 0px",
        threshold: [0, 5e-324],
    };
    constructor(e) {
        super(e);
        const { root: s, rootMargin: t, threshold: i } = e;
        s ? (a.has(s) ? (this.elementId = a.get(s) || "") : a.set(s, (0, l.A)())) : (this.elementId = h);
        const n = this.getVisibilityObserverId();
        p.has(n) || p.set(n, new r({ root: s, rootMargin: t, threshold: i }));
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
        let s = this.getVisibilityObserver(),
            t = s.isVisible(this);
        this.props.active && t !== this.isVisible && this.props.onChange(t),
            !e.active && this.props.active
                ? s.observe(this, this.props.innerRef)
                : e.active && !this.props.active && s.unobserve(this),
            (this.isVisible = t);
    }
    componentWillUnmount() {
        this.getVisibilityObserver().unobserve(this);
    }
    getVisibilityObserverId() {
        let { rootMargin: e, threshold: s } = this.props;
        return `${this.elementId} ${e} ${s}`;
    }
    getVisibilityObserver() {
        let e = this.getVisibilityObserverId(),
            s = p.get(e);
        if (!s) throw Error(`Visibility sensor with id ${e} not found.`);
        return s;
    }
    render() {
        return o.Children.only(this.props.children);
    }
}
