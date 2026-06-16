"use strict";
n.d(t, { K4: () => g, Zt: () => E });
var i = n(627968),
    r = n(64700),
    s = n(17928),
    a = n(444927),
    o = n(793574),
    l = n(688810),
    u = n(663066),
    c = n(71393),
    d = n(287809),
    _ = n(174459),
    h = n(625494),
    f = n(281910),
    p = n(652215);
let E = "BoostedGuildPerksModalConnected",
    m = (e) => {
        let { guildId: t, close: n, location: u, registerDismissModalHandler: h, scrollToPowerupCards: E } = e,
            m = (0, s.bG)([d.default], () => d.default.getCurrentUser()),
            g = (0, s.bG)([c.A], () => c.A.getGuild(t), [t]),
            A = (0, a.A)(() => Date.now()),
            { analyticsLocations: I } = (0, l.Ay)(o.A.BOOSTED_GUILD_PERKS_MODAL),
            T = g?.id,
            S = r.useCallback(() => {
                n(),
                    null != T &&
                        _.default.track(p.HAw.MODAL_DISMISSED, {
                            type: p.liQ.PREMIUM_GUILD_USER_MODAL,
                            location_stack: I,
                            location_section: u.section,
                            location_object: u.object,
                            guild_id: T,
                            duration_open_ms: Date.now() - A,
                        });
            }, [I, A, u.object, u.section, n, T]);
        return (r.useLayoutEffect(() => {
            h?.(S);
        }, [S, h]),
        null == m || null == g)
            ? null
            : (0, i.jsx)(l.f5, {
                  value: I,
                  children: (0, i.jsx)(f.A, { analyticsLocation: u, onClose: S, guild: g, scrollToPowerupCards: E }),
              });
    };
function g(e) {
    let { guildId: t, location: n, scrollToPowerupCards: r } = e,
        s = { current: null };
    (0, u.B8)(
        (e) => {
            let { closeLayer: a } = e;
            return (
                null == s.current && (s.current = a),
                (0, i.jsx)(m, {
                    close: a,
                    guildId: t,
                    location: n,
                    registerDismissModalHandler: (e) => {
                        s.current = e;
                    },
                    scrollToPowerupCards: r,
                })
            );
        },
        {
            layerKey: E,
            onEscape: () =>
                h._.hasSubscribers(p.jej.MODAL_CLOSE)
                    ? (h._.dispatch(p.jej.MODAL_CLOSE), !0)
                    : null != s.current && (s.current(), !0),
        },
    );
}
