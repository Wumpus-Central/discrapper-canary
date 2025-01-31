i.d(n, {
    T: () => h,
    o: () => u
});
var l = i(512722),
    t = i.n(l),
    a = i(287734),
    s = i(471253),
    r = i(922482),
    c = i(592125),
    o = i(19780),
    d = i(765305);
async function u(e, n) {
    let { entity_type: i } = e;
    switch (i) {
        case d.WX.STAGE_INSTANCE: {
            let n = o.Z.getChannelId(),
                i = c.Z.getChannel(e.channel_id);
            t()(null != i, 'could not find channel'), n !== i.id && (await r.TM(i, !0), await r.R5(i, null, !1)), await (0, s.RK)(i, !1, !0);
            break;
        }
        case d.WX.VOICE: {
            let n = o.Z.getChannelId(),
                i = c.Z.getChannel(e.channel_id);
            t()(null != i, 'could not find channel'), n !== i.id && a.default.selectVoiceChannel(i.id);
        }
    }
}
function h(e, n) {
    let { entity_type: i } = e;
    switch (i) {
        case d.WX.STAGE_INSTANCE:
        case d.WX.VOICE:
        case d.WX.EXTERNAL:
            null == n || n();
    }
    return Promise.resolve();
}
