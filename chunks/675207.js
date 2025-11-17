n.r(t),
    n.d(t, {
        VerifyAccountDeekLink: () => E,
        VerifyAccountLoading: () => v,
        default: () => m,
    }),
    n(388685),
    n(704826),
    n(35282),
    n(457542);
var r = n(54381),
    c = n(473749),
    o = n(828700),
    l = n(873546),
    a = n(604039),
    i = n(755721),
    u = n(481060),
    s = n(457330),
    d = n(733427),
    f = n(169382),
    p = n(726542),
    O = n(536285),
    N = n(591759),
    g = n(656649),
    C = n(981631),
    b = n(388032),
    y = n(130560);
let S = null != window.opener;
function m() {
    var e, t;
    let n = (0, o.k6)(),
        i = (0, f.l)(),
        u = i.get("code"),
        O = i.get("oauth_verifier"),
        b = null != (e = i.get("state")) ? e : "",
        y = i.get("loading"),
        m = null != (t = i.get("iss")) ? t : void 0,
        { type: w } = (0, o.UO)(),
        R = (0, g.vJ)(w),
        [A, T] = c.useState(!1),
        [D, x] = c.useState(!1),
        Z = (0, d.Z)(),
        k = null == O ? (null != u ? u : "") : O;
    c.useEffect(() => {
        let e;
        if (null != y) return;
        for (let t of i.keys()) t.startsWith("openid.") && (null == e && (e = {}), (e[t] = i.get(t)));
        let t = (0, g.vJ)(w);
        !(async function () {
            if (null == t || !p.Z.isSupported(t)) return;
            function r(e) {
                let { status: r, body: c } = e;
                if (null != t) {
                    if (null == c ? void 0 : c.redirect) {
                        window.location = c.redirect;
                        return;
                    }
                    if ([200, 204].includes(r)) {
                        n.replace(C.Z5c.CONNECTIONS_SUCCESS(t)), S && window.close();
                        return;
                    }
                    (null == c ? void 0 : c.code) != null && i.append("error-code", c.code),
                        n.replace("".concat(C.Z5c.CONNECTIONS_ERROR(t), "?").concat(i.toString()));
                }
            }
            if (
                await _({
                    platformType: t,
                    code: k,
                    state: b,
                    openidParams: e,
                    iss: m,
                    handleCallbackResponse: r,
                })
            )
                return;
            let c = await h(t, b, k, e, m);
            0 === c
                ? T(!0)
                : 1 === c
                  ? n.replace("".concat(C.Z5c.CONNECTIONS_ERROR(t), "?").concat(i.toString()))
                  : 3 === c
                    ? l.tq
                        ? x(!0)
                        : n.replace("".concat(C.Z5c.CONNECTIONS_ERROR(t), "?").concat(i.toString()))
                    : j({
                          platformType: t,
                          state: b,
                          handleCallbackResponse: r,
                          handleCallbackError: (e) => {
                              var r;
                              (null == e || null == (r = e.body) ? void 0 : r.code) != null &&
                                  i.append("error-code", e.body.code),
                                  n.replace("".concat(C.Z5c.CONNECTIONS_ERROR(t), "?").concat(i.toString()));
                          },
                          openidParams: e,
                          code: k,
                          iss: m,
                      });
        })();
    }, [k, n, y, w, i, b, m]),
        c.useEffect(() => {
            let e;
            if (!A) return;
            let t = 0;
            async function r() {
                if (null == R) return;
                let { handoff_status: c, success_redirect: o } = (await s.Z.getHandoffStatus(R, b)).body;
                if (c === a.g.HANDOFF_SUCCESS)
                    if (null == N.Z.toURLSafe(o)) return n.replace(C.Z5c.CONNECTIONS_SUCCESS(R));
                    else {
                        window.location = o;
                        return;
                    }
                if (c === a.g.HANDOFF_ERROR || t >= 10) return n.replace(C.Z5c.CONNECTIONS_ERROR(R));
                e = setTimeout(() => {
                    Z() && ((t += 1), r());
                }, 1000);
            }
            return (
                r(),
                () => {
                    null != e && clearTimeout(e);
                }
            );
        }, [Z, n, R, A, b]);
    let I = c.useMemo(() => {
        if (null != R) return "discord://".concat(C.Z5c.CONNECTIONS(R), "/?").concat(i.toString());
    }, [R, i]);
    return null != R && p.Z.isSupported(R)
        ? D
            ? (0, r.jsx)(E, {
                  platformType: R,
                  deeplink: I,
                  onClick: () => {
                      x(!1), T(!0);
                  },
              })
            : (0, r.jsx)(v, { platformType: R })
        : null;
}
function v(e) {
    let { platformType: t } = e,
        n = p.Z.get(t);
    return (0, r.jsxs)(g.UV, {
        platformType: t,
        children: [
            (0, r.jsx)("div", {
                className: y.message,
                children: b.intl.format(b.t.AOKOe7, { name: n.name }),
            }),
            (0, r.jsx)("div", {
                className: y.buttonContainer,
                children: (0, r.jsx)(i.zx, {
                    className: y.btn,
                    disabled: !0,
                    children: (0, r.jsx)(u.$jN, { itemClassName: y.spinnerItem }),
                }),
            }),
        ],
    });
}
function E(e) {
    let { deeplink: t, onClick: n, platformType: c } = e,
        o = p.Z.get(c);
    return (0, r.jsx)(g.UV, {
        platformType: c,
        children: (0, r.jsxs)("div", {
            className: y.buttonContainer,
            children: [
                (0, r.jsx)("div", {
                    className: y.message,
                    children: b.intl.format(b.t["6ig6i5"], { connectionName: o.name }),
                }),
                (0, r.jsx)(u.P3F, {
                    tag: "a",
                    href: t,
                    onClick: n,
                    target: "_self",
                    children: (0, r.jsx)(i.zx, {
                        className: y.btn,
                        children: b.intl.string(b.t.flvacA),
                    }),
                }),
            ],
        }),
    });
}
async function _(e) {
    let { platformType: t, code: n, state: r, openidParams: c, iss: o, handleCallbackResponse: a } = e;
    if (l.tq || S) return !1;
    try {
        var i, u;
        let e = await O.default
            .request(
                C.Etm.CONNECTIONS_CALLBACK,
                ((i = (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols &&
                            (r = r.concat(
                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                }),
                            )),
                            r.forEach(function (t) {
                                var r;
                                (r = n[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: r,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0,
                                          })
                                        : (e[t] = r);
                            });
                    }
                    return e;
                })(
                    {},
                    {
                        code: n,
                        openid_params: c,
                        iss: o,
                        state: r,
                    },
                )),
                (u = { providerType: t }),
                (u = null != u ? u : {}),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(u))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var r = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, r);
                          }
                          return n;
                      })(Object(u)).forEach(function (e) {
                          Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(u, e));
                      }),
                i),
            )
            .finally(() => {
                O.default.disconnect();
            });
        return a(e), !0;
    } catch (e) {
        return !1;
    }
}
async function h(e, t, n, r, c) {
    try {
        return await s.Z.sessionHandoff(e, t, n, r, c), 0;
    } catch (e) {
        var o, l;
        if ((null == e || null == (o = e.body) ? void 0 : o.code) === 10020) return 2;
        if ((null == e || null == (l = e.body) ? void 0 : l.code) === 40001) return 3;
        return 1;
    }
}
async function j(e) {
    let {
        platformType: t,
        state: n,
        handleCallbackResponse: r,
        handleCallbackError: c,
        openidParams: o,
        code: l,
        iss: a,
    } = e;
    try {
        let e = await s.Z.callback(
            t,
            {
                code: l,
                openid_params: o,
                state: n,
                iss: a,
            },
            !S,
        );
        return r(e), !0;
    } catch (e) {
        return c(e), !0;
    }
}
