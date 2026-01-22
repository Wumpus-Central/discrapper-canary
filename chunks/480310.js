n.d(t, { A: () => G }), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(735438),
    l = n(183766),
    c = n(158954),
    u = n(311907),
    d = n(499979),
    f = n(397927),
    p = n(775602),
    _ = n(570287),
    h = n(994500),
    m = n(287809),
    g = n(486020),
    E = n(427262),
    b = n(796104),
    y = n(854987),
    O = n(719718),
    A = n(57882),
    v = n(181380),
    S = n(155286),
    I = n(573138),
    T = n(182417),
    C = n(877272),
    N = n(532294),
    R = n(622865),
    w = n(985018),
    P = n(308021),
    D = n(922848);
let x = 1000,
    L = 50,
    j = 250;
function M(e) {
    let { primaryColor: t } = e;
    return (0, r.jsxs)("div", {
        className: D.Qs,
        children: [
            (0, r.jsxs)("div", {
                className: P.DD,
                children: [
                    (0, r.jsx)(c.$yI, {
                        size: "refresh_sm",
                        color: t,
                        colorClass: P.d7,
                        className: P.gr,
                    }),
                    (0, r.jsx)(C.A, {
                        variant: "eyebrow",
                        className: P.UP,
                        children: w.intl.string(R.default.ZQakPR),
                    }),
                ],
            }),
            (0, r.jsx)(C.A, {
                variant: "display-lg",
                className: D.Vy,
                children: w.intl.string(R.default.OzY5Ns),
            }),
            (0, r.jsx)(C.A, {
                variant: "heading-xxl/medium",
                className: D.VA,
                children: w.intl.string(R.default.sEPtGY),
            }),
            (0, r.jsx)(S.e, { slide: N.P7.FRIENDS }),
        ],
    });
}
function k() {
    return (0, r.jsx)("div", {
        className: D.Qs,
        children: (0, r.jsx)(C.A, {
            variant: "heading-xxl/medium",
            children: w.intl.string(R.default.d5HUsD),
        }),
    });
}
function U(e) {
    var t;
    let { primaryColor: n, sidekick: i } = e,
        { unit: a, duration: o } = (0, A.oO)(null != (t = null == i ? void 0 : i.numVoiceMinutes) ? t : 0);
    return (0, r.jsxs)("div", {
        className: D.Qs,
        children: [
            (0, r.jsxs)("div", {
                className: P.DD,
                children: [
                    (0, r.jsx)(c.$yI, {
                        size: "refresh_sm",
                        color: n,
                        colorClass: P.d7,
                        className: P.gr,
                    }),
                    (0, r.jsx)(C.A, {
                        variant: "eyebrow",
                        className: P.UP,
                        children: w.intl.string(R.default.ZQakPR),
                    }),
                ],
            }),
            (0, r.jsx)(C.A, {
                variant: "display-lg",
                className: s()(D.Vy, D.VA),
                children: w.intl.string(R.default["+uwOHt"]),
            }),
            (0, r.jsxs)("div", {
                className: D.M1,
                children: [
                    (0, r.jsxs)("div", {
                        children: [
                            (0, r.jsx)(C.A, {
                                variant: "eyebrow",
                                children: w.intl.string(R.default.wWKySP),
                            }),
                            (0, r.jsx)(C.A, {
                                variant: "heading-xxl/normal",
                                className: P.sH,
                                children: null == i ? void 0 : i.numMessagesSent,
                            }),
                        ],
                    }),
                    (0, r.jsxs)("div", {
                        children: [
                            (0, r.jsx)(C.A, {
                                variant: "eyebrow",
                                children:
                                    a === d.pJ.HOURS
                                        ? w.intl.format(R.default.Xu0QsX, { numHours: o })
                                        : w.intl.string(R.default.RmVTph),
                            }),
                            (0, r.jsx)(C.A, {
                                variant: "heading-xxl/normal",
                                className: P.sH,
                                children: o,
                            }),
                        ],
                    }),
                ],
            }),
            (0, r.jsx)(V, {}),
        ],
    });
}
function G(e) {
    var t, n, a;
    let { step: s, onNextStep: o, onPreviousStep: l } = e,
        { users: d = [], sidekick: _ } = (0, u.bG)([O.A], () => O.A.getCheckpointData()),
        h = (0, i.useContext)(y.P),
        b = (0, f.rdh)(h.primaryColor).hex(),
        A = d[1],
        v = d[0],
        S = (0, u.bG)([m.default], () => m.default.getCurrentUser()),
        C = (0, i.useRef)(0),
        R = (0, i.useRef)(!0),
        w = (0, i.useRef)(null),
        P = null != (t = (0, E.tx)(null == _ ? void 0 : _.user)) ? t : "",
        j = null != (n = (0, E.tx)(A)) ? n : "",
        G = null != (a = (0, E.tx)(v)) ? a : "",
        V = 1 === d.length,
        F = (0, u.bG)([p.A], () => p.A.useReducedMotion);
    (0, i.useEffect)(
        () => (
            s === N.Wf.FRIENDS_LEAVE &&
                (R.current
                    ? l()
                    : F
                      ? (o(), (R.current = !0))
                      : (C.current = setTimeout(() => {
                            o(), (R.current = !0);
                        }, x))),
            () => clearTimeout(C.current)
        ),
        [o, l, F, s],
    );
    let B = (0, i.useMemo)(() => {
            switch (s) {
                case N.Wf.FRIENDS_INTRO:
                    return 1;
                case N.Wf.FRIENDS_TRANSITION:
                    return 2;
                case N.Wf.FRIENDS_BEST:
                    return 3;
                case N.Wf.FRIENDS_LEAVE:
                    return F ? 3 : 4;
                default:
                    return 0;
            }
        }, [s, F]),
        H = (0, i.useCallback)((e) => (null != e ? g.Ay.getUserAvatarURL(e, !1, 64, "png") : void 0), []);
    (0, i.useEffect)(() => () => clearTimeout(C.current), []),
        (0, i.useEffect)(() => {
            s !== N.Wf.FRIENDS_LEAVE && (R.current = !1);
        }, [s]);
    let Y = (0, i.useCallback)(() => {
            let e = setInterval(() => {
                var t, n;
                let r = null == (t = w.current) ? void 0 : t.getProperties();
                null != w.current &&
                    (null == r ? void 0 : r.twoFriends.value) === V &&
                    (null == r ? void 0 : r.reducedMotion.value) === F &&
                    (null == (n = w.current) || n.play(), clearInterval(e));
            }, L);
            return () => clearInterval(e);
        }, [F, V]),
        W = (0, i.useMemo)(
            () => (s < N.Wf.FRIENDS_INTRO ? N.Wf.FRIENDS_INTRO : s >= N.Wf.FRIENDS_BEST ? N.Wf.FRIENDS_BEST : s),
            [s],
        );
    return (0, r.jsxs)(I.A, {
        children: [
            (0, r.jsx)(c.m0T, {
                ref: w,
                className: D.lW,
                fit: "contain",
                autoplay: !1,
                onLoad: Y,
                dataBinding: {
                    AnimationState: B,
                    "Avatar01/img": H(null == _ ? void 0 : _.user),
                    "Avatar02/img": H(A),
                    "Avatar03/img": H(v),
                    "Avatar04/img": H(null == _ ? void 0 : _.user),
                    "Avatar05/img": H(S),
                    "Avatar01/Username": P,
                    "Avatar02/Username": j,
                    "Avatar03/Username": G,
                    "Avatar04/Username": P,
                    twoFriends: V,
                    reducedMotion: F,
                },
                withReducedMotion: "play",
            }),
            (0, r.jsx)("div", {
                className: D.kL,
                children: (0, r.jsxs)(T.Ay, {
                    activeSlide: W,
                    className: D.oE,
                    slideClassName: D.JO,
                    children: [
                        (0, r.jsx)(f.q7S, {
                            id: N.Wf.FRIENDS_INTRO,
                            children: (0, r.jsx)(M, { primaryColor: b }),
                        }),
                        (0, r.jsx)(f.q7S, {
                            id: N.Wf.FRIENDS_TRANSITION,
                            children: (0, r.jsx)(k, {}),
                        }),
                        (0, r.jsx)(f.q7S, {
                            id: N.Wf.FRIENDS_BEST,
                            children: (0, r.jsx)(U, {
                                primaryColor: b,
                                sidekick: _,
                            }),
                        }),
                    ],
                }),
            }),
        ],
    });
}
function V() {
    var e;
    let t = (0, i.useMemo)(() => (0, N.qk)(), []),
        n = (0, i.useContext)(y.P),
        a = (0, f.rdh)(n.primaryColor).hex(),
        d = (0, i.useRef)(null),
        [p, m] = (0, i.useState)((0, o.sample)(t)),
        { sidekick: g } = (0, u.bG)([O.A], () => O.A.getCheckpointData()),
        E = null == g ? void 0 : g.user,
        A = (0, _.A)(null != (e = null == E ? void 0 : E.id) ? e : "0"),
        S = (0, u.bG)([h.A], () => h.A.isBlocked(null == E ? void 0 : E.id)),
        I = A && !S,
        [T, C] = (0, i.useState)(!1),
        x = T || null == p || p.length < 1 || p.length > j,
        L = (0, v.V)(l.A),
        M = T ? w.intl.string(w.t.fjcCk5) : "";
    (0, i.useEffect)(() => {
        null != d.current && (d.current.style.height = "".concat(Math.min(d.current.scrollHeight, 140), "px"));
    }, [p]);
    let k = (0, i.useCallback)(() => {
            if (T) return;
            L();
            let e = (0, o.sample)(t);
            for (; null == e || e === p; ) e = (0, o.sample)(t);
            m(e);
        }, [t, p, T, L]),
        U = (0, i.useCallback)((e) => {
            m(e.target.value);
        }, []),
        G = (0, i.useCallback)(() => {
            x ||
                (null == E ? void 0 : E.id) == null ||
                (L(), (0, b.fr)(p, null == E ? void 0 : E.id), m(void 0), C(!0));
        }, [x, L, p, null == E ? void 0 : E.id]);
    return I
        ? (0, r.jsxs)("div", {
              className: D.I6,
              children: [
                  (0, r.jsx)(f.Text, {
                      variant: "text-sm/semibold",
                      className: D.L8,
                      style: { backgroundColor: a },
                      children: w.intl.string(R.default["//ZYM/"]),
                  }),
                  (0, r.jsx)("textarea", {
                      ref: d,
                      onChange: U,
                      value: null != p ? p : M,
                      className: D.hF,
                      style: {
                          color: a,
                          scrollbarColor: "".concat(a, " black"),
                      },
                      maxLength: j + 1,
                      disabled: T,
                  }),
                  (0, r.jsxs)("div", {
                      className: D.o1,
                      children: [
                          (0, r.jsx)(c.DUT, {
                              onClick: k,
                              "aria-disabled": T,
                              className: s()(P.vk, { [D.r9]: T }),
                              children: (0, r.jsx)(c.jGc, {
                                  color: a,
                                  colorClass: P.d7,
                              }),
                          }),
                          (0, r.jsx)(c.DUT, {
                              onClick: G,
                              "aria-disabled": T || x,
                              className: s()(P.vk, { [D.r9]: T || x }),
                              children: (0, r.jsx)(c.lX7, {
                                  color: a,
                                  colorClass: P.d7,
                              }),
                          }),
                      ],
                  }),
              ],
          })
        : null;
}
