n.d(t, { Z: () => w }), n(997841);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    a = n.n(l),
    o = n(442837),
    s = n(481060),
    c = n(367907),
    u = n(895924),
    d = n(970321),
    p = n(311819),
    m = n(433534),
    f = n(299206),
    h = n(726721),
    b = n(726521),
    C = n(973616),
    x = n(914010),
    _ = n(594174),
    y = n(626135),
    v = n(572004),
    N = n(630388),
    g = n(135431),
    j = n(541099),
    P = n(783097),
    E = n(570949),
    A = n(314734),
    I = n(981631),
    O = n(388032),
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
function w(e) {
    var t;
    let { application: l, context: w, className: R, sectionName: k } = e,
        Z = r.useRef(null),
        M = (0, o.e7)([j.Z], () => j.Z.entrypoint()),
        W = (0, P.L1)(l),
        D = (0, m.E)(W),
        B = (0, d.R)(l.id),
        U = (0, o.e7)(
            [x.Z],
            () => {
                var e;
                return null != (e = x.Z.getGuildId()) ? e : void 0;
            },
            []
        ),
        H = {
            location: u.Vh.APP_LAUNCHER_APPLICATION_VIEW_MORE_MENU,
            application_id: l.id,
            section_name: k,
            source: j.Z.lastShownEntrypoint()
        },
        V = _.default.getCurrentUser(),
        F = h.Z.useExperiment({ location: u.Vh.APP_LAUNCHER_APPLICATION_VIEW_MORE_MENU }, { autoTrackExposure: !0 }).enabled,
        z = (0, f.Z)({
            id: l.id,
            label: O.NW.string(O.t['+NP/b2'])
        }),
        G = (0, E.P)({ application: l }),
        X = (0, N.yE)(null != (t = l.flags) ? t : 0, I.udG.EMBEDDED),
        q = 'channel' === w.type ? w.channel : void 0;
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
                        : (0, p.J)(T({ id: l.id }, W));
                    (0, v.JG)(e),
                        y.default.track(I.rMx.APP_LAUNCHER_APPLICATION_LINK_COPIED, {
                            application_id: l.id,
                            source: M
                        }),
                        (0, s.showToast)((0, s.createToast)(O.NW.string(O.t['L/PwZW']), s.ToastType.SUCCESS));
                },
                className: a()(S.clickable, R),
                'aria-label': O.NW.string(O.t.WqhZsr),
                children: (0, i.jsx)(s.xPt, {
                    size: 'sm',
                    color: s.TVs.colors.INTERACTIVE_ACTIVE
                })
            }),
            (0, i.jsx)(s.yRy, {
                targetElementRef: Z,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (0, i.jsxs)(s.v2r, {
                        className: A.NN,
                        navId: 'app-details-more-menu',
                        onClose: t,
                        'aria-label': O.NW.string(O.t.AXIHpa),
                        onSelect: void 0,
                        children: [
                            (0, i.jsxs)(s.kSQ, {
                                children: [
                                    B &&
                                        (0, i.jsx)(s.sNh, {
                                            id: 'open-storefront',
                                            label: O.NW.string(O.t.kRvlKC),
                                            action: () => {
                                                (0, s.ZDy)(async () => {
                                                    let { default: e } = await Promise.all([n.e('74891'), n.e('77803'), n.e('53458')]).then(n.bind(n, 7225));
                                                    return (t) =>
                                                        (0, i.jsx)(e, {
                                                            transitionState: t.transitionState,
                                                            onClose: t.onClose,
                                                            appId: l.id,
                                                            guildId: U
                                                        });
                                                });
                                            }
                                        }),
                                    D
                                        ? (0, i.jsx)(s.sNh, {
                                              id: 'add-app',
                                              label: O.NW.string(O.t.NgXl3N),
                                              action: () => {
                                                  null == W.customInstallUrl && (0, c.yw)(I.rMx.APP_LAUNCHER_OAUTH2_AUTHORIZE_OPENED, H),
                                                      (0, g.L)(
                                                          L(T({}, W), {
                                                              oauth2Callback: (e) => {
                                                                  let { location: t } = e;
                                                                  null != t && (0, c.yw)(I.rMx.APP_LAUNCHER_OAUTH2_AUTHORIZE_SUCCEEDED, H);
                                                              },
                                                              source: 'app_launcher_app_details'
                                                          })
                                                      );
                                              }
                                          })
                                        : null,
                                    F && l instanceof C.ZP
                                        ? (0, i.jsx)(s.sNh, {
                                              id: 'report-app',
                                              color: 'danger',
                                              label: O.NW.string(O.t.jhJze3),
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
                                    G
                                ]
                            }),
                            (0, i.jsx)(s.kSQ, { children: z })
                        ]
                    });
                },
                align: 'right',
                position: 'bottom',
                children: (e) =>
                    (0, i.jsx)(
                        s.P3F,
                        L(T({ innerRef: Z }, e), {
                            onClick: e.onClick,
                            className: a()(S.clickable, R),
                            'aria-label': O.NW.string(O.t.UKOtz8),
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
