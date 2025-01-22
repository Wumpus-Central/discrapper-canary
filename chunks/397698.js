n.d(t, {
    Z: function () {
        return m;
    }
});
var i = n(200651);
n(192379);
var r = n(481060),
    l = n(776862),
    a = n(306680),
    o = n(626135),
    s = n(499254),
    c = n(827498),
    u = n(314734),
    d = n(981631);
function m(e) {
    let { channel: t, openInPopout: m, analyticsLocation: h } = e;
    m && (0, l.Z)(d.KJ3.CHANNEL_CALL_POPOUT);
    let f = m ? r.POPOUT_MODAL_CONTEXT : r.DEFAULT_MODAL_CONTEXT;
    (0, s.yT)(c.ti.DISMISSED), (0, s.__)(c._b.VOICE);
    let p = t.id,
        _ = a.ZP.hasUnread(p) || a.ZP.getMentionCount(p) > 0;
    return (
        o.default.track(d.rMx.VOICE_PANEL_TAB_OPENED, {
            tab: 'activities',
            location: h,
            source: c._b.VOICE,
            is_chat_badged: _
        }),
        (0, r.openModalLazy)(
            async () => {
                let { default: e } = await Promise.all([n.e('33862'), n.e('69057'), n.e('90225'), n.e('31740')]).then(n.bind(n, 743161));
                return (n) =>
                    (0, i.jsx)(e, {
                        channel: t,
                        ...n
                    });
            },
            {
                modalKey: u.e9,
                contextKey: f
            }
        )
    );
}
