t.d(n, { A: () => ee });
var i = t(477900),
    l = t(582128),
    r = t(503698),
    a = t.n(r),
    s = t(707554),
    o = t(915089),
    d = t(183555),
    c = t(735321),
    u = t(94343),
    g = t(172218),
    m = t(704824);
t(456647);
var h = t(633075),
    x = t(451395),
    f = t(716804),
    p = t(675816),
    j = t(855986),
    I = t(939249),
    E = t(772838),
    b = t(140735),
    A = t(834730),
    C = t(866665),
    v = t(192308),
    y = t(265872),
    N = t(165862),
    D = t(477782),
    T = t(241326),
    P = t(442433),
    R = t(775602),
    k = t(46653),
    _ = t(384377),
    w = t(518477),
    W = t(792996),
    O = t(347727);
function S(e) {
    let { widget: n, className: t, buttonRef: l, additionalMenuItems: r } = e,
        s = (0, c.L)(n),
        d = (0, o.GV)();
    return (0, i.jsx)(G, {
        targetRef: l,
        widget: n,
        additionalMenuItems: r,
        children: (e) =>
            (0, i.jsx)(M, {
                children: (0, i.jsxs)(I.D, {
                    innerRef: l,
                    className: a()(O.x6, t),
                    "data-dnd-name": s,
                    "aria-label": W.intl.formatToPlainString(W.t.HWNJJN, { widgetTitle: s }),
                    "aria-describedby": d,
                    "aria-keyshortcuts": "Control+D, Meta+D",
                    ...e,
                    children: [
                        (0, i.jsx)(E.DragIcon, { size: "sm" }),
                        (0, i.jsx)(b.A, { id: d, children: W.intl.string(W.t.bsuqFn) }),
                    ],
                }),
            }),
    });
}
function M(e) {
    let { children: n } = e,
        t = (0, j.bG)([R.Ay], () => R.Ay.keyboardModeEnabled),
        { isDragging: l } = (0, p.V)((e) => ({ isDragging: e.isDragging() }));
    return (0, i.jsx)(C.m, {
        __unsupportedReactNodeAsText: (0, i.jsxs)("div", {
            className: O.HE,
            children: [
                (0, i.jsx)(A.E, {
                    variant: "body-sm/normal",
                    color: "none",
                    children: W.intl.format(t ? W.t["zvln/l"] : W.t["7cdwhg"], {
                        emphasizeHook: (e) => (0, i.jsx)("strong", { children: e }),
                    }),
                }),
                (0, i.jsx)(A.E, {
                    variant: "body-sm/normal",
                    color: "none",
                    children: W.intl.format(W.t["4e0rM4"], {
                        emphasizeHook: (e) => (0, i.jsx)("strong", { children: e }),
                    }),
                }),
            ],
        }),
        position: "top",
        shouldShow: !0 !== l,
        ariaHidden: !0,
        children: n,
    });
}
function G(e) {
    let { children: n, widget: l, targetRef: r, additionalMenuItems: a } = e,
        { trackUserProfileEditAction: s } = (0, d.NJ)();
    function o(e) {
        if (e.shiftKey) {
            ((0, c.qA)(l),
                s({ action: "WIDGET_REMOVED", ...l.getProfileEditAnalyticsOptions() }),
                (0, _.XA)(w.jM.WIDGET_REMOVED));
            return;
        }
        (0, v.mM)(
            async () => {
                let { default: e } = await Promise.all([
                    t.e(148758),
                    t.e(319714),
                    t.e(82171),
                    t.e(36026),
                    t.e(249918),
                    t.e(269614),
                    t.e(372883),
                    t.e(244941),
                    t.e(598263),
                    t.e(709546),
                    t.e(991625),
                    t.e(230029),
                    t.e(825661),
                    t.e(487458),
                    t.e(938177),
                    t.e(62567),
                    t.e(891089),
                    t.e(585733),
                    t.e(861973),
                    t.e(174554),
                    t.e(196063),
                    t.e(392028),
                    t.e(124054),
                    t.e(441674),
                    t.e(152862),
                    t.e(148326),
                    t.e(148729),
                    t.e(650195),
                    t.e(401317),
                    t.e(311580),
                    t.e(67702),
                    t.e(662387),
                    t.e(31544),
                    t.e(334168),
                    t.e(93012),
                    t.e(715867),
                    t.e(249938),
                    t.e(266201),
                    t.e(752704),
                    t.e(56606),
                    t.e(678749),
                    t.e(327545),
                    t.e(163466),
                    t.e(940298),
                    t.e(738015),
                    t.e(234017),
                    t.e(40791),
                    t.e(358404),
                    t.e(996907),
                    t.e(831130),
                    t.e(599618),
                    t.e(377989),
                    t.e(334733),
                    t.e(706073),
                    t.e(227512),
                    t.e(806152),
                    t.e(331249),
                    t.e(679502),
                    t.e(734818),
                    t.e(245652),
                    t.e(788938),
                    t.e(104864),
                    t.e(420446),
                    t.e(119766),
                    t.e(887789),
                    t.e(589154),
                    t.e(425292),
                    t.e(412408),
                    t.e(888499),
                    t.e(193457),
                    t.e(839182),
                    t.e(546547),
                    t.e(102075),
                    t.e(892937),
                    t.e(570385),
                    t.e(490449),
                    t.e(52727),
                    t.e(467506),
                    t.e(342551),
                    t.e(194277),
                    t.e(339282),
                    t.e(454048),
                    t.e(300699),
                    t.e(349619),
                    t.e(264236),
                    t.e(922716),
                    t.e(398125),
                    t.e(221825),
                    t.e(930758),
                    t.e(901555),
                    t.e(593600),
                    t.e(707826),
                    t.e(890027),
                    t.e(638221),
                    t.e(492762),
                    t.e(851130),
                    t.e(417286),
                    t.e(717907),
                    t.e(361626),
                    t.e(646506),
                    t.e(27773),
                    t.e(445421),
                    t.e(721690),
                    t.e(302008),
                    t.e(761935),
                    t.e(87306),
                    t.e(502018),
                    t.e(276863),
                    t.e(441432),
                    t.e(728633),
                    t.e(35757),
                    t.e(570506),
                    t.e(951811),
                    t.e(787672),
                    t.e(522517),
                    t.e(996830),
                    t.e(234236),
                    t.e(832817),
                    t.e(416143),
                    t.e(401590),
                    t.e(844695),
                    t.e(213653),
                    t.e(92124),
                    t.e(123353),
                    t.e(50015),
                    t.e(988077),
                    t.e(776750),
                    t.e(232551),
                    t.e(631644),
                    t.e(561216),
                    t.e(692835),
                    t.e(588940),
                    t.e(21219),
                    t.e(829177),
                    t.e(106943),
                    t.e(348674),
                    t.e(494768),
                    t.e(14962),
                    t.e(482861),
                    t.e(786751),
                    t.e(401827),
                    t.e(422891),
                    t.e(790244),
                    t.e(344265),
                    t.e(489949),
                    t.e(592731),
                    t.e(723794),
                    t.e(894747),
                    t.e(695881),
                    t.e(637721),
                    t.e(958428),
                    t.e(482815),
                    t.e(547646),
                    t.e(288004),
                    t.e(240511),
                    t.e(718573),
                    t.e(346102),
                    t.e(377766),
                    t.e(545587),
                    t.e(170653),
                    t.e(376883),
                    t.e(647211),
                    t.e(799657),
                    t.e(810034),
                    t.e(817852),
                    t.e(784103),
                    t.e(614784),
                    t.e(8563),
                    t.e(499941),
                    t.e(509793),
                    t.e(831145),
                    t.e(187856),
                    t.e(960286),
                    t.e(610449),
                    t.e(32781),
                    t.e(996218),
                    t.e(231578),
                    t.e(488990),
                    t.e(959134),
                    t.e(332470),
                    t.e(729599),
                    t.e(288705),
                    t.e(371482),
                    t.e(912773),
                    t.e(35403),
                    t.e(662355),
                    t.e(872648),
                    t.e(482652),
                    t.e(464242),
                    t.e(220518),
                    t.e(88160),
                    t.e(209518),
                    t.e(748015),
                    t.e(338516),
                    t.e(736926),
                    t.e(450048),
                    t.e(587244),
                    t.e(896137),
                    t.e(957506),
                    t.e(631573),
                    t.e(362422),
                    t.e(3131),
                    t.e(789573),
                    t.e(732272),
                    t.e(220287),
                    t.e(536973),
                    t.e(914248),
                    t.e(647177),
                    t.e(43358),
                    t.e(817551),
                    t.e(913823),
                    t.e(480436),
                    t.e(546601),
                    t.e(776793),
                    t.e(24914),
                    t.e(332335),
                    t.e(134504),
                    t.e(248985),
                    t.e(553683),
                    t.e(181162),
                    t.e(746623),
                    t.e(720161),
                    t.e(540077),
                    t.e(787320),
                    t.e(124981),
                    t.e(80477),
                    t.e(353600),
                ]).then(t.bind(t, 380035));
                return (n) =>
                    (0, i.jsx)(e, { ...n, userId: k.default.getId(), widget: l, trackUserProfileEditAction: s });
            },
            { stackingBehavior: "stack" },
        );
    }
    return (0, i.jsx)(y.Y, {
        targetElementRef: r,
        align: "top",
        position: "right",
        disablePointerEvents: !1,
        renderPopout: (e) => {
            let { closePopout: n } = e;
            return (0, i.jsx)(N.W, {
                "data-menu-migrated": !0,
                navId: "user-profile-widget-context-menu",
                onClose: () => {
                    ((0, P.Z_)(), n());
                },
                onSelect: () => {},
                "aria-label": W.intl.string(W.t.xpSHSk),
                className: O.MK,
                children: (0, i.jsxs)(D.rX, {
                    children: [
                        a,
                        (0, i.jsx)(D.Dr, {
                            id: "remove-widget",
                            label: W.intl.string(W.t.Mm07Yc),
                            action: o,
                            color: "danger",
                            icon: T.TrashIcon,
                            leadingAccessory: { type: "icon", icon: T.TrashIcon },
                        }),
                    ],
                }),
            });
        },
        children: n,
    });
}
var L = t(534514),
    F = t(138134),
    U = t(365199),
    z = t(627363),
    H = t(587895),
    B = t(928658);
function q(e, n, t) {
    t?.conjureProjectId != null ? (0, B.r3)({ application: t, entrypoint: "user_profile_widget" }) : (0, B.GJ)(e, n);
}
var K = t(216473);
function Y(e) {
    let { widget: n, userId: t, className: r, menuItems: s } = e,
        o = l.useRef(null);
    function d() {
        !(function (e, n) {
            if (!(n instanceof h.R)) return (0, B.GJ)(e, n);
            let { applicationId: t } = n;
            H.A.isHydrated(t)
                ? q(e, n, H.A.getApplication(t))
                : z.Ay.fetchApplication(t)
                      .then(() => q(e, n, H.A.getApplication(t)))
                      .catch(() => (0, B.GJ)(e, n));
        })(t, n);
    }
    return (0, i.jsx)(y.Y, {
        targetElementRef: o,
        align: "top",
        position: "right",
        disablePointerEvents: !1,
        renderPopout: (e) => {
            let { closePopout: n } = e;
            return (0, i.jsx)(N.W, {
                "data-menu-migrated": !0,
                navId: "user-profile-widget-context-menu",
                onClose: () => {
                    ((0, P.Z_)(), n());
                },
                onSelect: () => {},
                "aria-label": W.intl.string(W.t.xpSHSk),
                children: (0, i.jsxs)(D.rX, {
                    children: [
                        s,
                        (0, i.jsx)(
                            D.Dr,
                            {
                                id: "flag-widget",
                                label: W.intl.string(W.t.D4GvHE),
                                action: d,
                                color: "danger",
                                icon: F.FlagIcon,
                                leadingAccessory: { type: "icon", icon: F.FlagIcon },
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
                "aria-label": W.intl.string(W.t.xpSHSk),
                className: a()(K.x, r),
                children: (0, i.jsx)(U.MoreHorizontalIcon, { size: "sm", color: "currentColor" }),
            }),
    });
}
var J = t(948939);
function V(e) {
    let {
        userId: n,
        headingId: t,
        widget: l,
        disableInteraction: r = !1,
        title: s,
        subtitle: o,
        actionButtons: d = [],
        className: c,
        additionalMenuItems: u,
    } = e;
    return (0, i.jsxs)("div", {
        className: a()(J.U1, c),
        children: [
            (0, i.jsxs)("div", {
                className: J.DD,
                children: [
                    (0, i.jsx)(L.D, { variant: "heading-xs/medium", color: "text-default", id: t, children: s }),
                    null != o && (0, i.jsx)(A.E, { variant: "body-xs/normal", color: "text-subtle", children: o }),
                ],
            }),
            (0, i.jsx)(X, { widget: l, actionButtons: d, disabledInteraction: r, userId: n, additionalMenuItems: u }),
        ],
    });
}
function X(e) {
    let { widget: n, actionButtons: t, disabledInteraction: l, userId: r, additionalMenuItems: a } = e,
        s = (0, j.bG)([k.default], () => k.default.getId());
    return l
        ? null
        : null != t && t.length > 0
          ? (0, i.jsx)("div", { className: J.o1, children: t })
          : s !== r
            ? (0, i.jsx)("div", {
                  className: J.o1,
                  children: (0, i.jsx)(Y, {
                      widget: n,
                      userId: r,
                      className: J.AQ,
                      menuItems: null != a ? [a] : void 0,
                  }),
              })
            : null;
}
var Z = t(192),
    $ = t(223503);
function Q(e) {
    let { index: n, widget: t, additionalManageWidgetMenuItems: r, children: s, getWidth: d } = e,
        u = l.useRef(null),
        g = l.useRef(null),
        { registerManageWidgetButtonRef: m, manageFocusOnReorder: h } = (0, Z.r)(),
        f = t.getUniqueKey();
    l.useLayoutEffect(() => {
        let e = m(t.type, f);
        return (e(u.current), () => e(null));
    }, [m, t.type, f]);
    let p = l.useMemo(() => t.id ?? (0, o.Ld)(), [t.id]),
        { isDragging: j, dragSourcePosition: I } = (0, x.gY)({
            dragRef: u,
            dropRef: g,
            index: n,
            listType: "WIDGETS",
            itemType: "WIDGET",
            itemId: p,
            itemPreviewProps: { widget: t, getWidth: d },
            onReorder: c.R_,
            onEnd: () => h(t.type),
        }),
        E = null != I,
        b = E && n < I,
        A = E && n > I;
    return (0, i.jsxs)("div", {
        ref: g,
        className: a()($.wX, { [$.A]: b, [$.Ze]: A, [$.Id]: j }),
        "aria-label": W.intl.formatToPlainString(W.t.YLczh4, { positionNumber: n + 1 }),
        children: [(0, i.jsx)(S, { buttonRef: u, widget: t, className: $.vn, additionalMenuItems: r }), s],
    });
}
function ee(e) {
    let {
            userId: n,
            widget: t,
            children: r,
            allowEditing: c,
            disableInteraction: x,
            className: p,
            index: j,
            trailingContent: I,
            headerTitle: E,
            headerSubtitle: b,
            headerActionButtons: A,
            headerClassName: C,
            additionalManageWidgetMenuItems: v,
        } = e,
        y = (0, o.GV)(),
        N = l.useRef(null),
        D = (0, f.g)(),
        { trackUserProfileAction: T } = (0, d.NJ)(),
        P = (function (e) {
            let { widget: n, onAction: t } = e,
                [i, r] = (0, l.useState)(!1),
                a = n instanceof h.R ? n.applicationId : null,
                { fetched: s } = (0, m.U)(a),
                o = (0, l.useCallback)(
                    (e) => {
                        e && (t({ action: "VIEW_WIDGET", ...n.getProfileAnalyticsOptions() }), r(!0));
                    },
                    [t, n],
                );
            return (0, g.K)(o, void 0, !i && (null == a || s));
        })({ widget: t, onAction: T }),
        R = D === t.type;
    (0, u.A)(P, R);
    let k = c && null != j && !x;
    function _() {
        return (0, i.jsxs)("div", {
            ref: N,
            className: a()($.kL, p),
            children: [
                (0, i.jsx)(V, {
                    userId: n,
                    headingId: y,
                    title: E,
                    subtitle: b,
                    actionButtons: A,
                    widget: t,
                    disableInteraction: x,
                    className: C,
                    additionalMenuItems: v,
                }),
                (0, i.jsxs)(s.F, { children: [r, I] }),
            ],
        });
    }
    return (0, i.jsx)("section", {
        ref: P,
        "aria-labelledby": y,
        children: k
            ? (0, i.jsx)(Q, {
                  index: j ?? 0,
                  widget: t,
                  getWidth: () => N.current?.offsetWidth,
                  additionalManageWidgetMenuItems: v,
                  children: _(),
              })
            : _(),
    });
}
