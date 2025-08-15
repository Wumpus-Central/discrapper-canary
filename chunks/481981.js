n.d(t, { m: () => o });
var r = n(818083),
    i = n(480218);
let a = (0, r.B)({
    id: "2025-08_resumable_attachment_uploads_v2",
    kind: "user",
    label: "Resumable mobile attachment uploads",
    defaultConfig: { enableResumableUploads: !1 },
    treatments: [
        {
            id: 0,
            label: "Control",
            config: { enableResumableUploads: !1 },
        },
        {
            id: 1,
            label: "Resumable Uploads Enabled",
            config: { enableResumableUploads: !0 },
        },
    ],
});
function o(e) {
    let { location: t } = e,
        { isInHoldout: n } = i._.getCurrentConfig({ location: t }, { autoTrackExposure: !0 });
    return a.getCurrentConfig(
        { location: t },
        {
            disable: n,
            autoTrackExposure: !0,
        },
    );
}
