l.d(n, { A: () => C });
var t = l(627968);
l(64700);
var i = l(317097),
    r = l(311907),
    s = l(827734),
    a = l(602853),
    o = l(688810),
    d = l(450373),
    c = l(919395),
    u = l(385612),
    g = l(287809),
    A = l(84540),
    m = l(836602),
    f = l(622543),
    p = l(950191),
    x = l(930349),
    h = l(339984),
    v = l(985018),
    j = l(111242);
function I(e) {
    let { backgroundColor: n } = e;
    return (0, t.jsx)("div", { className: j.o, style: { backgroundColor: n } });
}
function b(e) {
    let { src: n } = e;
    return (0, t.jsx)("img", { src: n, alt: "", className: j._ });
}
function C(e) {
    let { userId: n, guildId: l, disabled: j } = e,
        { newestAnalyticsLocation: C } = (0, o.Ay)(),
        N = null != l,
        y = (0, p.Ay)(n, l),
        E = (0, r.bG)([m.A], () => m.A.getPendingChanges(l ?? void 0).pendingBanner),
        P = (0, r.bG)([g.default], () => g.default.getCurrentUser()?.banner != null),
        R = (0, r.bG)([f.A], () =>
            null != l ? f.A.getGuildMemberProfile(n, l)?.banner : f.A.getUserProfile(n)?.banner,
        ),
        _ = null === E,
        T = void 0 !== E,
        O = N && (y?.isUsingGuildMemberBanner() ?? !1),
        S = _ && N ? P : (0, c.Ac)(E, y?.banner),
        k = N ? O : y?.banner != null,
        D = T ? null != E : k,
        L = y?.getPreviewBanner(_ && N && !O ? void 0 : E, !1, 296) ?? void 0,
        M = (0, a.r)(s.A.unsafe_rawColors.PRIMARY_800).hex(),
        G = y?.primaryColor ?? (0, i.LX)(M),
        { hex: U } = (0, d.A)(G),
        F = () =>
            (0, u.XD)({ uploadType: h.HL.BANNER, analyticsSource: C, guildId: l ?? void 0, stackingBehavior: "stack" }),
        w = null != L ? (0, t.jsx)(b, { src: L }) : (0, t.jsx)(I, { backgroundColor: U });
    if (!S)
        return (0, t.jsx)(x.kL, {
            variant: "square",
            onClick: F,
            accessibleLabel: v.intl.string(v.t.N0bC3P),
            disabled: j,
            children: w,
        });
    let V = N && P,
        B = D
            ? {
                  onClick: () => (0, u.rM)(null, R, (e) => (0, A.p)({ guildId: l ?? void 0, banner: e })),
                  type: V ? "reset" : "remove",
                  accessibleLabel: v.intl.string(V ? v.t.jHlJNS : v.t.tT9n7D),
              }
            : void 0;
    return (0, t.jsx)(x.NW, {
        variant: "square",
        onClick: F,
        accessibleLabel: v.intl.string(v.t.N0bC3P),
        deleteButtonConfig: B,
        disabled: j,
        children: w,
    });
}
