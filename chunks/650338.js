n.d(t, { Bs: () => m, HB: () => f, K2: () => N, ME: () => T, N5: () => S, OI: () => I, wz: () => g });
var i = n(582128),
    r = n(17928),
    a = n(929921),
    s = n(280450),
    l = n(71393),
    o = n(763827),
    d = n(287809),
    c = n(174459),
    u = n(652215),
    _ = n(753070),
    E = n(202541),
    A = n(731854),
    h = n(375708);
function I(e) {
    if (null == e) return;
    let t = e.maxResolution.type === A.ei.SOURCE ? _.on.RESOLUTION_SOURCE : e.maxResolution.height,
        n = (0, _.F0)(t);
    return (
        (0, _.AC)(e.maxFrameRate) !== _.kn.FPS_5 &&
        null == _.ZV.find((e) => e.resolution === n && e.fps !== _.kn.FPS_5 && !p(e))
    );
}
function f(e) {
    if (null == e) return;
    let t = (0, _.AC)(e.maxFrameRate);
    return null == _.ZV.find((e) => e.fps === t && !p(e));
}
function p(e) {
    return null != e.quality || null != e.guildPremiumTier;
}
function T(e) {
    return e.type === A.ei.SOURCE
        ? h.intl.string(h.t.XjXqzh)
        : h.intl.formatToPlainString(h.t.TEOC0I, { resolution: e.height });
}
function m(e) {
    return h.intl.formatToPlainString(h.t.Qb44XH, { fps: e });
}
function g(e) {
    return null == e.maxResolution || null == e.maxFrameRate
        ? null
        : { maxFrameRate: e.maxFrameRate, maxResolution: e.maxResolution };
}
function S(e) {
    let t = (0, r.cf)([a.A], () => a.A.getState()),
        n = (0, r.bG)([s.default], () => s.default.getId());
    return i.useMemo(
        () =>
            n === e.user.id
                ? {
                      maxFrameRate: t.fps,
                      maxResolution: {
                          height: t.resolution,
                          width: 0,
                          type: 0 === t.resolution ? A.ei.SOURCE : A.ei.FIXED,
                      },
                  }
                : g(e),
        [n, e, t],
    );
}
function N(e, t, n, i) {
    let r = _.ZV.find((i) => (null == i.preset || i.preset === e) && i.resolution === t && i.fps === n),
        a = d.default.getCurrentUser(),
        s = o.A.getGuildId(),
        A = null != s ? l.A.getGuild(s) : null;
    c.default.track(u.HAw.STREAM_SETTINGS_UPDATE, {
        user_premium_tier: a?.premiumType,
        guild_premium_tier: A?.premiumTier,
        stream_quality_user_premium_tier: r?.quality != null ? E.Kq[r.quality] : null,
        stream_quality_guild_premium_tier: r?.guildPremiumTier,
        stream_quality_preset: e,
        stream_quality_resolution: t,
        stream_quality_frame_rate: n,
        soundshare_enabled: i,
    });
}
