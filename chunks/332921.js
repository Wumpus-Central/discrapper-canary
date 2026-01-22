n.d(t, {
    A: () => p,
});
var r = n(627968);
n(64700);
var i = n(311907),
    a = n(397927),
    s = n(670470),
    o = n(253932),
    l = n(430452),
    c = n(274372),
    u = n(915618),
    d = n(399925),
    f = n(985018);

function p() {
    let e = o.Q$.useSetting(),
        { enableViewerClipping: t } = s.A.useExperiment(
            {
                location: "Clips Settings",
            },
            {
                autoTrackExposure: !1,
            },
        ),
        { viewerClipsEnabled: n } = (0, i.cf)([c.A], () => c.A.getSettings()),
        p = (0, u.A)(l.A);
    return (0, r.jsxs)(a.lVW, {
        children: [
            (0, r.jsx)(a.dOG, {
                label: f.intl.string(f.t.AGDDkH),
                description: f.intl.string(f.t["wW9/zQ"]),
                checked: e,
                onChange: (e) =>
                    d.eQ({
                        allowVoiceRecording: e,
                    }),
            }),
            t &&
                p &&
                (0, r.jsx)(a.dOG, {
                    label: f.intl.string(f.t.NWw7kY),
                    description: f.intl.string(f.t["0vjy8N"]),
                    checked: n,
                    onChange: (e) =>
                        d.Wn({
                            enabled: e,
                            trackAnalytics: !0,
                        }),
                }),
        ],
    });
}
