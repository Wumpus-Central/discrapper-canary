n.d(t, { Z: () => b }), n(47120);
var i = n(200651);
n(192379);
var l = n(373793),
    a = n(399606),
    r = n(477690),
    s = n(481060),
    o = n(100527),
    c = n(906732),
    d = n(783097),
    u = n(606192),
    m = n(213459),
    _ = n(132871),
    h = n(147890),
    p = n(321231),
    g = n(230171),
    f = n(835473),
    x = n(914010),
    C = n(624138),
    v = n(135431),
    E = n(147865),
    I = n(778569),
    N = n(388032),
    S = n(258858);
let T = (0, C.Mg)(r.Z.ACTIVITY_BOOKMARK_EMBED_IMAGE_WIDTH);
function b(e) {
    var t, n, r, C;
    let { applicationId: b, customId: A, referrerId: j, embedUrl: y } = e,
        { analyticsLocations: Z } = (0, c.ZP)(o.Z.ACTIVITY_BOOKMARK),
        [R] = (0, f.Z)([b]),
        L = (0, a.e7)([x.Z], () => {
            var e;
            return null !== (e = x.Z.getGuildId()) && void 0 !== e ? e : void 0;
        }),
        P = null == R ? void 0 : null === (t = R.bot) || void 0 === t ? void 0 : t.id,
        k = null != R && (0, d.ye)(R),
        M = (0, E.ZP)(null !== (r = null == R ? void 0 : R.maxParticipants) && void 0 !== r ? r : 0),
        O = (0, I.Z)({
            applicationId: b,
            size: T,
            names: ['embedded_cover']
        }),
        D = null !== (C = null == R ? void 0 : R.id) && void 0 !== C ? C : '0',
        w = (0, v.TK)(D, (0, m.PL)(!0, !1)),
        F = (0, v.TK)(D, (0, m.LD)(L, !1)),
        U = async () => {
            if (null != P && (null == R ? void 0 : R.id) != null)
                try {
                    await (0, u.W)({
                        appId: R.id,
                        botId: P,
                        analyticsLocations: Z,
                        customId: A,
                        referrerId: j
                    });
                } catch (e) {}
        },
        { enabled: B } = p.G.useExperiment({ location: 'ActivityBookmarkEmbed' });
    return null == R || !1 === k
        ? null
        : B
          ? (0, i.jsx)(c.Gt, {
                value: Z,
                children: (0, i.jsx)(g.O, {
                    app: R,
                    embedUrl: y,
                    activityCustomId: A,
                    activityReferrerId: j
                })
            })
          : (0, i.jsx)(c.Gt, {
                value: Z,
                children: (0, i.jsxs)('div', {
                    className: S.container,
                    children: [
                        (0, i.jsx)('div', {
                            className: S.imgContainer,
                            children: (0, i.jsx)('img', {
                                className: S.img,
                                alt: R.name,
                                src: O.url
                            })
                        }),
                        (0, i.jsxs)('div', {
                            className: S.content,
                            children: [
                                (0, i.jsx)(s.X6q, {
                                    className: S.heading,
                                    variant: 'heading-xl/semibold',
                                    children: R.name
                                }),
                                (0, i.jsx)(s.X6q, {
                                    className: S.description,
                                    variant: 'heading-sm/medium',
                                    children: null === (n = R.description) || void 0 === n ? void 0 : n.trim()
                                }),
                                (0, i.jsxs)('div', {
                                    className: S.cta,
                                    children: [
                                        (0, i.jsxs)('div', {
                                            className: S.maxParticipants,
                                            children: [
                                                (0, i.jsx)(s.BFJ, {
                                                    size: 'md',
                                                    color: 'currentColor',
                                                    className: S.peopleIcon
                                                }),
                                                (0, i.jsx)(s.Text, {
                                                    variant: 'text-xs/semibold',
                                                    children: M
                                                })
                                            ]
                                        }),
                                        (0, i.jsxs)('div', {
                                            className: S.buttonWrapper,
                                            children: [
                                                null != R &&
                                                    (0, i.jsx)(s.zxk, {
                                                        onClick: () => {
                                                            var e;
                                                            if (null != R)
                                                                l.Y.USER_INSTALL in (null !== (e = R.integrationTypesConfig) && void 0 !== e ? e : {}) || w || F
                                                                    ? (0, d.X)(R.id)
                                                                    : (0, h.dx)({
                                                                          guildId: L,
                                                                          view: _.eN.APPLICATION,
                                                                          applicationId: R.id,
                                                                          entrypoint: { name: _.n3.OAUTH2_EMBED }
                                                                      });
                                                        },
                                                        className: S.button,
                                                        color: s.Ttl.PRIMARY,
                                                        children: N.intl.string(N.t.fbcCzc)
                                                    }),
                                                (0, i.jsx)(s.zxk, {
                                                    onClick: U,
                                                    className: S.button,
                                                    color: s.Ttl.GREEN,
                                                    children: N.intl.string(N.t.RscU7O)
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            });
}
