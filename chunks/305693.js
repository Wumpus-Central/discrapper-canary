n.d(t, { o: () => f });
var i = n(311907),
    s = n(419954),
    l = n(933297),
    a = n(287809),
    r = n(780964),
    o = n(358776),
    d = n(199499),
    c = n(272338),
    u = n(767266),
    m = n(324837),
    g = n(523661),
    _ = n(692601),
    x = n(536070),
    A = n(938460),
    h = n(398336),
    p = n(865054),
    T = n(985018);
let f = (0, s.zZ)(r.X.ACCOUNT_AUTHENTICATION_CATEGORY, {
    useTitle: () => T.intl.string(T.t.pKSjEj),
    useInlineNotice: function () {
        return (0, i.bG)([a.default], () => a.default.getCurrentUser()?.mfaEnabled ?? !1)
            ? { type: l.lT.STRONGLY_DISCOURAGED_CUSTOM, notice: d.A }
            : null;
    },
    buildLayout: () => [
        g.L,
        h.A,
        p.k,
        m.v,
        c.c,
        u.g,
        _.T,
        x.C,
        ...((0, o.pC)("AccountAuthenticationCategory") ? [A.w] : []),
    ],
});
