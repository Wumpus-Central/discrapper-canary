t.r(n), t.d(n, { default: () => f });
var r = t(200651),
    l = t(192379),
    a = t(442837),
    i = t(749210),
    s = t(112724),
    o = t(923029),
    c = t(353926),
    d = t(931261),
    u = t(333323),
    m = t(430824);
let h = (0, s.Z)(u.Z),
    f = function (e) {
        let { guildId: n } = e,
            t = (0, a.e7)([m.Z], () => m.Z.getGuild(n), [n]),
            s = (0, a.e7)([c.Z], () => c.Z.hasLoadedExperiments),
            u = (0, d.g)(n);
        return (l.useEffect(() => {
            if (s && !u) return void i.Z.escapeToDefaultChannel(n);
        }, [n, s, u]),
        null != t && u)
            ? (0, r.jsx)(h, { guild: t })
            : (0, r.jsx)(o.Z, { channelId: void 0 });
    };
