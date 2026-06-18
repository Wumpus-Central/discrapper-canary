i.d(t, { A: () => eg, u: () => ec });
var n = i(627968),
    l = i(64700),
    s = i(503698),
    a = i.n(s),
    r = i(17928),
    c = i(885574),
    u = i(834730),
    o = i(783041),
    d = i(457965),
    g = i(704824),
    m = i(429913),
    f = i(633075),
    x = i(667049),
    p = i(287809),
    I = i(403362),
    A = i(369374),
    E = i(753390),
    h = i(379848),
    j = i(840387),
    N = i(201718),
    T = i(495544),
    v = i(615405),
    _ = i(289173),
    S = i(373842),
    O = i(600761),
    C = i(605694),
    R = i(990078),
    k = i(657718),
    b = i(789645),
    D = i(478016),
    G = i(183555),
    L = i(735321),
    P = i(606758),
    w = i(518477),
    y = i(49999),
    M = i(375708);
function F(e) {
    let { user: t, application: i, onDismiss: s } = e,
        { trackUserProfileEditAction: a } = (0, G.NJ)(),
        r = l.useMemo(() => new f.R({ applicationId: i.id }), [i.id]),
        c = l.useCallback(() => {
            null != r &&
                ((0, L.Y5)(r),
                a({ action: "WIDGET_ADDED", ...r.getProfileEditAnalyticsOptions() }),
                (0, P.XA)(w.jM.WIDGET_ADDED));
        }, [r, a]);
    return (0, n.jsx)(C.A, {
        user: t,
        widget: r,
        subtle: !0,
        cta: (0, n.jsx)(C.A.Cta, {
            showSuggestedForYou: !0,
            heading: M.intl.format(M.t.OIzLCy, { applicationName: i.name }),
            content: M.intl.format(M.t.BQySru, { applicationName: i.name }),
            buttons: (0, n.jsxs)(n.Fragment, {
                children: [
                    (0, n.jsx)(R.m, {
                        text: M.intl.string(M.t.WAI6xu),
                        ariaHidden: !0,
                        children: (0, n.jsx)(k.S, {
                            variant: "secondary",
                            size: "sm",
                            icon: b.P,
                            "aria-label": M.intl.string(M.t.WAI6xu),
                            onClick: () => {
                                s(y.i.USER_DISMISS);
                            },
                        }),
                    }),
                    (0, n.jsx)(R.m, {
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
var U = i(192308),
    W = i(821609),
    H = i(307301),
    B = i(79284);
function V(e) {
    let { className: t } = e,
        { trackUserProfileEditAction: s } = (0, G.NJ)(),
        r = l.useCallback(() => {
            s({ action: "PRESS_ADD_WIDGET" }),
                (0, U.openModalLazy)(
                    async () => {
                        let { default: e } = await Promise.all([i.e("8978"), i.e("87591")]).then(i.bind(i, 333114));
                        return (t) => (0, n.jsx)(e, { ...t, trackUserProfileEditAction: s });
                    },
                    { stackingBehavior: "stack" },
                );
        }, [s]);
    return (0, n.jsxs)("div", {
        className: a()(B.w, t),
        children: [
            (0, n.jsx)(u.E, { variant: "text-xs/semibold", color: "text-subtle", children: M.intl.string(M.t.OYlggR) }),
            (0, n.jsx)(W.$, {
                icon: H.j,
                text: M.intl.string(M.t["lBG2s/"]),
                size: "sm",
                variant: "secondary",
                onClick: r,
            }),
        ],
    });
}
var X = i(192),
    K = i(554146),
    z = i(382483),
    Y = i(385113),
    q = i(334074);
function Q() {
    let {
        isLoading: e,
        currentUser: t,
        eligibleApplications: i,
        markAsDismissed: s,
    } = (function () {
        let e = (0, r.yK)([Y.A], () => Y.A.getFeaturedApplicationIds());
        l.useEffect(() => {
            (0, z.Wq)();
        }, []);
        let t = (0, r.bG)([p.default], () => p.default.getCurrentUser()),
            i = (0, m.A)(e),
            { tokens: n, fetched: s } = (0, g.j)(e),
            a = (0, x.A)(t?.id),
            c = null == t || null == e || null == n || !s,
            u = l.useMemo(
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
            { eligibleToShow: o, markAsDismissed: d } = (0, q.hj)({
                applications: u,
                dismissibleContent: K.M.APP_WIDGET_V2_PROFILE_UPSELL_SUGGESTED,
                cooldownConfig: q.SH,
            }),
            I = l.useMemo(() => u.filter((e) => o.includes(e.id)), [u, o]);
        return c
            ? { isLoading: c, currentUser: t }
            : { isLoading: c, currentUser: t, eligibleApplications: I, markAsDismissed: d };
    })();
    if (e || null == t) return null;
    let a = i[0];
    return null == a ? null : (0, n.jsx)(F, { user: t, application: a, onDismiss: (e) => s([a.id], e) }, a.id);
}
var J = i(128988),
    Z = i(939318),
    $ = i(982599),
    ee = i(515054),
    et = i(534514),
    ei = i(841595),
    en = i(725386),
    el = i(527139),
    es = i(215538);
function ea(e) {
    let { userId: t } = e,
        { trackUserProfileAction: i, trackUserProfileEditAction: s } = (0, G.NJ)(),
        a = l.useRef(!1),
        c = (0, r.bG)([ei.A], () => ei.A.getUserProfile(t)?.fetchError != null, [t]),
        o = (0, en.A)({ location: "UserProfileModalV2WidgetsEmptyState" });
    return (
        l.useEffect(() => {
            a.current || c || (i({ action: "VIEW_WIDGETS_EMPTY_STATE" }), (a.current = !0));
        }, [c, i]),
        (0, n.jsxs)("div", {
            className: es.Ie,
            children: [
                (0, n.jsxs)("div", {
                    className: es.FS,
                    children: [
                        (0, n.jsx)(et.D, {
                            variant: "heading-md/medium",
                            color: "text-strong",
                            children: M.intl.string(M.t["oqalC+"]),
                        }),
                        (0, n.jsx)(u.E, {
                            variant: "text-sm/normal",
                            color: "text-default",
                            children: c ? M.intl.string(M.t["+W59o5"]) : M.intl.string(M.t.O9SQ1c),
                        }),
                    ],
                }),
                !c &&
                    (0, n.jsx)("ul", {
                        className: es.ZW,
                        "aria-label": M.intl.string(M.t["+EIBSA"]),
                        children: o.map((e) =>
                            (0, n.jsx)(
                                "li",
                                {
                                    children: (0, n.jsx)(el.A, {
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
var er = i(117444);
function ec(e) {
    let { widget: t, ...i } = e;
    return t instanceof f.R
        ? (0, n.jsx)(C.A, { widget: t, ...i })
        : (0, _.fu)(t)
          ? (0, n.jsx)(Z.A, { widget: t, ...i })
          : null;
}
function eu() {
    return (0, n.jsxs)("div", {
        className: er.mJ,
        children: [
            (0, n.jsx)(c.m, { size: "xs" }),
            (0, n.jsx)(u.E, {
                "aria-label": M.intl.string(M.t["7blcz6"]),
                variant: "text-xs/normal",
                color: "text-muted",
                children: M.intl.string(M.t["7blcz6"]),
            }),
        ],
    });
}
function eo() {
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
            c = (0, m.A)(a),
            { tokens: u, fetched: o } = (0, g.j)(a),
            E = (0, x.A)(i?.id),
            h = null == i || null == s || null == u || !o;
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
                                        null == u.find((t) => t.application.id === e.applicationId) ||
                                        null != E.find((t) => t instanceof f.R && t.applicationId === e.applicationId)
                                        ? null
                                        : { config: e, application: t, dismissibleContent: e.suggestedWidgetLinkedDc };
                                })
                                .filter(I.Vq),
                            currentUser: i,
                        },
            [t, h, s, i, c, u, E],
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
                  return null == a ? null : (0, n.jsx)(F, { user: i, application: a.application, onDismiss: s });
              },
          });
}
function ed(e) {
    let { user: t, guildId: i, channelId: s } = e,
        a = (0, x.A)(t.id),
        c = (0, r.bG)([T.default], () => T.default.getId() === t.id),
        u = (() => {
            let [e, t] = (0, r.yK)([v.A], () => [v.A.ipCountryCode, v.A.ipCountryCodeRequest]),
                i = (0, j.Z)();
            return (
                l.useEffect(() => {
                    null == e && null == t && i && (0, E.xe)();
                }, [e, t, i]),
                "GB" === e && i
            );
        })(),
        g = (0, d.QR)({ location: "UserProfileModalV2Widgets" }),
        p = o.A.useConfig({ location: "UserProfileModalV2Widgets" }).enabled,
        I = 0 === a.length && c,
        A = l.useMemo(() => a.filter(_.fu), [a]),
        h = l.useMemo(() => a.filter((e) => e instanceof f.R), [a]);
    (0, S.Y)(c, A),
        ((e, t) => {
            let i = l.useMemo(() => t.map((e) => e.applicationId), [t]);
            (0, m.A)(i);
            let { data: n, refetch: s } = (0, N.P)(e),
                a = l.useRef(null !== n);
            l.useEffect(() => {
                a.current && ((a.current = !1), s());
            }, [s]);
        })(t.id, h);
    let O = () =>
        (0, n.jsxs)(n.Fragment, {
            children: [
                c &&
                    (0, n.jsxs)(n.Fragment, {
                        children: [
                            (0, n.jsx)(V, { className: er.cG }),
                            u && (0, n.jsx)(eu, {}),
                            p ? (0, n.jsx)(Q, {}) : g && (0, n.jsx)(eo, {}),
                        ],
                    }),
                a.map((e, l) =>
                    (0, n.jsx)(ec, { widget: e, user: t, guildId: i, channelId: s, index: l }, e.getUniqueKey()),
                ),
            ],
        });
    return I ? (0, n.jsx)(ea, { userId: t.id }) : c ? (0, n.jsx)(X.D, { children: O() }) : O();
}
function eg(e) {
    let { user: t, ...i } = e,
        s = l.useRef(null);
    (0, O.i)({ containerRef: s });
    let r = (0, $.k)(t.id);
    return (0, n.jsxs)(ee.K, {
        "data-scroller": !0,
        scrollerRef: s,
        className: a()(er.XG, { [er.az]: r }),
        fade: !0,
        children: [(0, n.jsx)(J.A, { scrollerRef: s }), (0, n.jsx)(ed, { user: t, ...i })],
    });
}
