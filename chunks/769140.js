r.d(n, {
    Z: function () {
        return q;
    }
});
var i = r(47120);
var a = r(200651),
    s = r(192379),
    o = r(120356),
    l = r.n(o),
    u = r(442837),
    c = r(481060),
    d = r(287734),
    f = r(872810),
    _ = r(110924),
    h = r(833664),
    p = r(579630),
    m = r(100527),
    g = r(906732),
    E = r(750881),
    v = r(194082),
    I = r(318374),
    T = r(449605),
    b = r(102172),
    y = r(359110),
    S = r(769654),
    A = r(922482),
    N = r(592125),
    C = r(430824),
    R = r(496675),
    O = r(158776),
    D = r(699516),
    L = r(938475),
    x = r(626135),
    w = r(960870),
    P = r(139793),
    M = r(652853),
    k = r(336383),
    U = r(194811),
    B = r(373826),
    G = r(315324),
    Z = r(599864),
    F = r(670451),
    V = r(228168),
    j = r(981631),
    H = r(388032),
    Y = r(249942),
    W = r(22481),
    K = r(924482),
    z = r(774797);
function q(e) {
    let { user: n, currentUser: r, stream: i, className: o, onClose: q } = e,
        { profileType: Q, theme: X } = (0, M.z)(),
        J = {
            [W.fullSize]: Q === V.y0.FULL_SIZE,
            [Y.fullSize]: Q === V.y0.FULL_SIZE
        },
        { enabled: $, analyticsEligible: ee } = (0, E.R4)('user-profile-stream-activity-card-web'),
        { analyticsLocations: et } = (0, g.ZP)(m.Z.USER_PROFILE_LIVE_ACTIVITY_CARD),
        en = (0, w.Z)({
            display: 'live',
            user: n,
            stream: i,
            analyticsLocations: et
        }),
        er = (0, P.Z)({
            userId: n.id,
            onAction: en
        }),
        ei = (0, u.e7)([C.Z], () => C.Z.getGuild(null == i ? void 0 : i.guildId)),
        ea = (0, u.e7)([N.Z], () => N.Z.getChannel(null == i ? void 0 : i.channelId)),
        es = (0, u.Wu)([L.ZP], () =>
            null != ea
                ? L.ZP.getVoiceStatesForChannel(ea).map((e) => {
                      let { user: n } = e;
                      return n;
                  })
                : []
        ),
        eo = (0, u.e7)([O.Z], () => O.Z.findActivity(n.id, (e) => (0, h.Z)(e) && !(0, p.Z)(e))),
        [el, eu] = (0, b.wq)(ea),
        { previewUrl: ec, isLoading: ed } = (0, T.Z)(null == i ? void 0 : i.guildId, null == i ? void 0 : i.channelId, null == i ? void 0 : i.ownerId),
        ef = (0, u.e7)([R.Z], () => null != ea && R.Z.canBasicChannel(j.S7T.CONNECT, ea)),
        e_ = (0, u.e7)([D.Z], () => D.Z.getRelationshipType(n.id));
    s.useEffect(() => {
        if (ee) {
            var e;
            x.default.track(j.rMx.USER_VOICE_ACTIVITY_VIEWED, {
                activity_user_id: n.id,
                discoverable: null === (e = i.discoverable) || void 0 === e || e,
                surface: 'user-profile-stream-activity-card',
                relationship_type: e_,
                treatment: $ && !1 === i.discoverable ? E.h9.HIDE : E.h9.SHOW
            });
        }
    }, [n, e_, $, ee, i]);
    let eh = (0, _.Z)(ed ? null : ec),
        ep = ed || null == ec ? eh : ec;
    if (null == ei || null == ea || ($ && !1 === i.discoverable)) return null;
    let em = () => {
            let e = l()(W.preview, J),
                n = () => {
                    en({ action: 'PRESS_IMAGE' }), d.default.selectVoiceChannel(i.channelId), (0, f.iV)(i), null == q || q();
                };
            return null == ep && ed
                ? (0, a.jsx)('div', {
                      className: e,
                      children: (0, a.jsx)(c.Spinner, {})
                  })
                : null == ep
                  ? (0, a.jsxs)(c.Clickable, {
                        className: l()(e, W.overlay, { [W.clickable]: el }),
                        onClick: el ? n : void 0,
                        children: [
                            (0, a.jsx)('img', {
                                alt: '',
                                src: X === j.BRd.LIGHT ? z : K
                            }),
                            Q !== V.y0.FULL_SIZE &&
                                (0, a.jsxs)(a.Fragment, {
                                    children: [
                                        (0, a.jsx)(c.Text, {
                                            className: W.overlayText,
                                            variant: 'text-sm/medium',
                                            color: 'always-white',
                                            children: (0, b.P9)(eu)
                                        }),
                                        (0, a.jsx)(c.Text, {
                                            variant: 'text-sm/medium',
                                            children: ef ? H.intl.string(H.t.uQZTBQ) : H.intl.string(H.t.pgUTZG)
                                        })
                                    ]
                                })
                        ]
                    })
                  : (0, a.jsxs)(c.Clickable, {
                        className: l()(e, W.overlay, { [W.clickable]: el }),
                        onClick: el ? n : void 0,
                        children: [
                            (0, a.jsx)('img', {
                                alt: '',
                                src: ep,
                                className: W.image
                            }),
                            Q !== V.y0.FULL_SIZE &&
                                (0, a.jsxs)(a.Fragment, {
                                    children: [
                                        (0, a.jsx)(c.Text, {
                                            className: W.overlayText,
                                            variant: 'text-sm/medium',
                                            color: 'always-white',
                                            children: (0, b.P9)(eu)
                                        }),
                                        (0, a.jsx)(c.ClydeIcon, {
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
            if (Q !== V.y0.FULL_SIZE) return null;
            let e = ea.isGuildStageVoice(),
                r = e ? c.StageIcon : c.VoiceNormalIcon,
                i = () => {
                    null == en || en({ action: 'OPEN_VOICE_CHANNEL' }), e ? (0, A.Cq)(ea) : (d.default.selectVoiceChannel(ea.id), (0, y.Kh)(ea.id)), null == q || q();
                },
                s = () => {
                    en({ action: 'OPEN_VOICE_GUILD' }), (0, S.X)(ei.id), null == q || q();
                };
            return (0, a.jsxs)('div', {
                className: Y.details,
                children: [
                    (0, a.jsxs)('div', {
                        children: [
                            (0, a.jsxs)(c.Heading, {
                                variant: 'heading-sm/semibold',
                                color: 'text-normal',
                                className: Y.voiceChannelHeading,
                                children: [
                                    (0, a.jsx)(r, {
                                        size: 'xxs',
                                        color: c.tokens.colors.TEXT_NORMAL,
                                        className: Y.voiceIcon
                                    }),
                                    (0, a.jsx)(c.Clickable, {
                                        className: l()(Y.clickableText, Y.inline),
                                        onClick: i,
                                        children: ea.name
                                    })
                                ]
                            }),
                            (0, a.jsx)(B.Z, {
                                variant: 'text-xs/normal',
                                text: H.intl.formatToPlainString(H.t['hq/Qzc'], { guildName: ei.name }),
                                onClick: s
                            })
                        ]
                    }),
                    (0, a.jsx)(I.Z, {
                        users: es,
                        guildId: ei.id,
                        channelId: ea.id,
                        maxUsers: G.W,
                        size: c.AvatarSizes.SIZE_16,
                        disableUserPopout: (e) => e === n.id,
                        overflowCountVariant: 'text-xxs/semibold',
                        overflowCountColor: 'text-muted'
                    })
                ]
            });
        },
        eE = () =>
            Q === V.y0.FULL_SIZE
                ? null
                : (0, a.jsx)(G.Z, {
                      user: n,
                      guild: ei,
                      channel: ea,
                      onAction: en,
                      onClose: q
                  }),
        ev = () =>
            n.id === r.id
                ? null
                : (0, a.jsx)('div', {
                      className: l()(Y.actions, J),
                      children: (0, a.jsx)(Z.Z, {
                          channel: ea,
                          onAction: en,
                          onClose: q
                      })
                  });
    return (0, a.jsx)(g.Gt, {
        value: et,
        children: (0, a.jsxs)(k.Z, {
            ref: er,
            className: o,
            onAction: en,
            onClose: q,
            children: [
                (0, a.jsx)(U.Z, {
                    text: null != eo ? H.intl.formatToPlainString(H.t['4CQq9f'], { name: eo.name }) : H.intl.string(H.t['Jpkr/v']),
                    tags: (0, a.jsx)(v.ZP, { size: v.OH.SMALL }),
                    contextMenu: (0, a.jsx)(F.Z, {
                        display: 'live',
                        user: n,
                        onClose: q
                    })
                }),
                (0, a.jsxs)('div', {
                    className: Y.body,
                    children: [
                        (0, a.jsxs)('div', {
                            className: l()(Y.content, J),
                            children: [em(), eg(), Q === V.y0.FULL_SIZE && ev()]
                        }),
                        eE()
                    ]
                }),
                Q !== V.y0.FULL_SIZE && ev()
            ]
        })
    });
}
