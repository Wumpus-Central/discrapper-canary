n.d(t, {
    E2: () => S,
    LI: () => E,
    Qr: () => g,
    _p: () => T,
    f0: () => O,
    iB: () => y,
    jV: () => I,
    k0: () => C,
    lx: () => b,
    m4: () => v,
    nE: () => N,
    t3: () => m,
    yH: () => A,
}),
    n(388685),
    n(642613);
var r = n(913527),
    i = n.n(r),
    a = n(260722),
    o = n(914788),
    s = n(277537),
    l = n(292352),
    c = n(345909),
    u = n(388032);
let d = 60,
    f = 3600,
    _ = 86400,
    p = 172800,
    h = 604800,
    m = () => ({
        today: u.intl.string(c.default.VjIAQU),
        yesterday: u.intl.string(c.default["2a8xHR"]),
        days: c.default.Xt6oND,
    }),
    g = (e) =>
        e
            ? {
                  today: u.intl.string(c.default["2AtcIi"]),
                  yesterday: u.intl.string(c.default.stOECg),
                  days: c.default.n8n5BQ,
              }
            : {
                  today: u.intl.string(c.default.g1ZX6u),
                  yesterday: u.intl.string(c.default.s3qSVl),
                  days: c.default.f1UJiI,
              },
    E = (e, t, n) => {
        let r = i()().diff(i()(e), "s"),
            a = t(),
            o = i()(e).format("LL");
        return r < _
            ? a.today
            : r < p
              ? a.yesterday
              : u.intl.formatToPlainString(a.days, { days: Math.min(Math.floor(r / _), null != n ? n : 999) });
    },
    b = (e, t) => {
        let n = i()().diff(i()(e), "s"),
            r = t(),
            a = i()(e).format("LL");
        return n < d
            ? r.seconds
            : n < f
              ? u.intl.formatToPlainString(r.minutes, { count: Math.floor(n / d) })
              : n < _
                ? u.intl.formatToPlainString(r.hours, { count: Math.floor(n / f) })
                : n < p
                  ? r.yesterday
                  : n < h
                    ? u.intl.formatToPlainString(r.days, { count: Math.floor(n / _) })
                    : u.intl.formatToPlainString(r.date, { date: a });
    },
    y = (e) =>
        e.display_type === l.MY.USER_ADD ||
        e.display_type === l.MY.USER_INTERACTION ||
        e.display_type === l.MY.USER_CALLED,
    O = (e) => e.display_type === l.MY.GUILD_ADD || e.display_type === l.MY.GUILD_INTERACTION,
    v = (e) => e.display_type === l.MY.PURCHASES,
    I = (e) => {
        for (let t of Object.values(l.MY)) if (t.toString() === e) return t;
    },
    T = (e) => {
        let t = S(e);
        return 0 === t.size ? [] : Array.from(t.entries()).sort((e, t) => e[1].priority - t[1].priority);
    },
    S = (e) => {
        let t = new Map(l.tx);
        return e && (t = new Map([...t, ...l.U])), t;
    },
    A = (e) => {
        let t = Math.floor(e / 60),
            n = e % 60;
        return t > 0 ? "".concat(t, "h ").concat(n, "m") : "".concat(n, "m");
    },
    C = () => {
        if (o.Z.getAreLinkedUsersProcessed()) return o.Z.getLinkedUsers();
        a.ZP.fetchLinkedUsers();
    },
    N = (e, t) => ((0, s.PO)("family_center_activity_card") ? t : e);
