n.d(e, { Z: () => c }), n(411104);
var i = n(570140),
    l = n(710845),
    a = n(209492),
    s = n(981631);
let o = new l.Z('CloudSync');
class r {
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
        l = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
    i.Z.dispatch({
        type: 'GAME_CLOUD_SYNC_START',
        applicationId: t,
        branchId: e
    });
    try {
        if ((n = await a.j(t, e, l)).type === s.QCD.CONFLICT)
            throw (
                (i.Z.dispatch({
                    type: 'GAME_CLOUD_SYNC_CONFLICT',
                    applicationId: t,
                    branchId: e,
                    next: n.next,
                    remote: n.remote
                }),
                new r('Conflict in cloud sync.'))
            );
        (n.type === s.QCD.PULL || n.type === s.QCD.PUSH) && o.info('Sync complete', n);
    } catch (n) {
        if (n instanceof r) throw n;
        throw (
            (i.Z.dispatch({
                type: 'GAME_CLOUD_SYNC_ERROR',
                applicationId: t,
                branchId: e
            }),
            o.error('Failed to cloud sync:', n),
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
