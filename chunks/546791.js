n.d(e, {
    LI: () => E,
    Qr: () => l,
    f0: () => c,
    iB: () => d,
    jV: () => _,
    lx: () => u,
    t3: () => s
}),
    n(47120);
var r = n(913527),
    i = n.n(r),
    o = n(292352),
    a = n(388032);
let s = () => ({
        today: a.NW.string(a.t.VjIAQU),
        yesterday: a.NW.string(a.t['2a8xHR']),
        days: a.t.Xt6oND
    }),
    l = (t) =>
        t
            ? {
                  today: a.NW.string(a.t['2AtcIi']),
                  yesterday: a.NW.string(a.t.stOECg),
                  days: a.t.n8n5BQ
              }
            : {
                  today: a.NW.string(a.t.g1ZX6u),
                  yesterday: a.NW.string(a.t.s3qSVl),
                  days: a.t.f1UJiI
              },
    E = (t, e, n) => {
        let r = i()().diff(i()(t), 's'),
            o = e(),
            s = i()(t).format('LL');
        return r < 86400 ? o.today : r < 172800 ? o.yesterday : a.NW.formatToPlainString(o.days, { days: Math.min(Math.floor(r / 86400), null != n ? n : 999) });
    },
    u = (t, e) => {
        let n = i()().diff(i()(t), 's'),
            r = e(),
            o = i()(t).format('LL');
        return n < 60 ? r.seconds : n < 3600 ? a.NW.formatToPlainString(r.minutes, { count: Math.floor(n / 60) }) : n < 86400 ? a.NW.formatToPlainString(r.hours, { count: Math.floor(n / 3600) }) : n < 172800 ? r.yesterday : n < 604800 ? a.NW.formatToPlainString(r.days, { count: Math.floor(n / 86400) }) : a.NW.formatToPlainString(r.date, { date: o });
    },
    d = (t) => t.display_type === o.MY.USER_ADD || t.display_type === o.MY.USER_INTERACTION || t.display_type === o.MY.USER_CALLED,
    c = (t) => t.display_type === o.MY.GUILD_ADD || t.display_type === o.MY.GUILD_INTERACTION,
    _ = (t) => {
        for (let e of Object.values(o.MY)) if (e.toString() === t) return e;
    };
