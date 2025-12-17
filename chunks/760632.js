n.d(t, { M: () => f });
var r = n(54381),
    i = n(473749),
    l = n(199849),
    a = n(434404),
    s = n(388032);
let o = "".concat(60),
    c = "".concat(300),
    d = "".concat(900),
    u = "".concat(1800),
    g = "".concat(3600);
function f(e) {
    let { canManageGuild: t, afkTimeout: n, afkChannelId: f, label: m } = e,
        b = i.useMemo(
            () => [
                {
                    value: o,
                    label: s.intl.formatToPlainString(s.t.iXLF9W, { minutes: 1 }),
                },
                {
                    value: c,
                    label: s.intl.formatToPlainString(s.t.iXLF9W, { minutes: 5 }),
                },
                {
                    value: d,
                    label: s.intl.formatToPlainString(s.t.iXLF9W, { minutes: 15 }),
                },
                {
                    value: u,
                    label: s.intl.formatToPlainString(s.t.iXLF9W, { minutes: 30 }),
                },
                {
                    value: g,
                    label: s.intl.formatToPlainString(s.t.xCjYxK, { hours: 1 }),
                },
            ],
            [],
        ),
        p = i.useCallback((e) => {
            a.Z.updateGuild({ afkTimeout: parseInt(e, 10) });
        }, []);
    return (0, r.jsx)(l.y6, {
        label: m,
        value: null == n ? null : "".concat(n),
        options: b,
        isDisabled: null == f || !t,
        onChange: p,
    });
}
