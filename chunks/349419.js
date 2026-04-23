a.d(i, { A: () => z }), a(321073);
var n = a(627968),
    t = a(64700),
    l = a(435428),
    s = a(598748),
    c = a(17928),
    r = a(688810),
    o = a(549699),
    d = a(29496),
    p = a(369374),
    u = a(850046),
    m = a(188951),
    h = a(429913),
    f = a(201718),
    x = a(773669),
    g = a(403362),
    I = a(183555),
    A = a(633075),
    j = a(289173),
    v = a(80330),
    E = a(503698),
    N = a.n(E),
    C = a(331322),
    b = a(834730),
    R = a(890856),
    w = a(123292),
    P = a(619517),
    _ = a(946356),
    y = a(985018),
    S = a(646997);
function M(e) {
    let { applicationName: i, applicationIcon: a } = e;
    return (0, n.jsxs)(C.B, {
        direction: "horizontal",
        gap: 4,
        children: [
            null != a
                ? (0, n.jsx)(P.Ay, { width: 16, height: 16, src: a, className: S.In })
                : (0, n.jsx)("div", { className: S.Fi }),
            (0, n.jsx)(b.E, { variant: "text-xs/medium", children: i }),
        ],
    });
}
function k(e) {
    let { trackUserProfileAction: i } = (0, I.NJ)(),
        a = t.useRef(!1);
    t.useEffect(() => {
        a.current || (i({ action: "VIEW_APPLICATION_WIDGET_PREVIEW", applicationId: e }), (a.current = !0));
    }, [i, e]);
}
function O(e) {
    let { previewData: i, className: a, onClick: t } = e,
        { trackUserProfileAction: l } = (0, I.NJ)();
    return (
        k(i.application.id),
        (0, n.jsx)(R.s, {
            onClick: () => {
                l({ action: "PRESS_APPLICATION_WIDGET_PREVIEW", applicationId: i.application.id }), t?.();
            },
            "aria-label": i.application.name,
            children: (0, n.jsxs)(_.A.Overlay, {
                className: N()(S.kL, a),
                children: [
                    (0, n.jsxs)(C.B, {
                        gap: 8,
                        padding: 8,
                        className: S.Qs,
                        children: [
                            (0, n.jsx)(M, { applicationName: i.application.name, applicationIcon: i.application.icon }),
                            (0, n.jsxs)("div", {
                                className: S.P_,
                                children: [
                                    (0, n.jsxs)(b.E, {
                                        tag: "div",
                                        variant: "heading-sm/semibold",
                                        lineClamp: 2,
                                        children: [
                                            i.previewText,
                                            null != i.previewIcon &&
                                                (0, n.jsxs)(n.Fragment, {
                                                    children: [
                                                        " ",
                                                        (0, n.jsx)("div", {
                                                            className: S.mP,
                                                            children: (0, n.jsx)(P.Ay, {
                                                                src: i.previewIcon.proxyUrl,
                                                                width: i.previewIcon.width,
                                                                height: i.previewIcon.height,
                                                                responsive: !0,
                                                            }),
                                                        }),
                                                    ],
                                                }),
                                        ],
                                    }),
                                    (0, n.jsx)(w.Q, {
                                        textVariant: "text-xs/normal",
                                        text: y.intl.string(y.t.qI8ZP6),
                                        variant: "secondary",
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, n.jsx)("div", {
                        className: S.Pq,
                        children: (0, n.jsx)(P.Ay, {
                            src: i.previewImage.proxyUrl,
                            width: i.previewImage.width,
                            height: i.previewImage.height,
                            responsive: !0,
                            className: S.oz,
                        }),
                    }),
                ],
            }),
        })
    );
}
function G(e) {
    let { application: i, rendererProps: a, className: t, onClick: c } = e,
        { trackUserProfileAction: r } = (0, I.NJ)(),
        o = a.surfaceConfigs[s.m.MINI_PROFILE],
        d = i.id;
    return (k(d), null == o)
        ? null
        : (0, n.jsx)(R.s, {
              onClick: () => {
                  r({ action: "PRESS_APPLICATION_WIDGET_PREVIEW", applicationId: d }), c?.();
              },
              "aria-label": i.name,
              children: (0, n.jsx)(_.A.Overlay, {
                  className: N()(S.iW, t),
                  children: (0, n.jsx)(l.kH, {
                      ...a,
                      surface: s.m.MINI_PROFILE,
                      surfaceConfig: o,
                      header: (0, n.jsx)(M, { applicationName: i.name, applicationIcon: i.getIconURL(16) }),
                  }),
              }),
          });
}
let T = function (e) {
    return "v2" === e.type ? (0, n.jsx)(G, { ...e }) : (0, n.jsx)(O, { ...e });
};
var W = a(939249),
    D = a(780907),
    V = a(760751),
    L = a(486020),
    F = a(939496),
    U = a(996988),
    B = a(216914);
function J(e) {
    var i;
    let a,
        { widgets: l = [], onClick: s, className: r } = e,
        { trackUserProfileAction: o } = (0, I.NJ)(),
        d =
            ((i = l.filter((e) => e instanceof A.R)),
            (a = (0, h.A)(i.map((e) => e.applicationId))),
            (0, c.cf)([V.A], () =>
                Object.fromEntries(
                    a
                        .filter(g.Vq)
                        .map((e) => [e.id, V.A.getGameByApplication(e)])
                        .filter((e) => {
                            let [i, a] = e;
                            return null != a;
                        }),
                ),
            )),
        p = (0, t.useMemo)(
            () => [
                ...new Set(
                    l
                        .map((e) =>
                            e instanceof j.Yy
                                ? e.games.map((e) => e.applicationId)
                                : e instanceof A.R
                                  ? d[e.applicationId]?.id
                                  : void 0,
                        )
                        .filter(g.Vq)
                        .flat(),
                ),
            ],
            [l, d],
        ),
        u = (0, c.bG)([V.A], () => V.A.canFetchDetectableGames()),
        [m, f] = (0, t.useState)([]),
        { themeType: x } = (0, F.E)(),
        v = x === U.d.SIDEBAR,
        E = (0, t.useRef)(!1);
    return (
        (0, t.useEffect)(() => {
            u
                ? D.Ay.getDetectableGames()
                : f(
                      p
                          .map((e) => V.A.getDetectableGame(e))
                          .filter((e) => null != e)
                          .map((e) => ({
                              image: L.Ay.getApplicationIconURL({ id: e.id, icon: e.icon }) ?? "",
                              name: e.name,
                          }))
                          .filter((e) => "" !== e.image)
                          .slice(0, 4),
                  );
        }, [p, u]),
        (0, t.useEffect)(() => {
            0 === m.length || E.current || (o({ action: "VIEW_GAME_WIDGET_BREADCRUMB" }), (E.current = !0));
        }, [o, m.length]),
        (0, n.jsx)(W.D, {
            "aria-label": y.intl.string(y.t.JjiwFx),
            onClick: () => {
                o({ action: "PRESS_GAME_WIDGET_BREADCRUMB" }), s();
            },
            className: B.QF,
            children: (0, n.jsxs)(_.A.Overlay, {
                className: N()(B.WH, r),
                children: [
                    (0, n.jsx)(b.E, {
                        variant: v ? "text-sm/medium" : "text-xs/medium",
                        children: y.intl.string(y.t.JjiwFx),
                    }),
                    (0, n.jsx)("div", {
                        className: B.Pt,
                        children: m.map((e, i) =>
                            (0, n.jsx)(
                                q,
                                {
                                    iconUrl: e.image,
                                    name: e.name,
                                    displayCount: i === m.length - 1 && p.length > 4,
                                    gameCount: p.length - m.length,
                                },
                                i,
                            ),
                        ),
                    }),
                ],
            }),
        })
    );
}
function q(e) {
    let { iconUrl: i, name: a, displayCount: t, gameCount: l } = e;
    return (0, n.jsxs)("div", {
        className: B.Kk,
        children: [
            (0, n.jsx)("img", { className: N()({ [B.um]: t }), src: i, alt: a }),
            t &&
                (0, n.jsx)("div", {
                    className: B.pp,
                    children: (0, n.jsxs)(b.E, { variant: "text-xs/medium", className: B.gq, children: ["+", l] }),
                }),
        ],
    });
}
var Y = a(518477);
function z(e) {
    let { enabled: i } = p.A.useConfig({ location: "UserProfileStackedWidgetPreviews" });
    return i ? (0, n.jsx)($, { ...e }) : (0, n.jsx)(Q, { ...e });
}
function H(e) {
    let { onOpenUserProfileModal: i } = e,
        { analyticsLocations: a } = (0, r.Ay)(),
        { trackUserProfileAction: n } = (0, I.NJ)(),
        l = t.useCallback(() => {
            i?.({ tabSection: Y.RP.WIDGETS });
        }, [i]),
        s = t.useCallback(() => {
            n({ action: "PRESS_SHOW_MORE_WIDGETS", analyticsLocations: a }), l();
        }, [n, a, l]);
    return { openModal: l, onExpand: s };
}
function Q(e) {
    let { user: i, widgets: a = [], ...l } = e,
        { openModal: s, onExpand: c } = H({ user: i, widgets: a, ...l }),
        r = t.useMemo(() => a.filter((e) => e instanceof A.R), [a]),
        o = t.useMemo(() => r.map((e) => e.applicationId), [r]),
        d = (0, u.A)(i.id, o),
        p = t.useCallback(
            (e) => {
                let i = [],
                    t = !1;
                for (let l of a)
                    if (l instanceof A.R) {
                        let a = d[l.applicationId];
                        null != a &&
                            i.push(
                                (0, n.jsx)(
                                    T,
                                    { type: "v1", previewData: a, onClick: s, ...e },
                                    `application-widget-${l.applicationId}`,
                                ),
                            );
                    } else
                        l instanceof j.Yy &&
                            !t &&
                            (i.push((0, n.jsx)(J, { widgets: a, onClick: s, ...e }, "collection-breadcrumb")),
                            (t = !0));
                return i;
            },
            [d, s, a],
        );
    return 0 === a.length ? null : (0, n.jsx)(v.A, { renderCards: p, heading: y.intl.string(y.t.Y55Tua), onExpand: c });
}
function $(e) {
    let { user: i, widgets: a = [], ...r } = e,
        { openModal: p, onExpand: u } = H({ user: i, widgets: a, ...r }),
        I = t.useMemo(() => a.filter((e) => e instanceof A.R), [a]),
        E = t.useMemo(() => I.map((e) => e.applicationId), [I]),
        N = (0, h.A)(E),
        C = t.useMemo(() => new Map(N.filter(g.Vq).map((e) => [e.id, e])), [N]),
        b = (0, m.A)(E),
        R = t.useMemo(() => new Map(b.map((e) => [e.application_id, e])), [b]),
        { data: w } = (0, f.P)(i.id),
        P = t.useMemo(() => new Map(w?.map((e) => [e.application_id, e])), [w]),
        _ = (0, c.bG)([x.default], () => x.default.locale),
        S = (0, c.cf)([d.A], () => Object.fromEntries(I.map((e) => [e.applicationId, d.A.getAssets(e.applicationId)]))),
        M = t.useMemo(
            () =>
                0 === C.size || 0 === R.size || 0 === P.size
                    ? null
                    : new Map(
                          I.map((e) => {
                              let i = C.get(e.applicationId),
                                  a = R.get(e.applicationId),
                                  n = P.get(e.applicationId);
                              if (null == i || null == a || null == n) return null;
                              let t = a.surfaces;
                              if (null == t || null == t[s.m.MINI_PROFILE]) return null;
                              let c = (0, l.VG)(n.profile),
                                  r = Object.values(S[e.applicationId] ?? {}).filter(g.Vq);
                              return [e, { surfaceConfigs: a.surfaces, data: c, application: i, assets: r }];
                          }).filter(g.Vq),
                      ),
            [I, C, R, P, S],
        ),
        k = t.useCallback(
            (e) => {
                let i = [],
                    t = !1;
                for (let l of a)
                    if (l instanceof A.R) {
                        let a = M?.get(l);
                        if (null == a) continue;
                        i.push(
                            (0, n.jsx)(
                                T,
                                {
                                    type: "v2",
                                    application: a.application,
                                    rendererProps: {
                                        locale: _,
                                        surfaceConfigs: a.surfaceConfigs,
                                        isLoading: !1,
                                        hasIdentity: !0,
                                        resolutionContext: {
                                            data: a.data,
                                            applicationAssets: a.assets,
                                            getApplicationAssetUrl: (e) =>
                                                (0, o.Q)(l.applicationId, e, e.metadata.width),
                                            localizedStrings: [],
                                        },
                                    },
                                    onClick: p,
                                    ...e,
                                },
                                `application-widget-${l.applicationId}`,
                            ),
                        );
                    } else
                        l instanceof j.Yy &&
                            !t &&
                            (i.push((0, n.jsx)(J, { widgets: a, onClick: p, ...e }, "collection-breadcrumb")),
                            (t = !0));
                return i;
            },
            [a, p, M, _],
        );
    return 0 === a.length ? null : (0, n.jsx)(v.A, { renderCards: k, heading: y.intl.string(y.t.Y55Tua), onExpand: u });
}
