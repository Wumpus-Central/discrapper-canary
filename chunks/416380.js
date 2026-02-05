"use strict";
n.d(t, { A: () => R }), n(321073);
var r = n(735438),
    i = n.n(r),
    a = n(803805),
    s = n(439372),
    o = n(26909),
    l = n(630248),
    u = n(508675),
    c = n(163956),
    d = n(931959),
    _ = n(205761),
    f = n(927813),
    p = n(594061),
    h = n(617617),
    m = n(761821),
    g = n(355097);
n(705751);
let E = 10 + Math.random() * (10 * f.A.Millis.SECOND),
    A = 2 * f.A.Millis.HOUR + Math.floor(Math.random() * (10 * f.A.Millis.MINUTE)),
    I = null,
    T = !1;
class y extends s.A {
    actions = { POST_CONNECTION_OPEN: S, CONNECTION_RESUMED: S, CONNECTION_CLOSED: C, APP_STATE_UPDATE: v };
    _initialize() {
        p.bW.beforeSendCallbacks.push({
            hasChanges: () => !1,
            processProto: () => {
                N(A, !1);
            },
        }),
            p.bW.beforeSendCallbacks.push({
                hasChanges: () => d.A.hasPendingUsage() && h.A.hasLoaded(g.oD.FRECENCY_AND_FAVORITES_SETTINGS),
                processProto: (e) => {
                    !d.A.hasPendingUsage() ||
                        (h.A.hasLoaded(g.oD.FRECENCY_AND_FAVORITES_SETTINGS) &&
                            ((e.stickerFrecency = a.Do.create()),
                            (e.stickerFrecency.stickers = (0, m.Mr)(
                                d.A.stickerFrecencyWithoutFetchingLatest.usageHistory,
                                100,
                            ))));
                },
            }),
            p.bW.beforeSendCallbacks.push({
                hasChanges: () => u.Ay.hasPendingUsage() && h.A.hasLoaded(g.oD.FRECENCY_AND_FAVORITES_SETTINGS),
                processProto: (e) => {
                    !u.Ay.hasPendingUsage() ||
                        (h.A.hasLoaded(g.oD.FRECENCY_AND_FAVORITES_SETTINGS) &&
                            ((e.emojiFrecency = a.Q8.create()),
                            (e.emojiReactionFrecency = a.Q8.create()),
                            (e.emojiFrecency.emojis = (0, m.Mr)(
                                u.Ay.emojiFrecencyWithoutFetchingLatest.usageHistory,
                                100,
                            )),
                            (e.emojiReactionFrecency.emojis = (0, m.Mr)(
                                u.Ay.emojiReactionFrecencyWithoutFetchingLatest.usageHistory,
                                100,
                            ))));
                },
            }),
            p.bW.beforeSendCallbacks.push({
                hasChanges: () => c.A.hasPendingUsage() && h.A.hasLoaded(g.oD.FRECENCY_AND_FAVORITES_SETTINGS),
                processProto: (e) => {
                    !c.A.hasPendingUsage() ||
                        (h.A.hasLoaded(g.oD.FRECENCY_AND_FAVORITES_SETTINGS) &&
                            (i().isEmpty(c.A.playedSoundHistory) ||
                                ((e.playedSoundFrecency = a.kc.create()),
                                (e.playedSoundFrecency.playedSounds = (0, m.Mr)(c.A.playedSoundHistory, 100)))));
                },
            }),
            p.bW.beforeSendCallbacks.push({
                hasChanges: () => o.Ay.hasPendingUsage() && h.A.hasLoaded(g.oD.FRECENCY_AND_FAVORITES_SETTINGS),
                processProto: (e) => {
                    !o.Ay.hasPendingUsage() ||
                        (h.A.hasLoaded(g.oD.FRECENCY_AND_FAVORITES_SETTINGS) &&
                            ((e.applicationCommandFrecency = a.Zc.create()),
                            (e.applicationCommandFrecency.applicationCommands = (0, m.Mr)(
                                o.Ay.getCommandFrecencyWithoutLoadingLatest().usageHistory,
                                500,
                            ))));
                },
            }),
            p.bW.beforeSendCallbacks.push({
                hasChanges: () => l.A.hasPendingUsage() && h.A.hasLoaded(g.oD.FRECENCY_AND_FAVORITES_SETTINGS),
                processProto: (e) => {
                    !l.A.hasPendingUsage() ||
                        (h.A.hasLoaded(g.oD.FRECENCY_AND_FAVORITES_SETTINGS) &&
                            ((e.applicationFrecency = a.cC.create()),
                            (e.applicationFrecency.applications = (0, m.Mr)(
                                l.A.getApplicationFrecencyWithoutLoadingLatest().usageHistory,
                                100,
                            ))));
                },
            }),
            p.bW.beforeSendCallbacks.push({
                hasChanges: () => _.A.hasPendingUsage() && h.A.hasLoaded(g.oD.FRECENCY_AND_FAVORITES_SETTINGS),
                processProto: (e) => {
                    !_.A.hasPendingUsage() ||
                        (h.A.hasLoaded(g.oD.FRECENCY_AND_FAVORITES_SETTINGS) &&
                            ((e.guildAndChannelFrecency = a.F1.create()),
                            (e.guildAndChannelFrecency.guildAndChannels = (0, m.Mr)(
                                _.A.frecencyWithoutFetchingLatest.usageHistory,
                                _.D,
                            ))));
                },
            });
    }
}
function S() {
    (T = !0), N(E, !0);
}
function v(e) {
    T && "active" !== e.state && (clearTimeout(I), (I = null), b(!1));
}
function C() {
    T && (clearTimeout(I), (I = null), b(!1));
}
async function b(e) {
    N(A, !1),
        !h.A.hasLoaded(g.oD.FRECENCY_AND_FAVORITES_SETTINGS) &&
            (d.A.hasPendingUsage() ||
                u.Ay.hasPendingUsage() ||
                o.Ay.hasPendingUsage() ||
                l.A.hasPendingUsage() ||
                (_.A.hasPendingUsage() && !e)) &&
            ((0, p.cE)(), await p.bW.loadIfNecessary()),
        i().forEach(p.Df, (e) => {
            e.markDirtyIfHasPendingChange();
        });
}
function N(e, t) {
    null != I && clearTimeout(I), (I = setTimeout(() => b(t), e));
}
let R = new y();
