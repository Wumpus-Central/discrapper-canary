r.d(t, { G: () => o });
var n = r(481386),
    a = r(509440),
    i = r(771560);
let o = function () {
    return {
        bindClient(e) {
            (0, a.nZ)().setClient(e);
        },
        withScope: a.$e,
        getClient: () => (0, a.s3)(),
        getScope: a.nZ,
        getIsolationScope: a.aF,
        captureException: (e, t) => (0, a.nZ)().captureException(e, t),
        captureMessage: (e, t, r) => (0, a.nZ)().captureMessage(e, t, r),
        captureEvent: i.eN,
        addBreadcrumb: n.n,
        setUser: i.av,
        setTags: i.mG,
        setTag: i.YA,
        setExtra: i.sU,
        setExtras: i.rJ,
        setContext: i.v,
        getIntegration(e) {
            let t = (0, a.s3)();
            return (t && t.getIntegrationByName(e.id)) || null;
        },
        startSession: i.yj,
        endSession: i.TM,
        captureSession(e) {
            if (e) return (0, i.TM)();
            let t = (0, a.nZ)(),
                r = (0, a.s3)(),
                n = t.getSession();
            r && n && r.captureSession(n);
        },
    };
};
