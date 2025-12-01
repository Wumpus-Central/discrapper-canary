n.d(t, {
    W3: () => S,
    Wc: () => v,
    Ye: () => I,
    bp: () => O,
    ml: () => y,
    nG: () => g,
    tR: () => h,
});
var r = n(473749),
    i = n(442837),
    a = n(361291),
    o = n(314897),
    s = n(430824),
    l = n(19780),
    c = n(594174),
    u = n(626135),
    d = n(981631),
    f = n(37113),
    p = n(474936),
    _ = n(65154),
    m = n(388032);
function h(e) {
    if (null == e) return;
    let t =
            e.maxResolution.type === _.uA.SOURCE
                ? f.ApplicationStreamResolutions.RESOLUTION_SOURCE
                : e.maxResolution.height,
        n = (0, f.aW)(t);
    return (
        (0, f.L9)(e.maxFrameRate) !== f.ApplicationStreamFPS.FPS_5 &&
        null == f.ND.find((e) => e.resolution === n && e.fps !== f.ApplicationStreamFPS.FPS_5 && !E(e))
    );
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
    return e.type === _.uA.SOURCE
        ? m.intl.string(m.t.XjXqzh)
        : m.intl.formatToPlainString(m.t.TEOC0I, { resolution: e.height });
}
function O(e) {
    return m.intl.formatToPlainString(m.t.Qb44XH, { fps: e });
}
function v(e) {
    return null == e.maxResolution || null == e.maxFrameRate
        ? null
        : {
              maxFrameRate: e.maxFrameRate,
              maxResolution: e.maxResolution,
          };
}
function S(e) {
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
                          type: 0 === t.resolution ? _.uA.SOURCE : _.uA.FIXED,
                      },
                  }
                : v(e),
        [n, e, t],
    );
}
function I(e, t, n) {
    let r = b(e, t, n),
        i = c.default.getCurrentUser(),
        a = l.Z.getGuildId(),
        o = null != a ? s.Z.getGuild(a) : null;
    u.default.track(d.rMx.STREAM_SETTINGS_UPDATE, {
        user_premium_tier: null == i ? void 0 : i.premiumType,
        guild_premium_tier: null == o ? void 0 : o.premiumTier,
        stream_quality_user_premium_tier: (null == r ? void 0 : r.quality) != null ? p.bg[r.quality] : null,
        stream_quality_guild_premium_tier: null == r ? void 0 : r.guildPremiumTier,
        stream_quality_preset: e,
        stream_quality_resolution: t,
        stream_quality_frame_rate: n,
    });
}
