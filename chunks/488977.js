n.d(t, { Z: () => L }), n(997841);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(95015),
    l = n(442837),
    c = n(481060),
    u = n(367907),
    d = n(895924),
    f = n(970321),
    p = n(311819),
    _ = n(433534),
    m = n(299206),
    h = n(726521),
    g = n(973616),
    E = n(914010),
    b = n(594174),
    y = n(626135),
    O = n(572004),
    v = n(135431),
    S = n(541099),
    I = n(783097),
    T = n(570949),
    A = n(314734),
    C = n(981631),
    N = n(388032),
    P = n(820607);
function R(e, t, n) {
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
function w(e) {
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
                R(e, t, n[t]);
            });
    }
    return e;
}
function D(e, t) {
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
function x(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : D(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function L(e) {
    var t;
    let { application: a, context: R, className: D, sectionName: L } = e,
        j = i.useRef(null),
        M = (0, l.e7)([S.Z], () => S.Z.entrypoint()),
        k = (0, I.L1)(a),
        U = (0, _.Eb)(k),
        G = (0, f.R)(a.id),
        Z = (0, l.e7)([E.Z], () => {
            var e;
            return null != (e = E.Z.getGuildId()) ? e : void 0;
        }, []),
        B = {
            location: d.Vh.APP_LAUNCHER_APPLICATION_VIEW_MORE_MENU,
            application_id: a.id,
            section_name: L,
            source: S.Z.lastShownEntrypoint(),
        },
        F = b.default.getCurrentUser(),
        V = (0, m.Z)({
            id: a.id,
            label: N.intl.string(N.t["+NP/b2"]),
        }),
        H = (0, T.P)({ application: a }),
        Y = (0, s.yE)(null != (t = a.flags) ? t : 0, C.udG.EMBEDDED),
        W = "channel" === R.type ? R.channel : void 0;
    return (0, r.jsxs)("div", {
        className: P.container,
        children: [
            (0, r.jsx)(c.P3F, {
                onClick: () => {
                    let e = Y
                        ? (0, p.H)({
                              applicationId: a.id,
                              referrerId: null == F ? void 0 : F.id,
                          })
                        : (0, p.J)(w({ id: a.id }, k));
                    (0, O.JG)(e, () =>
                        (0, c.showToast)((0, c.createToast)(N.intl.string(N.t["L/PwZf"]), c.ToastType.SUCCESS)),
                    ),
                        y.default.track(C.rMx.APP_LAUNCHER_APPLICATION_LINK_COPIED, {
                            application_id: a.id,
                            source: M,
                        });
                },
                className: o()(P.clickable, D),
                "aria-label": N.intl.string(N.t.WqhZss),
                children: (0, r.jsx)(c.xPt, {
                    size: "sm",
                    color: c.TVs.colors.INTERACTIVE_ACTIVE,
                }),
            }),
            (0, r.jsx)(c.yRy, {
                targetElementRef: j,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (0, r.jsxs)(c.v2r, {
                        className: A.NN,
                        navId: "app-details-more-menu",
                        onClose: t,
                        "aria-label": N.intl.string(N.t.AXIHpV),
                        onSelect: void 0,
                        children: [
                            (0, r.jsxs)(c.kSQ, {
                                children: [
                                    G &&
                                        (0, r.jsx)(c.sNh, {
                                            id: "open-storefront",
                                            label: N.intl.string(N.t.kRvlKJ),
                                            action: () => {
                                                (0, c.ZDy)(async () => {
                                                    let { default: e } = await Promise.all([
                                                        n.e("77803"),
                                                        n.e("42124"),
                                                    ]).then(n.bind(n, 7225));
                                                    return (t) =>
                                                        (0, r.jsx)(e, {
                                                            transitionState: t.transitionState,
                                                            onClose: t.onClose,
                                                            appId: a.id,
                                                            guildId: Z,
                                                        });
                                                });
                                            },
                                        }),
                                    U
                                        ? (0, r.jsx)(c.sNh, {
                                              id: "add-app",
                                              label: N.intl.string(N.t.NgXl3C),
                                              action: () => {
                                                  null == k.customInstallUrl &&
                                                      (0, u.yw)(C.rMx.APP_LAUNCHER_OAUTH2_AUTHORIZE_OPENED, B),
                                                      (0, v.L)(
                                                          x(w({}, k), {
                                                              oauth2Callback: (e) => {
                                                                  let { location: t } = e;
                                                                  null != t &&
                                                                      (0, u.yw)(
                                                                          C.rMx.APP_LAUNCHER_OAUTH2_AUTHORIZE_SUCCEEDED,
                                                                          B,
                                                                      );
                                                              },
                                                              source: "app_launcher_app_details",
                                                          }),
                                                      );
                                              },
                                          })
                                        : null,
                                    a instanceof g.ZP
                                        ? (0, r.jsx)(c.sNh, {
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
                            (0, r.jsx)(c.kSQ, { children: V }),
                        ],
                    });
                },
                align: "right",
                position: "bottom",
                children: (e) =>
                    (0, r.jsx)(
                        c.P3F,
                        x(w({ innerRef: j }, e), {
                            onClick: e.onClick,
                            className: o()(P.clickable, D),
                            "aria-label": N.intl.string(N.t["UKOtz+"]),
                            children: (0, r.jsx)(c.xhG, {
                                size: "sm",
                                color: c.TVs.colors.INTERACTIVE_ACTIVE,
                            }),
                        }),
                    ),
            }),
        ],
    });
}
