n.d(t, { A: () => ee });
var i = n(477900),
    r = n(582128),
    l = n(503698),
    a = n.n(l),
    o = n(707554),
    u = n(915089),
    s = n(183555),
    d = n(735321),
    c = n(94343),
    f = n(172218),
    h = n(704824);
n(456647);
var p = n(633075),
    g = n(451395),
    m = n(716804),
    w = n(675816),
    _ = n(17928),
    E = n(939249),
    y = n(772838),
    b = n(140735),
    v = n(834730),
    I = n(866665),
    A = n(192308),
    T = n(922016),
    R = n(980707),
    C = n(477782),
    x = n(241326),
    O = n(442433),
    P = n(775602),
    N = n(280450),
    S = n(384377),
    M = n(518477),
    j = n(375708),
    k = n(347727);
function D(e) {
    let { widget: t, className: n, buttonRef: r, additionalMenuItems: l } = e,
        o = (0, d.L)(t),
        s = (0, u.GV)();
    return (0, i.jsx)(L, {
        targetRef: r,
        widget: t,
        additionalMenuItems: l,
        children: (e) =>
            (0, i.jsx)(U, {
                children: (0, i.jsxs)(E.D, {
                    innerRef: r,
                    className: a()(k.x6, n),
                    "data-dnd-name": o,
                    "aria-label": j.intl.formatToPlainString(j.t.HWNJJN, { widgetTitle: o }),
                    "aria-describedby": s,
                    "aria-keyshortcuts": "Control+D, Meta+D",
                    ...e,
                    children: [
                        (0, i.jsx)(y.W, { size: "sm" }),
                        (0, i.jsx)(b.A, { id: s, children: j.intl.string(j.t.bsuqFn) }),
                    ],
                }),
            }),
    });
}
function U(e) {
    let { children: t } = e,
        n = (0, _.bG)([P.Ay], () => P.Ay.keyboardModeEnabled),
        { isDragging: r } = (0, w.V)((e) => ({ isDragging: e.isDragging() }));
    return (0, i.jsx)(I.m, {
        __unsupportedReactNodeAsText: (0, i.jsxs)("div", {
            className: k.HE,
            children: [
                (0, i.jsx)(v.E, {
                    variant: "text-sm/normal",
                    color: "none",
                    children: j.intl.format(n ? j.t["zvln/l"] : j.t["7cdwhg"], {
                        emphasizeHook: (e) => (0, i.jsx)("strong", { children: e }),
                    }),
                }),
                (0, i.jsx)(v.E, {
                    variant: "text-sm/normal",
                    color: "none",
                    children: j.intl.format(j.t["4e0rM4"], {
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
        { trackUserProfileEditAction: o } = (0, s.NJ)();
    function u(e) {
        if (e.shiftKey) {
            ((0, d.qA)(r),
                o({ action: "WIDGET_REMOVED", ...r.getProfileEditAnalyticsOptions() }),
                (0, S.XA)(M.jM.WIDGET_REMOVED));
            return;
        }
        (0, A.openModalLazy)(
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
                    n.e("536973"),
                    n.e("720161"),
                    n.e("746623"),
                    n.e("897117"),
                    n.e("415809"),
                    n.e("787320"),
                    n.e("914248"),
                    n.e("124981"),
                    n.e("392310"),
                    n.e("353600"),
                ]).then(n.bind(n, 380035));
                return (t) =>
                    (0, i.jsx)(e, { ...t, userId: N.default.getId(), widget: r, trackUserProfileEditAction: o });
            },
            { stackingBehavior: "stack" },
        );
    }
    return (0, i.jsx)(T.Y, {
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
                    ((0, O.Z_)(), t());
                },
                onSelect: () => {},
                "aria-label": j.intl.string(j.t.xpSHSk),
                className: k.MK,
                children: (0, i.jsxs)(C.rX, {
                    children: [
                        a,
                        (0, i.jsx)(C.Dr, {
                            id: "remove-widget",
                            label: j.intl.string(j.t.Mm07Yc),
                            action: u,
                            color: "danger",
                            icon: x.TrashIcon,
                            leadingAccessory: { type: "icon", icon: x.TrashIcon },
                        }),
                    ],
                }),
            });
        },
        children: t,
    });
}
var W = n(297264),
    J = n(138134),
    F = n(365199),
    G = n(627363),
    B = n(587895),
    H = n(928658);
function $(e, t, n) {
    n?.vibegrationsProjectId != null
        ? (0, H.r3)({ application: n, entrypoint: "user_profile_widget" })
        : (0, H.GJ)(e, t);
}
var V = n(216473);
function z(e) {
    let { widget: t, userId: n, className: l, menuItems: o } = e,
        u = r.useRef(null);
    function s() {
        !(function (e, t) {
            if (!(t instanceof p.R)) return (0, H.GJ)(e, t);
            let { applicationId: n } = t;
            B.A.isHydrated(n)
                ? $(e, t, B.A.getApplication(n))
                : G.Ay.fetchApplication(n)
                      .then(() => $(e, t, B.A.getApplication(n)))
                      .catch(() => (0, H.GJ)(e, t));
        })(n, t);
    }
    return (0, i.jsx)(T.Y, {
        targetElementRef: u,
        align: "top",
        position: "right",
        disablePointerEvents: !1,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(R.W, {
                "data-menu-migrated": !0,
                navId: "user-profile-widget-context-menu",
                onClose: () => {
                    ((0, O.Z_)(), t());
                },
                onSelect: () => {},
                "aria-label": j.intl.string(j.t.xpSHSk),
                children: (0, i.jsxs)(C.rX, {
                    children: [
                        o,
                        (0, i.jsx)(
                            C.Dr,
                            {
                                id: "flag-widget",
                                label: j.intl.string(j.t.D4GvHE),
                                action: s,
                                color: "danger",
                                icon: J.FlagIcon,
                                leadingAccessory: { type: "icon", icon: J.FlagIcon },
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
                innerRef: u,
                "aria-label": j.intl.string(j.t.xpSHSk),
                className: a()(V.x, l),
                children: (0, i.jsx)(F.MoreHorizontalIcon, { size: "sm", color: "currentColor" }),
            }),
    });
}
var K = n(948939);
function q(e) {
    let {
        userId: t,
        headingId: n,
        widget: r,
        disableInteraction: l = !1,
        title: o,
        subtitle: u,
        actionButtons: s = [],
        className: d,
        additionalMenuItems: c,
    } = e;
    return (0, i.jsxs)("div", {
        className: a()(K.U1, d),
        children: [
            (0, i.jsxs)("div", {
                className: K.DD,
                children: [
                    (0, i.jsx)(W.D, { variant: "heading-sm/medium", color: "text-default", id: n, children: o }),
                    null != u && (0, i.jsx)(v.E, { variant: "text-xs/normal", color: "text-subtle", children: u }),
                ],
            }),
            (0, i.jsx)(X, { widget: r, actionButtons: s, disabledInteraction: l, userId: t, additionalMenuItems: c }),
        ],
    });
}
function X(e) {
    let { widget: t, actionButtons: n, disabledInteraction: r, userId: l, additionalMenuItems: a } = e,
        o = (0, _.bG)([N.default], () => N.default.getId());
    return r
        ? null
        : null != n && n.length > 0
          ? (0, i.jsx)("div", { className: K.o1, children: n })
          : o !== l
            ? (0, i.jsx)("div", {
                  className: K.o1,
                  children: (0, i.jsx)(z, {
                      widget: t,
                      userId: l,
                      className: K.AQ,
                      menuItems: null != a ? [a] : void 0,
                  }),
              })
            : null;
}
var Y = n(192),
    Z = n(223503);
function Q(e) {
    let { index: t, widget: n, additionalManageWidgetMenuItems: l, children: o, getWidth: s } = e,
        c = r.useRef(null),
        f = r.useRef(null),
        { registerManageWidgetButtonRef: h, manageFocusOnReorder: p } = (0, Y.r)();
    r.useLayoutEffect(() => {
        let e = h(n.type);
        return (e(c.current), () => e(null));
    }, [h, n.type]);
    let m = r.useMemo(() => n.id ?? (0, u.Ld)(), [n.id]),
        { isDragging: w, dragSourcePosition: _ } = (0, g.gY)({
            dragRef: c,
            dropRef: f,
            index: t,
            listType: "WIDGETS",
            itemType: "WIDGET",
            itemId: m,
            itemPreviewProps: { widget: n, getWidth: s },
            onReorder: d.R_,
            onEnd: () => p(n.type),
        }),
        E = null != _,
        y = E && t < _,
        b = E && t > _;
    return (0, i.jsxs)("div", {
        ref: f,
        className: a()(Z.wX, { [Z.A]: y, [Z.Ze]: b, [Z.Id]: w }),
        "aria-label": j.intl.formatToPlainString(j.t.YLczh4, { positionNumber: t + 1 }),
        children: [(0, i.jsx)(D, { buttonRef: c, widget: n, className: Z.vn, additionalMenuItems: l }), o],
    });
}
function ee(e) {
    let {
            userId: t,
            widget: n,
            children: l,
            allowEditing: d,
            disableInteraction: g,
            className: w,
            index: _,
            trailingContent: E,
            headerTitle: y,
            headerSubtitle: b,
            headerActionButtons: v,
            headerClassName: I,
            additionalManageWidgetMenuItems: A,
        } = e,
        T = (0, u.GV)(),
        R = r.useRef(null),
        C = (0, m.g)(),
        { trackUserProfileAction: x } = (0, s.NJ)(),
        O = (function (e) {
            let { widget: t, onAction: n } = e,
                [i, l] = (0, r.useState)(!1),
                a = t instanceof p.R ? t.applicationId : null,
                { fetched: o } = (0, h.U)(a),
                u = (0, r.useCallback)(
                    (e) => {
                        e && (n({ action: "VIEW_WIDGET", ...t.getProfileAnalyticsOptions() }), l(!0));
                    },
                    [n, t],
                );
            return (0, f.K)(u, void 0, !i && (null == a || o));
        })({ widget: n, onAction: x }),
        P = C === n.type;
    (0, c.A)(O, P);
    let N = d && null != _ && !g;
    function S() {
        return (0, i.jsxs)("div", {
            ref: R,
            className: a()(Z.kL, w),
            children: [
                (0, i.jsx)(q, {
                    userId: t,
                    headingId: T,
                    title: y,
                    subtitle: b,
                    actionButtons: v,
                    widget: n,
                    disableInteraction: g,
                    className: I,
                    additionalMenuItems: A,
                }),
                (0, i.jsxs)(o.F, { children: [l, E] }),
            ],
        });
    }
    return (0, i.jsx)("section", {
        ref: O,
        "aria-labelledby": T,
        children: N
            ? (0, i.jsx)(Q, {
                  index: _ ?? 0,
                  widget: n,
                  getWidth: () => R.current?.offsetWidth,
                  additionalManageWidgetMenuItems: A,
                  children: S(),
              })
            : S(),
    });
}
