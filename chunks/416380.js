"use strict";
n.d(t, { A: () => O }), n(321073);
var i = n(735438),
    r = n.n(i),
    s = n(803805),
    a = n(439372),
    o = n(26909),
    l = n(630248),
    u = n(159273),
    d = n(209932),
    c = n(931959),
    _ = n(205761),
    h = n(927813),
    f = n(594061),
    E = n(617617),
    p = n(761821),
    m = n(355097);
n(705751);
let g = 10 + Math.random() * (10 * h.A.Millis.SECOND),
    A = 2 * h.A.Millis.HOUR + Math.floor(Math.random() * (10 * h.A.Millis.MINUTE)),
    I = null,
    T = !1;
class S extends a.A {
    actions = { POST_CONNECTION_OPEN: N, CONNECTION_RESUMED: N, CONNECTION_CLOSED: y, APP_STATE_UPDATE: C };
    _initialize() {
        f.bW.beforeSendCallbacks.push({
            hasChanges: () => !1,
            processProto: () => {
                R(A, !1);
            },
        }),
            f.bW.beforeSendCallbacks.push({
                hasChanges: () => c.A.hasPendingUsage() && E.A.hasLoaded(m.oD.FRECENCY_AND_FAVORITES_SETTINGS),
                processProto: (e) => {
                    !c.A.hasPendingUsage() ||
                        (E.A.hasLoaded(m.oD.FRECENCY_AND_FAVORITES_SETTINGS) &&
                            ((e.stickerFrecency = s.Do.create()),
                            (e.stickerFrecency.stickers = (0, p.Mr)(
                                c.A.stickerFrecencyWithoutFetchingLatest.usageHistory,
                                100,
                            ))));
                },
            }),
            f.bW.beforeSendCallbacks.push({
                hasChanges: () => u.Ay.hasPendingUsage() && E.A.hasLoaded(m.oD.FRECENCY_AND_FAVORITES_SETTINGS),
                processProto: (e) => {
                    !u.Ay.hasPendingUsage() ||
                        (E.A.hasLoaded(m.oD.FRECENCY_AND_FAVORITES_SETTINGS) &&
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
            f.bW.beforeSendCallbacks.push({
                hasChanges: () => d.A.hasPendingUsage() && E.A.hasLoaded(m.oD.FRECENCY_AND_FAVORITES_SETTINGS),
                processProto: (e) => {
                    !d.A.hasPendingUsage() ||
                        (E.A.hasLoaded(m.oD.FRECENCY_AND_FAVORITES_SETTINGS) &&
                            ((e.playedSoundFrecency = s.kc.create()),
                            (e.playedSoundFrecency.playedSounds = (0, p.Mr)(
                                d.A.playedSoundFrecencyWithoutFetchingLatest.usageHistory,
                                100,
                            ))));
                },
            }),
            f.bW.beforeSendCallbacks.push({
                hasChanges: () => o.Ay.hasPendingUsage() && E.A.hasLoaded(m.oD.FRECENCY_AND_FAVORITES_SETTINGS),
                processProto: (e) => {
                    !o.Ay.hasPendingUsage() ||
                        (E.A.hasLoaded(m.oD.FRECENCY_AND_FAVORITES_SETTINGS) &&
                            ((e.applicationCommandFrecency = s.Zc.create()),
                            (e.applicationCommandFrecency.applicationCommands = (0, p.Mr)(
                                o.Ay.getCommandFrecencyWithoutLoadingLatest().usageHistory,
                                500,
                            ))));
                },
            }),
            f.bW.beforeSendCallbacks.push({
                hasChanges: () => l.A.hasPendingUsage() && E.A.hasLoaded(m.oD.FRECENCY_AND_FAVORITES_SETTINGS),
                processProto: (e) => {
                    !l.A.hasPendingUsage() ||
                        (E.A.hasLoaded(m.oD.FRECENCY_AND_FAVORITES_SETTINGS) &&
                            ((e.applicationFrecency = s.cC.create()),
                            (e.applicationFrecency.applications = (0, p.Mr)(
                                l.A.getApplicationFrecencyWithoutLoadingLatest().usageHistory,
                                100,
                            ))));
                },
            }),
            f.bW.beforeSendCallbacks.push({
                hasChanges: () => _.A.hasPendingUsage() && E.A.hasLoaded(m.oD.FRECENCY_AND_FAVORITES_SETTINGS),
                processProto: (e) => {
                    !_.A.hasPendingUsage() ||
                        (E.A.hasLoaded(m.oD.FRECENCY_AND_FAVORITES_SETTINGS) &&
                            ((e.guildAndChannelFrecency = s.F1.create()),
                            (e.guildAndChannelFrecency.guildAndChannels = (0, p.Mr)(
                                _.A.frecencyWithoutFetchingLatest.usageHistory,
                                _.D,
                            ))));
                },
            });
    }
}
function N() {
    (T = !0), R(g, !0);
}
function C(e) {
    T && "active" !== e.state && (clearTimeout(I), (I = null), v(!1));
}
function y() {
    T && (clearTimeout(I), (I = null), v(!1));
}
async function v(e) {
    R(A, !1),
        !E.A.hasLoaded(m.oD.FRECENCY_AND_FAVORITES_SETTINGS) &&
            (c.A.hasPendingUsage() ||
                u.Ay.hasPendingUsage() ||
                o.Ay.hasPendingUsage() ||
                l.A.hasPendingUsage() ||
                d.A.hasPendingUsage() ||
                (_.A.hasPendingUsage() && !e)) &&
            ((0, f.cE)(), await f.bW.loadIfNecessary()),
        r().forEach(f.Df, (e) => {
            e.markDirtyIfHasPendingChange();
        });
}
function R(e, t) {
    null != I && clearTimeout(I), (I = setTimeout(() => v(t), e));
}
let O = new S();
