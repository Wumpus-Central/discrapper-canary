"use strict";
n.d(t, { A: () => s });
var i = n(417325),
    r = n(652215);
async function s(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 ? arguments[2] : void 0,
        s = e.map(
            (e) =>
                new Promise((s, a) => {
                    switch (e.status) {
                        case i.jP.NOT_STARTED:
                            e.upload();
                            break;
                        case i.jP.COMPLETED:
                            s("complete");
                            break;
                        case i.jP.ERROR:
                            t && e.error !== r.t02.ENTITY_TOO_LARGE ? e.upload() : a(Error("File failed to upload"));
                            break;
                        case i.jP.CANCELED:
                            a(Error("Upload is canceled"));
                            break;
                        case i.jP.REMOVED_FROM_MSG_DRAFT:
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
