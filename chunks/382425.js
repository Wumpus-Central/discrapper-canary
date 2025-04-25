n.d(t, { Z: () => Y }), n(388685);
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
    y = n(592125),
    v = n(430824),
    O = n(496675),
    I = n(158776),
    S = n(938475),
    T = n(960870),
    A = n(139793),
    N = n(510659),
    C = n(287954),
    R = n(660579),
    P = n(652853),
    w = n(64621),
    D = n(336383),
    L = n(194811),
    x = n(265386),
    M = n(668700),
    k = n(384298),
    j = n(386019),
    U = n(228168),
    G = n(981631),
    B = n(388032),
    V = n(227832),
    F = n(162509),
    Z = n(924482),
    H = n(774797);
function Y(e) {
    let { user: t, currentUser: n, stream: a, className: Y, onClose: W, profileGuildId: K } = e,
        z = i.useRef(null),
        { themeType: q, theme: Q } = (0, P.z)(),
        { interactionSource: X, interactionSourceId: J } = (0, N.Xo)(),
        $ = (0, s.e7)([v.Z], () => v.Z.getGuild(null == a ? void 0 : a.guildId)),
        ee = (0, s.e7)([y.Z], () => y.Z.getChannel(null == a ? void 0 : a.channelId)),
        et = (0, s.Wu)([S.ZP], () =>
            null != ee
                ? S.ZP.getVoiceStatesForChannel(ee).map((e) => {
                      let { user: t } = e;
                      return t;
                  })
                : []
        ),
        en = (0, s.e7)([I.Z], () => I.Z.findActivity(t.id, (e) => (0, f.Z)(e) && !(0, _.Z)(e))),
        { analyticsLocations: er } = (0, h.ZP)(p.Z.USER_PROFILE_LIVE_ACTIVITY_CARD),
        ei = (0, T.Z)({
            display: 'live',
            voiceChannelId: null == ee ? void 0 : ee.id,
            user: t,
            stream: a,
            analyticsLocations: er
        }),
        ea = (0, A.Z)({
            userId: t.id,
            onAction: ei
        }),
        [eo, es] = (0, b.wq)(ee),
        { previewUrl: el, isLoading: ec } = (0, E.Z)(a.guildId, a.channelId, a.ownerId),
        eu = (0, s.e7)([O.Z], () => null != ee && O.Z.canBasicChannel(G.S7T.CONNECT, ee)),
        ed = (0, d.Z)(ec ? null : el),
        ef = ec || null == el ? ed : el;
    if (null == $ || null == ee || !1 === a.discoverable || null === q) return null;
    let e_ = () => {
            let e = (e) => {
                e.stopPropagation(), ei({ action: 'PRESS_IMAGE' }), c.default.selectVoiceChannel(a.channelId), (0, u.iV)(a), null == W || W();
            };
            return null == ef && ec
                ? (0, r.jsx)('div', {
                      className: F.preview,
                      children: (0, r.jsx)(l.$jN, {})
                  })
                : null == ef
                  ? (0, r.jsxs)(l.P3F, {
                        className: o()(F.preview, F.overlay, { [F.clickable]: eo }),
                        onClick: eo ? e : void 0,
                        children: [
                            (0, r.jsx)('img', {
                                alt: '',
                                src: Q === G.BRd.LIGHT ? H : Z
                            }),
                            q !== U.lY.MODAL &&
                                q !== U.lY.MODAL_V2 &&
                                (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        (0, r.jsx)(l.Text, {
                                            className: F.overlayText,
                                            variant: 'text-sm/medium',
                                            color: 'always-white',
                                            children: (0, b.P9)(es)
                                        }),
                                        (0, r.jsx)(l.Text, {
                                            variant: 'text-sm/medium',
                                            children: eu ? B.intl.string(B.t.uQZTBQ) : B.intl.string(B.t.pgUTZG)
                                        })
                                    ]
                                })
                        ]
                    })
                  : (0, r.jsxs)(l.P3F, {
                        className: o()(F.preview, F.overlay, { [F.clickable]: eo }),
                        onClick: eo ? e : void 0,
                        children: [
                            (0, r.jsx)('img', {
                                alt: '',
                                src: ef,
                                className: F.image
                            }),
                            q !== U.lY.MODAL &&
                                q !== U.lY.MODAL_V2 &&
                                (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        (0, r.jsx)(l.Text, {
                                            className: F.overlayText,
                                            variant: 'text-sm/medium',
                                            color: 'always-white',
                                            children: (0, b.P9)(es)
                                        }),
                                        (0, r.jsx)(l.gw7, {
                                            size: 'xs',
                                            color: 'currentColor',
                                            className: F.clyde
                                        })
                                    ]
                                })
                        ]
                    });
        },
        ep = () =>
            q !== U.lY.MODAL && q !== U.lY.MODAL_V2
                ? null
                : (0, r.jsxs)('div', {
                      className: V.details,
                      children: [
                          (0, r.jsx)(x.Z, {
                              channel: ee,
                              guild: $,
                              onAction: ei,
                              onClose: W
                          }),
                          (0, r.jsx)(g.Z, {
                              users: et,
                              guildId: $.id,
                              channelId: ee.id,
                              maxUsers: M.W,
                              size: l.EFr.SIZE_16,
                              onClick: (e) => {
                                  null == e || e.stopPropagation(), null == ei || ei({ action: 'PRESS_VOICE_CHANNEL_AVATARS' });
                              },
                              onUserClick: (e) => e.stopPropagation(),
                              disableUserPopout: (e) => e === t.id,
                              overflowCountColor: 'text-muted'
                          }),
                          q === U.lY.MODAL_V2 && em()
                      ]
                  }),
        eh = () =>
            q === U.lY.MODAL || q === U.lY.MODAL_V2
                ? null
                : (0, r.jsx)(M.Z, {
                      user: t,
                      guild: $,
                      channel: ee,
                      onAction: ei,
                      onClose: W
                  }),
        em = () =>
            t.id === n.id
                ? null
                : (0, r.jsx)('div', {
                      className: V.actions,
                      children: (0, r.jsx)(k.Z, {
                          channel: ee,
                          onAction: ei,
                          onClose: W
                      })
                  }),
        eg = el,
        eE = X === U.n_.ACTIVITY && J === eg,
        eb = null != en ? B.intl.formatToPlainString(B.t['4CQq9f'], { name: en.name }) : B.intl.string(B.t['Jpkr/v']);
    return (0, r.jsx)(h.Gt, {
        value: er,
        children: (0, r.jsx)(w.Z, {
            targetElementRef: z,
            sourceType: U.n_.ACTIVITY,
            user: t,
            children: (0, r.jsx)(C.Z, {
                user: t,
                guildId: K,
                themeType: q,
                sourceId: eg,
                sourceDetails: eb,
                sourceType: U.n_.ACTIVITY,
                onAction: ei,
                children: () =>
                    (0, r.jsx)(R.Z, {
                        ref: z,
                        user: t,
                        className: V.toolbarContainer,
                        interactionSourceId: eg,
                        sourceType: U.n_.ACTIVITY,
                        onAction: ei,
                        onShowToolbar: () => ei({ action: 'HOVER_ACTIVITY_CARD' }),
                        renderMoreButtonPopout: (e) =>
                            (0, r.jsx)(j.Z, {
                                display: 'live',
                                user: t,
                                onClose: W,
                                children: e
                            }),
                        children: (0, r.jsxs)(D.Z, {
                            ref: ea,
                            className: o()(Y, { [V.hoisted]: eE }),
                            onAction: ei,
                            onClose: W,
                            children: [
                                (0, r.jsx)(L.Z, {
                                    text: eb,
                                    tags: (0, r.jsx)(m.ZP, { size: m.OH.SMALL })
                                }),
                                (0, r.jsxs)('div', {
                                    className: V.body,
                                    children: [
                                        (0, r.jsxs)('div', {
                                            className: V.content,
                                            children: [e_(), ep(), q === U.lY.MODAL && em()]
                                        }),
                                        eh()
                                    ]
                                }),
                                q !== U.lY.MODAL && q !== U.lY.MODAL_V2 && em()
                            ]
                        })
                    })
            })
        })
    });
}
