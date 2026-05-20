n.d(t, { A: () => J });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    r = n.n(a),
    s = n(707554),
    o = n(17928),
    c = n(915089),
    d = n(495544),
    u = n(183555),
    m = n(735321),
    p = n(94343),
    h = n(172218),
    g = n(704824);
n(456647);
var x = n(633075),
    f = n(451395),
    E = n(716804),
    y = n(688807),
    T = n(990078),
    j = n(939249),
    v = n(772838),
    I = n(140735),
    A = n(834730),
    _ = n(192308),
    R = n(922016),
    D = n(980707),
    N = n(477782),
    b = n(241326),
    C = n(442433),
    P = n(775602),
    L = n(606758),
    w = n(518477),
    S = n(375708),
    O = n(184390);
function G(e) {
    let { widget: t, className: n, buttonRef: l, additionalMenuItems: a } = e,
        s = (0, m.L)(t),
        o = (0, c.GV)();
    return (0, i.jsx)(W, {
        targetRef: l,
        widget: t,
        additionalMenuItems: a,
        children: (e) =>
            (0, i.jsx)(X, {
                children: (0, i.jsxs)(j.D, {
                    innerRef: l,
                    className: r()(O.x6, n),
                    "data-dnd-name": s,
                    "aria-label": S.intl.formatToPlainString(S.t.HWNJJN, { widgetTitle: s }),
                    "aria-describedby": o,
                    "aria-keyshortcuts": "Control+D, Meta+D",
                    ...e,
                    children: [
                        (0, i.jsx)(v.W, { size: "sm" }),
                        (0, i.jsx)(I.A, { id: o, children: S.intl.string(S.t.bsuqFn) }),
                    ],
                }),
            }),
    });
}
let X = (e) => {
        let { children: t } = e,
            n = (0, o.bG)([P.A], () => P.A.keyboardModeEnabled),
            { isDragging: l } = (0, y.V)((e) => ({ isDragging: e.isDragging() }));
        return (0, i.jsx)(T.m, {
            __unsupportedReactNodeAsText: (0, i.jsxs)("div", {
                className: O.HE,
                children: [
                    (0, i.jsx)(A.E, {
                        variant: "text-sm/normal",
                        color: "none",
                        children: S.intl.format(n ? S.t["zvln/l"] : S.t["7cdwhg"], {
                            emphasizeHook: (e) => (0, i.jsx)("strong", { children: e }),
                        }),
                    }),
                    (0, i.jsx)(A.E, {
                        variant: "text-sm/normal",
                        color: "none",
                        children: S.intl.format(S.t["4e0rM4"], {
                            emphasizeHook: (e) => (0, i.jsx)("strong", { children: e }),
                        }),
                    }),
                ],
            }),
            position: "top",
            shouldShow: !0 !== l,
            ariaHidden: !0,
            children: t,
        });
    },
    W = (e) => {
        let { children: t, widget: l, targetRef: a, additionalMenuItems: r } = e,
            { trackUserProfileEditAction: s } = (0, u.NJ)(),
            o = (e) => {
                if (e.shiftKey) {
                    (0, m.qA)(l),
                        s({ action: "WIDGET_REMOVED", ...l.getProfileEditAnalyticsOptions() }),
                        (0, L.XA)(w.jM.WIDGET_REMOVED);
                    return;
                }
                (0, _.openModalLazy)(
                    async () => {
                        let { default: e } = await Promise.all([
                            n.e("67485"),
                            n.e("95700"),
                            n.e("56386"),
                            n.e("19397"),
                            n.e("60417"),
                            n.e("64422"),
                            n.e("95109"),
                            n.e("36877"),
                            n.e("38501"),
                            n.e("27323"),
                            n.e("37977"),
                            n.e("21930"),
                            n.e("22067"),
                            n.e("55266"),
                            n.e("94138"),
                            n.e("41786"),
                            n.e("86262"),
                            n.e("27752"),
                            n.e("58262"),
                            n.e("90804"),
                            n.e("54241"),
                            n.e("20491"),
                            n.e("55895"),
                            n.e("47339"),
                            n.e("1719"),
                            n.e("19119"),
                            n.e("55033"),
                            n.e("75090"),
                            n.e("78"),
                            n.e("53683"),
                            n.e("60959"),
                            n.e("70383"),
                            n.e("53600"),
                        ]).then(n.bind(n, 380035));
                        return (t) =>
                            (0, i.jsx)(e, {
                                ...t,
                                userId: d.default.getId(),
                                widget: l,
                                trackUserProfileEditAction: s,
                            });
                    },
                    { stackingBehavior: "stack" },
                );
            };
        return (0, i.jsx)(R.Y, {
            targetElementRef: a,
            align: "top",
            position: "right",
            disablePointerEvents: !1,
            renderPopout: (e) => {
                let { closePopout: t } = e;
                return (0, i.jsx)(D.W, {
                    "data-menu-migrated": !0,
                    navId: "user-profile-widget-context-menu",
                    onClose: () => {
                        (0, C.Z_)(), t();
                    },
                    onSelect: () => {},
                    "aria-label": S.intl.string(S.t.xpSHSk),
                    className: O.MK,
                    children: (0, i.jsxs)(N.rX, {
                        children: [
                            r,
                            (0, i.jsx)(N.Dr, {
                                id: "remove-widget",
                                label: S.intl.string(S.t.Mm07Yc),
                                action: o,
                                color: "danger",
                                icon: b.u,
                                leadingAccessory: { type: "icon", icon: b.u },
                            }),
                        ],
                    }),
                });
            },
            children: t,
        });
    };
var k = n(534514),
    M = n(138134),
    F = n(365199),
    H = n(928658),
    U = n(620266);
function Y(e) {
    let { widget: t, userId: n, className: a, menuItems: s } = e,
        o = l.useRef(null),
        c = () => {
            (0, H.GJ)(n, t);
        };
    return (0, i.jsx)(R.Y, {
        targetElementRef: o,
        align: "top",
        position: "right",
        disablePointerEvents: !1,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(D.W, {
                "data-menu-migrated": !0,
                navId: "user-profile-widget-context-menu",
                onClose: () => {
                    (0, C.Z_)(), t();
                },
                onSelect: () => {},
                "aria-label": S.intl.string(S.t.xpSHSk),
                children: (0, i.jsxs)(N.rX, {
                    children: [
                        s,
                        (0, i.jsx)(
                            N.Dr,
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
            (0, i.jsx)(j.D, {
                ...e,
                innerRef: o,
                "aria-label": S.intl.string(S.t.xpSHSk),
                className: r()(U.x, a),
                children: (0, i.jsx)(F.j, { size: "sm", color: "currentColor" }),
            }),
    });
}
var z = n(355144);
function V(e) {
    let {
        userId: t,
        headingId: n,
        widget: l,
        disableInteraction: a = !1,
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
                    null != o && (0, i.jsx)(A.E, { variant: "text-xs/normal", color: "text-subtle", children: o }),
                ],
            }),
            (0, i.jsx)(K, { widget: l, actionButtons: c, disabledInteraction: a, userId: t }),
        ],
    });
}
function K(e) {
    let { widget: t, actionButtons: n, disabledInteraction: l, userId: a } = e,
        r = (0, o.bG)([d.default], () => d.default.getId());
    return l
        ? null
        : null != n && n.length > 0
          ? (0, i.jsx)("div", { className: z.o1, children: n })
          : r !== a
            ? (0, i.jsx)("div", { className: z.o1, children: (0, i.jsx)(Y, { widget: t, userId: a, className: z.AQ }) })
            : null;
}
var B = n(192),
    q = n(686186);
function Z(e) {
    let { index: t, widget: n, additionalManageWidgetMenuItems: a, children: s, getWidth: o } = e,
        d = l.useRef(null),
        u = l.useRef(null),
        { registerManageWidgetButtonRef: p, manageFocusOnReorder: h } = (0, B.r)();
    l.useLayoutEffect(() => {
        let e = p(n.type);
        return e(d.current), () => e(null);
    }, [p, n.type]);
    let g = l.useMemo(() => n.id ?? (0, c.Ld)(), [n.id]),
        { isDragging: x, dragSourcePosition: E } = (0, f.gY)({
            dragRef: d,
            dropRef: u,
            index: t,
            listType: "WIDGETS",
            itemType: "WIDGET",
            itemId: g,
            itemPreviewProps: { widget: n, getWidth: o },
            onReorder: m.R_,
            onEnd: () => h(n.type),
        }),
        y = null != E,
        T = y && t < E,
        j = y && t > E;
    return (0, i.jsxs)("div", {
        ref: u,
        className: r()(q.wX, { [q.A]: T, [q.Ze]: j, [q.Id]: x }),
        "aria-label": S.intl.formatToPlainString(S.t.YLczh4, { positionNumber: t + 1 }),
        children: [(0, i.jsx)(G, { buttonRef: d, widget: n, className: q.vn, additionalMenuItems: a }), s],
    });
}
function J(e) {
    let {
            userId: t,
            widget: n,
            children: a,
            disableInteraction: m,
            className: f,
            index: y,
            trailingContent: T,
            headerTitle: j,
            headerSubtitle: v,
            headerActionButtons: I,
            headerClassName: A,
            additionalManageWidgetMenuItems: _,
        } = e,
        R = (0, c.GV)(),
        D = l.useRef(null),
        N = (0, o.bG)([d.default], () => d.default.getId() === t),
        b = (0, E.g)(),
        { trackUserProfileAction: C } = (0, u.NJ)(),
        P = (function (e) {
            let { widget: t, onAction: n } = e,
                [i, a] = (0, l.useState)(!1),
                r = t instanceof x.R ? t.applicationId : null,
                { fetched: s } = (0, g.U)(r),
                o = (0, l.useCallback)(
                    (e) => {
                        e && (n({ action: "VIEW_WIDGET", ...t.getProfileAnalyticsOptions() }), a(!0));
                    },
                    [n, t],
                );
            return (0, h.K)(o, void 0, !i && (null == r || s));
        })({ widget: n, onAction: C }),
        L = b === n.type;
    (0, p.A)(P, L);
    let w = N && null != y && !m,
        S = () =>
            (0, i.jsxs)("div", {
                ref: D,
                className: r()(q.kL, f),
                children: [
                    (0, i.jsx)(V, {
                        userId: t,
                        headingId: R,
                        title: j,
                        subtitle: v,
                        actionButtons: I,
                        widget: n,
                        disableInteraction: m,
                        className: A,
                    }),
                    (0, i.jsxs)(s.F, { children: [a, T] }),
                ],
            });
    return (0, i.jsx)("section", {
        ref: P,
        "aria-labelledby": R,
        children: w
            ? (0, i.jsx)(Z, {
                  index: y ?? 0,
                  widget: n,
                  getWidth: () => D.current?.offsetWidth,
                  additionalManageWidgetMenuItems: _,
                  children: S(),
              })
            : S(),
    });
}
