t.d(n, { $: () => u, c: () => h });
var l = t(284009),
    i = t.n(l),
    s = t(956793),
    a = t(849736),
    r = t(323443),
    c = t(734057),
    o = t(383501),
    d = t(988794);
async function u(e, n) {
    let { entity_type: t } = e;
    switch (t) {
        case d.Ps.STAGE_INSTANCE: {
            let n = o.A.getChannelId(),
                t = c.A.getChannel(e.channel_id);
            i()(null != t, "could not find channel"),
                n !== t.id && (await r.cy(t, !0), await r.jA(t, null)),
                await (0, a.e7)(t, !1, !0);
            break;
        }
        case d.Ps.VOICE: {
            let n = o.A.getChannelId(),
                t = c.A.getChannel(e.channel_id);
            i()(null != t, "could not find channel"), n !== t.id && s.default.selectVoiceChannel(t.id);
        }
    }
}
function h(e, n) {
    let { entity_type: t } = e;
    switch (t) {
        case d.Ps.STAGE_INSTANCE:
        case d.Ps.VOICE:
        case d.Ps.EXTERNAL:
            n?.();
    }
    return Promise.resolve();
}
