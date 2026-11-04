var a = t(582128),
    n = t(855986),
    s = t(253932),
    i = t(225186),
    r = t(330568),
    c = t(845300);
t.d(
    l,
    {},
    {
        A: function (e, l) {
            let t = s.Q_.useSetting(),
                o = (0, n.bG)([r.A], () => r.A.getFetchState()),
                A = (0, n.bG)([r.A], () => r.A.isDeveloperOfApplication(e)),
                u = t || (l ?? !1);
            return (
                a.useEffect(() => {
                    null != e && u && o === c.Z.INITIALIZED && (0, i.S)();
                }, [e, u, o]),
                A
            );
        },
    },
);
