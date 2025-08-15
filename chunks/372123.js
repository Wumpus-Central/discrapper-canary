n.d(e, { Z: () => s }), n(415506);
var i = n(570140),
    r = n(710845),
    l = n(209492),
    o = n(981631);
let a = new r.Z("CloudSync");
class c {
    constructor(t) {
        !(function (t, e, n) {
            e in t
                ? Object.defineProperty(t, e, {
                      value: n,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                  })
                : (t[e] = n);
        })(this, "message", void 0),
            (this.message = t);
    }
}
async function s(t, e) {
    let n,
        r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
    i.Z.dispatch({
        type: "GAME_CLOUD_SYNC_START",
        applicationId: t,
        branchId: e,
    });
    try {
        if ((n = await l.j(t, e, r)).type === o.QCD.CONFLICT)
            throw (
                (i.Z.dispatch({
                    type: "GAME_CLOUD_SYNC_CONFLICT",
                    applicationId: t,
                    branchId: e,
                    next: n.next,
                    remote: n.remote,
                }),
                new c("Conflict in cloud sync."))
            );
        (n.type === o.QCD.PULL || n.type === o.QCD.PUSH) && a.info("Sync complete", n);
    } catch (n) {
        if (n instanceof c) throw n;
        throw (
            (i.Z.dispatch({
                type: "GAME_CLOUD_SYNC_ERROR",
                applicationId: t,
                branchId: e,
            }),
            a.error("Failed to cloud sync:", n),
            Error("Failed to cloud sync."))
        );
    }
    return (
        i.Z.dispatch({
            type: "GAME_CLOUD_SYNC_COMPLETE",
            applicationId: t,
            branchId: e,
        }),
        n
    );
}
