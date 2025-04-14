n.d(t, { M: () => g });
var r = n(200651),
    i = n(192379),
    s = n(481060),
    l = n(434404),
    a = n(388032);
let o = ''.concat(60),
    c = ''.concat(300),
    d = ''.concat(900),
    u = ''.concat(1800),
    m = ''.concat(3600);
function g(e) {
    let { canManageGuild: t, afkTimeout: n, afkChannelId: g } = e,
        p = i.useMemo(
            () => [
                {
                    value: o,
                    label: a.NW.formatToPlainString(a.t.iXLF9f, { minutes: 1 })
                },
                {
                    value: c,
                    label: a.NW.formatToPlainString(a.t.iXLF9f, { minutes: 5 })
                },
                {
                    value: d,
                    label: a.NW.formatToPlainString(a.t.iXLF9f, { minutes: 15 })
                },
                {
                    value: u,
                    label: a.NW.formatToPlainString(a.t.iXLF9f, { minutes: 30 })
                },
                {
                    value: m,
                    label: a.NW.formatToPlainString(a.t.xCjYxM, { hours: 1 })
                }
            ],
            []
        ),
        h = i.useCallback((e) => {
            l.Z.updateGuild({ afkTimeout: parseInt(e, 10) });
        }, []);
    return (0, r.jsx)(s.q4e, {
        value: null == n ? null : ''.concat(n),
        options: p,
        isDisabled: null == g || !t,
        onChange: h
    });
}
