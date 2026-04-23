l.r(n), l.d(n, { default: () => x });
var a = l(627968),
    s = l(64700),
    t = l(311907),
    i = l(686956),
    r = l(456412),
    d = l(377045),
    c = l(49463),
    o = l(473529),
    u = l(117733),
    h = l(71393);
let m = (0, r.A)(u.A),
    x = function (e) {
        let { guildId: n } = e,
            l = (0, t.bG)([h.A], () => h.A.getGuild(n), [n]),
            r = (0, t.bG)([c.A], () => c.A.hasLoadedExperiments),
            u = (0, o.d)(n);
        return (s.useEffect(() => {
            if (r && !u) return void i.A.escapeToDefaultChannel(n);
        }, [n, r, u]),
        null != l && u)
            ? (0, a.jsx)(m, { guild: l })
            : (0, a.jsx)(d.A, { channelId: void 0 });
    };
