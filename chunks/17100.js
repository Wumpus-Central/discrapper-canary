n.d(t, { u: () => i });
let r = (0, n(722733).Z)({
        kind: "user",
        name: "2025-10-wow-moment-backtest",
        defaultConfig: { brandRefreshWowMomentEnabled: !0 },
        variations: { 1: { brandRefreshWowMomentEnabled: !1 } },
    }),
    i = (e) => {
        let { location: t } = e;
        return r.getConfig({ location: t }).brandRefreshWowMomentEnabled;
    };
