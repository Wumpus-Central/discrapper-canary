t.d(n, { A: () => C });
var l = t(627968);
t(64700);
var i = t(317097),
    r = t(311907),
    a = t(827734),
    s = t(602853),
    o = t(688810),
    d = t(450373),
    u = t(919395),
    c = t(385612),
    g = t(287809),
    A = t(84540),
    m = t(836602),
    f = t(622543),
    p = t(950191),
    x = t(930349),
    h = t(339984),
    v = t(985018),
    j = t(111242);
function I(e) {
    let { backgroundColor: n } = e;
    return (0, l.jsx)("div", { className: j.o, style: { backgroundColor: n } });
}
function b(e) {
    let { src: n } = e;
    return (0, l.jsx)("img", { src: n, alt: "", className: j._ });
}
function C(e) {
    let { userId: n, guildId: t, disabled: j } = e,
        { newestAnalyticsLocation: C } = (0, o.Ay)(),
        N = null != t,
        y = (0, p.Ay)(n, t),
        E = (0, r.bG)([m.A], () => m.A.getPendingChanges(t ?? void 0).pendingBanner),
        P = (0, r.bG)([g.default], () => g.default.getCurrentUser()?.banner != null),
        R = (0, r.bG)([f.A], () =>
            null != t ? f.A.getGuildMemberProfile(n, t)?.banner : f.A.getUserProfile(n)?.banner,
        ),
        O = null === E,
        T = void 0 !== E,
        _ = N && (y?.isUsingGuildMemberBanner() ?? !1),
        S = O && N ? P : (0, u.Ac)(E, y?.banner),
        D = N ? _ : y?.banner != null,
        k = T ? null != E : D,
        L = y?.getPreviewBanner(O && N && !_ ? void 0 : E, !1, 296) ?? void 0,
        M = (0, s.r)(a.A.unsafe_rawColors.PRIMARY_800).hex(),
        G = y?.primaryColor ?? (0, i.LX)(M),
        { hex: w } = (0, d.A)(G),
        U = () =>
            (0, c.XD)({ uploadType: h.HL.BANNER, analyticsSource: C, guildId: t ?? void 0, stackingBehavior: "stack" }),
        F = null != L ? (0, l.jsx)(b, { src: L }) : (0, l.jsx)(I, { backgroundColor: w });
    if (!S)
        return (0, l.jsx)(x.kL, {
            variant: "square",
            onClick: U,
            accessibleLabel: v.intl.string(v.t.N0bC3P),
            disabled: j,
            children: F,
        });
    let V = N && P,
        B = k
            ? {
                  onClick: () => (0, c.rM)(null, R, (e) => (0, A.p)({ guildId: t ?? void 0, banner: e })),
                  type: V ? "reset" : "remove",
                  accessibleLabel: v.intl.string(V ? v.t.jHlJNS : v.t.tT9n7D),
              }
            : void 0;
    return (0, l.jsx)(x.NW, {
        variant: "square",
        onClick: U,
        accessibleLabel: v.intl.string(v.t.N0bC3P),
        deleteButtonConfig: B,
        disabled: j,
        children: F,
    });
}
