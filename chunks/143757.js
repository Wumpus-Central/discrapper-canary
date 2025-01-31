n.d(t, {
    Z: () => k,
    n: () => M
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
    u = n(774226),
    h = n(317381),
    m = n(122613),
    p = n(16609);
n(403404);
var g = n(100527),
    _ = n(906732),
    f = n(87005),
    E = n(753972),
    I = n(895924),
    C = n(812236),
    v = n(82295),
    N = n(740492),
    T = n(973616),
    S = n(592125),
    Z = n(626135),
    x = n(823379),
    A = n(728345),
    b = n(812206),
    L = n(981631),
    y = n(388032),
    P = n(914333),
    O = n(312565);
async function R(e, t, n) {
    t(e.id);
    let i = e.bot;
    if (null == i)
        try {
            var l, r, a;
            i = null !== (a = null === (l = b.Z.getApplication(e.id)) || void 0 === l ? void 0 : l.bot) && void 0 !== a ? a : null === (r = T.ZP.createFromServer(await (0, A.UM)(e.id))) || void 0 === r ? void 0 : r.bot;
        } catch (e) {
            t(void 0);
            return;
        }
    if (null != i) {
        let l;
        let r = null == S.Z.getDMFromUserId(i.id);
        try {
            l = await c.Z.openPrivateChannel([i.id], !1, !1, g.Z.APP_DMS_QUICK_LAUNCHER);
        } catch (e) {
            t(void 0);
        }
        if (
            (Z.default.track(L.rMx.APP_DMS_QUICK_LAUNCHER_CLICKED, {
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
            await (0, C.ZP)(l, e.id);
        } catch (e) {
            if (e.message === C.sV) {
                t(void 0);
                return;
            }
        }
        await (0, m.Z)({
            targetApplicationId: e.id,
            channelId: l,
            analyticsLocations: n,
            commandOrigin: I.bB.APP_DMS_ENTRY_POINT_COMMAND_BUTTON,
            onExecutedCallback() {
                t(void 0);
            }
        });
    } else t(void 0);
}
function j(e) {
    let { application: t, loadingAppId: n, setLoadingAppId: l, botUserId: r, analyticsLocations: c } = e,
        d = (0, s.e7)([S.Z], () => S.Z.getDMFromUserId(r)),
        m = (0, s.e7)([h.ZP], () => h.ZP.getCurrentEmbeddedActivity()),
        g = (0, u.GK)(),
        _ = null != m && m.applicationId === t.id && (g || (0, p.p)(m.location) === d),
        f = n === t.id,
        I = null != n;
    return (0, i.jsx)(o.P3F, {
        className: a()(P.clickable, { [P.disabledClickable]: I }),
        onClick: () => (_ || I ? null : R(t, l, c)),
        'aria-label': y.intl.formatToPlainString(y.t['zLhr9/'], {
            applicationName: t.name,
            applicationDescription: t.description
        }),
        children: (0, i.jsx)(o.ua7, {
            tooltipContentClassName: P.tooltipContent,
            text: t.name,
            children: (e) => {
                let { ...n } = e;
                return (0, i.jsxs)('div', {
                    className: P.iconContainer,
                    ...n,
                    children: [
                        (0, i.jsx)(E.Z, {
                            application: t,
                            className: P.iconCard,
                            'aria-hidden': !0,
                            rendersPlaceholder: !0
                        }),
                        f || _
                            ? (0, i.jsx)(o.$jN, {
                                  type: o.$jN.Type.PULSING_ELLIPSIS,
                                  className: P.spinner,
                                  itemClassName: _ ? P.spinnerInnerRunning : void 0
                              })
                            : null
                    ]
                });
            }
        })
    });
}
function D(e) {
    let { frecentApps: t, loadingAppId: n, setLoadingAppId: l, analyticsLocations: r } = e;
    return (0, i.jsx)('div', {
        className: P.itemContainer,
        children: t.map((e) => {
            var t;
            return (0, i.jsx)(
                j,
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
let w = (e) => {
    (0, d.jW)(e, async () => {
        let { default: e } = await n.e('40706').then(n.bind(n, 610909));
        return (t) => (0, i.jsx)(e, { ...t });
    });
};
function M() {
    let e = (0, s.e7)([N.ZP], () => N.ZP.showPlayAgain),
        { frecentApps: t } = (0, f.f)({
            context: { type: 'contextless' },
            onlyActivityApps: !0,
            allowCommandFetch: !0,
            includeAuthorizedAppsAndFetch: !1
        });
    return e && t.length > 0;
}
function k(e) {
    let { bottomDivider: t } = e,
        { frecentApps: n } = (0, f.f)({
            context: { type: 'contextless' },
            onlyActivityApps: !0,
            allowCommandFetch: !0,
            includeAuthorizedAppsAndFetch: !1
        }),
        [r, s] = l.useState(void 0),
        { analyticsLocations: o } = (0, _.ZP)(g.Z.APP_DMS_QUICK_LAUNCHER),
        c = l.useRef(!1),
        d = l.useMemo(
            () =>
                n
                    .map((e) => e.application)
                    .filter(x.lm)
                    .slice(0, 8),
            [n]
        );
    return (
        l.useLayoutEffect(() => {
            var e;
            !c.current && ((c.current = !0), Z.default.track(L.rMx.APP_DMS_QUICK_LAUNCHER_IMPRESSION, { apps_dm_quick_launcher_application_ids: null !== (e = d.map((e) => Number(e.id))) && void 0 !== e ? e : [] }));
        }, [d]),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)('div', {
                    className: P.container,
                    onContextMenu: w,
                    children: [
                        (0, i.jsx)(v.Z, {
                            className: a()(P.headerContainer, O.privateChannelsHeaderContainer),
                            children: (0, i.jsx)('div', {
                                className: P.textContainer,
                                children: (0, i.jsx)('span', {
                                    className: O.headerText,
                                    children: y.intl.string(y.t.vayAzs)
                                })
                            })
                        }),
                        (0, i.jsx)(D, {
                            frecentApps: d,
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
