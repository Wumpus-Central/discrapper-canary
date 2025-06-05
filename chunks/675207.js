n.r(t),
    n.d(t, {
        VerifyAccountDeekLink: () => S,
        VerifyAccountLoading: () => C,
        default: () => y
    }),
    n(388685),
    n(704826),
    n(35282),
    n(457542);
var r = n(255367),
    o = n(73800),
    c = n(114858),
    l = n(873546),
    i = n(604039),
    a = n(481060),
    s = n(457330),
    u = n(733427),
    d = n(169382),
    f = n(726542),
    p = n(536285),
    O = n(591759),
    g = n(656649),
    b = n(981631),
    N = n(388032),
    v = n(5194);
let m = null != window.opener;
function y() {
    var e, t;
    let n = (0, c.k6)(),
        a = (0, d.l)(),
        p = a.get('code'),
        N = a.get('oauth_verifier'),
        v = null != (e = a.get('state')) ? e : '',
        y = a.get('loading'),
        E = null != (t = a.get('iss')) ? t : void 0,
        { type: R } = (0, c.UO)(),
        w = (0, g.vJ)(R),
        [x, D] = o.useState(!1),
        [Z, k] = o.useState(!1),
        A = (0, u.Z)(),
        T = null == N ? (null != p ? p : '') : N;
    o.useEffect(() => {
        let e;
        if (null != y) return;
        for (let t of a.keys()) t.startsWith('openid.') && (null == e && (e = {}), (e[t] = a.get(t)));
        let t = (0, g.vJ)(R);
        !(async function () {
            if (null == t || !f.Z.isSupported(t)) return;
            function r(e) {
                let { status: r, body: o } = e;
                if (null != t) {
                    if (null == o ? void 0 : o.redirect) {
                        window.location = o.redirect;
                        return;
                    }
                    if ([200, 204].includes(r)) {
                        n.replace(b.Z5c.CONNECTIONS_SUCCESS(t)), m && window.close();
                        return;
                    }
                    (null == o ? void 0 : o.code) != null && a.append('error-code', o.code), n.replace(''.concat(b.Z5c.CONNECTIONS_ERROR(t), '?').concat(a.toString()));
                }
            }
            if (
                await j({
                    platformType: t,
                    code: T,
                    state: v,
                    openidParams: e,
                    iss: E,
                    handleCallbackResponse: r
                })
            )
                return;
            let o = await h(t, v, T, e, E);
            0 === o
                ? D(!0)
                : 1 === o
                  ? n.replace(''.concat(b.Z5c.CONNECTIONS_ERROR(t), '?').concat(a.toString()))
                  : 3 === o
                    ? l.tq
                        ? k(!0)
                        : n.replace(''.concat(b.Z5c.CONNECTIONS_ERROR(t), '?').concat(a.toString()))
                    : _({
                          platformType: t,
                          state: v,
                          handleCallbackResponse: r,
                          handleCallbackError: (e) => {
                              var r;
                              (null == e || null == (r = e.body) ? void 0 : r.code) != null && a.append('error-code', e.body.code), n.replace(''.concat(b.Z5c.CONNECTIONS_ERROR(t), '?').concat(a.toString()));
                          },
                          openidParams: e,
                          code: T,
                          iss: E
                      });
        })();
    }, [T, n, y, R, a, v, E]),
        o.useEffect(() => {
            let e;
            if (!x) return;
            let t = 0;
            async function r() {
                if (null == w) return;
                let { handoff_status: o, success_redirect: c } = (await s.Z.getHandoffStatus(w, v)).body;
                if (o === i.g.HANDOFF_SUCCESS)
                    if (null == O.Z.toURLSafe(c)) return n.replace(b.Z5c.CONNECTIONS_SUCCESS(w));
                    else {
                        window.location = c;
                        return;
                    }
                if (o === i.g.HANDOFF_ERROR || t >= 10) return n.replace(b.Z5c.CONNECTIONS_ERROR(w));
                e = setTimeout(() => {
                    A() && ((t += 1), r());
                }, 1000);
            }
            return (
                r(),
                () => {
                    null != e && clearTimeout(e);
                }
            );
        }, [A, n, w, x, v]);
    let F = o.useMemo(() => {
        if (null != w) return 'discord://'.concat(b.Z5c.CONNECTIONS(w), '/?').concat(a.toString());
    }, [w, a]);
    return null != w && f.Z.isSupported(w)
        ? Z
            ? (0, r.jsx)(S, {
                  platformType: w,
                  deeplink: F,
                  onClick: () => {
                      k(!1), D(!0);
                  }
              })
            : (0, r.jsx)(C, { platformType: w })
        : null;
}
function C(e) {
    let { platformType: t } = e,
        n = f.Z.get(t);
    return (0, r.jsxs)(g.UV, {
        platformType: t,
        children: [
            (0, r.jsx)('div', {
                className: v.message,
                children: N.intl.format(N.t.AOKOe3, { name: n.name })
            }),
            (0, r.jsx)('div', {
                className: v.buttonContainer,
                children: (0, r.jsx)(a.zxk, {
                    className: v.btn,
                    disabled: !0,
                    children: (0, r.jsx)(a.$jN, { itemClassName: v.spinnerItem })
                })
            })
        ]
    });
}
function S(e) {
    let { deeplink: t, onClick: n, platformType: o } = e,
        c = f.Z.get(o);
    return (0, r.jsx)(g.UV, {
        platformType: o,
        children: (0, r.jsxs)('div', {
            className: v.buttonContainer,
            children: [
                (0, r.jsx)('div', {
                    className: v.message,
                    children: N.intl.format(N.t['6ig6i4'], { connectionName: c.name })
                }),
                (0, r.jsx)(a.P3F, {
                    tag: 'a',
                    href: t,
                    onClick: n,
                    target: '_self',
                    children: (0, r.jsx)(a.zxk, {
                        className: v.btn,
                        children: N.intl.string(N.t.flvacH)
                    })
                })
            ]
        })
    });
}
async function j(e) {
    let { platformType: t, code: n, state: r, openidParams: o, iss: c, handleCallbackResponse: i } = e;
    if (l.tq || m) return !1;
    try {
        var a, s;
        let e = await p.default
            .request(
                b.Etm.CONNECTIONS_CALLBACK,
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
async function h(e, t, n, r, o) {
    try {
        return await s.Z.sessionHandoff(e, t, n, r, o), 0;
    } catch (e) {
        var c, l;
        if ((null == e || null == (c = e.body) ? void 0 : c.code) === 10020) return 2;
        if ((null == e || null == (l = e.body) ? void 0 : l.code) === 40001) return 3;
        return 1;
    }
}
async function _(e) {
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
            !m
        );
        return r(e), !0;
    } catch (e) {
        return o(e), !0;
    }
}
