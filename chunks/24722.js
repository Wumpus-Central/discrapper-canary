r.d(t, { default: () => w }), r(388685), r(781311);
var n = r(255367),
    i = r(73800),
    a = r(442837),
    l = r(257465),
    o = r(369585),
    s = r(103866),
    u = r(37148),
    c = r(794433),
    b = r(185413),
    m = r(971628),
    f = r(892880),
    d = r(51144),
    y = r(480608),
    p = r(434404),
    g = r(946724),
    v = r(130341),
    O = r(494831),
    j = r(71080),
    k = r(388032),
    h = r(138875);
function x(e) {
    var t = (function (e, t) {
        if ("object" !== C(e) || null === e) return e;
        var r = e[Symbol.toPrimitive];
        if (void 0 !== r) {
            var n = r.call(e, t || "default");
            if ("object" !== C(n)) return n;
            throw TypeError("@@toPrimitive must return a primitive value.");
        }
        return ("string" === t ? String : Number)(e);
    })(e, "string");
    return "symbol" === C(t) ? t : String(t);
}
function C(e) {
    return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e;
}
function w(e) {
    let { transitionState: t, onClose: r, roleId: C, guildId: w } = e,
        S = (0, a.e7)([g.Z], () => g.Z.getRole(C), [C]),
        [M, P] = i.useState(""),
        [E, R] = i.useState({}),
        [T, Z] = i.useState(!1);
    i.useEffect(() => {
        f.Z.requestMembers(w, M.trim().toLowerCase(), v._4);
    }, [w, M]);
    let _ = i.useCallback((e) => !e.roles.includes(C), [C]),
        q = (0, v.lJ)(w, _),
        B = i.useMemo(() => q.filter((e) => (0, v.eg)(M, e)), [M, q]),
        L = i.useCallback(async () => {
            let e = Object.values(E).map((e) => e.row.id);
            Z(!0);
            try {
                await p.Z.bulkAddMemberRoles(w, C, e), (0, y.H)(w, C, !1), r();
            } catch (e) {
                Z(!1);
            }
        }, [w, C, E, r]),
        U = i.useCallback((e) => {
            R((t) => {
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
                    n = (0, m.G)(e);
                return (
                    n in r
                        ? delete r[n]
                        : (r[n] = {
                              display: {
                                  type: c.F.MEMBER,
                                  label: e.name,
                                  avatar: e.avatarURL,
                              },
                              row: e,
                          }),
                    r
                );
            });
        }, []),
        A = i.useCallback((e) => {
            R((t) => {
                let { [e]: r } = t;
                return (function (e, t) {
                    if (null == e) return {};
                    var r,
                        n,
                        i = (function (e, t) {
                            if (null == e) return {};
                            var r,
                                n,
                                i = {},
                                a = Object.keys(e);
                            for (n = 0; n < a.length; n++) (r = a[n]), t.indexOf(r) >= 0 || (i[r] = e[r]);
                            return i;
                        })(e, t);
                    if (Object.getOwnPropertySymbols) {
                        var a = Object.getOwnPropertySymbols(e);
                        for (n = 0; n < a.length; n++)
                            (r = a[n]),
                                !(t.indexOf(r) >= 0) &&
                                    Object.prototype.propertyIsEnumerable.call(e, r) &&
                                    (i[r] = e[r]);
                    }
                    return i;
                })(t, [e].map(x));
            });
        }, []),
        N = i.useMemo(
            () =>
                B.map((e) => {
                    var t;
                    let r = d.ZP.getUserTag(e.user);
                    return {
                        rowType: j.aC.MEMBER,
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
            [B],
        ),
        G = i.useMemo(() => Object.keys(E).length, [E]),
        I = [
            {
                text: k.intl.string(k.t["ETE/oK"]),
                variant: "secondary",
                onClick: r,
            },
            {
                text: k.intl.string(k.t.OYkgVl),
                variant: "primary",
                onClick: L,
                loading: T,
                disabled: 0 === G || G > O.ey,
            },
        ];
    return (0, n.jsxs)(l.I, {
        onClose: r,
        transitionState: t,
        children: [
            (0, n.jsx)(u.x, {
                title: k.intl.string(k.t["ZYOK4+"]),
                subtitle:
                    null != S
                        ? k.intl.format(k.t["qP+nub"], {
                              numMembers: O.ey,
                              roleName: S.name,
                          })
                        : k.intl.format(k.t["3OxP4u"], { numMembers: O.ey }),
                alignCenter: !0,
                titleTextVariant: "heading-xl/semibold",
            }),
            (0, n.jsx)(s.f, {
                children: (0, n.jsx)(b.t, {
                    listClassName: h.list,
                    pendingAdditions: E,
                    query: M,
                    onQueryChange: P,
                    onClickRow: U,
                    onRemovePendingAddition: A,
                    roles: [],
                    members: N,
                    placeholderText: k.intl.string(k.t.vMiCaW),
                    renderEmptyText: (e) => k.intl.format(k.t.eq8a8f, { query: e }),
                }),
            }),
            (0, n.jsx)(o.G, { actions: I }),
        ],
    });
}
