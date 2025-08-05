(n.d(t, { Z: () => u }), n(415506));
var r = n(570140),
    i = n(710845),
    a = n(209492),
    o = n(981631);
function s(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let l = new i.Z('CloudSync');
class c {
    constructor(e) {
        (s(this, 'message', void 0), (this.message = e));
    }
}
async function u(e, t) {
    let n,
        i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
    r.Z.dispatch({
        type: 'GAME_CLOUD_SYNC_START',
        applicationId: e,
        branchId: t
    });
    try {
        if ((n = await a.j(e, t, i)).type === o.QCD.CONFLICT)
            throw (
                r.Z.dispatch({
                    type: 'GAME_CLOUD_SYNC_CONFLICT',
                    applicationId: e,
                    branchId: t,
                    next: n.next,
                    remote: n.remote
                }),
                new c('Conflict in cloud sync.')
            );
        (n.type === o.QCD.PULL || n.type === o.QCD.PUSH) && l.info('Sync complete', n);
    } catch (n) {
        if (n instanceof c) throw n;
        throw (
            r.Z.dispatch({
                type: 'GAME_CLOUD_SYNC_ERROR',
                applicationId: e,
                branchId: t
            }),
            l.error('Failed to cloud sync:', n),
            Error('Failed to cloud sync.')
        );
    }
    return (
        r.Z.dispatch({
            type: 'GAME_CLOUD_SYNC_COMPLETE',
            applicationId: e,
            branchId: t
        }),
        n
    );
}
