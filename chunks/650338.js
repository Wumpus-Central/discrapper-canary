"use strict";
n.d(t, { Bs: () => I, HB: () => m, K2: () => y, ME: () => A, N5: () => S, OI: () => p, wz: () => T });
var r = n(64700),
    i = n(311907),
    s = n(929921),
    a = n(961350),
    o = n(71393),
    l = n(383501),
    u = n(287809),
    d = n(954571),
    c = n(652215),
    _ = n(753070),
    f = n(788868),
    E = n(731854),
    h = n(985018);
function p(e) {
    if (null == e) return;
    let t = e.maxResolution.type === E.ei.SOURCE ? _.on.RESOLUTION_SOURCE : e.maxResolution.height,
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
    return e.type === E.ei.SOURCE
        ? h.intl.string(h.t.XjXqzh)
        : h.intl.formatToPlainString(h.t.TEOC0I, { resolution: e.height });
}
function I(e) {
    return h.intl.formatToPlainString(h.t.Qb44XH, { fps: e });
}
function T(e) {
    return null == e.maxResolution || null == e.maxFrameRate
        ? null
        : { maxFrameRate: e.maxFrameRate, maxResolution: e.maxResolution };
}
function S(e) {
    let t = (0, i.cf)([s.A], () => s.A.getState()),
        n = (0, i.bG)([a.default], () => a.default.getId());
    return r.useMemo(
        () =>
            n === e.user.id
                ? {
                      maxFrameRate: t.fps,
                      maxResolution: {
                          height: t.resolution,
                          width: 0,
                          type: 0 === t.resolution ? E.ei.SOURCE : E.ei.FIXED,
                      },
                  }
                : T(e),
        [n, e, t],
    );
}
function y(e, t, n) {
    let r = _.ZV.find((r) => (null == r.preset || r.preset === e) && r.resolution === t && r.fps === n),
        i = u.default.getCurrentUser(),
        s = l.A.getGuildId(),
        a = null != s ? o.A.getGuild(s) : null;
    d.default.track(c.HAw.STREAM_SETTINGS_UPDATE, {
        user_premium_tier: i?.premiumType,
        guild_premium_tier: a?.premiumTier,
        stream_quality_user_premium_tier: r?.quality != null ? f.Kq[r.quality] : null,
        stream_quality_guild_premium_tier: r?.guildPremiumTier,
        stream_quality_preset: e,
        stream_quality_resolution: t,
        stream_quality_frame_rate: n,
    });
}
