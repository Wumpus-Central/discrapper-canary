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
    m = n(684013),
    h = n(869146),
    g = n(532294),
    f = n(723702),
    A = n(41984),
    p = n(127242),
    E = n(545807),
    C = n(392164),
    b = n(85290);
function T(e, t) {
    return {
        name: e,
        left: Math.ceil(t.left),
        top: Math.ceil(t.top),
        right: Math.ceil(t.right),
        bottom: Math.ceil(t.bottom),
    };
}
class v {
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
            let e = h.A.getWindow(C.f);
            null != e && this.mutationObserver.observe(e?.document.body, { subtree: !0, attributes: !0 });
        }
        let t = this.zones.get(e);
        null != t && this.resizeObserver.unobserve(t.element);
        let n = e.getBoundingClientRect();
        (this.zones.set(e, { element: e, zone: T(t?.zone.name ?? (0, u.A)(), n) }),
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
                    r = T(n.zone.name, i);
                (0, d.A)(r, n.zone) || ((e = !0), (n = { element: n.element, zone: r }), this.zones.set(t, n));
            }
            e && this.updateZones();
        },
        250,
        { trailing: !0, maxWait: 1e3 },
    );
    updateZones() {
        if (!f.isPlatformEmbedded) return;
        let e = h.A.getWindow(C.f);
        null != e &&
            m.A.setClickZones(
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
let _ = r.createContext(new v((0, E.b)()));
function I(e) {
    let { observe: t = !0, className: n, style: l, children: a } = e,
        o = r.useContext(_),
        u = (0, c.bG)([p.A], () => p.A.hasRenderDebugMode(A.x7.ClickZones)),
        d = (0, c.bG)([g.default], () => g.default.disableClickableRegions),
        [{ refHandler: m, setObserve: h }] = r.useState(() => {
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
            d ? h(!1) : h(t);
        }, [t, h, d]),
        (0, i.jsx)("div", { ref: m, style: l, className: s()(n, b.v, u && b.p), "data-click-zone": !0, children: a })
    );
}
