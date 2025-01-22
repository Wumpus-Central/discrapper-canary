r.d(n, {
    Z: function () {
        return c;
    }
});
var i = r(200651);
r(192379);
var a = r(481060),
    o = r(928518),
    s = r(776862),
    l = r(626135),
    u = r(981631);
function c(e, n) {
    let c = null != n ? n : ''.concat(u.jXE.PREMIUM_GUILD_UPSELL_MODAL);
    null != e.targetBoostedGuildTier && (c += ' - Tier '.concat(e.targetBoostedGuildTier));
    let d = () => {
        l.default.track(u.rMx.MODAL_DISMISSED, {
            type: c,
            location: e.analyticsSourceLocation
        });
    };
    l.default.track(u.rMx.OPEN_MODAL, {
        type: c,
        location: e.analyticsSourceLocation
    });
    let { openInPopoutEnabled: f, ...p } = e,
        h = o.Z.getWindowOpen(u.KJ3.CHANNEL_CALL_POPOUT) && null != f && f;
    h && (0, s.Z)(u.KJ3.CHANNEL_CALL_POPOUT);
    let _ = h ? a.POPOUT_MODAL_CONTEXT : a.DEFAULT_MODAL_CONTEXT;
    (0, a.openModalLazy)(
        async () => {
            let { default: e } = await r.e('89675').then(r.bind(r, 146747));
            return (n) =>
                (0, i.jsx)(e, {
                    ...p,
                    ...n
                });
        },
        {
            onCloseCallback: d,
            contextKey: _
        }
    );
}
