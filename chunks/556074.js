r.r(t),
    r.d(t, {
        VerifyAccountDeekLink: () => g,
        VerifyAccountLoading: () => E,
        default: () => w,
    }),
    r(896048),
    r(747238),
    r(812715),
    r(492834);
var n = r(627968),
    c = r(64700),
    l = r(960488),
    a = r(607399),
    o = r(590053),
    i = r(421380),
    u = r(397927),
    s = r(77468),
    d = r(964459),
    f = r(458518),
    p = r(573648),
    O = r(129014),
    N = r(998218),
    y = r(950198),
    m = r(652215),
    S = r(985018),
    C = r(538644);
let b = null != window.opener;

function w() {
    var e, t;
    let r = (0, l.W6)(),
        i = (0, f.o)(),
        u = i.get("code"),
        O = i.get("oauth_verifier"),
        S = null != (e = i.get("state")) ? e : "",
        C = i.get("loading"),
        w = null != (t = i.get("iss")) ? t : void 0,
        { type: j } = (0, l.g)(),
        A = (0, y.mw)(j),
        [R, T] = c.useState(!1),
        [x, D] = c.useState(!1),
        I = (0, d.A)(),
        k = null == O ? (null != u ? u : "") : O;
    c.useEffect(() => {
        let e;
        if (null != C) return;
        for (let t of i.keys()) t.startsWith("openid.") && (null == e && (e = {}), (e[t] = i.get(t)));
        let t = (0, y.mw)(j);
        !(async function () {
            if (null == t || !p.A.isSupported(t)) return;

            function n(e) {
                let { status: n, body: c } = e;
                if (null != t) {
                    if (null == c ? void 0 : c.redirect) {
                        window.location = c.redirect;
                        return;
                    }
                    if ([200, 204].includes(n)) {
                        r.replace(m.BVt.CONNECTIONS_SUCCESS(t)), b && window.close();
                        return;
                    }
                    (null == c ? void 0 : c.code) != null && i.append("error-code", c.code),
                        r.replace("".concat(m.BVt.CONNECTIONS_ERROR(t), "?").concat(i.toString()));
                }
            }
            if (
                await h({
                    platformType: t,
                    code: k,
                    state: S,
                    openidParams: e,
                    iss: w,
                    handleCallbackResponse: n,
                })
            )
                return;
            let c = await v(t, S, k, e, w);
            0 === c
                ? T(!0)
                : 1 === c
                  ? r.replace("".concat(m.BVt.CONNECTIONS_ERROR(t), "?").concat(i.toString()))
                  : 3 === c
                    ? a.Fr
                        ? D(!0)
                        : r.replace("".concat(m.BVt.CONNECTIONS_ERROR(t), "?").concat(i.toString()))
                    : _({
                          platformType: t,
                          state: S,
                          handleCallbackResponse: n,
                          handleCallbackError: (e) => {
                              var n;
                              (null == e || null == (n = e.body) ? void 0 : n.code) != null &&
                                  i.append("error-code", e.body.code),
                                  r.replace("".concat(m.BVt.CONNECTIONS_ERROR(t), "?").concat(i.toString()));
                          },
                          openidParams: e,
                          code: k,
                          iss: w,
                      });
        })();
    }, [k, r, C, j, i, S, w]),
        c.useEffect(() => {
            let e;
            if (!R) return;
            let t = 0;
            async function n() {
                if (null == A) return;
                let { handoff_status: c, success_redirect: l } = (await s.A.getHandoffStatus(A, S)).body;
                if (c === o.N.HANDOFF_SUCCESS)
                    if (null == N.A.toURLSafe(l)) return r.replace(m.BVt.CONNECTIONS_SUCCESS(A));
                    else {
                        window.location = l;
                        return;
                    }
                if (c === o.N.HANDOFF_ERROR || t >= 10) return r.replace(m.BVt.CONNECTIONS_ERROR(A));
                e = setTimeout(() => {
                    I() && ((t += 1), n());
                }, 1e3);
            }
            return (
                n(),
                () => {
                    null != e && clearTimeout(e);
                }
            );
        }, [I, r, A, R, S]);
    let P = c.useMemo(() => {
        if (null != A) return "discord://".concat(m.BVt.CONNECTIONS(A), "/?").concat(i.toString());
    }, [A, i]);
    return null != A && p.A.isSupported(A)
        ? x
            ? (0, n.jsx)(g, {
                  platformType: A,
                  deeplink: P,
                  onClick: () => {
                      D(!1), T(!0);
                  },
              })
            : (0, n.jsx)(E, {
                  platformType: A,
              })
        : null;
}

function E(e) {
    let { platformType: t } = e,
        r = p.A.get(t);
    return (0, n.jsxs)(y.mP, {
        platformType: t,
        children: [
            (0, n.jsx)("div", {
                className: C.iU,
                children: S.intl.format(S.t.AOKOe7, {
                    name: r.name,
                }),
            }),
            (0, n.jsx)("div", {
                className: C.UD,
                children: (0, n.jsx)(i.$n, {
                    className: C.HM,
                    disabled: !0,
                    children: (0, n.jsx)(u.y$y, {
                        itemClassName: C.$N,
                    }),
                }),
            }),
        ],
    });
}

function g(e) {
    let { deeplink: t, onClick: r, platformType: c } = e,
        l = p.A.get(c);
    return (0, n.jsx)(y.mP, {
        platformType: c,
        children: (0, n.jsxs)("div", {
            className: C.UD,
            children: [
                (0, n.jsx)("div", {
                    className: C.iU,
                    children: S.intl.format(S.t["6ig6i5"], {
                        connectionName: l.name,
                    }),
                }),
                (0, n.jsx)(u.DUT, {
                    tag: "a",
                    href: t,
                    onClick: r,
                    target: "_self",
                    children: (0, n.jsx)(i.$n, {
                        className: C.HM,
                        children: S.intl.string(S.t.flvacA),
                    }),
                }),
            ],
        }),
    });
}
async function h(e) {
    let { platformType: t, code: r, state: n, openidParams: c, iss: l, handleCallbackResponse: o } = e;
    if (a.Fr || b) return !1;
    try {
        var i, u;
        let e = await O.default
            .request(
                m.e$_.CONNECTIONS_CALLBACK,
                ((i = (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {},
                            n = Object.keys(r);
                        "function" == typeof Object.getOwnPropertySymbols &&
                            (n = n.concat(
                                Object.getOwnPropertySymbols(r).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                                }),
                            )),
                            n.forEach(function (t) {
                                var n;
                                (n = r[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: n,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0,
                                          })
                                        : (e[t] = n);
                            });
                    }
                    return e;
                })(
                    {},
                    {
                        code: r,
                        openid_params: c,
                        iss: l,
                        state: n,
                    },
                )),
                (u = {
                    providerType: t,
                }),
                (u = null != u ? u : {}),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(u))
                    : (function (e, t) {
                          var r = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var n = Object.getOwnPropertySymbols(e);
                              r.push.apply(r, n);
                          }
                          return r;
                      })(Object(u)).forEach(function (e) {
                          Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(u, e));
                      }),
                i),
            )
            .finally(() => {
                O.default.disconnect();
            });
        return o(e), !0;
    } catch (e) {
        return !1;
    }
}
async function v(e, t, r, n, c) {
    try {
        return await s.A.sessionHandoff(e, t, r, n, c), 0;
    } catch (e) {
        var l, a;
        if ((null == e || null == (l = e.body) ? void 0 : l.code) === 10020) return 2;
        if ((null == e || null == (a = e.body) ? void 0 : a.code) === 40001) return 3;
        return 1;
    }
}
async function _(e) {
    let {
        platformType: t,
        state: r,
        handleCallbackResponse: n,
        handleCallbackError: c,
        openidParams: l,
        code: a,
        iss: o,
    } = e;
    try {
        let e = await s.A.callback(
            t,
            {
                code: a,
                openid_params: l,
                state: r,
                iss: o,
            },
            !b,
        );
        return n(e), !0;
    } catch (e) {
        return c(e), !0;
    }
}
