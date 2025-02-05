n.d(t, {
    b6: () => p,
    j3: () => h,
    xC: () => g
}),
    n(47120);
var l = n(866442),
    i = n(503438),
    r = n(420660),
    a = n(168631),
    s = n(621853),
    o = n(981631),
    c = n(388032);
let u = (e) => (''.concat(e).length < 13 ? 1000 * e : e),
    d = (e) => {
        let t = Date.now() / 1000;
        return null != e.end
            ? m(t, u(e.end) / 1000)
            : null != e.start
              ? m(u(e.start) / 1000, t)
              : {
                    hours: 0,
                    minutes: 0,
                    seconds: 0
                };
    },
    m = (e, t) => {
        let n = Math.max(t - e, 0),
            l = Math.floor(n) % 60,
            i = Math.floor(n / 60) % 60;
        return {
            hours: Math.floor(n / 3600) % 24,
            minutes: i,
            seconds: l
        };
    },
    p = (e) => {
        let t = d(e);
        return t.hours > 0 ? ''.concat(t.hours, ' hours') : t.minutes > 0 ? ''.concat(t.minutes, ' minutes') : ''.concat(t.seconds, ' seconds');
    },
    h = (e, t) => {
        var n;
        let i = s.Z.getUserProfile(e.id),
            [r, o] = null !== (n = null == i ? void 0 : i.themeColors) && void 0 !== n ? n : [],
            c = (0, a.V3)(r),
            u = null != o ? (0, l.Rf)(o) : t;
        return {
            color: u,
            theme: u === t ? 'dark' : c
        };
    },
    g = (e, t) =>
        (0, i.Z)(t)
            ? c.intl.formatToPlainString(c.t.Xuqn4e, {
                  username: e.username,
                  song: t.details,
                  artist: t.state
              })
            : t.type === o.IIU.PLAYING
              ? c.intl.formatToPlainString(c.t.tAwI1t, {
                    username: e.username,
                    activity: t.name
                })
              : t.type === o.IIU.WATCHING
                ? c.intl.formatToPlainString(c.t.kCbfbG, {
                      username: e.username,
                      activity: t.name
                  })
                : t.type === o.IIU.LISTENING
                  ? c.intl.formatToPlainString(c.t.h2yWWV, {
                        username: e.username,
                        activity: t.name
                    })
                  : (0, r.Z)(t) || t.type === o.IIU.STREAMING
                    ? c.intl.formatToPlainString(c.t.wqU7Wl, {
                          username: e.username,
                          activity: t.name
                      })
                    : c.intl.formatToPlainString(c.t['75iW6e'], {
                          username: e.username,
                          activity: t.name
                      });
