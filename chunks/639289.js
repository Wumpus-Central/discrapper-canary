"use strict";
n.d(t, { A: () => I, K: () => A });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(311907),
    l = n(397927),
    u = n(73153),
    c = n(775602),
    d = n(607470),
    _ = n(954571),
    f = n(203982),
    p = n(127445),
    h = n(652215),
    m = n(570837),
    g = n(819900),
    E = n(697634);
let A = 1e3,
    I = (e) => {
        let { children: t, isConfirmationStep: n, isEligibleForWowMoment: a, shouldPrefetchWowMoment: A } = e,
            I = (0, o.bG)([c.A], () => c.A.useReducedMotion),
            [T, y] = (0, i.useState)("entry"),
            S = (0, i.useRef)(null),
            v = (0, i.useRef)(null),
            C = (0, i.useCallback)(() => {
                "entry" === T && (y("idle"), null != S.current && S.current?.play());
            }, [T]),
            b = (0, i.useCallback)(() => {
                "exit" !== T && (y("exit"), null != v.current && v.current?.play());
            }, [T]),
            [N, R] = (0, i.useState)(!1);
        (0, i.useEffect)(() => {
            A && R(!0);
        }, [A]);
        let { mediaUrls: O, isSuccess: D } = (0, p.A)(!I && a && N),
            L = (0, i.useRef)(null),
            [w, x] = (0, i.useState)(!1),
            [P, M] = (0, i.useState)(!1),
            [k, U] = (0, i.useState)("none"),
            [G, V] = (0, i.useState)(!1);
        if (
            ((0, i.useEffect)(() => {
                let e;
                a &&
                    n &&
                    !G &&
                    "none" === k &&
                    (I || !D
                        ? (U("static"),
                          I ||
                              (V(!0),
                              _.default.track(
                                  h.HAw.PREMIUM_BRAND_REFRESH_WOW_MOMENT_ASSETS_NOT_LOADED_ON_CONFIRMATION,
                              )),
                          (e = !1))
                        : (U("animated"), M(!0), (e = !0)),
                    u.h.dispatch({
                        type: "WOW_MOMENT_CONFIRMATION_SET_IS_DISPLAYING_WOW_MOMENT_CONFIRMATION",
                        value: !0,
                        isAnimated: e,
                    }),
                    _.default.track(h.HAw.PREMIUM_BRAND_REFRESH_WOW_MOMENT_VIEWED, {
                        wow_moment_type: e ? "animated" : "static",
                    }));
            }, [I, a, n, D, G, k]),
            (0, i.useEffect)(() => {
                function e() {
                    x(!0), b();
                }
                return (
                    f._.subscribe(h.jej.WOW_MOMENT_CONFIRMATION_MODAL_CLOSED, e),
                    () => {
                        f._.unsubscribe(h.jej.WOW_MOMENT_CONFIRMATION_MODAL_CLOSED, e);
                    }
                );
            }, [b]),
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
                                    onEnded: C,
                                    className: s()(m.Ki, "entry" === T ? m.RK : m.R),
                                    children: (0, r.jsx)("source", { src: O.modalGlowEntry }),
                                }),
                            }),
                            (0, r.jsx)(d.A, {
                                ref: S,
                                playsInline: !0,
                                muted: !0,
                                loop: !0,
                                className: s()(m.Ki, "idle" === T ? m.RK : m.R),
                                children: (0, r.jsx)("source", { src: O.modalGlowIdle }),
                            }),
                            (0, r.jsx)(d.A, {
                                ref: v,
                                playsInline: !0,
                                muted: !0,
                                className: s()(m.Ki, "exit" === T ? m.RK : m.R),
                                children: (0, r.jsx)("source", { src: O.modalGlowExit }),
                            }),
                        ],
                    }),
                    (0, r.jsx)("div", {
                        className: m.Sh,
                        children: (0, r.jsx)(l.eOb, {
                            fit: "layout",
                            ref: L,
                            dataBinding: { ExitTrigger: w, EntryTrigger: P },
                            listenOnDocumentBody: !0,
                        }),
                    }),
                    (0, r.jsx)("div", { className: "exit" === T ? m.aO : m.ws, children: t }),
                ],
            });
        let F = !w;
        return "static" === k
            ? (0, r.jsxs)(r.Fragment, {
                  children: [
                      F &&
                          (0, r.jsxs)(r.Fragment, {
                              children: [
                                  (0, r.jsx)("img", { src: g.A, alt: "", className: m.Uw }),
                                  (0, r.jsx)("img", { src: E.A, alt: "", className: m.Gv }),
                              ],
                          }),
                      t,
                  ],
              })
            : t;
    };
