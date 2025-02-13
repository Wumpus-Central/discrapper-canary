n.d(t, { Z: () => z }), n(47120);
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
    T = n(769654),
    b = n(922482),
    S = n(592125),
    A = n(430824),
    N = n(496675),
    C = n(158776),
    R = n(699516),
    O = n(938475),
    D = n(626135),
    L = n(960870),
    x = n(139793),
    P = n(652853),
    w = n(336383),
    M = n(194811),
    k = n(373826),
    U = n(315324),
    G = n(788858),
    B = n(599864),
    Z = n(670451),
    F = n(228168),
    V = n(981631),
    j = n(388032),
    H = n(537208),
    Y = n(731098),
    W = n(924482),
    K = n(774797);
function z(e) {
    let { user: t, currentUser: n, stream: a, className: z, onClose: q } = e,
        { profileType: Q, theme: X } = (0, P.z)(),
        J = {
            [Y.fullSize]: Q === F.y0.FULL_SIZE,
            [H.fullSize]: Q === F.y0.FULL_SIZE
        },
        { enabled: $, analyticsEligible: ee } = (0, m.R4)('user-profile-stream-activity-card-web'),
        et = (0, o.e7)([A.Z], () => A.Z.getGuild(null == a ? void 0 : a.guildId)),
        en = (0, o.e7)([S.Z], () => S.Z.getChannel(null == a ? void 0 : a.channelId)),
        ei = (0, o.Wu)([O.ZP], () =>
            null != en
                ? O.ZP.getVoiceStatesForChannel(en).map((e) => {
                      let { user: t } = e;
                      return t;
                  })
                : []
        ),
        er = (0, o.e7)([C.Z], () => C.Z.findActivity(t.id, (e) => (0, f.Z)(e) && !(0, _.Z)(e))),
        { analyticsLocations: ea } = (0, h.ZP)(p.Z.USER_PROFILE_LIVE_ACTIVITY_CARD),
        es = (0, L.Z)({
            display: 'live',
            voiceChannelId: null == en ? void 0 : en.id,
            user: t,
            stream: a,
            analyticsLocations: ea
        }),
        eo = (0, x.Z)({
            userId: t.id,
            onAction: es
        }),
        { previewUrl: el, isLoading: eu } = (0, v.Z)(null == a ? void 0 : a.guildId, null == a ? void 0 : a.channelId, null == a ? void 0 : a.ownerId),
        [ec, ed] = (0, y.wq)(en),
        ef = (0, o.e7)([N.Z], () => null != en && N.Z.canBasicChannel(V.S7T.CONNECT, en)),
        e_ = (0, o.e7)([R.Z], () => R.Z.getRelationshipType(t.id));
    r.useEffect(() => {
        if (ee) {
            var e;
            D.default.track(V.rMx.USER_VOICE_ACTIVITY_VIEWED, {
                activity_user_id: t.id,
                discoverable: null === (e = a.discoverable) || void 0 === e || e,
                surface: 'user-profile-stream-activity-card',
                relationship_type: e_,
                treatment: $ && !1 === a.discoverable ? m.h9.HIDE : m.h9.SHOW
            });
        }
    }, [t, e_, $, ee, a]);
    let ep = (0, d.Z)(eu ? null : el),
        eh = eu || null == el ? ep : el;
    if (null == et || null == en || ($ && !1 === a.discoverable)) return null;
    let em = () => {
            let e = s()(Y.preview, J),
                t = (e) => {
                    e.stopPropagation(), es({ action: 'PRESS_IMAGE' }), u.default.selectVoiceChannel(a.channelId), (0, c.iV)(a), null == q || q();
                };
            return null == eh && eu
                ? (0, i.jsx)('div', {
                      className: e,
                      children: (0, i.jsx)(l.$jN, {})
                  })
                : null == eh
                  ? (0, i.jsxs)(l.P3F, {
                        className: s()(e, Y.overlay, { [Y.clickable]: ec }),
                        onClick: ec ? t : void 0,
                        children: [
                            (0, i.jsx)('img', {
                                alt: '',
                                src: X === V.BRd.LIGHT ? K : W
                            }),
                            Q !== F.y0.FULL_SIZE &&
                                (0, i.jsxs)(i.Fragment, {
                                    children: [
                                        (0, i.jsx)(l.Text, {
                                            className: Y.overlayText,
                                            variant: 'text-sm/medium',
                                            color: 'always-white',
                                            children: (0, y.P9)(ed)
                                        }),
                                        (0, i.jsx)(l.Text, {
                                            variant: 'text-sm/medium',
                                            children: ef ? j.intl.string(j.t.uQZTBQ) : j.intl.string(j.t.pgUTZG)
                                        })
                                    ]
                                })
                        ]
                    })
                  : (0, i.jsxs)(l.P3F, {
                        className: s()(e, Y.overlay, { [Y.clickable]: ec }),
                        onClick: ec ? t : void 0,
                        children: [
                            (0, i.jsx)('img', {
                                alt: '',
                                src: eh,
                                className: Y.image
                            }),
                            Q !== F.y0.FULL_SIZE &&
                                (0, i.jsxs)(i.Fragment, {
                                    children: [
                                        (0, i.jsx)(l.Text, {
                                            className: Y.overlayText,
                                            variant: 'text-sm/medium',
                                            color: 'always-white',
                                            children: (0, y.P9)(ed)
                                        }),
                                        (0, i.jsx)(l.gw7, {
                                            size: 'xs',
                                            color: 'currentColor',
                                            className: Y.clyde
                                        })
                                    ]
                                })
                        ]
                    });
        },
        eg = () => {
            if (Q !== F.y0.FULL_SIZE) return null;
            let e = (e) => {
                    e.stopPropagation(), null == es || es({ action: 'OPEN_VOICE_CHANNEL' }), en.isGuildStageVoice() ? (0, b.Cq)(en) : (u.default.selectVoiceChannel(en.id), (0, I.Kh)(en.id)), null == q || q();
                },
                n = (e) => {
                    e.stopPropagation(), es({ action: 'OPEN_VOICE_GUILD' }), (0, T.X)(et.id), null == q || q();
                };
            return (0, i.jsxs)('div', {
                className: H.details,
                children: [
                    (0, i.jsxs)('div', {
                        children: [
                            (0, i.jsxs)(l.X6q, {
                                variant: 'heading-sm/semibold',
                                color: 'text-normal',
                                className: H.voiceChannelHeading,
                                children: [
                                    (0, i.jsx)(G.Z, {
                                        channel: en,
                                        size: 'xxs',
                                        color: l.TVs.colors.TEXT_NORMAL,
                                        className: H.voiceIcon
                                    }),
                                    (0, i.jsx)(l.P3F, {
                                        className: s()(H.clickableText, H.inline),
                                        onClick: e,
                                        children: en.name
                                    })
                                ]
                            }),
                            (0, i.jsx)(k.Z, {
                                variant: 'text-xs/normal',
                                text: j.intl.formatToPlainString(j.t['hq/Qzc'], { guildName: et.name }),
                                onClick: n
                            })
                        ]
                    }),
                    (0, i.jsx)(E.Z, {
                        users: ei,
                        guildId: et.id,
                        channelId: en.id,
                        maxUsers: U.W,
                        size: l.EFr.SIZE_16,
                        onClick: (e) => {
                            e.stopPropagation(), null == es || es({ action: 'PRESS_VOICE_CHANNEL_AVATARS' });
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
                : (0, i.jsx)(U.Z, {
                      user: t,
                      guild: et,
                      channel: en,
                      onAction: es,
                      onClose: q
                  }),
        ev = () =>
            t.id === n.id
                ? null
                : (0, i.jsx)('div', {
                      className: s()(H.actions, J),
                      children: (0, i.jsx)(B.Z, {
                          channel: en,
                          onAction: es,
                          onClose: q
                      })
                  });
    return (0, i.jsx)(h.Gt, {
        value: ea,
        children: (0, i.jsxs)(w.Z, {
            ref: eo,
            className: z,
            onAction: es,
            onClose: q,
            children: [
                (0, i.jsx)(M.Z, {
                    text: null != er ? j.intl.formatToPlainString(j.t['4CQq9f'], { name: er.name }) : j.intl.string(j.t['Jpkr/v']),
                    tags: (0, i.jsx)(g.ZP, { size: g.OH.SMALL }),
                    contextMenu: (0, i.jsx)(Z.Z, {
                        display: 'live',
                        user: t,
                        onClose: q
                    })
                }),
                (0, i.jsxs)('div', {
                    className: H.body,
                    children: [
                        (0, i.jsxs)('div', {
                            className: s()(H.content, J),
                            children: [em(), eg(), Q === F.y0.FULL_SIZE && ev()]
                        }),
                        eE()
                    ]
                }),
                Q !== F.y0.FULL_SIZE && ev()
            ]
        })
    });
}
