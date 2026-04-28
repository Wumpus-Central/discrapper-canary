n.d(t, { A: () => F });
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
    x = n(94343),
    h = n(172218),
    m = n(704824);
n(456647);
var f = n(633075),
    j = n(451395),
    p = n(716804),
    b = n(688807),
    v = n(990078),
    E = n(939249),
    I = n(772838),
    y = n(140735),
    w = n(834730),
    D = n(192308),
    N = n(922016),
    k = n(550079),
    A = n(477782),
    R = n(241326),
    M = n(442433),
    S = n(775602),
    W = n(606758),
    G = n(518477),
    P = n(985018),
    T = n(184390);
function _(e) {
    let { widget: t, className: n, buttonRef: l, additionalMenuItems: r } = e,
        a = (0, g.L)(t),
        d = (0, o.GV)();
    return (0, i.jsx)(z, {
        targetRef: l,
        widget: t,
        additionalMenuItems: r,
        children: (e) =>
            (0, i.jsx)(H, {
                children: (0, i.jsxs)(E.D, {
                    innerRef: l,
                    className: s()(T.x6, n),
                    "data-dnd-name": a,
                    "aria-label": P.intl.formatToPlainString(P.t.HWNJJN, { widgetTitle: a }),
                    "aria-describedby": d,
                    "aria-keyshortcuts": "Control+D, Meta+D",
                    ...e,
                    children: [
                        (0, i.jsx)(I.W, { size: "sm" }),
                        (0, i.jsx)(y.A, { id: d, children: P.intl.string(P.t.bsuqFn) }),
                    ],
                }),
            }),
    });
}
let H = (e) => {
        let { children: t } = e,
            n = (0, d.bG)([S.A], () => S.A.keyboardModeEnabled),
            { isDragging: l } = (0, b.V)((e) => ({ isDragging: e.isDragging() }));
        return (0, i.jsx)(v.m, {
            __unsupportedReactNodeAsText: (0, i.jsxs)("div", {
                className: T.HE,
                children: [
                    (0, i.jsx)(w.E, {
                        variant: "text-sm/normal",
                        color: "none",
                        children: P.intl.format(n ? P.t["zvln/l"] : P.t["7cdwhg"], {
                            emphasizeHook: (e) => (0, i.jsx)("strong", { children: e }),
                        }),
                    }),
                    (0, i.jsx)(w.E, {
                        variant: "text-sm/normal",
                        color: "none",
                        children: P.intl.format(P.t["4e0rM4"], {
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
    z = (e) => {
        let { children: t, widget: l, targetRef: r, additionalMenuItems: s } = e,
            { trackUserProfileEditAction: a } = (0, u.NJ)(),
            d = (e) => {
                if (e.shiftKey) {
                    (0, g.qA)(l),
                        a({ action: "WIDGET_REMOVED", ...l.getProfileEditAnalyticsOptions() }),
                        (0, W.XA)(G.jM.WIDGET_REMOVED);
                    return;
                }
                (0, D.openModalLazy)(
                    async () => {
                        let { default: e } = await Promise.all([
                            n.e("25781"),
                            n.e("25806"),
                            n.e("94232"),
                            n.e("61748"),
                            n.e("79249"),
                            n.e("66694"),
                            n.e("73553"),
                            n.e("14224"),
                            n.e("36926"),
                            n.e("27323"),
                            n.e("36877"),
                            n.e("20131"),
                            n.e("37977"),
                            n.e("79724"),
                            n.e("94138"),
                            n.e("28752"),
                            n.e("11295"),
                            n.e("22067"),
                            n.e("55266"),
                            n.e("14479"),
                            n.e("29852"),
                            n.e("27752"),
                            n.e("41786"),
                            n.e("88881"),
                            n.e("20491"),
                            n.e("23065"),
                            n.e("90804"),
                            n.e("36973"),
                            n.e("78"),
                            n.e("1719"),
                            n.e("47339"),
                            n.e("55895"),
                            n.e("35653"),
                            n.e("14248"),
                            n.e("19119"),
                            n.e("68261"),
                            n.e("75090"),
                            n.e("15809"),
                            n.e("60959"),
                            n.e("35445"),
                            n.e("45164"),
                            n.e("53600"),
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
        return (0, i.jsx)(N.Y, {
            targetElementRef: r,
            align: "top",
            position: "right",
            disablePointerEvents: !1,
            renderPopout: (e) => {
                let { closePopout: t } = e;
                return (0, i.jsx)(k.W, {
                    "data-menu-migrated": !0,
                    navId: "user-profile-widget-context-menu",
                    onClose: () => {
                        (0, M.Z_)(), t();
                    },
                    onSelect: () => {},
                    "aria-label": P.intl.string(P.t.xpSHSk),
                    className: T.MK,
                    children: (0, i.jsxs)(A.rX, {
                        children: [
                            s,
                            (0, i.jsx)(A.Dr, {
                                id: "remove-widget",
                                label: P.intl.string(P.t.Mm07Yc),
                                action: d,
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
    };
var C = n(534514),
    L = n(138134),
    V = n(365199),
    J = n(928658),
    Y = n(620266);
function O(e) {
    let { widget: t, userId: n, className: r, menuItems: a } = e,
        d = l.useRef(null),
        o = () => {
            (0, J.GJ)(n, t);
        };
    return (0, i.jsx)(N.Y, {
        targetElementRef: d,
        align: "top",
        position: "right",
        disablePointerEvents: !1,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(k.W, {
                "data-menu-migrated": !0,
                navId: "user-profile-widget-context-menu",
                onClose: () => {
                    (0, M.Z_)(), t();
                },
                onSelect: () => {},
                "aria-label": P.intl.string(P.t.xpSHSk),
                children: (0, i.jsxs)(A.rX, {
                    children: [
                        a,
                        (0, i.jsx)(
                            A.Dr,
                            {
                                id: "flag-widget",
                                label: P.intl.string(P.t.D4GvHE),
                                action: o,
                                color: "danger",
                                icon: L.i,
                                leadingAccessory: { type: "icon", icon: L.i },
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
                "aria-label": P.intl.string(P.t.xpSHSk),
                className: s()(Y.x, r),
                children: (0, i.jsx)(V.j, { size: "sm", color: "currentColor" }),
            }),
    });
}
var X = n(355144);
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
        className: s()(X.U1, c),
        children: [
            (0, i.jsxs)("div", {
                className: X.DD,
                children: [
                    (0, i.jsx)(C.D, { variant: "heading-sm/medium", color: "text-default", id: n, children: a }),
                    null != d && (0, i.jsx)(w.E, { variant: "text-xs/normal", color: "text-subtle", children: d }),
                ],
            }),
            (0, i.jsx)(K, { widget: l, actionButtons: o, disabledInteraction: r, userId: t }),
        ],
    });
}
function K(e) {
    let { widget: t, actionButtons: n, disabledInteraction: l, userId: r } = e,
        s = (0, d.bG)([c.default], () => c.default.getId());
    return l
        ? null
        : null != n && n.length > 0
          ? (0, i.jsx)("div", { className: X.o1, children: n })
          : s !== r
            ? (0, i.jsx)("div", { className: X.o1, children: (0, i.jsx)(O, { widget: t, userId: r, className: X.AQ }) })
            : null;
}
var U = n(192),
    Z = n(686186);
function q(e) {
    let { index: t, widget: n, additionalManageWidgetMenuItems: r, children: a, getWidth: d } = e,
        c = l.useRef(null),
        u = l.useRef(null),
        { registerManageWidgetButtonRef: x, manageFocusOnReorder: h } = (0, U.r)();
    l.useLayoutEffect(() => {
        let e = x(n.type);
        return e(c.current), () => e(null);
    }, [x, n.type]);
    let m = l.useMemo(() => n.id ?? (0, o.Ld)(), [n.id]),
        { isDragging: f, dragSourcePosition: p } = (0, j.gY)({
            dragRef: c,
            dropRef: u,
            index: t,
            listType: "WIDGETS",
            itemType: "WIDGET",
            itemId: m,
            itemPreviewProps: { widget: n, getWidth: d },
            onReorder: g.R_,
            onEnd: () => h(n.type),
        }),
        b = null != p,
        v = b && t < p,
        E = b && t > p;
    return (0, i.jsxs)("div", {
        ref: u,
        className: s()(Z.wX, { [Z.A]: v, [Z.Ze]: E, [Z.Id]: f }),
        "aria-label": P.intl.formatToPlainString(P.t.YLczh4, { positionNumber: t + 1 }),
        children: [(0, i.jsx)(_, { buttonRef: c, widget: n, className: Z.vn, additionalMenuItems: r }), a],
    });
}
function F(e) {
    let {
            userId: t,
            widget: n,
            children: r,
            disableInteraction: g,
            className: j,
            index: b,
            trailingContent: v,
            headerTitle: E,
            headerSubtitle: I,
            headerActionButtons: y,
            headerClassName: w,
            additionalManageWidgetMenuItems: D,
        } = e,
        N = (0, o.GV)(),
        k = l.useRef(null),
        A = (0, d.bG)([c.default], () => c.default.getId() === t),
        R = (0, p.g)(),
        { trackUserProfileAction: M } = (0, u.NJ)(),
        S = (function (e) {
            let { widget: t, onAction: n } = e,
                [i, r] = (0, l.useState)(!1),
                s = t instanceof f.R ? t.applicationId : null,
                { fetched: a } = (0, m.U)(s),
                d = (0, l.useCallback)(
                    (e) => {
                        e && (n({ action: "VIEW_WIDGET", ...t.getProfileAnalyticsOptions() }), r(!0));
                    },
                    [n, t],
                );
            return (0, h.K)(d, void 0, !i && (null == s || a));
        })({ widget: n, onAction: M }),
        W = R === n.type;
    (0, x.A)(S, W);
    let G = A && null != b && !g,
        P = () =>
            (0, i.jsxs)("div", {
                ref: k,
                className: s()(Z.kL, j),
                children: [
                    (0, i.jsx)(B, {
                        userId: t,
                        headingId: N,
                        title: E,
                        subtitle: I,
                        actionButtons: y,
                        widget: n,
                        disableInteraction: g,
                        className: w,
                    }),
                    (0, i.jsxs)(a.F, { children: [r, v] }),
                ],
            });
    return (0, i.jsx)("section", {
        ref: S,
        "aria-labelledby": N,
        children: G
            ? (0, i.jsx)(q, {
                  index: b ?? 0,
                  widget: n,
                  getWidth: () => k.current?.offsetWidth,
                  additionalManageWidgetMenuItems: D,
                  children: P(),
              })
            : P(),
    });
}
