n.d(t, { Z: () => L }), n(997841);
var i = n(951288),
    l = n(647438),
    r = n(120356),
    a = n.n(r),
    o = n(442837),
    s = n(481060),
    c = n(367907),
    u = n(895924),
    d = n(970321),
    p = n(311819),
    m = n(433534),
    f = n(299206),
    h = n(726521),
    v = n(973616),
    y = n(914010),
    g = n(594174),
    x = n(626135),
    b = n(572004),
    N = n(630388),
    j = n(135431),
    C = n(541099),
    E = n(783097),
    P = n(570949),
    A = n(314734),
    _ = n(981631),
    O = n(388032),
    I = n(820607);
function S(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            i.forEach(function (t) {
                var i;
                (i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
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
        k = (0, o.e7)([C.Z], () => C.Z.entrypoint()),
        M = (0, E.L1)(r),
        U = (0, m.Eb)(M),
        D = (0, d.R)(r.id),
        H = (0, o.e7)([y.Z], () => {
            var e;
            return null != (e = y.Z.getGuildId()) ? e : void 0;
        }, []),
        B = {
            location: u.Vh.APP_LAUNCHER_APPLICATION_VIEW_MORE_MENU,
            application_id: r.id,
            section_name: Z,
            source: C.Z.lastShownEntrypoint(),
        },
        V = g.default.getCurrentUser(),
        W = (0, f.Z)({
            id: r.id,
            label: O.intl.string(O.t["+NP/b2"]),
        }),
        F = (0, P.P)({ application: r }),
        G = (0, N.yE)(null != (t = r.flags) ? t : 0, _.udG.EMBEDDED),
        Y = "channel" === L.type ? L.channel : void 0;
    return (0, i.jsxs)("div", {
        className: I.container,
        children: [
            (0, i.jsx)(s.P3F, {
                onClick: () => {
                    let e = G
                        ? (0, p.H)({
                              applicationId: r.id,
                              referrerId: null == V ? void 0 : V.id,
                          })
                        : (0, p.J)(S({ id: r.id }, M));
                    (0, b.JG)(e, () =>
                        (0, s.showToast)((0, s.createToast)(O.intl.string(O.t["L/PwZf"]), s.ToastType.SUCCESS)),
                    ),
                        x.default.track(_.rMx.APP_LAUNCHER_APPLICATION_LINK_COPIED, {
                            application_id: r.id,
                            source: k,
                        });
                },
                className: a()(I.clickable, R),
                "aria-label": O.intl.string(O.t.WqhZss),
                children: (0, i.jsx)(s.xPt, {
                    size: "sm",
                    color: s.TVs.colors.INTERACTIVE_ACTIVE,
                }),
            }),
            (0, i.jsx)(s.yRy, {
                targetElementRef: w,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (0, i.jsxs)(s.v2r, {
                        className: A.NN,
                        navId: "app-details-more-menu",
                        onClose: t,
                        "aria-label": O.intl.string(O.t.AXIHpV),
                        onSelect: void 0,
                        children: [
                            (0, i.jsxs)(s.kSQ, {
                                children: [
                                    D &&
                                        (0, i.jsx)(s.sNh, {
                                            id: "open-storefront",
                                            label: O.intl.string(O.t.kRvlKJ),
                                            action: () => {
                                                (0, s.ZDy)(async () => {
                                                    let { default: e } = await Promise.all([
                                                        n.e("77803"),
                                                        n.e("42124"),
                                                    ]).then(n.bind(n, 7225));
                                                    return (t) =>
                                                        (0, i.jsx)(e, {
                                                            transitionState: t.transitionState,
                                                            onClose: t.onClose,
                                                            appId: r.id,
                                                            guildId: H,
                                                        });
                                                });
                                            },
                                        }),
                                    U
                                        ? (0, i.jsx)(s.sNh, {
                                              id: "add-app",
                                              label: O.intl.string(O.t.NgXl3C),
                                              action: () => {
                                                  null == M.customInstallUrl &&
                                                      (0, c.yw)(_.rMx.APP_LAUNCHER_OAUTH2_AUTHORIZE_OPENED, B),
                                                      (0, j.L)(
                                                          T(S({}, M), {
                                                              oauth2Callback: (e) => {
                                                                  let { location: t } = e;
                                                                  null != t &&
                                                                      (0, c.yw)(
                                                                          _.rMx.APP_LAUNCHER_OAUTH2_AUTHORIZE_SUCCEEDED,
                                                                          B,
                                                                      );
                                                              },
                                                              source: "app_launcher_app_details",
                                                          }),
                                                      );
                                              },
                                          })
                                        : null,
                                    r instanceof v.ZP
                                        ? (0, i.jsx)(s.sNh, {
                                              id: "report-app",
                                              color: "danger",
                                              label: O.intl.string(O.t.jhJzez),
                                              action: () => {
                                                  var e;
                                                  (0, h.uu)({
                                                      application: r,
                                                      entrypoint: "app_launcher",
                                                      contextualGuildId:
                                                          null != (e = null == Y ? void 0 : Y.getGuildId())
                                                              ? e
                                                              : void 0,
                                                      contextualChannelId: null == Y ? void 0 : Y.id,
                                                  });
                                              },
                                          })
                                        : null,
                                    F,
                                ],
                            }),
                            (0, i.jsx)(s.kSQ, { children: W }),
                        ],
                    });
                },
                align: "right",
                position: "bottom",
                children: (e) =>
                    (0, i.jsx)(
                        s.P3F,
                        T(S({ innerRef: w }, e), {
                            onClick: e.onClick,
                            className: a()(I.clickable, R),
                            "aria-label": O.intl.string(O.t["UKOtz+"]),
                            children: (0, i.jsx)(s.xhG, {
                                size: "sm",
                                color: s.TVs.colors.INTERACTIVE_ACTIVE,
                            }),
                        }),
                    ),
            }),
        ],
    });
}
