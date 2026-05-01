"use strict";
n.d(t, { A: () => p, K: () => I });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(17928),
    l = n(970002),
    _ = n(228366),
    d = n(775602),
    u = n(607470),
    c = n(954571),
    E = n(625494),
    h = n(802588),
    m = n(652215),
    f = n(669414),
    g = n(819900),
    A = n(697634);
let I = 1e3,
    p = (e) => {
        let { children: t, isConfirmationStep: n, isEligibleForWowMoment: s, shouldPrefetchWowMoment: I } = e,
            p = (0, o.bG)([d.A], () => d.A.useReducedMotion),
            [T, S] = (0, r.useState)("entry"),
            N = (0, r.useRef)(null),
            O = (0, r.useRef)(null),
            R = (0, r.useCallback)(() => {
                "entry" === T && (S("idle"), null != N.current && N.current?.play());
            }, [T]),
            C = (0, r.useCallback)(() => {
                "exit" !== T && (S("exit"), null != O.current && O.current?.play());
            }, [T]),
            [y, D] = (0, r.useState)(!1);
        (0, r.useEffect)(() => {
            I && D(!0);
        }, [I]);
        let { mediaUrls: L, isSuccess: v } = (0, h.A)(!p && s && y),
            w = (0, r.useRef)(null),
            [P, b] = (0, r.useState)(!1),
            [k, U] = (0, r.useState)(!1),
            [M, G] = (0, r.useState)("none"),
            [x, V] = (0, r.useState)(!1);
        return ((0, r.useEffect)(() => {
            let e;
            s &&
                n &&
                !x &&
                "none" === M &&
                (p || !v
                    ? (G("static"),
                      p ||
                          (V(!0),
                          c.default.track(m.HAw.PREMIUM_BRAND_REFRESH_WOW_MOMENT_ASSETS_NOT_LOADED_ON_CONFIRMATION)),
                      (e = !1))
                    : (G("animated"), U(!0), (e = !0)),
                _.h.dispatch({
                    type: "WOW_MOMENT_CONFIRMATION_SET_IS_DISPLAYING_WOW_MOMENT_CONFIRMATION",
                    value: !0,
                    isAnimated: e,
                }),
                c.default.track(m.HAw.PREMIUM_BRAND_REFRESH_WOW_MOMENT_VIEWED, {
                    wow_moment_type: e ? "animated" : "static",
                }));
        }, [p, s, n, v, x, M]),
        (0, r.useEffect)(() => {
            function e() {
                b(!0), C();
            }
            return (
                E._.subscribe(m.jej.WOW_MOMENT_CONFIRMATION_MODAL_CLOSED, e),
                () => {
                    E._.unsubscribe(m.jej.WOW_MOMENT_CONFIRMATION_MODAL_CLOSED, e);
                }
            );
        }, [C]),
        (0, r.useEffect)(
            () => () => {
                _.h.dispatch({
                    type: "WOW_MOMENT_CONFIRMATION_SET_IS_DISPLAYING_WOW_MOMENT_CONFIRMATION",
                    value: !1,
                    isAnimated: !1,
                });
            },
            [],
        ),
        "animated" === M)
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
                                      children: (0, i.jsx)("source", { src: L.modalGlowEntry }),
                                  }),
                              }),
                              (0, i.jsx)(u.A, {
                                  ref: N,
                                  playsInline: !0,
                                  muted: !0,
                                  loop: !0,
                                  className: a()(f.Ki, "idle" === T ? f.RK : f.R),
                                  children: (0, i.jsx)("source", { src: L.modalGlowIdle }),
                              }),
                              (0, i.jsx)(u.A, {
                                  ref: O,
                                  playsInline: !0,
                                  muted: !0,
                                  className: a()(f.Ki, "exit" === T ? f.RK : f.R),
                                  children: (0, i.jsx)("source", { src: L.modalGlowExit }),
                              }),
                          ],
                      }),
                      (0, i.jsx)("div", {
                          className: f.Sh,
                          children: (0, i.jsx)(l.e, {
                              fit: "layout",
                              ref: w,
                              dataBinding: { ExitTrigger: P, EntryTrigger: k },
                              listenOnDocumentBody: !0,
                          }),
                      }),
                      (0, i.jsx)("div", { className: "exit" === T ? f.aO : f.ws, children: t }),
                  ],
              })
            : "static" === M
              ? (0, i.jsxs)(i.Fragment, {
                    children: [
                        !P &&
                            (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsx)("img", { src: g.A, alt: "", className: f.Uw }),
                                    (0, i.jsx)("img", { src: A.A, alt: "", className: f.Gv }),
                                ],
                            }),
                        t,
                    ],
                })
              : t;
    };
