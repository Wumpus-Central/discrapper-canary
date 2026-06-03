n.d(t, { A: () => em, u: () => eu });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(17928),
    o = n(885574),
    u = n(834730),
    c = n(783041),
    d = n(457965),
    g = n(704824),
    m = n(429913),
    f = n(633075),
    I = n(667049),
    x = n(287809),
    p = n(403362),
    h = n(369374),
    E = n(753390),
    A = n(379848),
    S = n(840387),
    T = n(201718),
    j = n(495544),
    C = n(615405),
    k = n(289173),
    _ = n(373842),
    v = n(600761),
    O = n(605694),
    N = n(990078),
    w = n(657718),
    b = n(789645),
    R = n(478016),
    L = n(183555),
    M = n(735321),
    y = n(606758),
    D = n(518477),
    G = n(49999),
    P = n(375708);
function U(e) {
    let { user: t, application: n, onDismiss: l } = e,
        { trackUserProfileEditAction: r } = (0, L.NJ)(),
        a = s.useMemo(() => new f.R({ applicationId: n.id }), [n.id]),
        o = s.useCallback(() => {
            null != a &&
                ((0, M.Y5)(a),
                r({ action: "WIDGET_ADDED", ...a.getProfileEditAnalyticsOptions() }),
                (0, y.XA)(D.jM.WIDGET_ADDED));
        }, [a, r]);
    return (0, i.jsx)(O.A, {
        user: t,
        widget: a,
        subtle: !0,
        cta: (0, i.jsx)(O.A.Cta, {
            showSuggestedForYou: !0,
            heading: P.intl.format(P.t.OIzLCy, { applicationName: n.name }),
            content: P.intl.format(P.t.BQySru, { applicationName: n.name }),
            buttons: (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(N.m, {
                        text: P.intl.string(P.t.WAI6xu),
                        ariaHidden: !0,
                        children: (0, i.jsx)(w.S, {
                            variant: "secondary",
                            size: "sm",
                            icon: b.P,
                            "aria-label": P.intl.string(P.t.WAI6xu),
                            onClick: () => {
                                l(G.i.USER_DISMISS);
                            },
                        }),
                    }),
                    (0, i.jsx)(N.m, {
                        text: P.intl.string(P.t["lBG2s/"]),
                        ariaHidden: !0,
                        children: (0, i.jsx)(w.S, {
                            variant: "primary",
                            size: "sm",
                            icon: R.U,
                            "aria-label": P.intl.formatToPlainString(P.t.KfGahB, { applicationName: n.name }),
                            onClick: () => {
                                l(G.i.TAKE_ACTION), o();
                            },
                        }),
                    }),
                ],
            }),
        }),
    });
}
var F = n(192308),
    H = n(821609),
    W = n(307301),
    B = n(773669),
    V = n(79284);
function X(e) {
    let { className: t } = e,
        l = ["en-US", "en-GB"].includes((0, a.bG)([B.default], () => B.default.locale))
            ? P.intl.string(P.t.OYlggR)
            : P.intl.string(P.t.Y55Tua),
        { trackUserProfileEditAction: o } = (0, L.NJ)(),
        c = s.useCallback(() => {
            o({ action: "PRESS_ADD_WIDGET" }),
                (0, F.openModalLazy)(
                    async () => {
                        let { default: e } = await Promise.all([n.e("8978"), n.e("87591")]).then(n.bind(n, 333114));
                        return (t) => (0, i.jsx)(e, { ...t, trackUserProfileEditAction: o });
                    },
                    { stackingBehavior: "stack" },
                );
        }, [o]);
    return (0, i.jsxs)("div", {
        className: r()(V.w, t),
        children: [
            (0, i.jsx)(u.E, { variant: "text-xs/semibold", color: "text-subtle", children: l }),
            (0, i.jsx)(H.$, {
                icon: W.j,
                text: P.intl.string(P.t["lBG2s/"]),
                size: "sm",
                variant: "secondary",
                onClick: c,
            }),
        ],
    });
}
var z = n(192),
    K = n(554146),
    Y = n(382483),
    Z = n(385113),
    q = n(334074);
function J() {
    let {
        isLoading: e,
        currentUser: t,
        eligibleApplications: n,
        markAsDismissed: l,
    } = (function () {
        let e = (0, a.yK)([Z.A], () => Z.A.getFeaturedApplicationIds());
        s.useEffect(() => {
            (0, Y.Wq)();
        }, []);
        let t = (0, a.bG)([x.default], () => x.default.getCurrentUser()),
            n = (0, m.A)(e),
            { tokens: i, fetched: l } = (0, g.j)(e),
            r = (0, I.A)(t?.id),
            o = null == t || null == e || null == i || !l,
            u = s.useMemo(
                () =>
                    o
                        ? []
                        : n.filter(
                              (e) =>
                                  !(null == e || r.some((t) => t instanceof f.R && t.applicationId === e.id)) &&
                                  null != i.find((t) => t.application.id === e.id),
                          ),
                [o, n, i, r],
            ),
            { eligibleToShow: c, markAsDismissed: d } = (0, q.hj)({
                applications: u,
                dismissibleContent: K.M.APP_WIDGET_V2_PROFILE_UPSELL_SUGGESTED,
                cooldownConfig: q.SH,
            }),
            p = s.useMemo(() => u.filter((e) => c.includes(e.id)), [u, c]);
        return o
            ? { isLoading: o, currentUser: t }
            : { isLoading: o, currentUser: t, eligibleApplications: p, markAsDismissed: d };
    })();
    if (e || null == t) return null;
    let r = n[0];
    return null == r ? null : (0, i.jsx)(U, { user: t, application: r, onDismiss: (e) => l([r.id], e) }, r.id);
}
var Q = n(128988),
    $ = n(939318),
    ee = n(982599),
    et = n(515054),
    en = n(534514),
    ei = n(841595),
    es = n(725386),
    el = n(502944),
    er = n(215538);
function ea(e) {
    let { userId: t } = e,
        { trackUserProfileAction: n, trackUserProfileEditAction: l } = (0, L.NJ)(),
        r = s.useRef(!1),
        o = (0, a.bG)([ei.A], () => ei.A.getUserProfile(t)?.fetchError != null, [t]),
        c = (0, es.A)({ location: "UserProfileModalV2WidgetsEmptyState" });
    return (
        s.useEffect(() => {
            r.current || o || (n({ action: "VIEW_WIDGETS_EMPTY_STATE" }), (r.current = !0));
        }, [o, n]),
        (0, i.jsxs)("div", {
            className: er.Ie,
            children: [
                (0, i.jsxs)("div", {
                    className: er.FS,
                    children: [
                        (0, i.jsx)(en.D, {
                            variant: "heading-md/medium",
                            color: "text-strong",
                            children: P.intl.string(P.t["oqalC+"]),
                        }),
                        (0, i.jsx)(u.E, {
                            variant: "text-sm/normal",
                            color: "text-default",
                            children: o ? P.intl.string(P.t["rTU7/z"]) : P.intl.string(P.t.O9SQ1c),
                        }),
                    ],
                }),
                !o &&
                    (0, i.jsx)("ul", {
                        className: er.ZW,
                        "aria-label": P.intl.string(P.t["+EIBSA"]),
                        children: c.map((e) =>
                            (0, i.jsx)(
                                "li",
                                {
                                    children: (0, i.jsx)(el.A, {
                                        widget: e,
                                        size: "small",
                                        trackUserProfileEditAction: l,
                                    }),
                                },
                                e.getUniqueKey(),
                            ),
                        ),
                    }),
            ],
        })
    );
}
var eo = n(117444);
function eu(e) {
    let { widget: t, ...n } = e;
    return t instanceof f.R
        ? (0, i.jsx)(O.A, { widget: t, ...n })
        : (0, k.fu)(t)
          ? (0, i.jsx)($.A, { widget: t, ...n })
          : null;
}
function ec() {
    return (0, i.jsxs)("div", {
        className: eo.mJ,
        children: [
            (0, i.jsx)(o.m, { size: "xs" }),
            (0, i.jsx)(u.E, {
                "aria-label": P.intl.string(P.t["7blcz6"]),
                variant: "text-xs/normal",
                color: "text-muted",
                children: P.intl.string(P.t["7blcz6"]),
            }),
        ],
    });
}
function ed() {
    let {
        isLoading: e,
        suggestions: t,
        currentUser: n,
    } = (function (e) {
        let { enabled: t } = h.A.useConfig({ location: e.location }),
            n = (0, a.bG)([x.default], () => x.default.getCurrentUser()),
            i = (0, d.w$)({ location: e.location }),
            l = s.useMemo(() => i?.filter((e) => e.isEligibleForSuggestions()), [i]),
            r = s.useMemo(() => l?.map((e) => e.applicationId) ?? [], [l]),
            o = (0, m.A)(r),
            { tokens: u, fetched: c } = (0, g.j)(r),
            E = (0, I.A)(n?.id),
            A = null == n || null == l || null == u || !c;
        return s.useMemo(
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
                                        null == u.find((t) => t.application.id === e.applicationId) ||
                                        null != E.find((t) => t instanceof f.R && t.applicationId === e.applicationId)
                                        ? null
                                        : { config: e, application: t, dismissibleContent: e.suggestedWidgetLinkedDc };
                                })
                                .filter(p.Vq),
                            currentUser: n,
                        },
            [t, A, l, n, o, u, E],
        );
    })({ location: "ApplicationWidgetUpsell" });
    return e || null == n
        ? null
        : (0, i.jsx)(A.Ay, {
              contentTypes: t.map((e) => e.dismissibleContent),
              bypassAutoDismiss: !0,
              children: (e) => {
                  let { visibleContent: s, markAsDismissed: l } = e,
                      r = t.find((e) => e.dismissibleContent === s);
                  return null == r ? null : (0, i.jsx)(U, { user: n, application: r.application, onDismiss: l });
              },
          });
}
function eg(e) {
    let { user: t, guildId: n, channelId: l } = e,
        r = (0, I.A)(t.id),
        o = (0, a.bG)([j.default], () => j.default.getId() === t.id),
        u = (() => {
            let [e, t] = (0, a.yK)([C.A], () => [C.A.ipCountryCode, C.A.ipCountryCodeRequest]),
                n = (0, S.Z)();
            return (
                s.useEffect(() => {
                    null == e && null == t && n && (0, E.xe)();
                }, [e, t, n]),
                "GB" === e && n
            );
        })(),
        g = (0, d.QR)({ location: "UserProfileModalV2Widgets" }),
        x = c.A.useConfig({ location: "UserProfileModalV2Widgets" }).enabled,
        p = 0 === r.length && o,
        h = s.useMemo(() => r.filter(k.fu), [r]),
        A = s.useMemo(() => r.filter((e) => e instanceof f.R), [r]);
    (0, _.Y)(o, h),
        ((e, t) => {
            let n = s.useMemo(() => t.map((e) => e.applicationId), [t]);
            (0, m.A)(n);
            let { data: i, refetch: l } = (0, T.P)(e),
                r = s.useRef(null !== i);
            s.useEffect(() => {
                r.current && ((r.current = !1), l());
            }, [l]);
        })(t.id, A);
    let v = () =>
        (0, i.jsxs)(i.Fragment, {
            children: [
                o &&
                    (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(X, { className: eo.cG }),
                            u && (0, i.jsx)(ec, {}),
                            x ? (0, i.jsx)(J, {}) : g && (0, i.jsx)(ed, {}),
                        ],
                    }),
                r.map((e, s) =>
                    (0, i.jsx)(eu, { widget: e, user: t, guildId: n, channelId: l, index: s }, e.getUniqueKey()),
                ),
            ],
        });
    return p ? (0, i.jsx)(ea, { userId: t.id }) : o ? (0, i.jsx)(z.D, { children: v() }) : v();
}
function em(e) {
    let { user: t, ...n } = e,
        l = s.useRef(null);
    (0, v.i)({ containerRef: l });
    let a = (0, ee.k)(t.id);
    return (0, i.jsxs)(et.K, {
        "data-scroller": !0,
        scrollerRef: l,
        className: r()(eo.XG, { [eo.az]: a }),
        fade: !0,
        children: [(0, i.jsx)(Q.A, { scrollerRef: l }), (0, i.jsx)(eg, { user: t, ...n })],
    });
}
