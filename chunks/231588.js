t.r(n), t.d(n, { default: () => f });
var l = t(200651),
    r = t(192379),
    a = t(442837),
    i = t(749210),
    s = t(112724),
    c = t(923029),
    o = t(353926),
    d = t(931261),
    u = t(333323),
    h = t(430824);
let m = (0, s.Z)(u.Z),
    f = function (e) {
        let { guildId: n } = e,
            t = (0, a.e7)([h.Z], () => h.Z.getGuild(n), [n]),
            s = (0, a.e7)([o.Z], () => o.Z.hasLoadedExperiments),
            u = (0, d.g)(n);
        return (r.useEffect(() => {
            if (s && !u) return void i.Z.escapeToDefaultChannel(n);
        }, [n, s, u]),
        null != t && u)
            ? (0, l.jsx)(m, { guild: t })
            : (0, l.jsx)(c.Z, { channelId: void 0 });
    };
