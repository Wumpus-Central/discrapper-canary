r.d(n, {
    Z: function () {
        return $;
    }
});
var i = r(47120);
var a = r(200651),
    o = r(192379),
    s = r(120356),
    l = r.n(s),
    u = r(442837),
    c = r(481060),
    d = r(287734),
    f = r(872810),
    p = r(110924),
    h = r(833664),
    _ = r(579630),
    m = r(100527),
    g = r(906732),
    E = r(750881),
    v = r(194082),
    y = r(318374),
    b = r(449605),
    I = r(102172),
    T = r(359110),
    S = r(769654),
    A = r(922482),
    C = r(592125),
    N = r(430824),
    R = r(496675),
    O = r(158776),
    D = r(699516),
    L = r(938475),
    x = r(626135),
    w = r(960870),
    P = r(139793),
    M = r(510659),
    k = r(287954),
    U = r(660579),
    B = r(652853),
    G = r(64621),
    Z = r(336383),
    F = r(194811),
    V = r(373826),
    j = r(315324),
    H = r(599864),
    Y = r(386019),
    W = r(228168),
    K = r(981631),
    z = r(388032),
    q = r(249942),
    Q = r(22481),
    X = r(924482),
    J = r(774797);
function $(e) {
    let { user: n, currentUser: r, stream: i, className: s, onClose: $, profileGuildId: ee } = e,
        { profileType: et, theme: en } = (0, B.z)(),
        { interactionSource: er, interactionSourceId: ei } = (0, M.Xo)(),
        ea = {
            [Q.fullSize]: et === W.y0.FULL_SIZE,
            [q.fullSize]: et === W.y0.FULL_SIZE
        },
        { enabled: eo, analyticsEligible: es } = (0, E.R4)('user-profile-stream-activity-card-web'),
        { analyticsLocations: el } = (0, g.ZP)(m.Z.USER_PROFILE_LIVE_ACTIVITY_CARD),
        eu = (0, w.Z)({
            display: 'live',
            user: n,
            stream: i,
            analyticsLocations: el
        }),
        ec = (0, P.Z)({
            userId: n.id,
            onAction: eu
        }),
        ed = (0, u.e7)([N.Z], () => N.Z.getGuild(null == i ? void 0 : i.guildId)),
        ef = (0, u.e7)([C.Z], () => C.Z.getChannel(null == i ? void 0 : i.channelId)),
        ep = (0, u.Wu)([L.ZP], () =>
            null != ef
                ? L.ZP.getVoiceStatesForChannel(ef).map((e) => {
                      let { user: n } = e;
                      return n;
                  })
                : []
        ),
        eh = (0, u.e7)([O.Z], () => O.Z.findActivity(n.id, (e) => (0, h.Z)(e) && !(0, _.Z)(e))),
        [e_, em] = (0, I.wq)(ef),
        { previewUrl: eg, isLoading: eE } = (0, b.Z)(i.guildId, i.channelId, i.ownerId),
        ev = (0, u.e7)([R.Z], () => null != ef && R.Z.canBasicChannel(K.S7T.CONNECT, ef)),
        ey = (0, u.e7)([D.Z], () => D.Z.getRelationshipType(n.id));
    o.useEffect(() => {
        if (es) {
            var e;
            x.default.track(K.rMx.USER_VOICE_ACTIVITY_VIEWED, {
                activity_user_id: n.id,
                discoverable: null === (e = i.discoverable) || void 0 === e || e,
                surface: 'user-profile-stream-activity-card',
                relationship_type: ey,
                treatment: eo && !1 === i.discoverable ? E.h9.HIDE : E.h9.SHOW
            });
        }
    }, [n, ey, eo, es, i]);
    let eb = (0, p.Z)(eE ? null : eg),
        eI = eE || null == eg ? eb : eg;
    if (null == ed || null == ef || (eo && !1 === i.discoverable) || null === et) return null;
    let eT = () => {
            let e = l()(Q.preview, ea),
                n = (e) => {
                    e.stopPropagation(), eu({ action: 'PRESS_IMAGE' }), d.default.selectVoiceChannel(i.channelId), (0, f.iV)(i), null == $ || $();
                };
            return null == eI && eE
                ? (0, a.jsx)('div', {
                      className: e,
                      children: (0, a.jsx)(c.Spinner, {})
                  })
                : null == eI
                  ? (0, a.jsxs)(c.Clickable, {
                        className: l()(e, Q.overlay, { [Q.clickable]: e_ }),
                        onClick: e_ ? n : void 0,
                        children: [
                            (0, a.jsx)('img', {
                                alt: '',
                                src: en === K.BRd.LIGHT ? J : X
                            }),
                            et !== W.y0.FULL_SIZE &&
                                (0, a.jsxs)(a.Fragment, {
                                    children: [
                                        (0, a.jsx)(c.Text, {
                                            className: Q.overlayText,
                                            variant: 'text-sm/medium',
                                            color: 'always-white',
                                            children: (0, I.P9)(em)
                                        }),
                                        (0, a.jsx)(c.Text, {
                                            variant: 'text-sm/medium',
                                            children: ev ? z.intl.string(z.t.uQZTBQ) : z.intl.string(z.t.pgUTZG)
                                        })
                                    ]
                                })
                        ]
                    })
                  : (0, a.jsxs)(c.Clickable, {
                        className: l()(e, Q.overlay, { [Q.clickable]: e_ }),
                        onClick: e_ ? n : void 0,
                        children: [
                            (0, a.jsx)('img', {
                                alt: '',
                                src: eI,
                                className: Q.image
                            }),
                            et !== W.y0.FULL_SIZE &&
                                (0, a.jsxs)(a.Fragment, {
                                    children: [
                                        (0, a.jsx)(c.Text, {
                                            className: Q.overlayText,
                                            variant: 'text-sm/medium',
                                            color: 'always-white',
                                            children: (0, I.P9)(em)
                                        }),
                                        (0, a.jsx)(c.ClydeIcon, {
                                            size: 'xs',
                                            color: 'currentColor',
                                            className: Q.clyde
                                        })
                                    ]
                                })
                        ]
                    });
        },
        eS = () => {
            if (et !== W.y0.FULL_SIZE) return null;
            let e = ef.isGuildStageVoice(),
                r = e ? c.StageIcon : c.VoiceNormalIcon,
                i = (n) => {
                    n.stopPropagation(), null == eu || eu({ action: 'OPEN_VOICE_CHANNEL' }), e ? (0, A.Cq)(ef) : (d.default.selectVoiceChannel(ef.id), (0, T.Kh)(ef.id)), null == $ || $();
                },
                o = (e) => {
                    e.stopPropagation(), eu({ action: 'OPEN_VOICE_GUILD' }), (0, S.X)(ed.id), null == $ || $();
                };
            return (0, a.jsxs)('div', {
                className: q.details,
                children: [
                    (0, a.jsxs)('div', {
                        children: [
                            (0, a.jsxs)(c.Heading, {
                                variant: 'heading-sm/semibold',
                                color: 'text-normal',
                                className: q.voiceChannelHeading,
                                children: [
                                    (0, a.jsx)(r, {
                                        size: 'xxs',
                                        color: c.tokens.colors.TEXT_NORMAL,
                                        className: q.voiceIcon
                                    }),
                                    (0, a.jsx)(c.Clickable, {
                                        className: l()(q.clickableText, q.inline),
                                        onClick: i,
                                        children: ef.name
                                    })
                                ]
                            }),
                            (0, a.jsx)(V.Z, {
                                variant: 'text-xs/normal',
                                text: z.intl.formatToPlainString(z.t['hq/Qzc'], { guildName: ed.name }),
                                onClick: o
                            })
                        ]
                    }),
                    (0, a.jsx)(y.Z, {
                        users: ep,
                        guildId: ed.id,
                        channelId: ef.id,
                        maxUsers: j.W,
                        size: c.AvatarSizes.SIZE_16,
                        onClick: (e) => {
                            null == e || e.stopPropagation(), null == eu || eu({ action: 'PRESS_VOICE_CHANNEL_AVATARS' });
                        },
                        disableUserPopout: (e) => e === n.id,
                        overflowCountVariant: 'text-xxs/semibold',
                        overflowCountColor: 'text-muted'
                    })
                ]
            });
        },
        eA = () =>
            et === W.y0.FULL_SIZE
                ? null
                : (0, a.jsx)(j.Z, {
                      user: n,
                      guild: ed,
                      channel: ef,
                      onAction: eu,
                      onClose: $
                  }),
        eC = () =>
            n.id === r.id
                ? null
                : (0, a.jsx)('div', {
                      className: l()(q.actions, ea),
                      children: (0, a.jsx)(H.Z, {
                          channel: ef,
                          onAction: eu,
                          onClose: $
                      })
                  }),
        eN = eg,
        eR = er === W.n_.ACTIVITY && ei === eN,
        eO = null != eh ? z.intl.formatToPlainString(z.t['4CQq9f'], { name: eh.name }) : z.intl.string(z.t['Jpkr/v']);
    return (0, a.jsx)(g.Gt, {
        value: el,
        children: (0, a.jsx)(G.Z, {
            sourceType: W.n_.ACTIVITY,
            user: n,
            children: (0, a.jsx)(k.Z, {
                user: n,
                guildId: ee,
                profileType: et,
                sourceId: eN,
                sourceDetails: eO,
                sourceType: W.n_.ACTIVITY,
                onAction: eu,
                children: () =>
                    (0, a.jsx)(U.Z, {
                        user: n,
                        className: q.toolbarContainer,
                        interactionSourceId: eN,
                        sourceType: W.n_.ACTIVITY,
                        onAction: eu,
                        onShowToolbar: () => eu({ action: 'HOVER_ACTIVITY_CARD' }),
                        renderMoreButtonPopout: (e) =>
                            (0, a.jsx)(Y.Z, {
                                display: 'live',
                                user: n,
                                onClose: $,
                                children: e
                            }),
                        children: (0, a.jsxs)(Z.Z, {
                            ref: ec,
                            className: l()(s, { [q.hoisted]: eR }),
                            onAction: eu,
                            onClose: $,
                            children: [
                                (0, a.jsx)(F.Z, {
                                    text: eO,
                                    tags: (0, a.jsx)(v.ZP, { size: v.OH.SMALL })
                                }),
                                (0, a.jsxs)('div', {
                                    className: q.body,
                                    children: [
                                        (0, a.jsxs)('div', {
                                            className: l()(q.content, ea),
                                            children: [eT(), eS(), et === W.y0.FULL_SIZE && eC()]
                                        }),
                                        eA()
                                    ]
                                }),
                                et !== W.y0.FULL_SIZE && eC()
                            ]
                        })
                    })
            })
        })
    });
}
