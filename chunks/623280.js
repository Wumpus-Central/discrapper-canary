n.d(t, { A: () => X });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    r = n.n(a),
    s = n(707554),
    o = n(915089),
    d = n(183555),
    c = n(735321),
    u = n(94343),
    g = n(172218),
    x = n(704824);
n(456647);
var m = n(633075),
    h = n(451395),
    f = n(716804),
    j = n(688807),
    p = n(17928),
    I = n(990078),
    E = n(939249),
    C = n(772838),
    v = n(140735),
    b = n(834730),
    D = n(192308),
    N = n(922016),
    A = n(980707),
    P = n(477782),
    R = n(241326),
    _ = n(442433),
    T = n(775602),
    w = n(280450),
    y = n(384377),
    k = n(518477),
    S = n(375708),
    W = n(184390);
function O(e) {
    let { widget: t, className: n, buttonRef: l, additionalMenuItems: a } = e,
        s = (0, c.L)(t),
        d = (0, o.GV)();
    return (0, i.jsx)(M, {
        targetRef: l,
        widget: t,
        additionalMenuItems: a,
        children: (e) =>
            (0, i.jsx)(G, {
                children: (0, i.jsxs)(E.D, {
                    innerRef: l,
                    className: r()(W.x6, n),
                    "data-dnd-name": s,
                    "aria-label": S.intl.formatToPlainString(S.t.HWNJJN, { widgetTitle: s }),
                    "aria-describedby": d,
                    "aria-keyshortcuts": "Control+D, Meta+D",
                    ...e,
                    children: [
                        (0, i.jsx)(C.W, { size: "sm" }),
                        (0, i.jsx)(v.A, { id: d, children: S.intl.string(S.t.bsuqFn) }),
                    ],
                }),
            }),
    });
}
function G(e) {
    let { children: t } = e,
        n = (0, p.bG)([T.Ay], () => T.Ay.keyboardModeEnabled),
        { isDragging: l } = (0, j.V)((e) => ({ isDragging: e.isDragging() }));
    return (0, i.jsx)(I.m, {
        __unsupportedReactNodeAsText: (0, i.jsxs)("div", {
            className: W.HE,
            children: [
                (0, i.jsx)(b.E, {
                    variant: "text-sm/normal",
                    color: "none",
                    children: S.intl.format(n ? S.t["zvln/l"] : S.t["7cdwhg"], {
                        emphasizeHook: (e) => (0, i.jsx)("strong", { children: e }),
                    }),
                }),
                (0, i.jsx)(b.E, {
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
}
function M(e) {
    let { children: t, widget: l, targetRef: a, additionalMenuItems: r } = e,
        { trackUserProfileEditAction: s } = (0, d.NJ)();
    function o(e) {
        if (e.shiftKey) {
            (0, c.qA)(l),
                s({ action: "WIDGET_REMOVED", ...l.getProfileEditAnalyticsOptions() }),
                (0, y.XA)(k.jM.WIDGET_REMOVED);
            return;
        }
        (0, D.openModalLazy)(
            async () => {
                let { default: e } = await Promise.all([
                    n.e("25781"),
                    n.e("62646"),
                    n.e("21377"),
                    n.e("53702"),
                    n.e("69979"),
                    n.e("81483"),
                    n.e("36252"),
                    n.e("28041"),
                    n.e("79249"),
                    n.e("62867"),
                    n.e("30967"),
                    n.e("14831"),
                    n.e("86122"),
                    n.e("25821"),
                    n.e("996"),
                    n.e("90645"),
                    n.e("14211"),
                    n.e("25711"),
                    n.e("44671"),
                    n.e("53417"),
                    n.e("12375"),
                    n.e("73553"),
                    n.e("36877"),
                    n.e("72963"),
                    n.e("7575"),
                    n.e("54241"),
                    n.e("24303"),
                    n.e("21930"),
                    n.e("41786"),
                    n.e("22067"),
                    n.e("53683"),
                    n.e("55266"),
                    n.e("94138"),
                    n.e("48407"),
                    n.e("96574"),
                    n.e("86262"),
                    n.e("87791"),
                    n.e("27752"),
                    n.e("58262"),
                    n.e("95118"),
                    n.e("20491"),
                    n.e("19119"),
                    n.e("46004"),
                    n.e("47339"),
                    n.e("62871"),
                    n.e("74857"),
                    n.e("36637"),
                    n.e("84050"),
                    n.e("78"),
                    n.e("62285"),
                    n.e("9856"),
                    n.e("53600"),
                ]).then(n.bind(n, 380035));
                return (t) =>
                    (0, i.jsx)(e, { ...t, userId: w.default.getId(), widget: l, trackUserProfileEditAction: s });
            },
            { stackingBehavior: "stack" },
        );
    }
    return (0, i.jsx)(N.Y, {
        targetElementRef: a,
        align: "top",
        position: "right",
        disablePointerEvents: !1,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(A.W, {
                "data-menu-migrated": !0,
                navId: "user-profile-widget-context-menu",
                onClose: () => {
                    (0, _.Z_)(), t();
                },
                onSelect: () => {},
                "aria-label": S.intl.string(S.t.xpSHSk),
                className: W.MK,
                children: (0, i.jsxs)(P.rX, {
                    children: [
                        r,
                        (0, i.jsx)(P.Dr, {
                            id: "remove-widget",
                            label: S.intl.string(S.t.Mm07Yc),
                            action: o,
                            color: "danger",
                            icon: R.u,
                            leadingAccessory: { type: "icon", icon: R.u },
                        }),
                    ],
                }),
            });
        },
        children: t,
    });
}
var L = n(297264),
    z = n(138134),
    H = n(365199),
    U = n(928658),
    F = n(620266);
function Y(e) {
    let { widget: t, userId: n, className: a, menuItems: s } = e,
        o = l.useRef(null);
    function d() {
        (0, U.GJ)(n, t);
    }
    return (0, i.jsx)(N.Y, {
        targetElementRef: o,
        align: "top",
        position: "right",
        disablePointerEvents: !1,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(A.W, {
                "data-menu-migrated": !0,
                navId: "user-profile-widget-context-menu",
                onClose: () => {
                    (0, _.Z_)(), t();
                },
                onSelect: () => {},
                "aria-label": S.intl.string(S.t.xpSHSk),
                children: (0, i.jsxs)(P.rX, {
                    children: [
                        s,
                        (0, i.jsx)(
                            P.Dr,
                            {
                                id: "flag-widget",
                                label: S.intl.string(S.t.D4GvHE),
                                action: d,
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
                innerRef: o,
                "aria-label": S.intl.string(S.t.xpSHSk),
                className: r()(F.x, a),
                children: (0, i.jsx)(H.j, { size: "sm", color: "currentColor" }),
            }),
    });
}
var B = n(355144);
function K(e) {
    let {
        userId: t,
        headingId: n,
        widget: l,
        disableInteraction: a = !1,
        title: s,
        subtitle: o,
        actionButtons: d = [],
        className: c,
    } = e;
    return (0, i.jsxs)("div", {
        className: r()(B.U1, c),
        children: [
            (0, i.jsxs)("div", {
                className: B.DD,
                children: [
                    (0, i.jsx)(L.D, { variant: "heading-sm/medium", color: "text-default", id: n, children: s }),
                    null != o && (0, i.jsx)(b.E, { variant: "text-xs/normal", color: "text-subtle", children: o }),
                ],
            }),
            (0, i.jsx)(q, { widget: l, actionButtons: d, disabledInteraction: a, userId: t }),
        ],
    });
}
function q(e) {
    let { widget: t, actionButtons: n, disabledInteraction: l, userId: a } = e,
        r = (0, p.bG)([w.default], () => w.default.getId());
    return l
        ? null
        : null != n && n.length > 0
          ? (0, i.jsx)("div", { className: B.o1, children: n })
          : r !== a
            ? (0, i.jsx)("div", { className: B.o1, children: (0, i.jsx)(Y, { widget: t, userId: a, className: B.AQ }) })
            : null;
}
var V = n(192),
    J = n(686186);
function Z(e) {
    let { index: t, widget: n, additionalManageWidgetMenuItems: a, children: s, getWidth: d } = e,
        u = l.useRef(null),
        g = l.useRef(null),
        { registerManageWidgetButtonRef: x, manageFocusOnReorder: m } = (0, V.r)();
    l.useLayoutEffect(() => {
        let e = x(n.type);
        return e(u.current), () => e(null);
    }, [x, n.type]);
    let f = l.useMemo(() => n.id ?? (0, o.Ld)(), [n.id]),
        { isDragging: j, dragSourcePosition: p } = (0, h.gY)({
            dragRef: u,
            dropRef: g,
            index: t,
            listType: "WIDGETS",
            itemType: "WIDGET",
            itemId: f,
            itemPreviewProps: { widget: n, getWidth: d },
            onReorder: c.R_,
            onEnd: () => m(n.type),
        }),
        I = null != p,
        E = I && t < p,
        C = I && t > p;
    return (0, i.jsxs)("div", {
        ref: g,
        className: r()(J.wX, { [J.A]: E, [J.Ze]: C, [J.Id]: j }),
        "aria-label": S.intl.formatToPlainString(S.t.YLczh4, { positionNumber: t + 1 }),
        children: [(0, i.jsx)(O, { buttonRef: u, widget: n, className: J.vn, additionalMenuItems: a }), s],
    });
}
function X(e) {
    let {
            userId: t,
            widget: n,
            children: a,
            allowEditing: c,
            disableInteraction: h,
            className: j,
            index: p,
            trailingContent: I,
            headerTitle: E,
            headerSubtitle: C,
            headerActionButtons: v,
            headerClassName: b,
            additionalManageWidgetMenuItems: D,
        } = e,
        N = (0, o.GV)(),
        A = l.useRef(null),
        P = (0, f.g)(),
        { trackUserProfileAction: R } = (0, d.NJ)(),
        _ = (function (e) {
            let { widget: t, onAction: n } = e,
                [i, a] = (0, l.useState)(!1),
                r = t instanceof m.R ? t.applicationId : null,
                { fetched: s } = (0, x.U)(r),
                o = (0, l.useCallback)(
                    (e) => {
                        e && (n({ action: "VIEW_WIDGET", ...t.getProfileAnalyticsOptions() }), a(!0));
                    },
                    [n, t],
                );
            return (0, g.K)(o, void 0, !i && (null == r || s));
        })({ widget: n, onAction: R }),
        T = P === n.type;
    (0, u.A)(_, T);
    let w = c && null != p && !h;
    function y() {
        return (0, i.jsxs)("div", {
            ref: A,
            className: r()(J.kL, j),
            children: [
                (0, i.jsx)(K, {
                    userId: t,
                    headingId: N,
                    title: E,
                    subtitle: C,
                    actionButtons: v,
                    widget: n,
                    disableInteraction: h,
                    className: b,
                }),
                (0, i.jsxs)(s.F, { children: [a, I] }),
            ],
        });
    }
    return (0, i.jsx)("section", {
        ref: _,
        "aria-labelledby": N,
        children: w
            ? (0, i.jsx)(Z, {
                  index: p ?? 0,
                  widget: n,
                  getWidth: () => A.current?.offsetWidth,
                  additionalManageWidgetMenuItems: D,
                  children: y(),
              })
            : y(),
    });
}
