(a.r(t), a.d(t, { default: () => ei }));
var s,
    l = a(477900),
    r = a(582128),
    i = a(492462),
    n = a(806163),
    c = a(164636),
    d = a(830215),
    o = a(269815),
    u = a(114716),
    h = a(942156),
    x = a(343446),
    m = a(976860),
    p = a(46653),
    g = a(475743),
    N = a(129230),
    f = a(333748),
    j = a(652215);
function y(e) {
    let t = null;
    return (
        e === f.i.PLAYSTATION_APPLICATION_ID
            ? (t = j.fg2.PLAYSTATION)
            : e === f.i.PLAYSTATION_STAGING_APPLICATION_ID && (t = j.fg2.PLAYSTATION_STAGING),
        t
    );
}
var b = a(231723),
    v = a(610056),
    C = a(321987),
    A = a(284009),
    E = a.n(A),
    w = a(13202),
    _ = a(77468),
    I = a(370480),
    D = a(716965);
async function T(e, t, a) {
    try {
        await (0, D.zf)(e, t, a);
    } catch (e) {}
}
function k(e) {
    let { data: t, onDenied: a, onError: s, onSuccess: i } = e,
        n = r.useCallback(
            async (e, t) => {
                if (!t) {
                    try {
                        await (0, D.IN)(e.userCode, "denied");
                    } catch (e) {}
                    a();
                    return;
                }
                if (null == e.twoWayLinkCode)
                    try {
                        (await (0, D.IN)(e.userCode, "granted"), i(e));
                    } catch (t) {
                        s(e);
                    }
                else
                    try {
                        (await (async function (e, t, a) {
                            let s = y(e);
                            if (null == s)
                                throw (await T(a, 1, "authorize"), Error("Unsupported client_id for two way link"));
                            let l = null;
                            try {
                                let { body: e } = await _.A.authorize(s, {
                                    twoWayLinkType: w.I.DEVICE_CODE,
                                    userCode: a,
                                });
                                l = e.url;
                            } catch (e) {
                                throw (
                                    await T(a, e?.body?.code ?? 0, "authorize"), Error("error during two way authorize")
                                );
                            }
                            let r = null;
                            try {
                                E()(null != l, "No URL in authorize response");
                                let { state: e } = (0, I.vA)(l);
                                (E()(null != e, "Authorize URL state query parameter must be present"), (r = e));
                            } catch (e) {
                                throw (await T(a, 2, "authorize"), Error("error parsing callback params"));
                            }
                            try {
                                await _.A.callback(s, { code: t, state: r });
                            } catch (e) {
                                throw (
                                    await T(a, e?.body?.code ?? 0, "callback"), Error("error during two way callback")
                                );
                            }
                        })(e.clientId, e.twoWayLinkCode, e.userCode),
                            i(e));
                    } catch (t) {
                        s(e);
                    }
            },
            [a, s, i],
        ),
        c = r.useCallback((e) => n(t, e), [t, n]);
    return (0, l.jsx)(C.$, {
        removeChildWrapper: !0,
        children: (0, l.jsx)(v.OAuth2AuthorizeModal, {
            transitionState: b.ip.ENTERED,
            clientId: t.clientId,
            scopes: t.scopes,
            showLogout: !0,
            isTrustedName: !0,
            callbackWithoutPost: c,
        }),
    });
}
var P = a(534514),
    L = a(834730),
    S = a(821609),
    O = a(792996),
    G = a(484411),
    z = a(332633);
function R(e) {
    let { onTryAgain: t } = e;
    return (0, l.jsxs)("div", {
        className: G.Qs,
        children: [
            (0, l.jsx)("img", { src: z, width: "254", height: "127", alt: "" }),
            (0, l.jsxs)("div", {
                className: G.gx,
                children: [
                    (0, l.jsx)(P.D, { variant: "heading-xl/semibold", children: O.intl.string(O.t["3dgwPD"]) }),
                    (0, l.jsx)(L.E, {
                        variant: "body-md/normal",
                        color: "text-default",
                        children: O.intl.string(O.t["/GAO1P"]),
                    }),
                ],
            }),
            (0, l.jsx)("div", {
                "data-button-hoisted-classname-wrapper": !0,
                className: G.wC,
                children: (0, l.jsx)(S.$, { variant: "primary", text: O.intl.string(O.t["7NqTJn"]), onClick: t }),
            }),
        ],
    });
}
var W = a(289873),
    U = a(414121),
    B = a(981355),
    H = a(978327);
let V = a(196390),
    $ = a(906118),
    Y = `${window.GLOBAL_ENV.WEBAPP_ENDPOINT.split("//")[1]}${j.BVt.ACTIVATE}`,
    F = `${location.protocol}//${Y}`;
function Q(e) {
    let { text: t = "" } = e,
        [a, s] = r.useState(!1);
    return (
        r.useEffect(() => {
            let e = new Image();
            ((e.src = $), (e.onload = () => s(!0)), (e.onerror = () => s(!0)));
        }, [$]),
        "" !== t && a
            ? (0, l.jsxs)(l.Fragment, {
                  children: [
                      (0, l.jsx)(U.Ay, { size: 288, text: t }),
                      (0, l.jsx)("div", { className: H.xi, children: (0, l.jsx)("img", { src: $, alt: "" }) }),
                  ],
              })
            : (0, l.jsx)("div", { className: H.Yp, children: (0, l.jsx)(W.y, { type: W.y.Type.WANDERING_CUBES }) })
    );
}
function X(e) {
    let { code: t } = e,
        { width: a, height: s } = (0, B.A)();
    return null == t || 0 === t.length
        ? null
        : (0, l.jsxs)("div", {
              className: H.nd,
              style: { zoom: Math.min(a / 1460, s / 1080, 1) },
              children: [
                  (0, l.jsx)("div", { className: H.Iv, children: (0, l.jsx)("div", { className: H.wm }) }),
                  (0, l.jsxs)("div", {
                      className: H.SV,
                      children: [
                          (0, l.jsxs)("div", {
                              className: H._c,
                              children: [
                                  (0, l.jsx)("div", {
                                      className: H.fn,
                                      children: (0, l.jsx)(Q, { text: `${F}?user_code=${encodeURIComponent(t)}` }),
                                  }),
                                  (0, l.jsxs)("div", {
                                      className: H.E7,
                                      children: [
                                          (0, l.jsx)(P.D, {
                                              variant: "heading-xxl/semibold",
                                              color: "text-strong",
                                              className: H.MM,
                                              children: O.intl.string(O.t.llDCid),
                                          }),
                                          (0, l.jsx)(P.D, {
                                              variant: "heading-xxl/medium",
                                              color: "text-default",
                                              children: O.intl.string(O.t.JfHzXG),
                                          }),
                                      ],
                                  }),
                              ],
                          }),
                          (0, l.jsxs)("div", {
                              className: H.$G,
                              children: [
                                  (0, l.jsx)("div", { className: H.yF }),
                                  (0, l.jsx)(P.D, {
                                      variant: "heading-lg/semibold",
                                      color: "text-strong",
                                      className: H.Bw,
                                      children: O.intl.string(O.t.arEHn4),
                                  }),
                                  (0, l.jsx)("div", { className: H.yF }),
                              ],
                          }),
                          (0, l.jsxs)("div", {
                              className: H.Y7,
                              children: [
                                  (0, l.jsxs)("div", {
                                      className: H.WX,
                                      children: [
                                          (0, l.jsx)(P.D, {
                                              variant: "heading-xxl/semibold",
                                              color: "text-strong",
                                              className: H.GP,
                                              children: O.intl.string(O.t["Eu8rJ/"]),
                                          }),
                                          (0, l.jsx)(P.D, {
                                              variant: "heading-xxl/medium",
                                              color: "text-default",
                                              children: O.intl.string(O.t.BkEMJ1),
                                          }),
                                      ],
                                  }),
                                  (0, l.jsxs)("div", {
                                      className: H.u5,
                                      children: [
                                          (0, l.jsx)(P.D, {
                                              variant: "heading-xxl/semibold",
                                              color: "text-strong",
                                              className: H.GP,
                                              children: Y,
                                          }),
                                          (0, l.jsxs)("div", {
                                              className: H.WX,
                                              children: [
                                                  (0, l.jsx)(P.D, {
                                                      variant: "heading-xxl/medium",
                                                      color: "text-default",
                                                      children: O.intl.string(O.t.RyDxBX),
                                                  }),
                                                  (0, l.jsx)(P.D, {
                                                      variant: "heading-xxl/semibold",
                                                      color: "text-strong",
                                                      className: H.H$,
                                                      children: t.match(/.{1,4}/g)?.join(" "),
                                                  }),
                                              ],
                                          }),
                                      ],
                                  }),
                              ],
                          }),
                          (0, l.jsx)("img", { className: H.kX, src: V, alt: "" }),
                      ],
                  }),
              ],
          });
}
var q = a(647053);
function M(e) {
    let { onComplete: t, data: a } = e,
        s = (0, r.useId)(),
        i = null,
        n = null,
        c = a.scopes.some((e) => (0, q.RM)(e));
    return (
        a.clientId === f.i.PLAYSTATION_APPLICATION_ID || a.clientId === f.i.PLAYSTATION_STAGING_APPLICATION_ID
            ? (i =
                  "https://cdn.discordapp.com/assets/content/c155b6ac1aeaf22db13c1195d742154bbf6bc02b787c5cfeeadc7b580501eb2f.png")
            : c &&
              (i =
                  "https://cdn.discordapp.com/assets/content/03d8faedfa507d8254fc77917112a8485a813c78b276b4fe19391e0b2f62a119.png"),
        null != a.twoWayLinkCode ? (n = O.intl.string(O.t.QhATl2)) : c && (n = O.intl.string(O.t.vBPvK3)),
        (0, l.jsxs)("div", {
            className: G.Qs,
            children: [
                null != i ? (0, l.jsx)("img", { src: i, className: G.xX, alt: "", "aria-labelledby": s }) : null,
                (0, l.jsxs)("div", {
                    className: G.gx,
                    children: [
                        (0, l.jsx)(P.D, { variant: "heading-xl/semibold", id: s, children: O.intl.string(O.t.qDtJmD) }),
                        null != n
                            ? (0, l.jsx)(L.E, { variant: "body-md/normal", color: "text-default", children: n })
                            : null,
                    ],
                }),
                (0, l.jsx)("div", {
                    "data-button-hoisted-classname-wrapper": !0,
                    className: G.wC,
                    children: (0, l.jsx)(S.$, { variant: "primary", text: O.intl.string(O.t.i4jeWR), onClick: t }),
                }),
            ],
        })
    );
}
var J = a(331322),
    K = a(95477),
    Z = (((s = {})[(s.USER_CODE_LENGTH = 8)] = "USER_CODE_LENGTH"), s),
    ee = a(642850);
function et(e) {
    let { onUserCodeAccepted: t, usePrefilledCode: a } = e,
        [s, c] = r.useState(() => {
            let { user_code: e } = i.qg(window.location.search);
            return a ? (e ?? "") : "";
        }),
        d = (0, n.zy)(),
        {
            manualSubmit: o,
            error: u,
            submitting: h,
        } = (function (e, t, a) {
            let [s, l] = r.useState(!1),
                [i, n] = r.useState(null),
                c = r.useCallback(async () => {
                    try {
                        l(!0);
                        let a = await (0, D.cG)(e);
                        (l(!1),
                            t({
                                userCode: e,
                                clientId: a.body.client_id,
                                scopes: a.body.scopes,
                                twoWayLinkCode: a.body.two_way_link_code,
                            }));
                    } catch (e) {
                        var s;
                        (n(
                            429 === (s = e?.status)
                                ? O.intl.string(O.t.BPmZvj)
                                : 404 === s || 400 === s
                                  ? O.intl.string(O.t.aWa1Pw)
                                  : O.intl.string(O.t.JNQRU4),
                        ),
                            l(!1),
                            e?.status === 401 && a());
                    }
                }, [e, t, a]);
            return (
                r.useEffect(() => {
                    e.length === Z.USER_CODE_LENGTH ? c() : n(null);
                }, [e, c]),
                { manualSubmit: c, error: i, submitting: s }
            );
        })(
            s,
            t,
            r.useCallback(() => {
                (0, D.Vh)(d, "user_code_input_unauthorized");
            }, [d]),
        );
    return (0, l.jsxs)("div", {
        className: ee.Qs,
        children: [
            (0, l.jsxs)("div", {
                className: ee.gx,
                children: [
                    (0, l.jsx)(P.D, {
                        variant: "heading-xl/semibold",
                        className: ee.Qq,
                        children: O.intl.string(O.t.KYPNUv),
                    }),
                    (0, l.jsxs)(J.B, {
                        gap: 24,
                        children: [
                            (0, l.jsx)(L.E, {
                                variant: "body-md/medium",
                                color: "text-default",
                                className: ee.Qq,
                                children: O.intl.string(O.t.xRHk7f),
                            }),
                            (0, l.jsx)(K.k, {
                                placeholder: O.intl.formatToPlainString(O.t["0tbz6x"], { number: Z.USER_CODE_LENGTH }),
                                maxLength: Z.USER_CODE_LENGTH,
                                autoComplete: "off",
                                autoFocus: !0,
                                value: s,
                                onChange: c,
                                error: u,
                                fullWidth: !0,
                            }),
                        ],
                    }),
                ],
            }),
            (0, l.jsx)(S.$, {
                fullWidth: !0,
                variant: "primary",
                text: O.intl.string(O.t["3PatSz"]),
                onClick: o,
                loading: h,
                disabled: s.length !== Z.USER_CODE_LENGTH,
            }),
        ],
    });
}
var ea = a(657985);
let es = a(843020);
function el() {
    let e,
        t,
        a = (0, n.zy)(),
        [s, u] = r.useState(() => {
            if (a.pathname === j.BVt.ACTIVATE_HANDOFF) {
                let { user_code: e } = i.qg(window.location.search);
                return { type: "handoff", code: e };
            }
            return { type: "user-code-input", usePrefilledCode: !0 };
        }),
        f = (0, c.bG)([x.A], () => x.A.hasLoadedExperiments);
    (r.useEffect(() => {
        p.default.isAuthenticated() && !f && d.A.getExperiments();
    }, [f]),
        (0, o.A)(),
        (t = (0, g.Ay)(s)),
        r.useEffect(() => {
            if (s === t) return;
            let e = null;
            ("user-code-input" !== s.type && "handoff" !== s.type && (e = y(s.userCodeData.clientId)),
                N.default.track(j.HAw.DEVICE_LINK_STEP, {
                    previous_step: t?.type,
                    current_step: s.type,
                    platform_type: e,
                }));
        }, [t, s]));
    let b = r.useCallback(() => {
            u({ type: "user-code-input" });
        }, [u]),
        v = r.useCallback(
            (e) => {
                u({ type: "authorization", userCodeData: e });
            },
            [u],
        ),
        C = r.useCallback(
            (e) => {
                u({ type: "success", userCodeData: e });
            },
            [u],
        ),
        A = r.useCallback(
            (e) => {
                u({ type: "error", userCodeData: e });
            },
            [u],
        ),
        E = !0;
    switch (s.type) {
        case "handoff":
            ((e = (0, l.jsx)(X, { code: s.code })), (E = !1));
            break;
        case "user-code-input":
            e = (0, l.jsx)(et, { usePrefilledCode: s.usePrefilledCode || !1, onUserCodeAccepted: v });
            break;
        case "authorization":
            ((e = (0, l.jsx)(k, { data: s.userCodeData, onDenied: b, onError: A, onSuccess: C })), (E = !1));
            break;
        case "success":
            e = (0, l.jsx)(M, { onComplete: () => (0, m.pX)(j.BVt.ME), data: s.userCodeData });
            break;
        case "error":
            e = (0, l.jsx)(R, { onTryAgain: b });
            break;
        default:
            e = null;
    }
    return (0, l.jsxs)("div", {
        className: ea.fY,
        children: [
            (0, l.jsx)("img", { className: ea.xX, src: es, alt: "" }),
            (0, l.jsx)(h.A, { show: !0, className: ea.wm }),
            E ? (0, l.jsx)("div", { className: ea.Qs, children: e }) : e,
        ],
    });
}
let er = (0, u.C)(el),
    ei = function () {
        return (0, n.zy)().pathname !== j.BVt.ACTIVATE_HANDOFF ? (0, l.jsx)(er, {}) : (0, l.jsx)(el, {});
    };
