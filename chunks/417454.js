r.d(t, {
    Ay: () => z,
    b_: () => H,
}),
    r(896048),
    r(638769),
    r(65821);
var n = r(627968),
    l = r(64700),
    i = r(503698),
    o = r.n(i),
    s = r(284009),
    a = r.n(s),
    c = r(835245),
    u = r(837381),
    d = r(884362),
    E = r(317097),
    f = r(311907),
    p = r(827734),
    _ = r(397927),
    O = r(442433),
    h = r(686956),
    S = r(456412),
    g = r(775602),
    y = r(63104),
    C = r(235986),
    b = r(915089),
    m = r(201275),
    A = r(997509),
    R = r(967144),
    I = r(657048),
    j = r(1659),
    D = r(465738),
    v = r(34457),
    T = r(696451),
    x = r(317525),
    G = r(576705),
    w = r(287809),
    F = r(488926),
    N = r(652215),
    U = r(985018),
    P = r(702632);

function L(e) {
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
}

function M(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var r = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(e);
                      r.push.apply(r, n);
                  }
                  return r;
              })(Object(t)).forEach(function (r) {
                  Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
              }),
        e
    );
}

function k(e, t) {
    if (null == e) return {};
    var r,
        n,
        l,
        i = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (l = 0, r = Reflect.ownKeys(e); l < r.length; l++)
            (n = r[l]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
        return i;
    }
    if (
        ((i = (function (e, t) {
            if (null == e) return {};
            var r,
                n,
                l = {},
                i = Object.getOwnPropertyNames(e);
            for (n = 0; n < i.length; n++)
                (r = i[n]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
            return l;
        })(e, t)),
        Object.getOwnPropertySymbols)
    )
        for (l = 0, r = Object.getOwnPropertySymbols(e); l < r.length; l++)
            (n = r[l]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}
let K = () => Promise.resolve();

function V(e) {
    let { userRoleIds: t, position: r } = e,
        l = k(e, ["userRoleIds", "position"]),
        i = (0, b.GV)();
    return (0, n.jsxs)(_.lGe, {
        className: o()(P.Jo, {
            [P.Vf]: "bottom" === r,
            [P.vy]: "top" === r,
        }),
        "aria-labelledby": i,
        children: [
            (0, n.jsx)("div", {
                className: P.rF,
                children: (0, n.jsx)("div", {
                    className: P.QG,
                }),
            }),
            (0, n.jsxs)(C.A, {
                className: P.q0,
                align: C.A.Align.CENTER,
                children: [
                    (0, n.jsx)(_.iFK, {
                        size: "xs",
                        color: p.A.unsafe_rawColors.PRIMARY_400.css,
                        className: P.LP,
                    }),
                    (0, n.jsx)("div", {
                        className: P.VT,
                        id: i,
                        children: U.intl.format(U.t.PCs0oo, {
                            numRoles: t.length,
                        }),
                    }),
                ],
            }),
            (0, n.jsx)(
                B,
                M(L({}, l), {
                    wrap: !0,
                    userRoleIds: t,
                }),
            ),
        ],
    });
}
let H = l.forwardRef(function (e, t) {
    var i, s, a;
    let c,
        {
            canRemove: d,
            className: h,
            role: S,
            onRemove: C,
            guildId: b,
            disableBorderColor: A,
            onMouseDown: j,
            guild: D,
        } = e,
        v = (0, u.rm)(S.id),
        { tabIndex: T } = v,
        x = k(v, ["tabIndex"]),
        G = (0, m.$7)({
            roleId: S.id,
            size: 16,
            guildId: b,
            role: S,
            guild: D,
        }),
        w = (0, f.bG)([g.A], () => g.A.roleStyle),
        F = (0, R.X_)(b, void 0, S.colorStrings),
        N = (null == (a = S.tags) ? void 0 : a.guild_connections) === null,
        K = l.useCallback(
            (e) => {
                (0, O.L3)(e, async () => {
                    let { default: e } = await r.e("15687").then(r.bind(r, 646938));
                    return (t) =>
                        (0, n.jsx)(
                            e,
                            M(L({}, t), {
                                id: S.id,
                                label: U.intl.string(U.t.sMsaLg),
                            }),
                        );
                });
            },
            [S.id],
        ),
        V = (0, _.rdh)(p.A.unsafe_rawColors.PRIMARY_300).hsl(),
        H = null != (i = S.colorString) ? i : V,
        Y = null != (s = (0, E.xp)(H, 0.6)) ? s : void 0,
        W = p.A.unsafe_rawColors.WHITE.css,
        B = (0, E.LX)(H);
    null != B && 0.3 > (0, E.OK)(B) && (W = p.A.unsafe_rawColors.PRIMARY_630.css),
        (c = N
            ? (0, n.jsx)(y.A, {
                  className: P.U4,
                  iconClassName: d ? P.gD : void 0,
                  color: H,
                  size: 14,
              })
            : "dot" === w
              ? (0, n.jsx)(_.WYI, {
                    className: P.m4,
                    color: H,
                    colors: F,
                    background: !1,
                    tooltip: !1,
                })
              : (0, n.jsx)(_.RYH, {
                    color: H,
                    colors: F,
                }));
    let J = l.useMemo(() => {
        var t;
        return L(
            {
                borderColor: A ? void 0 : Y,
            },
            null != (t = e.style) ? t : {},
        );
    }, [Y, A, e.style]);
    return (0, n.jsx)(_.vN3, {
        children: (0, n.jsxs)(
            "div",
            M(
                L(
                    {
                        ref: t,
                        className: o()(P.JC, h),
                        style: J,
                        onContextMenu: K,
                        onMouseDown: j,
                        "aria-label": S.name,
                        tabIndex: T,
                    },
                    x,
                ),
                {
                    children: [
                        (0, n.jsxs)(_.DUT, {
                            className: o()(d && P.jH, P.j1),
                            onClick: d ? C : void 0,
                            tabIndex: d ? T : -1,
                            focusProps: {
                                focusClassName: P.vZ,
                            },
                            "aria-hidden": !d,
                            "aria-label": U.intl.formatToPlainString(U.t.QrxwhY, {
                                roleName: S.name,
                            }),
                            children: [
                                c,
                                d
                                    ? (0, n.jsx)(_.PGe, {
                                          size: "md",
                                          color: W,
                                          className: P.s$,
                                          "aria-hidden": !0,
                                      })
                                    : null,
                            ],
                        }),
                        null != G
                            ? (0, n.jsx)(
                                  I.A,
                                  M(
                                      L(
                                          {
                                              className: P.UT,
                                          },
                                          G,
                                      ),
                                      {
                                          enableTooltip: !1,
                                      },
                                  ),
                              )
                            : null,
                        (0, n.jsx)("div", {
                            "aria-hidden": !0,
                            className: P.S3,
                            children: (0, n.jsx)(_.Text, {
                                variant: "text-xs/medium",
                                className: P.sH,
                                children: S.name,
                            }),
                        }),
                    ],
                },
            ),
        ),
    });
});

function Y(e) {
    let { user: t, numRolesHidden: r, roleClassName: i } = e,
        s = (0, u.rm)("overflow-more-roles-".concat(t.id)),
        a = l.useRef(null);
    return (0, n.jsx)(_.YNO, {
        targetElementRef: a,
        renderPopout: (t) => {
            let { position: r } = t;
            return (0, n.jsx)(
                V,
                M(L({}, e), {
                    position: null != r ? r : "top",
                }),
            );
        },
        position: "top",
        align: "center",
        children: (e) =>
            (0, n.jsx)(_.vN3, {
                children: (0, n.jsx)(
                    "button",
                    M(
                        L(
                            M(
                                L(
                                    {
                                        ref: a,
                                    },
                                    e,
                                ),
                                {
                                    className: o()(P.lv, i),
                                },
                            ),
                            s,
                        ),
                        {
                            children: "+".concat(r),
                        },
                    ),
                ),
            }),
    });
}

function W(e) {
    let t = l.useRef(null),
        { guild: r, user: i, handleAddRole: s, roleClassName: a, addButtonClassName: c, addButtonIconClassName: d } = e,
        E = (0, u.rm)("overflow-add-roles-".concat(i.id)),
        p = (0, f.bG)([g.A], () => g.A.roleStyle),
        O = G.A.getHighestRole(r),
        h = T.Ay.getMember(r.id, i.id),
        S = (e) =>
            !(0, v.Oy)(e) && !e.managed && G.A.isRoleHigher(r, O, e) && (null == h || -1 === h.roles.indexOf(e.id));
    return (0, n.jsx)(_.YNO, {
        targetElementRef: t,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, n.jsx)(D.A, {
                guild: r,
                roleStyle: p,
                roleFilter: S,
                onSelect: s,
                onClose: t,
            });
        },
        position: "bottom",
        align: "center",
        children: (e) =>
            (0, n.jsx)(_.vN3, {
                children: (0, n.jsx)(
                    "button",
                    M(
                        L(
                            M(
                                L(
                                    {
                                        ref: t,
                                    },
                                    e,
                                ),
                                {
                                    className: o()(P.c9, a, c),
                                    "aria-label": U.intl.string(U.t.e3Wlyw),
                                    type: "button",
                                },
                            ),
                            E,
                        ),
                        {
                            children: (0, n.jsx)(_.j96, {
                                size: "md",
                                color: "currentColor",
                                className: o()(P.hs, d),
                                "aria-hidden": !0,
                            }),
                        },
                    ),
                ),
            }),
    });
}

function B(e) {
    let t,
        {
            user: r,
            guild: i,
            userRoleIds: s,
            wrap: E = !0,
            width: p,
            className: _,
            readOnly: O,
            roleClassName: S,
            disableBorderColor: g,
        } = e,
        y = l.useRef({}),
        C = l.useCallback(
            (e) => {
                var t;
                let n = s.filter((t) => t !== e.id);
                (null == (t = e.tags) ? void 0 : t.guild_connections) === null
                    ? h.A.unassignGuildRoleConnection(i.id, e.id)
                    : A.A.updateMemberRoles(i.id, r.id, n, [], [e.id]);
            },
            [s, i.id, r.id],
        ),
        b = l.useCallback(
            (e) => {
                let t = s;
                t.includes(e) || (t = [...t, e]), A.A.updateMemberRoles(i.id, r.id, t, [e], []);
            },
            [s, i.id, r.id],
        ),
        [m, R] = l.useState(null),
        I = (0, f.yK)([x.A], () => x.A.getManyRoles(i.id, s).sort(j.m)),
        D = l.useMemo(() => (null != m ? I.slice(0, m) : I), [I, m]),
        v = s.length - D.length;
    l.useLayoutEffect(() => {
        if (E) return;
        if ("number" != typeof p) throw Error("Unexpected null width");
        let e = 0,
            t = 0,
            r = p - 30 - 4;
        for (let n = 0; n < D.length; n++) {
            let l = D[n],
                i = y.current[l.id];
            if (null != i) {
                if ((t += i.offsetWidth + 4) > r) break;
                e++;
            }
        }
        R((t) => (e < D.length ? e : t));
    }, [E, p, D]);
    let T = w.default.getCurrentUser();
    a()(null != T, "MemberRolesList: currentUser cannot be undefined");
    let V = !O && G.A.can(N.xBc.MANAGE_ROLES, i),
        B = F.HJ(i, T.id),
        J = l.useMemo(() => "roles-".concat((0, c.A)()), []),
        z = (0, d.Ay)({
            id: J,
            isEnabled: !0,
            scrollToStart: K,
            scrollToEnd: K,
            wrap: !0,
        }),
        Z = D.map((e) => {
            var t;
            return (0, n.jsx)(
                H,
                {
                    className: S,
                    role: e,
                    canRemove:
                        (null == (t = e.tags) ? void 0 : t.guild_connections) === null
                            ? r.id === T.id
                            : V && F.wO(i, T.id, B, e),
                    onRemove: () => C(e),
                    ref: (t) => {
                        var r;
                        return (r = e.id), void (null != t ? (y.current[r] = t) : delete y.current[r]);
                    },
                    guildId: i.id,
                    disableBorderColor: g,
                },
                e.id,
            );
        });
    return (
        null != m && 0 !== v
            ? (t = (0, n.jsx)(
                  Y,
                  M(L({}, e), {
                      numRolesHidden: v,
                  }),
              ))
            : V &&
              (t = (0, n.jsx)(
                  W,
                  M(L({}, e), {
                      handleAddRole: b,
                  }),
              )),
        (0, n.jsx)(u.hD, {
            navigator: z,
            children: (0, n.jsx)(u.PR, {
                children: (e) => {
                    let { ref: r } = e,
                        l = k(e, ["ref"]);
                    return (0, n.jsxs)(
                        "div",
                        M(
                            L(
                                {
                                    className: o()(P.zr, _),
                                    "aria-label": U.intl.formatToPlainString(U.t.PCs0oo, {
                                        numRoles: s.length,
                                    }),
                                    ref: r,
                                },
                                l,
                            ),
                            {
                                children: [Z, t],
                            },
                        ),
                    );
                },
            }),
        })
    );
}
let J = (0, S.A)(B);

function z(e) {
    return (
        (0, f.bG)([G.A], () => {
            var t;
            return G.A.getGuildVersion(null == (t = e.guild) ? void 0 : t.id);
        }),
        !1 === e.wrap ? (0, n.jsx)(J, L({}, e)) : (0, n.jsx)(B, L({}, e))
    );
}
