n.d(t, { Z: () => B }), n(388685);
var r = n(255367);
n(73800);
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
    b = n(592125),
    y = n(430824),
    O = n(496675),
    v = n(158776),
    I = n(938475),
    S = n(960870),
    T = n(139793),
    A = n(652853),
    N = n(336383),
    C = n(194811),
    P = n(265386),
    R = n(668700),
    w = n(384298),
    D = n(670451),
    L = n(228168),
    x = n(981631),
    k = n(388032),
    M = n(935693),
    j = n(548120),
    U = n(924482),
    G = n(774797);
function B(e) {
    let { user: t, currentUser: n, stream: i, className: B, onClose: F } = e,
        { themeType: V, theme: Z } = (0, A.z)(),
        H = (0, o.e7)([y.Z], () => y.Z.getGuild(null == i ? void 0 : i.guildId)),
        Y = (0, o.e7)([b.Z], () => b.Z.getChannel(null == i ? void 0 : i.channelId)),
        W = (0, o.Wu)([I.ZP], () =>
            null != Y
                ? I.ZP.getVoiceStatesForChannel(Y).map((e) => {
                      let { user: t } = e;
                      return t;
                  })
                : []
        ),
        K = (0, o.e7)([v.Z], () => v.Z.findActivity(t.id, (e) => (0, d.Z)(e) && !(0, f.Z)(e))),
        { analyticsLocations: z } = (0, p.ZP)(_.Z.USER_PROFILE_LIVE_ACTIVITY_CARD),
        q = (0, S.Z)({
            display: 'live',
            voiceChannelId: null == Y ? void 0 : Y.id,
            user: t,
            stream: i,
            analyticsLocations: z
        }),
        Q = (0, T.Z)({
            userId: t.id,
            onAction: q
        }),
        { previewUrl: X, isLoading: J } = (0, g.Z)(null == i ? void 0 : i.guildId, null == i ? void 0 : i.channelId, null == i ? void 0 : i.ownerId),
        [$, ee] = (0, E.wq)(Y),
        et = (0, o.e7)([O.Z], () => null != Y && O.Z.canBasicChannel(x.S7T.CONNECT, Y)),
        en = (0, u.Z)(J ? null : X),
        er = J || null == X ? en : X;
    if (null == H || null == Y || !1 === i.discoverable) return null;
    let ei = () => {
            let e = (e) => {
                e.stopPropagation(), q({ action: 'PRESS_IMAGE' }), l.default.selectVoiceChannel(i.channelId), (0, c.iV)(i), null == F || F();
            };
            return null == er && J
                ? (0, r.jsx)('div', {
                      className: j.preview,
                      children: (0, r.jsx)(s.$jN, {})
                  })
                : null == er
                  ? (0, r.jsxs)(s.P3F, {
                        className: a()(j.preview, j.overlay, { [j.clickable]: $ }),
                        onClick: $ ? e : void 0,
                        children: [
                            (0, r.jsx)('img', {
                                alt: '',
                                src: Z === x.BRd.LIGHT ? G : U
                            }),
                            V !== L.lY.MODAL &&
                                V !== L.lY.MODAL_V2 &&
                                (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        (0, r.jsx)(s.Text, {
                                            className: j.overlayText,
                                            variant: 'text-sm/medium',
                                            color: 'always-white',
                                            children: (0, E.P9)(ee)
                                        }),
                                        (0, r.jsx)(s.Text, {
                                            variant: 'text-sm/medium',
                                            children: et ? k.intl.string(k.t.uQZTBQ) : k.intl.string(k.t.pgUTZG)
                                        })
                                    ]
                                })
                        ]
                    })
                  : (0, r.jsxs)(s.P3F, {
                        className: a()(j.preview, j.overlay, { [j.clickable]: $ }),
                        onClick: $ ? e : void 0,
                        children: [
                            (0, r.jsx)('img', {
                                alt: '',
                                src: er,
                                className: j.image
                            }),
                            V !== L.lY.MODAL &&
                                V !== L.lY.MODAL_V2 &&
                                (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        (0, r.jsx)(s.Text, {
                                            className: j.overlayText,
                                            variant: 'text-sm/medium',
                                            color: 'always-white',
                                            children: (0, E.P9)(ee)
                                        }),
                                        (0, r.jsx)(s.gw7, {
                                            size: 'xs',
                                            color: 'currentColor',
                                            className: j.clyde
                                        })
                                    ]
                                })
                        ]
                    });
        },
        ea = () =>
            V !== L.lY.MODAL && V !== L.lY.MODAL_V2
                ? null
                : (0, r.jsxs)('div', {
                      className: M.details,
                      children: [
                          (0, r.jsx)(P.Z, {
                              channel: Y,
                              guild: H,
                              onAction: q,
                              onClose: F
                          }),
                          (0, r.jsx)(m.Z, {
                              users: W,
                              guildId: H.id,
                              channelId: Y.id,
                              maxUsers: R.W,
                              size: s.EFr.SIZE_16,
                              onClick: (e) => {
                                  e.stopPropagation(), null == q || q({ action: 'PRESS_VOICE_CHANNEL_AVATARS' });
                              },
                              onUserClick: (e) => e.stopPropagation(),
                              disableUserPopout: (e) => e === t.id,
                              overflowCountColor: 'text-muted'
                          }),
                          V === L.lY.MODAL_V2 && es()
                      ]
                  }),
        eo = () =>
            V === L.lY.MODAL || V === L.lY.MODAL_V2
                ? null
                : (0, r.jsx)(R.Z, {
                      user: t,
                      guild: H,
                      channel: Y,
                      onAction: q,
                      onClose: F
                  }),
        es = () =>
            t.id === n.id
                ? null
                : (0, r.jsx)('div', {
                      className: M.actions,
                      children: (0, r.jsx)(w.Z, {
                          channel: Y,
                          onAction: q,
                          onClose: F
                      })
                  });
    return (0, r.jsx)(p.Gt, {
        value: z,
        children: (0, r.jsxs)(N.Z, {
            ref: Q,
            className: B,
            onAction: q,
            onClose: F,
            children: [
                (0, r.jsx)(C.Z, {
                    text: null != K ? k.intl.formatToPlainString(k.t['4CQq9f'], { name: K.name }) : k.intl.string(k.t['Jpkr/v']),
                    tags: (0, r.jsx)(h.ZP, { size: h.OH.SMALL }),
                    contextMenu: (0, r.jsx)(D.Z, {
                        display: 'live',
                        user: t,
                        onClose: F
                    })
                }),
                (0, r.jsxs)('div', {
                    className: M.body,
                    children: [
                        (0, r.jsxs)('div', {
                            className: M.content,
                            children: [ei(), ea(), V === L.lY.MODAL && es()]
                        }),
                        eo()
                    ]
                }),
                V !== L.lY.MODAL && V !== L.lY.MODAL_V2 && es()
            ]
        })
    });
}
