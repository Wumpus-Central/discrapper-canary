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
    p = n(579630),
    _ = n(100527),
    h = n(906732),
    m = n(750881),
    g = n(194082),
    E = n(318374),
    v = n(449605),
    b = n(102172),
    y = n(359110),
    O = n(769654),
    S = n(922482),
    I = n(592125),
    T = n(430824),
    N = n(496675),
    A = n(158776),
    C = n(699516),
    R = n(938475),
    P = n(626135),
    w = n(960870),
    D = n(139793),
    x = n(510659),
    L = n(287954),
    M = n(660579),
    k = n(652853),
    j = n(64621),
    U = n(336383),
    G = n(194811),
    B = n(373826),
    Z = n(315324),
    F = n(788858),
    V = n(599864),
    H = n(386019),
    W = n(228168),
    Y = n(981631),
    K = n(388032),
    z = n(481736),
    q = n(713467),
    Q = n(924482),
    X = n(774797);
function J(e) {
    let { user: t, currentUser: n, stream: o, className: J, onClose: $, profileGuildId: ee } = e,
        { profileType: et, theme: en } = (0, k.z)(),
        { interactionSource: er, interactionSourceId: ei } = (0, x.Xo)(),
        eo = {
            [q.fullSize]: et === W.y0.FULL_SIZE,
            [z.fullSize]: et === W.y0.FULL_SIZE
        },
        { enabled: ea, analyticsEligible: es } = (0, m.R4)('user-profile-stream-activity-card-web'),
        el = (0, s.e7)([T.Z], () => T.Z.getGuild(null == o ? void 0 : o.guildId)),
        ec = (0, s.e7)([I.Z], () => I.Z.getChannel(null == o ? void 0 : o.channelId)),
        eu = (0, s.Wu)([R.ZP], () =>
            null != ec
                ? R.ZP.getVoiceStatesForChannel(ec).map((e) => {
                      let { user: t } = e;
                      return t;
                  })
                : []
        ),
        ed = (0, s.e7)([A.Z], () => A.Z.findActivity(t.id, (e) => (0, f.Z)(e) && !(0, p.Z)(e))),
        { analyticsLocations: ef } = (0, h.ZP)(_.Z.USER_PROFILE_LIVE_ACTIVITY_CARD),
        ep = (0, w.Z)({
            display: 'live',
            voiceChannelId: null == ec ? void 0 : ec.id,
            user: t,
            stream: o,
            analyticsLocations: ef
        }),
        e_ = (0, D.Z)({
            userId: t.id,
            onAction: ep
        }),
        [eh, em] = (0, b.wq)(ec),
        { previewUrl: eg, isLoading: eE } = (0, v.Z)(o.guildId, o.channelId, o.ownerId),
        ev = (0, s.e7)([N.Z], () => null != ec && N.Z.canBasicChannel(Y.S7T.CONNECT, ec)),
        eb = (0, s.e7)([C.Z], () => C.Z.getRelationshipType(t.id));
    i.useEffect(() => {
        if (es) {
            var e;
            P.default.track(Y.rMx.USER_VOICE_ACTIVITY_VIEWED, {
                activity_user_id: t.id,
                discoverable: null === (e = o.discoverable) || void 0 === e || e,
                surface: 'user-profile-stream-activity-card',
                relationship_type: eb,
                treatment: ea && !1 === o.discoverable ? m.h9.HIDE : m.h9.SHOW
            });
        }
    }, [t, eb, ea, es, o]);
    let ey = (0, d.Z)(eE ? null : eg),
        eO = eE || null == eg ? ey : eg;
    if (null == el || null == ec || (ea && !1 === o.discoverable) || null === et) return null;
    let eS = () => {
            let e = a()(q.preview, eo),
                t = (e) => {
                    e.stopPropagation(), ep({ action: 'PRESS_IMAGE' }), c.default.selectVoiceChannel(o.channelId), (0, u.iV)(o), null == $ || $();
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
                                            children: (0, b.P9)(em)
                                        }),
                                        (0, r.jsx)(l.Text, {
                                            variant: 'text-sm/medium',
                                            children: ev ? K.NW.string(K.t.uQZTBQ) : K.NW.string(K.t.pgUTZG)
                                        })
                                    ]
                                })
                        ]
                    })
                  : (0, r.jsxs)(l.P3F, {
                        className: a()(e, q.overlay, { [q.clickable]: eh }),
                        onClick: eh ? t : void 0,
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
                                            children: (0, b.P9)(em)
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
        eI = () => {
            if (et !== W.y0.FULL_SIZE) return null;
            let e = (e) => {
                    e.stopPropagation(), null == ep || ep({ action: 'OPEN_VOICE_CHANNEL' }), ec.isGuildStageVoice() ? (0, S.Cq)(ec) : (c.default.selectVoiceChannel(ec.id), (0, y.Kh)(ec.id)), null == $ || $();
                },
                n = (e) => {
                    e.stopPropagation(), ep({ action: 'OPEN_VOICE_GUILD' }), (0, O.X)(el.id), null == $ || $();
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
                        maxUsers: Z.W,
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
        eT = () =>
            et === W.y0.FULL_SIZE
                ? null
                : (0, r.jsx)(Z.Z, {
                      user: t,
                      guild: el,
                      channel: ec,
                      onAction: ep,
                      onClose: $
                  }),
        eN = () =>
            t.id === n.id
                ? null
                : (0, r.jsx)('div', {
                      className: a()(z.actions, eo),
                      children: (0, r.jsx)(V.Z, {
                          channel: ec,
                          onAction: ep,
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
            children: (0, r.jsx)(L.Z, {
                user: t,
                guildId: ee,
                profileType: et,
                sourceId: eA,
                sourceDetails: eR,
                sourceType: W.n_.ACTIVITY,
                onAction: ep,
                children: () =>
                    (0, r.jsx)(M.Z, {
                        user: t,
                        className: z.toolbarContainer,
                        interactionSourceId: eA,
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
                            ref: e_,
                            className: a()(J, { [z.hoisted]: eC }),
                            onAction: ep,
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
                                            children: [eS(), eI(), et === W.y0.FULL_SIZE && eN()]
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
