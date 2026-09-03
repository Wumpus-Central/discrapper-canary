a.d(t, { UE: () => h, UQ: () => v, _A: () => f });
var l = a(196765),
    i = a(691540),
    n = a(857250),
    s = a(97483),
    r = a(655180),
    o = a(195880),
    c = a(958805),
    d = a(735321),
    u = a(696016),
    p = a(375708);
let m = (0, l.v)(() => ({ localClips: new Map() }));
function g(e, t) {
    m.setState((a) => ({ localClips: new Map(a.localClips).set(e, t) }));
}
function h(e) {
    m.setState((t) => {
        let a = new Map(t.localClips);
        return a.delete(e), { localClips: a };
    });
}
function v() {
    return m((e) => e.localClips);
}
async function f(e, t) {
    if (!m.getState().localClips.has(e.id)) {
        if (null == e.applicationId) return void (0, i.P0)((0, n.o)(p.intl.string(p.t.xcLXWy), s.Ck.FAILURE));
        g(e.id, { status: "exporting", clip: e });
        try {
            let a = await (0, r.VO)(e, { analyticsLocations: t });
            g(e.id, { status: "uploading", clip: e, progress: 0 });
            let l = new File([a], "clip.mp4", { type: "video/mp4" }),
                i = await c.A.uploadWidgetClip(l, {
                    onProgress: (t) => {
                        var a;
                        return (
                            (a = e.id),
                            void m.setState((e) => {
                                let l = e.localClips.get(a);
                                return l?.status !== "uploading"
                                    ? e
                                    : { localClips: new Map(e.localClips).set(a, { ...l, progress: t }) };
                            })
                        );
                    },
                });
            g(e.id, { status: "uploaded", clip: e, uploadFilename: i }),
                (0, d.XW)({
                    status: "pending",
                    id: (0, o.m)(),
                    localClipId: e.id,
                    gameId: e.applicationId,
                    title: e.name,
                    uploadFilename: i,
                });
        } catch (t) {
            h(e.id),
                u.nx.error("Failed to upload a clip for the clips gallery widget", t),
                (0, i.P0)((0, n.o)(p.intl.string(p.t.iufib1), s.Ck.FAILURE));
        }
    }
}
