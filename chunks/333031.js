n.d(t, { Z: () => T }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(954955),
    l = n.n(s),
    c = n(772848),
    u = n(442837),
    d = n(902704),
    f = n(13245),
    p = n(928518),
    _ = n(237997),
    m = n(358085),
    h = n(837268),
    g = n(338949),
    E = n(561064),
    b = n(501787),
    y = n(895764);
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
function v(e, t) {
    return {
        name: e,
        left: Math.ceil(t.left),
        top: Math.ceil(t.top),
        right: Math.ceil(t.right),
        bottom: Math.ceil(t.bottom),
    };
}
class S {
    observe(e) {
        var t;
        if (
            (null == this.resizeObserver && (this.resizeObserver = new this.window.ResizeObserver(this.handleResize)),
            null == this.mutationObserver)
        ) {
            this.mutationObserver = new MutationObserver(this.handleMutations);
            let e = p.Z.getWindow(b.$J);
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
            zone: v(null != (t = null == n ? void 0 : n.zone.name) ? t : (0, c.Z)(), r),
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
        if (!m.isPlatformEmbedded) return;
        let e = p.Z.getWindow(b.$J);
        null != e &&
            f.Z.setClickZones(
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
                                i = v(n.zone.name, r);
                            (0, d.Z)(i, n.zone) ||
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
let I = i.createContext(new S((0, E.i)()));
function T(e) {
    let { observe: t = !0, className: n, style: a, children: s } = e,
        l = i.useContext(I),
        c = (0, u.e7)([g.Z], () => g.Z.hasRenderDebugMode(h.GO.ClickZones)),
        d = (0, u.e7)([_.default], () => _.default.disableClickableRegions),
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
            className: o()(n, y.clickable, c && y.debugMode),
            "data-click-zone": !0,
            children: s,
        })
    );
}
