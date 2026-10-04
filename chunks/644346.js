n.d(t, { A: () => ee });
var i = n(477900),
    r = n(582128),
    l = n(503698),
    a = n.n(l),
    o = n(707554),
    s = n(915089),
    u = n(183555),
    d = n(735321),
    c = n(94343),
    f = n(172218),
    h = n(704824);
n(456647);
var p = n(633075),
    g = n(451395),
    _ = n(716804),
    m = n(675816),
    w = n(17928),
    E = n(939249),
    A = n(772838),
    v = n(140735),
    y = n(834730),
    T = n(866665),
    C = n(192308),
    b = n(922016),
    I = n(980707),
    R = n(477782),
    O = n(241326),
    N = n(442433),
    S = n(775602),
    x = n(280450),
    P = n(384377),
    k = n(518477),
    M = n(375708),
    U = n(347727);
function j(e) {
    let { widget: t, className: n, buttonRef: r, additionalMenuItems: l } = e,
        o = (0, d.L)(t),
        u = (0, s.GV)();
    return (0, i.jsx)(L, {
        targetRef: r,
        widget: t,
        additionalMenuItems: l,
        children: (e) =>
            (0, i.jsx)(D, {
                children: (0, i.jsxs)(E.D, {
                    innerRef: r,
                    className: a()(U.x6, n),
                    "data-dnd-name": o,
                    "aria-label": M.intl.formatToPlainString(M.t.HWNJJN, { widgetTitle: o }),
                    "aria-describedby": u,
                    "aria-keyshortcuts": "Control+D, Meta+D",
                    ...e,
                    children: [
                        (0, i.jsx)(A.W, { size: "sm" }),
                        (0, i.jsx)(v.A, { id: u, children: M.intl.string(M.t.bsuqFn) }),
                    ],
                }),
            }),
    });
}
function D(e) {
    let { children: t } = e,
        n = (0, w.bG)([S.Ay], () => S.Ay.keyboardModeEnabled),
        { isDragging: r } = (0, m.V)((e) => ({ isDragging: e.isDragging() }));
    return (0, i.jsx)(T.m, {
        __unsupportedReactNodeAsText: (0, i.jsxs)("div", {
            className: U.HE,
            children: [
                (0, i.jsx)(y.E, {
                    variant: "text-sm/normal",
                    color: "none",
                    children: M.intl.format(n ? M.t["zvln/l"] : M.t["7cdwhg"], {
                        emphasizeHook: (e) => (0, i.jsx)("strong", { children: e }),
                    }),
                }),
                (0, i.jsx)(y.E, {
                    variant: "text-sm/normal",
                    color: "none",
                    children: M.intl.format(M.t["4e0rM4"], {
                        emphasizeHook: (e) => (0, i.jsx)("strong", { children: e }),
                    }),
                }),
            ],
        }),
        position: "top",
        shouldShow: !0 !== r,
        ariaHidden: !0,
        children: t,
    });
}
function L(e) {
    let { children: t, widget: r, targetRef: l, additionalMenuItems: a } = e,
        { trackUserProfileEditAction: o } = (0, u.NJ)();
    function s(e) {
        if (e.shiftKey) {
            ((0, d.qA)(r),
                o({ action: "WIDGET_REMOVED", ...r.getProfileEditAnalyticsOptions() }),
                (0, P.XA)(k.jM.WIDGET_REMOVED));
            return;
        }
        (0, C.openModalLazy)(
            async () => {
                let { default: e } = await Promise.all([
                    n.e("148758"),
                    n.e("36026"),
                    n.e("249918"),
                    n.e("269614"),
                    n.e("372883"),
                    n.e("244941"),
                    n.e("598263"),
                    n.e("291043"),
                    n.e("788938"),
                    n.e("104864"),
                    n.e("420446"),
                    n.e("119766"),
                    n.e("887789"),
                    n.e("589154"),
                    n.e("515293"),
                    n.e("888499"),
                    n.e("193457"),
                    n.e("839182"),
                    n.e("892937"),
                    n.e("490449"),
                    n.e("52727"),
                    n.e("467506"),
                    n.e("134504"),
                    n.e("908608"),
                    n.e("741786"),
                    n.e("553683"),
                    n.e("720161"),
                    n.e("746623"),
                    n.e("897117"),
                    n.e("415809"),
                    n.e("787320"),
                    n.e("124981"),
                    n.e("392310"),
                    n.e("353600"),
                ]).then(n.bind(n, 380035));
                return (t) =>
                    (0, i.jsx)(e, { ...t, userId: x.default.getId(), widget: r, trackUserProfileEditAction: o });
            },
            { stackingBehavior: "stack" },
        );
    }
    return (0, i.jsx)(b.Y, {
        targetElementRef: l,
        align: "top",
        position: "right",
        disablePointerEvents: !1,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(I.W, {
                "data-menu-migrated": !0,
                navId: "user-profile-widget-context-menu",
                onClose: () => {
                    ((0, N.Z_)(), t());
                },
                onSelect: () => {},
                "aria-label": M.intl.string(M.t.xpSHSk),
                className: U.MK,
                children: (0, i.jsxs)(R.rX, {
                    children: [
                        a,
                        (0, i.jsx)(R.Dr, {
                            id: "remove-widget",
                            label: M.intl.string(M.t.Mm07Yc),
                            action: s,
                            color: "danger",
                            icon: O.TrashIcon,
                            leadingAccessory: { type: "icon", icon: O.TrashIcon },
                        }),
                    ],
                }),
            });
        },
        children: t,
    });
}
var J = n(297264),
    W = n(138134),
    F = n(365199),
    H = n(627363),
    G = n(587895),
    B = n(928658);
function q(e, t, n) {
    n?.vibegrationsProjectId != null
        ? (0, B.r3)({ application: n, entrypoint: "user_profile_widget" })
        : (0, B.GJ)(e, t);
}
var $ = n(216473);
function V(e) {
    let { widget: t, userId: n, className: l, menuItems: o } = e,
        s = r.useRef(null);
    function u() {
        !(function (e, t) {
            if (!(t instanceof p.R)) return (0, B.GJ)(e, t);
            let { applicationId: n } = t;
            G.A.isHydrated(n)
                ? q(e, t, G.A.getApplication(n))
                : H.Ay.fetchApplication(n)
                      .then(() => q(e, t, G.A.getApplication(n)))
                      .catch(() => (0, B.GJ)(e, t));
        })(n, t);
    }
    return (0, i.jsx)(b.Y, {
        targetElementRef: s,
        align: "top",
        position: "right",
        disablePointerEvents: !1,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(I.W, {
                "data-menu-migrated": !0,
                navId: "user-profile-widget-context-menu",
                onClose: () => {
                    ((0, N.Z_)(), t());
                },
                onSelect: () => {},
                "aria-label": M.intl.string(M.t.xpSHSk),
                children: (0, i.jsxs)(R.rX, {
                    children: [
                        o,
                        (0, i.jsx)(
                            R.Dr,
                            {
                                id: "flag-widget",
                                label: M.intl.string(M.t.D4GvHE),
                                action: u,
                                color: "danger",
                                icon: W.FlagIcon,
                                leadingAccessory: { type: "icon", icon: W.FlagIcon },
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
                innerRef: s,
                "aria-label": M.intl.string(M.t.xpSHSk),
                className: a()($.x, l),
                children: (0, i.jsx)(F.MoreHorizontalIcon, { size: "sm", color: "currentColor" }),
            }),
    });
}
var z = n(948939);
function K(e) {
    let {
        userId: t,
        headingId: n,
        widget: r,
        disableInteraction: l = !1,
        title: o,
        subtitle: s,
        actionButtons: u = [],
        className: d,
        additionalMenuItems: c,
    } = e;
    return (0, i.jsxs)("div", {
        className: a()(z.U1, d),
        children: [
            (0, i.jsxs)("div", {
                className: z.DD,
                children: [
                    (0, i.jsx)(J.D, { variant: "heading-sm/medium", color: "text-default", id: n, children: o }),
                    null != s && (0, i.jsx)(y.E, { variant: "text-xs/normal", color: "text-subtle", children: s }),
                ],
            }),
            (0, i.jsx)(Y, { widget: r, actionButtons: u, disabledInteraction: l, userId: t, additionalMenuItems: c }),
        ],
    });
}
function Y(e) {
    let { widget: t, actionButtons: n, disabledInteraction: r, userId: l, additionalMenuItems: a } = e,
        o = (0, w.bG)([x.default], () => x.default.getId());
    return r
        ? null
        : null != n && n.length > 0
          ? (0, i.jsx)("div", { className: z.o1, children: n })
          : o !== l
            ? (0, i.jsx)("div", {
                  className: z.o1,
                  children: (0, i.jsx)(V, {
                      widget: t,
                      userId: l,
                      className: z.AQ,
                      menuItems: null != a ? [a] : void 0,
                  }),
              })
            : null;
}
var X = n(192),
    Z = n(223503);
function Q(e) {
    let { index: t, widget: n, additionalManageWidgetMenuItems: l, children: o, getWidth: u } = e,
        c = r.useRef(null),
        f = r.useRef(null),
        { registerManageWidgetButtonRef: h, manageFocusOnReorder: p } = (0, X.r)();
    r.useLayoutEffect(() => {
        let e = h(n.type);
        return (e(c.current), () => e(null));
    }, [h, n.type]);
    let _ = r.useMemo(() => n.id ?? (0, s.Ld)(), [n.id]),
        { isDragging: m, dragSourcePosition: w } = (0, g.gY)({
            dragRef: c,
            dropRef: f,
            index: t,
            listType: "WIDGETS",
            itemType: "WIDGET",
            itemId: _,
            itemPreviewProps: { widget: n, getWidth: u },
            onReorder: d.R_,
            onEnd: () => p(n.type),
        }),
        E = null != w,
        A = E && t < w,
        v = E && t > w;
    return (0, i.jsxs)("div", {
        ref: f,
        className: a()(Z.wX, { [Z.A]: A, [Z.Ze]: v, [Z.Id]: m }),
        "aria-label": M.intl.formatToPlainString(M.t.YLczh4, { positionNumber: t + 1 }),
        children: [(0, i.jsx)(j, { buttonRef: c, widget: n, className: Z.vn, additionalMenuItems: l }), o],
    });
}
function ee(e) {
    let {
            userId: t,
            widget: n,
            children: l,
            allowEditing: d,
            disableInteraction: g,
            className: m,
            index: w,
            trailingContent: E,
            headerTitle: A,
            headerSubtitle: v,
            headerActionButtons: y,
            headerClassName: T,
            additionalManageWidgetMenuItems: C,
        } = e,
        b = (0, s.GV)(),
        I = r.useRef(null),
        R = (0, _.g)(),
        { trackUserProfileAction: O } = (0, u.NJ)(),
        N = (function (e) {
            let { widget: t, onAction: n } = e,
                [i, l] = (0, r.useState)(!1),
                a = t instanceof p.R ? t.applicationId : null,
                { fetched: o } = (0, h.U)(a),
                s = (0, r.useCallback)(
                    (e) => {
                        e && (n({ action: "VIEW_WIDGET", ...t.getProfileAnalyticsOptions() }), l(!0));
                    },
                    [n, t],
                );
            return (0, f.K)(s, void 0, !i && (null == a || o));
        })({ widget: n, onAction: O }),
        S = R === n.type;
    (0, c.A)(N, S);
    let x = d && null != w && !g;
    function P() {
        return (0, i.jsxs)("div", {
            ref: I,
            className: a()(Z.kL, m),
            children: [
                (0, i.jsx)(K, {
                    userId: t,
                    headingId: b,
                    title: A,
                    subtitle: v,
                    actionButtons: y,
                    widget: n,
                    disableInteraction: g,
                    className: T,
                    additionalMenuItems: C,
                }),
                (0, i.jsxs)(o.F, { children: [l, E] }),
            ],
        });
    }
    return (0, i.jsx)("section", {
        ref: N,
        "aria-labelledby": b,
        children: x
            ? (0, i.jsx)(Q, {
                  index: w ?? 0,
                  widget: n,
                  getWidth: () => I.current?.offsetWidth,
                  additionalManageWidgetMenuItems: C,
                  children: P(),
              })
            : P(),
    });
}
