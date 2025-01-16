i.d(t, {
    Z: function () {
        return C;
    }
}),
    i(47120);
var n = i(200651),
    l = i(192379),
    o = i(120356),
    s = i.n(o),
    r = i(954955),
    a = i.n(r),
    u = i(772848),
    d = i(442837),
    c = i(902704),
    h = i(13245),
    f = i(928518),
    p = i(358085),
    E = i(610394),
    m = i(561064),
    v = i(501787),
    g = i(608631);
function S(e, t, i) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: i,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = i),
        e
    );
}
function _(e, t) {
    return {
        name: e,
        left: Math.ceil(t.left),
        top: Math.ceil(t.top),
        right: Math.ceil(t.right),
        bottom: Math.ceil(t.bottom)
    };
}
let Z = l.createContext(
    new (class e {
        observe(e) {
            var t;
            if ((null == this.resizeObserver && (this.resizeObserver = new this.window.ResizeObserver(this.handleResize)), null == this.mutationObserver)) {
                this.mutationObserver = new MutationObserver(this.handleMutations);
                let e = f.Z.getWindow(v.OVERLAY_V3_KEY);
                null != e &&
                    this.mutationObserver.observe(null == e ? void 0 : e.document.body, {
                        subtree: !0,
                        attributes: !0
                    });
            }
            let i = this.zones.get(e);
            null != i && this.resizeObserver.unobserve(i.element);
            let n = e.getBoundingClientRect();
            this.zones.set(e, {
                element: e,
                zone: _(null !== (t = null == i ? void 0 : i.zone.name) && void 0 !== t ? t : (0, u.Z)(), n)
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
            let e = f.Z.getWindow(v.OVERLAY_V3_KEY);
            null != e &&
                h.Z.setClickZones(
                    Array.from(this.zones.values()).map((t) => {
                        let { zone: i } = t;
                        return {
                            name: i.name,
                            left: i.left / e.innerWidth,
                            top: i.top / e.innerHeight,
                            right: i.right / e.innerWidth,
                            bottom: i.bottom / e.innerHeight
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
                    a()(
                        () => {
                            let e = !1;
                            for (let [t, i] of this.zones) {
                                let n = t.getBoundingClientRect(),
                                    l = _(i.zone.name, n);
                                if (!(0, c.Z)(l, i.zone))
                                    (e = !0),
                                        (i = {
                                            element: i.element,
                                            zone: l
                                        }),
                                        this.zones.set(t, i);
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
    })((0, m.i)())
);
function C(e) {
    let { observe: t = !0, className: i, children: o } = e,
        r = l.useContext(Z),
        a = (0, d.e7)([E.Z], () => E.Z.clickZoneDebugMode),
        [{ refHandler: u, setObserve: c }] = l.useState(() => {
            let e = null;
            return {
                setObserve(t) {
                    null != e && (t ? r.observe(e) : r.unobserve(e));
                },
                refHandler(t) {
                    null != e && r.unobserve(e), (e = t);
                }
            };
        });
    return (
        l.useLayoutEffect(() => {
            c(t);
        }, [t, c]),
        (0, n.jsx)('div', {
            ref: u,
            className: s()(i, g.clickable, a && g.debugMode),
            'data-click-zone': !0,
            children: o
        })
    );
}
