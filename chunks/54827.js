"use strict";
n.d(t, { O: () => d });
var i = n(228366),
    r = n(626584),
    a = n(986120),
    s = n(652215);
let l = new r.A("CloudSync");
class o {
    message;
    constructor(e) {
        this.message = e;
    }
}
async function d(e, t) {
    let n,
        r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
    i.h.dispatch({ type: "GAME_CLOUD_SYNC_START", applicationId: e, branchId: t });
    try {
        if ((n = await a.E(e, t, r)).type === s.R_U.CONFLICT)
            throw (
                (i.h.dispatch({
                    type: "GAME_CLOUD_SYNC_CONFLICT",
                    applicationId: e,
                    branchId: t,
                    next: n.next,
                    remote: n.remote,
                }),
                new o("Conflict in cloud sync."))
            );
        (n.type === s.R_U.PULL || n.type === s.R_U.PUSH) && l.info("Sync complete", n);
    } catch (n) {
        if (n instanceof o) throw n;
        throw (
            (i.h.dispatch({ type: "GAME_CLOUD_SYNC_ERROR", applicationId: e, branchId: t }),
            l.error("Failed to cloud sync:", n),
            Error("Failed to cloud sync."))
        );
    }
    return i.h.dispatch({ type: "GAME_CLOUD_SYNC_COMPLETE", applicationId: e, branchId: t }), n;
}
