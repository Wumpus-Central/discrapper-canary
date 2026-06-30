i.d(t, { A: () => ea, u: () => el });
var n = i(627968),
    l = i(64700),
    s = i(503698),
    r = i.n(s),
    a = i(17928),
    c = i(885574),
    u = i(834730),
    o = i(783041),
    d = i(429913),
    g = i(277984),
    m = i(840387),
    f = i(201718),
    x = i(615405),
    I = i(633075),
    p = i(289173),
    E = i(373842),
    A = i(600761),
    h = i(667049),
    j = i(579950),
    T = i(605694),
    N = i(192308),
    v = i(821609),
    _ = i(307301),
    S = i(183555),
    O = i(375708),
    k = i(79284);
function C(e) {
    let { className: t } = e,
        { trackUserProfileEditAction: s } = (0, S.NJ)(),
        a = l.useCallback(() => {
            s({ action: "PRESS_ADD_WIDGET" }),
                (0, N.openModalLazy)(
                    async () => {
                        let { default: e } = await Promise.all([i.e("8978"), i.e("87591")]).then(i.bind(i, 333114));
                        return (t) => (0, n.jsx)(e, { ...t, trackUserProfileEditAction: s });
                    },
                    { stackingBehavior: "stack" },
                );
        }, [s]);
    return (0, n.jsxs)("div", {
        className: r()(k.w, t),
        children: [
            (0, n.jsx)(u.E, { variant: "text-xs/semibold", color: "text-subtle", children: O.intl.string(O.t.OYlggR) }),
            (0, n.jsx)(v.$, {
                icon: _.j,
                text: O.intl.string(O.t["lBG2s/"]),
                size: "sm",
                variant: "secondary",
                onClick: a,
            }),
        ],
    });
}
var R = i(192),
    b = i(554146),
    D = i(704824),
    L = i(382483),
    G = i(385113),
    w = i(334074),
    P = i(287809),
    y = i(990078),
    M = i(657718),
    F = i(789645),
    U = i(478016),
    W = i(735321),
    H = i(606758),
    B = i(518477),
    X = i(49999);
function V(e) {
    let { user: t, application: i, onDismiss: s } = e,
        { trackUserProfileEditAction: r } = (0, S.NJ)(),
        a = l.useMemo(() => new I.R({ applicationId: i.id }), [i.id]),
        c = l.useCallback(() => {
            null != a &&
                ((0, W.Y5)(a),
                r({ action: "WIDGET_ADDED", ...a.getProfileEditAnalyticsOptions() }),
                (0, H.XA)(B.jM.WIDGET_ADDED));
        }, [a, r]);
    return (0, n.jsx)(T.A, {
        user: t,
        widget: a,
        allowEditing: !1,
        subtle: !0,
        cta: (0, n.jsx)(T.A.Cta, {
            showSuggestedForYou: !0,
            heading: O.intl.format(O.t.OIzLCy, { applicationName: i.name }),
            content: O.intl.format(O.t.BQySru, { applicationName: i.name }),
            buttons: (0, n.jsxs)(n.Fragment, {
                children: [
                    (0, n.jsx)(y.m, {
                        text: O.intl.string(O.t.WAI6xu),
                        ariaHidden: !0,
                        children: (0, n.jsx)(M.S, {
                            variant: "secondary",
                            size: "sm",
                            icon: F.P,
                            "aria-label": O.intl.string(O.t.WAI6xu),
                            onClick: () => {
                                s(X.i.USER_DISMISS);
                            },
                        }),
                    }),
                    (0, n.jsx)(y.m, {
                        text: O.intl.string(O.t["lBG2s/"]),
                        ariaHidden: !0,
                        children: (0, n.jsx)(M.S, {
                            variant: "primary",
                            size: "sm",
                            icon: U.U,
                            "aria-label": O.intl.formatToPlainString(O.t.KfGahB, { applicationName: i.name }),
                            onClick: () => {
                                s(X.i.TAKE_ACTION), c();
                            },
                        }),
                    }),
                ],
            }),
        }),
    });
}
function z() {
    let {
        isLoading: e,
        currentUser: t,
        eligibleApplications: i,
        markAsDismissed: s,
    } = (function () {
        let e = (0, a.yK)([G.A], () => G.A.getFeaturedApplicationIds());
        l.useEffect(() => {
            (0, L.Wq)();
        }, []);
        let t = (0, a.bG)([P.default], () => P.default.getCurrentUser()),
            i = (0, d.A)(e),
            { tokens: n, fetched: s } = (0, D.j)(e),
            r = (0, h.A)(t?.id),
            c = null == t || null == e || null == n || !s,
            u = l.useMemo(
                () =>
                    c
                        ? []
                        : i.filter(
                              (e) =>
                                  !(null == e || r.some((t) => t instanceof I.R && t.applicationId === e.id)) &&
                                  null != n.find((t) => t.application.id === e.id),
                          ),
                [c, i, n, r],
            ),
            { eligibleToShow: o, markAsDismissed: g } = (0, w.hj)({
                applications: u,
                dismissibleContent: b.M.APP_WIDGET_V2_PROFILE_UPSELL_SUGGESTED,
                cooldownConfig: w.SH,
            }),
            m = l.useMemo(() => u.filter((e) => o.includes(e.id)), [u, o]);
        return c
            ? { isLoading: c, currentUser: t }
            : { isLoading: c, currentUser: t, eligibleApplications: m, markAsDismissed: g };
    })();
    if (e || null == t) return null;
    let r = i[0];
    return null == r ? null : (0, n.jsx)(V, { user: t, application: r, onDismiss: (e) => s([r.id], e) }, r.id);
}
var K = i(128988),
    Y = i(939318),
    q = i(982599),
    Q = i(515054),
    J = i(534514),
    Z = i(321191),
    $ = i(725386),
    ee = i(527139),
    et = i(215538);
function ei(e) {
    let { userId: t } = e,
        { trackUserProfileAction: i, trackUserProfileEditAction: s } = (0, S.NJ)(),
        r = l.useRef(!1),
        c = (0, a.bG)([Z.A], () => Z.A.getUserProfile(t)?.fetchError != null, [t]),
        o = (0, $.A)();
    return (
        l.useEffect(() => {
            r.current || c || (i({ action: "VIEW_WIDGETS_EMPTY_STATE" }), (r.current = !0));
        }, [c, i]),
        (0, n.jsxs)("div", {
            className: et.Ie,
            children: [
                (0, n.jsxs)("div", {
                    className: et.FS,
                    children: [
                        (0, n.jsx)(J.D, {
                            variant: "heading-md/medium",
                            color: "text-strong",
                            children: O.intl.string(O.t["oqalC+"]),
                        }),
                        (0, n.jsx)(u.E, {
                            variant: "text-sm/normal",
                            color: "text-default",
                            children: c ? O.intl.string(O.t["+W59o5"]) : O.intl.string(O.t.O9SQ1c),
                        }),
                    ],
                }),
                !c &&
                    (0, n.jsx)("ul", {
                        className: et.ZW,
                        "aria-label": O.intl.string(O.t["+EIBSA"]),
                        children: o.map((e) =>
                            (0, n.jsx)(
                                "li",
                                {
                                    children: (0, n.jsx)(ee.A, {
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
var en = i(117444);
function el(e) {
    let { widget: t, ...i } = e;
    return t instanceof I.R
        ? (0, n.jsx)(T.A, { widget: t, ...i })
        : (0, p.fu)(t)
          ? (0, n.jsx)(Y.A, { widget: t, ...i })
          : null;
}
function es() {
    return (0, n.jsxs)("div", {
        className: en.mJ,
        children: [
            (0, n.jsx)(c.m, { size: "xs" }),
            (0, n.jsx)(u.E, {
                "aria-label": O.intl.string(O.t["7blcz6"]),
                variant: "text-xs/normal",
                color: "text-muted",
                children: O.intl.string(O.t["7blcz6"]),
            }),
        ],
    });
}
function er(e) {
    let { user: t, guildId: i, channelId: s } = e,
        r = (0, h.A)(t.id),
        c = (0, j.A)(t.id),
        u = (function () {
            let [e, t] = (0, a.yK)([x.A], () => [x.A.ipCountryCode, x.A.ipCountryCodeRequest]),
                i = (0, m.Z)();
            return (
                l.useEffect(() => {
                    null == e && null == t && i && (0, g.xe)();
                }, [e, t, i]),
                "GB" === e && i
            );
        })(),
        A = o.A.useConfig({ location: "UserProfileModalV2Widgets" }).enabled,
        T = 0 === r.length && c,
        N = l.useMemo(() => r.filter(p.fu), [r]),
        v = l.useMemo(() => r.filter((e) => e instanceof I.R), [r]);
    function _() {
        return (0, n.jsxs)(n.Fragment, {
            children: [
                c &&
                    (0, n.jsxs)(n.Fragment, {
                        children: [
                            (0, n.jsx)(C, { className: en.cG }),
                            u && (0, n.jsx)(es, {}),
                            A && (0, n.jsx)(z, {}),
                        ],
                    }),
                r.map((e, l) =>
                    (0, n.jsx)(
                        el,
                        { widget: e, user: t, guildId: i, channelId: s, allowEditing: c, index: l },
                        e.getUniqueKey(),
                    ),
                ),
            ],
        });
    }
    return ((0, E.Y)(c, N),
    !(function (e, t) {
        let i = l.useMemo(() => t.map((e) => e.applicationId), [t]);
        (0, d.A)(i);
        let { data: n, refetch: s } = (0, f.P)(e),
            r = l.useRef(null !== n);
        l.useEffect(() => {
            r.current && ((r.current = !1), s());
        }, [s]);
    })(t.id, v),
    T)
        ? (0, n.jsx)(ei, { userId: t.id })
        : c
          ? (0, n.jsx)(R.D, { children: _() })
          : _();
}
function ea(e) {
    let { user: t, ...i } = e,
        s = l.useRef(null);
    (0, A.i)({ containerRef: s });
    let a = (0, q.k)(t.id);
    return (0, n.jsxs)(Q.K, {
        "data-scroller": !0,
        scrollerRef: s,
        className: r()(en.XG, { [en.az]: a }),
        fade: !0,
        children: [(0, n.jsx)(K.A, { scrollerRef: s }), (0, n.jsx)(er, { user: t, ...i })],
    });
}
