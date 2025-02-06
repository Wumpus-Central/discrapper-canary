n.d(t, {
    b6: () => h,
    j3: () => f,
    xC: () => g
}),
    n(47120);
var l = n(866442),
    i = n(503438),
    r = n(420660),
    a = n(168631),
    s = n(621853),
    o = n(981631),
    u = n(388032);
let c = (e) => (''.concat(e).length < 13 ? 1000 * e : e),
    d = (e) => {
        let t = Date.now() / 1000;
        return null != e.end
            ? m(t, c(e.end) / 1000)
            : null != e.start
              ? m(c(e.start) / 1000, t)
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
    h = (e) => {
        let t = d(e);
        return t.hours > 0 ? ''.concat(t.hours, ' hours') : t.minutes > 0 ? ''.concat(t.minutes, ' minutes') : ''.concat(t.seconds, ' seconds');
    },
    f = (e, t) => {
        var n;
        let i = s.Z.getUserProfile(e.id),
            [r, o] = null !== (n = null == i ? void 0 : i.themeColors) && void 0 !== n ? n : [],
            u = (0, a.V3)(r),
            c = null != o ? (0, l.Rf)(o) : t;
        return {
            color: c,
            theme: c === t ? 'dark' : u
        };
    },
    g = (e, t) =>
        (0, i.Z)(t)
            ? u.intl.formatToPlainString(u.t.Xuqn4e, {
                  username: e.username,
                  song: t.details,
                  artist: t.state
              })
            : t.type === o.IIU.PLAYING
              ? u.intl.formatToPlainString(u.t.tAwI1t, {
                    username: e.username,
                    activity: t.name
                })
              : t.type === o.IIU.WATCHING
                ? u.intl.formatToPlainString(u.t.kCbfbG, {
                      username: e.username,
                      activity: t.name
                  })
                : t.type === o.IIU.LISTENING
                  ? u.intl.formatToPlainString(u.t.h2yWWV, {
                        username: e.username,
                        activity: t.name
                    })
                  : (0, r.Z)(t) || t.type === o.IIU.STREAMING
                    ? u.intl.formatToPlainString(u.t.wqU7Wl, {
                          username: e.username,
                          activity: t.name
                      })
                    : u.intl.formatToPlainString(u.t['75iW6e'], {
                          username: e.username,
                          activity: t.name
                      });
