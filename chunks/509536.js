i.d(t, { K4: () => f, Zt: () => _ });
var n = i(627968),
    l = i(64700),
    r = i(17928),
    s = i(444927),
    a = i(793574),
    u = i(688810),
    o = i(361158),
    d = i(71393),
    c = i(287809),
    p = i(954571),
    A = i(625494),
    h = i(281910),
    E = i(652215);
let _ = "BoostedGuildPerksModalConnected",
    m = (e) => {
        let { guildId: t, close: i, location: o, registerDismissModalHandler: A, scrollToPowerupCards: _ } = e,
            m = (0, r.bG)([c.default], () => c.default.getCurrentUser()),
            f = (0, r.bG)([d.A], () => d.A.getGuild(t), [t]),
            I = (0, s.A)(() => Date.now()),
            { analyticsLocations: g } = (0, u.Ay)(a.A.BOOSTED_GUILD_PERKS_MODAL),
            b = f?.id,
            S = l.useCallback(() => {
                i(),
                    null != b &&
                        p.default.track(E.HAw.MODAL_DISMISSED, {
                            type: E.liQ.PREMIUM_GUILD_USER_MODAL,
                            location_stack: g,
                            location_section: o.section,
                            location_object: o.object,
                            guild_id: b,
                            duration_open_ms: Date.now() - I,
                        });
            }, [g, I, o.object, o.section, i, b]);
        return (l.useLayoutEffect(() => {
            A?.(S);
        }, [S, A]),
        null == m || null == f)
            ? null
            : (0, n.jsx)(u.f5, {
                  value: g,
                  children: (0, n.jsx)(h.A, { analyticsLocation: o, onClose: S, guild: f, scrollToPowerupCards: _ }),
              });
    };
function f(e) {
    let { guildId: t, location: i, scrollToPowerupCards: l } = e,
        r = { current: null };
    (0, o.B8)(
        (e) => {
            let { closeLayer: s } = e;
            return (
                null == r.current && (r.current = s),
                (0, n.jsx)(m, {
                    close: s,
                    guildId: t,
                    location: i,
                    registerDismissModalHandler: (e) => {
                        r.current = e;
                    },
                    scrollToPowerupCards: l,
                })
            );
        },
        {
            layerKey: _,
            onEscape: () =>
                A._.hasSubscribers(E.jej.MODAL_CLOSE)
                    ? (A._.dispatch(E.jej.MODAL_CLOSE), !0)
                    : null != r.current && (r.current(), !0),
        },
    );
}
