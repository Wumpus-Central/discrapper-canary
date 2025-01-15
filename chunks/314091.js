n.d(t, {
    b6: function () {
        return f;
    },
    j3: function () {
        return p;
    },
    xC: function () {
        return h;
    }
}),
    n(47120);
var i = n(866442),
    l = n(503438),
    a = n(420660),
    r = n(168631),
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
            i = Math.floor(n) % 60,
            l = Math.floor(n / 60) % 60;
        return {
            hours: Math.floor(n / 3600) % 24,
            minutes: l,
            seconds: i
        };
    },
    f = (e) => {
        let t = d(e);
        return t.hours > 0 ? ''.concat(t.hours, ' hours') : t.minutes > 0 ? ''.concat(t.minutes, ' minutes') : ''.concat(t.seconds, ' seconds');
    },
    p = (e, t) => {
        var n;
        let l = s.Z.getUserProfile(e.id),
            [a, o] = null !== (n = null == l ? void 0 : l.themeColors) && void 0 !== n ? n : [],
            c = (0, r.V3)(a),
            u = null != o ? (0, i.Rf)(o) : t;
        return {
            color: u,
            theme: u === t ? 'dark' : c
        };
    },
    h = (e, t) =>
        (0, l.Z)(t)
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
                  : (0, a.Z)(t) || t.type === o.IIU.STREAMING
                    ? c.intl.formatToPlainString(c.t.wqU7Wl, {
                          username: e.username,
                          activity: t.name
                      })
                    : c.intl.formatToPlainString(c.t['75iW6e'], {
                          username: e.username,
                          activity: t.name
                      });
