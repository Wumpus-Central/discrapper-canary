n.d(t, { Z: () => L }), n(997841);
var i = n(255367),
    r = n(73800),
    l = n(120356),
    o = n.n(l),
    a = n(442837),
    s = n(481060),
    c = n(367907),
    u = n(895924),
    d = n(970321),
    p = n(311819),
    m = n(433534),
    f = n(299206),
    h = n(726721),
    b = n(726521),
    _ = n(973616),
    y = n(914010),
    v = n(594174),
    x = n(626135),
    C = n(572004),
    g = n(630388),
    j = n(135431),
    P = n(541099),
    N = n(783097),
    O = n(570949),
    E = n(314734),
    A = n(981631),
    I = n(388032),
    S = n(640724);
function T(e) {
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
function w(e, t) {
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
    let { application: l, context: L, className: R, sectionName: Z } = e,
        k = r.useRef(null),
        M = (0, a.e7)([P.Z], () => P.Z.entrypoint()),
        D = (0, N.L1)(l),
        B = (0, m.Eb)(D),
        U = (0, d.R)(l.id),
        H = (0, a.e7)(
            [y.Z],
            () => {
                var e;
                return null != (e = y.Z.getGuildId()) ? e : void 0;
            },
            []
        ),
        W = {
            location: u.Vh.APP_LAUNCHER_APPLICATION_VIEW_MORE_MENU,
            application_id: l.id,
            section_name: Z,
            source: P.Z.lastShownEntrypoint()
        },
        V = v.default.getCurrentUser(),
        F = h.Z.useExperiment({ location: u.Vh.APP_LAUNCHER_APPLICATION_VIEW_MORE_MENU }, { autoTrackExposure: !0 }).enabled,
        G = (0, f.Z)({
            id: l.id,
            label: I.intl.string(I.t['+NP/b2'])
        }),
        z = (0, O.P)({ application: l }),
        X = (0, g.yE)(null != (t = l.flags) ? t : 0, A.udG.EMBEDDED),
        q = 'channel' === L.type ? L.channel : void 0;
    return (0, i.jsxs)('div', {
        className: S.container,
        children: [
            (0, i.jsx)(s.P3F, {
                onClick: () => {
                    let e = X
                        ? (0, p.H)({
                              applicationId: l.id,
                              referrerId: null == V ? void 0 : V.id
                          })
                        : (0, p.J)(T({ id: l.id }, D));
                    (0, C.JG)(e, () => (0, s.showToast)((0, s.createToast)(I.intl.string(I.t['L/PwZW']), s.ToastType.SUCCESS))),
                        x.default.track(A.rMx.APP_LAUNCHER_APPLICATION_LINK_COPIED, {
                            application_id: l.id,
                            source: M
                        });
                },
                className: o()(S.clickable, R),
                'aria-label': I.intl.string(I.t.WqhZsr),
                children: (0, i.jsx)(s.xPt, {
                    size: 'sm',
                    color: s.TVs.colors.INTERACTIVE_ACTIVE
                })
            }),
            (0, i.jsx)(s.yRy, {
                targetElementRef: k,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (0, i.jsxs)(s.v2r, {
                        className: E.NN,
                        navId: 'app-details-more-menu',
                        onClose: t,
                        'aria-label': I.intl.string(I.t.AXIHpa),
                        onSelect: void 0,
                        children: [
                            (0, i.jsxs)(s.kSQ, {
                                children: [
                                    U &&
                                        (0, i.jsx)(s.sNh, {
                                            id: 'open-storefront',
                                            label: I.intl.string(I.t.kRvlKC),
                                            action: () => {
                                                (0, s.ZDy)(async () => {
                                                    let { default: e } = await Promise.all([n.e('74891'), n.e('77803'), n.e('53458')]).then(n.bind(n, 7225));
                                                    return (t) =>
                                                        (0, i.jsx)(e, {
                                                            transitionState: t.transitionState,
                                                            onClose: t.onClose,
                                                            appId: l.id,
                                                            guildId: H
                                                        });
                                                });
                                            }
                                        }),
                                    B
                                        ? (0, i.jsx)(s.sNh, {
                                              id: 'add-app',
                                              label: I.intl.string(I.t.NgXl3N),
                                              action: () => {
                                                  null == D.customInstallUrl && (0, c.yw)(A.rMx.APP_LAUNCHER_OAUTH2_AUTHORIZE_OPENED, W),
                                                      (0, j.L)(
                                                          w(T({}, D), {
                                                              oauth2Callback: (e) => {
                                                                  let { location: t } = e;
                                                                  null != t && (0, c.yw)(A.rMx.APP_LAUNCHER_OAUTH2_AUTHORIZE_SUCCEEDED, W);
                                                              },
                                                              source: 'app_launcher_app_details'
                                                          })
                                                      );
                                              }
                                          })
                                        : null,
                                    F && l instanceof _.ZP
                                        ? (0, i.jsx)(s.sNh, {
                                              id: 'report-app',
                                              color: 'danger',
                                              label: I.intl.string(I.t.jhJze3),
                                              action: () => {
                                                  var e;
                                                  (0, b.uu)({
                                                      application: l,
                                                      entrypoint: 'app_launcher',
                                                      contextualGuildId: null != (e = null == q ? void 0 : q.getGuildId()) ? e : void 0,
                                                      contextualChannelId: null == q ? void 0 : q.id
                                                  });
                                              }
                                          })
                                        : null,
                                    z
                                ]
                            }),
                            (0, i.jsx)(s.kSQ, { children: G })
                        ]
                    });
                },
                align: 'right',
                position: 'bottom',
                children: (e) =>
                    (0, i.jsx)(
                        s.P3F,
                        w(T({ innerRef: k }, e), {
                            onClick: e.onClick,
                            className: o()(S.clickable, R),
                            'aria-label': I.intl.string(I.t.UKOtz8),
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
