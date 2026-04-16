"use strict";
n.d(t, { A: () => D });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
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
    E = n(611010),
    g = n(967198),
    A = n(287809),
    I = n(954571),
    T = n(957565),
    S = n(692848),
    y = n(989837),
    v = n(735991),
    N = n(346446),
    C = n(60809),
    R = n(652215),
    O = n(985018),
    b = n(527080);
function D(e) {
    let { application: t, context: s, className: D, sectionName: L } = e,
        w = i.useRef(null),
        M = (0, o.bG)([y.A], () => y.A.entrypoint()),
        P = (0, v.Pp)(t),
        x = (0, p.Ie)(P),
        k = (0, d.G)(t.id),
        U = (0, o.bG)([g.A], () => g.A.getGuildId() ?? void 0, []),
        G = {
            location: c.Oh.APP_LAUNCHER_APPLICATION_VIEW_MORE_MENU,
            application_id: t.id,
            section_name: L,
            source: y.A.lastShownEntrypoint(),
        },
        F = A.default.getCurrentUser(),
        V = (0, h.A)({ id: t.id, label: O.intl.string(O.t["+NP/b2"]) }),
        B = (0, N.r)({ application: t }),
        H = (0, f.n)(t, R.gfo.EMBEDDED),
        j = "channel" === s.type ? s.channel : void 0;
    return (0, r.jsxs)("div", {
        className: b.k,
        children: [
            (0, r.jsx)(l.DUT, {
                onClick: () => {
                    let e = H ? (0, _.W)({ applicationId: t.id, referrerId: F?.id }) : (0, _.V)({ id: t.id, ...P });
                    (0, T.C)(e, () =>
                        (0, l.showToast)((0, l.createToast)(O.intl.string(O.t["L/PwZf"]), l.ToastType.SUCCESS)),
                    ),
                        I.default.track(R.HAw.APP_LAUNCHER_APPLICATION_LINK_COPIED, {
                            application_id: t.id,
                            source: M,
                        });
                },
                className: a()(b.v, D),
                "aria-label": O.intl.string(O.t.WqhZss),
                children: (0, r.jsx)(l.qYV, { size: "sm", color: l.LU0.colors.INTERACTIVE_TEXT_ACTIVE }),
            }),
            (0, r.jsx)(l.YNO, {
                targetElementRef: w,
                renderPopout: (e) => {
                    let { closePopout: i } = e;
                    return (0, r.jsxs)(l.W1t, {
                        "data-menu-needs-review": !0,
                        className: C.qp,
                        navId: "app-details-more-menu",
                        onClose: i,
                        "aria-label": O.intl.string(O.t.AXIHpV),
                        onSelect: void 0,
                        children: [
                            (0, r.jsxs)(l.rXV, {
                                children: [
                                    k &&
                                        (0, r.jsx)(l.Drp, {
                                            id: "open-storefront",
                                            label: O.intl.string(O.t.kRvlKJ),
                                            action: () => {
                                                (0, l.mMO)(async () => {
                                                    let { default: e } = await Promise.all([
                                                        n.e("90365"),
                                                        n.e("33563"),
                                                        n.e("37255"),
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
                                    x
                                        ? (0, r.jsx)(l.Drp, {
                                              id: "add-app",
                                              label: O.intl.string(O.t.NgXl3C),
                                              action: () => {
                                                  null == P.customInstallUrl &&
                                                      (0, u.zV)(R.HAw.APP_LAUNCHER_OAUTH2_AUTHORIZE_OPENED, G),
                                                      (0, S.o)({
                                                          ...P,
                                                          oauth2Callback: (e) => {
                                                              let { location: t } = e;
                                                              null != t &&
                                                                  (0, u.zV)(
                                                                      R.HAw.APP_LAUNCHER_OAUTH2_AUTHORIZE_SUCCEEDED,
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
                                    t instanceof E.Ay
                                        ? (0, r.jsx)(l.Drp, {
                                              id: "report-app",
                                              color: "danger",
                                              label: O.intl.string(O.t.jhJzez),
                                              action: () => {
                                                  (0, m.r3)({
                                                      application: t,
                                                      entrypoint: "app_launcher",
                                                      contextualGuildId: j?.getGuildId() ?? void 0,
                                                      contextualChannelId: j?.id,
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
                        className: a()(b.v, D),
                        "aria-label": O.intl.string(O.t["UKOtz+"]),
                        children: (0, r.jsx)(l.jNK, { size: "sm", color: l.LU0.colors.INTERACTIVE_TEXT_ACTIVE }),
                    }),
            }),
        ],
    });
}
