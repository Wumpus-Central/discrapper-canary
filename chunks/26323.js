n.d(t, { Z: () => u });
var i = n(200651);
n(192379);
var r = n(481060),
    a = n(928518),
    s = n(776862),
    o = n(626135),
    l = n(981631);
function u(e, t) {
    let u = null != t ? t : ''.concat(l.jXE.PREMIUM_GUILD_UPSELL_MODAL);
    null != e.targetBoostedGuildTier && (u += ' - Tier '.concat(e.targetBoostedGuildTier));
    let c = () => {
        o.default.track(l.rMx.MODAL_DISMISSED, {
            type: u,
            location: e.analyticsSourceLocation
        });
    };
    o.default.track(l.rMx.OPEN_MODAL, {
        type: u,
        location: e.analyticsSourceLocation
    });
    let { openInPopoutEnabled: d, ...f } = e,
        _ = a.Z.getWindowOpen(l.KJ3.CHANNEL_CALL_POPOUT) && null != d && d;
    _ && (0, s.Z)(l.KJ3.CHANNEL_CALL_POPOUT);
    let p = _ ? r.u1M : r.z1l;
    (0, r.ZDy)(
        async () => {
            let { default: e } = await n.e('89675').then(n.bind(n, 146747));
            return (t) =>
                (0, i.jsx)(e, {
                    ...f,
                    ...t
                });
        },
        {
            onCloseCallback: c,
            contextKey: p
        }
    );
}
