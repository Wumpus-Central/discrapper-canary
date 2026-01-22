n.d(t, {
    A: () => y,
    K: () => b,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(311907),
    l = n(397927),
    c = n(73153),
    u = n(775602),
    d = n(607470),
    f = n(954571),
    p = n(203982),
    _ = n(127445),
    h = n(652215),
    m = n(570837),
    g = n(819900),
    E = n(697634);
let b = 1e3,
    y = (e) => {
        let { children: t, isConfirmationStep: n, isEligibleForWowMoment: a, shouldPrefetchWowMoment: b } = e,
            y = (0, o.bG)([u.A], () => u.A.useReducedMotion),
            [O, A] = (0, i.useState)("entry"),
            v = (0, i.useRef)(null),
            S = (0, i.useRef)(null),
            I = (0, i.useCallback)(() => {
                if ("entry" === O && (A("idle"), null != v.current)) {
                    var e;
                    null == (e = v.current) || e.play();
                }
            }, [O]),
            T = (0, i.useCallback)(() => {
                if ("exit" !== O && (A("exit"), null != S.current)) {
                    var e;
                    null == (e = S.current) || e.play();
                }
            }, [O]),
            [C, N] = (0, i.useState)(!1);
        (0, i.useEffect)(() => {
            b && N(!0);
        }, [b]);
        let { mediaUrls: R, isSuccess: w } = (0, _.A)(!y && a && C),
            P = (0, i.useRef)(null),
            [D, x] = (0, i.useState)(!1),
            [L, j] = (0, i.useState)(!1),
            [M, k] = (0, i.useState)("none"),
            [U, G] = (0, i.useState)(!1);
        if (
            ((0, i.useEffect)(() => {
                let e;
                a &&
                    n &&
                    !U &&
                    "none" === M &&
                    (y || !w
                        ? (k("static"),
                          y ||
                              (G(!0),
                              f.default.track(
                                  h.HAw.PREMIUM_BRAND_REFRESH_WOW_MOMENT_ASSETS_NOT_LOADED_ON_CONFIRMATION,
                              )),
                          (e = !1))
                        : (k("animated"), j(!0), (e = !0)),
                    c.h.dispatch({
                        type: "WOW_MOMENT_CONFIRMATION_SET_IS_DISPLAYING_WOW_MOMENT_CONFIRMATION",
                        value: !0,
                        isAnimated: e,
                    }),
                    f.default.track(h.HAw.PREMIUM_BRAND_REFRESH_WOW_MOMENT_VIEWED, {
                        wow_moment_type: e ? "animated" : "static",
                    }));
            }, [y, a, n, w, U, M]),
            (0, i.useEffect)(() => {
                function e() {
                    x(!0), T();
                }
                return (
                    p._.subscribe(h.jej.WOW_MOMENT_CONFIRMATION_MODAL_CLOSED, e),
                    () => {
                        p._.unsubscribe(h.jej.WOW_MOMENT_CONFIRMATION_MODAL_CLOSED, e);
                    }
                );
            }, [T]),
            (0, i.useEffect)(
                () => () => {
                    c.h.dispatch({
                        type: "WOW_MOMENT_CONFIRMATION_SET_IS_DISPLAYING_WOW_MOMENT_CONFIRMATION",
                        value: !1,
                        isAnimated: !1,
                    });
                },
                [],
            ),
            "animated" === M)
        )
            return (0, r.jsxs)("div", {
                children: [
                    (0, r.jsxs)("div", {
                        className: m.j,
                        children: [
                            (0, r.jsx)("div", {
                                className: m.ws,
                                children: (0, r.jsx)(d.A, {
                                    playsInline: !0,
                                    muted: !0,
                                    autoPlay: !0,
                                    onEnded: I,
                                    className: s()(m.Ki, "entry" === O ? m.RK : m.R),
                                    children: (0, r.jsx)("source", {
                                        src: R.modalGlowEntry,
                                    }),
                                }),
                            }),
                            (0, r.jsx)(d.A, {
                                ref: v,
                                playsInline: !0,
                                muted: !0,
                                loop: !0,
                                className: s()(m.Ki, "idle" === O ? m.RK : m.R),
                                children: (0, r.jsx)("source", {
                                    src: R.modalGlowIdle,
                                }),
                            }),
                            (0, r.jsx)(d.A, {
                                ref: S,
                                playsInline: !0,
                                muted: !0,
                                className: s()(m.Ki, "exit" === O ? m.RK : m.R),
                                children: (0, r.jsx)("source", {
                                    src: R.modalGlowExit,
                                }),
                            }),
                        ],
                    }),
                    (0, r.jsx)("div", {
                        className: m.Sh,
                        children: (0, r.jsx)(l.eOb, {
                            fit: "layout",
                            ref: P,
                            dataBinding: {
                                ExitTrigger: D,
                                EntryTrigger: L,
                            },
                            listenOnDocumentBody: !0,
                        }),
                    }),
                    (0, r.jsx)("div", {
                        className: "exit" === O ? m.aO : m.ws,
                        children: t,
                    }),
                ],
            });
        let V = !D;
        return "static" === M
            ? (0, r.jsxs)(r.Fragment, {
                  children: [
                      V &&
                          (0, r.jsxs)(r.Fragment, {
                              children: [
                                  (0, r.jsx)("img", {
                                      src: g.A,
                                      alt: "",
                                      className: m.Uw,
                                  }),
                                  (0, r.jsx)("img", {
                                      src: E.A,
                                      alt: "",
                                      className: m.Gv,
                                  }),
                              ],
                          }),
                      t,
                  ],
              })
            : t;
    };
