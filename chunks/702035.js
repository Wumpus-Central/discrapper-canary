l.r(n), l.d(n, { default: () => b });
var t = l(627968),
    a = l(64700),
    r = l(311907),
    i = l(686956),
    s = l(456412),
    c = l(377045),
    d = l(49463),
    o = l(473529),
    u = l(117733),
    f = l(71393);
let h = (0, s.A)(u.A),
    b = function (e) {
        let { guildId: n } = e,
            l = (0, r.bG)([f.A], () => f.A.getGuild(n), [n]),
            s = (0, r.bG)([d.A], () => d.A.hasLoadedExperiments),
            u = (0, o.d)(n);
        return (a.useEffect(() => {
            if (s && !u) return void i.A.escapeToDefaultChannel(n);
        }, [n, s, u]),
        null != l && u)
            ? (0, t.jsx)(h, { guild: l })
            : (0, t.jsx)(c.A, { channelId: void 0 });
    };
