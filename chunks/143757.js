n.d(t, { Z: () => x }), n(266796), n(47120);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    o = n.n(l),
    a = n(442837),
    s = n(481060),
    c = n(239091),
    u = n(2052),
    d = n(317381),
    p = n(197386),
    h = n(403404),
    f = n(100527),
    g = n(906732),
    m = n(753972),
    b = n(82295),
    _ = n(984370),
    E = n(626135),
    O = n(823379),
    N = n(415439),
    v = n(981631),
    y = n(388032),
    I = n(597017),
    C = n(217833);
function S() {
    return (S =
        Object.assign ||
        function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
        }).apply(this, arguments);
}
function T(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function P(e) {
    let { analyticsLocations: t, analyticsContext: n } = e;
    return (0, r.jsx)(_.Z.Icon, {
        onClick: () => {
            (0, h.Z)({
                locationObject: n.location,
                openInPopout: !1,
                analyticsLocations: t,
                opensAppLauncherModal: !0
            });
        },
        icon: s.qJs,
        className: I.plusIcon,
        iconClassName: I.plusIcon,
        tooltip: y.NW.string(y.t.qJvTKS),
        tooltipPosition: 'top'
    });
}
function j(e) {
    let { application: t, loadingAppId: n, setLoadingAppId: l, analyticsLocations: c } = e,
        u = (0, a.e7)([d.ZP], () => d.ZP.getCurrentEmbeddedActivity()),
        h = null != u && u.applicationId === t.id,
        f = n === t.id,
        g = null != n,
        b = i.useCallback(() => {
            if (!g) {
                if (h) {
                    let e = u.location;
                    (0, p.Z)('guild_id' in e ? e.guild_id : null, e);
                } else (0, N.Kt)(t, l, c);
            }
        }, [h, c, t, l, u, g]);
    return (0, r.jsx)(s.P3F, {
        className: o()(I.clickable, { [I.disabledClickable]: g }),
        onClick: b,
        'aria-label': y.NW.formatToPlainString(y.t['zLhr9/'], {
            applicationName: t.name,
            applicationDescription: t.description
        }),
        children: (0, r.jsx)(s.ua7, {
            tooltipContentClassName: I.tooltipContent,
            text: t.name,
            children: (e) => {
                var n,
                    i,
                    l = S(
                        {},
                        (function (e) {
                            if (null == e) throw TypeError('Cannot destructure ' + e);
                            return e;
                        })(e)
                    );
                return (0, r.jsxs)(
                    'div',
                    ((n = T({ className: I.iconContainer }, l)),
                    (i = i =
                        {
                            children: [
                                (0, r.jsx)(m.Z, {
                                    application: t,
                                    className: I.iconCard,
                                    'aria-hidden': !0,
                                    rendersPlaceholder: !0
                                }),
                                f || h
                                    ? (0, r.jsx)(s.$jN, {
                                          type: s.$jN.Type.PULSING_ELLIPSIS,
                                          className: I.spinner,
                                          itemClassName: h ? I.spinnerInnerRunning : void 0
                                      })
                                    : null
                            ]
                        }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i))
                        : (function (e, t) {
                              var n = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var r = Object.getOwnPropertySymbols(e);
                                  n.push.apply(n, r);
                              }
                              return n;
                          })(Object(i)).forEach(function (e) {
                              Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e));
                          }),
                    n)
                );
            }
        })
    });
}
function A(e) {
    let { frecentApps: t, loadingAppId: n, setLoadingAppId: i, analyticsLocations: l } = e;
    return (0, r.jsx)('div', {
        className: I.itemContainer,
        children: t.map((e) =>
            (0, r.jsx)(
                j,
                {
                    application: e,
                    loadingAppId: n,
                    setLoadingAppId: i,
                    analyticsLocations: l
                },
                e.id
            )
        )
    });
}
let Z = (e) => {
    (0, c.jW)(e, async () => {
        let { default: e } = await n.e('40706').then(n.bind(n, 610909));
        return (t) => (0, r.jsx)(e, T({}, t));
    });
};
function x(e) {
    let { bottomDivider: t } = e,
        { frecentApps: n } = (0, N.ZC)(),
        [l, a] = i.useState(void 0),
        { analyticsLocations: s } = (0, g.ZP)(f.Z.APP_DMS_QUICK_LAUNCHER),
        c = i.useRef(!1),
        d = (0, u.O)(),
        p = i.useMemo(() => n.filter(O.lm).slice(0, 8), [n]);
    return (
        i.useLayoutEffect(() => {
            var e;
            !c.current && ((c.current = !0), E.default.track(v.rMx.APP_DMS_QUICK_LAUNCHER_IMPRESSION, { apps_dm_quick_launcher_application_ids: null !== (e = p.map((e) => Number(e.id))) && void 0 !== e ? e : [] }));
        }, [p]),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsxs)('div', {
                    className: I.container,
                    onContextMenu: Z,
                    children: [
                        (0, r.jsxs)(b.Z, {
                            className: o()(I.headerContainer, C.privateChannelsHeaderContainer),
                            children: [
                                (0, r.jsx)('span', {
                                    className: C.headerText,
                                    children: y.NW.string(y.t.vayAzs)
                                }),
                                (0, r.jsx)(P, {
                                    analyticsLocations: s,
                                    analyticsContext: d
                                })
                            ]
                        }),
                        (0, r.jsx)(A, {
                            frecentApps: p,
                            loadingAppId: l,
                            setLoadingAppId: a,
                            analyticsLocations: s
                        })
                    ]
                }),
                t
            ]
        })
    );
}
