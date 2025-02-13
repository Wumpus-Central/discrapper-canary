n.d(t, { Z: () => O }), n(47120);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
    s = n(442837),
    o = n(481060),
    c = n(239091),
    d = n(2052),
    u = n(774226),
    h = n(317381),
    m = n(16609),
    p = n(403404),
    g = n(100527),
    _ = n(906732),
    f = n(753972),
    E = n(82295),
    I = n(984370),
    C = n(592125),
    N = n(626135),
    v = n(823379),
    T = n(415439),
    S = n(981631),
    b = n(388032),
    A = n(796665),
    Z = n(220704);
function x(e) {
    let { analyticsLocations: t, analyticsContext: n } = e;
    return (0, i.jsx)(I.Z.Icon, {
        onClick: () => {
            (0, p.Z)({
                locationObject: n.location,
                openInPopout: !1,
                analyticsLocations: t,
                opensAppLauncherModal: !0
            });
        },
        icon: o.qJs,
        className: A.plusIcon,
        iconClassName: A.plusIcon,
        tooltip: b.intl.string(b.t.qJvTKS),
        tooltipPosition: 'top'
    });
}
function L(e) {
    let { application: t, loadingAppId: n, setLoadingAppId: l, botUserId: r, analyticsLocations: c } = e,
        d = (0, s.e7)([C.Z], () => C.Z.getDMFromUserId(r)),
        p = (0, s.e7)([h.ZP], () => h.ZP.getCurrentEmbeddedActivity()),
        g = (0, u.GK)(),
        _ = null != p && p.applicationId === t.id && (g || (0, m.pY)(p.location) === d),
        E = n === t.id,
        I = null != n;
    return (0, i.jsx)(o.P3F, {
        className: a()(A.clickable, { [A.disabledClickable]: I }),
        onClick: () => (_ || I ? null : (0, T.Kt)(t, l, c)),
        'aria-label': b.intl.formatToPlainString(b.t['zLhr9/'], {
            applicationName: t.name,
            applicationDescription: t.description
        }),
        children: (0, i.jsx)(o.ua7, {
            tooltipContentClassName: A.tooltipContent,
            text: t.name,
            children: (e) => {
                let { ...n } = e;
                return (0, i.jsxs)('div', {
                    className: A.iconContainer,
                    ...n,
                    children: [
                        (0, i.jsx)(f.Z, {
                            application: t,
                            className: A.iconCard,
                            'aria-hidden': !0,
                            rendersPlaceholder: !0
                        }),
                        E || _
                            ? (0, i.jsx)(o.$jN, {
                                  type: o.$jN.Type.PULSING_ELLIPSIS,
                                  className: A.spinner,
                                  itemClassName: _ ? A.spinnerInnerRunning : void 0
                              })
                            : null
                    ]
                });
            }
        })
    });
}
function y(e) {
    let { frecentApps: t, loadingAppId: n, setLoadingAppId: l, analyticsLocations: r } = e;
    return (0, i.jsx)('div', {
        className: A.itemContainer,
        children: t.map((e) => {
            var t;
            return (0, i.jsx)(
                L,
                {
                    application: e,
                    loadingAppId: n,
                    setLoadingAppId: l,
                    botUserId: null === (t = e.bot) || void 0 === t ? void 0 : t.id,
                    analyticsLocations: r
                },
                e.id
            );
        })
    });
}
let P = (e) => {
    (0, c.jW)(e, async () => {
        let { default: e } = await n.e('40706').then(n.bind(n, 610909));
        return (t) => (0, i.jsx)(e, { ...t });
    });
};
function O(e) {
    let { bottomDivider: t } = e,
        n = (0, T.ZC)(),
        [r, s] = l.useState(void 0),
        { analyticsLocations: o } = (0, _.ZP)(g.Z.APP_DMS_QUICK_LAUNCHER),
        c = l.useRef(!1),
        u = (0, d.O)(),
        h = l.useMemo(() => n.filter(v.lm).slice(0, 8), [n]);
    return (
        l.useLayoutEffect(() => {
            var e;
            !c.current && ((c.current = !0), N.default.track(S.rMx.APP_DMS_QUICK_LAUNCHER_IMPRESSION, { apps_dm_quick_launcher_application_ids: null !== (e = h.map((e) => Number(e.id))) && void 0 !== e ? e : [] }));
        }, [h]),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)('div', {
                    className: A.container,
                    onContextMenu: P,
                    children: [
                        (0, i.jsxs)(E.Z, {
                            className: a()(A.headerContainer, Z.privateChannelsHeaderContainer),
                            children: [
                                (0, i.jsx)('span', {
                                    className: Z.headerText,
                                    children: b.intl.string(b.t.vayAzs)
                                }),
                                (0, i.jsx)(x, {
                                    analyticsLocations: o,
                                    analyticsContext: u
                                })
                            ]
                        }),
                        (0, i.jsx)(y, {
                            frecentApps: h,
                            loadingAppId: r,
                            setLoadingAppId: s,
                            analyticsLocations: o
                        })
                    ]
                }),
                t
            ]
        })
    );
}
