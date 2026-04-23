"use strict";
n.d(t, { A: () => C });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(111956),
    l = n.n(o),
    d = n(132500),
    _ = n(17928),
    u = n(52133),
    c = n(684013),
    E = n(869146),
    h = n(256415),
    m = n(723702),
    f = n(41984),
    g = n(127242),
    p = n(545807),
    A = n(392164),
    I = n(18897);
function T(e, t) {
    return {
        name: e,
        left: Math.ceil(t.left),
        top: Math.ceil(t.top),
        right: Math.ceil(t.right),
        bottom: Math.ceil(t.bottom),
    };
}
class S {
    resizeObserver;
    mutationObserver;
    zones = new Map();
    elements = new Set();
    window;
    constructor(e) {
        this.window = e;
    }
    observe(e) {
        if (
            (null == this.resizeObserver && (this.resizeObserver = new this.window.ResizeObserver(this.handleResize)),
            null == this.mutationObserver)
        ) {
            this.mutationObserver = new MutationObserver(this.handleMutations);
            let e = E.A.getWindow(A.f);
            null != e && this.mutationObserver.observe(e?.document.body, { subtree: !0, attributes: !0 });
        }
        let t = this.zones.get(e);
        null != t && this.resizeObserver.unobserve(t.element);
        let n = e.getBoundingClientRect();
        this.zones.set(e, { element: e, zone: T(t?.zone.name ?? (0, d.A)(), n) }),
            this.elements.add(e),
            this.resizeObserver.observe(e),
            this.updateZones();
    }
    unobserve(e) {
        null != this.zones.get(e) &&
            (this.resizeObserver?.unobserve(e), this.zones.delete(e), this.elements.delete(e), this.updateZones());
    }
    handleResize = () => {
        this.globalUpdate();
    };
    handleMutations = () => {
        this.globalUpdate();
    };
    globalUpdate = l()(
        () => {
            let e = !1;
            for (let [t, n] of this.zones) {
                let i = t.getBoundingClientRect(),
                    r = T(n.zone.name, i);
                (0, u.A)(r, n.zone) || ((e = !0), (n = { element: n.element, zone: r }), this.zones.set(t, n));
            }
            e && this.updateZones();
        },
        250,
        { trailing: !0, maxWait: 1e3 },
    );
    updateZones() {
        if (!m.isPlatformEmbedded) return;
        let e = E.A.getWindow(A.f);
        null != e &&
            c.A.setClickZones(
                Array.from(this.zones.values()).map((t) => {
                    let { zone: n } = t;
                    return {
                        name: n.name,
                        left: n.left / e.innerWidth,
                        top: n.top / e.innerHeight,
                        right: n.right / e.innerWidth,
                        bottom: n.bottom / e.innerHeight,
                    };
                }),
            );
    }
    cleanUp() {
        this.globalUpdate.cancel(),
            this.zones.clear(),
            this.elements.clear(),
            this.resizeObserver?.disconnect(),
            this.mutationObserver?.disconnect(),
            this.updateZones();
    }
}
let N = r.createContext(new S((0, p.b)()));
function C(e) {
    let { observe: t = !0, className: n, style: s, children: o } = e,
        l = r.useContext(N),
        d = (0, _.bG)([g.A], () => g.A.hasRenderDebugMode(f.x7.ClickZones)),
        u = (0, _.bG)([h.default], () => h.default.disableClickableRegions),
        [{ refHandler: c, setObserve: E }] = r.useState(() => {
            let e = null;
            return {
                setObserve(t) {
                    null != e && (t ? l.observe(e) : l.unobserve(e));
                },
                refHandler(t) {
                    null != e && l.unobserve(e), (e = t);
                },
            };
        });
    return (
        r.useLayoutEffect(() => {
            u ? E(!1) : E(t);
        }, [t, E, u]),
        (0, i.jsx)("div", { ref: c, style: s, className: a()(n, I.v, d && I.p), "data-click-zone": !0, children: o })
    );
}
