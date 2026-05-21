r.d(t, { K4: () => g, Zt: () => v });
var n = r(627968),
    i = r(64700),
    s = r(17928),
    o = r(444927),
    a = r(793574),
    l = r(688810),
    d = r(663066),
    c = r(71393),
    u = r(287809),
    p = r(174459),
    h = r(625494),
    m = r(281910),
    _ = r(652215);
let v = "BoostedGuildPerksModalConnected",
    E = (e) => {
        let { guildId: t, close: r, location: d, registerDismissModalHandler: h, scrollToPowerupCards: v } = e,
            E = (0, s.bG)([u.default], () => u.default.getCurrentUser()),
            g = (0, s.bG)([c.A], () => c.A.getGuild(t), [t]),
            I = (0, o.A)(() => Date.now()),
            { analyticsLocations: C } = (0, l.Ay)(a.A.BOOSTED_GUILD_PERKS_MODAL),
            f = g?.id,
            S = i.useCallback(() => {
                r(),
                    null != f &&
                        p.default.track(_.HAw.MODAL_DISMISSED, {
                            type: _.liQ.PREMIUM_GUILD_USER_MODAL,
                            location_stack: C,
                            location_section: d.section,
                            location_object: d.object,
                            guild_id: f,
                            duration_open_ms: Date.now() - I,
                        });
            }, [C, I, d.object, d.section, r, f]);
        return (i.useLayoutEffect(() => {
            h?.(S);
        }, [S, h]),
        null == E || null == g)
            ? null
            : (0, n.jsx)(l.f5, {
                  value: C,
                  children: (0, n.jsx)(m.A, { analyticsLocation: d, onClose: S, guild: g, scrollToPowerupCards: v }),
              });
    };
function g(e) {
    let { guildId: t, location: r, scrollToPowerupCards: i } = e,
        s = { current: null };
    (0, d.B8)(
        (e) => {
            let { closeLayer: o } = e;
            return (
                null == s.current && (s.current = o),
                (0, n.jsx)(E, {
                    close: o,
                    guildId: t,
                    location: r,
                    registerDismissModalHandler: (e) => {
                        s.current = e;
                    },
                    scrollToPowerupCards: i,
                })
            );
        },
        {
            layerKey: v,
            onEscape: () =>
                h._.hasSubscribers(_.jej.MODAL_CLOSE)
                    ? (h._.dispatch(_.jej.MODAL_CLOSE), !0)
                    : null != s.current && (s.current(), !0),
        },
    );
}
