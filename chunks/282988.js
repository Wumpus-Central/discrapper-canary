a.d(t, { UE: () => c.UE, UQ: () => c.UQ, _A: () => h });
var i = a(540185),
    n = a(691540),
    l = a(857250),
    s = a(97483),
    r = a(655180),
    o = a(195880),
    d = a(958805),
    u = a(735321),
    c = a(219222),
    m = a(518477),
    p = a(696016),
    g = a(375708);
function h(e, t) {
    if ((0, c.$Q)(e.id)) return null;
    if (null == e.applicationId) return ((0, n.P0)((0, l.o)(g.intl.string(g.t.xcLXWy), s.Ck.FAILURE)), null);
    let a = (0, o.m)(),
        i = new AbortController();
    return ((0, c.JC)(a, i), (0, c.nE)(a, { status: "exporting", clip: e }), v(e, a, e.applicationId, i, t), a);
}
async function v(e, t, a, o, h) {
    let { analyticsLocations: v, source: f, trackEditAction: x } = h,
        E = "exporting";
    try {
        let n = await (0, r.VO)(e, { analyticsLocations: v });
        if (o.signal.aborted) return;
        ((E = "uploading"), (0, c.nE)(t, { status: "uploading", clip: e, progress: 0 }));
        let l = new File([n], "clip.mp4", { type: "video/mp4" }),
            s = await d.A.uploadWidgetClip(l, { onProgress: (e) => (0, c.Eo)(t, e), signal: o.signal });
        ((0, c.nE)(t, { status: "uploaded", clip: e, uploadFilename: s }),
            (0, u.XW)({ status: "pending", id: t, localClipId: e.id, gameId: a, title: e.name, uploadFilename: s }),
            x({
                action: f === m.IE.PICKER ? "CLIP_ADDED_FROM_PICKER" : "CLIP_ADDED_FROM_SUGGESTED",
                widgetEdited: i.x.CLIPS_GALLERY,
                gameId: a,
            }));
    } catch (e) {
        if (o.signal.aborted) return;
        ((0, c.UE)(t),
            p.nx.error("Failed to upload a clip for the clips gallery widget", e),
            (0, n.P0)((0, l.o)(g.intl.string(g.t.iufib1), s.Ck.FAILURE)),
            x({
                action: "exporting" === E ? "CLIP_EXPORT_FAILED" : "CLIP_UPLOAD_FAILED",
                widgetEdited: i.x.CLIPS_GALLERY,
                gameId: a,
            }));
    } finally {
        (0, c.ox)(t);
    }
}
