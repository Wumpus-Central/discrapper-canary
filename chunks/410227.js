(t.r(n), t.d(n, { default: () => en }));
var l = t(477900),
    r = t(582128),
    s = t(503698),
    i = t.n(s),
    a = t(319354),
    u = t(812993),
    o = t(866665),
    c = t(939249),
    d = t(573435),
    h = t(855793),
    f = t(17928),
    m = t(404373),
    j = t(219956),
    p = t(281091);
function x(e, n) {
    return (
        e.status?.kind === n.status?.kind &&
        e.status?.projectId === n.status?.projectId &&
        e.hasUnread === n.hasUnread &&
        e.mentionCount === n.mentionCount
    );
}
var g = t(621466),
    v = t(305866),
    E = t(623646),
    N = t(707554),
    b = t(297264),
    k = t(821609),
    C = t(307301),
    w = t(683438),
    A = t(364522),
    y = t(265872),
    R = t(73153),
    I = t(964486),
    S = t(967198),
    _ = t(89310),
    T = t(290076),
    L = t(371169),
    B = t(418811),
    M = t(16619),
    D = t(261425),
    G = t(105292),
    O = t(606128),
    P = t(559962);
function z(e) {
    let { onNavigate: n } = e,
        t = G.intl.string(D.default.uk6jhJ),
        s = G.intl.string(D.default.u0kEN9),
        [a, u] = r.useState(""),
        o = r.useRef(null);
    (!(function (e) {
        let { setFocusLockDisabled: n } = r.useContext(v.M),
            t = r.useRef(n);
        (r.useEffect(() => {
            t.current = n;
        }, [n]),
            r.useEffect(() => {
                let n,
                    l = !1;
                function r(n) {
                    let r = e.current;
                    null == r || !(0, g.vq)(n.target, Element) || (0, E.H)(r, n.target) || ((l = !0), t.current?.(!0));
                }
                function s() {
                    l &&
                        (n = setTimeout(() => {
                            ((l = !1), t.current?.(!1));
                        }));
                }
                return (
                    document.addEventListener("pointerdown", r, !0),
                    document.addEventListener("pointerup", s, !0),
                    () => {
                        (clearTimeout(n),
                            document.removeEventListener("pointerdown", r, !0),
                            document.removeEventListener("pointerup", s, !0));
                    }
                );
            }, [e]));
    })(o),
        r.useLayoutEffect(() => {
            o.current?.focus({ preventScroll: !0 });
        }, []));
    let c = (0, M.rX)("ConjurePopout"),
        d = r.useCallback(
            (e) => {
                (0, B.A)(e) && n();
            },
            [n],
        ),
        h = r.useCallback(() => {
            null != c && ((0, _.J)(c, { forMe: S.A.getGuildId() !== c }), n());
        }, [c, n]);
    return (0, l.jsxs)("div", {
        ref: o,
        tabIndex: -1,
        className: i()(P.kL, O.T),
        children: [
            (0, l.jsx)("div", { className: P._Q, children: (0, l.jsx)("span", { className: P.Tp }) }),
            (0, l.jsx)("div", {
                className: P.Qs,
                children: (0, l.jsxs)(N.F, {
                    forceLevel: 1,
                    component: (0, l.jsxs)("header", {
                        className: P.wx,
                        children: [
                            (0, l.jsx)(b.D, {
                                variant: "text-md/semibold",
                                lineClamp: 1,
                                className: P.DD,
                                children: t,
                            }),
                            (0, l.jsx)("div", {
                                className: P.$s,
                                children: (0, l.jsx)(k.$, {
                                    variant: "primary",
                                    size: "sm",
                                    icon: C.j,
                                    text: G.intl.string(D.default.zfRFcL),
                                    onClick: h,
                                }),
                            }),
                        ],
                    }),
                    children: [
                        (0, l.jsx)("div", {
                            className: P.$P,
                            children: (0, l.jsx)(w.I, {
                                query: a,
                                onChange: u,
                                onClear: () => u(""),
                                size: "md",
                                placeholder: G.intl.string(D.default["2y8sUh"]),
                                "aria-label": s,
                            }),
                        }),
                        (0, l.jsx)(A.Ip, { className: P.XG, children: (0, l.jsx)(T.A, { query: a, onSelect: d }) }),
                    ],
                }),
            }),
        ],
    });
}
function J(e) {
    let { children: n, targetElementRef: t } = e,
        [s, i] = r.useState(!1),
        a = r.useCallback(() => i(!1), []),
        u = r.useCallback(() => {
            i((e) => (e || (0, L.hF)(), !e));
        }, []);
    return (
        (0, I.Ay)(
            () => (R.h.subscribe("USER_SETTINGS_MODAL_OPEN", a), () => R.h.unsubscribe("USER_SETTINGS_MODAL_OPEN", a)),
        ),
        (0, l.jsx)(y.Y, {
            targetElementRef: t,
            shouldShow: s,
            position: "bottom",
            align: "left",
            spacing: 2,
            animation: y.Y.Animation.NONE,
            onRequestClose: a,
            renderPopout: () =>
                (0, l.jsx)(v.l, {
                    "aria-label": G.intl.string(D.default.uk6jhJ),
                    children: (0, l.jsx)(z, { onNavigate: a }),
                }),
            children: (e, t) => {
                let { isShown: l } = t;
                return n(u, l, e);
            },
        })
    );
}
t(321073);
var U = t(628284),
    q = t(661531),
    H = t(834730),
    X = t(260498),
    $ = t(162052),
    F = t(274158);
function Q(e) {
    let { status: n } = e,
        t = r.useRef(null),
        s = (0, f.bG)([X.Ay], () => X.Ay.getProject(n.projectId)?.name ?? null, [n.projectId]),
        a = "working" === n.kind,
        u = "unread" === n.kind,
        o =
            (function (e) {
                let [n, t] = r.useState(200);
                return (
                    r.useLayoutEffect(() => {
                        let n = e.current,
                            l = n?.closest('[data-window-chrome="true"]');
                        if (null == n || null == l) return;
                        function r() {
                            t(
                                (function (e) {
                                    var n;
                                    let t,
                                        l = e.closest('[data-window-chrome="true"]'),
                                        r = e.previousElementSibling;
                                    if (null == l || null == r) return 200;
                                    let [s, , i] = Array.from(l.children),
                                        a = [],
                                        u = s?.firstElementChild;
                                    (null != u && a.push(u.getBoundingClientRect()),
                                        null != i && a.push(i.getBoundingClientRect()));
                                    let o = "rtl" === getComputedStyle(e).direction;
                                    return (
                                        (n = r.getBoundingClientRect()),
                                        (t = o ? n.left - 6 : n.right + 6),
                                        Math.min(
                                            200,
                                            ...a
                                                .filter((e) => e.width > 0)
                                                .map((e) => (o ? t - e.right : e.left - t) - 16),
                                        )
                                    );
                                })(n),
                            );
                        }
                        r();
                        let s = new ResizeObserver(r);
                        function i() {
                            if (null == l) return;
                            (s.disconnect(), s.observe(l));
                            let [e, n, t] = Array.from(l.children),
                                r = e?.firstElementChild;
                            (null != r && s.observe(r), null != n && s.observe(n), null != t && s.observe(t));
                        }
                        i();
                        let a = new MutationObserver(() => {
                                (i(), r());
                            }),
                            u = l.firstElementChild;
                        return (
                            null != u && a.observe(u, { childList: !0 }),
                            () => {
                                (s.disconnect(), a.disconnect());
                            }
                        );
                    }, [e]),
                    n
                );
            })(t) -
            16 * !!u,
        c = null != s && o >= 48;
    return (
        r.useLayoutEffect(() => {
            t.current?.style.setProperty("--custom-conjure-title-bar-name-max-width", `${Math.max(o, 0)}px`);
        }, [o]),
        (0, l.jsxs)("span", {
            ref: t,
            className: F.h5,
            children: [
                c && u
                    ? (0, l.jsx)(U.y, {
                          size: "custom",
                          width: 12,
                          height: 12,
                          color: q.A.colors.TEXT_BRAND,
                          "aria-label": G.intl.string(D.default["6XGnHJ"]),
                      })
                    : null,
                c
                    ? (0, l.jsx)(H.E, {
                          variant: "text-sm/medium",
                          color: a ? "none" : "text-strong",
                          className: i()(F.Er, { [$.Hz]: a }),
                          children: s,
                      })
                    : null,
            ],
        })
    );
}
var Y = t(308665);
function W() {
    return (0, l.jsxs)("svg", {
        width: "100%",
        height: "100%",
        viewBox: "0 0 24 24",
        fill: "none",
        "aria-hidden": !0,
        focusable: !1,
        children: [
            (0, l.jsx)("path", { fill: "currentColor", d: Y.fy }),
            (0, l.jsx)("path", { fill: "currentColor", d: Y.tE, className: i()(F.dQ, F.ui) }),
            (0, l.jsx)("path", { fill: "currentColor", d: Y.tW, className: i()(F.dQ, F.Mb) }),
        ],
    });
}
function K(e) {
    let { working: n } = e;
    return (0, l.jsxs)("span", {
        className: i()(F.RB, O.T, { [F.Cc]: n }),
        "aria-hidden": !0,
        children: [(0, l.jsx)(W, {}), (0, l.jsx)("span", { className: F.q2, children: (0, l.jsx)(W, {}) })],
    });
}
t(445368);
var V = t(346994);
function Z(e) {
    let { count: n } = e,
        t = Math.min(n, 25),
        r = n > t;
    return (0, l.jsx)(u.hV, {
        count: t,
        renderBadgeCount: (e) => (r ? `${e}+` : e),
        className: i()(F.WK, { [F.uP]: r }),
    });
}
function ee() {
    let e,
        n = r.useRef(null),
        {
            status: t,
            hasUnread: s,
            mentionCount: u,
        } = ((e = (0, p.A)()),
        (0, f.bG)(
            j.eN,
            () =>
                (function (e) {
                    let n = null,
                        t = null,
                        l = null,
                        r = 0;
                    for (let s of e) {
                        let e = (0, j.A2)(s.id);
                        if ("in_progress" === e) n ??= s.id;
                        else if ("unread" === e) {
                            let e = (0, m.xp)(s.id);
                            ((r += e), e > 0 ? (t ??= s.id) : (l ??= s.id));
                        }
                    }
                    return {
                        status:
                            null != n
                                ? { kind: "working", projectId: n }
                                : null != t
                                  ? { kind: "needs_input", projectId: t }
                                  : null != l
                                    ? { kind: "unread", projectId: l }
                                    : null,
                        hasUnread: null != t || null != l,
                        mentionCount: r,
                    };
                })(e),
            [e],
            x,
        )),
        g = t?.kind === "working",
        v = 0 === u && s,
        E = G.intl.string(D.default.uk6jhJ),
        N = [
            E,
            u > 0 ? G.intl.string(D.default.hfIuc7) : null,
            g ? G.intl.string(D.default["Y8pS+n"]) : null,
            t?.kind === "unread" ? G.intl.string(D.default["6XGnHJ"]) : null,
        ]
            .filter(Boolean)
            .join(", "),
        b = (0, l.jsx)(K, { working: g });
    return (0, l.jsx)("div", {
        className: F.NI,
        children: (0, l.jsx)(J, {
            targetElementRef: n,
            children: (e, r) =>
                (0, l.jsx)(o.m, {
                    asContainer: !0,
                    shouldShow: !r,
                    text: E,
                    children: (0, l.jsxs)(c.D, {
                        innerRef: n,
                        className: i()(F.f_, { [F.ho]: r }),
                        "aria-label": N,
                        "aria-haspopup": "dialog",
                        "aria-expanded": r,
                        onClick: e,
                        children: [
                            (0, l.jsx)(h.Ay, { projectId: g ? t.projectId : null }),
                            (0, l.jsxs)("span", {
                                className: F.oT,
                                children: [
                                    (0, l.jsx)("span", {
                                        className: V.P0,
                                        children: v
                                            ? (0, l.jsxs)(l.Fragment, {
                                                  children: [
                                                      (0, l.jsx)(d.Ay, {
                                                          width: a.E.sm,
                                                          height: a.E.sm,
                                                          mask: d.Ay.Masks.HEADER_BAR_BADGE_BOTTOM,
                                                          children: b,
                                                      }),
                                                      (0, l.jsx)("span", { className: V.Zm }),
                                                  ],
                                              })
                                            : b,
                                    }),
                                    u > 0 ? (0, l.jsx)(Z, { count: u }) : null,
                                    null != t ? (0, l.jsx)(Q, { status: t }) : null,
                                ],
                            }),
                        ],
                    }),
                }),
        }),
    });
}
function en(e) {
    let { placement: n } = e;
    return "leading" === n ? (0, l.jsx)(ee, {}) : null;
}
