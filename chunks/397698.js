n.d(t, { Z: () => f });
var i = n(200651);
n(192379);
var r = n(481060),
    a = n(776862),
    s = n(306680),
    o = n(626135),
    l = n(499254),
    u = n(827498),
    c = n(314734),
    d = n(981631);
function f(e) {
    let { context: t, openInPopout: f, analyticsLocation: _ } = e;
    f && (0, a.Z)(d.KJ3.CHANNEL_CALL_POPOUT);
    let p = f ? r.u1M : r.z1l;
    (0, l.yT)(u.ti.DISMISSED), (0, l.__)(u._b.VOICE);
    let h = 'contextless' !== t.type && (s.ZP.hasUnread(t.channel.id) || s.ZP.getMentionCount(t.channel.id) > 0);
    return (
        o.default.track(d.rMx.VOICE_PANEL_TAB_OPENED, {
            tab: 'activities',
            location: _,
            source: u._b.VOICE,
            is_chat_badged: h
        }),
        (0, r.ZDy)(
            async () => {
                let { default: e } = await Promise.all([n.e('51269'), n.e('33862'), n.e('69057'), n.e('23919'), n.e('56887')]).then(n.bind(n, 743161));
                return (n) =>
                    (0, i.jsx)(e, {
                        context: t,
                        ...n
                    });
            },
            {
                modalKey: c.e9,
                contextKey: p
            }
        )
    );
}
