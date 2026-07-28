n.d(t, { A: () => X });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(707554),
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
    I = n(939249),
    E = n(772838),
    C = n(140735),
    v = n(834730),
    N = n(866665),
    b = n(192308),
    A = n(922016),
    D = n(980707),
    P = n(477782),
    _ = n(241326),
    T = n(442433),
    R = n(775602),
    w = n(280450),
    W = n(384377),
    y = n(518477),
    S = n(375708),
    k = n(222670);
function M(e) {
    let { widget: t, className: n, buttonRef: l, additionalMenuItems: s } = e,
        r = (0, c.L)(t),
        d = (0, o.GV)();
    return (0, i.jsx)(G, {
        targetRef: l,
        widget: t,
        additionalMenuItems: s,
        children: (e) =>
            (0, i.jsx)(O, {
                children: (0, i.jsxs)(I.D, {
                    innerRef: l,
                    className: a()(k.x6, n),
                    "data-dnd-name": r,
                    "aria-label": S.intl.formatToPlainString(S.t.HWNJJN, { widgetTitle: r }),
                    "aria-describedby": d,
                    "aria-keyshortcuts": "Control+D, Meta+D",
                    ...e,
                    children: [
                        (0, i.jsx)(E.W, { size: "sm" }),
                        (0, i.jsx)(C.A, { id: d, children: S.intl.string(S.t.bsuqFn) }),
                    ],
                }),
            }),
    });
}
function O(e) {
    let { children: t } = e,
        n = (0, p.bG)([R.Ay], () => R.Ay.keyboardModeEnabled),
        { isDragging: l } = (0, j.V)((e) => ({ isDragging: e.isDragging() }));
    return (0, i.jsx)(N.m, {
        __unsupportedReactNodeAsText: (0, i.jsxs)("div", {
            className: k.HE,
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
        shouldShow: !0 !== l,
        ariaHidden: !0,
        children: t,
    });
}
function G(e) {
    let { children: t, widget: l, targetRef: s, additionalMenuItems: a } = e,
        { trackUserProfileEditAction: r } = (0, d.NJ)();
    function o(e) {
        if (e.shiftKey) {
            (0, c.qA)(l),
                r({ action: "WIDGET_REMOVED", ...l.getProfileEditAnalyticsOptions() }),
                (0, W.XA)(y.jM.WIDGET_REMOVED);
            return;
        }
        (0, b.openModalLazy)(
            async () => {
                let { default: e } = await Promise.all([
                    n.e("1517"),
                    n.e("9937"),
                    n.e("47233"),
                    n.e("84126"),
                    n.e("1787"),
                    n.e("46099"),
                    n.e("22876"),
                    n.e("42385"),
                    n.e("46849"),
                    n.e("147"),
                    n.e("76319"),
                    n.e("65751"),
                    n.e("47906"),
                    n.e("41893"),
                    n.e("27324"),
                    n.e("57885"),
                    n.e("16331"),
                    n.e("11351"),
                    n.e("7711"),
                    n.e("56649"),
                    n.e("24271"),
                    n.e("15433"),
                    n.e("36877"),
                    n.e("72963"),
                    n.e("7575"),
                    n.e("54241"),
                    n.e("24303"),
                    n.e("21930"),
                    n.e("80098"),
                    n.e("41786"),
                    n.e("22067"),
                    n.e("53683"),
                    n.e("55266"),
                    n.e("94138"),
                    n.e("48407"),
                    n.e("71294"),
                    n.e("96574"),
                    n.e("86262"),
                    n.e("27752"),
                    n.e("58262"),
                    n.e("95118"),
                    n.e("20491"),
                    n.e("19119"),
                    n.e("46004"),
                    n.e("47339"),
                    n.e("52397"),
                    n.e("74857"),
                    n.e("36637"),
                    n.e("84050"),
                    n.e("78"),
                    n.e("24981"),
                    n.e("9856"),
                    n.e("55752"),
                    n.e("53600"),
                ]).then(n.bind(n, 380035));
                return (t) =>
                    (0, i.jsx)(e, { ...t, userId: w.default.getId(), widget: l, trackUserProfileEditAction: r });
            },
            { stackingBehavior: "stack" },
        );
    }
    return (0, i.jsx)(A.Y, {
        targetElementRef: s,
        align: "top",
        position: "right",
        disablePointerEvents: !1,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(D.W, {
                "data-menu-migrated": !0,
                navId: "user-profile-widget-context-menu",
                onClose: () => {
                    (0, T.Z_)(), t();
                },
                onSelect: () => {},
                "aria-label": S.intl.string(S.t.xpSHSk),
                className: k.MK,
                children: (0, i.jsxs)(P.rX, {
                    children: [
                        a,
                        (0, i.jsx)(P.Dr, {
                            id: "remove-widget",
                            label: S.intl.string(S.t.Mm07Yc),
                            action: o,
                            color: "danger",
                            icon: _.u,
                            leadingAccessory: { type: "icon", icon: _.u },
                        }),
                    ],
                }),
            });
        },
        children: t,
    });
}
var L = n(297264),
    U = n(138134),
    z = n(365199),
    F = n(928658),
    H = n(253378);
function B(e) {
    let { widget: t, userId: n, className: s, menuItems: r } = e,
        o = l.useRef(null);
    function d() {
        (0, F.GJ)(n, t);
    }
    return (0, i.jsx)(A.Y, {
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
                    (0, T.Z_)(), t();
                },
                onSelect: () => {},
                "aria-label": S.intl.string(S.t.xpSHSk),
                children: (0, i.jsxs)(P.rX, {
                    children: [
                        r,
                        (0, i.jsx)(
                            P.Dr,
                            {
                                id: "flag-widget",
                                label: S.intl.string(S.t.D4GvHE),
                                action: d,
                                color: "danger",
                                icon: U.i,
                                leadingAccessory: { type: "icon", icon: U.i },
                            },
                            "flag-widget",
                        ),
                    ],
                }),
            });
        },
        children: (e) =>
            (0, i.jsx)(I.D, {
                ...e,
                innerRef: o,
                "aria-label": S.intl.string(S.t.xpSHSk),
                className: a()(H.x, s),
                children: (0, i.jsx)(z.j, { size: "sm", color: "currentColor" }),
            }),
    });
}
var K = n(337584);
function Y(e) {
    let {
        userId: t,
        headingId: n,
        widget: l,
        disableInteraction: s = !1,
        title: r,
        subtitle: o,
        actionButtons: d = [],
        className: c,
        additionalMenuItems: u,
    } = e;
    return (0, i.jsxs)("div", {
        className: a()(K.U1, c),
        children: [
            (0, i.jsxs)("div", {
                className: K.DD,
                children: [
                    (0, i.jsx)(L.D, { variant: "heading-sm/medium", color: "text-default", id: n, children: r }),
                    null != o && (0, i.jsx)(v.E, { variant: "text-xs/normal", color: "text-subtle", children: o }),
                ],
            }),
            (0, i.jsx)(q, { widget: l, actionButtons: d, disabledInteraction: s, userId: t, additionalMenuItems: u }),
        ],
    });
}
function q(e) {
    let { widget: t, actionButtons: n, disabledInteraction: l, userId: s, additionalMenuItems: a } = e,
        r = (0, p.bG)([w.default], () => w.default.getId());
    return l
        ? null
        : null != n && n.length > 0
          ? (0, i.jsx)("div", { className: K.o1, children: n })
          : r !== s
            ? (0, i.jsx)("div", {
                  className: K.o1,
                  children: (0, i.jsx)(B, {
                      widget: t,
                      userId: s,
                      className: K.AQ,
                      menuItems: null != a ? [a] : void 0,
                  }),
              })
            : null;
}
var J = n(192),
    V = n(519090);
function Z(e) {
    let { index: t, widget: n, additionalManageWidgetMenuItems: s, children: r, getWidth: d } = e,
        u = l.useRef(null),
        g = l.useRef(null),
        { registerManageWidgetButtonRef: x, manageFocusOnReorder: m } = (0, J.r)();
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
        className: a()(V.wX, { [V.A]: E, [V.Ze]: C, [V.Id]: j }),
        "aria-label": S.intl.formatToPlainString(S.t.YLczh4, { positionNumber: t + 1 }),
        children: [(0, i.jsx)(M, { buttonRef: u, widget: n, className: V.vn, additionalMenuItems: s }), r],
    });
}
function X(e) {
    let {
            userId: t,
            widget: n,
            children: s,
            allowEditing: c,
            disableInteraction: h,
            className: j,
            index: p,
            trailingContent: I,
            headerTitle: E,
            headerSubtitle: C,
            headerActionButtons: v,
            headerClassName: N,
            additionalManageWidgetMenuItems: b,
        } = e,
        A = (0, o.GV)(),
        D = l.useRef(null),
        P = (0, f.g)(),
        { trackUserProfileAction: _ } = (0, d.NJ)(),
        T = (function (e) {
            let { widget: t, onAction: n } = e,
                [i, s] = (0, l.useState)(!1),
                a = t instanceof m.R ? t.applicationId : null,
                { fetched: r } = (0, x.U)(a),
                o = (0, l.useCallback)(
                    (e) => {
                        e && (n({ action: "VIEW_WIDGET", ...t.getProfileAnalyticsOptions() }), s(!0));
                    },
                    [n, t],
                );
            return (0, g.K)(o, void 0, !i && (null == a || r));
        })({ widget: n, onAction: _ }),
        R = P === n.type;
    (0, u.A)(T, R);
    let w = c && null != p && !h;
    function W() {
        return (0, i.jsxs)("div", {
            ref: D,
            className: a()(V.kL, j),
            children: [
                (0, i.jsx)(Y, {
                    userId: t,
                    headingId: A,
                    title: E,
                    subtitle: C,
                    actionButtons: v,
                    widget: n,
                    disableInteraction: h,
                    className: N,
                    additionalMenuItems: b,
                }),
                (0, i.jsxs)(r.F, { children: [s, I] }),
            ],
        });
    }
    return (0, i.jsx)("section", {
        ref: T,
        "aria-labelledby": A,
        children: w
            ? (0, i.jsx)(Z, {
                  index: p ?? 0,
                  widget: n,
                  getWidth: () => D.current?.offsetWidth,
                  additionalManageWidgetMenuItems: b,
                  children: W(),
              })
            : W(),
    });
}
