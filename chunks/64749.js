"use strict";
n.d(t, { Ay: () => k, eW: () => G, th: () => O });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(91871),
    o = n.n(a),
    d = n(158954),
    c = n(311907),
    u = n(397927),
    m = n(39255),
    g = n(47167),
    x = n(713654),
    h = n(915089),
    _ = n(201275),
    p = n(967144),
    A = n(657048),
    f = n(963307),
    j = n(734057),
    N = n(317525),
    E = n(994500),
    b = n(287809),
    T = n(985018),
    C = n(66163);
let I = (0, h.Ld)(),
    v = (0, h.Ld)(),
    S = "text-sm/medium";
function y(e) {
    return 1 === e.type;
}
function R(e) {
    return 0 === e.type;
}
function O(e) {
    let t = `${!e.name.includes(f.QP) ? "@" : ""}${e.name}`;
    return { tag: { type: m._.ROLE, label: t }, row: { id: e.id, display: t, type: 1, record: e } };
}
function G(e) {
    let t = (0, g.m1)(e, b.default, E.A);
    return { tag: { type: m._.CHANNEL, label: t }, row: { id: e.id, display: t, type: 0, record: e } };
}
let L = s.memo(function (e) {
    let { row: t, guildId: n, className: s } = e,
        { id: l, name: a } = t.record,
        o = (0, _.$7)({ guildId: n, roleId: l, size: 16 }),
        d = (0, c.bG)([N.A], () => N.A.getRole(n, l)),
        m = a.includes(f.QP) ? "" : "@",
        g = (0, u.rdh)(u.LU0.unsafe_rawColors.PRIMARY_300).hsl(),
        x = d?.colorString ?? g,
        h = (0, p.X_)(n, d, d?.colorStrings);
    return (0, i.jsxs)("div", {
        className: r()(C.xZ, C.ex, s),
        children: [
            (0, i.jsx)(u.WYI, { className: C.__invalid_roleDot, color: x, colors: h, background: !1, tooltip: !1 }),
            null != o ? (0, i.jsx)(A.A, { className: C.YS, ...o, enableTooltip: !1 }) : m,
            (0, i.jsx)(u.Text, { variant: S, className: C.pP, children: a }),
        ],
    });
});
function D(e) {
    let { channel: t, row: n, className: s } = e,
        l = null != t.parent_id,
        a = (0, x.gU)(t);
    return (0, i.jsxs)("div", {
        className: r()(C.xZ, C.sM, { [C.p7]: l }, s),
        children: [
            null != a && (0, i.jsx)(a, { size: "xs", color: "currentColor", className: C.p }),
            (0, i.jsx)(u.Text, { variant: t.isCategory() ? "eyebrow" : S, children: n.display }),
        ],
    });
}
function M(e, t, n) {
    return y(e)
        ? (0, i.jsx)(L, { row: e, guildId: t, className: n }, e.record.id)
        : R(e)
          ? (0, i.jsx)(D, { row: e, channel: e.record, className: n }, e.record.id)
          : null;
}
function k(e) {
    let {
            guildId: t,
            roleRows: n = [],
            channelRows: l = [],
            selectedChannelIds: a = new Set(),
            selectedRoleIds: g = new Set(),
            onChange: x,
            placeholder: h,
            helperText: _,
            className: p,
        } = e,
        A = (0, c.bG)([N.A], () => N.A.getRolesSnapshot(t)),
        f = s.useMemo(
            () =>
                (function (e, t, n) {
                    if (null == e) return {};
                    let i = {};
                    return (
                        e.forEach((e) => {
                            let t = j.A.getChannel(e);
                            null != t && (i[e] = G(t));
                        }),
                        t.forEach((e) => {
                            e in n && (i[e] = O(n[e]));
                        }),
                        i
                    );
                })(a, g, A),
            [a, g, A],
        ),
        E = s.useMemo(() => Object.keys(f), [f]),
        [b, S] = s.useState(""),
        [L, D] = s.useState(!1),
        [k, U] = s.useState(!1),
        [P, w] = s.useState(!1),
        B = s.useRef(null),
        { refs: F, floatingStyles: H } = (0, d.uaw)({ placement: "bottom-start", offset: 0, matchReferenceWidth: !0 }),
        { sections: V, sectionCounts: z } = s.useMemo(() => {
            let e = "" !== b ? l.filter((e) => o()(b, e.display.toLocaleLowerCase())) : l,
                t = "" !== b ? n.filter((e) => o()(b, e.display.toLocaleLowerCase())) : n,
                i = [],
                s = [];
            return (i[0] = e), (s[0] = e.length), (i[1] = t), (s[1] = t.length), { sections: i, sectionCounts: s };
        }, [b, l, n]),
        W = s.useCallback(
            (e) => {
                let t = Object.values(e),
                    n = t
                        .filter((e) => {
                            let { row: t } = e;
                            return R(t);
                        })
                        .map((e) => e.row.record.id),
                    i = t
                        .filter((e) => {
                            let { row: t } = e;
                            return y(t);
                        })
                        .map((e) => e.row.record.id);
                x(new Set(n), new Set(i));
            },
            [x],
        ),
        Y = () => {
            D(!1), U(!1);
        };
    s.useEffect(() => {
        let e = setTimeout(() => {
            w(L || k);
        }, 32);
        return () => {
            clearTimeout(e);
        };
    }, [L, k]);
    let K = (e, t, n) => {
            n.stopPropagation(), n.preventDefault(), 2 === t ? D(e) : (1 === t || D(e), U(e));
        },
        X = s.useCallback(
            (e) => {
                let t = { ...f };
                R(e) ? (t[e.id] = G(e.record)) : y(e) && (t[e.id] = O(e.record)),
                    W(t),
                    S(""),
                    Y(),
                    setTimeout(() => {
                        let e = B.current?.containerRef.current,
                            t = e?.firstChild;
                        null != t && t.scrollTo({ top: t.scrollHeight, behavior: "smooth" });
                    }, 16);
            },
            [W, f],
        ),
        J = s.useCallback(
            (e) => {
                let { section: n, row: s } = e,
                    l = V[n][s];
                return (0, i.jsx)(
                    u.DUT,
                    {
                        className: r()(C.Xs, C.iw),
                        onClick: (e) => {
                            e.stopPropagation(), X(l);
                        },
                        children: (0, i.jsx)("div", { className: C.qd, children: M(l, t, C.Dq) }),
                    },
                    l.id,
                );
            },
            [t, X, V],
        ),
        Z = s.useMemo(
            () =>
                E.map((e) => {
                    var n;
                    return (n = f[e]), { ...n.tag, label: M(n.row, t, C.yS) };
                }),
            [f, E, t],
        );
    return (0, i.jsxs)("div", {
        className: r()(C.MT, p),
        children: [
            (0, i.jsxs)("div", {
                className: C.M6,
                ref: F.setReference,
                children: [
                    (0, i.jsx)(m.A, {
                        tags: Z,
                        maxHeight: 98,
                        size: m.A.Sizes.MEDIUM,
                        query: b,
                        ref: B,
                        onRemoveTag: (e) => {
                            let t = E[e],
                                { [t]: n, ...i } = f;
                            W(i), S(""), Y();
                        },
                        onQueryChange: (e) => {
                            S(e.trim().toLocaleLowerCase());
                        },
                        placeholder: h ?? T.intl.string(T.t.uqHLzW),
                        sections: [E.length],
                        inputProps: {
                            "aria-labelledby": I,
                            "aria-controls": v,
                            "aria-expanded": P,
                            onFocus: (e) => K(!0, 2, e),
                            onBlur: (e) => K(!1, 2, e),
                        },
                    }),
                    P &&
                        (0, i.jsx)("div", {
                            ref: F.setFloating,
                            style: H,
                            className: C.Dr,
                            onFocus: (e) => K(!0, 1, e),
                            onBlur: (e) => K(!1, 1, e),
                            tabIndex: -1,
                            children: (0, i.jsx)(u.Eie, {
                                className: C.ac,
                                innerClassName: C.bB,
                                sections: z,
                                renderRow: J,
                                rowHeight: 34,
                                renderSection: (e) => {
                                    let { section: t } = e;
                                    return 0 === t
                                        ? (0, i.jsx)(
                                              u.Heading,
                                              {
                                                  variant: "heading-sm/semibold",
                                                  className: r()(C.Gf, C.r6),
                                                  children: T.intl.string(T.t.OGiMXJ),
                                              },
                                              T.intl.string(T.t.OGiMXJ),
                                          )
                                        : 1 === t
                                          ? (0, i.jsx)(
                                                u.Heading,
                                                {
                                                    variant: "heading-sm/semibold",
                                                    className: r()(C.Gf, C.r6),
                                                    children: T.intl.string(T.t["LPJmL/"]),
                                                },
                                                T.intl.string(T.t["LPJmL/"]),
                                            )
                                          : null;
                                },
                                renderFooter: (e) => {
                                    let { section: t } = e;
                                    return 0 === t
                                        ? 0 === z[1] && z[0] > 0
                                            ? null
                                            : (0, i.jsx)("div", { className: C.Nf, children: (0, i.jsx)(u.cGx, {}) })
                                        : null;
                                },
                                sectionHeight: 24,
                                footerHeight: (e) => (0 === e ? (0 === z[1] && z[0] > 0 ? 0 : 32) : 0),
                                role: void 0,
                                innerRole: "listbox",
                                innerId: v,
                                innerAriaOrientation: "vertical",
                            }),
                        }),
                ],
            }),
            null != _ &&
                (0, i.jsx)(u.Text, { variant: "text-xs/normal", color: "text-muted", className: C.cy, children: _ }),
        ],
    });
}
