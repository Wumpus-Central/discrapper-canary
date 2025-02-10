n.d(t, {
    Z: () => V,
    n: () => B
}),
    n(47120);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
    s = n(442837),
    o = n(481060),
    c = n(493683),
    d = n(239091),
    u = n(2052),
    h = n(774226),
    m = n(317381),
    p = n(122613),
    g = n(16609),
    _ = n(403404),
    f = n(100527),
    E = n(906732),
    I = n(87005),
    C = n(753972),
    v = n(895924),
    N = n(812236),
    T = n(82295),
    S = n(984370),
    Z = n(740492),
    A = n(973616),
    x = n(592125),
    b = n(626135),
    L = n(823379),
    y = n(728345),
    P = n(812206),
    O = n(981631),
    R = n(388032),
    j = n(796665),
    D = n(220704);
async function w(e, t, n) {
    t(e.id);
    let i = e.bot;
    if (null == i)
        try {
            var l, r, a;
            i = null !== (a = null === (l = P.Z.getApplication(e.id)) || void 0 === l ? void 0 : l.bot) && void 0 !== a ? a : null === (r = A.ZP.createFromServer(await (0, y.UM)(e.id))) || void 0 === r ? void 0 : r.bot;
        } catch (e) {
            t(void 0);
            return;
        }
    if (null != i) {
        let l;
        let r = null == x.Z.getDMFromUserId(i.id);
        try {
            l = await c.Z.openPrivateChannel([i.id], !1, !1, f.Z.APP_DMS_QUICK_LAUNCHER);
        } catch (e) {
            t(void 0);
        }
        if (
            (b.default.track(O.rMx.APP_DMS_QUICK_LAUNCHER_CLICKED, {
                application_id: e.id,
                is_new_dm: r,
                channel_id: l
            }),
            null == l)
        ) {
            t(void 0);
            return;
        }
        try {
            await (0, N.ZP)(l, e.id);
        } catch (e) {
            if (e.message === N.sV) {
                t(void 0);
                return;
            }
        }
        await (0, p.Z)({
            targetApplicationId: e.id,
            channelId: l,
            analyticsLocations: n,
            commandOrigin: v.bB.APP_DMS_ENTRY_POINT_COMMAND_BUTTON,
            onExecutedCallback() {
                t(void 0);
            }
        });
    } else t(void 0);
}
function M(e) {
    let { analyticsLocations: t, analyticsContext: n } = e;
    return (0, i.jsx)(S.Z.Icon, {
        onClick: () => {
            (0, _.Z)({
                locationObject: n.location,
                openInPopout: !1,
                analyticsLocations: t,
                opensAppLauncherModal: !0
            });
        },
        icon: o.qJs,
        className: j.plusIcon,
        iconClassName: j.plusIcon,
        tooltip: R.intl.string(R.t.qJvTKS),
        tooltipPosition: 'top'
    });
}
function k(e) {
    let { application: t, loadingAppId: n, setLoadingAppId: l, botUserId: r, analyticsLocations: c } = e,
        d = (0, s.e7)([x.Z], () => x.Z.getDMFromUserId(r)),
        u = (0, s.e7)([m.ZP], () => m.ZP.getCurrentEmbeddedActivity()),
        p = (0, h.GK)(),
        _ = null != u && u.applicationId === t.id && (p || (0, g.p)(u.location) === d),
        f = n === t.id,
        E = null != n;
    return (0, i.jsx)(o.P3F, {
        className: a()(j.clickable, { [j.disabledClickable]: E }),
        onClick: () => (_ || E ? null : w(t, l, c)),
        'aria-label': R.intl.formatToPlainString(R.t['zLhr9/'], {
            applicationName: t.name,
            applicationDescription: t.description
        }),
        children: (0, i.jsx)(o.ua7, {
            tooltipContentClassName: j.tooltipContent,
            text: t.name,
            children: (e) => {
                let { ...n } = e;
                return (0, i.jsxs)('div', {
                    className: j.iconContainer,
                    ...n,
                    children: [
                        (0, i.jsx)(C.Z, {
                            application: t,
                            className: j.iconCard,
                            'aria-hidden': !0,
                            rendersPlaceholder: !0
                        }),
                        f || _
                            ? (0, i.jsx)(o.$jN, {
                                  type: o.$jN.Type.PULSING_ELLIPSIS,
                                  className: j.spinner,
                                  itemClassName: _ ? j.spinnerInnerRunning : void 0
                              })
                            : null
                    ]
                });
            }
        })
    });
}
function U(e) {
    let { frecentApps: t, loadingAppId: n, setLoadingAppId: l, analyticsLocations: r } = e;
    return (0, i.jsx)('div', {
        className: j.itemContainer,
        children: t.map((e) => {
            var t;
            return (0, i.jsx)(
                k,
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
let G = (e) => {
    (0, d.jW)(e, async () => {
        let { default: e } = await n.e('40706').then(n.bind(n, 610909));
        return (t) => (0, i.jsx)(e, { ...t });
    });
};
function B() {
    let e = (0, s.e7)([Z.ZP], () => Z.ZP.showPlayAgain),
        { frecentApps: t } = (0, I.f)({
            context: { type: 'contextless' },
            onlyActivityApps: !0,
            allowCommandFetch: !0,
            includeAuthorizedAppsAndFetch: !1
        });
    return e && t.length > 0;
}
function V(e) {
    let { bottomDivider: t } = e,
        { frecentApps: n } = (0, I.f)({
            context: { type: 'contextless' },
            onlyActivityApps: !0,
            allowCommandFetch: !0,
            includeAuthorizedAppsAndFetch: !1
        }),
        [r, s] = l.useState(void 0),
        { analyticsLocations: o } = (0, E.ZP)(f.Z.APP_DMS_QUICK_LAUNCHER),
        c = l.useRef(!1),
        d = (0, u.O)(),
        h = l.useMemo(
            () =>
                n
                    .map((e) => e.application)
                    .filter(L.lm)
                    .slice(0, 8),
            [n]
        );
    return (
        l.useLayoutEffect(() => {
            var e;
            !c.current && ((c.current = !0), b.default.track(O.rMx.APP_DMS_QUICK_LAUNCHER_IMPRESSION, { apps_dm_quick_launcher_application_ids: null !== (e = h.map((e) => Number(e.id))) && void 0 !== e ? e : [] }));
        }, [h]),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)('div', {
                    className: j.container,
                    onContextMenu: G,
                    children: [
                        (0, i.jsxs)(T.Z, {
                            className: a()(j.headerContainer, D.privateChannelsHeaderContainer),
                            children: [
                                (0, i.jsx)('span', {
                                    className: D.headerText,
                                    children: R.intl.string(R.t.vayAzs)
                                }),
                                (0, i.jsx)(M, {
                                    analyticsLocations: o,
                                    analyticsContext: d
                                })
                            ]
                        }),
                        (0, i.jsx)(U, {
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
