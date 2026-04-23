"use strict";
n.d(t, { O: () => u });
var r = n(73153),
    i = n(626584),
    s = n(986120),
    a = n(652215);
let o = new i.A("CloudSync");
class l {
    message;
    constructor(e) {
        this.message = e;
    }
}
async function u(e, t) {
    let n,
        i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
    r.h.dispatch({ type: "GAME_CLOUD_SYNC_START", applicationId: e, branchId: t });
    try {
        if ((n = await s.E(e, t, i)).type === a.R_U.CONFLICT)
            throw (
                (r.h.dispatch({
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
            (r.h.dispatch({ type: "GAME_CLOUD_SYNC_ERROR", applicationId: e, branchId: t }),
            o.error("Failed to cloud sync:", n),
            Error("Failed to cloud sync."))
        );
    }
    return r.h.dispatch({ type: "GAME_CLOUD_SYNC_COMPLETE", applicationId: e, branchId: t }), n;
}
