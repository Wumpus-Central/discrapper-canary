n.d(t, { Z: () => I }), n(789020);
var i = n(200651),
    l = n(120356),
    r = n.n(l),
    o = n(442837),
    a = n(481060),
    s = n(367907),
    c = n(895924),
    u = n(311819),
    d = n(299206),
    m = n(726721),
    p = n(726521),
    h = n(973616),
    f = n(594174),
    v = n(626135),
    N = n(572004),
    x = n(630388),
    y = n(135431),
    b = n(541099),
    E = n(783097),
    C = n(570949),
    j = n(314734),
    g = n(981631),
    P = n(388032),
    A = n(770086);
function O(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                var i;
                (i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = i);
            });
    }
    return e;
}
function I(e) {
    var t;
    let { application: n, context: l, className: I, sectionName: _ } = e,
        S = (0, o.e7)([b.Z], () => b.Z.entrypoint()),
        T = (0, E.L1)(n),
        L = (0, y.Eb)(T),
        R = {
            location: c.Vh.APP_LAUNCHER_APPLICATION_VIEW_MORE_MENU,
            application_id: n.id,
            section_name: _,
            source: b.Z.lastShownEntrypoint()
        },
        M = f.default.getCurrentUser(),
        Z = m.Z.useExperiment({ location: c.Vh.APP_LAUNCHER_APPLICATION_VIEW_MORE_MENU }, { autoTrackExposure: !0 }).enabled,
        k = (0, d.Z)({
            id: n.id,
            label: P.NW.string(P.t['+NP/b2'])
        }),
        w = (0, C.P)({ application: n }),
        U = (0, x.yE)(null !== (t = n.flags) && void 0 !== t ? t : 0, g.udG.EMBEDDED),
        D = 'channel' === l.type ? l.channel : void 0;
    return (0, i.jsxs)('div', {
        className: A.container,
        children: [
            (0, i.jsx)(a.P3F, {
                onClick: () => {
                    let e = U
                        ? (0, u.H)({
                              applicationId: n.id,
                              referrerId: null == M ? void 0 : M.id
                          })
                        : (0, u.J)(O({ id: n.id }, T));
                    (0, N.JG)(e),
                        v.default.track(g.rMx.APP_LAUNCHER_APPLICATION_LINK_COPIED, {
                            application_id: n.id,
                            source: S
                        }),
                        (0, a.showToast)((0, a.createToast)(P.NW.string(P.t['L/PwZW']), a.ToastType.SUCCESS));
                },
                className: r()(A.clickable, I),
                'aria-label': P.NW.string(P.t.WqhZsr),
                children: (0, i.jsx)(a.xPt, {
                    size: 'sm',
                    color: a.TVs.colors.INTERACTIVE_ACTIVE
                })
            }),
            (0, i.jsx)(a.yRy, {
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (0, i.jsxs)(a.v2r, {
                        className: j.NN,
                        navId: 'app-details-more-menu',
                        onClose: t,
                        'aria-label': P.NW.string(P.t.AXIHpa),
                        onSelect: void 0,
                        children: [
                            (0, i.jsxs)(a.kSQ, {
                                children: [
                                    L
                                        ? (0, i.jsx)(a.sNh, {
                                              id: 'add-app',
                                              label: P.NW.string(P.t.NgXl3N),
                                              action: () => {
                                                  var e, t;
                                                  null == T.customInstallUrl && (0, s.yw)(g.rMx.APP_LAUNCHER_OAUTH2_AUTHORIZE_OPENED, R),
                                                      (0, y.LO)(
                                                          ((e = O({}, T)),
                                                          (t = t =
                                                              {
                                                                  oauth2Callback: (e) => {
                                                                      let { location: t } = e;
                                                                      null != t && (0, s.yw)(g.rMx.APP_LAUNCHER_OAUTH2_AUTHORIZE_SUCCEEDED, R);
                                                                  },
                                                                  source: 'app_launcher_app_details'
                                                              }),
                                                          Object.getOwnPropertyDescriptors
                                                              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
                                                              : (function (e, t) {
                                                                    var n = Object.keys(e);
                                                                    if (Object.getOwnPropertySymbols) {
                                                                        var i = Object.getOwnPropertySymbols(e);
                                                                        n.push.apply(n, i);
                                                                    }
                                                                    return n;
                                                                })(Object(t)).forEach(function (n) {
                                                                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
                                                                }),
                                                          e)
                                                      );
                                              }
                                          })
                                        : null,
                                    Z && n instanceof h.ZP
                                        ? (0, i.jsx)(a.sNh, {
                                              id: 'report-app',
                                              color: 'danger',
                                              label: P.NW.string(P.t.jhJze3),
                                              action: () => {
                                                  var e;
                                                  (0, p.uu)({
                                                      application: n,
                                                      entrypoint: 'app_launcher',
                                                      contextualGuildId: null !== (e = null == D ? void 0 : D.getGuildId()) && void 0 !== e ? e : void 0,
                                                      contextualChannelId: null == D ? void 0 : D.id
                                                  });
                                              }
                                          })
                                        : null,
                                    w
                                ]
                            }),
                            (0, i.jsx)(a.kSQ, { children: k })
                        ]
                    });
                },
                align: 'right',
                position: 'bottom',
                children: (e) =>
                    (0, i.jsx)(a.P3F, {
                        onClick: e.onClick,
                        className: r()(A.clickable, I),
                        'aria-label': P.NW.string(P.t.UKOtz8),
                        children: (0, i.jsx)(a.xhG, {
                            size: 'sm',
                            color: a.TVs.colors.INTERACTIVE_ACTIVE
                        })
                    })
            })
        ]
    });
}
