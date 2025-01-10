n.d(t, {
    Z: function () {
        return D;
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
    j = n(585483),
    R = n(135431),
    Z = n(728345),
    P = n(812206),
    L = n(981631),
    y = n(388032),
    O = n(363637),
    M = n(413097),
    k = n(970952);
function D(e) {
    let { applicationId: t } = e,
        [n, l, a] = (0, o.Wu)([P.Z], () => [P.Z.getApplication(t), P.Z.isFetchingApplication(t), P.Z.didFetchingApplicationFail(t)], [t]);
    return (r.useEffect(() => {
        null == n && !l && !a && Z.ZP.fetchApplication(t);
    }, [n, l, a, t]),
    null != n &&
        (0, R.Eb)({
            customInstallUrl: n.customInstallUrl,
            installParams: n.installParams,
            integrationTypesConfig: n.integrationTypesConfig
        }))
        ? (0, i.jsx)(B, { application: n })
        : null;
}
function B(e) {
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
            name: Z,
            description: P
        } = r.useMemo(
            () =>
                (0, _.sl)(n, {
                    fakeAppIconURL: M,
                    size: 56
                }),
            [n]
        ),
        D = r.useMemo(() => (null != P ? (0, N.parseBioReact)(P) : null), [P]),
        [B, w] = r.useState(!1),
        F = r.useCallback((e) => {
            e && w(!0);
        }, []),
        G = (0, c.O)(F);
    r.useEffect(() => {
        B &&
            (0, p.h)({
                type: l.ImpressionTypes.VIEW,
                name: l.ImpressionNames.APP_OAUTH2_LINK_EMBED,
                properties: { application_id: n.id }
            });
    }, [B, n]);
    let V = (0, R.TK)(n.id, (0, E.PL)(!0, !1)),
        H = (0, R.TK)(n.id, (0, E.LD)(x, !1)),
        z = V || H,
        W = n.isVerified && n.isDiscoverable,
        K = (0, o.e7)([S.Z, v.Z], () => v.Z.getChannel(S.Z.getChannelId())),
        Y = (0, o.e7)([T.Z], () => (null == K ? void 0 : K.isPrivate()) || T.Z.can(L.Plq.SEND_MESSAGES, K)),
        { analyticsLocations: X } = (0, f.ZP)(m.Z.APP_OAUTH2_LINK_EMBED),
        Q = async () => {
            if (null != u)
                try {
                    await (0, g.W)(n.id, u, X);
                } catch (e) {}
        };
    return (0, i.jsxs)('div', {
        ref: G,
        className: O.embedContainer,
        children: [
            (0, i.jsx)(U, {
                application: n,
                iconUrl: b
            }),
            (0, i.jsx)('img', {
                className: O.icon,
                alt: n.name,
                src: null != b ? b : k,
                'aria-hidden': !0,
                draggable: !1
            }),
            (0, i.jsxs)('div', {
                className: O.body,
                children: [
                    (0, i.jsxs)('div', {
                        className: O.details,
                        children: [
                            (0, i.jsx)(s.Heading, {
                                variant: 'heading-lg/bold',
                                color: 'interactive-active',
                                children: Z
                            }),
                            null != D &&
                                (0, i.jsx)(s.Text, {
                                    variant: 'text-sm/normal',
                                    color: 'text-normal',
                                    children: D
                                })
                        ]
                    }),
                    (0, i.jsxs)('div', {
                        className: O.buttonContainer,
                        children: [
                            d &&
                                (0, i.jsx)(s.Button, {
                                    color: s.Button.Colors.BRAND,
                                    type: 'button',
                                    size: s.Button.Sizes.MEDIUM,
                                    onClick: Q,
                                    children: y.intl.string(y.t.RscU7O)
                                }),
                            (z || W) &&
                                Y &&
                                (0, i.jsx)(s.Button, {
                                    color: d ? s.Button.Colors.PRIMARY : s.Button.Colors.BRAND,
                                    type: 'button',
                                    size: s.Button.Sizes.MEDIUM,
                                    onClick: () => {
                                        var e;
                                        a.Y.USER_INSTALL in (null !== (e = n.integrationTypesConfig) && void 0 !== e ? e : {}) || z
                                            ? j.S.dispatchToLastSubscribed(L.CkL.OPEN_APP_LAUNCHER, { applicationId: n.id })
                                            : (0, I.goToAppDirectory)({
                                                  guildId: x,
                                                  view: C.ApplicationDirectoryViews.APPLICATION,
                                                  applicationId: n.id,
                                                  entrypoint: { name: C.ApplicationDirectoryEntrypointNames.OAUTH2_EMBED }
                                              });
                                    },
                                    children: y.intl.string(y.t.fbcCzc)
                                }),
                            !d &&
                                !z &&
                                (0, i.jsx)(s.Button, {
                                    color: s.Button.Colors.PRIMARY,
                                    type: 'button',
                                    size: s.Button.Sizes.MEDIUM,
                                    onClick: () => {
                                        h.ZP.trackWithMetadata(L.rMx.APP_OAUTH2_LINK_EMBED_CTA_CLICKED, { application_id: n.id }),
                                            (0, R.LO)({
                                                applicationId: n.id,
                                                customInstallUrl: n.customInstallUrl,
                                                installParams: n.installParams,
                                                integrationTypesConfig: n.integrationTypesConfig,
                                                guildId: x,
                                                source: 'app_oauth2_link_embed'
                                            });
                                    },
                                    children: y.intl.string(y.t.NgXl3N)
                                })
                        ]
                    })
                ]
            })
        ]
    });
}
function U(e) {
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
            imageClassName: O.bannerImage,
            imageNotFoundClassName: O.bannerImage
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
            className: O.bannerImage
        });
    } else s = { backgroundColor: l };
    return (0, i.jsx)('div', {
        className: O.banner,
        style: s,
        children: o
    });
}
