n.d(t, { G: () => N });
var i = n(627968),
    l = n(64700),
    s = n(417597),
    a = n(554146),
    r = n(827734),
    o = n(777666),
    d = n(740426),
    c = n(442433),
    u = n(826673),
    h = n(591552),
    A = n(202776),
    _ = n(454058),
    m = n(976860),
    g = n(222823),
    p = n(661191),
    f = n(32603),
    E = n(652793),
    x = n(652215),
    I = n(746080),
    C = n(790782),
    b = n(985018);
function N(e) {
    let { guild: t, selected: N } = e,
        S = (0, A.A)(t),
        v = (0, u.JZ)(a.M.CHANNEL_BROWSER_NEW_BADGE_NUX),
        T = (0, s.yK)([_.A], () =>
            Array.from(_.A.getNewChannelIds(t.id)).filter((e) => _.A.shouldIndicateNewChannel(t.id, e)),
        ),
        y = (0, s.bG)([g.Ay], () => g.Ay.hasUnread(t.id, C.P.GUILD_ONBOARDING_QUESTION)),
        j = T.length > f.rR,
        R = (0, s.bG)([h.A, g.Ay], () => {
            let e = h.A.lastFetchedAt(t.id),
                n = g.Ay.lastMessageId(t.id, C.P.GUILD_ONBOARDING_QUESTION);
            if (null == n) return !1;
            let i = p.default.extractTimestamp(n);
            return null != e && e > i;
        }),
        L = l.useCallback(() => {
            (0, m.pX)(x.BVt.CHANNEL(t.id, S ? I.VV.CUSTOMIZE_COMMUNITY : I.VV.CHANNEL_BROWSER));
        }, [t.id, S]),
        O = l.useCallback(
            (e) => {
                (0, c.L3)(e, async () => {
                    let { default: e } = await n.e("30412").then(n.bind(n, 807431));
                    return (n) => (0, i.jsx)(e, { ...n, guild: t });
                });
            },
            [t],
        ),
        G = null;
    return (
        (v && !y && !j) ||
            N ||
            R ||
            (G = (0, i.jsx)(o.Lp, { color: r.A.colors.BADGE_BACKGROUND_BRAND.css, text: b.intl.string(b.t.y2b7CA) })),
        (0, i.jsx)(E.G, {
            id: `channels-${t.id}`,
            renderIcon: (e) => (0, i.jsx)(d.k, { size: "md", color: "currentColor", className: e }),
            text: S ? b.intl.string(b.t.h9mGOP) : b.intl.string(b.t.et6wav),
            selected: N,
            onClick: L,
            onContextMenu: O,
            trailing: G,
        })
    );
}
