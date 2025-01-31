n.d(t, { Z: () => K }), n(47120);
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(442837),
    l = n(481060),
    u = n(287734),
    c = n(872810),
    d = n(110924),
    f = n(833664),
    _ = n(579630),
    p = n(100527),
    h = n(906732),
    m = n(750881),
    g = n(194082),
    E = n(318374),
    v = n(449605),
    y = n(102172),
    I = n(359110),
    b = n(769654),
    T = n(922482),
    S = n(592125),
    A = n(430824),
    N = n(496675),
    C = n(158776),
    R = n(699516),
    O = n(938475),
    D = n(626135),
    x = n(960870),
    L = n(139793),
    P = n(652853),
    w = n(336383),
    M = n(194811),
    k = n(373826),
    U = n(315324),
    G = n(599864),
    B = n(670451),
    Z = n(228168),
    F = n(981631),
    V = n(388032),
    j = n(249942),
    H = n(22481),
    Y = n(924482),
    W = n(774797);
function K(e) {
    let { user: t, currentUser: n, stream: a, className: K, onClose: z } = e,
        { profileType: q, theme: Q } = (0, P.z)(),
        X = {
            [H.fullSize]: q === Z.y0.FULL_SIZE,
            [j.fullSize]: q === Z.y0.FULL_SIZE
        },
        { enabled: J, analyticsEligible: $ } = (0, m.R4)('user-profile-stream-activity-card-web'),
        { analyticsLocations: ee } = (0, h.ZP)(p.Z.USER_PROFILE_LIVE_ACTIVITY_CARD),
        et = (0, x.Z)({
            display: 'live',
            user: t,
            stream: a,
            analyticsLocations: ee
        }),
        en = (0, L.Z)({
            userId: t.id,
            onAction: et
        }),
        ei = (0, o.e7)([A.Z], () => A.Z.getGuild(null == a ? void 0 : a.guildId)),
        er = (0, o.e7)([S.Z], () => S.Z.getChannel(null == a ? void 0 : a.channelId)),
        ea = (0, o.Wu)([O.ZP], () =>
            null != er
                ? O.ZP.getVoiceStatesForChannel(er).map((e) => {
                      let { user: t } = e;
                      return t;
                  })
                : []
        ),
        es = (0, o.e7)([C.Z], () => C.Z.findActivity(t.id, (e) => (0, f.Z)(e) && !(0, _.Z)(e))),
        [eo, el] = (0, y.wq)(er),
        { previewUrl: eu, isLoading: ec } = (0, v.Z)(null == a ? void 0 : a.guildId, null == a ? void 0 : a.channelId, null == a ? void 0 : a.ownerId),
        ed = (0, o.e7)([N.Z], () => null != er && N.Z.canBasicChannel(F.S7T.CONNECT, er)),
        ef = (0, o.e7)([R.Z], () => R.Z.getRelationshipType(t.id));
    r.useEffect(() => {
        if ($) {
            var e;
            D.default.track(F.rMx.USER_VOICE_ACTIVITY_VIEWED, {
                activity_user_id: t.id,
                discoverable: null === (e = a.discoverable) || void 0 === e || e,
                surface: 'user-profile-stream-activity-card',
                relationship_type: ef,
                treatment: J && !1 === a.discoverable ? m.h9.HIDE : m.h9.SHOW
            });
        }
    }, [t, ef, J, $, a]);
    let e_ = (0, d.Z)(ec ? null : eu),
        ep = ec || null == eu ? e_ : eu;
    if (null == ei || null == er || (J && !1 === a.discoverable)) return null;
    let eh = () => {
            let e = s()(H.preview, X),
                t = (e) => {
                    e.stopPropagation(), et({ action: 'PRESS_IMAGE' }), u.default.selectVoiceChannel(a.channelId), (0, c.iV)(a), null == z || z();
                };
            return null == ep && ec
                ? (0, i.jsx)('div', {
                      className: e,
                      children: (0, i.jsx)(l.$jN, {})
                  })
                : null == ep
                  ? (0, i.jsxs)(l.P3F, {
                        className: s()(e, H.overlay, { [H.clickable]: eo }),
                        onClick: eo ? t : void 0,
                        children: [
                            (0, i.jsx)('img', {
                                alt: '',
                                src: Q === F.BRd.LIGHT ? W : Y
                            }),
                            q !== Z.y0.FULL_SIZE &&
                                (0, i.jsxs)(i.Fragment, {
                                    children: [
                                        (0, i.jsx)(l.Text, {
                                            className: H.overlayText,
                                            variant: 'text-sm/medium',
                                            color: 'always-white',
                                            children: (0, y.P9)(el)
                                        }),
                                        (0, i.jsx)(l.Text, {
                                            variant: 'text-sm/medium',
                                            children: ed ? V.intl.string(V.t.uQZTBQ) : V.intl.string(V.t.pgUTZG)
                                        })
                                    ]
                                })
                        ]
                    })
                  : (0, i.jsxs)(l.P3F, {
                        className: s()(e, H.overlay, { [H.clickable]: eo }),
                        onClick: eo ? t : void 0,
                        children: [
                            (0, i.jsx)('img', {
                                alt: '',
                                src: ep,
                                className: H.image
                            }),
                            q !== Z.y0.FULL_SIZE &&
                                (0, i.jsxs)(i.Fragment, {
                                    children: [
                                        (0, i.jsx)(l.Text, {
                                            className: H.overlayText,
                                            variant: 'text-sm/medium',
                                            color: 'always-white',
                                            children: (0, y.P9)(el)
                                        }),
                                        (0, i.jsx)(l.gw7, {
                                            size: 'xs',
                                            color: 'currentColor',
                                            className: H.clyde
                                        })
                                    ]
                                })
                        ]
                    });
        },
        em = () => {
            if (q !== Z.y0.FULL_SIZE) return null;
            let e = er.isGuildStageVoice(),
                n = e ? l.ewx : l.gj8,
                r = (t) => {
                    t.stopPropagation(), null == et || et({ action: 'OPEN_VOICE_CHANNEL' }), e ? (0, T.Cq)(er) : (u.default.selectVoiceChannel(er.id), (0, I.Kh)(er.id)), null == z || z();
                },
                a = (e) => {
                    e.stopPropagation(), et({ action: 'OPEN_VOICE_GUILD' }), (0, b.X)(ei.id), null == z || z();
                };
            return (0, i.jsxs)('div', {
                className: j.details,
                children: [
                    (0, i.jsxs)('div', {
                        children: [
                            (0, i.jsxs)(l.X6q, {
                                variant: 'heading-sm/semibold',
                                color: 'text-normal',
                                className: j.voiceChannelHeading,
                                children: [
                                    (0, i.jsx)(n, {
                                        size: 'xxs',
                                        color: l.TVs.colors.TEXT_NORMAL,
                                        className: j.voiceIcon
                                    }),
                                    (0, i.jsx)(l.P3F, {
                                        className: s()(j.clickableText, j.inline),
                                        onClick: r,
                                        children: er.name
                                    })
                                ]
                            }),
                            (0, i.jsx)(k.Z, {
                                variant: 'text-xs/normal',
                                text: V.intl.formatToPlainString(V.t['hq/Qzc'], { guildName: ei.name }),
                                onClick: a
                            })
                        ]
                    }),
                    (0, i.jsx)(E.Z, {
                        users: ea,
                        guildId: ei.id,
                        channelId: er.id,
                        maxUsers: U.W,
                        size: l.EFr.SIZE_16,
                        onClick: (e) => {
                            e.stopPropagation(), null == et || et({ action: 'PRESS_VOICE_CHANNEL_AVATARS' });
                        },
                        onUserClick: (e) => e.stopPropagation(),
                        disableUserPopout: (e) => e === t.id,
                        overflowCountVariant: 'text-xxs/semibold',
                        overflowCountColor: 'text-muted'
                    })
                ]
            });
        },
        eg = () =>
            q === Z.y0.FULL_SIZE
                ? null
                : (0, i.jsx)(U.Z, {
                      user: t,
                      guild: ei,
                      channel: er,
                      onAction: et,
                      onClose: z
                  }),
        eE = () =>
            t.id === n.id
                ? null
                : (0, i.jsx)('div', {
                      className: s()(j.actions, X),
                      children: (0, i.jsx)(G.Z, {
                          channel: er,
                          onAction: et,
                          onClose: z
                      })
                  });
    return (0, i.jsx)(h.Gt, {
        value: ee,
        children: (0, i.jsxs)(w.Z, {
            ref: en,
            className: K,
            onAction: et,
            onClose: z,
            children: [
                (0, i.jsx)(M.Z, {
                    text: null != es ? V.intl.formatToPlainString(V.t['4CQq9f'], { name: es.name }) : V.intl.string(V.t['Jpkr/v']),
                    tags: (0, i.jsx)(g.ZP, { size: g.OH.SMALL }),
                    contextMenu: (0, i.jsx)(B.Z, {
                        display: 'live',
                        user: t,
                        onClose: z
                    })
                }),
                (0, i.jsxs)('div', {
                    className: j.body,
                    children: [
                        (0, i.jsxs)('div', {
                            className: s()(j.content, X),
                            children: [eh(), em(), q === Z.y0.FULL_SIZE && eE()]
                        }),
                        eg()
                    ]
                }),
                q !== Z.y0.FULL_SIZE && eE()
            ]
        })
    });
}
