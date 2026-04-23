n.d(t, { O: () => h });
var i = n(627968),
    s = n(311907),
    l = n(743790),
    a = n(419954),
    r = n(933297),
    o = n(71393),
    d = n(711014),
    u = n(253932),
    c = n(780964),
    g = n(985018);
function m() {
    let e = u.JG.useSetting();
    return (0, s.bG)([d.Ay, o.A], () => {
        let t = new Set(e);
        return d.Ay.getFlattenedGuildIds().filter((e) => null != o.A.getGuild(e) && !t.has(e));
    }, [e]);
}
let _ = {
        type: r.wF.STACKED_ICONS,
        useIcons: function () {
            let e = m(),
                t = (0, s.bG)(
                    [o.A],
                    () =>
                        e
                            .slice(0, 2)
                            .map((e) => o.A.getGuild(e))
                            .filter((e) => null != e),
                    [e],
                );
            return 0 === t.length
                ? null
                : t.length >= 2
                  ? {
                        frontIcon: { icon: (0, i.jsx)(l.$, { guild: t[0], size: 48 }), shape: r.NF.SQUIRCLE },
                        backIcon: { icon: (0, i.jsx)(l.$, { guild: t[1], size: 48 }), shape: r.NF.SQUIRCLE },
                    }
                  : { frontIcon: { icon: (0, i.jsx)(l.$, { guild: t[0], size: 48 }), shape: r.NF.SQUIRCLE } };
        },
    },
    A = (0, a.AK)(c.X.PROFILE_PRIVACY_TO_ACTIVITY_PRIVACY_NAVIGATOR, {
        useSubtitle: function () {
            let e = m();
            if (0 === e.length) return g.intl.format(g.t.QJIJ5p, {});
            let t = o.A.getGuild(e[0]),
                n = t?.name ?? "",
                i = e.length - 1;
            return 0 === i
                ? g.intl.format(g.t["T+8J4A"], { guildName: n })
                : g.intl.format(g.t["3JyODQ"], { guildName: n, count: i });
        },
        useTrailingDecoration: function () {
            return _;
        },
        destinationKey: c.X.ACTIVITY_PRIVACY_PANEL,
    }),
    h = (0, a.gN)(c.X.PROFILE_PRIVACY_RELATED_SETTINGS, { buildLayout: () => [A] });
