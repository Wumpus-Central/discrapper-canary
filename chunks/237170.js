n.d(e, { G: () => m, default: () => x });
var a,
    i = n(627968),
    r = n(64700),
    s = n(935462),
    l = n(430690),
    o = n(123292),
    c = n(544231),
    d = n(665909),
    E = n(464838),
    u = n(120340),
    A = n(196645),
    _ = n(985018),
    h = n(16459),
    m =
        (((a = {})[(a.INTRO = 0)] = "INTRO"),
        (a[(a.SAFETY_TIPS = 1)] = "SAFETY_TIPS"),
        (a[(a.TAKE_ACTION = 2)] = "TAKE_ACTION"),
        a);
let x = (t) => {
    let { warningId: e, warningType: n, senderId: a, modalProps: m, channelId: x } = t,
        [T, g] = r.useState(0),
        p = r.useMemo(
            () => ({ channelId: x, senderId: a, warningId: e, warningType: n, isNudgeWarning: !1 }),
            [x, a, e, n],
        );
    r.useEffect(() => {
        (0, d.QF)({ ...p, viewName: d.gN.SAFETY_TAKEOVER_MODAL });
    }, [p]);
    let f = r.useCallback(
            (t) => {
                (0, d._$)({ ...p, cta: t });
            },
            [p],
        ),
        [C, N] = r.useState(!1);
    function b(t) {
        g(t);
    }
    return (0, i.jsxs)(s.EO, {
        "data-migration-pending": !0,
        transitionState: m.transitionState,
        parentComponent: "InappropriateConversationModal",
        children: [
            (0, i.jsx)("div", {
                className: h.kL,
                children: (0, i.jsxs)(l.t, {
                    width: 440,
                    activeSlide: T,
                    centered: !1,
                    overflow: "visible",
                    contentDisplay: "flex",
                    children: [
                        (0, i.jsx)(l.q, {
                            id: 0,
                            children: (0, i.jsx)(E.A, {
                                warningId: e,
                                senderId: a,
                                trackAnalyticsEvent: f,
                                onNavigate: b,
                            }),
                        }),
                        (0, i.jsx)(l.q, {
                            id: 1,
                            children: (0, i.jsx)(u.A, { warningId: e, senderId: a, trackAnalyticsEvent: f }),
                        }),
                        (0, i.jsx)(l.q, {
                            id: 2,
                            children: (0, i.jsx)(A.A, {
                                warningId: e,
                                senderId: a,
                                trackAnalyticsEvent: f,
                                channelId: x,
                                hasReported: C,
                                onReport: function () {
                                    N(!0);
                                },
                            }),
                        }),
                    ],
                }),
            }),
            (0, i.jsxs)(s.jl, {
                "data-migration-pending": !0,
                className: h.qr,
                children: [
                    (0, i.jsx)(o.Q, {
                        variant: "secondary",
                        size: "sm",
                        text: _.intl.string(_.t.cpT0Cq),
                        onClick: function () {
                            m.onClose(), (0, c.xi)(x, [e]), f(d.Wm.USER_TAKEOVER_MODAL_DISMISS);
                        },
                        textVariant: "text-sm/normal",
                    }),
                    0 !== T &&
                        (0, i.jsx)(o.Q, {
                            variant: "secondary",
                            size: "sm",
                            text: _.intl.string(_.t["13/7kX"]),
                            textVariant: "text-sm/normal",
                            onClick: () => b(0),
                        }),
                ],
            }),
        ],
    });
};
