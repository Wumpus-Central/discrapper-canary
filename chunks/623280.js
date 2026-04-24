n.d(t, { A: () => q });
var i = n(627968),
    l = n(64700),
    r = n(503698),
    s = n.n(r),
    a = n(707554),
    d = n(17928),
    o = n(915089),
    c = n(495544),
    u = n(183555),
    g = n(735321),
    h = n(94343),
    m = n(172218),
    x = n(704824);
n(456647);
var f = n(633075),
    p = n(451395),
    j = n(716804),
    v = n(688807),
    b = n(990078),
    E = n(939249),
    w = n(772838),
    I = n(140735),
    N = n(834730),
    y = n(192308),
    A = n(922016),
    D = n(550079),
    R = n(477782),
    k = n(241326),
    M = n(442433),
    W = n(775602),
    S = n(606758),
    T = n(518477),
    G = n(985018),
    P = n(184390);
function _(e) {
    let { widget: t, className: n, buttonRef: l, additionalMenuItems: r } = e,
        a = (0, g.L)(t),
        d = (0, o.GV)();
    return (0, i.jsx)(H, {
        targetRef: l,
        widget: t,
        additionalMenuItems: r,
        children: (e) =>
            (0, i.jsx)(C, {
                children: (0, i.jsxs)(E.D, {
                    innerRef: l,
                    className: s()(P.x6, n),
                    "data-dnd-name": a,
                    "aria-label": G.intl.formatToPlainString(G.t.HWNJJN, { widgetTitle: a }),
                    "aria-describedby": d,
                    "aria-keyshortcuts": "Control+D, Meta+D",
                    ...e,
                    children: [
                        (0, i.jsx)(w.W, { size: "sm" }),
                        (0, i.jsx)(I.A, { id: d, children: G.intl.string(G.t.bsuqFn) }),
                    ],
                }),
            }),
    });
}
let C = (e) => {
        let { children: t } = e,
            n = (0, d.bG)([W.A], () => W.A.keyboardModeEnabled),
            { isDragging: l } = (0, v.V)((e) => ({ isDragging: e.isDragging() }));
        return (0, i.jsx)(b.m, {
            __unsupportedReactNodeAsText: (0, i.jsxs)("div", {
                className: P.HE,
                children: [
                    (0, i.jsx)(N.E, {
                        variant: "text-sm/normal",
                        color: "none",
                        children: G.intl.format(n ? G.t["zvln/l"] : G.t["7cdwhg"], {
                            emphasizeHook: (e) => (0, i.jsx)("strong", { children: e }),
                        }),
                    }),
                    (0, i.jsx)(N.E, {
                        variant: "text-sm/normal",
                        color: "none",
                        children: G.intl.format(G.t["4e0rM4"], {
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
    H = (e) => {
        let { children: t, widget: l, targetRef: r, additionalMenuItems: s } = e,
            { trackUserProfileEditAction: a } = (0, u.NJ)(),
            d = (e) => {
                if (e.shiftKey) {
                    (0, g.qA)(l),
                        a({ action: "WIDGET_REMOVED", ...l.getProfileEditAnalyticsOptions() }),
                        (0, S.XA)(T.jM.WIDGET_REMOVED);
                    return;
                }
                (0, y.openModalLazy)(
                    async () => {
                        let { default: e } = await Promise.all([
                            n.e("27752"),
                            n.e("77058"),
                            n.e("49914"),
                            n.e("19119"),
                            n.e("48612"),
                            n.e("11848"),
                            n.e("25698"),
                        ]).then(n.bind(n, 380035));
                        return (t) =>
                            (0, i.jsx)(e, {
                                ...t,
                                userId: c.default.getId(),
                                widget: l,
                                trackUserProfileEditAction: a,
                            });
                    },
                    { stackingBehavior: "stack" },
                );
            };
        return (0, i.jsx)(A.Y, {
            targetElementRef: r,
            align: "top",
            position: "right",
            disablePointerEvents: !1,
            renderPopout: (e) => {
                let { closePopout: t } = e;
                return (0, i.jsx)(D.W, {
                    "data-menu-migrated": !0,
                    navId: "user-profile-widget-context-menu",
                    onClose: () => {
                        (0, M.Z_)(), t();
                    },
                    onSelect: () => {},
                    "aria-label": G.intl.string(G.t.xpSHSk),
                    className: P.MK,
                    children: (0, i.jsxs)(R.rX, {
                        children: [
                            s,
                            (0, i.jsx)(R.Dr, {
                                id: "remove-widget",
                                label: G.intl.string(G.t.Mm07Yc),
                                action: d,
                                color: "danger",
                                icon: k.u,
                                leadingAccessory: { type: "icon", icon: k.u },
                            }),
                        ],
                    }),
                });
            },
            children: t,
        });
    };
var Z = n(534514),
    z = n(138134),
    L = n(365199),
    V = n(928658),
    J = n(620266);
function O(e) {
    let { widget: t, userId: n, className: r, menuItems: a } = e,
        d = l.useRef(null),
        o = () => {
            (0, V.GJ)(n, t);
        };
    return (0, i.jsx)(A.Y, {
        targetElementRef: d,
        align: "top",
        position: "right",
        disablePointerEvents: !1,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(D.W, {
                "data-menu-migrated": !0,
                navId: "user-profile-widget-context-menu",
                onClose: () => {
                    (0, M.Z_)(), t();
                },
                onSelect: () => {},
                "aria-label": G.intl.string(G.t.xpSHSk),
                children: (0, i.jsxs)(R.rX, {
                    children: [
                        a,
                        (0, i.jsx)(
                            R.Dr,
                            {
                                id: "flag-widget",
                                label: G.intl.string(G.t.D4GvHE),
                                action: o,
                                color: "danger",
                                icon: z.i,
                                leadingAccessory: { type: "icon", icon: z.i },
                            },
                            "flag-widget",
                        ),
                    ],
                }),
            });
        },
        children: (e) =>
            (0, i.jsx)(E.D, {
                ...e,
                innerRef: d,
                "aria-label": G.intl.string(G.t.xpSHSk),
                className: s()(J.x, r),
                children: (0, i.jsx)(L.j, { size: "sm", color: "currentColor" }),
            }),
    });
}
var Y = n(355144);
function B(e) {
    let {
        userId: t,
        headingId: n,
        widget: l,
        disableInteraction: r = !1,
        title: a,
        subtitle: d,
        actionButtons: o = [],
        className: c,
    } = e;
    return (0, i.jsxs)("div", {
        className: s()(Y.U1, c),
        children: [
            (0, i.jsxs)("div", {
                className: Y.DD,
                children: [
                    (0, i.jsx)(Z.D, { variant: "heading-sm/medium", color: "text-default", id: n, children: a }),
                    null != d && (0, i.jsx)(N.E, { variant: "text-xs/normal", color: "text-subtle", children: d }),
                ],
            }),
            (0, i.jsx)(U, { widget: l, actionButtons: o, disabledInteraction: r, userId: t }),
        ],
    });
}
function U(e) {
    let { widget: t, actionButtons: n, disabledInteraction: l, userId: r } = e,
        s = (0, d.bG)([c.default], () => c.default.getId());
    return l
        ? null
        : null != n && n.length > 0
          ? (0, i.jsx)("div", { className: Y.o1, children: n })
          : s !== r
            ? (0, i.jsx)("div", { className: Y.o1, children: (0, i.jsx)(O, { widget: t, userId: r, className: Y.AQ }) })
            : null;
}
var X = n(192),
    F = n(686186);
function K(e) {
    let { index: t, widget: n, additionalManageWidgetMenuItems: r, children: a, getWidth: d } = e,
        c = l.useRef(null),
        u = l.useRef(null),
        { registerManageWidgetButtonRef: h, manageFocusOnReorder: m } = (0, X.r)();
    l.useLayoutEffect(() => {
        let e = h(n.type);
        return e(c.current), () => e(null);
    }, [h, n.type]);
    let x = l.useMemo(() => n.id ?? (0, o.Ld)(), [n.id]),
        { isDragging: f, dragSourcePosition: j } = (0, p.gY)({
            dragRef: c,
            dropRef: u,
            index: t,
            listType: "WIDGETS",
            itemType: "WIDGET",
            itemId: x,
            itemPreviewProps: { widget: n, getWidth: d },
            onReorder: g.R_,
            onEnd: () => m(n.type),
        }),
        v = null != j,
        b = v && t < j,
        E = v && t > j;
    return (0, i.jsxs)("div", {
        ref: u,
        className: s()(F.wX, { [F.A]: b, [F.Ze]: E, [F.Id]: f }),
        "aria-label": G.intl.formatToPlainString(G.t.YLczh4, { positionNumber: t + 1 }),
        children: [(0, i.jsx)(_, { buttonRef: c, widget: n, className: F.vn, additionalMenuItems: r }), a],
    });
}
function q(e) {
    let {
            userId: t,
            widget: n,
            children: r,
            disableInteraction: g,
            className: p,
            index: v,
            trailingContent: b,
            headerTitle: E,
            headerSubtitle: w,
            headerActionButtons: I,
            headerClassName: N,
            additionalManageWidgetMenuItems: y,
        } = e,
        A = (0, o.GV)(),
        D = l.useRef(null),
        R = (0, d.bG)([c.default], () => c.default.getId() === t),
        k = (0, j.g)(),
        { trackUserProfileAction: M } = (0, u.NJ)(),
        W = (function (e) {
            let { widget: t, onAction: n } = e,
                [i, r] = (0, l.useState)(!1),
                s = t instanceof f.R ? t.applicationId : null,
                { fetched: a } = (0, x.U)(s),
                d = (0, l.useCallback)(
                    (e) => {
                        e && (n({ action: "VIEW_WIDGET", ...t.getProfileAnalyticsOptions() }), r(!0));
                    },
                    [n, t],
                );
            return (0, m.K)(d, void 0, !i && (null == s || a));
        })({ widget: n, onAction: M }),
        S = k === n.type;
    (0, h.A)(W, S);
    let T = R && null != v && !g,
        G = () =>
            (0, i.jsxs)("div", {
                ref: D,
                className: s()(F.kL, p),
                children: [
                    (0, i.jsx)(B, {
                        userId: t,
                        headingId: A,
                        title: E,
                        subtitle: w,
                        actionButtons: I,
                        widget: n,
                        disableInteraction: g,
                        className: N,
                    }),
                    (0, i.jsxs)(a.F, { children: [r, b] }),
                ],
            });
    return (0, i.jsx)("section", {
        ref: W,
        "aria-labelledby": A,
        children: T
            ? (0, i.jsx)(K, {
                  index: v ?? 0,
                  widget: n,
                  getWidth: () => D.current?.offsetWidth,
                  additionalManageWidgetMenuItems: y,
                  children: G(),
              })
            : G(),
    });
}
