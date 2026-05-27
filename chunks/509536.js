r.d(t, { K4: () => g, Zt: () => v });
var i = r(627968),
    s = r(64700),
    n = r(17928),
    a = r(444927),
    l = r(793574),
    o = r(688810),
    d = r(663066),
    c = r(71393),
    u = r(287809),
    h = r(174459),
    p = r(625494),
    m = r(281910),
    _ = r(652215);
let v = "BoostedGuildPerksModalConnected",
    E = (e) => {
        let { guildId: t, close: r, location: d, registerDismissModalHandler: p, scrollToPowerupCards: v } = e,
            E = (0, n.bG)([u.default], () => u.default.getCurrentUser()),
            g = (0, n.bG)([c.A], () => c.A.getGuild(t), [t]),
            I = (0, a.A)(() => Date.now()),
            { analyticsLocations: f } = (0, o.Ay)(l.A.BOOSTED_GUILD_PERKS_MODAL),
            C = g?.id,
            A = s.useCallback(() => {
                r(),
                    null != C &&
                        h.default.track(_.HAw.MODAL_DISMISSED, {
                            type: _.liQ.PREMIUM_GUILD_USER_MODAL,
                            location_stack: f,
                            location_section: d.section,
                            location_object: d.object,
                            guild_id: C,
                            duration_open_ms: Date.now() - I,
                        });
            }, [f, I, d.object, d.section, r, C]);
        return (s.useLayoutEffect(() => {
            p?.(A);
        }, [A, p]),
        null == E || null == g)
            ? null
            : (0, i.jsx)(o.f5, {
                  value: f,
                  children: (0, i.jsx)(m.A, { analyticsLocation: d, onClose: A, guild: g, scrollToPowerupCards: v }),
              });
    };
function g(e) {
    let { guildId: t, location: r, scrollToPowerupCards: s } = e,
        n = { current: null };
    (0, d.B8)(
        (e) => {
            let { closeLayer: a } = e;
            return (
                null == n.current && (n.current = a),
                (0, i.jsx)(E, {
                    close: a,
                    guildId: t,
                    location: r,
                    registerDismissModalHandler: (e) => {
                        n.current = e;
                    },
                    scrollToPowerupCards: s,
                })
            );
        },
        {
            layerKey: v,
            onEscape: () =>
                p._.hasSubscribers(_.jej.MODAL_CLOSE)
                    ? (p._.dispatch(_.jej.MODAL_CLOSE), !0)
                    : null != n.current && (n.current(), !0),
        },
    );
}
