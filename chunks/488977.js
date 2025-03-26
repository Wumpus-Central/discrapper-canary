n.d(t, { Z: () => L }), n(789020);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    o = n.n(r),
    a = n(442837),
    s = n(481060),
    c = n(367907),
    u = n(895924),
    d = n(970321),
    p = n(311819),
    m = n(299206),
    h = n(726721),
    f = n(726521),
    v = n(973616),
    N = n(914010),
    x = n(594174),
    y = n(626135),
    b = n(572004),
    g = n(630388),
    j = n(135431),
    C = n(541099),
    E = n(783097),
    P = n(570949),
    A = n(314734),
    O = n(981631),
    I = n(388032),
    _ = n(75840);
function S(e) {
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
function T(e, t) {
    return (
        (t = null != t ? t : {}),
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
        e
    );
}
function L(e) {
    var t;
    let { application: r, context: L, className: R, sectionName: Z } = e,
        w = l.useRef(null),
        k = (0, a.e7)([C.Z], () => C.Z.entrypoint()),
        M = (0, E.L1)(r),
        W = (0, j.Eb)(M),
        U = (0, d.R)(r.id),
        D = (0, a.e7)(
            [N.Z],
            () => {
                var e;
                return null !== (e = N.Z.getGuildId()) && void 0 !== e ? e : void 0;
            },
            []
        ),
        H = {
            location: u.Vh.APP_LAUNCHER_APPLICATION_VIEW_MORE_MENU,
            application_id: r.id,
            section_name: Z,
            source: C.Z.lastShownEntrypoint()
        },
        V = x.default.getCurrentUser(),
        B = h.Z.useExperiment({ location: u.Vh.APP_LAUNCHER_APPLICATION_VIEW_MORE_MENU }, { autoTrackExposure: !0 }).enabled,
        F = (0, m.Z)({
            id: r.id,
            label: I.NW.string(I.t['+NP/b2'])
        }),
        G = (0, P.P)({ application: r }),
        z = (0, g.yE)(null !== (t = r.flags) && void 0 !== t ? t : 0, O.udG.EMBEDDED),
        q = 'channel' === L.type ? L.channel : void 0;
    return (0, i.jsxs)('div', {
        className: _.container,
        children: [
            (0, i.jsx)(s.P3F, {
                onClick: () => {
                    let e = z
                        ? (0, p.H)({
                              applicationId: r.id,
                              referrerId: null == V ? void 0 : V.id
                          })
                        : (0, p.J)(S({ id: r.id }, M));
                    (0, b.JG)(e),
                        y.default.track(O.rMx.APP_LAUNCHER_APPLICATION_LINK_COPIED, {
                            application_id: r.id,
                            source: k
                        }),
                        (0, s.showToast)((0, s.createToast)(I.NW.string(I.t['L/PwZW']), s.ToastType.SUCCESS));
                },
                className: o()(_.clickable, R),
                'aria-label': I.NW.string(I.t.WqhZsr),
                children: (0, i.jsx)(s.xPt, {
                    size: 'sm',
                    color: s.TVs.colors.INTERACTIVE_ACTIVE
                })
            }),
            (0, i.jsx)(s.yRy, {
                targetElementRef: w,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (0, i.jsxs)(s.v2r, {
                        className: A.NN,
                        navId: 'app-details-more-menu',
                        onClose: t,
                        'aria-label': I.NW.string(I.t.AXIHpa),
                        onSelect: void 0,
                        children: [
                            (0, i.jsxs)(s.kSQ, {
                                children: [
                                    U &&
                                        (0, i.jsx)(s.sNh, {
                                            id: 'open-storefront',
                                            label: I.NW.string(I.t.kRvlKC),
                                            action: () => {
                                                (0, s.ZDy)(async () => {
                                                    let { default: e } = await Promise.all([n.e('74891'), n.e('77803'), n.e('43298')]).then(n.bind(n, 7225));
                                                    return (t) =>
                                                        (0, i.jsx)(e, {
                                                            transitionState: t.transitionState,
                                                            onClose: t.onClose,
                                                            appId: r.id,
                                                            guildId: D
                                                        });
                                                });
                                            }
                                        }),
                                    W
                                        ? (0, i.jsx)(s.sNh, {
                                              id: 'add-app',
                                              label: I.NW.string(I.t.NgXl3N),
                                              action: () => {
                                                  null == M.customInstallUrl && (0, c.yw)(O.rMx.APP_LAUNCHER_OAUTH2_AUTHORIZE_OPENED, H),
                                                      (0, j.LO)(
                                                          T(S({}, M), {
                                                              oauth2Callback: (e) => {
                                                                  let { location: t } = e;
                                                                  null != t && (0, c.yw)(O.rMx.APP_LAUNCHER_OAUTH2_AUTHORIZE_SUCCEEDED, H);
                                                              },
                                                              source: 'app_launcher_app_details'
                                                          })
                                                      );
                                              }
                                          })
                                        : null,
                                    B && r instanceof v.ZP
                                        ? (0, i.jsx)(s.sNh, {
                                              id: 'report-app',
                                              color: 'danger',
                                              label: I.NW.string(I.t.jhJze3),
                                              action: () => {
                                                  var e;
                                                  (0, f.uu)({
                                                      application: r,
                                                      entrypoint: 'app_launcher',
                                                      contextualGuildId: null !== (e = null == q ? void 0 : q.getGuildId()) && void 0 !== e ? e : void 0,
                                                      contextualChannelId: null == q ? void 0 : q.id
                                                  });
                                              }
                                          })
                                        : null,
                                    G
                                ]
                            }),
                            (0, i.jsx)(s.kSQ, { children: F })
                        ]
                    });
                },
                align: 'right',
                position: 'bottom',
                children: (e) =>
                    (0, i.jsx)(
                        s.P3F,
                        T(S({ innerRef: w }, e), {
                            onClick: e.onClick,
                            className: o()(_.clickable, R),
                            'aria-label': I.NW.string(I.t.UKOtz8),
                            children: (0, i.jsx)(s.xhG, {
                                size: 'sm',
                                color: s.TVs.colors.INTERACTIVE_ACTIVE
                            })
                        })
                    )
            })
        ]
    });
}
