"use strict";
n.d(t, { A: () => I, K: () => A });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(311907),
    l = n(970002),
    u = n(73153),
    c = n(775602),
    d = n(607470),
    _ = n(954571),
    f = n(203982),
    p = n(127445),
    h = n(652215),
    E = n(669414),
    m = n(819900),
    g = n(697634);
let A = 1e3,
    I = (e) => {
        let { children: t, isConfirmationStep: n, isEligibleForWowMoment: s, shouldPrefetchWowMoment: A } = e,
            I = (0, o.bG)([c.A], () => c.A.useReducedMotion),
            [T, S] = (0, i.useState)("entry"),
            y = (0, i.useRef)(null),
            N = (0, i.useRef)(null),
            v = (0, i.useCallback)(() => {
                "entry" === T && (S("idle"), null != y.current && y.current?.play());
            }, [T]),
            C = (0, i.useCallback)(() => {
                "exit" !== T && (S("exit"), null != N.current && N.current?.play());
            }, [T]),
            [O, R] = (0, i.useState)(!1);
        (0, i.useEffect)(() => {
            A && R(!0);
        }, [A]);
        let { mediaUrls: b, isSuccess: D } = (0, p.A)(!I && s && O),
            L = (0, i.useRef)(null),
            [w, M] = (0, i.useState)(!1),
            [P, x] = (0, i.useState)(!1),
            [k, U] = (0, i.useState)("none"),
            [G, F] = (0, i.useState)(!1);
        return ((0, i.useEffect)(() => {
            let e;
            s &&
                n &&
                !G &&
                "none" === k &&
                (I || !D
                    ? (U("static"),
                      I ||
                          (F(!0),
                          _.default.track(h.HAw.PREMIUM_BRAND_REFRESH_WOW_MOMENT_ASSETS_NOT_LOADED_ON_CONFIRMATION)),
                      (e = !1))
                    : (U("animated"), x(!0), (e = !0)),
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
                M(!0), C();
            }
            return (
                f._.subscribe(h.jej.WOW_MOMENT_CONFIRMATION_MODAL_CLOSED, e),
                () => {
                    f._.unsubscribe(h.jej.WOW_MOMENT_CONFIRMATION_MODAL_CLOSED, e);
                }
            );
        }, [C]),
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
                          className: E.j,
                          children: [
                              (0, r.jsx)("div", {
                                  className: E.ws,
                                  children: (0, r.jsx)(d.A, {
                                      playsInline: !0,
                                      muted: !0,
                                      autoPlay: !0,
                                      onEnded: v,
                                      className: a()(E.Ki, "entry" === T ? E.RK : E.R),
                                      children: (0, r.jsx)("source", { src: b.modalGlowEntry }),
                                  }),
                              }),
                              (0, r.jsx)(d.A, {
                                  ref: y,
                                  playsInline: !0,
                                  muted: !0,
                                  loop: !0,
                                  className: a()(E.Ki, "idle" === T ? E.RK : E.R),
                                  children: (0, r.jsx)("source", { src: b.modalGlowIdle }),
                              }),
                              (0, r.jsx)(d.A, {
                                  ref: N,
                                  playsInline: !0,
                                  muted: !0,
                                  className: a()(E.Ki, "exit" === T ? E.RK : E.R),
                                  children: (0, r.jsx)("source", { src: b.modalGlowExit }),
                              }),
                          ],
                      }),
                      (0, r.jsx)("div", {
                          className: E.Sh,
                          children: (0, r.jsx)(l.e, {
                              fit: "layout",
                              ref: L,
                              dataBinding: { ExitTrigger: w, EntryTrigger: P },
                              listenOnDocumentBody: !0,
                          }),
                      }),
                      (0, r.jsx)("div", { className: "exit" === T ? E.aO : E.ws, children: t }),
                  ],
              })
            : "static" === k
              ? (0, r.jsxs)(r.Fragment, {
                    children: [
                        !w &&
                            (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)("img", { src: m.A, alt: "", className: E.Uw }),
                                    (0, r.jsx)("img", { src: g.A, alt: "", className: E.Gv }),
                                ],
                            }),
                        t,
                    ],
                })
              : t;
    };
