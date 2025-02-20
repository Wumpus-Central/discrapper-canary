n.d(t, { M: () => p });
var r = n(200651),
    i = n(192379),
    s = n(481060),
    a = n(434404),
    l = n(388032);
let o = ''.concat(60),
    c = ''.concat(300),
    d = ''.concat(900),
    u = ''.concat(1800),
    m = ''.concat(3600);
function p(e) {
    let { canManageGuild: t, afkTimeout: n, afkChannelId: p } = e,
        g = i.useMemo(
            () => [
                {
                    value: o,
                    label: l.NW.formatToPlainString(l.t.iXLF9f, { minutes: 1 })
                },
                {
                    value: c,
                    label: l.NW.formatToPlainString(l.t.iXLF9f, { minutes: 5 })
                },
                {
                    value: d,
                    label: l.NW.formatToPlainString(l.t.iXLF9f, { minutes: 15 })
                },
                {
                    value: u,
                    label: l.NW.formatToPlainString(l.t.iXLF9f, { minutes: 30 })
                },
                {
                    value: m,
                    label: l.NW.formatToPlainString(l.t.xCjYxM, { hours: 1 })
                }
            ],
            []
        ),
        h = i.useCallback((e) => {
            a.Z.updateGuild({ afkTimeout: parseInt(e, 10) });
        }, []);
    return (0, r.jsx)(s.q4e, {
        value: null == n ? null : ''.concat(n),
        options: g,
        isDisabled: null == p || !t,
        onChange: h
    });
}
