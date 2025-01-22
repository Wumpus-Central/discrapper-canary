n.d(t, {
    Z: function () {
        return A;
    }
}),
    n(47120);
var i = n(200651);
n(192379);
var r = n(373793),
    l = n(399606),
    a = n(477690),
    o = n(481060),
    s = n(100527),
    c = n(906732),
    u = n(783097),
    d = n(606192),
    m = n(213459),
    h = n(132871),
    f = n(147890),
    p = n(321231),
    _ = n(230171),
    g = n(835473),
    E = n(914010),
    C = n(624138),
    I = n(135431),
    x = n(147865),
    N = n(778569),
    v = n(388032),
    T = n(258858);
let S = (0, C.Mg)(a.Z.ACTIVITY_BOOKMARK_EMBED_IMAGE_WIDTH);
function A(e) {
    var t, n, a, C;
    let { applicationId: A, customId: b, referrerId: j, embedUrl: R } = e,
        { analyticsLocations: Z } = (0, c.ZP)(s.Z.ACTIVITY_BOOKMARK),
        [P] = (0, g.Z)([A]),
        L = (0, l.e7)([E.Z], () => {
            var e;
            return null !== (e = E.Z.getGuildId()) && void 0 !== e ? e : void 0;
        }),
        y = null == P ? void 0 : null === (t = P.bot) || void 0 === t ? void 0 : t.id,
        O = null != P && (0, u.ye)(P),
        M = (0, x.ZP)(null !== (a = null == P ? void 0 : P.maxParticipants) && void 0 !== a ? a : 0),
        D = (0, N.Z)({
            applicationId: A,
            size: S,
            names: ['embedded_cover']
        }),
        k = null !== (C = null == P ? void 0 : P.id) && void 0 !== C ? C : '0',
        U = (0, I.TK)(k, (0, m.PL)(!0, !1)),
        B = (0, I.TK)(k, (0, m.LD)(L, !1)),
        w = async () => {
            if (null != y && (null == P ? void 0 : P.id) != null)
                try {
                    await (0, d.W)({
                        appId: P.id,
                        botId: y,
                        analyticsLocations: Z,
                        customId: b,
                        referrerId: j
                    });
                } catch (e) {}
        },
        { enabled: F } = p.G.useExperiment({ location: 'ActivityBookmarkEmbed' });
    return null == P || !1 === O
        ? null
        : F
          ? (0, i.jsx)(c.Gt, {
                value: Z,
                children: (0, i.jsx)(_.O, {
                    app: P,
                    embedUrl: R,
                    activityCustomId: b,
                    activityReferrerId: j
                })
            })
          : (0, i.jsx)(c.Gt, {
                value: Z,
                children: (0, i.jsxs)('div', {
                    className: T.container,
                    children: [
                        (0, i.jsx)('div', {
                            className: T.imgContainer,
                            children: (0, i.jsx)('img', {
                                className: T.img,
                                alt: P.name,
                                src: D.url
                            })
                        }),
                        (0, i.jsxs)('div', {
                            className: T.content,
                            children: [
                                (0, i.jsx)(o.Heading, {
                                    className: T.heading,
                                    variant: 'heading-xl/semibold',
                                    children: P.name
                                }),
                                (0, i.jsx)(o.Heading, {
                                    className: T.description,
                                    variant: 'heading-sm/medium',
                                    children: null === (n = P.description) || void 0 === n ? void 0 : n.trim()
                                }),
                                (0, i.jsxs)('div', {
                                    className: T.cta,
                                    children: [
                                        (0, i.jsxs)('div', {
                                            className: T.maxParticipants,
                                            children: [
                                                (0, i.jsx)(o.GroupIcon, {
                                                    size: 'md',
                                                    color: 'currentColor',
                                                    className: T.peopleIcon
                                                }),
                                                (0, i.jsx)(o.Text, {
                                                    variant: 'text-xs/semibold',
                                                    children: M
                                                })
                                            ]
                                        }),
                                        (0, i.jsxs)('div', {
                                            className: T.buttonWrapper,
                                            children: [
                                                null != P &&
                                                    (0, i.jsx)(o.Button, {
                                                        onClick: () => {
                                                            var e;
                                                            if (null == P) return;
                                                            let t = U || B;
                                                            r.Y.USER_INSTALL in (null !== (e = P.integrationTypesConfig) && void 0 !== e ? e : {}) || t
                                                                ? (0, u.X)(P.id)
                                                                : (0, f.goToAppDirectory)({
                                                                      guildId: L,
                                                                      view: h.ApplicationDirectoryViews.APPLICATION,
                                                                      applicationId: P.id,
                                                                      entrypoint: { name: h.ApplicationDirectoryEntrypointNames.OAUTH2_EMBED }
                                                                  });
                                                        },
                                                        className: T.button,
                                                        color: o.ButtonColors.PRIMARY,
                                                        children: v.intl.string(v.t.fbcCzc)
                                                    }),
                                                (0, i.jsx)(o.Button, {
                                                    onClick: w,
                                                    className: T.button,
                                                    color: o.ButtonColors.GREEN,
                                                    children: v.intl.string(v.t.RscU7O)
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
