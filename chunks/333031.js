(n.d(t, { Z: () => S }), n(388685));
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(954955),
    l = n.n(s),
    c = n(772848),
    u = n(442837),
    d = n(902704),
    _ = n(13245),
    f = n(928518),
    p = n(237997),
    h = n(358085),
    m = n(306381),
    g = n(610394),
    E = n(561064),
    b = n(501787),
    y = n(520870);
function O(e, t, n) {
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
function v(e, t) {
    return {
        name: e,
        left: Math.ceil(t.left),
        top: Math.ceil(t.top),
        right: Math.ceil(t.right),
        bottom: Math.ceil(t.bottom)
    };
}
class I {
    observe(e) {
        var t;
        if ((null == this.resizeObserver && (this.resizeObserver = new this.window.ResizeObserver(this.handleResize)), null == this.mutationObserver)) {
            this.mutationObserver = new MutationObserver(this.handleMutations);
            let e = f.Z.getWindow(b.$J);
            null != e &&
                this.mutationObserver.observe(null == e ? void 0 : e.document.body, {
                    subtree: !0,
                    attributes: !0
                });
        }
        let n = this.zones.get(e);
        null != n && this.resizeObserver.unobserve(n.element);
        let r = e.getBoundingClientRect();
        (this.zones.set(e, {
            element: e,
            zone: v(null != (t = null == n ? void 0 : n.zone.name) ? t : (0, c.Z)(), r)
        }),
            this.elements.add(e),
            this.resizeObserver.observe(e),
            this.updateZones());
    }
    unobserve(e) {
        var t;
        null != this.zones.get(e) && (null == (t = this.resizeObserver) || t.unobserve(e), this.zones.delete(e), this.elements.delete(e), this.updateZones());
    }
    updateZones() {
        if (!h.isPlatformEmbedded) return;
        let e = f.Z.getWindow(b.$J);
        null != e &&
            _.Z.setClickZones(
                Array.from(this.zones.values()).map((t) => {
                    let { zone: n } = t;
                    return {
                        name: n.name,
                        left: n.left / e.innerWidth,
                        top: n.top / e.innerHeight,
                        right: n.right / e.innerWidth,
                        bottom: n.bottom / e.innerHeight
                    };
                })
            );
    }
    cleanUp() {
        var e, t;
        (this.globalUpdate.cancel(), this.zones.clear(), this.elements.clear(), null == (e = this.resizeObserver) || e.disconnect(), null == (t = this.mutationObserver) || t.disconnect(), this.updateZones());
    }
    constructor(e) {
        (O(this, 'resizeObserver', void 0),
            O(this, 'mutationObserver', void 0),
            O(this, 'zones', new Map()),
            O(this, 'elements', new Set()),
            O(this, 'window', void 0),
            O(this, 'handleResize', () => {
                this.globalUpdate();
            }),
            O(this, 'handleMutations', () => {
                this.globalUpdate();
            }),
            O(
                this,
                'globalUpdate',
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
                                    zone: i
                                }),
                                this.zones.set(t, n));
                        }
                        e && this.updateZones();
                    },
                    250,
                    {
                        trailing: !0,
                        maxWait: 1000
                    }
                )
            ),
            (this.window = e));
    }
}
let T = i.createContext(new I((0, E.i)()));
function S(e) {
    let { observe: t = !0, className: n, style: a, children: s } = e,
        l = i.useContext(T),
        c = (0, u.e7)([g.ZP], () => g.ZP.hasRenderDebugMode(m.G.ClickZones)),
        d = (0, u.e7)([p.default], () => p.default.disableClickableRegions),
        [{ refHandler: _, setObserve: f }] = i.useState(() => {
            let e = null;
            return {
                setObserve(t) {
                    null != e && (t ? l.observe(e) : l.unobserve(e));
                },
                refHandler(t) {
                    (null != e && l.unobserve(e), (e = t));
                }
            };
        });
    return (
        i.useLayoutEffect(() => {
            d ? f(!1) : f(t);
        }, [t, f, d]),
        (0, r.jsx)('div', {
            ref: _,
            style: a,
            className: o()(n, y.clickable, c && y.debugMode),
            'data-click-zone': !0,
            children: s
        })
    );
}
