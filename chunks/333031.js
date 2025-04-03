n.d(t, { Z: () => w }), n(47120);
var r = n(200651),
    i = n(192379),
    o = n(120356),
    l = n.n(o),
    s = n(954955),
    c = n.n(s),
    a = n(772848),
    u = n(442837),
    d = n(902704),
    h = n(13245),
    p = n(928518),
    m = n(237997),
    b = n(358085),
    f = n(306381),
    v = n(610394),
    g = n(561064),
    y = n(501787),
    O = n(520870);
function x(e, t, n) {
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
let j = i.createContext(
    new (class {
        observe(e) {
            var t;
            if ((null == this.resizeObserver && (this.resizeObserver = new this.window.ResizeObserver(this.handleResize)), null == this.mutationObserver)) {
                this.mutationObserver = new MutationObserver(this.handleMutations);
                let e = p.Z.getWindow(y.$J);
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
                zone: C(null != (t = null == n ? void 0 : n.zone.name) ? t : (0, a.Z)(), r)
            }),
                this.elements.add(e),
                this.resizeObserver.observe(e),
                this.updateZones();
        }
        unobserve(e) {
            var t;
            null != this.zones.get(e) && (null == (t = this.resizeObserver) || t.unobserve(e), this.zones.delete(e), this.elements.delete(e), this.updateZones());
        }
        updateZones() {
            if (!b.isPlatformEmbedded) return;
            let e = p.Z.getWindow(y.$J);
            null != e &&
                h.Z.setClickZones(
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
            this.globalUpdate.cancel(), this.zones.clear(), this.elements.clear(), null == (e = this.resizeObserver) || e.disconnect(), null == (t = this.mutationObserver) || t.disconnect(), this.updateZones();
        }
        constructor(e) {
            x(this, 'resizeObserver', void 0),
                x(this, 'mutationObserver', void 0),
                x(this, 'zones', new Map()),
                x(this, 'elements', new Set()),
                x(this, 'window', void 0),
                x(this, 'handleResize', () => {
                    this.globalUpdate();
                }),
                x(this, 'handleMutations', () => {
                    this.globalUpdate();
                }),
                x(
                    this,
                    'globalUpdate',
                    c()(
                        () => {
                            let e = !1;
                            for (let [t, n] of this.zones) {
                                let r = t.getBoundingClientRect(),
                                    i = C(n.zone.name, r);
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
                (this.window = e);
        }
    })((0, g.i)())
);
function w(e) {
    let { observe: t = !0, className: n, style: o, children: s } = e,
        c = i.useContext(j),
        a = (0, u.e7)([v.ZP], () => v.ZP.hasRenderDebugMode(f.G.ClickZones)),
        d = (0, u.e7)([m.default], () => m.default.disableClickableRegions),
        [{ refHandler: h, setObserve: p }] = i.useState(() => {
            let e = null;
            return {
                setObserve(t) {
                    null != e && (t ? c.observe(e) : c.unobserve(e));
                },
                refHandler(t) {
                    null != e && c.unobserve(e), (e = t);
                }
            };
        });
    return (
        i.useLayoutEffect(() => {
            d ? p(!1) : p(t);
        }, [t, p, d]),
        (0, r.jsx)('div', {
            ref: h,
            style: o,
            className: l()(n, O.clickable, a && O.debugMode),
            'data-click-zone': !0,
            children: s
        })
    );
}
