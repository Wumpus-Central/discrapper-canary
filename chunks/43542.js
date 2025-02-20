n.d(t, { Z: () => v });
var r = n(200651),
    l = n(192379),
    i = n(442837),
    a = n(481060),
    o = n(523751),
    c = n(706454),
    s = n(601964),
    u = n(709054),
    d = n(997431),
    m = n(388032),
    x = n(62552);
function v(e) {
    let { profile: t } = e,
        n = (0, i.e7)([c.default], () => c.default.locale),
        v = (0, d.M)(u.default.extractTimestamp(t.id), n),
        f = l.useMemo(() => {
            let e = new s.ZP(t);
            return (0, r.jsx)(o.Z, {
                guild: e,
                className: x.guildBadge,
                tooltipColor: a.ua7.Colors.NESTED,
                disableBoostClick: !0
            });
        }, [t]);
    return (0, r.jsxs)('div', {
        className: x.header,
        children: [
            (0, r.jsxs)('div', {
                className: x.nameContainer,
                children: [
                    (0, r.jsx)(a.X6q, {
                        className: x.guildName,
                        variant: 'heading-lg/medium',
                        color: 'header-primary',
                        children: t.name
                    }),
                    f
                ]
            }),
            (0, r.jsxs)('div', {
                className: x.members,
                children: [
                    (0, r.jsxs)('div', {
                        className: x.memberCount,
                        children: [
                            (0, r.jsx)('div', { className: x.dot }),
                            (0, r.jsx)(a.Text, {
                                variant: 'text-sm/normal',
                                color: 'text-secondary',
                                children: m.NW.format(m.t.zRl6XV, { count: t.memberCount })
                            })
                        ]
                    }),
                    (0, r.jsxs)('div', {
                        className: x.memberCount,
                        children: [
                            (0, r.jsx)('div', { className: x.dotOnline }),
                            (0, r.jsx)(a.Text, {
                                variant: 'text-sm/normal',
                                color: 'text-secondary',
                                children: m.NW.format(m.t['LC+S+v'], { membersOnline: t.onlineCount })
                            })
                        ]
                    })
                ]
            }),
            (0, r.jsx)('div', {
                className: x.established,
                children: (0, r.jsx)(a.Text, {
                    variant: 'text-sm/normal',
                    color: 'text-secondary',
                    children: m.NW.format(m.t['zb2Q5+'], { createdAtDate: v })
                })
            })
        ]
    });
}
