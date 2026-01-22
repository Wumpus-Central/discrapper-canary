n.d(t, {
    A: () => a,
}),
    n(65821),
    n(896048);
var r = n(743445),
    i = n(652215);
async function a(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 ? arguments[2] : void 0,
        a = e.map(
            (e) =>
                new Promise((a, s) => {
                    switch (e.status) {
                        case r.jP.NOT_STARTED:
                            e.upload();
                            break;
                        case r.jP.COMPLETED:
                            a("complete");
                            break;
                        case r.jP.ERROR:
                            t && e.error !== i.t02.ENTITY_TOO_LARGE ? e.upload() : s(Error("File failed to upload"));
                            break;
                        case r.jP.CANCELED:
                            s(Error("Upload is canceled"));
                            break;
                        case r.jP.REMOVED_FROM_MSG_DRAFT:
                            s(Error("Upload is removed from draft"));
                    }
                    e.on("complete", () => {
                        a("complete");
                    }),
                        e.on("error", () => {
                            s(Error("File ".concat(e.id, " failed to upload")));
                        }),
                        e.on("progress", (e, t) => {
                            null == n || n(e, t);
                        });
                }),
        );
    await Promise.all(a);
}
