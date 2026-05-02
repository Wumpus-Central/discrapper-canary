r.d(t, { K4: () => g, Zt: () => h });
var n = r(627968),
    a = r(64700),
    i = r(17928),
    l = r(444927),
    o = r(793574),
    s = r(688810),
    d = r(663066),
    c = r(71393),
    u = r(287809),
    m = r(174459),
    E = r(625494),
    p = r(281910),
    _ = r(652215);
let h = "BoostedGuildPerksModalConnected",
    v = (e) => {
        let { guildId: t, close: r, location: d, registerDismissModalHandler: E, scrollToPowerupCards: h } = e,
            v = (0, i.bG)([u.default], () => u.default.getCurrentUser()),
            g = (0, i.bG)([c.A], () => c.A.getGuild(t), [t]),
            I = (0, l.A)(() => Date.now()),
            { analyticsLocations: S } = (0, s.Ay)(o.A.BOOSTED_GUILD_PERKS_MODAL),
            C = g?.id,
            T = a.useCallback(() => {
                r(),
                    null != C &&
                        m.default.track(_.HAw.MODAL_DISMISSED, {
                            type: _.liQ.PREMIUM_GUILD_USER_MODAL,
                            location_stack: S,
                            location_section: d.section,
                            location_object: d.object,
                            guild_id: C,
                            duration_open_ms: Date.now() - I,
                        });
            }, [S, I, d.object, d.section, r, C]);
        return (a.useLayoutEffect(() => {
            E?.(T);
        }, [T, E]),
        null == v || null == g)
            ? null
            : (0, n.jsx)(s.f5, {
                  value: S,
                  children: (0, n.jsx)(p.A, { analyticsLocation: d, onClose: T, guild: g, scrollToPowerupCards: h }),
              });
    };
function g(e) {
    let { guildId: t, location: r, scrollToPowerupCards: a } = e,
        i = { current: null };
    (0, d.B8)(
        (e) => {
            let { closeLayer: l } = e;
            return (
                null == i.current && (i.current = l),
                (0, n.jsx)(v, {
                    close: l,
                    guildId: t,
                    location: r,
                    registerDismissModalHandler: (e) => {
                        i.current = e;
                    },
                    scrollToPowerupCards: a,
                })
            );
        },
        {
            layerKey: h,
            onEscape: () =>
                E._.hasSubscribers(_.jej.MODAL_CLOSE)
                    ? (E._.dispatch(_.jej.MODAL_CLOSE), !0)
                    : null != i.current && (i.current(), !0),
        },
    );
}
