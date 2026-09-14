a.d(t, { UE: () => d.UE, UQ: () => d.UQ, _A: () => p });
var i = a(691540),
    n = a(857250),
    l = a(97483),
    s = a(655180),
    r = a(195880),
    o = a(958805),
    u = a(735321),
    d = a(219222),
    c = a(696016),
    m = a(375708);
function p(e, t) {
    if ((0, d.$Q)(e.id)) return null;
    if (null == e.applicationId) return ((0, i.P0)((0, n.o)(m.intl.string(m.t.xcLXWy), l.Ck.FAILURE)), null);
    let a = (0, r.m)(),
        s = new AbortController();
    return ((0, d.JC)(a, s), (0, d.nE)(a, { status: "exporting", clip: e }), g(e, a, e.applicationId, s, t), a);
}
async function g(e, t, a, r, p) {
    try {
        let i = await (0, s.VO)(e, { analyticsLocations: p });
        if (r.signal.aborted) return;
        (0, d.nE)(t, { status: "uploading", clip: e, progress: 0 });
        let n = new File([i], "clip.mp4", { type: "video/mp4" }),
            l = await o.A.uploadWidgetClip(n, { onProgress: (e) => (0, d.Eo)(t, e), signal: r.signal });
        ((0, d.nE)(t, { status: "uploaded", clip: e, uploadFilename: l }),
            (0, u.XW)({ status: "pending", id: t, localClipId: e.id, gameId: a, title: e.name, uploadFilename: l }));
    } catch (e) {
        if (r.signal.aborted) return;
        ((0, d.UE)(t),
            c.nx.error("Failed to upload a clip for the clips gallery widget", e),
            (0, i.P0)((0, n.o)(m.intl.string(m.t.iufib1), l.Ck.FAILURE)));
    } finally {
        (0, d.ox)(t);
    }
}
