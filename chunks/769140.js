n.d(t, { Z: () => H }), n(388685);
var r = n(200651);
n(192379);
var i = n(120356),
    o = n.n(i),
    a = n(442837),
    s = n(481060),
    l = n(287734),
    c = n(872810),
    u = n(110924),
    d = n(833664),
    f = n(579630),
    _ = n(100527),
    p = n(906732),
    h = n(194082),
    m = n(318374),
    g = n(449605),
    E = n(102172),
    b = n(359110),
    y = n(769654),
    v = n(922482),
    O = n(592125),
    I = n(430824),
    S = n(496675),
    T = n(158776),
    N = n(938475),
    A = n(960870),
    C = n(139793),
    R = n(652853),
    P = n(336383),
    w = n(194811),
    D = n(373826),
    L = n(315324),
    x = n(788858),
    M = n(384298),
    k = n(670451),
    j = n(228168),
    U = n(981631),
    G = n(388032),
    B = n(227832),
    F = n(162509),
    V = n(924482),
    Z = n(774797);
function H(e) {
    let { user: t, currentUser: n, stream: i, className: H, onClose: W } = e,
        { profileType: Y, theme: K } = (0, R.z)(),
        z = {
            [F.fullSize]: Y === j.y0.FULL_SIZE,
            [B.fullSize]: Y === j.y0.FULL_SIZE
        },
        q = (0, a.e7)([I.Z], () => I.Z.getGuild(null == i ? void 0 : i.guildId)),
        Q = (0, a.e7)([O.Z], () => O.Z.getChannel(null == i ? void 0 : i.channelId)),
        X = (0, a.Wu)([N.ZP], () =>
            null != Q
                ? N.ZP.getVoiceStatesForChannel(Q).map((e) => {
                      let { user: t } = e;
                      return t;
                  })
                : []
        ),
        J = (0, a.e7)([T.Z], () => T.Z.findActivity(t.id, (e) => (0, d.Z)(e) && !(0, f.Z)(e))),
        { analyticsLocations: $ } = (0, p.ZP)(_.Z.USER_PROFILE_LIVE_ACTIVITY_CARD),
        ee = (0, A.Z)({
            display: 'live',
            voiceChannelId: null == Q ? void 0 : Q.id,
            user: t,
            stream: i,
            analyticsLocations: $
        }),
        et = (0, C.Z)({
            userId: t.id,
            onAction: ee
        }),
        { previewUrl: en, isLoading: er } = (0, g.Z)(null == i ? void 0 : i.guildId, null == i ? void 0 : i.channelId, null == i ? void 0 : i.ownerId),
        [ei, eo] = (0, E.wq)(Q),
        ea = (0, a.e7)([S.Z], () => null != Q && S.Z.canBasicChannel(U.S7T.CONNECT, Q)),
        es = (0, u.Z)(er ? null : en),
        el = er || null == en ? es : en;
    if (null == q || null == Q || !1 === i.discoverable) return null;
    let ec = () => {
            let e = o()(F.preview, z),
                t = (e) => {
                    e.stopPropagation(), ee({ action: 'PRESS_IMAGE' }), l.default.selectVoiceChannel(i.channelId), (0, c.iV)(i), null == W || W();
                };
            return null == el && er
                ? (0, r.jsx)('div', {
                      className: e,
                      children: (0, r.jsx)(s.$jN, {})
                  })
                : null == el
                  ? (0, r.jsxs)(s.P3F, {
                        className: o()(e, F.overlay, { [F.clickable]: ei }),
                        onClick: ei ? t : void 0,
                        children: [
                            (0, r.jsx)('img', {
                                alt: '',
                                src: K === U.BRd.LIGHT ? Z : V
                            }),
                            Y !== j.y0.FULL_SIZE &&
                                (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        (0, r.jsx)(s.Text, {
                                            className: F.overlayText,
                                            variant: 'text-sm/medium',
                                            color: 'always-white',
                                            children: (0, E.P9)(eo)
                                        }),
                                        (0, r.jsx)(s.Text, {
                                            variant: 'text-sm/medium',
                                            children: ea ? G.NW.string(G.t.uQZTBQ) : G.NW.string(G.t.pgUTZG)
                                        })
                                    ]
                                })
                        ]
                    })
                  : (0, r.jsxs)(s.P3F, {
                        className: o()(e, F.overlay, { [F.clickable]: ei }),
                        onClick: ei ? t : void 0,
                        children: [
                            (0, r.jsx)('img', {
                                alt: '',
                                src: el,
                                className: F.image
                            }),
                            Y !== j.y0.FULL_SIZE &&
                                (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        (0, r.jsx)(s.Text, {
                                            className: F.overlayText,
                                            variant: 'text-sm/medium',
                                            color: 'always-white',
                                            children: (0, E.P9)(eo)
                                        }),
                                        (0, r.jsx)(s.gw7, {
                                            size: 'xs',
                                            color: 'currentColor',
                                            className: F.clyde
                                        })
                                    ]
                                })
                        ]
                    });
        },
        eu = () => {
            if (Y !== j.y0.FULL_SIZE) return null;
            let e = (e) => {
                    e.stopPropagation(), null == ee || ee({ action: 'OPEN_VOICE_CHANNEL' }), Q.isGuildStageVoice() ? (0, v.Cq)(Q) : (l.default.selectVoiceChannel(Q.id), (0, b.Kh)(Q.id)), null == W || W();
                },
                n = (e) => {
                    e.stopPropagation(), ee({ action: 'OPEN_VOICE_GUILD' }), (0, y.X)(q.id), null == W || W();
                };
            return (0, r.jsxs)('div', {
                className: B.details,
                children: [
                    (0, r.jsxs)('div', {
                        children: [
                            (0, r.jsxs)(s.X6q, {
                                variant: 'heading-sm/semibold',
                                color: 'text-normal',
                                className: B.voiceChannelHeading,
                                children: [
                                    (0, r.jsx)(x.Z, {
                                        channel: Q,
                                        size: 'xxs',
                                        color: s.TVs.colors.TEXT_NORMAL,
                                        className: B.voiceIcon
                                    }),
                                    (0, r.jsx)(s.P3F, {
                                        className: o()(B.clickableText, B.inline),
                                        onClick: e,
                                        children: Q.name
                                    })
                                ]
                            }),
                            (0, r.jsx)(D.Z, {
                                variant: 'text-xs/normal',
                                text: G.NW.formatToPlainString(G.t['hq/Qzc'], { guildName: q.name }),
                                onClick: n
                            })
                        ]
                    }),
                    (0, r.jsx)(m.Z, {
                        users: X,
                        guildId: q.id,
                        channelId: Q.id,
                        maxUsers: L.W,
                        size: s.EFr.SIZE_16,
                        onClick: (e) => {
                            e.stopPropagation(), null == ee || ee({ action: 'PRESS_VOICE_CHANNEL_AVATARS' });
                        },
                        onUserClick: (e) => e.stopPropagation(),
                        disableUserPopout: (e) => e === t.id,
                        overflowCountColor: 'text-muted'
                    })
                ]
            });
        },
        ed = () =>
            Y === j.y0.FULL_SIZE
                ? null
                : (0, r.jsx)(L.Z, {
                      user: t,
                      guild: q,
                      channel: Q,
                      onAction: ee,
                      onClose: W
                  }),
        ef = () =>
            t.id === n.id
                ? null
                : (0, r.jsx)('div', {
                      className: o()(B.actions, z),
                      children: (0, r.jsx)(M.Z, {
                          channel: Q,
                          onAction: ee,
                          onClose: W
                      })
                  });
    return (0, r.jsx)(p.Gt, {
        value: $,
        children: (0, r.jsxs)(P.Z, {
            ref: et,
            className: H,
            onAction: ee,
            onClose: W,
            children: [
                (0, r.jsx)(w.Z, {
                    text: null != J ? G.NW.formatToPlainString(G.t['4CQq9f'], { name: J.name }) : G.NW.string(G.t['Jpkr/v']),
                    tags: (0, r.jsx)(h.ZP, { size: h.OH.SMALL }),
                    contextMenu: (0, r.jsx)(k.Z, {
                        display: 'live',
                        user: t,
                        onClose: W
                    })
                }),
                (0, r.jsxs)('div', {
                    className: B.body,
                    children: [
                        (0, r.jsxs)('div', {
                            className: o()(B.content, z),
                            children: [ec(), eu(), Y === j.y0.FULL_SIZE && ef()]
                        }),
                        ed()
                    ]
                }),
                Y !== j.y0.FULL_SIZE && ef()
            ]
        })
    });
}
