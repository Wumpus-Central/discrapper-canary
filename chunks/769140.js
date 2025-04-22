n.d(t, { Z: () => H }), n(388685);
var r = n(200651);
n(192379);
var i = n(120356),
    a = n.n(i),
    o = n(442837),
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
    A = n(938475),
    N = n(960870),
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
    V = n(162509),
    F = n(924482),
    Z = n(774797);
function H(e) {
    let { user: t, currentUser: n, stream: i, className: H, onClose: Y } = e,
        { themeType: W, theme: K } = (0, R.z)(),
        z = (0, o.e7)([I.Z], () => I.Z.getGuild(null == i ? void 0 : i.guildId)),
        q = (0, o.e7)([O.Z], () => O.Z.getChannel(null == i ? void 0 : i.channelId)),
        Q = (0, o.Wu)([A.ZP], () =>
            null != q
                ? A.ZP.getVoiceStatesForChannel(q).map((e) => {
                      let { user: t } = e;
                      return t;
                  })
                : []
        ),
        X = (0, o.e7)([T.Z], () => T.Z.findActivity(t.id, (e) => (0, d.Z)(e) && !(0, f.Z)(e))),
        { analyticsLocations: J } = (0, p.ZP)(_.Z.USER_PROFILE_LIVE_ACTIVITY_CARD),
        $ = (0, N.Z)({
            display: 'live',
            voiceChannelId: null == q ? void 0 : q.id,
            user: t,
            stream: i,
            analyticsLocations: J
        }),
        ee = (0, C.Z)({
            userId: t.id,
            onAction: $
        }),
        { previewUrl: et, isLoading: en } = (0, g.Z)(null == i ? void 0 : i.guildId, null == i ? void 0 : i.channelId, null == i ? void 0 : i.ownerId),
        [er, ei] = (0, E.wq)(q),
        ea = (0, o.e7)([S.Z], () => null != q && S.Z.canBasicChannel(U.S7T.CONNECT, q)),
        eo = (0, u.Z)(en ? null : et),
        es = en || null == et ? eo : et;
    if (null == z || null == q || !1 === i.discoverable) return null;
    let el = () => {
            let e = (e) => {
                e.stopPropagation(), $({ action: 'PRESS_IMAGE' }), l.default.selectVoiceChannel(i.channelId), (0, c.iV)(i), null == Y || Y();
            };
            return null == es && en
                ? (0, r.jsx)('div', {
                      className: V.preview,
                      children: (0, r.jsx)(s.$jN, {})
                  })
                : null == es
                  ? (0, r.jsxs)(s.P3F, {
                        className: a()(V.preview, V.overlay, { [V.clickable]: er }),
                        onClick: er ? e : void 0,
                        children: [
                            (0, r.jsx)('img', {
                                alt: '',
                                src: K === U.BRd.LIGHT ? Z : F
                            }),
                            W !== j.lY.MODAL &&
                                (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        (0, r.jsx)(s.Text, {
                                            className: V.overlayText,
                                            variant: 'text-sm/medium',
                                            color: 'always-white',
                                            children: (0, E.P9)(ei)
                                        }),
                                        (0, r.jsx)(s.Text, {
                                            variant: 'text-sm/medium',
                                            children: ea ? G.intl.string(G.t.uQZTBQ) : G.intl.string(G.t.pgUTZG)
                                        })
                                    ]
                                })
                        ]
                    })
                  : (0, r.jsxs)(s.P3F, {
                        className: a()(V.preview, V.overlay, { [V.clickable]: er }),
                        onClick: er ? e : void 0,
                        children: [
                            (0, r.jsx)('img', {
                                alt: '',
                                src: es,
                                className: V.image
                            }),
                            W !== j.lY.MODAL &&
                                (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        (0, r.jsx)(s.Text, {
                                            className: V.overlayText,
                                            variant: 'text-sm/medium',
                                            color: 'always-white',
                                            children: (0, E.P9)(ei)
                                        }),
                                        (0, r.jsx)(s.gw7, {
                                            size: 'xs',
                                            color: 'currentColor',
                                            className: V.clyde
                                        })
                                    ]
                                })
                        ]
                    });
        },
        ec = () => {
            if (W !== j.lY.MODAL) return null;
            let e = (e) => {
                    e.stopPropagation(), null == $ || $({ action: 'OPEN_VOICE_CHANNEL' }), q.isGuildStageVoice() ? (0, v.Cq)(q) : (l.default.selectVoiceChannel(q.id), (0, b.Kh)(q.id)), null == Y || Y();
                },
                n = (e) => {
                    e.stopPropagation(), $({ action: 'OPEN_VOICE_GUILD' }), (0, y.X)(z.id), null == Y || Y();
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
                                        channel: q,
                                        size: 'xxs',
                                        color: s.TVs.colors.TEXT_NORMAL,
                                        className: B.voiceIcon
                                    }),
                                    (0, r.jsx)(s.P3F, {
                                        className: a()(B.clickableText, B.inline),
                                        onClick: e,
                                        children: q.name
                                    })
                                ]
                            }),
                            (0, r.jsx)(D.Z, {
                                variant: 'text-xs/normal',
                                text: G.intl.formatToPlainString(G.t['hq/Qzc'], { guildName: z.name }),
                                onClick: n
                            })
                        ]
                    }),
                    (0, r.jsx)(m.Z, {
                        users: Q,
                        guildId: z.id,
                        channelId: q.id,
                        maxUsers: L.W,
                        size: s.EFr.SIZE_16,
                        onClick: (e) => {
                            e.stopPropagation(), null == $ || $({ action: 'PRESS_VOICE_CHANNEL_AVATARS' });
                        },
                        onUserClick: (e) => e.stopPropagation(),
                        disableUserPopout: (e) => e === t.id,
                        overflowCountColor: 'text-muted'
                    })
                ]
            });
        },
        eu = () =>
            W === j.lY.MODAL
                ? null
                : (0, r.jsx)(L.Z, {
                      user: t,
                      guild: z,
                      channel: q,
                      onAction: $,
                      onClose: Y
                  }),
        ed = () =>
            t.id === n.id
                ? null
                : (0, r.jsx)('div', {
                      className: B.actions,
                      children: (0, r.jsx)(M.Z, {
                          channel: q,
                          onAction: $,
                          onClose: Y
                      })
                  });
    return (0, r.jsx)(p.Gt, {
        value: J,
        children: (0, r.jsxs)(P.Z, {
            ref: ee,
            className: H,
            onAction: $,
            onClose: Y,
            children: [
                (0, r.jsx)(w.Z, {
                    text: null != X ? G.intl.formatToPlainString(G.t['4CQq9f'], { name: X.name }) : G.intl.string(G.t['Jpkr/v']),
                    tags: (0, r.jsx)(h.ZP, { size: h.OH.SMALL }),
                    contextMenu: (0, r.jsx)(k.Z, {
                        display: 'live',
                        user: t,
                        onClose: Y
                    })
                }),
                (0, r.jsxs)('div', {
                    className: B.body,
                    children: [
                        (0, r.jsxs)('div', {
                            className: B.content,
                            children: [el(), ec(), W === j.lY.MODAL && ed()]
                        }),
                        eu()
                    ]
                }),
                W !== j.lY.MODAL && ed()
            ]
        })
    });
}
