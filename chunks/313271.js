i.d(t, { j: () => r });
var n = i(621466);
let l = { root: null, rootMargin: "0px", threshold: 0.5 };
class r {
    _observer;
    _options;
    _nodes = new WeakMap();
    _components = new WeakMap();
    _visibleComponents = new WeakSet();
    constructor(e = l) {
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
        let l = t.current;
        (0, n.vq)(l, HTMLElement) && (this._nodes.set(l, e), this._components.set(e, l), i.observe(l));
    }
    unobserve(e) {
        let t = this._observer;
        if (null == t) return;
        let i = this._components.get(e);
        null != i &&
            (this._nodes.delete(i), this._components.delete(e), this._visibleComponents.delete(e), t.unobserve(i));
    }
}
