n.d(t, {
    E2: () => O,
    LI: () => h,
    Qr: () => p,
    _p: () => y,
    f0: () => E,
    iB: () => g,
    jV: () => b,
    lx: () => m,
    t3: () => _,
    yH: () => v,
}),
    n(388685),
    n(642613);
var r = n(913527),
    i = n.n(r),
    a = n(292352),
    o = n(345909),
    s = n(388032);
let l = 60,
    c = 3600,
    u = 86400,
    d = 172800,
    f = 604800,
    _ = () => ({
        today: s.intl.string(o.default.VjIAQU),
        yesterday: s.intl.string(o.default["2a8xHR"]),
        days: o.default.Xt6oND,
    }),
    p = (e) =>
        e
            ? {
                  today: s.intl.string(o.default["2AtcIi"]),
                  yesterday: s.intl.string(o.default.stOECg),
                  days: o.default.n8n5BQ,
              }
            : {
                  today: s.intl.string(o.default.g1ZX6u),
                  yesterday: s.intl.string(o.default.s3qSVl),
                  days: o.default.f1UJiI,
              },
    h = (e, t, n) => {
        let r = i()().diff(i()(e), "s"),
            a = t(),
            o = i()(e).format("LL");
        return r < u
            ? a.today
            : r < d
              ? a.yesterday
              : s.intl.formatToPlainString(a.days, { days: Math.min(Math.floor(r / u), null != n ? n : 999) });
    },
    m = (e, t) => {
        let n = i()().diff(i()(e), "s"),
            r = t(),
            a = i()(e).format("LL");
        return n < l
            ? r.seconds
            : n < c
              ? s.intl.formatToPlainString(r.minutes, { count: Math.floor(n / l) })
              : n < u
                ? s.intl.formatToPlainString(r.hours, { count: Math.floor(n / c) })
                : n < d
                  ? r.yesterday
                  : n < f
                    ? s.intl.formatToPlainString(r.days, { count: Math.floor(n / u) })
                    : s.intl.formatToPlainString(r.date, { date: a });
    },
    g = (e) =>
        e.display_type === a.MY.USER_ADD ||
        e.display_type === a.MY.USER_INTERACTION ||
        e.display_type === a.MY.USER_CALLED,
    E = (e) => e.display_type === a.MY.GUILD_ADD || e.display_type === a.MY.GUILD_INTERACTION,
    b = (e) => {
        for (let t of Object.values(a.MY)) if (t.toString() === e) return t;
    },
    y = (e) => {
        let t = O(e);
        return 0 === t.size ? [] : Array.from(t.entries()).sort((e, t) => e[1].priority - t[1].priority);
    },
    O = (e) => {
        let t = new Map(a.tx);
        return e && (t = new Map([...t, ...a.U])), t;
    },
    v = (e) => {
        let t = Math.floor(e / 60),
            n = e % 60;
        return t > 0 ? "".concat(t, "h ").concat(n, "m") : "".concat(n, "m");
    };
