n.d(t, {
    Z: function () {
        return u;
    }
});
var i = n(200651);
n(192379);
var r = n(481060),
    l = n(424602),
    a = n(397698),
    o = n(776862),
    s = n(701488),
    c = n(981631);
function u(e) {
    let { channel: t, guildId: u, locationObject: d, openInPopout: m, initialSelectedApplicationId: h, initialSlide: f = s.ag.DIRECTORY, enableSelectedTextChannelInvite: p = !1, analyticsLocations: _, opensAppLauncherModal: g = !1 } = e,
        E = _.length > 0 ? _[_.length - 1] : 'open-activity-shelf',
        { enabled: C } = l.m1.getCurrentConfig({ location: E }, { autoTrackExposure: !1 });
    if (g && C) {
        null != t &&
            (0, a.Z)({
                openInPopout: m,
                channel: t,
                analyticsLocation: E
            });
        return;
    }
    m && (0, o.Z)(c.KJ3.CHANNEL_CALL_POPOUT);
    let I = m ? r.POPOUT_MODAL_CONTEXT : r.DEFAULT_MODAL_CONTEXT;
    return (0, r.openModalLazy)(
        async () => {
            let { default: e } = await Promise.all([n.e('69057'), n.e('89754')]).then(n.bind(n, 471840));
            return (n) =>
                (0, i.jsx)(e, {
                    ...n,
                    channel: t,
                    guildId: u,
                    locationObject: d,
                    initialSlide: f,
                    initialSelectedApplicationId: h,
                    enableSelectedTextChannelInvite: p,
                    analyticsLocations: _
                });
        },
        {
            modalKey: s.AC,
            contextKey: I
        }
    );
}
