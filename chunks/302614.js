n.d(t, { A: () => I });
var i = n(477900),
    r = n(582128),
    l = n(503698),
    s = n.n(l),
    a = n(649852),
    o = n.n(a),
    u = n(132500),
    c = n(17928),
    d = n(52133),
    h = n(684013),
    m = n(869146),
    A = n(532294),
    g = n(723702),
    E = n(41984),
    f = n(127242),
    p = n(545807),
    C = n(392164),
    _ = n(85290);
function b(e, t) {
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
            let e = m.A.getWindow(C.f);
            null != e && this.mutationObserver.observe(e?.document.body, { subtree: !0, attributes: !0 });
        }
        let t = this.zones.get(e);
        null != t && this.resizeObserver.unobserve(t.element);
        let n = e.getBoundingClientRect();
        (this.zones.set(e, { element: e, zone: b(t?.zone.name ?? (0, u.A)(), n) }),
            this.elements.add(e),
            this.resizeObserver.observe(e),
            this.updateZones());
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
                    r = b(n.zone.name, i);
                (0, d.A)(r, n.zone) || ((e = !0), (n = { element: n.element, zone: r }), this.zones.set(t, n));
            }
            e && this.updateZones();
        },
        250,
        { trailing: !0, maxWait: 1e3 },
    );
    updateZones() {
        if (!g.isPlatformEmbedded) return;
        let e = m.A.getWindow(C.f);
        null != e &&
            h.A.setClickZones(
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
        (this.globalUpdate.cancel(),
            this.zones.clear(),
            this.elements.clear(),
            this.resizeObserver?.disconnect(),
            this.mutationObserver?.disconnect(),
            this.updateZones());
    }
}
let T = r.createContext(new S((0, p.b)()));
function I(e) {
    let { observe: t = !0, className: n, style: l, children: a } = e,
        o = r.useContext(T),
        u = (0, c.bG)([f.A], () => f.A.hasRenderDebugMode(E.x7.ClickZones)),
        d = (0, c.bG)([A.default], () => A.default.disableClickableRegions),
        [{ refHandler: h, setObserve: m }] = r.useState(() => {
            let e = null;
            return {
                setObserve(t) {
                    null != e && (t ? o.observe(e) : o.unobserve(e));
                },
                refHandler(t) {
                    (null != e && o.unobserve(e), (e = t));
                },
            };
        });
    return (
        r.useLayoutEffect(() => {
            d ? m(!1) : m(t);
        }, [t, m, d]),
        (0, i.jsx)("div", { ref: h, style: l, className: s()(n, _.v, u && _.p), "data-click-zone": !0, children: a })
    );
}
