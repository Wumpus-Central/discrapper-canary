n.d(t, { G: () => S });
var i = n(627968),
    l = n(64700),
    s = n(417597),
    a = n(554146),
    r = n(827734),
    o = n(397927),
    d = n(442433),
    c = n(826673),
    u = n(591552),
    h = n(202776),
    A = n(454058),
    g = n(976860),
    m = n(222823),
    p = n(661191),
    _ = n(32603),
    x = n(652793),
    f = n(652215),
    E = n(746080),
    C = n(790782),
    I = n(985018);
function S(e) {
    let { guild: t, selected: S } = e,
        b = (0, h.A)(t),
        N = (0, c.JZ)(a.M.CHANNEL_BROWSER_NEW_BADGE_NUX),
        T = (0, s.yK)([A.A], () =>
            Array.from(A.A.getNewChannelIds(t.id)).filter((e) => A.A.shouldIndicateNewChannel(t.id, e)),
        ),
        j = (0, s.bG)([m.Ay], () => m.Ay.hasUnread(t.id, C.P.GUILD_ONBOARDING_QUESTION)),
        v = T.length > _.rR,
        y = (0, s.bG)([u.A, m.Ay], () => {
            let e = u.A.lastFetchedAt(t.id),
                n = m.Ay.lastMessageId(t.id, C.P.GUILD_ONBOARDING_QUESTION);
            if (null == n) return !1;
            let i = p.default.extractTimestamp(n);
            return null != e && e > i;
        }),
        R = l.useCallback(() => {
            (0, g.pX)(f.BVt.CHANNEL(t.id, b ? E.VV.CUSTOMIZE_COMMUNITY : E.VV.CHANNEL_BROWSER));
        }, [t.id, b]),
        O = l.useCallback(
            (e) => {
                (0, d.L3)(e, async () => {
                    let { default: e } = await n.e("30412").then(n.bind(n, 807431));
                    return (n) => (0, i.jsx)(e, { ...n, guild: t });
                });
            },
            [t],
        ),
        L = null;
    return (
        (N && !j && !v) ||
            S ||
            y ||
            (L = (0, i.jsx)(o.LpS, { color: r.A.colors.BADGE_BACKGROUND_BRAND.css, text: I.intl.string(I.t.y2b7CA) })),
        (0, i.jsx)(x.G, {
            id: `channels-${t.id}`,
            renderIcon: (e) => (0, i.jsx)(o.kiI, { size: "md", color: "currentColor", className: e }),
            text: b ? I.intl.string(I.t.h9mGOP) : I.intl.string(I.t.et6wav),
            selected: S,
            onClick: R,
            onContextMenu: O,
            trailing: L,
        })
    );
}
