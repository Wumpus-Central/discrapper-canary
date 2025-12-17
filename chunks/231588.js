t.r(n), t.d(n, { default: () => f });
var a = t(54381),
    l = t(473749),
    r = t(442837),
    i = t(749210),
    c = t(112724),
    s = t(923029),
    d = t(353926),
    o = t(931261),
    u = t(333323),
    m = t(430824);
let h = (0, c.Z)(u.Z),
    f = function (e) {
        let { guildId: n } = e,
            t = (0, r.e7)([m.Z], () => m.Z.getGuild(n), [n]),
            c = (0, r.e7)([d.Z], () => d.Z.hasLoadedExperiments),
            u = (0, o.g)(n);
        return (l.useEffect(() => {
            if (c && !u) return void i.Z.escapeToDefaultChannel(n);
        }, [n, c, u]),
        null != t && u)
            ? (0, a.jsx)(h, { guild: t })
            : (0, a.jsx)(s.Z, { channelId: void 0 });
    };
