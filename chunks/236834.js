var n = t(582128),
    l = t(855986),
    i = t(619019),
    s = t(994500),
    a = t(19191),
    c = t(378135),
    u = t(682901);
t.d(
    r,
    {},
    {
        A: function () {
            let e = (0, c.k)(u.Dw),
                r = (0, l.bG)([a.A], () => a.A.getReferrer(e?.trialId)),
                t = (0, l.bG)([s.A], () => null == r || s.A.isBlockedOrIgnored(r.id));
            return n.useMemo(() => (t || null == r ? null : new i.A(r)), [r, t]);
        },
    },
);
