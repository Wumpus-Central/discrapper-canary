n.d(t, {
    Z: function () {
        return k;
    },
    n: function () {
        return w;
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
    u = n(317381),
    h = n(122613),
    m = n(16609),
    p = n(100527),
    g = n(906732),
    f = n(87005),
    _ = n(753972),
    E = n(895924),
    I = n(812236),
    C = n(82295),
    N = n(740492),
    v = n(973616),
    S = n(592125),
    T = n(626135),
    b = n(823379),
    A = n(404295),
    Z = n(728345),
    x = n(812206),
    L = n(981631),
    P = n(388032),
    O = n(914333),
    y = n(312565);
async function R(e, t, n) {
    t(e.id);
    let i = e.bot;
    if (null == i)
        try {
            var r, l, a;
            i = null !== (a = null === (r = x.Z.getApplication(e.id)) || void 0 === r ? void 0 : r.bot) && void 0 !== a ? a : null === (l = v.ZP.createFromServer(await (0, Z.UM)(e.id))) || void 0 === l ? void 0 : l.bot;
        } catch (e) {
            t(void 0);
            return;
        }
    if (null != i) {
        let r,
            l = null == S.Z.getDMFromUserId(i.id);
        try {
            r = await c.Z.openPrivateChannel([i.id], !1, !1, p.Z.APP_DMS_QUICK_LAUNCHER);
        } catch (e) {
            t(void 0);
        }
        if (
            (T.default.track(L.rMx.APP_DMS_QUICK_LAUNCHER_CLICKED, {
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
            await (0, I.ZP)(r, e.id);
        } catch (e) {
            if (e.message === I.sV) {
                t(void 0);
                return;
            }
        }
        await (0, h.Z)({
            targetApplicationId: e.id,
            channelId: r,
            analyticsLocations: n,
            commandOrigin: E.bB.APP_DMS_ENTRY_POINT_COMMAND_BUTTON,
            onExecutedCallback() {
                t(void 0);
            }
        });
    } else t(void 0);
}
function j(e) {
    let { application: t, loadingAppId: n, setLoadingAppId: r, botUserId: l, analyticsLocations: c } = e,
        d = (0, s.e7)([S.Z], () => S.Z.getDMFromUserId(l)),
        h = (0, s.e7)([u.ZP], () => u.ZP.getCurrentEmbeddedActivity()),
        p = null != h && h.applicationId === t.id && (0, m.p)(h.location) === d,
        g = n === t.id,
        f = null != n;
    return (0, i.jsx)(o.Clickable, {
        className: a()(O.clickable, { [O.disabledClickable]: f }),
        onClick: () => (p || f ? null : R(t, r, c)),
        'aria-label': P.intl.formatToPlainString(P.t['zLhr9/'], {
            applicationName: t.name,
            applicationDescription: t.description
        }),
        children: (0, i.jsx)(o.Tooltip, {
            tooltipContentClassName: O.tooltipContent,
            text: t.name,
            children: (e) => {
                let { ...n } = e;
                return (0, i.jsxs)('div', {
                    className: O.iconContainer,
                    ...n,
                    children: [
                        (0, i.jsx)(_.Z, {
                            application: t,
                            className: O.iconCard,
                            'aria-hidden': !0,
                            rendersPlaceholder: !0
                        }),
                        g || p
                            ? (0, i.jsx)(o.Spinner, {
                                  type: o.Spinner.Type.PULSING_ELLIPSIS,
                                  className: O.spinner,
                                  itemClassName: p ? O.spinnerInnerRunning : void 0
                              })
                            : null
                    ]
                });
            }
        })
    });
}
function D(e) {
    let { frecentApps: t, loadingAppId: n, setLoadingAppId: r, analyticsLocations: l } = e;
    return (0, i.jsx)('div', {
        className: O.itemContainer,
        children: t.map((e) => {
            var t;
            return (0, i.jsx)(
                j,
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
let M = (e) => {
    (0, d.jW)(e, async () => {
        let { default: e } = await n.e('40706').then(n.bind(n, 610909));
        return (t) => (0, i.jsx)(e, { ...t });
    });
};
function w() {
    let e = (0, A.en)(p.Z.APP_DMS_QUICK_LAUNCHER),
        t = (0, s.e7)([N.ZP], () => N.ZP.showPlayAgain),
        { frecentApps: n } = (0, f.f)({
            channel: void 0,
            onlyActivityApps: !0,
            allowCommandFetch: e,
            includeAuthorizedAppsAndFetch: !1
        });
    return t && e && n.length > 0;
}
function k(e) {
    let { bottomDivider: t } = e,
        n = (0, A.en)(p.Z.APP_DMS_QUICK_LAUNCHER),
        { frecentApps: l } = (0, f.f)({
            channel: void 0,
            onlyActivityApps: !0,
            allowCommandFetch: n,
            includeAuthorizedAppsAndFetch: !1
        }),
        [s, o] = r.useState(void 0),
        { analyticsLocations: c } = (0, g.ZP)(p.Z.APP_DMS_QUICK_LAUNCHER),
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
            if (!d.current) (d.current = !0), T.default.track(L.rMx.APP_DMS_QUICK_LAUNCHER_IMPRESSION, { apps_dm_quick_launcher_application_ids: null !== (e = u.map((e) => Number(e.id))) && void 0 !== e ? e : [] });
        }, [u]),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)('div', {
                    className: O.container,
                    onContextMenu: M,
                    children: [
                        (0, i.jsx)(C.Z, {
                            className: a()(O.headerContainer, y.privateChannelsHeaderContainer),
                            children: (0, i.jsx)('div', {
                                className: O.textContainer,
                                children: (0, i.jsx)('span', {
                                    className: y.headerText,
                                    children: P.intl.string(P.t.vayAzs)
                                })
                            })
                        }),
                        (0, i.jsx)(D, {
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
