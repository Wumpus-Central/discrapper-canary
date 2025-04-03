n.d(t, { Z: () => W }), n(47120);
var r = n(200651),
    i = n(192379),
    l = n(392711),
    o = n(442837),
    a = n(704215),
    s = n(481060),
    c = n(570140),
    u = n(230711),
    d = n(607070),
    p = n(367907),
    h = n(243778),
    f = n(543241),
    m = n(633302),
    g = n(970731),
    b = n(594174),
    _ = n(176354),
    C = n(823379),
    y = n(74538),
    x = n(401062),
    v = n(696900),
    j = n(456631),
    O = n(963838),
    E = n(535879),
    N = n(310892),
    I = n(12168),
    P = n(353368),
    S = n(981631),
    Z = n(354459),
    T = n(185923),
    A = n(474936),
    w = n(526761),
    R = n(388032),
    M = n(934680);
let k = T.Hz.CHAT,
    L = {
        section: S.jXE.VOICE_CHANNEL_EFFECTS_EMOJI_PICKER,
        openPopoutType: 'voice_channel_effect_emoji_picker'
    },
    D = [m.ZP.getByName('thumbsup'), m.ZP.getByName('eyes'), m.ZP.getByName('laughing'), m.ZP.getByName('watermelon'), m.ZP.getByName('fork_and_knife'), m.ZP.getByName('yum')].filter(C.lm);
function W(e) {
    var t;
    let { channel: n, closePopout: m, onFocus: C } = e,
        T = (0, o.e7)([d.Z], () => d.Z.useReducedMotion),
        W = (0, o.e7)([b.default], () => b.default.getCurrentUser()),
        U = y.ZP.canUseFancyVoiceChannelReactions(W),
        B = (0, o.e7)([v.Z], () => v.Z.getState().animationType),
        H = i.useRef(!1),
        F = (0, f.wC)(n.guild_id),
        G = (0, l.uniqBy)([...F, ...D], 'name')
            .filter(
                (e) =>
                    !_.ZP.isEmojiFilteredOrLocked({
                        emoji: e,
                        channel: n,
                        intention: k
                    })
            )
            .slice(0, Z.e5),
        V = (null != (t = j.Z.recentlyUsedEmojis) ? t : []).filter((e) => !G.slice(0, Z.e5 - 1).some((t) => t.name === e.name));
    V.length > 0 && G.splice(G.length - 1, 1, V[0]);
    let z = (0, O.Iu)(B),
        Y = (e) => {
            c.Z.dispatch({
                type: 'VOICE_CHANNEL_EFFECT_RECENT_EMOJI',
                emoji: e
            }),
                (0, x.Lx)({
                    channel: n,
                    emoji: e,
                    location: x.yX.EMOJI_PICKER,
                    animationType: B,
                    animationId: z,
                    isPremium: U
                });
        },
        q = () => {
            (0, N.h)({
                analytics: {
                    type: A.cd.EMOJI_PICKER_EMOJI_CLICKED,
                    object: S.qAy.BUTTON_CTA,
                    section: S.jXE.VOICE_CHANNEL_EFFECTS_BAR
                }
            });
        },
        K = (e) => {
            (H.current = e),
                e &&
                    p.ZP.trackWithMetadata(S.rMx.VOICE_CHANNEL_EFFECT_EMOJI_PICKER_EXPANDED, {
                        channel_id: X,
                        guild_id: Q
                    });
        },
        { id: X, guild_id: Q } = n;
    i.useEffect(() => {
        p.ZP.trackWithMetadata(S.rMx.VOICE_CHANNEL_EFFECT_BAR_VIEWED, {
            channel_id: X,
            guild_id: Q
        });
    }, [X, Q]);
    let J = T ? [a.z.VOICE_CHANNEL_EFFECTS_REDUCED_MOTION_TOOLTIP] : [],
        $ = B === P.q.PREMIUM;
    return (0, r.jsx)(h.ZP, {
        contentTypes: J,
        children: (e) => {
            let { visibleContent: t, markAsDismissed: i } = e,
                l = T && t === a.z.VOICE_CHANNEL_EFFECTS_REDUCED_MOTION_TOOLTIP;
            return (0, r.jsx)(s.yRy, {
                position: 'left',
                'aria-label': R.NW.string(R.t.RLHsHx),
                shouldShow: l,
                renderPopout: () =>
                    (0, r.jsx)('div', {
                        onMouseEnter: C,
                        children: (0, r.jsx)(g.ZP, {
                            className: M.reducedMotionTooltip,
                            header: R.NW.string(R.t['6gGHnZ']),
                            content: R.NW.string(R.t.S2RGUF),
                            onClick: () => {
                                u.Z.open(S.oAB.ACCESSIBILITY, null, { scrollPosition: w.rP.REDUCED_MOTION }), m();
                            },
                            markAsDismissed: i,
                            buttonCTA: R.NW.string(R.t.fgVzkJ),
                            secondaryButtonCTA: R.NW.string(R.t.VzO6Oj),
                            caretPosition: g.DF.RIGHT_CENTER
                        })
                    }),
                children: () =>
                    (0, r.jsx)(I.Z, {
                        title: R.NW.string(R.t.Nn8lPz),
                        channel: n,
                        closePopout: m,
                        onSelectEmoji: Y,
                        onSelectDisabledEmoji: q,
                        onFocus: C,
                        onExpandedToggle: K,
                        analyticsOverride: L,
                        emojiSearchProps: {
                            accessory: (0, r.jsx)(E.Z, {
                                labelText: R.NW.string(R.t['ktEv/v']),
                                value: $,
                                onChange: () => {
                                    if (U)
                                        return (
                                            p.ZP.trackWithMetadata(S.rMx.VOICE_CHANNEL_EFFECT_FANCY_ANIMATION_TOGGLED, {
                                                channel_id: X,
                                                guild_id: Q,
                                                enabled: !$
                                            }),
                                            c.Z.dispatch({ type: 'VOICE_CHANNEL_EFFECT_TOGGLE_ANIMATION_TYPE' })
                                        );
                                },
                                onShowUpsell: () =>
                                    (0, N.h)({
                                        analytics: {
                                            type: H.current ? A.cd.VOICE_CHANNEL_EFFECTS_TOGGLE_CLICKED_EXPANDED : A.cd.VOICE_CHANNEL_EFFECTS_TOGGLE_CLICKED,
                                            object: S.qAy.VOICE_CHANNEL_EFFECTS_TOGGLE,
                                            section: H.current ? S.jXE.VOICE_CHANNEL_EFFECTS_EMOJI_PICKER : S.jXE.VOICE_CHANNEL_EFFECTS_BAR
                                        }
                                    })
                            })
                        },
                        recentlyUsedEmojis: V
                    })
            });
        }
    });
}
