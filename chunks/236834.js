var r = n(582128),
    i = n(855986),
    l = n(619019),
    a = n(994500),
    s = n(19191),
    o = n(378135),
    c = n(682901);
n.d(
    t,
    {},
    {
        A: function () {
            let e = (0, o.k)(c.Dw),
                t = (0, i.bG)([s.A], () => s.A.getReferrer(e?.trialId)),
                n = (0, i.bG)([a.A], () => null == t || a.A.isBlockedOrIgnored(t.id));
            return r.useMemo(() => (n || null == t ? null : new l.A(t)), [t, n]);
        },
    },
);
