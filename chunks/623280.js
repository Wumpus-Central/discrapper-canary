n.d(t, { A: () => X });
var i = n(477900),
    l = n(582128),
    a = n(503698),
    s = n.n(a),
    r = n(707554),
    o = n(915089),
    d = n(183555),
    c = n(735321),
    u = n(94343),
    g = n(172218),
    m = n(704824);
n(456647);
var x = n(633075),
    h = n(451395),
    f = n(716804),
    I = n(686246),
    j = n(17928),
    p = n(939249),
    E = n(772838),
    C = n(140735),
    v = n(834730),
    N = n(866665),
    b = n(192308),
    A = n(922016),
    D = n(980707),
    P = n(477782),
    T = n(241326),
    _ = n(442433),
    R = n(775602),
    w = n(280450),
    W = n(384377),
    y = n(518477),
    S = n(375708),
    k = n(222670);
function M(e) {
    let { widget: t, className: n, buttonRef: l, additionalMenuItems: a } = e,
        r = (0, c.L)(t),
        d = (0, o.GV)();
    return (0, i.jsx)(O, {
        targetRef: l,
        widget: t,
        additionalMenuItems: a,
        children: (e) =>
            (0, i.jsx)(G, {
                children: (0, i.jsxs)(p.D, {
                    innerRef: l,
                    className: s()(k.x6, n),
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
function G(e) {
    let { children: t } = e,
        n = (0, j.bG)([R.Ay], () => R.Ay.keyboardModeEnabled),
        { isDragging: l } = (0, I.V)((e) => ({ isDragging: e.isDragging() }));
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
function O(e) {
    let { children: t, widget: l, targetRef: a, additionalMenuItems: s } = e,
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
                    n.e("365436"),
                    n.e("10211"),
                    n.e("841828"),
                    n.e("110268"),
                    n.e("236248"),
                    n.e("589039"),
                    n.e("532318"),
                    n.e("176430"),
                    n.e("484126"),
                    n.e("500330"),
                    n.e("746099"),
                    n.e("622876"),
                    n.e("42385"),
                    n.e("546849"),
                    n.e("253424"),
                    n.e("165751"),
                    n.e("547906"),
                    n.e("741893"),
                    n.e("327324"),
                    n.e("957885"),
                    n.e("516331"),
                    n.e("611351"),
                    n.e("634171"),
                    n.e("607711"),
                    n.e("956649"),
                    n.e("333473"),
                    n.e("415433"),
                    n.e("307575"),
                    n.e("572963"),
                    n.e("554241"),
                    n.e("724303"),
                    n.e("521930"),
                    n.e("36877"),
                    n.e("627323"),
                    n.e("280098"),
                    n.e("741786"),
                    n.e("553683"),
                    n.e("55266"),
                    n.e("694138"),
                    n.e("723934"),
                    n.e("979483"),
                    n.e("571294"),
                    n.e("186262"),
                    n.e("227752"),
                    n.e("958262"),
                    n.e("347430"),
                    n.e("395118"),
                    n.e("182816"),
                    n.e("819119"),
                    n.e("247339"),
                    n.e("219554"),
                    n.e("274857"),
                    n.e("736637"),
                    n.e("631951"),
                    n.e("78"),
                    n.e("124981"),
                    n.e("915389"),
                    n.e("787320"),
                    n.e("509856"),
                    n.e("655752"),
                    n.e("353600"),
                ]).then(n.bind(n, 380035));
                return (t) =>
                    (0, i.jsx)(e, { ...t, userId: w.default.getId(), widget: l, trackUserProfileEditAction: r });
            },
            { stackingBehavior: "stack" },
        );
    }
    return (0, i.jsx)(A.Y, {
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
                    (0, _.Z_)(), t();
                },
                onSelect: () => {},
                "aria-label": S.intl.string(S.t.xpSHSk),
                className: k.MK,
                children: (0, i.jsxs)(P.rX, {
                    children: [
                        s,
                        (0, i.jsx)(P.Dr, {
                            id: "remove-widget",
                            label: S.intl.string(S.t.Mm07Yc),
                            action: o,
                            color: "danger",
                            icon: T.TrashIcon,
                            leadingAccessory: { type: "icon", icon: T.TrashIcon },
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
    let { widget: t, userId: n, className: a, menuItems: r } = e,
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
                    (0, _.Z_)(), t();
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
                                icon: U.FlagIcon,
                                leadingAccessory: { type: "icon", icon: U.FlagIcon },
                            },
                            "flag-widget",
                        ),
                    ],
                }),
            });
        },
        children: (e) =>
            (0, i.jsx)(p.D, {
                ...e,
                innerRef: o,
                "aria-label": S.intl.string(S.t.xpSHSk),
                className: s()(H.x, a),
                children: (0, i.jsx)(z.MoreHorizontalIcon, { size: "sm", color: "currentColor" }),
            }),
    });
}
var K = n(337584);
function Y(e) {
    let {
        userId: t,
        headingId: n,
        widget: l,
        disableInteraction: a = !1,
        title: r,
        subtitle: o,
        actionButtons: d = [],
        className: c,
        additionalMenuItems: u,
    } = e;
    return (0, i.jsxs)("div", {
        className: s()(K.U1, c),
        children: [
            (0, i.jsxs)("div", {
                className: K.DD,
                children: [
                    (0, i.jsx)(L.D, { variant: "heading-sm/medium", color: "text-default", id: n, children: r }),
                    null != o && (0, i.jsx)(v.E, { variant: "text-xs/normal", color: "text-subtle", children: o }),
                ],
            }),
            (0, i.jsx)(q, { widget: l, actionButtons: d, disabledInteraction: a, userId: t, additionalMenuItems: u }),
        ],
    });
}
function q(e) {
    let { widget: t, actionButtons: n, disabledInteraction: l, userId: a, additionalMenuItems: s } = e,
        r = (0, j.bG)([w.default], () => w.default.getId());
    return l
        ? null
        : null != n && n.length > 0
          ? (0, i.jsx)("div", { className: K.o1, children: n })
          : r !== a
            ? (0, i.jsx)("div", {
                  className: K.o1,
                  children: (0, i.jsx)(B, {
                      widget: t,
                      userId: a,
                      className: K.AQ,
                      menuItems: null != s ? [s] : void 0,
                  }),
              })
            : null;
}
var J = n(192),
    V = n(519090);
function Z(e) {
    let { index: t, widget: n, additionalManageWidgetMenuItems: a, children: r, getWidth: d } = e,
        u = l.useRef(null),
        g = l.useRef(null),
        { registerManageWidgetButtonRef: m, manageFocusOnReorder: x } = (0, J.r)();
    l.useLayoutEffect(() => {
        let e = m(n.type);
        return e(u.current), () => e(null);
    }, [m, n.type]);
    let f = l.useMemo(() => n.id ?? (0, o.Ld)(), [n.id]),
        { isDragging: I, dragSourcePosition: j } = (0, h.gY)({
            dragRef: u,
            dropRef: g,
            index: t,
            listType: "WIDGETS",
            itemType: "WIDGET",
            itemId: f,
            itemPreviewProps: { widget: n, getWidth: d },
            onReorder: c.R_,
            onEnd: () => x(n.type),
        }),
        p = null != j,
        E = p && t < j,
        C = p && t > j;
    return (0, i.jsxs)("div", {
        ref: g,
        className: s()(V.wX, { [V.A]: E, [V.Ze]: C, [V.Id]: I }),
        "aria-label": S.intl.formatToPlainString(S.t.YLczh4, { positionNumber: t + 1 }),
        children: [(0, i.jsx)(M, { buttonRef: u, widget: n, className: V.vn, additionalMenuItems: a }), r],
    });
}
function X(e) {
    let {
            userId: t,
            widget: n,
            children: a,
            allowEditing: c,
            disableInteraction: h,
            className: I,
            index: j,
            trailingContent: p,
            headerTitle: E,
            headerSubtitle: C,
            headerActionButtons: v,
            headerClassName: N,
            additionalManageWidgetMenuItems: b,
        } = e,
        A = (0, o.GV)(),
        D = l.useRef(null),
        P = (0, f.g)(),
        { trackUserProfileAction: T } = (0, d.NJ)(),
        _ = (function (e) {
            let { widget: t, onAction: n } = e,
                [i, a] = (0, l.useState)(!1),
                s = t instanceof x.R ? t.applicationId : null,
                { fetched: r } = (0, m.U)(s),
                o = (0, l.useCallback)(
                    (e) => {
                        e && (n({ action: "VIEW_WIDGET", ...t.getProfileAnalyticsOptions() }), a(!0));
                    },
                    [n, t],
                );
            return (0, g.K)(o, void 0, !i && (null == s || r));
        })({ widget: n, onAction: T }),
        R = P === n.type;
    (0, u.A)(_, R);
    let w = c && null != j && !h;
    function W() {
        return (0, i.jsxs)("div", {
            ref: D,
            className: s()(V.kL, I),
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
                (0, i.jsxs)(r.F, { children: [a, p] }),
            ],
        });
    }
    return (0, i.jsx)("section", {
        ref: _,
        "aria-labelledby": A,
        children: w
            ? (0, i.jsx)(Z, {
                  index: j ?? 0,
                  widget: n,
                  getWidth: () => D.current?.offsetWidth,
                  additionalManageWidgetMenuItems: b,
                  children: W(),
              })
            : W(),
    });
}
