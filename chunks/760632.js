n.d(t, { M: () => h });
var i = n(200651),
    r = n(192379),
    l = n(481060),
    s = n(434404),
    a = n(388032);
let o = ''.concat(60),
    c = ''.concat(300),
    d = ''.concat(900),
    u = ''.concat(1800),
    m = ''.concat(3600);
function h(e) {
    let { canManageGuild: t, afkTimeout: n, afkChannelId: h } = e,
        g = r.useMemo(
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
                    value: d,
                    label: a.intl.formatToPlainString(a.t.iXLF9f, { minutes: 15 })
                },
                {
                    value: u,
                    label: a.intl.formatToPlainString(a.t.iXLF9f, { minutes: 30 })
                },
                {
                    value: m,
                    label: a.intl.formatToPlainString(a.t.xCjYxM, { hours: 1 })
                }
            ],
            []
        ),
        x = r.useCallback((e) => {
            s.Z.updateGuild({ afkTimeout: parseInt(e, 10) });
        }, []);
    return (0, i.jsx)(l.q4e, {
        value: null == n ? null : ''.concat(n),
        options: g,
        isDisabled: null == h || !t,
        onChange: x
    });
}
