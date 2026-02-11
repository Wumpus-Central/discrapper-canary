"use strict";
n.d(t, { A: () => D });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(311907),
    l = n(397927),
    u = n(58149),
    c = n(392054),
    d = n(658575),
    _ = n(342384),
    f = n(20015),
    p = n(204776),
    h = n(50268),
    m = n(928658),
    g = n(611010),
    E = n(967198),
    A = n(287809),
    I = n(954571),
    T = n(957565),
    S = n(692848),
    y = n(989837),
    v = n(735991),
    C = n(346446),
    N = n(60809),
    b = n(652215),
    R = n(985018),
    O = n(415097);
function D(e) {
    let { application: t, context: a, className: D, sectionName: L } = e,
        w = i.useRef(null),
        x = (0, o.bG)([y.A], () => y.A.entrypoint()),
        M = (0, v.Pp)(t),
        P = (0, p.Ie)(M),
        k = (0, d.G)(t.id),
        U = (0, o.bG)([E.A], () => E.A.getGuildId() ?? void 0, []),
        G = {
            location: c.Oh.APP_LAUNCHER_APPLICATION_VIEW_MORE_MENU,
            application_id: t.id,
            section_name: L,
            source: y.A.lastShownEntrypoint(),
        },
        F = A.default.getCurrentUser(),
        V = (0, h.A)({ id: t.id, label: R.intl.string(R.t["+NP/b2"]) }),
        B = (0, C.r)({ application: t }),
        j = (0, f.n)(t, b.gfo.EMBEDDED),
        H = "channel" === a.type ? a.channel : void 0;
    return (0, r.jsxs)("div", {
        className: O.k,
        children: [
            (0, r.jsx)(l.DUT, {
                onClick: () => {
                    let e = j ? (0, _.W)({ applicationId: t.id, referrerId: F?.id }) : (0, _.V)({ id: t.id, ...M });
                    (0, T.C)(e, () =>
                        (0, l.showToast)((0, l.createToast)(R.intl.string(R.t["L/PwZf"]), l.ToastType.SUCCESS)),
                    ),
                        I.default.track(b.HAw.APP_LAUNCHER_APPLICATION_LINK_COPIED, {
                            application_id: t.id,
                            source: x,
                        });
                },
                className: s()(O.v, D),
                "aria-label": R.intl.string(R.t.WqhZss),
                children: (0, r.jsx)(l.qYV, { size: "sm", color: l.LU0.colors.INTERACTIVE_TEXT_ACTIVE }),
            }),
            (0, r.jsx)(l.YNO, {
                targetElementRef: w,
                renderPopout: (e) => {
                    let { closePopout: i } = e;
                    return (0, r.jsxs)(l.W1t, {
                        "data-menu-needs-review": !0,
                        className: N.qp,
                        navId: "app-details-more-menu",
                        onClose: i,
                        "aria-label": R.intl.string(R.t.AXIHpV),
                        onSelect: void 0,
                        children: [
                            (0, r.jsxs)(l.rXV, {
                                children: [
                                    k &&
                                        (0, r.jsx)(l.Drp, {
                                            id: "open-storefront",
                                            label: R.intl.string(R.t.kRvlKJ),
                                            action: () => {
                                                (0, l.mMO)(async () => {
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
                                    P
                                        ? (0, r.jsx)(l.Drp, {
                                              id: "add-app",
                                              label: R.intl.string(R.t.NgXl3C),
                                              action: () => {
                                                  null == M.customInstallUrl &&
                                                      (0, u.zV)(b.HAw.APP_LAUNCHER_OAUTH2_AUTHORIZE_OPENED, G),
                                                      (0, S.o)({
                                                          ...M,
                                                          oauth2Callback: (e) => {
                                                              let { location: t } = e;
                                                              null != t &&
                                                                  (0, u.zV)(
                                                                      b.HAw.APP_LAUNCHER_OAUTH2_AUTHORIZE_SUCCEEDED,
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
                            (0, r.jsx)(l.rXV, {
                                children:
                                    t instanceof g.Ay
                                        ? (0, r.jsx)(l.Drp, {
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
                            (0, r.jsx)(l.rXV, { children: V }),
                        ],
                    });
                },
                align: "right",
                position: "bottom",
                children: (e) =>
                    (0, r.jsx)(l.DUT, {
                        innerRef: w,
                        ...e,
                        onClick: e.onClick,
                        className: s()(O.v, D),
                        "aria-label": R.intl.string(R.t["UKOtz+"]),
                        children: (0, r.jsx)(l.jNK, { size: "sm", color: l.LU0.colors.INTERACTIVE_TEXT_ACTIVE }),
                    }),
            }),
        ],
    });
}
