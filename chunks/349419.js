a.d(i, { A: () => Y }), a(321073);
var t = a(627968),
    n = a(64700),
    l = a(127382),
    s = a(598748),
    c = a(17928),
    r = a(688810),
    o = a(549699),
    p = a(29496),
    d = a(369374),
    u = a(850046),
    m = a(188951),
    f = a(429913),
    g = a(201718),
    h = a(773669),
    x = a(403362),
    I = a(183555),
    j = a(633075),
    A = a(289173),
    E = a(80330),
    v = a(503698),
    C = a.n(v),
    w = a(331322),
    N = a(834730),
    R = a(890856),
    P = a(123292),
    _ = a(619517),
    b = a(946356),
    y = a(375708),
    M = a(646997);
function k(e) {
    let { applicationName: i, applicationIcon: a } = e;
    return (0, t.jsxs)(w.B, {
        direction: "horizontal",
        gap: 4,
        children: [
            null != a
                ? (0, t.jsx)(_.Ay, { width: 16, height: 16, src: a, className: M.In })
                : (0, t.jsx)("div", { className: M.Fi }),
            (0, t.jsx)(N.E, { variant: "text-xs/medium", children: i }),
        ],
    });
}
function S(e) {
    let { trackUserProfileAction: i } = (0, I.NJ)(),
        a = n.useRef(!1);
    n.useEffect(() => {
        a.current || (i({ action: "VIEW_APPLICATION_WIDGET_PREVIEW", applicationId: e }), (a.current = !0));
    }, [i, e]);
}
function G(e) {
    let { previewData: i, className: a, onClick: n } = e,
        { trackUserProfileAction: l } = (0, I.NJ)();
    return (
        S(i.application.id),
        (0, t.jsx)(R.s, {
            onClick: () => {
                l({ action: "PRESS_APPLICATION_WIDGET_PREVIEW", applicationId: i.application.id }), n?.();
            },
            "aria-label": i.application.name,
            children: (0, t.jsxs)(b.A.Overlay, {
                className: C()(M.kL, a),
                children: [
                    (0, t.jsxs)(w.B, {
                        gap: 8,
                        padding: 8,
                        className: M.Qs,
                        children: [
                            (0, t.jsx)(k, { applicationName: i.application.name, applicationIcon: i.application.icon }),
                            (0, t.jsxs)("div", {
                                className: M.P_,
                                children: [
                                    (0, t.jsxs)(N.E, {
                                        tag: "div",
                                        variant: "heading-sm/semibold",
                                        lineClamp: 2,
                                        children: [
                                            i.previewText,
                                            null != i.previewIcon &&
                                                (0, t.jsxs)(t.Fragment, {
                                                    children: [
                                                        " ",
                                                        (0, t.jsx)("div", {
                                                            className: M.mP,
                                                            children: (0, t.jsx)(_.Ay, {
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
                                    (0, t.jsx)(P.Q, {
                                        textVariant: "text-xs/normal",
                                        text: y.intl.string(y.t.qI8ZP6),
                                        variant: "secondary",
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, t.jsx)("div", {
                        className: M.Pq,
                        children: (0, t.jsx)(_.Ay, {
                            src: i.previewImage.proxyUrl,
                            width: i.previewImage.width,
                            height: i.previewImage.height,
                            responsive: !0,
                            className: M.oz,
                        }),
                    }),
                ],
            }),
        })
    );
}
function W(e) {
    let { application: i, rendererProps: a, className: n, onClick: c } = e,
        { trackUserProfileAction: r } = (0, I.NJ)(),
        o = a.surfaceConfigs[s.m.MINI_PROFILE],
        p = i.id;
    return (S(p), null == o)
        ? null
        : (0, t.jsx)(R.s, {
              onClick: () => {
                  r({ action: "PRESS_APPLICATION_WIDGET_PREVIEW", applicationId: p }), c?.();
              },
              "aria-label": i.name,
              children: (0, t.jsx)(b.A.Overlay, {
                  className: C()(M.iW, n),
                  children: (0, t.jsx)(l.kH, {
                      ...a,
                      surface: s.m.MINI_PROFILE,
                      surfaceConfig: o,
                      header: (0, t.jsx)(k, { applicationName: i.name, applicationIcon: i.getIconURL(16) }),
                  }),
              }),
          });
}
let D = function (e) {
    return "v2" === e.type ? (0, t.jsx)(W, { ...e }) : (0, t.jsx)(G, { ...e });
};
var O = a(939249),
    T = a(780907),
    V = a(760751),
    L = a(486020),
    F = a(939496),
    U = a(996988),
    q = a(216914);
function B(e) {
    var i;
    let a,
        { widgets: l = [], onClick: s, className: r } = e,
        { trackUserProfileAction: o } = (0, I.NJ)(),
        p =
            ((i = l.filter((e) => e instanceof j.R)),
            (a = (0, f.A)(i.map((e) => e.applicationId))),
            (0, c.cf)([V.A], () =>
                Object.fromEntries(
                    a
                        .filter(x.Vq)
                        .map((e) => [e.id, V.A.getGameByApplication(e)])
                        .filter((e) => {
                            let [i, a] = e;
                            return null != a;
                        }),
                ),
            )),
        d = (0, n.useMemo)(
            () => [
                ...new Set(
                    l
                        .map((e) =>
                            e instanceof A.Yy
                                ? e.games.map((e) => e.applicationId)
                                : e instanceof j.R
                                  ? p[e.applicationId]?.id
                                  : void 0,
                        )
                        .filter(x.Vq)
                        .flat(),
                ),
            ],
            [l, p],
        ),
        u = (0, c.bG)([V.A], () => V.A.canFetchDetectableGames()),
        [m, g] = (0, n.useState)([]),
        { themeType: h } = (0, F.E)(),
        E = h === U.d.SIDEBAR,
        v = (0, n.useRef)(!1);
    return (
        (0, n.useEffect)(() => {
            u
                ? T.Ay.getDetectableGames()
                : g(
                      d
                          .map((e) => V.A.getDetectableGame(e))
                          .filter((e) => null != e)
                          .map((e) => ({
                              image: L.Ay.getApplicationIconURL({ id: e.id, icon: e.icon }) ?? "",
                              name: e.name,
                          }))
                          .filter((e) => "" !== e.image)
                          .slice(0, 4),
                  );
        }, [d, u]),
        (0, n.useEffect)(() => {
            0 === m.length || v.current || (o({ action: "VIEW_GAME_WIDGET_BREADCRUMB" }), (v.current = !0));
        }, [o, m.length]),
        (0, t.jsx)(O.D, {
            "aria-label": y.intl.string(y.t.JjiwFx),
            onClick: () => {
                o({ action: "PRESS_GAME_WIDGET_BREADCRUMB" }), s();
            },
            className: q.QF,
            children: (0, t.jsxs)(b.A.Overlay, {
                className: C()(q.WH, r),
                children: [
                    (0, t.jsx)(N.E, {
                        variant: E ? "text-sm/medium" : "text-xs/medium",
                        children: y.intl.string(y.t.JjiwFx),
                    }),
                    (0, t.jsx)("div", {
                        className: q.Pt,
                        children: m.map((e, i) =>
                            (0, t.jsx)(
                                J,
                                {
                                    iconUrl: e.image,
                                    name: e.name,
                                    displayCount: i === m.length - 1 && d.length > 4,
                                    gameCount: d.length - m.length,
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
function J(e) {
    let { iconUrl: i, name: a, displayCount: n, gameCount: l } = e;
    return (0, t.jsxs)("div", {
        className: q.Kk,
        children: [
            (0, t.jsx)("img", { className: C()({ [q.um]: n }), src: i, alt: a }),
            n &&
                (0, t.jsx)("div", {
                    className: q.pp,
                    children: (0, t.jsxs)(N.E, { variant: "text-xs/medium", className: q.gq, children: ["+", l] }),
                }),
        ],
    });
}
var z = a(518477);
function Y(e) {
    let { enabled: i } = d.A.useConfig({ location: "UserProfileStackedWidgetPreviews" });
    return i ? (0, t.jsx)($, { ...e }) : (0, t.jsx)(H, { ...e });
}
function Q(e) {
    let { onOpenUserProfileModal: i } = e,
        { analyticsLocations: a } = (0, r.Ay)(),
        { trackUserProfileAction: t } = (0, I.NJ)(),
        l = n.useCallback(() => {
            i?.({ tabSection: z.RP.WIDGETS });
        }, [i]),
        s = n.useCallback(() => {
            t({ action: "PRESS_SHOW_MORE_WIDGETS", analyticsLocations: a }), l();
        }, [t, a, l]);
    return { openModal: l, onExpand: s };
}
function H(e) {
    let { user: i, widgets: a = [], ...l } = e,
        { openModal: s, onExpand: c } = Q({ user: i, widgets: a, ...l }),
        r = n.useMemo(() => a.filter((e) => e instanceof j.R), [a]),
        o = n.useMemo(() => r.map((e) => e.applicationId), [r]),
        p = (0, u.A)(i.id, o),
        d = n.useCallback(
            (e) => {
                let i = [],
                    n = !1;
                for (let l of a)
                    if (l instanceof j.R) {
                        let a = p[l.applicationId];
                        null != a &&
                            i.push(
                                (0, t.jsx)(
                                    D,
                                    { type: "v1", previewData: a, onClick: s, ...e },
                                    `application-widget-${l.applicationId}`,
                                ),
                            );
                    } else
                        l instanceof A.Yy &&
                            !n &&
                            (i.push((0, t.jsx)(B, { widgets: a, onClick: s, ...e }, "collection-breadcrumb")),
                            (n = !0));
                return i;
            },
            [p, s, a],
        );
    return 0 === a.length ? null : (0, t.jsx)(E.A, { renderCards: d, heading: y.intl.string(y.t.Y55Tua), onExpand: c });
}
function $(e) {
    let { user: i, widgets: a = [], ...r } = e,
        { openModal: d, onExpand: u } = Q({ user: i, widgets: a, ...r }),
        I = n.useMemo(() => a.filter((e) => e instanceof j.R), [a]),
        v = n.useMemo(() => I.map((e) => e.applicationId), [I]),
        C = (0, f.A)(v),
        w = n.useMemo(() => new Map(C.filter(x.Vq).map((e) => [e.id, e])), [C]),
        N = (0, m.A)(v),
        R = n.useMemo(() => new Map(N.map((e) => [e.application_id, e])), [N]),
        { data: P } = (0, g.P)(i.id),
        _ = n.useMemo(() => new Map(P?.map((e) => [e.application_id, e])), [P]),
        b = (0, c.bG)([h.default], () => h.default.locale),
        M = (0, c.cf)([p.A], () => Object.fromEntries(I.map((e) => [e.applicationId, p.A.getAssets(e.applicationId)]))),
        k = n.useMemo(
            () =>
                0 === w.size || 0 === R.size || 0 === _.size
                    ? null
                    : new Map(
                          I.map((e) => {
                              let i = w.get(e.applicationId),
                                  a = R.get(e.applicationId),
                                  t = _.get(e.applicationId);
                              if (null == i || null == a || null == t) return null;
                              let n = a.surfaces;
                              if (null == n || null == n[s.m.MINI_PROFILE]) return null;
                              let c = (0, l.VG)(t.profile),
                                  r = Object.values(M[e.applicationId] ?? {}).filter(x.Vq);
                              return [e, { surfaceConfigs: a.surfaces, data: c, application: i, assets: r }];
                          }).filter(x.Vq),
                      ),
            [I, w, R, _, M],
        ),
        S = n.useCallback(
            (e) => {
                let i = [],
                    n = !1;
                for (let l of a)
                    if (l instanceof j.R) {
                        let a = k?.get(l);
                        if (null == a) continue;
                        i.push(
                            (0, t.jsx)(
                                D,
                                {
                                    type: "v2",
                                    application: a.application,
                                    rendererProps: {
                                        locale: b,
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
                                    onClick: d,
                                    ...e,
                                },
                                `application-widget-${l.applicationId}`,
                            ),
                        );
                    } else
                        l instanceof A.Yy &&
                            !n &&
                            (i.push((0, t.jsx)(B, { widgets: a, onClick: d, ...e }, "collection-breadcrumb")),
                            (n = !0));
                return i;
            },
            [a, d, k, b],
        );
    return 0 === a.length ? null : (0, t.jsx)(E.A, { renderCards: S, heading: y.intl.string(y.t.Y55Tua), onExpand: u });
}
