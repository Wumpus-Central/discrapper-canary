t.d(s, { j: () => o });
var i = t(621466);
let n = { root: null, rootMargin: "0px", threshold: 0.5 };
class o {
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
