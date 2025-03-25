n.d(t, { Z: () => a }), n(47120);
var r = n(374470);
function i(e, t, n) {
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
let o = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5
};
class a {
    isVisible(e) {
        return null == this._observer || this._visibleComponents.has(e);
    }
    observe(e, t) {
        let n = this._observer;
        if (null == n) return;
        this.unobserve(e);
        let i = t.current;
        (0, r.k)(i, HTMLElement) && (this._nodes.set(i, e), this._components.set(e, i), n.observe(i));
    }
    unobserve(e) {
        let t = this._observer;
        if (null == t) return;
        let n = this._components.get(e);
        null != n && (this._nodes.delete(n), this._components.delete(e), this._visibleComponents.delete(e), t.unobserve(n));
    }
    constructor(e = o) {
        i(this, '_observer', void 0),
            i(this, '_options', void 0),
            i(this, '_nodes', new WeakMap()),
            i(this, '_components', new WeakMap()),
            i(this, '_visibleComponents', new WeakSet()),
            i(this, '_handleEntries', (e) => {
                e.forEach((e) => {
                    let t;
                    if (null != e.isIntersecting) t = e.isIntersecting;
                    else {
                        let { threshold: n } = this._options;
                        t = null == n ? e.intersectionRatio > 0 : Array.isArray(n) ? n.some((t) => e.intersectionRatio > t) : e.intersectionRatio > n;
                    }
                    let n = this._nodes.get(e.target);
                    if (null != n) {
                        let e = !1;
                        t ? this._visibleComponents.has(n) || (this._visibleComponents.add(n), (e = !0)) : this._visibleComponents.has(n) && (this._visibleComponents.delete(n), (e = !0)), e && n.forceUpdate();
                    }
                });
            }),
            (this._options = e),
            null != window.IntersectionObserver && (this._observer = new window.IntersectionObserver(this._handleEntries, e));
    }
}
