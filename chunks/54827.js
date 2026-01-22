n.d(t, { O: () => u }), n(65821);
var r = n(73153),
    i = n(626584),
    a = n(986120),
    s = n(652215);
function o(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let l = new i.A("CloudSync");
class c {
    constructor(e) {
        o(this, "message", void 0), (this.message = e);
    }
}
async function u(e, t) {
    let n,
        i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
    r.h.dispatch({
        type: "GAME_CLOUD_SYNC_START",
        applicationId: e,
        branchId: t,
    });
    try {
        if ((n = await a.E(e, t, i)).type === s.R_U.CONFLICT)
            throw (
                (r.h.dispatch({
                    type: "GAME_CLOUD_SYNC_CONFLICT",
                    applicationId: e,
                    branchId: t,
                    next: n.next,
                    remote: n.remote,
                }),
                new c("Conflict in cloud sync."))
            );
        (n.type === s.R_U.PULL || n.type === s.R_U.PUSH) && l.info("Sync complete", n);
    } catch (n) {
        if (n instanceof c) throw n;
        throw (
            (r.h.dispatch({
                type: "GAME_CLOUD_SYNC_ERROR",
                applicationId: e,
                branchId: t,
            }),
            l.error("Failed to cloud sync:", n),
            Error("Failed to cloud sync."))
        );
    }
    return (
        r.h.dispatch({
            type: "GAME_CLOUD_SYNC_COMPLETE",
            applicationId: e,
            branchId: t,
        }),
        n
    );
}
