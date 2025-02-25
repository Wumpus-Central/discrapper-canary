n.d(t, { Z: () => Z }), n(266796), n(47120);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    o = n.n(l),
    a = n(442837),
    s = n(481060),
    c = n(239091),
    u = n(2052),
    d = n(317381),
    p = n(403404),
    h = n(100527),
    f = n(906732),
    g = n(753972),
    m = n(82295),
    b = n(984370),
    _ = n(626135),
    E = n(823379),
    O = n(415439),
    N = n(981631),
    v = n(388032),
    y = n(444181),
    I = n(730499);
function C() {
    return (C =
        Object.assign ||
        function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
        }).apply(this, arguments);
}
function S(e) {
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
function T(e) {
    let { analyticsLocations: t, analyticsContext: n } = e;
    return (0, r.jsx)(b.Z.Icon, {
        onClick: () => {
            (0, p.Z)({
                locationObject: n.location,
                openInPopout: !1,
                analyticsLocations: t,
                opensAppLauncherModal: !0
            });
        },
        icon: s.qJs,
        className: y.plusIcon,
        iconClassName: y.plusIcon,
        tooltip: v.NW.string(v.t.qJvTKS),
        tooltipPosition: 'top'
    });
}
function P(e) {
    let { application: t, loadingAppId: n, setLoadingAppId: i, analyticsLocations: l } = e,
        c = (0, a.e7)([d.ZP], () => d.ZP.getCurrentEmbeddedActivity()),
        u = null != c && c.applicationId === t.id,
        p = n === t.id,
        h = null != n;
    return (0, r.jsx)(s.P3F, {
        className: o()(y.clickable, { [y.disabledClickable]: h }),
        onClick: () => (u || h ? null : (0, O.Kt)(t, i, l)),
        'aria-label': v.NW.formatToPlainString(v.t['zLhr9/'], {
            applicationName: t.name,
            applicationDescription: t.description
        }),
        children: (0, r.jsx)(s.ua7, {
            tooltipContentClassName: y.tooltipContent,
            text: t.name,
            children: (e) => {
                var n,
                    i,
                    l = C(
                        {},
                        (function (e) {
                            if (null == e) throw TypeError('Cannot destructure ' + e);
                            return e;
                        })(e)
                    );
                return (0, r.jsxs)(
                    'div',
                    ((n = S({ className: y.iconContainer }, l)),
                    (i = i =
                        {
                            children: [
                                (0, r.jsx)(g.Z, {
                                    application: t,
                                    className: y.iconCard,
                                    'aria-hidden': !0,
                                    rendersPlaceholder: !0
                                }),
                                p || u
                                    ? (0, r.jsx)(s.$jN, {
                                          type: s.$jN.Type.PULSING_ELLIPSIS,
                                          className: y.spinner,
                                          itemClassName: u ? y.spinnerInnerRunning : void 0
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
function j(e) {
    let { frecentApps: t, loadingAppId: n, setLoadingAppId: i, analyticsLocations: l } = e;
    return (0, r.jsx)('div', {
        className: y.itemContainer,
        children: t.map((e) =>
            (0, r.jsx)(
                P,
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
let A = (e) => {
    (0, c.jW)(e, async () => {
        let { default: e } = await n.e('40706').then(n.bind(n, 610909));
        return (t) => (0, r.jsx)(e, S({}, t));
    });
};
function Z(e) {
    let { bottomDivider: t } = e,
        { frecentApps: n } = (0, O.ZC)(),
        [l, a] = i.useState(void 0),
        { analyticsLocations: s } = (0, f.ZP)(h.Z.APP_DMS_QUICK_LAUNCHER),
        c = i.useRef(!1),
        d = (0, u.O)(),
        p = i.useMemo(() => n.filter(E.lm).slice(0, 8), [n]);
    return (
        i.useLayoutEffect(() => {
            var e;
            !c.current && ((c.current = !0), _.default.track(N.rMx.APP_DMS_QUICK_LAUNCHER_IMPRESSION, { apps_dm_quick_launcher_application_ids: null !== (e = p.map((e) => Number(e.id))) && void 0 !== e ? e : [] }));
        }, [p]),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsxs)('div', {
                    className: y.container,
                    onContextMenu: A,
                    children: [
                        (0, r.jsxs)(m.Z, {
                            className: o()(y.headerContainer, I.privateChannelsHeaderContainer),
                            children: [
                                (0, r.jsx)('span', {
                                    className: I.headerText,
                                    children: v.NW.string(v.t.vayAzs)
                                }),
                                (0, r.jsx)(T, {
                                    analyticsLocations: s,
                                    analyticsContext: d
                                })
                            ]
                        }),
                        (0, r.jsx)(j, {
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
