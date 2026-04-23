n.d(e, { G: () => K, default: () => F });
var a,
    i = n(627968),
    s = n(64700),
    r = n(935462),
    l = n(430690),
    o = n(123292),
    c = n(544231),
    d = n(665909),
    E = n(117816);
function u(t) {
    let { alt: e, ariaLabel: n, ariaHidden: a, role: s, width: r = 288, height: l = 162 } = t;
    return (0, i.jsx)("img", {
        style: { width: r, height: l },
        src: E.A,
        alt: e,
        "aria-label": n,
        "aria-hidden": a,
        role: s ?? "img",
    });
}
var _ = n(821609),
    h = n(17928),
    A = n(287809),
    m = n(427262),
    x = n(534514),
    T = n(834730),
    g = n(230780);
function p(t) {
    let { heroImage: e, children: n, header: a, description: s } = t;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            void 0 !== e && (0, i.jsx)("div", { className: g.c8, children: e }),
            (0, i.jsxs)(r.$m, {
                "data-migration-pending": !0,
                className: g.rf,
                children: [
                    (0, i.jsxs)("div", {
                        className: g.FS,
                        children: [
                            (0, i.jsx)(x.D, { variant: "heading-xl/semibold", color: "text-strong", children: a }),
                            null != s &&
                                (0, i.jsx)(T.E, {
                                    variant: "text-md/medium",
                                    color: "text-default",
                                    className: g.h_,
                                    children: s,
                                }),
                        ],
                    }),
                    n,
                ],
            }),
        ],
    });
}
var f = n(985018);
function C(t) {
    let { senderId: e, trackAnalyticsEvent: n, onNavigate: a } = t,
        s = (0, h.bG)([A.default], () => {
            let t = A.default.getUser(e);
            return m.Ay.getName(t);
        });
    return (0, i.jsx)(p, {
        header: f.intl.string(f.t.sSMgC6),
        description: f.intl.formatToPlainString(f.t.q2QrTY, { username: s }),
        heroImage: (0, i.jsx)(u, { alt: f.intl.string(f.t["3QhxXJ"]) }),
        children: (0, i.jsxs)("div", {
            className: g.UD,
            children: [
                (0, i.jsx)(_.$, {
                    text: f.intl.string(f.t["+o4Q7e"]),
                    variant: "primary",
                    fullWidth: !0,
                    onClick: () => {
                        a(K.TAKE_ACTION), n(d.Wm.USER_TAKEOVER_MODAL_TAKE_ACTION);
                    },
                }),
                (0, i.jsx)(_.$, {
                    text: f.intl.string(f.t.xLkGzP),
                    variant: "secondary",
                    fullWidth: !0,
                    onClick: () => {
                        a(K.SAFETY_TIPS), n(d.Wm.USER_TAKEOVER_MODAL_SAFETY_TIPS);
                    },
                }),
            ],
        }),
    });
}
var N = n(546);
function b(t) {
    let { alt: e, ariaLabel: n, ariaHidden: a, role: s, width: r = 288, height: l = 162 } = t;
    return (0, i.jsx)("img", {
        style: { width: r, height: l },
        src: N.A,
        alt: e,
        "aria-label": n,
        "aria-hidden": a,
        role: s ?? "img",
    });
}
var S = n(889229),
    v = n(327337);
function R(t) {
    let {} = t,
        e = (0, v.RU)();
    return (0, i.jsx)(p, {
        heroImage: (0, i.jsx)(b, { alt: f.intl.string(f.t["2mJo21"]) }),
        header: f.intl.string(f.t.eAbVfS),
        children: (0, i.jsx)("div", {
            className: g.lG,
            children: (0, i.jsx)(S.A, { tips: e, headerText: f.intl.string(f.t["0QSL1C"]) }),
        }),
    });
}
var I = n(285796),
    j = n(138134),
    O = n(534890),
    L = n(49229),
    y = n(975807),
    D = n(928658),
    w = n(426190),
    M = n(381689),
    k = n(994500),
    U = n(192311);
function P(t) {
    let { senderId: e, channelId: n, hasReported: a, onReport: r, trackAnalyticsEvent: l } = t,
        o = (0, h.bG)([k.A], () => k.A.isBlocked(e)),
        [c, E] = s.useState(o),
        u = (0, w.N)(),
        A = (0, w.z)(),
        [m, x] = s.useState(!1),
        T = (0, U.W)(n),
        C = s.useMemo(() => (u ? 0 : A ? 2 : 1), [u, A]),
        N = async () => {
            null != T &&
                (x(!0),
                await (0, D.LF)(
                    T,
                    () => {
                        M.A.showReportSuccessToast(e, n), r();
                    },
                    () => {
                        M.A.showFailedToast();
                    },
                ),
                x(!1),
                l(d.Wm.USER_TAKEOVER_MODAL_REPORT));
        },
        b = s.useMemo(() => {
            switch (C) {
                case 0:
                    return f.intl.string(f.t.sZf6cz);
                case 2:
                    return f.intl.string(f.t.HQ2nKl);
                default:
                    return f.intl.string(f.t["65XQar"]);
            }
        }, [C]);
    return (0, i.jsx)(p, {
        header: f.intl.string(f.t["mWO+ys"]),
        description: f.intl.string(f.t.S0XtKF),
        children: (0, i.jsxs)("div", {
            className: g.UD,
            children: [
                (0, i.jsx)(_.$, {
                    text: c ? f.intl.string(f.t.XyHpKH) : f.intl.string(f.t.l4Emac),
                    variant: "primary",
                    fullWidth: !0,
                    icon: I.a,
                    onClick: () => {
                        c
                            ? (E(!1),
                              L.A.unblockUser(e, { location: v.Ht }),
                              l(d.Wm.USER_TAKEOVER_MODAL_UNBLOCK),
                              M.A.showUnblockSuccessToast(e, n))
                            : (E(!0),
                              l(d.Wm.USER_TAKEOVER_MODAL_BLOCK),
                              L.A.blockUser(e, { location: v.Ht }).then(() => {
                                  M.A.showBlockSuccessToast(e, n);
                              }));
                    },
                }),
                (0, i.jsx)(_.$, {
                    text: a ? f.intl.string(f.t.QvwOJ6) : f.intl.string(f.t["7fHyE6"]),
                    variant: "secondary",
                    fullWidth: !0,
                    icon: j.i,
                    onClick: N,
                    loading: m,
                    disabled: a,
                }),
                (0, i.jsx)(_.$, {
                    text: b,
                    variant: "secondary",
                    fullWidth: !0,
                    icon: O.o,
                    onClick: () => {
                        0 === C
                            ? ((0, y.A)(v.x7), l(d.Wm.USER_TAKEOVER_MODAL_CTL))
                            : 2 === C
                              ? ((0, y.A)(v.CL), l(d.Wm.USER_TAKEOVER_MODAL_THROUGHLINE))
                              : ((0, y.A)(v.jR), l(d.Wm.USER_TAKEOVER_MODAL_NO_FILTR));
                    },
                }),
            ],
        }),
    });
}
var W = n(16459),
    K =
        (((a = {})[(a.INTRO = 0)] = "INTRO"),
        (a[(a.SAFETY_TIPS = 1)] = "SAFETY_TIPS"),
        (a[(a.TAKE_ACTION = 2)] = "TAKE_ACTION"),
        a);
let F = (t) => {
    let { warningId: e, warningType: n, senderId: a, modalProps: E, channelId: u } = t,
        [_, h] = s.useState(0),
        A = s.useMemo(
            () => ({ channelId: u, senderId: a, warningId: e, warningType: n, isNudgeWarning: !1 }),
            [u, a, e, n],
        );
    s.useEffect(() => {
        (0, d.QF)({ ...A, viewName: d.gN.SAFETY_TAKEOVER_MODAL });
    }, [A]);
    let m = s.useCallback(
            (t) => {
                (0, d._$)({ ...A, cta: t });
            },
            [A],
        ),
        [x, T] = s.useState(!1);
    function g(t) {
        h(t);
    }
    return (0, i.jsxs)(r.EO, {
        "data-migration-pending": !0,
        transitionState: E.transitionState,
        parentComponent: "InappropriateConversationModal",
        children: [
            (0, i.jsx)("div", {
                className: W.kL,
                children: (0, i.jsxs)(l.t, {
                    width: 440,
                    activeSlide: _,
                    centered: !1,
                    overflow: "visible",
                    contentDisplay: "flex",
                    children: [
                        (0, i.jsx)(l.q, {
                            id: 0,
                            children: (0, i.jsx)(C, {
                                warningId: e,
                                senderId: a,
                                trackAnalyticsEvent: m,
                                onNavigate: g,
                            }),
                        }),
                        (0, i.jsx)(l.q, {
                            id: 1,
                            children: (0, i.jsx)(R, { warningId: e, senderId: a, trackAnalyticsEvent: m }),
                        }),
                        (0, i.jsx)(l.q, {
                            id: 2,
                            children: (0, i.jsx)(P, {
                                warningId: e,
                                senderId: a,
                                trackAnalyticsEvent: m,
                                channelId: u,
                                hasReported: x,
                                onReport: function () {
                                    T(!0);
                                },
                            }),
                        }),
                    ],
                }),
            }),
            (0, i.jsxs)(r.jl, {
                "data-migration-pending": !0,
                className: W.qr,
                children: [
                    (0, i.jsx)(o.Q, {
                        variant: "secondary",
                        size: "sm",
                        text: f.intl.string(f.t.cpT0Cq),
                        onClick: function () {
                            E.onClose(), (0, c.xi)(u, [e]), m(d.Wm.USER_TAKEOVER_MODAL_DISMISS);
                        },
                        textVariant: "text-sm/normal",
                    }),
                    0 !== _ &&
                        (0, i.jsx)(o.Q, {
                            variant: "secondary",
                            size: "sm",
                            text: f.intl.string(f.t["13/7kX"]),
                            textVariant: "text-sm/normal",
                            onClick: () => g(0),
                        }),
                ],
            }),
        ],
    });
};
