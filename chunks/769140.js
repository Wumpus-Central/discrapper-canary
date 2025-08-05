(n.d(t, { Z: () => Z }), n(388685));
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
    _ = n(622822),
    p = n(100527),
    h = n(906732),
    m = n(194082),
    g = n(318374),
    E = n(449605),
    b = n(102172),
    y = n(592125),
    O = n(430824),
    v = n(496675),
    I = n(158776),
    T = n(938475),
    S = n(960870),
    A = n(139793),
    N = n(652853),
    C = n(336383),
    w = n(194811),
    R = n(265386),
    P = n(668700),
    D = n(384298),
    L = n(670451),
    x = n(228168),
    k = n(981631),
    j = n(388032),
    M = n(227832),
    U = n(162509),
    G = n(924482),
    B = n(774797);
function Z(e) {
    let { user: t, currentUser: n, stream: i, className: Z, onClose: F } = e,
        { themeType: V, theme: H } = (0, N.z)(),
        Y = (0, o.e7)([O.Z], () => O.Z.getGuild(null == i ? void 0 : i.guildId)),
        W = (0, o.e7)([y.Z], () => y.Z.getChannel(null == i ? void 0 : i.channelId)),
        K = (0, o.Wu)([T.ZP], () =>
            null != W
                ? T.ZP.getVoiceStatesForChannel(W).map((e) => {
                      let { user: t } = e;
                      return t;
                  })
                : []
        ),
        z = (0, o.e7)([I.Z], () => I.Z.findActivity(t.id, (e) => (0, d.Z)(e) && !(0, f.Z)(e))),
        { analyticsLocations: q } = (0, h.ZP)(p.Z.USER_PROFILE_LIVE_ACTIVITY_CARD),
        $ = (0, S.Z)({
            display: 'live',
            voiceChannelId: null == W ? void 0 : W.id,
            user: t,
            stream: i,
            analyticsLocations: q
        }),
        X = (0, A.Z)({
            userId: t.id,
            onAction: $
        }),
        { previewUrl: Q, isLoading: J } = (0, E.Z)(null == i ? void 0 : i.guildId, null == i ? void 0 : i.channelId, null == i ? void 0 : i.ownerId),
        [ee, et] = (0, b.wq)(W),
        en = (0, _.Kt)() && (0, _.zd)(null == W ? void 0 : W.id),
        er = (0, o.e7)([v.Z], () => null != W && !en && v.Z.canBasicChannel(k.S7T.CONNECT, W)),
        ei = (0, u.Z)(J ? null : Q),
        ea = J || null == Q ? ei : Q;
    if (null == Y || null == W || !1 === i.discoverable) return null;
    let eo = () => {
            let e = (e) => {
                (e.stopPropagation(), ee && ($({ action: 'PRESS_IMAGE' }), l.default.selectVoiceChannel(i.channelId), (0, c.iV)(i), null == F || F()));
            };
            return null == ea && J
                ? (0, r.jsx)('div', {
                      className: U.preview,
                      children: (0, r.jsx)(s.$jN, {})
                  })
                : null == ea || en
                  ? (0, r.jsxs)(s.P3F, {
                        className: a()(U.preview, U.overlay, ee ? U.clickable : U.disabled),
                        onClick: e,
                        'aria-label': (0, b.gR)(et),
                        'aria-disabled': !ee,
                        children: [
                            (0, r.jsx)('img', {
                                alt: '',
                                src: H === k.BRd.LIGHT ? B : G
                            }),
                            V !== x.lY.MODAL &&
                                V !== x.lY.MODAL_V2 &&
                                (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        (0, r.jsx)(s.Text, {
                                            className: U.overlayText,
                                            variant: 'text-sm/medium',
                                            color: 'always-white',
                                            children: (0, b.P9)(et)
                                        }),
                                        (0, r.jsx)(s.Text, {
                                            variant: 'text-sm/medium',
                                            children: er ? j.intl.string(j.t.uQZTBQ) : j.intl.string(j.t.pgUTZG)
                                        })
                                    ]
                                })
                        ]
                    })
                  : (0, r.jsxs)(s.P3F, {
                        className: a()(U.preview, U.overlay, ee ? U.clickable : U.disabled),
                        onClick: e,
                        'aria-label': (0, b.gR)(et),
                        'aria-disabled': !ee,
                        children: [
                            (0, r.jsx)('img', {
                                alt: '',
                                src: ea,
                                className: U.image
                            }),
                            V !== x.lY.MODAL &&
                                V !== x.lY.MODAL_V2 &&
                                (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        (0, r.jsx)(s.Text, {
                                            className: U.overlayText,
                                            variant: 'text-sm/medium',
                                            color: 'always-white',
                                            children: (0, b.P9)(et)
                                        }),
                                        (0, r.jsx)(s.gw7, {
                                            size: 'xs',
                                            color: 'currentColor',
                                            className: U.clyde
                                        })
                                    ]
                                })
                        ]
                    });
        },
        es = () =>
            V !== x.lY.MODAL && V !== x.lY.MODAL_V2
                ? null
                : (0, r.jsxs)('div', {
                      className: M.details,
                      children: [
                          (0, r.jsx)(R.Z, {
                              channel: W,
                              guild: Y,
                              onAction: $,
                              onClose: F
                          }),
                          (0, r.jsx)(g.Z, {
                              users: K,
                              guildId: Y.id,
                              channelId: W.id,
                              maxUsers: P.W,
                              size: s.EFr.SIZE_16,
                              onClickOverflow: (e) => {
                                  (e.stopPropagation(), null == $ || $({ action: 'PRESS_VOICE_CHANNEL_AVATARS' }));
                              },
                              onUserClick: (e) => e.stopPropagation(),
                              disableUserPopout: (e) => e === t.id,
                              overflowCountColor: 'text-muted',
                              'aria-label': j.intl.string(j.t.jNqDh4)
                          }),
                          V === x.lY.MODAL_V2 && ec()
                      ]
                  }),
        el = () =>
            V === x.lY.MODAL || V === x.lY.MODAL_V2
                ? null
                : (0, r.jsx)(P.Z, {
                      user: t,
                      guild: Y,
                      channel: W,
                      onAction: $,
                      onClose: F
                  }),
        ec = () =>
            t.id === n.id
                ? null
                : (0, r.jsx)('div', {
                      className: M.actions,
                      children: (0, r.jsx)(D.Z, {
                          channel: W,
                          onAction: $,
                          onClose: F
                      })
                  }),
        eu = null != z ? j.intl.formatToPlainString(j.t['4CQq9f'], { name: z.name }) : j.intl.string(j.t['Jpkr/v']);
    return (0, r.jsx)(h.Gt, {
        value: q,
        children: (0, r.jsxs)(C.Z, {
            ref: X,
            className: Z,
            onAction: $,
            onClose: F,
            'aria-label': eu,
            children: [
                (0, r.jsx)(w.Z, {
                    text: eu,
                    tags: (0, r.jsx)(m.ZP, { size: m.OH.SMALL }),
                    contextMenu: (0, r.jsx)(L.Z, {
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
                            children: [eo(), es(), V === x.lY.MODAL && ec()]
                        }),
                        el()
                    ]
                }),
                V !== x.lY.MODAL && V !== x.lY.MODAL_V2 && ec()
            ]
        })
    });
}
