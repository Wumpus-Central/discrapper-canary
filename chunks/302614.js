"use strict";
n.d(t, { A: () => C });
var i = n(627968),
    r = n(64700),
    a = n(503698),
    s = n.n(a),
    l = n(649852),
    o = n.n(l),
    d = n(132500),
    c = n(17928),
    u = n(52133),
    _ = n(684013),
    E = n(869146),
    A = n(184809),
    h = n(723702),
    I = n(41984),
    f = n(127242),
    p = n(545807),
    T = n(392164),
    m = n(18897);
function g(e, t) {
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
            let e = E.A.getWindow(T.f);
            null != e && this.mutationObserver.observe(e?.document.body, { subtree: !0, attributes: !0 });
        }
        let t = this.zones.get(e);
        null != t && this.resizeObserver.unobserve(t.element);
        let n = e.getBoundingClientRect();
        this.zones.set(e, { element: e, zone: g(t?.zone.name ?? (0, d.A)(), n) }),
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
    globalUpdate = o()(
        () => {
            let e = !1;
            for (let [t, n] of this.zones) {
                let i = t.getBoundingClientRect(),
                    r = g(n.zone.name, i);
                (0, u.A)(r, n.zone) || ((e = !0), (n = { element: n.element, zone: r }), this.zones.set(t, n));
            }
            e && this.updateZones();
        },
        250,
        { trailing: !0, maxWait: 1e3 },
    );
    updateZones() {
        if (!h.isPlatformEmbedded) return;
        let e = E.A.getWindow(T.f);
        null != e &&
            _.A.setClickZones(
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
    let { observe: t = !0, className: n, style: a, children: l } = e,
        o = r.useContext(N),
        d = (0, c.bG)([f.A], () => f.A.hasRenderDebugMode(I.x7.ClickZones)),
        u = (0, c.bG)([A.default], () => A.default.disableClickableRegions),
        [{ refHandler: _, setObserve: E }] = r.useState(() => {
            let e = null;
            return {
                setObserve(t) {
                    null != e && (t ? o.observe(e) : o.unobserve(e));
                },
                refHandler(t) {
                    null != e && o.unobserve(e), (e = t);
                },
            };
        });
    return (
        r.useLayoutEffect(() => {
            u ? E(!1) : E(t);
        }, [t, E, u]),
        (0, i.jsx)("div", { ref: _, style: a, className: s()(n, m.v, d && m.p), "data-click-zone": !0, children: l })
    );
}
