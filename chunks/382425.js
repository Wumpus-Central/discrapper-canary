(n.d(t, { Z: () => W }), n(388685));
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(481060),
    c = n(287734),
    u = n(872810),
    d = n(110924),
    f = n(833664),
    _ = n(579630),
    p = n(622822),
    h = n(100527),
    m = n(906732),
    g = n(194082),
    E = n(318374),
    b = n(449605),
    y = n(102172),
    O = n(592125),
    v = n(430824),
    I = n(496675),
    T = n(158776),
    S = n(938475),
    A = n(960870),
    N = n(139793),
    C = n(510659),
    R = n(287954),
    P = n(660579),
    w = n(652853),
    D = n(64621),
    L = n(336383),
    x = n(194811),
    k = n(265386),
    M = n(668700),
    j = n(384298),
    U = n(386019),
    G = n(228168),
    B = n(981631),
    V = n(388032),
    F = n(227832),
    Z = n(162509),
    H = n(924482),
    Y = n(774797);
function W(e) {
    let { user: t, currentUser: n, stream: a, className: W, onClose: K, profileGuildId: z } = e,
        q = i.useRef(null),
        { themeType: X, theme: Q } = (0, w.z)(),
        { interactionSource: J, interactionSourceId: $ } = (0, C.Xo)(),
        ee = (0, s.e7)([v.Z], () => v.Z.getGuild(null == a ? void 0 : a.guildId)),
        et = (0, s.e7)([O.Z], () => O.Z.getChannel(null == a ? void 0 : a.channelId)),
        en = (0, s.Wu)([S.ZP], () =>
            null != et
                ? S.ZP.getVoiceStatesForChannel(et).map((e) => {
                      let { user: t } = e;
                      return t;
                  })
                : []
        ),
        er = (0, s.e7)([T.Z], () => T.Z.findActivity(t.id, (e) => (0, f.Z)(e) && !(0, _.Z)(e))),
        { analyticsLocations: ei } = (0, m.ZP)(h.Z.USER_PROFILE_LIVE_ACTIVITY_CARD),
        ea = (0, A.Z)({
            display: 'live',
            voiceChannelId: null == et ? void 0 : et.id,
            user: t,
            stream: a,
            analyticsLocations: ei
        }),
        eo = (0, N.Z)({
            userId: t.id,
            onAction: ea
        }),
        [es, el] = (0, y.wq)(et),
        ec = (0, p.Kt)() && (0, p.zd)(null == et ? void 0 : et.id),
        { previewUrl: eu, isLoading: ed } = (0, b.Z)(a.guildId, a.channelId, a.ownerId),
        ef = (0, s.e7)([I.Z], () => null != et && !ec && I.Z.canBasicChannel(B.S7T.CONNECT, et)),
        e_ = (0, d.Z)(ed ? null : eu),
        ep = ed || null == eu ? e_ : eu;
    if (null == ee || null == et || !1 === a.discoverable || null === X) return null;
    let eh = () => {
            let e = (e) => {
                (e.stopPropagation(), es && (ea({ action: 'PRESS_IMAGE' }), c.default.selectVoiceChannel(a.channelId), (0, u.iV)(a), null == K || K()));
            };
            return null == ep && ed
                ? (0, r.jsx)('div', {
                      className: Z.preview,
                      children: (0, r.jsx)(l.$jN, {})
                  })
                : null == ep || ec
                  ? (0, r.jsxs)(l.P3F, {
                        className: o()(Z.preview, Z.overlay, es ? Z.clickable : Z.disabled),
                        onClick: e,
                        'aria-label': (0, y.gR)(el),
                        'aria-disabled': !es,
                        children: [
                            (0, r.jsx)('img', {
                                alt: '',
                                src: Q === B.BRd.LIGHT ? Y : H
                            }),
                            X !== G.lY.MODAL &&
                                X !== G.lY.MODAL_V2 &&
                                (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        (0, r.jsx)(l.Text, {
                                            className: Z.overlayText,
                                            variant: 'text-sm/medium',
                                            color: 'always-white',
                                            children: (0, y.P9)(el)
                                        }),
                                        (0, r.jsx)(l.Text, {
                                            variant: 'text-sm/medium',
                                            children: ef ? V.intl.string(V.t.uQZTBQ) : V.intl.string(V.t.pgUTZG)
                                        })
                                    ]
                                })
                        ]
                    })
                  : (0, r.jsxs)(l.P3F, {
                        className: o()(Z.preview, Z.overlay, es ? Z.clickable : Z.disabled),
                        onClick: e,
                        'aria-label': (0, y.gR)(el),
                        'aria-disabled': !es,
                        children: [
                            (0, r.jsx)('img', {
                                alt: '',
                                src: ep,
                                className: Z.image
                            }),
                            X !== G.lY.MODAL &&
                                X !== G.lY.MODAL_V2 &&
                                (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        (0, r.jsx)(l.Text, {
                                            className: Z.overlayText,
                                            variant: 'text-sm/medium',
                                            color: 'always-white',
                                            children: (0, y.P9)(el)
                                        }),
                                        (0, r.jsx)(l.gw7, {
                                            size: 'xs',
                                            color: 'currentColor',
                                            className: Z.clyde
                                        })
                                    ]
                                })
                        ]
                    });
        },
        em = () =>
            X !== G.lY.MODAL && X !== G.lY.MODAL_V2
                ? null
                : (0, r.jsxs)('div', {
                      className: F.details,
                      children: [
                          (0, r.jsx)(k.Z, {
                              channel: et,
                              guild: ee,
                              onAction: ea,
                              onClose: K
                          }),
                          (0, r.jsx)(E.Z, {
                              users: en,
                              guildId: ee.id,
                              channelId: et.id,
                              maxUsers: M.W,
                              size: l.EFr.SIZE_16,
                              onClickOverflow: (e) => {
                                  (null == e || e.stopPropagation(), null == ea || ea({ action: 'PRESS_VOICE_CHANNEL_AVATARS' }));
                              },
                              onUserClick: (e) => e.stopPropagation(),
                              disableUserPopout: (e) => e === t.id,
                              overflowCountColor: 'text-muted',
                              'aria-label': V.intl.string(V.t.jNqDh4)
                          }),
                          X === G.lY.MODAL_V2 && eE()
                      ]
                  }),
        eg = () =>
            X === G.lY.MODAL || X === G.lY.MODAL_V2
                ? null
                : (0, r.jsx)(M.Z, {
                      user: t,
                      guild: ee,
                      channel: et,
                      onAction: ea,
                      onClose: K
                  }),
        eE = () =>
            t.id === n.id
                ? null
                : (0, r.jsx)('div', {
                      className: F.actions,
                      children: (0, r.jsx)(j.Z, {
                          channel: et,
                          onAction: ea,
                          onClose: K
                      })
                  }),
        eb = eu,
        ey = J === G.n_.ACTIVITY && $ === eb,
        eO = null != er ? V.intl.formatToPlainString(V.t['4CQq9f'], { name: er.name }) : V.intl.string(V.t['Jpkr/v']);
    return (0, r.jsx)(m.Gt, {
        value: ei,
        children: (0, r.jsx)(D.Z, {
            targetElementRef: q,
            sourceType: G.n_.ACTIVITY,
            user: t,
            children: (0, r.jsx)(R.Z, {
                user: t,
                guildId: z,
                themeType: X,
                sourceId: eb,
                sourceDetails: eO,
                sourceType: G.n_.ACTIVITY,
                onAction: ea,
                children: () =>
                    (0, r.jsx)(P.Z, {
                        ref: q,
                        user: t,
                        className: F.toolbarContainer,
                        interactionSourceId: eb,
                        sourceType: G.n_.ACTIVITY,
                        onAction: ea,
                        onShowToolbar: () => ea({ action: 'HOVER_ACTIVITY_CARD' }),
                        renderMoreButtonPopout: (e) =>
                            (0, r.jsx)(U.Z, {
                                display: 'live',
                                user: t,
                                onClose: K,
                                children: e
                            }),
                        children: (0, r.jsxs)(L.Z, {
                            ref: eo,
                            className: o()(W, { [F.hoisted]: ey }),
                            onAction: ea,
                            onClose: K,
                            'aria-label': eO,
                            children: [
                                (0, r.jsx)(x.Z, {
                                    text: eO,
                                    tags: (0, r.jsx)(g.ZP, { size: g.OH.SMALL })
                                }),
                                (0, r.jsxs)('div', {
                                    className: F.body,
                                    children: [
                                        (0, r.jsxs)('div', {
                                            className: F.content,
                                            children: [eh(), em(), X === G.lY.MODAL && eE()]
                                        }),
                                        eg()
                                    ]
                                }),
                                X !== G.lY.MODAL && X !== G.lY.MODAL_V2 && eE()
                            ]
                        })
                    })
            })
        })
    });
}
