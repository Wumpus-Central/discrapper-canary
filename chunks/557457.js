n.d(t, {
    W3: () => I,
    Wc: () => v,
    Ye: () => S,
    bp: () => O,
    ml: () => y,
    nG: () => g,
    tR: () => m
});
var r = n(73800),
    i = n(442837),
    o = n(361291),
    a = n(314897),
    s = n(430824),
    l = n(19780),
    c = n(594174),
    u = n(626135),
    d = n(981631),
    f = n(37113),
    _ = n(474936),
    p = n(65154),
    h = n(388032);
function m(e) {
    if (null == e) return;
    let t = e.maxResolution.type === p.uA.SOURCE ? f.LY.RESOLUTION_SOURCE : e.maxResolution.height,
        n = (0, f.aW)(t);
    return (0, f.L9)(e.maxFrameRate) !== f.ws.FPS_5 && null == f.ND.find((e) => e.resolution === n && e.fps !== f.ws.FPS_5 && !E(e));
}
function g(e) {
    if (null == e) return;
    let t = (0, f.L9)(e.maxFrameRate);
    return null == f.ND.find((e) => e.fps === t && !E(e));
}
function E(e) {
    return null != e.quality || null != e.guildPremiumTier;
}
function b(e, t, n) {
    return f.ND.find((r) => (null == r.preset || r.preset === e) && r.resolution === t && r.fps === n);
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
    let t = (0, i.cj)([o.Z], () => o.Z.getState()),
        n = (0, i.e7)([a.default], () => a.default.getId());
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
function S(e, t, n) {
    let r = b(e, t, n),
        i = c.default.getCurrentUser(),
        o = l.Z.getGuildId(),
        a = null != o ? s.Z.getGuild(o) : null;
    u.default.track(d.rMx.STREAM_SETTINGS_UPDATE, {
        user_premium_tier: null == i ? void 0 : i.premiumType,
        guild_premium_tier: null == a ? void 0 : a.premiumTier,
        stream_quality_user_premium_tier: (null == r ? void 0 : r.quality) != null ? _.bg[r.quality] : null,
        stream_quality_guild_premium_tier: null == r ? void 0 : r.guildPremiumTier,
        stream_quality_preset: e,
        stream_quality_resolution: t,
        stream_quality_frame_rate: n
    });
}
