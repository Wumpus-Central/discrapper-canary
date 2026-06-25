n.d(t, { A: () => J });
var i = n(627968),
    a = n(64700),
    l = n(503698),
    r = n.n(l),
    s = n(707554),
    o = n(915089),
    c = n(183555),
    d = n(735321),
    u = n(94343),
    m = n(172218),
    p = n(704824);
n(456647);
var h = n(633075),
    g = n(451395),
    x = n(716804),
    f = n(688807),
    E = n(17928),
    T = n(990078),
    y = n(939249),
    j = n(772838),
    I = n(140735),
    v = n(834730),
    A = n(192308),
    _ = n(922016),
    R = n(980707),
    b = n(477782),
    D = n(241326),
    N = n(442433),
    C = n(775602),
    P = n(495544),
    w = n(606758),
    L = n(518477),
    S = n(375708),
    O = n(100294);
function G(e) {
    let { widget: t, className: n, buttonRef: a, additionalMenuItems: l } = e,
        s = (0, d.L)(t),
        c = (0, o.GV)();
    return (0, i.jsx)(W, {
        targetRef: a,
        widget: t,
        additionalMenuItems: l,
        children: (e) =>
            (0, i.jsx)(X, {
                children: (0, i.jsxs)(y.D, {
                    innerRef: a,
                    className: r()(O.x6, n),
                    "data-dnd-name": s,
                    "aria-label": S.intl.formatToPlainString(S.t.HWNJJN, { widgetTitle: s }),
                    "aria-describedby": c,
                    "aria-keyshortcuts": "Control+D, Meta+D",
                    ...e,
                    children: [
                        (0, i.jsx)(j.W, { size: "sm" }),
                        (0, i.jsx)(I.A, { id: c, children: S.intl.string(S.t.bsuqFn) }),
                    ],
                }),
            }),
    });
}
function X(e) {
    let { children: t } = e,
        n = (0, E.bG)([C.Ay], () => C.Ay.keyboardModeEnabled),
        { isDragging: a } = (0, f.V)((e) => ({ isDragging: e.isDragging() }));
    return (0, i.jsx)(T.m, {
        __unsupportedReactNodeAsText: (0, i.jsxs)("div", {
            className: O.HE,
            children: [
                (0, i.jsx)(v.E, {
                    variant: "text-sm/normal",
                    color: "none",
                    children: S.intl.format(n ? S.t["zvln/l"] : S.t["7cdwhg"], {
                        emphasizeHook: (e) => (0, i.jsx)("strong", { children: e }),
                    }),
                }),
                (0, i.jsx)(v.E, {
                    variant: "text-sm/normal",
                    color: "none",
                    children: S.intl.format(S.t["4e0rM4"], {
                        emphasizeHook: (e) => (0, i.jsx)("strong", { children: e }),
                    }),
                }),
            ],
        }),
        position: "top",
        shouldShow: !0 !== a,
        ariaHidden: !0,
        children: t,
    });
}
function W(e) {
    let { children: t, widget: a, targetRef: l, additionalMenuItems: r } = e,
        { trackUserProfileEditAction: s } = (0, c.NJ)();
    function o(e) {
        if (e.shiftKey) {
            (0, d.qA)(a),
                s({ action: "WIDGET_REMOVED", ...a.getProfileEditAnalyticsOptions() }),
                (0, w.XA)(L.jM.WIDGET_REMOVED);
            return;
        }
        (0, A.openModalLazy)(
            async () => {
                let { default: e } = await Promise.all([
                    n.e("71925"),
                    n.e("56726"),
                    n.e("87549"),
                    n.e("94838"),
                    n.e("26610"),
                    n.e("25219"),
                    n.e("1216"),
                    n.e("57865"),
                    n.e("22749"),
                    n.e("3805"),
                    n.e("60975"),
                    n.e("51522"),
                    n.e("41725"),
                    n.e("90907"),
                    n.e("40821"),
                    n.e("163"),
                    n.e("33071"),
                    n.e("82611"),
                    n.e("84345"),
                    n.e("27903"),
                    n.e("73361"),
                    n.e("72963"),
                    n.e("36877"),
                    n.e("21930"),
                    n.e("27323"),
                    n.e("54241"),
                    n.e("41786"),
                    n.e("22067"),
                    n.e("24303"),
                    n.e("55266"),
                    n.e("94138"),
                    n.e("96574"),
                    n.e("86262"),
                    n.e("27752"),
                    n.e("58262"),
                    n.e("55895"),
                    n.e("20491"),
                    n.e("19119"),
                    n.e("87791"),
                    n.e("78377"),
                    n.e("53683"),
                    n.e("47339"),
                    n.e("9598"),
                    n.e("74857"),
                    n.e("45879"),
                    n.e("97150"),
                    n.e("78421"),
                    n.e("78"),
                    n.e("17661"),
                    n.e("787"),
                    n.e("53600"),
                ]).then(n.bind(n, 380035));
                return (t) =>
                    (0, i.jsx)(e, { ...t, userId: P.default.getId(), widget: a, trackUserProfileEditAction: s });
            },
            { stackingBehavior: "stack" },
        );
    }
    return (0, i.jsx)(_.Y, {
        targetElementRef: l,
        align: "top",
        position: "right",
        disablePointerEvents: !1,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(R.W, {
                "data-menu-migrated": !0,
                navId: "user-profile-widget-context-menu",
                onClose: () => {
                    (0, N.Z_)(), t();
                },
                onSelect: () => {},
                "aria-label": S.intl.string(S.t.xpSHSk),
                className: O.MK,
                children: (0, i.jsxs)(b.rX, {
                    children: [
                        r,
                        (0, i.jsx)(b.Dr, {
                            id: "remove-widget",
                            label: S.intl.string(S.t.Mm07Yc),
                            action: o,
                            color: "danger",
                            icon: D.u,
                            leadingAccessory: { type: "icon", icon: D.u },
                        }),
                    ],
                }),
            });
        },
        children: t,
    });
}
var k = n(534514),
    M = n(138134),
    F = n(365199),
    H = n(928658),
    U = n(270442);
function Y(e) {
    let { widget: t, userId: n, className: l, menuItems: s } = e,
        o = a.useRef(null);
    function c() {
        (0, H.GJ)(n, t);
    }
    return (0, i.jsx)(_.Y, {
        targetElementRef: o,
        align: "top",
        position: "right",
        disablePointerEvents: !1,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(R.W, {
                "data-menu-migrated": !0,
                navId: "user-profile-widget-context-menu",
                onClose: () => {
                    (0, N.Z_)(), t();
                },
                onSelect: () => {},
                "aria-label": S.intl.string(S.t.xpSHSk),
                children: (0, i.jsxs)(b.rX, {
                    children: [
                        s,
                        (0, i.jsx)(
                            b.Dr,
                            {
                                id: "flag-widget",
                                label: S.intl.string(S.t.D4GvHE),
                                action: c,
                                color: "danger",
                                icon: M.i,
                                leadingAccessory: { type: "icon", icon: M.i },
                            },
                            "flag-widget",
                        ),
                    ],
                }),
            });
        },
        children: (e) =>
            (0, i.jsx)(y.D, {
                ...e,
                innerRef: o,
                "aria-label": S.intl.string(S.t.xpSHSk),
                className: r()(U.x, l),
                children: (0, i.jsx)(F.j, { size: "sm", color: "currentColor" }),
            }),
    });
}
var z = n(649928);
function V(e) {
    let {
        userId: t,
        headingId: n,
        widget: a,
        disableInteraction: l = !1,
        title: s,
        subtitle: o,
        actionButtons: c = [],
        className: d,
    } = e;
    return (0, i.jsxs)("div", {
        className: r()(z.U1, d),
        children: [
            (0, i.jsxs)("div", {
                className: z.DD,
                children: [
                    (0, i.jsx)(k.D, { variant: "heading-sm/medium", color: "text-default", id: n, children: s }),
                    null != o && (0, i.jsx)(v.E, { variant: "text-xs/normal", color: "text-subtle", children: o }),
                ],
            }),
            (0, i.jsx)(K, { widget: a, actionButtons: c, disabledInteraction: l, userId: t }),
        ],
    });
}
function K(e) {
    let { widget: t, actionButtons: n, disabledInteraction: a, userId: l } = e,
        r = (0, E.bG)([P.default], () => P.default.getId());
    return a
        ? null
        : null != n && n.length > 0
          ? (0, i.jsx)("div", { className: z.o1, children: n })
          : r !== l
            ? (0, i.jsx)("div", { className: z.o1, children: (0, i.jsx)(Y, { widget: t, userId: l, className: z.AQ }) })
            : null;
}
var B = n(192),
    q = n(381610);
function Z(e) {
    let { index: t, widget: n, additionalManageWidgetMenuItems: l, children: s, getWidth: c } = e,
        u = a.useRef(null),
        m = a.useRef(null),
        { registerManageWidgetButtonRef: p, manageFocusOnReorder: h } = (0, B.r)();
    a.useLayoutEffect(() => {
        let e = p(n.type);
        return e(u.current), () => e(null);
    }, [p, n.type]);
    let x = a.useMemo(() => n.id ?? (0, o.Ld)(), [n.id]),
        { isDragging: f, dragSourcePosition: E } = (0, g.gY)({
            dragRef: u,
            dropRef: m,
            index: t,
            listType: "WIDGETS",
            itemType: "WIDGET",
            itemId: x,
            itemPreviewProps: { widget: n, getWidth: c },
            onReorder: d.R_,
            onEnd: () => h(n.type),
        }),
        T = null != E,
        y = T && t < E,
        j = T && t > E;
    return (0, i.jsxs)("div", {
        ref: m,
        className: r()(q.wX, { [q.A]: y, [q.Ze]: j, [q.Id]: f }),
        "aria-label": S.intl.formatToPlainString(S.t.YLczh4, { positionNumber: t + 1 }),
        children: [(0, i.jsx)(G, { buttonRef: u, widget: n, className: q.vn, additionalMenuItems: l }), s],
    });
}
function J(e) {
    let {
            userId: t,
            widget: n,
            children: l,
            allowEditing: d,
            disableInteraction: g,
            className: f,
            index: E,
            trailingContent: T,
            headerTitle: y,
            headerSubtitle: j,
            headerActionButtons: I,
            headerClassName: v,
            additionalManageWidgetMenuItems: A,
        } = e,
        _ = (0, o.GV)(),
        R = a.useRef(null),
        b = (0, x.g)(),
        { trackUserProfileAction: D } = (0, c.NJ)(),
        N = (function (e) {
            let { widget: t, onAction: n } = e,
                [i, l] = (0, a.useState)(!1),
                r = t instanceof h.R ? t.applicationId : null,
                { fetched: s } = (0, p.U)(r),
                o = (0, a.useCallback)(
                    (e) => {
                        e && (n({ action: "VIEW_WIDGET", ...t.getProfileAnalyticsOptions() }), l(!0));
                    },
                    [n, t],
                );
            return (0, m.K)(o, void 0, !i && (null == r || s));
        })({ widget: n, onAction: D }),
        C = b === n.type;
    (0, u.A)(N, C);
    let P = d && null != E && !g;
    function w() {
        return (0, i.jsxs)("div", {
            ref: R,
            className: r()(q.kL, f),
            children: [
                (0, i.jsx)(V, {
                    userId: t,
                    headingId: _,
                    title: y,
                    subtitle: j,
                    actionButtons: I,
                    widget: n,
                    disableInteraction: g,
                    className: v,
                }),
                (0, i.jsxs)(s.F, { children: [l, T] }),
            ],
        });
    }
    return (0, i.jsx)("section", {
        ref: N,
        "aria-labelledby": _,
        children: P
            ? (0, i.jsx)(Z, {
                  index: E ?? 0,
                  widget: n,
                  getWidth: () => R.current?.offsetWidth,
                  additionalManageWidgetMenuItems: A,
                  children: w(),
              })
            : w(),
    });
}
