n.d(t, { Z: () => R }), n(997841);
var i = n(255367),
    r = n(73800),
    l = n(120356),
    o = n.n(l),
    a = n(442837),
    c = n(481060),
    s = n(367907),
    u = n(895924),
    d = n(970321),
    p = n(311819),
    m = n(433534),
    f = n(299206),
    h = n(726721),
    b = n(726521),
    _ = n(973616),
    C = n(914010),
    v = n(594174),
    x = n(626135),
    y = n(572004),
    g = n(630388),
    N = n(135431),
    j = n(541099),
    P = n(783097),
    E = n(570949),
    A = n(314734),
    I = n(981631),
    O = n(388032),
    S = n(133404);
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
    let { application: l, context: R, className: w, sectionName: Z } = e,
        k = r.useRef(null),
        M = (0, a.e7)([j.Z], () => j.Z.entrypoint()),
        D = (0, P.L1)(l),
        U = (0, m.Eb)(D),
        B = (0, d.R)(l.id),
        H = (0, a.e7)(
            [C.Z],
            () => {
                var e;
                return null != (e = C.Z.getGuildId()) ? e : void 0;
            },
            []
        ),
        V = {
            location: u.Vh.APP_LAUNCHER_APPLICATION_VIEW_MORE_MENU,
            application_id: l.id,
            section_name: Z,
            source: j.Z.lastShownEntrypoint()
        },
        W = v.default.getCurrentUser(),
        F = h.Z.useExperiment({ location: u.Vh.APP_LAUNCHER_APPLICATION_VIEW_MORE_MENU }, { autoTrackExposure: !0 }).enabled,
        z = (0, f.Z)({
            id: l.id,
            label: O.intl.string(O.t['+NP/b2'])
        }),
        G = (0, E.P)({ application: l }),
        q = (0, g.yE)(null != (t = l.flags) ? t : 0, I.udG.EMBEDDED),
        Y = 'channel' === R.type ? R.channel : void 0;
    return (0, i.jsxs)('div', {
        className: S.container,
        children: [
            (0, i.jsx)(c.P3F, {
                onClick: () => {
                    let e = q
                        ? (0, p.H)({
                              applicationId: l.id,
                              referrerId: null == W ? void 0 : W.id
                          })
                        : (0, p.J)(T({ id: l.id }, D));
                    (0, y.JG)(e, () => (0, c.showToast)((0, c.createToast)(O.intl.string(O.t['L/PwZW']), c.ToastType.SUCCESS))),
                        x.default.track(I.rMx.APP_LAUNCHER_APPLICATION_LINK_COPIED, {
                            application_id: l.id,
                            source: M
                        });
                },
                className: o()(S.clickable, w),
                'aria-label': O.intl.string(O.t.WqhZsr),
                children: (0, i.jsx)(c.xPt, {
                    size: 'sm',
                    color: c.TVs.colors.INTERACTIVE_ACTIVE
                })
            }),
            (0, i.jsx)(c.yRy, {
                targetElementRef: k,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (0, i.jsxs)(c.v2r, {
                        className: A.NN,
                        navId: 'app-details-more-menu',
                        onClose: t,
                        'aria-label': O.intl.string(O.t.AXIHpa),
                        onSelect: void 0,
                        children: [
                            (0, i.jsxs)(c.kSQ, {
                                children: [
                                    B &&
                                        (0, i.jsx)(c.sNh, {
                                            id: 'open-storefront',
                                            label: O.intl.string(O.t.kRvlKC),
                                            action: () => {
                                                (0, c.ZDy)(async () => {
                                                    let { default: e } = await Promise.all([n.e('74891'), n.e('77803'), n.e('96616')]).then(n.bind(n, 7225));
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
                                    U
                                        ? (0, i.jsx)(c.sNh, {
                                              id: 'add-app',
                                              label: O.intl.string(O.t.NgXl3N),
                                              action: () => {
                                                  null == D.customInstallUrl && (0, s.yw)(I.rMx.APP_LAUNCHER_OAUTH2_AUTHORIZE_OPENED, V),
                                                      (0, N.L)(
                                                          L(T({}, D), {
                                                              oauth2Callback: (e) => {
                                                                  let { location: t } = e;
                                                                  null != t && (0, s.yw)(I.rMx.APP_LAUNCHER_OAUTH2_AUTHORIZE_SUCCEEDED, V);
                                                              },
                                                              source: 'app_launcher_app_details'
                                                          })
                                                      );
                                              }
                                          })
                                        : null,
                                    F && l instanceof _.ZP
                                        ? (0, i.jsx)(c.sNh, {
                                              id: 'report-app',
                                              color: 'danger',
                                              label: O.intl.string(O.t.jhJze3),
                                              action: () => {
                                                  var e;
                                                  (0, b.uu)({
                                                      application: l,
                                                      entrypoint: 'app_launcher',
                                                      contextualGuildId: null != (e = null == Y ? void 0 : Y.getGuildId()) ? e : void 0,
                                                      contextualChannelId: null == Y ? void 0 : Y.id
                                                  });
                                              }
                                          })
                                        : null,
                                    G
                                ]
                            }),
                            (0, i.jsx)(c.kSQ, { children: z })
                        ]
                    });
                },
                align: 'right',
                position: 'bottom',
                children: (e) =>
                    (0, i.jsx)(
                        c.P3F,
                        L(T({ innerRef: k }, e), {
                            onClick: e.onClick,
                            className: o()(S.clickable, w),
                            'aria-label': O.intl.string(O.t.UKOtz8),
                            children: (0, i.jsx)(c.xhG, {
                                size: 'sm',
                                color: c.TVs.colors.INTERACTIVE_ACTIVE
                            })
                        })
                    )
            })
        ]
    });
}
