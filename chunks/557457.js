n.d(t, {
    W3: () => I,
    Wc: () => v,
    Ye: () => T,
    bp: () => O,
    ml: () => y,
    nG: () => g,
    tR: () => m
});
var r = n(73800),
    i = n(442837),
    a = n(361291),
    o = n(314897),
    s = n(430824),
    l = n(19780),
    c = n(594174),
    u = n(626135),
    d = n(981631),
    _ = n(37113),
    f = n(474936),
    p = n(65154),
    h = n(388032);
function m(e) {
    if (null == e) return;
    let t = e.maxResolution.type === p.uA.SOURCE ? _.LY.RESOLUTION_SOURCE : e.maxResolution.height,
        n = (0, _.aW)(t);
    return (0, _.L9)(e.maxFrameRate) !== _.ws.FPS_5 && null == _.ND.find((e) => e.resolution === n && e.fps !== _.ws.FPS_5 && !E(e));
}
function g(e) {
    if (null == e) return;
    let t = (0, _.L9)(e.maxFrameRate);
    return null == _.ND.find((e) => e.fps === t && !E(e));
}
function E(e) {
    return null != e.quality || null != e.guildPremiumTier;
}
function b(e, t, n) {
    return _.ND.find((r) => (null == r.preset || r.preset === e) && r.resolution === t && r.fps === n);
}
function y(e) {
    return e.type === p.uA.SOURCE ? h.intl.string(h.t.XjXqzs) : h.intl.formatToPlainString(h.t.TEOC0N, { resolution: e.height });
}
function O(e) {
    return h.intl.formatToPlainString(h.t.Qb44XF, { fps: e });
}
function v(e) {
    return null == e.maxResolution || null == e.maxFrameRate
        ? null
        : {
              maxFrameRate: e.maxFrameRate,
              maxResolution: e.maxResolution
          };
}
function I(e) {
    let t = (0, i.cj)([a.Z], () => a.Z.getState()),
        n = (0, i.e7)([o.default], () => o.default.getId());
    return r.useMemo(
        () =>
            n === e.user.id
                ? {
                      maxFrameRate: t.fps,
                      maxResolution: {
                          height: t.resolution,
                          width: 0,
                          type: 0 === t.resolution ? p.uA.SOURCE : p.uA.FIXED
                      }
                  }
                : v(e),
        [n, e, t]
    );
}
function T(e, t, n) {
    let r = b(e, t, n),
        i = c.default.getCurrentUser(),
        a = l.Z.getGuildId(),
        o = null != a ? s.Z.getGuild(a) : null;
    u.default.track(d.rMx.STREAM_SETTINGS_UPDATE, {
        user_premium_tier: null == i ? void 0 : i.premiumType,
        guild_premium_tier: null == o ? void 0 : o.premiumTier,
        stream_quality_user_premium_tier: (null == r ? void 0 : r.quality) != null ? f.bg[r.quality] : null,
        stream_quality_guild_premium_tier: null == r ? void 0 : r.guildPremiumTier,
        stream_quality_preset: e,
        stream_quality_resolution: t,
        stream_quality_frame_rate: n
    });
}
