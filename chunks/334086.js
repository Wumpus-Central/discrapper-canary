t.d(n, {
    $: () => d,
    c: () => h,
});
var l = t(284009),
    i = t.n(l),
    s = t(956793),
    r = t(849736),
    a = t(323443),
    c = t(734057),
    o = t(383501),
    u = t(988794);
async function d(e, n) {
    let { entity_type: t } = e;
    switch (t) {
        case u.Ps.STAGE_INSTANCE: {
            let n = o.A.getChannelId(),
                t = c.A.getChannel(e.channel_id);
            i()(null != t, "could not find channel"),
                n !== t.id && (await a.cy(t, !0), await a.jA(t, null)),
                await (0, r.e7)(t, !1, !0);
            break;
        }
        case u.Ps.VOICE: {
            let n = o.A.getChannelId(),
                t = c.A.getChannel(e.channel_id);
            i()(null != t, "could not find channel"), n !== t.id && s.default.selectVoiceChannel(t.id);
        }
    }
}
function h(e, n) {
    let { entity_type: t } = e;
    switch (t) {
        case u.Ps.STAGE_INSTANCE:
        case u.Ps.VOICE:
        case u.Ps.EXTERNAL:
            null == n || n();
    }
    return Promise.resolve();
}
