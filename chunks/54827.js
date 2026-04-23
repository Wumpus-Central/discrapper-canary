"use strict";
n.d(t, { O: () => d });
var i = n(228366),
    r = n(626584),
    s = n(986120),
    a = n(652215);
let o = new r.A("CloudSync");
class l {
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
        if ((n = await s.E(e, t, r)).type === a.R_U.CONFLICT)
            throw (
                (i.h.dispatch({
                    type: "GAME_CLOUD_SYNC_CONFLICT",
                    applicationId: e,
                    branchId: t,
                    next: n.next,
                    remote: n.remote,
                }),
                new l("Conflict in cloud sync."))
            );
        (n.type === a.R_U.PULL || n.type === a.R_U.PUSH) && o.info("Sync complete", n);
    } catch (n) {
        if (n instanceof l) throw n;
        throw (
            (i.h.dispatch({ type: "GAME_CLOUD_SYNC_ERROR", applicationId: e, branchId: t }),
            o.error("Failed to cloud sync:", n),
            Error("Failed to cloud sync."))
        );
    }
    return i.h.dispatch({ type: "GAME_CLOUD_SYNC_COMPLETE", applicationId: e, branchId: t }), n;
}
