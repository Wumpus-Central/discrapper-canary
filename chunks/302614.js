n.d(t, { A: () => I }), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(111956),
    l = n.n(o),
    c = n(835245),
    u = n(311907),
    d = n(52133),
    f = n(684013),
    p = n(869146),
    _ = n(256415),
    h = n(723702),
    m = n(41984),
    g = n(127242),
    E = n(545807),
    b = n(392164),
    y = n(722240);
function O(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function A(e, t) {
    return {
        name: e,
        left: Math.ceil(t.left),
        top: Math.ceil(t.top),
        right: Math.ceil(t.right),
        bottom: Math.ceil(t.bottom),
    };
}
class v {
    observe(e) {
        var t;
        if (
            (null == this.resizeObserver && (this.resizeObserver = new this.window.ResizeObserver(this.handleResize)),
            null == this.mutationObserver)
        ) {
            this.mutationObserver = new MutationObserver(this.handleMutations);
            let e = p.A.getWindow(b.f);
            null != e &&
                this.mutationObserver.observe(null == e ? void 0 : e.document.body, {
                    subtree: !0,
                    attributes: !0,
                });
        }
        let n = this.zones.get(e);
        null != n && this.resizeObserver.unobserve(n.element);
        let r = e.getBoundingClientRect();
        this.zones.set(e, {
            element: e,
            zone: A(null != (t = null == n ? void 0 : n.zone.name) ? t : (0, c.A)(), r),
        }),
            this.elements.add(e),
            this.resizeObserver.observe(e),
            this.updateZones();
    }
    unobserve(e) {
        var t;
        null != this.zones.get(e) &&
            (null == (t = this.resizeObserver) || t.unobserve(e),
            this.zones.delete(e),
            this.elements.delete(e),
            this.updateZones());
    }
    updateZones() {
        if (!h.isPlatformEmbedded) return;
        let e = p.A.getWindow(b.f);
        null != e &&
            f.A.setClickZones(
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
        var e, t;
        this.globalUpdate.cancel(),
            this.zones.clear(),
            this.elements.clear(),
            null == (e = this.resizeObserver) || e.disconnect(),
            null == (t = this.mutationObserver) || t.disconnect(),
            this.updateZones();
    }
    constructor(e) {
        O(this, "resizeObserver", void 0),
            O(this, "mutationObserver", void 0),
            O(this, "zones", new Map()),
            O(this, "elements", new Set()),
            O(this, "window", void 0),
            O(this, "handleResize", () => {
                this.globalUpdate();
            }),
            O(this, "handleMutations", () => {
                this.globalUpdate();
            }),
            O(
                this,
                "globalUpdate",
                l()(
                    () => {
                        let e = !1;
                        for (let [t, n] of this.zones) {
                            let r = t.getBoundingClientRect(),
                                i = A(n.zone.name, r);
                            (0, d.A)(i, n.zone) ||
                                ((e = !0),
                                (n = {
                                    element: n.element,
                                    zone: i,
                                }),
                                this.zones.set(t, n));
                        }
                        e && this.updateZones();
                    },
                    250,
                    {
                        trailing: !0,
                        maxWait: 1000,
                    },
                ),
            ),
            (this.window = e);
    }
}
let S = i.createContext(new v((0, E.b)()));
function I(e) {
    let { observe: t = !0, className: n, style: a, children: o } = e,
        l = i.useContext(S),
        c = (0, u.bG)([g.A], () => g.A.hasRenderDebugMode(m.x7.ClickZones)),
        d = (0, u.bG)([_.default], () => _.default.disableClickableRegions),
        [{ refHandler: f, setObserve: p }] = i.useState(() => {
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
        i.useLayoutEffect(() => {
            d ? p(!1) : p(t);
        }, [t, p, d]),
        (0, r.jsx)("div", {
            ref: f,
            style: a,
            className: s()(n, y.v, c && y.p),
            "data-click-zone": !0,
            children: o,
        })
    );
}
