r.d(t, { default: () => k }), r(388685), r(781311);
var n = r(255367),
    o = r(73800),
    a = r(442837),
    i = r(257465),
    l = r(369585),
    s = r(103866),
    b = r(37148),
    u = r(794433),
    c = r(185413),
    d = r(971628),
    m = r(892880),
    _ = r(51144),
    f = r(480608),
    p = r(434404),
    y = r(946724),
    g = r(130341),
    h = r(494831),
    v = r(71080),
    w = r(388032),
    x = r(98678);
function O(e) {
    var t = (function (e, t) {
        if ("object" !== S(e) || null === e) return e;
        var r = e[Symbol.toPrimitive];
        if (void 0 !== r) {
            var n = r.call(e, t || "default");
            if ("object" !== S(n)) return n;
            throw TypeError("@@toPrimitive must return a primitive value.");
        }
        return ("string" === t ? String : Number)(e);
    })(e, "string");
    return "symbol" === S(t) ? t : String(t);
}
function S(e) {
    return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e;
}
function k(e) {
    let { transitionState: t, onClose: r, roleId: S, guildId: k } = e,
        R = (0, a.e7)([y.Z], () => y.Z.getRole(S), [S]),
        [j, C] = o.useState(""),
        [M, T] = o.useState({}),
        [L, P] = o.useState(!1);
    o.useEffect(() => {
        m.Z.requestMembers(k, j.trim().toLowerCase(), g._4);
    }, [k, j]);
    let E = o.useCallback((e) => !e.roles.includes(S), [S]),
        B = (0, g.lJ)(k, E),
        I = o.useMemo(() => B.filter((e) => (0, g.eg)(j, e)), [j, B]),
        Z = o.useCallback(async () => {
            let e = Object.values(M).map((e) => e.row.id);
            P(!0);
            try {
                await p.Z.bulkAddMemberRoles(k, S, e), (0, f.H)(k, S, !1), r();
            } catch (e) {
                P(!1);
            }
        }, [k, S, M, r]),
        q = o.useCallback((e) => {
            T((t) => {
                let r = (function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var r = null != arguments[t] ? arguments[t] : {},
                                n = Object.keys(r);
                            "function" == typeof Object.getOwnPropertySymbols &&
                                (n = n.concat(
                                    Object.getOwnPropertySymbols(r).filter(function (e) {
                                        return Object.getOwnPropertyDescriptor(r, e).enumerable;
                                    }),
                                )),
                                n.forEach(function (t) {
                                    var n;
                                    (n = r[t]),
                                        t in e
                                            ? Object.defineProperty(e, t, {
                                                  value: n,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0,
                                              })
                                            : (e[t] = n);
                                });
                        }
                        return e;
                    })({}, t),
                    n = (0, d.G)(e);
                return (
                    n in r
                        ? delete r[n]
                        : (r[n] = {
                              display: {
                                  type: u.F.MEMBER,
                                  label: e.name,
                                  avatar: e.avatarURL,
                              },
                              row: e,
                          }),
                    r
                );
            });
        }, []),
        U = o.useCallback((e) => {
            T((t) => {
                let { [e]: r } = t;
                return (function (e, t) {
                    if (null == e) return {};
                    var r,
                        n,
                        o = (function (e, t) {
                            if (null == e) return {};
                            var r,
                                n,
                                o = {},
                                a = Object.keys(e);
                            for (n = 0; n < a.length; n++) (r = a[n]), t.indexOf(r) >= 0 || (o[r] = e[r]);
                            return o;
                        })(e, t);
                    if (Object.getOwnPropertySymbols) {
                        var a = Object.getOwnPropertySymbols(e);
                        for (n = 0; n < a.length; n++)
                            (r = a[n]),
                                !(t.indexOf(r) >= 0) &&
                                    Object.prototype.propertyIsEnumerable.call(e, r) &&
                                    (o[r] = e[r]);
                    }
                    return o;
                })(t, [e].map(O));
            });
        }, []),
        A = o.useMemo(
            () =>
                I.map((e) => {
                    var t;
                    let r = _.ZP.getUserTag(e.user);
                    return {
                        rowType: v.aC.MEMBER,
                        name: null != (t = e.name) ? t : r,
                        nickname: e.name,
                        username: r,
                        id: e.id,
                        avatarURL: e.avatarURL,
                        bot: e.bot,
                        verifiedBot: e.verifiedBot,
                        disabled: !1,
                        key: e.id,
                    };
                }),
            [I],
        ),
        H = o.useMemo(() => Object.keys(M).length, [M]),
        N = [
            {
                text: w.intl.string(w.t["ETE/oK"]),
                variant: "secondary",
                onClick: r,
            },
            {
                text: w.intl.string(w.t.OYkgVl),
                variant: "primary",
                onClick: Z,
                loading: L,
                disabled: 0 === H || H > h.ey,
            },
        ];
    return (0, n.jsxs)(i.I, {
        onClose: r,
        transitionState: t,
        children: [
            (0, n.jsx)(b.x, {
                title: w.intl.string(w.t["ZYOK4+"]),
                subtitle:
                    null != R
                        ? w.intl.format(w.t["qP+nub"], {
                              numMembers: h.ey,
                              roleName: R.name,
                          })
                        : w.intl.format(w.t["3OxP4u"], { numMembers: h.ey }),
                alignCenter: !0,
                titleTextVariant: "heading-xl/semibold",
            }),
            (0, n.jsx)(s.f, {
                children: (0, n.jsx)(c.t, {
                    listClassName: x.list,
                    pendingAdditions: M,
                    query: j,
                    onQueryChange: C,
                    onClickRow: q,
                    onRemovePendingAddition: U,
                    roles: [],
                    members: A,
                    placeholderText: w.intl.string(w.t.vMiCaW),
                    renderEmptyText: (e) => w.intl.format(w.t.eq8a8f, { query: e }),
                }),
            }),
            (0, n.jsx)(l.G, { actions: N }),
        ],
    });
}
