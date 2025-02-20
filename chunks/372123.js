n.d(e, { Z: () => c }), n(411104);
var i = n(570140),
    r = n(710845),
    o = n(209492),
    l = n(981631);
let a = new r.Z('CloudSync');
class s {
    constructor(t) {
        var e, n;
        (n = void 0),
            (e = 'message') in this
                ? Object.defineProperty(this, e, {
                      value: n,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0
                  })
                : (this[e] = n),
            (this.message = t);
    }
}
async function c(t, e) {
    let n,
        r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
    i.Z.dispatch({
        type: 'GAME_CLOUD_SYNC_START',
        applicationId: t,
        branchId: e
    });
    try {
        if ((n = await o.j(t, e, r)).type === l.QCD.CONFLICT)
            throw (
                (i.Z.dispatch({
                    type: 'GAME_CLOUD_SYNC_CONFLICT',
                    applicationId: t,
                    branchId: e,
                    next: n.next,
                    remote: n.remote
                }),
                new s('Conflict in cloud sync.'))
            );
        (n.type === l.QCD.PULL || n.type === l.QCD.PUSH) && a.info('Sync complete', n);
    } catch (n) {
        if (n instanceof s) throw n;
        throw (
            (i.Z.dispatch({
                type: 'GAME_CLOUD_SYNC_ERROR',
                applicationId: t,
                branchId: e
            }),
            a.error('Failed to cloud sync:', n),
            Error('Failed to cloud sync.'))
        );
    }
    return (
        i.Z.dispatch({
            type: 'GAME_CLOUD_SYNC_COMPLETE',
            applicationId: t,
            branchId: e
        }),
        n
    );
}
