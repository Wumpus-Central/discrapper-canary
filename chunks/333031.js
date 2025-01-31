n.d(t, { Z: () => C }), n(47120);
var i = n(200651),
    l = n(192379),
    a = n(120356),
    r = n.n(a),
    s = n(954955),
    o = n.n(s),
    c = n(772848),
    u = n(442837),
    d = n(902704),
    m = n(13245),
    f = n(928518),
    p = n(358085),
    h = n(306381),
    g = n(610394),
    v = n(561064),
    _ = n(501787),
    S = n(608631);
function I(e, t, n) {
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
function x(e, t) {
    return {
        name: e,
        left: Math.ceil(t.left),
        top: Math.ceil(t.top),
        right: Math.ceil(t.right),
        bottom: Math.ceil(t.bottom)
    };
}
let E = l.createContext(
    new (class {
        observe(e) {
            var t;
            if ((null == this.resizeObserver && (this.resizeObserver = new this.window.ResizeObserver(this.handleResize)), null == this.mutationObserver)) {
                this.mutationObserver = new MutationObserver(this.handleMutations);
                let e = f.Z.getWindow(_.$J);
                null != e &&
                    this.mutationObserver.observe(null == e ? void 0 : e.document.body, {
                        subtree: !0,
                        attributes: !0
                    });
            }
            let n = this.zones.get(e);
            null != n && this.resizeObserver.unobserve(n.element);
            let i = e.getBoundingClientRect();
            this.zones.set(e, {
                element: e,
                zone: x(null !== (t = null == n ? void 0 : n.zone.name) && void 0 !== t ? t : (0, c.Z)(), i)
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
            let e = f.Z.getWindow(_.$J);
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
            I(this, 'resizeObserver', void 0),
                I(this, 'mutationObserver', void 0),
                I(this, 'zones', new Map()),
                I(this, 'elements', new Set()),
                I(this, 'window', void 0),
                I(this, 'handleResize', () => {
                    this.globalUpdate();
                }),
                I(this, 'handleMutations', () => {
                    this.globalUpdate();
                }),
                I(
                    this,
                    'globalUpdate',
                    o()(
                        () => {
                            let e = !1;
                            for (let [t, n] of this.zones) {
                                let i = t.getBoundingClientRect(),
                                    l = x(n.zone.name, i);
                                !(0, d.Z)(l, n.zone) &&
                                    ((e = !0),
                                    (n = {
                                        element: n.element,
                                        zone: l
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
    })((0, v.i)())
);
function C(e) {
    let { observe: t = !0, className: n, children: a } = e,
        s = l.useContext(E),
        o = (0, u.e7)([g.ZP], () => g.ZP.hasRenderDebugMode(h.G.ClickZones)),
        [{ refHandler: c, setObserve: d }] = l.useState(() => {
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
        l.useLayoutEffect(() => {
            d(t);
        }, [t, d]),
        (0, i.jsx)('div', {
            ref: c,
            className: r()(n, S.clickable, o && S.debugMode),
            'data-click-zone': !0,
            children: a
        })
    );
}
