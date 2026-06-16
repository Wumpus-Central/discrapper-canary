e.d(n, { G: () => V, default: () => F });
var i,
    s = e(627968),
    a = e(64700),
    r = e(935462),
    l = e(430690),
    c = e(123292),
    d = e(544231),
    o = e(665909),
    x = e(117816);
function m(t) {
    let { alt: n, ariaLabel: e, ariaHidden: i, role: a, width: r = 288, height: l = 162 } = t;
    return (0, s.jsx)("img", {
        style: { width: r, height: l },
        src: x.A,
        alt: n,
        "aria-label": e,
        "aria-hidden": i,
        role: a ?? "img",
    });
}
var u = e(821609),
    A = e(17928),
    h = e(287809),
    E = e(427262),
    g = e(534514),
    _ = e(834730),
    T = e(230780);
function S(t) {
    let { heroImage: n, children: e, header: i, description: a } = t;
    return (0, s.jsxs)(s.Fragment, {
        children: [
            void 0 !== n && (0, s.jsx)("div", { className: T.c8, children: n }),
            (0, s.jsxs)(r.$m, {
                "data-migration-pending": !0,
                className: T.rf,
                children: [
                    (0, s.jsxs)("div", {
                        className: T.FS,
                        children: [
                            (0, s.jsx)(g.D, { variant: "heading-xl/semibold", color: "text-strong", children: i }),
                            null != a &&
                                (0, s.jsx)(_.E, {
                                    variant: "text-md/medium",
                                    color: "text-default",
                                    className: T.h_,
                                    children: a,
                                }),
                        ],
                    }),
                    e,
                ],
            }),
        ],
    });
}
var j = e(375708);
function O(t) {
    let { senderId: n, trackAnalyticsEvent: e, onNavigate: i } = t,
        a = (0, A.bG)([h.default], () => {
            let t = h.default.getUser(n);
            return E.Ay.getName(t);
        });
    return (0, s.jsx)(S, {
        header: j.intl.string(j.t.sSMgC6),
        description: j.intl.formatToPlainString(j.t.q2QrTY, { username: a }),
        heroImage: (0, s.jsx)(m, { alt: j.intl.string(j.t["3QhxXJ"]) }),
        children: (0, s.jsxs)("div", {
            className: T.UD,
            children: [
                (0, s.jsx)(u.$, {
                    text: j.intl.string(j.t["+o4Q7e"]),
                    variant: "primary",
                    fullWidth: !0,
                    onClick: () => {
                        i(V.TAKE_ACTION), e(o.Wm.USER_TAKEOVER_MODAL_TAKE_ACTION);
                    },
                }),
                (0, s.jsx)(u.$, {
                    text: j.intl.string(j.t.xLkGzP),
                    variant: "secondary",
                    fullWidth: !0,
                    onClick: () => {
                        i(V.SAFETY_TIPS), e(o.Wm.USER_TAKEOVER_MODAL_SAFETY_TIPS);
                    },
                }),
            ],
        }),
    });
}
var v = e(546);
function R(t) {
    let { alt: n, ariaLabel: e, ariaHidden: i, role: a, width: r = 288, height: l = 162 } = t;
    return (0, s.jsx)("img", {
        style: { width: r, height: l },
        src: v.A,
        alt: n,
        "aria-label": e,
        "aria-hidden": i,
        role: a ?? "img",
    });
}
var f = e(889229),
    p = e(327337);
function C(t) {
    let {} = t,
        n = (0, p.RU)();
    return (0, s.jsx)(S, {
        heroImage: (0, s.jsx)(R, { alt: j.intl.string(j.t["2mJo21"]) }),
        header: j.intl.string(j.t.eAbVfS),
        children: (0, s.jsx)("div", {
            className: T.lG,
            children: (0, s.jsx)(f.A, { tips: n, headerText: j.intl.string(j.t["0QSL1C"]) }),
        }),
    });
}
var I = e(285796),
    N = e(138134),
    k = e(534890),
    L = e(717398),
    K = e(975807),
    y = e(928658),
    U = e(426190),
    W = e(381689),
    M = e(994500),
    w = e(192311);
function D(t) {
    let { senderId: n, channelId: e, hasReported: i, onReport: r, trackAnalyticsEvent: l } = t,
        c = (0, A.bG)([M.A], () => M.A.isBlocked(n)),
        [d, x] = a.useState(c),
        m = (0, U.N)(),
        h = (0, U.z)(),
        [E, g] = a.useState(!1),
        _ = (0, w.W)(e),
        O = a.useMemo(() => (m ? 0 : h ? 2 : 1), [m, h]),
        v = async () => {
            null != _ &&
                (g(!0),
                await (0, y.LF)(
                    _,
                    () => {
                        W.A.showReportSuccessToast(n, e), r();
                    },
                    () => {
                        W.A.showFailedToast();
                    },
                ),
                g(!1),
                l(o.Wm.USER_TAKEOVER_MODAL_REPORT));
        },
        R = a.useMemo(() => {
            switch (O) {
                case 0:
                    return j.intl.string(j.t.sZf6cz);
                case 2:
                    return j.intl.string(j.t.HQ2nKl);
                default:
                    return j.intl.string(j.t["65XQar"]);
            }
        }, [O]);
    return (0, s.jsx)(S, {
        header: j.intl.string(j.t["mWO+ys"]),
        description: j.intl.string(j.t.S0XtKF),
        children: (0, s.jsxs)("div", {
            className: T.UD,
            children: [
                (0, s.jsx)(u.$, {
                    text: d ? j.intl.string(j.t.XyHpKH) : j.intl.string(j.t.l4Emac),
                    variant: "primary",
                    fullWidth: !0,
                    icon: I.a,
                    onClick: () => {
                        d
                            ? (x(!1),
                              L.A.unblockUser(n, { location: p.Ht }),
                              l(o.Wm.USER_TAKEOVER_MODAL_UNBLOCK),
                              W.A.showUnblockSuccessToast(n, e))
                            : (x(!0),
                              l(o.Wm.USER_TAKEOVER_MODAL_BLOCK),
                              L.A.blockUser(n, { location: p.Ht }).then(() => {
                                  W.A.showBlockSuccessToast(n, e);
                              }));
                    },
                }),
                (0, s.jsx)(u.$, {
                    text: i ? j.intl.string(j.t.QvwOJ6) : j.intl.string(j.t["7fHyE6"]),
                    variant: "secondary",
                    fullWidth: !0,
                    icon: N.i,
                    onClick: v,
                    loading: E,
                    disabled: i,
                }),
                (0, s.jsx)(u.$, {
                    text: R,
                    variant: "secondary",
                    fullWidth: !0,
                    icon: k.o,
                    onClick: () => {
                        0 === O
                            ? ((0, K.A)(p.x7), l(o.Wm.USER_TAKEOVER_MODAL_CTL))
                            : 2 === O
                              ? ((0, K.A)(p.CL), l(o.Wm.USER_TAKEOVER_MODAL_THROUGHLINE))
                              : ((0, K.A)(p.jR), l(o.Wm.USER_TAKEOVER_MODAL_NO_FILTR));
                    },
                }),
            ],
        }),
    });
}
var b = e(16459),
    V =
        (((i = {})[(i.INTRO = 0)] = "INTRO"),
        (i[(i.SAFETY_TIPS = 1)] = "SAFETY_TIPS"),
        (i[(i.TAKE_ACTION = 2)] = "TAKE_ACTION"),
        i);
let F = (t) => {
    let { warningId: n, warningType: e, senderId: i, modalProps: x, channelId: m } = t,
        [u, A] = a.useState(0),
        h = a.useMemo(
            () => ({ channelId: m, senderId: i, warningId: n, warningType: e, isNudgeWarning: !1 }),
            [m, i, n, e],
        );
    a.useEffect(() => {
        (0, o.QF)({ ...h, viewName: o.gN.SAFETY_TAKEOVER_MODAL });
    }, [h]);
    let E = a.useCallback(
            (t) => {
                (0, o._$)({ ...h, cta: t });
            },
            [h],
        ),
        [g, _] = a.useState(!1);
    function T(t) {
        A(t);
    }
    return (0, s.jsxs)(r.EO, {
        "data-migration-pending": !0,
        transitionState: x.transitionState,
        parentComponent: "InappropriateConversationModal",
        children: [
            (0, s.jsx)("div", {
                className: b.kL,
                children: (0, s.jsxs)(l.t, {
                    width: 440,
                    activeSlide: u,
                    centered: !1,
                    overflow: "visible",
                    contentDisplay: "flex",
                    children: [
                        (0, s.jsx)(l.q, {
                            id: 0,
                            children: (0, s.jsx)(O, {
                                warningId: n,
                                senderId: i,
                                trackAnalyticsEvent: E,
                                onNavigate: T,
                            }),
                        }),
                        (0, s.jsx)(l.q, {
                            id: 1,
                            children: (0, s.jsx)(C, { warningId: n, senderId: i, trackAnalyticsEvent: E }),
                        }),
                        (0, s.jsx)(l.q, {
                            id: 2,
                            children: (0, s.jsx)(D, {
                                warningId: n,
                                senderId: i,
                                trackAnalyticsEvent: E,
                                channelId: m,
                                hasReported: g,
                                onReport: function () {
                                    _(!0);
                                },
                            }),
                        }),
                    ],
                }),
            }),
            (0, s.jsxs)(r.jl, {
                "data-migration-pending": !0,
                className: b.qr,
                children: [
                    (0, s.jsx)(c.Q, {
                        variant: "secondary",
                        size: "sm",
                        text: j.intl.string(j.t.cpT0Cq),
                        onClick: function () {
                            x.onClose(), (0, d.xi)(m, [n]), E(o.Wm.USER_TAKEOVER_MODAL_DISMISS);
                        },
                        textVariant: "text-sm/normal",
                    }),
                    0 !== u &&
                        (0, s.jsx)(c.Q, {
                            variant: "secondary",
                            size: "sm",
                            text: j.intl.string(j.t["13/7kX"]),
                            textVariant: "text-sm/normal",
                            onClick: () => T(0),
                        }),
                ],
            }),
        ],
    });
};
