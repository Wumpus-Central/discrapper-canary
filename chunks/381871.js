n.d(t, {
    Z: function () {
        return B;
    }
}),
    n(47120);
var i = n(200651),
    l = n(192379),
    r = n(392711),
    a = n(442837),
    s = n(704215),
    o = n(481060),
    c = n(570140),
    d = n(230711),
    u = n(607070),
    h = n(367907),
    p = n(243778),
    m = n(543241),
    f = n(633302),
    g = n(970731),
    C = n(594174),
    x = n(176354),
    v = n(823379),
    _ = n(74538),
    I = n(401062),
    E = n(696900),
    b = n(456631),
    Z = n(963838),
    S = n(535879),
    N = n(310892),
    T = n(12168),
    j = n(353368),
    A = n(981631),
    y = n(354459),
    P = n(185923),
    M = n(474936),
    R = n(526761),
    L = n(388032),
    k = n(473291);
let O = P.Hz.CHAT,
    D = {
        section: A.jXE.VOICE_CHANNEL_EFFECTS_EMOJI_PICKER,
        openPopoutType: 'voice_channel_effect_emoji_picker'
    },
    w = [f.ZP.getByName('thumbsup'), f.ZP.getByName('eyes'), f.ZP.getByName('laughing'), f.ZP.getByName('watermelon'), f.ZP.getByName('fork_and_knife'), f.ZP.getByName('yum')].filter(v.lm);
function B(e) {
    var t;
    let { channel: n, closePopout: f, onFocus: v } = e,
        P = (0, a.e7)([u.Z], () => u.Z.useReducedMotion),
        B = (0, a.e7)([C.default], () => C.default.getCurrentUser()),
        U = _.ZP.canUseFancyVoiceChannelReactions(B),
        H = (0, a.e7)([E.Z], () => E.Z.getState().animationType),
        G = l.useRef(!1),
        F = (0, m.wC)(n.guild_id),
        V = (0, r.uniqBy)([...F, ...w], 'name')
            .filter(
                (e) =>
                    !x.ZP.isEmojiFilteredOrLocked({
                        emoji: e,
                        channel: n,
                        intention: O
                    })
            )
            .slice(0, y.e5),
        z = (null !== (t = b.Z.recentlyUsedEmojis) && void 0 !== t ? t : []).filter((e) => !V.slice(0, y.e5 - 1).some((t) => t.name === e.name));
    z.length > 0 && V.splice(V.length - 1, 1, z[0]);
    let W = (0, Z.Iu)(H),
        K = (e) => {
            c.Z.dispatch({
                type: 'VOICE_CHANNEL_EFFECT_RECENT_EMOJI',
                emoji: e
            }),
                (0, I.Lx)({
                    channel: n,
                    emoji: e,
                    location: I.yX.EMOJI_PICKER,
                    animationType: H,
                    animationId: W,
                    isPremium: U
                });
        },
        Y = () => {
            (0, N.openEffectsUpsellModal)({
                analytics: {
                    type: M.cd.EMOJI_PICKER_EMOJI_CLICKED,
                    object: A.qAy.BUTTON_CTA,
                    section: A.jXE.VOICE_CHANNEL_EFFECTS_BAR
                }
            });
        },
        q = (e) => {
            (G.current = e),
                e &&
                    h.ZP.trackWithMetadata(A.rMx.VOICE_CHANNEL_EFFECT_EMOJI_PICKER_EXPANDED, {
                        channel_id: X,
                        guild_id: J
                    });
        },
        { id: X, guild_id: J } = n;
    l.useEffect(() => {
        h.ZP.trackWithMetadata(A.rMx.VOICE_CHANNEL_EFFECT_BAR_VIEWED, {
            channel_id: X,
            guild_id: J
        });
    }, [X, J]);
    let Q = P ? [s.z.VOICE_CHANNEL_EFFECTS_REDUCED_MOTION_TOOLTIP] : [],
        $ = H === j.q.PREMIUM;
    return (0, i.jsx)(p.ZP, {
        contentTypes: Q,
        children: (e) => {
            let { visibleContent: t, markAsDismissed: l } = e,
                r = P && t === s.z.VOICE_CHANNEL_EFFECTS_REDUCED_MOTION_TOOLTIP;
            return (0, i.jsx)(o.Popout, {
                position: 'left',
                'aria-label': L.intl.string(L.t.RLHsHx),
                shouldShow: r,
                renderPopout: () =>
                    (0, i.jsx)('div', {
                        onMouseEnter: v,
                        children: (0, i.jsx)(g.ZP, {
                            className: k.reducedMotionTooltip,
                            header: L.intl.string(L.t['6gGHnZ']),
                            content: L.intl.string(L.t.S2RGUF),
                            onClick: () => {
                                d.Z.open(A.oAB.ACCESSIBILITY, null, { scrollPosition: R.rP.REDUCED_MOTION }), f();
                            },
                            markAsDismissed: l,
                            buttonCTA: L.intl.string(L.t.fgVzkJ),
                            secondaryButtonCTA: L.intl.string(L.t.VzO6Oj),
                            caretPosition: g.DF.RIGHT_CENTER
                        })
                    }),
                children: () =>
                    (0, i.jsx)(T.Z, {
                        title: L.intl.string(L.t.Nn8lPz),
                        channel: n,
                        closePopout: f,
                        onSelectEmoji: K,
                        onSelectDisabledEmoji: Y,
                        onFocus: v,
                        onExpandedToggle: q,
                        analyticsOverride: D,
                        emojiSearchProps: {
                            accessory: (0, i.jsx)(S.Z, {
                                labelText: L.intl.string(L.t['ktEv/v']),
                                value: $,
                                onChange: () => {
                                    if (U)
                                        return (
                                            h.ZP.trackWithMetadata(A.rMx.VOICE_CHANNEL_EFFECT_FANCY_ANIMATION_TOGGLED, {
                                                channel_id: X,
                                                guild_id: J,
                                                enabled: !$
                                            }),
                                            c.Z.dispatch({ type: 'VOICE_CHANNEL_EFFECT_TOGGLE_ANIMATION_TYPE' })
                                        );
                                },
                                onShowUpsell: () =>
                                    (0, N.openEffectsUpsellModal)({
                                        analytics: {
                                            type: G.current ? M.cd.VOICE_CHANNEL_EFFECTS_TOGGLE_CLICKED_EXPANDED : M.cd.VOICE_CHANNEL_EFFECTS_TOGGLE_CLICKED,
                                            object: A.qAy.VOICE_CHANNEL_EFFECTS_TOGGLE,
                                            section: G.current ? A.jXE.VOICE_CHANNEL_EFFECTS_EMOJI_PICKER : A.jXE.VOICE_CHANNEL_EFFECTS_BAR
                                        }
                                    })
                            })
                        },
                        recentlyUsedEmojis: z
                    })
            });
        }
    });
}
