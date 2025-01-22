r.d(n, {
    $w: function () {
        return v;
    },
    Bh: function () {
        return g;
    },
    Gx: function () {
        return b;
    },
    TA: function () {
        return h;
    },
    V$: function () {
        return m;
    },
    g5: function () {
        return E;
    },
    i7: function () {
        return y;
    },
    rD: function () {
        return d;
    },
    sd: function () {
        return f;
    }
});
var i = r(367907),
    a = r(592125),
    o = r(19780),
    s = r(626135),
    l = r(768581),
    u = r(678916),
    c = r(981631);
function d(e) {
    return null != e && 'object' == typeof e && 'id' in e && e.type === u.xV.BACKGROUND;
}
function f(e) {
    return 'number' == typeof e && e in u.dp;
}
function p(e) {
    return f(e) ? u.X7.includes(e) : !!d(e) && ((0, l.xR)(e.asset) || (0, l.ay)(e.asset));
}
function h(e) {
    return null != e ? 'Video Background' : 'None';
}
function _(e) {
    switch (e) {
        case u.dp.OPTION_1:
            return 'Cybercity';
        case u.dp.OPTION_2:
            return 'Discord the Movie';
        case u.dp.OPTION_3:
            return 'Wumpus Vacation';
        case u.dp.OPTION_4:
            return 'Vaporwave';
        case u.dp.OPTION_7:
            return 'Capernite Day';
        case u.dp.OPTION_8:
            return 'Capernite Night';
        case u.dp.OPTION_9:
            return 'Hacker Den';
        case u.dp.OPTION_10:
            return 'Wumpice';
    }
}
function m(e) {
    if (null == e) return 'None';
    if (d(e)) return 'Custom';
    if ('blur' === e) return 'Blur';
    else return 'Preset - '.concat(_(e));
}
function g(e, n, r) {
    let l = o.Z.getGuildId(),
        u = o.Z.getChannelId(),
        d = a.Z.getChannel(u),
        f = (0, i.kO)(l, u, !0);
    s.default.track(c.rMx.VIDEO_EFFECT_UPDATED, {
        location: n,
        effect_type: h(e),
        effect_detail: m(e),
        effect_state: r,
        channel_id: u,
        channel_type: null == d ? void 0 : d.type,
        guild_id: l,
        voice_state_count: f.voice_state_count,
        video_stream_count: f.video_stream_count,
        media_session_id: o.Z.getMediaSessionId(),
        rtc_connection_id: o.Z.getRTCConnectionId(),
        is_animated: p(e)
    });
}
function E(e, n, r) {
    s.default.track(c.rMx.VIDEO_BACKGROUND_ADDED, {
        is_animated: p(e),
        is_video: n,
        is_from_tenor: r
    });
}
function v(e) {
    s.default.track(c.rMx.VIDEO_BACKGROUND_DELETED, { is_animated: p(e) });
}
function y(e) {
    if (null == e) return { oneofKind: void 0 };
    if (d(e))
        return {
            oneofKind: 'customAsset',
            customAsset: {
                id: e.id,
                assetHash: e.asset
            }
        };
    if ('blur' === e)
        return {
            oneofKind: 'blur',
            blur: { useBlur: !0 }
        };
    else
        return {
            oneofKind: 'presetOption',
            presetOption: e
        };
}
function b(e, n) {
    if (null == e || void 0 === e.oneofKind) return null;
    switch (e.oneofKind) {
        case 'customAsset':
            return {
                type: u.xV.BACKGROUND,
                id: e.customAsset.id,
                user_id: n,
                asset: e.customAsset.assetHash
            };
        case 'blur':
            return e.blur.useBlur ? 'blur' : null;
        case 'presetOption':
            return e.presetOption;
    }
}
