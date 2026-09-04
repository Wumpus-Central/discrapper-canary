a.d(t, { UE: () => c.UE, UQ: () => c.UQ, _A: () => m });
var i = a(691540),
    l = a(857250),
    n = a(97483),
    s = a(655180),
    r = a(195880),
    o = a(958805),
    d = a(735321),
    c = a(219222),
    u = a(696016),
    p = a(375708);
async function m(e, t) {
    if ((0, c.qc)(e.id)) return;
    if (null == e.applicationId) return void (0, i.P0)((0, l.o)(p.intl.string(p.t.xcLXWy), n.Ck.FAILURE));
    let a = new AbortController();
    (0, c.JC)(e.id, a), (0, c.nE)(e.id, { status: "exporting", clip: e });
    try {
        let i = await (0, s.VO)(e, { analyticsLocations: t });
        if (a.signal.aborted) return;
        (0, c.nE)(e.id, { status: "uploading", clip: e, progress: 0 });
        let l = new File([i], "clip.mp4", { type: "video/mp4" }),
            n = await o.A.uploadWidgetClip(l, { onProgress: (t) => (0, c.Eo)(e.id, t), signal: a.signal });
        (0, c.nE)(e.id, { status: "uploaded", clip: e, uploadFilename: n }),
            (0, d.XW)({
                status: "pending",
                id: (0, r.m)(),
                localClipId: e.id,
                gameId: e.applicationId,
                title: e.name,
                uploadFilename: n,
            });
    } catch (t) {
        if (a.signal.aborted) return;
        (0, c.UE)(e.id),
            u.nx.error("Failed to upload a clip for the clips gallery widget", t),
            (0, i.P0)((0, l.o)(p.intl.string(p.t.iufib1), n.Ck.FAILURE));
    } finally {
        (0, c.ox)(e.id);
    }
}
