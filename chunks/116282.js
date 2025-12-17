n.d(e, { R: () => T });
var i = n(54381),
    l = n(473749),
    s = n(159691),
    u = n(323183),
    r = n(5900),
    a = n(773275),
    o = n(388032),
    S = n(472057);
let T = () => {
    let { isWeb: t, installationStatus: e, connectionStatus: n } = (0, a.xf)(),
        T = (0, l.useMemo)(() => {
            switch (n) {
                case r.Ij.CONNECTED:
                    return o.intl.format(S.default.EVQZqy, { helpdeskArticle: u.w });
                case r.Ij.DISCONNECTED:
                    return o.intl.format(S.default.zOCRv9, { helpdeskArticle: u.w });
                case r.Ij.ERROR:
                    return o.intl.format(S.default.e9MkUw, { helpdeskArticle: u.w });
                default:
                    return o.intl.format(S.default["Rr+ah3"], { helpdeskArticle: u.w });
            }
        }, [n]),
        c = (0, l.useMemo)(() => {
            if (t) return o.intl.format(S.default.z6v0w5, { helpdeskArticle: u.w });
            switch (e) {
                case r._n.ERROR:
                    return o.intl.format(S.default.vjIpaK, { helpdeskArticle: u.w });
                case r._n.INSTALLING_TIMEOUT:
                    return o.intl.format(S.default.QWyvkt, { helpdeskArticle: u.w });
                case r._n.INSTALLING:
                    return o.intl.format(S.default.ZLrDvb, { helpdeskArticle: u.w });
                case r._n.WAITING_FOR_TERMS:
                case r._n.READY_FOR_LICENSE:
                    return o.intl.format(S.default.rX9Z5g, { helpdeskArticle: u.w });
                case r._n.EXISTING_INSTALLATION:
                    return o.intl.format(S.default.gOBU3K, { helpdeskArticle: u.w });
                case r._n.ZERO_TRUST:
                    return o.intl.string(S.default.KVSUDs);
                case r._n.INSTALLED:
                    return T;
                case r._n.NOT_INSTALLED:
                case r._n.UNKNOWN:
                default:
                    return o.intl.format(S.default["Rr+ah3"], { helpdeskArticle: u.w });
            }
        }, [t, e, T]);
    return (0, i.jsx)(s.xvT, {
        variant: "text-sm/normal",
        color: "text-subtle",
        children: c,
    });
};
