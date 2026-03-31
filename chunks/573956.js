n.d(t, { G: () => N });
var i = n(627968),
    l = n(64700),
    s = n(417597),
    a = n(554146),
    r = n(827734),
    o = n(397927),
    c = n(442433),
    d = n(826673),
    u = n(591552),
    h = n(202776),
    A = n(454058),
    _ = n(976860),
    m = n(222823),
    g = n(661191),
    p = n(32603),
    f = n(652793),
    x = n(652215),
    E = n(746080),
    I = n(790782),
    C = n(985018);
function N(e) {
    let { guild: t, selected: N } = e,
        T = (0, h.A)(t),
        S = (0, d.JZ)(a.M.CHANNEL_BROWSER_NEW_BADGE_NUX),
        b = (0, s.yK)([A.A], () =>
            Array.from(A.A.getNewChannelIds(t.id)).filter((e) => A.A.shouldIndicateNewChannel(t.id, e)),
        ),
        y = (0, s.bG)([m.Ay], () => m.Ay.hasUnread(t.id, I.P.GUILD_ONBOARDING_QUESTION)),
        v = b.length > p.rR,
        j = (0, s.bG)([u.A, m.Ay], () => {
            let e = u.A.lastFetchedAt(t.id),
                n = m.Ay.lastMessageId(t.id, I.P.GUILD_ONBOARDING_QUESTION);
            if (null == n) return !1;
            let i = g.default.extractTimestamp(n);
            return null != e && e > i;
        }),
        R = l.useCallback(() => {
            (0, _.pX)(x.BVt.CHANNEL(t.id, T ? E.VV.CUSTOMIZE_COMMUNITY : E.VV.CHANNEL_BROWSER));
        }, [t.id, T]),
        O = l.useCallback(
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
        (S && !y && !v) ||
            N ||
            j ||
            (L = (0, i.jsx)(o.LpS, { color: r.A.colors.BADGE_BACKGROUND_BRAND.css, text: C.intl.string(C.t.y2b7CA) })),
        (0, i.jsx)(f.G, {
            id: `channels-${t.id}`,
            renderIcon: (e) => (0, i.jsx)(o.kiI, { size: "md", color: "currentColor", className: e }),
            text: T ? C.intl.string(C.t.h9mGOP) : C.intl.string(C.t.et6wav),
            selected: N,
            onClick: R,
            onContextMenu: O,
            trailing: L,
        })
    );
}
