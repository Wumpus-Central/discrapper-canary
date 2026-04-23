n.d(t, { A: () => a });
var i = n(743445),
    r = n(652215);
async function a(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 ? arguments[2] : void 0,
        a = e.map(
            (e) =>
                new Promise((a, s) => {
                    switch (e.status) {
                        case i.jP.NOT_STARTED:
                            e.upload();
                            break;
                        case i.jP.COMPLETED:
                            a("complete");
                            break;
                        case i.jP.ERROR:
                            t && e.error !== r.t02.ENTITY_TOO_LARGE ? e.upload() : s(Error("File failed to upload"));
                            break;
                        case i.jP.CANCELED:
                            s(Error("Upload is canceled"));
                            break;
                        case i.jP.REMOVED_FROM_MSG_DRAFT:
                            s(Error("Upload is removed from draft"));
                    }
                    e.on("complete", () => {
                        a("complete");
                    }),
                        e.on("error", () => {
                            s(Error(`File ${e.id} failed to upload`));
                        }),
                        e.on("progress", (e, t) => {
                            n?.(e, t);
                        });
                }),
        );
    await Promise.all(a);
}
