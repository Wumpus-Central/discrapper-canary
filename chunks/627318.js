"use strict";
a.r(t), a.d(t, { default: () => el });
var s,
    r = a(627968),
    n = a(64700),
    i = a(492462),
    l = a(873263),
    o = a(702841),
    c = a(830215),
    d = a(269815),
    u = a(114716),
    h = a(942156),
    p = a(736056),
    x = a(976860),
    _ = a(495544),
    f = a(475743),
    m = a(954571),
    g = a(333748),
    C = a(652215);
function v(e) {
    let t = null;
    return (
        e === g.i.PLAYSTATION_APPLICATION_ID
            ? (t = C.fg2.PLAYSTATION)
            : e === g.i.PLAYSTATION_STAGING_APPLICATION_ID && (t = C.fg2.PLAYSTATION_STAGING),
        t
    );
}
var N = a(231723),
    y = a(200330),
    b = a(321987),
    w = a(284009),
    A = a.n(w),
    j = a(13202),
    E = a(77468),
    I = a(370480),
    T = a(716965);
async function P(e, t, a) {
    let s = v(e);
    if (null == s) throw (await k(a, 1, "authorize"), Error("Unsupported client_id for two way link"));
    let r = null;
    try {
        let { body: e } = await E.A.authorize(s, { twoWayLinkType: j.I.DEVICE_CODE, userCode: a });
        r = e.url;
    } catch (e) {
        throw (await k(a, e?.body?.code ?? 0, "authorize"), Error("error during two way authorize"));
    }
    let n = null;
    try {
        A()(null != r, "No URL in authorize response");
        let { state: e } = (0, I.vA)(r);
        A()(null != e, "Authorize URL state query parameter must be present"), (n = e);
    } catch (e) {
        throw (await k(a, 2, "authorize"), Error("error parsing callback params"));
    }
    try {
        await E.A.callback(s, { code: t, state: n });
    } catch (e) {
        throw (await k(a, e?.body?.code ?? 0, "callback"), Error("error during two way callback"));
    }
}
async function k(e, t, a) {
    try {
        await (0, T.zf)(e, t, a);
    } catch (e) {}
}
function D(e) {
    let { data: t, onDenied: a, onError: s, onSuccess: i } = e,
        l = n.useCallback(
            async (e, t) => {
                if (!t) {
                    try {
                        await (0, T.IN)(e.userCode, "denied");
                    } catch (e) {}
                    a();
                    return;
                }
                if (null == e.twoWayLinkCode)
                    try {
                        await (0, T.IN)(e.userCode, "granted"), i(e);
                    } catch (t) {
                        s(e);
                    }
                else
                    try {
                        await P(e.clientId, e.twoWayLinkCode, e.userCode), i(e);
                    } catch (t) {
                        s(e);
                    }
            },
            [a, s, i],
        ),
        o = n.useCallback((e) => l(t, e), [t, l]);
    return (0, r.jsx)(b.$, {
        removeChildWrapper: !0,
        children: (0, r.jsx)(y.OAuth2AuthorizeModal, {
            transitionState: N.ip.ENTERED,
            clientId: t.clientId,
            scopes: t.scopes,
            showLogout: !0,
            isTrustedName: !0,
            callbackWithoutPost: o,
        }),
    });
}
var S = a(534514),
    O = a(834730),
    L = a(821609),
    z = a(985018),
    G = a(313338),
    R = a(332633);
let W = (e) => {
    let { onTryAgain: t } = e;
    return (0, r.jsxs)("div", {
        className: G.Qs,
        children: [
            (0, r.jsx)("img", { src: R, width: "254", height: "127", alt: "" }),
            (0, r.jsxs)("div", {
                className: G.gx,
                children: [
                    (0, r.jsx)(S.D, { variant: "heading-xl/extrabold", children: z.intl.string(z.t["3dgwPD"]) }),
                    (0, r.jsx)(O.E, {
                        variant: "text-md/normal",
                        color: "text-default",
                        children: z.intl.string(z.t["/GAO1P"]),
                    }),
                ],
            }),
            (0, r.jsx)("div", {
                "data-button-hoisted-classname-wrapper": !0,
                className: G.wC,
                children: (0, r.jsx)(L.$, { variant: "primary", text: z.intl.string(z.t["7NqTJn"]), onClick: t }),
            }),
        ],
    });
};
var q = a(289873),
    B = a(414121),
    H = a(981355),
    U = a(403404);
let Y = a(196390),
    V = a(906118),
    X = `${window.GLOBAL_ENV.WEBAPP_ENDPOINT.split("//")[1]}${C.BVt.ACTIVATE}`,
    $ = `${location.protocol}//${X}`;
function M(e) {
    let { text: t = "" } = e,
        [a, s] = n.useState(!1);
    return (
        n.useEffect(() => {
            let e = new Image();
            (e.src = V), (e.onload = () => s(!0)), (e.onerror = () => s(!0));
        }, [V]),
        "" !== t && a
            ? (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)(B.Ay, { size: 288, text: t }),
                      (0, r.jsx)("div", { className: U.xi, children: (0, r.jsx)("img", { src: V, alt: "" }) }),
                  ],
              })
            : (0, r.jsx)("div", { className: U.Yp, children: (0, r.jsx)(q.y, { type: q.y.Type.WANDERING_CUBES }) })
    );
}
let Q = (e) => {
    let { code: t } = e,
        { width: a, height: s } = (0, H.A)();
    return null == t || 0 === t.length
        ? null
        : (0, r.jsxs)("div", {
              className: U.nd,
              style: { zoom: Math.min(a / 1460, s / 1080, 1) },
              children: [
                  (0, r.jsx)("div", { className: U.Iv, children: (0, r.jsx)("div", { className: U.wm }) }),
                  (0, r.jsxs)("div", {
                      className: U.SV,
                      children: [
                          (0, r.jsxs)("div", {
                              className: U._c,
                              children: [
                                  (0, r.jsx)("div", {
                                      className: U.fn,
                                      children: (0, r.jsx)(M, { text: `${$}?user_code=${encodeURIComponent(t)}` }),
                                  }),
                                  (0, r.jsxs)("div", {
                                      className: U.E7,
                                      children: [
                                          (0, r.jsx)(S.D, {
                                              variant: "heading-xxl/semibold",
                                              color: "text-strong",
                                              className: U.MM,
                                              children: z.intl.string(z.t.llDCid),
                                          }),
                                          (0, r.jsx)(S.D, {
                                              variant: "heading-xxl/normal",
                                              color: "text-default",
                                              children: z.intl.string(z.t.JfHzXG),
                                          }),
                                      ],
                                  }),
                              ],
                          }),
                          (0, r.jsxs)("div", {
                              className: U.$G,
                              children: [
                                  (0, r.jsx)("div", { className: U.yF }),
                                  (0, r.jsx)(S.D, {
                                      variant: "heading-lg/semibold",
                                      color: "text-strong",
                                      className: U.Bw,
                                      children: z.intl.string(z.t.arEHn4),
                                  }),
                                  (0, r.jsx)("div", { className: U.yF }),
                              ],
                          }),
                          (0, r.jsxs)("div", {
                              className: U.Y7,
                              children: [
                                  (0, r.jsxs)("div", {
                                      className: U.WX,
                                      children: [
                                          (0, r.jsx)(S.D, {
                                              variant: "heading-xxl/semibold",
                                              color: "text-strong",
                                              className: U.GP,
                                              children: z.intl.string(z.t["Eu8rJ/"]),
                                          }),
                                          (0, r.jsx)(S.D, {
                                              variant: "heading-xxl/normal",
                                              color: "text-default",
                                              children: z.intl.string(z.t.BkEMJ1),
                                          }),
                                      ],
                                  }),
                                  (0, r.jsxs)("div", {
                                      className: U.u5,
                                      children: [
                                          (0, r.jsx)(S.D, {
                                              variant: "heading-xxl/semibold",
                                              color: "text-strong",
                                              className: U.GP,
                                              children: X,
                                          }),
                                          (0, r.jsxs)("div", {
                                              className: U.WX,
                                              children: [
                                                  (0, r.jsx)(S.D, {
                                                      variant: "heading-xxl/normal",
                                                      color: "text-default",
                                                      children: z.intl.string(z.t.RyDxBX),
                                                  }),
                                                  (0, r.jsx)(S.D, {
                                                      variant: "heading-xxl/bold",
                                                      color: "text-strong",
                                                      className: U.H$,
                                                      children: t.match(/.{1,4}/g)?.join(" "),
                                                  }),
                                              ],
                                          }),
                                      ],
                                  }),
                              ],
                          }),
                          (0, r.jsx)("img", { className: U.kX, src: Y, alt: "" }),
                      ],
                  }),
              ],
          });
};
var F = a(647053);
let Z = (e) => {
    let { onComplete: t, data: a } = e,
        s = (0, n.useId)(),
        i = null,
        l = null,
        o = a.scopes.some((e) => (0, F.RM)(e));
    return (
        a.clientId === g.i.PLAYSTATION_APPLICATION_ID || a.clientId === g.i.PLAYSTATION_STAGING_APPLICATION_ID
            ? (i =
                  "https://cdn.discordapp.com/assets/content/c155b6ac1aeaf22db13c1195d742154bbf6bc02b787c5cfeeadc7b580501eb2f.png")
            : o &&
              (i =
                  "https://cdn.discordapp.com/assets/content/03d8faedfa507d8254fc77917112a8485a813c78b276b4fe19391e0b2f62a119.png"),
        null != a.twoWayLinkCode ? (l = z.intl.string(z.t.QhATl2)) : o && (l = z.intl.string(z.t.vBPvK3)),
        (0, r.jsxs)("div", {
            className: G.Qs,
            children: [
                null != i ? (0, r.jsx)("img", { src: i, className: G.xX, alt: "", "aria-labelledby": s }) : null,
                (0, r.jsxs)("div", {
                    className: G.gx,
                    children: [
                        (0, r.jsx)(S.D, {
                            variant: "heading-xl/extrabold",
                            id: s,
                            children: z.intl.string(z.t.qDtJmD),
                        }),
                        null != l
                            ? (0, r.jsx)(O.E, { variant: "text-md/normal", color: "text-default", children: l })
                            : null,
                    ],
                }),
                (0, r.jsx)("div", {
                    "data-button-hoisted-classname-wrapper": !0,
                    className: G.wC,
                    children: (0, r.jsx)(L.$, { variant: "primary", text: z.intl.string(z.t.i4jeWR), onClick: t }),
                }),
            ],
        })
    );
};
var J = a(331322),
    K = a(292666),
    ee = (((s = {})[(s.USER_CODE_LENGTH = 8)] = "USER_CODE_LENGTH"), s),
    et = a(442205);
function ea(e) {
    let { onUserCodeAccepted: t, usePrefilledCode: a } = e,
        [s, o] = n.useState(() => {
            let { user_code: e } = i.parse(window.location.search);
            return a ? (e ?? "") : "";
        }),
        c = (0, l.zy)(),
        {
            manualSubmit: d,
            error: u,
            submitting: h,
        } = (function (e, t, a) {
            let [s, r] = n.useState(!1),
                [i, l] = n.useState(null),
                o = n.useCallback(async () => {
                    try {
                        r(!0);
                        let a = await (0, T.cG)(e);
                        r(!1),
                            t({
                                userCode: e,
                                clientId: a.body.client_id,
                                scopes: a.body.scopes,
                                twoWayLinkCode: a.body.two_way_link_code,
                            });
                    } catch (e) {
                        var s;
                        l(
                            429 === (s = e?.status)
                                ? z.intl.string(z.t.BPmZvj)
                                : 404 === s || 400 === s
                                  ? z.intl.string(z.t.aWa1Pw)
                                  : z.intl.string(z.t.JNQRU4),
                        ),
                            r(!1),
                            e?.status === 401 && a();
                    }
                }, [e, t, a]);
            return (
                n.useEffect(() => {
                    e.length === ee.USER_CODE_LENGTH ? o() : l(null);
                }, [e, o]),
                { manualSubmit: o, error: i, submitting: s }
            );
        })(
            s,
            t,
            n.useCallback(() => {
                (0, T.Vh)(c, "user_code_input_unauthorized");
            }, [c]),
        );
    return (0, r.jsxs)("div", {
        className: et.Qs,
        children: [
            (0, r.jsxs)("div", {
                className: et.gx,
                children: [
                    (0, r.jsx)(S.D, {
                        variant: "heading-xl/extrabold",
                        className: et.Qq,
                        children: z.intl.string(z.t.KYPNUv),
                    }),
                    (0, r.jsxs)(J.B, {
                        gap: 24,
                        children: [
                            (0, r.jsx)(O.E, {
                                variant: "text-md/medium",
                                color: "text-default",
                                className: et.Qq,
                                children: z.intl.string(z.t.xRHk7f),
                            }),
                            (0, r.jsx)(K.k, {
                                placeholder: z.intl.formatToPlainString(z.t["0tbz6x"], { number: ee.USER_CODE_LENGTH }),
                                maxLength: ee.USER_CODE_LENGTH,
                                autoComplete: "off",
                                autoFocus: !0,
                                value: s,
                                onChange: o,
                                error: u,
                                fullWidth: !0,
                            }),
                        ],
                    }),
                ],
            }),
            (0, r.jsx)(L.$, {
                fullWidth: !0,
                variant: "primary",
                text: z.intl.string(z.t["3PatSz"]),
                onClick: d,
                loading: h,
                disabled: s.length !== ee.USER_CODE_LENGTH,
            }),
        ],
    });
}
var es = a(835468);
let er = a(843020);
function en() {
    let e,
        t,
        a = (0, l.zy)(),
        [s, u] = n.useState(() => {
            if (a.pathname === C.BVt.ACTIVATE_HANDOFF) {
                let { user_code: e } = i.parse(window.location.search);
                return { type: "handoff", code: e };
            }
            return { type: "user-code-input", usePrefilledCode: !0 };
        }),
        g = (0, o.bG)([p.A], () => p.A.hasLoadedExperiments);
    n.useEffect(() => {
        _.default.isAuthenticated() && !g && c.A.getExperiments();
    }, [g]),
        (0, d.A)(),
        (t = (0, f.A)(s)),
        n.useEffect(() => {
            if (s === t) return;
            let e = null;
            "user-code-input" !== s.type && "handoff" !== s.type && (e = v(s.userCodeData.clientId)),
                m.default.track(C.HAw.DEVICE_LINK_STEP, {
                    previous_step: t?.type,
                    current_step: s.type,
                    platform_type: e,
                });
        }, [t, s]);
    let N = n.useCallback(() => {
            u({ type: "user-code-input" });
        }, [u]),
        y = n.useCallback(
            (e) => {
                u({ type: "authorization", userCodeData: e });
            },
            [u],
        ),
        b = n.useCallback(
            (e) => {
                u({ type: "success", userCodeData: e });
            },
            [u],
        ),
        w = n.useCallback(
            (e) => {
                u({ type: "error", userCodeData: e });
            },
            [u],
        ),
        A = !0;
    switch (s.type) {
        case "handoff":
            (e = (0, r.jsx)(Q, { code: s.code })), (A = !1);
            break;
        case "user-code-input":
            e = (0, r.jsx)(ea, { usePrefilledCode: s.usePrefilledCode || !1, onUserCodeAccepted: y });
            break;
        case "authorization":
            (e = (0, r.jsx)(D, { data: s.userCodeData, onDenied: N, onError: w, onSuccess: b })), (A = !1);
            break;
        case "success":
            e = (0, r.jsx)(Z, { onComplete: () => (0, x.pX)(C.BVt.ME), data: s.userCodeData });
            break;
        case "error":
            e = (0, r.jsx)(W, { onTryAgain: N });
            break;
        default:
            e = null;
    }
    return (0, r.jsxs)("div", {
        className: es.fY,
        children: [
            (0, r.jsx)("img", { className: es.xX, src: er, alt: "" }),
            (0, r.jsx)(h.A, { show: !0, className: es.wm }),
            A ? (0, r.jsx)("div", { className: es.Qs, children: e }) : e,
        ],
    });
}
let ei = (0, u.C)(en),
    el = function () {
        return (0, l.zy)().pathname !== C.BVt.ACTIVATE_HANDOFF ? (0, r.jsx)(ei, {}) : (0, r.jsx)(en, {});
    };
