"use strict";
n.d(t, { Bs: () => T, HB: () => g, K2: () => v, ME: () => I, N5: () => S, OI: () => m, wz: () => y });
var r = n(64700),
    i = n(311907),
    a = n(929921),
    s = n(961350),
    o = n(71393),
    l = n(383501),
    u = n(287809),
    c = n(954571),
    d = n(652215),
    _ = n(753070),
    f = n(788868),
    p = n(731854),
    h = n(985018);
function m(e) {
    if (null == e) return;
    let t = e.maxResolution.type === p.ei.SOURCE ? _.on.RESOLUTION_SOURCE : e.maxResolution.height,
        n = (0, _.F0)(t);
    return (
        (0, _.AC)(e.maxFrameRate) !== _.kn.FPS_5 &&
        null == _.ZV.find((e) => e.resolution === n && e.fps !== _.kn.FPS_5 && !E(e))
    );
}
function g(e) {
    if (null == e) return;
    let t = (0, _.AC)(e.maxFrameRate);
    return null == _.ZV.find((e) => e.fps === t && !E(e));
}
function E(e) {
    return null != e.quality || null != e.guildPremiumTier;
}
function A(e, t, n) {
    return _.ZV.find((r) => (null == r.preset || r.preset === e) && r.resolution === t && r.fps === n);
}
function I(e) {
    return e.type === p.ei.SOURCE
        ? h.intl.string(h.t.XjXqzh)
        : h.intl.formatToPlainString(h.t.TEOC0I, { resolution: e.height });
}
function T(e) {
    return h.intl.formatToPlainString(h.t.Qb44XH, { fps: e });
}
function y(e) {
    return null == e.maxResolution || null == e.maxFrameRate
        ? null
        : { maxFrameRate: e.maxFrameRate, maxResolution: e.maxResolution };
}
function S(e) {
    let t = (0, i.cf)([a.A], () => a.A.getState()),
        n = (0, i.bG)([s.default], () => s.default.getId());
    return r.useMemo(
        () =>
            n === e.user.id
                ? {
                      maxFrameRate: t.fps,
                      maxResolution: {
                          height: t.resolution,
                          width: 0,
                          type: 0 === t.resolution ? p.ei.SOURCE : p.ei.FIXED,
                      },
                  }
                : y(e),
        [n, e, t],
    );
}
function v(e, t, n) {
    let r = A(e, t, n),
        i = u.default.getCurrentUser(),
        a = l.A.getGuildId(),
        s = null != a ? o.A.getGuild(a) : null;
    c.default.track(d.HAw.STREAM_SETTINGS_UPDATE, {
        user_premium_tier: i?.premiumType,
        guild_premium_tier: s?.premiumTier,
        stream_quality_user_premium_tier: r?.quality != null ? f.Kq[r.quality] : null,
        stream_quality_guild_premium_tier: r?.guildPremiumTier,
        stream_quality_preset: e,
        stream_quality_resolution: t,
        stream_quality_frame_rate: n,
    });
}
