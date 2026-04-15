l.d(n, { A: () => N });
var i = l(627968);
l(64700);
var t = l(317097),
    s = l(311907),
    a = l(827734),
    r = l(397927),
    o = l(688810),
    d = l(450373),
    c = l(919395),
    u = l(385612),
    m = l(287809),
    p = l(84540),
    x = l(836602),
    A = l(950191),
    g = l(930349),
    f = l(339984),
    h = l(985018),
    v = l(228122);
function j(e) {
    let { backgroundColor: n } = e;
    return (0, i.jsx)("div", { className: v.o, style: { backgroundColor: n } });
}
function I(e) {
    let { src: n } = e;
    return (0, i.jsx)("img", { src: n, alt: "", className: v._ });
}
function N(e) {
    let { userId: n, guildId: l, disabled: v } = e,
        { newestAnalyticsLocation: N } = (0, o.Ay)(),
        y = null != l,
        C = (0, A.Ay)(n, l),
        b = (0, s.bG)([x.A], () => x.A.getPendingChanges(l ?? void 0).pendingBanner),
        E = (0, s.bG)([m.default], () => m.default.getCurrentUser()?.banner != null),
        T = null === b,
        P = void 0 !== b,
        _ = y && (C?.isUsingGuildMemberBanner() ?? !1),
        R = T && y ? E : (0, c.Ac)(b, C?.banner),
        O = y ? _ : C?.banner != null,
        S = P ? null != b : O,
        L = C?.getPreviewBanner(b, !1, 296) ?? void 0,
        k = (0, r.rdh)(a.A.unsafe_rawColors.PRIMARY_800).hex(),
        D = C?.primaryColor ?? (0, t.LX)(k),
        { hex: U } = (0, d.A)(D),
        G = () =>
            (0, u.XD)({ uploadType: f.HL.BANNER, analyticsSource: N, guildId: l ?? void 0, stackingBehavior: "stack" }),
        M = null != L ? (0, i.jsx)(I, { src: L }) : (0, i.jsx)(j, { backgroundColor: U });
    if (!R)
        return (0, i.jsx)(g.kL, {
            variant: "square",
            onClick: G,
            accessibleLabel: h.intl.string(h.t.N0bC3P),
            disabled: v,
            children: M,
        });
    let F = y && E,
        w = S
            ? {
                  onClick: () => (0, p.p)({ guildId: l ?? void 0, banner: null }),
                  type: F ? "reset" : "remove",
                  accessibleLabel: h.intl.string(F ? h.t.jHlJNS : h.t.tT9n7D),
              }
            : void 0;
    return (0, i.jsx)(g.NW, {
        variant: "square",
        onClick: G,
        accessibleLabel: h.intl.string(h.t.N0bC3P),
        deleteButtonConfig: w,
        disabled: v,
        children: M,
    });
}
