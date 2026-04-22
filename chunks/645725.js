n.d(t, { A: () => V });
var l = n(627968),
    i = n(64700),
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
    N = n(392054),
    g = n(658575),
    E = n(342384),
    v = n(20015),
    b = n(204776),
    I = n(50268),
    y = n(928658),
    j = n(611010),
    P = n(967198),
    T = n(287809),
    L = n(954571),
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
        B = i.useRef(null),
        F = (0, r.bG)([O.A], () => O.A.entrypoint()),
        G = (0, k.Pp)(t),
        z = (0, b.Ie)(G),
        $ = (0, g.G)(t.id),
        K = (0, r.bG)([P.A], () => P.A.getGuildId() ?? void 0, []),
        Y = {
            location: N.Oh.APP_LAUNCHER_APPLICATION_VIEW_MORE_MENU,
            application_id: t.id,
            section_name: W,
            source: O.A.lastShownEntrypoint(),
        },
        q = T.default.getCurrentUser(),
        X = (0, I.A)({ id: t.id, label: U.intl.string(U.t["+NP/b2"]) }),
        Z = (0, M.r)({ application: t }),
        Q = (0, v.n)(t, D.gfo.EMBEDDED),
        J = "channel" === a.type ? a.channel : void 0;
    return (0, l.jsxs)("div", {
        className: H.k,
        children: [
            (0, l.jsx)(o.D, {
                onClick: () => {
                    let e = Q ? (0, E.W)({ applicationId: t.id, referrerId: q?.id }) : (0, E.V)({ id: t.id, ...G });
                    (0, S.C)(e, () => (0, c.P0)((0, d.o)(U.intl.string(U.t["L/PwZf"]), u.Ck.SUCCESS))),
                        L.default.track(D.HAw.APP_LAUNCHER_APPLICATION_LINK_COPIED, {
                            application_id: t.id,
                            source: F,
                        });
                },
                className: s()(H.v, V),
                "aria-label": U.intl.string(U.t.WqhZss),
                children: (0, l.jsx)(m.q, { size: "sm", color: p.A.colors.INTERACTIVE_TEXT_ACTIVE }),
            }),
            (0, l.jsx)(_.Y, {
                targetElementRef: B,
                renderPopout: (e) => {
                    let { closePopout: i } = e;
                    return (0, l.jsxs)(A.W, {
                        "data-menu-needs-review": !0,
                        className: w.qp,
                        navId: "app-details-more-menu",
                        onClose: i,
                        "aria-label": U.intl.string(U.t.AXIHpV),
                        onSelect: void 0,
                        children: [
                            (0, l.jsxs)(h.rX, {
                                children: [
                                    $ &&
                                        (0, l.jsx)(h.Dr, {
                                            id: "open-storefront",
                                            label: U.intl.string(U.t.kRvlKJ),
                                            action: () => {
                                                (0, f.openModalLazy)(async () => {
                                                    let { default: e } = await Promise.all([
                                                        n.e("61943"),
                                                        n.e("28367"),
                                                        n.e("27411"),
                                                        n.e("49318"),
                                                        n.e("12721"),
                                                        n.e("58283"),
                                                        n.e("17601"),
                                                        n.e("8087"),
                                                        n.e("55057"),
                                                        n.e("60471"),
                                                        n.e("42257"),
                                                        n.e("48563"),
                                                        n.e("27355"),
                                                        n.e("67876"),
                                                        n.e("374"),
                                                        n.e("33563"),
                                                        n.e("40343"),
                                                    ]).then(n.bind(n, 719847));
                                                    return (n) =>
                                                        (0, l.jsx)(e, {
                                                            transitionState: n.transitionState,
                                                            onClose: n.onClose,
                                                            appId: t.id,
                                                            guildId: K,
                                                        });
                                                });
                                            },
                                        }),
                                    z
                                        ? (0, l.jsx)(h.Dr, {
                                              id: "add-app",
                                              label: U.intl.string(U.t.NgXl3C),
                                              action: () => {
                                                  null == G.customInstallUrl &&
                                                      (0, C.zV)(D.HAw.APP_LAUNCHER_OAUTH2_AUTHORIZE_OPENED, Y),
                                                      (0, R.o)({
                                                          ...G,
                                                          oauth2Callback: (e) => {
                                                              let { location: t } = e;
                                                              null != t &&
                                                                  (0, C.zV)(
                                                                      D.HAw.APP_LAUNCHER_OAUTH2_AUTHORIZE_SUCCEEDED,
                                                                      Y,
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
                            (0, l.jsx)(h.rX, {
                                children:
                                    t instanceof j.Ay
                                        ? (0, l.jsx)(h.Dr, {
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
                            (0, l.jsx)(h.rX, { children: X }),
                        ],
                    });
                },
                align: "right",
                position: "bottom",
                children: (e) =>
                    (0, l.jsx)(o.D, {
                        innerRef: B,
                        ...e,
                        onClick: e.onClick,
                        className: s()(H.v, V),
                        "aria-label": U.intl.string(U.t["UKOtz+"]),
                        children: (0, l.jsx)(x.j, { size: "sm", color: p.A.colors.INTERACTIVE_TEXT_ACTIVE }),
                    }),
            }),
        ],
    });
}
