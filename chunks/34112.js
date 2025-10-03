n.d(t, { Z: () => k }), n(781311), n(539338), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    s = n.n(l),
    a = n(100568),
    o = n(417865),
    c = n(442837),
    d = n(865672),
    u = n(28664),
    m = n(481060),
    g = n(239091),
    p = n(493544),
    f = n(134433),
    h = n(91218),
    x = n(646892),
    b = n(741247),
    j = n(518738),
    _ = n(549631),
    v = n(402235),
    C = n(496675),
    O = n(626135),
    y = n(480608),
    N = n(243730),
    E = n(130341),
    I = n(970129),
    S = n(712181),
    T = n(203377),
    P = n(981631),
    w = n(388032),
    R = n(810688),
    Z = n(297827);
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
            otherRoles: s,
            setSelectedSection: a,
            renderHeader: o,
            headerHeight: d,
            query: u,
        } = e,
        m = (0, c.e7)([N.Z], () => N.Z.getRoleMemberCount(n.id), [n.id]),
        g = (0, c.e7)([C.Z], () => C.Z.getHighestRole(n), [n]),
        f = u.trim();
    i.useEffect(() => {
        (0, y.E)(n.id);
    }, [n.id]);
    let h = i.useRef(!1);
    i.useEffect(() => {
        h.current ||
            "" === u.trimStart() ||
            (O.default.track(P.rMx.SEARCH_STARTED, { search_type: "Roles" }), (h.current = !0));
    }, [u]);
    let x = i.useMemo(() => s.filter((e) => (0, E.uo)(e, f)), [s, f]),
        b = i.useMemo(() => [...s, l], [s, l]),
        { draggingId: j, handleDragStart: _, handleDragReset: v, handleDragComplete: I } = (0, S.Z)(b),
        T = i.useCallback(
            (e) => {
                var i;
                let { row: l } = e;
                if (0 === x.length) return (0, r.jsx)(G, {}, "empty-role");
                let o = x[l];
                return (0, r.jsx)(
                    M,
                    {
                        role: o,
                        guild: n,
                        highestRole: g,
                        currentPosition: l,
                        memberCount: null != (i = null == m ? void 0 : m[o.id]) ? i : 0,
                        onDragStart: _,
                        onDragReset: v,
                        onDragComplete: I,
                        disableHover: null != j,
                        disableDrag: s.length !== x.length,
                        setEditRoleId: t,
                        setSelectedSection: a,
                    },
                    o.id,
                );
            },
            [x, n, g, m, _, v, I, j, s, t, a],
        );
    return (0, r.jsx)(p.Xi, {
        sections: [Math.max(x.length, 1)],
        sectionHeight: d,
        renderSection: o,
        rowHeight: 61,
        renderRow: T,
    });
}
function G() {
    return (0, r.jsxs)("div", {
        className: R.emptyRoles,
        children: [
            (0, r.jsx)("div", { className: Z.dragSpacing }),
            (0, r.jsx)(m.BFJ, {
                size: "md",
                color: "currentColor",
            }),
            (0, r.jsx)(m.Text, {
                className: R.emptyRolesText,
                variant: "text-md/semibold",
                color: "text-muted",
                children: w.intl.string(w.t["vR7M+/"]),
            }),
        ],
    });
}
function M(e) {
    var t, l, c;
    let {
            role: d,
            guild: p,
            highestRole: h,
            currentPosition: j,
            memberCount: v,
            onDragStart: C,
            onDragReset: O,
            onDragComplete: y,
            disableHover: N,
            disableDrag: E,
            setEditRoleId: S,
            setSelectedSection: P,
        } = e,
        k = (0, I.T)(p, h, d),
        G = null != k,
        [M, B] = i.useState(!1),
        F = i.useMemo(
            () => ({
                type: L,
                item: () => (
                    C(d.id),
                    {
                        id: d.id,
                        position: j,
                    }
                ),
                canDrag: () => M && !G,
                collect: (e) => ({ isDragging: e.isDragging() }),
                end: (e, t) => {
                    let n = t.getDropResult();
                    if (null == n) return void O();
                    y(n.roleId);
                },
            }),
            [d, C, O, y, G, M, j],
        ),
        [{ isDragging: H }, z] = (0, a.c)(F),
        W = i.useMemo(
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
        [{ dragSourcePosition: V }, K] = (0, o.L)(W),
        Y = i.useCallback(
            (e) => {
                (0, g.jW)(e, async () => {
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
                z(e);
            },
            className: s()(R.roleRow, R.roleRowDragging),
        });
    function X() {
        S(d.id);
    }
    return (0, r.jsxs)(m.P3F, {
        className: s()(R.roleRow, {
            [R.roleRowDisableHover]: N,
            [R.containerDragBefore]: null != V && j < V,
            [R.containerDragAfter]: null != V && j > V,
        }),
        onClick: X,
        onContextMenu: Y,
        innerRef: (e) => {
            z(K(e));
        },
        "data-dnd-name": d.name,
        "aria-label": w.intl.formatToPlainString(w.t.Vu0AcX, {
            name: d.name,
            count: "".concat(v),
        }),
        children: [
            (0, r.jsx)("div", {
                className: s()(R.dragIcon, Z.dragSpacing, { [R.dragIconHidden]: G || E }),
                onMouseEnter: () => B(!0),
                onMouseLeave: () => B(!1),
                children: (0, r.jsx)(m.Vni, {
                    size: "xs",
                    color: "currentColor",
                }),
            }),
            (0, r.jsxs)("div", {
                className: s()(R.roleNameContainer, Z.roleNameSpacing),
                children: [
                    (null == (t = d.tags) ? void 0 : t.guild_connections) === null
                        ? (0, r.jsx)(f.Z, {
                              className: R.roleFlowerStar,
                              color: d.colorString,
                              size: 24,
                          })
                        : (0, r.jsx)(U, {
                              guildId: p.id,
                              role: d,
                              size: 24,
                              className: R.roleIcon,
                              defaultIconClassName: R.shield,
                          }),
                    null != k
                        ? (0, r.jsx)(I.Z, {
                              className: R.lock,
                              tooltipText: k,
                          })
                        : null,
                    (0, r.jsx)(m.Text, {
                        className: R.roleName,
                        color: "header-primary",
                        variant: "text-md/medium",
                        children: d.name,
                    }),
                    (null == (l = d.tags) ? void 0 : l.subscription_listing_id) != null &&
                        (0, r.jsx)(_.Z, {
                            className: R.subscriptionRoleIcon,
                            "aria-label": w.intl.string(w.t.a2Ak8f),
                        }),
                    (null == (c = d.tags) ? void 0 : c.is_guild_product_role) === !0 && (0, r.jsx)(x.Z, {}),
                ],
            }),
            (0, r.jsx)(u.u, {
                text: w.intl.string(w.t.CW75t7),
                "aria-label": w.intl.formatToPlainString(w.t.Fgs8fH, { count: "".concat(v) }),
                position: "right",
                children: (0, r.jsxs)(m.P3F, {
                    className: s()(R.memberCountContainer, Z.memberSpacing),
                    onClick: function () {
                        X(), P(T.ZI.MEMBERS);
                    },
                    children: [
                        (0, r.jsx)(m.Text, {
                            variant: "text-md/normal",
                            color: "none",
                            children: v,
                        }),
                        (0, r.jsx)(m.tBG, {
                            size: "custom",
                            color: "currentColor",
                            className: R.person,
                            width: 20,
                            height: 20,
                        }),
                    ],
                }),
            }),
            (0, r.jsxs)("div", {
                className: s()(R.buttonsContainer, Z.buttonsSpacing),
                children: [
                    (0, r.jsx)(u.u, {
                        text: G ? w.intl.string(w.t["HO/oXl"]) : w.intl.string(w.t.bt75u7),
                        children: (0, r.jsx)(m.hU, {
                            variant: "secondary",
                            "aria-label": G ? w.intl.string(w.t["HO/oXl"]) : w.intl.string(w.t.bt75u7),
                            icon: G ? m.tEF : m.vdY,
                            onClick: X,
                        }),
                    }),
                    (0, r.jsx)(u.u, {
                        text: w.intl.string(w.t.UKOtz8),
                        shouldShow: q,
                        children: (0, r.jsx)(m.hU, {
                            variant: "secondary",
                            "aria-label": w.intl.string(w.t.UKOtz8),
                            icon: m.xhG,
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
    let { guildId: a, role: o, size: c, enableTooltip: u, className: g, defaultIconClassName: p } = e,
        {
            hasGradient: f,
            stops: x,
            gradientId: b,
        } = (0, d.De)(
            null == (t = o.colorStrings) ? void 0 : t.primaryColor,
            null == (n = o.colorStrings) ? void 0 : n.secondaryColor,
            null == (i = o.colorStrings) ? void 0 : i.tertiaryColor,
        ),
        _ = (0, v.yH)(a, o),
        C = (0, j.p9)({
            guildId: a,
            roleId: o.id,
            size: c,
        });
    if (null != C)
        return (0, r.jsx)(
            h.Z,
            A(D({}, C), {
                className: g,
                enableTooltip: u,
            }),
        );
    let O = null != (l = o.colorString) ? l : P.Pbq;
    return (
        _ && f && (O = "url(#".concat(b, ")")),
        (0, r.jsxs)(r.Fragment, {
            children: [
                _ &&
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
                            children: x,
                        }),
                    }),
                (0, r.jsx)(m.lZ8, {
                    size: "custom",
                    className: s()(g, p),
                    color: O,
                    width: c,
                    height: c,
                }),
            ],
        })
    );
}
