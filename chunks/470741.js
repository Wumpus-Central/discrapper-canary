"use strict";
n.d(t, { L: () => d, QY: () => u, aQ: () => c });
var i = n(17928),
    r = n(280450),
    a = n(558076),
    s = n(360729),
    l = n(765402);
let o = { x: 50, y: 50 };
function d(e) {
    let { users: t, currentUserId: n, listenerHeight: i } = e,
        r = t.get(n)?.position ?? null,
        { aspectRatio: a } = l.iX[l.I3.DEFAULT];
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
                            a = t ?? o,
                            s = (e.x - a.x) / 100,
                            l = (e.y - a.y) / 100;
                        return { worldX: s * i * 8, worldY: r - 4 * l, worldZ: 8 * l };
                    })(n, r, { aspectRatio: a, listenerHeight: i }),
                ];
            }),
    );
}
function c(e) {
    let { worldX: t, worldY: n, worldZ: i } = e;
    return { x: t, y: n, z: i };
}
function u(e) {
    let { channelId: t, guildId: n, mode: o, listenerHeight: c } = e,
        u = (0, i.bG)([r.default], () => r.default.getId()),
        { experimental: _ } = s.A.useExperiment({ guildId: n, location: "SpatialAudioPanel" }),
        E = _ && null != n,
        A = E && o === l.sg;
    return {
        available: E,
        worldPoints: (0, i.bG)(
            [a.A],
            () => (A && null != t ? d({ users: a.A.getRoomUsers(t), currentUserId: u, listenerHeight: c }) : {}),
            [A, t, u, c],
        ),
    };
}
