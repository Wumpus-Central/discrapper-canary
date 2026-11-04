var i = n(31436),
    r = n(279234);
let a = null;
n.d(
    t,
    { xd: () => r.x },
    {
        G1: function () {
            return "libdiscore logs are part of the main app logs";
        },
        Ih: function () {
            return (0, i.Ay)().ExperimentCacher;
        },
        Oy: function () {
            (0, i.Ay)().crash();
        },
        kk: function (e) {
            (0, i.Ay)().BlockedDomainsStore.startFetchingBlockedDomains(e);
        },
        t7: function (e, t) {
            return (0, i.Ay)().rustMultiply(e, t);
        },
        tR: function (e) {
            return (0, i.Ay)().BlockedDomainsStore.isBlockedDomain(e) ?? null;
        },
        uU: function () {
            return null;
        },
        uc: function () {
            if (null != a) return a;
            try {
                return (a = new ((0, i.Ay)().FluxApi)());
            } catch {
                return null;
            }
        },
        xy: function (e) {
            return (0, i.Ay)().generateLaunchSignature(e);
        },
    },
);
