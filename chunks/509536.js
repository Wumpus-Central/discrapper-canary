n.d(t, { K4: () => S, Zt: () => I });
var i = n(627968),
    l = n(64700),
    r = n(17928),
    a = n(444927),
    s = n(793574),
    u = n(688810),
    o = n(361158),
    c = n(71393),
    d = n(287809),
    E = n(954571),
    _ = n(625494),
    A = n(281910),
    p = n(652215);
let I = "BoostedGuildPerksModalConnected",
    f = (e) => {
        let { guildId: t, close: n, location: o, registerDismissModalHandler: _, scrollToPowerupCards: I } = e,
            f = (0, r.bG)([d.default], () => d.default.getCurrentUser()),
            S = (0, r.bG)([c.A], () => c.A.getGuild(t), [t]),
            T = (0, a.A)(() => Date.now()),
            { analyticsLocations: m } = (0, u.Ay)(s.A.BOOSTED_GUILD_PERKS_MODAL),
            h = S?.id,
            C = l.useCallback(() => {
                n(),
                    null != h &&
                        E.default.track(p.HAw.MODAL_DISMISSED, {
                            type: p.liQ.PREMIUM_GUILD_USER_MODAL,
                            location_stack: m,
                            location_section: o.section,
                            location_object: o.object,
                            guild_id: h,
                            duration_open_ms: Date.now() - T,
                        });
            }, [m, T, o.object, o.section, n, h]);
        return (l.useLayoutEffect(() => {
            _?.(C);
        }, [C, _]),
        null == f || null == S)
            ? null
            : (0, i.jsx)(u.f5, {
                  value: m,
                  children: (0, i.jsx)(A.A, { analyticsLocation: o, onClose: C, guild: S, scrollToPowerupCards: I }),
              });
    };
function S(e) {
    let { guildId: t, location: n, scrollToPowerupCards: l } = e,
        r = { current: null };
    (0, o.B8)(
        (e) => {
            let { closeLayer: a } = e;
            return (
                null == r.current && (r.current = a),
                (0, i.jsx)(f, {
                    close: a,
                    guildId: t,
                    location: n,
                    registerDismissModalHandler: (e) => {
                        r.current = e;
                    },
                    scrollToPowerupCards: l,
                })
            );
        },
        {
            layerKey: I,
            onEscape: () =>
                _._.hasSubscribers(p.jej.MODAL_CLOSE)
                    ? (_._.dispatch(p.jej.MODAL_CLOSE), !0)
                    : null != r.current && (r.current(), !0),
        },
    );
}
