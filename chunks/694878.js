n.d(t, { A: () => g });
var i = n(627968),
    l = n(64700),
    s = n(452027),
    r = n(793574),
    a = n(525104),
    o = n(828162),
    d = n(997509),
    c = n(610042),
    u = n(661023),
    m = n(985018);
function g(e) {
    let { className: t, guildId: n, selectedBadge: g } = e,
        h = l.useCallback(
            (e) => {
                d.A.updateGuildProfile(n, { badge: e });
            },
            [n],
        ),
        x = l.useCallback(() => {
            (0, o.A)(n, r.A.GUILD_POWERUPS_GUILD_SETTINGS_TAGS, "guildTagsBadgePacks"), d.A.close();
        }, [n]),
        _ = (0, a.A)(),
        p = l.useId();
    return (0, i.jsx)("div", {
        className: t,
        children: (0, i.jsx)(s.D, {
            label: m.intl.string(u.default.pb7lpK),
            description: m.intl.string(u.default.X4LEbC),
            id: p,
            children: (0, i.jsx)(c.y, {
                badgeCollection: _,
                handleBoostUpsellClick: x,
                onBadgeClicked: h,
                selectedBadge: g,
                headingId: p,
            }),
        }),
    });
}
