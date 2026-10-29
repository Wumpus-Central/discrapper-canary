(l.r(n), l.d(n, { default: () => Z }));
var t = l(477900),
    i = l(582128),
    r = l(503698),
    a = l.n(r),
    o = l(806163),
    s = l(837381),
    u = l(17928),
    d = l(862328),
    c = l(812993),
    j = l(67811),
    p = l(152367),
    x = l(442433),
    f = l(775602),
    h = l(941971),
    A = l(900848),
    b = l(550591),
    g = l(771640),
    k = l(855793),
    m = l(751841),
    C = l(381991),
    v = l(111582),
    w = l(16619),
    S = l(281091),
    D = l(738601),
    I = l(980707),
    M = l(477782),
    y = l(972013),
    _ = l(927731),
    z = l(248675),
    N = l(105292);
function B(e) {
    let { onImport: n, importDisabled: l } = e,
        i = (0, u.bG)([y.A], () => y.A.isPinned());
    return (0, t.jsxs)(I.W, {
        navId: "conjure-rail",
        onClose: x.Z_,
        onSelect: x.Z_,
        "aria-label": N.intl.string(z.default.uk6jhJ),
        children: [
            (0, t.jsxs)(M.rX, {
                children: [
                    (0, t.jsx)(M.Dr, { id: "new-project", label: N.intl.string(z.default["34+ZcS"]), action: C.o }),
                    (0, t.jsx)(M.Dr, { id: "import", label: N.intl.string(z.default.tx8Azx), disabled: l, action: n }),
                ],
            }),
            (0, t.jsx)(M.rX, {
                children: i
                    ? (0, t.jsx)(M.Dr, { id: "unpin", label: N.intl.string(z.default.dFMslg), action: _.l })
                    : (0, t.jsx)(M.Dr, { id: "pin", label: N.intl.string(z.default["DE7U+m"]), action: _._ }),
            }),
        ],
    });
}
var X = l(698603);
function Z() {
    let e,
        n = (0, m.tb)((0, o.zy)().pathname),
        [l, r] = i.useState(!1),
        I = (0, s.Vd)("conjure"),
        {
            workingProjectId: M,
            activeProjectId: y,
            unreadProjectCount: _,
        } = ((e = (0, S.A)()),
        (0, u.cf)(
            D.Nl,
            () =>
                (function (e) {
                    let n = null,
                        l = null,
                        t = 0;
                    for (let i of e) {
                        let e = (0, D.AK)(i.id);
                        null != e && ((l ??= i.id), "working" === e ? (n ??= i.id) : t++);
                    }
                    return { workingProjectId: n, activeProjectId: l, unreadProjectCount: t };
                })(e),
            [e],
        )),
        Z = null != M,
        E = (0, u.bG)([f.Ay], () => f.Ay.useReducedMotion),
        G = (function (e) {
            let [n, l] = i.useState(e);
            return (
                e && !n && l(!0),
                {
                    pulsing: n,
                    onAnimationIteration: i.useCallback(() => {
                        e || l(!1);
                    }, [e]),
                }
            );
        })(Z && !E),
        J = (0, w.rX)("ConjureRailButton"),
        K = (0, v.A)(J, C.A),
        { open: L } = K,
        P = N.intl.string(z.default.uk6jhJ),
        R = [
            P,
            Z ? N.intl.string(z.default["Y8pS+n"]) : null,
            _ > 0 ? N.intl.formatToPlainString(z.default.tHMW7U, { count: _ }) : null,
        ]
            .filter((e) => null != e)
            .join(", "),
        U = i.useCallback(() => (0, C.A)(n ? null : (y ?? void 0)), [n, y]),
        W = i.useCallback((e) => (0, x.jA)(e, () => (0, t.jsx)(B, { onImport: L, importDisabled: null == J })), [L, J]);
    return (0, t.jsxs)(A.c, {
        children: [
            (0, t.jsx)(h.A, { overlay: !0, selected: n, hovered: l, unread: _ > 0 }),
            (0, t.jsx)(b.A, {
                hideOnClick: !0,
                text: P,
                selected: n,
                children: (0, t.jsx)(d.Q, {
                    selected: !0,
                    lowerBadge: _ > 0 ? (0, g.wN)(_, void 0, !0) : null,
                    lowerBadgeSize: { width: (0, c.o6)(_) },
                    children: (0, t.jsxs)(j.j, {
                        ...I,
                        ariaLabel: R,
                        "aria-selected": n,
                        selected: (n || l) && !Z,
                        className: X.AS,
                        onClick: U,
                        onContextMenu: W,
                        onMouseEnter: () => r(!0),
                        onMouseLeave: () => r(!1),
                        children: [
                            (0, t.jsx)(k.Ay, { projectId: M }),
                            (0, t.jsx)(p.D, {
                                size: "md",
                                color: "currentColor",
                                className: a()(X.Kk, { [X.lu]: G.pulsing }),
                                onAnimationIteration: G.onAnimationIteration,
                            }),
                        ],
                    }),
                }),
            }),
            K.input,
        ],
    });
}
