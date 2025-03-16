n.d(t, { Z: () => j }), n(47120);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    o = n.n(l),
    a = n(954955),
    s = n.n(a),
    c = n(772848),
    u = n(442837),
    d = n(902704),
    f = n(13245),
    m = n(928518),
    p = n(237997),
    h = n(358085),
    v = n(306381),
    b = n(610394),
    g = n(561064),
    y = n(501787),
    E = n(754466);
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
function S(e, t) {
    return {
        name: e,
        left: Math.ceil(t.left),
        top: Math.ceil(t.top),
        right: Math.ceil(t.right),
        bottom: Math.ceil(t.bottom)
    };
}
let x = i.createContext(
    new (class {
        observe(e) {
            var t;
            if ((null == this.resizeObserver && (this.resizeObserver = new this.window.ResizeObserver(this.handleResize)), null == this.mutationObserver)) {
                this.mutationObserver = new MutationObserver(this.handleMutations);
                let e = m.Z.getWindow(y.$J);
                null != e &&
                    this.mutationObserver.observe(null == e ? void 0 : e.document.body, {
                        subtree: !0,
                        attributes: !0
                    });
            }
            let n = this.zones.get(e);
            null != n && this.resizeObserver.unobserve(n.element);
            let r = e.getBoundingClientRect();
            this.zones.set(e, {
                element: e,
                zone: S(null !== (t = null == n ? void 0 : n.zone.name) && void 0 !== t ? t : (0, c.Z)(), r)
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
            if (!h.isPlatformEmbedded) return;
            let e = m.Z.getWindow(y.$J);
            null != e &&
                f.Z.setClickZones(
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
            O(this, 'resizeObserver', void 0),
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
                    s()(
                        () => {
                            let e = !1;
                            for (let [t, n] of this.zones) {
                                let r = t.getBoundingClientRect(),
                                    i = S(n.zone.name, r);
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
    })((0, g.i)())
);
function j(e) {
    let { observe: t = !0, className: n, style: l, children: a } = e,
        s = i.useContext(x),
        c = (0, u.e7)([b.ZP], () => b.ZP.hasRenderDebugMode(v.G.ClickZones)),
        d = (0, u.e7)([p.default], () => p.default.disableClickableRegions),
        [{ refHandler: f, setObserve: m }] = i.useState(() => {
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
            d ? m(!1) : m(t);
        }, [t, m, d]),
        (0, r.jsx)('div', {
            ref: f,
            style: l,
            className: o()(n, E.clickable, c && E.debugMode),
            'data-click-zone': !0,
            children: a
        })
    );
}
