n.d(t, { Z: () => d });
var i = n(200651);
n(192379);
var l = n(481060),
    a = n(424602),
    r = n(397698),
    s = n(776862),
    o = n(701488),
    c = n(981631);
function d(e) {
    let { channel: t, guildId: d, locationObject: u, openInPopout: m, initialSelectedApplicationId: _, initialSlide: h = o.ag.DIRECTORY, enableSelectedTextChannelInvite: p = !1, analyticsLocations: g, opensAppLauncherModal: f = !1 } = e,
        x = g.length > 0 ? g[g.length - 1] : 'open-activity-shelf',
        { enabled: C } = a.m1.getCurrentConfig({ location: x }, { autoTrackExposure: !1 });
    if (f && C) {
        (0, r.Z)({
            openInPopout: m,
            context:
                null != t
                    ? {
                          type: 'channel',
                          channel: t
                      }
                    : { type: 'contextless' },
            analyticsLocation: x
        });
        return;
    }
    m && (0, s.Z)(c.KJ3.CHANNEL_CALL_POPOUT);
    let v = m ? l.u1M : l.z1l;
    return (0, l.ZDy)(
        async () => {
            let { default: e } = await Promise.all([n.e('69057'), n.e('85122')]).then(n.bind(n, 471840));
            return (n) =>
                (0, i.jsx)(e, {
                    ...n,
                    channel: t,
                    guildId: d,
                    locationObject: u,
                    initialSlide: h,
                    initialSelectedApplicationId: _,
                    enableSelectedTextChannelInvite: p,
                    analyticsLocations: g
                });
        },
        {
            modalKey: o.AC,
            contextKey: v
        }
    );
}
