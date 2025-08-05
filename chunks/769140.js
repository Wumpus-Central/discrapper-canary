(n.d(t, { Z: () => V }), n(388685));
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
    R = n(194811),
    P = n(265386),
    w = n(668700),
    D = n(384298),
    L = n(670451),
    x = n(228168),
    M = n(981631),
    k = n(388032),
    j = n(227832),
    U = n(162509),
    G = n(924482),
    B = n(774797);
function V(e) {
    let { user: t, currentUser: n, stream: i, className: V, onClose: F } = e,
        { themeType: Z, theme: H } = (0, N.z)(),
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
        X = (0, S.Z)({
            display: 'live',
            voiceChannelId: null == W ? void 0 : W.id,
            user: t,
            stream: i,
            analyticsLocations: q
        }),
        Q = (0, A.Z)({
            userId: t.id,
            onAction: X
        }),
        { previewUrl: J, isLoading: $ } = (0, E.Z)(null == i ? void 0 : i.guildId, null == i ? void 0 : i.channelId, null == i ? void 0 : i.ownerId),
        [ee, et] = (0, b.wq)(W),
        en = (0, _.Kt)() && (0, _.zd)(null == W ? void 0 : W.id),
        er = (0, o.e7)([v.Z], () => null != W && !en && v.Z.canBasicChannel(M.S7T.CONNECT, W)),
        ei = (0, u.Z)($ ? null : J),
        ea = $ || null == J ? ei : J;
    if (null == Y || null == W || !1 === i.discoverable) return null;
    let eo = () => {
            let e = (e) => {
                (e.stopPropagation(), ee && (X({ action: 'PRESS_IMAGE' }), l.default.selectVoiceChannel(i.channelId), (0, c.iV)(i), null == F || F()));
            };
            return null == ea && $
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
                                src: H === M.BRd.LIGHT ? B : G
                            }),
                            Z !== x.lY.MODAL &&
                                Z !== x.lY.MODAL_V2 &&
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
                                            children: er ? k.intl.string(k.t.uQZTBQ) : k.intl.string(k.t.pgUTZG)
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
                            Z !== x.lY.MODAL &&
                                Z !== x.lY.MODAL_V2 &&
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
            Z !== x.lY.MODAL && Z !== x.lY.MODAL_V2
                ? null
                : (0, r.jsxs)('div', {
                      className: j.details,
                      children: [
                          (0, r.jsx)(P.Z, {
                              channel: W,
                              guild: Y,
                              onAction: X,
                              onClose: F
                          }),
                          (0, r.jsx)(g.Z, {
                              users: K,
                              guildId: Y.id,
                              channelId: W.id,
                              maxUsers: w.W,
                              size: s.EFr.SIZE_16,
                              onClickOverflow: (e) => {
                                  (e.stopPropagation(), null == X || X({ action: 'PRESS_VOICE_CHANNEL_AVATARS' }));
                              },
                              onUserClick: (e) => e.stopPropagation(),
                              disableUserPopout: (e) => e === t.id,
                              overflowCountColor: 'text-muted',
                              'aria-label': k.intl.string(k.t.jNqDh4)
                          }),
                          Z === x.lY.MODAL_V2 && ec()
                      ]
                  }),
        el = () =>
            Z === x.lY.MODAL || Z === x.lY.MODAL_V2
                ? null
                : (0, r.jsx)(w.Z, {
                      user: t,
                      guild: Y,
                      channel: W,
                      onAction: X,
                      onClose: F
                  }),
        ec = () =>
            t.id === n.id
                ? null
                : (0, r.jsx)('div', {
                      className: j.actions,
                      children: (0, r.jsx)(D.Z, {
                          channel: W,
                          onAction: X,
                          onClose: F
                      })
                  }),
        eu = null != z ? k.intl.formatToPlainString(k.t['4CQq9f'], { name: z.name }) : k.intl.string(k.t['Jpkr/v']);
    return (0, r.jsx)(h.Gt, {
        value: q,
        children: (0, r.jsxs)(C.Z, {
            ref: Q,
            className: V,
            onAction: X,
            onClose: F,
            'aria-label': eu,
            children: [
                (0, r.jsx)(R.Z, {
                    text: eu,
                    tags: (0, r.jsx)(m.ZP, { size: m.OH.SMALL }),
                    contextMenu: (0, r.jsx)(L.Z, {
                        display: 'live',
                        user: t,
                        onClose: F
                    })
                }),
                (0, r.jsxs)('div', {
                    className: j.body,
                    children: [
                        (0, r.jsxs)('div', {
                            className: j.content,
                            children: [eo(), es(), Z === x.lY.MODAL && ec()]
                        }),
                        el()
                    ]
                }),
                Z !== x.lY.MODAL && Z !== x.lY.MODAL_V2 && ec()
            ]
        })
    });
}
