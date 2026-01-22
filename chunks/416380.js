n.d(t, {
    A: () => w,
}),
    n(321073),
    n(896048);
var r = n(735438),
    i = n.n(r),
    a = n(803805),
    s = n(439372),
    o = n(26909),
    l = n(630248),
    c = n(508675),
    u = n(163956),
    d = n(931959),
    f = n(205761),
    p = n(927813),
    _ = n(594061),
    h = n(617617),
    m = n(761821),
    g = n(355097),
    E = n(705751);

function b(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let y = 10 + Math.random() * (10 * p.A.Millis.SECOND),
    O = 2 * p.A.Millis.HOUR + Math.floor(Math.random() * (10 * p.A.Millis.MINUTE)),
    A = null,
    v = !1;
class S extends s.A {
    _initialize() {
        _.bW.beforeSendCallbacks.push({
            hasChanges: () => !1,
            processProto: () => {
                R(O, !1);
            },
        }),
            _.bW.beforeSendCallbacks.push({
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
            _.bW.beforeSendCallbacks.push({
                hasChanges: () => c.Ay.hasPendingUsage() && h.A.hasLoaded(g.oD.FRECENCY_AND_FAVORITES_SETTINGS),
                processProto: (e) => {
                    !c.Ay.hasPendingUsage() ||
                        (h.A.hasLoaded(g.oD.FRECENCY_AND_FAVORITES_SETTINGS) &&
                            ((e.emojiFrecency = a.Q8.create()),
                            (e.emojiReactionFrecency = a.Q8.create()),
                            (e.emojiFrecency.emojis = (0, m.Mr)(
                                c.Ay.emojiFrecencyWithoutFetchingLatest.usageHistory,
                                100,
                            )),
                            (e.emojiReactionFrecency.emojis = (0, m.Mr)(
                                c.Ay.emojiReactionFrecencyWithoutFetchingLatest.usageHistory,
                                100,
                            ))));
                },
            }),
            _.bW.beforeSendCallbacks.push({
                hasChanges: () => u.A.hasPendingUsage() && h.A.hasLoaded(g.oD.FRECENCY_AND_FAVORITES_SETTINGS),
                processProto: (e) => {
                    !u.A.hasPendingUsage() ||
                        (h.A.hasLoaded(g.oD.FRECENCY_AND_FAVORITES_SETTINGS) &&
                            (i().isEmpty(u.A.playedSoundHistory) ||
                                ((e.playedSoundFrecency = a.kc.create()),
                                (e.playedSoundFrecency.playedSounds = (0, m.Mr)(u.A.playedSoundHistory, 100)))));
                },
            }),
            _.bW.beforeSendCallbacks.push({
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
            _.bW.beforeSendCallbacks.push({
                hasChanges: () => l.A.hasPendingUsage() && h.A.hasLoaded(g.oD.FRECENCY_AND_FAVORITES_SETTINGS),
                processProto: (e) => {
                    !l.A.hasPendingUsage() ||
                        (h.A.hasLoaded(g.oD.FRECENCY_AND_FAVORITES_SETTINGS) &&
                            ((e.applicationFrecency = a.cC.create()),
                            (e.applicationFrecency.applications = (0, m.Mr)(
                                l.A.getApplicationFrecencyWithoutLoadingLatest().usageHistory,
                                E.h2,
                            ))));
                },
            }),
            _.bW.beforeSendCallbacks.push({
                hasChanges: () => f.A.hasPendingUsage() && h.A.hasLoaded(g.oD.FRECENCY_AND_FAVORITES_SETTINGS),
                processProto: (e) => {
                    !f.A.hasPendingUsage() ||
                        (h.A.hasLoaded(g.oD.FRECENCY_AND_FAVORITES_SETTINGS) &&
                            ((e.guildAndChannelFrecency = a.F1.create()),
                            (e.guildAndChannelFrecency.guildAndChannels = (0, m.Mr)(
                                f.A.frecencyWithoutFetchingLatest.usageHistory,
                                f.D,
                            ))));
                },
            });
    }
    constructor(...e) {
        super(...e),
            b(this, "actions", {
                POST_CONNECTION_OPEN: I,
                CONNECTION_RESUMED: I,
                CONNECTION_CLOSED: C,
                APP_STATE_UPDATE: T,
            });
    }
}

function I() {
    (v = !0), R(y, !0);
}

function T(e) {
    v && "active" !== e.state && (clearTimeout(A), (A = null), N(!1));
}

function C() {
    v && (clearTimeout(A), (A = null), N(!1));
}
async function N(e) {
    R(O, !1),
        !h.A.hasLoaded(g.oD.FRECENCY_AND_FAVORITES_SETTINGS) &&
            (d.A.hasPendingUsage() ||
                c.Ay.hasPendingUsage() ||
                o.Ay.hasPendingUsage() ||
                l.A.hasPendingUsage() ||
                (f.A.hasPendingUsage() && !e)) &&
            ((0, _.cE)(), await _.bW.loadIfNecessary()),
        i().forEach(_.Df, (e) => {
            e.markDirtyIfHasPendingChange();
        });
}

function R(e, t) {
    null != A && clearTimeout(A), (A = setTimeout(() => N(t), e));
}
let w = new S();
