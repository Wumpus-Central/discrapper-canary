"use strict";
n.d(t, { M: () => l });
var r = n(488430),
    i = n(474996),
    a = n(326901),
    s = n(183264),
    o = n(813094);
class l {
    marketingsBySurfaces;
    constructor(e) {
        this.marketingsBySurfaces = e;
    }
    static fromServer(e) {
        return new l(
            Object.fromEntries(
                Object.entries(e?.marketings ?? {}).map((e) => {
                    let [t, n] = e;
                    return n?.type === r.G.COACHTIP
                        ? [t, o.A.fromServer(n)]
                        : n?.type === r.G.BADGE
                          ? [t, i.i.fromServer(n)]
                          : n?.type === r.G.BANNER
                            ? [t, a.V.fromServer(n)]
                            : n?.type === r.G.COACHMARK
                              ? [t, s.q.fromServer(n)]
                              : [t, void 0];
                }),
            ),
        );
    }
}
