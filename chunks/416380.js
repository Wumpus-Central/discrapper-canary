"use strict";
n.d(t, { A: () => R }), n(321073);
var i = n(735438),
    r = n.n(i),
    s = n(803805),
    a = n(439372),
    o = n(26909),
    l = n(630248),
    u = n(159273),
    c = n(931959),
    d = n(205761),
    _ = n(927813),
    h = n(594061),
    f = n(617617),
    p = n(761821),
    E = n(355097);
n(705751);
let m = 10 + Math.random() * (10 * _.A.Millis.SECOND),
    g = 2 * _.A.Millis.HOUR + Math.floor(Math.random() * (10 * _.A.Millis.MINUTE)),
    A = null,
    I = !1;
class T extends a.A {
    actions = { POST_CONNECTION_OPEN: S, CONNECTION_RESUMED: S, CONNECTION_CLOSED: C, APP_STATE_UPDATE: y };
    _initialize() {
        h.bW.beforeSendCallbacks.push({
            hasChanges: () => !1,
            processProto: () => {
                v(g, !1);
            },
        }),
            h.bW.beforeSendCallbacks.push({
                hasChanges: () => c.A.hasPendingUsage() && f.A.hasLoaded(E.oD.FRECENCY_AND_FAVORITES_SETTINGS),
                processProto: (e) => {
                    !c.A.hasPendingUsage() ||
                        (f.A.hasLoaded(E.oD.FRECENCY_AND_FAVORITES_SETTINGS) &&
                            ((e.stickerFrecency = s.Do.create()),
                            (e.stickerFrecency.stickers = (0, p.Mr)(
                                c.A.stickerFrecencyWithoutFetchingLatest.usageHistory,
                                100,
                            ))));
                },
            }),
            h.bW.beforeSendCallbacks.push({
                hasChanges: () => u.Ay.hasPendingUsage() && f.A.hasLoaded(E.oD.FRECENCY_AND_FAVORITES_SETTINGS),
                processProto: (e) => {
                    !u.Ay.hasPendingUsage() ||
                        (f.A.hasLoaded(E.oD.FRECENCY_AND_FAVORITES_SETTINGS) &&
                            ((e.emojiFrecency = s.Q8.create()),
                            (e.emojiReactionFrecency = s.Q8.create()),
                            (e.emojiFrecency.emojis = (0, p.Mr)(
                                u.Ay.emojiFrecencyWithoutFetchingLatest.usageHistory,
                                100,
                            )),
                            (e.emojiReactionFrecency.emojis = (0, p.Mr)(
                                u.Ay.emojiReactionFrecencyWithoutFetchingLatest.usageHistory,
                                100,
                            ))));
                },
            }),
            h.bW.beforeSendCallbacks.push({
                hasChanges: () => o.Ay.hasPendingUsage() && f.A.hasLoaded(E.oD.FRECENCY_AND_FAVORITES_SETTINGS),
                processProto: (e) => {
                    !o.Ay.hasPendingUsage() ||
                        (f.A.hasLoaded(E.oD.FRECENCY_AND_FAVORITES_SETTINGS) &&
                            ((e.applicationCommandFrecency = s.Zc.create()),
                            (e.applicationCommandFrecency.applicationCommands = (0, p.Mr)(
                                o.Ay.getCommandFrecencyWithoutLoadingLatest().usageHistory,
                                500,
                            ))));
                },
            }),
            h.bW.beforeSendCallbacks.push({
                hasChanges: () => l.A.hasPendingUsage() && f.A.hasLoaded(E.oD.FRECENCY_AND_FAVORITES_SETTINGS),
                processProto: (e) => {
                    !l.A.hasPendingUsage() ||
                        (f.A.hasLoaded(E.oD.FRECENCY_AND_FAVORITES_SETTINGS) &&
                            ((e.applicationFrecency = s.cC.create()),
                            (e.applicationFrecency.applications = (0, p.Mr)(
                                l.A.getApplicationFrecencyWithoutLoadingLatest().usageHistory,
                                100,
                            ))));
                },
            }),
            h.bW.beforeSendCallbacks.push({
                hasChanges: () => d.A.hasPendingUsage() && f.A.hasLoaded(E.oD.FRECENCY_AND_FAVORITES_SETTINGS),
                processProto: (e) => {
                    !d.A.hasPendingUsage() ||
                        (f.A.hasLoaded(E.oD.FRECENCY_AND_FAVORITES_SETTINGS) &&
                            ((e.guildAndChannelFrecency = s.F1.create()),
                            (e.guildAndChannelFrecency.guildAndChannels = (0, p.Mr)(
                                d.A.frecencyWithoutFetchingLatest.usageHistory,
                                d.D,
                            ))));
                },
            });
    }
}
function S() {
    (I = !0), v(m, !0);
}
function y(e) {
    I && "active" !== e.state && (clearTimeout(A), (A = null), N(!1));
}
function C() {
    I && (clearTimeout(A), (A = null), N(!1));
}
async function N(e) {
    v(g, !1),
        !f.A.hasLoaded(E.oD.FRECENCY_AND_FAVORITES_SETTINGS) &&
            (c.A.hasPendingUsage() ||
                u.Ay.hasPendingUsage() ||
                o.Ay.hasPendingUsage() ||
                l.A.hasPendingUsage() ||
                (d.A.hasPendingUsage() && !e)) &&
            ((0, h.cE)(), await h.bW.loadIfNecessary()),
        r().forEach(h.Df, (e) => {
            e.markDirtyIfHasPendingChange();
        });
}
function v(e, t) {
    null != A && clearTimeout(A), (A = setTimeout(() => N(t), e));
}
let R = new T();
