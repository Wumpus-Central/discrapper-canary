n.d(t, {
    E2: () => A,
    Kp: () => L,
    LI: () => b,
    MH: () => w,
    Qr: () => E,
    _p: () => S,
    f0: () => v,
    iB: () => O,
    jV: () => T,
    k0: () => N,
    lW: () => P,
    lx: () => y,
    m4: () => I,
    nE: () => R,
    t3: () => g,
    yH: () => C,
}),
    n(388685),
    n(642613);
var r = n(913527),
    i = n.n(r),
    a = n(594174),
    o = n(260722),
    s = n(914788),
    l = n(277537),
    c = n(292352),
    u = n(597754),
    d = n(388032);
let f = 60,
    _ = 3600,
    p = 86400,
    h = 172800,
    m = 604800,
    g = () => ({
        today: d.intl.string(u.default.VjIAQQ),
        yesterday: d.intl.string(u.default["2a8xHY"]),
        days: u.default.Xt6oND,
    }),
    E = (e) =>
        e
            ? {
                  today: d.intl.string(u.default["2AtcIs"]),
                  yesterday: d.intl.string(u.default.stOECr),
                  days: u.default.n8n5Ba,
              }
            : {
                  today: d.intl.string(u.default.g1ZX6m),
                  yesterday: d.intl.string(u.default.s3qSVt),
                  days: u.default.f1UJiC,
              },
    b = (e, t, n) => {
        let r = i()().diff(i()(e), "s"),
            a = t(),
            o = i()(e).format("LL");
        return r < p
            ? a.today
            : r < h
              ? a.yesterday
              : d.intl.formatToPlainString(a.days, { days: Math.min(Math.floor(r / p), null != n ? n : 999) });
    },
    y = (e, t) => {
        let n = i()().diff(i()(e), "s"),
            r = t(),
            a = i()(e).format("LL");
        return n < f
            ? r.seconds
            : n < _
              ? d.intl.formatToPlainString(r.minutes, { count: Math.floor(n / f) })
              : n < p
                ? d.intl.formatToPlainString(r.hours, { count: Math.floor(n / _) })
                : n < h
                  ? r.yesterday
                  : n < m
                    ? d.intl.formatToPlainString(r.days, { count: Math.floor(n / p) })
                    : d.intl.formatToPlainString(r.date, { date: a });
    },
    O = (e) =>
        e.display_type === c.MY.USER_ADD ||
        e.display_type === c.MY.USER_INTERACTION ||
        e.display_type === c.MY.USER_CALLED,
    v = (e) => e.display_type === c.MY.GUILD_ADD || e.display_type === c.MY.GUILD_INTERACTION,
    I = (e) => e.display_type === c.MY.PURCHASES,
    T = (e) => {
        for (let t of Object.values(c.MY)) if (t.toString() === e) return t;
    },
    S = (e) => {
        let t = A(e);
        return 0 === t.size ? [] : Array.from(t.entries()).sort((e, t) => e[1].priority - t[1].priority);
    },
    A = (e) => {
        let t = new Map(c.tx);
        return e && (t = new Map([...t, ...c.U])), t;
    },
    C = (e) => {
        let t = Math.floor(e / 60),
            n = e % 60;
        return t > 0 ? "".concat(t, "h ").concat(n, "m") : "".concat(n, "m");
    },
    N = () => {
        if (s.Z.getAreLinkedUsersProcessed()) return s.Z.getLinkedUsers();
        o.ZP.fetchLinkedUsers();
    },
    R = (e, t) => ((0, l.PO)("family_center_activity_card") ? t : e),
    P = (e, t) => ((0, l.vE)("family_center_activity_card") ? t : e),
    D = () => Object.values(s.Z.getLinkedUsers()).some((e) => e.link_status === c.ne.ACTIVE),
    w = () => {
        let e = a.default.getCurrentUser(),
            t = D(),
            n = (0, l.vE)("settings-controls");
        return (null == e ? void 0 : e.nsfwAllowed) === !1 && t && n;
    },
    L = (e, t) =>
        t > 0 && 0 === e
            ? d.intl.formatToPlainString(u.default["L/Cj7S"], { callCount: t })
            : e > 0 && 0 === t
              ? d.intl.formatToPlainString(u.default["6X1F0i"], { messageCount: e })
              : d.intl.formatToPlainString(u.default.IYqGMG, {
                    messageCount: e,
                    callCount: t,
                });
