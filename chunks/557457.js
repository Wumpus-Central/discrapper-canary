n.d(t, {
    Wc: () => E,
    Ye: () => b,
    bp: () => g,
    ml: () => m,
    nG: () => _,
    tR: () => f
});
var r = n(430824),
    i = n(19780),
    o = n(594174),
    a = n(626135),
    s = n(981631),
    l = n(37113),
    c = n(474936),
    u = n(65154),
    d = n(388032);
function f(e) {
    if (null == e) return;
    let t = e.maxResolution.type === u.uA.SOURCE ? l.LY.RESOLUTION_SOURCE : e.maxResolution.height,
        n = (0, l.aW)(t);
    return (0, l.L9)(e.maxFrameRate) !== l.ws.FPS_5 && null == l.ND.find((e) => e.resolution === n && e.fps !== l.ws.FPS_5 && !p(e));
}
function _(e) {
    if (null == e) return;
    let t = (0, l.L9)(e.maxFrameRate);
    return null == l.ND.find((e) => e.fps === t && !p(e));
}
function p(e) {
    return null != e.quality || null != e.guildPremiumTier;
}
function h(e, t, n) {
    return l.ND.find((r) => (null == r.preset || r.preset === e) && r.resolution === t && r.fps === n);
}
function m(e) {
    return e.type === u.uA.SOURCE ? d.NW.string(d.t.XjXqzs) : d.NW.formatToPlainString(d.t.TEOC0N, { resolution: e.height });
}
function g(e) {
    return d.NW.formatToPlainString(d.t.Qb44XF, { fps: e });
}
function E(e) {
    return null == e.maxResolution || null == e.maxFrameRate
        ? null
        : {
              maxFrameRate: e.maxFrameRate,
              maxResolution: e.maxResolution
          };
}
function b(e, t, n) {
    let l = h(e, t, n),
        u = o.default.getCurrentUser(),
        d = i.Z.getGuildId(),
        f = null != d ? r.Z.getGuild(d) : null;
    a.default.track(s.rMx.STREAM_SETTINGS_UPDATE, {
        user_premium_tier: null == u ? void 0 : u.premiumType,
        guild_premium_tier: null == f ? void 0 : f.premiumTier,
        stream_quality_user_premium_tier: (null == l ? void 0 : l.quality) != null ? c.bg[l.quality] : null,
        stream_quality_guild_premium_tier: null == l ? void 0 : l.guildPremiumTier,
        stream_quality_preset: e,
        stream_quality_resolution: t,
        stream_quality_frame_rate: n
    });
}
