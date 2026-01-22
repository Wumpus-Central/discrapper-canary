i.d(e, {
    q: () => A,
});
var n = i(627968),
    l = i(64700),
    s = i(732955),
    r = i(156186),
    u = i(602450),
    a = i(557571),
    o = i(985018),
    T = i(895431);
let A = () => {
    let { isWeb: t, installationStatus: e, connectionStatus: i, perkAvailableToUser: A } = (0, a.lV)(),
        S = (0, l.useMemo)(() => {
            switch (i) {
                case u.l7.CONNECTED:
                    return o.intl.format(T.default.EVQZqy, {
                        helpdeskArticle: r.V,
                    });
                case u.l7.DISCONNECTED:
                    return o.intl.format(T.default.zOCRv9, {
                        helpdeskArticle: r.V,
                    });
                case u.l7.ERROR:
                    return o.intl.format(T.default.e9MkUw, {
                        helpdeskArticle: r.V,
                    });
                default:
                    return o.intl.format(T.default.yL6mvx, {
                        helpdeskArticle: r.V,
                    });
            }
        }, [i]),
        E = (0, l.useMemo)(() => {
            if (t)
                return o.intl.format(T.default.z6v0w5, {
                    helpdeskArticle: r.V,
                });
            if (!A)
                return o.intl.format(T.default.yL6mvx, {
                    helpdeskArticle: r.V,
                });
            switch (e) {
                case u.Lk.ERROR:
                    return o.intl.format(T.default.vjIpaK, {
                        helpdeskArticle: r.V,
                    });
                case u.Lk.INSTALLING_TIMEOUT:
                    return o.intl.format(T.default.QWyvkt, {
                        helpdeskArticle: r.V,
                    });
                case u.Lk.INSTALLING:
                    return o.intl.format(T.default.ZLrDvb, {
                        helpdeskArticle: r.V,
                    });
                case u.Lk.WAITING_FOR_TERMS:
                case u.Lk.READY_FOR_LICENSE:
                    return o.intl.format(T.default.rX9Z5g, {
                        helpdeskArticle: r.V,
                    });
                case u.Lk.EXISTING_INSTALLATION:
                    return o.intl.format(T.default.gOBU3K, {
                        helpdeskArticle: r.V,
                    });
                case u.Lk.ZERO_TRUST:
                    return o.intl.string(T.default.KVSUDs);
                case u.Lk.INSTALLED:
                    return S;
                case u.Lk.NOT_INSTALLED:
                case u.Lk.UNKNOWN:
                default:
                    return o.intl.format(T.default.yL6mvx, {
                        helpdeskArticle: r.V,
                    });
            }
        }, [t, e, S, A]);
    return (0, n.jsx)(s.EYj, {
        variant: "text-sm/normal",
        color: "text-subtle",
        children: E,
    });
};
