l.d(n, { $: () => u, c: () => h });
var t = l(284009),
    i = l.n(t),
    s = l(956793),
    a = l(849736),
    r = l(323443),
    c = l(734057),
    o = l(383501),
    d = l(988794);
async function u(e, n) {
    let { entity_type: l } = e;
    switch (l) {
        case d.Ps.STAGE_INSTANCE: {
            let n = o.A.getChannelId(),
                l = c.A.getChannel(e.channel_id);
            i()(null != l, "could not find channel"),
                n !== l.id && (await r.cy(l, !0), await r.jA(l, null)),
                await (0, a.e7)(l, !1, !0);
            break;
        }
        case d.Ps.VOICE: {
            let n = o.A.getChannelId(),
                l = c.A.getChannel(e.channel_id);
            i()(null != l, "could not find channel"), n !== l.id && s.default.selectVoiceChannel(l.id);
        }
    }
}
function h(e, n) {
    let { entity_type: l } = e;
    switch (l) {
        case d.Ps.STAGE_INSTANCE:
        case d.Ps.VOICE:
        case d.Ps.EXTERNAL:
            n?.();
    }
    return Promise.resolve();
}
