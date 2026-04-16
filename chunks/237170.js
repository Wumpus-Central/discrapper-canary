n.d(e, { G: () => A, default: () => h });
var i,
    r = n(627968),
    s = n(64700),
    a = n(397927),
    l = n(544231),
    o = n(665909),
    c = n(464838),
    d = n(120340),
    E = n(196645),
    u = n(985018),
    _ = n(16459),
    A =
        (((i = {})[(i.INTRO = 0)] = "INTRO"),
        (i[(i.SAFETY_TIPS = 1)] = "SAFETY_TIPS"),
        (i[(i.TAKE_ACTION = 2)] = "TAKE_ACTION"),
        i);
let h = (t) => {
    let { warningId: e, warningType: n, senderId: i, modalProps: A, channelId: h } = t,
        [x, T] = s.useState(0),
        g = s.useMemo(
            () => ({ channelId: h, senderId: i, warningId: e, warningType: n, isNudgeWarning: !1 }),
            [h, i, e, n],
        );
    s.useEffect(() => {
        (0, o.QF)({ ...g, viewName: o.gN.SAFETY_TAKEOVER_MODAL });
    }, [g]);
    let m = s.useCallback(
            (t) => {
                (0, o._$)({ ...g, cta: t });
            },
            [g],
        ),
        [N, S] = s.useState(!1);
    function C(t) {
        T(t);
    }
    return (0, r.jsxs)(a.EOs, {
        "data-migration-pending": !0,
        transitionState: A.transitionState,
        parentComponent: "InappropriateConversationModal",
        children: [
            (0, r.jsx)("div", {
                className: _.kL,
                children: (0, r.jsxs)(a.tN_, {
                    width: 440,
                    activeSlide: x,
                    centered: !1,
                    overflow: "visible",
                    contentDisplay: "flex",
                    children: [
                        (0, r.jsx)(a.q7S, {
                            id: 0,
                            children: (0, r.jsx)(c.A, {
                                warningId: e,
                                senderId: i,
                                trackAnalyticsEvent: m,
                                onNavigate: C,
                            }),
                        }),
                        (0, r.jsx)(a.q7S, {
                            id: 1,
                            children: (0, r.jsx)(d.A, { warningId: e, senderId: i, trackAnalyticsEvent: m }),
                        }),
                        (0, r.jsx)(a.q7S, {
                            id: 2,
                            children: (0, r.jsx)(E.A, {
                                warningId: e,
                                senderId: i,
                                trackAnalyticsEvent: m,
                                channelId: h,
                                hasReported: N,
                                onReport: function () {
                                    S(!0);
                                },
                            }),
                        }),
                    ],
                }),
            }),
            (0, r.jsxs)(a.jlY, {
                "data-migration-pending": !0,
                className: _.qr,
                children: [
                    (0, r.jsx)(a.QWc, {
                        variant: "secondary",
                        size: "sm",
                        text: u.intl.string(u.t.cpT0Cq),
                        onClick: function () {
                            A.onClose(), (0, l.xi)(h, [e]), m(o.Wm.USER_TAKEOVER_MODAL_DISMISS);
                        },
                        textVariant: "text-sm/normal",
                    }),
                    0 !== x &&
                        (0, r.jsx)(a.QWc, {
                            variant: "secondary",
                            size: "sm",
                            text: u.intl.string(u.t["13/7kX"]),
                            textVariant: "text-sm/normal",
                            onClick: () => C(0),
                        }),
                ],
            }),
        ],
    });
};
