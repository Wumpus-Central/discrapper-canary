n.d(t, { A: () => g });
var r = n(627968),
    i = n(64700),
    l = n(397927),
    s = n(793574),
    a = n(525104),
    c = n(828162),
    o = n(997509),
    d = n(610042),
    u = n(583970),
    f = n(985018);
function g(e) {
    let { className: t, guildId: n, selectedBadge: g } = e,
        b = i.useCallback(
            (e) => {
                o.A.updateGuildProfile(n, { badge: e });
            },
            [n],
        ),
        m = i.useCallback(() => {
            (0, c.A)(n, s.A.GUILD_POWERUPS_GUILD_SETTINGS_TAGS, "guildTagsBadgePacks"), o.A.close();
        }, [n]),
        p = (0, a.A)(),
        x = i.useId();
    return (0, r.jsx)("div", {
        className: t,
        children: (0, r.jsx)(l.D0$, {
            label: f.intl.string(u.default.pb7lpK),
            id: x,
            children: (0, r.jsx)(d.y, {
                badgeCollection: p,
                handleBoostUpsellClick: m,
                onBadgeClicked: b,
                selectedBadge: g,
                headingId: x,
            }),
        }),
    });
}
