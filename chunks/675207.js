n.r(t),
    n.d(t, {
        VerifyAccountDeekLink: () => m,
        VerifyAccountLoading: () => S,
        default: () => v
    }),
    n(47120),
    n(757143),
    n(301563),
    n(773603);
var r = n(200651),
    c = n(192379),
    o = n(512969),
    l = n(873546),
    a = n(604039),
    i = n(481060),
    s = n(457330),
    u = n(733427),
    d = n(169382),
    f = n(726542),
    p = n(536285),
    O = n(591759),
    N = n(656649),
    g = n(981631),
    C = n(388032),
    b = n(5194);
let y = null != window.opener;
function v() {
    var e, t;
    let n = (0, o.k6)(),
        i = (0, d.l)(),
        p = i.get('code'),
        C = i.get('oauth_verifier'),
        b = null != (e = i.get('state')) ? e : '',
        v = i.get('loading'),
        j = null != (t = i.get('iss')) ? t : void 0,
        { type: w } = (0, o.UO)(),
        R = (0, N.vJ)(w),
        [A, T] = c.useState(!1),
        [x, D] = c.useState(!1),
        k = (0, u.Z)(),
        Z = null == C ? (null != p ? p : '') : C;
    c.useEffect(() => {
        let e;
        if (null != v) return;
        for (let t of i.keys()) t.startsWith('openid.') && (null == e && (e = {}), (e[t] = i.get(t)));
        let t = (0, N.vJ)(w);
        !(async function () {
            if (null == t || !f.Z.isSupported(t)) return;
            function r(e) {
                let { status: r, body: c } = e;
                if (null != t) {
                    if (null == c ? void 0 : c.redirect) {
                        window.location = c.redirect;
                        return;
                    }
                    if ([200, 204].includes(r)) {
                        n.replace(g.Z5c.CONNECTIONS_SUCCESS(t)), y && window.close();
                        return;
                    }
                    (null == c ? void 0 : c.code) != null && i.append('error-code', c.code), n.replace(''.concat(g.Z5c.CONNECTIONS_ERROR(t), '?').concat(i.toString()));
                }
            }
            if (
                await E({
                    platformType: t,
                    code: Z,
                    state: b,
                    openidParams: e,
                    iss: j,
                    handleCallbackResponse: r
                })
            )
                return;
            let c = await _(t, b, Z, e, j);
            0 === c
                ? T(!0)
                : 1 === c
                  ? n.replace(''.concat(g.Z5c.CONNECTIONS_ERROR(t), '?').concat(i.toString()))
                  : 3 === c
                    ? l.tq
                        ? D(!0)
                        : n.replace(''.concat(g.Z5c.CONNECTIONS_ERROR(t), '?').concat(i.toString()))
                    : h({
                          platformType: t,
                          state: b,
                          handleCallbackResponse: r,
                          handleCallbackError: (e) => {
                              var r;
                              (null == e || null == (r = e.body) ? void 0 : r.code) != null && i.append('error-code', e.body.code), n.replace(''.concat(g.Z5c.CONNECTIONS_ERROR(t), '?').concat(i.toString()));
                          },
                          openidParams: e,
                          code: Z,
                          iss: j
                      });
        })();
    }, [Z, n, v, w, i, b, j]),
        c.useEffect(() => {
            let e;
            if (!A) return;
            let t = 0;
            async function r() {
                if (null == R) return;
                let { handoff_status: c, success_redirect: o } = (await s.Z.getHandoffStatus(R, b)).body;
                if (c === a.g.HANDOFF_SUCCESS)
                    if (null == O.Z.toURLSafe(o)) return n.replace(g.Z5c.CONNECTIONS_SUCCESS(R));
                    else {
                        window.location = o;
                        return;
                    }
                if (c === a.g.HANDOFF_ERROR || t >= 10) return n.replace(g.Z5c.CONNECTIONS_ERROR(R));
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
        }, [k, n, R, A, b]);
    let I = c.useMemo(() => {
        if (null != R) return 'discord://'.concat(g.Z5c.CONNECTIONS(R), '/?').concat(i.toString());
    }, [R, i]);
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
                className: b.message,
                children: C.NW.format(C.t.AOKOe3, { name: n.name })
            }),
            (0, r.jsx)('div', {
                className: b.buttonContainer,
                children: (0, r.jsx)(i.zxk, {
                    className: b.btn,
                    disabled: !0,
                    children: (0, r.jsx)(i.$jN, { itemClassName: b.spinnerItem })
                })
            })
        ]
    });
}
function m(e) {
    let { deeplink: t, onClick: n, platformType: c } = e,
        o = f.Z.get(c);
    return (0, r.jsx)(N.UV, {
        platformType: c,
        children: (0, r.jsxs)('div', {
            className: b.buttonContainer,
            children: [
                (0, r.jsx)('div', {
                    className: b.message,
                    children: C.NW.format(C.t['6ig6i4'], { connectionName: o.name })
                }),
                (0, r.jsx)(i.P3F, {
                    tag: 'a',
                    href: t,
                    onClick: n,
                    target: '_self',
                    children: (0, r.jsx)(i.zxk, {
                        className: b.btn,
                        children: C.NW.string(C.t.flvacH)
                    })
                })
            ]
        })
    });
}
async function E(e) {
    let { platformType: t, code: n, state: r, openidParams: c, iss: o, handleCallbackResponse: a } = e;
    if (l.tq || y) return !1;
    try {
        var i, s;
        let e = await p.default
            .request(
                g.Etm.CONNECTIONS_CALLBACK,
                ((i = (function (e) {
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
                        openid_params: c,
                        iss: o,
                        state: r
                    }
                )),
                (s = { providerType: t }),
                (s = null != s ? s : {}),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(s))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var r = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, r);
                          }
                          return n;
                      })(Object(s)).forEach(function (e) {
                          Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(s, e));
                      }),
                i)
            )
            .finally(() => {
                p.default.disconnect();
            });
        return a(e), !0;
    } catch (e) {
        return !1;
    }
}
async function _(e, t, n, r, c) {
    try {
        return await s.Z.sessionHandoff(e, t, n, r, c), 0;
    } catch (e) {
        var o, l;
        if ((null == e || null == (o = e.body) ? void 0 : o.code) === 10020) return 2;
        if ((null == e || null == (l = e.body) ? void 0 : l.code) === 40001) return 3;
        return 1;
    }
}
async function h(e) {
    let { platformType: t, state: n, handleCallbackResponse: r, handleCallbackError: c, openidParams: o, code: l, iss: a } = e;
    try {
        let e = await s.Z.callback(
            t,
            {
                code: l,
                openid_params: o,
                state: n,
                iss: a
            },
            !y
        );
        return r(e), !0;
    } catch (e) {
        return c(e), !0;
    }
}
