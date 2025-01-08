r.d(n, {
    Z: function () {
        return u;
    }
});
var i = r(47120);
var a = r(995295),
    s = r(513431);
function o(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let l = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5
};
class u {
    isVisible(e) {
        return null == this._observer || this._visibleComponents.has(e);
    }
    observe(e) {
        let n = this._observer;
        if (null == n) return;
        this.unobserve(e);
        let r = (0, a.findDOMNode)(e);
        (0, s.k)(r, HTMLElement) && (this._nodes.set(r, e), this._components.set(e, r), n.observe(r));
    }
    unobserve(e) {
        let n = this._observer;
        if (null == n) return;
        let r = this._components.get(e);
        null != r && (this._nodes.delete(r), this._components.delete(e), this._visibleComponents.delete(e), n.unobserve(r));
    }
    constructor(e = l) {
        o(this, '_observer', void 0),
            o(this, '_options', void 0),
            o(this, '_nodes', new WeakMap()),
            o(this, '_components', new WeakMap()),
            o(this, '_visibleComponents', new WeakSet()),
            o(this, '_handleEntries', (e) => {
                e.forEach((e) => {
                    let n;
                    if (null != e.isIntersecting) n = e.isIntersecting;
                    else {
                        let { threshold: r } = this._options;
                        n = null == r ? e.intersectionRatio > 0 : Array.isArray(r) ? r.some((n) => e.intersectionRatio > n) : e.intersectionRatio > r;
                    }
                    let r = this._nodes.get(e.target);
                    if (null != r) {
                        let e = !1;
                        n ? !this._visibleComponents.has(r) && (this._visibleComponents.add(r), (e = !0)) : this._visibleComponents.has(r) && (this._visibleComponents.delete(r), (e = !0)), e && r.forceUpdate();
                    }
                });
            }),
            (this._options = e),
            null != window.IntersectionObserver && (this._observer = new window.IntersectionObserver(this._handleEntries, e));
    }
}
