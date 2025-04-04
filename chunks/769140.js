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
    _ = n(579630),
    p = n(100527),
    h = n(906732),
    m = n(750881),
    g = n(194082),
    E = n(318374),
    b = n(449605),
    y = n(102172),
    v = n(359110),
    O = n(769654),
    I = n(922482),
    S = n(592125),
    T = n(430824),
    N = n(496675),
    A = n(158776),
    C = n(699516),
    R = n(938475),
    P = n(626135),
    w = n(960870),
    D = n(139793),
    L = n(652853),
    x = n(336383),
    M = n(194811),
    k = n(373826),
    j = n(315324),
    U = n(788858),
    G = n(384298),
    B = n(670451),
    F = n(228168),
    V = n(981631),
    Z = n(388032),
    H = n(227832),
    W = n(162509),
    Y = n(924482),
    K = n(774797);
function z(e) {
    let { user: t, currentUser: n, stream: o, className: z, onClose: q } = e,
        { profileType: Q, theme: X } = (0, L.z)(),
        J = {
            [W.fullSize]: Q === F.y0.FULL_SIZE,
            [H.fullSize]: Q === F.y0.FULL_SIZE
        },
        { enabled: $, analyticsEligible: ee } = (0, m.R4)('user-profile-stream-activity-card-web'),
        et = (0, s.e7)([T.Z], () => T.Z.getGuild(null == o ? void 0 : o.guildId)),
        en = (0, s.e7)([S.Z], () => S.Z.getChannel(null == o ? void 0 : o.channelId)),
        er = (0, s.Wu)([R.ZP], () =>
            null != en
                ? R.ZP.getVoiceStatesForChannel(en).map((e) => {
                      let { user: t } = e;
                      return t;
                  })
                : []
        ),
        ei = (0, s.e7)([A.Z], () => A.Z.findActivity(t.id, (e) => (0, f.Z)(e) && !(0, _.Z)(e))),
        { analyticsLocations: eo } = (0, h.ZP)(p.Z.USER_PROFILE_LIVE_ACTIVITY_CARD),
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
        { previewUrl: el, isLoading: ec } = (0, b.Z)(null == o ? void 0 : o.guildId, null == o ? void 0 : o.channelId, null == o ? void 0 : o.ownerId),
        [eu, ed] = (0, y.wq)(en),
        ef = (0, s.e7)([N.Z], () => null != en && N.Z.canBasicChannel(V.S7T.CONNECT, en)),
        e_ = (0, s.e7)([C.Z], () => C.Z.getRelationshipType(t.id));
    i.useEffect(() => {
        if (ee) {
            var e;
            P.default.track(V.rMx.USER_VOICE_ACTIVITY_VIEWED, {
                activity_user_id: t.id,
                discoverable: null == (e = o.discoverable) || e,
                surface: 'user-profile-stream-activity-card',
                relationship_type: e_,
                treatment: $ && !1 === o.discoverable ? m.h9.HIDE : m.h9.SHOW
            });
        }
    }, [t, e_, $, ee, o]);
    let ep = (0, d.Z)(ec ? null : el),
        eh = ec || null == el ? ep : el;
    if (null == et || null == en || ($ && !1 === o.discoverable)) return null;
    let em = () => {
            let e = a()(W.preview, J),
                t = (e) => {
                    e.stopPropagation(), ea({ action: 'PRESS_IMAGE' }), c.default.selectVoiceChannel(o.channelId), (0, u.iV)(o), null == q || q();
                },
                n = (e) => {
                    (e.keyCode === V.yXg.SPACE || e.keyCode === V.yXg.ENTER) && t(e);
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
                        onKeyDown: eu ? n : void 0,
                        children: [
                            (0, r.jsx)('img', {
                                alt: '',
                                src: X === V.BRd.LIGHT ? K : Y
                            }),
                            Q !== F.y0.FULL_SIZE &&
                                (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        (0, r.jsx)(l.Text, {
                                            className: W.overlayText,
                                            variant: 'text-sm/medium',
                                            color: 'always-white',
                                            children: (0, y.P9)(ed)
                                        }),
                                        (0, r.jsx)(l.Text, {
                                            variant: 'text-sm/medium',
                                            children: ef ? Z.NW.string(Z.t.uQZTBQ) : Z.NW.string(Z.t.pgUTZG)
                                        })
                                    ]
                                })
                        ]
                    })
                  : (0, r.jsxs)(l.P3F, {
                        className: a()(e, W.overlay, { [W.clickable]: eu }),
                        onClick: eu ? t : void 0,
                        onKeyDown: eu ? n : void 0,
                        children: [
                            (0, r.jsx)('img', {
                                alt: '',
                                src: eh,
                                className: W.image
                            }),
                            Q !== F.y0.FULL_SIZE &&
                                (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        (0, r.jsx)(l.Text, {
                                            className: W.overlayText,
                                            variant: 'text-sm/medium',
                                            color: 'always-white',
                                            children: (0, y.P9)(ed)
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
            if (Q !== F.y0.FULL_SIZE) return null;
            let e = (e) => {
                    e.stopPropagation(), null == ea || ea({ action: 'OPEN_VOICE_CHANNEL' }), en.isGuildStageVoice() ? (0, I.Cq)(en) : (c.default.selectVoiceChannel(en.id), (0, v.Kh)(en.id)), null == q || q();
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
                                text: Z.NW.formatToPlainString(Z.t['hq/Qzc'], { guildName: et.name }),
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
            Q === F.y0.FULL_SIZE
                ? null
                : (0, r.jsx)(j.Z, {
                      user: t,
                      guild: et,
                      channel: en,
                      onAction: ea,
                      onClose: q
                  }),
        eb = () =>
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
        children: (0, r.jsxs)(x.Z, {
            ref: es,
            className: z,
            onAction: ea,
            onClose: q,
            children: [
                (0, r.jsx)(M.Z, {
                    text: null != ei ? Z.NW.formatToPlainString(Z.t['4CQq9f'], { name: ei.name }) : Z.NW.string(Z.t['Jpkr/v']),
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
                            children: [em(), eg(), Q === F.y0.FULL_SIZE && eb()]
                        }),
                        eE()
                    ]
                }),
                Q !== F.y0.FULL_SIZE && eb()
            ]
        })
    });
}
