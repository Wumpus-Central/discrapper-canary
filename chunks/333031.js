n.d(t, { Z: () => I }), n(47120);
var l = n(200651),
    i = n(192379),
    r = n(120356),
    a = n.n(r),
    s = n(954955),
    o = n.n(s),
    u = n(772848),
    c = n(442837),
    d = n(902704),
    m = n(13245),
    f = n(928518),
    h = n(237997),
    p = n(358085),
    v = n(306381),
    g = n(610394),
    E = n(561064),
    x = n(501787),
    Z = n(6391);
function S(e, t, n) {
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
function C(e, t) {
    return {
        name: e,
        left: Math.ceil(t.left),
        top: Math.ceil(t.top),
        right: Math.ceil(t.right),
        bottom: Math.ceil(t.bottom)
    };
}
let b = i.createContext(
    new (class {
        observe(e) {
            var t;
            if ((null == this.resizeObserver && (this.resizeObserver = new this.window.ResizeObserver(this.handleResize)), null == this.mutationObserver)) {
                this.mutationObserver = new MutationObserver(this.handleMutations);
                let e = f.Z.getWindow(x.$J);
                null != e &&
                    this.mutationObserver.observe(null == e ? void 0 : e.document.body, {
                        subtree: !0,
                        attributes: !0
                    });
            }
            let n = this.zones.get(e);
            null != n && this.resizeObserver.unobserve(n.element);
            let l = e.getBoundingClientRect();
            this.zones.set(e, {
                element: e,
                zone: C(null !== (t = null == n ? void 0 : n.zone.name) && void 0 !== t ? t : (0, u.Z)(), l)
            }),
                this.elements.add(e),
                this.resizeObserver.observe(e),
                this.updateZones();
        }
        unobserve(e) {
            var t;
            null != this.zones.get(e) && (null === (t = this.resizeObserver) || void 0 === t || t.unobserve(e), this.zones.delete(e), this.elements.delete(e), this.updateZones());
        }
        updateZones() {
            if (!p.isPlatformEmbedded) return;
            let e = f.Z.getWindow(x.$J);
            null != e &&
                m.Z.setClickZones(
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
            this.globalUpdate.cancel(), this.zones.clear(), this.elements.clear(), null === (e = this.resizeObserver) || void 0 === e || e.disconnect(), null === (t = this.mutationObserver) || void 0 === t || t.disconnect(), this.updateZones();
        }
        constructor(e) {
            S(this, 'resizeObserver', void 0),
                S(this, 'mutationObserver', void 0),
                S(this, 'zones', new Map()),
                S(this, 'elements', new Set()),
                S(this, 'window', void 0),
                S(this, 'handleResize', () => {
                    this.globalUpdate();
                }),
                S(this, 'handleMutations', () => {
                    this.globalUpdate();
                }),
                S(
                    this,
                    'globalUpdate',
                    o()(
                        () => {
                            let e = !1;
                            for (let [t, n] of this.zones) {
                                let l = t.getBoundingClientRect(),
                                    i = C(n.zone.name, l);
                                !(0, d.Z)(i, n.zone) &&
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
                (this.window = e);
        }
    })((0, E.i)())
);
function I(e) {
    let { observe: t = !0, className: n, children: r } = e,
        s = i.useContext(b),
        o = (0, c.e7)([g.ZP], () => g.ZP.hasRenderDebugMode(v.G.ClickZones)),
        u = (0, c.e7)([h.Z], () => h.Z.disableClickableRegions),
        [{ refHandler: d, setObserve: m }] = i.useState(() => {
            let e = null;
            return {
                setObserve(t) {
                    null != e && (t ? s.observe(e) : s.unobserve(e));
                },
                refHandler(t) {
                    null != e && s.unobserve(e), (e = t);
                }
            };
        });
    return (
        i.useLayoutEffect(() => {
            u ? m(!1) : m(t);
        }, [t, m, u]),
        (0, l.jsx)('div', {
            ref: d,
            className: a()(n, Z.clickable, o && Z.debugMode),
            'data-click-zone': !0,
            children: r
        })
    );
}
