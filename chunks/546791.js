n.d(e, {
    LI: () => E,
    Qr: () => o,
    f0: () => u,
    iB: () => _,
    jV: () => T,
    lx: () => d,
    t3: () => s
}),
    n(47120);
var i = n(913527),
    r = n.n(i),
    l = n(292352),
    a = n(388032);
let s = () => ({
        today: a.intl.string(a.t.VjIAQU),
        yesterday: a.intl.string(a.t['2a8xHR']),
        days: a.t.Xt6oND
    }),
    o = (t) =>
        t
            ? {
                  today: a.intl.string(a.t['2AtcIi']),
                  yesterday: a.intl.string(a.t.stOECg),
                  days: a.t.n8n5BQ
              }
            : {
                  today: a.intl.string(a.t.g1ZX6u),
                  yesterday: a.intl.string(a.t.s3qSVl),
                  days: a.t.f1UJiI
              },
    E = (t, e, n) => {
        let i = r()().diff(r()(t), 's'),
            l = e(),
            s = r()(t).format('LL');
        return i < 86400 ? l.today : i < 172800 ? l.yesterday : a.intl.formatToPlainString(l.days, { days: Math.min(Math.floor(i / 86400), null != n ? n : 999) });
    },
    d = (t, e) => {
        let n = r()().diff(r()(t), 's'),
            i = e(),
            l = r()(t).format('LL');
        return n < 60 ? i.seconds : n < 3600 ? a.intl.formatToPlainString(i.minutes, { count: Math.floor(n / 60) }) : n < 86400 ? a.intl.formatToPlainString(i.hours, { count: Math.floor(n / 3600) }) : n < 172800 ? i.yesterday : n < 604800 ? a.intl.formatToPlainString(i.days, { count: Math.floor(n / 86400) }) : a.intl.formatToPlainString(i.date, { date: l });
    },
    _ = (t) => t.display_type === l.MY.USER_ADD || t.display_type === l.MY.USER_INTERACTION || t.display_type === l.MY.USER_CALLED,
    u = (t) => t.display_type === l.MY.GUILD_ADD || t.display_type === l.MY.GUILD_INTERACTION,
    T = (t) => {
        for (let e of Object.values(l.MY)) if (e.toString() === t) return e;
    };
