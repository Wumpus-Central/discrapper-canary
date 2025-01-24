n.d(t, {
    Z: function () {
        return B;
    },
    n: function () {
        return G;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    a = n.n(l),
    s = n(442837),
    o = n(481060),
    c = n(493683),
    d = n(239091),
    u = n(2052),
    h = n(774226),
    m = n(317381),
    p = n(122613),
    g = n(16609),
    f = n(403404),
    _ = n(100527),
    E = n(906732),
    I = n(87005),
    C = n(753972),
    v = n(895924),
    N = n(812236),
    S = n(82295),
    T = n(740492),
    b = n(973616),
    A = n(592125),
    Z = n(626135),
    x = n(823379),
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
            var r, l, a;
            i = null !== (a = null === (r = y.Z.getApplication(e.id)) || void 0 === r ? void 0 : r.bot) && void 0 !== a ? a : null === (l = b.ZP.createFromServer(await (0, L.UM)(e.id))) || void 0 === l ? void 0 : l.bot;
        } catch (e) {
            t(void 0);
            return;
        }
    if (null != i) {
        let r,
            l = null == A.Z.getDMFromUserId(i.id);
        try {
            r = await c.Z.openPrivateChannel([i.id], !1, !1, _.Z.APP_DMS_QUICK_LAUNCHER);
        } catch (e) {
            t(void 0);
        }
        if (
            (Z.default.track(P.rMx.APP_DMS_QUICK_LAUNCHER_CLICKED, {
                application_id: e.id,
                is_new_dm: l,
                channel_id: r
            }),
            null == r)
        ) {
            t(void 0);
            return;
        }
        try {
            await (0, N.ZP)(r, e.id);
        } catch (e) {
            if (e.message === N.sV) {
                t(void 0);
                return;
            }
        }
        await (0, p.Z)({
            targetApplicationId: e.id,
            channelId: r,
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
    return (0, i.jsx)(o.Clickable, {
        className: R.clickable,
        onClick: () => {
            (0, f.Z)({
                locationObject: n.location,
                openInPopout: !1,
                analyticsLocations: t,
                opensAppLauncherModal: !0
            });
        },
        'aria-label': O.intl.string(O.t.qJvTKS),
        children: (0, i.jsx)(o.Tooltip, {
            tooltipContentClassName: R.tooltipContent,
            text: O.intl.string(O.t.qJvTKS),
            children: (e) => {
                let { ...t } = e;
                return (0, i.jsx)('div', {
                    className: R.iconContainer,
                    ...t,
                    children: (0, i.jsx)(o.PlusSmallIcon, {
                        className: R.plusIcon,
                        size: 'sm',
                        'aria-hidden': !0
                    })
                });
            }
        })
    });
}
function w(e) {
    let { application: t, loadingAppId: n, setLoadingAppId: r, botUserId: l, analyticsLocations: c } = e,
        d = (0, s.e7)([A.Z], () => A.Z.getDMFromUserId(l)),
        u = (0, s.e7)([m.ZP], () => m.ZP.getCurrentEmbeddedActivity()),
        p = (0, h.GK)(),
        f = null != u && u.applicationId === t.id && (p || (0, g.p)(u.location) === d),
        _ = n === t.id,
        E = null != n;
    return (0, i.jsx)(o.Clickable, {
        className: a()(R.clickable, { [R.disabledClickable]: E }),
        onClick: () => (f || E ? null : D(t, r, c)),
        'aria-label': O.intl.formatToPlainString(O.t['zLhr9/'], {
            applicationName: t.name,
            applicationDescription: t.description
        }),
        children: (0, i.jsx)(o.Tooltip, {
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
                        _ || f
                            ? (0, i.jsx)(o.Spinner, {
                                  type: o.Spinner.Type.PULSING_ELLIPSIS,
                                  className: R.spinner,
                                  itemClassName: f ? R.spinnerInnerRunning : void 0
                              })
                            : null
                    ]
                });
            }
        })
    });
}
function k(e) {
    let { frecentApps: t, loadingAppId: n, setLoadingAppId: r, analyticsLocations: l } = e;
    return (0, i.jsx)('div', {
        className: R.itemContainer,
        children: t.map((e) => {
            var t;
            return (0, i.jsx)(
                w,
                {
                    application: e,
                    loadingAppId: n,
                    setLoadingAppId: r,
                    botUserId: null === (t = e.bot) || void 0 === t ? void 0 : t.id,
                    analyticsLocations: l
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
    let e = (0, s.e7)([T.ZP], () => T.ZP.showPlayAgain),
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
        [l, s] = r.useState(void 0),
        { analyticsLocations: o } = (0, E.ZP)(_.Z.APP_DMS_QUICK_LAUNCHER),
        c = r.useRef(!1),
        d = (0, u.O)(),
        h = r.useMemo(
            () =>
                n
                    .map((e) => e.application)
                    .filter(x.lm)
                    .slice(0, 8),
            [n]
        );
    return (
        r.useLayoutEffect(() => {
            var e;
            if (!c.current) (c.current = !0), Z.default.track(P.rMx.APP_DMS_QUICK_LAUNCHER_IMPRESSION, { apps_dm_quick_launcher_application_ids: null !== (e = h.map((e) => Number(e.id))) && void 0 !== e ? e : [] });
        }, [h]),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)('div', {
                    className: R.container,
                    onContextMenu: U,
                    children: [
                        (0, i.jsx)(S.Z, {
                            className: a()(R.headerContainer, j.privateChannelsHeaderContainer),
                            children: (0, i.jsxs)('div', {
                                className: R.textContainer,
                                children: [
                                    (0, i.jsx)('span', {
                                        className: j.headerText,
                                        children: O.intl.string(O.t.vayAzs)
                                    }),
                                    (0, i.jsx)(M, {
                                        analyticsLocations: o,
                                        analyticsContext: d
                                    })
                                ]
                            })
                        }),
                        (0, i.jsx)(k, {
                            frecentApps: h,
                            loadingAppId: l,
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
