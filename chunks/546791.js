n.d(e, {
    LI: () => u,
    Qr: () => o,
    f0: () => _,
    iB: () => c,
    jV: () => T,
    lx: () => E,
    t3: () => s
}),
    n(388685);
var i = n(913527),
    r = n.n(i),
    l = n(292352),
    a = n(332495),
    d = n(388032);
let s = () => ({
        today: d.intl.string(a.default.VjIAQU),
        yesterday: d.intl.string(a.default['2a8xHR']),
        days: a.default.Xt6oND
    }),
    o = (t) =>
        t
            ? {
                  today: d.intl.string(a.default['2AtcIi']),
                  yesterday: d.intl.string(a.default.stOECg),
                  days: a.default.n8n5BQ
              }
            : {
                  today: d.intl.string(a.default.g1ZX6u),
                  yesterday: d.intl.string(a.default.s3qSVl),
                  days: a.default.f1UJiI
              },
    u = (t, e, n) => {
        let i = r()().diff(r()(t), 's'),
            l = e(),
            a = r()(t).format('LL');
        return i < 86400 ? l.today : i < 172800 ? l.yesterday : d.intl.formatToPlainString(l.days, { days: Math.min(Math.floor(i / 86400), null != n ? n : 999) });
    },
    E = (t, e) => {
        let n = r()().diff(r()(t), 's'),
            i = e(),
            l = r()(t).format('LL');
        return n < 60 ? i.seconds : n < 3600 ? d.intl.formatToPlainString(i.minutes, { count: Math.floor(n / 60) }) : n < 86400 ? d.intl.formatToPlainString(i.hours, { count: Math.floor(n / 3600) }) : n < 172800 ? i.yesterday : n < 604800 ? d.intl.formatToPlainString(i.days, { count: Math.floor(n / 86400) }) : d.intl.formatToPlainString(i.date, { date: l });
    },
    c = (t) => t.display_type === l.MY.USER_ADD || t.display_type === l.MY.USER_INTERACTION || t.display_type === l.MY.USER_CALLED,
    _ = (t) => t.display_type === l.MY.GUILD_ADD || t.display_type === l.MY.GUILD_INTERACTION,
    T = (t) => {
        for (let e of Object.values(l.MY)) if (e.toString() === t) return e;
    };
