n.d(t, { Z: () => q }), n(388685);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    o = n.n(a),
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
    A = n(158776),
    N = n(938475),
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
    Y = n(227832),
    W = n(162509),
    K = n(924482),
    z = n(774797);
function q(e) {
    let { user: t, currentUser: n, stream: a, className: q, onClose: Q, profileGuildId: X } = e,
        J = i.useRef(null),
        { profileType: $, theme: ee } = (0, L.z)(),
        { interactionSource: et, interactionSourceId: en } = (0, P.Xo)(),
        er = {
            [W.fullSize]: $ === V.y0.FULL_SIZE,
            [Y.fullSize]: $ === V.y0.FULL_SIZE
        },
        ei = (0, s.e7)([S.Z], () => S.Z.getGuild(null == a ? void 0 : a.guildId)),
        ea = (0, s.e7)([I.Z], () => I.Z.getChannel(null == a ? void 0 : a.channelId)),
        eo = (0, s.Wu)([N.ZP], () =>
            null != ea
                ? N.ZP.getVoiceStatesForChannel(ea).map((e) => {
                      let { user: t } = e;
                      return t;
                  })
                : []
        ),
        es = (0, s.e7)([A.Z], () => A.Z.findActivity(t.id, (e) => (0, f.Z)(e) && !(0, _.Z)(e))),
        { analyticsLocations: el } = (0, h.ZP)(p.Z.USER_PROFILE_LIVE_ACTIVITY_CARD),
        ec = (0, C.Z)({
            display: 'live',
            voiceChannelId: null == ea ? void 0 : ea.id,
            user: t,
            stream: a,
            analyticsLocations: el
        }),
        eu = (0, R.Z)({
            userId: t.id,
            onAction: ec
        }),
        [ed, ef] = (0, b.wq)(ea),
        { previewUrl: e_, isLoading: ep } = (0, E.Z)(a.guildId, a.channelId, a.ownerId),
        eh = (0, s.e7)([T.Z], () => null != ea && T.Z.canBasicChannel(Z.S7T.CONNECT, ea)),
        em = (0, d.Z)(ep ? null : e_),
        eg = ep || null == e_ ? em : e_;
    if (null == ei || null == ea || !1 === a.discoverable || null === $) return null;
    let eE = () => {
            let e = o()(W.preview, er),
                t = (e) => {
                    e.stopPropagation(), ec({ action: 'PRESS_IMAGE' }), c.default.selectVoiceChannel(a.channelId), (0, u.iV)(a), null == Q || Q();
                };
            return null == eg && ep
                ? (0, r.jsx)('div', {
                      className: e,
                      children: (0, r.jsx)(l.$jN, {})
                  })
                : null == eg
                  ? (0, r.jsxs)(l.P3F, {
                        className: o()(e, W.overlay, { [W.clickable]: ed }),
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
                                            className: W.overlayText,
                                            variant: 'text-sm/medium',
                                            color: 'always-white',
                                            children: (0, b.P9)(ef)
                                        }),
                                        (0, r.jsx)(l.Text, {
                                            variant: 'text-sm/medium',
                                            children: eh ? H.intl.string(H.t.uQZTBQ) : H.intl.string(H.t.pgUTZG)
                                        })
                                    ]
                                })
                        ]
                    })
                  : (0, r.jsxs)(l.P3F, {
                        className: o()(e, W.overlay, { [W.clickable]: ed }),
                        onClick: ed ? t : void 0,
                        children: [
                            (0, r.jsx)('img', {
                                alt: '',
                                src: eg,
                                className: W.image
                            }),
                            $ !== V.y0.FULL_SIZE &&
                                (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        (0, r.jsx)(l.Text, {
                                            className: W.overlayText,
                                            variant: 'text-sm/medium',
                                            color: 'always-white',
                                            children: (0, b.P9)(ef)
                                        }),
                                        (0, r.jsx)(l.gw7, {
                                            size: 'xs',
                                            color: 'currentColor',
                                            className: W.clyde
                                        })
                                    ]
                                })
                        ]
                    });
        },
        eb = () => {
            if ($ !== V.y0.FULL_SIZE) return null;
            let e = (e) => {
                    e.stopPropagation(), null == ec || ec({ action: 'OPEN_VOICE_CHANNEL' }), ea.isGuildStageVoice() ? (0, O.Cq)(ea) : (c.default.selectVoiceChannel(ea.id), (0, y.Kh)(ea.id)), null == Q || Q();
                },
                n = (e) => {
                    e.stopPropagation(), ec({ action: 'OPEN_VOICE_GUILD' }), (0, v.X)(ei.id), null == Q || Q();
                };
            return (0, r.jsxs)('div', {
                className: Y.details,
                children: [
                    (0, r.jsxs)('div', {
                        children: [
                            (0, r.jsxs)(l.X6q, {
                                variant: 'heading-sm/semibold',
                                color: 'text-normal',
                                className: Y.voiceChannelHeading,
                                children: [
                                    (0, r.jsx)(G.Z, {
                                        channel: ea,
                                        size: 'xxs',
                                        color: l.TVs.colors.TEXT_NORMAL,
                                        className: Y.voiceIcon
                                    }),
                                    (0, r.jsx)(l.P3F, {
                                        className: o()(Y.clickableText, Y.inline),
                                        onClick: e,
                                        children: ea.name
                                    })
                                ]
                            }),
                            (0, r.jsx)(j.Z, {
                                variant: 'text-xs/normal',
                                text: H.intl.formatToPlainString(H.t['hq/Qzc'], { guildName: ei.name }),
                                onClick: n
                            })
                        ]
                    }),
                    (0, r.jsx)(g.Z, {
                        users: eo,
                        guildId: ei.id,
                        channelId: ea.id,
                        maxUsers: U.W,
                        size: l.EFr.SIZE_16,
                        onClick: (e) => {
                            null == e || e.stopPropagation(), null == ec || ec({ action: 'PRESS_VOICE_CHANNEL_AVATARS' });
                        },
                        onUserClick: (e) => e.stopPropagation(),
                        disableUserPopout: (e) => e === t.id,
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
                      channel: ea,
                      onAction: ec,
                      onClose: Q
                  }),
        ev = () =>
            t.id === n.id
                ? null
                : (0, r.jsx)('div', {
                      className: o()(Y.actions, er),
                      children: (0, r.jsx)(B.Z, {
                          channel: ea,
                          onAction: ec,
                          onClose: Q
                      })
                  }),
        eO = e_,
        eI = et === V.n_.ACTIVITY && en === eO,
        eS = null != es ? H.intl.formatToPlainString(H.t['4CQq9f'], { name: es.name }) : H.intl.string(H.t['Jpkr/v']);
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
                        className: Y.toolbarContainer,
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
                            className: o()(q, { [Y.hoisted]: eI }),
                            onAction: ec,
                            onClose: Q,
                            children: [
                                (0, r.jsx)(k.Z, {
                                    text: eS,
                                    tags: (0, r.jsx)(m.ZP, { size: m.OH.SMALL })
                                }),
                                (0, r.jsxs)('div', {
                                    className: Y.body,
                                    children: [
                                        (0, r.jsxs)('div', {
                                            className: o()(Y.content, er),
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
