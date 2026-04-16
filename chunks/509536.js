"use strict";
n.d(t, { K4: () => g, Zt: () => m });
var r = n(627968),
    i = n(64700),
    s = n(311907),
    a = n(444927),
    o = n(793574),
    l = n(688810),
    u = n(361158),
    c = n(71393),
    d = n(287809),
    _ = n(954571),
    f = n(203982),
    p = n(426760),
    h = n(652215);
let m = "BoostedGuildPerksModalConnected",
    E = (e) => {
        let { guildId: t, close: n, location: u, registerDismissModalHandler: f, scrollToPowerupCards: m } = e,
            E = (0, s.bG)([d.default], () => d.default.getCurrentUser()),
            g = (0, s.bG)([c.A], () => c.A.getGuild(t), [t]),
            A = (0, a.A)(() => Date.now()),
            { analyticsLocations: I } = (0, l.Ay)(o.A.BOOSTED_GUILD_PERKS_MODAL),
            T = g?.id,
            S = i.useCallback(() => {
                n(),
                    null != T &&
                        _.default.track(h.HAw.MODAL_DISMISSED, {
                            type: h.liQ.PREMIUM_GUILD_USER_MODAL,
                            location_stack: I,
                            location_section: u.section,
                            location_object: u.object,
                            guild_id: T,
                            duration_open_ms: Date.now() - A,
                        });
            }, [I, A, u.object, u.section, n, T]);
        return (i.useLayoutEffect(() => {
            f?.(S);
        }, [S, f]),
        null == E || null == g)
            ? null
            : (0, r.jsx)(l.f5, {
                  value: I,
                  children: (0, r.jsx)(p.A, { analyticsLocation: u, onClose: S, guild: g, scrollToPowerupCards: m }),
              });
    };
function g(e) {
    let { guildId: t, location: n, scrollToPowerupCards: i } = e,
        s = { current: null };
    (0, u.B8)(
        (e) => {
            let { closeLayer: a } = e;
            return (
                null == s.current && (s.current = a),
                (0, r.jsx)(E, {
                    close: a,
                    guildId: t,
                    location: n,
                    registerDismissModalHandler: (e) => {
                        s.current = e;
                    },
                    scrollToPowerupCards: i,
                })
            );
        },
        {
            layerKey: m,
            onEscape: () =>
                f._.hasSubscribers(h.jej.MODAL_CLOSE)
                    ? (f._.dispatch(h.jej.MODAL_CLOSE), !0)
                    : null != s.current && (s.current(), !0),
        },
    );
}
