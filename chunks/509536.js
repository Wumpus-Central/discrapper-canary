r.d(t, { K4: () => g, Zt: () => h });
var n = r(627968),
    a = r(64700),
    o = r(17928),
    i = r(444927),
    l = r(793574),
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
            v = (0, o.bG)([u.default], () => u.default.getCurrentUser()),
            g = (0, o.bG)([c.A], () => c.A.getGuild(t), [t]),
            S = (0, i.A)(() => Date.now()),
            { analyticsLocations: I } = (0, s.Ay)(l.A.BOOSTED_GUILD_PERKS_MODAL),
            C = g?.id,
            T = a.useCallback(() => {
                r(),
                    null != C &&
                        m.default.track(_.HAw.MODAL_DISMISSED, {
                            type: _.liQ.PREMIUM_GUILD_USER_MODAL,
                            location_stack: I,
                            location_section: d.section,
                            location_object: d.object,
                            guild_id: C,
                            duration_open_ms: Date.now() - S,
                        });
            }, [I, S, d.object, d.section, r, C]);
        return (a.useLayoutEffect(() => {
            E?.(T);
        }, [T, E]),
        null == v || null == g)
            ? null
            : (0, n.jsx)(s.f5, {
                  value: I,
                  children: (0, n.jsx)(p.A, { analyticsLocation: d, onClose: T, guild: g, scrollToPowerupCards: h }),
              });
    };
function g(e) {
    let { guildId: t, location: r, scrollToPowerupCards: a } = e,
        o = { current: null };
    (0, d.B8)(
        (e) => {
            let { closeLayer: i } = e;
            return (
                null == o.current && (o.current = i),
                (0, n.jsx)(v, {
                    close: i,
                    guildId: t,
                    location: r,
                    registerDismissModalHandler: (e) => {
                        o.current = e;
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
                    : null != o.current && (o.current(), !0),
        },
    );
}
