n.d(t, {
    E2: () => T,
    Kp: () => R,
    LI: () => E,
    MH: () => P,
    Qr: () => g,
    _p: () => I,
    f0: () => O,
    iB: () => y,
    jV: () => S,
    k0: () => A,
    lx: () => b,
    m4: () => v,
    t3: () => h,
    yH: () => C,
}),
    n(388685),
    n(642613);
var r = n(913527),
    i = n.n(r),
    a = n(594174),
    o = n(260722),
    s = n(914788),
    l = n(292352),
    c = n(517319),
    u = n(388032);
let d = 60,
    f = 3600,
    p = 86400,
    _ = 172800,
    m = 604800,
    h = () => ({
        today: u.intl.string(c.default.VjIAQQ),
        yesterday: u.intl.string(c.default["2a8xHY"]),
        days: c.default.Xt6oND,
    }),
    g = (e) =>
        e
            ? {
                  today: u.intl.string(c.default["2AtcIs"]),
                  yesterday: u.intl.string(c.default.stOECr),
                  days: c.default.n8n5Ba,
              }
            : {
                  today: u.intl.string(c.default.g1ZX6m),
                  yesterday: u.intl.string(c.default.s3qSVt),
                  days: c.default.f1UJiC,
              },
    E = (e, t, n) => {
        let r = i()().diff(i()(e), "s"),
            a = t(),
            o = i()(e).format("LL");
        return r < p
            ? a.today
            : r < _
              ? a.yesterday
              : u.intl.formatToPlainString(a.days, { days: Math.min(Math.floor(r / p), null != n ? n : 999) });
    },
    b = (e, t) => {
        let n = i()().diff(i()(e), "s"),
            r = t(),
            a = i()(e).format("LL");
        return n < d
            ? r.seconds
            : n < f
              ? u.intl.formatToPlainString(r.minutes, { count: Math.floor(n / d) })
              : n < p
                ? u.intl.formatToPlainString(r.hours, { count: Math.floor(n / f) })
                : n < _
                  ? r.yesterday
                  : n < m
                    ? u.intl.formatToPlainString(r.days, { count: Math.floor(n / p) })
                    : u.intl.formatToPlainString(r.date, { date: a });
    },
    y = (e) =>
        e.display_type === l.MY.USER_ADD ||
        e.display_type === l.MY.USER_INTERACTION ||
        e.display_type === l.MY.USER_CALLED,
    O = (e) => e.display_type === l.MY.GUILD_ADD || e.display_type === l.MY.GUILD_INTERACTION,
    v = (e) => e.display_type === l.MY.PURCHASES,
    S = (e) => {
        for (let t of Object.values(l.MY)) if (t.toString() === e) return t;
    },
    I = () => {
        let e = T();
        return 0 === e.size ? [] : Array.from(e.entries()).sort((e, t) => e[1].priority - t[1].priority);
    },
    T = () => new Map(l.tx),
    C = (e) => {
        let t = Math.floor(e / 60),
            n = e % 60;
        return t > 0 ? "".concat(t, "h ").concat(n, "m") : "".concat(n, "m");
    },
    A = () => {
        if (s.Z.getAreLinkedUsersProcessed()) return s.Z.getLinkedUsers();
        o.ZP.fetchLinkedUsers();
    },
    N = () => Object.values(s.Z.getLinkedUsers()).some((e) => e.link_status === l.ne.ACTIVE),
    P = () => {
        let e = a.default.getCurrentUser(),
            t = N();
        return (null == e ? void 0 : e.nsfwAllowed) === !1 && t;
    },
    R = (e, t) =>
        t > 0 && 0 === e
            ? u.intl.formatToPlainString(c.default["L/Cj7S"], { callCount: t })
            : e > 0 && 0 === t
              ? u.intl.formatToPlainString(c.default["6X1F0i"], { messageCount: e })
              : u.intl.formatToPlainString(c.default.IYqGMG, {
                    messageCount: e,
                    callCount: t,
                });
