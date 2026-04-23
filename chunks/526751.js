"use strict";
n.d(t, { M: () => l });
var r = n(488430),
    i = n(474996),
    s = n(326901),
    a = n(183264),
    o = n(74973);
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
                    return n?.type === r.G.BADGE
                        ? [t, i.i.fromServer(n)]
                        : n?.type === r.G.BANNER
                          ? [t, s.V.fromServer(n)]
                          : n?.type === r.G.COACHMARK
                            ? [t, a.q.fromServer(n)]
                            : n?.type === r.G.TAB_TOOLTIP
                              ? [t, o.A.fromServer(n)]
                              : [t, void 0];
                }),
            ),
        );
    }
}
