n.d(t, { Z: () => L }), n(997841);
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
    h = n(726521),
    b = n(973616),
    _ = n(914010),
    C = n(594174),
    v = n(626135),
    x = n(572004),
    y = n(630388),
    g = n(135431),
    j = n(541099),
    N = n(783097),
    P = n(570949),
    E = n(314734),
    A = n(981631),
    I = n(388032),
    O = n(640724);
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
    let { application: l, context: L, className: R, sectionName: w } = e,
        Z = r.useRef(null),
        k = (0, a.e7)([j.Z], () => j.Z.entrypoint()),
        M = (0, N.L1)(l),
        D = (0, m.Eb)(M),
        U = (0, d.R)(l.id),
        B = (0, a.e7)(
            [_.Z],
            () => {
                var e;
                return null != (e = _.Z.getGuildId()) ? e : void 0;
            },
            []
        ),
        H = {
            location: u.Vh.APP_LAUNCHER_APPLICATION_VIEW_MORE_MENU,
            application_id: l.id,
            section_name: w,
            source: j.Z.lastShownEntrypoint()
        },
        V = C.default.getCurrentUser(),
        W = (0, f.Z)({
            id: l.id,
            label: I.intl.string(I.t['+NP/b2'])
        }),
        F = (0, P.P)({ application: l }),
        z = (0, y.yE)(null != (t = l.flags) ? t : 0, A.udG.EMBEDDED),
        G = 'channel' === L.type ? L.channel : void 0;
    return (0, i.jsxs)('div', {
        className: O.container,
        children: [
            (0, i.jsx)(c.P3F, {
                onClick: () => {
                    let e = z
                        ? (0, p.H)({
                              applicationId: l.id,
                              referrerId: null == V ? void 0 : V.id
                          })
                        : (0, p.J)(S({ id: l.id }, M));
                    (0, x.JG)(e, () => (0, c.showToast)((0, c.createToast)(I.intl.string(I.t['L/PwZW']), c.ToastType.SUCCESS))),
                        v.default.track(A.rMx.APP_LAUNCHER_APPLICATION_LINK_COPIED, {
                            application_id: l.id,
                            source: k
                        });
                },
                className: o()(O.clickable, R),
                'aria-label': I.intl.string(I.t.WqhZsr),
                children: (0, i.jsx)(c.xPt, {
                    size: 'sm',
                    color: c.TVs.colors.INTERACTIVE_ACTIVE
                })
            }),
            (0, i.jsx)(c.yRy, {
                targetElementRef: Z,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (0, i.jsxs)(c.v2r, {
                        className: E.NN,
                        navId: 'app-details-more-menu',
                        onClose: t,
                        'aria-label': I.intl.string(I.t.AXIHpa),
                        onSelect: void 0,
                        children: [
                            (0, i.jsxs)(c.kSQ, {
                                children: [
                                    U &&
                                        (0, i.jsx)(c.sNh, {
                                            id: 'open-storefront',
                                            label: I.intl.string(I.t.kRvlKC),
                                            action: () => {
                                                (0, c.ZDy)(async () => {
                                                    let { default: e } = await Promise.all([n.e('74891'), n.e('77803'), n.e('53458')]).then(n.bind(n, 7225));
                                                    return (t) =>
                                                        (0, i.jsx)(e, {
                                                            transitionState: t.transitionState,
                                                            onClose: t.onClose,
                                                            appId: l.id,
                                                            guildId: B
                                                        });
                                                });
                                            }
                                        }),
                                    D
                                        ? (0, i.jsx)(c.sNh, {
                                              id: 'add-app',
                                              label: I.intl.string(I.t.NgXl3N),
                                              action: () => {
                                                  null == M.customInstallUrl && (0, s.yw)(A.rMx.APP_LAUNCHER_OAUTH2_AUTHORIZE_OPENED, H),
                                                      (0, g.L)(
                                                          T(S({}, M), {
                                                              oauth2Callback: (e) => {
                                                                  let { location: t } = e;
                                                                  null != t && (0, s.yw)(A.rMx.APP_LAUNCHER_OAUTH2_AUTHORIZE_SUCCEEDED, H);
                                                              },
                                                              source: 'app_launcher_app_details'
                                                          })
                                                      );
                                              }
                                          })
                                        : null,
                                    l instanceof b.ZP
                                        ? (0, i.jsx)(c.sNh, {
                                              id: 'report-app',
                                              color: 'danger',
                                              label: I.intl.string(I.t.jhJze3),
                                              action: () => {
                                                  var e;
                                                  (0, h.uu)({
                                                      application: l,
                                                      entrypoint: 'app_launcher',
                                                      contextualGuildId: null != (e = null == G ? void 0 : G.getGuildId()) ? e : void 0,
                                                      contextualChannelId: null == G ? void 0 : G.id
                                                  });
                                              }
                                          })
                                        : null,
                                    F
                                ]
                            }),
                            (0, i.jsx)(c.kSQ, { children: W })
                        ]
                    });
                },
                align: 'right',
                position: 'bottom',
                children: (e) =>
                    (0, i.jsx)(
                        c.P3F,
                        T(S({ innerRef: Z }, e), {
                            onClick: e.onClick,
                            className: o()(O.clickable, R),
                            'aria-label': I.intl.string(I.t.UKOtz8),
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
