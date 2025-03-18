n.d(t, { Z: () => Z }), n(266796), n(47120);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    a = n.n(l),
    o = n(442837),
    s = n(481060),
    c = n(239091),
    u = n(317381),
    d = n(197386),
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
    y = n(597017),
    I = n(217833);
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
    let { analyticsLocations: t } = e;
    return (0, r.jsx)(b.Z.Icon, {
        onClick: () => {
            (0, p.Z)({
                openInPopout: !1,
                analyticsLocations: t
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
    let { application: t, loadingAppId: n, setLoadingAppId: l, analyticsLocations: c } = e,
        p = (0, o.e7)([u.ZP], () => u.ZP.getCurrentEmbeddedActivity()),
        h = null != p && p.applicationId === t.id,
        f = n === t.id,
        m = null != n,
        b = i.useCallback(() => {
            if (!m) {
                if (h) {
                    let e = p.location;
                    (0, d.Z)('guild_id' in e ? e.guild_id : null, e);
                } else (0, O.Kt)(t, l, c);
            }
        }, [h, c, t, l, p, m]);
    return (0, r.jsx)(s.P3F, {
        className: a()(y.clickable, { [y.disabledClickable]: m }),
        onClick: b,
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
                                f || h
                                    ? (0, r.jsx)(s.$jN, {
                                          type: s.$jN.Type.PULSING_ELLIPSIS,
                                          className: y.spinner,
                                          itemClassName: h ? y.spinnerInnerRunning : void 0
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
        [l, o] = i.useState(void 0),
        { analyticsLocations: s } = (0, f.ZP)(h.Z.APP_DMS_QUICK_LAUNCHER_FRECENCY),
        c = i.useRef(!1),
        u = i.useMemo(() => n.filter(E.lm).slice(0, 8), [n]);
    return (
        i.useLayoutEffect(() => {
            var e;
            !c.current && ((c.current = !0), _.default.track(N.rMx.APP_DMS_QUICK_LAUNCHER_IMPRESSION, { apps_dm_quick_launcher_application_ids_frecency_v2: null !== (e = u.map((e) => e.id)) && void 0 !== e ? e : [] }));
        }, [u]),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsxs)('div', {
                    className: y.container,
                    onContextMenu: A,
                    children: [
                        (0, r.jsxs)(m.Z, {
                            className: a()(y.headerContainer, I.privateChannelsHeaderContainer),
                            children: [
                                (0, r.jsx)('span', {
                                    className: I.headerText,
                                    children: v.NW.string(v.t.vayAzs)
                                }),
                                (0, r.jsx)(T, { analyticsLocations: s })
                            ]
                        }),
                        (0, r.jsx)(j, {
                            frecentApps: u,
                            loadingAppId: l,
                            setLoadingAppId: o,
                            analyticsLocations: s
                        })
                    ]
                }),
                t
            ]
        })
    );
}
