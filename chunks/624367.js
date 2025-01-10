n.d(t, {
    Z: function () {
        return j;
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
    I = n(591759),
    x = n(135431),
    N = n(147865),
    v = n(778569),
    T = n(981631),
    S = n(388032),
    A = n(258858);
let b = (0, C.Mg)(a.Z.ACTIVITY_BOOKMARK_EMBED_IMAGE_WIDTH);
function j(e) {
    var t, n, a, C;
    let { applicationId: j, customId: R, referrerId: Z } = e,
        { analyticsLocations: P } = (0, c.ZP)(s.Z.ACTIVITY_BOOKMARK),
        [L] = (0, g.Z)([j]),
        y = (0, l.e7)([E.Z], () => {
            var e;
            return null !== (e = E.Z.getGuildId()) && void 0 !== e ? e : void 0;
        }),
        O = null == L ? void 0 : null === (t = L.bot) || void 0 === t ? void 0 : t.id,
        M = null != L && (0, u.ye)(L),
        k = (0, N.ZP)(null !== (a = null == L ? void 0 : L.maxParticipants) && void 0 !== a ? a : 0),
        D = (0, v.Z)({
            applicationId: j,
            size: b,
            names: ['embedded_cover']
        }),
        B = null !== (C = null == L ? void 0 : L.id) && void 0 !== C ? C : '0',
        U = (0, x.TK)(B, (0, m.PL)(!0, !1)),
        w = (0, x.TK)(B, (0, m.LD)(y, !1)),
        F = async () => {
            if (null != O && (null == L ? void 0 : L.id) != null)
                try {
                    await (0, d.W)({
                        appId: L.id,
                        botId: O,
                        analyticsLocations: P,
                        customId: R,
                        referrerId: Z
                    });
                } catch (e) {}
        },
        { enabled: G } = p.G.useExperiment({ location: 'ActivityBookmarkEmbed' });
    if (null == L || !1 === M) return null;
    if (G) {
        let e = I.Z.makeUrl(T.Z5c.ACTIVITY_DETAILS(L.id));
        return (0, i.jsx)(c.Gt, {
            value: P,
            children: (0, i.jsx)(_.O, {
                app: L,
                embedUrl: e,
                activityCustomId: R,
                activityReferrerId: Z
            })
        });
    }
    return (0, i.jsx)(c.Gt, {
        value: P,
        children: (0, i.jsxs)('div', {
            className: A.container,
            children: [
                (0, i.jsx)('div', {
                    className: A.imgContainer,
                    children: (0, i.jsx)('img', {
                        className: A.img,
                        alt: L.name,
                        src: D.url
                    })
                }),
                (0, i.jsxs)('div', {
                    className: A.content,
                    children: [
                        (0, i.jsx)(o.Heading, {
                            className: A.heading,
                            variant: 'heading-xl/semibold',
                            children: L.name
                        }),
                        (0, i.jsx)(o.Heading, {
                            className: A.description,
                            variant: 'heading-sm/medium',
                            children: null === (n = L.description) || void 0 === n ? void 0 : n.trim()
                        }),
                        (0, i.jsxs)('div', {
                            className: A.cta,
                            children: [
                                (0, i.jsxs)('div', {
                                    className: A.maxParticipants,
                                    children: [
                                        (0, i.jsx)(o.GroupIcon, {
                                            size: 'md',
                                            color: 'currentColor',
                                            className: A.peopleIcon
                                        }),
                                        (0, i.jsx)(o.Text, {
                                            variant: 'text-xs/semibold',
                                            children: k
                                        })
                                    ]
                                }),
                                (0, i.jsxs)('div', {
                                    className: A.buttonWrapper,
                                    children: [
                                        null != L &&
                                            (0, i.jsx)(o.Button, {
                                                onClick: () => {
                                                    var e;
                                                    if (null == L) return;
                                                    let t = U || w;
                                                    r.Y.USER_INSTALL in (null !== (e = L.integrationTypesConfig) && void 0 !== e ? e : {}) || t
                                                        ? (0, u.X)(L.id)
                                                        : (0, f.goToAppDirectory)({
                                                              guildId: y,
                                                              view: h.ApplicationDirectoryViews.APPLICATION,
                                                              applicationId: L.id,
                                                              entrypoint: { name: h.ApplicationDirectoryEntrypointNames.OAUTH2_EMBED }
                                                          });
                                                },
                                                className: A.button,
                                                color: o.ButtonColors.PRIMARY,
                                                children: S.intl.string(S.t.fbcCzc)
                                            }),
                                        (0, i.jsx)(o.Button, {
                                            onClick: F,
                                            className: A.button,
                                            color: o.ButtonColors.GREEN,
                                            children: S.intl.string(S.t.RscU7O)
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
