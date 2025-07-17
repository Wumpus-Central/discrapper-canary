(n.r(t),
    n.d(t, {
        VerifyAccountDeekLink: () => j,
        VerifyAccountLoading: () => S,
        default: () => C
    }),
    n(388685),
    n(704826),
    n(35282),
    n(457542));
var r = n(255367),
    o = n(73800),
    c = n(114858),
    l = n(873546),
    i = n(604039),
    a = n(755721),
    s = n(481060),
    u = n(457330),
    d = n(733427),
    f = n(169382),
    p = n(726542),
    O = n(536285),
    g = n(591759),
    b = n(656649),
    N = n(981631),
    v = n(388032),
    m = n(5194);
let y = null != window.opener;
function C() {
    var e, t;
    let n = (0, c.k6)(),
        a = (0, f.l)(),
        s = a.get('code'),
        O = a.get('oauth_verifier'),
        v = null != (e = a.get('state')) ? e : '',
        m = a.get('loading'),
        C = null != (t = a.get('iss')) ? t : void 0,
        { type: R } = (0, c.UO)(),
        w = (0, b.vJ)(R),
        [x, D] = o.useState(!1),
        [Z, A] = o.useState(!1),
        T = (0, d.Z)(),
        k = null == O ? (null != s ? s : '') : O;
    (o.useEffect(() => {
        let e;
        if (null != m) return;
        for (let t of a.keys()) t.startsWith('openid.') && (null == e && (e = {}), (e[t] = a.get(t)));
        let t = (0, b.vJ)(R);
        !(async function () {
            if (null == t || !p.Z.isSupported(t)) return;
            function r(e) {
                let { status: r, body: o } = e;
                if (null != t) {
                    if (null == o ? void 0 : o.redirect) {
                        window.location = o.redirect;
                        return;
                    }
                    if ([200, 204].includes(r)) {
                        (n.replace(N.Z5c.CONNECTIONS_SUCCESS(t)), y && window.close());
                        return;
                    }
                    ((null == o ? void 0 : o.code) != null && a.append('error-code', o.code), n.replace(''.concat(N.Z5c.CONNECTIONS_ERROR(t), '?').concat(a.toString())));
                }
            }
            if (
                await h({
                    platformType: t,
                    code: k,
                    state: v,
                    openidParams: e,
                    iss: C,
                    handleCallbackResponse: r
                })
            )
                return;
            let o = await _(t, v, k, e, C);
            0 === o
                ? D(!0)
                : 1 === o
                  ? n.replace(''.concat(N.Z5c.CONNECTIONS_ERROR(t), '?').concat(a.toString()))
                  : 3 === o
                    ? l.tq
                        ? A(!0)
                        : n.replace(''.concat(N.Z5c.CONNECTIONS_ERROR(t), '?').concat(a.toString()))
                    : E({
                          platformType: t,
                          state: v,
                          handleCallbackResponse: r,
                          handleCallbackError: (e) => {
                              var r;
                              ((null == e || null == (r = e.body) ? void 0 : r.code) != null && a.append('error-code', e.body.code), n.replace(''.concat(N.Z5c.CONNECTIONS_ERROR(t), '?').concat(a.toString())));
                          },
                          openidParams: e,
                          code: k,
                          iss: C
                      });
        })();
    }, [k, n, m, R, a, v, C]),
        o.useEffect(() => {
            let e;
            if (!x) return;
            let t = 0;
            async function r() {
                if (null == w) return;
                let { handoff_status: o, success_redirect: c } = (await u.Z.getHandoffStatus(w, v)).body;
                if (o === i.g.HANDOFF_SUCCESS)
                    if (null == g.Z.toURLSafe(c)) return n.replace(N.Z5c.CONNECTIONS_SUCCESS(w));
                    else {
                        window.location = c;
                        return;
                    }
                if (o === i.g.HANDOFF_ERROR || t >= 10) return n.replace(N.Z5c.CONNECTIONS_ERROR(w));
                e = setTimeout(() => {
                    T() && ((t += 1), r());
                }, 1000);
            }
            return (
                r(),
                () => {
                    null != e && clearTimeout(e);
                }
            );
        }, [T, n, w, x, v]));
    let F = o.useMemo(() => {
        if (null != w) return 'discord://'.concat(N.Z5c.CONNECTIONS(w), '/?').concat(a.toString());
    }, [w, a]);
    return null != w && p.Z.isSupported(w)
        ? Z
            ? (0, r.jsx)(j, {
                  platformType: w,
                  deeplink: F,
                  onClick: () => {
                      (A(!1), D(!0));
                  }
              })
            : (0, r.jsx)(S, { platformType: w })
        : null;
}
function S(e) {
    let { platformType: t } = e,
        n = p.Z.get(t);
    return (0, r.jsxs)(b.UV, {
        platformType: t,
        children: [
            (0, r.jsx)('div', {
                className: m.message,
                children: v.intl.format(v.t.AOKOe3, { name: n.name })
            }),
            (0, r.jsx)('div', {
                className: m.buttonContainer,
                children: (0, r.jsx)(a.zx, {
                    className: m.btn,
                    disabled: !0,
                    children: (0, r.jsx)(s.$jN, { itemClassName: m.spinnerItem })
                })
            })
        ]
    });
}
function j(e) {
    let { deeplink: t, onClick: n, platformType: o } = e,
        c = p.Z.get(o);
    return (0, r.jsx)(b.UV, {
        platformType: o,
        children: (0, r.jsxs)('div', {
            className: m.buttonContainer,
            children: [
                (0, r.jsx)('div', {
                    className: m.message,
                    children: v.intl.format(v.t['6ig6i4'], { connectionName: c.name })
                }),
                (0, r.jsx)(s.P3F, {
                    tag: 'a',
                    href: t,
                    onClick: n,
                    target: '_self',
                    children: (0, r.jsx)(a.zx, {
                        className: m.btn,
                        children: v.intl.string(v.t.flvacH)
                    })
                })
            ]
        })
    });
}
async function h(e) {
    let { platformType: t, code: n, state: r, openidParams: o, iss: c, handleCallbackResponse: i } = e;
    if (l.tq || y) return !1;
    try {
        var a, s;
        let e = await O.default
            .request(
                N.Etm.CONNECTIONS_CALLBACK,
                ((a = (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        ('function' == typeof Object.getOwnPropertySymbols &&
                            (r = r.concat(
                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                })
                            )),
                            r.forEach(function (t) {
                                var r;
                                ((r = n[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: r,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0
                                          })
                                        : (e[t] = r));
                            }));
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
                O.default.disconnect();
            });
        return (i(e), !0);
    } catch (e) {
        return !1;
    }
}
async function _(e, t, n, r, o) {
    try {
        return (await u.Z.sessionHandoff(e, t, n, r, o), 0);
    } catch (e) {
        var c, l;
        if ((null == e || null == (c = e.body) ? void 0 : c.code) === 10020) return 2;
        if ((null == e || null == (l = e.body) ? void 0 : l.code) === 40001) return 3;
        return 1;
    }
}
async function E(e) {
    let { platformType: t, state: n, handleCallbackResponse: r, handleCallbackError: o, openidParams: c, code: l, iss: i } = e;
    try {
        let e = await u.Z.callback(
            t,
            {
                code: l,
                openid_params: c,
                state: n,
                iss: i
            },
            !y
        );
        return (r(e), !0);
    } catch (e) {
        return (o(e), !0);
    }
}
