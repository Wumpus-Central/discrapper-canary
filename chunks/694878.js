"use strict";
n.d(t, { A: () => g });
var i = n(627968),
    s = n(64700),
    l = n(397927),
    r = n(793574),
    a = n(525104),
    o = n(828162),
    d = n(997509),
    c = n(610042),
    u = n(583970),
    m = n(985018);
function g(e) {
    let { className: t, guildId: n, selectedBadge: g } = e,
        x = s.useCallback(
            (e) => {
                d.A.updateGuildProfile(n, { badge: e });
            },
            [n],
        ),
        h = s.useCallback(() => {
            (0, o.A)(n, r.A.GUILD_POWERUPS_GUILD_SETTINGS_TAGS, "guildTagsBadgePacks"), d.A.close();
        }, [n]),
        _ = (0, a.A)(),
        p = s.useId();
    return (0, i.jsx)("div", {
        className: t,
        children: (0, i.jsx)(l.D0$, {
            label: m.intl.string(u.default.pb7lpK),
            description: m.intl.string(u.default.X4LEbC),
            id: p,
            children: (0, i.jsx)(c.y, {
                badgeCollection: _,
                handleBoostUpsellClick: h,
                onBadgeClicked: x,
                selectedBadge: g,
                headingId: p,
            }),
        }),
    });
}
