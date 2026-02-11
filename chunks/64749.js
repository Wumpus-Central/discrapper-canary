l.d(t, { Ay: () => w, eW: () => I, th: () => S });
var n = l(627968),
    i = l(64700),
    s = l(503698),
    a = l.n(s),
    r = l(91871),
    o = l.n(r),
    C = l(158954),
    d = l(311907),
    c = l(397927),
    u = l(39255),
    m = l(47167),
    x = l(713654),
    h = l(915089),
    g = l(201275),
    _ = l(967144),
    H = l(657048),
    p = l(963307),
    f = l(734057),
    j = l(317525),
    v = l(994500),
    b = l(287809),
    A = l(985018),
    L = l(66163);
let N = (0, h.Ld)(),
    V = (0, h.Ld)(),
    R = "text-sm/medium";
function M(e) {
    return 1 === e.type;
}
function D(e) {
    return 0 === e.type;
}
function S(e) {
    let t = `${!e.name.includes(p.QP) ? "@" : ""}${e.name}`;
    return { tag: { type: u._.ROLE, label: t }, row: { id: e.id, display: t, type: 1, record: e } };
}
function I(e) {
    let t = (0, m.m1)(e, b.default, v.A);
    return { tag: { type: u._.CHANNEL, label: t }, row: { id: e.id, display: t, type: 0, record: e } };
}
let E = i.memo(function (e) {
    let { row: t, guildId: l, className: i } = e,
        { id: s, name: r } = t.record,
        o = (0, g.$7)({ guildId: l, roleId: s, size: 16 }),
        C = (0, d.bG)([j.A], () => j.A.getRole(l, s)),
        u = r.includes(p.QP) ? "" : "@",
        m = (0, c.rdh)(c.LU0.unsafe_rawColors.PRIMARY_300).hsl(),
        x = C?.colorString ?? m,
        h = (0, _.X_)(l, C, C?.colorStrings);
    return (0, n.jsxs)("div", {
        className: a()(L.xZ, L.ex, i),
        children: [
            (0, n.jsx)(c.WYI, { className: L.__invalid_roleDot, color: x, colors: h, background: !1, tooltip: !1 }),
            null != o ? (0, n.jsx)(H.A, { className: L.YS, ...o, enableTooltip: !1 }) : u,
            (0, n.jsx)(c.Text, { variant: R, className: L.pP, children: r }),
        ],
    });
});
function y(e) {
    let { channel: t, row: l, className: i } = e,
        s = null != t.parent_id,
        r = (0, x.gU)(t);
    return (0, n.jsxs)("div", {
        className: a()(L.xZ, L.sM, { [L.p7]: s }, i),
        children: [
            null != r && (0, n.jsx)(r, { size: "xs", color: "currentColor", className: L.p }),
            (0, n.jsx)(c.Text, { variant: t.isCategory() ? "eyebrow" : R, children: l.display }),
        ],
    });
}
function T(e, t, l) {
    return M(e)
        ? (0, n.jsx)(E, { row: e, guildId: t, className: l }, e.record.id)
        : D(e)
          ? (0, n.jsx)(y, { row: e, channel: e.record, className: l }, e.record.id)
          : null;
}
function w(e) {
    let {
            guildId: t,
            roleRows: l = [],
            channelRows: s = [],
            selectedChannelIds: r = new Set(),
            selectedRoleIds: m = new Set(),
            onChange: x,
            placeholder: h,
            helperText: g,
            className: _,
        } = e,
        H = (0, d.bG)([j.A], () => j.A.getRolesSnapshot(t)),
        p = i.useMemo(
            () =>
                (function (e, t, l) {
                    if (null == e) return {};
                    let n = {};
                    return (
                        e.forEach((e) => {
                            let t = f.A.getChannel(e);
                            null != t && (n[e] = I(t));
                        }),
                        t.forEach((e) => {
                            e in l && (n[e] = S(l[e]));
                        }),
                        n
                    );
                })(r, m, H),
            [r, m, H],
        ),
        v = i.useMemo(() => Object.keys(p), [p]),
        [b, R] = i.useState(""),
        [E, y] = i.useState(!1),
        [w, Z] = i.useState(!1),
        [U, O] = i.useState(!1),
        k = i.useRef(null),
        { refs: F, floatingStyles: B } = (0, C.uaw)({ placement: "bottom-start", offset: 0, matchReferenceWidth: !0 }),
        { sections: P, sectionCounts: G } = i.useMemo(() => {
            let e = "" !== b ? s.filter((e) => o()(b, e.display.toLocaleLowerCase())) : s,
                t = "" !== b ? l.filter((e) => o()(b, e.display.toLocaleLowerCase())) : l,
                n = [],
                i = [];
            return (n[0] = e), (i[0] = e.length), (n[1] = t), (i[1] = t.length), { sections: n, sectionCounts: i };
        }, [b, s, l]),
        q = i.useCallback(
            (e) => {
                let t = Object.values(e),
                    l = t
                        .filter((e) => {
                            let { row: t } = e;
                            return D(t);
                        })
                        .map((e) => e.row.record.id),
                    n = t
                        .filter((e) => {
                            let { row: t } = e;
                            return M(t);
                        })
                        .map((e) => e.row.record.id);
                x(new Set(l), new Set(n));
            },
            [x],
        ),
        z = () => {
            y(!1), Z(!1);
        };
    i.useEffect(() => {
        let e = setTimeout(() => {
            O(E || w);
        }, 32);
        return () => {
            clearTimeout(e);
        };
    }, [E, w]);
    let Y = (e, t, l) => {
            l.stopPropagation(), l.preventDefault(), 2 === t ? y(e) : (1 === t || y(e), Z(e));
        },
        K = i.useCallback(
            (e) => {
                let t = { ...p };
                D(e) ? (t[e.id] = I(e.record)) : M(e) && (t[e.id] = S(e.record)),
                    q(t),
                    R(""),
                    z(),
                    setTimeout(() => {
                        let e = k.current?.containerRef.current,
                            t = e?.firstChild;
                        null != t && t.scrollTo({ top: t.scrollHeight, behavior: "smooth" });
                    }, 16);
            },
            [q, p],
        ),
        Q = i.useCallback(
            (e) => {
                let { section: l, row: i } = e,
                    s = P[l][i];
                return (0, n.jsx)(
                    c.DUT,
                    {
                        className: a()(L.Xs, L.iw),
                        onClick: (e) => {
                            e.stopPropagation(), K(s);
                        },
                        children: (0, n.jsx)("div", { className: L.qd, children: T(s, t, L.Dq) }),
                    },
                    s.id,
                );
            },
            [t, K, P],
        ),
        W = i.useMemo(
            () =>
                v.map((e) => {
                    var l;
                    return (l = p[e]), { ...l.tag, label: T(l.row, t, L.yS) };
                }),
            [p, v, t],
        );
    return (0, n.jsxs)("div", {
        className: a()(L.MT, _),
        children: [
            (0, n.jsxs)("div", {
                className: L.M6,
                ref: F.setReference,
                children: [
                    (0, n.jsx)(u.A, {
                        tags: W,
                        maxHeight: 98,
                        size: u.A.Sizes.MEDIUM,
                        query: b,
                        ref: k,
                        onRemoveTag: (e) => {
                            let t = v[e],
                                { [t]: l, ...n } = p;
                            q(n), R(""), z();
                        },
                        onQueryChange: (e) => {
                            R(e.trim().toLocaleLowerCase());
                        },
                        placeholder: h ?? A.intl.string(A.t.uqHLzW),
                        sections: [v.length],
                        inputProps: {
                            "aria-labelledby": N,
                            "aria-controls": V,
                            "aria-expanded": U,
                            onFocus: (e) => Y(!0, 2, e),
                            onBlur: (e) => Y(!1, 2, e),
                        },
                    }),
                    U &&
                        (0, n.jsx)("div", {
                            ref: F.setFloating,
                            style: B,
                            className: L.Dr,
                            onFocus: (e) => Y(!0, 1, e),
                            onBlur: (e) => Y(!1, 1, e),
                            tabIndex: -1,
                            children: (0, n.jsx)(c.Eie, {
                                className: L.ac,
                                innerClassName: L.bB,
                                sections: G,
                                renderRow: Q,
                                rowHeight: 34,
                                renderSection: (e) => {
                                    let { section: t } = e;
                                    return 0 === t
                                        ? (0, n.jsx)(
                                              c.Heading,
                                              {
                                                  variant: "heading-sm/semibold",
                                                  className: a()(L.Gf, L.r6),
                                                  children: A.intl.string(A.t.OGiMXJ),
                                              },
                                              A.intl.string(A.t.OGiMXJ),
                                          )
                                        : 1 === t
                                          ? (0, n.jsx)(
                                                c.Heading,
                                                {
                                                    variant: "heading-sm/semibold",
                                                    className: a()(L.Gf, L.r6),
                                                    children: A.intl.string(A.t["LPJmL/"]),
                                                },
                                                A.intl.string(A.t["LPJmL/"]),
                                            )
                                          : null;
                                },
                                renderFooter: (e) => {
                                    let { section: t } = e;
                                    return 0 === t
                                        ? 0 === G[1] && G[0] > 0
                                            ? null
                                            : (0, n.jsx)("div", { className: L.Nf, children: (0, n.jsx)(c.cGx, {}) })
                                        : null;
                                },
                                sectionHeight: 24,
                                footerHeight: (e) => (0 === e ? (0 === G[1] && G[0] > 0 ? 0 : 32) : 0),
                                role: void 0,
                                innerRole: "listbox",
                                innerId: V,
                                innerAriaOrientation: "vertical",
                            }),
                        }),
                ],
            }),
            null != g &&
                (0, n.jsx)(c.Text, { variant: "text-xs/normal", color: "text-muted", className: L.cy, children: g }),
        ],
    });
}
