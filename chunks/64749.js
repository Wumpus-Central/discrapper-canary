l.d(t, { Ay: () => w, eW: () => I, th: () => S });
var n = l(627968),
    i = l(64700),
    a = l(503698),
    s = l.n(a),
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
    b = l(994500),
    v = l(287809),
    A = l(985018),
    N = l(66163);
let L = (0, h.Ld)(),
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
    let t = (0, m.m1)(e, v.default, b.A);
    return { tag: { type: u._.CHANNEL, label: t }, row: { id: e.id, display: t, type: 0, record: e } };
}
let E = i.memo(function (e) {
    let { row: t, guildId: l, className: i } = e,
        { id: a, name: r } = t.record,
        o = (0, g.$7)({ guildId: l, roleId: a, size: 16 }),
        C = (0, d.bG)([j.A], () => j.A.getRole(l, a)),
        u = r.includes(p.QP) ? "" : "@",
        m = (0, c.rdh)(c.LU0.unsafe_rawColors.PRIMARY_300).hsl(),
        x = C?.colorString ?? m,
        h = (0, _.X_)(l, C, C?.colorStrings);
    return (0, n.jsxs)("div", {
        className: s()(N.xZ, N.ex, i),
        children: [
            (0, n.jsx)(c.WYI, { className: N.__invalid_roleDot, color: x, colors: h, background: !1, tooltip: !1 }),
            null != o ? (0, n.jsx)(H.A, { className: N.YS, ...o, enableTooltip: !1 }) : u,
            (0, n.jsx)(c.Text, { variant: R, className: N.pP, children: r }),
        ],
    });
});
function y(e) {
    let { channel: t, row: l, className: i } = e,
        a = null != t.parent_id,
        r = (0, x.gU)(t);
    return (0, n.jsxs)("div", {
        className: s()(N.xZ, N.sM, { [N.p7]: a }, i),
        children: [
            null != r && (0, n.jsx)(r, { size: "xs", color: "currentColor", className: N.p }),
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
            channelRows: a = [],
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
        b = i.useMemo(() => Object.keys(p), [p]),
        [v, R] = i.useState(""),
        [E, y] = i.useState(!1),
        [w, Z] = i.useState(!1),
        [U, O] = i.useState(!1),
        k = i.useRef(null),
        { refs: F, floatingStyles: B } = (0, C.uaw)({ placement: "bottom-start", offset: 0, matchReferenceWidth: !0 }),
        { sections: P, sectionCounts: G } = i.useMemo(() => {
            let e = "" !== v ? a.filter((e) => o()(v, e.display.toLocaleLowerCase())) : a,
                t = "" !== v ? l.filter((e) => o()(v, e.display.toLocaleLowerCase())) : l,
                n = [],
                i = [];
            return (n[0] = e), (i[0] = e.length), (n[1] = t), (i[1] = t.length), { sections: n, sectionCounts: i };
        }, [v, a, l]),
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
                    a = P[l][i];
                return (0, n.jsx)(
                    c.DUT,
                    {
                        className: s()(N.Xs, N.iw),
                        onClick: (e) => {
                            e.stopPropagation(), K(a);
                        },
                        children: (0, n.jsx)("div", { className: N.qd, children: T(a, t, N.Dq) }),
                    },
                    a.id,
                );
            },
            [t, K, P],
        ),
        W = i.useMemo(
            () =>
                b.map((e) => {
                    var l;
                    return (l = p[e]), { ...l.tag, label: T(l.row, t, N.yS) };
                }),
            [p, b, t],
        );
    return (0, n.jsxs)("div", {
        className: s()(N.MT, _),
        children: [
            (0, n.jsxs)("div", {
                className: N.M6,
                ref: F.setReference,
                children: [
                    (0, n.jsx)(u.A, {
                        tags: W,
                        maxHeight: 98,
                        size: u.A.Sizes.MEDIUM,
                        query: v,
                        ref: k,
                        onRemoveTag: (e) => {
                            let t = b[e],
                                { [t]: l, ...n } = p;
                            q(n), R(""), z();
                        },
                        onQueryChange: (e) => {
                            R(e.trim().toLocaleLowerCase());
                        },
                        placeholder: h ?? A.intl.string(A.t.uqHLzW),
                        sections: [b.length],
                        inputProps: {
                            "aria-labelledby": L,
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
                            className: N.Dr,
                            onFocus: (e) => Y(!0, 1, e),
                            onBlur: (e) => Y(!1, 1, e),
                            tabIndex: -1,
                            children: (0, n.jsx)(c.Eie, {
                                className: N.ac,
                                innerClassName: N.bB,
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
                                                  className: s()(N.Gf, N.r6),
                                                  children: A.intl.string(A.t.OGiMXJ),
                                              },
                                              A.intl.string(A.t.OGiMXJ),
                                          )
                                        : 1 === t
                                          ? (0, n.jsx)(
                                                c.Heading,
                                                {
                                                    variant: "heading-sm/semibold",
                                                    className: s()(N.Gf, N.r6),
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
                                            : (0, n.jsx)("div", { className: N.Nf, children: (0, n.jsx)(c.cGx, {}) })
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
                (0, n.jsx)(c.Text, { variant: "text-xs/normal", color: "text-muted", className: N.cy, children: g }),
        ],
    });
}
