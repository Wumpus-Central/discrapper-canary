i.d(a, { A: () => y }), i(321073);
var n = i(477900),
    t = i(582128),
    l = i(176999),
    s = i(598748),
    c = i(17928),
    r = i(688810),
    o = i(549699),
    u = i(29496),
    p = i(352003),
    d = i(429913),
    m = i(201718),
    f = i(773669),
    I = i(403362),
    g = i(183555),
    h = i(633075),
    E = i(289173),
    x = i(80330),
    j = i(503698),
    A = i.n(j),
    C = i(794248),
    R = i(331322),
    _ = i(834730),
    M = i(890856),
    N = i(619517),
    P = i(946356),
    v = i(259853);
function b(e) {
    let { applicationName: a, applicationIcon: i } = e;
    return (0, n.jsxs)(R.B, {
        direction: "horizontal",
        gap: 4,
        children: [
            null != i
                ? (0, n.jsx)(N.Ay, { width: 16, height: 16, src: i, className: v.In })
                : (0, n.jsx)("div", { className: v.Fi }),
            (0, n.jsx)(_.E, { variant: "text-xs/medium", children: a }),
        ],
    });
}
function k(e) {
    let { application: a, rendererProps: i, className: l, onClick: c } = e,
        { trackUserProfileAction: r } = (0, g.NJ)(),
        o = i.surfaceConfigs[s.m.MINI_PROFILE],
        u = a.id;
    return (!(function (e) {
        let { trackUserProfileAction: a } = (0, g.NJ)(),
            i = t.useRef(!1);
        t.useEffect(() => {
            i.current || (a({ action: "VIEW_APPLICATION_WIDGET_PREVIEW", applicationId: e }), (i.current = !0));
        }, [a, e]);
    })(u),
    null == o)
        ? null
        : (0, n.jsx)(M.s, {
              onClick: () => {
                  r({ action: "PRESS_APPLICATION_WIDGET_PREVIEW", applicationId: u }), c?.();
              },
              "aria-label": a.name,
              children: (0, n.jsx)(P.A.Overlay, {
                  className: A()(v.kL, l),
                  children: (0, n.jsx)(C.kH, {
                      ...i,
                      surface: s.m.MINI_PROFILE,
                      surfaceConfig: o,
                      header: (0, n.jsx)(b, { applicationName: a.name, applicationIcon: a.getIconURL(16) }),
                  }),
              }),
          });
}
var w = i(939249),
    S = i(321108),
    O = i(939496),
    W = i(996988),
    G = i(375708),
    D = i(107562);
function V(e) {
    var a;
    let i,
        { widgets: l = [], onClick: s, className: c } = e,
        { trackUserProfileAction: r } = (0, g.NJ)(),
        o =
            ((a = l.filter((e) => e instanceof h.R)),
            (i = (0, d.A)(a.map((e) => e.applicationId))),
            (0, t.useMemo)(
                () =>
                    Object.fromEntries(
                        i
                            .filter(I.Vq)
                            .map((e) => [e.id, e.getCanonicalGameId()])
                            .filter((e) => {
                                let [a, i] = e;
                                return null != i;
                            }),
                    ),
                [i],
            )),
        u = (0, t.useMemo)(
            () => [
                ...new Set(
                    l
                        .map((e) =>
                            e instanceof E.Yy
                                ? e.games.map((e) => e.applicationId)
                                : e instanceof h.R
                                  ? o[e.applicationId]
                                  : void 0,
                        )
                        .filter(I.Vq)
                        .flat(),
                ),
            ],
            [l, o],
        ),
        { themeType: p } = (0, O.E)(),
        m = p === W.d.SIDEBAR,
        f = (0, t.useRef)(!1),
        x = (0, S.A)(u),
        j = (0, t.useMemo)(
            () =>
                x
                    .map((e) => ({ image: e.getIconURL(48) ?? "", name: e.name }))
                    .filter((e) => "" !== e.image)
                    .slice(0, 4),
            [x],
        );
    return (
        (0, t.useEffect)(() => {
            0 === j.length || f.current || (r({ action: "VIEW_GAME_WIDGET_BREADCRUMB" }), (f.current = !0));
        }, [r, j.length]),
        (0, n.jsx)(w.D, {
            "aria-label": G.intl.string(G.t.JjiwFx),
            onClick: () => {
                r({ action: "PRESS_GAME_WIDGET_BREADCRUMB" }), s();
            },
            className: D.QF,
            children: (0, n.jsxs)(P.A.Overlay, {
                className: A()(D.WH, c),
                children: [
                    (0, n.jsx)(_.E, {
                        variant: m ? "text-sm/medium" : "text-xs/medium",
                        children: G.intl.string(G.t.JjiwFx),
                    }),
                    (0, n.jsx)("div", {
                        className: D.Pt,
                        children: j.map((e, a) =>
                            (0, n.jsx)(
                                L,
                                {
                                    iconUrl: e.image,
                                    name: e.name,
                                    displayCount: a === j.length - 1 && u.length > 4,
                                    gameCount: u.length - j.length,
                                },
                                a,
                            ),
                        ),
                    }),
                ],
            }),
        })
    );
}
function L(e) {
    let { iconUrl: a, name: i, displayCount: t, gameCount: l } = e;
    return (0, n.jsxs)("div", {
        className: D.Kk,
        children: [
            (0, n.jsx)("img", { className: A()({ [D.um]: t }), src: a, alt: i }),
            t &&
                (0, n.jsx)("div", {
                    className: D.pp,
                    children: (0, n.jsxs)(_.E, { variant: "text-xs/medium", className: D.gq, children: ["+", l] }),
                }),
        ],
    });
}
var T = i(518477);
function y(e) {
    let { user: a, widgets: i = [], ...j } = e,
        { openModal: A, onExpand: C } = (function (e) {
            let { onOpenUserProfileModal: a } = e,
                { analyticsLocations: i } = (0, r.Ay)(),
                { trackUserProfileAction: n } = (0, g.NJ)(),
                l = t.useCallback(() => {
                    a?.({ tabSection: T.RP.WIDGETS });
                }, [a]),
                s = t.useCallback(() => {
                    n({ action: "PRESS_SHOW_MORE_WIDGETS", analyticsLocations: i }), l();
                }, [n, i, l]);
            return { openModal: l, onExpand: s };
        })({ user: a, widgets: i, ...j }),
        R = t.useMemo(() => i.filter((e) => e instanceof h.R), [i]),
        _ = t.useMemo(() => R.map((e) => e.applicationId), [R]),
        M = (0, d.A)(_),
        N = t.useMemo(() => new Map(M.filter(I.Vq).map((e) => [e.id, e])), [M]),
        P = (0, p.A)(_),
        v = t.useMemo(() => new Map(P.map((e) => [e.application_id, e])), [P]),
        { data: b } = (0, m.P)(a.id),
        w = t.useMemo(() => new Map(b?.map((e) => [e.application_id, e])), [b]),
        S = (0, c.bG)([f.default], () => f.default.locale),
        O = (0, c.cf)([u.A], () => Object.fromEntries(R.map((e) => [e.applicationId, u.A.getAssets(e.applicationId)]))),
        W = t.useMemo(
            () =>
                0 === N.size || 0 === v.size || 0 === w.size
                    ? null
                    : new Map(
                          R.map((e) => {
                              let a = N.get(e.applicationId),
                                  i = v.get(e.applicationId),
                                  n = w.get(e.applicationId);
                              if (null == a || null == i || null == n) return null;
                              let t = i.surfaces;
                              if (null == t || null == t[s.m.MINI_PROFILE]) return null;
                              let c = (0, l.VG)(n.profile),
                                  r = Object.values(O[e.applicationId] ?? {}).filter(I.Vq);
                              return [e, { surfaceConfigs: i.surfaces, data: c, application: a, assets: r }];
                          }).filter(I.Vq),
                      ),
            [R, N, v, w, O],
        ),
        D = t.useCallback(
            (e) => {
                let a = [],
                    t = !1;
                for (let l of i)
                    if (l instanceof h.R) {
                        let i = W?.get(l);
                        if (null == i) continue;
                        a.push(
                            (0, n.jsx)(
                                k,
                                {
                                    application: i.application,
                                    rendererProps: {
                                        locale: S,
                                        surfaceConfigs: i.surfaceConfigs,
                                        isLoading: !1,
                                        hasIdentity: !0,
                                        resolutionContext: {
                                            data: i.data,
                                            applicationAssets: i.assets,
                                            getApplicationAssetUrl: (e) =>
                                                (0, o.Q)(l.applicationId, e, e.metadata.width),
                                            localizedStrings: [],
                                        },
                                    },
                                    onClick: A,
                                    ...e,
                                },
                                `application-widget-${l.applicationId}`,
                            ),
                        );
                    } else
                        l instanceof E.Yy &&
                            !t &&
                            (a.push((0, n.jsx)(V, { widgets: i, onClick: A, ...e }, "collection-breadcrumb")),
                            (t = !0));
                return a;
            },
            [i, A, W, S],
        );
    return 0 === i.length ? null : (0, n.jsx)(x.A, { renderCards: D, heading: G.intl.string(G.t.Y55Tua), onExpand: C });
}
