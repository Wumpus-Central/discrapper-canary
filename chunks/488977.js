n.d(t, { Z: () => S }), n(789020);
var i = n(200651),
    l = n(120356),
    r = n.n(l),
    o = n(442837),
    a = n(481060),
    s = n(367907),
    c = n(895924),
    u = n(970321),
    d = n(311819),
    m = n(299206),
    p = n(726721),
    h = n(726521),
    f = n(973616),
    v = n(914010),
    N = n(594174),
    x = n(626135),
    y = n(572004),
    b = n(630388),
    E = n(135431),
    C = n(541099),
    g = n(783097),
    j = n(570949),
    P = n(314734),
    A = n(981631),
    I = n(388032),
    O = n(770086);
function _(e) {
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
function S(e) {
    var t;
    let { application: l, context: S, className: T, sectionName: L } = e,
        R = (0, o.e7)([C.Z], () => C.Z.entrypoint()),
        M = (0, g.L1)(l),
        Z = (0, E.Eb)(M),
        k = (0, u.R)(l.id),
        w = (0, o.e7)(
            [v.Z],
            () => {
                var e;
                return null !== (e = v.Z.getGuildId()) && void 0 !== e ? e : void 0;
            },
            []
        ),
        U = {
            location: c.Vh.APP_LAUNCHER_APPLICATION_VIEW_MORE_MENU,
            application_id: l.id,
            section_name: L,
            source: C.Z.lastShownEntrypoint()
        },
        D = N.default.getCurrentUser(),
        W = p.Z.useExperiment({ location: c.Vh.APP_LAUNCHER_APPLICATION_VIEW_MORE_MENU }, { autoTrackExposure: !0 }).enabled,
        H = (0, m.Z)({
            id: l.id,
            label: I.NW.string(I.t['+NP/b2'])
        }),
        V = (0, j.P)({ application: l }),
        B = (0, b.yE)(null !== (t = l.flags) && void 0 !== t ? t : 0, A.udG.EMBEDDED),
        F = 'channel' === S.type ? S.channel : void 0;
    return (0, i.jsxs)('div', {
        className: O.container,
        children: [
            (0, i.jsx)(a.P3F, {
                onClick: () => {
                    let e = B
                        ? (0, d.H)({
                              applicationId: l.id,
                              referrerId: null == D ? void 0 : D.id
                          })
                        : (0, d.J)(_({ id: l.id }, M));
                    (0, y.JG)(e),
                        x.default.track(A.rMx.APP_LAUNCHER_APPLICATION_LINK_COPIED, {
                            application_id: l.id,
                            source: R
                        }),
                        (0, a.showToast)((0, a.createToast)(I.NW.string(I.t['L/PwZW']), a.ToastType.SUCCESS));
                },
                className: r()(O.clickable, T),
                'aria-label': I.NW.string(I.t.WqhZsr),
                children: (0, i.jsx)(a.xPt, {
                    size: 'sm',
                    color: a.TVs.colors.INTERACTIVE_ACTIVE
                })
            }),
            (0, i.jsx)(a.yRy, {
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (0, i.jsxs)(a.v2r, {
                        className: P.NN,
                        navId: 'app-details-more-menu',
                        onClose: t,
                        'aria-label': I.NW.string(I.t.AXIHpa),
                        onSelect: void 0,
                        children: [
                            (0, i.jsxs)(a.kSQ, {
                                children: [
                                    k &&
                                        (0, i.jsx)(a.sNh, {
                                            id: 'open-storefront',
                                            label: I.NW.string(I.t.kRvlKC),
                                            action: () => {
                                                (0, a.ZDy)(async () => {
                                                    let { default: e } = await Promise.all([n.e('66711'), n.e('77803'), n.e('17079')]).then(n.bind(n, 7225));
                                                    return (t) =>
                                                        (0, i.jsx)(e, {
                                                            transitionState: t.transitionState,
                                                            onClose: t.onClose,
                                                            appId: l.id,
                                                            guildId: w
                                                        });
                                                });
                                            }
                                        }),
                                    Z
                                        ? (0, i.jsx)(a.sNh, {
                                              id: 'add-app',
                                              label: I.NW.string(I.t.NgXl3N),
                                              action: () => {
                                                  var e, t;
                                                  null == M.customInstallUrl && (0, s.yw)(A.rMx.APP_LAUNCHER_OAUTH2_AUTHORIZE_OPENED, U),
                                                      (0, E.LO)(
                                                          ((e = _({}, M)),
                                                          (t = t =
                                                              {
                                                                  oauth2Callback: (e) => {
                                                                      let { location: t } = e;
                                                                      null != t && (0, s.yw)(A.rMx.APP_LAUNCHER_OAUTH2_AUTHORIZE_SUCCEEDED, U);
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
                                    W && l instanceof f.ZP
                                        ? (0, i.jsx)(a.sNh, {
                                              id: 'report-app',
                                              color: 'danger',
                                              label: I.NW.string(I.t.jhJze3),
                                              action: () => {
                                                  var e;
                                                  (0, h.uu)({
                                                      application: l,
                                                      entrypoint: 'app_launcher',
                                                      contextualGuildId: null !== (e = null == F ? void 0 : F.getGuildId()) && void 0 !== e ? e : void 0,
                                                      contextualChannelId: null == F ? void 0 : F.id
                                                  });
                                              }
                                          })
                                        : null,
                                    V
                                ]
                            }),
                            (0, i.jsx)(a.kSQ, { children: H })
                        ]
                    });
                },
                align: 'right',
                position: 'bottom',
                children: (e) =>
                    (0, i.jsx)(a.P3F, {
                        onClick: e.onClick,
                        className: r()(O.clickable, T),
                        'aria-label': I.NW.string(I.t.UKOtz8),
                        children: (0, i.jsx)(a.xhG, {
                            size: 'sm',
                            color: a.TVs.colors.INTERACTIVE_ACTIVE
                        })
                    })
            })
        ]
    });
}
