"use strict";
n.d(t, { Bs: () => p, HB: () => g, K2: () => N, ME: () => A, N5: () => S, OI: () => f, wz: () => T });
var i = n(64700),
    r = n(17928),
    s = n(929921),
    a = n(495544),
    o = n(71393),
    l = n(763827),
    _ = n(287809),
    d = n(954571),
    u = n(652215),
    c = n(753070),
    E = n(788868),
    h = n(731854),
    m = n(985018);
function f(e) {
    if (null == e) return;
    let t = e.maxResolution.type === h.ei.SOURCE ? c.on.RESOLUTION_SOURCE : e.maxResolution.height,
        n = (0, c.F0)(t);
    return (
        (0, c.AC)(e.maxFrameRate) !== c.kn.FPS_5 &&
        null == c.ZV.find((e) => e.resolution === n && e.fps !== c.kn.FPS_5 && !I(e))
    );
}
function g(e) {
    if (null == e) return;
    let t = (0, c.AC)(e.maxFrameRate);
    return null == c.ZV.find((e) => e.fps === t && !I(e));
}
function I(e) {
    return null != e.quality || null != e.guildPremiumTier;
}
function A(e) {
    return e.type === h.ei.SOURCE
        ? m.intl.string(m.t.XjXqzh)
        : m.intl.formatToPlainString(m.t.TEOC0I, { resolution: e.height });
}
function p(e) {
    return m.intl.formatToPlainString(m.t.Qb44XH, { fps: e });
}
function T(e) {
    return null == e.maxResolution || null == e.maxFrameRate
        ? null
        : { maxFrameRate: e.maxFrameRate, maxResolution: e.maxResolution };
}
function S(e) {
    let t = (0, r.cf)([s.A], () => s.A.getState()),
        n = (0, r.bG)([a.default], () => a.default.getId());
    return i.useMemo(
        () =>
            n === e.user.id
                ? {
                      maxFrameRate: t.fps,
                      maxResolution: {
                          height: t.resolution,
                          width: 0,
                          type: 0 === t.resolution ? h.ei.SOURCE : h.ei.FIXED,
                      },
                  }
                : T(e),
        [n, e, t],
    );
}
function N(e, t, n, i) {
    let r = c.ZV.find((i) => (null == i.preset || i.preset === e) && i.resolution === t && i.fps === n),
        s = _.default.getCurrentUser(),
        a = l.A.getGuildId(),
        h = null != a ? o.A.getGuild(a) : null;
    d.default.track(u.HAw.STREAM_SETTINGS_UPDATE, {
        user_premium_tier: s?.premiumType,
        guild_premium_tier: h?.premiumTier,
        stream_quality_user_premium_tier: r?.quality != null ? E.Kq[r.quality] : null,
        stream_quality_guild_premium_tier: r?.guildPremiumTier,
        stream_quality_preset: e,
        stream_quality_resolution: t,
        stream_quality_frame_rate: n,
        soundshare_enabled: i,
    });
}
