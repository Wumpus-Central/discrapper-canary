"use strict";
n.d(t, { A: () => c });
var r = n(64700),
    i = n(102597),
    a = n(904054),
    s = n(584014),
    o = n(253932),
    l = n(954571),
    u = n(652215);
function c(e, t) {
    let { isPlaying: n, playSound: c } = (0, s.A)(null != e ? (0, i.A)(e.soundId) : null);
    return {
        isPlaying: n,
        playSound: r.useCallback(
            () =>
                !!c({ volume: (0, a.A)(e?.volume ?? 1, o.HO.getSetting()) }) &&
                (l.default.track(u.HAw.SOUNDMOJI_PLAY, {
                    guild_id: t?.guild_id,
                    channel_id: t?.id,
                    sound_guild_id: e?.guildId,
                    sound_id: e?.soundId,
                }),
                !0),
            [t?.guild_id, t?.id, c, e?.guildId, e?.soundId, e?.volume],
        ),
    };
}
