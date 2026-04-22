n.d(t, { Ay: () => V, eW: () => P, th: () => w });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(91871),
    o = n.n(a),
    d = n(561392),
    c = n(311907),
    u = n(602853),
    m = n(827734),
    g = n(545442),
    h = n(834730),
    x = n(939249),
    _ = n(404778),
    p = n(534514),
    A = n(475825),
    E = n(39255),
    f = n(47167),
    j = n(713654),
    N = n(915089),
    I = n(201275),
    C = n(967144),
    b = n(657048),
    v = n(963307),
    S = n(734057),
    T = n(317525),
    y = n(994500),
    R = n(287809),
    L = n(985018),
    D = n(627452);
let O = (0, N.Ld)(),
    G = (0, N.Ld)(),
    M = "text-sm/medium";
function k(e) {
    return 1 === e.type;
}
function U(e) {
    return 0 === e.type;
}
function w(e) {
    let t = `${!e.name.includes(v.QP) ? "@" : ""}${e.name}`;
    return { tag: { type: E._.ROLE, label: t }, row: { id: e.id, display: t, type: 1, record: e } };
}
function P(e) {
    let t = (0, f.m1)(e, R.default, y.A);
    return { tag: { type: E._.CHANNEL, label: t }, row: { id: e.id, display: t, type: 0, record: e } };
}
let B = l.memo(function (e) {
    let { row: t, guildId: n, className: l } = e,
        { id: s, name: a } = t.record,
        o = (0, I.$7)({ guildId: n, roleId: s, size: 16 }),
        d = (0, c.bG)([T.A], () => T.A.getRole(n, s)),
        x = a.includes(v.QP) ? "" : "@",
        _ = (0, u.r)(m.A.unsafe_rawColors.PRIMARY_300).hsl(),
        p = d?.colorString ?? _,
        A = (0, C.X_)(n, d, d?.colorStrings);
    return (0, i.jsxs)("div", {
        className: r()(D.xZ, D.ex, l),
        children: [
            (0, i.jsx)(g.W, { className: D.__invalid_roleDot, color: p, colors: A, background: !1, tooltip: !1 }),
            null != o ? (0, i.jsx)(b.A, { className: D.YS, ...o, enableTooltip: !1 }) : x,
            (0, i.jsx)(h.E, { variant: M, className: D.pP, children: a }),
        ],
    });
});
function F(e) {
    let { channel: t, row: n, className: l } = e,
        s = null != t.parent_id,
        a = (0, j.gU)(t);
    return (0, i.jsxs)("div", {
        className: r()(D.xZ, D.sM, { [D.p7]: s }, l),
        children: [
            null != a && (0, i.jsx)(a, { size: "xs", color: "currentColor", className: D.p }),
            (0, i.jsx)(h.E, { variant: t.isCategory() ? "eyebrow" : M, children: n.display }),
        ],
    });
}
function H(e, t, n) {
    return k(e)
        ? (0, i.jsx)(B, { row: e, guildId: t, className: n }, e.record.id)
        : U(e)
          ? (0, i.jsx)(F, { row: e, channel: e.record, className: n }, e.record.id)
          : null;
}
function V(e) {
    let {
            guildId: t,
            roleRows: n = [],
            channelRows: s = [],
            selectedChannelIds: a = new Set(),
            selectedRoleIds: u = new Set(),
            onChange: m,
            placeholder: g,
            helperText: f,
            className: j,
        } = e,
        N = (0, c.bG)([T.A], () => T.A.getRolesSnapshot(t)),
        I = l.useMemo(
            () =>
                (function (e, t, n) {
                    if (null == e) return {};
                    let i = {};
                    return (
                        e.forEach((e) => {
                            let t = S.A.getChannel(e);
                            null != t && (i[e] = P(t));
                        }),
                        t.forEach((e) => {
                            e in n && (i[e] = w(n[e]));
                        }),
                        i
                    );
                })(a, u, N),
            [a, u, N],
        ),
        C = l.useMemo(() => Object.keys(I), [I]),
        [b, v] = l.useState(""),
        [y, R] = l.useState(!1),
        [M, B] = l.useState(!1),
        [F, V] = l.useState(!1),
        z = l.useRef(null),
        { refs: W, floatingStyles: Y } = (0, d.u)({ placement: "bottom-start", offset: 0, matchReferenceWidth: !0 }),
        { sections: K, sectionCounts: X } = l.useMemo(() => {
            let e = "" !== b ? s.filter((e) => o()(b, e.display.toLocaleLowerCase())) : s,
                t = "" !== b ? n.filter((e) => o()(b, e.display.toLocaleLowerCase())) : n,
                i = [],
                l = [];
            return (i[0] = e), (l[0] = e.length), (i[1] = t), (l[1] = t.length), { sections: i, sectionCounts: l };
        }, [b, s, n]),
        Z = l.useCallback(
            (e) => {
                let t = Object.values(e),
                    n = t
                        .filter((e) => {
                            let { row: t } = e;
                            return U(t);
                        })
                        .map((e) => e.row.record.id),
                    i = t
                        .filter((e) => {
                            let { row: t } = e;
                            return k(t);
                        })
                        .map((e) => e.row.record.id);
                m(new Set(n), new Set(i));
            },
            [m],
        ),
        J = () => {
            R(!1), B(!1);
        };
    l.useEffect(() => {
        let e = setTimeout(() => {
            V(y || M);
        }, 32);
        return () => {
            clearTimeout(e);
        };
    }, [y, M]);
    let q = (e, t, n) => {
            n.stopPropagation(), n.preventDefault(), 2 === t ? R(e) : (1 === t || R(e), B(e));
        },
        Q = l.useCallback(
            (e) => {
                let t = { ...I };
                U(e) ? (t[e.id] = P(e.record)) : k(e) && (t[e.id] = w(e.record)),
                    Z(t),
                    v(""),
                    J(),
                    setTimeout(() => {
                        let e = z.current?.containerRef.current,
                            t = e?.firstChild;
                        null != t && t.scrollTo({ top: t.scrollHeight, behavior: "smooth" });
                    }, 16);
            },
            [Z, I],
        ),
        $ = l.useCallback(
            (e) => {
                let { section: n, row: l } = e,
                    s = K[n][l];
                return (0, i.jsx)(
                    x.D,
                    {
                        className: r()(D.Xs, D.iw),
                        onClick: (e) => {
                            e.stopPropagation(), Q(s);
                        },
                        children: (0, i.jsx)("div", { className: D.qd, children: H(s, t, D.Dq) }),
                    },
                    s.id,
                );
            },
            [t, Q, K],
        ),
        ee = l.useMemo(
            () =>
                C.map((e) => {
                    var n;
                    return (n = I[e]), { ...n.tag, label: H(n.row, t, D.yS) };
                }),
            [I, C, t],
        );
    return (0, i.jsxs)("div", {
        className: r()(D.MT, j),
        children: [
            (0, i.jsxs)("div", {
                className: D.M6,
                ref: W.setReference,
                children: [
                    (0, i.jsx)(E.A, {
                        tags: ee,
                        maxHeight: 98,
                        size: E.A.Sizes.MEDIUM,
                        query: b,
                        ref: z,
                        onRemoveTag: (e) => {
                            let t = C[e],
                                { [t]: n, ...i } = I;
                            Z(i), v(""), J();
                        },
                        onQueryChange: (e) => {
                            v(e.trim().toLocaleLowerCase());
                        },
                        placeholder: g ?? L.intl.string(L.t.uqHLzW),
                        sections: [C.length],
                        inputProps: {
                            "aria-labelledby": O,
                            "aria-controls": G,
                            "aria-expanded": F,
                            onFocus: (e) => q(!0, 2, e),
                            onBlur: (e) => q(!1, 2, e),
                        },
                    }),
                    F &&
                        (0, i.jsx)("div", {
                            ref: W.setFloating,
                            style: Y,
                            className: D.Dr,
                            onFocus: (e) => q(!0, 1, e),
                            onBlur: (e) => q(!1, 1, e),
                            tabIndex: -1,
                            children: (0, i.jsx)(A.Ei, {
                                className: D.ac,
                                innerClassName: D.bB,
                                sections: X,
                                renderRow: $,
                                rowHeight: 34,
                                renderSection: (e) => {
                                    let { section: t } = e;
                                    return 0 === t
                                        ? (0, i.jsx)(
                                              p.D,
                                              {
                                                  variant: "heading-sm/semibold",
                                                  className: r()(D.Gf, D.r6),
                                                  children: L.intl.string(L.t.OGiMXJ),
                                              },
                                              L.intl.string(L.t.OGiMXJ),
                                          )
                                        : 1 === t
                                          ? (0, i.jsx)(
                                                p.D,
                                                {
                                                    variant: "heading-sm/semibold",
                                                    className: r()(D.Gf, D.r6),
                                                    children: L.intl.string(L.t["LPJmL/"]),
                                                },
                                                L.intl.string(L.t["LPJmL/"]),
                                            )
                                          : null;
                                },
                                renderFooter: (e) => {
                                    let { section: t } = e;
                                    return 0 === t
                                        ? 0 === X[1] && X[0] > 0
                                            ? null
                                            : (0, i.jsx)("div", { className: D.Nf, children: (0, i.jsx)(_.c, {}) })
                                        : null;
                                },
                                sectionHeight: 24,
                                footerHeight: (e) => (0 === e ? (0 === X[1] && X[0] > 0 ? 0 : 32) : 0),
                                role: void 0,
                                innerRole: "listbox",
                                innerId: G,
                                innerAriaOrientation: "vertical",
                            }),
                        }),
                ],
            }),
            null != f &&
                (0, i.jsx)(h.E, { variant: "text-xs/normal", color: "text-muted", className: D.cy, children: f }),
        ],
    });
}
