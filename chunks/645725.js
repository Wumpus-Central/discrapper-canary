"use strict";
n.d(t, { A: () => D }), n(938796);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(665260),
    l = n(311907),
    u = n(397927),
    c = n(58149),
    d = n(392054),
    _ = n(658575),
    f = n(342384),
    p = n(204776),
    h = n(50268),
    m = n(928658),
    g = n(611010),
    E = n(967198),
    A = n(287809),
    I = n(954571),
    T = n(957565),
    y = n(692848),
    S = n(989837),
    v = n(735991),
    C = n(346446),
    b = n(60809),
    N = n(652215),
    R = n(985018),
    O = n(415097);
function D(e) {
    let { application: t, context: a, className: D, sectionName: L } = e,
        w = i.useRef(null),
        x = (0, l.bG)([S.A], () => S.A.entrypoint()),
        P = (0, v.Pp)(t),
        M = (0, p.Ie)(P),
        k = (0, _.G)(t.id),
        U = (0, l.bG)([E.A], () => E.A.getGuildId() ?? void 0, []),
        G = {
            location: d.Oh.APP_LAUNCHER_APPLICATION_VIEW_MORE_MENU,
            application_id: t.id,
            section_name: L,
            source: S.A.lastShownEntrypoint(),
        },
        V = A.default.getCurrentUser(),
        F = (0, h.A)({ id: t.id, label: R.intl.string(R.t["+NP/b2"]) }),
        B = (0, C.r)({ application: t }),
        j = (0, o.Lt)(t.flags ?? 0, N.gfo.EMBEDDED),
        H = "channel" === a.type ? a.channel : void 0;
    return (0, r.jsxs)("div", {
        className: O.k,
        children: [
            (0, r.jsx)(u.DUT, {
                onClick: () => {
                    let e = j ? (0, f.W)({ applicationId: t.id, referrerId: V?.id }) : (0, f.V)({ id: t.id, ...P });
                    (0, T.C)(e, () =>
                        (0, u.showToast)((0, u.createToast)(R.intl.string(R.t["L/PwZf"]), u.ToastType.SUCCESS)),
                    ),
                        I.default.track(N.HAw.APP_LAUNCHER_APPLICATION_LINK_COPIED, {
                            application_id: t.id,
                            source: x,
                        });
                },
                className: s()(O.v, D),
                "aria-label": R.intl.string(R.t.WqhZss),
                children: (0, r.jsx)(u.qYV, { size: "sm", color: u.LU0.colors.INTERACTIVE_TEXT_ACTIVE }),
            }),
            (0, r.jsx)(u.YNO, {
                targetElementRef: w,
                renderPopout: (e) => {
                    let { closePopout: i } = e;
                    return (0, r.jsxs)(u.W1t, {
                        "data-menu-needs-review": !0,
                        className: b.qp,
                        navId: "app-details-more-menu",
                        onClose: i,
                        "aria-label": R.intl.string(R.t.AXIHpV),
                        onSelect: void 0,
                        children: [
                            (0, r.jsxs)(u.rXV, {
                                children: [
                                    k &&
                                        (0, r.jsx)(u.Drp, {
                                            id: "open-storefront",
                                            label: R.intl.string(R.t.kRvlKJ),
                                            action: () => {
                                                (0, u.mMO)(async () => {
                                                    let { default: e } = await Promise.all([
                                                        n.e("13088"),
                                                        n.e("33563"),
                                                        n.e("92201"),
                                                    ]).then(n.bind(n, 719847));
                                                    return (n) =>
                                                        (0, r.jsx)(e, {
                                                            transitionState: n.transitionState,
                                                            onClose: n.onClose,
                                                            appId: t.id,
                                                            guildId: U,
                                                        });
                                                });
                                            },
                                        }),
                                    M
                                        ? (0, r.jsx)(u.Drp, {
                                              id: "add-app",
                                              label: R.intl.string(R.t.NgXl3C),
                                              action: () => {
                                                  null == P.customInstallUrl &&
                                                      (0, c.zV)(N.HAw.APP_LAUNCHER_OAUTH2_AUTHORIZE_OPENED, G),
                                                      (0, y.o)({
                                                          ...P,
                                                          oauth2Callback: (e) => {
                                                              let { location: t } = e;
                                                              null != t &&
                                                                  (0, c.zV)(
                                                                      N.HAw.APP_LAUNCHER_OAUTH2_AUTHORIZE_SUCCEEDED,
                                                                      G,
                                                                  );
                                                          },
                                                          source: "app_launcher_app_details",
                                                      });
                                              },
                                          })
                                        : null,
                                    B,
                                ],
                            }),
                            (0, r.jsx)(u.rXV, {
                                children:
                                    t instanceof g.Ay
                                        ? (0, r.jsx)(u.Drp, {
                                              id: "report-app",
                                              color: "danger",
                                              label: R.intl.string(R.t.jhJzez),
                                              action: () => {
                                                  (0, m.r3)({
                                                      application: t,
                                                      entrypoint: "app_launcher",
                                                      contextualGuildId: H?.getGuildId() ?? void 0,
                                                      contextualChannelId: H?.id,
                                                  });
                                              },
                                          })
                                        : null,
                            }),
                            (0, r.jsx)(u.rXV, { children: F }),
                        ],
                    });
                },
                align: "right",
                position: "bottom",
                children: (e) =>
                    (0, r.jsx)(u.DUT, {
                        innerRef: w,
                        ...e,
                        onClick: e.onClick,
                        className: s()(O.v, D),
                        "aria-label": R.intl.string(R.t["UKOtz+"]),
                        children: (0, r.jsx)(u.jNK, { size: "sm", color: u.LU0.colors.INTERACTIVE_TEXT_ACTIVE }),
                    }),
            }),
        ],
    });
}
