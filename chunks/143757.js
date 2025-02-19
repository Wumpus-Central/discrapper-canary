n.d(t, { Z: () => w }), n(266796), n(47120);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    o = n.n(l),
    a = n(442837),
    s = n(481060),
    c = n(239091),
    u = n(2052),
    d = n(774226),
    p = n(317381),
    h = n(16609),
    g = n(403404),
    f = n(100527),
    m = n(906732),
    b = n(753972),
    _ = n(82295),
    E = n(984370),
    O = n(592125),
    N = n(626135),
    v = n(823379),
    y = n(415439),
    I = n(981631),
    C = n(388032),
    S = n(444181),
    T = n(730499);
function P() {
    return (P =
        Object.assign ||
        function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
        }).apply(this, arguments);
}
function j(e) {
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
function A(e) {
    let { analyticsLocations: t, analyticsContext: n } = e;
    return (0, r.jsx)(E.Z.Icon, {
        onClick: () => {
            (0, g.Z)({
                locationObject: n.location,
                openInPopout: !1,
                analyticsLocations: t,
                opensAppLauncherModal: !0
            });
        },
        icon: s.qJs,
        className: S.plusIcon,
        iconClassName: S.plusIcon,
        tooltip: C.NW.string(C.t.qJvTKS),
        tooltipPosition: 'top'
    });
}
function Z(e) {
    let { application: t, loadingAppId: n, setLoadingAppId: i, botUserId: l, analyticsLocations: c } = e,
        u = (0, a.e7)([O.Z], () => O.Z.getDMFromUserId(l)),
        g = (0, a.e7)([p.ZP], () => p.ZP.getCurrentEmbeddedActivity()),
        f = (0, d.GK)(),
        m = null != g && g.applicationId === t.id && (f || (0, h.pY)(g.location) === u),
        _ = n === t.id,
        E = null != n;
    return (0, r.jsx)(s.P3F, {
        className: o()(S.clickable, { [S.disabledClickable]: E }),
        onClick: () => (m || E ? null : (0, y.Kt)(t, i, c)),
        'aria-label': C.NW.formatToPlainString(C.t['zLhr9/'], {
            applicationName: t.name,
            applicationDescription: t.description
        }),
        children: (0, r.jsx)(s.ua7, {
            tooltipContentClassName: S.tooltipContent,
            text: t.name,
            children: (e) => {
                var n,
                    i,
                    l = P(
                        {},
                        (function (e) {
                            if (null == e) throw TypeError('Cannot destructure ' + e);
                            return e;
                        })(e)
                    );
                return (0, r.jsxs)(
                    'div',
                    ((n = j({ className: S.iconContainer }, l)),
                    (i = i =
                        {
                            children: [
                                (0, r.jsx)(b.Z, {
                                    application: t,
                                    className: S.iconCard,
                                    'aria-hidden': !0,
                                    rendersPlaceholder: !0
                                }),
                                _ || m
                                    ? (0, r.jsx)(s.$jN, {
                                          type: s.$jN.Type.PULSING_ELLIPSIS,
                                          className: S.spinner,
                                          itemClassName: m ? S.spinnerInnerRunning : void 0
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
function x(e) {
    let { frecentApps: t, loadingAppId: n, setLoadingAppId: i, analyticsLocations: l } = e;
    return (0, r.jsx)('div', {
        className: S.itemContainer,
        children: t.map((e) => {
            var t;
            return (0, r.jsx)(
                Z,
                {
                    application: e,
                    loadingAppId: n,
                    setLoadingAppId: i,
                    botUserId: null === (t = e.bot) || void 0 === t ? void 0 : t.id,
                    analyticsLocations: l
                },
                e.id
            );
        })
    });
}
let L = (e) => {
    (0, c.jW)(e, async () => {
        let { default: e } = await n.e('40706').then(n.bind(n, 610909));
        return (t) => (0, r.jsx)(e, j({}, t));
    });
};
function w(e) {
    let { bottomDivider: t } = e,
        n = (0, y.ZC)(),
        [l, a] = i.useState(void 0),
        { analyticsLocations: s } = (0, m.ZP)(f.Z.APP_DMS_QUICK_LAUNCHER),
        c = i.useRef(!1),
        d = (0, u.O)(),
        p = i.useMemo(() => n.filter(v.lm).slice(0, 8), [n]);
    return (
        i.useLayoutEffect(() => {
            var e;
            !c.current && ((c.current = !0), N.default.track(I.rMx.APP_DMS_QUICK_LAUNCHER_IMPRESSION, { apps_dm_quick_launcher_application_ids: null !== (e = p.map((e) => Number(e.id))) && void 0 !== e ? e : [] }));
        }, [p]),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsxs)('div', {
                    className: S.container,
                    onContextMenu: L,
                    children: [
                        (0, r.jsxs)(_.Z, {
                            className: o()(S.headerContainer, T.privateChannelsHeaderContainer),
                            children: [
                                (0, r.jsx)('span', {
                                    className: T.headerText,
                                    children: C.NW.string(C.t.vayAzs)
                                }),
                                (0, r.jsx)(A, {
                                    analyticsLocations: s,
                                    analyticsContext: d
                                })
                            ]
                        }),
                        (0, r.jsx)(x, {
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
