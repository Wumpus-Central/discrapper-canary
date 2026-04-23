"use strict";
n.d(t, { A: () => I, K: () => A });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(17928),
    l = n(970002),
    d = n(228366),
    _ = n(775602),
    u = n(607470),
    c = n(954571),
    E = n(625494),
    h = n(802588),
    m = n(652215),
    f = n(669414),
    g = n(819900),
    p = n(697634);
let A = 1e3,
    I = (e) => {
        let { children: t, isConfirmationStep: n, isEligibleForWowMoment: s, shouldPrefetchWowMoment: A } = e,
            I = (0, o.bG)([_.A], () => _.A.useReducedMotion),
            [T, S] = (0, r.useState)("entry"),
            N = (0, r.useRef)(null),
            C = (0, r.useRef)(null),
            R = (0, r.useCallback)(() => {
                "entry" === T && (S("idle"), null != N.current && N.current?.play());
            }, [T]),
            O = (0, r.useCallback)(() => {
                "exit" !== T && (S("exit"), null != C.current && C.current?.play());
            }, [T]),
            [y, v] = (0, r.useState)(!1);
        (0, r.useEffect)(() => {
            A && v(!0);
        }, [A]);
        let { mediaUrls: D, isSuccess: L } = (0, h.A)(!I && s && y),
            b = (0, r.useRef)(null),
            [w, P] = (0, r.useState)(!1),
            [k, M] = (0, r.useState)(!1),
            [U, x] = (0, r.useState)("none"),
            [G, V] = (0, r.useState)(!1);
        return ((0, r.useEffect)(() => {
            let e;
            s &&
                n &&
                !G &&
                "none" === U &&
                (I || !L
                    ? (x("static"),
                      I ||
                          (V(!0),
                          c.default.track(m.HAw.PREMIUM_BRAND_REFRESH_WOW_MOMENT_ASSETS_NOT_LOADED_ON_CONFIRMATION)),
                      (e = !1))
                    : (x("animated"), M(!0), (e = !0)),
                d.h.dispatch({
                    type: "WOW_MOMENT_CONFIRMATION_SET_IS_DISPLAYING_WOW_MOMENT_CONFIRMATION",
                    value: !0,
                    isAnimated: e,
                }),
                c.default.track(m.HAw.PREMIUM_BRAND_REFRESH_WOW_MOMENT_VIEWED, {
                    wow_moment_type: e ? "animated" : "static",
                }));
        }, [I, s, n, L, G, U]),
        (0, r.useEffect)(() => {
            function e() {
                P(!0), O();
            }
            return (
                E._.subscribe(m.jej.WOW_MOMENT_CONFIRMATION_MODAL_CLOSED, e),
                () => {
                    E._.unsubscribe(m.jej.WOW_MOMENT_CONFIRMATION_MODAL_CLOSED, e);
                }
            );
        }, [O]),
        (0, r.useEffect)(
            () => () => {
                d.h.dispatch({
                    type: "WOW_MOMENT_CONFIRMATION_SET_IS_DISPLAYING_WOW_MOMENT_CONFIRMATION",
                    value: !1,
                    isAnimated: !1,
                });
            },
            [],
        ),
        "animated" === U)
            ? (0, i.jsxs)("div", {
                  children: [
                      (0, i.jsxs)("div", {
                          className: f.j,
                          children: [
                              (0, i.jsx)("div", {
                                  className: f.ws,
                                  children: (0, i.jsx)(u.A, {
                                      playsInline: !0,
                                      muted: !0,
                                      autoPlay: !0,
                                      onEnded: R,
                                      className: a()(f.Ki, "entry" === T ? f.RK : f.R),
                                      children: (0, i.jsx)("source", { src: D.modalGlowEntry }),
                                  }),
                              }),
                              (0, i.jsx)(u.A, {
                                  ref: N,
                                  playsInline: !0,
                                  muted: !0,
                                  loop: !0,
                                  className: a()(f.Ki, "idle" === T ? f.RK : f.R),
                                  children: (0, i.jsx)("source", { src: D.modalGlowIdle }),
                              }),
                              (0, i.jsx)(u.A, {
                                  ref: C,
                                  playsInline: !0,
                                  muted: !0,
                                  className: a()(f.Ki, "exit" === T ? f.RK : f.R),
                                  children: (0, i.jsx)("source", { src: D.modalGlowExit }),
                              }),
                          ],
                      }),
                      (0, i.jsx)("div", {
                          className: f.Sh,
                          children: (0, i.jsx)(l.e, {
                              fit: "layout",
                              ref: b,
                              dataBinding: { ExitTrigger: w, EntryTrigger: k },
                              listenOnDocumentBody: !0,
                          }),
                      }),
                      (0, i.jsx)("div", { className: "exit" === T ? f.aO : f.ws, children: t }),
                  ],
              })
            : "static" === U
              ? (0, i.jsxs)(i.Fragment, {
                    children: [
                        !w &&
                            (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsx)("img", { src: g.A, alt: "", className: f.Uw }),
                                    (0, i.jsx)("img", { src: p.A, alt: "", className: f.Gv }),
                                ],
                            }),
                        t,
                    ],
                })
              : t;
    };
