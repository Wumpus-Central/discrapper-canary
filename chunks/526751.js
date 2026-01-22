n.d(t, { M: () => c }), n(446912), n(896048);
var r = n(488430),
    i = n(474996),
    a = n(326901),
    s = n(183264),
    o = n(813094);
function l(e, t, n) {
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
class c {
    static fromServer(e) {
        var t;
        return new c(
            Object.fromEntries(
                Object.entries(null != (t = null == e ? void 0 : e.marketings) ? t : {}).map((e) => {
                    let [t, n] = e;
                    return (null == n ? void 0 : n.type) === r.G.COACHTIP
                        ? [t, o.A.fromServer(n)]
                        : (null == n ? void 0 : n.type) === r.G.BADGE
                          ? [t, i.i.fromServer(n)]
                          : (null == n ? void 0 : n.type) === r.G.BANNER
                            ? [t, a.V.fromServer(n)]
                            : (null == n ? void 0 : n.type) === r.G.COACHMARK
                              ? [t, s.q.fromServer(n)]
                              : [t, void 0];
                }),
            ),
        );
    }
    constructor(e) {
        l(this, "marketingsBySurfaces", void 0), (this.marketingsBySurfaces = e);
    }
}
