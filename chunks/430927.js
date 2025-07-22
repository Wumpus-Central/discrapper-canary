t.d(n, {
    T: () => h,
    o: () => d
});
var i = t(512722),
    l = t.n(i),
    r = t(287734),
    a = t(471253),
    s = t(922482),
    c = t(592125),
    o = t(19780),
    u = t(765305);
async function d(e, n) {
    let { entity_type: t } = e;
    switch (t) {
        case u.WX.STAGE_INSTANCE: {
            let n = o.Z.getChannelId(),
                t = c.Z.getChannel(e.channel_id);
            (l()(null != t, 'could not find channel'), n !== t.id && (await s.TM(t, !0), await s.R5(t, null, !1)), await (0, a.RK)(t, !1, !0));
            break;
        }
        case u.WX.VOICE: {
            let n = o.Z.getChannelId(),
                t = c.Z.getChannel(e.channel_id);
            (l()(null != t, 'could not find channel'), n !== t.id && r.default.selectVoiceChannel(t.id));
        }
    }
}
function h(e, n) {
    let { entity_type: t } = e;
    switch (t) {
        case u.WX.STAGE_INSTANCE:
        case u.WX.VOICE:
        case u.WX.EXTERNAL:
            null == n || n();
    }
    return Promise.resolve();
}
