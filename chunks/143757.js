n.d(t, {
    Z: () => B,
    n: () => G
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
    S = n(740492),
    Z = n(973616),
    x = n(592125),
    A = n(626135),
    b = n(823379),
    L = n(728345),
    y = n(812206),
    P = n(981631),
    O = n(388032),
    R = n(914333),
    j = n(312565);
async function D(e, t, n) {
    t(e.id);
    let i = e.bot;
    if (null == i)
        try {
            var l, r, a;
            i = null !== (a = null === (l = y.Z.getApplication(e.id)) || void 0 === l ? void 0 : l.bot) && void 0 !== a ? a : null === (r = Z.ZP.createFromServer(await (0, L.UM)(e.id))) || void 0 === r ? void 0 : r.bot;
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
            (A.default.track(P.rMx.APP_DMS_QUICK_LAUNCHER_CLICKED, {
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
function w(e) {
    let { analyticsLocations: t, analyticsContext: n } = e;
    return (0, i.jsx)(o.P3F, {
        className: R.clickable,
        onClick: () => {
            (0, _.Z)({
                locationObject: n.location,
                openInPopout: !1,
                analyticsLocations: t,
                opensAppLauncherModal: !0
            });
        },
        'aria-label': O.intl.string(O.t.qJvTKS),
        children: (0, i.jsx)(o.ua7, {
            tooltipContentClassName: R.tooltipContent,
            text: O.intl.string(O.t.qJvTKS),
            children: (e) => {
                let { ...t } = e;
                return (0, i.jsx)('div', {
                    className: R.iconContainer,
                    ...t,
                    children: (0, i.jsx)(o.qJs, {
                        className: R.plusIcon,
                        size: 'sm',
                        'aria-hidden': !0
                    })
                });
            }
        })
    });
}
function M(e) {
    let { application: t, loadingAppId: n, setLoadingAppId: l, botUserId: r, analyticsLocations: c } = e,
        d = (0, s.e7)([x.Z], () => x.Z.getDMFromUserId(r)),
        u = (0, s.e7)([m.ZP], () => m.ZP.getCurrentEmbeddedActivity()),
        p = (0, h.GK)(),
        _ = null != u && u.applicationId === t.id && (p || (0, g.p)(u.location) === d),
        f = n === t.id,
        E = null != n;
    return (0, i.jsx)(o.P3F, {
        className: a()(R.clickable, { [R.disabledClickable]: E }),
        onClick: () => (_ || E ? null : D(t, l, c)),
        'aria-label': O.intl.formatToPlainString(O.t['zLhr9/'], {
            applicationName: t.name,
            applicationDescription: t.description
        }),
        children: (0, i.jsx)(o.ua7, {
            tooltipContentClassName: R.tooltipContent,
            text: t.name,
            children: (e) => {
                let { ...n } = e;
                return (0, i.jsxs)('div', {
                    className: R.iconContainer,
                    ...n,
                    children: [
                        (0, i.jsx)(C.Z, {
                            application: t,
                            className: R.iconCard,
                            'aria-hidden': !0,
                            rendersPlaceholder: !0
                        }),
                        f || _
                            ? (0, i.jsx)(o.$jN, {
                                  type: o.$jN.Type.PULSING_ELLIPSIS,
                                  className: R.spinner,
                                  itemClassName: _ ? R.spinnerInnerRunning : void 0
                              })
                            : null
                    ]
                });
            }
        })
    });
}
function k(e) {
    let { frecentApps: t, loadingAppId: n, setLoadingAppId: l, analyticsLocations: r } = e;
    return (0, i.jsx)('div', {
        className: R.itemContainer,
        children: t.map((e) => {
            var t;
            return (0, i.jsx)(
                M,
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
let U = (e) => {
    (0, d.jW)(e, async () => {
        let { default: e } = await n.e('40706').then(n.bind(n, 610909));
        return (t) => (0, i.jsx)(e, { ...t });
    });
};
function G() {
    let e = (0, s.e7)([S.ZP], () => S.ZP.showPlayAgain),
        { frecentApps: t } = (0, I.f)({
            context: { type: 'contextless' },
            onlyActivityApps: !0,
            allowCommandFetch: !0,
            includeAuthorizedAppsAndFetch: !1
        });
    return e && t.length > 0;
}
function B(e) {
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
                    .filter(b.lm)
                    .slice(0, 8),
            [n]
        );
    return (
        l.useLayoutEffect(() => {
            var e;
            !c.current && ((c.current = !0), A.default.track(P.rMx.APP_DMS_QUICK_LAUNCHER_IMPRESSION, { apps_dm_quick_launcher_application_ids: null !== (e = h.map((e) => Number(e.id))) && void 0 !== e ? e : [] }));
        }, [h]),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)('div', {
                    className: R.container,
                    onContextMenu: U,
                    children: [
                        (0, i.jsx)(T.Z, {
                            className: a()(R.headerContainer, j.privateChannelsHeaderContainer),
                            children: (0, i.jsxs)('div', {
                                className: R.textContainer,
                                children: [
                                    (0, i.jsx)('span', {
                                        className: j.headerText,
                                        children: O.intl.string(O.t.vayAzs)
                                    }),
                                    (0, i.jsx)(w, {
                                        analyticsLocations: o,
                                        analyticsContext: d
                                    })
                                ]
                            })
                        }),
                        (0, i.jsx)(k, {
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
