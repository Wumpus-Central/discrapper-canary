var i = n(200651),
    s = n(192379),
    r = n(937579),
    a = n(104494),
    l = n(639119),
    o = n(702328),
    c = n(474936);
t.Z = (e) => {
    let { entrypoint: t } = e,
        n = (0, l.N)(),
        d = (0, a.Ng)(),
        u = t === c.EZ.ApplicationStoreHome;
    return (
        s.useEffect(() => {
            (null != n || null != d) && (0, r.a)(n, d);
        }, [n, d]),
        (0, i.jsx)(o.Z, {
            isFullscreen: u,
            entrypoint: t
        })
    );
};
