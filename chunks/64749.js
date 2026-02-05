l.d(t, { Ay: () => T, eW: () => S, th: () => D });
var n = l(627968),
    i = l(64700),
    s = l(503698),
    a = l.n(s),
    r = l(91871),
    o = l.n(r),
    C = l(311907),
    d = l(397927),
    c = l(39255),
    u = l(47167),
    m = l(713654),
    x = l(915089),
    h = l(201275),
    g = l(967144),
    _ = l(657048),
    H = l(963307),
    p = l(734057),
    f = l(317525),
    j = l(994500),
    v = l(287809),
    b = l(985018),
    A = l(457325);
let L = (0, x.Ld)(),
    N = (0, x.Ld)(),
    V = "text-sm/medium";
function R(e) {
    return 1 === e.type;
}
function M(e) {
    return 0 === e.type;
}
function D(e) {
    let t = `${!e.name.includes(H.QP) ? "@" : ""}${e.name}`;
    return { tag: { type: c._.ROLE, label: t }, row: { id: e.id, display: t, type: 1, record: e } };
}
function S(e) {
    let t = (0, u.m1)(e, v.default, j.A);
    return { tag: { type: c._.CHANNEL, label: t }, row: { id: e.id, display: t, type: 0, record: e } };
}
let I = i.memo(function (e) {
    let { row: t, guildId: l, className: i } = e,
        { id: s, name: r } = t.record,
        o = (0, h.$7)({ guildId: l, roleId: s, size: 16 }),
        c = (0, C.bG)([f.A], () => f.A.getRole(l, s)),
        u = r.includes(H.QP) ? "" : "@",
        m = (0, d.rdh)(d.LU0.unsafe_rawColors.PRIMARY_300).hsl(),
        x = c?.colorString ?? m,
        p = (0, g.X_)(l, c, c?.colorStrings);
    return (0, n.jsxs)("div", {
        className: a()(A.xZ, A.ex, i),
        children: [
            (0, n.jsx)(d.WYI, { className: A.__invalid_roleDot, color: x, colors: p, background: !1, tooltip: !1 }),
            null != o ? (0, n.jsx)(_.A, { className: A.YS, ...o, enableTooltip: !1 }) : u,
            (0, n.jsx)(d.Text, { variant: V, className: A.pP, children: r }),
        ],
    });
});
function E(e) {
    let { channel: t, row: l, className: i } = e,
        s = null != t.parent_id,
        r = (0, m.gU)(t);
    return (0, n.jsxs)("div", {
        className: a()(A.xZ, A.sM, { [A.p7]: s }, i),
        children: [
            null != r && (0, n.jsx)(r, { size: "xs", color: "currentColor", className: A.p }),
            (0, n.jsx)(d.Text, { variant: t.isCategory() ? "eyebrow" : V, children: l.display }),
        ],
    });
}
function y(e, t, l) {
    return R(e)
        ? (0, n.jsx)(I, { row: e, guildId: t, className: l }, e.record.id)
        : M(e)
          ? (0, n.jsx)(E, { row: e, channel: e.record, className: l }, e.record.id)
          : null;
}
function T(e) {
    let {
            guildId: t,
            roleRows: l = [],
            channelRows: s = [],
            selectedChannelIds: r = new Set(),
            selectedRoleIds: u = new Set(),
            onChange: m,
            placeholder: x,
            helperText: h,
            className: g,
        } = e,
        _ = (0, C.bG)([f.A], () => f.A.getRolesSnapshot(t)),
        H = i.useMemo(
            () =>
                (function (e, t, l) {
                    if (null == e) return {};
                    let n = {};
                    return (
                        e.forEach((e) => {
                            let t = p.A.getChannel(e);
                            null != t && (n[e] = S(t));
                        }),
                        t.forEach((e) => {
                            e in l && (n[e] = D(l[e]));
                        }),
                        n
                    );
                })(r, u, _),
            [r, u, _],
        ),
        j = i.useMemo(() => Object.keys(H), [H]),
        [v, V] = i.useState(""),
        [I, E] = i.useState(!1),
        [T, w] = i.useState(!1),
        [Z, U] = i.useState(!1),
        O = i.useRef(null),
        { sections: k, sectionCounts: F } = i.useMemo(() => {
            let e = "" !== v ? s.filter((e) => o()(v, e.display.toLocaleLowerCase())) : s,
                t = "" !== v ? l.filter((e) => o()(v, e.display.toLocaleLowerCase())) : l,
                n = [],
                i = [];
            return (n[0] = e), (i[0] = e.length), (n[1] = t), (i[1] = t.length), { sections: n, sectionCounts: i };
        }, [v, s, l]),
        B = i.useCallback(
            (e) => {
                let t = Object.values(e),
                    l = t
                        .filter((e) => {
                            let { row: t } = e;
                            return M(t);
                        })
                        .map((e) => e.row.record.id),
                    n = t
                        .filter((e) => {
                            let { row: t } = e;
                            return R(t);
                        })
                        .map((e) => e.row.record.id);
                m(new Set(l), new Set(n));
            },
            [m],
        ),
        P = () => {
            E(!1), w(!1);
        };
    i.useEffect(() => {
        let e = setTimeout(() => {
            U(I || T);
        }, 32);
        return () => {
            clearTimeout(e);
        };
    }, [I, T]);
    let G = (e, t, l) => {
            l.stopPropagation(), l.preventDefault(), 2 === t ? E(e) : (1 === t || E(e), w(e));
        },
        q = i.useCallback(
            (e) => {
                let t = { ...H };
                M(e) ? (t[e.id] = S(e.record)) : R(e) && (t[e.id] = D(e.record)),
                    B(t),
                    V(""),
                    P(),
                    setTimeout(() => {
                        let e = O.current?.containerRef.current,
                            t = e?.firstChild;
                        null != t && t.scrollTo({ top: t.scrollHeight, behavior: "smooth" });
                    }, 16);
            },
            [B, H],
        ),
        z = i.useCallback(
            (e) => {
                let { section: l, row: i } = e,
                    s = k[l][i];
                return (0, n.jsx)(
                    d.DUT,
                    {
                        className: a()(A.Xs, A.iw),
                        onClick: (e) => {
                            e.stopPropagation(), q(s);
                        },
                        children: (0, n.jsx)("div", { className: A.qd, children: y(s, t, A.Dq) }),
                    },
                    s.id,
                );
            },
            [t, q, k],
        ),
        Y = i.useMemo(
            () =>
                j.map((e) => {
                    var l;
                    return (l = H[e]), { ...l.tag, label: y(l.row, t, A.yS) };
                }),
            [H, j, t],
        );
    return (0, n.jsxs)("div", {
        className: a()(A.MT, g),
        children: [
            (0, n.jsxs)("div", {
                className: A.M6,
                children: [
                    (0, n.jsx)(c.A, {
                        tags: Y,
                        maxHeight: 98,
                        size: c.A.Sizes.MEDIUM,
                        query: v,
                        ref: O,
                        onRemoveTag: (e) => {
                            let t = j[e],
                                { [t]: l, ...n } = H;
                            B(n), V(""), P();
                        },
                        onQueryChange: (e) => {
                            V(e.trim().toLocaleLowerCase());
                        },
                        placeholder: x ?? b.intl.string(b.t.uqHLzW),
                        sections: [j.length],
                        inputProps: {
                            "aria-labelledby": L,
                            "aria-controls": N,
                            "aria-expanded": Z,
                            onFocus: (e) => G(!0, 2, e),
                            onBlur: (e) => G(!1, 2, e),
                        },
                    }),
                    Z &&
                        (0, n.jsx)("div", {
                            className: A.Dr,
                            onFocus: (e) => G(!0, 1, e),
                            onBlur: (e) => G(!1, 1, e),
                            tabIndex: -1,
                            children: (0, n.jsx)(d.Eie, {
                                className: A.ac,
                                innerClassName: A.bB,
                                sections: F,
                                renderRow: z,
                                rowHeight: 34,
                                renderSection: (e) => {
                                    let { section: t } = e;
                                    return 0 === t
                                        ? (0, n.jsx)(
                                              d.Heading,
                                              {
                                                  variant: "heading-sm/semibold",
                                                  className: a()(A.Gf, A.r6),
                                                  children: b.intl.string(b.t.OGiMXJ),
                                              },
                                              b.intl.string(b.t.OGiMXJ),
                                          )
                                        : 1 === t
                                          ? (0, n.jsx)(
                                                d.Heading,
                                                {
                                                    variant: "heading-sm/semibold",
                                                    className: a()(A.Gf, A.r6),
                                                    children: b.intl.string(b.t["LPJmL/"]),
                                                },
                                                b.intl.string(b.t["LPJmL/"]),
                                            )
                                          : null;
                                },
                                renderFooter: (e) => {
                                    let { section: t } = e;
                                    return 0 === t
                                        ? 0 === F[1] && F[0] > 0
                                            ? null
                                            : (0, n.jsx)("div", { className: A.Nf, children: (0, n.jsx)(d.cGx, {}) })
                                        : null;
                                },
                                sectionHeight: 24,
                                footerHeight: (e) => (0 === e ? (0 === F[1] && F[0] > 0 ? 0 : 32) : 0),
                                role: void 0,
                                innerRole: "listbox",
                                innerId: N,
                                innerAriaOrientation: "vertical",
                            }),
                        }),
                ],
            }),
            null != h &&
                (0, n.jsx)(d.Text, { variant: "text-xs/normal", color: "text-muted", className: A.cy, children: h }),
        ],
    });
}
