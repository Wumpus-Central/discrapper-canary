n.d(t, { G: () => o });
var r = n(481386),
    i = n(509440),
    a = n(771560);
let o = function () {
    return {
        bindClient(e) {
            (0, i.nZ)().setClient(e);
        },
        withScope: i.$e,
        getClient: () => (0, i.s3)(),
        getScope: i.nZ,
        getIsolationScope: i.aF,
        captureException: (e, t) => (0, i.nZ)().captureException(e, t),
        captureMessage: (e, t, n) => (0, i.nZ)().captureMessage(e, t, n),
        captureEvent: a.eN,
        addBreadcrumb: r.n,
        setUser: a.av,
        setTags: a.mG,
        setTag: a.YA,
        setExtra: a.sU,
        setExtras: a.rJ,
        setContext: a.v,
        getIntegration(e) {
            let t = (0, i.s3)();
            return (t && t.getIntegrationByName(e.id)) || null;
        },
        startSession: a.yj,
        endSession: a.TM,
        captureSession(e) {
            if (e) return (0, a.TM)();
            let t = (0, i.nZ)(),
                n = (0, i.s3)(),
                r = t.getSession();
            n && r && n.captureSession(r);
        },
    };
};
