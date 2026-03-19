"use strict";
n.d(t, { M: () => u });
var r = n(488430),
    i = n(474996),
    s = n(326901),
    a = n(183264),
    o = n(813094),
    l = n(74973);
class u {
    marketingsBySurfaces;
    constructor(e) {
        this.marketingsBySurfaces = e;
    }
    static fromServer(e) {
        return new u(
            Object.fromEntries(
                Object.entries(e?.marketings ?? {}).map((e) => {
                    let [t, n] = e;
                    return n?.type === r.G.COACHTIP
                        ? [t, o.A.fromServer(n)]
                        : n?.type === r.G.BADGE
                          ? [t, i.i.fromServer(n)]
                          : n?.type === r.G.BANNER
                            ? [t, s.V.fromServer(n)]
                            : n?.type === r.G.COACHMARK
                              ? [t, a.q.fromServer(n)]
                              : n?.type === r.G.TAB_TOOLTIP
                                ? [t, l.A.fromServer(n)]
                                : [t, void 0];
                }),
            ),
        );
    }
}
