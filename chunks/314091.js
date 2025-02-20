n.d(t, {
    b6: () => p,
    j3: () => m,
    xC: () => g
}),
    n(47120);
var r = n(866442),
    l = n(503438),
    i = n(420660),
    a = n(168631),
    o = n(621853),
    s = n(981631),
    c = n(388032);
let u = (e) => (''.concat(e).length < 13 ? 1000 * e : e),
    d = (e) => {
        let t = Date.now() / 1000;
        return null != e.end
            ? f(t, u(e.end) / 1000)
            : null != e.start
              ? f(u(e.start) / 1000, t)
              : {
                    hours: 0,
                    minutes: 0,
                    seconds: 0
                };
    },
    f = (e, t) => {
        let n = Math.max(t - e, 0),
            r = Math.floor(n) % 60,
            l = Math.floor(n / 60) % 60;
        return {
            hours: Math.floor(n / 3600) % 24,
            minutes: l,
            seconds: r
        };
    },
    p = (e) => {
        let t = d(e);
        return t.hours > 0 ? ''.concat(t.hours, ' hours') : t.minutes > 0 ? ''.concat(t.minutes, ' minutes') : ''.concat(t.seconds, ' seconds');
    },
    m = (e, t) => {
        var n;
        let l = o.Z.getUserProfile(e.id),
            [i, s] = null !== (n = null == l ? void 0 : l.themeColors) && void 0 !== n ? n : [],
            c = (0, a.V3)(i),
            u = null != s ? (0, r.Rf)(s) : t;
        return {
            color: u,
            theme: u === t ? 'dark' : c
        };
    },
    g = (e, t) =>
        (0, l.Z)(t)
            ? c.NW.formatToPlainString(c.t.Xuqn4e, {
                  username: e.username,
                  song: t.details,
                  artist: t.state
              })
            : t.type === s.IIU.PLAYING
              ? c.NW.formatToPlainString(c.t.tAwI1t, {
                    username: e.username,
                    activity: t.name
                })
              : t.type === s.IIU.WATCHING
                ? c.NW.formatToPlainString(c.t.kCbfbG, {
                      username: e.username,
                      activity: t.name
                  })
                : t.type === s.IIU.LISTENING
                  ? c.NW.formatToPlainString(c.t.h2yWWV, {
                        username: e.username,
                        activity: t.name
                    })
                  : (0, i.Z)(t) || t.type === s.IIU.STREAMING
                    ? c.NW.formatToPlainString(c.t.wqU7Wl, {
                          username: e.username,
                          activity: t.name
                      })
                    : c.NW.formatToPlainString(c.t['75iW6e'], {
                          username: e.username,
                          activity: t.name
                      });
