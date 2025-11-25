n.d(t, { Z: () => d });
var i = n(54381),
    s = n(793030),
    l = n(442837),
    r = n(487419),
    a = n(675478),
    o = n(388032);
function d(e) {
    let { guildId: t } = e,
        n = (0, l.e7)([r.Z], () => r.Z.getGuildAlertSettings()[t]);
    return (0, i.jsxs)(s.Kqy, {
        gap: 24,
        children: [
            (0, i.jsx)(s.rsf, {
                checked: !(null == n ? void 0 : n.disableRaidAlertNag),
                label: o.intl.string(o.t.u6dc5B),
                description: o.intl.string(o.t.z8Td48),
                onChange: (e) =>
                    (0, a.PS)(
                        t,
                        (t) => {
                            t.disableRaidAlertNag = !e;
                        },
                        a.fy.INFREQUENT_USER_ACTION,
                    ),
            }),
            (0, i.jsx)(s.rsf, {
                checked: !(null == n ? void 0 : n.disableRaidAlertPush),
                label: o.intl.string(o.t.P8MG6q),
                description: o.intl.string(o.t.PyxXs8),
                onChange: (e) =>
                    (0, a.PS)(
                        t,
                        (t) => {
                            t.disableRaidAlertPush = !e;
                        },
                        a.fy.INFREQUENT_USER_ACTION,
                    ),
            }),
        ],
    });
}
