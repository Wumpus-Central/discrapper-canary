n.d(t, { A: () => ee });
var i = n(477900),
    r = n(582128),
    l = n(503698),
    a = n.n(l),
    s = n(707554),
    o = n(915089),
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
    I = n(772838),
    A = n(140735),
    T = n(834730),
    v = n(866665),
    y = n(192308),
    b = n(922016),
    R = n(980707),
    S = n(477782),
    O = n(241326),
    C = n(442433),
    N = n(775602),
    x = n(280450),
    P = n(384377),
    k = n(518477),
    M = n(375708),
    j = n(347727);
function D(e) {
    let { widget: t, className: n, buttonRef: r, additionalMenuItems: l } = e,
        s = (0, d.L)(t),
        u = (0, o.GV)();
    return (0, i.jsx)(G, {
        targetRef: r,
        widget: t,
        additionalMenuItems: l,
        children: (e) =>
            (0, i.jsx)(B, {
                children: (0, i.jsxs)(E.D, {
                    innerRef: r,
                    className: a()(j.x6, n),
                    "data-dnd-name": s,
                    "aria-label": M.intl.formatToPlainString(M.t.HWNJJN, { widgetTitle: s }),
                    "aria-describedby": u,
                    "aria-keyshortcuts": "Control+D, Meta+D",
                    ...e,
                    children: [
                        (0, i.jsx)(I.W, { size: "sm" }),
                        (0, i.jsx)(A.A, { id: u, children: M.intl.string(M.t.bsuqFn) }),
                    ],
                }),
            }),
    });
}
function B(e) {
    let { children: t } = e,
        n = (0, w.bG)([N.Ay], () => N.Ay.keyboardModeEnabled),
        { isDragging: r } = (0, m.V)((e) => ({ isDragging: e.isDragging() }));
    return (0, i.jsx)(v.m, {
        __unsupportedReactNodeAsText: (0, i.jsxs)("div", {
            className: j.HE,
            children: [
                (0, i.jsx)(T.E, {
                    variant: "text-sm/normal",
                    color: "none",
                    children: M.intl.format(n ? M.t["zvln/l"] : M.t["7cdwhg"], {
                        emphasizeHook: (e) => (0, i.jsx)("strong", { children: e }),
                    }),
                }),
                (0, i.jsx)(T.E, {
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
function G(e) {
    let { children: t, widget: r, targetRef: l, additionalMenuItems: a } = e,
        { trackUserProfileEditAction: s } = (0, u.NJ)();
    function o(e) {
        if (e.shiftKey) {
            ((0, d.qA)(r),
                s({ action: "WIDGET_REMOVED", ...r.getProfileEditAnalyticsOptions() }),
                (0, P.XA)(k.jM.WIDGET_REMOVED));
            return;
        }
        (0, y.openModalLazy)(
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
                    n.e("984062"),
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
                    (0, i.jsx)(e, { ...t, userId: x.default.getId(), widget: r, trackUserProfileEditAction: s });
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
            return (0, i.jsx)(R.W, {
                "data-menu-migrated": !0,
                navId: "user-profile-widget-context-menu",
                onClose: () => {
                    ((0, C.Z_)(), t());
                },
                onSelect: () => {},
                "aria-label": M.intl.string(M.t.xpSHSk),
                className: j.MK,
                children: (0, i.jsxs)(S.rX, {
                    children: [
                        a,
                        (0, i.jsx)(S.Dr, {
                            id: "remove-widget",
                            label: M.intl.string(M.t.Mm07Yc),
                            action: o,
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
var L = n(297264),
    W = n(138134),
    U = n(365199),
    V = n(627363),
    F = n(587895),
    H = n(928658);
function q(e, t, n) {
    n?.vibegrationsProjectId != null
        ? (0, H.r3)({ application: n, entrypoint: "user_profile_widget" })
        : (0, H.GJ)(e, t);
}
var $ = n(216473);
function J(e) {
    let { widget: t, userId: n, className: l, menuItems: s } = e,
        o = r.useRef(null);
    function u() {
        !(function (e, t) {
            if (!(t instanceof p.R)) return (0, H.GJ)(e, t);
            let { applicationId: n } = t;
            F.A.isHydrated(n)
                ? q(e, t, F.A.getApplication(n))
                : V.Ay.fetchApplication(n)
                      .then(() => q(e, t, F.A.getApplication(n)))
                      .catch(() => (0, H.GJ)(e, t));
        })(n, t);
    }
    return (0, i.jsx)(b.Y, {
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
                    ((0, C.Z_)(), t());
                },
                onSelect: () => {},
                "aria-label": M.intl.string(M.t.xpSHSk),
                children: (0, i.jsxs)(S.rX, {
                    children: [
                        s,
                        (0, i.jsx)(
                            S.Dr,
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
                innerRef: o,
                "aria-label": M.intl.string(M.t.xpSHSk),
                className: a()($.x, l),
                children: (0, i.jsx)(U.MoreHorizontalIcon, { size: "sm", color: "currentColor" }),
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
        title: s,
        subtitle: o,
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
                    (0, i.jsx)(L.D, { variant: "heading-sm/medium", color: "text-default", id: n, children: s }),
                    null != o && (0, i.jsx)(T.E, { variant: "text-xs/normal", color: "text-subtle", children: o }),
                ],
            }),
            (0, i.jsx)(Z, { widget: r, actionButtons: u, disabledInteraction: l, userId: t, additionalMenuItems: c }),
        ],
    });
}
function Z(e) {
    let { widget: t, actionButtons: n, disabledInteraction: r, userId: l, additionalMenuItems: a } = e,
        s = (0, w.bG)([x.default], () => x.default.getId());
    return r
        ? null
        : null != n && n.length > 0
          ? (0, i.jsx)("div", { className: z.o1, children: n })
          : s !== l
            ? (0, i.jsx)("div", {
                  className: z.o1,
                  children: (0, i.jsx)(J, {
                      widget: t,
                      userId: l,
                      className: z.AQ,
                      menuItems: null != a ? [a] : void 0,
                  }),
              })
            : null;
}
var X = n(192),
    Y = n(223503);
function Q(e) {
    let { index: t, widget: n, additionalManageWidgetMenuItems: l, children: s, getWidth: u } = e,
        c = r.useRef(null),
        f = r.useRef(null),
        { registerManageWidgetButtonRef: h, manageFocusOnReorder: p } = (0, X.r)();
    r.useLayoutEffect(() => {
        let e = h(n.type);
        return (e(c.current), () => e(null));
    }, [h, n.type]);
    let _ = r.useMemo(() => n.id ?? (0, o.Ld)(), [n.id]),
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
        I = E && t < w,
        A = E && t > w;
    return (0, i.jsxs)("div", {
        ref: f,
        className: a()(Y.wX, { [Y.A]: I, [Y.Ze]: A, [Y.Id]: m }),
        "aria-label": M.intl.formatToPlainString(M.t.YLczh4, { positionNumber: t + 1 }),
        children: [(0, i.jsx)(D, { buttonRef: c, widget: n, className: Y.vn, additionalMenuItems: l }), s],
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
            headerTitle: I,
            headerSubtitle: A,
            headerActionButtons: T,
            headerClassName: v,
            additionalManageWidgetMenuItems: y,
        } = e,
        b = (0, o.GV)(),
        R = r.useRef(null),
        S = (0, _.g)(),
        { trackUserProfileAction: O } = (0, u.NJ)(),
        C = (function (e) {
            let { widget: t, onAction: n } = e,
                [i, l] = (0, r.useState)(!1),
                a = t instanceof p.R ? t.applicationId : null,
                { fetched: s } = (0, h.U)(a),
                o = (0, r.useCallback)(
                    (e) => {
                        e && (n({ action: "VIEW_WIDGET", ...t.getProfileAnalyticsOptions() }), l(!0));
                    },
                    [n, t],
                );
            return (0, f.K)(o, void 0, !i && (null == a || s));
        })({ widget: n, onAction: O }),
        N = S === n.type;
    (0, c.A)(C, N);
    let x = d && null != w && !g;
    function P() {
        return (0, i.jsxs)("div", {
            ref: R,
            className: a()(Y.kL, m),
            children: [
                (0, i.jsx)(K, {
                    userId: t,
                    headingId: b,
                    title: I,
                    subtitle: A,
                    actionButtons: T,
                    widget: n,
                    disableInteraction: g,
                    className: v,
                    additionalMenuItems: y,
                }),
                (0, i.jsxs)(s.F, { children: [l, E] }),
            ],
        });
    }
    return (0, i.jsx)("section", {
        ref: C,
        "aria-labelledby": b,
        children: x
            ? (0, i.jsx)(Q, {
                  index: w ?? 0,
                  widget: n,
                  getWidth: () => R.current?.offsetWidth,
                  additionalManageWidgetMenuItems: y,
                  children: P(),
              })
            : P(),
    });
}
