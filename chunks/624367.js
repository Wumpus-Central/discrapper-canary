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
    let { applicationId: C, customId: I, referrerId: S, embedUrl: P } = e,
        { analyticsLocations: T } = (0, c.ZP)(s.Z.ACTIVITY_BOOKMARK),
        [A] = (0, _.Z)([C]),
        w = (0, a.e7)([b.Z], () => {
            var e;
            return null !== (e = b.Z.getGuildId()) && void 0 !== e ? e : void 0;
        }),
        Z = null == A ? void 0 : null === (t = A.bot) || void 0 === t ? void 0 : t.id,
        k = null != A && (0, d.ye)(A),
        R = (0, x.ZP)(null !== (o = null == A ? void 0 : A.maxParticipants) && void 0 !== o ? o : 0),
        L = (0, O.Z)({
            applicationId: C,
            size: N,
            names: ['embedded_cover']
        }),
        D = null !== (v = null == A ? void 0 : A.id) && void 0 !== v ? v : '0',
        M = (0, y.TK)(D, (0, p.PL)(!0, !1)),
        W = (0, y.TK)(D, (0, p.LD)(w, !1)),
        F = async () => {
            if (null != Z && (null == A ? void 0 : A.id) != null)
                try {
                    await (0, u.W)({
                        appId: A.id,
                        botId: Z,
                        analyticsLocations: T,
                        customId: I,
                        referrerId: S
                    });
                } catch (e) {}
        },
        { enabled: U } = h.G.useExperiment({ location: 'ActivityBookmarkEmbed' });
    return null == A || !1 === k
        ? null
        : U
          ? (0, r.jsx)(c.Gt, {
                value: T,
                children: (0, r.jsx)(g.O, {
                    app: A,
                    embedUrl: P,
                    linkType: g.U.ACTIVITY,
                    activityCustomId: I,
                    activityReferrerId: S
                })
            })
          : (0, r.jsx)(c.Gt, {
                value: T,
                children: (0, r.jsxs)('div', {
                    className: j.container,
                    children: [
                        (0, r.jsx)('div', {
                            className: j.imgContainer,
                            children: (0, r.jsx)('img', {
                                className: j.img,
                                alt: A.name,
                                src: L.url
                            })
                        }),
                        (0, r.jsxs)('div', {
                            className: j.content,
                            children: [
                                (0, r.jsx)(l.X6q, {
                                    className: j.heading,
                                    variant: 'heading-xl/semibold',
                                    children: A.name
                                }),
                                (0, r.jsx)(l.X6q, {
                                    className: j.description,
                                    variant: 'heading-sm/medium',
                                    children: null === (n = A.description) || void 0 === n ? void 0 : n.trim()
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
                                                    children: R
                                                })
                                            ]
                                        }),
                                        (0, r.jsxs)('div', {
                                            className: j.buttonWrapper,
                                            children: [
                                                null != A &&
                                                    (0, r.jsx)(l.zxk, {
                                                        onClick: () => {
                                                            var e;
                                                            null != A &&
                                                                (i.Y.USER_INSTALL in (null !== (e = A.integrationTypesConfig) && void 0 !== e ? e : {}) || M || W
                                                                    ? (0, d.X)(A.id)
                                                                    : (0, f.dx)({
                                                                          guildId: w,
                                                                          view: m.eN.APPLICATION,
                                                                          applicationId: A.id,
                                                                          entrypoint: { name: m.n3.OAUTH2_EMBED }
                                                                      }));
                                                        },
                                                        className: j.button,
                                                        color: l.Ttl.PRIMARY,
                                                        children: E.NW.string(E.t.fbcCzc)
                                                    }),
                                                (0, r.jsx)(l.zxk, {
                                                    onClick: F,
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
