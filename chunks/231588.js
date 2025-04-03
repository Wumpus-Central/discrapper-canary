l.r(n), l.d(n, { default: () => g });
var t = l(200651),
    r = l(192379),
    a = l(442837),
    i = l(749210),
    s = l(112724),
    c = l(923029),
    o = l(353926),
    d = l(931261),
    u = l(333323),
    m = l(430824);
let h = (0, s.Z)(u.Z),
    g = function (e) {
        let { guildId: n } = e,
            l = (0, a.e7)([m.Z], () => m.Z.getGuild(n), [n]),
            s = (0, a.e7)([o.Z], () => o.Z.hasLoadedExperiments),
            u = (0, d.g)(n);
        return (r.useEffect(() => {
            if (s && !u) return void i.Z.escapeToDefaultChannel(n);
        }, [n, s, u]),
        null != l && u)
            ? (0, t.jsx)(h, { guild: l })
            : (0, t.jsx)(c.Z, { channelId: void 0 });
    };
