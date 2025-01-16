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
            i = null !== (a = null === (r = x.Z.getApplication(e.id)) || void 0 === r ? void 0 : r.bot) && void 0 !== a ? a : null === (l = S.ZP.createFromServer(await (0, Z.UM)(e.id))) || void 0 === l ? void 0 : l.bot;
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
            (A.default.track(L.rMx.APP_DMS_QUICK_LAUNCHER_CLICKED, {
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
function j(e) {
    let { application: t, loadingAppId: n, setLoadingAppId: r, botUserId: l, analyticsLocations: c } = e,
        d = (0, s.e7)([T.Z], () => T.Z.getDMFromUserId(l)),
        m = (0, s.e7)([h.ZP], () => h.ZP.getCurrentEmbeddedActivity()),
        g = (0, u.G)(),
        f = null != m && m.applicationId === t.id && (g || (0, p.p)(m.location) === d),
        _ = n === t.id,
        I = null != n;
    return (0, i.jsx)(o.Clickable, {
        className: a()(O.clickable, { [O.disabledClickable]: I }),
        onClick: () => (f || I ? null : R(t, r, c)),
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
                        (0, i.jsx)(E.Z, {
                            application: t,
                            className: O.iconCard,
                            'aria-hidden': !0,
                            rendersPlaceholder: !0
                        }),
                        _ || f
                            ? (0, i.jsx)(o.Spinner, {
                                  type: o.Spinner.Type.PULSING_ELLIPSIS,
                                  className: O.spinner,
                                  itemClassName: f ? O.spinnerInnerRunning : void 0
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
    let e = (0, s.e7)([v.ZP], () => v.ZP.showPlayAgain),
        { frecentApps: t } = (0, _.f)({
            channel: void 0,
            onlyActivityApps: !0,
            allowCommandFetch: !0,
            includeAuthorizedAppsAndFetch: !1
        });
    return e && t.length > 0;
}
function k(e) {
    let { bottomDivider: t } = e,
        { frecentApps: n } = (0, _.f)({
            channel: void 0,
            onlyActivityApps: !0,
            allowCommandFetch: !0,
            includeAuthorizedAppsAndFetch: !1
        }),
        [l, s] = r.useState(void 0),
        { analyticsLocations: o } = (0, f.ZP)(g.Z.APP_DMS_QUICK_LAUNCHER),
        c = r.useRef(!1),
        d = r.useMemo(
            () =>
                n
                    .map((e) => e.application)
                    .filter(b.lm)
                    .slice(0, 5),
            [n]
        );
    return (
        r.useLayoutEffect(() => {
            var e;
            if (!c.current) (c.current = !0), A.default.track(L.rMx.APP_DMS_QUICK_LAUNCHER_IMPRESSION, { apps_dm_quick_launcher_application_ids: null !== (e = d.map((e) => Number(e.id))) && void 0 !== e ? e : [] });
        }, [d]),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)('div', {
                    className: O.container,
                    onContextMenu: M,
                    children: [
                        (0, i.jsx)(N.Z, {
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
                            frecentApps: d,
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
