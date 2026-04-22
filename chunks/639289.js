"use strict";
n.d(t, { A: () => I, K: () => A });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(311907),
    l = n(970002),
    u = n(73153),
    d = n(775602),
    c = n(607470),
    _ = n(954571),
    f = n(203982),
    E = n(127445),
    h = n(652215),
    p = n(669414),
    m = n(819900),
    g = n(697634);
let A = 1e3,
    I = (e) => {
        let { children: t, isConfirmationStep: n, isEligibleForWowMoment: s, shouldPrefetchWowMoment: A } = e,
            I = (0, o.bG)([d.A], () => d.A.useReducedMotion),
            [T, S] = (0, i.useState)("entry"),
            y = (0, i.useRef)(null),
            N = (0, i.useRef)(null),
            O = (0, i.useCallback)(() => {
                "entry" === T && (S("idle"), null != y.current && y.current?.play());
            }, [T]),
            R = (0, i.useCallback)(() => {
                "exit" !== T && (S("exit"), null != N.current && N.current?.play());
            }, [T]),
            [v, C] = (0, i.useState)(!1);
        (0, i.useEffect)(() => {
            A && C(!0);
        }, [A]);
        let { mediaUrls: b, isSuccess: D } = (0, E.A)(!I && s && v),
            L = (0, i.useRef)(null),
            [w, M] = (0, i.useState)(!1),
            [P, U] = (0, i.useState)(!1),
            [k, x] = (0, i.useState)("none"),
            [G, V] = (0, i.useState)(!1);
        return ((0, i.useEffect)(() => {
            let e;
            s &&
                n &&
                !G &&
                "none" === k &&
                (I || !D
                    ? (x("static"),
                      I ||
                          (V(!0),
                          _.default.track(h.HAw.PREMIUM_BRAND_REFRESH_WOW_MOMENT_ASSETS_NOT_LOADED_ON_CONFIRMATION)),
                      (e = !1))
                    : (x("animated"), U(!0), (e = !0)),
                u.h.dispatch({
                    type: "WOW_MOMENT_CONFIRMATION_SET_IS_DISPLAYING_WOW_MOMENT_CONFIRMATION",
                    value: !0,
                    isAnimated: e,
                }),
                _.default.track(h.HAw.PREMIUM_BRAND_REFRESH_WOW_MOMENT_VIEWED, {
                    wow_moment_type: e ? "animated" : "static",
                }));
        }, [I, s, n, D, G, k]),
        (0, i.useEffect)(() => {
            function e() {
                M(!0), R();
            }
            return (
                f._.subscribe(h.jej.WOW_MOMENT_CONFIRMATION_MODAL_CLOSED, e),
                () => {
                    f._.unsubscribe(h.jej.WOW_MOMENT_CONFIRMATION_MODAL_CLOSED, e);
                }
            );
        }, [R]),
        (0, i.useEffect)(
            () => () => {
                u.h.dispatch({
                    type: "WOW_MOMENT_CONFIRMATION_SET_IS_DISPLAYING_WOW_MOMENT_CONFIRMATION",
                    value: !1,
                    isAnimated: !1,
                });
            },
            [],
        ),
        "animated" === k)
            ? (0, r.jsxs)("div", {
                  children: [
                      (0, r.jsxs)("div", {
                          className: p.j,
                          children: [
                              (0, r.jsx)("div", {
                                  className: p.ws,
                                  children: (0, r.jsx)(c.A, {
                                      playsInline: !0,
                                      muted: !0,
                                      autoPlay: !0,
                                      onEnded: O,
                                      className: a()(p.Ki, "entry" === T ? p.RK : p.R),
                                      children: (0, r.jsx)("source", { src: b.modalGlowEntry }),
                                  }),
                              }),
                              (0, r.jsx)(c.A, {
                                  ref: y,
                                  playsInline: !0,
                                  muted: !0,
                                  loop: !0,
                                  className: a()(p.Ki, "idle" === T ? p.RK : p.R),
                                  children: (0, r.jsx)("source", { src: b.modalGlowIdle }),
                              }),
                              (0, r.jsx)(c.A, {
                                  ref: N,
                                  playsInline: !0,
                                  muted: !0,
                                  className: a()(p.Ki, "exit" === T ? p.RK : p.R),
                                  children: (0, r.jsx)("source", { src: b.modalGlowExit }),
                              }),
                          ],
                      }),
                      (0, r.jsx)("div", {
                          className: p.Sh,
                          children: (0, r.jsx)(l.e, {
                              fit: "layout",
                              ref: L,
                              dataBinding: { ExitTrigger: w, EntryTrigger: P },
                              listenOnDocumentBody: !0,
                          }),
                      }),
                      (0, r.jsx)("div", { className: "exit" === T ? p.aO : p.ws, children: t }),
                  ],
              })
            : "static" === k
              ? (0, r.jsxs)(r.Fragment, {
                    children: [
                        !w &&
                            (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)("img", { src: m.A, alt: "", className: p.Uw }),
                                    (0, r.jsx)("img", { src: g.A, alt: "", className: p.Gv }),
                                ],
                            }),
                        t,
                    ],
                })
              : t;
    };
