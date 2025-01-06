n.d(t, {
    Z: function () {
        return B;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    l = n(990547),
    a = n(373793),
    o = n(399606),
    s = n(481060),
    c = n(493683),
    u = n(434650),
    d = n(122613),
    m = n(778569),
    h = n(182906),
    f = n(100527),
    p = n(367907),
    _ = n(906732),
    g = n(213609),
    E = n(783097),
    C = n(213459),
    I = n(132871),
    x = n(147890),
    N = n(220082),
    v = n(240991),
    T = n(592125),
    S = n(496675),
    A = n(944486),
    b = n(914010),
    j = n(768581),
    R = n(585483),
    Z = n(135431),
    P = n(728345),
    L = n(812206),
    y = n(981631),
    O = n(388032),
    M = n(363637),
    k = n(413097),
    D = n(970952);
function B(e) {
    let { applicationId: t } = e,
        [n, l, a] = (0, o.Wu)([L.Z], () => [L.Z.getApplication(t), L.Z.isFetchingApplication(t), L.Z.didFetchingApplicationFail(t)], [t]);
    return (r.useEffect(() => {
        null == n && !l && !a && P.ZP.fetchApplication(t);
    }, [n, l, a, t]),
    null != n &&
        (0, Z.Eb)({
            customInstallUrl: n.customInstallUrl,
            installParams: n.installParams,
            integrationTypesConfig: n.integrationTypesConfig
        }))
        ? (0, i.jsx)(U, { application: n })
        : null;
}
function U(e) {
    var t, n, m, h, N;
    let { application: j } = e,
        P = null === (t = j.bot) || void 0 === t ? void 0 : t.id,
        L = (0, E.ye)(j) && null != P,
        B = (0, o.e7)([b.Z], () => {
            var e;
            return null !== (e = b.Z.getGuildId()) && void 0 !== e ? e : void 0;
        }),
        {
            iconURL: U,
            name: F,
            description: G
        } = r.useMemo(
            () =>
                (0, E.sl)(j, {
                    fakeAppIconURL: k,
                    size: 56
                }),
            [j]
        ),
        V = r.useMemo(() => (null != G ? (0, v.parseBioReact)(G) : null), [G]),
        [H, z] = r.useState(!1),
        W = r.useCallback((e) => {
            e && z(!0);
        }, []),
        K = (0, u.O)(W);
    r.useEffect(() => {
        H &&
            (0, g.h)({
                type: l.ImpressionTypes.VIEW,
                name: l.ImpressionNames.APP_OAUTH2_LINK_EMBED,
                properties: { application_id: j.id }
            });
    }, [H, j]);
    let Y = j.id in (null !== (h = null === (n = (0, C.PL)(!0, !1).result) || void 0 === n ? void 0 : n.sections) && void 0 !== h ? h : {}),
        X = j.id in (null !== (N = null === (m = (0, C.LD)(B, !1).result) || void 0 === m ? void 0 : m.sections) && void 0 !== N ? N : {}),
        Q = Y || X,
        q = j.isVerified && j.isDiscoverable,
        J = (0, o.e7)([A.Z, T.Z], () => T.Z.getChannel(A.Z.getChannelId())),
        $ = (0, o.e7)([S.Z], () => (null == J ? void 0 : J.isPrivate()) || S.Z.can(y.Plq.SEND_MESSAGES, J)),
        { analyticsLocations: ee } = (0, _.ZP)(f.Z.APP_OAUTH2_LINK_EMBED),
        et = async () => {
            if (null != P)
                try {
                    let e = await c.Z.openPrivateChannel(P);
                    await (0, d.Z)({
                        targetApplicationId: j.id,
                        channelId: e,
                        analyticsLocations: ee
                    });
                } catch (e) {}
        };
    return (0, i.jsxs)('div', {
        ref: K,
        className: M.embedContainer,
        children: [
            (0, i.jsx)(w, {
                application: j,
                iconUrl: U
            }),
            (0, i.jsx)('img', {
                className: M.icon,
                alt: j.name,
                src: null != U ? U : D,
                'aria-hidden': !0,
                draggable: !1
            }),
            (0, i.jsxs)('div', {
                className: M.body,
                children: [
                    (0, i.jsxs)('div', {
                        className: M.details,
                        children: [
                            (0, i.jsx)(s.Heading, {
                                variant: 'heading-lg/bold',
                                color: 'interactive-active',
                                children: F
                            }),
                            null != V &&
                                (0, i.jsx)(s.Text, {
                                    variant: 'text-sm/normal',
                                    color: 'text-normal',
                                    children: V
                                })
                        ]
                    }),
                    (0, i.jsxs)('div', {
                        className: M.buttonContainer,
                        children: [
                            L &&
                                (0, i.jsx)(s.Button, {
                                    color: s.Button.Colors.BRAND,
                                    type: 'button',
                                    size: s.Button.Sizes.MEDIUM,
                                    onClick: et,
                                    children: O.intl.string(O.t.RscU7O)
                                }),
                            (Q || q) &&
                                $ &&
                                (0, i.jsx)(s.Button, {
                                    color: L ? s.Button.Colors.PRIMARY : s.Button.Colors.BRAND,
                                    type: 'button',
                                    size: s.Button.Sizes.MEDIUM,
                                    onClick: () => {
                                        var e;
                                        a.Y.USER_INSTALL in (null !== (e = j.integrationTypesConfig) && void 0 !== e ? e : {}) || Q
                                            ? R.S.dispatchToLastSubscribed(y.CkL.OPEN_APP_LAUNCHER, { applicationId: j.id })
                                            : (0, x.goToAppDirectory)({
                                                  guildId: B,
                                                  view: I.ApplicationDirectoryViews.APPLICATION,
                                                  applicationId: j.id,
                                                  entrypoint: { name: I.ApplicationDirectoryEntrypointNames.OAUTH2_EMBED }
                                              });
                                    },
                                    children: O.intl.string(O.t.fbcCzc)
                                }),
                            !L &&
                                !Q &&
                                (0, i.jsx)(s.Button, {
                                    color: s.Button.Colors.PRIMARY,
                                    type: 'button',
                                    size: s.Button.Sizes.MEDIUM,
                                    onClick: () => {
                                        p.ZP.trackWithMetadata(y.rMx.APP_OAUTH2_LINK_EMBED_CTA_CLICKED, { application_id: j.id }),
                                            (0, Z.LO)({
                                                applicationId: j.id,
                                                customInstallUrl: j.customInstallUrl,
                                                installParams: j.installParams,
                                                integrationTypesConfig: j.integrationTypesConfig,
                                                guildId: B,
                                                source: 'app_oauth2_link_embed'
                                            });
                                    },
                                    children: O.intl.string(O.t.NgXl3N)
                                })
                        ]
                    })
                ]
            })
        ]
    });
}
function w(e) {
    let { application: t, iconUrl: n } = e,
        r = (0, m.Z)({
            applicationId: t.id,
            size: 280,
            names: ['embedded_cover']
        }),
        l = (0, N.ZP)(n, ''),
        a = t.bot,
        o = null,
        s = {};
    if ((0, E.ye)(t))
        o = (0, i.jsx)(h.Z, {
            imageBackground: r,
            applicationName: t.name,
            imageClassName: M.bannerImage,
            imageNotFoundClassName: M.bannerImage
        });
    else if ((null == a ? void 0 : a.banner) != null) {
        let e = (0, j.aN)({
            id: a.id,
            banner: a.banner,
            size: 280,
            canAnimate: !1
        });
        o = (0, i.jsx)('img', {
            alt: t.name,
            src: e,
            className: M.bannerImage
        });
    } else s = { backgroundColor: l };
    return (0, i.jsx)('div', {
        className: M.banner,
        style: s,
        children: o
    });
}
