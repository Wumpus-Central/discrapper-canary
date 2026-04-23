n.d(t, { A: () => V });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    r = n(311907),
    o = n(939249),
    c = n(691540),
    d = n(857250),
    u = n(97483),
    m = n(173936),
    p = n(827734),
    _ = n(265872),
    A = n(861672),
    h = n(477782),
    f = n(192308),
    x = n(365199),
    C = n(58149),
    g = n(392054),
    N = n(658575),
    E = n(342384),
    b = n(20015),
    I = n(204776),
    v = n(50268),
    y = n(928658),
    j = n(611010),
    P = n(967198),
    L = n(287809),
    T = n(954571),
    S = n(957565),
    R = n(692848),
    O = n(989837),
    k = n(735991),
    M = n(346446),
    w = n(60809),
    D = n(652215),
    U = n(985018),
    H = n(527080);
function V(e) {
    let { application: t, context: a, className: V, sectionName: W } = e,
        B = l.useRef(null),
        G = (0, r.bG)([O.A], () => O.A.entrypoint()),
        F = (0, k.Pp)(t),
        z = (0, I.Ie)(F),
        $ = (0, N.G)(t.id),
        K = (0, r.bG)([P.A], () => P.A.getGuildId() ?? void 0, []),
        q = {
            location: g.Oh.APP_LAUNCHER_APPLICATION_VIEW_MORE_MENU,
            application_id: t.id,
            section_name: W,
            source: O.A.lastShownEntrypoint(),
        },
        Y = L.default.getCurrentUser(),
        X = (0, v.A)({ id: t.id, label: U.intl.string(U.t["+NP/b2"]) }),
        Z = (0, M.r)({ application: t }),
        Q = (0, b.n)(t, D.gfo.EMBEDDED),
        J = "channel" === a.type ? a.channel : void 0;
    return (0, i.jsxs)("div", {
        className: H.k,
        children: [
            (0, i.jsx)(o.D, {
                onClick: () => {
                    let e = Q ? (0, E.W)({ applicationId: t.id, referrerId: Y?.id }) : (0, E.V)({ id: t.id, ...F });
                    (0, S.C)(e, () => (0, c.P0)((0, d.o)(U.intl.string(U.t["L/PwZf"]), u.Ck.SUCCESS))),
                        T.default.track(D.HAw.APP_LAUNCHER_APPLICATION_LINK_COPIED, {
                            application_id: t.id,
                            source: G,
                        });
                },
                className: s()(H.v, V),
                "aria-label": U.intl.string(U.t.WqhZss),
                children: (0, i.jsx)(m.q, { size: "sm", color: p.A.colors.INTERACTIVE_TEXT_ACTIVE }),
            }),
            (0, i.jsx)(_.Y, {
                targetElementRef: B,
                renderPopout: (e) => {
                    let { closePopout: l } = e;
                    return (0, i.jsxs)(A.W, {
                        "data-menu-needs-review": !0,
                        className: w.qp,
                        navId: "app-details-more-menu",
                        onClose: l,
                        "aria-label": U.intl.string(U.t.AXIHpV),
                        onSelect: void 0,
                        children: [
                            (0, i.jsxs)(h.rX, {
                                children: [
                                    $ &&
                                        (0, i.jsx)(h.Dr, {
                                            id: "open-storefront",
                                            label: U.intl.string(U.t.kRvlKJ),
                                            action: () => {
                                                (0, f.openModalLazy)(async () => {
                                                    let { default: e } = await Promise.all([
                                                        n.e("374"),
                                                        n.e("33563"),
                                                        n.e("42944"),
                                                    ]).then(n.bind(n, 719847));
                                                    return (n) =>
                                                        (0, i.jsx)(e, {
                                                            transitionState: n.transitionState,
                                                            onClose: n.onClose,
                                                            appId: t.id,
                                                            guildId: K,
                                                        });
                                                });
                                            },
                                        }),
                                    z
                                        ? (0, i.jsx)(h.Dr, {
                                              id: "add-app",
                                              label: U.intl.string(U.t.NgXl3C),
                                              action: () => {
                                                  null == F.customInstallUrl &&
                                                      (0, C.zV)(D.HAw.APP_LAUNCHER_OAUTH2_AUTHORIZE_OPENED, q),
                                                      (0, R.o)({
                                                          ...F,
                                                          oauth2Callback: (e) => {
                                                              let { location: t } = e;
                                                              null != t &&
                                                                  (0, C.zV)(
                                                                      D.HAw.APP_LAUNCHER_OAUTH2_AUTHORIZE_SUCCEEDED,
                                                                      q,
                                                                  );
                                                          },
                                                          source: "app_launcher_app_details",
                                                      });
                                              },
                                          })
                                        : null,
                                    Z,
                                ],
                            }),
                            (0, i.jsx)(h.rX, {
                                children:
                                    t instanceof j.Ay
                                        ? (0, i.jsx)(h.Dr, {
                                              id: "report-app",
                                              color: "danger",
                                              label: U.intl.string(U.t.jhJzez),
                                              action: () => {
                                                  (0, y.r3)({
                                                      application: t,
                                                      entrypoint: "app_launcher",
                                                      contextualGuildId: J?.getGuildId() ?? void 0,
                                                      contextualChannelId: J?.id,
                                                  });
                                              },
                                          })
                                        : null,
                            }),
                            (0, i.jsx)(h.rX, { children: X }),
                        ],
                    });
                },
                align: "right",
                position: "bottom",
                children: (e) =>
                    (0, i.jsx)(o.D, {
                        innerRef: B,
                        ...e,
                        onClick: e.onClick,
                        className: s()(H.v, V),
                        "aria-label": U.intl.string(U.t["UKOtz+"]),
                        children: (0, i.jsx)(x.j, { size: "sm", color: p.A.colors.INTERACTIVE_TEXT_ACTIVE }),
                    }),
            }),
        ],
    });
}
