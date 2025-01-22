r.d(n, {
    Wc: function () {
        return v;
    },
    Ye: function () {
        return y;
    },
    bp: function () {
        return E;
    },
    ml: function () {
        return g;
    },
    nG: function () {
        return h;
    },
    tR: function () {
        return p;
    }
});
var i = r(430824),
    a = r(19780),
    o = r(594174),
    s = r(626135),
    l = r(981631),
    u = r(37113),
    c = r(474936),
    d = r(65154),
    f = r(388032);
function p(e) {
    if (null == e) return;
    let n = e.maxResolution.type === d.uA.SOURCE ? u.LY.RESOLUTION_SOURCE : e.maxResolution.height,
        r = (0, u.aW)(n);
    return (0, u.L9)(e.maxFrameRate) !== u.ws.FPS_5 && null == u.ND.find((e) => e.resolution === r && e.fps !== u.ws.FPS_5 && !_(e));
}
function h(e) {
    if (null == e) return;
    let n = (0, u.L9)(e.maxFrameRate);
    return null == u.ND.find((e) => e.fps === n && !_(e));
}
function _(e) {
    return null != e.quality || null != e.guildPremiumTier;
}
function m(e, n, r) {
    return u.ND.find((i) => (null == i.preset || i.preset === e) && i.resolution === n && i.fps === r);
}
function g(e) {
    return e.type === d.uA.SOURCE ? f.intl.string(f.t.XjXqzs) : f.intl.formatToPlainString(f.t.TEOC0N, { resolution: e.height });
}
function E(e) {
    return f.intl.formatToPlainString(f.t.Qb44XF, { fps: e });
}
function v(e) {
    return null == e.maxResolution || null == e.maxFrameRate
        ? null
        : {
              maxFrameRate: e.maxFrameRate,
              maxResolution: e.maxResolution
          };
}
function y(e, n, r) {
    let u = m(e, n, r),
        d = o.default.getCurrentUser(),
        f = a.Z.getGuildId(),
        p = null != f ? i.Z.getGuild(f) : null;
    s.default.track(l.rMx.STREAM_SETTINGS_UPDATE, {
        user_premium_tier: null == d ? void 0 : d.premiumType,
        guild_premium_tier: null == p ? void 0 : p.premiumTier,
        stream_quality_user_premium_tier: (null == u ? void 0 : u.quality) != null ? c.bg[u.quality] : null,
        stream_quality_guild_premium_tier: null == u ? void 0 : u.guildPremiumTier,
        stream_quality_preset: e,
        stream_quality_resolution: n,
        stream_quality_frame_rate: r
    });
}
