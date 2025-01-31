n.d(t, {
    Wc: () => E,
    Ye: () => v,
    bp: () => g,
    ml: () => m,
    nG: () => _,
    tR: () => f
});
var i = n(430824),
    r = n(19780),
    a = n(594174),
    s = n(626135),
    o = n(981631),
    l = n(37113),
    u = n(474936),
    c = n(65154),
    d = n(388032);
function f(e) {
    if (null == e) return;
    let t = e.maxResolution.type === c.uA.SOURCE ? l.LY.RESOLUTION_SOURCE : e.maxResolution.height,
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
    return l.ND.find((i) => (null == i.preset || i.preset === e) && i.resolution === t && i.fps === n);
}
function m(e) {
    return e.type === c.uA.SOURCE ? d.intl.string(d.t.XjXqzs) : d.intl.formatToPlainString(d.t.TEOC0N, { resolution: e.height });
}
function g(e) {
    return d.intl.formatToPlainString(d.t.Qb44XF, { fps: e });
}
function E(e) {
    return null == e.maxResolution || null == e.maxFrameRate
        ? null
        : {
              maxFrameRate: e.maxFrameRate,
              maxResolution: e.maxResolution
          };
}
function v(e, t, n) {
    let l = h(e, t, n),
        c = a.default.getCurrentUser(),
        d = r.Z.getGuildId(),
        f = null != d ? i.Z.getGuild(d) : null;
    s.default.track(o.rMx.STREAM_SETTINGS_UPDATE, {
        user_premium_tier: null == c ? void 0 : c.premiumType,
        guild_premium_tier: null == f ? void 0 : f.premiumTier,
        stream_quality_user_premium_tier: (null == l ? void 0 : l.quality) != null ? u.bg[l.quality] : null,
        stream_quality_guild_premium_tier: null == l ? void 0 : l.guildPremiumTier,
        stream_quality_preset: e,
        stream_quality_resolution: t,
        stream_quality_frame_rate: n
    });
}
