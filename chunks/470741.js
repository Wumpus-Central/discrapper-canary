"use strict";
n.d(t, { L: () => c, QY: () => _, aQ: () => u });
var i = n(821578),
    r = n(17928),
    a = n(280450),
    s = n(558076),
    l = n(360729),
    o = n(189998);
let d = { x: 50, y: 50 };
function c(e) {
    let { users: t, currentUserId: n, channelId: r } = e,
        a = t.get(n)?.position ?? null,
        l = s.A.getRoom(r)?.background ?? i.I.DEFAULT,
        { aspectRatio: c } = o.iX[l];
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
                        let { aspectRatio: i } = n,
                            r = t ?? d;
                        return { worldX: ((e.x - r.x) / 100) * i * 8, worldY: 0, worldZ: ((e.y - r.y) / 100) * 8 };
                    })(n, a, { aspectRatio: c }),
                ];
            }),
    );
}
function u(e) {
    let { worldX: t, worldY: n, worldZ: i } = e;
    return { x: t, y: n, z: i };
}
function _(e) {
    let { channelId: t, guildId: n, mode: i } = e,
        d = (0, r.bG)([a.default], () => a.default.getId()),
        { interactionsEnabled: u } = l.A.useExperiment({ guildId: n, location: "SpatialAudioPanel" }),
        _ = u && null != n,
        E = _ && i === o.sg;
    return {
        available: _,
        worldPoints: (0, r.bG)(
            [s.A],
            () => (E && null != t ? c({ users: s.A.getRoomUsers(t), currentUserId: d, channelId: t }) : {}),
            [E, t, d],
        ),
    };
}
