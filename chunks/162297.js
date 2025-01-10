n.d(t, {
    Z: function () {
        return k;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    l = n(990547),
    a = n(373793),
    o = n(399606),
    s = n(481060),
    c = n(434650),
    u = n(778569),
    d = n(182906),
    m = n(100527),
    h = n(367907),
    f = n(906732),
    p = n(213609),
    _ = n(783097),
    g = n(606192),
    E = n(213459),
    C = n(132871),
    I = n(147890),
    x = n(220082),
    N = n(240991),
    v = n(592125),
    T = n(496675),
    S = n(944486),
    A = n(914010),
    b = n(768581),
    j = n(135431),
    R = n(728345),
    Z = n(812206),
    P = n(981631),
    L = n(388032),
    y = n(363637),
    O = n(413097),
    M = n(970952);
function k(e) {
    let { applicationId: t } = e,
        [n, l, a] = (0, o.Wu)([Z.Z], () => [Z.Z.getApplication(t), Z.Z.isFetchingApplication(t), Z.Z.didFetchingApplicationFail(t)], [t]);
    return (r.useEffect(() => {
        null == n && !l && !a && R.ZP.fetchApplication(t);
    }, [n, l, a, t]),
    null != n &&
        (0, j.Eb)({
            customInstallUrl: n.customInstallUrl,
            installParams: n.installParams,
            integrationTypesConfig: n.integrationTypesConfig
        }))
        ? (0, i.jsx)(D, { application: n })
        : null;
}
function D(e) {
    var t;
    let { application: n } = e,
        u = null === (t = n.bot) || void 0 === t ? void 0 : t.id,
        d = (0, _.ye)(n) && null != u,
        x = (0, o.e7)([A.Z], () => {
            var e;
            return null !== (e = A.Z.getGuildId()) && void 0 !== e ? e : void 0;
        }),
        {
            iconURL: b,
            name: R,
            description: Z
        } = r.useMemo(
            () =>
                (0, _.sl)(n, {
                    fakeAppIconURL: O,
                    size: 56
                }),
            [n]
        ),
        k = r.useMemo(() => (null != Z ? (0, N.parseBioReact)(Z) : null), [Z]),
        [D, U] = r.useState(!1),
        w = r.useCallback((e) => {
            e && U(!0);
        }, []),
        F = (0, c.O)(w);
    r.useEffect(() => {
        D &&
            (0, p.h)({
                type: l.ImpressionTypes.VIEW,
                name: l.ImpressionNames.APP_OAUTH2_LINK_EMBED,
                properties: { application_id: n.id }
            });
    }, [D, n]);
    let G = (0, j.TK)(n.id, (0, E.PL)(!0, !1)),
        V = (0, j.TK)(n.id, (0, E.LD)(x, !1)),
        H = G || V,
        z = n.isVerified && n.isDiscoverable,
        W = (0, o.e7)([S.Z, v.Z], () => v.Z.getChannel(S.Z.getChannelId())),
        K = (0, o.e7)([T.Z], () => (null == W ? void 0 : W.isPrivate()) || T.Z.can(P.Plq.SEND_MESSAGES, W)),
        { analyticsLocations: Y } = (0, f.ZP)(m.Z.APP_OAUTH2_LINK_EMBED),
        X = async () => {
            if (null != u)
                try {
                    await (0, g.W)({
                        appId: n.id,
                        botId: u,
                        analyticsLocations: Y
                    });
                } catch (e) {}
        };
    return (0, i.jsxs)('div', {
        ref: F,
        className: y.embedContainer,
        children: [
            (0, i.jsx)(B, {
                application: n,
                iconUrl: b
            }),
            (0, i.jsx)('img', {
                className: y.icon,
                alt: n.name,
                src: null != b ? b : M,
                'aria-hidden': !0,
                draggable: !1
            }),
            (0, i.jsxs)('div', {
                className: y.body,
                children: [
                    (0, i.jsxs)('div', {
                        className: y.details,
                        children: [
                            (0, i.jsx)(s.Heading, {
                                variant: 'heading-lg/bold',
                                color: 'interactive-active',
                                children: R
                            }),
                            null != k &&
                                (0, i.jsx)(s.Text, {
                                    variant: 'text-sm/normal',
                                    color: 'text-normal',
                                    children: k
                                })
                        ]
                    }),
                    (0, i.jsxs)('div', {
                        className: y.buttonContainer,
                        children: [
                            d &&
                                (0, i.jsx)(s.Button, {
                                    color: s.Button.Colors.BRAND,
                                    type: 'button',
                                    size: s.Button.Sizes.MEDIUM,
                                    onClick: X,
                                    children: L.intl.string(L.t.RscU7O)
                                }),
                            (H || z) &&
                                K &&
                                (0, i.jsx)(s.Button, {
                                    color: d ? s.Button.Colors.PRIMARY : s.Button.Colors.BRAND,
                                    type: 'button',
                                    size: s.Button.Sizes.MEDIUM,
                                    onClick: () => {
                                        var e;
                                        a.Y.USER_INSTALL in (null !== (e = n.integrationTypesConfig) && void 0 !== e ? e : {}) || H
                                            ? (0, _.X)(n.id)
                                            : (0, I.goToAppDirectory)({
                                                  guildId: x,
                                                  view: C.ApplicationDirectoryViews.APPLICATION,
                                                  applicationId: n.id,
                                                  entrypoint: { name: C.ApplicationDirectoryEntrypointNames.OAUTH2_EMBED }
                                              });
                                    },
                                    children: L.intl.string(L.t.fbcCzc)
                                }),
                            !d &&
                                !H &&
                                (0, i.jsx)(s.Button, {
                                    color: s.Button.Colors.PRIMARY,
                                    type: 'button',
                                    size: s.Button.Sizes.MEDIUM,
                                    onClick: () => {
                                        h.ZP.trackWithMetadata(P.rMx.APP_OAUTH2_LINK_EMBED_CTA_CLICKED, { application_id: n.id }),
                                            (0, j.LO)({
                                                applicationId: n.id,
                                                customInstallUrl: n.customInstallUrl,
                                                installParams: n.installParams,
                                                integrationTypesConfig: n.integrationTypesConfig,
                                                guildId: x,
                                                source: 'app_oauth2_link_embed'
                                            });
                                    },
                                    children: L.intl.string(L.t.NgXl3N)
                                })
                        ]
                    })
                ]
            })
        ]
    });
}
function B(e) {
    let { application: t, iconUrl: n } = e,
        r = (0, u.Z)({
            applicationId: t.id,
            size: 280,
            names: ['embedded_cover']
        }),
        l = (0, x.ZP)(n, ''),
        a = t.bot,
        o = null,
        s = {};
    if ((0, _.ye)(t))
        o = (0, i.jsx)(d.Z, {
            imageBackground: r,
            applicationName: t.name,
            imageClassName: y.bannerImage,
            imageNotFoundClassName: y.bannerImage
        });
    else if ((null == a ? void 0 : a.banner) != null) {
        let e = (0, b.aN)({
            id: a.id,
            banner: a.banner,
            size: 280,
            canAnimate: !1
        });
        o = (0, i.jsx)('img', {
            alt: t.name,
            src: e,
            className: y.bannerImage
        });
    } else s = { backgroundColor: l };
    return (0, i.jsx)('div', {
        className: y.banner,
        style: s,
        children: o
    });
}
