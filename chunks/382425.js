n.d(t, { Z: () => q }), n(388685);
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
    m = n(194082),
    g = n(318374),
    E = n(449605),
    b = n(102172),
    y = n(359110),
    v = n(769654),
    O = n(922482),
    I = n(592125),
    S = n(430824),
    T = n(496675),
    N = n(158776),
    A = n(938475),
    C = n(960870),
    R = n(139793),
    P = n(510659),
    w = n(287954),
    D = n(660579),
    L = n(652853),
    x = n(64621),
    M = n(336383),
    k = n(194811),
    j = n(373826),
    U = n(315324),
    G = n(788858),
    B = n(384298),
    F = n(386019),
    V = n(228168),
    Z = n(981631),
    H = n(388032),
    W = n(227832),
    Y = n(162509),
    K = n(924482),
    z = n(774797);
function q(e) {
    let { user: t, currentUser: n, stream: o, className: q, onClose: Q, profileGuildId: X } = e,
        J = i.useRef(null),
        { profileType: $, theme: ee } = (0, L.z)(),
        { interactionSource: et, interactionSourceId: en } = (0, P.Xo)(),
        er = {
            [Y.fullSize]: $ === V.y0.FULL_SIZE,
            [W.fullSize]: $ === V.y0.FULL_SIZE
        },
        ei = (0, s.e7)([S.Z], () => S.Z.getGuild(null == o ? void 0 : o.guildId)),
        eo = (0, s.e7)([I.Z], () => I.Z.getChannel(null == o ? void 0 : o.channelId)),
        ea = (0, s.Wu)([A.ZP], () =>
            null != eo
                ? A.ZP.getVoiceStatesForChannel(eo).map((e) => {
                      let { user: t } = e;
                      return t;
                  })
                : []
        ),
        es = (0, s.e7)([N.Z], () => N.Z.findActivity(t.id, (e) => (0, f.Z)(e) && !(0, _.Z)(e))),
        { analyticsLocations: el } = (0, h.ZP)(p.Z.USER_PROFILE_LIVE_ACTIVITY_CARD),
        ec = (0, C.Z)({
            display: 'live',
            voiceChannelId: null == eo ? void 0 : eo.id,
            user: t,
            stream: o,
            analyticsLocations: el
        }),
        eu = (0, R.Z)({
            userId: t.id,
            onAction: ec
        }),
        [ed, ef] = (0, b.wq)(eo),
        { previewUrl: e_, isLoading: ep } = (0, E.Z)(o.guildId, o.channelId, o.ownerId),
        eh = (0, s.e7)([T.Z], () => null != eo && T.Z.canBasicChannel(Z.S7T.CONNECT, eo)),
        em = (0, d.Z)(ep ? null : e_),
        eg = ep || null == e_ ? em : e_;
    if (null == ei || null == eo || !1 === o.discoverable || null === $) return null;
    let eE = () => {
            let e = a()(Y.preview, er),
                t = (e) => {
                    e.stopPropagation(), ec({ action: 'PRESS_IMAGE' }), c.default.selectVoiceChannel(o.channelId), (0, u.iV)(o), null == Q || Q();
                };
            return null == eg && ep
                ? (0, r.jsx)('div', {
                      className: e,
                      children: (0, r.jsx)(l.$jN, {})
                  })
                : null == eg
                  ? (0, r.jsxs)(l.P3F, {
                        className: a()(e, Y.overlay, { [Y.clickable]: ed }),
                        onClick: ed ? t : void 0,
                        children: [
                            (0, r.jsx)('img', {
                                alt: '',
                                src: ee === Z.BRd.LIGHT ? z : K
                            }),
                            $ !== V.y0.FULL_SIZE &&
                                (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        (0, r.jsx)(l.Text, {
                                            className: Y.overlayText,
                                            variant: 'text-sm/medium',
                                            color: 'always-white',
                                            children: (0, b.P9)(ef)
                                        }),
                                        (0, r.jsx)(l.Text, {
                                            variant: 'text-sm/medium',
                                            children: eh ? H.NW.string(H.t.uQZTBQ) : H.NW.string(H.t.pgUTZG)
                                        })
                                    ]
                                })
                        ]
                    })
                  : (0, r.jsxs)(l.P3F, {
                        className: a()(e, Y.overlay, { [Y.clickable]: ed }),
                        onClick: ed ? t : void 0,
                        children: [
                            (0, r.jsx)('img', {
                                alt: '',
                                src: eg,
                                className: Y.image
                            }),
                            $ !== V.y0.FULL_SIZE &&
                                (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        (0, r.jsx)(l.Text, {
                                            className: Y.overlayText,
                                            variant: 'text-sm/medium',
                                            color: 'always-white',
                                            children: (0, b.P9)(ef)
                                        }),
                                        (0, r.jsx)(l.gw7, {
                                            size: 'xs',
                                            color: 'currentColor',
                                            className: Y.clyde
                                        })
                                    ]
                                })
                        ]
                    });
        },
        eb = () => {
            if ($ !== V.y0.FULL_SIZE) return null;
            let e = (e) => {
                    e.stopPropagation(), null == ec || ec({ action: 'OPEN_VOICE_CHANNEL' }), eo.isGuildStageVoice() ? (0, O.Cq)(eo) : (c.default.selectVoiceChannel(eo.id), (0, y.Kh)(eo.id)), null == Q || Q();
                },
                n = (e) => {
                    e.stopPropagation(), ec({ action: 'OPEN_VOICE_GUILD' }), (0, v.X)(ei.id), null == Q || Q();
                };
            return (0, r.jsxs)('div', {
                className: W.details,
                children: [
                    (0, r.jsxs)('div', {
                        children: [
                            (0, r.jsxs)(l.X6q, {
                                variant: 'heading-sm/semibold',
                                color: 'text-normal',
                                className: W.voiceChannelHeading,
                                children: [
                                    (0, r.jsx)(G.Z, {
                                        channel: eo,
                                        size: 'xxs',
                                        color: l.TVs.colors.TEXT_NORMAL,
                                        className: W.voiceIcon
                                    }),
                                    (0, r.jsx)(l.P3F, {
                                        className: a()(W.clickableText, W.inline),
                                        onClick: e,
                                        children: eo.name
                                    })
                                ]
                            }),
                            (0, r.jsx)(j.Z, {
                                variant: 'text-xs/normal',
                                text: H.NW.formatToPlainString(H.t['hq/Qzc'], { guildName: ei.name }),
                                onClick: n
                            })
                        ]
                    }),
                    (0, r.jsx)(g.Z, {
                        users: ea,
                        guildId: ei.id,
                        channelId: eo.id,
                        maxUsers: U.W,
                        size: l.EFr.SIZE_16,
                        onClick: (e) => {
                            null == e || e.stopPropagation(), null == ec || ec({ action: 'PRESS_VOICE_CHANNEL_AVATARS' });
                        },
                        onUserClick: (e) => e.stopPropagation(),
                        disableUserPopout: (e) => e === t.id,
                        overflowCountVariant: 'text-xxs/semibold',
                        overflowCountColor: 'text-muted'
                    })
                ]
            });
        },
        ey = () =>
            $ === V.y0.FULL_SIZE
                ? null
                : (0, r.jsx)(U.Z, {
                      user: t,
                      guild: ei,
                      channel: eo,
                      onAction: ec,
                      onClose: Q
                  }),
        ev = () =>
            t.id === n.id
                ? null
                : (0, r.jsx)('div', {
                      className: a()(W.actions, er),
                      children: (0, r.jsx)(B.Z, {
                          channel: eo,
                          onAction: ec,
                          onClose: Q
                      })
                  }),
        eO = e_,
        eI = et === V.n_.ACTIVITY && en === eO,
        eS = null != es ? H.NW.formatToPlainString(H.t['4CQq9f'], { name: es.name }) : H.NW.string(H.t['Jpkr/v']);
    return (0, r.jsx)(h.Gt, {
        value: el,
        children: (0, r.jsx)(x.Z, {
            targetElementRef: J,
            sourceType: V.n_.ACTIVITY,
            user: t,
            children: (0, r.jsx)(w.Z, {
                user: t,
                guildId: X,
                profileType: $,
                sourceId: eO,
                sourceDetails: eS,
                sourceType: V.n_.ACTIVITY,
                onAction: ec,
                children: () =>
                    (0, r.jsx)(D.Z, {
                        ref: J,
                        user: t,
                        className: W.toolbarContainer,
                        interactionSourceId: eO,
                        sourceType: V.n_.ACTIVITY,
                        onAction: ec,
                        onShowToolbar: () => ec({ action: 'HOVER_ACTIVITY_CARD' }),
                        renderMoreButtonPopout: (e) =>
                            (0, r.jsx)(F.Z, {
                                display: 'live',
                                user: t,
                                onClose: Q,
                                children: e
                            }),
                        children: (0, r.jsxs)(M.Z, {
                            ref: eu,
                            className: a()(q, { [W.hoisted]: eI }),
                            onAction: ec,
                            onClose: Q,
                            children: [
                                (0, r.jsx)(k.Z, {
                                    text: eS,
                                    tags: (0, r.jsx)(m.ZP, { size: m.OH.SMALL })
                                }),
                                (0, r.jsxs)('div', {
                                    className: W.body,
                                    children: [
                                        (0, r.jsxs)('div', {
                                            className: a()(W.content, er),
                                            children: [eE(), eb(), $ === V.y0.FULL_SIZE && ev()]
                                        }),
                                        ey()
                                    ]
                                }),
                                $ !== V.y0.FULL_SIZE && ev()
                            ]
                        })
                    })
            })
        })
    });
}
