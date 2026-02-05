n.d(t, { A: () => m });
var i = n(627968);
n(64700);
var s = n(311907),
    r = n(397927),
    a = n(670470),
    l = n(253932),
    o = n(430452),
    c = n(274372),
    d = n(915618),
    u = n(399925),
    _ = n(985018);
function m() {
    let e = l.Q$.useSetting(),
        { enableViewerClipping: t } = a.A.useExperiment({ location: "Clips Settings" }, { autoTrackExposure: !1 }),
        { viewerClipsEnabled: n } = (0, s.cf)([c.A], () => c.A.getSettings()),
        m = (0, d.A)(o.A);
    return (0, i.jsxs)(r.lVW, {
        children: [
            (0, i.jsx)(r.dOG, {
                label: _.intl.string(_.t.AGDDkH),
                description: _.intl.string(_.t["wW9/zQ"]),
                checked: e,
                onChange: (e) => u.eQ({ allowVoiceRecording: e }),
            }),
            t &&
                m &&
                (0, i.jsx)(r.dOG, {
                    label: _.intl.string(_.t.NWw7kY),
                    description: _.intl.string(_.t["0vjy8N"]),
                    checked: n,
                    onChange: (e) => u.Wn({ enabled: e, trackAnalytics: !0 }),
                }),
        ],
    });
}
