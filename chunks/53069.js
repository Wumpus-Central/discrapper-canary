i.d(t, { A: () => ea, u: () => es });
var n = i(627968),
    s = i(64700),
    l = i(503698),
    r = i.n(l),
    a = i(17928),
    u = i(885574),
    c = i(834730),
    o = i(783041),
    d = i(429913),
    g = i(277984),
    f = i(840387),
    m = i(201718),
    I = i(615405),
    x = i(633075),
    E = i(289173),
    p = i(373842),
    h = i(600761),
    A = i(667049),
    T = i(579950),
    j = i(605694),
    S = i(192308),
    _ = i(821609),
    k = i(307301),
    O = i(183555),
    N = i(375708),
    C = i(392756);
function v(e) {
    let { className: t } = e,
        { trackUserProfileEditAction: l } = (0, O.NJ)(),
        a = s.useCallback(() => {
            l({ action: "PRESS_ADD_WIDGET" }),
                (0, S.openModalLazy)(
                    async () => {
                        let { default: e } = await Promise.all([i.e("4402"), i.e("87591")]).then(i.bind(i, 333114));
                        return (t) => (0, n.jsx)(e, { ...t, trackUserProfileEditAction: l });
                    },
                    { stackingBehavior: "stack" },
                );
        }, [l]);
    return (0, n.jsxs)("div", {
        className: r()(C.w, t),
        children: [
            (0, n.jsx)(c.E, { variant: "text-xs/semibold", color: "text-subtle", children: N.intl.string(N.t.OYlggR) }),
            (0, n.jsx)(_.$, {
                icon: k.j,
                text: N.intl.string(N.t["lBG2s/"]),
                size: "sm",
                variant: "secondary",
                onClick: a,
            }),
        ],
    });
}
var R = i(192),
    b = i(554146),
    w = i(704824),
    G = i(382483),
    D = i(385113),
    L = i(334074),
    y = i(287809),
    P = i(990078),
    M = i(657718),
    F = i(789645),
    U = i(478016),
    W = i(735321),
    H = i(384377),
    B = i(518477),
    X = i(49999);
function V(e) {
    let { user: t, application: i, onDismiss: l } = e,
        { trackUserProfileEditAction: r } = (0, O.NJ)(),
        a = s.useMemo(() => new x.R({ applicationId: i.id }), [i.id]),
        u = s.useCallback(() => {
            null != a &&
                ((0, W.Y5)(a),
                r({ action: "WIDGET_ADDED", ...a.getProfileEditAnalyticsOptions() }),
                (0, H.XA)(B.jM.WIDGET_ADDED));
        }, [a, r]);
    return (0, n.jsx)(j.A, {
        user: t,
        widget: a,
        allowEditing: !1,
        subtle: !0,
        cta: (0, n.jsx)(j.A.Cta, {
            showSuggestedForYou: !0,
            heading: N.intl.format(N.t.OIzLCy, { applicationName: i.name }),
            content: N.intl.format(N.t.BQySru, { applicationName: i.name }),
            buttons: (0, n.jsxs)(n.Fragment, {
                children: [
                    (0, n.jsx)(P.m, {
                        text: N.intl.string(N.t.WAI6xu),
                        ariaHidden: !0,
                        children: (0, n.jsx)(M.S, {
                            variant: "secondary",
                            size: "sm",
                            icon: F.P,
                            "aria-label": N.intl.string(N.t.WAI6xu),
                            onClick: () => {
                                l(X.i.USER_DISMISS);
                            },
                        }),
                    }),
                    (0, n.jsx)(P.m, {
                        text: N.intl.string(N.t["lBG2s/"]),
                        ariaHidden: !0,
                        children: (0, n.jsx)(M.S, {
                            variant: "primary",
                            size: "sm",
                            icon: U.U,
                            "aria-label": N.intl.formatToPlainString(N.t.KfGahB, { applicationName: i.name }),
                            onClick: () => {
                                l(X.i.TAKE_ACTION), u();
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
        markAsDismissed: l,
    } = (function () {
        let e = (0, a.yK)([D.A], () => D.A.getFeaturedApplicationIds());
        s.useEffect(() => {
            (0, G.Wq)();
        }, []);
        let t = (0, a.bG)([y.default], () => y.default.getCurrentUser()),
            i = (0, d.A)(e),
            { tokens: n, fetched: l } = (0, w.j)(e),
            r = (0, A.A)(t?.id),
            u = null == t || null == e || null == n || !l,
            c = s.useMemo(
                () =>
                    u
                        ? []
                        : i.filter(
                              (e) =>
                                  !(null == e || r.some((t) => t instanceof x.R && t.applicationId === e.id)) &&
                                  null != n.find((t) => t.application.id === e.id),
                          ),
                [u, i, n, r],
            ),
            { eligibleToShow: o, markAsDismissed: g } = (0, L.hj)({
                applications: c,
                dismissibleContent: b.M.APP_WIDGET_V2_PROFILE_UPSELL_SUGGESTED,
                cooldownConfig: L.SH,
            }),
            f = s.useMemo(() => c.filter((e) => o.includes(e.id)), [c, o]);
        return u
            ? { isLoading: u, currentUser: t }
            : { isLoading: u, currentUser: t, eligibleApplications: f, markAsDismissed: g };
    })();
    if (e || null == t) return null;
    let r = i[0];
    return null == r ? null : (0, n.jsx)(V, { user: t, application: r, onDismiss: (e) => l([r.id], e) }, r.id);
}
var K = i(128988),
    Y = i(939318),
    q = i(982599),
    J = i(515054),
    Z = i(534514),
    Q = i(543572),
    $ = i(725386),
    ee = i(527139),
    et = i(190322);
function ei(e) {
    let { userId: t } = e,
        { trackUserProfileAction: i, trackUserProfileEditAction: l } = (0, O.NJ)(),
        r = s.useRef(!1),
        u = (0, a.bG)([Q.A], () => Q.A.getUserProfile(t)?.fetchError != null, [t]),
        o = (0, $.A)();
    return (
        s.useEffect(() => {
            r.current || u || (i({ action: "VIEW_WIDGETS_EMPTY_STATE" }), (r.current = !0));
        }, [u, i]),
        (0, n.jsxs)("div", {
            className: et.Ie,
            children: [
                (0, n.jsxs)("div", {
                    className: et.FS,
                    children: [
                        (0, n.jsx)(Z.D, {
                            variant: "heading-md/medium",
                            color: "text-strong",
                            children: N.intl.string(N.t["oqalC+"]),
                        }),
                        (0, n.jsx)(c.E, {
                            variant: "text-sm/normal",
                            color: "text-default",
                            children: u ? N.intl.string(N.t["+W59o5"]) : N.intl.string(N.t.O9SQ1c),
                        }),
                    ],
                }),
                !u &&
                    (0, n.jsx)("ul", {
                        className: et.ZW,
                        "aria-label": N.intl.string(N.t["+EIBSA"]),
                        children: o.map((e) =>
                            (0, n.jsx)(
                                "li",
                                {
                                    children: (0, n.jsx)(ee.A, {
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
var en = i(812868);
function es(e) {
    let { widget: t, ...i } = e;
    return t instanceof x.R
        ? (0, n.jsx)(j.A, { widget: t, ...i })
        : (0, E.fu)(t)
          ? (0, n.jsx)(Y.A, { widget: t, ...i })
          : null;
}
function el() {
    return (0, n.jsxs)("div", {
        className: en.mJ,
        children: [
            (0, n.jsx)(u.m, { size: "xs" }),
            (0, n.jsx)(c.E, {
                "aria-label": N.intl.string(N.t["7blcz6"]),
                variant: "text-xs/normal",
                color: "text-muted",
                children: N.intl.string(N.t["7blcz6"]),
            }),
        ],
    });
}
function er(e) {
    let { user: t, guildId: i, channelId: l } = e,
        r = (0, A.A)(t.id),
        u = (0, T.A)(t.id),
        c = (function () {
            let [e, t] = (0, a.yK)([I.A], () => [I.A.ipCountryCode, I.A.ipCountryCodeRequest]),
                i = (0, f.Z)();
            return (
                s.useEffect(() => {
                    null == e && null == t && i && (0, g.xe)();
                }, [e, t, i]),
                "GB" === e && i
            );
        })(),
        h = o.A.useConfig({ location: "UserProfileModalV2Widgets" }).enabled,
        j = 0 === r.length && u,
        S = s.useMemo(() => r.filter(E.fu), [r]),
        _ = s.useMemo(() => r.filter((e) => e instanceof x.R), [r]);
    function k() {
        return (0, n.jsxs)(n.Fragment, {
            children: [
                u &&
                    (0, n.jsxs)(n.Fragment, {
                        children: [
                            (0, n.jsx)(v, { className: en.cG }),
                            c && (0, n.jsx)(el, {}),
                            h && (0, n.jsx)(z, {}),
                        ],
                    }),
                r.map((e, s) =>
                    (0, n.jsx)(
                        es,
                        { widget: e, user: t, guildId: i, channelId: l, allowEditing: u, index: s },
                        e.getUniqueKey(),
                    ),
                ),
            ],
        });
    }
    return ((0, p.Y)(u, S),
    !(function (e, t) {
        let i = s.useMemo(() => t.map((e) => e.applicationId), [t]);
        (0, d.A)(i);
        let { data: n, refetch: l } = (0, m.P)(e),
            r = s.useRef(null !== n);
        s.useEffect(() => {
            r.current && ((r.current = !1), l());
        }, [l]);
    })(t.id, _),
    j)
        ? (0, n.jsx)(ei, { userId: t.id })
        : u
          ? (0, n.jsx)(R.D, { children: k() })
          : k();
}
function ea(e) {
    let { user: t, ...i } = e,
        l = s.useRef(null);
    (0, h.i)({ containerRef: l });
    let a = (0, q.k)(t.id);
    return (0, n.jsxs)(J.K, {
        "data-scroller": !0,
        scrollerRef: l,
        className: r()(en.XG, { [en.az]: a }),
        fade: !0,
        children: [(0, n.jsx)(K.A, { scrollerRef: l }), (0, n.jsx)(er, { user: t, ...i })],
    });
}
