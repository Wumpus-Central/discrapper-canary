t.r(n),
    t.d(n, {
        VerifyAccountDeekLink: function () {
            return R;
        },
        VerifyAccountLoading: function () {
            return b;
        },
        default: function () {
            return m;
        }
    }),
    t(47120),
    t(757143),
    t(773603);
var r,
    c,
    o = t(200651),
    i = t(192379),
    l = t(512969),
    a = t(873546),
    u = t(604039),
    s = t(481060),
    f = t(457330),
    d = t(733427),
    p = t(169382),
    C = t(726542),
    N = t(536285),
    O = t(591759),
    E = t(656649),
    S = t(981631),
    _ = t(388032),
    g = t(66825);
let v = null != window.opener;
function m() {
    var e, n;
    let t = (0, l.k6)(),
        r = (0, p.l)(),
        c = r.get('code'),
        s = r.get('oauth_verifier'),
        N = null !== (e = r.get('state')) && void 0 !== e ? e : '',
        _ = r.get('loading'),
        g = null !== (n = r.get('iss')) && void 0 !== n ? n : void 0,
        { type: m } = (0, l.UO)(),
        T = (0, E.vJ)(m),
        [y, I] = i.useState(!1),
        [w, x] = i.useState(!1),
        L = (0, d.Z)(),
        Z = null == s ? (null != c ? c : '') : s;
    i.useEffect(() => {
        let e;
        if (null != _) return;
        for (let n of r.keys()) {
            if (!!n.startsWith('openid.')) null == e && (e = {}), (e[n] = r.get(n));
        }
        let n = (0, E.vJ)(m);
        (async function c() {
            if (null == n || !C.Z.isSupported(n)) return;
            function c(e) {
                let { status: c, body: o } = e;
                if (null != n) {
                    if (null == o ? void 0 : o.redirect) {
                        window.location = o.redirect;
                        return;
                    }
                    if ([200, 204].includes(c)) {
                        t.replace(S.Z5c.CONNECTIONS_SUCCESS(n)), v && window.close();
                        return;
                    }
                    (null == o ? void 0 : o.code) != null && r.append('error-code', o.code), t.replace(''.concat(S.Z5c.CONNECTIONS_ERROR(n), '?').concat(r.toString()));
                }
            }
            if (
                await A({
                    platformType: n,
                    code: Z,
                    state: N,
                    openidParams: e,
                    iss: g,
                    handleCallbackResponse: c
                })
            )
                return;
            let o = await h(n, N, Z, e, g);
            if (0 === o) {
                I(!0);
                return;
            }
            if (1 === o) {
                t.replace(''.concat(S.Z5c.CONNECTIONS_ERROR(n), '?').concat(r.toString()));
                return;
            }
            if (3 === o) {
                if (a.tq) {
                    x(!0);
                    return;
                }
                t.replace(''.concat(S.Z5c.CONNECTIONS_ERROR(n), '?').concat(r.toString()));
                return;
            }
            D({
                platformType: n,
                state: N,
                handleCallbackResponse: c,
                handleCallbackError: () => {
                    t.replace(''.concat(S.Z5c.CONNECTIONS_ERROR(n), '?').concat(r.toString()));
                },
                openidParams: e,
                code: Z,
                iss: g
            });
        })();
    }, [Z, t, _, m, r, N, g]),
        i.useEffect(() => {
            let e;
            if (!y) return;
            let n = 0;
            async function r() {
                if (null == T) return;
                let { handoff_status: c, success_redirect: o } = (await f.Z.getHandoffStatus(T, N)).body;
                if (c === u.g.HANDOFF_SUCCESS) {
                    if (null == O.Z.toURLSafe(o)) return t.replace(S.Z5c.CONNECTIONS_SUCCESS(T));
                    window.location = o;
                    return;
                }
                if (c === u.g.HANDOFF_ERROR || n >= 10) return t.replace(S.Z5c.CONNECTIONS_ERROR(T));
                e = setTimeout(() => {
                    L() && ((n += 1), r());
                }, 1000);
            }
            return (
                r(),
                () => {
                    null != e && clearTimeout(e);
                }
            );
        }, [L, t, T, y, N]);
    let j = i.useMemo(() => {
        if (null != T) return 'discord://'.concat(S.Z5c.CONNECTIONS(T), '/?').concat(r.toString());
    }, [T, r]);
    return null != T && C.Z.isSupported(T)
        ? w
            ? (0, o.jsx)(R, {
                  platformType: T,
                  deeplink: j,
                  onClick: () => {
                      x(!1), I(!0);
                  }
              })
            : (0, o.jsx)(b, { platformType: T })
        : null;
}
function b(e) {
    let { platformType: n } = e,
        t = C.Z.get(n);
    return (0, o.jsxs)(E.UV, {
        platformType: n,
        children: [
            (0, o.jsx)('div', {
                className: g.message,
                children: _.intl.format(_.t.AOKOe3, { name: t.name })
            }),
            (0, o.jsx)('div', {
                className: g.buttonContainer,
                children: (0, o.jsx)(s.Button, {
                    className: g.btn,
                    disabled: !0,
                    children: (0, o.jsx)(s.Spinner, { itemClassName: g.spinnerItem })
                })
            })
        ]
    });
}
function R(e) {
    let { deeplink: n, onClick: t, platformType: r } = e,
        c = C.Z.get(r);
    return (0, o.jsx)(E.UV, {
        platformType: r,
        children: (0, o.jsxs)('div', {
            className: g.buttonContainer,
            children: [
                (0, o.jsx)('div', {
                    className: g.message,
                    children: _.intl.format(_.t['6ig6i4'], { connectionName: c.name })
                }),
                (0, o.jsx)(s.Clickable, {
                    tag: 'a',
                    href: n,
                    onClick: t,
                    target: '_self',
                    children: (0, o.jsx)(s.Button, {
                        className: g.btn,
                        children: _.intl.string(_.t.flvacH)
                    })
                })
            ]
        })
    });
}
async function A(e) {
    let { platformType: n, code: t, state: r, openidParams: c, iss: o, handleCallbackResponse: i } = e;
    if (a.tq || v) return !1;
    try {
        let e = await N.default
            .request(S.Etm.CONNECTIONS_CALLBACK, {
                code: t,
                openid_params: c,
                iss: o,
                state: r,
                providerType: n
            })
            .finally(() => {
                N.default.disconnect();
            });
        return i(e), !0;
    } catch (e) {
        return !1;
    }
}
async function h(e, n, t, r, c) {
    try {
        return await f.Z.sessionHandoff(e, n, t, r, c), 0;
    } catch (e) {
        var o, i;
        if ((null == e ? void 0 : null === (o = e.body) || void 0 === o ? void 0 : o.code) === 10020) return 2;
        if ((null == e ? void 0 : null === (i = e.body) || void 0 === i ? void 0 : i.code) === 40001) return 3;
        return 1;
    }
}
async function D(e) {
    let { platformType: n, state: t, handleCallbackResponse: r, handleCallbackError: c, openidParams: o, code: i, iss: l } = e;
    try {
        let e = await f.Z.callback(
            n,
            {
                code: i,
                openid_params: o,
                state: t,
                iss: l
            },
            !v
        );
        return r(e), !0;
    } catch (e) {
        return c(), !0;
    }
}
((c = r || (r = {}))[(c.SUCCEEDED = 0)] = 'SUCCEEDED'), (c[(c.FAILED = 1)] = 'FAILED'), (c[(c.SHOULD_RETRY_WITH_CALLBACK = 2)] = 'SHOULD_RETRY_WITH_CALLBACK'), (c[(c.SHOULD_DEEP_LINK = 3)] = 'SHOULD_DEEP_LINK');
