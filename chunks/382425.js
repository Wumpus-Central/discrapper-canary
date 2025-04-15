n.d(t, { Z: () => J }), n(388685);
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(442837),
    l = n(481060),
    c = n(287734),
    u = n(872810),
    d = n(110924),
    f = n(833664),
    _ = n(579630),
    p = n(100527),
    h = n(906732),
    m = n(750881),
    g = n(194082),
    E = n(318374),
    b = n(449605),
    y = n(102172),
    v = n(359110),
    O = n(769654),
    I = n(922482),
    S = n(592125),
    T = n(430824),
    N = n(496675),
    A = n(158776),
    C = n(699516),
    R = n(938475),
    P = n(626135),
    w = n(960870),
    D = n(139793),
    L = n(510659),
    x = n(287954),
    M = n(660579),
    k = n(652853),
    j = n(64621),
    U = n(336383),
    G = n(194811),
    B = n(373826),
    V = n(315324),
    F = n(788858),
    Z = n(384298),
    H = n(386019),
    W = n(228168),
    Y = n(981631),
    K = n(388032),
    z = n(227832),
    q = n(162509),
    Q = n(924482),
    X = n(774797);
function J(e) {
    let { user: t, currentUser: n, stream: o, className: J, onClose: $, profileGuildId: ee } = e,
        et = i.useRef(null),
        { profileType: en, theme: er } = (0, k.z)(),
        { interactionSource: ei, interactionSourceId: eo } = (0, L.Xo)(),
        ea = {
            [q.fullSize]: en === W.y0.FULL_SIZE,
            [z.fullSize]: en === W.y0.FULL_SIZE
        },
        { enabled: es, analyticsEligible: el } = (0, m.R4)('user-profile-stream-activity-card-web'),
        ec = (0, s.e7)([T.Z], () => T.Z.getGuild(null == o ? void 0 : o.guildId)),
        eu = (0, s.e7)([S.Z], () => S.Z.getChannel(null == o ? void 0 : o.channelId)),
        ed = (0, s.Wu)([R.ZP], () =>
            null != eu
                ? R.ZP.getVoiceStatesForChannel(eu).map((e) => {
                      let { user: t } = e;
                      return t;
                  })
                : []
        ),
        ef = (0, s.e7)([A.Z], () => A.Z.findActivity(t.id, (e) => (0, f.Z)(e) && !(0, _.Z)(e))),
        { analyticsLocations: e_ } = (0, h.ZP)(p.Z.USER_PROFILE_LIVE_ACTIVITY_CARD),
        ep = (0, w.Z)({
            display: 'live',
            voiceChannelId: null == eu ? void 0 : eu.id,
            user: t,
            stream: o,
            analyticsLocations: e_
        }),
        eh = (0, D.Z)({
            userId: t.id,
            onAction: ep
        }),
        [em, eg] = (0, y.wq)(eu),
        { previewUrl: eE, isLoading: eb } = (0, b.Z)(o.guildId, o.channelId, o.ownerId),
        ey = (0, s.e7)([N.Z], () => null != eu && N.Z.canBasicChannel(Y.S7T.CONNECT, eu)),
        ev = (0, s.e7)([C.Z], () => C.Z.getRelationshipType(t.id));
    i.useEffect(() => {
        if (el) {
            var e;
            P.default.track(Y.rMx.USER_VOICE_ACTIVITY_VIEWED, {
                activity_user_id: t.id,
                discoverable: null == (e = o.discoverable) || e,
                surface: 'user-profile-stream-activity-card',
                relationship_type: ev,
                treatment: es && !1 === o.discoverable ? m.h9.HIDE : m.h9.SHOW
            });
        }
    }, [t, ev, es, el, o]);
    let eO = (0, d.Z)(eb ? null : eE),
        eI = eb || null == eE ? eO : eE;
    if (null == ec || null == eu || (es && !1 === o.discoverable) || null === en) return null;
    let eS = () => {
            let e = a()(q.preview, ea),
                t = (e) => {
                    e.stopPropagation(), ep({ action: 'PRESS_IMAGE' }), c.default.selectVoiceChannel(o.channelId), (0, u.iV)(o), null == $ || $();
                };
            return null == eI && eb
                ? (0, r.jsx)('div', {
                      className: e,
                      children: (0, r.jsx)(l.$jN, {})
                  })
                : null == eI
                  ? (0, r.jsxs)(l.P3F, {
                        className: a()(e, q.overlay, { [q.clickable]: em }),
                        onClick: em ? t : void 0,
                        children: [
                            (0, r.jsx)('img', {
                                alt: '',
                                src: er === Y.BRd.LIGHT ? X : Q
                            }),
                            en !== W.y0.FULL_SIZE &&
                                (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        (0, r.jsx)(l.Text, {
                                            className: q.overlayText,
                                            variant: 'text-sm/medium',
                                            color: 'always-white',
                                            children: (0, y.P9)(eg)
                                        }),
                                        (0, r.jsx)(l.Text, {
                                            variant: 'text-sm/medium',
                                            children: ey ? K.NW.string(K.t.uQZTBQ) : K.NW.string(K.t.pgUTZG)
                                        })
                                    ]
                                })
                        ]
                    })
                  : (0, r.jsxs)(l.P3F, {
                        className: a()(e, q.overlay, { [q.clickable]: em }),
                        onClick: em ? t : void 0,
                        children: [
                            (0, r.jsx)('img', {
                                alt: '',
                                src: eI,
                                className: q.image
                            }),
                            en !== W.y0.FULL_SIZE &&
                                (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        (0, r.jsx)(l.Text, {
                                            className: q.overlayText,
                                            variant: 'text-sm/medium',
                                            color: 'always-white',
                                            children: (0, y.P9)(eg)
                                        }),
                                        (0, r.jsx)(l.gw7, {
                                            size: 'xs',
                                            color: 'currentColor',
                                            className: q.clyde
                                        })
                                    ]
                                })
                        ]
                    });
        },
        eT = () => {
            if (en !== W.y0.FULL_SIZE) return null;
            let e = (e) => {
                    e.stopPropagation(), null == ep || ep({ action: 'OPEN_VOICE_CHANNEL' }), eu.isGuildStageVoice() ? (0, I.Cq)(eu) : (c.default.selectVoiceChannel(eu.id), (0, v.Kh)(eu.id)), null == $ || $();
                },
                n = (e) => {
                    e.stopPropagation(), ep({ action: 'OPEN_VOICE_GUILD' }), (0, O.X)(ec.id), null == $ || $();
                };
            return (0, r.jsxs)('div', {
                className: z.details,
                children: [
                    (0, r.jsxs)('div', {
                        children: [
                            (0, r.jsxs)(l.X6q, {
                                variant: 'heading-sm/semibold',
                                color: 'text-normal',
                                className: z.voiceChannelHeading,
                                children: [
                                    (0, r.jsx)(F.Z, {
                                        channel: eu,
                                        size: 'xxs',
                                        color: l.TVs.colors.TEXT_NORMAL,
                                        className: z.voiceIcon
                                    }),
                                    (0, r.jsx)(l.P3F, {
                                        className: a()(z.clickableText, z.inline),
                                        onClick: e,
                                        children: eu.name
                                    })
                                ]
                            }),
                            (0, r.jsx)(B.Z, {
                                variant: 'text-xs/normal',
                                text: K.NW.formatToPlainString(K.t['hq/Qzc'], { guildName: ec.name }),
                                onClick: n
                            })
                        ]
                    }),
                    (0, r.jsx)(E.Z, {
                        users: ed,
                        guildId: ec.id,
                        channelId: eu.id,
                        maxUsers: V.W,
                        size: l.EFr.SIZE_16,
                        onClick: (e) => {
                            null == e || e.stopPropagation(), null == ep || ep({ action: 'PRESS_VOICE_CHANNEL_AVATARS' });
                        },
                        onUserClick: (e) => e.stopPropagation(),
                        disableUserPopout: (e) => e === t.id,
                        overflowCountVariant: 'text-xxs/semibold',
                        overflowCountColor: 'text-muted'
                    })
                ]
            });
        },
        eN = () =>
            en === W.y0.FULL_SIZE
                ? null
                : (0, r.jsx)(V.Z, {
                      user: t,
                      guild: ec,
                      channel: eu,
                      onAction: ep,
                      onClose: $
                  }),
        eA = () =>
            t.id === n.id
                ? null
                : (0, r.jsx)('div', {
                      className: a()(z.actions, ea),
                      children: (0, r.jsx)(Z.Z, {
                          channel: eu,
                          onAction: ep,
                          onClose: $
                      })
                  }),
        eC = eE,
        eR = ei === W.n_.ACTIVITY && eo === eC,
        eP = null != ef ? K.NW.formatToPlainString(K.t['4CQq9f'], { name: ef.name }) : K.NW.string(K.t['Jpkr/v']);
    return (0, r.jsx)(h.Gt, {
        value: e_,
        children: (0, r.jsx)(j.Z, {
            targetElementRef: et,
            sourceType: W.n_.ACTIVITY,
            user: t,
            children: (0, r.jsx)(x.Z, {
                user: t,
                guildId: ee,
                profileType: en,
                sourceId: eC,
                sourceDetails: eP,
                sourceType: W.n_.ACTIVITY,
                onAction: ep,
                children: () =>
                    (0, r.jsx)(M.Z, {
                        ref: et,
                        user: t,
                        className: z.toolbarContainer,
                        interactionSourceId: eC,
                        sourceType: W.n_.ACTIVITY,
                        onAction: ep,
                        onShowToolbar: () => ep({ action: 'HOVER_ACTIVITY_CARD' }),
                        renderMoreButtonPopout: (e) =>
                            (0, r.jsx)(H.Z, {
                                display: 'live',
                                user: t,
                                onClose: $,
                                children: e
                            }),
                        children: (0, r.jsxs)(U.Z, {
                            ref: eh,
                            className: a()(J, { [z.hoisted]: eR }),
                            onAction: ep,
                            onClose: $,
                            children: [
                                (0, r.jsx)(G.Z, {
                                    text: eP,
                                    tags: (0, r.jsx)(g.ZP, { size: g.OH.SMALL })
                                }),
                                (0, r.jsxs)('div', {
                                    className: z.body,
                                    children: [
                                        (0, r.jsxs)('div', {
                                            className: a()(z.content, ea),
                                            children: [eS(), eT(), en === W.y0.FULL_SIZE && eA()]
                                        }),
                                        eN()
                                    ]
                                }),
                                en !== W.y0.FULL_SIZE && eA()
                            ]
                        })
                    })
            })
        })
    });
}
