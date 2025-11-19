n.d(t, { Z: () => x }), n(997841);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(481060),
    c = n(367907),
    u = n(895924),
    d = n(970321),
    f = n(311819),
    _ = n(433534),
    p = n(299206),
    h = n(726521),
    m = n(973616),
    g = n(914010),
    E = n(594174),
    b = n(626135),
    y = n(572004),
    O = n(630388),
    v = n(135431),
    I = n(541099),
    T = n(783097),
    S = n(570949),
    A = n(314734),
    C = n(981631),
    N = n(388032),
    R = n(333616);
function P(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function D(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                P(e, t, n[t]);
            });
    }
    return e;
}
function w(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function L(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : w(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function x(e) {
    var t;
    let { application: a, context: P, className: w, sectionName: x } = e,
        M = i.useRef(null),
        j = (0, s.e7)([I.Z], () => I.Z.entrypoint()),
        k = (0, T.L1)(a),
        U = (0, _.Eb)(k),
        G = (0, d.R)(a.id),
        B = (0, s.e7)([g.Z], () => {
            var e;
            return null != (e = g.Z.getGuildId()) ? e : void 0;
        }, []),
        Z = {
            location: u.Vh.APP_LAUNCHER_APPLICATION_VIEW_MORE_MENU,
            application_id: a.id,
            section_name: x,
            source: I.Z.lastShownEntrypoint(),
        },
        F = E.default.getCurrentUser(),
        V = (0, p.Z)({
            id: a.id,
            label: N.intl.string(N.t["+NP/b2"]),
        }),
        H = (0, S.P)({ application: a }),
        Y = (0, O.yE)(null != (t = a.flags) ? t : 0, C.udG.EMBEDDED),
        W = "channel" === P.type ? P.channel : void 0;
    return (0, r.jsxs)("div", {
        className: R.container,
        children: [
            (0, r.jsx)(l.P3F, {
                onClick: () => {
                    let e = Y
                        ? (0, f.H)({
                              applicationId: a.id,
                              referrerId: null == F ? void 0 : F.id,
                          })
                        : (0, f.J)(D({ id: a.id }, k));
                    (0, y.JG)(e, () =>
                        (0, l.showToast)((0, l.createToast)(N.intl.string(N.t["L/PwZf"]), l.ToastType.SUCCESS)),
                    ),
                        b.default.track(C.rMx.APP_LAUNCHER_APPLICATION_LINK_COPIED, {
                            application_id: a.id,
                            source: j,
                        });
                },
                className: o()(R.clickable, w),
                "aria-label": N.intl.string(N.t.WqhZss),
                children: (0, r.jsx)(l.xPt, {
                    size: "sm",
                    color: l.TVs.colors.INTERACTIVE_ACTIVE,
                }),
            }),
            (0, r.jsx)(l.yRy, {
                targetElementRef: M,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (0, r.jsxs)(l.v2r, {
                        className: A.NN,
                        navId: "app-details-more-menu",
                        onClose: t,
                        "aria-label": N.intl.string(N.t.AXIHpV),
                        onSelect: void 0,
                        children: [
                            (0, r.jsxs)(l.kSQ, {
                                children: [
                                    G &&
                                        (0, r.jsx)(l.sNh, {
                                            id: "open-storefront",
                                            label: N.intl.string(N.t.kRvlKJ),
                                            action: () => {
                                                (0, l.ZDy)(async () => {
                                                    let { default: e } = await Promise.all([
                                                        n.e("77803"),
                                                        n.e("15351"),
                                                    ]).then(n.bind(n, 7225));
                                                    return (t) =>
                                                        (0, r.jsx)(e, {
                                                            transitionState: t.transitionState,
                                                            onClose: t.onClose,
                                                            appId: a.id,
                                                            guildId: B,
                                                        });
                                                });
                                            },
                                        }),
                                    U
                                        ? (0, r.jsx)(l.sNh, {
                                              id: "add-app",
                                              label: N.intl.string(N.t.NgXl3C),
                                              action: () => {
                                                  null == k.customInstallUrl &&
                                                      (0, c.yw)(C.rMx.APP_LAUNCHER_OAUTH2_AUTHORIZE_OPENED, Z),
                                                      (0, v.L)(
                                                          L(D({}, k), {
                                                              oauth2Callback: (e) => {
                                                                  let { location: t } = e;
                                                                  null != t &&
                                                                      (0, c.yw)(
                                                                          C.rMx.APP_LAUNCHER_OAUTH2_AUTHORIZE_SUCCEEDED,
                                                                          Z,
                                                                      );
                                                              },
                                                              source: "app_launcher_app_details",
                                                          }),
                                                      );
                                              },
                                          })
                                        : null,
                                    a instanceof m.ZP
                                        ? (0, r.jsx)(l.sNh, {
                                              id: "report-app",
                                              color: "danger",
                                              label: N.intl.string(N.t.jhJzez),
                                              action: () => {
                                                  var e;
                                                  (0, h.uu)({
                                                      application: a,
                                                      entrypoint: "app_launcher",
                                                      contextualGuildId:
                                                          null != (e = null == W ? void 0 : W.getGuildId())
                                                              ? e
                                                              : void 0,
                                                      contextualChannelId: null == W ? void 0 : W.id,
                                                  });
                                              },
                                          })
                                        : null,
                                    H,
                                ],
                            }),
                            (0, r.jsx)(l.kSQ, { children: V }),
                        ],
                    });
                },
                align: "right",
                position: "bottom",
                children: (e) =>
                    (0, r.jsx)(
                        l.P3F,
                        L(D({ innerRef: M }, e), {
                            onClick: e.onClick,
                            className: o()(R.clickable, w),
                            "aria-label": N.intl.string(N.t["UKOtz+"]),
                            children: (0, r.jsx)(l.xhG, {
                                size: "sm",
                                color: l.TVs.colors.INTERACTIVE_ACTIVE,
                            }),
                        }),
                    ),
            }),
        ],
    });
}
