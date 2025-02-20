i.d(n, {
    T: () => h,
    o: () => d
});
var t = i(512722),
    l = i.n(t),
    a = i(287734),
    r = i(471253),
    s = i(922482),
    c = i(592125),
    o = i(19780),
    u = i(765305);
async function d(e, n) {
    let { entity_type: i } = e;
    switch (i) {
        case u.WX.STAGE_INSTANCE: {
            let n = o.Z.getChannelId(),
                i = c.Z.getChannel(e.channel_id);
            l()(null != i, 'could not find channel'), n !== i.id && (await s.TM(i, !0), await s.R5(i, null, !1)), await (0, r.RK)(i, !1, !0);
            break;
        }
        case u.WX.VOICE: {
            let n = o.Z.getChannelId(),
                i = c.Z.getChannel(e.channel_id);
            l()(null != i, 'could not find channel'), n !== i.id && a.default.selectVoiceChannel(i.id);
        }
    }
}
function h(e, n) {
    let { entity_type: i } = e;
    switch (i) {
        case u.WX.STAGE_INSTANCE:
        case u.WX.VOICE:
        case u.WX.EXTERNAL:
            null == n || n();
    }
    return Promise.resolve();
}
