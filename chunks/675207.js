n.r(t),
    n.d(t, {
        VerifyAccountDeekLink: () => m,
        VerifyAccountLoading: () => S,
        default: () => y
    }),
    n(47120),
    n(757143),
    n(301563),
    n(773603);
var r = n(200651),
    o = n(192379),
    c = n(512969),
    l = n(873546),
    i = n(604039),
    a = n(481060),
    s = n(457330),
    u = n(733427),
    d = n(169382),
    f = n(726542),
    p = n(536285),
    O = n(591759),
    N = n(656649),
    g = n(981631),
    v = n(388032),
    C = n(411299);
let b = null != window.opener;
function y() {
    var e, t;
    let n = (0, c.k6)(),
        a = (0, d.l)(),
        p = a.get('code'),
        v = a.get('oauth_verifier'),
        C = null !== (e = a.get('state')) && void 0 !== e ? e : '',
        y = a.get('loading'),
        j = null !== (t = a.get('iss')) && void 0 !== t ? t : void 0,
        { type: w } = (0, c.UO)(),
        R = (0, N.vJ)(w),
        [A, T] = o.useState(!1),
        [x, D] = o.useState(!1),
        k = (0, u.Z)(),
        Z = null == v ? (null != p ? p : '') : v;
    o.useEffect(() => {
        let e;
        if (null != y) return;
        for (let t of a.keys()) t.startsWith('openid.') && (null == e && (e = {}), (e[t] = a.get(t)));
        let t = (0, N.vJ)(w);
        (async function () {
            if (null == t || !f.Z.isSupported(t)) return;
            function r(e) {
                let { status: r, body: o } = e;
                if (null != t) {
                    if (null == o ? void 0 : o.redirect) {
                        window.location = o.redirect;
                        return;
                    }
                    if ([200, 204].includes(r)) {
                        n.replace(g.Z5c.CONNECTIONS_SUCCESS(t)), b && window.close();
                        return;
                    }
                    (null == o ? void 0 : o.code) != null && a.append('error-code', o.code), n.replace(''.concat(g.Z5c.CONNECTIONS_ERROR(t), '?').concat(a.toString()));
                }
            }
            if (
                await E({
                    platformType: t,
                    code: Z,
                    state: C,
                    openidParams: e,
                    iss: j,
                    handleCallbackResponse: r
                })
            )
                return;
            let o = await _(t, C, Z, e, j);
            if (0 === o) {
                T(!0);
                return;
            }
            if (1 === o) {
                n.replace(''.concat(g.Z5c.CONNECTIONS_ERROR(t), '?').concat(a.toString()));
                return;
            }
            if (3 === o) {
                if (l.tq) {
                    D(!0);
                    return;
                }
                n.replace(''.concat(g.Z5c.CONNECTIONS_ERROR(t), '?').concat(a.toString()));
                return;
            }
            h({
                platformType: t,
                state: C,
                handleCallbackResponse: r,
                handleCallbackError: (e) => {
                    var r;
                    (null == e ? void 0 : null === (r = e.body) || void 0 === r ? void 0 : r.code) != null && a.append('error-code', e.body.code), n.replace(''.concat(g.Z5c.CONNECTIONS_ERROR(t), '?').concat(a.toString()));
                },
                openidParams: e,
                code: Z,
                iss: j
            });
        })();
    }, [Z, n, y, w, a, C, j]),
        o.useEffect(() => {
            let e;
            if (!A) return;
            let t = 0;
            async function r() {
                if (null == R) return;
                let { handoff_status: o, success_redirect: c } = (await s.Z.getHandoffStatus(R, C)).body;
                if (o === i.g.HANDOFF_SUCCESS) return null == O.Z.toURLSafe(c) ? n.replace(g.Z5c.CONNECTIONS_SUCCESS(R)) : ((window.location = c), void 0);
                if (o === i.g.HANDOFF_ERROR || t >= 10) return n.replace(g.Z5c.CONNECTIONS_ERROR(R));
                e = setTimeout(() => {
                    k() && ((t += 1), r());
                }, 1000);
            }
            return (
                r(),
                () => {
                    null != e && clearTimeout(e);
                }
            );
        }, [k, n, R, A, C]);
    let I = o.useMemo(() => {
        if (null != R) return 'discord://'.concat(g.Z5c.CONNECTIONS(R), '/?').concat(a.toString());
    }, [R, a]);
    return null != R && f.Z.isSupported(R)
        ? x
            ? (0, r.jsx)(m, {
                  platformType: R,
                  deeplink: I,
                  onClick: () => {
                      D(!1), T(!0);
                  }
              })
            : (0, r.jsx)(S, { platformType: R })
        : null;
}
function S(e) {
    let { platformType: t } = e,
        n = f.Z.get(t);
    return (0, r.jsxs)(N.UV, {
        platformType: t,
        children: [
            (0, r.jsx)('div', {
                className: C.message,
                children: v.NW.format(v.t.AOKOe3, { name: n.name })
            }),
            (0, r.jsx)('div', {
                className: C.buttonContainer,
                children: (0, r.jsx)(a.zxk, {
                    className: C.btn,
                    disabled: !0,
                    children: (0, r.jsx)(a.$jN, { itemClassName: C.spinnerItem })
                })
            })
        ]
    });
}
function m(e) {
    let { deeplink: t, onClick: n, platformType: o } = e,
        c = f.Z.get(o);
    return (0, r.jsx)(N.UV, {
        platformType: o,
        children: (0, r.jsxs)('div', {
            className: C.buttonContainer,
            children: [
                (0, r.jsx)('div', {
                    className: C.message,
                    children: v.NW.format(v.t['6ig6i4'], { connectionName: c.name })
                }),
                (0, r.jsx)(a.P3F, {
                    tag: 'a',
                    href: t,
                    onClick: n,
                    target: '_self',
                    children: (0, r.jsx)(a.zxk, {
                        className: C.btn,
                        children: v.NW.string(v.t.flvacH)
                    })
                })
            ]
        })
    });
}
async function E(e) {
    let { platformType: t, code: n, state: r, openidParams: o, iss: c, handleCallbackResponse: i } = e;
    if (l.tq || b) return !1;
    try {
        var a, s;
        let e = await p.default
            .request(
                g.Etm.CONNECTIONS_CALLBACK,
                ((a = (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        'function' == typeof Object.getOwnPropertySymbols &&
                            (r = r.concat(
                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                })
                            )),
                            r.forEach(function (t) {
                                var r;
                                (r = n[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: r,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0
                                          })
                                        : (e[t] = r);
                            });
                    }
                    return e;
                })(
                    {},
                    {
                        code: n,
                        openid_params: o,
                        iss: c,
                        state: r
                    }
                )),
                (s = { providerType: t }),
                (s = null != s ? s : {}),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(s))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var r = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, r);
                          }
                          return n;
                      })(Object(s)).forEach(function (e) {
                          Object.defineProperty(a, e, Object.getOwnPropertyDescriptor(s, e));
                      }),
                a)
            )
            .finally(() => {
                p.default.disconnect();
            });
        return i(e), !0;
    } catch (e) {
        return !1;
    }
}
async function _(e, t, n, r, o) {
    try {
        return await s.Z.sessionHandoff(e, t, n, r, o), 0;
    } catch (e) {
        var c, l;
        if ((null == e ? void 0 : null === (c = e.body) || void 0 === c ? void 0 : c.code) === 10020) return 2;
        if ((null == e ? void 0 : null === (l = e.body) || void 0 === l ? void 0 : l.code) === 40001) return 3;
        return 1;
    }
}
async function h(e) {
    let { platformType: t, state: n, handleCallbackResponse: r, handleCallbackError: o, openidParams: c, code: l, iss: i } = e;
    try {
        let e = await s.Z.callback(
            t,
            {
                code: l,
                openid_params: c,
                state: n,
                iss: i
            },
            !b
        );
        return r(e), !0;
    } catch (e) {
        return o(e), !0;
    }
}
