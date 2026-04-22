n.d(t, { K4: () => g, Zt: () => A });
var r = n(627968),
    l = n(64700),
    i = n(311907),
    a = n(444927),
    s = n(793574),
    o = n(688810),
    u = n(361158),
    c = n(71393),
    d = n(287809),
    _ = n(954571),
    p = n(203982),
    h = n(426760),
    m = n(652215);
let A = "BoostedGuildPerksModalConnected",
    f = (e) => {
        let { guildId: t, close: n, location: u, registerDismissModalHandler: p, scrollToPowerupCards: A } = e,
            f = (0, i.bG)([d.default], () => d.default.getCurrentUser()),
            g = (0, i.bG)([c.A], () => c.A.getGuild(t), [t]),
            E = (0, a.A)(() => Date.now()),
            { analyticsLocations: C } = (0, o.Ay)(s.A.BOOSTED_GUILD_PERKS_MODAL),
            I = g?.id,
            v = l.useCallback(() => {
                n(),
                    null != I &&
                        _.default.track(m.HAw.MODAL_DISMISSED, {
                            type: m.liQ.PREMIUM_GUILD_USER_MODAL,
                            location_stack: C,
                            location_section: u.section,
                            location_object: u.object,
                            guild_id: I,
                            duration_open_ms: Date.now() - E,
                        });
            }, [C, E, u.object, u.section, n, I]);
        return (l.useLayoutEffect(() => {
            p?.(v);
        }, [v, p]),
        null == f || null == g)
            ? null
            : (0, r.jsx)(o.f5, {
                  value: C,
                  children: (0, r.jsx)(h.A, { analyticsLocation: u, onClose: v, guild: g, scrollToPowerupCards: A }),
              });
    };
function g(e) {
    let { guildId: t, location: n, scrollToPowerupCards: l } = e,
        i = { current: null };
    (0, u.B8)(
        (e) => {
            let { closeLayer: a } = e;
            return (
                null == i.current && (i.current = a),
                (0, r.jsx)(f, {
                    close: a,
                    guildId: t,
                    location: n,
                    registerDismissModalHandler: (e) => {
                        i.current = e;
                    },
                    scrollToPowerupCards: l,
                })
            );
        },
        {
            layerKey: A,
            onEscape: () =>
                p._.hasSubscribers(m.jej.MODAL_CLOSE)
                    ? (p._.dispatch(m.jej.MODAL_CLOSE), !0)
                    : null != i.current && (i.current(), !0),
        },
    );
}
