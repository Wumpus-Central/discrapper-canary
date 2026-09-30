e.d(n, { default: () => V });
var i,
    s = e(477900),
    a = e(582128),
    r = e(935462),
    l = e(430690),
    c = e(123292),
    d = e(544231),
    o = e(665909),
    x = e(117816);
function A(t) {
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
    m = e(17928),
    h = e(287809),
    E = e(427262),
    T = e(297264),
    g = e(834730),
    _ = e(512967);
function O(t) {
    let { heroImage: n, children: e, header: i, description: a } = t;
    return (0, s.jsxs)(s.Fragment, {
        children: [
            void 0 !== n && (0, s.jsx)("div", { className: _.c8, children: n }),
            (0, s.jsxs)(r.$m, {
                "data-migration-pending": !0,
                className: _.rf,
                children: [
                    (0, s.jsxs)("div", {
                        className: _.FS,
                        children: [
                            (0, s.jsx)(T.D, { variant: "heading-xl/semibold", color: "text-strong", children: i }),
                            null != a &&
                                (0, s.jsx)(g.E, {
                                    variant: "text-md/medium",
                                    color: "text-default",
                                    className: _.h_,
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
var S =
        (((i = {})[(i.INTRO = 0)] = "INTRO"),
        (i[(i.SAFETY_TIPS = 1)] = "SAFETY_TIPS"),
        (i[(i.TAKE_ACTION = 2)] = "TAKE_ACTION"),
        i),
    j = e(375708);
function R(t) {
    let { senderId: n, trackAnalyticsEvent: e, onNavigate: i } = t,
        a = (0, m.bG)([h.default], () => {
            let t = h.default.getUser(n);
            return E.Ay.getName(t);
        });
    return (0, s.jsx)(O, {
        header: j.intl.string(j.t.sSMgC6),
        description: j.intl.formatToPlainString(j.t.q2QrTY, { username: a }),
        heroImage: (0, s.jsx)(A, { alt: j.intl.string(j.t["3QhxXJ"]) }),
        children: (0, s.jsxs)("div", {
            className: _.UD,
            children: [
                (0, s.jsx)(u.$, {
                    text: j.intl.string(j.t["+o4Q7e"]),
                    variant: "primary",
                    fullWidth: !0,
                    onClick: () => {
                        (i(S.TAKE_ACTION), e(o.Wm.USER_TAKEOVER_MODAL_TAKE_ACTION));
                    },
                }),
                (0, s.jsx)(u.$, {
                    text: j.intl.string(j.t.xLkGzP),
                    variant: "secondary",
                    fullWidth: !0,
                    onClick: () => {
                        (i(S.SAFETY_TIPS), e(o.Wm.USER_TAKEOVER_MODAL_SAFETY_TIPS));
                    },
                }),
            ],
        }),
    });
}
var v = e(546);
function I(t) {
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
    N = e(327337);
function p(t) {
    let {} = t,
        n = (0, N.RU)();
    return (0, s.jsx)(O, {
        heroImage: (0, s.jsx)(I, { alt: j.intl.string(j.t["2mJo21"]) }),
        header: j.intl.string(j.t.eAbVfS),
        children: (0, s.jsx)("div", {
            className: _.lG,
            children: (0, s.jsx)(f.A, { tips: n, headerText: j.intl.string(j.t["0QSL1C"]) }),
        }),
    });
}
var C = e(285796),
    k = e(138134),
    K = e(534890),
    L = e(717398),
    y = e(975807),
    U = e(928658),
    W = e(426190),
    M = e(381689),
    w = e(994500),
    D = e(192311);
function b(t) {
    let { senderId: n, channelId: e, hasReported: i, onReport: r, trackAnalyticsEvent: l } = t,
        c = (0, m.bG)([w.A], () => w.A.isBlocked(n)),
        [d, x] = a.useState(c),
        A = (0, W.N)(),
        h = (0, W.z)(),
        [E, T] = a.useState(!1),
        g = (0, D.W)(e),
        S = a.useMemo(() => (A ? 0 : h ? 2 : 1), [A, h]);
    async function R() {
        null != g &&
            (T(!0),
            await (0, U.LF)(
                g,
                () => {
                    (M.A.showReportSuccessToast(n, e), r());
                },
                () => {
                    M.A.showFailedToast();
                },
            ),
            T(!1),
            l(o.Wm.USER_TAKEOVER_MODAL_REPORT));
    }
    let v = a.useMemo(() => {
        switch (S) {
            case 0:
                return j.intl.string(j.t.sZf6cz);
            case 2:
                return j.intl.string(j.t.HQ2nKl);
            default:
                return j.intl.string(j.t["65XQar"]);
        }
    }, [S]);
    return (0, s.jsx)(O, {
        header: j.intl.string(j.t["mWO+ys"]),
        description: j.intl.string(j.t.S0XtKF),
        children: (0, s.jsxs)("div", {
            className: _.UD,
            children: [
                (0, s.jsx)(u.$, {
                    text: d ? j.intl.string(j.t.XyHpKH) : j.intl.string(j.t.l4Emac),
                    variant: "primary",
                    fullWidth: !0,
                    icon: C.a,
                    onClick: () => {
                        d
                            ? (x(!1),
                              L.A.unblockUser(n, { location: N.Ht }),
                              l(o.Wm.USER_TAKEOVER_MODAL_UNBLOCK),
                              M.A.showUnblockSuccessToast(n, e))
                            : (x(!0),
                              l(o.Wm.USER_TAKEOVER_MODAL_BLOCK),
                              L.A.blockUser(n, { location: N.Ht }).then(() => {
                                  M.A.showBlockSuccessToast(n, e);
                              }));
                    },
                }),
                (0, s.jsx)(u.$, {
                    text: i ? j.intl.string(j.t.QvwOJ6) : j.intl.string(j.t["7fHyE6"]),
                    variant: "secondary",
                    fullWidth: !0,
                    icon: k.FlagIcon,
                    onClick: R,
                    loading: E,
                    disabled: i,
                }),
                (0, s.jsx)(u.$, {
                    text: v,
                    variant: "secondary",
                    fullWidth: !0,
                    icon: K.ChatIcon,
                    onClick: () => {
                        0 === S
                            ? ((0, y.A)(N.x7), l(o.Wm.USER_TAKEOVER_MODAL_CTL))
                            : 2 === S
                              ? ((0, y.A)(N.CL), l(o.Wm.USER_TAKEOVER_MODAL_THROUGHLINE))
                              : ((0, y.A)(N.jR), l(o.Wm.USER_TAKEOVER_MODAL_NO_FILTR));
                    },
                }),
            ],
        }),
    });
}
var F = e(715918);
let V = (t) => {
    let { warningId: n, warningType: e, senderId: i, modalProps: x, channelId: A } = t,
        [u, m] = a.useState(S.INTRO),
        h = a.useMemo(
            () => ({ channelId: A, senderId: i, warningId: n, warningType: e, isNudgeWarning: !1 }),
            [A, i, n, e],
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
        [T, g] = a.useState(!1);
    function _(t) {
        m(t);
    }
    return (0, s.jsxs)(r.EO, {
        "data-migration-pending": !0,
        transitionState: x.transitionState,
        parentComponent: "InappropriateConversationModal",
        children: [
            (0, s.jsx)("div", {
                className: F.kL,
                children: (0, s.jsxs)(l.t, {
                    width: 440,
                    activeSlide: u,
                    centered: !1,
                    overflow: "visible",
                    contentDisplay: "flex",
                    children: [
                        (0, s.jsx)(l.q, {
                            id: S.INTRO,
                            children: (0, s.jsx)(R, {
                                warningId: n,
                                senderId: i,
                                trackAnalyticsEvent: E,
                                onNavigate: _,
                            }),
                        }),
                        (0, s.jsx)(l.q, {
                            id: S.SAFETY_TIPS,
                            children: (0, s.jsx)(p, { warningId: n, senderId: i, trackAnalyticsEvent: E }),
                        }),
                        (0, s.jsx)(l.q, {
                            id: S.TAKE_ACTION,
                            children: (0, s.jsx)(b, {
                                warningId: n,
                                senderId: i,
                                trackAnalyticsEvent: E,
                                channelId: A,
                                hasReported: T,
                                onReport: function () {
                                    g(!0);
                                },
                            }),
                        }),
                    ],
                }),
            }),
            (0, s.jsxs)(r.jl, {
                "data-migration-pending": !0,
                className: F.qr,
                children: [
                    (0, s.jsx)(c.Q, {
                        variant: "secondary",
                        size: "sm",
                        text: j.intl.string(j.t.cpT0Cq),
                        onClick: function () {
                            (x.onClose(), (0, d.xi)(A, [n]), E(o.Wm.USER_TAKEOVER_MODAL_DISMISS));
                        },
                        textVariant: "text-sm/normal",
                    }),
                    u !== S.INTRO &&
                        (0, s.jsx)(c.Q, {
                            variant: "secondary",
                            size: "sm",
                            text: j.intl.string(j.t["13/7kX"]),
                            textVariant: "text-sm/normal",
                            onClick: () => _(S.INTRO),
                        }),
                ],
            }),
        ],
    });
};
