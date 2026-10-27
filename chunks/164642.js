(n.r(t), n.d(t, { default: () => I }), n(134528), n(947204));
var r = n(477900),
    l = n(582128),
    i = n(503698),
    u = n.n(i),
    o = n(621466),
    c = n(17928),
    s = n(192308),
    a = n(231723),
    d = n(707554),
    f = n(866665),
    m = n(408278),
    h = n(972213),
    p = n(73153),
    v = n(429582),
    E = n(343030),
    g = n(812901),
    j = n(976860),
    x = n(566937),
    A = n(5538),
    b = n(716455),
    y = n(51909),
    w = n(16619),
    C = n(15564),
    F = n(735769),
    L = n(763218),
    P = n(381991),
    R = n(662410),
    S = n(850144),
    q = n(10357);
n(715679);
var O = n(489969),
    T = n(365912),
    k = n(105292),
    M = n(286711);
function N(e) {
    let { contentRef: t } = e,
        n = (0, c.bG)([F.A], () => F.A.getProjectId()),
        l = (0, w.rX)("ConjureOverlay");
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)("div", {
                className: M.pz,
                children: (0, r.jsx)(q.A, { selectedProjectId: n, workspaceGuildId: l, onNavigate: P.Ay }),
            }),
            (0, r.jsx)("div", { ref: t, className: M.Qs, children: (0, r.jsx)(S.A, { projectId: n }) }),
        ],
    });
}
function H(e) {
    let { panelRef: t, onHidden: n } = e;
    return (
        l.useEffect(() => {
            function e() {
                ((0, P.Tk)(), n());
            }
            let t = (0, j.JK)().listen(e);
            return (
                p.h.subscribe("USER_PROFILE_MODAL_OPEN", e),
                () => {
                    (t(), p.h.unsubscribe("USER_PROFILE_MODAL_OPEN", e));
                }
            );
        }, [n]),
        l.useEffect(() => {
            function e() {
                setTimeout(() => {
                    let e = document.activeElement,
                        n = t.current;
                    null != n &&
                        (0, o.vq)(e, HTMLIFrameElement) &&
                        n.contains(e) &&
                        (e.matches(":hover") || n.focus({ preventScroll: !0 }));
                }, 0);
            }
            return (
                t.current?.focus({ preventScroll: !0 }),
                window.addEventListener("blur", e),
                () => window.removeEventListener("blur", e)
            );
        }, [t]),
        null
    );
}
function I(e) {
    var t;
    let n,
        i,
        { open: c, visible: p, onClosed: j } = e,
        w = l.useRef(null),
        F = l.useRef(null),
        [S, q] = l.useState(!1);
    ((c && p) || !S || q(!1),
        l.useEffect(() => {
            if (!c || !p || S) return;
            let e = setTimeout(() => q(!0), 250);
            return () => clearTimeout(e);
        }, [c, p, S]),
        l.useEffect(() => ((0, L.U)(S), () => (0, L.U)(!1)), [S]));
    let I = (0, s.useModalsStore)((e) => {
            let t = e[a.SY] ?? [];
            return (
                t.some((e) => {
                    let { key: t } = e;
                    return t === R.O;
                }) && t.at(-1)?.key !== R.O
            );
        }),
        $ = !(0, g.f)(),
        _ = (0, O.K)(),
        B = (function (e, t, n) {
            let [r, i] = l.useState(!1);
            return (
                l.useEffect(() => {
                    if (!e || null == t) return void i(!1);
                    let r = (0, T.J$)(t),
                        l = t;
                    for (; null != l.parentElement && l.parentElement !== r;) l = l.parentElement;
                    let u = l,
                        o = null;
                    function c() {
                        o = null;
                        let e = n.current?.getBoundingClientRect();
                        if (null == e) return;
                        let t = !1;
                        for (let n = u.nextElementSibling; null != n && !t; n = n.nextElementSibling)
                            null == n.querySelector("[role=tooltip]") &&
                                (t = [...n.querySelectorAll(":scope > *, :scope > * > *, :scope > * > * > *")].some(
                                    (t) => {
                                        var n;
                                        return (
                                            (n = t.getBoundingClientRect()),
                                            n.width > 0 &&
                                                n.height > 0 &&
                                                n.left < e.right &&
                                                n.right > e.left &&
                                                n.top < e.bottom &&
                                                n.bottom > e.top
                                        );
                                    },
                                ));
                        i(t);
                    }
                    c();
                    let s = new MutationObserver(function () {
                        o ??= requestAnimationFrame(c);
                    });
                    return (
                        s.observe(r, { childList: !0 }),
                        () => {
                            (s.disconnect(), null != o && cancelAnimationFrame(o));
                        }
                    );
                }, [e, t, n]),
                r
            );
        })($ && c && S, _, F),
        U = !c || !S || ($ && (I || B));
    ((t = (0, x.w)("ConjureOverlay") && (0, v.H9)() && !U),
        (n = l.useRef(null)),
        (i = l.useCallback(() => {
            (n.current?.style.removeProperty("clip-path"), (n.current = null));
        }, [])),
        l.useLayoutEffect(() => i, [i]),
        l.useLayoutEffect(() => {
            let e = F.current;
            if (!t || null == _ || null == e) return;
            let r = (0, T.J$)(_),
                l = null,
                u = "",
                c = requestAnimationFrame(function t() {
                    c = requestAnimationFrame(t);
                    let s = e.querySelector("iframe");
                    if (null == s) return;
                    if (null == l) {
                        let t = e.getBoundingClientRect();
                        if (
                            null ==
                            (l = (function (e, t, n) {
                                let r = document
                                    .elementsFromPoint(e, t)
                                    .find(
                                        (e) => !n.contains(e) && e !== document.body && e !== document.documentElement,
                                    );
                                if (null == r) return null;
                                let l = r;
                                for (; null != l.parentElement && !l.parentElement.contains(n);) l = l.parentElement;
                                return (0, o.vq)(l, HTMLElement) ? l : null;
                            })(t.left + t.width / 2, t.top + t.height / 2, r))
                        )
                            return;
                        (n.current !== l && i(), (n.current = l));
                    }
                    let a = l.getBoundingClientRect(),
                        d = s.getBoundingClientRect(),
                        f = d.left - a.left,
                        m = d.top - a.top,
                        h = `path(evenodd, "M0 0H${a.width}V${a.height}H0Z M${f} ${m}H${f + d.width}V${m + d.height}H${f}Z")`;
                    h !== u && ((u = h), l.style.setProperty("clip-path", h));
                });
            return () => cancelAnimationFrame(c);
        }, [t, _, F, i]),
        l.useEffect(() => {
            if (t) return;
            let e = requestAnimationFrame(() => {
                e = requestAnimationFrame(i);
            });
            return () => cancelAnimationFrame(e);
        }, [t, i]));
    let G = l.useMemo(() => (0, r.jsx)(N, { contentRef: F }), []);
    return (0, r.jsx)(d.F, {
        forceLevel: 1,
        children: (0, r.jsxs)(l.Activity, {
            mode: p ? "visible" : "hidden",
            children: [
                (0, r.jsxs)("div", {
                    className: u()(M.Lw, { [M.SP]: c, [M.bG]: c && !I }),
                    children: [
                        (0, r.jsx)("section", {
                            ref: w,
                            tabIndex: -1,
                            className: M.nd,
                            onTransitionEnd: function (e) {
                                e.target === e.currentTarget && "opacity" === e.propertyName && (c ? q(!0) : j());
                            },
                            children: (0, r.jsx)(b.A.Provider, {
                                value: E.A.WithinModal,
                                children: (0, r.jsx)(y.A.Provider, {
                                    value: U,
                                    children: (0, r.jsx)(A.A.Provider, {
                                        value: !c || !S,
                                        children: (0, r.jsx)(C.A.Provider, { value: !0, children: G }),
                                    }),
                                }),
                            }),
                        }),
                        (0, r.jsx)("div", {
                            className: M.VN,
                            children: (0, r.jsx)(f.m, {
                                text: k.intl.string(k.t.cpT0Cq),
                                position: "left",
                                asContainer: !0,
                                ariaHidden: !0,
                                children: (0, r.jsx)(m.K, {
                                    icon: h.XLargeIcon,
                                    size: "md",
                                    variant: "overlay-secondary",
                                    "aria-label": k.intl.string(k.t.cpT0Cq),
                                    onClick: P.Tk,
                                }),
                            }),
                        }),
                    ],
                }),
                (0, r.jsx)(H, { panelRef: w, onHidden: j }),
            ],
        }),
    });
}
