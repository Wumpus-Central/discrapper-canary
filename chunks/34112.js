n.d(t, { Z: () => k }), n(781311), n(539338), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    s = n(100568),
    o = n(417865),
    c = n(442837),
    d = n(865672),
    u = n(28664),
    g = n(481060),
    m = n(239091),
    p = n(493544),
    f = n(134433),
    h = n(646892),
    b = n(741247),
    x = n(518738),
    j = n(549631),
    _ = n(402235),
    v = n(48950),
    O = n(496675),
    C = n(626135),
    y = n(480608),
    N = n(243730),
    E = n(130341),
    I = n(970129),
    S = n(712181),
    T = n(203377),
    P = n(981631),
    w = n(388032),
    Z = n(810688),
    R = n(297827);
function D(e) {
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
function A(e, t) {
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
let L = "DRAGGABLE_ROLE";
function k(e) {
    let {
            setEditRoleId: t,
            guild: n,
            everyoneRole: l,
            otherRoles: a,
            setSelectedSection: s,
            renderHeader: o,
            headerHeight: d,
            query: u,
        } = e,
        g = (0, c.e7)([N.Z], () => N.Z.getRoleMemberCount(n.id), [n.id]),
        m = (0, c.e7)([O.Z], () => O.Z.getHighestRole(n), [n]),
        f = u.trim();
    i.useEffect(() => {
        (0, y.E)(n.id);
    }, [n.id]);
    let h = i.useRef(!1);
    i.useEffect(() => {
        h.current ||
            "" === u.trimStart() ||
            (C.default.track(P.rMx.SEARCH_STARTED, { search_type: "Roles" }), (h.current = !0));
    }, [u]);
    let b = i.useMemo(() => a.filter((e) => (0, E.uo)(e, f)), [a, f]),
        x = i.useMemo(() => [...a, l], [a, l]),
        { draggingId: j, handleDragStart: _, handleDragReset: v, handleDragComplete: I } = (0, S.Z)(x),
        T = i.useCallback(
            (e) => {
                var i;
                let { row: l } = e;
                if (0 === b.length) return (0, r.jsx)(G, {}, "empty-role");
                let o = b[l];
                return (0, r.jsx)(
                    M,
                    {
                        role: o,
                        guild: n,
                        highestRole: m,
                        currentPosition: l,
                        memberCount: null != (i = null == g ? void 0 : g[o.id]) ? i : 0,
                        onDragStart: _,
                        onDragReset: v,
                        onDragComplete: I,
                        disableHover: null != j,
                        disableDrag: a.length !== b.length,
                        setEditRoleId: t,
                        setSelectedSection: s,
                    },
                    o.id,
                );
            },
            [b, n, m, g, _, v, I, j, a, t, s],
        );
    return (0, r.jsx)(p.Xi, {
        sections: [Math.max(b.length, 1)],
        sectionHeight: d,
        renderSection: o,
        rowHeight: 61,
        renderRow: T,
    });
}
function G() {
    return (0, r.jsxs)("div", {
        className: Z.emptyRoles,
        children: [
            (0, r.jsx)("div", { className: R.dragSpacing }),
            (0, r.jsx)(g.BFJ, {
                size: "md",
                color: "currentColor",
            }),
            (0, r.jsx)(g.Text, {
                className: Z.emptyRolesText,
                variant: "text-md/semibold",
                color: "text-muted",
                children: w.intl.string(w.t["vR7M+y"]),
            }),
        ],
    });
}
function M(e) {
    var t, l, c;
    let {
            role: d,
            guild: p,
            highestRole: x,
            currentPosition: _,
            memberCount: v,
            onDragStart: O,
            onDragReset: C,
            onDragComplete: y,
            disableHover: N,
            disableDrag: E,
            setEditRoleId: S,
            setSelectedSection: P,
        } = e,
        k = (0, I.T)(p, x, d),
        G = null != k,
        [M, B] = i.useState(!1),
        F = i.useMemo(
            () => ({
                type: L,
                item: () => (
                    O(d.id),
                    {
                        id: d.id,
                        position: _,
                    }
                ),
                canDrag: () => M && !G,
                collect: (e) => ({ isDragging: e.isDragging() }),
                end: (e, t) => {
                    let n = t.getDropResult();
                    if (null == n) return void C();
                    y(n.roleId);
                },
            }),
            [d, O, C, y, G, M, _],
        ),
        [{ isDragging: H }, W] = (0, s.c)(F),
        z = i.useMemo(
            () => ({
                accept: L,
                canDrop: () => !G,
                collect: (e) => {
                    let t = e.getItem();
                    return null != t && e.isOver() && e.canDrop()
                        ? { dragSourcePosition: t.position }
                        : { dragSourcePosition: null };
                },
                drop: () => ({ roleId: d.id }),
            }),
            [G, d],
        ),
        [{ dragSourcePosition: V }, K] = (0, o.L)(z),
        Y = i.useCallback(
            (e) => {
                (0, m.jW)(e, async () => {
                    let { default: e } = await Promise.resolve().then(n.bind(n, 741247));
                    return (t) =>
                        (0, r.jsx)(
                            e,
                            A(D({}, t), {
                                role: d,
                                guild: p,
                            }),
                        );
                });
            },
            [p, d],
        ),
        q = (0, b.e)(p, d);
    if (H)
        return (0, r.jsx)("div", {
            ref: (e) => {
                W(e);
            },
            className: a()(Z.roleRow, Z.roleRowDragging),
        });
    function X() {
        S(d.id);
    }
    return (0, r.jsxs)(g.P3F, {
        className: a()(Z.roleRow, {
            [Z.roleRowDisableHover]: N,
            [Z.containerDragBefore]: null != V && _ < V,
            [Z.containerDragAfter]: null != V && _ > V,
        }),
        onClick: X,
        onContextMenu: Y,
        innerRef: (e) => {
            W(K(e));
        },
        "data-dnd-name": d.name,
        "aria-label": w.intl.formatToPlainString(w.t.Vu0Acc, {
            name: d.name,
            count: "".concat(v),
        }),
        children: [
            (0, r.jsx)("div", {
                className: a()(Z.dragIcon, R.dragSpacing, { [Z.dragIconHidden]: G || E }),
                onMouseEnter: () => B(!0),
                onMouseLeave: () => B(!1),
                children: (0, r.jsx)(g.Vni, {
                    size: "xs",
                    color: "currentColor",
                }),
            }),
            (0, r.jsxs)("div", {
                className: a()(Z.roleNameContainer, R.roleNameSpacing),
                children: [
                    (null == (t = d.tags) ? void 0 : t.guild_connections) === null
                        ? (0, r.jsx)(f.Z, {
                              className: Z.roleFlowerStar,
                              color: d.colorString,
                              size: 24,
                          })
                        : (0, r.jsx)(U, {
                              guildId: p.id,
                              role: d,
                              size: 24,
                              className: Z.roleIcon,
                              defaultIconClassName: Z.shield,
                          }),
                    null != k
                        ? (0, r.jsx)(I.Z, {
                              className: Z.lock,
                              tooltipText: k,
                          })
                        : null,
                    (0, r.jsx)(g.Text, {
                        className: Z.roleName,
                        color: "header-primary",
                        variant: "text-md/medium",
                        children: d.name,
                    }),
                    (null == (l = d.tags) ? void 0 : l.subscription_listing_id) != null &&
                        (0, r.jsx)(j.Z, {
                            className: Z.subscriptionRoleIcon,
                            "aria-label": w.intl.string(w.t.a2Ak8b),
                        }),
                    (null == (c = d.tags) ? void 0 : c.is_guild_product_role) === !0 && (0, r.jsx)(h.Z, {}),
                ],
            }),
            (0, r.jsx)(u.u, {
                text: w.intl.string(w.t.CW75t0),
                "aria-label": w.intl.formatToPlainString(w.t.Fgs8fD, { count: "".concat(v) }),
                position: "right",
                children: (0, r.jsxs)(g.P3F, {
                    className: a()(Z.memberCountContainer, R.memberSpacing),
                    onClick: function () {
                        X(), P(T.ZI.MEMBERS);
                    },
                    children: [
                        (0, r.jsx)(g.Text, {
                            variant: "text-md/normal",
                            color: "none",
                            children: v,
                        }),
                        (0, r.jsx)(g.tBG, {
                            size: "custom",
                            color: "currentColor",
                            className: Z.person,
                            width: 20,
                            height: 20,
                        }),
                    ],
                }),
            }),
            (0, r.jsxs)("div", {
                className: a()(Z.buttonsContainer, R.buttonsSpacing),
                children: [
                    (0, r.jsx)(u.u, {
                        text: G ? w.intl.string(w.t["HO/oXl"]) : w.intl.string(w.t.bt75uw),
                        children: (0, r.jsx)(g.hU, {
                            variant: "secondary",
                            "aria-label": G ? w.intl.string(w.t["HO/oXl"]) : w.intl.string(w.t.bt75uw),
                            icon: G ? g.tEF : g.vdY,
                            onClick: X,
                        }),
                    }),
                    (0, r.jsx)(u.u, {
                        text: w.intl.string(w.t["UKOtz+"]),
                        shouldShow: q,
                        children: (0, r.jsx)(g.hU, {
                            variant: "secondary",
                            "aria-label": w.intl.string(w.t["UKOtz+"]),
                            icon: g.xhG,
                            onClick: Y,
                            disabled: !q,
                        }),
                    }),
                ],
            }),
        ],
    });
}
function U(e) {
    var t, n, i, l;
    let { guildId: s, role: o, size: c, enableTooltip: u, className: m, defaultIconClassName: p } = e,
        {
            hasGradient: f,
            stops: h,
            gradientId: b,
        } = (0, d.De)(
            null == (t = o.colorStrings) ? void 0 : t.primaryColor,
            null == (n = o.colorStrings) ? void 0 : n.secondaryColor,
            null == (i = o.colorStrings) ? void 0 : i.tertiaryColor,
        ),
        j = (0, _.yH)(s, o),
        O = (0, x.p9)({
            guildId: s,
            roleId: o.id,
            size: c,
        });
    if (null != O)
        return (0, r.jsx)(
            v.Z,
            A(D({}, O), {
                className: m,
                enableTooltip: u,
            }),
        );
    let C = null != (l = o.colorString) ? l : P.Pbq;
    return (
        j && f && (C = "url(#".concat(b, ")")),
        (0, r.jsxs)(r.Fragment, {
            children: [
                j &&
                    f &&
                    (0, r.jsx)("svg", {
                        width: "0",
                        height: "0",
                        style: { position: "absolute" },
                        children: (0, r.jsx)("linearGradient", {
                            id: b,
                            x1: "0%",
                            y1: "0%",
                            x2: "0%",
                            y2: "100%",
                            children: h,
                        }),
                    }),
                (0, r.jsx)(g.lZ8, {
                    size: "custom",
                    className: a()(m, p),
                    color: C,
                    width: c,
                    height: c,
                }),
            ],
        })
    );
}
