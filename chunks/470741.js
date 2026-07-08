"use strict";
n.d(t, { L: () => c, QY: () => _, aQ: () => u });
var i = n(821578),
    r = n(17928),
    a = n(280450),
    s = n(558076),
    l = n(360729),
    o = n(971954);
let d = { x: 50, y: 50 };
function c(e) {
    let { users: t, currentUserId: n, listenerHeight: r } = e,
        a = t.get(n)?.position ?? null,
        { aspectRatio: s } = o.iX[i.I.DEFAULT];
    return Object.fromEntries(
        [...t.values()]
            .filter((e) => {
                let { userId: t } = e;
                return t !== n;
            })
            .map((e) => {
                let { userId: t, position: n } = e;
                return [
                    t,
                    (function (e, t, n) {
                        let { aspectRatio: i, listenerHeight: r } = n,
                            a = t ?? d,
                            s = (e.x - a.x) / 100,
                            l = (e.y - a.y) / 100;
                        return { worldX: s * i * 8, worldY: r - 4 * l, worldZ: 8 * l };
                    })(n, a, { aspectRatio: s, listenerHeight: r }),
                ];
            }),
    );
}
function u(e) {
    let { worldX: t, worldY: n, worldZ: i } = e;
    return { x: t, y: n, z: i };
}
function _(e) {
    let { channelId: t, guildId: n, mode: i, listenerHeight: d } = e,
        u = (0, r.bG)([a.default], () => a.default.getId()),
        { experimental: _ } = l.A.useExperiment({ guildId: n, location: "SpatialAudioPanel" }),
        E = _ && null != n,
        A = E && i === o.sg;
    return {
        available: E,
        worldPoints: (0, r.bG)(
            [s.A],
            () => (A && null != t ? c({ users: s.A.getRoomUsers(t), currentUserId: u, listenerHeight: d }) : {}),
            [A, t, u, d],
        ),
    };
}
