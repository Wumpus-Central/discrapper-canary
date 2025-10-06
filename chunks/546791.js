n.d(t, {
    E2: () => T,
    LI: () => g,
    Qr: () => m,
    _p: () => I,
    f0: () => y,
    iB: () => b,
    jV: () => v,
    k0: () => A,
    lx: () => E,
    m4: () => O,
    t3: () => h,
    yH: () => S,
}),
    n(388685),
    n(642613);
var r = n(913527),
    i = n.n(r),
    a = n(260722),
    o = n(914788),
    s = n(292352),
    l = n(345909),
    c = n(388032);
let u = 60,
    d = 3600,
    f = 86400,
    _ = 172800,
    p = 604800,
    h = () => ({
        today: c.intl.string(l.default.VjIAQU),
        yesterday: c.intl.string(l.default["2a8xHR"]),
        days: l.default.Xt6oND,
    }),
    m = (e) =>
        e
            ? {
                  today: c.intl.string(l.default["2AtcIi"]),
                  yesterday: c.intl.string(l.default.stOECg),
                  days: l.default.n8n5BQ,
              }
            : {
                  today: c.intl.string(l.default.g1ZX6u),
                  yesterday: c.intl.string(l.default.s3qSVl),
                  days: l.default.f1UJiI,
              },
    g = (e, t, n) => {
        let r = i()().diff(i()(e), "s"),
            a = t(),
            o = i()(e).format("LL");
        return r < f
            ? a.today
            : r < _
              ? a.yesterday
              : c.intl.formatToPlainString(a.days, { days: Math.min(Math.floor(r / f), null != n ? n : 999) });
    },
    E = (e, t) => {
        let n = i()().diff(i()(e), "s"),
            r = t(),
            a = i()(e).format("LL");
        return n < u
            ? r.seconds
            : n < d
              ? c.intl.formatToPlainString(r.minutes, { count: Math.floor(n / u) })
              : n < f
                ? c.intl.formatToPlainString(r.hours, { count: Math.floor(n / d) })
                : n < _
                  ? r.yesterday
                  : n < p
                    ? c.intl.formatToPlainString(r.days, { count: Math.floor(n / f) })
                    : c.intl.formatToPlainString(r.date, { date: a });
    },
    b = (e) =>
        e.display_type === s.MY.USER_ADD ||
        e.display_type === s.MY.USER_INTERACTION ||
        e.display_type === s.MY.USER_CALLED,
    y = (e) => e.display_type === s.MY.GUILD_ADD || e.display_type === s.MY.GUILD_INTERACTION,
    O = (e) => e.display_type === s.MY.PURCHASES,
    v = (e) => {
        for (let t of Object.values(s.MY)) if (t.toString() === e) return t;
    },
    I = (e) => {
        let t = T(e);
        return 0 === t.size ? [] : Array.from(t.entries()).sort((e, t) => e[1].priority - t[1].priority);
    },
    T = (e) => {
        let t = new Map(s.tx);
        return e && (t = new Map([...t, ...s.U])), t;
    },
    S = (e) => {
        let t = Math.floor(e / 60),
            n = e % 60;
        return t > 0 ? "".concat(t, "h ").concat(n, "m") : "".concat(n, "m");
    },
    A = () => {
        if (o.Z.getAreLinkedUsersProcessed()) return o.Z.getLinkedUsers();
        a.ZP.fetchLinkedUsers();
    };
