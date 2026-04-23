n.d(t, { A: () => ef, u: () => eu });
var i = n(627968),
    a = n(64700),
    l = n(503698),
    s = n.n(l),
    r = n(17928),
    o = n(885574),
    c = n(834730),
    d = n(395332),
    u = n(704824),
    g = n(429913),
    m = n(633075),
    _ = n(667049),
    f = n(287809),
    x = n(403362),
    p = n(369374);
function I(e) {
    let { enabled: t } = p.A.useConfig({ location: e.location }),
        n = (0, r.bG)([f.default], () => f.default.getCurrentUser()),
        i = (0, d.w$)({ location: e.location }),
        l = a.useMemo(() => i?.filter((e) => e.isEligibleForSuggestions()), [i]),
        s = a.useMemo(() => l?.map((e) => e.applicationId) ?? [], [l]),
        o = (0, g.A)(s),
        { tokens: c, fetched: I } = (0, u.j)(s),
        h = (0, _.A)(n?.id),
        A = null == n || null == l || null == c || !I;
    return a.useMemo(
        () =>
            A
                ? { isLoading: A }
                : t
                  ? { isLoading: A, suggestions: [], currentUser: n }
                  : {
                        isLoading: A,
                        suggestions: l
                            .map((e) => {
                                let t = o.find((t) => t?.id === e.applicationId);
                                return null == t ||
                                    null == c.find((t) => t.application.id === e.applicationId) ||
                                    null != h.find((t) => t instanceof m.R && t.applicationId === e.applicationId)
                                    ? null
                                    : { config: e, application: t, dismissibleContent: e.suggestedWidgetLinkedDc };
                            })
                            .filter(x.Vq),
                        currentUser: n,
                    },
        [t, A, l, n, o, c, h],
    );
}
var h = n(323082),
    A = n(379848),
    E = n(840387),
    v = n(201718),
    j = n(495544),
    N = n(615405),
    C = n(289173),
    S = n(373842),
    b = n(600761),
    T = n(605694),
    O = n(990078),
    k = n(657718),
    L = n(789645),
    R = n(478016),
    D = n(183555),
    P = n(735321),
    G = n(606758),
    y = n(518477),
    w = n(49999),
    M = n(985018);
function U(e) {
    let { user: t, application: n, onDismiss: l } = e,
        { trackUserProfileEditAction: s } = (0, D.NJ)(),
        r = a.useMemo(() => new m.R({ applicationId: n.id }), [n.id]),
        o = a.useCallback(() => {
            null != r &&
                ((0, P.Y5)(r),
                s({ action: "WIDGET_ADDED", ...r.getProfileEditAnalyticsOptions() }),
                (0, G.XA)(y.jM.WIDGET_ADDED));
        }, [r, s]);
    return (0, i.jsx)(T.A, {
        user: t,
        widget: r,
        subtle: !0,
        cta: (0, i.jsx)(T.A.Cta, {
            showSuggestedForYou: !0,
            heading: M.intl.format(M.t.OIzLCy, { applicationName: n.name }),
            content: M.intl.format(M.t.BQySru, { applicationName: n.name }),
            buttons: (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(O.m, {
                        text: M.intl.string(M.t.WAI6xu),
                        ariaHidden: !0,
                        children: (0, i.jsx)(k.S, {
                            variant: "secondary",
                            size: "sm",
                            icon: L.P,
                            "aria-label": M.intl.string(M.t.WAI6xu),
                            onClick: () => {
                                l(w.i.USER_DISMISS);
                            },
                        }),
                    }),
                    (0, i.jsx)(O.m, {
                        text: M.intl.string(M.t["lBG2s/"]),
                        ariaHidden: !0,
                        children: (0, i.jsx)(k.S, {
                            variant: "primary",
                            size: "sm",
                            icon: R.U,
                            "aria-label": M.intl.formatToPlainString(M.t.KfGahB, { applicationName: n.name }),
                            onClick: () => {
                                l(w.i.TAKE_ACTION), o();
                            },
                        }),
                    }),
                ],
            }),
        }),
    });
}
var F = n(192308),
    W = n(821609),
    B = n(307301),
    H = n(773669),
    V = n(79284);
function X(e) {
    let { className: t } = e,
        l = ["en-US", "en-GB"].includes((0, r.bG)([H.default], () => H.default.locale))
            ? M.intl.string(M.t.OYlggR)
            : M.intl.string(M.t.Y55Tua),
        { trackUserProfileEditAction: o } = (0, D.NJ)(),
        d = a.useCallback(() => {
            o({ action: "PRESS_ADD_WIDGET" }),
                (0, F.openModalLazy)(
                    async () => {
                        let { default: e } = await n.e("87591").then(n.bind(n, 333114));
                        return (t) => (0, i.jsx)(e, { ...t, trackUserProfileEditAction: o });
                    },
                    { stackingBehavior: "stack" },
                );
        }, [o]);
    return (0, i.jsxs)("div", {
        className: s()(V.w, t),
        children: [
            (0, i.jsx)(c.E, { variant: "text-xs/semibold", color: "text-subtle", children: l }),
            (0, i.jsx)(W.$, {
                icon: B.j,
                text: M.intl.string(M.t["lBG2s/"]),
                size: "sm",
                variant: "secondary",
                onClick: d,
            }),
        ],
    });
}
var z = n(192),
    Y = n(128988),
    K = n(939318),
    q = n(289873),
    Q = n(331322),
    Z = n(534514),
    J = n(696986),
    $ = n(939249),
    ee = n(106878);
function et() {
    let { trackUserProfileEditAction: e } = (0, D.NJ)(),
        t = a.useCallback(() => {
            e({ action: "PRESS_ADD_WIDGET" }),
                (0, F.openModalLazy)(
                    async () => {
                        let { default: t } = await n.e("87591").then(n.bind(n, 333114));
                        return (n) => (0, i.jsx)(t, { ...n, trackUserProfileEditAction: e });
                    },
                    { stackingBehavior: "stack" },
                );
        }, [e]);
    return (0, i.jsxs)($.D, {
        className: ee.E,
        onClick: t,
        children: [
            (0, i.jsx)(B.j, { size: "sm", color: "currentColor" }),
            (0, i.jsx)(c.E, {
                variant: "text-sm/medium",
                color: "text-default",
                children: M.intl.string(M.t["lBG2s/"]),
            }),
        ],
    });
}
var en = n(725386),
    ei = n(502944),
    ea = n(215538);
function el() {
    let { trackUserProfileAction: e, trackUserProfileEditAction: t } = (0, D.NJ)(),
        n = a.useRef(!1),
        l = (0, en.A)({ location: "UserProfileModalV2WidgetsEmptyState" });
    return (
        a.useEffect(() => {
            n.current || (e({ action: "VIEW_WIDGETS_EMPTY_STATE" }), (n.current = !0));
        }, [e]),
        (0, i.jsxs)("div", {
            className: ea.Ie,
            children: [
                (0, i.jsxs)("div", {
                    className: ea.FS,
                    children: [
                        (0, i.jsx)(Z.D, {
                            variant: "heading-md/medium",
                            color: "text-strong",
                            children: M.intl.string(M.t["oqalC+"]),
                        }),
                        (0, i.jsx)(c.E, {
                            variant: "text-sm/normal",
                            color: "text-default",
                            children: M.intl.string(M.t.O9SQ1c),
                        }),
                    ],
                }),
                (0, i.jsx)("ul", {
                    className: ea.ZW,
                    "aria-label": M.intl.string(M.t["+EIBSA"]),
                    children: l.map((e) =>
                        (0, i.jsx)(
                            "li",
                            { children: (0, i.jsx)(ei.A, { widget: e, size: "small", trackUserProfileEditAction: t }) },
                            e.getUniqueKey(),
                        ),
                    ),
                }),
            ],
        })
    );
}
var es = n(113636);
function er() {
    let { trackUserProfileAction: e, trackUserProfileEditAction: t } = (0, D.NJ)(),
        l = a.useRef(!1),
        {
            suggestions: s,
            currentUser: r,
            isLoading: o,
        } = I({ location: "UserProfileModalV2ApplicationWidgetsEmptyState" }),
        d = s?.[0],
        u = a.useCallback(() => {
            t({ action: "PRESS_ADD_WIDGET" }),
                (0, F.openModalLazy)(
                    async () => {
                        let { default: e } = await n.e("87591").then(n.bind(n, 333114));
                        return (n) => (0, i.jsx)(e, { ...n, trackUserProfileEditAction: t });
                    },
                    { stackingBehavior: "stack" },
                );
        }, [t]);
    if (
        (a.useEffect(() => {
            o ||
                null == d ||
                l.current ||
                (e({ action: "VIEW_APPLICATION_WIDGETS_EMPTY_STATE", applicationId: d.application.id }),
                (l.current = !0));
        }, [o, e, d]),
        o)
    )
        return (0, i.jsx)("div", { className: es.Lq, children: (0, i.jsx)(q.y, {}) });
    if (null == d) return (0, i.jsx)(el, {});
    let g = (0, i.jsxs)(Q.B, {
        gap: 4,
        className: es.wx,
        children: [
            (0, i.jsx)(Z.D, {
                variant: "heading-md/medium",
                color: "text-strong",
                children: M.intl.string(M.t["oqalC+"]),
            }),
            (0, i.jsx)(c.E, {
                variant: "text-sm/normal",
                color: "text-subtle",
                children: M.intl.format(M.t.YnNFWa, { applicationName: d.application.name }),
            }),
        ],
    });
    return (0, i.jsx)(A.Ay, {
        contentTypes: [d.dismissibleContent],
        bypassAutoDismiss: !0,
        children: (e) => {
            let { visibleContent: t, markAsDismissed: n } = e;
            return t === d.dismissibleContent
                ? (0, i.jsxs)(Q.B, {
                      gap: 16,
                      align: "center",
                      children: [
                          (0, i.jsx)(J.h, { size: 32 }),
                          g,
                          (0, i.jsx)("div", {
                              className: es.Zj,
                              children: (0, i.jsx)(U, { user: r, application: d.application, onDismiss: n }),
                          }),
                          (0, i.jsx)(et, {}),
                      ],
                  })
                : (0, i.jsxs)(Q.B, {
                      gap: 32,
                      align: "center",
                      children: [
                          (0, i.jsx)(J.h, { size: 128 }),
                          g,
                          (0, i.jsx)(W.$, {
                              icon: B.j,
                              text: M.intl.string(M.t["lBG2s/"]),
                              size: "md",
                              variant: "secondary",
                              onClick: u,
                          }),
                      ],
                  });
        },
    });
}
var eo = n(982599),
    ec = n(515054),
    ed = n(117444);
function eu(e) {
    let { widget: t, ...n } = e;
    return t instanceof m.R
        ? (0, i.jsx)(T.A, { widget: t, ...n })
        : t instanceof C.Yy
          ? (0, i.jsx)(K.A, { widget: t, ...n })
          : null;
}
function eg() {
    return (0, i.jsxs)("div", {
        className: ed.mJ,
        children: [
            (0, i.jsx)(o.m, { size: "xs" }),
            (0, i.jsx)(c.E, {
                "aria-label": M.intl.string(M.t["7blcz6"]),
                variant: "text-xs/normal",
                color: "text-muted",
                children: M.intl.string(M.t["7blcz6"]),
            }),
        ],
    });
}
function em() {
    let { isLoading: e, suggestions: t, currentUser: n } = I({ location: "ApplicationWidgetUpsell" });
    return e || null == n
        ? null
        : (0, i.jsx)(A.Ay, {
              contentTypes: t.map((e) => e.dismissibleContent),
              bypassAutoDismiss: !0,
              children: (e) => {
                  let { visibleContent: a, markAsDismissed: l } = e,
                      s = t.find((e) => e.dismissibleContent === a);
                  return null == s ? null : (0, i.jsx)(U, { user: n, application: s.application, onDismiss: l });
              },
          });
}
function e_(e) {
    let { user: t, guildId: n, channelId: l } = e,
        s = (0, _.A)(t.id),
        o = (0, r.bG)([j.default], () => j.default.getId() === t.id),
        c = (() => {
            let [e, t] = (0, r.yK)([N.A], () => [N.A.ipCountryCode, N.A.ipCountryCodeRequest]),
                n = (0, E.Z)();
            return (
                a.useEffect(() => {
                    null == e && null == t && n && (0, h.xe)();
                }, [e, t, n]),
                "GB" === e && n
            );
        })(),
        u = (0, d.QR)({ location: "UserProfileModalV2Widgets" }),
        f = 0 === s.length && o,
        x = a.useMemo(() => s.filter(C.fu), [s]),
        p = a.useMemo(() => s.filter((e) => e instanceof m.R), [s]);
    (0, S.Y)(o, x),
        ((e, t) => {
            let n = a.useMemo(() => t.map((e) => e.applicationId), [t]);
            (0, g.A)(n);
            let { data: i, refetch: l } = (0, v.P)(e),
                s = a.useRef(null !== i);
            a.useEffect(() => {
                s.current && ((s.current = !1), l());
            }, [l]);
        })(t.id, p);
    let I = () =>
        (0, i.jsxs)(i.Fragment, {
            children: [
                o &&
                    (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(X, { className: ed.cG }),
                            c && (0, i.jsx)(eg, {}),
                            u && (0, i.jsx)(em, {}),
                        ],
                    }),
                s.map((e, a) =>
                    (0, i.jsx)(eu, { widget: e, user: t, guildId: n, channelId: l, index: a }, e.getUniqueKey()),
                ),
            ],
        });
    if (f)
        if (u) return (0, i.jsx)(er, {});
        else return (0, i.jsx)(el, {});
    return o ? (0, i.jsx)(z.D, { children: I() }) : I();
}
function ef(e) {
    let { user: t, ...n } = e,
        l = a.useRef(null);
    (0, b.i)({ containerRef: l });
    let r = (0, eo.k)(t.id);
    return (0, i.jsxs)(ec.K, {
        "data-scroller": !0,
        scrollerRef: l,
        className: s()(ed.XG, { [ed.az]: r }),
        fade: !0,
        children: [(0, i.jsx)(Y.A, { scrollerRef: l }), (0, i.jsx)(e_, { user: t, ...n })],
    });
}
