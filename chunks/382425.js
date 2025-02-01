n.d(t, { Z: () => J }), n(47120);
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(442837),
    l = n(481060),
    u = n(287734),
    c = n(872810),
    d = n(110924),
    f = n(833664),
    _ = n(579630),
    p = n(100527),
    h = n(906732),
    m = n(750881),
    g = n(194082),
    E = n(318374),
    v = n(449605),
    y = n(102172),
    I = n(359110),
    T = n(769654),
    b = n(922482),
    S = n(592125),
    A = n(430824),
    N = n(496675),
    C = n(158776),
    R = n(699516),
    O = n(938475),
    D = n(626135),
    x = n(960870),
    L = n(139793),
    P = n(510659),
    w = n(287954),
    M = n(660579),
    k = n(652853),
    U = n(64621),
    G = n(336383),
    B = n(194811),
    Z = n(373826),
    F = n(315324),
    V = n(788858),
    j = n(599864),
    H = n(386019),
    Y = n(228168),
    W = n(981631),
    K = n(388032),
    z = n(249942),
    q = n(22481),
    Q = n(924482),
    X = n(774797);
function J(e) {
    let { user: t, currentUser: n, stream: a, className: J, onClose: $, profileGuildId: ee } = e,
        { profileType: et, theme: en } = (0, k.z)(),
        { interactionSource: ei, interactionSourceId: er } = (0, P.Xo)(),
        ea = {
            [q.fullSize]: et === Y.y0.FULL_SIZE,
            [z.fullSize]: et === Y.y0.FULL_SIZE
        },
        { enabled: es, analyticsEligible: eo } = (0, m.R4)('user-profile-stream-activity-card-web'),
        { analyticsLocations: el } = (0, h.ZP)(p.Z.USER_PROFILE_LIVE_ACTIVITY_CARD),
        eu = (0, x.Z)({
            display: 'live',
            user: t,
            stream: a,
            analyticsLocations: el
        }),
        ec = (0, L.Z)({
            userId: t.id,
            onAction: eu
        }),
        ed = (0, o.e7)([A.Z], () => A.Z.getGuild(null == a ? void 0 : a.guildId)),
        ef = (0, o.e7)([S.Z], () => S.Z.getChannel(null == a ? void 0 : a.channelId)),
        e_ = (0, o.Wu)([O.ZP], () =>
            null != ef
                ? O.ZP.getVoiceStatesForChannel(ef).map((e) => {
                      let { user: t } = e;
                      return t;
                  })
                : []
        ),
        ep = (0, o.e7)([C.Z], () => C.Z.findActivity(t.id, (e) => (0, f.Z)(e) && !(0, _.Z)(e))),
        [eh, em] = (0, y.wq)(ef),
        { previewUrl: eg, isLoading: eE } = (0, v.Z)(a.guildId, a.channelId, a.ownerId),
        ev = (0, o.e7)([N.Z], () => null != ef && N.Z.canBasicChannel(W.S7T.CONNECT, ef)),
        ey = (0, o.e7)([R.Z], () => R.Z.getRelationshipType(t.id));
    r.useEffect(() => {
        if (eo) {
            var e;
            D.default.track(W.rMx.USER_VOICE_ACTIVITY_VIEWED, {
                activity_user_id: t.id,
                discoverable: null === (e = a.discoverable) || void 0 === e || e,
                surface: 'user-profile-stream-activity-card',
                relationship_type: ey,
                treatment: es && !1 === a.discoverable ? m.h9.HIDE : m.h9.SHOW
            });
        }
    }, [t, ey, es, eo, a]);
    let eI = (0, d.Z)(eE ? null : eg),
        eT = eE || null == eg ? eI : eg;
    if (null == ed || null == ef || (es && !1 === a.discoverable) || null === et) return null;
    let eb = () => {
            let e = s()(q.preview, ea),
                t = (e) => {
                    e.stopPropagation(), eu({ action: 'PRESS_IMAGE' }), u.default.selectVoiceChannel(a.channelId), (0, c.iV)(a), null == $ || $();
                };
            return null == eT && eE
                ? (0, i.jsx)('div', {
                      className: e,
                      children: (0, i.jsx)(l.$jN, {})
                  })
                : null == eT
                  ? (0, i.jsxs)(l.P3F, {
                        className: s()(e, q.overlay, { [q.clickable]: eh }),
                        onClick: eh ? t : void 0,
                        children: [
                            (0, i.jsx)('img', {
                                alt: '',
                                src: en === W.BRd.LIGHT ? X : Q
                            }),
                            et !== Y.y0.FULL_SIZE &&
                                (0, i.jsxs)(i.Fragment, {
                                    children: [
                                        (0, i.jsx)(l.Text, {
                                            className: q.overlayText,
                                            variant: 'text-sm/medium',
                                            color: 'always-white',
                                            children: (0, y.P9)(em)
                                        }),
                                        (0, i.jsx)(l.Text, {
                                            variant: 'text-sm/medium',
                                            children: ev ? K.intl.string(K.t.uQZTBQ) : K.intl.string(K.t.pgUTZG)
                                        })
                                    ]
                                })
                        ]
                    })
                  : (0, i.jsxs)(l.P3F, {
                        className: s()(e, q.overlay, { [q.clickable]: eh }),
                        onClick: eh ? t : void 0,
                        children: [
                            (0, i.jsx)('img', {
                                alt: '',
                                src: eT,
                                className: q.image
                            }),
                            et !== Y.y0.FULL_SIZE &&
                                (0, i.jsxs)(i.Fragment, {
                                    children: [
                                        (0, i.jsx)(l.Text, {
                                            className: q.overlayText,
                                            variant: 'text-sm/medium',
                                            color: 'always-white',
                                            children: (0, y.P9)(em)
                                        }),
                                        (0, i.jsx)(l.gw7, {
                                            size: 'xs',
                                            color: 'currentColor',
                                            className: q.clyde
                                        })
                                    ]
                                })
                        ]
                    });
        },
        eS = () => {
            if (et !== Y.y0.FULL_SIZE) return null;
            let e = (e) => {
                    e.stopPropagation(), null == eu || eu({ action: 'OPEN_VOICE_CHANNEL' }), ef.isGuildStageVoice() ? (0, b.Cq)(ef) : (u.default.selectVoiceChannel(ef.id), (0, I.Kh)(ef.id)), null == $ || $();
                },
                n = (e) => {
                    e.stopPropagation(), eu({ action: 'OPEN_VOICE_GUILD' }), (0, T.X)(ed.id), null == $ || $();
                };
            return (0, i.jsxs)('div', {
                className: z.details,
                children: [
                    (0, i.jsxs)('div', {
                        children: [
                            (0, i.jsxs)(l.X6q, {
                                variant: 'heading-sm/semibold',
                                color: 'text-normal',
                                className: z.voiceChannelHeading,
                                children: [
                                    (0, i.jsx)(V.Z, {
                                        channel: ef,
                                        size: 'xxs',
                                        color: l.TVs.colors.TEXT_NORMAL,
                                        className: z.voiceIcon
                                    }),
                                    (0, i.jsx)(l.P3F, {
                                        className: s()(z.clickableText, z.inline),
                                        onClick: e,
                                        children: ef.name
                                    })
                                ]
                            }),
                            (0, i.jsx)(Z.Z, {
                                variant: 'text-xs/normal',
                                text: K.intl.formatToPlainString(K.t['hq/Qzc'], { guildName: ed.name }),
                                onClick: n
                            })
                        ]
                    }),
                    (0, i.jsx)(E.Z, {
                        users: e_,
                        guildId: ed.id,
                        channelId: ef.id,
                        maxUsers: F.W,
                        size: l.EFr.SIZE_16,
                        onClick: (e) => {
                            null == e || e.stopPropagation(), null == eu || eu({ action: 'PRESS_VOICE_CHANNEL_AVATARS' });
                        },
                        onUserClick: (e) => e.stopPropagation(),
                        disableUserPopout: (e) => e === t.id,
                        overflowCountVariant: 'text-xxs/semibold',
                        overflowCountColor: 'text-muted'
                    })
                ]
            });
        },
        eA = () =>
            et === Y.y0.FULL_SIZE
                ? null
                : (0, i.jsx)(F.Z, {
                      user: t,
                      guild: ed,
                      channel: ef,
                      onAction: eu,
                      onClose: $
                  }),
        eN = () =>
            t.id === n.id
                ? null
                : (0, i.jsx)('div', {
                      className: s()(z.actions, ea),
                      children: (0, i.jsx)(j.Z, {
                          channel: ef,
                          onAction: eu,
                          onClose: $
                      })
                  }),
        eC = eg,
        eR = ei === Y.n_.ACTIVITY && er === eC,
        eO = null != ep ? K.intl.formatToPlainString(K.t['4CQq9f'], { name: ep.name }) : K.intl.string(K.t['Jpkr/v']);
    return (0, i.jsx)(h.Gt, {
        value: el,
        children: (0, i.jsx)(U.Z, {
            sourceType: Y.n_.ACTIVITY,
            user: t,
            children: (0, i.jsx)(w.Z, {
                user: t,
                guildId: ee,
                profileType: et,
                sourceId: eC,
                sourceDetails: eO,
                sourceType: Y.n_.ACTIVITY,
                onAction: eu,
                children: () =>
                    (0, i.jsx)(M.Z, {
                        user: t,
                        className: z.toolbarContainer,
                        interactionSourceId: eC,
                        sourceType: Y.n_.ACTIVITY,
                        onAction: eu,
                        onShowToolbar: () => eu({ action: 'HOVER_ACTIVITY_CARD' }),
                        renderMoreButtonPopout: (e) =>
                            (0, i.jsx)(H.Z, {
                                display: 'live',
                                user: t,
                                onClose: $,
                                children: e
                            }),
                        children: (0, i.jsxs)(G.Z, {
                            ref: ec,
                            className: s()(J, { [z.hoisted]: eR }),
                            onAction: eu,
                            onClose: $,
                            children: [
                                (0, i.jsx)(B.Z, {
                                    text: eO,
                                    tags: (0, i.jsx)(g.ZP, { size: g.OH.SMALL })
                                }),
                                (0, i.jsxs)('div', {
                                    className: z.body,
                                    children: [
                                        (0, i.jsxs)('div', {
                                            className: s()(z.content, ea),
                                            children: [eb(), eS(), et === Y.y0.FULL_SIZE && eN()]
                                        }),
                                        eA()
                                    ]
                                }),
                                et !== Y.y0.FULL_SIZE && eN()
                            ]
                        })
                    })
            })
        })
    });
}
