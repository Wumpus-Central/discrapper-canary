"use strict";
n.d(t, { A: () => s });
var r = n(743445),
    i = n(652215);
async function s(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 ? arguments[2] : void 0,
        s = e.map(
            (e) =>
                new Promise((s, a) => {
                    switch (e.status) {
                        case r.jP.NOT_STARTED:
                            e.upload();
                            break;
                        case r.jP.COMPLETED:
                            s("complete");
                            break;
                        case r.jP.ERROR:
                            t && e.error !== i.t02.ENTITY_TOO_LARGE ? e.upload() : a(Error("File failed to upload"));
                            break;
                        case r.jP.CANCELED:
                            a(Error("Upload is canceled"));
                            break;
                        case r.jP.REMOVED_FROM_MSG_DRAFT:
                            a(Error("Upload is removed from draft"));
                    }
                    e.on("complete", () => {
                        s("complete");
                    }),
                        e.on("error", () => {
                            a(Error(`File ${e.id} failed to upload`));
                        }),
                        e.on("progress", (e, t) => {
                            n?.(e, t);
                        });
                }),
        );
    await Promise.all(s);
}
