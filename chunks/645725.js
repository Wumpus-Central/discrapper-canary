n.d(t, {
    A: () => x,
}),
    n(938796);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    o = n.n(a),
    s = n(665260),
    l = n(311907),
    c = n(397927),
    u = n(58149),
    d = n(392054),
    f = n(658575),
    p = n(342384),
    _ = n(204776),
    h = n(50268),
    m = n(928658),
    g = n(611010),
    E = n(967198),
    y = n(287809),
    b = n(954571),
    O = n(957565),
    v = n(692848),
    A = n(989837),
    I = n(735991),
    S = n(346446),
    T = n(60809),
    C = n(652215),
    N = n(985018),
    w = n(415097);

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

function P(e) {
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

function L(e, t) {
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

function x(e) {
    var t;
    let { application: a, context: R, className: D, sectionName: x } = e,
        M = i.useRef(null),
        j = (0, l.bG)([A.A], () => A.A.entrypoint()),
        k = (0, I.Pp)(a),
        U = (0, _.Ie)(k),
        G = (0, f.G)(a.id),
        F = (0, l.bG)([E.A], () => {
            var e;
            return null != (e = E.A.getGuildId()) ? e : void 0;
        }, []),
        V = {
            location: d.Oh.APP_LAUNCHER_APPLICATION_VIEW_MORE_MENU,
            application_id: a.id,
            section_name: x,
            source: A.A.lastShownEntrypoint(),
        },
        B = y.default.getCurrentUser(),
        H = (0, h.A)({
            id: a.id,
            label: N.intl.string(N.t["+NP/b2"]),
        }),
        Y = (0, S.r)({
            application: a,
        }),
        W = (0, s.Lt)(null != (t = a.flags) ? t : 0, C.gfo.EMBEDDED),
        K = "channel" === R.type ? R.channel : void 0;
    return (0, r.jsxs)("div", {
        className: w.k,
        children: [
            (0, r.jsx)(c.DUT, {
                onClick: () => {
                    let e = W
                        ? (0, p.W)({
                              applicationId: a.id,
                              referrerId: null == B ? void 0 : B.id,
                          })
                        : (0, p.V)(
                              P(
                                  {
                                      id: a.id,
                                  },
                                  k,
                              ),
                          );
                    (0, O.C)(e, () =>
                        (0, c.showToast)((0, c.createToast)(N.intl.string(N.t["L/PwZf"]), c.ToastType.SUCCESS)),
                    ),
                        b.default.track(C.HAw.APP_LAUNCHER_APPLICATION_LINK_COPIED, {
                            application_id: a.id,
                            source: j,
                        });
                },
                className: o()(w.v, D),
                "aria-label": N.intl.string(N.t.WqhZss),
                children: (0, r.jsx)(c.qYV, {
                    size: "sm",
                    color: c.LU0.colors.INTERACTIVE_TEXT_ACTIVE,
                }),
            }),
            (0, r.jsx)(c.YNO, {
                targetElementRef: M,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (0, r.jsxs)(c.W1t, {
                        "data-menu-mixed": !0,
                        className: T.qp,
                        navId: "app-details-more-menu",
                        onClose: t,
                        "aria-label": N.intl.string(N.t.AXIHpV),
                        onSelect: void 0,
                        children: [
                            (0, r.jsxs)(c.rXV, {
                                children: [
                                    G &&
                                        (0, r.jsx)(c.Drp, {
                                            id: "open-storefront",
                                            label: N.intl.string(N.t.kRvlKJ),
                                            action: () => {
                                                (0, c.mMO)(async () => {
                                                    let { default: e } = await Promise.all([
                                                        n.e("13088"),
                                                        n.e("33563"),
                                                        n.e("92201"),
                                                    ]).then(n.bind(n, 719847));
                                                    return (t) =>
                                                        (0, r.jsx)(e, {
                                                            transitionState: t.transitionState,
                                                            onClose: t.onClose,
                                                            appId: a.id,
                                                            guildId: F,
                                                        });
                                                });
                                            },
                                        }),
                                    U
                                        ? (0, r.jsx)(c.Drp, {
                                              id: "add-app",
                                              label: N.intl.string(N.t.NgXl3C),
                                              action: () => {
                                                  null == k.customInstallUrl &&
                                                      (0, u.zV)(C.HAw.APP_LAUNCHER_OAUTH2_AUTHORIZE_OPENED, V),
                                                      (0, v.o)(
                                                          L(P({}, k), {
                                                              oauth2Callback: (e) => {
                                                                  let { location: t } = e;
                                                                  null != t &&
                                                                      (0, u.zV)(
                                                                          C.HAw.APP_LAUNCHER_OAUTH2_AUTHORIZE_SUCCEEDED,
                                                                          V,
                                                                      );
                                                              },
                                                              source: "app_launcher_app_details",
                                                          }),
                                                      );
                                              },
                                          })
                                        : null,
                                    a instanceof g.Ay
                                        ? (0, r.jsx)(c.Drp, {
                                              id: "report-app",
                                              color: "danger",
                                              label: N.intl.string(N.t.jhJzez),
                                              action: () => {
                                                  var e;
                                                  (0, m.r3)({
                                                      application: a,
                                                      entrypoint: "app_launcher",
                                                      contextualGuildId:
                                                          null != (e = null == K ? void 0 : K.getGuildId())
                                                              ? e
                                                              : void 0,
                                                      contextualChannelId: null == K ? void 0 : K.id,
                                                  });
                                              },
                                          })
                                        : null,
                                    Y,
                                ],
                            }),
                            (0, r.jsx)(c.rXV, {
                                children: H,
                            }),
                        ],
                    });
                },
                align: "right",
                position: "bottom",
                children: (e) =>
                    (0, r.jsx)(
                        c.DUT,
                        L(
                            P(
                                {
                                    innerRef: M,
                                },
                                e,
                            ),
                            {
                                onClick: e.onClick,
                                className: o()(w.v, D),
                                "aria-label": N.intl.string(N.t["UKOtz+"]),
                                children: (0, r.jsx)(c.jNK, {
                                    size: "sm",
                                    color: c.LU0.colors.INTERACTIVE_TEXT_ACTIVE,
                                }),
                            },
                        ),
                    ),
            }),
        ],
    });
}
