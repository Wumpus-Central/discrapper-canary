n.d(t, { A: () => i });
var r = n(818083),
    a = n(355820);
let l = (0, r.B)({
    kind: 'user',
    id: '2025-02_custom_status_editing_without_status_selector',
    label: 'Custom Status Editing Without Status Selector',
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 1,
            label: 'Enable custom status editing without status selector',
            config: { enabled: !0 }
        }
    ]
});
function i(e) {
    let { location: t, autoTrackExposure: n = !0 } = e,
        r = (0, a.P)({
            location: t,
            autoTrackExposure: n
        }),
        { enabled: i } = l.getCurrentConfig(
            { location: t },
            {
                autoTrackExposure: n,
                disable: r
            }
        );
    return i;
}
