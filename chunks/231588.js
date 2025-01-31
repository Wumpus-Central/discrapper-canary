l.r(n), l.d(n, { default: () => g });
var a = l(200651),
    i = l(192379),
    t = l(442837),
    r = l(749210),
    s = l(112724),
    d = l(923029),
    o = l(353926),
    c = l(931261),
    u = l(333323),
    h = l(430824);
let m = (0, s.Z)(u.Z),
    g = function (e) {
        let { guildId: n } = e,
            l = (0, t.e7)([h.Z], () => h.Z.getGuild(n), [n]),
            s = (0, t.e7)([o.Z], () => o.Z.hasLoadedExperiments),
            u = (0, c.g)(n);
        return (i.useEffect(() => {
            if (s && !u) {
                r.Z.escapeToDefaultChannel(n);
                return;
            }
        }, [n, s, u]),
        null != l && u)
            ? (0, a.jsx)(m, { guild: l })
            : (0, a.jsx)(d.Z, { channelId: void 0 });
    };
