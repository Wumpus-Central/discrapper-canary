n.d(t, { R: () => d });
var r = n(54381),
    i = n(473749),
    a = n(159691),
    o = n(323183),
    s = n(5900),
    l = n(953865),
    c = n(388032),
    u = n(845259);
let d = () => {
    let { isWeb: e, installationStatus: t, connectionStatus: n } = (0, l.xf)(),
        d = (0, i.useMemo)(() => {
            switch (n) {
                case s.Ij.CONNECTED:
                    return c.intl.format(u.default.EVQZqy, { helpdeskArticle: o.w });
                case s.Ij.DISCONNECTED:
                    return c.intl.format(u.default.zOCRv9, { helpdeskArticle: o.w });
                case s.Ij.ERROR:
                    return c.intl.format(u.default.e9MkUw, { helpdeskArticle: o.w });
                default:
                    return c.intl.format(u.default["Rr+ah3"], { helpdeskArticle: o.w });
            }
        }, [n]),
        f = (0, i.useMemo)(() => {
            if (e) return c.intl.format(u.default.z6v0w5, { helpdeskArticle: o.w });
            switch (t) {
                case s._n.ERROR:
                    return c.intl.format(u.default.vjIpaK, { helpdeskArticle: o.w });
                case s._n.INSTALLING:
                case s._n.READY_FOR_LICENSE:
                    return c.intl.format(u.default.ZLrDvb, { helpdeskArticle: o.w });
                case s._n.EXISTING_INSTALLATION:
                    return c.intl.format(u.default.gOBU3K, { helpdeskArticle: o.w });
                case s._n.ZERO_TRUST:
                    return c.intl.string(u.default.KVSUDs);
                case s._n.INSTALLED:
                    return d;
                case s._n.NOT_INSTALLED:
                case s._n.UNKNOWN:
                default:
                    return c.intl.format(u.default["Rr+ah3"], { helpdeskArticle: o.w });
            }
        }, [e, t, d]);
    return (0, r.jsx)(a.xvT, {
        variant: "text-sm/normal",
        color: "text-secondary",
        children: f,
    });
};
