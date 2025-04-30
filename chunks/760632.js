n.d(t, { M: () => g });
var r = n(200651),
    i = n(192379),
    l = n(481060),
    s = n(434404),
    a = n(388032);
let o = ''.concat(60),
    c = ''.concat(300),
    u = ''.concat(900),
    d = ''.concat(1800),
    m = ''.concat(3600);
function g(e) {
    let { canManageGuild: t, afkTimeout: n, afkChannelId: g } = e,
        p = i.useMemo(
            () => [
                {
                    value: o,
                    label: a.intl.formatToPlainString(a.t.iXLF9f, { minutes: 1 })
                },
                {
                    value: c,
                    label: a.intl.formatToPlainString(a.t.iXLF9f, { minutes: 5 })
                },
                {
                    value: u,
                    label: a.intl.formatToPlainString(a.t.iXLF9f, { minutes: 15 })
                },
                {
                    value: d,
                    label: a.intl.formatToPlainString(a.t.iXLF9f, { minutes: 30 })
                },
                {
                    value: m,
                    label: a.intl.formatToPlainString(a.t.xCjYxM, { hours: 1 })
                }
            ],
            []
        ),
        h = i.useCallback((e) => {
            s.Z.updateGuild({ afkTimeout: parseInt(e, 10) });
        }, []);
    return (0, r.jsx)(l.q4e, {
        value: null == n ? null : ''.concat(n),
        options: p,
        isDisabled: null == g || !t,
        onChange: h
    });
}
