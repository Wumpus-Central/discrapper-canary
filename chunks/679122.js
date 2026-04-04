n.d(t, { O: () => A });
var i = n(627968),
    s = n(311907),
    l = n(743790),
    a = n(419954),
    r = n(933297),
    o = n(71393),
    d = n(711014),
    c = n(253932),
    u = n(780964),
    m = n(985018);
function g() {
    let e = c.JG.useSetting();
    return (0, s.bG)([d.Ay, o.A], () => {
        let t = new Set(e);
        return d.Ay.getFlattenedGuildIds().filter((e) => null != o.A.getGuild(e) && !t.has(e));
    }, [e]);
}
let _ = {
        type: r.wF.STACKED_ICONS,
        useIcons: function () {
            let e = g(),
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
    x = (0, a.AK)(u.X.PROFILE_PRIVACY_TO_ACTIVITY_PRIVACY_NAVIGATOR, {
        useSubtitle: function () {
            let e = g();
            if (0 === e.length) return m.intl.format(m.t.QJIJ5p, {});
            let t = o.A.getGuild(e[0]),
                n = t?.name ?? "",
                i = e.length - 1;
            return 0 === i
                ? m.intl.format(m.t["T+8J4A"], { guildName: n })
                : m.intl.format(m.t["3JyODQ"], { guildName: n, count: i });
        },
        useTrailingDecoration: function () {
            return _;
        },
        destinationKey: u.X.ACTIVITY_PRIVACY_PANEL,
    }),
    A = (0, a.gN)(u.X.PROFILE_PRIVACY_RELATED_SETTINGS, { buildLayout: () => [x] });
