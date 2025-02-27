n.d(t, { Z: () => C }), n(47120), n(266796), n(566702);
var r = n(200651);
n(192379);
var i = n(373793),
    a = n(399606),
    o = n(477690),
    l = n(481060),
    s = n(100527),
    c = n(906732),
    d = n(783097),
    u = n(606192),
    p = n(213459),
    m = n(132871),
    f = n(147890),
    h = n(321231),
    g = n(230171),
    _ = n(835473),
    b = n(914010),
    v = n(624138),
    y = n(135431),
    x = n(147865),
    O = n(778569),
    E = n(388032),
    j = n(739299);
let N = (0, v.Mg)(o.Z.ACTIVITY_BOOKMARK_EMBED_IMAGE_WIDTH);
function C(e) {
    var t, n, o, v;
    let { applicationId: C, customId: I, referrerId: S, embedUrl: T, linkId: P } = e,
        { analyticsLocations: A } = (0, c.ZP)(s.Z.ACTIVITY_BOOKMARK),
        [w] = (0, _.Z)([C]),
        Z = (0, a.e7)([b.Z], () => {
            var e;
            return null !== (e = b.Z.getGuildId()) && void 0 !== e ? e : void 0;
        }),
        k = null == w ? void 0 : null === (t = w.bot) || void 0 === t ? void 0 : t.id,
        R = null != w && (0, d.ye)(w),
        L = (0, x.ZP)(null !== (o = null == w ? void 0 : w.maxParticipants) && void 0 !== o ? o : 0),
        D = (0, O.Z)({
            applicationId: C,
            size: N,
            names: ['embedded_cover']
        }),
        M = null !== (v = null == w ? void 0 : w.id) && void 0 !== v ? v : '0',
        W = (0, y.TK)(M, (0, p.PL)(!0, !1)),
        F = (0, y.TK)(M, (0, p.LD)(Z, !1)),
        U = async () => {
            if (null != k && (null == w ? void 0 : w.id) != null)
                try {
                    await (0, u.W)({
                        appId: w.id,
                        botId: k,
                        analyticsLocations: A,
                        customId: I,
                        referrerId: S
                    });
                } catch (e) {}
        },
        { enabled: B } = h.G.useExperiment({ location: 'ActivityBookmarkEmbed' });
    return null == w || !1 === R
        ? null
        : B
          ? (0, r.jsx)(c.Gt, {
                value: A,
                children: (0, r.jsx)(g.O, {
                    app: w,
                    embedUrl: T,
                    linkType: g.U.ACTIVITY,
                    activityCustomId: I,
                    activityReferrerId: S,
                    linkId: P
                })
            })
          : (0, r.jsx)(c.Gt, {
                value: A,
                children: (0, r.jsxs)('div', {
                    className: j.container,
                    children: [
                        (0, r.jsx)('div', {
                            className: j.imgContainer,
                            children: (0, r.jsx)('img', {
                                className: j.img,
                                alt: w.name,
                                src: D.url
                            })
                        }),
                        (0, r.jsxs)('div', {
                            className: j.content,
                            children: [
                                (0, r.jsx)(l.X6q, {
                                    className: j.heading,
                                    variant: 'heading-xl/semibold',
                                    children: w.name
                                }),
                                (0, r.jsx)(l.X6q, {
                                    className: j.description,
                                    variant: 'heading-sm/medium',
                                    children: null === (n = w.description) || void 0 === n ? void 0 : n.trim()
                                }),
                                (0, r.jsxs)('div', {
                                    className: j.cta,
                                    children: [
                                        (0, r.jsxs)('div', {
                                            className: j.maxParticipants,
                                            children: [
                                                (0, r.jsx)(l.BFJ, {
                                                    size: 'md',
                                                    color: 'currentColor',
                                                    className: j.peopleIcon
                                                }),
                                                (0, r.jsx)(l.Text, {
                                                    variant: 'text-xs/semibold',
                                                    children: L
                                                })
                                            ]
                                        }),
                                        (0, r.jsxs)('div', {
                                            className: j.buttonWrapper,
                                            children: [
                                                null != w &&
                                                    (0, r.jsx)(l.zxk, {
                                                        onClick: () => {
                                                            var e;
                                                            null != w &&
                                                                (i.Y.USER_INSTALL in (null !== (e = w.integrationTypesConfig) && void 0 !== e ? e : {}) || W || F
                                                                    ? (0, d.X)(w.id)
                                                                    : (0, f.dx)({
                                                                          guildId: Z,
                                                                          view: m.eN.APPLICATION,
                                                                          applicationId: w.id,
                                                                          entrypoint: { name: m.n3.OAUTH2_EMBED }
                                                                      }));
                                                        },
                                                        className: j.button,
                                                        color: l.Ttl.PRIMARY,
                                                        children: E.NW.string(E.t.fbcCzc)
                                                    }),
                                                (0, r.jsx)(l.zxk, {
                                                    onClick: U,
                                                    className: j.button,
                                                    color: l.Ttl.GREEN,
                                                    children: E.NW.string(E.t.RscU7O)
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
