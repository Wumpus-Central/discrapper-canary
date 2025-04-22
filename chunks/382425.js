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
    V = n(386019),
    F = n(228168),
    Z = n(981631),
    H = n(388032),
    Y = n(227832),
    W = n(162509),
    K = n(924482),
    z = n(774797);
function q(e) {
    let { user: t, currentUser: n, stream: a, className: q, onClose: Q, profileGuildId: X } = e,
        J = i.useRef(null),
        { themeType: $, theme: ee } = (0, L.z)(),
        { interactionSource: et, interactionSourceId: en } = (0, P.Xo)(),
        er = (0, s.e7)([S.Z], () => S.Z.getGuild(null == a ? void 0 : a.guildId)),
        ei = (0, s.e7)([I.Z], () => I.Z.getChannel(null == a ? void 0 : a.channelId)),
        ea = (0, s.Wu)([N.ZP], () =>
            null != ei
                ? N.ZP.getVoiceStatesForChannel(ei).map((e) => {
                      let { user: t } = e;
                      return t;
                  })
                : []
        ),
        eo = (0, s.e7)([A.Z], () => A.Z.findActivity(t.id, (e) => (0, f.Z)(e) && !(0, _.Z)(e))),
        { analyticsLocations: es } = (0, h.ZP)(p.Z.USER_PROFILE_LIVE_ACTIVITY_CARD),
        el = (0, C.Z)({
            display: 'live',
            voiceChannelId: null == ei ? void 0 : ei.id,
            user: t,
            stream: a,
            analyticsLocations: es
        }),
        ec = (0, R.Z)({
            userId: t.id,
            onAction: el
        }),
        [eu, ed] = (0, b.wq)(ei),
        { previewUrl: ef, isLoading: e_ } = (0, E.Z)(a.guildId, a.channelId, a.ownerId),
        ep = (0, s.e7)([T.Z], () => null != ei && T.Z.canBasicChannel(Z.S7T.CONNECT, ei)),
        eh = (0, d.Z)(e_ ? null : ef),
        em = e_ || null == ef ? eh : ef;
    if (null == er || null == ei || !1 === a.discoverable || null === $) return null;
    let eg = () => {
            let e = (e) => {
                e.stopPropagation(), el({ action: 'PRESS_IMAGE' }), c.default.selectVoiceChannel(a.channelId), (0, u.iV)(a), null == Q || Q();
            };
            return null == em && e_
                ? (0, r.jsx)('div', {
                      className: W.preview,
                      children: (0, r.jsx)(l.$jN, {})
                  })
                : null == em
                  ? (0, r.jsxs)(l.P3F, {
                        className: o()(W.preview, W.overlay, { [W.clickable]: eu }),
                        onClick: eu ? e : void 0,
                        children: [
                            (0, r.jsx)('img', {
                                alt: '',
                                src: ee === Z.BRd.LIGHT ? z : K
                            }),
                            $ !== F.lY.MODAL &&
                                (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        (0, r.jsx)(l.Text, {
                                            className: W.overlayText,
                                            variant: 'text-sm/medium',
                                            color: 'always-white',
                                            children: (0, b.P9)(ed)
                                        }),
                                        (0, r.jsx)(l.Text, {
                                            variant: 'text-sm/medium',
                                            children: ep ? H.intl.string(H.t.uQZTBQ) : H.intl.string(H.t.pgUTZG)
                                        })
                                    ]
                                })
                        ]
                    })
                  : (0, r.jsxs)(l.P3F, {
                        className: o()(W.preview, W.overlay, { [W.clickable]: eu }),
                        onClick: eu ? e : void 0,
                        children: [
                            (0, r.jsx)('img', {
                                alt: '',
                                src: em,
                                className: W.image
                            }),
                            $ !== F.lY.MODAL &&
                                (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        (0, r.jsx)(l.Text, {
                                            className: W.overlayText,
                                            variant: 'text-sm/medium',
                                            color: 'always-white',
                                            children: (0, b.P9)(ed)
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
        eE = () => {
            if ($ !== F.lY.MODAL) return null;
            let e = (e) => {
                    e.stopPropagation(), null == el || el({ action: 'OPEN_VOICE_CHANNEL' }), ei.isGuildStageVoice() ? (0, O.Cq)(ei) : (c.default.selectVoiceChannel(ei.id), (0, y.Kh)(ei.id)), null == Q || Q();
                },
                n = (e) => {
                    e.stopPropagation(), el({ action: 'OPEN_VOICE_GUILD' }), (0, v.X)(er.id), null == Q || Q();
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
                                        channel: ei,
                                        size: 'xxs',
                                        color: l.TVs.colors.TEXT_NORMAL,
                                        className: Y.voiceIcon
                                    }),
                                    (0, r.jsx)(l.P3F, {
                                        className: o()(Y.clickableText, Y.inline),
                                        onClick: e,
                                        children: ei.name
                                    })
                                ]
                            }),
                            (0, r.jsx)(j.Z, {
                                variant: 'text-xs/normal',
                                text: H.intl.formatToPlainString(H.t['hq/Qzc'], { guildName: er.name }),
                                onClick: n
                            })
                        ]
                    }),
                    (0, r.jsx)(g.Z, {
                        users: ea,
                        guildId: er.id,
                        channelId: ei.id,
                        maxUsers: U.W,
                        size: l.EFr.SIZE_16,
                        onClick: (e) => {
                            null == e || e.stopPropagation(), null == el || el({ action: 'PRESS_VOICE_CHANNEL_AVATARS' });
                        },
                        onUserClick: (e) => e.stopPropagation(),
                        disableUserPopout: (e) => e === t.id,
                        overflowCountColor: 'text-muted'
                    })
                ]
            });
        },
        eb = () =>
            $ === F.lY.MODAL
                ? null
                : (0, r.jsx)(U.Z, {
                      user: t,
                      guild: er,
                      channel: ei,
                      onAction: el,
                      onClose: Q
                  }),
        ey = () =>
            t.id === n.id
                ? null
                : (0, r.jsx)('div', {
                      className: Y.actions,
                      children: (0, r.jsx)(B.Z, {
                          channel: ei,
                          onAction: el,
                          onClose: Q
                      })
                  }),
        ev = ef,
        eO = et === F.n_.ACTIVITY && en === ev,
        eI = null != eo ? H.intl.formatToPlainString(H.t['4CQq9f'], { name: eo.name }) : H.intl.string(H.t['Jpkr/v']);
    return (0, r.jsx)(h.Gt, {
        value: es,
        children: (0, r.jsx)(x.Z, {
            targetElementRef: J,
            sourceType: F.n_.ACTIVITY,
            user: t,
            children: (0, r.jsx)(w.Z, {
                user: t,
                guildId: X,
                themeType: $,
                sourceId: ev,
                sourceDetails: eI,
                sourceType: F.n_.ACTIVITY,
                onAction: el,
                children: () =>
                    (0, r.jsx)(D.Z, {
                        ref: J,
                        user: t,
                        className: Y.toolbarContainer,
                        interactionSourceId: ev,
                        sourceType: F.n_.ACTIVITY,
                        onAction: el,
                        onShowToolbar: () => el({ action: 'HOVER_ACTIVITY_CARD' }),
                        renderMoreButtonPopout: (e) =>
                            (0, r.jsx)(V.Z, {
                                display: 'live',
                                user: t,
                                onClose: Q,
                                children: e
                            }),
                        children: (0, r.jsxs)(M.Z, {
                            ref: ec,
                            className: o()(q, { [Y.hoisted]: eO }),
                            onAction: el,
                            onClose: Q,
                            children: [
                                (0, r.jsx)(k.Z, {
                                    text: eI,
                                    tags: (0, r.jsx)(m.ZP, { size: m.OH.SMALL })
                                }),
                                (0, r.jsxs)('div', {
                                    className: Y.body,
                                    children: [
                                        (0, r.jsxs)('div', {
                                            className: Y.content,
                                            children: [eg(), eE(), $ === F.lY.MODAL && ey()]
                                        }),
                                        eb()
                                    ]
                                }),
                                $ !== F.lY.MODAL && ey()
                            ]
                        })
                    })
            })
        })
    });
}
