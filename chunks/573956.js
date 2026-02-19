"use strict";
n.d(t, { G: () => b });
var i = n(627968),
    s = n(64700),
    l = n(417597),
    r = n(554146),
    a = n(827734),
    o = n(397927),
    c = n(442433),
    d = n(826673),
    u = n(591552),
    h = n(202776),
    A = n(454058),
    p = n(976860),
    g = n(222823),
    m = n(661191),
    _ = n(32603),
    f = n(652793),
    x = n(652215),
    C = n(746080),
    E = n(790782),
    I = n(985018);
function b(e) {
    let { guild: t, selected: b } = e,
        N = (0, h.A)(t),
        S = (0, d.JZ)(r.M.CHANNEL_BROWSER_NEW_BADGE_NUX),
        T = (0, l.yK)([A.A], () =>
            Array.from(A.A.getNewChannelIds(t.id)).filter((e) => A.A.shouldIndicateNewChannel(t.id, e)),
        ),
        v = (0, l.bG)([g.Ay], () => g.Ay.hasUnread(t.id, E.P.GUILD_ONBOARDING_QUESTION)),
        y = T.length > _.rR,
        j = (0, l.bG)([u.A, g.Ay], () => {
            let e = u.A.lastFetchedAt(t.id),
                n = g.Ay.lastMessageId(t.id, E.P.GUILD_ONBOARDING_QUESTION);
            if (null == n) return !1;
            let i = m.default.extractTimestamp(n);
            return null != e && e > i;
        }),
        R = s.useCallback(() => {
            (0, p.pX)(x.BVt.CHANNEL(t.id, N ? C.VV.CUSTOMIZE_COMMUNITY : C.VV.CHANNEL_BROWSER));
        }, [t.id, N]),
        O = s.useCallback(
            (e) => {
                (0, c.L3)(e, async () => {
                    let { default: e } = await n.e("30412").then(n.bind(n, 807431));
                    return (n) => (0, i.jsx)(e, { ...n, guild: t });
                });
            },
            [t],
        ),
        L = null;
    return (
        (S && !v && !y) ||
            b ||
            j ||
            (L = (0, i.jsx)(o.LpS, { color: a.A.colors.BADGE_BACKGROUND_BRAND.css, text: I.intl.string(I.t.y2b7CA) })),
        (0, i.jsx)(f.G, {
            id: `channels-${t.id}`,
            renderIcon: (e) => (0, i.jsx)(o.kiI, { size: "md", color: "currentColor", className: e }),
            text: N ? I.intl.string(I.t.h9mGOP) : I.intl.string(I.t.et6wav),
            selected: b,
            onClick: R,
            onContextMenu: O,
            trailing: L,
        })
    );
}
