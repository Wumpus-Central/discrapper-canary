"use strict";
n.d(t, { u: () => d });
var r = n(64700),
    i = n(306327),
    s = n(128080),
    a = n.n(s);
let o = new Map();
function l(e) {
    if (null == e || "" === e) return null;
    if (o.has(e)) return o.get(e);
    let t = new i.A(e).to("srgb"),
        n = { r: 255 * t.get("r"), g: 255 * t.get("g"), b: 255 * t.get("b"), a: t.alpha };
    return o.set(e, n), n;
}
class u {
    observers = new Map();
    lastColors = new Map();
    activeElements = new Set();
    idleCallbackId = null;
    observe(e, t) {
        if (!this.observers.has(e)) {
            this.observers.set(e, new Set());
            let n = l(window.getComputedStyle(e).getPropertyValue("color"));
            this.lastColors.set(e, n), t(n);
        }
        return this.observers.get(e).add(t), () => this.unobserve(e, t);
    }
    unobserve(e, t) {
        let n = this.observers.get(e);
        null != n &&
            (n.delete(t),
            0 === n.size && (this.observers.delete(e), this.lastColors.delete(e), this.activeElements.delete(e))),
            0 === this.observers.size && this.stop();
    }
    activateElement(e) {
        this.observers.has(e) && (this.activeElements.add(e), null == this.idleCallbackId && this.start());
    }
    deactivateElement(e) {
        this.activeElements.delete(e), 0 === this.activeElements.size && this.stop();
    }
    forceCheckElement(e) {
        if (!this.observers.has(e)) return;
        let t = l(window.getComputedStyle(e).color);
        if (t !== this.lastColors.get(e)) {
            this.lastColors.set(e, t);
            let n = this.observers.get(e);
            n?.forEach((e) => e(t));
        }
    }
    start() {
        if (null != this.idleCallbackId) return;
        let e = (t) => {
            if (0 === this.activeElements.size) return void this.stop();
            if (0 >= t.timeRemaining()) {
                this.idleCallbackId = requestIdleCallback(e);
                return;
            }
            this.activeElements.forEach((e) => {
                let t = this.observers.get(e);
                if (null == t) return;
                let n = l(window.getComputedStyle(e).color);
                n !== this.lastColors.get(e) && (this.lastColors.set(e, n), t.forEach((e) => e(n)));
            }),
                (this.idleCallbackId = requestIdleCallback(e));
        };
        this.idleCallbackId = requestIdleCallback(e);
    }
    stop() {
        null != this.idleCallbackId && (cancelIdleCallback(this.idleCallbackId), (this.idleCallbackId = null));
    }
}
let c = new u();
function d(e) {
    let {
            eventTargetRef: t,
            elementRef: n,
            needsCurrentColorTracking: i,
            isFocused: s,
            theme: o,
            gradientThemeId: l,
            dataBinding: u,
        } = e,
        [d, _] = r.useState(null),
        f = r.useRef(null),
        p = r.useCallback((e) => {
            clearTimeout(f.current),
                (f.current = setTimeout(() => {
                    c.deactivateElement(e);
                }, 1e3));
        }, []),
        h = r.useCallback((e) => {
            clearTimeout(f.current), c.activateElement(e);
        }, []);
    r.useEffect(() => {
        if (!i || !s || null == n.current) return;
        let e = t.current,
            r = n.current;
        if (null == e) return;
        let a = () => {
                h(r);
            },
            o = () => {
                p(r);
            };
        return (
            e.addEventListener("mouseenter", a, !0),
            e.addEventListener("mouseleave", o, !0),
            e.addEventListener("focusin", a, !0),
            e.addEventListener("focusout", o, !0),
            () => {
                e.removeEventListener("mouseenter", a, !0),
                    e.removeEventListener("mouseleave", o, !0),
                    e.removeEventListener("focusin", a, !0),
                    e.removeEventListener("focusout", o, !0),
                    clearTimeout(f.current);
            }
        );
    }, [i, n, s, h, p, t]),
        r.useEffect(() => {
            if (!i || null == n.current) return;
            let e = n.current;
            s ? c.forceCheckElement(e) : p(e);
        }, [s, i, n, p]),
        r.useEffect(() => {
            if (i && null != n.current) return c.observe(n.current, _);
        }, [n, i]);
    let m = r.useRef(u),
        E = r.useRef(o),
        g = r.useRef(l);
    return (
        r.useEffect(() => {
            if (!i || null == n.current) return;
            let e = !a()(u, m.current),
                t = o !== E.current,
                r = l !== g.current;
            if (!e && !t && !r) return;
            (m.current = u), (E.current = o), (g.current = l);
            let s = n.current;
            h(s), p(s);
        }, [o, l, u, i, n, h, p]),
        d
    );
}
