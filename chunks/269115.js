"use strict";
n.d(t, { L: () => d, j: () => s }), n(899898);
var i = n(621466);
let r = { root: null, rootMargin: "0px", threshold: 0.5 };
class s {
    _observer;
    _options;
    _nodes = new WeakMap();
    _components = new WeakMap();
    _visibleComponents = new WeakSet();
    constructor(e = r) {
        (this._options = e),
            null != window.IntersectionObserver &&
                (this._observer = new window.IntersectionObserver(this._handleEntries, e));
    }
    _handleEntries = (e) => {
        e.forEach((e) => {
            let t;
            if (null != e.isIntersecting) t = e.isIntersecting;
            else {
                let { threshold: n } = this._options;
                t =
                    null == n
                        ? e.intersectionRatio > 0
                        : Array.isArray(n)
                          ? n.some((t) => e.intersectionRatio > t)
                          : e.intersectionRatio > n;
            }
            let n = this._nodes.get(e.target);
            if (null != n) {
                let e = !1;
                t
                    ? this._visibleComponents.has(n) || (this._visibleComponents.add(n), (e = !0))
                    : this._visibleComponents.has(n) && (this._visibleComponents.delete(n), (e = !0)),
                    e && n.forceUpdate();
            }
        });
    };
    isVisible(e) {
        return null == this._observer || this._visibleComponents.has(e);
    }
    observe(e, t) {
        let n = this._observer;
        if (null == n) return;
        this.unobserve(e);
        let r = t.current;
        (0, i.vq)(r, HTMLElement) && (this._nodes.set(r, e), this._components.set(e, r), n.observe(r));
    }
    unobserve(e) {
        let t = this._observer;
        if (null == t) return;
        let n = this._components.get(e);
        null != n &&
            (this._nodes.delete(n), this._components.delete(e), this._visibleComponents.delete(e), t.unobserve(n));
    }
}
var a = n(64700),
    o = n(835245);
let l = (0, o.A)(),
    u = new Map(),
    c = new Map();
class d extends a.Component {
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
        const { root: t, rootMargin: n, threshold: i } = e;
        t ? (u.has(t) ? (this.elementId = u.get(t) || "") : u.set(t, (0, o.A)())) : (this.elementId = l);
        const r = this.getVisibilityObserverId();
        c.has(r) || c.set(r, new s({ root: t, rootMargin: n, threshold: i }));
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
