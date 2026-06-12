"use strict";
n.d(t, { Bs: () => I, HB: () => m, K2: () => y, ME: () => A, N5: () => S, OI: () => E, wz: () => T });
var i = n(64700),
    r = n(17928),
    s = n(929921),
    a = n(495544),
    o = n(71393),
    l = n(763827),
    u = n(287809),
    c = n(174459),
    d = n(652215),
    _ = n(753070),
    h = n(788868),
    f = n(731854),
    p = n(375708);
function E(e) {
    if (null == e) return;
    let t = e.maxResolution.type === f.ei.SOURCE ? _.on.RESOLUTION_SOURCE : e.maxResolution.height,
        n = (0, _.F0)(t);
    return (
        (0, _.AC)(e.maxFrameRate) !== _.kn.FPS_5 &&
        null == _.ZV.find((e) => e.resolution === n && e.fps !== _.kn.FPS_5 && !g(e))
    );
}
function m(e) {
    if (null == e) return;
    let t = (0, _.AC)(e.maxFrameRate);
    return null == _.ZV.find((e) => e.fps === t && !g(e));
}
function g(e) {
    return null != e.quality || null != e.guildPremiumTier;
}
function A(e) {
    return e.type === f.ei.SOURCE
        ? p.intl.string(p.t.XjXqzh)
        : p.intl.formatToPlainString(p.t.TEOC0I, { resolution: e.height });
}
function I(e) {
    return p.intl.formatToPlainString(p.t.Qb44XH, { fps: e });
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
                          type: 0 === t.resolution ? f.ei.SOURCE : f.ei.FIXED,
                      },
                  }
                : T(e),
        [n, e, t],
    );
}
function y(e, t, n, i) {
    let r = _.ZV.find((i) => (null == i.preset || i.preset === e) && i.resolution === t && i.fps === n),
        s = u.default.getCurrentUser(),
        a = l.A.getGuildId(),
        f = null != a ? o.A.getGuild(a) : null;
    c.default.track(d.HAw.STREAM_SETTINGS_UPDATE, {
        user_premium_tier: s?.premiumType,
        guild_premium_tier: f?.premiumTier,
        stream_quality_user_premium_tier: r?.quality != null ? h.Kq[r.quality] : null,
        stream_quality_guild_premium_tier: r?.guildPremiumTier,
        stream_quality_preset: e,
        stream_quality_resolution: t,
        stream_quality_frame_rate: n,
        soundshare_enabled: i,
    });
}
