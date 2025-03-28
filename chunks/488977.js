n.d(t, { Z: () => R }), n(789020);
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
    m = n(433534),
    h = n(299206),
    f = n(726721),
    v = n(726521),
    N = n(973616),
    x = n(914010),
    y = n(594174),
    b = n(626135),
    g = n(572004),
    j = n(630388),
    C = n(135431),
    E = n(541099),
    P = n(783097),
    A = n(570949),
    O = n(314734),
    I = n(981631),
    _ = n(388032),
    S = n(75840);
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
function L(e, t) {
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
function R(e) {
    var t;
    let { application: r, context: R, className: Z, sectionName: w } = e,
        k = l.useRef(null),
        M = (0, a.e7)([E.Z], () => E.Z.entrypoint()),
        W = (0, P.L1)(r),
        U = (0, m.E)(W),
        D = (0, d.R)(r.id),
        H = (0, a.e7)(
            [x.Z],
            () => {
                var e;
                return null !== (e = x.Z.getGuildId()) && void 0 !== e ? e : void 0;
            },
            []
        ),
        V = {
            location: u.Vh.APP_LAUNCHER_APPLICATION_VIEW_MORE_MENU,
            application_id: r.id,
            section_name: w,
            source: E.Z.lastShownEntrypoint()
        },
        B = y.default.getCurrentUser(),
        F = f.Z.useExperiment({ location: u.Vh.APP_LAUNCHER_APPLICATION_VIEW_MORE_MENU }, { autoTrackExposure: !0 }).enabled,
        G = (0, h.Z)({
            id: r.id,
            label: _.NW.string(_.t['+NP/b2'])
        }),
        z = (0, A.P)({ application: r }),
        q = (0, j.yE)(null !== (t = r.flags) && void 0 !== t ? t : 0, I.udG.EMBEDDED),
        X = 'channel' === R.type ? R.channel : void 0;
    return (0, i.jsxs)('div', {
        className: S.container,
        children: [
            (0, i.jsx)(s.P3F, {
                onClick: () => {
                    let e = q
                        ? (0, p.H)({
                              applicationId: r.id,
                              referrerId: null == B ? void 0 : B.id
                          })
                        : (0, p.J)(T({ id: r.id }, W));
                    (0, g.JG)(e),
                        b.default.track(I.rMx.APP_LAUNCHER_APPLICATION_LINK_COPIED, {
                            application_id: r.id,
                            source: M
                        }),
                        (0, s.showToast)((0, s.createToast)(_.NW.string(_.t['L/PwZW']), s.ToastType.SUCCESS));
                },
                className: o()(S.clickable, Z),
                'aria-label': _.NW.string(_.t.WqhZsr),
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
                        className: O.NN,
                        navId: 'app-details-more-menu',
                        onClose: t,
                        'aria-label': _.NW.string(_.t.AXIHpa),
                        onSelect: void 0,
                        children: [
                            (0, i.jsxs)(s.kSQ, {
                                children: [
                                    D &&
                                        (0, i.jsx)(s.sNh, {
                                            id: 'open-storefront',
                                            label: _.NW.string(_.t.kRvlKC),
                                            action: () => {
                                                (0, s.ZDy)(async () => {
                                                    let { default: e } = await Promise.all([n.e('74891'), n.e('77803'), n.e('43298')]).then(n.bind(n, 7225));
                                                    return (t) =>
                                                        (0, i.jsx)(e, {
                                                            transitionState: t.transitionState,
                                                            onClose: t.onClose,
                                                            appId: r.id,
                                                            guildId: H
                                                        });
                                                });
                                            }
                                        }),
                                    U
                                        ? (0, i.jsx)(s.sNh, {
                                              id: 'add-app',
                                              label: _.NW.string(_.t.NgXl3N),
                                              action: () => {
                                                  null == W.customInstallUrl && (0, c.yw)(I.rMx.APP_LAUNCHER_OAUTH2_AUTHORIZE_OPENED, V),
                                                      (0, C.L)(
                                                          L(T({}, W), {
                                                              oauth2Callback: (e) => {
                                                                  let { location: t } = e;
                                                                  null != t && (0, c.yw)(I.rMx.APP_LAUNCHER_OAUTH2_AUTHORIZE_SUCCEEDED, V);
                                                              },
                                                              source: 'app_launcher_app_details'
                                                          })
                                                      );
                                              }
                                          })
                                        : null,
                                    F && r instanceof N.ZP
                                        ? (0, i.jsx)(s.sNh, {
                                              id: 'report-app',
                                              color: 'danger',
                                              label: _.NW.string(_.t.jhJze3),
                                              action: () => {
                                                  var e;
                                                  (0, v.uu)({
                                                      application: r,
                                                      entrypoint: 'app_launcher',
                                                      contextualGuildId: null !== (e = null == X ? void 0 : X.getGuildId()) && void 0 !== e ? e : void 0,
                                                      contextualChannelId: null == X ? void 0 : X.id
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
                        L(T({ innerRef: k }, e), {
                            onClick: e.onClick,
                            className: o()(S.clickable, Z),
                            'aria-label': _.NW.string(_.t.UKOtz8),
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
