n.d(t, {
    $w: () => E,
    Bh: () => m,
    Gx: () => y,
    TA: () => _,
    V$: () => h,
    g5: () => g,
    i7: () => b,
    rD: () => u,
    sd: () => d
});
var r = n(367907),
    i = n(592125),
    o = n(19780),
    a = n(626135),
    s = n(768581),
    l = n(678916),
    c = n(981631);
function u(e) {
    return null != e && 'object' == typeof e && 'id' in e && e.type === l.xV.BACKGROUND;
}
function d(e) {
    return 'number' == typeof e && e in l.dp;
}
function f(e) {
    return d(e) ? l.X7.includes(e) : !!u(e) && ((0, s.xR)(e.asset) || (0, s.ay)(e.asset));
}
function _(e) {
    return null != e ? 'Video Background' : 'None';
}
function p(e) {
    switch (e) {
        case l.dp.OPTION_1:
            return 'Cybercity';
        case l.dp.OPTION_2:
            return 'Discord the Movie';
        case l.dp.OPTION_3:
            return 'Wumpus Vacation';
        case l.dp.OPTION_4:
            return 'Vaporwave';
        case l.dp.OPTION_7:
            return 'Capernite Day';
        case l.dp.OPTION_8:
            return 'Capernite Night';
        case l.dp.OPTION_9:
            return 'Hacker Den';
        case l.dp.OPTION_10:
            return 'Wumpice';
    }
}
function h(e) {
    return null == e ? 'None' : u(e) ? 'Custom' : 'blur' === e ? 'Blur' : 'Preset - '.concat(p(e));
}
function m(e, t, n) {
    let s = o.Z.getGuildId(),
        l = o.Z.getChannelId(),
        u = i.Z.getChannel(l),
        d = (0, r.kO)(s, l, !0);
    a.default.track(c.rMx.VIDEO_EFFECT_UPDATED, {
        location: t,
        effect_type: _(e),
        effect_detail: h(e),
        effect_state: n,
        channel_id: l,
        channel_type: null == u ? void 0 : u.type,
        guild_id: s,
        voice_state_count: d.voice_state_count,
        video_stream_count: d.video_stream_count,
        media_session_id: o.Z.getMediaSessionId(),
        rtc_connection_id: o.Z.getRTCConnectionId(),
        is_animated: f(e)
    });
}
function g(e, t, n) {
    a.default.track(c.rMx.VIDEO_BACKGROUND_ADDED, {
        is_animated: f(e),
        is_video: t,
        is_from_tenor: n
    });
}
function E(e) {
    a.default.track(c.rMx.VIDEO_BACKGROUND_DELETED, { is_animated: f(e) });
}
function b(e) {
    return null == e
        ? { oneofKind: void 0 }
        : u(e)
          ? {
                oneofKind: 'customAsset',
                customAsset: {
                    id: e.id,
                    assetHash: e.asset
                }
            }
          : 'blur' === e
            ? {
                  oneofKind: 'blur',
                  blur: { useBlur: !0 }
              }
            : {
                  oneofKind: 'presetOption',
                  presetOption: e
              };
}
function y(e, t) {
    if (null == e || void 0 === e.oneofKind) return null;
    switch (e.oneofKind) {
        case 'customAsset':
            return {
                type: l.xV.BACKGROUND,
                id: e.customAsset.id,
                user_id: t,
                asset: e.customAsset.assetHash
            };
        case 'blur':
            return e.blur.useBlur ? 'blur' : null;
        case 'presetOption':
            return e.presetOption;
    }
}
