n.d(t, { Z: () => X }), n(47120);
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
    b = n(769654),
    T = n(922482),
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
    V = n(599864),
    j = n(386019),
    H = n(228168),
    Y = n(981631),
    W = n(388032),
    K = n(249942),
    z = n(22481),
    q = n(924482),
    Q = n(774797);
function X(e) {
    let { user: t, currentUser: n, stream: a, className: X, onClose: J, profileGuildId: $ } = e,
        { profileType: ee, theme: et } = (0, k.z)(),
        { interactionSource: en, interactionSourceId: ei } = (0, P.Xo)(),
        er = {
            [z.fullSize]: ee === H.y0.FULL_SIZE,
            [K.fullSize]: ee === H.y0.FULL_SIZE
        },
        { enabled: ea, analyticsEligible: es } = (0, m.R4)('user-profile-stream-activity-card-web'),
        { analyticsLocations: eo } = (0, h.ZP)(p.Z.USER_PROFILE_LIVE_ACTIVITY_CARD),
        el = (0, x.Z)({
            display: 'live',
            user: t,
            stream: a,
            analyticsLocations: eo
        }),
        eu = (0, L.Z)({
            userId: t.id,
            onAction: el
        }),
        ec = (0, o.e7)([A.Z], () => A.Z.getGuild(null == a ? void 0 : a.guildId)),
        ed = (0, o.e7)([S.Z], () => S.Z.getChannel(null == a ? void 0 : a.channelId)),
        ef = (0, o.Wu)([O.ZP], () =>
            null != ed
                ? O.ZP.getVoiceStatesForChannel(ed).map((e) => {
                      let { user: t } = e;
                      return t;
                  })
                : []
        ),
        e_ = (0, o.e7)([C.Z], () => C.Z.findActivity(t.id, (e) => (0, f.Z)(e) && !(0, _.Z)(e))),
        [ep, eh] = (0, y.wq)(ed),
        { previewUrl: em, isLoading: eg } = (0, v.Z)(a.guildId, a.channelId, a.ownerId),
        eE = (0, o.e7)([N.Z], () => null != ed && N.Z.canBasicChannel(Y.S7T.CONNECT, ed)),
        ev = (0, o.e7)([R.Z], () => R.Z.getRelationshipType(t.id));
    r.useEffect(() => {
        if (es) {
            var e;
            D.default.track(Y.rMx.USER_VOICE_ACTIVITY_VIEWED, {
                activity_user_id: t.id,
                discoverable: null === (e = a.discoverable) || void 0 === e || e,
                surface: 'user-profile-stream-activity-card',
                relationship_type: ev,
                treatment: ea && !1 === a.discoverable ? m.h9.HIDE : m.h9.SHOW
            });
        }
    }, [t, ev, ea, es, a]);
    let ey = (0, d.Z)(eg ? null : em),
        eI = eg || null == em ? ey : em;
    if (null == ec || null == ed || (ea && !1 === a.discoverable) || null === ee) return null;
    let eb = () => {
            let e = s()(z.preview, er),
                t = (e) => {
                    e.stopPropagation(), el({ action: 'PRESS_IMAGE' }), u.default.selectVoiceChannel(a.channelId), (0, c.iV)(a), null == J || J();
                };
            return null == eI && eg
                ? (0, i.jsx)('div', {
                      className: e,
                      children: (0, i.jsx)(l.$jN, {})
                  })
                : null == eI
                  ? (0, i.jsxs)(l.P3F, {
                        className: s()(e, z.overlay, { [z.clickable]: ep }),
                        onClick: ep ? t : void 0,
                        children: [
                            (0, i.jsx)('img', {
                                alt: '',
                                src: et === Y.BRd.LIGHT ? Q : q
                            }),
                            ee !== H.y0.FULL_SIZE &&
                                (0, i.jsxs)(i.Fragment, {
                                    children: [
                                        (0, i.jsx)(l.Text, {
                                            className: z.overlayText,
                                            variant: 'text-sm/medium',
                                            color: 'always-white',
                                            children: (0, y.P9)(eh)
                                        }),
                                        (0, i.jsx)(l.Text, {
                                            variant: 'text-sm/medium',
                                            children: eE ? W.intl.string(W.t.uQZTBQ) : W.intl.string(W.t.pgUTZG)
                                        })
                                    ]
                                })
                        ]
                    })
                  : (0, i.jsxs)(l.P3F, {
                        className: s()(e, z.overlay, { [z.clickable]: ep }),
                        onClick: ep ? t : void 0,
                        children: [
                            (0, i.jsx)('img', {
                                alt: '',
                                src: eI,
                                className: z.image
                            }),
                            ee !== H.y0.FULL_SIZE &&
                                (0, i.jsxs)(i.Fragment, {
                                    children: [
                                        (0, i.jsx)(l.Text, {
                                            className: z.overlayText,
                                            variant: 'text-sm/medium',
                                            color: 'always-white',
                                            children: (0, y.P9)(eh)
                                        }),
                                        (0, i.jsx)(l.gw7, {
                                            size: 'xs',
                                            color: 'currentColor',
                                            className: z.clyde
                                        })
                                    ]
                                })
                        ]
                    });
        },
        eT = () => {
            if (ee !== H.y0.FULL_SIZE) return null;
            let e = ed.isGuildStageVoice(),
                n = e ? l.ewx : l.gj8,
                r = (t) => {
                    t.stopPropagation(), null == el || el({ action: 'OPEN_VOICE_CHANNEL' }), e ? (0, T.Cq)(ed) : (u.default.selectVoiceChannel(ed.id), (0, I.Kh)(ed.id)), null == J || J();
                },
                a = (e) => {
                    e.stopPropagation(), el({ action: 'OPEN_VOICE_GUILD' }), (0, b.X)(ec.id), null == J || J();
                };
            return (0, i.jsxs)('div', {
                className: K.details,
                children: [
                    (0, i.jsxs)('div', {
                        children: [
                            (0, i.jsxs)(l.X6q, {
                                variant: 'heading-sm/semibold',
                                color: 'text-normal',
                                className: K.voiceChannelHeading,
                                children: [
                                    (0, i.jsx)(n, {
                                        size: 'xxs',
                                        color: l.TVs.colors.TEXT_NORMAL,
                                        className: K.voiceIcon
                                    }),
                                    (0, i.jsx)(l.P3F, {
                                        className: s()(K.clickableText, K.inline),
                                        onClick: r,
                                        children: ed.name
                                    })
                                ]
                            }),
                            (0, i.jsx)(Z.Z, {
                                variant: 'text-xs/normal',
                                text: W.intl.formatToPlainString(W.t['hq/Qzc'], { guildName: ec.name }),
                                onClick: a
                            })
                        ]
                    }),
                    (0, i.jsx)(E.Z, {
                        users: ef,
                        guildId: ec.id,
                        channelId: ed.id,
                        maxUsers: F.W,
                        size: l.EFr.SIZE_16,
                        onClick: (e) => {
                            null == e || e.stopPropagation(), null == el || el({ action: 'PRESS_VOICE_CHANNEL_AVATARS' });
                        },
                        onUserClick: (e) => e.stopPropagation(),
                        disableUserPopout: (e) => e === t.id,
                        overflowCountVariant: 'text-xxs/semibold',
                        overflowCountColor: 'text-muted'
                    })
                ]
            });
        },
        eS = () =>
            ee === H.y0.FULL_SIZE
                ? null
                : (0, i.jsx)(F.Z, {
                      user: t,
                      guild: ec,
                      channel: ed,
                      onAction: el,
                      onClose: J
                  }),
        eA = () =>
            t.id === n.id
                ? null
                : (0, i.jsx)('div', {
                      className: s()(K.actions, er),
                      children: (0, i.jsx)(V.Z, {
                          channel: ed,
                          onAction: el,
                          onClose: J
                      })
                  }),
        eN = em,
        eC = en === H.n_.ACTIVITY && ei === eN,
        eR = null != e_ ? W.intl.formatToPlainString(W.t['4CQq9f'], { name: e_.name }) : W.intl.string(W.t['Jpkr/v']);
    return (0, i.jsx)(h.Gt, {
        value: eo,
        children: (0, i.jsx)(U.Z, {
            sourceType: H.n_.ACTIVITY,
            user: t,
            children: (0, i.jsx)(w.Z, {
                user: t,
                guildId: $,
                profileType: ee,
                sourceId: eN,
                sourceDetails: eR,
                sourceType: H.n_.ACTIVITY,
                onAction: el,
                children: () =>
                    (0, i.jsx)(M.Z, {
                        user: t,
                        className: K.toolbarContainer,
                        interactionSourceId: eN,
                        sourceType: H.n_.ACTIVITY,
                        onAction: el,
                        onShowToolbar: () => el({ action: 'HOVER_ACTIVITY_CARD' }),
                        renderMoreButtonPopout: (e) =>
                            (0, i.jsx)(j.Z, {
                                display: 'live',
                                user: t,
                                onClose: J,
                                children: e
                            }),
                        children: (0, i.jsxs)(G.Z, {
                            ref: eu,
                            className: s()(X, { [K.hoisted]: eC }),
                            onAction: el,
                            onClose: J,
                            children: [
                                (0, i.jsx)(B.Z, {
                                    text: eR,
                                    tags: (0, i.jsx)(g.ZP, { size: g.OH.SMALL })
                                }),
                                (0, i.jsxs)('div', {
                                    className: K.body,
                                    children: [
                                        (0, i.jsxs)('div', {
                                            className: s()(K.content, er),
                                            children: [eb(), eT(), ee === H.y0.FULL_SIZE && eA()]
                                        }),
                                        eS()
                                    ]
                                }),
                                ee !== H.y0.FULL_SIZE && eA()
                            ]
                        })
                    })
            })
        })
    });
}
