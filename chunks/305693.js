n.d(t, { o: () => T });
var i = n(311907),
    s = n(419954),
    l = n(933297),
    a = n(287809),
    r = n(780964),
    o = n(358776),
    d = n(199499),
    u = n(272338),
    c = n(767266),
    g = n(324837),
    m = n(523661),
    _ = n(692601),
    A = n(536070),
    h = n(938460),
    p = n(398336),
    x = n(865054),
    E = n(985018);
let T = (0, s.zZ)(r.X.ACCOUNT_AUTHENTICATION_CATEGORY, {
    useTitle: () => E.intl.string(E.t.pKSjEj),
    useInlineNotice: function () {
        return (0, i.bG)([a.default], () => a.default.getCurrentUser()?.mfaEnabled ?? !1)
            ? { type: l.lT.STRONGLY_DISCOURAGED_CUSTOM, notice: d.A }
            : null;
    },
    buildLayout: () => [
        m.L,
        p.A,
        x.k,
        g.v,
        u.c,
        c.g,
        _.T,
        A.C,
        ...((0, o.pC)("AccountAuthenticationCategory") ? [h.w] : []),
    ],
});
