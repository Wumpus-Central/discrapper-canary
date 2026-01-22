n.d(t, {
    A: () => f,
});
var r = n(627968),
    i = n(64700),
    a = n(397927),
    s = n(688810),
    o = n(195043),
    l = n(253932),
    c = n(698723),
    u = n(531525),
    d = n(985018);

function f() {
    let e = l.uh.useSetting(),
        { analyticsLocations: t } = (0, s.Ay)(),
        n = i.useCallback(
            (e) => {
                (0, c.A)("stream_previews_disabled", e, l.uh.getSetting(), t), l.uh.updateSetting(e);
            },
            [t],
        );
    return (0, r.jsx)(o.x, {
        setting: u.H.VOICE_AND_VIDEO_STREAM_PREVIEWS,
        children: (0, r.jsx)(a.dOG, {
            label: d.intl.string(d.t["1CzWUK"]),
            description: d.intl.string(d.t.jTNPHM),
            checked: e,
            onChange: n,
        }),
    });
}
