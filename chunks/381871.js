n.d(t, { Z: () => U }), n(388685);
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
    y = n(823379),
    C = n(74538),
    x = n(401062),
    v = n(696900),
    j = n(456631),
    O = n(963838),
    E = n(535879),
    I = n(310892),
    P = n(12168),
    S = n(353368),
    Z = n(981631),
    N = n(354459),
    T = n(185923),
    A = n(474936),
    w = n(526761),
    R = n(388032),
    k = n(934680);
let M = T.Hz.CHAT,
    L = {
        section: Z.jXE.VOICE_CHANNEL_EFFECTS_EMOJI_PICKER,
        openPopoutType: 'voice_channel_effect_emoji_picker'
    },
    D = [m.ZP.getByName('thumbsup'), m.ZP.getByName('eyes'), m.ZP.getByName('laughing'), m.ZP.getByName('watermelon'), m.ZP.getByName('fork_and_knife'), m.ZP.getByName('yum')].filter(y.lm);
function U(e) {
    var t;
    let { channel: n, closePopout: m, onFocus: y } = e,
        T = (0, o.e7)([d.Z], () => d.Z.useReducedMotion),
        U = (0, o.e7)([b.default], () => b.default.getCurrentUser()),
        B = C.ZP.canUseFancyVoiceChannelReactions(U),
        G = (0, o.e7)([v.Z], () => v.Z.getState().animationType),
        F = i.useRef(!1),
        H = (0, f.wC)(n.guild_id),
        V = (0, l.uniqBy)([...H, ...D], 'name')
            .filter(
                (e) =>
                    !_.ZP.isEmojiFilteredOrLocked({
                        emoji: e,
                        channel: n,
                        intention: M
                    })
            )
            .slice(0, N.e5),
        z = (null != (t = j.Z.recentlyUsedEmojis) ? t : []).filter((e) => !V.slice(0, N.e5 - 1).some((t) => t.name === e.name));
    z.length > 0 && V.splice(V.length - 1, 1, z[0]);
    let W = (0, O.Iu)(G),
        Y = (e) => {
            c.Z.dispatch({
                type: 'VOICE_CHANNEL_EFFECT_RECENT_EMOJI',
                emoji: e
            }),
                (0, x.Lx)({
                    channel: n,
                    emoji: e,
                    location: x.yX.EMOJI_PICKER,
                    animationType: G,
                    animationId: W,
                    isPremium: B
                });
        },
        q = () => {
            (0, I.h)({
                analytics: {
                    type: A.cd.EMOJI_PICKER_EMOJI_CLICKED,
                    object: Z.qAy.BUTTON_CTA,
                    section: Z.jXE.VOICE_CHANNEL_EFFECTS_BAR
                }
            });
        },
        K = (e) => {
            (F.current = e),
                e &&
                    p.ZP.trackWithMetadata(Z.rMx.VOICE_CHANNEL_EFFECT_EMOJI_PICKER_EXPANDED, {
                        channel_id: X,
                        guild_id: Q
                    });
        },
        { id: X, guild_id: Q } = n;
    i.useEffect(() => {
        p.ZP.trackWithMetadata(Z.rMx.VOICE_CHANNEL_EFFECT_BAR_VIEWED, {
            channel_id: X,
            guild_id: Q
        });
    }, [X, Q]);
    let J = T ? [a.z.VOICE_CHANNEL_EFFECTS_REDUCED_MOTION_TOOLTIP] : [],
        $ = G === S.q.PREMIUM;
    return (0, r.jsx)(h.ZP, {
        contentTypes: J,
        children: (e) => {
            let { visibleContent: t, markAsDismissed: i } = e,
                l = T && t === a.z.VOICE_CHANNEL_EFFECTS_REDUCED_MOTION_TOOLTIP;
            return (0, r.jsx)(s.yRy, {
                position: 'left',
                'aria-label': R.intl.string(R.t.RLHsHx),
                shouldShow: l,
                renderPopout: () =>
                    (0, r.jsx)('div', {
                        onMouseEnter: y,
                        children: (0, r.jsx)(g.ZP, {
                            className: k.reducedMotionTooltip,
                            header: R.intl.string(R.t['6gGHnZ']),
                            content: R.intl.string(R.t.S2RGUF),
                            onClick: () => {
                                u.Z.open(Z.oAB.ACCESSIBILITY, null, { scrollPosition: w.rP.REDUCED_MOTION }), m();
                            },
                            markAsDismissed: i,
                            buttonCTA: R.intl.string(R.t.fgVzkJ),
                            secondaryButtonCTA: R.intl.string(R.t.VzO6Oj),
                            caretPosition: g.DF.RIGHT_CENTER
                        })
                    }),
                children: () =>
                    (0, r.jsx)(P.Z, {
                        title: R.intl.string(R.t.Nn8lPz),
                        channel: n,
                        closePopout: m,
                        onSelectEmoji: Y,
                        onSelectDisabledEmoji: q,
                        onFocus: y,
                        onExpandedToggle: K,
                        analyticsOverride: L,
                        emojiSearchProps: {
                            accessory: (0, r.jsx)(E.Z, {
                                labelText: R.intl.string(R.t['ktEv/v']),
                                value: $,
                                onChange: () => {
                                    if (B)
                                        return (
                                            p.ZP.trackWithMetadata(Z.rMx.VOICE_CHANNEL_EFFECT_FANCY_ANIMATION_TOGGLED, {
                                                channel_id: X,
                                                guild_id: Q,
                                                enabled: !$
                                            }),
                                            c.Z.dispatch({ type: 'VOICE_CHANNEL_EFFECT_TOGGLE_ANIMATION_TYPE' })
                                        );
                                },
                                onShowUpsell: () =>
                                    (0, I.h)({
                                        analytics: {
                                            type: F.current ? A.cd.VOICE_CHANNEL_EFFECTS_TOGGLE_CLICKED_EXPANDED : A.cd.VOICE_CHANNEL_EFFECTS_TOGGLE_CLICKED,
                                            object: Z.qAy.VOICE_CHANNEL_EFFECTS_TOGGLE,
                                            section: F.current ? Z.jXE.VOICE_CHANNEL_EFFECTS_EMOJI_PICKER : Z.jXE.VOICE_CHANNEL_EFFECTS_BAR
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
