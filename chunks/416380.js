n.d(t, { A: () => y }), n(321073);
var i = n(435558),
    r = n.n(i),
    a = n(803805),
    s = n(439372),
    l = n(26909),
    o = n(630248),
    d = n(236285),
    c = n(209932),
    u = n(931959),
    _ = n(205761),
    E = n(927813),
    A = n(594061),
    h = n(617617),
    I = n(761821),
    f = n(355097);
n(705751);
let p = 10 + Math.random() * (10 * E.A.Millis.SECOND),
    T = 2 * E.A.Millis.HOUR + Math.floor(Math.random() * (10 * E.A.Millis.MINUTE)),
    m = null,
    g = !1;
class S extends s.A {
    actions = { POST_CONNECTION_OPEN: N, CONNECTION_RESUMED: N, CONNECTION_CLOSED: O, APP_STATE_UPDATE: C };
    _initialize() {
        A.bW.beforeSendCallbacks.push({
            hasChanges: () => !1,
            processProto: () => {
                L(T, !1);
            },
        }),
            A.bW.beforeSendCallbacks.push({
                hasChanges: () => u.A.hasPendingUsage() && h.A.hasLoaded(f.oD.FRECENCY_AND_FAVORITES_SETTINGS),
                processProto: (e) => {
                    !u.A.hasPendingUsage() ||
                        (h.A.hasLoaded(f.oD.FRECENCY_AND_FAVORITES_SETTINGS) &&
                            ((e.stickerFrecency = a.Do.create()),
                            (e.stickerFrecency.stickers = (0, I.Mr)(
                                u.A.stickerFrecencyWithoutFetchingLatest.usageHistory,
                                100,
                            ))));
                },
            }),
            A.bW.beforeSendCallbacks.push({
                hasChanges: () => d.Ay.hasPendingUsage() && h.A.hasLoaded(f.oD.FRECENCY_AND_FAVORITES_SETTINGS),
                processProto: (e) => {
                    !d.Ay.hasPendingUsage() ||
                        (h.A.hasLoaded(f.oD.FRECENCY_AND_FAVORITES_SETTINGS) &&
                            ((e.emojiFrecency = a.Q8.create()),
                            (e.emojiReactionFrecency = a.Q8.create()),
                            (e.emojiFrecency.emojis = (0, I.Mr)(
                                d.Ay.emojiFrecencyWithoutFetchingLatest.usageHistory,
                                100,
                            )),
                            (e.emojiReactionFrecency.emojis = (0, I.Mr)(
                                d.Ay.emojiReactionFrecencyWithoutFetchingLatest.usageHistory,
                                100,
                            ))));
                },
            }),
            A.bW.beforeSendCallbacks.push({
                hasChanges: () => c.A.hasPendingUsage() && h.A.hasLoaded(f.oD.FRECENCY_AND_FAVORITES_SETTINGS),
                processProto: (e) => {
                    !c.A.hasPendingUsage() ||
                        (h.A.hasLoaded(f.oD.FRECENCY_AND_FAVORITES_SETTINGS) &&
                            ((e.playedSoundFrecency = a.kc.create()),
                            (e.playedSoundFrecency.playedSounds = (0, I.Mr)(
                                c.A.playedSoundFrecencyWithoutFetchingLatest.usageHistory,
                                100,
                            ))));
                },
            }),
            A.bW.beforeSendCallbacks.push({
                hasChanges: () => l.Ay.hasPendingUsage() && h.A.hasLoaded(f.oD.FRECENCY_AND_FAVORITES_SETTINGS),
                processProto: (e) => {
                    !l.Ay.hasPendingUsage() ||
                        (h.A.hasLoaded(f.oD.FRECENCY_AND_FAVORITES_SETTINGS) &&
                            ((e.applicationCommandFrecency = a.Zc.create()),
                            (e.applicationCommandFrecency.applicationCommands = (0, I.Mr)(
                                l.Ay.getCommandFrecencyWithoutLoadingLatest().usageHistory,
                                500,
                            ))));
                },
            }),
            A.bW.beforeSendCallbacks.push({
                hasChanges: () => o.A.hasPendingUsage() && h.A.hasLoaded(f.oD.FRECENCY_AND_FAVORITES_SETTINGS),
                processProto: (e) => {
                    !o.A.hasPendingUsage() ||
                        (h.A.hasLoaded(f.oD.FRECENCY_AND_FAVORITES_SETTINGS) &&
                            ((e.applicationFrecency = a.cC.create()),
                            (e.applicationFrecency.applications = (0, I.Mr)(
                                o.A.getApplicationFrecencyWithoutLoadingLatest().usageHistory,
                                100,
                            ))));
                },
            }),
            A.bW.beforeSendCallbacks.push({
                hasChanges: () => _.A.hasPendingUsage() && h.A.hasLoaded(f.oD.FRECENCY_AND_FAVORITES_SETTINGS),
                processProto: (e) => {
                    !_.A.hasPendingUsage() ||
                        (h.A.hasLoaded(f.oD.FRECENCY_AND_FAVORITES_SETTINGS) &&
                            ((e.guildAndChannelFrecency = a.F1.create()),
                            (e.guildAndChannelFrecency.guildAndChannels = (0, I.Mr)(
                                _.A.frecencyWithoutFetchingLatest.usageHistory,
                                _.D,
                            ))));
                },
            });
    }
}
function N() {
    (g = !0), L(p, !0);
}
function C(e) {
    g && "active" !== e.state && (clearTimeout(m), (m = null), R(!1));
}
function O() {
    g && (clearTimeout(m), (m = null), R(!1));
}
async function R(e) {
    L(T, !1),
        !h.A.hasLoaded(f.oD.FRECENCY_AND_FAVORITES_SETTINGS) &&
            (u.A.hasPendingUsage() ||
                d.Ay.hasPendingUsage() ||
                l.Ay.hasPendingUsage() ||
                o.A.hasPendingUsage() ||
                c.A.hasPendingUsage() ||
                (_.A.hasPendingUsage() && !e)) &&
            ((0, A.cE)(), await A.bW.loadIfNecessary()),
        r().forEach(A.Df, (e) => {
            e.markDirtyIfHasPendingChange();
        });
}
function L(e, t) {
    null != m && clearTimeout(m), (m = setTimeout(() => R(t), e));
}
let y = new S();
