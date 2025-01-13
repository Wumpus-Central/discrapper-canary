n.d(t, {
    Z: function () {
        return U;
    },
    n: function () {
        return k;
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
    u = n(774226),
    h = n(317381),
    m = n(122613),
    p = n(16609),
    g = n(100527),
    f = n(906732),
    _ = n(87005),
    E = n(753972),
    I = n(895924),
    C = n(812236),
    N = n(82295),
    v = n(740492),
    S = n(973616),
    T = n(592125),
    A = n(626135),
    b = n(823379),
    Z = n(404295),
    x = n(728345),
    L = n(812206),
    P = n(981631),
    O = n(388032),
    y = n(914333),
    R = n(312565);
async function j(e, t, n) {
    t(e.id);
    let i = e.bot;
    if (null == i)
        try {
            var r, l, a;
            i = null !== (a = null === (r = L.Z.getApplication(e.id)) || void 0 === r ? void 0 : r.bot) && void 0 !== a ? a : null === (l = S.ZP.createFromServer(await (0, x.UM)(e.id))) || void 0 === l ? void 0 : l.bot;
        } catch (e) {
            t(void 0);
            return;
        }
    if (null != i) {
        let r,
            l = null == T.Z.getDMFromUserId(i.id);
        try {
            r = await c.Z.openPrivateChannel([i.id], !1, !1, g.Z.APP_DMS_QUICK_LAUNCHER);
        } catch (e) {
            t(void 0);
        }
        if (
            (A.default.track(P.rMx.APP_DMS_QUICK_LAUNCHER_CLICKED, {
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
            await (0, C.ZP)(r, e.id);
        } catch (e) {
            if (e.message === C.sV) {
                t(void 0);
                return;
            }
        }
        await (0, m.Z)({
            targetApplicationId: e.id,
            channelId: r,
            analyticsLocations: n,
            commandOrigin: I.bB.APP_DMS_ENTRY_POINT_COMMAND_BUTTON,
            onExecutedCallback() {
                t(void 0);
            }
        });
    } else t(void 0);
}
function D(e) {
    let { application: t, loadingAppId: n, setLoadingAppId: r, botUserId: l, analyticsLocations: c } = e,
        d = (0, s.e7)([T.Z], () => T.Z.getDMFromUserId(l)),
        m = (0, s.e7)([h.ZP], () => h.ZP.getCurrentEmbeddedActivity()),
        g = (0, u.G)(),
        f = null != m && m.applicationId === t.id && (g || (0, p.p)(m.location) === d),
        _ = n === t.id,
        I = null != n;
    return (0, i.jsx)(o.Clickable, {
        className: a()(y.clickable, { [y.disabledClickable]: I }),
        onClick: () => (f || I ? null : j(t, r, c)),
        'aria-label': O.intl.formatToPlainString(O.t['zLhr9/'], {
            applicationName: t.name,
            applicationDescription: t.description
        }),
        children: (0, i.jsx)(o.Tooltip, {
            tooltipContentClassName: y.tooltipContent,
            text: t.name,
            children: (e) => {
                let { ...n } = e;
                return (0, i.jsxs)('div', {
                    className: y.iconContainer,
                    ...n,
                    children: [
                        (0, i.jsx)(E.Z, {
                            application: t,
                            className: y.iconCard,
                            'aria-hidden': !0,
                            rendersPlaceholder: !0
                        }),
                        _ || f
                            ? (0, i.jsx)(o.Spinner, {
                                  type: o.Spinner.Type.PULSING_ELLIPSIS,
                                  className: y.spinner,
                                  itemClassName: f ? y.spinnerInnerRunning : void 0
                              })
                            : null
                    ]
                });
            }
        })
    });
}
function M(e) {
    let { frecentApps: t, loadingAppId: n, setLoadingAppId: r, analyticsLocations: l } = e;
    return (0, i.jsx)('div', {
        className: y.itemContainer,
        children: t.map((e) => {
            var t;
            return (0, i.jsx)(
                D,
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
let w = (e) => {
    (0, d.jW)(e, async () => {
        let { default: e } = await n.e('40706').then(n.bind(n, 610909));
        return (t) => (0, i.jsx)(e, { ...t });
    });
};
function k() {
    let e = (0, Z.en)(g.Z.APP_DMS_QUICK_LAUNCHER),
        t = (0, s.e7)([v.ZP], () => v.ZP.showPlayAgain),
        { frecentApps: n } = (0, _.f)({
            channel: void 0,
            onlyActivityApps: !0,
            allowCommandFetch: e,
            includeAuthorizedAppsAndFetch: !1
        });
    return t && e && n.length > 0;
}
function U(e) {
    let { bottomDivider: t } = e,
        n = (0, Z.en)(g.Z.APP_DMS_QUICK_LAUNCHER),
        { frecentApps: l } = (0, _.f)({
            channel: void 0,
            onlyActivityApps: !0,
            allowCommandFetch: n,
            includeAuthorizedAppsAndFetch: !1
        }),
        [s, o] = r.useState(void 0),
        { analyticsLocations: c } = (0, f.ZP)(g.Z.APP_DMS_QUICK_LAUNCHER),
        d = r.useRef(!1),
        u = r.useMemo(
            () =>
                l
                    .map((e) => e.application)
                    .filter(b.lm)
                    .slice(0, 5),
            [l]
        );
    return (
        r.useLayoutEffect(() => {
            var e;
            if (!d.current) (d.current = !0), A.default.track(P.rMx.APP_DMS_QUICK_LAUNCHER_IMPRESSION, { apps_dm_quick_launcher_application_ids: null !== (e = u.map((e) => Number(e.id))) && void 0 !== e ? e : [] });
        }, [u]),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)('div', {
                    className: y.container,
                    onContextMenu: w,
                    children: [
                        (0, i.jsx)(N.Z, {
                            className: a()(y.headerContainer, R.privateChannelsHeaderContainer),
                            children: (0, i.jsx)('div', {
                                className: y.textContainer,
                                children: (0, i.jsx)('span', {
                                    className: R.headerText,
                                    children: O.intl.string(O.t.vayAzs)
                                })
                            })
                        }),
                        (0, i.jsx)(M, {
                            frecentApps: u,
                            loadingAppId: s,
                            setLoadingAppId: o,
                            analyticsLocations: c
                        })
                    ]
                }),
                t
            ]
        })
    );
}
