n.d(e, {
    LI: () => E,
    Qr: () => d,
    f0: () => _,
    iB: () => c,
    jV: () => T,
    lx: () => u,
    t3: () => l
}),
    n(47120);
var r = n(913527),
    i = n.n(r),
    a = n(292352),
    o = n(332495),
    s = n(388032);
let l = () => ({
        today: s.NW.string(o.Z.VjIAQU),
        yesterday: s.NW.string(o.Z['2a8xHR']),
        days: o.Z.Xt6oND
    }),
    d = (t) =>
        t
            ? {
                  today: s.NW.string(o.Z['2AtcIi']),
                  yesterday: s.NW.string(o.Z.stOECg),
                  days: o.Z.n8n5BQ
              }
            : {
                  today: s.NW.string(o.Z.g1ZX6u),
                  yesterday: s.NW.string(o.Z.s3qSVl),
                  days: o.Z.f1UJiI
              },
    E = (t, e, n) => {
        let r = i()().diff(i()(t), 's'),
            a = e(),
            o = i()(t).format('LL');
        return r < 86400 ? a.today : r < 172800 ? a.yesterday : s.NW.formatToPlainString(a.days, { days: Math.min(Math.floor(r / 86400), null != n ? n : 999) });
    },
    u = (t, e) => {
        let n = i()().diff(i()(t), 's'),
            r = e(),
            a = i()(t).format('LL');
        return n < 60 ? r.seconds : n < 3600 ? s.NW.formatToPlainString(r.minutes, { count: Math.floor(n / 60) }) : n < 86400 ? s.NW.formatToPlainString(r.hours, { count: Math.floor(n / 3600) }) : n < 172800 ? r.yesterday : n < 604800 ? s.NW.formatToPlainString(r.days, { count: Math.floor(n / 86400) }) : s.NW.formatToPlainString(r.date, { date: a });
    },
    c = (t) => t.display_type === a.MY.USER_ADD || t.display_type === a.MY.USER_INTERACTION || t.display_type === a.MY.USER_CALLED,
    _ = (t) => t.display_type === a.MY.GUILD_ADD || t.display_type === a.MY.GUILD_INTERACTION,
    T = (t) => {
        for (let e of Object.values(a.MY)) if (e.toString() === t) return e;
    };
