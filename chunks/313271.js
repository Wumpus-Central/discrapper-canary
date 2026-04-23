"use strict";
n.d(t, { j: () => s });
var r = n(621466);
let i = { root: null, rootMargin: "0px", threshold: 0.5 };
class s {
    _observer;
    _options;
    _nodes = new WeakMap();
    _components = new WeakMap();
    _visibleComponents = new WeakSet();
    constructor(e = i) {
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
        let i = t.current;
        (0, r.vq)(i, HTMLElement) && (this._nodes.set(i, e), this._components.set(e, i), n.observe(i));
    }
    unobserve(e) {
        let t = this._observer;
        if (null == t) return;
        let n = this._components.get(e);
        null != n &&
            (this._nodes.delete(n), this._components.delete(e), this._visibleComponents.delete(e), t.unobserve(n));
    }
}
