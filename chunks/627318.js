a.r(t), a.d(t, { default: () => ei });
var s,
    l = a(627968),
    r = a(64700),
    n = a(492462),
    i = a(873263),
    c = a(702841),
    d = a(830215),
    o = a(269815),
    u = a(114716),
    h = a(942156),
    x = a(736056),
    m = a(976860),
    p = a(495544),
    N = a(475743),
    g = a(954571),
    j = a(333748),
    f = a(652215);
function v(e) {
    let t = null;
    return (
        e === j.i.PLAYSTATION_APPLICATION_ID
            ? (t = f.fg2.PLAYSTATION)
            : e === j.i.PLAYSTATION_STAGING_APPLICATION_ID && (t = f.fg2.PLAYSTATION_STAGING),
        t
    );
}
var b = a(231723),
    y = a(200330),
    C = a(321987),
    A = a(284009),
    E = a.n(A),
    w = a(13202),
    _ = a(77468),
    I = a(370480),
    D = a(716965);
async function T(e, t, a) {
    let s = v(e);
    if (null == s) throw (await k(a, 1, "authorize"), Error("Unsupported client_id for two way link"));
    let l = null;
    try {
        let { body: e } = await _.A.authorize(s, { twoWayLinkType: w.I.DEVICE_CODE, userCode: a });
        l = e.url;
    } catch (e) {
        throw (await k(a, e?.body?.code ?? 0, "authorize"), Error("error during two way authorize"));
    }
    let r = null;
    try {
        E()(null != l, "No URL in authorize response");
        let { state: e } = (0, I.vA)(l);
        E()(null != e, "Authorize URL state query parameter must be present"), (r = e);
    } catch (e) {
        throw (await k(a, 2, "authorize"), Error("error parsing callback params"));
    }
    try {
        await _.A.callback(s, { code: t, state: r });
    } catch (e) {
        throw (await k(a, e?.body?.code ?? 0, "callback"), Error("error during two way callback"));
    }
}
async function k(e, t, a) {
    try {
        await (0, D.zf)(e, t, a);
    } catch (e) {}
}
function P(e) {
    let { data: t, onDenied: a, onError: s, onSuccess: n } = e,
        i = r.useCallback(
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
                        await (0, D.IN)(e.userCode, "granted"), n(e);
                    } catch (t) {
                        s(e);
                    }
                else
                    try {
                        await T(e.clientId, e.twoWayLinkCode, e.userCode), n(e);
                    } catch (t) {
                        s(e);
                    }
            },
            [a, s, n],
        ),
        c = r.useCallback((e) => i(t, e), [t, i]);
    return (0, l.jsx)(C.$, {
        removeChildWrapper: !0,
        children: (0, l.jsx)(y.OAuth2AuthorizeModal, {
            transitionState: b.ip.ENTERED,
            clientId: t.clientId,
            scopes: t.scopes,
            showLogout: !0,
            isTrustedName: !0,
            callbackWithoutPost: c,
        }),
    });
}
var L = a(534514),
    S = a(834730),
    O = a(821609),
    G = a(985018),
    z = a(313338),
    R = a(332633);
let W = (e) => {
    let { onTryAgain: t } = e;
    return (0, l.jsxs)("div", {
        className: z.Qs,
        children: [
            (0, l.jsx)("img", { src: R, width: "254", height: "127", alt: "" }),
            (0, l.jsxs)("div", {
                className: z.gx,
                children: [
                    (0, l.jsx)(L.D, { variant: "heading-xl/extrabold", children: G.intl.string(G.t["3dgwPD"]) }),
                    (0, l.jsx)(S.E, {
                        variant: "text-md/normal",
                        color: "text-default",
                        children: G.intl.string(G.t["/GAO1P"]),
                    }),
                ],
            }),
            (0, l.jsx)("div", {
                "data-button-hoisted-classname-wrapper": !0,
                className: z.wC,
                children: (0, l.jsx)(O.$, { variant: "primary", text: G.intl.string(G.t["7NqTJn"]), onClick: t }),
            }),
        ],
    });
};
var U = a(289873),
    B = a(414121),
    H = a(981355),
    V = a(403404);
let $ = a(196390),
    Y = a(906118),
    F = `${window.GLOBAL_ENV.WEBAPP_ENDPOINT.split("//")[1]}${f.BVt.ACTIVATE}`,
    Q = `${location.protocol}//${F}`;
function X(e) {
    let { text: t = "" } = e,
        [a, s] = r.useState(!1);
    return (
        r.useEffect(() => {
            let e = new Image();
            (e.src = Y), (e.onload = () => s(!0)), (e.onerror = () => s(!0));
        }, [Y]),
        "" !== t && a
            ? (0, l.jsxs)(l.Fragment, {
                  children: [
                      (0, l.jsx)(B.Ay, { size: 288, text: t }),
                      (0, l.jsx)("div", { className: V.xi, children: (0, l.jsx)("img", { src: Y, alt: "" }) }),
                  ],
              })
            : (0, l.jsx)("div", { className: V.Yp, children: (0, l.jsx)(U.y, { type: U.y.Type.WANDERING_CUBES }) })
    );
}
let M = (e) => {
    let { code: t } = e,
        { width: a, height: s } = (0, H.A)();
    return null == t || 0 === t.length
        ? null
        : (0, l.jsxs)("div", {
              className: V.nd,
              style: { zoom: Math.min(a / 1460, s / 1080, 1) },
              children: [
                  (0, l.jsx)("div", { className: V.Iv, children: (0, l.jsx)("div", { className: V.wm }) }),
                  (0, l.jsxs)("div", {
                      className: V.SV,
                      children: [
                          (0, l.jsxs)("div", {
                              className: V._c,
                              children: [
                                  (0, l.jsx)("div", {
                                      className: V.fn,
                                      children: (0, l.jsx)(X, { text: `${Q}?user_code=${encodeURIComponent(t)}` }),
                                  }),
                                  (0, l.jsxs)("div", {
                                      className: V.E7,
                                      children: [
                                          (0, l.jsx)(L.D, {
                                              variant: "heading-xxl/semibold",
                                              color: "text-strong",
                                              className: V.MM,
                                              children: G.intl.string(G.t.llDCid),
                                          }),
                                          (0, l.jsx)(L.D, {
                                              variant: "heading-xxl/normal",
                                              color: "text-default",
                                              children: G.intl.string(G.t.JfHzXG),
                                          }),
                                      ],
                                  }),
                              ],
                          }),
                          (0, l.jsxs)("div", {
                              className: V.$G,
                              children: [
                                  (0, l.jsx)("div", { className: V.yF }),
                                  (0, l.jsx)(L.D, {
                                      variant: "heading-lg/semibold",
                                      color: "text-strong",
                                      className: V.Bw,
                                      children: G.intl.string(G.t.arEHn4),
                                  }),
                                  (0, l.jsx)("div", { className: V.yF }),
                              ],
                          }),
                          (0, l.jsxs)("div", {
                              className: V.Y7,
                              children: [
                                  (0, l.jsxs)("div", {
                                      className: V.WX,
                                      children: [
                                          (0, l.jsx)(L.D, {
                                              variant: "heading-xxl/semibold",
                                              color: "text-strong",
                                              className: V.GP,
                                              children: G.intl.string(G.t["Eu8rJ/"]),
                                          }),
                                          (0, l.jsx)(L.D, {
                                              variant: "heading-xxl/normal",
                                              color: "text-default",
                                              children: G.intl.string(G.t.BkEMJ1),
                                          }),
                                      ],
                                  }),
                                  (0, l.jsxs)("div", {
                                      className: V.u5,
                                      children: [
                                          (0, l.jsx)(L.D, {
                                              variant: "heading-xxl/semibold",
                                              color: "text-strong",
                                              className: V.GP,
                                              children: F,
                                          }),
                                          (0, l.jsxs)("div", {
                                              className: V.WX,
                                              children: [
                                                  (0, l.jsx)(L.D, {
                                                      variant: "heading-xxl/normal",
                                                      color: "text-default",
                                                      children: G.intl.string(G.t.RyDxBX),
                                                  }),
                                                  (0, l.jsx)(L.D, {
                                                      variant: "heading-xxl/bold",
                                                      color: "text-strong",
                                                      className: V.H$,
                                                      children: t.match(/.{1,4}/g)?.join(" "),
                                                  }),
                                              ],
                                          }),
                                      ],
                                  }),
                              ],
                          }),
                          (0, l.jsx)("img", { className: V.kX, src: $, alt: "" }),
                      ],
                  }),
              ],
          });
};
var J = a(647053);
let q = (e) => {
    let { onComplete: t, data: a } = e,
        s = (0, r.useId)(),
        n = null,
        i = null,
        c = a.scopes.some((e) => (0, J.RM)(e));
    return (
        a.clientId === j.i.PLAYSTATION_APPLICATION_ID || a.clientId === j.i.PLAYSTATION_STAGING_APPLICATION_ID
            ? (n =
                  "https://cdn.discordapp.com/assets/content/c155b6ac1aeaf22db13c1195d742154bbf6bc02b787c5cfeeadc7b580501eb2f.png")
            : c &&
              (n =
                  "https://cdn.discordapp.com/assets/content/03d8faedfa507d8254fc77917112a8485a813c78b276b4fe19391e0b2f62a119.png"),
        null != a.twoWayLinkCode ? (i = G.intl.string(G.t.QhATl2)) : c && (i = G.intl.string(G.t.vBPvK3)),
        (0, l.jsxs)("div", {
            className: z.Qs,
            children: [
                null != n ? (0, l.jsx)("img", { src: n, className: z.xX, alt: "", "aria-labelledby": s }) : null,
                (0, l.jsxs)("div", {
                    className: z.gx,
                    children: [
                        (0, l.jsx)(L.D, {
                            variant: "heading-xl/extrabold",
                            id: s,
                            children: G.intl.string(G.t.qDtJmD),
                        }),
                        null != i
                            ? (0, l.jsx)(S.E, { variant: "text-md/normal", color: "text-default", children: i })
                            : null,
                    ],
                }),
                (0, l.jsx)("div", {
                    "data-button-hoisted-classname-wrapper": !0,
                    className: z.wC,
                    children: (0, l.jsx)(O.$, { variant: "primary", text: G.intl.string(G.t.i4jeWR), onClick: t }),
                }),
            ],
        })
    );
};
var K = a(331322),
    Z = a(292666),
    ee = (((s = {})[(s.USER_CODE_LENGTH = 8)] = "USER_CODE_LENGTH"), s),
    et = a(442205);
function ea(e) {
    let { onUserCodeAccepted: t, usePrefilledCode: a } = e,
        [s, c] = r.useState(() => {
            let { user_code: e } = n.parse(window.location.search);
            return a ? (e ?? "") : "";
        }),
        d = (0, i.zy)(),
        {
            manualSubmit: o,
            error: u,
            submitting: h,
        } = (function (e, t, a) {
            let [s, l] = r.useState(!1),
                [n, i] = r.useState(null),
                c = r.useCallback(async () => {
                    try {
                        l(!0);
                        let a = await (0, D.cG)(e);
                        l(!1),
                            t({
                                userCode: e,
                                clientId: a.body.client_id,
                                scopes: a.body.scopes,
                                twoWayLinkCode: a.body.two_way_link_code,
                            });
                    } catch (e) {
                        var s;
                        i(
                            429 === (s = e?.status)
                                ? G.intl.string(G.t.BPmZvj)
                                : 404 === s || 400 === s
                                  ? G.intl.string(G.t.aWa1Pw)
                                  : G.intl.string(G.t.JNQRU4),
                        ),
                            l(!1),
                            e?.status === 401 && a();
                    }
                }, [e, t, a]);
            return (
                r.useEffect(() => {
                    e.length === ee.USER_CODE_LENGTH ? c() : i(null);
                }, [e, c]),
                { manualSubmit: c, error: n, submitting: s }
            );
        })(
            s,
            t,
            r.useCallback(() => {
                (0, D.Vh)(d, "user_code_input_unauthorized");
            }, [d]),
        );
    return (0, l.jsxs)("div", {
        className: et.Qs,
        children: [
            (0, l.jsxs)("div", {
                className: et.gx,
                children: [
                    (0, l.jsx)(L.D, {
                        variant: "heading-xl/extrabold",
                        className: et.Qq,
                        children: G.intl.string(G.t.KYPNUv),
                    }),
                    (0, l.jsxs)(K.B, {
                        gap: 24,
                        children: [
                            (0, l.jsx)(S.E, {
                                variant: "text-md/medium",
                                color: "text-default",
                                className: et.Qq,
                                children: G.intl.string(G.t.xRHk7f),
                            }),
                            (0, l.jsx)(Z.k, {
                                placeholder: G.intl.formatToPlainString(G.t["0tbz6x"], { number: ee.USER_CODE_LENGTH }),
                                maxLength: ee.USER_CODE_LENGTH,
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
            (0, l.jsx)(O.$, {
                fullWidth: !0,
                variant: "primary",
                text: G.intl.string(G.t["3PatSz"]),
                onClick: o,
                loading: h,
                disabled: s.length !== ee.USER_CODE_LENGTH,
            }),
        ],
    });
}
var es = a(835468);
let el = a(843020);
function er() {
    let e,
        t,
        a = (0, i.zy)(),
        [s, u] = r.useState(() => {
            if (a.pathname === f.BVt.ACTIVATE_HANDOFF) {
                let { user_code: e } = n.parse(window.location.search);
                return { type: "handoff", code: e };
            }
            return { type: "user-code-input", usePrefilledCode: !0 };
        }),
        j = (0, c.bG)([x.A], () => x.A.hasLoadedExperiments);
    r.useEffect(() => {
        p.default.isAuthenticated() && !j && d.A.getExperiments();
    }, [j]),
        (0, o.A)(),
        (t = (0, N.A)(s)),
        r.useEffect(() => {
            if (s === t) return;
            let e = null;
            "user-code-input" !== s.type && "handoff" !== s.type && (e = v(s.userCodeData.clientId)),
                g.default.track(f.HAw.DEVICE_LINK_STEP, {
                    previous_step: t?.type,
                    current_step: s.type,
                    platform_type: e,
                });
        }, [t, s]);
    let b = r.useCallback(() => {
            u({ type: "user-code-input" });
        }, [u]),
        y = r.useCallback(
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
            (e = (0, l.jsx)(M, { code: s.code })), (E = !1);
            break;
        case "user-code-input":
            e = (0, l.jsx)(ea, { usePrefilledCode: s.usePrefilledCode || !1, onUserCodeAccepted: y });
            break;
        case "authorization":
            (e = (0, l.jsx)(P, { data: s.userCodeData, onDenied: b, onError: A, onSuccess: C })), (E = !1);
            break;
        case "success":
            e = (0, l.jsx)(q, { onComplete: () => (0, m.pX)(f.BVt.ME), data: s.userCodeData });
            break;
        case "error":
            e = (0, l.jsx)(W, { onTryAgain: b });
            break;
        default:
            e = null;
    }
    return (0, l.jsxs)("div", {
        className: es.fY,
        children: [
            (0, l.jsx)("img", { className: es.xX, src: el, alt: "" }),
            (0, l.jsx)(h.A, { show: !0, className: es.wm }),
            E ? (0, l.jsx)("div", { className: es.Qs, children: e }) : e,
        ],
    });
}
let en = (0, u.C)(er),
    ei = function () {
        return (0, i.zy)().pathname !== f.BVt.ACTIVATE_HANDOFF ? (0, l.jsx)(en, {}) : (0, l.jsx)(er, {});
    };
