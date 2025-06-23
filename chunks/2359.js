n.d(t, { Z: () => u });
var i = n(255367),
    r = n(73800),
    s = n(937579),
    l = n(104494),
    a = n(639119),
    o = n(93237),
    c = n(702328),
    d = n(474936);
let u = (e) => {
    let { entrypoint: t } = e,
        n = (0, a.N)(),
        u = (0, l.Ng)(),
        m = t === d.EZ.ApplicationStoreHome,
        g = (0, o.HI)({ trialOffer: n });
    return (
        r.useEffect(() => {
            !0 === g && (0, o.p9)(), (null != n || null != u) && (0, s.a)(n, u);
        }, [n, u, g]),
        (0, i.jsx)(c.Z, {
            isFullscreen: m,
            entrypoint: t
        })
    );
};
