n.d(t, { Z: () => U }), n(47120);
var i = n(200651),
    l = n(192379),
    a = n(392711),
    r = n(442837),
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
    _ = n(594174),
    C = n(176354),
    x = n(823379),
    v = n(74538),
    E = n(401062),
    I = n(696900),
    b = n(456631),
    Z = n(963838),
    N = n(535879),
    T = n(310892),
    S = n(12168),
    j = n(353368),
    y = n(981631),
    A = n(354459),
    P = n(185923),
    R = n(474936),
    M = n(526761),
    L = n(388032),
    k = n(473291);
let O = P.Hz.CHAT,
    D = {
        section: y.jXE.VOICE_CHANNEL_EFFECTS_EMOJI_PICKER,
        openPopoutType: 'voice_channel_effect_emoji_picker'
    },
    w = [f.ZP.getByName('thumbsup'), f.ZP.getByName('eyes'), f.ZP.getByName('laughing'), f.ZP.getByName('watermelon'), f.ZP.getByName('fork_and_knife'), f.ZP.getByName('yum')].filter(x.lm);
function U(e) {
    var t;
    let { channel: n, closePopout: f, onFocus: x } = e,
        P = (0, r.e7)([u.Z], () => u.Z.useReducedMotion),
        U = (0, r.e7)([_.default], () => _.default.getCurrentUser()),
        B = v.ZP.canUseFancyVoiceChannelReactions(U),
        F = (0, r.e7)([I.Z], () => I.Z.getState().animationType),
        H = l.useRef(!1),
        G = (0, m.wC)(n.guild_id),
        V = (0, a.uniqBy)([...G, ...w], 'name')
            .filter(
                (e) =>
                    !C.ZP.isEmojiFilteredOrLocked({
                        emoji: e,
                        channel: n,
                        intention: O
                    })
            )
            .slice(0, A.e5),
        z = (null !== (t = b.Z.recentlyUsedEmojis) && void 0 !== t ? t : []).filter((e) => !V.slice(0, A.e5 - 1).some((t) => t.name === e.name));
    z.length > 0 && V.splice(V.length - 1, 1, z[0]);
    let W = (0, Z.Iu)(F),
        Y = (e) => {
            c.Z.dispatch({
                type: 'VOICE_CHANNEL_EFFECT_RECENT_EMOJI',
                emoji: e
            }),
                (0, E.Lx)({
                    channel: n,
                    emoji: e,
                    location: E.yX.EMOJI_PICKER,
                    animationType: F,
                    animationId: W,
                    isPremium: B
                });
        },
        q = () => {
            (0, T.h)({
                analytics: {
                    type: R.cd.EMOJI_PICKER_EMOJI_CLICKED,
                    object: y.qAy.BUTTON_CTA,
                    section: y.jXE.VOICE_CHANNEL_EFFECTS_BAR
                }
            });
        },
        K = (e) => {
            (H.current = e),
                e &&
                    h.ZP.trackWithMetadata(y.rMx.VOICE_CHANNEL_EFFECT_EMOJI_PICKER_EXPANDED, {
                        channel_id: X,
                        guild_id: Q
                    });
        },
        { id: X, guild_id: Q } = n;
    l.useEffect(() => {
        h.ZP.trackWithMetadata(y.rMx.VOICE_CHANNEL_EFFECT_BAR_VIEWED, {
            channel_id: X,
            guild_id: Q
        });
    }, [X, Q]);
    let J = P ? [s.z.VOICE_CHANNEL_EFFECTS_REDUCED_MOTION_TOOLTIP] : [],
        $ = F === j.q.PREMIUM;
    return (0, i.jsx)(p.ZP, {
        contentTypes: J,
        children: (e) => {
            let { visibleContent: t, markAsDismissed: l } = e,
                a = P && t === s.z.VOICE_CHANNEL_EFFECTS_REDUCED_MOTION_TOOLTIP;
            return (0, i.jsx)(o.yRy, {
                position: 'left',
                'aria-label': L.intl.string(L.t.RLHsHx),
                shouldShow: a,
                renderPopout: () =>
                    (0, i.jsx)('div', {
                        onMouseEnter: x,
                        children: (0, i.jsx)(g.ZP, {
                            className: k.reducedMotionTooltip,
                            header: L.intl.string(L.t['6gGHnZ']),
                            content: L.intl.string(L.t.S2RGUF),
                            onClick: () => {
                                d.Z.open(y.oAB.ACCESSIBILITY, null, { scrollPosition: M.rP.REDUCED_MOTION }), f();
                            },
                            markAsDismissed: l,
                            buttonCTA: L.intl.string(L.t.fgVzkJ),
                            secondaryButtonCTA: L.intl.string(L.t.VzO6Oj),
                            caretPosition: g.DF.RIGHT_CENTER
                        })
                    }),
                children: () =>
                    (0, i.jsx)(S.Z, {
                        title: L.intl.string(L.t.Nn8lPz),
                        channel: n,
                        closePopout: f,
                        onSelectEmoji: Y,
                        onSelectDisabledEmoji: q,
                        onFocus: x,
                        onExpandedToggle: K,
                        analyticsOverride: D,
                        emojiSearchProps: {
                            accessory: (0, i.jsx)(N.Z, {
                                labelText: L.intl.string(L.t['ktEv/v']),
                                value: $,
                                onChange: () => {
                                    if (B)
                                        return (
                                            h.ZP.trackWithMetadata(y.rMx.VOICE_CHANNEL_EFFECT_FANCY_ANIMATION_TOGGLED, {
                                                channel_id: X,
                                                guild_id: Q,
                                                enabled: !$
                                            }),
                                            c.Z.dispatch({ type: 'VOICE_CHANNEL_EFFECT_TOGGLE_ANIMATION_TYPE' })
                                        );
                                },
                                onShowUpsell: () =>
                                    (0, T.h)({
                                        analytics: {
                                            type: H.current ? R.cd.VOICE_CHANNEL_EFFECTS_TOGGLE_CLICKED_EXPANDED : R.cd.VOICE_CHANNEL_EFFECTS_TOGGLE_CLICKED,
                                            object: y.qAy.VOICE_CHANNEL_EFFECTS_TOGGLE,
                                            section: H.current ? y.jXE.VOICE_CHANNEL_EFFECTS_EMOJI_PICKER : y.jXE.VOICE_CHANNEL_EFFECTS_BAR
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
