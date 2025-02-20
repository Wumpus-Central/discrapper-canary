n.d(t, { Z: () => z }), n(47120);
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(442837),
    l = n(481060),
    c = n(287734),
    u = n(872810),
    d = n(110924),
    f = n(833664),
    p = n(579630),
    _ = n(100527),
    h = n(906732),
    m = n(750881),
    g = n(194082),
    E = n(318374),
    v = n(449605),
    b = n(102172),
    y = n(359110),
    O = n(769654),
    S = n(922482),
    I = n(592125),
    T = n(430824),
    N = n(496675),
    A = n(158776),
    C = n(699516),
    R = n(938475),
    P = n(626135),
    w = n(960870),
    D = n(139793),
    x = n(652853),
    L = n(336383),
    M = n(194811),
    k = n(373826),
    j = n(315324),
    U = n(788858),
    G = n(599864),
    B = n(670451),
    Z = n(228168),
    F = n(981631),
    V = n(388032),
    H = n(481736),
    W = n(713467),
    Y = n(924482),
    K = n(774797);
function z(e) {
    let { user: t, currentUser: n, stream: o, className: z, onClose: q } = e,
        { profileType: Q, theme: X } = (0, x.z)(),
        J = {
            [W.fullSize]: Q === Z.y0.FULL_SIZE,
            [H.fullSize]: Q === Z.y0.FULL_SIZE
        },
        { enabled: $, analyticsEligible: ee } = (0, m.R4)('user-profile-stream-activity-card-web'),
        et = (0, s.e7)([T.Z], () => T.Z.getGuild(null == o ? void 0 : o.guildId)),
        en = (0, s.e7)([I.Z], () => I.Z.getChannel(null == o ? void 0 : o.channelId)),
        er = (0, s.Wu)([R.ZP], () =>
            null != en
                ? R.ZP.getVoiceStatesForChannel(en).map((e) => {
                      let { user: t } = e;
                      return t;
                  })
                : []
        ),
        ei = (0, s.e7)([A.Z], () => A.Z.findActivity(t.id, (e) => (0, f.Z)(e) && !(0, p.Z)(e))),
        { analyticsLocations: eo } = (0, h.ZP)(_.Z.USER_PROFILE_LIVE_ACTIVITY_CARD),
        ea = (0, w.Z)({
            display: 'live',
            voiceChannelId: null == en ? void 0 : en.id,
            user: t,
            stream: o,
            analyticsLocations: eo
        }),
        es = (0, D.Z)({
            userId: t.id,
            onAction: ea
        }),
        { previewUrl: el, isLoading: ec } = (0, v.Z)(null == o ? void 0 : o.guildId, null == o ? void 0 : o.channelId, null == o ? void 0 : o.ownerId),
        [eu, ed] = (0, b.wq)(en),
        ef = (0, s.e7)([N.Z], () => null != en && N.Z.canBasicChannel(F.S7T.CONNECT, en)),
        ep = (0, s.e7)([C.Z], () => C.Z.getRelationshipType(t.id));
    i.useEffect(() => {
        if (ee) {
            var e;
            P.default.track(F.rMx.USER_VOICE_ACTIVITY_VIEWED, {
                activity_user_id: t.id,
                discoverable: null === (e = o.discoverable) || void 0 === e || e,
                surface: 'user-profile-stream-activity-card',
                relationship_type: ep,
                treatment: $ && !1 === o.discoverable ? m.h9.HIDE : m.h9.SHOW
            });
        }
    }, [t, ep, $, ee, o]);
    let e_ = (0, d.Z)(ec ? null : el),
        eh = ec || null == el ? e_ : el;
    if (null == et || null == en || ($ && !1 === o.discoverable)) return null;
    let em = () => {
            let e = a()(W.preview, J),
                t = (e) => {
                    e.stopPropagation(), ea({ action: 'PRESS_IMAGE' }), c.default.selectVoiceChannel(o.channelId), (0, u.iV)(o), null == q || q();
                };
            return null == eh && ec
                ? (0, r.jsx)('div', {
                      className: e,
                      children: (0, r.jsx)(l.$jN, {})
                  })
                : null == eh
                  ? (0, r.jsxs)(l.P3F, {
                        className: a()(e, W.overlay, { [W.clickable]: eu }),
                        onClick: eu ? t : void 0,
                        children: [
                            (0, r.jsx)('img', {
                                alt: '',
                                src: X === F.BRd.LIGHT ? K : Y
                            }),
                            Q !== Z.y0.FULL_SIZE &&
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
                                            children: ef ? V.NW.string(V.t.uQZTBQ) : V.NW.string(V.t.pgUTZG)
                                        })
                                    ]
                                })
                        ]
                    })
                  : (0, r.jsxs)(l.P3F, {
                        className: a()(e, W.overlay, { [W.clickable]: eu }),
                        onClick: eu ? t : void 0,
                        children: [
                            (0, r.jsx)('img', {
                                alt: '',
                                src: eh,
                                className: W.image
                            }),
                            Q !== Z.y0.FULL_SIZE &&
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
        eg = () => {
            if (Q !== Z.y0.FULL_SIZE) return null;
            let e = (e) => {
                    e.stopPropagation(), null == ea || ea({ action: 'OPEN_VOICE_CHANNEL' }), en.isGuildStageVoice() ? (0, S.Cq)(en) : (c.default.selectVoiceChannel(en.id), (0, y.Kh)(en.id)), null == q || q();
                },
                n = (e) => {
                    e.stopPropagation(), ea({ action: 'OPEN_VOICE_GUILD' }), (0, O.X)(et.id), null == q || q();
                };
            return (0, r.jsxs)('div', {
                className: H.details,
                children: [
                    (0, r.jsxs)('div', {
                        children: [
                            (0, r.jsxs)(l.X6q, {
                                variant: 'heading-sm/semibold',
                                color: 'text-normal',
                                className: H.voiceChannelHeading,
                                children: [
                                    (0, r.jsx)(U.Z, {
                                        channel: en,
                                        size: 'xxs',
                                        color: l.TVs.colors.TEXT_NORMAL,
                                        className: H.voiceIcon
                                    }),
                                    (0, r.jsx)(l.P3F, {
                                        className: a()(H.clickableText, H.inline),
                                        onClick: e,
                                        children: en.name
                                    })
                                ]
                            }),
                            (0, r.jsx)(k.Z, {
                                variant: 'text-xs/normal',
                                text: V.NW.formatToPlainString(V.t['hq/Qzc'], { guildName: et.name }),
                                onClick: n
                            })
                        ]
                    }),
                    (0, r.jsx)(E.Z, {
                        users: er,
                        guildId: et.id,
                        channelId: en.id,
                        maxUsers: j.W,
                        size: l.EFr.SIZE_16,
                        onClick: (e) => {
                            e.stopPropagation(), null == ea || ea({ action: 'PRESS_VOICE_CHANNEL_AVATARS' });
                        },
                        onUserClick: (e) => e.stopPropagation(),
                        disableUserPopout: (e) => e === t.id,
                        overflowCountVariant: 'text-xxs/semibold',
                        overflowCountColor: 'text-muted'
                    })
                ]
            });
        },
        eE = () =>
            Q === Z.y0.FULL_SIZE
                ? null
                : (0, r.jsx)(j.Z, {
                      user: t,
                      guild: et,
                      channel: en,
                      onAction: ea,
                      onClose: q
                  }),
        ev = () =>
            t.id === n.id
                ? null
                : (0, r.jsx)('div', {
                      className: a()(H.actions, J),
                      children: (0, r.jsx)(G.Z, {
                          channel: en,
                          onAction: ea,
                          onClose: q
                      })
                  });
    return (0, r.jsx)(h.Gt, {
        value: eo,
        children: (0, r.jsxs)(L.Z, {
            ref: es,
            className: z,
            onAction: ea,
            onClose: q,
            children: [
                (0, r.jsx)(M.Z, {
                    text: null != ei ? V.NW.formatToPlainString(V.t['4CQq9f'], { name: ei.name }) : V.NW.string(V.t['Jpkr/v']),
                    tags: (0, r.jsx)(g.ZP, { size: g.OH.SMALL }),
                    contextMenu: (0, r.jsx)(B.Z, {
                        display: 'live',
                        user: t,
                        onClose: q
                    })
                }),
                (0, r.jsxs)('div', {
                    className: H.body,
                    children: [
                        (0, r.jsxs)('div', {
                            className: a()(H.content, J),
                            children: [em(), eg(), Q === Z.y0.FULL_SIZE && ev()]
                        }),
                        eE()
                    ]
                }),
                Q !== Z.y0.FULL_SIZE && ev()
            ]
        })
    });
}
