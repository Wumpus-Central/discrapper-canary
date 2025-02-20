l.r(n), l.d(n, { default: () => g });
var t = l(200651),
    r = l(192379),
    a = l(442837),
    i = l(749210),
    s = l(112724),
    o = l(923029),
    c = l(353926),
    d = l(931261),
    u = l(333323),
    m = l(430824);
let h = (0, s.Z)(u.Z),
    g = function (e) {
        let { guildId: n } = e,
            l = (0, a.e7)([m.Z], () => m.Z.getGuild(n), [n]),
            s = (0, a.e7)([c.Z], () => c.Z.hasLoadedExperiments),
            u = (0, d.g)(n);
        return (r.useEffect(() => {
            if (s && !u) {
                i.Z.escapeToDefaultChannel(n);
                return;
            }
        }, [n, s, u]),
        null != l && u)
            ? (0, t.jsx)(h, { guild: l })
            : (0, t.jsx)(o.Z, { channelId: void 0 });
    };
