n.d(t, { Z: () => J }), n(47120);
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
    F = n(315324),
    V = n(788858),
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
        { profileType: et, theme: en } = (0, k.z)(),
        { interactionSource: er, interactionSourceId: ei } = (0, L.Xo)(),
        eo = {
            [q.fullSize]: et === W.y0.FULL_SIZE,
            [z.fullSize]: et === W.y0.FULL_SIZE
        },
        { enabled: ea, analyticsEligible: es } = (0, m.R4)('user-profile-stream-activity-card-web'),
        el = (0, s.e7)([T.Z], () => T.Z.getGuild(null == o ? void 0 : o.guildId)),
        ec = (0, s.e7)([S.Z], () => S.Z.getChannel(null == o ? void 0 : o.channelId)),
        eu = (0, s.Wu)([R.ZP], () =>
            null != ec
                ? R.ZP.getVoiceStatesForChannel(ec).map((e) => {
                      let { user: t } = e;
                      return t;
                  })
                : []
        ),
        ed = (0, s.e7)([A.Z], () => A.Z.findActivity(t.id, (e) => (0, f.Z)(e) && !(0, _.Z)(e))),
        { analyticsLocations: ef } = (0, h.ZP)(p.Z.USER_PROFILE_LIVE_ACTIVITY_CARD),
        e_ = (0, w.Z)({
            display: 'live',
            voiceChannelId: null == ec ? void 0 : ec.id,
            user: t,
            stream: o,
            analyticsLocations: ef
        }),
        ep = (0, D.Z)({
            userId: t.id,
            onAction: e_
        }),
        [eh, em] = (0, y.wq)(ec),
        { previewUrl: eg, isLoading: eE } = (0, b.Z)(o.guildId, o.channelId, o.ownerId),
        eb = (0, s.e7)([N.Z], () => null != ec && N.Z.canBasicChannel(Y.S7T.CONNECT, ec)),
        ey = (0, s.e7)([C.Z], () => C.Z.getRelationshipType(t.id));
    i.useEffect(() => {
        if (es) {
            var e;
            P.default.track(Y.rMx.USER_VOICE_ACTIVITY_VIEWED, {
                activity_user_id: t.id,
                discoverable: null == (e = o.discoverable) || e,
                surface: 'user-profile-stream-activity-card',
                relationship_type: ey,
                treatment: ea && !1 === o.discoverable ? m.h9.HIDE : m.h9.SHOW
            });
        }
    }, [t, ey, ea, es, o]);
    let ev = (0, d.Z)(eE ? null : eg),
        eO = eE || null == eg ? ev : eg;
    if (null == el || null == ec || (ea && !1 === o.discoverable) || null === et) return null;
    let eI = () => {
            let e = a()(q.preview, eo),
                t = (e) => {
                    e.stopPropagation(), e_({ action: 'PRESS_IMAGE' }), c.default.selectVoiceChannel(o.channelId), (0, u.iV)(o), null == $ || $();
                },
                n = (e) => {
                    (e.keyCode === Y.yXg.SPACE || e.keyCode === Y.yXg.ENTER) && t(e);
                };
            return null == eO && eE
                ? (0, r.jsx)('div', {
                      className: e,
                      children: (0, r.jsx)(l.$jN, {})
                  })
                : null == eO
                  ? (0, r.jsxs)(l.P3F, {
                        className: a()(e, q.overlay, { [q.clickable]: eh }),
                        onClick: eh ? t : void 0,
                        onKeyDown: eh ? n : void 0,
                        children: [
                            (0, r.jsx)('img', {
                                alt: '',
                                src: en === Y.BRd.LIGHT ? X : Q
                            }),
                            et !== W.y0.FULL_SIZE &&
                                (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        (0, r.jsx)(l.Text, {
                                            className: q.overlayText,
                                            variant: 'text-sm/medium',
                                            color: 'always-white',
                                            children: (0, y.P9)(em)
                                        }),
                                        (0, r.jsx)(l.Text, {
                                            variant: 'text-sm/medium',
                                            children: eb ? K.NW.string(K.t.uQZTBQ) : K.NW.string(K.t.pgUTZG)
                                        })
                                    ]
                                })
                        ]
                    })
                  : (0, r.jsxs)(l.P3F, {
                        className: a()(e, q.overlay, { [q.clickable]: eh }),
                        onClick: eh ? t : void 0,
                        onKeyDown: eh ? n : void 0,
                        children: [
                            (0, r.jsx)('img', {
                                alt: '',
                                src: eO,
                                className: q.image
                            }),
                            et !== W.y0.FULL_SIZE &&
                                (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        (0, r.jsx)(l.Text, {
                                            className: q.overlayText,
                                            variant: 'text-sm/medium',
                                            color: 'always-white',
                                            children: (0, y.P9)(em)
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
        eS = () => {
            if (et !== W.y0.FULL_SIZE) return null;
            let e = (e) => {
                    e.stopPropagation(), null == e_ || e_({ action: 'OPEN_VOICE_CHANNEL' }), ec.isGuildStageVoice() ? (0, I.Cq)(ec) : (c.default.selectVoiceChannel(ec.id), (0, v.Kh)(ec.id)), null == $ || $();
                },
                n = (e) => {
                    e.stopPropagation(), e_({ action: 'OPEN_VOICE_GUILD' }), (0, O.X)(el.id), null == $ || $();
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
                                    (0, r.jsx)(V.Z, {
                                        channel: ec,
                                        size: 'xxs',
                                        color: l.TVs.colors.TEXT_NORMAL,
                                        className: z.voiceIcon
                                    }),
                                    (0, r.jsx)(l.P3F, {
                                        className: a()(z.clickableText, z.inline),
                                        onClick: e,
                                        children: ec.name
                                    })
                                ]
                            }),
                            (0, r.jsx)(B.Z, {
                                variant: 'text-xs/normal',
                                text: K.NW.formatToPlainString(K.t['hq/Qzc'], { guildName: el.name }),
                                onClick: n
                            })
                        ]
                    }),
                    (0, r.jsx)(E.Z, {
                        users: eu,
                        guildId: el.id,
                        channelId: ec.id,
                        maxUsers: F.W,
                        size: l.EFr.SIZE_16,
                        onClick: (e) => {
                            null == e || e.stopPropagation(), null == e_ || e_({ action: 'PRESS_VOICE_CHANNEL_AVATARS' });
                        },
                        onUserClick: (e) => e.stopPropagation(),
                        disableUserPopout: (e) => e === t.id,
                        overflowCountVariant: 'text-xxs/semibold',
                        overflowCountColor: 'text-muted'
                    })
                ]
            });
        },
        eT = () =>
            et === W.y0.FULL_SIZE
                ? null
                : (0, r.jsx)(F.Z, {
                      user: t,
                      guild: el,
                      channel: ec,
                      onAction: e_,
                      onClose: $
                  }),
        eN = () =>
            t.id === n.id
                ? null
                : (0, r.jsx)('div', {
                      className: a()(z.actions, eo),
                      children: (0, r.jsx)(Z.Z, {
                          channel: ec,
                          onAction: e_,
                          onClose: $
                      })
                  }),
        eA = eg,
        eC = er === W.n_.ACTIVITY && ei === eA,
        eR = null != ed ? K.NW.formatToPlainString(K.t['4CQq9f'], { name: ed.name }) : K.NW.string(K.t['Jpkr/v']);
    return (0, r.jsx)(h.Gt, {
        value: ef,
        children: (0, r.jsx)(j.Z, {
            sourceType: W.n_.ACTIVITY,
            user: t,
            children: (0, r.jsx)(x.Z, {
                user: t,
                guildId: ee,
                profileType: et,
                sourceId: eA,
                sourceDetails: eR,
                sourceType: W.n_.ACTIVITY,
                onAction: e_,
                children: () =>
                    (0, r.jsx)(M.Z, {
                        user: t,
                        className: z.toolbarContainer,
                        interactionSourceId: eA,
                        sourceType: W.n_.ACTIVITY,
                        onAction: e_,
                        onShowToolbar: () => e_({ action: 'HOVER_ACTIVITY_CARD' }),
                        renderMoreButtonPopout: (e) =>
                            (0, r.jsx)(H.Z, {
                                display: 'live',
                                user: t,
                                onClose: $,
                                children: e
                            }),
                        children: (0, r.jsxs)(U.Z, {
                            ref: ep,
                            className: a()(J, { [z.hoisted]: eC }),
                            onAction: e_,
                            onClose: $,
                            children: [
                                (0, r.jsx)(G.Z, {
                                    text: eR,
                                    tags: (0, r.jsx)(g.ZP, { size: g.OH.SMALL })
                                }),
                                (0, r.jsxs)('div', {
                                    className: z.body,
                                    children: [
                                        (0, r.jsxs)('div', {
                                            className: a()(z.content, eo),
                                            children: [eI(), eS(), et === W.y0.FULL_SIZE && eN()]
                                        }),
                                        eT()
                                    ]
                                }),
                                et !== W.y0.FULL_SIZE && eN()
                            ]
                        })
                    })
            })
        })
    });
}
