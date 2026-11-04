var i = n(582128),
    r = n(855986),
    a = n(965025),
    s = n(929921),
    l = n(46653),
    o = n(71393),
    d = n(495867),
    c = n(287809),
    u = n(129230),
    _ = n(652215),
    E = n(753070),
    A = n(682901),
    h = n(731854),
    f = n(792996);
function I(e) {
    return null != e.quality || null != e.guildPremiumTier;
}
function p(e) {
    return null == e.maxResolution || null == e.maxFrameRate
        ? null
        : { maxFrameRate: e.maxFrameRate, maxResolution: e.maxResolution };
}
n.d(
    t,
    {},
    {
        Bs: function (e) {
            return f.intl.formatToPlainString(f.t.Qb44XH, { fps: e });
        },
        HB: function (e) {
            if (null == e) return;
            let t = (0, E.AC)(e.maxFrameRate);
            return null == E.ZV.find((e) => e.fps === t && !I(e));
        },
        K2: function (e, t, n, i) {
            let r = E.ZV.find((i) => (null == i.preset || i.preset === e) && i.resolution === t && i.fps === n),
                a = c.default.getCurrentUser(),
                s = d.A.getGuildId(),
                l = null != s ? o.A.getGuild(s) : null;
            u.default.track(_.HAw.STREAM_SETTINGS_UPDATE, {
                user_premium_tier: a?.premiumType,
                guild_premium_tier: l?.premiumTier,
                stream_quality_user_premium_tier: r?.quality != null ? A.Kq[r.quality] : null,
                stream_quality_guild_premium_tier: r?.guildPremiumTier,
                stream_quality_preset: e,
                stream_quality_resolution: t,
                stream_quality_frame_rate: n,
                soundshare_enabled: i,
            });
        },
        ME: function (e) {
            return e.type === h.ei.SOURCE
                ? f.intl.string(f.t.XjXqzh)
                : f.intl.formatToPlainString(f.t.TEOC0I, { resolution: e.height });
        },
        N5: function (e) {
            let t = (0, r.cf)([s.A], () => s.A.getState()),
                n = (0, r.bG)([l.default], () => l.default.getId()),
                o = (0, r.bG)([d.A], () => d.A.getGuildId());
            return i.useMemo(
                () =>
                    n === e.user.id
                        ? {
                              maxFrameRate: t.fps,
                              maxResolution: (0, a.A)(
                                  "useMaxQuality",
                                  o,
                                  {
                                      height: t.resolution,
                                      width: 0,
                                      type: 0 === t.resolution ? h.ei.SOURCE : h.ei.FIXED,
                                  },
                                  t.fps,
                              ),
                          }
                        : p(e),
                [n, o, e, t],
            );
        },
        OI: function (e) {
            if (null == e) return;
            let t = e.maxResolution.type === h.ei.SOURCE ? E.on.RESOLUTION_SOURCE : e.maxResolution.height,
                n = (0, E.F0)(t);
            return (
                (0, E.AC)(e.maxFrameRate) !== E.kn.FPS_5 &&
                null == E.ZV.find((e) => e.resolution === n && e.fps !== E.kn.FPS_5 && !I(e))
            );
        },
        wz: p,
    },
);
