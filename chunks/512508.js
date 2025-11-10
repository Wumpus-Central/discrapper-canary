n.d(t, {
    PM: () => V,
    WG: () => I,
    ZP: () => k,
}),
    n(388685),
    n(781311);
var r = n(951288),
    l = n(647438),
    i = n(120356),
    o = n.n(i),
    a = n(658722),
    s = n.n(a),
    c = n(442837),
    u = n(481060),
    d = n(794433),
    C = n(933557),
    m = n(471445),
    b = n(313201),
    p = n(518738),
    f = n(884902),
    h = n(48950),
    g = n(439170),
    j = n(592125),
    x = n(485386),
    v = n(699516),
    y = n(594174),
    O = n(388032),
    H = n(9226);
function _(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function w(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function S(e) {
    var t = (function (e, t) {
        if ("object" !== Z(e) || null === e) return e;
        var n = e[Symbol.toPrimitive];
        if (void 0 !== n) {
            var r = n.call(e, t || "default");
            if ("object" !== Z(r)) return r;
            throw TypeError("@@toPrimitive must return a primitive value.");
        }
        return ("string" === t ? String : Number)(e);
    })(e, "string");
    return "symbol" === Z(t) ? t : String(t);
}
function Z(e) {
    return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e;
}
let D = (0, b.hQ)(),
    N = (0, b.hQ)(),
    R = "text-sm/medium";
function L(e) {
    return 1 === e.type;
}
function P(e) {
    return 0 === e.type;
}
function I(e) {
    let t = "".concat(!e.name.includes(g.CR) ? "@" : "").concat(e.name);
    return {
        tag: {
            type: d.F.ROLE,
            label: t,
        },
        row: {
            id: e.id,
            display: t,
            type: 1,
            record: e,
        },
    };
}
function V(e) {
    let t = (0, C.F6)(e, y.default, v.Z);
    return {
        tag: {
            type: d.F.CHANNEL,
            label: t,
        },
        row: {
            id: e.id,
            display: t,
            type: 0,
            record: e,
        },
    };
}
let M = l.memo(function (e) {
    var t;
    let { row: n, guildId: l, className: i } = e,
        { id: a, name: s } = n.record,
        d = (0, p.p9)({
            guildId: l,
            roleId: a,
            size: 16,
        }),
        C = (0, c.e7)([x.Z], () => x.Z.getRole(l, a)),
        m = s.includes(g.CR) ? "" : "@",
        b = (0, u.dQu)(u.TVs.unsafe_rawColors.PRIMARY_300).hsl(),
        j = null != (t = null == C ? void 0 : C.colorString) ? t : b,
        v = (0, f._f)(l, C, null == C ? void 0 : C.colorStrings);
    return (0, r.jsxs)("div", {
        className: o()(H.rowLabel, H.roleTagContainer, i),
        children: [
            (0, r.jsx)(u.FhE, {
                className: H.__invalid_roleDot,
                color: j,
                colors: v,
                background: !1,
                tooltip: !1,
            }),
            null != d ? (0, r.jsx)(h.Z, w(_({ className: H.roleTagIcon }, d), { enableTooltip: !1 })) : m,
            (0, r.jsx)(u.Text, {
                variant: R,
                className: H.roleTagLabel,
                children: s,
            }),
        ],
    });
});
function E(e) {
    let { channel: t, row: n, className: l } = e,
        i = null != t.parent_id,
        a = (0, m.KS)(t);
    return (0, r.jsxs)("div", {
        className: o()(H.rowLabel, H.channelLabel, { [H.hasParent]: i }, l),
        children: [
            null != a &&
                (0, r.jsx)(a, {
                    size: "xs",
                    color: "currentColor",
                    className: H.channelIcon,
                }),
            (0, r.jsx)(u.Text, {
                variant: t.isCategory() ? "eyebrow" : R,
                children: n.display,
            }),
        ],
    });
}
function T(e, t, n) {
    return L(e)
        ? (0, r.jsx)(
              M,
              {
                  row: e,
                  guildId: t,
                  className: n,
              },
              e.record.id,
          )
        : P(e)
          ? (0, r.jsx)(
                E,
                {
                    row: e,
                    channel: e.record,
                    className: n,
                },
                e.record.id,
            )
          : null;
}
function k(e) {
    let {
            guildId: t,
            roleRows: n = [],
            channelRows: i = [],
            selectedChannelIds: a = new Set(),
            selectedRoleIds: C = new Set(),
            onChange: m,
            placeholder: b,
            helperText: p,
            className: f,
        } = e,
        h = (0, c.e7)([x.Z], () => x.Z.getRolesSnapshot(t)),
        g = l.useMemo(
            () =>
                (function (e, t, n) {
                    if (null == e) return {};
                    let r = {};
                    return (
                        e.forEach((e) => {
                            let t = j.Z.getChannel(e);
                            null != t && (r[e] = V(t));
                        }),
                        t.forEach((e) => {
                            e in n && (r[e] = I(n[e]));
                        }),
                        r
                    );
                })(a, C, h),
            [a, C, h],
        ),
        v = l.useMemo(() => Object.keys(g), [g]),
        [y, Z] = l.useState(""),
        [R, M] = l.useState(!1),
        [E, k] = l.useState(!1),
        [A, U] = l.useState(!1),
        F = l.useRef(null),
        { sections: B, sectionCounts: q } = l.useMemo(() => {
            let e = "" !== y ? i.filter((e) => s()(y, e.display.toLocaleLowerCase())) : i,
                t = "" !== y ? n.filter((e) => s()(y, e.display.toLocaleLowerCase())) : n,
                r = [],
                l = [];
            return (
                (r[0] = e),
                (l[0] = e.length),
                (r[1] = t),
                (l[1] = t.length),
                {
                    sections: r,
                    sectionCounts: l,
                }
            );
        }, [y, i, n]),
        G = l.useCallback(
            (e) => {
                let t = Object.values(e),
                    n = t
                        .filter((e) => {
                            let { row: t } = e;
                            return P(t);
                        })
                        .map((e) => e.row.record.id),
                    r = t
                        .filter((e) => {
                            let { row: t } = e;
                            return L(t);
                        })
                        .map((e) => e.row.record.id);
                m(new Set(n), new Set(r));
            },
            [m],
        ),
        z = () => {
            M(!1), k(!1);
        };
    l.useEffect(() => {
        let e = setTimeout(() => {
            U(R || E);
        }, 32);
        return () => {
            clearTimeout(e);
        };
    }, [R, E]);
    let Y = (e, t, n) => {
            n.stopPropagation(), n.preventDefault(), 2 === t ? M(e) : (1 === t || M(e), k(e));
        },
        W = l.useCallback(
            (e) => {
                let t = _({}, g);
                P(e) ? (t[e.id] = V(e.record)) : L(e) && (t[e.id] = I(e.record)),
                    G(t),
                    Z(""),
                    z(),
                    setTimeout(() => {
                        var e;
                        let t = null == (e = F.current) ? void 0 : e.containerRef.current,
                            n = null == t ? void 0 : t.firstChild;
                        null != n &&
                            n.scrollTo({
                                top: n.scrollHeight,
                                behavior: "smooth",
                            });
                    }, 16);
            },
            [G, g],
        ),
        Q = l.useCallback(
            (e) => {
                let { section: n, row: l } = e,
                    i = B[n][l];
                return (0, r.jsx)(
                    u.P3F,
                    {
                        className: o()(H.selectableSearchRow, H.rowHeight),
                        onClick: (e) => {
                            e.stopPropagation(), W(i);
                        },
                        children: (0, r.jsx)("div", {
                            className: H.rowContainer,
                            children: T(i, t, H.searchRowLabel),
                        }),
                    },
                    i.id,
                );
            },
            [t, W, B],
        ),
        K = l.useMemo(
            () =>
                v.map((e) => {
                    var n;
                    return (n = g[e]), w(_({}, n.tag), { label: T(n.row, t, H.noIndent) });
                }),
            [g, v, t],
        );
    return (0, r.jsxs)("div", {
        className: o()(H.searchContainer, f),
        children: [
            (0, r.jsxs)("div", {
                className: H.searchBox,
                children: [
                    (0, r.jsx)(d.Z, {
                        tags: K,
                        maxHeight: 98,
                        size: d.Z.Sizes.MEDIUM,
                        query: y,
                        ref: F,
                        onRemoveTag: (e) => {
                            let t = v[e],
                                { [t]: n } = g;
                            G(
                                (function (e, t) {
                                    if (null == e) return {};
                                    var n,
                                        r,
                                        l = (function (e, t) {
                                            if (null == e) return {};
                                            var n,
                                                r,
                                                l = {},
                                                i = Object.keys(e);
                                            for (r = 0; r < i.length; r++)
                                                (n = i[r]), t.indexOf(n) >= 0 || (l[n] = e[n]);
                                            return l;
                                        })(e, t);
                                    if (Object.getOwnPropertySymbols) {
                                        var i = Object.getOwnPropertySymbols(e);
                                        for (r = 0; r < i.length; r++)
                                            (n = i[r]),
                                                !(t.indexOf(n) >= 0) &&
                                                    Object.prototype.propertyIsEnumerable.call(e, n) &&
                                                    (l[n] = e[n]);
                                    }
                                    return l;
                                })(g, [t].map(S)),
                            ),
                                Z(""),
                                z();
                        },
                        onQueryChange: (e) => {
                            Z(e.trim().toLocaleLowerCase());
                        },
                        placeholder: null != b ? b : O.intl.string(O.t.uqHLzW),
                        sections: [v.length],
                        inputProps: {
                            "aria-labelledby": D,
                            "aria-controls": N,
                            "aria-expanded": A,
                            onFocus: (e) => Y(!0, 2, e),
                            onBlur: (e) => Y(!1, 2, e),
                        },
                    }),
                    A &&
                        (0, r.jsx)("div", {
                            className: H.resultsListParent,
                            onFocus: (e) => Y(!0, 1, e),
                            onBlur: (e) => Y(!1, 1, e),
                            tabIndex: -1,
                            children: (0, r.jsx)(u._2F, {
                                className: H.resultsListContainer,
                                innerClassName: H.resultsList,
                                sections: q,
                                renderRow: Q,
                                rowHeight: 34,
                                renderSection: (e) => {
                                    let { section: t } = e;
                                    return 0 === t
                                        ? (0, r.jsx)(
                                              u.Heading,
                                              {
                                                  variant: "heading-sm/semibold",
                                                  className: o()(H.sectionTitle, H.sectionHeight),
                                                  children: O.intl.string(O.t.OGiMXJ),
                                              },
                                              O.intl.string(O.t.OGiMXJ),
                                          )
                                        : 1 === t
                                          ? (0, r.jsx)(
                                                u.Heading,
                                                {
                                                    variant: "heading-sm/semibold",
                                                    className: o()(H.sectionTitle, H.sectionHeight),
                                                    children: O.intl.string(O.t["LPJmL/"]),
                                                },
                                                O.intl.string(O.t["LPJmL/"]),
                                            )
                                          : null;
                                },
                                renderFooter: (e) => {
                                    let { section: t } = e;
                                    return 0 === t
                                        ? 0 === q[1] && q[0] > 0
                                            ? null
                                            : (0, r.jsx)("div", {
                                                  className: H.sectionFooter,
                                                  children: (0, r.jsx)(u.izJ, {}),
                                              })
                                        : null;
                                },
                                sectionHeight: 24,
                                footerHeight: (e) => (0 === e ? (0 === q[1] && q[0] > 0 ? 0 : 32) : 0),
                                role: void 0,
                                innerRole: "listbox",
                                innerId: N,
                                innerAriaOrientation: "vertical",
                            }),
                        }),
                ],
            }),
            null != p &&
                (0, r.jsx)(u.Text, {
                    variant: "text-xs/normal",
                    color: "text-muted",
                    className: H.helperText,
                    children: p,
                }),
        ],
    });
}
