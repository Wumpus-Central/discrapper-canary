i.d(t, { A: () => eg, u: () => eo });
var n = i(627968),
    l = i(64700),
    s = i(503698),
    a = i.n(s),
    r = i(17928),
    c = i(885574),
    o = i(834730),
    u = i(783041),
    d = i(457965),
    m = i(704824),
    g = i(429913),
    f = i(633075),
    x = i(667049),
    p = i(287809),
    I = i(403362),
    A = i(369374),
    E = i(753390),
    h = i(379848),
    j = i(840387),
    N = i(201718),
    v = i(495544),
    T = i(615405),
    S = i(289173),
    _ = i(373842),
    C = i(600761),
    O = i(605694),
    b = i(990078),
    k = i(657718),
    R = i(789645),
    D = i(478016),
    L = i(183555),
    G = i(735321),
    P = i(606758),
    w = i(518477),
    y = i(49999),
    M = i(375708);
function U(e) {
    let { user: t, application: i, onDismiss: s } = e,
        { trackUserProfileEditAction: a } = (0, L.NJ)(),
        r = l.useMemo(() => new f.R({ applicationId: i.id }), [i.id]),
        c = l.useCallback(() => {
            null != r &&
                ((0, G.Y5)(r),
                a({ action: "WIDGET_ADDED", ...r.getProfileEditAnalyticsOptions() }),
                (0, P.XA)(w.jM.WIDGET_ADDED));
        }, [r, a]);
    return (0, n.jsx)(O.A, {
        user: t,
        widget: r,
        subtle: !0,
        cta: (0, n.jsx)(O.A.Cta, {
            showSuggestedForYou: !0,
            heading: M.intl.format(M.t.OIzLCy, { applicationName: i.name }),
            content: M.intl.format(M.t.BQySru, { applicationName: i.name }),
            buttons: (0, n.jsxs)(n.Fragment, {
                children: [
                    (0, n.jsx)(b.m, {
                        text: M.intl.string(M.t.WAI6xu),
                        ariaHidden: !0,
                        children: (0, n.jsx)(k.S, {
                            variant: "secondary",
                            size: "sm",
                            icon: R.P,
                            "aria-label": M.intl.string(M.t.WAI6xu),
                            onClick: () => {
                                s(y.i.USER_DISMISS);
                            },
                        }),
                    }),
                    (0, n.jsx)(b.m, {
                        text: M.intl.string(M.t["lBG2s/"]),
                        ariaHidden: !0,
                        children: (0, n.jsx)(k.S, {
                            variant: "primary",
                            size: "sm",
                            icon: D.U,
                            "aria-label": M.intl.formatToPlainString(M.t.KfGahB, { applicationName: i.name }),
                            onClick: () => {
                                s(y.i.TAKE_ACTION), c();
                            },
                        }),
                    }),
                ],
            }),
        }),
    });
}
var F = i(192308),
    W = i(821609),
    H = i(307301),
    B = i(773669),
    V = i(79284);
function X(e) {
    let { className: t } = e,
        s = ["en-US", "en-GB"].includes((0, r.bG)([B.default], () => B.default.locale))
            ? M.intl.string(M.t.OYlggR)
            : M.intl.string(M.t.Y55Tua),
        { trackUserProfileEditAction: c } = (0, L.NJ)(),
        u = l.useCallback(() => {
            c({ action: "PRESS_ADD_WIDGET" }),
                (0, F.openModalLazy)(
                    async () => {
                        let { default: e } = await Promise.all([i.e("59811"), i.e("87591")]).then(i.bind(i, 333114));
                        return (t) => (0, n.jsx)(e, { ...t, trackUserProfileEditAction: c });
                    },
                    { stackingBehavior: "stack" },
                );
        }, [c]);
    return (0, n.jsxs)("div", {
        className: a()(V.w, t),
        children: [
            (0, n.jsx)(o.E, { variant: "text-xs/semibold", color: "text-subtle", children: s }),
            (0, n.jsx)(W.$, {
                icon: H.j,
                text: M.intl.string(M.t["lBG2s/"]),
                size: "sm",
                variant: "secondary",
                onClick: u,
            }),
        ],
    });
}
var z = i(192),
    K = i(554146),
    Y = i(382483),
    q = i(385113),
    J = i(334074);
function Q() {
    let {
        isLoading: e,
        currentUser: t,
        eligibleApplications: i,
        markAsDismissed: s,
    } = (function () {
        let e = (0, r.yK)([q.A], () => q.A.getFeaturedApplicationIds());
        l.useEffect(() => {
            (0, Y.Wq)();
        }, []);
        let t = (0, r.bG)([p.default], () => p.default.getCurrentUser()),
            i = (0, g.A)(e),
            { tokens: n, fetched: s } = (0, m.j)(e),
            a = (0, x.A)(t?.id),
            c = null == t || null == e || null == n || !s,
            o = l.useMemo(
                () =>
                    c
                        ? []
                        : i.filter(
                              (e) =>
                                  !(null == e || a.some((t) => t instanceof f.R && t.applicationId === e.id)) &&
                                  null != n.find((t) => t.application.id === e.id),
                          ),
                [c, i, n, a],
            ),
            { eligibleToShow: u, markAsDismissed: d } = (0, J.hj)({
                applications: o,
                dismissibleContent: K.M.APP_WIDGET_V2_PROFILE_UPSELL_SUGGESTED,
                cooldownConfig: J.SH,
            }),
            I = l.useMemo(() => o.filter((e) => u.includes(e.id)), [o, u]);
        return c
            ? { isLoading: c, currentUser: t }
            : { isLoading: c, currentUser: t, eligibleApplications: I, markAsDismissed: d };
    })();
    if (e || null == t) return null;
    let a = i[0];
    return null == a ? null : (0, n.jsx)(U, { user: t, application: a, onDismiss: (e) => s([a.id], e) }, a.id);
}
var Z = i(128988),
    $ = i(939318),
    ee = i(982599),
    et = i(515054),
    ei = i(534514),
    en = i(841595),
    el = i(725386),
    es = i(527139),
    ea = i(215538);
function er(e) {
    let { userId: t } = e,
        { trackUserProfileAction: i, trackUserProfileEditAction: s } = (0, L.NJ)(),
        a = l.useRef(!1),
        c = (0, r.bG)([en.A], () => en.A.getUserProfile(t)?.fetchError != null, [t]),
        u = (0, el.A)({ location: "UserProfileModalV2WidgetsEmptyState" });
    return (
        l.useEffect(() => {
            a.current || c || (i({ action: "VIEW_WIDGETS_EMPTY_STATE" }), (a.current = !0));
        }, [c, i]),
        (0, n.jsxs)("div", {
            className: ea.Ie,
            children: [
                (0, n.jsxs)("div", {
                    className: ea.FS,
                    children: [
                        (0, n.jsx)(ei.D, {
                            variant: "heading-md/medium",
                            color: "text-strong",
                            children: M.intl.string(M.t["oqalC+"]),
                        }),
                        (0, n.jsx)(o.E, {
                            variant: "text-sm/normal",
                            color: "text-default",
                            children: c ? M.intl.string(M.t["rTU7/z"]) : M.intl.string(M.t.O9SQ1c),
                        }),
                    ],
                }),
                !c &&
                    (0, n.jsx)("ul", {
                        className: ea.ZW,
                        "aria-label": M.intl.string(M.t["+EIBSA"]),
                        children: u.map((e) =>
                            (0, n.jsx)(
                                "li",
                                {
                                    children: (0, n.jsx)(es.A, {
                                        widget: e,
                                        size: "small",
                                        trackUserProfileEditAction: s,
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
var ec = i(117444);
function eo(e) {
    let { widget: t, ...i } = e;
    return t instanceof f.R
        ? (0, n.jsx)(O.A, { widget: t, ...i })
        : (0, S.fu)(t)
          ? (0, n.jsx)($.A, { widget: t, ...i })
          : null;
}
function eu() {
    return (0, n.jsxs)("div", {
        className: ec.mJ,
        children: [
            (0, n.jsx)(c.m, { size: "xs" }),
            (0, n.jsx)(o.E, {
                "aria-label": M.intl.string(M.t["7blcz6"]),
                variant: "text-xs/normal",
                color: "text-muted",
                children: M.intl.string(M.t["7blcz6"]),
            }),
        ],
    });
}
function ed() {
    let {
        isLoading: e,
        suggestions: t,
        currentUser: i,
    } = (function (e) {
        let { enabled: t } = A.A.useConfig({ location: e.location }),
            i = (0, r.bG)([p.default], () => p.default.getCurrentUser()),
            n = (0, d.w$)({ location: e.location }),
            s = l.useMemo(() => n?.filter((e) => e.isEligibleForSuggestions()), [n]),
            a = l.useMemo(() => s?.map((e) => e.applicationId) ?? [], [s]),
            c = (0, g.A)(a),
            { tokens: o, fetched: u } = (0, m.j)(a),
            E = (0, x.A)(i?.id),
            h = null == i || null == s || null == o || !u;
        return l.useMemo(
            () =>
                h
                    ? { isLoading: h }
                    : t
                      ? { isLoading: h, suggestions: [], currentUser: i }
                      : {
                            isLoading: h,
                            suggestions: s
                                .map((e) => {
                                    let t = c.find((t) => t?.id === e.applicationId);
                                    return null == t ||
                                        null == o.find((t) => t.application.id === e.applicationId) ||
                                        null != E.find((t) => t instanceof f.R && t.applicationId === e.applicationId)
                                        ? null
                                        : { config: e, application: t, dismissibleContent: e.suggestedWidgetLinkedDc };
                                })
                                .filter(I.Vq),
                            currentUser: i,
                        },
            [t, h, s, i, c, o, E],
        );
    })({ location: "ApplicationWidgetUpsell" });
    return e || null == i
        ? null
        : (0, n.jsx)(h.Ay, {
              contentTypes: t.map((e) => e.dismissibleContent),
              bypassAutoDismiss: !0,
              children: (e) => {
                  let { visibleContent: l, markAsDismissed: s } = e,
                      a = t.find((e) => e.dismissibleContent === l);
                  return null == a ? null : (0, n.jsx)(U, { user: i, application: a.application, onDismiss: s });
              },
          });
}
function em(e) {
    let { user: t, guildId: i, channelId: s } = e,
        a = (0, x.A)(t.id),
        c = (0, r.bG)([v.default], () => v.default.getId() === t.id),
        o = (() => {
            let [e, t] = (0, r.yK)([T.A], () => [T.A.ipCountryCode, T.A.ipCountryCodeRequest]),
                i = (0, j.Z)();
            return (
                l.useEffect(() => {
                    null == e && null == t && i && (0, E.xe)();
                }, [e, t, i]),
                "GB" === e && i
            );
        })(),
        m = (0, d.QR)({ location: "UserProfileModalV2Widgets" }),
        p = u.A.useConfig({ location: "UserProfileModalV2Widgets" }).enabled,
        I = 0 === a.length && c,
        A = l.useMemo(() => a.filter(S.fu), [a]),
        h = l.useMemo(() => a.filter((e) => e instanceof f.R), [a]);
    (0, _.Y)(c, A),
        ((e, t) => {
            let i = l.useMemo(() => t.map((e) => e.applicationId), [t]);
            (0, g.A)(i);
            let { data: n, refetch: s } = (0, N.P)(e),
                a = l.useRef(null !== n);
            l.useEffect(() => {
                a.current && ((a.current = !1), s());
            }, [s]);
        })(t.id, h);
    let C = () =>
        (0, n.jsxs)(n.Fragment, {
            children: [
                c &&
                    (0, n.jsxs)(n.Fragment, {
                        children: [
                            (0, n.jsx)(X, { className: ec.cG }),
                            o && (0, n.jsx)(eu, {}),
                            p ? (0, n.jsx)(Q, {}) : m && (0, n.jsx)(ed, {}),
                        ],
                    }),
                a.map((e, l) =>
                    (0, n.jsx)(eo, { widget: e, user: t, guildId: i, channelId: s, index: l }, e.getUniqueKey()),
                ),
            ],
        });
    return I ? (0, n.jsx)(er, { userId: t.id }) : c ? (0, n.jsx)(z.D, { children: C() }) : C();
}
function eg(e) {
    let { user: t, ...i } = e,
        s = l.useRef(null);
    (0, C.i)({ containerRef: s });
    let r = (0, ee.k)(t.id);
    return (0, n.jsxs)(et.K, {
        "data-scroller": !0,
        scrollerRef: s,
        className: a()(ec.XG, { [ec.az]: r }),
        fade: !0,
        children: [(0, n.jsx)(Z.A, { scrollerRef: s }), (0, n.jsx)(em, { user: t, ...i })],
    });
}
